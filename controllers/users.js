const bcrypt = require('bcrypt')
const UsersDao = require('../database/dao/user')

async function createUser(req, res) {
  try {
    const { firstName, lastName, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUserObj = {
      firstName, 
      lastName, 
      email, 
      password: hashedPassword,
      updatedUser: 0,
    }
    const newUser = await UsersDao.createUser(newUserObj)
  
    const response = {
      success: true,
      data: newUser
    }
    res.json(response)
  } catch (error) {
    console.log(error)  
    const response = {
      success: false,
      error: error.errors[0] ? error.errors[0].message : error.message
    }
    res.json(response)
  }
}

module.exports = {
  createUser,
}