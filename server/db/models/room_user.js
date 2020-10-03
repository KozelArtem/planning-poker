module.exports = (sequelize, DataTypes) => {
  const RoomUser = sequelize.define('RoomUser',
    {
      room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          table: 'rooms',
          key: 'id',
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          table: 'users',
          key: 'id',
        },
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
    },
    {
      timestamps: true,
      paranoid: true,
      underscored: true,
      tableName: 'room_users',
    });

  return RoomUser;
};
