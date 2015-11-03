'use strict'

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var request = require('superagent');
var chai = require('chai');
var chaiHttp = require('chai-http');
var appFiles = ['tcp_server.js'];
var testFiles = ['./test/**/*.js'];

gulp.task('mochatest', function () {
	return gulp.src('test/*.js')
	.pipe(mocha({reporter: 'nyan'}));
});

gulp.task('default', ['mochatest']);



