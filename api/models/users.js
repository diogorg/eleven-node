const axios = require('axios')
const { config, requests } = require('../../utils')
const { throwError } = require('./index')

const createUser = async (res, body) => {
  let data
  await axios
    .post(`${requests.user}`, body, config)
    .then((response) => {
      data = response.data
    }).catch((err) => {
      throwError(res, err)
    })
  return data
}

const findOnePost = async (res, id) => {
  let data
  await axios
    .get(`${requests.posts}/${id}`, config)
    .then((response) => {
      data = response.data
    }).catch((err) => {
      throwError(res, err)
    })
  return data
}

const findOneUser = async (res, id) => {
  let data
  await axios
    .get(`${requests.user}/${id}`, config)
    .then((response) => {
      data = response.data
    }).catch((err) => {
      throwError(res, err)
    })
  return data
}

const findPosts = async (res) => {
  let data
  await axios
    .get(`${requests.posts}/`, config)
    .then((response) => {
      data = response.data
    }).catch((err) => {
      throwError(res, err)
    })
  return data
}

const updateUser = async (res, id, body) => {
  let data
  await axios
    .put(`${requests.user}/${id}`, body, config)
    .then((response) => {
      data = response.data
    }).catch((err) => {
      throwError(res, err)
    })
  return data
}

module.exports = {
  createUser,
  findOnePost,
  findOneUser,
  findPosts,
  updateUser,
}
