const logger = require('../../lib/log')('room-middleware');

const { findRoomByHash } = require('../../services/resolvers');

const loadRoomByHash = async (req, res, next) => {
  try {
    const { hash } = req.params;
    const room = await findRoomByHash(hash);

    req.room = room;

    if (!room) {
      logger.error('Can not found room by hash', { hash });

      return res.status(401).end('User not found');
    }

    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  loadRoomByHash,
};
