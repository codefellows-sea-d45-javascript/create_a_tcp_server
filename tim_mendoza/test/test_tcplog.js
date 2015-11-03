var mocha = require('mocha');
var expect = chai.expect;
var net = require('net');
var fs = require('fs');
var tcpLog = require(__dirname + '/../lib/tcplog');

describe('newServer function', function() {
  it('should output a TCP request to file', function(done) {
    var server = tcpLog.newServer('3000');
    var socket = net.connect(3000);

    server.on('finished', function(){
      fs.readdir(__dirname + '/../', function(err, files) {
        var logFiles = [];

        files.forEach(function(currentValue){
          if (currentValue.slice(-4) === '.log') logFiles.push(currentValue);
        });

        var filename = logFiles[logFiles.length - 1];

        fs.readFile(__dirname + '/../' + filename, function(err, data) {
          if (err) throw err;
          var output = data.toString().split('\n');
          expect(output[0]).to.equal('GET /test');
          done();
        });
      });
    });

    socket.write('GET /test');

  });
});