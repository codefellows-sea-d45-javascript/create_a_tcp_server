var expect = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);


var server = require(__dirname + '/../server');

describe('an http request', function() {
  it('should have status 200', function(done) {
    chai.request('http://localhost:3000')
      .get('/')
      .then(function (res) {
        console.log(res);
        expect(res).to.have.status(200);
      });  
    done();
  });
});