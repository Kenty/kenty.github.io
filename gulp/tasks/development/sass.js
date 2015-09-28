/*====================================
=            Load modules            =
====================================*/

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var bulkSass = require('gulp-sass-bulk-import');
var displayErrors = require('../../util/displayErrors');
var config = require('../../config');

/*===============================
=            Libsass            =
===============================*/

gulp.task('styles', function() {

  // var filter = $.filter(['*.css', '!*.map']);

  return gulp.src([config.sass.src])
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe(bulkSass())
    .pipe($.sass(config.sass.options)).on('error', displayErrors)
    .pipe($.autoprefixer(config.autoprefixer))
    .pipe($.if('*.css', $.csso()))
    // .pipe(filter)
    .pipe($.sourcemaps.write('./', {
      includeContent: false,
      sourceRoot: config.sass.sourceRoot
    }))
    .pipe(gulp.dest(config.sass.dest))
    .pipe($.notify({
      title: 'COMPILE',
      message: 'Sass task complete😄'
    }))
    .pipe($.size({
      title: 'sass'
    }));
});
