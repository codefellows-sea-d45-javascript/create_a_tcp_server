var net = require('net');
var expect = require('chai').expect;
var server = require(__dirname + '/../server.js');
// var request = require('superagent');

describe('the tcp server', function() {
  beforeEach(function() {
    server.listen('4000', function() {
      console.log('server up-via mocha');
    });
  });

  it('Should do something', function(done) {
    request.get('http://localhost:4000').end(function(err, res){
      expect(true).to.equal(false);
    done();
    });
  });
});

