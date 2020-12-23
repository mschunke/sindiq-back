const { UserModel } = require('./user');

exports.Users = (sequelize) => {
  const User =  UserModel(sequelize)

  return User
}