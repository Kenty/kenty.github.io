(function() {
  'use strict';

  function windowPopup(url, width, height) {
    var left = (screen.width / 2) - (width / 2),
      top = (screen.height / 2) - (height / 2);

    window.open(
      url,
      '',
      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left
    );
  }

  var jsSocialShares = document.querySelectorAll('.js-social-share');
  if (jsSocialShares) {
    [].forEach.call(jsSocialShares, function(anchor) {
      anchor.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        windowPopup(this.href, 500, 300);
      });
    });
  }


  // Twitter
  // var script,
  //   scripts = document.getElementsByTagName('script')[0];

  // function load(url) {
  //   script = document.createElement('script');
  //   script.async = true;
  //   script.src = url;
  //   scripts.parentNode.insertBefore(script, scripts);
  // }
  // load('//platform.twitter.com/widgets.js');
  // load('https://apis.google.com/js/plusone.js');
})();
