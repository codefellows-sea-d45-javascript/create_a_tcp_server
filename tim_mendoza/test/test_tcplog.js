var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
var net = require('net');
var fs = require('fs');
var tcpLog = require(__dirname + '/../lib/tcplog');

chai.use(chaiHttp);

describe('newServer function', function() {
  it('should output a TCP request to file', function(done) {
    var file = __dirname + '/testfile.log';  
    var server = tcpLog.newServer('3000', file);
    var time = Date.now().toString();

    chai.request(server) 
      .get('/test ' + time)
      .end(function(err, res){});

    server.on('finished', function() {
      fs.readFile(file, function(err, data) {
        if (err) throw err;
        var output = data.toString().split('\n');
        expect(output[0]).to.equal('GET /test%20' + time + ' HTTP/1.1\r');
        done();
      });
    });
  });
});