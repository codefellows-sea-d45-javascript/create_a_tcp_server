var expect = require('chai').expect;
var server = require('../server');
var request = require('superagent');

describe('use GET request to write log file', function() {
  it('should write a file to the output dir', function(done) {
    request.get('http://localhost:3000/');
    expect(server.bytesWrittenToDisk).to.not.equal(0);
    done();
  });
});


