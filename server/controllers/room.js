const serviceRoom = require('../services/room');

const logger = require('../lib/log')('room-ctrl');

const {
  createRoom,
} = serviceRoom;

const create = async (req, res, next) => {
  const { user, body } = req;

  try {
    await createRoom(body, user.id);

    res.status(201).send();
  } catch (err) {
    logger.error('Error while sign up', err);

    next(err);
  }
};

module.exports = {
  create,
};
