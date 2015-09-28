/*====================================
=            Load modules            =
====================================*/

var gulp = require('gulp');
var cp = require('child_process');
var browsersync = require('browser-sync');
var config = require('../../config').jekyll.product;

/*===============================
=            Libsass            =
===============================*/

gulp.task('jekyll:product', function(done) {
  browsersync.notify('Compiling Jekyll Production');

  return cp.spawn('jekyll', ['build', '-q', '--source=' + config.src, '--destination=' + config.dest, '--config=' + config.config], {
      stdio: 'inherit'
    })
    .on('close', done);
});
