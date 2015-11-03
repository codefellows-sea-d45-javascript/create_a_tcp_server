'use strict';

var request = require('superagent');
var expect = require('chai').expect;
var fs = require('fs');

describe('tcp server responding', function() {
  var logfiles = [];

  before(function(done) {
    fs.readdir(__dirname + '/../log/', function(err, files) {
      if (err) throw err;

      logfiles = files;
      done();
    });
  });

  after(function() {
    logfiles = [];
  });

  it('should write to file', function(done) {
    request
      .post('localhost:3000')
      .send({'tesing': '1, 2, 3'})
      .end(function(res) {
        fs.readdir(__dirname + '/../log/', function(err, files) {
          if (err) throw err;

          expect(files.length).to.eql(logfiles.length + 1);

          done();
        });
      });

  });
});
