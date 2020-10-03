module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('rooms', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
    },
    hash: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
    },
    admin_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
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
  down: (queryInterface) => queryInterface.dropTable('rooms'),
};
