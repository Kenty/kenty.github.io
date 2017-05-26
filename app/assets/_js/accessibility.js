// Adding attributes to Hamburger

// (function() {
//   'use strict';

  var _gMenu = document.getElementById('nav-toggle');

  // Name Space
  var Menu = Menu || {};

  // Module
  Menu = (function() {
      function init(el) {
        this.setAttributes(el, {
          'aria-controls': 'navigation',
          'aria-haspopup': 'true',
          'aria-expanded': 'false',
        });
        this.toggle(el);
      }
      function setAttributes(el, attrs) {
        for (var key in attrs) {
          el.setAttribute(key, attrs[key]);
        }
      }
      function open(el) {
        el.setAttribute('aria-expanded', 'true');
      }
      function close(el) {
        el.setAttribute('aria-expanded', 'false');
      }
      function toggle(el) {
        var self = this;

        el.addEventListener('click', function(e) {
          e.stopPropagation();
          e.preventDefault();

          // var state = this.getAttribute('aria-expanded') === 'false' ? true : false;
          var state = this.getAttribute('aria-expanded') === 'true' ? self.close(this) : self.open(this);

          return state;
        }, false);
      }

      // Pablic API
      return {
        setAttributes: setAttributes,
        init: init,
        open: open,
        close: close,
        toggle: toggle
      };
  })();

  // module.exports = Menu;
  Menu.init(_gMenu);

// })();
