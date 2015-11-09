'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var appFiles = ['index.js'];
var testFiles = ['./test/**/*.js'];
var watcher = gulp.watch('./**/*.js', ['jshint:test']);

watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('mocha', ['jshint'], function() {
  return gulp.src('test/test.js', {
    read: false
  })
    .pipe(mocha());
});

gulp.task('jshint:test', function() {
  return gulp.src(testFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jshint:app', function() {
  return gulp.src(appFiles)
    .pipe(jshint({
      node: true
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('jshint', ['jshint:test', 'jshint:app']);
gulp.task('default', ['mocha']);
