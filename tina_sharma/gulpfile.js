var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var appFiles =['lib/**/*.js',];
var testFiles = ['./test/**/*.js'];
var watchFiles = ['./*.js', 'lib/**/*.js', './test/**/*.js'];

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

gulp.task('jshint:app', function() {
  return gulp.src(appFiles)
    .pipe(jshint({
      node: true
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('mocha:test', function() {
  return gulp.src(testFiles)
    .pipe(mocha({
      node: true,
      globals: {
        describe: true,
        it: true,
        before: true,
        after: true
      }
    }))
    .pipe(mocha({reporter:'spec'}));
});

gulp.task('default', ['watch']);

gulp.task('watch', function(){
  gulp.watch(watchFiles, ['jshint'], ['mocha']);
});

gulp.task('jshint', ['jshint:test', 'jshint:app']);
gulp.task('mocha', ['mocha:test']);
gulp.task('default', ['jshint', 'mocha']);
