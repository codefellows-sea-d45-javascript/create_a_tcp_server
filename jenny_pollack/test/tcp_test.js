var expect = require('chai').expect;
var fs = require('fs'); 
var tcp = require(__dirname + '/../lib/tcp_server'); 
var request = require('superagent');
var net = require('net'); 

var requestsFilesBefore;
var requestsFilesAfter;

describe('a request to the tcp server', function() {

  before(function(done) {
    requestsFilesBefore = fs.readdirSync(__dirname + '/../logs/').length;
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

  it('should have written the file after the request', function() {
    requestsFilesAfter = fs.readdirSync(__dirname + '/../logs/').length;
    expect(requestsFilesBefore).to.eql(requestsFilesAfter - 1);
  }); 
});


