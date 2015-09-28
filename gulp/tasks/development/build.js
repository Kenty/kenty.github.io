/*====================================
=            Load modules            =
====================================*/

var gulp = require('gulp');
var runSequence = require('run-sequence');

/*====================================
=            Run-sequence            =
====================================*/

gulp.task('build', function(callback) {
  runSequence('clean', 'bower-files', [
              'jekyll',
              'styles',
              'images',
              'scripts'], callback);
});
