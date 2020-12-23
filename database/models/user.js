const { DataTypes } = require('sequelize');

exports.UserModel = (sequelize) => sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
    field: 'id',
  },
  firstName: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'str_first_name',
  },
  lastName: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'str_last_name',
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
    field: 'str_email'
  },
  password: {
    type: DataTypes.STRING(300),
    allowNull: false,
    field: 'str_password'
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'dte_created_at'
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'dte_updated_at'
  },
  updatedUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'int_updated_user'
  }
})