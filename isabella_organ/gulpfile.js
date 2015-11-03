'use strict'

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var request = require('superagent');
var chai = require('chai');
var chaiHttp = require('chai-http');
var appFiles = ['tcp_server.js'];
var testFiles = ['./test/**/*.js'];

gulp.task('jshint:test', function() {
	return gulp.src(testFiles)
		.pipe(jshint({
				node: true,
				globals: {
					describe: true,
					it: true,
					before: true,
					after: true
				}
		}))
		.pipe(jshint.reporter('default'));
});

gulp.task('jshint:app', function() {
	return gulp.src(appFiles)
	.pipe(jshint({
		node: true
	}))
	.pipe(jshint.reporter('default'));
});

gulp.task('mochatest', function () {
	return gulp.src('test/*.js')
	.pipe(mocha({reporter: 'nyan'}));
});

gulp.task('jshint', ['jshint:test', 'jshint:app']);
gulp.task('default', ['jshint', 'mochatest']);



