const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const expect = require('chai').expect;

chai.use(chaiHttp);

describe('Hello', () => {
  // Test the /GET route
  describe('/GET data', () => {
    it('it should GET an empty array', (done) => {
      chai.request(server)
      .get('/hello')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.text).to.equal('[]');
        done();
      });
    });
  });

  // Test the /POST route
  describe('/POST data', () => {
    it('it should POST a {"data": "hello!"}', (done) => {
      chai.request(server)
      .post('/hello')
      .send('{"data": "hello!"}')
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Data successfully added!');
        done();
      });
    });
  });

  describe('/GET data', () => {
    it('it should Should return {"data": "hello!"}', (done) => {
      chai.request(server)
      .get('/hello')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.text).to.equal('{"data": "hello!"}');
        done();
      });
    });
  });

  // Test the /DELETE route
  describe('/DELETE data', () => {
    it('it should DELETE {"data": "hello!"}', (done) => {
      chai.request(server)
        .delete('/hello')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Data was deleted successfully');
          done();
        });
    });

    describe('/GET data', () => {
      it('it should Should resolve to a 404', (done) => {
        chai.request(server)
        .get('/hello')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.have.property('message').eql('Not Found');
          done();
        });
      });
    });
  });
});