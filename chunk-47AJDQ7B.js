import{V as J}from"./chunk-NQB7QDWJ.js";import{a as q,e as G}from"./chunk-5MML4IJR.js";import{Ca as K,H as U,Ha as F,J as M,a as k,ca as N,db as $,ia as S,ma as _,n as j,nb as V,t as I,x as B}from"./chunk-XXOGUOJZ.js";function w(t){return getComputedStyle(t)}function y(t,e){for(var r in e){var n=e[r];typeof n=="number"&&(n=n+"px"),t.style[r]=n}return t}function A(t){var e=document.createElement("div");return e.className=t,e}var Q=typeof Element<"u"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function Y(t,e){if(!Q)throw new Error("No element matching method supported");return Q.call(t,e)}function R(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function Z(t,e){return Array.prototype.filter.call(t.children,function(r){return Y(r,e)})}var m={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},et={x:null,y:null};function rt(t,e){var r=t.element.classList,n=m.state.scrolling(e);r.contains(n)?clearTimeout(et[e]):r.add(n)}function nt(t,e){et[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(m.state.scrolling(e))},t.settings.scrollingThreshold)}function ut(t,e){rt(t,e),nt(t,e)}var H=function(e){this.element=e,this.handlers={}},ot={isEmpty:{configurable:!0}};H.prototype.bind=function(e,r){typeof this.handlers[e]>"u"&&(this.handlers[e]=[]),this.handlers[e].push(r),this.element.addEventListener(e,r,!1)};H.prototype.unbind=function(e,r){var n=this;this.handlers[e]=this.handlers[e].filter(function(a){return r&&a!==r?!0:(n.element.removeEventListener(e,a,!1),!1)})};H.prototype.unbindAll=function(){for(var e in this.handlers)this.unbind(e)};ot.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return t.handlers[e].length===0})};Object.defineProperties(H.prototype,ot);var C=function(){this.eventElements=[]};C.prototype.eventElement=function(e){var r=this.eventElements.filter(function(n){return n.element===e})[0];return r||(r=new H(e),this.eventElements.push(r)),r};C.prototype.bind=function(e,r,n){this.eventElement(e).bind(r,n)};C.prototype.unbind=function(e,r,n){var a=this.eventElement(e);a.unbind(r,n),a.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(a),1)};C.prototype.unbindAll=function(){this.eventElements.forEach(function(e){return e.unbindAll()}),this.eventElements=[]};C.prototype.once=function(e,r,n){var a=this.eventElement(e),u=function(l){a.unbind(r,u),n(l)};a.bind(r,u)};function O(t){if(typeof window.CustomEvent=="function")return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function P(t,e,r,n,a){n===void 0&&(n=!0),a===void 0&&(a=!1);var u;if(e==="top")u=["contentHeight","containerHeight","scrollTop","y","up","down"];else if(e==="left")u=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");ht(t,r,u,n,a)}function ht(t,e,r,n,a){var u=r[0],l=r[1],i=r[2],o=r[3],c=r[4],p=r[5];n===void 0&&(n=!0),a===void 0&&(a=!1);var s=t.element;t.reach[o]=null,s[i]<1&&(t.reach[o]="start"),s[i]>t[u]-t[l]-1&&(t.reach[o]="end"),e&&(s.dispatchEvent(O("ps-scroll-"+o)),e<0?s.dispatchEvent(O("ps-scroll-"+c)):e>0&&s.dispatchEvent(O("ps-scroll-"+p)),n&&ut(t,o)),t.reach[o]&&(e||a)&&s.dispatchEvent(O("ps-"+o+"-reach-"+t.reach[o]))}function d(t){return parseInt(t,10)||0}function ft(t){return Y(t,"input,[contenteditable]")||Y(t,"select,[contenteditable]")||Y(t,"textarea,[contenteditable]")||Y(t,"button,[contenteditable]")}function dt(t){var e=w(t);return d(e.width)+d(e.paddingLeft)+d(e.paddingRight)+d(e.borderLeftWidth)+d(e.borderRightWidth)}var E={isWebKit:typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator<"u"&&navigator.msMaxTouchPoints,isChrome:typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent)};function L(t){var e=t.element,r=Math.floor(e.scrollTop),n=e.getBoundingClientRect();t.containerWidth=Math.floor(n.width),t.containerHeight=Math.floor(n.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(Z(e,m.element.rail("x")).forEach(function(a){return R(a)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(Z(e,m.element.rail("y")).forEach(function(a){return R(a)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=z(t,d(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=d((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=z(t,d(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=d(r*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),pt(e,t),t.scrollbarXActive?e.classList.add(m.state.active("x")):(e.classList.remove(m.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=t.isRtl===!0?t.contentWidth:0),t.scrollbarYActive?e.classList.add(m.state.active("y")):(e.classList.remove(m.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function z(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function pt(t,e){var r={width:e.railXWidth},n=Math.floor(t.scrollTop);e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:r.left=t.scrollLeft,e.isScrollbarXUsingBottom?r.bottom=e.scrollbarXBottom-n:r.top=e.scrollbarXTop+n,y(e.scrollbarXRail,r);var a={top:n,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?a.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:a.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?a.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth*2-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:a.left=e.scrollbarYLeft+t.scrollLeft,y(e.scrollbarYRail,a),y(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),y(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function mt(t){t.event.bind(t.scrollbarY,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var r=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top,n=r>t.scrollbarYTop?1:-1;t.element.scrollTop+=n*t.containerHeight,L(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var r=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left,n=r>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=n*t.containerWidth,L(t),e.stopPropagation()})}var D=null;function gt(t){tt(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"]),tt(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"])}function tt(t,e){var r=e[0],n=e[1],a=e[2],u=e[3],l=e[4],i=e[5],o=e[6],c=e[7],p=e[8],s=t.element,f=null,g=null,h=null;function b(v){v.touches&&v.touches[0]&&(v[a]=v.touches[0]["page"+c.toUpperCase()]),D===l&&(s[o]=f+h*(v[a]-g),rt(t,c),L(t),v.stopPropagation(),v.preventDefault())}function T(){nt(t,c),t[p].classList.remove(m.state.clicking),document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",T),D=null}function x(v){D===null&&(D=l,f=s[o],v.touches&&(v[a]=v.touches[0]["page"+c.toUpperCase()]),g=v[a],h=(t[n]-t[r])/(t[u]-t[i]),v.touches?(document.addEventListener("touchmove",b,{passive:!1}),document.addEventListener("touchend",T)):(document.addEventListener("mousemove",b),document.addEventListener("mouseup",T)),t[p].classList.add(m.state.clicking)),v.stopPropagation(),v.cancelable&&v.preventDefault()}t[l].addEventListener("mousedown",x),t[l].addEventListener("touchstart",x)}function vt(t){var e=t.element,r=function(){return Y(e,":hover")},n=function(){return Y(t.scrollbarX,":focus")||Y(t.scrollbarY,":focus")};function a(u,l){var i=Math.floor(e.scrollTop);if(u===0){if(!t.scrollbarYActive)return!1;if(i===0&&l>0||i>=t.contentHeight-t.containerHeight&&l<0)return!t.settings.wheelPropagation}var o=e.scrollLeft;if(l===0){if(!t.scrollbarXActive)return!1;if(o===0&&u<0||o>=t.contentWidth-t.containerWidth&&u>0)return!t.settings.wheelPropagation}return!0}t.event.bind(t.ownerDocument,"keydown",function(u){if(!(u.isDefaultPrevented&&u.isDefaultPrevented()||u.defaultPrevented)&&!(!r()&&!n())){var l=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(l){if(l.tagName==="IFRAME")l=l.contentDocument.activeElement;else for(;l.shadowRoot;)l=l.shadowRoot.activeElement;if(ft(l))return}var i=0,o=0;switch(u.which){case 37:u.metaKey?i=-t.contentWidth:u.altKey?i=-t.containerWidth:i=-30;break;case 38:u.metaKey?o=t.contentHeight:u.altKey?o=t.containerHeight:o=30;break;case 39:u.metaKey?i=t.contentWidth:u.altKey?i=t.containerWidth:i=30;break;case 40:u.metaKey?o=-t.contentHeight:u.altKey?o=-t.containerHeight:o=-30;break;case 32:u.shiftKey?o=t.containerHeight:o=-t.containerHeight;break;case 33:o=t.containerHeight;break;case 34:o=-t.containerHeight;break;case 36:o=t.contentHeight;break;case 35:o=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&i!==0||t.settings.suppressScrollY&&o!==0||(e.scrollTop-=o,e.scrollLeft+=i,L(t),a(i,o)&&u.preventDefault())}})}function bt(t){var e=t.element;function r(l,i){var o=Math.floor(e.scrollTop),c=e.scrollTop===0,p=o+e.offsetHeight===e.scrollHeight,s=e.scrollLeft===0,f=e.scrollLeft+e.offsetWidth===e.scrollWidth,g;return Math.abs(i)>Math.abs(l)?g=c||p:g=s||f,g?!t.settings.wheelPropagation:!0}function n(l){var i=l.deltaX,o=-1*l.deltaY;return(typeof i>"u"||typeof o>"u")&&(i=-1*l.wheelDeltaX/6,o=l.wheelDeltaY/6),l.deltaMode&&l.deltaMode===1&&(i*=10,o*=10),i!==i&&o!==o&&(i=0,o=l.wheelDelta),l.shiftKey?[-o,-i]:[i,o]}function a(l,i,o){if(!E.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(l))return!1;for(var c=l;c&&c!==e;){if(c.classList.contains(m.element.consuming))return!0;var p=w(c);if(o&&p.overflowY.match(/(scroll|auto)/)){var s=c.scrollHeight-c.clientHeight;if(s>0&&(c.scrollTop>0&&o<0||c.scrollTop<s&&o>0))return!0}if(i&&p.overflowX.match(/(scroll|auto)/)){var f=c.scrollWidth-c.clientWidth;if(f>0&&(c.scrollLeft>0&&i<0||c.scrollLeft<f&&i>0))return!0}c=c.parentNode}return!1}function u(l){var i=n(l),o=i[0],c=i[1];if(!a(l.target,o,c)){var p=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(c?e.scrollTop-=c*t.settings.wheelSpeed:e.scrollTop+=o*t.settings.wheelSpeed,p=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(o?e.scrollLeft+=o*t.settings.wheelSpeed:e.scrollLeft-=c*t.settings.wheelSpeed,p=!0):(e.scrollTop-=c*t.settings.wheelSpeed,e.scrollLeft+=o*t.settings.wheelSpeed),L(t),p=p||r(o,c),p&&!l.ctrlKey&&(l.stopPropagation(),l.preventDefault())}}typeof window.onwheel<"u"?t.event.bind(e,"wheel",u):typeof window.onmousewheel<"u"&&t.event.bind(e,"mousewheel",u)}function yt(t){if(!E.supportsTouch&&!E.supportsIePointer)return;var e=t.element,r={startOffset:{},startTime:0,speed:{},easingLoop:null};function n(s,f){var g=Math.floor(e.scrollTop),h=e.scrollLeft,b=Math.abs(s),T=Math.abs(f);if(T>b){if(f<0&&g===t.contentHeight-t.containerHeight||f>0&&g===0)return window.scrollY===0&&f>0&&E.isChrome}else if(b>T&&(s<0&&h===t.contentWidth-t.containerWidth||s>0&&h===0))return!0;return!0}function a(s,f){e.scrollTop-=f,e.scrollLeft-=s,L(t)}function u(s){return s.targetTouches?s.targetTouches[0]:s}function l(s){return s.target===t.scrollbarX||s.target===t.scrollbarY||s.pointerType&&s.pointerType==="pen"&&s.buttons===0?!1:!!(s.targetTouches&&s.targetTouches.length===1||s.pointerType&&s.pointerType!=="mouse"&&s.pointerType!==s.MSPOINTER_TYPE_MOUSE)}function i(s){if(l(s)){var f=u(s);r.startOffset.pageX=f.pageX,r.startOffset.pageY=f.pageY,r.startTime=new Date().getTime(),r.easingLoop!==null&&clearInterval(r.easingLoop)}}function o(s,f,g){if(!e.contains(s))return!1;for(var h=s;h&&h!==e;){if(h.classList.contains(m.element.consuming))return!0;var b=w(h);if(g&&b.overflowY.match(/(scroll|auto)/)){var T=h.scrollHeight-h.clientHeight;if(T>0&&(h.scrollTop>0&&g<0||h.scrollTop<T&&g>0))return!0}if(f&&b.overflowX.match(/(scroll|auto)/)){var x=h.scrollWidth-h.clientWidth;if(x>0&&(h.scrollLeft>0&&f<0||h.scrollLeft<x&&f>0))return!0}h=h.parentNode}return!1}function c(s){if(l(s)){var f=u(s),g={pageX:f.pageX,pageY:f.pageY},h=g.pageX-r.startOffset.pageX,b=g.pageY-r.startOffset.pageY;if(o(s.target,h,b))return;a(h,b),r.startOffset=g;var T=new Date().getTime(),x=T-r.startTime;x>0&&(r.speed.x=h/x,r.speed.y=b/x,r.startTime=T),n(h,b)&&s.cancelable&&s.preventDefault()}}function p(){t.settings.swipeEasing&&(clearInterval(r.easingLoop),r.easingLoop=setInterval(function(){if(t.isInitialized){clearInterval(r.easingLoop);return}if(!r.speed.x&&!r.speed.y){clearInterval(r.easingLoop);return}if(Math.abs(r.speed.x)<.01&&Math.abs(r.speed.y)<.01){clearInterval(r.easingLoop);return}a(r.speed.x*30,r.speed.y*30),r.speed.x*=.8,r.speed.y*=.8},10))}E.supportsTouch?(t.event.bind(e,"touchstart",i),t.event.bind(e,"touchmove",c),t.event.bind(e,"touchend",p)):E.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",i),t.event.bind(e,"pointermove",c),t.event.bind(e,"pointerup",p)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",i),t.event.bind(e,"MSPointerMove",c),t.event.bind(e,"MSPointerUp",p)))}var Tt=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},wt={"click-rail":mt,"drag-thumb":gt,keyboard:vt,wheel:bt,touch:yt},W=function(e,r){var n=this;if(r===void 0&&(r={}),typeof e=="string"&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=e,e.classList.add(m.main),this.settings=Tt();for(var a in r)this.settings[a]=r[a];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var u=function(){return e.classList.add(m.state.focus)},l=function(){return e.classList.remove(m.state.focus)};this.isRtl=w(e).direction==="rtl",this.isRtl===!0&&e.classList.add(m.rtl),this.isNegativeScroll=function(){var c=e.scrollLeft,p=null;return e.scrollLeft=-1,p=e.scrollLeft<0,e.scrollLeft=c,p}(),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new C,this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=A(m.element.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=A(m.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",u),this.event.bind(this.scrollbarX,"blur",l),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var i=w(this.scrollbarXRail);this.scrollbarXBottom=parseInt(i.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=d(i.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=d(i.borderLeftWidth)+d(i.borderRightWidth),y(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=d(i.marginLeft)+d(i.marginRight),y(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=A(m.element.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=A(m.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",u),this.event.bind(this.scrollbarY,"blur",l),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var o=w(this.scrollbarYRail);this.scrollbarYRight=parseInt(o.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=d(o.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?dt(this.scrollbarY):null,this.railBorderYWidth=d(o.borderTopWidth)+d(o.borderBottomWidth),y(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=d(o.marginTop)+d(o.marginBottom),y(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(c){return wt[c](n)}),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",function(c){return n.onScroll(c)}),L(this)};W.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,y(this.scrollbarXRail,{display:"block"}),y(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=d(w(this.scrollbarXRail).marginLeft)+d(w(this.scrollbarXRail).marginRight),this.railYMarginHeight=d(w(this.scrollbarYRail).marginTop)+d(w(this.scrollbarYRail).marginBottom),y(this.scrollbarXRail,{display:"none"}),y(this.scrollbarYRail,{display:"none"}),L(this),P(this,"top",0,!1,!0),P(this,"left",0,!1,!0),y(this.scrollbarXRail,{display:""}),y(this.scrollbarYRail,{display:""}))};W.prototype.onScroll=function(e){this.isAlive&&(L(this),P(this,"top",this.element.scrollTop-this.lastScrollTop),P(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)};W.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),R(this.scrollbarX),R(this.scrollbarY),R(this.scrollbarXRail),R(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)};W.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(e){return!e.match(/^ps([-_].+|)$/)}).join(" ")};var Yt=W;function Xt(t){return class extends t{destroy$=new j;ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroy$.unsubscribe()}}}function At(t=!1){return e=>e.pipe(M(r=>(t&&console.log(r),I("CUSTOM_ERROR")))).pipe(U(r=>r!=="CUSTOM_ERROR"))}function st(){let t=new Date().getTime(),e=typeof performance<"u"&&performance.now&&performance.now()*1e3||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){let n=Math.random()*16;return t>0?(n=(t+n)%16|0,t=Math.floor(t/16)):(n=(e+n)%16|0,e=Math.floor(e/16)),(r==="x"?n:n&3|8).toString(16)})}function xt(t){return/[\u0600-\u06FF]+/.test(t)}var lt=t=>(t.split(" ").map(e=>(xt(e)?"\u202A":"\u202C")+e).join(" "),t);function it(t){return class extends t{clone(r){let n=this.constructor;return Object.assign(new n,this,r)}}}var X=class extends it(class{}){constructor(r="",n="user"){super();this.content=r;this.role=n;this.id=st()}context;end_turn;function_call;tool_calls;id;isUser(){return this.role==="user"}isAssistant(){return this.role==="assistant"}isError(){return this.role==="error"}};var at=class t{http=S(q);urlService=S(G);store=S(J);messages=V([]);sendMessage(e){return this.messages.update(r=>[...r,new X(e,"user")]),this.http.post(this.urlService.URLS.CHAT,k({messages:this.messages()},this.store.streamId()?{stream_id:this.store.streamId()}:null)).pipe(M(r=>{throw new X().clone({content:r.message,role:"error"}),new Error(r)})).pipe(B(r=>(r.message.content=lt(this.formatText(r.message.content)),r.message=new X().clone(r.message),this.messages.update(n=>[...n,r.message]),r)))}formatText(e){let r=e.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");return r=r.replace(/\[(.*?)\]/g,'<pre class="d-inline"><small class="px-1 text-primary">$1<i class="link-icon"></i></small></pre>'),r.trim()}static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})};var ct=class t{constructor(e){this.elementRef=e}text="";speed=20;animating=new K;ngOnInit(){this.animateText()}animateText(){this.animating.emit(!0);let e=0,r="",n=()=>{r+=this.text.charAt(e),this.elementRef.nativeElement.innerHTML=r,e++,e<this.text.length?setTimeout(n,this.speed*Math.random()):this.animating.emit(!1)};n()}static \u0275fac=function(r){return new(r||t)($(F))};static \u0275dir=_({type:t,selectors:[["","appTextWriterAnimator",""]],inputs:{text:"text",speed:"speed"},outputs:{animating:"animating"},standalone:!0})};export{Xt as a,Yt as b,At as c,at as d,ct as e};