/*====================================
=            Load modules            =
====================================*/

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// var minifyCss = require('gulp-load-plugins')();
var config = require('../../config').optimize.html;

/*=============================================
=              Optimizing html                =
=============================================*/

gulp.task('optimize:html', function() {

  return gulp.src(config.src)
    .pipe($.htmlmin(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe($.size({
      title: 'html'
    }));
});
