var expect = require('chai').expect;
var net = require('net');
var fs = require('fs');

var beforeCount;
var afterCount;

describe('a tcp connection', function() {
  before(function() {
    fs.readdir('./file', function(err, files) {
      beforeCount = files.length;
    });
  });
  
  it('should write a new file', function(done) {
    var client = net.connect({ port:3000 },
      function() {
        client.write('Here is some data');
        fs.readdir('./file', function(err, files) {
          afterCount = files.length - 1;
        });
      });
    client.on('data', function(data) {
      expect(beforeCount).to.be.eql(afterCount);
      client.end();
      done();
    });
  });
});

