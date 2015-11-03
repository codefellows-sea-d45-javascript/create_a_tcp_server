var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('send a valid GET request', function() {
  it('should respond with status 200', function(done) {
    chai.request('http://localhost:3000')
      .get('/')
      .then(function(res) {
        expect(res).to.have.status(200);
      })
      .catch(function(err) {
        throw err;
      });
      done();
  });
});


