/*====================================
=            Load modules            =
====================================*/

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// var minifyCss = require('gulp-load-plugins')();
var config = require('../../config').optimize.css;

/*=============================================
=               Optimizing CSS                =
=============================================*/

gulp.task('optimize:css', function() {
  var jsFilter = $.filter('*.css', {
    restore: true
  });

  return gulp.src(config.src)
    .pipe(jsFilter)
    // .pipe($.minifyCss(config.options))
    .pipe($.cssnano(config.options))
    .pipe(jsFilter.restore)
    .pipe(gulp.dest(config.dest))
    .pipe($.size({
      title: 'Styles'
    }));
});
