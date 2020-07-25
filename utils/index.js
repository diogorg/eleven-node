const apiPrefix = '/api/v1'
const protocol = 'http'
const host = 'localhost'
const timeout = 10000

const routes = [
  {
    method: 'get',
    path: '/products',
    handler: 'products.find',
  },
  {
    method: 'get',
    path: '/products/:id',
    handler: 'products.findOne',
  },
  {
    method: 'post',
    path: '/user',
    handler: 'users.create',
  },
  {
    method: 'get',
    path: '/user/:id',
    handler: 'users.findOne',
  },
  {
    method: 'put',
    path: '/user/:id',
    handler: 'users.update',
  },
  {
    method: 'get',
    path: '/user/:id/posts',
    handler: 'users.findPosts',
  },
  {
    method: 'get',
    path: '/user/:id/posts/:post',
    handler: 'users.findOnePost',
  },
]

const configGet = {
  timeout,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
}

const configPost = {
  timeout,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/x-www-form-urlencoded',
  },
}

const requests = {
  products: `${protocol}://${host}:3002/products`,
  user: `${protocol}://${host}:3002/user`,
  posts: `${protocol}://${host}:3001/posts`,
}

module.exports = {
  routes,
  apiPrefix,
  configGet,
  configPost,
  requests,
}
