var mocha = require('mocha');
var chai = require('chai');
chai.use(require('chai-http'));

if(!global.Promise) {
  var q = require('q');
  chai.request.addPromises(q.Promise);
}

describe('server.js', function() {
  it('should make a request to the server', function() {
    chai.request('http://localhost:3000').get('/')
      .then(function(res) {
        expect(res).to.have.status(200);
      }).catch(function(err) {throw err;});
  });

  it('should make an html response', function() {
    chai.request('http://localhost:3000').get('/')
      .then(function(res) {
        expect(res).to.be.html();
      });
  });
});