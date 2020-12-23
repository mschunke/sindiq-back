const express = require("express");
const router = express.Router();

router.get('*', (req, res) => {
  res.status(404).send("NOT FOUND")
})

router.post('*', (req, res) => {
  res.status(404).send("NOT FOUND")
})

router.put('*', (req, res) => {
  res.status(404).send("NOT FOUND")
})

module.exports = router;