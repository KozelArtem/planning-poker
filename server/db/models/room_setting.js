module.exports = (sequelize, DataTypes) => {
  const RoomSetting = sequelize.define('RoomSetting',
    {
      room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          table: 'rooms',
          key: 'id',
        },
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      is_closed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      allow_skip: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
      tableName: 'room_settings',
    });

  RoomSetting.TYPES = {
    SCRUM: 'scrum',
  };

  return RoomSetting;
};
