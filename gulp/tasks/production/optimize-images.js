/*====================================
=            Load modules            =
====================================*/

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// var minifyCss = require('gulp-load-plugins')();
var config = require('../../config').optimize.images;

/*=========================================
=            Optimizing Images            =
=========================================*/

gulp.task('optimize:images', function() {

  return gulp.src(config.src)
    .pipe($.imagemin(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe($.size({
      title: 'Images'
    }));
});
