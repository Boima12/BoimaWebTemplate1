const { StatusCodes } = require('http-status-codes')

const getTower = async (req, res) => {
  res.status(StatusCodes.OK).send('<h1>Welcome page</h1>')
}

module.exports = {
  getTower
}