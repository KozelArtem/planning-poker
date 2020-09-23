const expressJwt = require('express-jwt');
const config = require('config');

const { findUserById } = require('../../services/resolvers');

const { signature } = config.jwt;

const getTokenFromHeader = (req) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
};

const isAuth = expressJwt({
  algorithms: ['HS256'],
  secret: signature,
  userProperty: 'token',
  getToken: getTokenFromHeader,
});

const loadUser = async (req, res, next) => {
  try {
    const decodedTokenData = req.token.data;
    const userRecord = await findUserById(decodedTokenData.id);

    req.user = userRecord;

    if (!userRecord) {
      return res.status(401).end('User not found');
    }

    return next();
  } catch (err) {
    return next(err);
  }
};

const requireAuth = [
  isAuth,
  loadUser,
];

module.exports = {
  isAuth,
  requireAuth,
};
