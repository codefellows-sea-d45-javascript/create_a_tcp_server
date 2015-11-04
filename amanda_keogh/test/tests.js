'use strict'

var chai = require('chai');
var chaiHttp = require('chai-http');
var fs = require('fs');

describe('the server', function() {
  it('should save the request to a file', function() {
    chaiHttp.request('http://localhost:3000').get('/').end(function(err, res) {
      expect(err).to.be.null;
    })
  })
})
