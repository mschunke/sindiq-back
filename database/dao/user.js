const { Users } = require('../index');

exports.createUser = async (query) => {
  try {
    const newUser = await Users.create(query)
    return newUser
  } catch (error) {
    console.log(error.message)
    return false
  }
}