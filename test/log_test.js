var expect = require('chai').expect;
var request = require('superagent');
var fs = require('fs');

var serverLog = require(__dirname + '/../server.js')

describe('the server is writing log files', function() {
  var logfiles = [];

  before(function(unicorns) {
    fs.readdir(__dirname + '/../logs/', function(err, files) {
      if (err) throw err;

      logfiles = files;
      unicorns();
    });
  });

  it('should write a file', function(unicorns) {
    request
      .post('localhost:3000')
      .send({'test': 'this is a test'})
      .end(function() {
        expect(logfiles).to.eql(false);
        unicorns();
      });
  });
});
