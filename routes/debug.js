var express = require("express");
var router = express.Router();

router.use((req, res, next) => {
  console.log(new Date())
  next()
})

router.get('/', (req, res) => {
  if (req.body) {
    res.json(req.body)
  } else {
    res.json(req.query)
  }
})

module.exports = router;