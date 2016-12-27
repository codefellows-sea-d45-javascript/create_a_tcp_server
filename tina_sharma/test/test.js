'use strict';

var fs = require('fs');
var expect = require('chai').expect;
var path = require('path');

//fs.open('../*.txt');
//__dirname + './../*.txt'

describe('TCP server', function () {
    it("should create new unique file with post data", function () {
        expect(fs.accessSync('gulpfile.js')).to.eql(true);
    });
});
