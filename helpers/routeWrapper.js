const jwt = require('jsonwebtoken')

module.exports = async function (req, res, middlewares = [], callback) {
  try {
    const token = req.headers.authorization ? req.headers.authorization.slice(7, req.headers.authorization.length) : null
    const validJwt = jwt.verify(token, process.env.JWT_SECRET)

    if (validJwt) {
      const tokenData = jwt.decode(token, { json: true })
      console.log(tokenData)
      await callback(req, res)  
    } else {
      res.status(401).send("Token not validated")
    }
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      res.status(401).send("Session expired")
    } else if (error.name === "JsonWebTokenError") {
      res.status(401).send("Invalid Token")
    } else {
      console.log(error.name)
      res.status(500).send("Server Error")
    }
  }
}