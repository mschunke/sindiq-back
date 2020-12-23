const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UsersDao = require('../database/dao/user')

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await UsersDao.findUser({email})

    const passwordCheck = await bcrypt.compare(password, user.password)

    if (passwordCheck) {
      token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "2h"})
      const response = {
        success: true,
        token,
      }
      res.cookie('sindiq-auth', token).json(response)
    } else {
      res.json({success: false})
    }
  
  } catch (error) {
    console.log(error)  
    const response = {
      success: false,
      error: error.errors[0] ? error.errors[0].message : error.message
    }
    res.json(response)
  }
}

async function logout(req, res) {
  try {
    const response = {
      success: true,
      data: user
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
  login,
  logout,
}