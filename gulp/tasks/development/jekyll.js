/*====================================
=            Load modules            =
====================================*/

var gulp = require('gulp');
var cp = require('child_process');
var browsersync = require('browser-sync');
var config = require('../../config').jekyll.development;

/*========================================
=            Compiling Jekyll            =
========================================*/

gulp.task('jekyll', function(done) {
  browsersync.notify('Compiling Jekyll');

  return cp.spawn('jekyll', ['build', '--drafts', '-q', '--plugins=' + '/_plugins', '--source=' + config.src, '--destination=' + config.dest, '--config=' + config.config], {
      stdio: 'inherit'
    })
    .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll'], function() {
  browsersync.reload();
});
