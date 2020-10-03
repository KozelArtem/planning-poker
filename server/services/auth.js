const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');

const db = require('../db');

const {
  User,
} = db;

/**
 * @typedef {Object} User
 * @property {String} email
 * @property {String} password
 * @property {String} firstName
 * @property {String} lastName
 * @property {String} imageUrl
 * @property {Array<string>} roles
*/

const toResponse = (user) => ({
  email: user.email,
  firstName: user.first_name,
  lastName: user.last_name,
  imageUrl: user.image_url,
  roles: user.roles.split(','),
});

/**
 * @param {User} user
*/
const generateJWT = (user) => {
  const data = {
    id: user.id,
    email: user.email,
    roles: user.roles,
  };

  const { signature, expiration } = config.jwt;

  return jwt.sign({ data }, signature, { expiresIn: expiration });
};

const verifyPassword = (password, dbHash) => bcrypt.compare(password, dbHash);

/**
 * @param {User} userData
*/
const signUpUser = async (userData) => {
  const {
    email,
    password,
    firstName,
    lastName,
    imageUrl,
    roles,
  } = userData;

  const data = {
    email,
    password,
    roles: roles.join(','),
    first_name: firstName,
    last_name: lastName,
    image_url: imageUrl,
  };

  const user = await User.create(data);

  return {
    user: toResponse(user),
    token: generateJWT(user),
  };
};

/**
 * @param {String} email
 * @param {String} password
 * @return {Promise<({user:User, token:String}|null)>}
*/
const loginUser = async (email, password) => {
  const userRecord = await User.findOne({ email });

  if (!userRecord) {
    throw new Error(`User not found email: ${email}`);
  }

  const correctPassword = await verifyPassword(password, userRecord.password);

  if (!correctPassword) {
    throw new Error(`Incorrect password email: ${email}`);
  }

  return {
    user: toResponse(userRecord),
    token: generateJWT(userRecord),
  };
};

module.exports = {
  signUpUser,
  loginUser,
};
