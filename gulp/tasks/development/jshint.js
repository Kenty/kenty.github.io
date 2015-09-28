/*====================================
=            Load modules            =
====================================*/

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var stylish = require('jshint-stylish');
var config = require('../../config').jshint;

/*=============================================
=            Optimizing JavaScript            =
=============================================*/

gulp.task('jshint', function() {
  return gulp.src(config.src)
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter(stylish));
});
