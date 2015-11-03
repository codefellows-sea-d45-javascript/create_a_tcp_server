var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var appFiles = ['lib/*.js', 'index.js'];
var testFiles = ['test/*.js',]

gulp.task('jshint:test', function() {
  return gulp.src(testFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jshint:app', function() {
  return gulp.src(appFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('mocha', ['jshint'], function() {
  return gulp.src(testFiles)
    .pipe(mocha());
});

gulp.task('watch', function() {
    gulp.watch(appFiles, ['jshint', 'mocha']);
    gulp.watch(testFiles, ['jshint', 'mocha']);
});

gulp.task('jshint', ['jshint:app', 'jshint:test']);
gulp.task('default', ['jshint', 'mocha']);
