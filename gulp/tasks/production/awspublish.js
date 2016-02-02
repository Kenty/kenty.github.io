/*====================================
=            Load modules            =
====================================*/

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var awspublish = require('gulp-awspublish');
var fs = require('fs');
var config = require('../../config').aws;
var AWS = require('aws-sdk');

/*================================
=     Push build to s3     =
================================*/

gulp.task('deploy:s3', function() {
  // var key = JSON.parse(fs.readFileSync('./aws.json'));
  var credentials = new AWS.SharedIniFileCredentials({
    profile: 'default'
  });
  AWS.config.credentials = credentials;
  AWS.config.region = 'ap-northeast-1';
  // var publisher = awspublish.create({key});
  var publisher = awspublish.create({
    params: {
      'Bucket': 'static.dominomatrix.com'
    }
  });

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
