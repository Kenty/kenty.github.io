(function() {
  'use strict';

  if ('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {

    var doc = document,
      win = window,
      $ = doc.querySelectorAll.bind(doc),
      ss = smoothScroll;


    // init Responsive Nav
    var nav = responsiveNav('#navigation', {
      customToggle: '#nav-toggle',
      openPos: 'absolute',
      transition: 300
        // navClass: 'nav-collapse'
    });

    // init smooth scrolling
    ss.init({
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
      ss.animateScroll( null, win.location.hash, options);
    }

    win.addEventListener('load', function() {
      FastClick.attach(doc.body);
    }, false);

    // doc.querySelector('#page').addEventListener('touchend', function(event) {
    //   event.preventDefault();
    //   // event.stopPropagation();
    // }, false);

  }

})();
