module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story',
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
      link: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      estimated: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
      },
      estimate_time: {
        type: DataTypes.TIME,
        allowNull: true,
        defaultValue: null,
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
      tableName: 'stories',
    });

  return Story;
};
