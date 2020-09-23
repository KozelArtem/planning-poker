/* eslint-disable import/no-dynamic-require */
const fs = require('fs');
const Sequelize = require('sequelize');
const path = require('path');
const config = require('config');

const logger = require('../../lib/log')('db');

const applyRelations = require('../applyRelations');

const basename = path.basename(module.filename);
const db = {};

const {
  database,
  user,
  password,
  host,
  dialect,
  dialectOptions,
  poolSettings,
  benchmark,
} = config.database;

const sequelize = new Sequelize(
  database,
  user,
  password,
  {
    host,
    dialect,
    dialectOptions,
    pool: poolSettings,
    benchmark,
    logging(s, timing) {
      if (s.indexOf('Exec') === 0) {
        const p0 = s.indexOf('(');
        const p1 = s.indexOf(')');
        const trx = s.substring(p0 + 1, p1);
        const t = s.slice(p1 + 3);
        logger.info(t, {
          timing,
          trx: trx === 'default' ? undefined : trx,
        });
      } else {
        logger.info(s, { timing });
      }
    },
  },
);

fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    // eslint-disable-next-line global-require
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.connect = (callback) => callback();

db.disconnect = sequelize.close.bind(sequelize);

db.transaction_photo = (transaction) => 'id name finished savepoints options'
  .split(' ')
  .reduce((accum, item) => {
    accum[item] = transaction[item];
    return accum;
  }, {});

db.transaction = (options, autoCallback) => {
  const cb = typeof options === 'function' ? options : autoCallback;
  const opts = typeof options === 'function' ? {} : options;
  return db.sequelize.transaction(opts, (t) => {
    t.inspect = () => `TRANSACTION${JSON.stringify(db.transaction_photo(this))}`;
    return cb(t);
  });
};

module.exports = applyRelations(db);
