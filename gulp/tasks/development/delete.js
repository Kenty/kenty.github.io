/*====================================
=            Load modules            =
====================================*/

var gulp = require('gulp');
var del = require('del');
var config = require('../../config.js').delete;

/*==============================
=            Delete            =
==============================*/

gulp.task('delete', function () {
  del(config.src).then(function (paths) {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });
});
