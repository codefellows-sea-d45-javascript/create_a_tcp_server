var fs = require('fs');
var net = require('net');
var expect = require('chai').expect;
var server = require(__dirname + "/../tcp-server.js").server;

describe('the tcp server', function() {
  var logstringBefore = "";
  var logstringAfter = "";

  before(function(done){
    fs.readFile('datalog.log', function(err, data){
      logstringBefore = data.toString();
      done();
    });
  });

  it('should log all requests to a log file and change it', function(done){
    server.listen('3000', function(){
    var requestString = "Requested on: " + new Date().toString();
      console.log('server up in mocha!');
      fs.readFile('datalog.log', function(err, data){
        logstringAfter = data.toString();
        expect(logstringAfter).to.include(requestString);
        expect(logstringBefore).to.not.equal(logstringAfter);
        done();
       });
    });
  });
});
