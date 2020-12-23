var express = require("express");
var router = express.Router();

const AuthRoutes = require('./auth')
const ErrorRoutes = require('./error')
const UsersRoutes = require('./users')

router.use('/auth', AuthRoutes)
router.use('/users', UsersRoutes)

router.use('*', ErrorRoutes)

module.exports = router;