const model = require('../models/users')

// POST: /user
const create = async ({ body }, res) => {
  const user = await model.createUser(res, body)
  res.send(user)
}

// GET: /user/:id
const findOne = async ({ params }, res) => {
  const { id } = params
  const user = await model.findOneUser(res, id)
  res.send(user)
}

// PUT: /user/:id
const update = async ({ body, params }, res) => {
  const { id } = params
  const user = await model.updateUser(res, id, body)
  res.send(user)
}

// GET: /user/:id/posts
const findPosts = async ({ params }, res) => {
  const { id } = params
  const user = await model.findOneUser(res, id)
  const posts = await model.findPosts(res)
  const postsFromUser = posts.filter((el) => el.author === user.name)
  res.send(postsFromUser)
}

// GET: /user/:id/posts/:post
const findOnePost = async ({ params }, res) => {
  const { id, post } = params
  const user = await model.findOneUser(res, id)
  const posts = await model.findOnePost(res, post)
  const postFromUser = (posts.author === user.name) ? posts : {}
  res.send(postFromUser)
}

module.exports = {
  create,
  findOne,
  update,
  findPosts,
  findOnePost,
}
