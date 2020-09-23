const db = require('../db');

const findUserById = (id) => db.User.findByPk(id);

module.exports = {
  findUserById,
};
