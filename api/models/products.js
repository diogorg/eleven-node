const axios = require('axios')
const { config, requests } = require('../../utils')
const { throwError } = require('./index')

const findProducts = async (res) => {
  let data
  await axios
    .get(requests.products, config)
    .then((response) => {
      data = response.data
    }).catch((err) => {
      throwError(res, err)
    })
  return data
}

const findOneProduct = async (res, id) => {
  let data
  await axios
    .get(`${requests.products}/${id}`, config)
    .then((response) => {
      data = response.data
    }).catch((err) => {
      throwError(res, err)
    })
  return data
}

module.exports = {
  findProducts,
  findOneProduct,
}
