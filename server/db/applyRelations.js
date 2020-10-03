const applyRelations = (db) => {
  // db.Room.hasOne(db.User, {
  //   foreignKey: 'admin_id',
  //   as: 'admin',
  // });
  db.Room.hasOne(db.RoomSetting, {
    foreignKey: 'room_id',
    as: 'room_setting',
  });
  db.Room.hasMany(db.RoomUser, {
    foreignKey: 'room_id',
    as: 'users',
  });
  // db.RoomUser.hasOne(db.User, {
  //   foreignKey: 'user_id',
  //   as: 'user',
  // });

  return db;
};

module.exports = applyRelations;
