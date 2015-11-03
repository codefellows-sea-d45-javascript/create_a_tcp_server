'use strict';

var chai = require('chai');
var fs = require('fs');
var expect = chai.expect;
var chaiHttp = require('chai-http');
var server = require('./tcp_server');

chai.use(chaiHttp);

describe('tcp server', function() {
  var initialCount;
  var newCount;

  before(function(done) {
    initialCount = fs.readdirSync(__dirname + '/../log');
    done();
  });
  it('should log request', function(done) {
    chai.request('localhost:3000')
    .get('/test')
    .end(function(err, res) {
      newCount = fs.readdirSync(__dirname + '/../log');
      expect(newCount.length).to.be.above(initialCount.length);
    });

    done();
  });
});
