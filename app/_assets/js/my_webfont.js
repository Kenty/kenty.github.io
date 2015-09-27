// (function() {
//   'use strict';
//   var WebFontConfig;

//   // WebFontConfig
//   WebFontConfig = {
//     typekit: {
//       id: 'ydl0ogs'
//     },
//     timeout: 2000
//   };

//   // (function() {
//   var wf = document.createElement('script');
//   wf.src = ('https:' === document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.5.6/webfont.js';
//   wf.type = 'text/javascript';
//   wf.async = 'true';
//   // var s = document.getElementsByTagName( 'script' )[0];
//   // s.parentNode.insertBefore( wf, s );
//   document.head.appendChild(wf);
//   // })();

// })();
(function(d) {
    var config = {
      kitId: 'ydl0ogs',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
