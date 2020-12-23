const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
const wrapper = require('../helpers/routeWrapper')

router.use(bodyParser.json())

const UsersCtrl = require('../controllers/users')

router.post('/create', (req, res) => wrapper(req, res, [], UsersCtrl.createUser))

router.get('/get', (req, res) => wrapper(req, res, [], UsersCtrl.getUser))

module.exports = router;