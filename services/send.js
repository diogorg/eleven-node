const send = (handler, req, res) => {
  const [controller, action] = handler.split('.')
  const obj = require(`../api/controllers/${controller}`)
  const { [action]: func = () => {
    console.log(`BAD REQUEST: ${controller}.${action}`)
  } } = obj
  return func(req, res)
}

module.exports = {
  send,
}
