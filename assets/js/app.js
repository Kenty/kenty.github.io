!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){$(function(){"use strict";var _gMenu=$("#nav-toggle"),fNote=$(".footnote"),fNote_rev=$(".reversefootnote");_gMenu.attr({role:"button","aria-haspopup":"true","aria-controls":"navigation","aria-expanded":"false"}),fNote.attr({"aria-describedby":"footnote-label"}),fNote_rev.attr({"aria-label":"Back to Content"});var openMenu=function(){_gMenu.attr({"aria-expanded":"true"})},closeMenu=function(){_gMenu.attr({"aria-expanded":"false"})};_gMenu.on("click",function(e){e.stopPropagation(),e.preventDefault(),"true"===$(this).attr("aria-expanded")?closeMenu():openMenu()})})},{}],2:[function(require,module,exports){(function(global){"undefined"!=typeof window?window.$:"undefined"!=typeof global?global.$:null,require("smooth-scroll"),require("responsive-nav");require("fastClick"),require("./my_sns"),require("./my_webfont"),require("./accessibility"),require("./my_init"),function(){"use strict";console.log("jQuery, Modernizr, foundation and responsive loaded")}()}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./accessibility":1,"./my_init":3,"./my_sns":4,"./my_webfont":5,fastClick:6,"responsive-nav":7,"smooth-scroll":8}],3:[function(require,module,exports){!function(){"use strict";if("querySelector"in document&&"localStorage"in window&&"addEventListener"in window){var doc=document,win=window,$$=doc.querySelectorAll.bind(doc),dispatcher=(responsiveNav("#navigation",{customToggle:"#nav-toggle",openPos:"absolute",transition:300}),function(path,func){return func?dispatcher.path_func.push([path,func]):void $.each(dispatcher.path_func,function(){return path.match(this[0])?this[1]():void 0})});dispatcher.path_func=[],setTimeout(function(){dispatcher(location.pathname)},0),dispatcher("^/tags",function(){if(console.log("This page is Tags"),smoothScroll.init({speed:500,easing:"easeInOutQuad",offset:30}),win.location.hash){var options={speed:500,easing:"easeInOutCubic",offset:15};smoothScroll.animateScroll(null,win.location.hash,options)}}),win.addEventListener("load",function(){FastClick.attach(doc.body)},!1),console.log($$)}}()},{}],4:[function(require,module,exports){!function(){"use strict";function windowPopup(url,width,height){var left=screen.width/2-width/2,top=screen.height/2-height/2;window.open(url,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width="+width+",height="+height+",top="+top+",left="+left)}var jsSocialShares=document.querySelectorAll(".js-social-share");jsSocialShares&&[].forEach.call(jsSocialShares,function(anchor){anchor.addEventListener("click",function(e){e.stopPropagation(),e.preventDefault(),windowPopup(this.href,500,300)})})}()},{}],5:[function(require,module,exports){!function(d){var a,config={kitId:"ydl0ogs",scriptTimeout:3e3,async:!0},h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive"},config.scriptTimeout),tk=d.createElement("script"),f=!1,s=d.getElementsByTagName("script")[0];h.className+=" wf-loading",tk.src="//use.typekit.net/"+config.kitId+".js",tk.async=!0,tk.onload=tk.onreadystatechange=function(){if(a=this.readyState,!(f||a&&"complete"!=a&&"loaded"!=a)){f=!0,clearTimeout(t);try{Typekit.load(config)}catch(e){}}},s.parentNode.insertBefore(tk,s)}(document)},{}],6:[function(require,module,exports){(function(global){(function(module,exports,require,define,browserify_shim__define__module__export__){!function(){"use strict";/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
function t(e,o){function i(t,e){return function(){return t.apply(e,arguments)}}var r;if(o=o||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=o.touchBoundary||10,this.layer=e,this.tapDelay=o.tapDelay||200,this.tapTimeout=o.tapTimeout||700,!t.notNeeded(e)){for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],c=this,s=0,u=a.length;u>s;s++)c[a[s]]=i(c[a[s]],c);n&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,o):i.call(e,t,n,o)},e.addEventListener=function(t,n,o){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):i.call(e,t,n,o)}),"function"==typeof e.onclick&&(r=e.onclick,e.addEventListener("click",function(t){r(t)},!1),e.onclick=null)}}var e=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!e,o=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,i=o&&/OS 4_\d(_\d)?/.test(navigator.userAgent),r=o&&/OS [6-7]_\d/.test(navigator.userAgent),a=navigator.userAgent.indexOf("BB10")>0;t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(o&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,o;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.determineEventType=function(t){return n&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e;o&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,r;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],o){if(r=window.getSelection(),r.rangeCount&&!r.isCollapsed)return!0;if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n?!0:!1},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,a,c,s,u,l=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,a=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,r&&(u=t.changedTouches[0],l=document.elementFromPoint(u.pageX-window.pageXOffset,u.pageY-window.pageYOffset)||l,l.fastClickScrollParent=this.targetElement.fastClickScrollParent),c=l.tagName.toLowerCase(),"label"===c){if(e=this.findControl(l)){if(this.focus(l),n)return!1;l=e}}else if(this.needsFocus(l))return t.timeStamp-a>100||o&&window.top!==window&&"input"===c?(this.targetElement=null,!1):(this.focus(l),this.sendClick(l,t),o&&"select"===c||(this.targetElement=null,t.preventDefault()),!1);return o&&!i&&(s=l.fastClickScrollParent,s&&s.fastClickLastScrollTop!==s.scrollTop)?!0:(this.needsClick(l)||(t.preventDefault(),this.sendClick(l,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement?t.forwardedTouchEvent?!0:!t.cancelable||this.needsClick(this.targetElement)&&!this.cancelNextClick?!0:(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;n&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,o,i,r;if("undefined"==typeof window.ontouchstart)return!0;if(o=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(o>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(a&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction?!0:(r=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],r>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===t.style.touchAction||"manipulation"===t.style.touchAction?!0:!1)},t.attach=function(e,n){return new t(e,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.FastClick=t):window.FastClick=t}(),browserify_shim__define__module__export__("undefined"!=typeof fastClick?fastClick:window.fastClick)}).call(global,void 0,void 0,void 0,void 0,function(ex){module.exports=ex})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(require,module,exports){(function(global){(function(module,exports,require,define,browserify_shim__define__module__export__){/*! responsive-nav.js 1.0.39
 * https://github.com/viljamis/responsive-nav.js
 * http://responsive-nav.com
 *
 * Copyright (c) 2015 @viljamis
 * Available under the MIT license
 */
!function(e,t,n){"use strict";var i=function(i,s){var o=!!t.getComputedStyle;o||(t.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return"float"===t&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this});var a,r,c,l,h,u,p=function(e,t,n,i){if("addEventListener"in e)try{e.addEventListener(t,n,i)}catch(s){if("object"!=typeof n||!n.handleEvent)throw s;e.addEventListener(t,function(e){n.handleEvent.call(n,e)},i)}else"attachEvent"in e&&("object"==typeof n&&n.handleEvent?e.attachEvent("on"+t,function(){n.handleEvent.call(n)}):e.attachEvent("on"+t,n))},d=function(e,t,n,i){if("removeEventListener"in e)try{e.removeEventListener(t,n,i)}catch(s){if("object"!=typeof n||!n.handleEvent)throw s;e.removeEventListener(t,function(e){n.handleEvent.call(n,e)},i)}else"detachEvent"in e&&("object"==typeof n&&n.handleEvent?e.detachEvent("on"+t,function(){n.handleEvent.call(n)}):e.detachEvent("on"+t,n))},v=function(e){if(e.children.length<1)throw new Error("The Nav container has no containing elements");for(var t=[],n=0;n<e.children.length;n++)1===e.children[n].nodeType&&t.push(e.children[n]);return t},f=function(e,t){for(var n in t)e.setAttribute(n,t[n])},m=function(e,t){0!==e.className.indexOf(t)&&(e.className+=" "+t,e.className=e.className.replace(/(^\s*)|(\s*$)/g,""))},g=function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/(^\s*)|(\s*$)/g,"")},y=function(e,t,n){for(var i=0;i<e.length;i++)t.call(n,i,e[i])},E=e.createElement("style"),C=e.documentElement,_=function(t,n){var i;this.options={animate:!0,transition:284,label:"Menu",insert:"before",customToggle:"",closeOnNavClick:!1,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(i in n)this.options[i]=n[i];if(m(C,this.options.jsClass),this.wrapperEl=t.replace("#",""),e.getElementById(this.wrapperEl))this.wrapper=e.getElementById(this.wrapperEl);else{if(!e.querySelector(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=e.querySelector(this.wrapperEl)}this.wrapper.inner=v(this.wrapper),r=this.options,a=this.wrapper,this._init(this)};return _.prototype={destroy:function(){this._removeStyles(),g(a,"closed"),g(a,"opened"),g(a,r.navClass),g(a,r.navClass+"-"+this.index),g(C,r.navActiveClass),a.removeAttribute("style"),a.removeAttribute("aria-hidden"),d(t,"resize",this,!1),d(t,"focus",this,!1),d(e.body,"touchmove",this,!1),d(c,"touchstart",this,!1),d(c,"touchend",this,!1),d(c,"mouseup",this,!1),d(c,"keyup",this,!1),d(c,"click",this,!1),r.customToggle?c.removeAttribute("aria-hidden"):c.parentNode.removeChild(c)},toggle:function(){l===!0&&(u?this.close():this.open())},open:function(){u||(g(a,"closed"),m(a,"opened"),m(C,r.navActiveClass),m(c,"active"),a.style.position=r.openPos,f(a,{"aria-hidden":"false"}),u=!0,r.open())},close:function(){u&&(m(a,"closed"),g(a,"opened"),g(C,r.navActiveClass),g(c,"active"),f(a,{"aria-hidden":"true"}),r.animate?(l=!1,setTimeout(function(){a.style.position="absolute",l=!0},r.transition+10)):a.style.position="absolute",u=!1,r.close())},resize:function(){"none"!==t.getComputedStyle(c,null).getPropertyValue("display")?(h=!0,f(c,{"aria-hidden":"false"}),a.className.match(/(^|\s)closed(\s|$)/)&&(f(a,{"aria-hidden":"true"}),a.style.position="absolute"),this._createStyles(),this._calcHeight()):(h=!1,f(c,{"aria-hidden":"true"}),f(a,{"aria-hidden":"false"}),a.style.position=r.openPos,this._removeStyles())},handleEvent:function(e){var n=e||t.event;switch(n.type){case"touchstart":this._onTouchStart(n);break;case"touchmove":this._onTouchMove(n);break;case"touchend":case"mouseup":this._onTouchEnd(n);break;case"click":this._preventDefault(n);break;case"keyup":this._onKeyUp(n);break;case"focus":case"resize":this.resize(n)}},_init:function(){this.index=n++,m(a,r.navClass),m(a,r.navClass+"-"+this.index),m(a,"closed"),l=!0,u=!1,this._closeOnNavClick(),this._createToggle(),this._transitions(),this.resize();var i=this;setTimeout(function(){i.resize()},20),p(t,"resize",this,!1),p(t,"focus",this,!1),p(e.body,"touchmove",this,!1),p(c,"touchstart",this,!1),p(c,"touchend",this,!1),p(c,"mouseup",this,!1),p(c,"keyup",this,!1),p(c,"click",this,!1),r.init()},_createStyles:function(){E.parentNode||(E.type="text/css",e.getElementsByTagName("head")[0].appendChild(E))},_removeStyles:function(){E.parentNode&&E.parentNode.removeChild(E)},_createToggle:function(){if(r.customToggle){var t=r.customToggle.replace("#","");if(e.getElementById(t))c=e.getElementById(t);else{if(!e.querySelector(t))throw new Error("The custom nav toggle you are trying to select doesn't exist");c=e.querySelector(t)}}else{var n=e.createElement("a");n.innerHTML=r.label,f(n,{href:"#","class":"nav-toggle"}),"after"===r.insert?a.parentNode.insertBefore(n,a.nextSibling):a.parentNode.insertBefore(n,a),c=n}},_closeOnNavClick:function(){if(r.closeOnNavClick){var e=a.getElementsByTagName("a"),t=this;y(e,function(n,i){p(e[n],"click",function(){h&&t.toggle()},!1)})}},_preventDefault:function(e){return e.preventDefault?(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation(),!1):void(e.returnValue=!1)},_onTouchStart:function(e){Event.prototype.stopImmediatePropagation||this._preventDefault(e),this.startX=e.touches[0].clientX,this.startY=e.touches[0].clientY,this.touchHasMoved=!1,d(c,"mouseup",this,!1)},_onTouchMove:function(e){(Math.abs(e.touches[0].clientX-this.startX)>10||Math.abs(e.touches[0].clientY-this.startY)>10)&&(this.touchHasMoved=!0)},_onTouchEnd:function(e){if(this._preventDefault(e),h&&!this.touchHasMoved){if("touchend"===e.type)return void this.toggle();var n=e||t.event;3!==n.which&&2!==n.button&&this.toggle()}},_onKeyUp:function(e){var n=e||t.event;13===n.keyCode&&this.toggle()},_transitions:function(){if(r.animate){var e=a.style,t="max-height "+r.transition+"ms";e.WebkitTransition=e.MozTransition=e.OTransition=e.transition=t}},_calcHeight:function(){for(var e=0,t=0;t<a.inner.length;t++)e+=a.inner[t].offsetHeight;var n="."+r.jsClass+" ."+r.navClass+"-"+this.index+".opened{max-height:"+e+"px !important} ."+r.jsClass+" ."+r.navClass+"-"+this.index+".opened.dropdown-active {max-height:9999px !important}";E.styleSheet?E.styleSheet.cssText=n:E.innerHTML=n,n=""}},new _(i,s)};"undefined"!=typeof module&&module.exports?module.exports=i:t.responsiveNav=i}(document,window,0),browserify_shim__define__module__export__("undefined"!=typeof responsiveNav?responsiveNav:window.responsiveNav)}).call(global,void 0,void 0,void 0,void 0,function(ex){module.exports=ex})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(require,module,exports){(function(global){(function(module,exports,require,define,browserify_shim__define__module__export__){/*!
 * smooth-scroll v7.1.1: Animate scrolling to anchor links
 * (c) 2015 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/smooth-scroll
 */
!function(root,factory){"function"==typeof define&&define.amd?define("smooth-scroll",factory(root)):"object"==typeof exports?module.exports=factory(root):root.smoothScroll=factory(root)}("undefined"!=typeof global?global:this.window||this.global,function(root){"use strict";var settings,eventTimeout,fixedHeader,headerHeight,smoothScroll={},supports="querySelector"in document&&"addEventListener"in root,defaults={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},extend=function(){var extended={},deep=!1,i=0,length=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(deep=arguments[0],i++);for(var merge=function(obj){for(var prop in obj)Object.prototype.hasOwnProperty.call(obj,prop)&&(deep&&"[object Object]"===Object.prototype.toString.call(obj[prop])?extended[prop]=extend(!0,extended[prop],obj[prop]):extended[prop]=obj[prop])};length>i;i++){var obj=arguments[i];merge(obj)}return extended},getHeight=function(elem){return Math.max(elem.scrollHeight,elem.offsetHeight,elem.clientHeight)},getClosest=function(elem,selector){var attribute,value,firstChar=selector.charAt(0),supports="classList"in document.documentElement;for("["===firstChar&&(selector=selector.substr(1,selector.length-2),attribute=selector.split("="),attribute.length>1&&(value=!0,attribute[1]=attribute[1].replace(/"/g,"").replace(/'/g,"")));elem&&elem!==document;elem=elem.parentNode){if("."===firstChar)if(supports){if(elem.classList.contains(selector.substr(1)))return elem}else if(new RegExp("(^|\\s)"+selector.substr(1)+"(\\s|$)").test(elem.className))return elem;if("#"===firstChar&&elem.id===selector.substr(1))return elem;if("["===firstChar&&elem.hasAttribute(attribute[0])){if(!value)return elem;if(elem.getAttribute(attribute[0])===attribute[1])return elem}if(elem.tagName.toLowerCase()===selector)return elem}return null},escapeCharacters=function(id){for(var codeUnit,string=String(id),length=string.length,index=-1,result="",firstCodeUnit=string.charCodeAt(0);++index<length;){if(codeUnit=string.charCodeAt(index),0===codeUnit)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");result+=codeUnit>=1&&31>=codeUnit||127==codeUnit||0===index&&codeUnit>=48&&57>=codeUnit||1===index&&codeUnit>=48&&57>=codeUnit&&45===firstCodeUnit?"\\"+codeUnit.toString(16)+" ":codeUnit>=128||45===codeUnit||95===codeUnit||codeUnit>=48&&57>=codeUnit||codeUnit>=65&&90>=codeUnit||codeUnit>=97&&122>=codeUnit?string.charAt(index):"\\"+string.charAt(index)}return result},easingPattern=function(type,time){var pattern;return"easeInQuad"===type&&(pattern=time*time),"easeOutQuad"===type&&(pattern=time*(2-time)),"easeInOutQuad"===type&&(pattern=.5>time?2*time*time:-1+(4-2*time)*time),"easeInCubic"===type&&(pattern=time*time*time),"easeOutCubic"===type&&(pattern=--time*time*time+1),"easeInOutCubic"===type&&(pattern=.5>time?4*time*time*time:(time-1)*(2*time-2)*(2*time-2)+1),"easeInQuart"===type&&(pattern=time*time*time*time),"easeOutQuart"===type&&(pattern=1- --time*time*time*time),"easeInOutQuart"===type&&(pattern=.5>time?8*time*time*time*time:1-8*--time*time*time*time),"easeInQuint"===type&&(pattern=time*time*time*time*time),"easeOutQuint"===type&&(pattern=1+--time*time*time*time*time),"easeInOutQuint"===type&&(pattern=.5>time?16*time*time*time*time*time:1+16*--time*time*time*time*time),pattern||time},getEndLocation=function(anchor,headerHeight,offset){var location=0;if(anchor.offsetParent)do location+=anchor.offsetTop,anchor=anchor.offsetParent;while(anchor);return location=location-headerHeight-offset,location>=0?location:0},getDocumentHeight=function(){return Math.max(root.document.body.scrollHeight,root.document.documentElement.scrollHeight,root.document.body.offsetHeight,root.document.documentElement.offsetHeight,root.document.body.clientHeight,root.document.documentElement.clientHeight)},getDataOptions=function(options){return options&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(options):{}},updateUrl=function(anchor,url){root.history.pushState&&(url||"true"===url)&&"file:"!==root.location.protocol&&root.history.pushState(null,null,[root.location.protocol,"//",root.location.host,root.location.pathname,root.location.search,anchor].join(""))},getHeaderHeight=function(header){return null===header?0:getHeight(header)+header.offsetTop};smoothScroll.animateScroll=function(toggle,anchor,options){var overrides=getDataOptions(toggle?toggle.getAttribute("data-options"):null),settings=extend(settings||defaults,options||{},overrides);anchor="#"+escapeCharacters(anchor.substr(1));var anchorElem="#"===anchor?root.document.documentElement:root.document.querySelector(anchor),startLocation=root.pageYOffset;fixedHeader||(fixedHeader=root.document.querySelector(settings.selectorHeader)),headerHeight||(headerHeight=getHeaderHeight(fixedHeader));var animationInterval,percentage,position,endLocation=getEndLocation(anchorElem,headerHeight,parseInt(settings.offset,10)),distance=endLocation-startLocation,documentHeight=getDocumentHeight(),timeLapsed=0;updateUrl(anchor,settings.updateURL);var stopAnimateScroll=function(position,endLocation,animationInterval){var currentLocation=root.pageYOffset;(position==endLocation||currentLocation==endLocation||root.innerHeight+currentLocation>=documentHeight)&&(clearInterval(animationInterval),anchorElem.focus(),settings.callback(toggle,anchor))},loopAnimateScroll=function(){timeLapsed+=16,percentage=timeLapsed/parseInt(settings.speed,10),percentage=percentage>1?1:percentage,position=startLocation+distance*easingPattern(settings.easing,percentage),root.scrollTo(0,Math.floor(position)),stopAnimateScroll(position,endLocation,animationInterval)},startAnimateScroll=function(){animationInterval=setInterval(loopAnimateScroll,16)};0===root.pageYOffset&&root.scrollTo(0,0),startAnimateScroll()};var eventHandler=function(event){var toggle=getClosest(event.target,settings.selector);toggle&&"a"===toggle.tagName.toLowerCase()&&(event.preventDefault(),smoothScroll.animateScroll(toggle,toggle.hash,settings))},eventThrottler=function(event){eventTimeout||(eventTimeout=setTimeout(function(){eventTimeout=null,headerHeight=getHeaderHeight(fixedHeader)},66))};return smoothScroll.destroy=function(){settings&&(root.document.removeEventListener("click",eventHandler,!1),root.removeEventListener("resize",eventThrottler,!1),settings=null,eventTimeout=null,fixedHeader=null,headerHeight=null)},smoothScroll.init=function(options){supports&&(smoothScroll.destroy(),settings=extend(defaults,options||{}),fixedHeader=root.document.querySelector(settings.selectorHeader),headerHeight=getHeaderHeight(fixedHeader),root.document.addEventListener("click",eventHandler,!1),fixedHeader&&root.addEventListener("resize",eventThrottler,!1))},smoothScroll}),browserify_shim__define__module__export__("undefined"!=typeof smoothScroll?smoothScroll:window.smoothScroll)}).call(global,void 0,void 0,void 0,void 0,function(ex){module.exports=ex})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[2]);