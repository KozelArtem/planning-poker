const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 12;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        defaultValue: '',
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      roles: {
        type: DataTypes.STRING(255),
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      image_url: {
        type: DataTypes.STRING(150),
        allowNull: true,
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
      tableName: 'users',
    });

  User.beforeCreate(async (model) => {
    const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);

    if (model.password) {
      const hash = await bcrypt.hash(model.password, salt);

      model.password = hash;
    }
  });

  return User;
};
