module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('stories', {
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
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    link: {
      type: Sequelize.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    estimated: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: null,
    },
    estimate_time: {
      type: Sequelize.TIME,
      allowNull: true,
      defaultValue: null,
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
  down: (queryInterface) => queryInterface.dropTable('stories'),
};
