require('dotenv').config()
const { Sequelize } = require('sequelize');
const { Users } = require('./models/index');

const sequelize = new Sequelize({
  host: process.env.DB_URI,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  dialect: "mysql",
  database: 'sindiq',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

exports.connectDb = async function() {
  try {
    await sequelize.authenticate()
    return true
  } catch (error) {
    console.log(error.message)
    return false
  }
}

exports.Db = sequelize
exports.Users = Users(sequelize)