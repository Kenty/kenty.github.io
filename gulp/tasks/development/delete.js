/*====================================
=            Load modules            =
====================================*/

var config = require('../../config.js').delete;
var gulp = require('gulp');
var del = require('del');

/*==============================
=            Delete            =
==============================*/

gulp.task('clean', del.bind(null, config.src));
