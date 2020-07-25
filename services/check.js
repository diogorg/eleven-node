const axios = require('axios')
const { config, requests } = require('../utils')
const { APIError } = require('./error')

const checkBlog = async () => {
  let ok
  await axios
    .get(`${requests.posts}`, config)
    .then((response) => {
      ok = (response.status === 200)
    }).catch(() => {
      ok = false
    })
  return ok
}

const checkDataLake = async () => {
  let ok
  await axios
    .get(`${requests.products}`, config)
    .then((response) => {
      ok = (response.status === 200)
    }).catch(() => {
      ok = false
    })
  return ok
}

const checkAPIs = async () => {
  const dataLake = await checkDataLake()
  const blog = await checkBlog()
  if (!dataLake || !blog) APIError()
}

module.exports = {
  checkAPIs,
}
