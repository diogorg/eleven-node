const chai = require('chai')
const http = require('chai-http')
const config = require('./config')

chai.use(http)

const newUser = {
  name: 'New User',
  email: 'aaa@aaa.com',
  avatar: 'avatar',
  password: 'password123',
}

describe('CONTROLER USERS', () => {
  let newUserId
  it('POST: /user', (done) => {
    chai
      .request(config.server)
      .post('/user')
      .set(config.setRequest)
      .send(newUser)
      .end((_, res) => {
        newUserId = res.body.id
        chai.expect(res.error).to.be.equals(false)
        chai.expect(res.status).to.be.equals(200)
        done()
      })
  })
  it('GET: /user/:id', (done) => {
    chai
      .request(config.server)
      .get(`/user/${newUserId}`)
      .set(config.setRequest)
      .end((_, res) => {
        chai.expect(res.error).to.be.equals(false)
        chai.expect(res.status).to.be.equals(200)
        done()
      })
  })
  it('PUT: /user/:id', (done) => {
    const updateUser = newUser
    updateUser.name = 'updated'
    chai
      .request(config.server)
      .put(`/user/${newUserId}`)
      .set(config.setRequest)
      .send(updateUser)
      .end((_, res) => {
        chai.expect(res.error).to.be.equals(false)
        chai.expect(res.status).to.be.equals(200)
        done()
      })
  })

  it('GET: /user/:id/posts', (done) => {
    chai
      .request(config.server)
      .get('/user/1/posts')
      .set(config.setRequest)
      .end((_, res) => {
        chai.expect(res.error).to.be.equals(false)
        chai.expect(res.status).to.be.equals(200)
        done()
      })
  })

  it('GET: /user/:id/posts/:post', (done) => {
    chai
      .request(config.server)
      .get('/user/1/posts/1')
      .set(config.setRequest)
      .end((_, res) => {
        chai.expect(res.error).to.be.equals(false)
        chai.expect(res.status).to.be.equals(200)
        done()
      })
  })
}).timeout(config.timeOut)
