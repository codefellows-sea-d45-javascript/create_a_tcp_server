'use strict';

var fs = require('fs');
var expect = require('chai').expect;

describe('TCP server', function () {
	it("should create new unique file with post data", function () {
		expect(fs.lstatSync('../*.txt').isFile().to.eql(true);
	});
});