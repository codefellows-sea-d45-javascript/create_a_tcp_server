var gulp =  require('gulp');
var gulpMocha = require('gulp-mocha');
var jshint = require('gulp-jshint');

gulp.task('test', ['jshint'], function(){
  gulp.src('test/*test.js')
  .pipe(gulpMocha({reporter: 'nyan'}));
});


gulp.task('jshint', function(){
  gulp.src(['gulpfile.js', 'lib/*.js', 'test/*.js', 'index.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['jshint', 'test']);
