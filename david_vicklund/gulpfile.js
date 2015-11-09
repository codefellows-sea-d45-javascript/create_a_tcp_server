var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var tasks = {
  default: function() {
    return gulp.src('./test/test.js')
      .pipe(mocha({reporter: 'nyan'}));
  },

  jshint: function() {
    return gulp.src([
      'gulpfile.js',
      'server.js',
      './test/test.js'
    ]).pipe(jshint())
      .pipe(jshint.reporter('default'))
      .on('error', function(error) {
        console.log(error);
      });
  }
};

gulp.task('default', tasks.default);
gulp.task('jshint', tasks.jshint);