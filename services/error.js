const APIError = () => {
  console.error('\x1b[31m')
  console.error('======================================================')
  console.error('Error: Servers not started')
  console.error('Please, before use this API run:')
  console.error('json-server --watch data/blog.json --port 3001')
  console.error('json-server --watch data/datalake.json --port 3002')
  console.error('======================================================')
  console.error('\x1b[0m')
  process.exit(500)
}

module.exports = {
  APIError,
}
