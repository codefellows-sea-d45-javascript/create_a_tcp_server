var fs = require('fs');
var net = require('net');
var expect = require('chai').expect;
var server = require(__dirname + "/../tcp-server.js").server;
var request = require('superagent');

describe('the tcp server', function() {

  beforeEach(function(){
    server.listen('3000', function(){
      console.log('server up in mocha!');
    });
  });

  it('should log all requests to a log file', function(done){
  request.get('http://localhost:3000').end(function(err, res){
    expect(true).to.equal(false); //This test doesn't run
    //eventually write some fs code that tests if the log file is written to;


    });
  //If I try server.close(), the log file isn't written to, and the 'data' event on the socket doesn't fire
done();
  });
});
