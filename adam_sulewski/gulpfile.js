'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var appFiles = ['server.js', 'lib/**/*.js', 'gulpfile.js'];
var testFiles = ['test/**/*.js'];
var files = appFiles.concat(testFiles);

gulp.task('jshint:app', function() {
  return gulp.src(appFiles)
    .pipe(jshint({
      node: true
    }))
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

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
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('mocha', ['jshint'], function() {
  return gulp.src('test/test.js', {read: false})
    .pipe(mocha());
});

gulp.task('watch', function() {
  gulp.watch(files, ['mocha']);
});

gulp.task('jshint', ['jshint:app', 'jshint:test']);
gulp.task('default', ['mocha']);
