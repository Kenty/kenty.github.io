/*====================================
=            Load modules            =
====================================*/

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../config').rsync;

/*=============================
=            rsync            =
=============================*/

gulp.task('rsync', function() {
    return gulp.src(config.src)
    .pipe($.rsync(config.options));
});
