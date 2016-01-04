/*====================================
=            Load modules            =
====================================*/

var gulp = require('gulp');
var cp = require('child_process');
var browsersync = require('browser-sync');
var config = require('../../config').jekyll.product;

/*==============================================
=    Compile Jekyll to Production directory    =
==============================================*/

gulp.task('jekyll:product', function(done) {
  browsersync.notify('Compiling Jekyll Production');

  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '-q', '--plugins=' + config.plugins, '--source=' + config.src, '--destination=' + config.dest, '--config=' + config.config], {
      stdio: 'inherit'
    })
    .on('close', done);
});
