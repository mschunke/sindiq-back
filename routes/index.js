var express = require("express");
var router = express.Router();

const debugRoutes = require('./debug')

router.use('/debug', debugRoutes)

router.get('/', (req, res) => {
  console.log("OK")
  res.send("OK")
})

module.exports = router;