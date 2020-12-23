const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
const wrapper = require('../helpers/routeWrapper')

router.use(bodyParser.json())

const AuthCtrl = require('../controllers/auth')

router.post('/login', (req, res) => AuthCtrl.login(req, res))

router.post('/logout', (req, res) => wrapper(req, res, [], AuthCtrl.logout))

module.exports = router;