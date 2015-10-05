var $ = require('jquery');
// require('modernizr');
// require('foundation');
require('responsive-nav');
require('./my_sns');
require('./my_webfont');
require('./accessbility');

(function() {
  'use strict';

  console.log('jQuery, Modernizr, foundation and responsive loaded');

  var nav = responsiveNav('#navigation', {
    customToggle: '#nav-toggle',
    openPos: 'absolute',
    transition: 300
      // navClass: 'nav-collapse'
  });
})();
