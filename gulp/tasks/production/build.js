/*====================================
=            Load modules            =
====================================*/

var gulp = require('gulp');
var runSequence = require('run-sequence');

/*====================================
=            Run-sequence            =
====================================*/

gulp.task('build:production', function(callback) {
  runSequence('delete', 'jekyll:product',
  [
    'styles',
    'images',
    'scripts'
  ],
  [
    'optimize:js',
    'optimize:css',
    'optimize:images',
    'optimize:html'
  ],
  'copysvg',
  'deploy:s3',
  'deploy',
  callback);
});
