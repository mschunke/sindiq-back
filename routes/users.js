const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.json())
const UsersCtrl = require('../controllers/users')

router.post('/create', (req, res) => {
  UsersCtrl.createUser(req, res)
})

module.exports = router;