module.exports = async function (req, res, middlewares = [], callback) {
  console.log("Wrapped", middlewares, req.path)
  await callback(req, res)
}