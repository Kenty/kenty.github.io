var responsiveNav = require('responsive-nav');
var smoothScroll = require('smooth-scroll');
var FastClick = require('fastClick');
// var Menu = require('./accessibility');
// require('fastClick');

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
    });

    // Create a mask
    var mask = doc.createElement('div');
    mask.className = 'global-nav__mask';

    // Append the mask inside body tag
    doc.body.appendChild(mask);

    mask.addEventListener('touchstart', function(e) {
      e.preventDefault();
      nav.close();
    });

    // init smooth scrolling
    smoothScroll.init({
      speed: 500,
      easing: 'easeInOutQuad',
      offset: 80,
    });

    if (win.location.hash) {
      var options = {
        speed: 500,
        easing: 'easeInOutCubic',
        offset: 30,
      };
      smoothScroll.animateScroll( null, win.location.hash, options);
    }

    win.addEventListener('load', function() {
      // FastClick.attach(doc.body);
      new FastClick(doc.body);
    }, false);

    // doc.querySelector('#page').addEventListener('touchend', function(event) {
    //   event.preventDefault();
    //   // event.stopPropagation();
    // }, false);
  console.log(nav);
}


})();
