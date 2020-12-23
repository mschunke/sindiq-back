const { Users } = require('../index');

exports.createUser = async (newUserObj) => {
  const newUser = await Users.create(newUserObj)
  return newUser
}