const throwError = (res, { response, message }) => {
  res
    .status(response.status)
    .send({ error: message })
  throw new Error(message)
}

module.exports = {
  throwError,
}