var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var serverFile = ['server.js'];
var testFile = ['./test/test.js'];

gulp.task('jshint:test', function() {
  return gulp.src(testFile)
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

gulp.task('jshint:server', function() {
  return gulp.src(serverFile)
    .pipe(jshint({
      node: true
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('mocha', function () {
    return gulp.src(testFile, {read: false})
      .pipe(mocha({reporter: 'landing'}));
});

gulp.task('jshint', ['jshint:test', 'jshint:server']);
gulp.task('default', ['jshint', 'mocha']);
