const { signUpUser } = require('../services/auth');
const serviceAuth = require('../services/auth');

const logger = require('../lib/log')('auth-ctrl');

const {
  loginUser,
} = serviceAuth;

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const data = await loginUser(email, password);

    res.send(data);
  } catch (err) {
    logger.error('Error while login', err);

    next(err);
  }
};

const signUp = async (req, res, next) => {
  try {
    const data = await signUpUser(req.body);

    res.send(data);
  } catch (err) {
    logger.error('Error while sign up', err);

    next(err);
  }
};

const signUpAnonymous = async (req, res, next) => {
  const inputData = {
    ...req.body,
    roles: ['anonymous'],
  };

  try {
    const data = await signUpUser(inputData);

    res.send(data);
  } catch (err) {
    logger.error('Error while sign up anonymous', err);

    next(err);
  }
};

module.exports = {
  login,
  signUp,
  signUpAnonymous,
};
