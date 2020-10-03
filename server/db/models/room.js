module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      hash: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      admin_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          table: 'users',
          key: 'id',
        },
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
      tableName: 'rooms',
    });

  return Room;
};
