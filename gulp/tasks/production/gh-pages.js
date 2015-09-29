/*====================================
=            Load modules            =
====================================*/

var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var $ = require('gulp-load-plugins')();
var config = require('../../config').ghPages;

/*================================
=     Push build to gh-pages     =
================================*/

gulp.task('deploy:gh-pages', function() {
    return gulp.src(config.src)
    .pipe(deploy(config.options));
});
