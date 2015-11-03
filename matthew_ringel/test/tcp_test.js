var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

var appServer = 'http://localhost:3000';

describe('an http request', function() {
  it('should have a status of 200', function() {
    chai.request(appServer)
      .get('/')
      .then(function (res) {
        console.log(res);
        expect(res).to.have.status(200);
      });
  });
});
