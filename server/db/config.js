const config = require('config');

const {
  user,
  password,
  database,
  host,
  port,
  dialect,
  dialectOptions,
} = config.database;

module.exports = {
  username: user,
  password,
  database,
  host,
  port,
  dialect,
  dialectOptions,
};
