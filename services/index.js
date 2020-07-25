const express = require('express')
const bodyParser = require('body-parser')
const { port } = require('../config')
const { routes } = require('../utils')
const { apiPrefix } = require('../utils')
const { send } = require('./send')
const { checkAPIs } = require('./check')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())

const start = async () => {
  await checkAPIs()
  const gets = routes.filter((el) => el.method === 'get')
  gets.forEach((route) => {
    app.get(`${apiPrefix}${route.path}`, (req, res) => {
      send(route.handler, req, res)
      console.log(`= GET: [${route.path}] =`)
    })
  })
  const posts = routes.filter((el) => el.method === 'post')
  posts.forEach((route) => {
    app.post(`${apiPrefix}${route.path}`, (req, res) => {
      send(route.handler, req, res)
      console.log(`= POST: [${route.path}] =`)
    })
  })
  const puts = routes.filter((el) => el.method === 'put')
  puts.forEach((route) => {
    app.put(`${apiPrefix}${route.path}`, (req, res) => {
      send(route.handler, req, res)
      console.log(`= PUT: [${route.path}] =`)
    })
  })

  app.listen(port, () => {
    console.log('\x1b[32m')
    console.log('======================================================')
    console.log('Server Started')
    console.log(`Listening: ${port}`)
    console.log('======================================================\n')
    console.log('\x1b[0m')
  })
}

module.exports = {
  start,
}
