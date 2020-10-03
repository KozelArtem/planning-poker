const bcrypt = require('bcryptjs');

const logger = require('../lib/log')('room-service');

const db = require('../db');

const {
  sequelize,
  Room,
  RoomSetting,
  RoomUser,
} = db;

const generateRoomHash = () => bcrypt.genSalt();

const getDefaultRoomSetting = () => ({
  type: RoomSetting.TYPES.SCRUM,
  is_closed: false,
  allow_skip: true,
});

const createRoomSetting = (roomId, input, transaction) => {
  const data = { room_id: roomId, ...input };

  return RoomSetting.create(data, { transaction });
};

const addUserToRoom = (room, userId, type, transaction) => {
  const data = {
    room_id: room.id,
    user_id: userId,
    type: type || RoomUser.TYPES.PLAYER,
  };

  return RoomUser.create(data, { transaction });
};

/**
 * @param {{title: string, type: string }} input
 * @param {number} userId
 */
const createRoom = async (input, userId) => {
  const {
    title,
    type,
  } = input;

  const t = await sequelize.transaction();

  try {
    const hash = await generateRoomHash();

    const data = {
      title,
      type,
      hash,
      admin_id: userId,
    };

    const room = await Room.create(data, { transaction: t });
    const roomSetting = getDefaultRoomSetting();

    await createRoomSetting(room.id, roomSetting, t);
    await addUserToRoom(room, userId, null, t);
    await t.commit();
  } catch (err) {
    logger.error('Error while crate room', { input, userId }, err);

    await t.roollback();

    throw err;
  }
};

module.exports = {
  createRoom,
};
