var express = require("express");
var router = express.Router();

const debugRoutes = require('./debug')
const ErrorRoutes = require('./error')
const UsersRoutes = require('./users')

router.use('/debug', debugRoutes)
router.use('/users', UsersRoutes)

router.use('*', ErrorRoutes)

module.exports = router;