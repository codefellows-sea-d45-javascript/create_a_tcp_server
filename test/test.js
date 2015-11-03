var server = require(__dirname + '/../patci_tcp_server');
var chai = require('chai');
var fs = require('fs');

var writeStream = server.writeStream;


describe('the write stream function', function() {

  before(function(done) {
    fs.readFile(writeStream, function(err){})
    done();
  });
  it('should save a .txt file', function (done) {
    expect(writeStream).to.exist;
  })
})
