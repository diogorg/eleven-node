const { protocol, host, port } = require('../config')
const { apiPrefix } = require('../utils')

const setRequest = {
  Connection: 'keep-alive',
  Accept: 'application/json',
  'Content-Type': 'application/json',
}
const server = `${protocol}://${host}:${port}${apiPrefix}`
const timeOut = 5000

module.exports = { setRequest, server, timeOut }
