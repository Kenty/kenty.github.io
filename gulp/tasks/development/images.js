/*====================================
=            Load modules            =
====================================*/

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../config.js').images;

/*==============================
=            Images            =
==============================*/

gulp.task('images', function() {
    return gulp.src(config.src)
      .pipe($.changed(config.dest))
      .pipe(gulp.dest(config.dest));
});
