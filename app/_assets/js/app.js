var $ = require('jquery');
// require('modernizr');
// require('foundation');
require('responsive-nav');
require('fastClick');
require('./my_sns');
require('./my_webfont');
require('./accessibility');

(function() {
  'use strict';

  if ('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {

    var doc = document,
      win = window,
      $ = doc.querySelectorAll.bind(doc);

    // init Responsive Nav
    var nav = responsiveNav('#navigation', {
      customToggle: '#nav-toggle',
      openPos: 'absolute',
      transition: 300
        // navClass: 'nav-collapse'
    });

    win.addEventListener('load', function() {
      FastClick.attach(doc.body);
    }, false);
  }

  console.log('jQuery, Modernizr, foundation and responsive loaded');

})();
