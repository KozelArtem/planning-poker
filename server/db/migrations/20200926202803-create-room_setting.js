module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('room_settings', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    room_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'rooms',
        key: 'id',
      },
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
    },
    is_closed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    allow_skip: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    deleted_at: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('room_settings'),
};
