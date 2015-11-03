'use strict';

var fs = require('fs');

var expect = require('chai').expect;
var tcpServer = require(__dirname + '/../lib/tcp_server');

describe('something', function() {
	this.backup = process.argv;
  process.argv = ['superagent','localhost:3000','post','object']
  process.argv = {};
	it('should create a new log file', function() {
    expect(fs.existsSync('../lib/*.txt')).to.eql(true);
	});
});
