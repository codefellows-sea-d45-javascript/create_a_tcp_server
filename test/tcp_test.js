var server = require(__dirname + '/../rest.js');
var mocha = require('mocha');
var agent = require('superagent');
var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('an http request', function() {
  it('should have status 200', function() {
    chai.request('http://localhost:3000')
      .get('/')
      .then(function (res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});
