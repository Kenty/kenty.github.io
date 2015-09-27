// Adding attributes to Hamburger
//var $ = require('jquery');

$(function() {
  // body...
  'use strict';
  var _gMenu = $('#nav-toggle');
  _gMenu.attr({
    'role': 'button',
    'aria-haspopup': 'true',
    'aria-controls': 'navigation',
    'aria-expanded': 'false'
  });

  var openMenu = function() {
    _gMenu.attr({
      'aria-expanded': 'true'
    });
  };

  var closeMenu = function() {
    _gMenu.attr({
      'aria-expanded': 'false'
    });
  };

  _gMenu.on('click', function(e) {
    e.preventDefault();

    $(this).attr('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });
});
