/*====================================
=            Load Modules            =
====================================*/

var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../../config').browserSync.development;

/*=============================================================================
=            Run the build task and start a server with BroserSync            =
=============================================================================*/

gulp.task('browserSync', ['build'], function() {
    browserSync(config);
});
