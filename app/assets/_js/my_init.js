const responsiveNav = require('responsive-nav');
const smoothScroll = require('smooth-scroll');
const FastClick = require('fastclick');

(() => {
  if ('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {
    const doc = document;
    const win = window;

    // init Responsive Nav
    const nav = responsiveNav('#navigation', {
      customToggle: '#nav-toggle',
      openPos: 'absolute',
      transition: 300,
    });

    // Create a mask
    const mask = doc.createElement('div');
    mask.className = 'global-nav__mask';

    // Append the mask inside body tag
    doc.body.appendChild(mask);

    mask.addEventListener('touchstart', (e) => {
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
      const options = {
        speed: 500,
        easing: 'easeInOutCubic',
        offset: 30,
      };
      smoothScroll.animateScroll(null, win.location.hash, options);
    }

    win.addEventListener('load', () => {
      FastClick(doc.body);
    }, false);
  }
})();
