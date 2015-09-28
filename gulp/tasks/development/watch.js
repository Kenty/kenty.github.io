/*====================================
=            Load modules            =
====================================*/

var gulp = require('gulp');
var config = require('../../config').watch;
// var $ = require('gulp-load-plugins')();

/*=============================
=            Watch            =
=============================*/

gulp.task('watch', ['browserSync'], function() {
  // gulp.watch(config.sass.src, ['styles']);
  gulp.watch(config.sass, ['styles'], function() {
      gulp.start('styles');
    })
    .on('change', function(evt) {
      console.log('[watcher] File ' + evt.path.replace(/.*(?=sass)/, '') + ' was ' + evt.type + ', compiling...');
    });
  gulp.watch(config.images, ['images'], function() {
      gulp.start('images');
    })
    .on('change', function(evt) {
      console.log('[watcher] File ' + evt.path + ' was ' + evt.type + ', compiling...');
    });
  gulp.watch(config.jekyll, ['jekyll-rebuild']);
  gulp.watch(config.scripts, ['scripts', 'jshint']);
});
