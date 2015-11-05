'use strict';

var fs = require('fs');
var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('tcp server', function() {
  var initialCount;
  var newCount;

 before(function(done) {
   initialCount = fs.readdirSync(__dirname);
    done();
  });
  it('should log request', function(done) {
    chai.request('localhost:3000')
    .get('/test')
    .end(function(err, res) {
      newCount = fs.readdirSync(__dirname);
      expect(newCount.length).to.be.above(initialCount.length);
    });
    done();
  });
});