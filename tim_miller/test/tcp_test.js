var server = require(__dirname + '/../tcpServer.js');
var mocha = require('mocha');
var expect = require('chai').expect;
var fs = require('fs');
var net = require('net');


var requestsFilesBefore;
var requestsFilesAfter;

describe('a request to the server', function() {

  before(function(done) {
    requestsFilesBefore = fs.readdirSync(__dirname + '/../requests/').length;
    var client = net.createConnection({port: 3000});
    client.on('connect', function() {
      client.write('test', function(){
        client.end();
      });
    });
    client.on('end', function() {
      done();
    });
  });

  it('should have wrote file after the request', function() {
    requestsFilesAfter = fs.readdirSync(__dirname + '/../requests/').length;
    expect(requestsFilesBefore).to.eql(requestsFilesAfter - 1);
  });
});

