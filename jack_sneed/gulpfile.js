'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gulpMocha = require('gulp-mocha');
var appFiles = ['tcp_server.js'];
var testFiles = ['./test/test.js'];

gulp.task('jshint', function() {
  return gulp.src(appFiles)
    .pipe(jshint({
      node: true,
      globals: {
        describe: true,
        it: true,
        before: true,
        after: true,
      }
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('mocha', function() {
  return gulp.src(testFiles, {read: false})
    .pipe(gulpMocha({reporter: 'landing'}));
});

gulp.task('default', ['jshint', 'mocha']);
