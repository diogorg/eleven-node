const chai = require('chai')
const http = require('chai-http')
const config = require('./config')

chai.use(http)

describe('CONTROLLER PRODUCTS', () => {
  it('GET: /products', (done) => {
    chai
      .request(config.server)
      .get('/products')
      .set(config.setRequest)
      .end((_, res) => {
        chai.expect(res.error).to.be.equals(false)
        chai.expect(res.status).to.be.equals(200)
        done()
      })
  })
  it('GET: /products/:id', (done) => {
    chai
      .request(config.server)
      .get('/products/1')
      .set(config.setRequest)
      .end((_, res) => {
        chai.expect(res.error).to.be.equals(false)
        chai.expect(res.status).to.be.equals(200)
        done()
      })
  })
}).timeout(config.timeOut)
