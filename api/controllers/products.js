const model = require('../models/products')

// GET: /products
const find = async (_, res) => {
  const products = await model.findProducts(res)
  res.send(products)
}

// GET: /products/:id
const findOne = async (req, res) => {
  const { id } = req.params
  const product = await model.findOneProduct(res, id)
  res.send(product)
}

module.exports = {
  find,
  findOne,
}
