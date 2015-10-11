// Adding attributes to Hamburger

$(function() {
  'use strict';

  var _gMenu = $('#nav-toggle');
  var fNote = $('.footnote');
  var fNote_rev = $('.reversefootnote');
  // var footnote = $('sup[id*="fnref"] a');

  _gMenu.attr({
    'role': 'button',
    'aria-haspopup': 'true',
    'aria-controls': 'navigation',
    'aria-expanded': 'false'
  });

  fNote.attr({
    'aria-describedby': 'footnote-label'
  });

  fNote_rev.attr({
    'aria-label': 'Back to Content'
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
    e.stopPropagation();
    e.preventDefault();

    $(this).attr('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });
});
