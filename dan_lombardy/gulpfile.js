"use strict";
var  gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var appFiles = ['index.js', 'lib/**/*.js', 'bin/**/*.js'];
var testFiles = ['./test/**/*.js'];

gulp.task('jshint:test', function(){
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

gulp.task('jshint:app', function(){
  return gulp.src(appFiles)
  .pipe(jshint({
  })).pipe(jshint.reporter('default'));
});

gulp.task('mocha:test', function(){
  return gulp.src(testFiles)
    .pipe(mocha());
});



gulp.task('jshint', ['jshint:test', 'jshint:app']);
gulp.task('mocha', ['mocha:test']);
gulp.task('default', ['jshint', 'mocha:test']);
