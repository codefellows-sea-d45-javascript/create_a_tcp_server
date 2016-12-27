var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var appFiles = ['index.js', 'lib/**/*.js', 'bin/**/*.js'];
var testFiles = ['test/**/*.js'];

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

gulp.task('mocha', function(){
  return gulp.src(testFiles)
      .pipe(jshint({
        node: true,
        globals: {
          describe: true,
          it: true
      }
    }))
    .pipe(mocha({reporter: 'spec'}));
});


gulp.task('jshint', ['jshint:test', 'jshint:app']);
gulp.task('default', ['jshint', 'mocha']);