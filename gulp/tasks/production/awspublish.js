/*====================================
=            Load modules            =
====================================*/

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var awspublish = require('gulp-awspublish');
var fs = require('fs');
var config = require('../../config').aws;

/*================================
=     Push build to gh-pages     =
================================*/

gulp.task('deploy:s3', function() {
  var key = JSON.parse(fs.readFileSync('./aws.json'));
  var publisher = awspublish.create(key);
  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };

  return gulp.src(config.src)
    .pipe($.rename(function (path) {
      path.dirname = 'assets/' + path.dirname;
    }))
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());
});
