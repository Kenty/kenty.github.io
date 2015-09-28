/*====================================
=            Load modules            =
====================================*/

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// var minifyCss = require('gulp-load-plugins')();
var config = require('../../config').copySvg;

/*=============================================
=            Optimizing JavaScript            =
=============================================*/

gulp.task('copysvg', function() {

  return gulp.src(config.src)
    // .pipe($.imagemin(config.options))
    .pipe($.changed(config.dest))
    .pipe(gulp.dest(config.dest))
    .pipe($.size({
      title: 'SVG'
    }));
});
