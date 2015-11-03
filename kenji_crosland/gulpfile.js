var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var appFiles = ['tcp-server.js'];
var testFiles = ['./test/**/*.js'];

gulp.task('jshint:test', function(){
  return gulp.src(testFiles)
  .pipe(jshint({
    node:true,
    globals: {
      describe: true,
      it: true,
      before: true,
      beforeEach: true,
      after: true
    }
  }))
  .pipe(jshint.reporter('default'));
});

gulp.task('jshint:app', function(){
  return gulp.src(appFiles)
  .pipe(jshint.reporter('default'));
});

gulp.task('mocha', ['jshint'], function(){
  return gulp.src('./test/test.js', {read:false})
  .pipe(mocha({reporter:'spec'}));
});

gulp.task('jshint', ['jshint:test', 'jshint:app']);
gulp.task('default', ['jshint', 'mocha']);
