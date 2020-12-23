const { Users } = require('../index');

exports.createUser = async (newUserObj) => {
  const newUser = await Users.create(newUserObj)
  return newUser
}

exports.findUser = async (query, opts = {}) => {
  const user = await Users.findOne({where: query, ...opts})
  return user
}

exports.findUsers = async (query, opts = {}) => {
  const user = await Users.findAll({where: query, ...opts})
  return user
}