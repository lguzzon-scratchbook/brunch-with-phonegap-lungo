(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
// Make it safe to do console.log() always.
(function (con) {
  var method;
  var dummy = function() {};
  var methods = ('assert,count,debug,dir,dirxml,error,exception,group,' +
     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,' + 
     'time,timeEnd,trace,warn').split(',');
  while (method = methods.pop()) {
    con[method] = con[method] || dummy;
  }
})(window.console = window.console || {});

;/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.3.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);

;/* QuoJS v2.3.6 - 2013/5/13
   http://quojs.tapquo.com
   Copyright (c) 2013 Javi Jimenez Villar (@soyjavi) - Licensed MIT */
(function(){var e;e=function(){var e,t,n;t=[];e=function(t,r){var i;if(!t){return n()}else if(e.toType(t)==="function"){return e(document).ready(t)}else{i=e.getDOMObject(t,r);return n(i,t)}};n=function(e,r){e=e||t;e.__proto__=n.prototype;e.selector=r||"";return e};e.extend=function(e){Array.prototype.slice.call(arguments,1).forEach(function(t){var n,r;r=[];for(n in t){r.push(e[n]=t[n])}return r});return e};n.prototype=e.fn={};return e}();window.Quo=e;"$$"in window||(window.$$=e)}).call(this);(function(){(function(e){var t,n,r,i,u,a,o,s,c,f,l;t={TYPE:"GET",MIME:"json"};r={script:"text/javascript, application/javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"};n=0;e.ajaxSettings={type:t.TYPE,async:true,success:{},error:{},context:null,dataType:t.MIME,headers:{},xhr:function(){return new window.XMLHttpRequest},crossDomain:false,timeout:0};e.ajax=function(n){var r,o,f,h;f=e.mix(e.ajaxSettings,n);if(f.type===t.TYPE){f.url+=e.serializeParameters(f.data,"?")}else{f.data=e.serializeParameters(f.data)}if(i(f.url)){return e.jsonp(f)}h=f.xhr();h.onreadystatechange=function(){if(h.readyState===4){clearTimeout(r);return c(h,f)}};h.open(f.type,f.url,f.async);s(h,f);if(f.timeout>0){r=setTimeout(function(){return l(h,f)},f.timeout)}try{h.send(f.data)}catch(d){o=d;h=o;a("Resource not found",h,f)}if(f.async){return h}else{return u(h,f)}};e.jsonp=function(t){var r,i,u,a;if(t.async){i="jsonp"+ ++n;u=document.createElement("script");a={abort:function(){e(u).remove();if(i in window){return window[i]={}}}};r=void 0;window[i]=function(n){clearTimeout(r);e(u).remove();delete window[i];return f(n,a,t)};u.src=t.url.replace(RegExp("=\\?"),"="+i);e("head").append(u);if(t.timeout>0){r=setTimeout(function(){return l(a,t)},t.timeout)}return a}else{return console.error("QuoJS.ajax: Unable to make jsonp synchronous call.")}};e.get=function(t,n,r,i){return e.ajax({url:t,data:n,success:r,dataType:i})};e.post=function(e,t,n,r){return o("POST",e,t,n,r)};e.put=function(e,t,n,r){return o("PUT",e,t,n,r)};e["delete"]=function(e,t,n,r){return o("DELETE",e,t,n,r)};e.json=function(n,r,i){return e.ajax({url:n,data:r,success:i,dataType:t.MIME})};e.serializeParameters=function(e,t){var n,r;if(t==null){t=""}r=t;for(n in e){if(e.hasOwnProperty(n)){if(r!==t){r+="&"}r+=""+encodeURIComponent(n)+"="+encodeURIComponent(e[n])}}if(r===t){return""}else{return r}};c=function(e,t){if(e.status>=200&&e.status<300||e.status===0){if(t.async){f(u(e,t),e,t)}}else{a("QuoJS.ajax: Unsuccesful request",e,t)}};f=function(e,t,n){n.success.call(n.context,e,t)};a=function(e,t,n){n.error.call(n.context,e,t,n)};s=function(e,t){var n;if(t.contentType){t.headers["Content-Type"]=t.contentType}if(t.dataType){t.headers["Accept"]=r[t.dataType]}for(n in t.headers){e.setRequestHeader(n,t.headers[n])}};l=function(e,t){e.onreadystatechange={};e.abort();a("QuoJS.ajax: Timeout exceeded",e,t)};o=function(t,n,r,i,u){return e.ajax({type:t,url:n,data:r,success:i,dataType:u,contentType:"application/x-www-form-urlencoded"})};u=function(e,n){var r,i;i=e.responseText;if(i){if(n.dataType===t.MIME){try{i=JSON.parse(i)}catch(u){r=u;i=r;a("QuoJS.ajax: Parse Error",e,n)}}else{if(n.dataType==="xml"){i=e.responseXML}}}return i};return i=function(e){return RegExp("=\\?").test(e)}})(Quo)}).call(this);(function(){(function(e){var t,n,r,i,u,a,o,s;t=[];i=Object.prototype;r=/^\s*<(\w+|!)[^>]*>/;u=document.createElement("table");a=document.createElement("tr");n={tr:document.createElement("tbody"),tbody:u,thead:u,tfoot:u,td:a,th:a,"*":document.createElement("div")};e.toType=function(e){return i.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()};e.isOwnProperty=function(e,t){return i.hasOwnProperty.call(e,t)};e.getDOMObject=function(t,n){var i,u,a;i=null;u=[1,9,11];a=e.toType(t);if(a==="array"){i=o(t)}else if(a==="string"&&r.test(t)){i=e.fragment(t.trim(),RegExp.$1);t=null}else if(a==="string"){i=e.query(document,t);if(n){if(i.length===1){i=e.query(i[0],n)}else{i=e.map(function(){return e.query(i,n)})}}}else if(u.indexOf(t.nodeType)>=0||t===window){i=[t];t=null}return i};e.map=function(t,n){var r,i,u,a;a=[];r=void 0;i=void 0;if(e.toType(t)==="array"){r=0;while(r<t.length){u=n(t[r],r);if(u!=null){a.push(u)}r++}}else{for(i in t){u=n(t[i],i);if(u!=null){a.push(u)}}}return s(a)};e.each=function(t,n){var r,i;r=void 0;i=void 0;if(e.toType(t)==="array"){r=0;while(r<t.length){if(n.call(t[r],r,t[r])===false){return t}r++}}else{for(i in t){if(n.call(t[i],i,t[i])===false){return t}}}return t};e.mix=function(){var t,n,r,i,u;r={};t=0;i=arguments.length;while(t<i){n=arguments[t];for(u in n){if(e.isOwnProperty(n,u)&&n[u]!==undefined){r[u]=n[u]}}t++}return r};e.fragment=function(t,r){var i;if(r==null){r="*"}if(!(r in n)){r="*"}i=n[r];i.innerHTML=""+t;return e.each(Array.prototype.slice.call(i.childNodes),function(){return i.removeChild(this)})};e.fn.map=function(t){return e.map(this,function(e,n){return t.call(e,n,e)})};e.fn.instance=function(e){return this.map(function(){return this[e]})};e.fn.filter=function(t){return e([].filter.call(this,function(n){return n.parentNode&&e.query(n.parentNode,t).indexOf(n)>=0}))};e.fn.forEach=t.forEach;e.fn.indexOf=t.indexOf;o=function(e){return e.filter(function(e){return e!==void 0&&e!==null})};return s=function(e){if(e.length>0){return[].concat.apply([],e)}else{return e}}})(Quo)}).call(this);(function(){(function(e){e.fn.attr=function(t,n){if(this.length===0){null}if(e.toType(t)==="string"&&n===void 0){return this[0].getAttribute(t)}else{return this.each(function(){return this.setAttribute(t,n)})}};e.fn.removeAttr=function(e){return this.each(function(){return this.removeAttribute(e)})};e.fn.data=function(e,t){return this.attr("data-"+e,t)};e.fn.removeData=function(e){return this.removeAttr("data-"+e)};e.fn.val=function(t){if(e.toType(t)==="string"){return this.each(function(){return this.value=t})}else{if(this.length>0){return this[0].value}else{return null}}};e.fn.show=function(){return this.style("display","block")};e.fn.hide=function(){return this.style("display","none")};e.fn.height=function(){var e;e=this.offset();return e.height};e.fn.width=function(){var e;e=this.offset();return e.width};e.fn.offset=function(){var e;e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:e.width,height:e.height}};return e.fn.remove=function(){return this.each(function(){if(this.parentNode!=null){return this.parentNode.removeChild(this)}})}})(Quo)}).call(this);(function(){(function(e){var t,n,r,i,u,a,o;r=null;t=/WebKit\/([\d.]+)/;n={Android:/(Android)\s+([\d.]+)/,ipad:/(iPad).*OS\s([\d_]+)/,iphone:/(iPhone\sOS)\s([\d_]+)/,Blackberry:/(BlackBerry|BB10|Playbook).*Version\/([\d.]+)/,FirefoxOS:/(Mozilla).*Mobile[^\/]*\/([\d\.]*)/,webOS:/(webOS|hpwOS)[\s\/]([\d.]+)/};e.isMobile=function(){r=r||u();return r.isMobile&&r.os.name!=="firefoxOS"};e.environment=function(){r=r||u();return r};e.isOnline=function(){return navigator.onLine};u=function(){var e,t;t=navigator.userAgent;e={};e.browser=i(t);e.os=a(t);e.isMobile=!!e.os;e.screen=o();return e};i=function(e){var n;n=e.match(t);if(n){return n[0]}else{return e}};a=function(e){var t,r,i;t=null;for(r in n){i=e.match(n[r]);if(i){t={name:r==="iphone"||r==="ipad"?"ios":r,version:i[2].replace("_",".")};break}}return t};return o=function(){return{width:window.innerWidth,height:window.innerHeight}}})(Quo)}).call(this);(function(){(function(e){var t,n,r,i,u,a,o,s,c,f,l,h;t=1;i={};r={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};n={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",touch:"click",doubletap:"dblclick",orientationchange:"resize"};u=/complete|loaded|interactive/;e.fn.on=function(t,n,r){if(n==="undefined"||e.toType(n)==="function"){return this.bind(t,n)}else{return this.delegate(n,t,r)}};e.fn.off=function(t,n,r){if(n==="undefined"||e.toType(n)==="function"){return this.unbind(t,n)}else{return this.undelegate(n,t,r)}};e.fn.ready=function(t){if(u.test(document.readyState)){return t(e)}else{return e.fn.addEvent(document,"DOMContentLoaded",function(){return t(e)})}};e.Event=function(e,t){var n,r;n=document.createEvent("Events");n.initEvent(e,true,true,null,null,null,null,null,null,null,null,null,null,null,null);if(t){for(r in t){n[r]=t[r]}}return n};e.fn.bind=function(e,t){return this.each(function(){l(this,e,t)})};e.fn.unbind=function(e,t){return this.each(function(){h(this,e,t)})};e.fn.delegate=function(t,n,r){return this.each(function(i,u){l(u,n,r,t,function(n){return function(r){var i,o;o=e(r.target).closest(t,u).get(0);if(o){i=e.extend(a(r),{currentTarget:o,liveFired:u});return n.apply(o,[i].concat([].slice.call(arguments,1)))}}})})};e.fn.undelegate=function(e,t,n){return this.each(function(){h(this,t,n,e)})};e.fn.trigger=function(t,n,r){if(e.toType(t)==="string"){t=e.Event(t,n)}if(r!=null){t.originalEvent=r}return this.each(function(){this.dispatchEvent(t)})};e.fn.addEvent=function(e,t,n){if(e.addEventListener){return e.addEventListener(t,n,false)}else if(e.attachEvent){return e.attachEvent("on"+t,n)}else{return e["on"+t]=n}};e.fn.removeEvent=function(e,t,n){if(e.removeEventListener){return e.removeEventListener(t,n,false)}else if(e.detachEvent){return e.detachEvent("on"+t,n)}else{return e["on"+t]=null}};l=function(t,n,r,u,a){var c,l,h,d;n=s(n);h=f(t);l=i[h]||(i[h]=[]);c=a&&a(r,n);d={event:n,callback:r,selector:u,proxy:o(c,r,t),delegate:c,index:l.length};l.push(d);return e.fn.addEvent(t,d.event,d.proxy)};h=function(t,n,r,u){var a;n=s(n);a=f(t);return c(a,n,r,u).forEach(function(n){delete i[a][n.index];return e.fn.removeEvent(t,n.event,n.proxy)})};f=function(e){return e._id||(e._id=t++)};s=function(t){var r;r=e.isMobile()?t:n[t];return r||t};o=function(e,t,n){var r;t=e||t;r=function(e){var r;r=t.apply(n,[e].concat(e.data));if(r===false){e.preventDefault()}return r};return r};c=function(e,t,n,r){return(i[e]||[]).filter(function(e){return e&&(!t||e.event===t)&&(!n||e.callback===n)&&(!r||e.selector===r)})};return a=function(t){var n;n=e.extend({originalEvent:t},t);e.each(r,function(e,r){n[e]=function(){this[r]=function(){return true};return t[e].apply(t,arguments)};return n[r]=function(){return false}});return n}})(Quo)}).call(this);(function(){(function($$){var CURRENT_TOUCH,EVENT,FIRST_TOUCH,GESTURE,GESTURES,HOLD_DELAY,TAPS,TOUCH_TIMEOUT,_angle,_capturePinch,_captureRotation,_cleanGesture,_distance,_fingersPosition,_getTouches,_hold,_isSwipe,_listenTouches,_onTouchEnd,_onTouchMove,_onTouchStart,_parentIfText,_swipeDirection,_trigger;TAPS=null;EVENT=void 0;GESTURE={};FIRST_TOUCH=[];CURRENT_TOUCH=[];TOUCH_TIMEOUT=void 0;HOLD_DELAY=650;GESTURES=["touch","tap","singleTap","doubleTap","hold","swipe","swiping","swipeLeft","swipeRight","swipeUp","swipeDown","rotate","rotating","rotateLeft","rotateRight","pinch","pinching","pinchIn","pinchOut","drag","dragLeft","dragRight","dragUp","dragDown"];GESTURES.forEach(function(e){$$.fn[e]=function(t){var n;n=e==="touch"?"touchend":e;return $$(document.body).delegate(this.selector,n,t)};return this});$$(document).ready(function(){return _listenTouches()});_listenTouches=function(){var e;e=$$(document.body);e.bind("touchstart",_onTouchStart);e.bind("touchmove",_onTouchMove);e.bind("touchend",_onTouchEnd);return e.bind("touchcancel",_cleanGesture)};_onTouchStart=function(e){var t,n,r,i;EVENT=e;r=Date.now();t=r-(GESTURE.last||r);TOUCH_TIMEOUT&&clearTimeout(TOUCH_TIMEOUT);i=_getTouches(e);n=i.length;FIRST_TOUCH=_fingersPosition(i,n);GESTURE.el=$$(_parentIfText(i[0].target));GESTURE.fingers=n;GESTURE.last=r;if(!GESTURE.taps){GESTURE.taps=0}GESTURE.taps++;if(n===1){if(n>=1){GESTURE.gap=t>0&&t<=250}return setTimeout(_hold,HOLD_DELAY)}else if(n===2){GESTURE.initial_angle=parseInt(_angle(FIRST_TOUCH),10);GESTURE.initial_distance=parseInt(_distance(FIRST_TOUCH),10);GESTURE.angle_difference=0;return GESTURE.distance_difference=0}};_onTouchMove=function(e){var t,n,r;EVENT=e;if(GESTURE.el){r=_getTouches(e);t=r.length;if(t===GESTURE.fingers){CURRENT_TOUCH=_fingersPosition(r,t);n=_isSwipe(e);if(n){GESTURE.prevSwipe=true}if(n||GESTURE.prevSwipe===true){_trigger("swiping")}if(t===2){_captureRotation();_capturePinch();e.preventDefault()}}else{_cleanGesture()}}return true};_isSwipe=function(e){var t,n,r;t=false;if(CURRENT_TOUCH[0]){n=Math.abs(FIRST_TOUCH[0].x-CURRENT_TOUCH[0].x)>30;r=Math.abs(FIRST_TOUCH[0].y-CURRENT_TOUCH[0].y)>30;t=GESTURE.el&&(n||r)}return t};_onTouchEnd=function(e){var t,n,r,i,u;EVENT=e;_trigger("touch");if(GESTURE.fingers===1){if(GESTURE.taps===2&&GESTURE.gap){_trigger("doubleTap");_cleanGesture()}else if(_isSwipe()||GESTURE.prevSwipe){_trigger("swipe");u=_swipeDirection(FIRST_TOUCH[0].x,CURRENT_TOUCH[0].x,FIRST_TOUCH[0].y,CURRENT_TOUCH[0].y);_trigger("swipe"+u);_cleanGesture()}else{_trigger("tap");if(GESTURE.taps===1){TOUCH_TIMEOUT=setTimeout(function(){_trigger("singleTap");return _cleanGesture()},100)}}}else{t=false;if(GESTURE.angle_difference!==0){_trigger("rotate",{angle:GESTURE.angle_difference});i=GESTURE.angle_difference>0?"rotateRight":"rotateLeft";_trigger(i,{angle:GESTURE.angle_difference});t=true}if(GESTURE.distance_difference!==0){_trigger("pinch",{angle:GESTURE.distance_difference});r=GESTURE.distance_difference>0?"pinchOut":"pinchIn";_trigger(r,{distance:GESTURE.distance_difference});t=true}if(!t&&CURRENT_TOUCH[0]){if(Math.abs(FIRST_TOUCH[0].x-CURRENT_TOUCH[0].x)>10||Math.abs(FIRST_TOUCH[0].y-CURRENT_TOUCH[0].y)>10){_trigger("drag");n=_swipeDirection(FIRST_TOUCH[0].x,CURRENT_TOUCH[0].x,FIRST_TOUCH[0].y,CURRENT_TOUCH[0].y);_trigger("drag"+n)}}_cleanGesture()}return EVENT=void 0};_fingersPosition=function(e,t){var n,r;r=[];n=0;e=e[0].targetTouches?e[0].targetTouches:e;while(n<t){r.push({x:e[n].pageX,y:e[n].pageY});n++}return r};_captureRotation=function(){var angle,diff,i,symbol;angle=parseInt(_angle(CURRENT_TOUCH),10);diff=parseInt(GESTURE.initial_angle-angle,10);if(Math.abs(diff)>20||GESTURE.angle_difference!==0){i=0;symbol=GESTURE.angle_difference<0?"-":"+";while(Math.abs(diff-GESTURE.angle_difference)>90&&i++<10){eval("diff "+symbol+"= 180;")}GESTURE.angle_difference=parseInt(diff,10);return _trigger("rotating",{angle:GESTURE.angle_difference})}};_capturePinch=function(){var e,t;t=parseInt(_distance(CURRENT_TOUCH),10);e=GESTURE.initial_distance-t;if(Math.abs(e)>10){GESTURE.distance_difference=e;return _trigger("pinching",{distance:e})}};_trigger=function(e,t){if(GESTURE.el){t=t||{};if(CURRENT_TOUCH[0]){t.iniTouch=GESTURE.fingers>1?FIRST_TOUCH:FIRST_TOUCH[0];t.currentTouch=GESTURE.fingers>1?CURRENT_TOUCH:CURRENT_TOUCH[0]}return GESTURE.el.trigger(e,t,EVENT)}};_cleanGesture=function(e){FIRST_TOUCH=[];CURRENT_TOUCH=[];GESTURE={};return clearTimeout(TOUCH_TIMEOUT)};_angle=function(e){var t,n,r;t=e[0];n=e[1];r=Math.atan((n.y-t.y)*-1/(n.x-t.x))*(180/Math.PI);if(r<0){return r+180}else{return r}};_distance=function(e){var t,n;t=e[0];n=e[1];return Math.sqrt((n.x-t.x)*(n.x-t.x)+(n.y-t.y)*(n.y-t.y))*-1};_getTouches=function(e){if($$.isMobile()){return e.touches}else{return[e]}};_parentIfText=function(e){if("tagName"in e){return e}else{return e.parentNode}};_swipeDirection=function(e,t,n,r){var i,u;i=Math.abs(e-t);u=Math.abs(n-r);if(i>=u){if(e-t>0){return"Left"}else{return"Right"}}else{if(n-r>0){return"Up"}else{return"Down"}}};return _hold=function(){if(GESTURE.last&&Date.now()-GESTURE.last>=HOLD_DELAY){_trigger("hold");return GESTURE.taps=0}}})(Quo)}).call(this);(function(){(function(e){e.fn.text=function(t){if(t||e.toType(t)==="number"){return this.each(function(){return this.textContent=t})}else{return this[0].textContent}};e.fn.html=function(t){var n;n=e.toType(t);if(t||n==="number"||n==="string"){return this.each(function(){var e,r,i,u;if(n==="string"||n==="number"){return this.innerHTML=t}else{this.innerHTML=null;if(n==="array"){u=[];for(r=0,i=t.length;r<i;r++){e=t[r];u.push(this.appendChild(e))}return u}else{return this.appendChild(t)}}})}else{return this[0].innerHTML}};e.fn.append=function(t){var n;n=e.toType(t);return this.each(function(){var e=this;if(n==="string"){return this.insertAdjacentHTML("beforeend",t)}else if(n==="array"){return t.each(function(t,n){return e.appendChild(n)})}else{return this.appendChild(t)}})};e.fn.prepend=function(t){var n;n=e.toType(t);return this.each(function(){var e=this;if(n==="string"){return this.insertAdjacentHTML("afterbegin",t)}else if(n==="array"){return t.each(function(t,n){return e.insertBefore(n,e.firstChild)})}else{return this.insertBefore(t,this.firstChild)}})};e.fn.replaceWith=function(t){var n;n=e.toType(t);this.each(function(){var e=this;if(this.parentNode){if(n==="string"){return this.insertAdjacentHTML("beforeBegin",t)}else if(n==="array"){return t.each(function(t,n){return e.parentNode.insertBefore(n,e)})}else{return this.parentNode.insertBefore(t,this)}}});return this.remove()};return e.fn.empty=function(){return this.each(function(){return this.innerHTML=null})}})(Quo)}).call(this);(function(){(function(e){var t,n,r,i,u,a;r="parentNode";t=/^\.([\w-]+)$/;n=/^#[\w\d-]+$/;i=/^[\w-]+$/;e.query=function(e,r){var u;r=r.trim();if(t.test(r)){u=e.getElementsByClassName(r.replace(".",""))}else if(i.test(r)){u=e.getElementsByTagName(r)}else if(n.test(r)&&e===document){u=e.getElementById(r.replace("#",""));if(!u){u=[]}}else{u=e.querySelectorAll(r)}if(u.nodeType){return[u]}else{return Array.prototype.slice.call(u)}};e.fn.find=function(t){var n;if(this.length===1){n=Quo.query(this[0],t)}else{n=this.map(function(){return Quo.query(this,t)})}return e(n)};e.fn.parent=function(e){var t;t=e?a(this):this.instance(r);return u(t,e)};e.fn.siblings=function(e){var t;t=this.map(function(e,t){return Array.prototype.slice.call(t.parentNode.children).filter(function(e){return e!==t})});return u(t,e)};e.fn.children=function(e){var t;t=this.map(function(){return Array.prototype.slice.call(this.children)});return u(t,e)};e.fn.get=function(e){if(e===undefined){return this}else{return this[e]}};e.fn.first=function(){return e(this[0])};e.fn.last=function(){return e(this[this.length-1])};e.fn.closest=function(t,n){var r,i;i=this[0];r=e(t);if(!r.length){i=null}while(i&&r.indexOf(i)<0){i=i!==n&&i!==document&&i.parentNode}return e(i)};e.fn.each=function(e){this.forEach(function(t,n){return e.call(t,n,t)});return this};a=function(t){var n;n=[];while(t.length>0){t=e.map(t,function(e){if((e=e.parentNode)&&e!==document&&n.indexOf(e)<0){n.push(e);return e}})}return n};return u=function(t,n){if(n===undefined){return e(t)}else{return e(t).filter(n)}}})(Quo)}).call(this);(function(){(function(e){var t,n,r;t=["-webkit-","-moz-","-ms-","-o-",""];e.fn.addClass=function(e){return this.each(function(){if(!r(e,this.className)){this.className+=" "+e;return this.className=this.className.trim()}})};e.fn.removeClass=function(e){return this.each(function(){if(!e){return this.className=""}else{if(r(e,this.className)){return this.className=this.className.replace(e," ").replace(/\s+/g," ").trim()}}})};e.fn.toggleClass=function(e){return this.each(function(){if(r(e,this.className)){return this.className=this.className.replace(e," ")}else{this.className+=" "+e;return this.className=this.className.trim()}})};e.fn.hasClass=function(e){return r(e,this[0].className)};e.fn.style=function(e,t){if(t){return this.each(function(){return this.style[e]=t})}else{return this[0].style[e]||n(this[0],e)}};e.fn.css=function(e,t){return this.style(e,t)};e.fn.vendor=function(e,n){var r,i,u,a;a=[];for(i=0,u=t.length;i<u;i++){r=t[i];a.push(this.style(""+r+e,n))}return a};r=function(e,t){var n;n=t.split(/\s+/g);return n.indexOf(e)>=0};return n=function(e,t){return document.defaultView.getComputedStyle(e,"")[t]}})(Quo)}).call(this);
;/* lungo v2.2.1 - 2013/8/14
   http://lungo.tapquo.com
   Copyright (c) 2013 Tapquo S.L. - Licensed GPLv3, Commercial */
!function(){var a;window.Lungo=a={};a.VERSION="2.2.1";a.DEVICE=null;a.Config||(a.Config={});a.Element||(a.Element={});a.Data||(a.Data={});a.Sugar||(a.Sugar={});a.View||(a.View={});a.Boot||(a.Boot={});a.Device||(a.Device={});a.ready||(a.ready=Quo().ready)}.call(this);!function(){Lungo.Attributes={count:{selector:"*",html:'<span class="tag count">{{value}}</span>'},pull:{selector:"*",html:'<div data-control="pull" data-icon="{{value}}" data-loading>\n  <strong></strong>\n</div>'},progress:{selector:"*",html:'<div class="progress">\n  <span class="bar"><span class="value" style="width:{{value}};"></span></span>\n</div>'},label:{selector:"*",html:"<abbr>{{value}}</abbr>"},icon:{selector:"*",html:'<span class="icon {{value}}"></span>'},image:{selector:"*",html:'<img src="{{value}}" class="icon" />'},title:{selector:"header",html:'<h1 class="title centered">{{value}}</h1>'},loading:{selector:"*",html:'<div class="loading {{value}}">\n  <span class="top"></span>\n  <span class="right"></span>\n  <span class="bottom"></span>\n  <span class="left"></span>\n</div>'},back:{selector:"header",html:'<nav class="left"><a href="#" data-view-section="back"><span class="icon {{value}}"></span></a></nav>'}}}.call(this);!function(){Lungo.Cache=function(a){var b,c,d,e,f;f={};e=function(d,e){if(b(d)){return f[d]=a.Core.mix(c(d),e)}else{return f[d]=e}};c=function(a,b){if(arguments.length===1){return f[a]}else{if(f[arguments[0]]){return f[arguments[0]][arguments[1]]}else{return void 0}}};d=function(a,b){if(arguments.length===1){return delete f[a]}else{return delete f[arguments[0]][arguments[1]]}};b=function(a){if(f[a]){return true}else{return false}};return{set:e,get:c,remove:d,exists:b}}(Lungo)}.call(this);!function(){Lungo.Constants={ELEMENT:{SECTION:"section",ARTICLE:"article",ASIDE:"aside",BODY:"body",DIV:"div",LIST:"<ul></ul>",LI:"li"},CONTROL:{MENU:"[data-control=menu]"},QUERY:{ARTICLE_ROUTER:"[data-view-article]",SECTION_ROUTER:"[data-view-section]",ARTICLE_ROUTER_TOUCH:"header [data-view-article], footer [data-view-article], nav[data-control] [data-view-article]",SECTION_ROUTER_TOUCH:"header [data-view-section], footer [data-view-section], nav[data-control] [data-view-section]",ARTICLE_ROUTER_TAP:"article [data-view-article]",SECTION_ROUTER_TAP:"article [data-view-section]",ASIDE_ROUTER:"[data-view-aside]",MENU_ROUTER:"[data-view-menu]",LIST_IN_ELEMENT:"article.list",ELEMENT_SCROLLABLE:"article.scroll",HREF_ASIDE:"section[data-aside].drag",HREF_ROUTER:"a[href][data-router]",MENU_HREF:"[data-control=menu] a[href]",CONTROL_CHECKBOX:"[data-control-checkbox]",NAVIGATION_ITEM:'a[href][data-router="article"]',ARTICLE_REFERENCE:"[data-article]",TITLE:"header .title, footer .title",ACTIVE_LIST_ITEM:"li a.active, li.active"},CLASS:{ACTIVE:"active",ASIDE:"aside",SHOW:"show",HIDE:"hide",HIDING:"hiding",RIGHT:"right",LEFT:"left",HORIZONTAL:"horizontal",SMALL:"small",LAST:"last"},TRIGGER:{LOAD:"load",UNLOAD:"unload"},EVENT:{TRANSITION_END:["webkitAnimationEnd","animationend"],CHANGE:"change"},TRANSITION:{DURATION:400,ORIGIN:"transition-origin",ATTR:"transition"},ASIDE:{NORMAL:264},ATTRIBUTE:{ID:"id",HREF:"href",TITLE:"title",ARTICLE:"article",CLASS:"class",WIDTH:"width",HEIGHT:"height",PIXEL:"px",PERCENT:"%",ROUTER:"router",FIRST:"first",LAST:"last",EMPTY:"",CHILDREN:"children",TRANSITION:"transition",STATE:"state",DIRECTION:"direction"},BINDING:{START:"{{",END:"}}",KEY:"value",SELECTOR:"{{value}}"},DEVICE:{PHONE:"phone",TABLET:"tablet",TV:"tv"},ERROR:{DATABASE:"ERROR: Connecting to Data.Sql.",DATABASE_TRANSACTION:"ERROR: Data.Sql >> ",ROUTER:"ERROR: The target does not exists >>",LOADING_RESOURCE:"ERROR: Loading resource: "}}}.call(this);!function(){Lungo.Core=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Array.prototype;j=function(b,c){if(!a.Core.isMobile()){return console[b===1?"log":b===2?"warn":"error"](c)}};f=function(){var a,b;a=m(arguments);b=a.shift();if(n(b)==="function"){return b.apply(null,a)}};d=function(a,b){return function(){return b.apply(a,m(arguments))}};k=function(){var a,b,c,d,e;c=c||{};a=0;d=arguments.length;while(a<d){b=arguments[a];for(e in b){if(i(b,e)){c[e]=b[e]}}a++}return c};i=function(a,c){return b.isOwnProperty(a,c)};n=function(a){return b.toType(a)};m=function(a){return c.slice.call(a,0)};h=function(){return b.isMobile()};e=function(){return b.environment()};l=function(a,b,c){var d;d=c==="desc"?-1:1;return a.sort(function(a,c){if(a[b]<c[b]){return-d}else{if(a[b]>c[b]){return d}else{return 0}}})};g=function(a,b,c){var d,e,f,g;g=null;e=0;f=a.length;while(e<f){d=a[e];if(d[b]===c){g=d;break}e++}return g};return{log:j,execute:f,bind:d,mix:k,isOwnProperty:i,toType:n,toArray:m,isMobile:h,environment:e,orderByProperty:l,findByProperty:g}}(Lungo,Quo)}.call(this);!function(){Lungo.dom=function(a){return $$(a)}}.call(this);!function(){Lungo.Events=function(a){var b,c;b=" ";c=function(c){var d,e,f,g,h;h=[];for(e in c){g=e.indexOf(b);if(g>0){f=e.substring(0,g);d=e.substring(g+1);h.push(a.dom(document.body).delegate(d,f,c[e]))}else{h.push(void 0)}}return h};return{init:c}}(Lungo)}.call(this);!function(){Lungo.Fallback=function(a){var b;b=function(){var b,c;b=a.Core.environment();c=b.isMobile&&b.os.name==="Android"&&b.os.version<"3"?"absolute":"fixed";return a.dom(document.body).data("position",c)};return{fixPositionInAndroid:b}}(Lungo)}.call(this);!function(){Lungo.init=function(a){var b;Lungo.Config=a;if(a&&a.resources){Lungo.Resource.load(a.resources)}Lungo.Boot.Device.init();b=Lungo.DEVICE===Lungo.Constants.DEVICE.PHONE;Lungo.Router=b?Lungo.RouterPhone:Lungo.RouterTablet;Lungo.Boot.Events.init();Lungo.Boot.Data.init();return Lungo.Boot.Layout.init()}}.call(this);!function(){Lungo.Notification=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;v=[];q=null;y=null;d=1;b=a.Constants.ATTRIBUTE;c=a.Constants.BINDING;h=a.Constants.TRANSITION;f={BODY:"body",NOTIFICATION:".notification",MODAL:".notification .window",MODAL_HREF:".notification .window a",WINDOW_CLOSABLE:".notification [data-action=close], .notification > .error, .notification > .success",CONFIRM_BUTTONS:".notification .confirm button, .notification .push"};g={MODAL:"modal",VISIBLE:"visible",SHOW:"show",WORKING:"working",INPUT:"input"};e='<div class="notification"><div class="window"></div></div>';n=function(b,d,e,f){var g,h;h=void 0;if(b!=null){h=t(d,null,b)}else{g=a.Attributes.loading.html;h=g.replace(c.START+c.KEY+c.END,"white")}w(h,"growl");return r(e,f)};k=function(){y.removeClass("show");return setTimeout(function(){return q.removeClass("show").removeClass("html").removeClass("confirm").removeClass("notify").removeClass("growl")},h.DURATION/2)};i=function(a){var b;v=a;b=t(a.title,a.description,a.icon);b+=p(a.accept,"accept");b+=p(a.cancel,"cancel");return w(b,"confirm")};o=function(a,b,c,d,e){if(c==null){c="ok"}return u(a,b,c,"success",d,e)};j=function(a,b,c,d,e){if(c==null){c="remove-sign"}return u(a,b,c,"error",d,e)};l=function(a,b,c,d){if(b){a+='<button class="anchor" data-action="close">'+b+"</button>"}w(a,"html "+c);return r(d)};m=function(a,b,c){w(t(a,null,b),"push "+c,false);return r(5)};s=function(){a.dom(f.BODY).append(e);q=a.dom(f.NOTIFICATION);y=q.children(".window");return x()};w=function(a,b,c){if(c==null){c=true}if(c){q.removeClass("push")}else{q.addClass("push")}if(!y.hasClass("show")){q.addClass("show")}else{y.removeClass(g.SHOW)}return setTimeout(function(){y.html(a);return y.attr("class","window "+b+" show")},h.DURATION/2)};r=function(a,b){var c=this;if(a!=null&&a>0){return setTimeout(function(){if(b){return b.call(void 0,b)}else{return k()}},a*1e3)}};u=function(a,b,c,d,e,f){w(t(a,b,c),d);return r(e,f)};t=function(a,b,c){b=!b?"&nbsp;":b;a=!a?"&nbsp;":a;return'<span class="icon '+c+'"></span><strong class="text bold">'+a+"</strong><small>"+b+"</small>"};p=function(a,b){return'<button data-callback="'+b+'" class="anchor">'+a.label+"</a>"};x=function(){a.dom(f.CONFIRM_BUTTONS).touch(function(b){var c,d;c=a.dom(this);if(v[c.data("callback")]!=null){d=v[c.data("callback")].callback;v=null;if(d!=null){d.call(void 0,d)}}return k()});return a.dom(f.WINDOW_CLOSABLE).tap(k)};s();return{show:n,hide:k,error:j,success:o,confirm:i,html:l,push:m}}(Lungo)}.call(this);!function(){Lungo.Resource=function(a,b){var c,d,e,f,g,h;c=a.Constants.ELEMENT;d=a.Constants.ERROR;e=function(b,c){var d,e,g;if(a.Core.toType(b)==="array"){d=0;e=b.length;g=[];while(d<e){f(b[d]);g.push(d++)}return g}else{return f(b,c)}};f=function(b,c){var d;try{return h(g(b),c)}catch(e){d=e;return a.Core.log(3,d.message)}};g=function(a){return b.ajax({url:a,async:false,dataType:"html",error:function(){return console.error(d.LOADING_RESOURCE+a)}})};h=function(b,d){if(a.Core.toType(b)==="string"){d=d?d:c.BODY;return a.dom(d).append(b)}};return{load:e}}(Lungo,Quo)}.call(this);!function(){!function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;g=a.document;h=g.documentElement;d="scroll-enabled";c="ontouchmove"in g;l="WebkitOverflowScrolling"in h.style||!c&&a.screen.width>1200||function(){var b,c,d,e;b=a.navigator.userAgent;c=b.match(/AppleWebKit\/([0-9]+)/);e=c&&c[1];d=c&&e>=534;return b.match(/Android ([0-9]+)/)&&RegExp.$1>=3&&d||b.match(RegExp(" Version\\/([0-9]+)"))&&RegExp.$1>=0&&a.blackberry&&d||b.indexOf(/PlayBook/)>-1&&RegExp.$1>=0&&d||b.match(/Fennec\/([0-9]+)/)&&RegExp.$1>=4||b.match(/wOSBrowser\/([0-9]+)/)&&RegExp.$1>=233&&d||b.match(/NokiaBrowser\/([0-9\.]+)/)&&parseFloat(RegExp.$1)===7.3&&c&&e>=533}();f=function(a,b,c,d){return c*((a=a/d-1)*a*a+1)+b};j=false;m=void 0;n=function(b,c){var d,e,f,g,h,i,j;f=0;i=b.scrollLeft;j=b.scrollTop;h={top:"+0",left:"+0",duration:100,easing:a.overthrow.easing};d=void 0;e=void 0;if(c){for(g in h){if(c[g]!==void 0){h[g]=c[g]}}}if(typeof h.left==="string"){h.left=parseFloat(h.left);d=h.left+i}else{d=h.left;h.left=h.left-i}if(typeof h.top==="string"){h.top=parseFloat(h.top);e=h.top+j}else{e=h.top;h.top=h.top-j}m=setInterval(function(){if(f++<h.duration){b.scrollLeft=h.easing(f,i,h.left,h.duration);return b.scrollTop=h.easing(f,j,h.top,h.duration)}else{if(d!==b.scrollLeft){b.scrollLeft=d}if(e!==b.scrollTop){b.scrollTop=e}return k()}},1);return{top:e,left:d,duration:h.duration,easing:h.easing}};e=function(a,b){return!b&&a.className&&a.className.indexOf("scroll")>-1&&a||e(a.parentNode)};k=function(){return clearInterval(m)};i=function(){var b,i,m,o,p,q,r,s,t,u,v,w;if(j){return}j=true;if(l||c){h.className+=" "+d}a.overthrow.forget=function(){h.className=h.className.replace(d,"");if(g.removeEventListener){g.removeEventListener("touchstart",w,false)}a.overthrow.easing=f;return j=false};if(l||!c){return}i=void 0;s=[];q=[];p=void 0;r=void 0;u=function(){s=[];return p=null};t=function(){q=[];return r=null};m=function(){var a,b,c;c=(s[0]-s[s.length-1])*8;b=(q[0]-q[q.length-1])*8;a=Math.max(Math.abs(b),Math.abs(c))/8;c=(c>0?"+":"")+c;b=(b>0?"+":"")+b;if(!isNaN(a)&&a>0&&(Math.abs(b)>80||Math.abs(c)>80)){return n(i,{left:b,top:c,duration:a})}};o=void 0;v=function(a){var b,c,d;o=i.querySelectorAll("textarea, input");b=0;c=o.length;d=[];while(b<c){o[b].style.pointerEvents=a;d.push(b++)}return d};b=function(a,b){var c,d;if(g.createEvent){c=(!b||b===void 0)&&i.parentNode||i.touchchild||i;d=void 0;if(c!==i){d=g.createEvent("HTMLEvents");d.initEvent("touchend",true,true);i.dispatchEvent(d);c.touchchild=i;i=c;return c.dispatchEvent(a)}}};w=function(a){var c,d,f,g,j,l,n,o,w,x,y;k();u();t();i=e(a.target);if(!i||i===h||a.touches.length>1){return}v("none");x=a;l=i.scrollTop;j=i.scrollLeft;d=i.offsetHeight;y=i.offsetWidth;w=a.touches[0].pageY;o=a.touches[0].pageX;g=i.scrollHeight;n=i.scrollWidth;f=function(a){var c,e,f,h;h=l+w-a.touches[0].pageY;f=j+o-a.touches[0].pageX;c=h>=(s.length?s[0]:0);e=f>=(q.length?q[0]:0);if(h>0&&h<g-d||f>0&&f<n-y){a.preventDefault()}else{b(x)}if(p&&c!==p){u()}if(r&&e!==r){t()}p=c;r=e;i.scrollTop=h;i.scrollLeft=f;s.unshift(h);q.unshift(f);if(s.length>3){s.pop()}if(q.length>3){return q.pop()}};c=function(a){m();v("auto");setTimeout(function(){return v("none")},450);i.removeEventListener("touchmove",f,false);return i.removeEventListener("touchend",c,false)};i.addEventListener("touchmove",f,false);return i.addEventListener("touchend",c,false)};return g.addEventListener("touchstart",w,false)};a.overthrow={set:i,forget:function(){},easing:f,toss:n,intercept:k,closest:e,support:l?"native":c&&"polyfilled"||"none"};return i()}(this)}.call(this);!function(){Lungo.Service=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;d="lungojs_service_cache";c={MINUTE:"minute",HOUR:"hour",DAY:"day"};f=function(a,c,d,e){return b.get(a,c,d,e)};h=function(a,c,d,e){return b.post(a,c,d,e)};g=function(a,c,d){return b.json(a,c,d)};e=function(c,d,e,f,g){var h,i;h=c+b.serializeParameters(d);if(m(h,e)){i=a.Data.Storage.persistent(h);if(i){return f.call(f,i)}}else{return b.get(c,d,function(a){l(h,a);return f.call(f,a)},g)}};m=function(b,c){var e,f,g;e=false;g=a.Data.Storage.persistent(d);if(g){f=j(g[b]);e=k(f,c)}return e};j=function(a){var b,c;b=(new Date).getTime();c=new Date(a).getTime();return b-c};k=function(a,b){var c,d;d=b.split(" ");c=i(d[1],a);if(c<d[0]){return true}else{return false}};i=function(a,b){var d;d=b/1e3/60;if(a.indexOf(c.HOUR)>=0){d=d/60}else{if(a.indexOf(c.DAY)>=0){d=d/60/24}}return d};l=function(b,c){var e;e=a.Data.Storage.persistent(d)||{};e[b]=new Date;a.Data.Storage.persistent(d,e);return a.Data.Storage.persistent(b,c)};return{get:f,post:h,json:g,cache:e,Settings:b.ajaxSettings}}(Lungo,Quo)}.call(this);!function(){Lungo.RouterPhone=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=a.Constants;c="#";k=[];j=false;h=function(d){var e,f,g;if(j){return false}e=a.Element.Cache.section;if(l(e,d)){g=b.ELEMENT.SECTION+c+d;f=e?e.siblings(g):a.dom(g);if(f.length){n(f,e);a.Router.step(d);if(Lungo.Config.history!==false){return r()}}}else if(a.Element.Cache.aside){return a.Aside.hide()}};f=function(){var d,e,f;if(j){return false}m();d=a.Element.Cache.section;f=b.ELEMENT.SECTION+c+g();e=d.siblings(f);if(e.length){n(e,d,true);if(Lungo.Config.history!==false){r()}return q()}};e=function(c,d,e){var f;if(l(a.Element.Cache.article,d)){a.Router.section(c);f=a.Element.Cache.section.find("#"+d);if(f.length>0){a.Element.Cache.article.removeClass(b.CLASS.ACTIVE).trigger(b.TRIGGER.UNLOAD);a.Element.Cache.article=f.addClass(b.CLASS.ACTIVE).trigger(b.TRIGGER.LOAD);if((e!=null?e.data(b.ATTRIBUTE.TITLE):void 0)!=null){a.Element.Cache.section.find(b.QUERY.TITLE).text(e.data(b.ATTRIBUTE.TITLE))}if(Lungo.Config.history!==false){r()}return q()}}};d=function(c){var d;h=a.dom(c.target);d=h.data(b.ATTRIBUTE.DIRECTION);if(h.data("original-transition")){h.data(b.TRANSITION.ATTR,h.data("original-transition"));h.removeAttr("data-original-transition")}if(d==="out"||d==="back-out"){h.removeClass(b.CLASS.SHOW)}h.removeAttr("data-"+b.ATTRIBUTE.DIRECTION);return j=false};i=function(a){if(a!==g()){return k.push(a)}};g=function(){return k[k.length-1]};n=function(b,c,d){var e;if(d==null){d=false}e=function(){p(b,c,d);return q()};if(a.Element.Cache.aside){return a.Aside.hide(e)}else{return e()}};p=function(b,c,d){a.Section.show(c,b);if(c!=null){return o(b,c,d)}};o=function(a,c,d){var e;if(d==null){d=false}if(c==null||!a.length){return false}j=true;e=d?"back-":"";if(!d){c.data("original-transition",c.data(b.TRANSITION.ATTR));c.data(b.TRANSITION.ATTR,a.data(b.TRANSITION.ATTR))}else{a.data("original-transition",a.data(b.TRANSITION.ATTR));a.data(b.TRANSITION.ATTR,c.data(b.TRANSITION.ATTR))}a.addClass(b.CLASS.SHOW);if(a.data(b.TRANSITION.ATTR)){a.data(b.ATTRIBUTE.DIRECTION,""+e+"in")}if(c.data(b.TRANSITION.ATTR)){return c.data(b.ATTRIBUTE.DIRECTION,""+e+"out")}else{return c.removeClass(b.CLASS.SHOW)}};l=function(a,c){return(a!=null?a.attr(b.ATTRIBUTE.ID):void 0)!==c};r=function(){var b,c,d;b="";for(c=0,d=k.length;c<d;c++){h=k[c];b+=""+h+"/"}b+=a.Element.Cache.article.attr("id");return setTimeout(function(){return window.location.hash=b},0)};q=function(){var c,d,e;c=a.Element.Cache.article.attr(b.ATTRIBUTE.ID);d=a.dom(b.QUERY.ARTICLE_ROUTER).removeClass(b.CLASS.ACTIVE);d.filter("[data-view-article="+c+"]").addClass(b.CLASS.ACTIVE);e=a.Element.Cache.section.find(b.QUERY.ARTICLE_REFERENCE).addClass(b.CLASS.HIDE);return e.filter("[data-article*='"+c+"']").removeClass(b.CLASS.HIDE)};m=function(){if(k.length>1){return k.length-=1}};return{section:h,back:f,article:e,history:g,step:i,animationEnd:d}}(Lungo)}.call(this);!function(){Lungo.RouterTablet=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;b=a.Constants;c="#";o=[];j=false;l=void 0;n=false;h=function(d){var e,f,g;if(j){return false}e=a.Element.Cache.section;if(r(e,d)){g=b.ELEMENT.SECTION+c+d;f=e?e.siblings(g):a.dom(g);if(f.length){if(e&&q(e)&&q(f)){A(e,f)}else{v(f,e)}i(d);if(Lungo.Config.history!==false){C()}return B()}}};f=function(d){var e,f,h,i,l;if(d==null){d=true}if(j){return false}if(!u()){l=a.dom(event.target).closest(b.ELEMENT.SECTION);if(l.length){h=0;while(g()!==l.attr("id")&&h++<10){k(a.dom(b.ELEMENT.SECTION+c+g()),"back-out");t()}a.Element.Cache.section=l}}t();e=a.Element.Cache.section;i=b.ELEMENT.SECTION+c+g();f=e.siblings(i);if(f.length){if(e&&q(e)&&q(f)){A(e,f)}else{v(f,e,true,d)}if(Lungo.Config.history!==false){C()}return B()}};e=function(c,d,e){var g;if(!u()&&c!==a.Element.Cache.section.attr("id")){f(false)}g=a.dom("article#"+d);if(g.length>0){h=g.closest(b.ELEMENT.SECTION);a.Router.section(h.attr("id"));h=a.Element.Cache.section;h.children(""+b.ELEMENT.ARTICLE+"."+b.CLASS.ACTIVE).removeClass(b.CLASS.ACTIVE).trigger(b.TRIGGER.UNLOAD);a.Element.Cache.article.removeClass(b.CLASS.ACTIVE).trigger(b.TRIGGER.UNLOAD);a.Element.Cache.article=g.addClass(b.CLASS.ACTIVE).trigger(b.TRIGGER.LOAD);if((e!=null?e.data(b.ATTRIBUTE.TITLE):void 0)!=null){h.find(b.QUERY.TITLE).text(e.data(b.ATTRIBUTE.TITLE))}if(Lungo.Config.history!==false){C()}return B(d)}};d=function(c){var d;h=a.dom(c.target);d=h.data(b.ATTRIBUTE.DIRECTION);if(d){if(d==="out"||d==="back-out"){h.removeClass(b.CLASS.SHOW)}h.removeAttr("data-"+b.ATTRIBUTE.DIRECTION);if(l!=null){n=true;v(l,void 0);l=void 0}}if(h.hasClass("asideHidding")){h.removeClass("asideHidding").removeClass("aside")}if(h.hasClass("asideShowing")){h.removeClass("asideShowing").addClass("aside")}if(h.hasClass("shadowing")){h.removeClass("shadowing").addClass("shadow")}if(h.hasClass("unshadowing")){h.removeClass("unshadowing").removeClass("shadow")}return j=false};i=function(a){if(a!==g()){return o.push(a)}};g=function(){return o[o.length-1]};v=function(b,c,d){if(d==null){d=false}if(c==null){a.Section.show(void 0,b);z(b)}else{if(d){x(c,b)}else{y(c,b)}a.Section.show(c,b)}return n=false};q=function(a){return a.data("children")==null&&a.data("aside")==null};A=function(b,c){a.Section.show(b,c);b.removeClass("show");return c.addClass("show")};z=function(c){var d;if(!n||!((d=a.Element.Cache.section)!=null?d.data("aside"):void 0)){c.addClass(b.CLASS.SHOW)}else{k(c,"in")}return m(void 0,c)};y=function(c,d){var e,f,g;if(p(c,d)){k(d,"in")}else{f="section."+b.CLASS.SHOW;g=s(d);if(g){f+=":not(#"+g+")"}e=a.dom(f);k(e,"back-out");l=d}return m(c,d)};x=function(c,d){var e;k(c,"back-out");e=a.dom("section."+b.CLASS.SHOW+":not(#"+c.attr("id")+")");if(e.length===1&&e.first().data("children")!=null){a.Aside.show(e.first().data("aside"))}return l=d};m=function(b,c){var d,e;d=c.data("aside");e=a.Element.Cache.aside;if(d){if(!(b!=null&&a.Element.Cache.aside!=null)){return w(d,c)}else if(!e.hasClass("box")){return a.Aside.hide()}}else{return a.Aside.hide()}};w=function(b,c){var d;d=c.data("children")?false:true;return a.Aside.show(b,d)};s=function(b){var c;c=a.dom("[data-children~="+b.attr("id")+"]");if(c.length){return c.attr("id")}return null};p=function(a,b){var c,d;c=a.data("children");if(!c){return false}d=b.attr("id");return c.indexOf(d)!==-1};k=function(a,c){var d,e;e=c.indexOf("in")>=0;d=false;if(e){if(!a.hasClass(b.CLASS.SHOW)){d=true}}else{d=true}if(d){if(e){a.addClass(b.CLASS.HIDE);a.addClass(b.CLASS.SHOW);return setTimeout(function(){return a.data(b.ATTRIBUTE.DIRECTION,c).removeClass(b.CLASS.HIDE)},10)}else{a.addClass(b.CLASS.SHOW);return a.data(b.ATTRIBUTE.DIRECTION,c)}}};u=function(){var b,c;if(!event||!a.Element.Cache.section){return true}b=a.dom(event.target).closest("section,aside");if(b.length){c=b.attr("id")===a.Element.Cache.section.attr("id")}else{c=true}return c};r=function(a,c){return(a!=null?a.attr(b.ATTRIBUTE.ID):void 0)!==c};C=function(){var b,c,d;b="";for(c=0,d=o.length;c<d;c++){h=o[c];b+=""+h+"/"}b+=a.Element.Cache.article.attr("id");return setTimeout(function(){return window.location.hash=b},0)};B=function(c){var d,e,f,g,h;if(!c){c=(h=a.Element.Cache.article)!=null?h.attr(b.ATTRIBUTE.ID):void 0}a.Element.Cache.section.find(b.QUERY.ARTICLE_ROUTER).removeClass(b.CLASS.ACTIVE);if(a.Element.Cache.section.data("aside")!=null){g=a.dom("aside#"+a.Element.Cache.section.data("aside"));g.find(b.QUERY.ARTICLE_ROUTER).removeClass(b.CLASS.ACTIVE)}a.dom("[data-view-article="+c+"]").addClass(b.CLASS.ACTIVE);f=a.Element.Cache.section.find(b.QUERY.ARTICLE_REFERENCE).addClass(b.CLASS.HIDE);f.filter("[data-article~='"+c+"']").removeClass(b.CLASS.HIDE);if(a.Element.Cache.aside){e=a.Element.Cache.section.attr("id");d=a.Element.Cache.aside;d.find(b.QUERY.SECTION_ROUTER+"."+b.CLASS.ACTIVE).removeClass("active");return d.find("[data-view-section="+e+"]").addClass(b.CLASS.ACTIVE)}};t=function(){if(o.length>1){return o.length-=1}};return{section:h,back:f,article:e,history:g,step:i,animationEnd:d,historys:function(){return o}}}(Lungo)}.call(this);!function(){Lungo.Aside=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.Constants;m=void 0;e="__customKFShow__";d="__customKFHide__";b="300ms";o=void 0;p="";a.ready(function(){var b,c;b=((c=a.Core.environment().browser.match(/mozilla|firefox/gi))!=null?c.length:void 0)>0;return p=b?"":"-webkit-"});i=function(d,e,f){var g,h,i,j,l,m,o,q,r;if(e==null){e=false}if(f==null){f=-1}h=a.dom("#"+d);if(h.length){if(!k(d)){if(!e){a.Element.Cache.aside=h;if(a.DEVICE===c.DEVICE.PHONE){h.addClass(c.CLASS.SHOW);if(f!==-1){g=n(f)+" "+b;return a.Element.Cache.section.style(""+p+"animation",g)}else{j=h.data(c.TRANSITION.ATTR)||"left";return a.Element.Cache.section.data("aside-"+j,"show")}}else{h.addClass(c.CLASS.SHOW);i=a.dom("[data-aside="+d+"][data-children]");if(i.attr("id")!==((r=a.Element.Cache.section)!=null?r.attr("id"):void 0)){a.Element.Cache.section.addClass("shadowing");m=i.data("children");m=m.split(" ");for(o=0,q=m.length;o<q;o++){l=m[o];l=a.dom(c.ELEMENT.SECTION+"#"+l);if(l.length&&l.hasClass(c.CLASS.SHOW)){l.addClass("shadowing")}}}return i.removeClass("aside").addClass("asideShowing")}}else{a.Element.Cache.aside=h;return h.addClass(c.CLASS.SHOW).addClass("box")}}}};h=function(d,e){var f,g,h;if(e==null){e=null}if(a.Element.Cache.aside||e){m=d;g=((h=a.Element.Cache.aside)!=null?h.data(c.TRANSITION.ATTR):void 0)||"left";if(a.DEVICE===c.DEVICE.PHONE){if(e>0){a.Element.Cache.section.removeClass("aside").removeClass("aside-right");f=n(e,true)+" "+b;return a.Element.Cache.section.style(""+p+"animation",f)}else{a.Element.Cache.section.removeClass("aside").removeClass("aside-right");return a.Element.Cache.section.data("aside-"+g,"hide")}}else{a.dom(".aside").removeClass("aside").addClass("asideHidding");a.Element.Cache.aside=null;if(d){d.call(d)}return a.dom(".shadow").removeClass("shadow").addClass("unshadowing")}}else if(d){return d.call(d)}};j=function(b){if(a.Element.Cache.aside){return this.hide()}else{return this.show(b)}};f=function(b){var e,f,g,h;g=a.dom(b.target);e=((h=a.Element.Cache.aside)!=null?h.data(c.TRANSITION.ATTR):void 0)||"left";if(g.data("aside-"+e)==="hide"){a.Element.Cache.aside.removeClass(c.CLASS.SHOW);a.Element.Cache.aside=null;g.removeAttr("data-aside-"+e);if(m){m.call(m)}m=void 0}else{if(g.style(""+p+"animation").indexOf(d)===-1){f=e.indexOf("right")===-1?"aside":"aside-right";g.addClass(f)}g.removeAttr("style").removeAttr("data-aside-"+e)}if(o){g.removeAttr("style");o.parentNode.removeChild(o);return o=void 0}};g=function(){var b;if(a.DEVICE!==c.DEVICE.PHONE){return false}b=96;return a.dom(c.QUERY.HREF_ASIDE).each(function(){var d,e,f,g;g=false;e=a.dom(this);f=e.closest("section");d=a.dom("aside#"+e.data("aside"));f.swiping(function(a){var b,e;a.originalEvent.preventDefault();if(!(f.hasClass("aside")||f.hasClass("aside-right"))){b=a.currentTouch.x-a.iniTouch.x;e=Math.abs(a.currentTouch.y-a.iniTouch.y);g=g?true:b>3*e&&b<50;if(g){b=b>256?256:b<0?0:b;d.addClass(c.CLASS.SHOW);f.vendor("transform","translateX("+b+"px)");return f.vendor("transition-duration","0s")}else{return f.attr("style","")}}});return f.swipe(function(a){var c,e;c=a.currentTouch.x-a.iniTouch.x;if(c>256){c=256}e=Math.abs(a.currentTouch.y-a.iniTouch.y);f.attr("style","");if(c>b&&g){i(d.attr("id"),false,c)}else{if(g){h(void 0,c)}else{h()}}return g=false})})};k=function(b){var c;return((c=a.Element.Cache.aside)!=null?c.attr("id"):void 0)===b};l=function(){var b;if((b=a.Element.Cache.aside)!=null?b.hasClass(c.CLASS.RIGHT):void 0){return""+c.CLASS.RIGHT}else{return" "}};n=function(a,b){var c,f;if(b==null){b=false}c=b?d:e;o=document.createElement("style");o.type="text/css";if(!b){f="@"+p+"keyframes "+c+" {\n  0%   { "+p+"transform: translateX("+a+"px); }\n  60%  { "+p+"transform: translateX(262px);  }\n  100% { "+p+"transform: translateX(256px);  }\n}"}else{f="@"+p+"keyframes "+c+" {\n  0%   { "+p+"transform: translateX("+a+"px); }\n  100% { "+p+"transform: translateX(0);      }\n}"}o.appendChild(document.createTextNode(f));document.getElementsByTagName("head")[0].appendChild(o);return c};return{show:i,hide:h,toggle:j,draggable:g,animationEnd:f}}(Lungo)}.call(this);!function(){Lungo.Section=function(a){var b,c,d,e;b=a.Constants;c=function(c,f){var g;if(a.DEVICE===b.DEVICE.PHONE){d(f)}else{e(c,f)}a.Element.Cache.section=f;g=f.find(""+b.ELEMENT.ARTICLE+"."+b.CLASS.ACTIVE);if(g.length===0){g=f.find(b.ELEMENT.ARTICLE).first().addClass(b.CLASS.ACTIVE)}a.Element.Cache.article=g;if(c){c.trigger(b.TRIGGER.UNLOAD)}return f.trigger(b.TRIGGER.LOAD)};d=function(a){return a.addClass(b.CLASS.SHOW)};e=function(a,b){return this};return{show:c}}(Lungo)}.call(this);!function(){Lungo.Article=function(a){var b,c;b=a.Constants;c=function(c,d,e,f,g){var h,i;if(f==null){f=""}if(g==null){g=null}if(h=a.dom(""+b.ELEMENT.ARTICLE+"#"+c)){i="";if(d!=null){i='<div class="empty">\n  <span class="icon '+d+'"></span>\n  <strong>'+e+"</strong>\n  <small>"+f+"</small>\n</div>"}h.html(i);if(g){return h.children().append("<button class='anchor'><abbr>"+g+"</abbr></button>")}}};return{clean:c}}(Lungo)}.call(this);!function(){Lungo.Boot.Data=function(a){var b,c,d,e,f;b=a.Constants.BINDING;c=function(b){var c;c=a.dom(b||document.body);if(c.length>0){return e(c)}};e=function(b){var c,d;d=[];for(c in a.Attributes){if(a.Core.isOwnProperty(a.Attributes,c)){d.push(f(b,c))}else{d.push(void 0)}}return d};f=function(b,c){var e,f;e=a.Attributes[c];f=e.selector+"[data-"+c+"]";b.find(f).each(function(b,f){var g;g=a.dom(f);return d(g,g.data(c),e.html)});if(b.data(c)!=null){return d(b,b.data(c),e.html)}};d=function(a,b,c){return a.prepend(c.replace(/\{\{value\}\}/g,b))};return{init:c}}(Lungo)}.call(this);!function(){Lungo.Boot.Device=function(a){var b,c;b=a.Constants.DEVICE;c=function(){var c,d;d=a.Core.environment();a.DEVICE=d.screen.width<768?b.PHONE:b.TABLET;c=a.dom(document.body);c.data("device",a.DEVICE);if(d.os){c.data("os",d.os.name.toLowerCase())}if(a.DEVICE===a.Constants.DEVICE.PHONE){return a.Aside.draggable()}};return{init:c}}(Lungo)}.call(this);!function(){Lungo.Boot.Events=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;c=a.Constants;b=a.Constants.ATTRIBUTE;d=a.Constants.CLASS;e=a.Constants.ELEMENT;f=a.Constants.QUERY;g=function(){var b,d,e,g,k;a.dom(c.QUERY.SECTION_ROUTER_TOUCH).touch(m);a.dom(c.QUERY.SECTION_ROUTER_TAP).tap(m);a.dom(c.QUERY.ARTICLE_ROUTER_TOUCH).touch(i);a.dom(c.QUERY.ARTICLE_ROUTER_TAP).tap(i);a.dom(c.QUERY.ASIDE_ROUTER).touch(j);a.dom(c.QUERY.MENU_ROUTER).touch(l);a.dom(f.MENU_HREF).touch(h);g=c.EVENT.TRANSITION_END;k=[];for(d=0,e=g.length;d<e;d++){b=g[d];a.dom("body").delegate(c.ELEMENT.SECTION,b,n);k.push(a.dom("body").delegate(c.ELEMENT.ASIDE,b,n))}return k};m=function(b){var d,e;b.preventDefault();d=a.dom(this);if(d.data("async")){return k(d,c.ELEMENT.SECTION)}else{e=d.data("view-section");if(e!=="back"){return a.Router.section(e)}else{return a.Router.back()}}};i=function(b){var d;b.preventDefault();d=a.dom(this);if(d.data("async")){return k(d,c.ELEMENT.ARTICLE)}else{return a.Router.article(a.Router.history(),d.data("view-article"),d)}};k=function(b,d){var e,f,g,h,i,j,k;h=b.data("async");e=b.data("view-"+d);a.Notification.show();if(d===c.ELEMENT.ARTICLE){g=a.Element.Cache.section.attr(c.ATTRIBUTE.ID);a.Resource.load(h,c.ELEMENT.SECTION+"#"+g)}else{a.Resource.load(h)}a.Boot.Data.init("#"+e);k=a.dom("[data-async='"+h+"']");for(i=0,j=k.length;i<j;i++){f=k[i];f.removeAttribute("data-async")}if(d===c.ELEMENT.ARTICLE){a.Router.article(g,e);a.Aside.hide()}else{a.Router.section(e)}return a.Notification.hide()};j=function(b){var d;b.preventDefault();d=a.dom(b.target).closest(c.QUERY.ASIDE_ROUTER).data("view-aside");return a.Aside.toggle(d)};l=function(b){var c;b.preventDefault();c=a.dom(this).data("view-menu");return a.Element.Menu.show(c)};h=function(b){var d,e;b.preventDefault();d=a.dom(this);e=d.parent(c.CONTROL.MENU).attr(c.ATTRIBUTE.ID);a.Element.Menu.hide(e);return a.dom("[data-view-menu="+e+"] > .icon").attr("class","icon "+d.data("icon"))};n=function(b){var c,d,e,f;e=a.dom(b.target);d=e.data("direction");c=e.hasClass("asideHidding")||e.hasClass("asideShowing");f=e.hasClass("shadowing")||e.hasClass("unshadowing");if(d||c||f){return a.Router.animationEnd(b)}else{return a.Aside.animationEnd(b)}};return{init:g}}(Lungo)}.call(this);!function(){Lungo.Boot.Layout=function(a){var b,c,d,e,f,g,h,i;b=a.Constants;c="#";d=function(){var c;a.Fallback.fixPositionInAndroid();if(Lungo.Config.history&&((c=window.location.hash)!=null?c.length:void 0)>=2){h()}else{g()}f(b.QUERY.LIST_IN_ELEMENT,e);return f(b.QUERY.ELEMENT_SCROLLABLE,i)};h=function(){var b,d,e,f,g,h;d=window.location.hash.replace(c,"").split("/");f=d[d.length-2];b=d[d.length-1];if(d.length>2){d.length-=2;for(g=0,h=d.length;g<h;g++){e=d[g];a.Router.step(e)}}a.Router.section(f);return a.Router.article(f,b)};g=function(){var c;c=a.dom(b.ELEMENT.SECTION).first();if(c){return a.Router.section(c.attr(b.ATTRIBUTE.ID))}};f=function(b,c){var d,e,f,g,h;e=a.dom(b);f=0;g=e.length;h=[];while(f<g){d=a.dom(e[f]);a.Core.execute(c,d);h.push(f++)}return h};e=function(a){var c;if(a.children().length===0){c=a.attr(b.ATTRIBUTE.ID);return a.append(b.ELEMENT.LIST)}};i=function(a){return a[0].addEventListener("touchstart",function(a){var b;b=this.scrollTop;if(b<=1){this.scrollTop=1}if(b+this.offsetHeight>=this.scrollHeight){return this.scrollTop=this.scrollHeight-this.offsetHeight-1}},false)};return{init:d}}(Lungo)}.call(this);!function(){Lungo.Element.Cache={section:null,article:null,aside:null,navigation:null}}.call(this);!function(){Lungo.Element.Carousel=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;h={index:0,speed:300,callback:b,container:a,element:a.children[0],slide:void 0,slides:[],slides_length:0,width:0,start:{},isScrolling:void 0,deltaX:0};e=function(a){if(h.index){return j(h.index-1,h.speed)}};c=function(a){if(h.index<h.slides_length-1){return j(h.index+1,h.speed)}else{return j(0,h.speed)}};d=function(){return h.index};f=function(){return i()};i=function(){var a,b;h.slides=h.element.children;h.slides_length=h.slides.length;if(h.slides_length<2){return null}h.width="getBoundingClientRect"in h.container?h.container.getBoundingClientRect().width:h.container.offsetWidth;if(!h.width){return null}h.element.style.width=h.slides.length*h.width+"px";b=h.slides.length;while(b--){a=h.slides[b];a.style.width=h.width+"px";a.style.display="table-cell";a.style.verticalAlign="top"}j(h.index,0);return h.container.style.visibility="visible"};j=function(a,b){var c;c=h.element.style;if(b===void 0){b=h.speed}c.webkitTransitionDuration=c.MozTransitionDuration=c.msTransitionDuration=c.OTransitionDuration=c.transitionDuration=b+"ms";
c.MozTransform=c.webkitTransform="translate3d("+-(a*h.width)+"px,0,0)";c.msTransform=c.OTransform="translateX("+-(a*h.width)+"px)";return h.index=a};g=function(){h.element.addEventListener("touchstart",m,false);h.element.addEventListener("touchmove",l,false);h.element.addEventListener("touchend",k,false);h.element.addEventListener("webkitTransitionEnd",n,false);h.element.addEventListener("msTransitionEnd",n,false);h.element.addEventListener("oTransitionEnd",n,false);h.element.addEventListener("transitionend",n,false);return window.addEventListener("resize",i,false)};m=function(a){h.start={pageX:a.touches[0].pageX,pageY:a.touches[0].pageY,time:Number(new Date)};h.isScrolling=void 0;h.deltaX=0;h.element.style.MozTransitionDuration=h.element.style.webkitTransitionDuration=0;return a.stopPropagation()};l=function(a){var b,c;if(a.touches.length>1||a.scale&&a.scale!==1){return}h.deltaX=a.touches[0].pageX-h.start.pageX;if(typeof h.isScrolling==="undefined"){h.isScrolling=!!(h.isScrolling||Math.abs(h.deltaX)<Math.abs(a.touches[0].pageY-h.start.pageY))}if(!h.isScrolling){a.preventDefault();b=!h.index&&h.deltaX>0||h.index===h.slides_length-1&&h.deltaX<0?Math.abs(h.deltaX)/h.width+1:1;h.deltaX=h.deltaX/b;c=h.deltaX-h.index*h.width;h.element.style.MozTransform=h.element.style.webkitTransform="translate3d("+c+"px,0,0)";return a.stopPropagation()}};k=function(a){var b,c;c=Number(new Date)-h.start.time<250&&Math.abs(h.deltaX)>20||Math.abs(h.deltaX)>h.width/2;b=!h.index&&h.deltaX>0||h.index===h.slides_length-1&&h.deltaX<0;if(!h.isScrolling){j(h.index+(c&&!b?h.deltaX<0?1:-1:0),h.speed)}return a.stopPropagation()};n=function(a){if(h.callback){return h.callback.apply(h.callback,[h.index,h.slides[h.index]])}};i();g();return{prev:e,next:c,position:d,refresh:f}}}.call(this);!function(){Lungo.Element.count=function(a,b){var c,d,e;d=Lungo.dom(a);if(d){d.children(".tag.count").remove();if(b){c=Lungo.Constants.BINDING.SELECTOR;e=Lungo.Attributes.count.html.replace(c,b);return d.append(e)}}}}.call(this);!function(){Lungo.Element.loading=function(a,b){var c,d,e;d=Lungo.dom(a);if(d){e=null;if(b){c=Lungo.Constants.BINDING.SELECTOR;e=Lungo.Attributes.loading.html.replace(c,b)}return d.html(e)}}}.call(this);!function(){Lungo.Element.Menu=function(a){var b,c,d,e;b=a.Constants;d=function(a){var c;c=this._instance(a);if(c){return c.addClass(b.CLASS.SHOW)}};c=function(a){var c;c=this._instance(a);if(c){return c.removeClass(b.CLASS.SHOW)}};e=function(a){var c;c=this._instance(a);if(c){if(c.hasClass(b.CLASS.SHOW)){return this.show(a)}else{return this.hide(a)}}};return{_instance:function(a){return Lungo.dom(""+b.CONTROL.MENU+"#"+a)},show:d,hide:c,toggle:e}}(Lungo)}.call(this);!function(){Lungo.Element.progress=function(a,b){var c;c=Lungo.dom(a);if(c){b+=Lungo.Constants.ATTRIBUTE.PERCENT;return c.find(".value").style(Lungo.Constants.ATTRIBUTE.WIDTH,b)}}}.call(this);!function(){Lungo.Element.Pull=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;k=68;i=80;c=300;g=0;j=false;h=$$(a);f=h.siblings('div[data-control="pull"]');d=void 0;e={onPull:"Pull down to refresh",onRelease:"Release to...",onRefresh:"Loading...",callback:void 0};d=Lungo.Core.mix(e,b);l=function(){q(0,true);setTimeout(function(){j=false;f.attr("class","");return h[0].removeEventListener("touchmove",m,true)},c);return g=0};q=function(a,b){var d;d=a>i?i:a;if(b){h.addClass("pull")}else{h.removeClass("pull")}h.style("-webkit-transform","translate(0, "+d+"px)");if(b){return setTimeout(function(){return h.removeClass("pull")},c)}};r=function(a){j=true;h[0].addEventListener("touchmove",m,true);u(d.onRefresh);s(true);q(k,true);if(d.callback){return d.callback.apply(this)}};u=function(a){return f.find("strong").html(a)};s=function(a){if(a){return f.addClass("refresh")}else{return f.removeClass("refresh")}};t=function(a){if(a){return f.addClass("rotate")}else{return f.removeClass("rotate")}};m=function(a){return a.preventDefault()};p=function(a){q(g,false);s(false);if(g>k){u(d.onRelease);return t(true)}else{u(d.onPull);return t(false)}};o=function(a){if(g>k){r()}else{l()}return this};n=function(a){if($$.isMobile()){return a.touches[0].pageY}else{return a.pageY}};!function(){var a,b;b=false;a=0;return h.bind("touchstart",function(c){if(h[0].scrollTop<=1){b=true;a=n(c)}return true}).bind("touchmove",function(c){var d;if(!j&&b){d=n(c);g=d-a;if(g>=0){p(c);c.preventDefault()}}return true}).bind("touchend",function(){if(b){o()}b=false;return true})}();return{hide:l}}}.call(this);
;(function() {
  var WebSocket = window.WebSocket || window.MozWebSocket;
  var br = window.brunch = (window.brunch || {});
  var ar = br['auto-reload'] = (br['auto-reload'] || {});
  if (!WebSocket || ar.disabled) return;

  var cacheBuster = function(url){
    var date = Math.round(Date.now() / 1000).toString();
    url = url.replace(/(\&|\\?)cacheBuster=\d*/, '');
    return url + (url.indexOf('?') >= 0 ? '&' : '?') +'cacheBuster=' + date;
  };

  var reloaders = {
    page: function(){
      window.location.reload(true);
    },

    stylesheet: function(){
      [].slice
        .call(document.querySelectorAll('link[rel="stylesheet"]'))
        .filter(function(link){
          return (link != null && link.href != null);
        })
        .forEach(function(link) {
          link.href = cacheBuster(link.href);
        });
    }
  };
  var port = ar.port || 9485;
  var host = (!br['server']) ? window.location.hostname : br['server'];
  var connection = new WebSocket('ws://' + host + ':' + port);
  connection.onmessage = function(event) {
    var message = event.data;
    if (ar.disabled) return;
    if (reloaders[message] != null) {
      reloaders[message]();
    } else {
      reloaders.page();
    }
  };
})();

;/*

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

// lib/handlebars/browser-prefix.js
var Handlebars = {};

(function(Handlebars, undefined) {
;
// lib/handlebars/base.js

Handlebars.VERSION = "1.0.0";
Handlebars.COMPILER_REVISION = 4;

Handlebars.REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '>= 1.0.0'
};

Handlebars.helpers  = {};
Handlebars.partials = {};

var toString = Object.prototype.toString,
    functionType = '[object Function]',
    objectType = '[object Object]';

Handlebars.registerHelper = function(name, fn, inverse) {
  if (toString.call(name) === objectType) {
    if (inverse || fn) { throw new Handlebars.Exception('Arg not supported with multiple helpers'); }
    Handlebars.Utils.extend(this.helpers, name);
  } else {
    if (inverse) { fn.not = inverse; }
    this.helpers[name] = fn;
  }
};

Handlebars.registerPartial = function(name, str) {
  if (toString.call(name) === objectType) {
    Handlebars.Utils.extend(this.partials,  name);
  } else {
    this.partials[name] = str;
  }
};

Handlebars.registerHelper('helperMissing', function(arg) {
  if(arguments.length === 2) {
    return undefined;
  } else {
    throw new Error("Missing helper: '" + arg + "'");
  }
});

Handlebars.registerHelper('blockHelperMissing', function(context, options) {
  var inverse = options.inverse || function() {}, fn = options.fn;

  var type = toString.call(context);

  if(type === functionType) { context = context.call(this); }

  if(context === true) {
    return fn(this);
  } else if(context === false || context == null) {
    return inverse(this);
  } else if(type === "[object Array]") {
    if(context.length > 0) {
      return Handlebars.helpers.each(context, options);
    } else {
      return inverse(this);
    }
  } else {
    return fn(context);
  }
});

Handlebars.K = function() {};

Handlebars.createFrame = Object.create || function(object) {
  Handlebars.K.prototype = object;
  var obj = new Handlebars.K();
  Handlebars.K.prototype = null;
  return obj;
};

Handlebars.logger = {
  DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3,

  methodMap: {0: 'debug', 1: 'info', 2: 'warn', 3: 'error'},

  // can be overridden in the host environment
  log: function(level, obj) {
    if (Handlebars.logger.level <= level) {
      var method = Handlebars.logger.methodMap[level];
      if (typeof console !== 'undefined' && console[method]) {
        console[method].call(console, obj);
      }
    }
  }
};

Handlebars.log = function(level, obj) { Handlebars.logger.log(level, obj); };

Handlebars.registerHelper('each', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  var i = 0, ret = "", data;

  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  if(context && typeof context === 'object') {
    if(context instanceof Array){
      for(var j = context.length; i<j; i++) {
        if (data) { data.index = i; }
        ret = ret + fn(context[i], { data: data });
      }
    } else {
      for(var key in context) {
        if(context.hasOwnProperty(key)) {
          if(data) { data.key = key; }
          ret = ret + fn(context[key], {data: data});
          i++;
        }
      }
    }
  }

  if(i === 0){
    ret = inverse(this);
  }

  return ret;
});

Handlebars.registerHelper('if', function(conditional, options) {
  var type = toString.call(conditional);
  if(type === functionType) { conditional = conditional.call(this); }

  if(!conditional || Handlebars.Utils.isEmpty(conditional)) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

Handlebars.registerHelper('unless', function(conditional, options) {
  return Handlebars.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn});
});

Handlebars.registerHelper('with', function(context, options) {
  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if (!Handlebars.Utils.isEmpty(context)) return options.fn(context);
});

Handlebars.registerHelper('log', function(context, options) {
  var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
  Handlebars.log(level, context);
});
;
// lib/handlebars/utils.js

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

Handlebars.Exception = function(message) {
  var tmp = Error.prototype.constructor.apply(this, arguments);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }
};
Handlebars.Exception.prototype = new Error();

// Build out our basic SafeString type
Handlebars.SafeString = function(string) {
  this.string = string;
};
Handlebars.SafeString.prototype.toString = function() {
  return this.string.toString();
};

var escape = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
};

var badChars = /[&<>"'`]/g;
var possible = /[&<>"'`]/;

var escapeChar = function(chr) {
  return escape[chr] || "&amp;";
};

Handlebars.Utils = {
  extend: function(obj, value) {
    for(var key in value) {
      if(value.hasOwnProperty(key)) {
        obj[key] = value[key];
      }
    }
  },

  escapeExpression: function(string) {
    // don't escape SafeStrings, since they're already safe
    if (string instanceof Handlebars.SafeString) {
      return string.toString();
    } else if (string == null || string === false) {
      return "";
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = string.toString();

    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  },

  isEmpty: function(value) {
    if (!value && value !== 0) {
      return true;
    } else if(toString.call(value) === "[object Array]" && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }
};
;
// lib/handlebars/runtime.js

Handlebars.VM = {
  template: function(templateSpec) {
    // Just add water
    var container = {
      escapeExpression: Handlebars.Utils.escapeExpression,
      invokePartial: Handlebars.VM.invokePartial,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          programWrapper = Handlebars.VM.program(i, fn, data);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = Handlebars.VM.program(i, fn);
        }
        return programWrapper;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common) {
          ret = {};
          Handlebars.Utils.extend(ret, common);
          Handlebars.Utils.extend(ret, param);
        }
        return ret;
      },
      programWithDepth: Handlebars.VM.programWithDepth,
      noop: Handlebars.VM.noop,
      compilerInfo: null
    };

    return function(context, options) {
      options = options || {};
      var result = templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data);

      var compilerInfo = container.compilerInfo || [],
          compilerRevision = compilerInfo[0] || 1,
          currentRevision = Handlebars.COMPILER_REVISION;

      if (compilerRevision !== currentRevision) {
        if (compilerRevision < currentRevision) {
          var runtimeVersions = Handlebars.REVISION_CHANGES[currentRevision],
              compilerVersions = Handlebars.REVISION_CHANGES[compilerRevision];
          throw "Template was precompiled with an older version of Handlebars than the current runtime. "+
                "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").";
        } else {
          // Use the embedded version info since the runtime doesn't know about this revision yet
          throw "Template was precompiled with a newer version of Handlebars than the current runtime. "+
                "Please update your runtime to a newer version ("+compilerInfo[1]+").";
        }
      }

      return result;
    };
  },

  programWithDepth: function(i, fn, data /*, $depth */) {
    var args = Array.prototype.slice.call(arguments, 3);

    var program = function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
    program.program = i;
    program.depth = args.length;
    return program;
  },
  program: function(i, fn, data) {
    var program = function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
    program.program = i;
    program.depth = 0;
    return program;
  },
  noop: function() { return ""; },
  invokePartial: function(partial, name, context, helpers, partials, data) {
    var options = { helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Handlebars.Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    } else if (!Handlebars.compile) {
      throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    } else {
      partials[name] = Handlebars.compile(partial, {data: data !== undefined});
      return partials[name](context, options);
    }
  }
};

Handlebars.template = Handlebars.VM.template;
;
// lib/handlebars/browser-suffix.js
})(Handlebars);
;

;/*!
 * LucidJS
 *
 * Lucid is an easy to use event emitter library. LucidJS allows you to create your own event system and even pipe in
 * events from one emitter to another.
 *
 * Copyright 2012, Robert William Hurst
 * Licenced under the BSD License.
 * See https://raw.github.com/RobertWHurst/LucidJS/master/license.txt
 */
(function(factory) {

	//AMD
	if(typeof define === 'function' && define.amd) {
		define(factory);

	//NODE
	} else if((typeof module == 'object' || typeof module == 'function') && module.exports) {
		module.exports = factory();

	//GLOBAL
	} else {
		window.LucidJS = factory();
	}

})(function() {
	var api;

	//return the api
	api = {
		"emitter": EventEmitter
	};

	//indexOf pollyfill
	[].indexOf||(Array.prototype.indexOf=function(a,b,c){for(c=this.length,b=(c+~~b)%c;b<c&&(!(b in this)||this[b]!==a);b++);return b^c?b:-1;});

	return api;

	/**
	 * Creates a event emitter.
	 */
	function EventEmitter(object) {
		var emitter = object || {}, listeners = {}, setEvents = {}, pipes = [];

		//augment an object if it isn't already an emitter
		if(
			!emitter.on &&
			!emitter.once &&
			!emitter.trigger &&
			!emitter.set &&
			!emitter.pipe &&
			!emitter.listeners
		) {
			emitter.on = on;
			emitter.off = off;
			emitter.once = once;
			emitter.trigger = trigger;
			emitter.set = set;
			emitter.set.clear = clearSet;
			emitter.pipe = pipe;
			emitter.pipe.clear = clearPipes;
			emitter.listeners = getListeners;
			emitter.listeners.clear = clearListeners;
		} else {
			return emitter;
		}

		if(emitter.addEventListener || emitter.attachEvent) {
			handleNode(emitter);
		}

		return emitter;

		/**
		 * Binds listeners to events.
		 * @param event
		 * @return {Object}
		 */
		function on(event     ) {
			var args, binding = {}, aI, sI;
			args = Array.prototype.slice.apply(arguments, [1]);

			//recurse over a batch of events
			if(typeof event === 'object' && typeof event.push === 'function') { return batchOn(event, args); }

			//trigger the listener event
			if(event.slice(0, 7) !== 'emitter' && (listeners['emitter'] || listeners['emitter.listener'])) {
				for(aI = 0; aI < args.length; aI += 1) {
					trigger('emitter.listener', event, args[aI]);
				}
			}

			//create the event
			if(!listeners[event]) { listeners[event] = []; }

			//add each callback
			for(aI = 0; aI < args.length; aI += 1) {
				if(typeof args[aI] !== 'function') { throw new Error('Cannot bind event. All callbacks must be functions.'); }
				listeners[event].push(args[aI]);
			}

			binding.clear = clear;

			return binding;

			function clear() {
				if(!listeners[event]) { return; }
				for(aI = 0; aI < args.length; aI += 1) {
					listeners[event].splice(listeners[event].indexOf(args[aI]), 1);
				}
				if(listeners[event].length < 1) { delete listeners[event]; }
			}

			function batchOn(events, args) {
				var eI, binding = {}, bindings = [];
				for(eI = 0; eI < events.length; eI += 1) {
					args.unshift(events[eI]);
					bindings.push(on.apply(this, args));
					args.shift();
				}

				binding.clear = clear;

				return binding;

				function clear() {
					var bI;
					for(bI = 0; bI < bindings.length; bI += 1) {
						bindings[bI].clear();
					}
				}
			}
		}

		/**
		 * Unbinds listeners to events.
		 * @param event
		 * @return {Object}
		 */
		function off(event     ) {
			var args = Array.prototype.slice.apply(arguments, [1]), aI, sI;

			//recurse over a batch of events
			if(typeof event === 'object' && typeof event.push === 'function') {
				for(sI = 0; sI < event.length; sI += 1) {
					off.apply(null, [event[sI]].concat(args));
				}
				return;
			}

			if(!listeners[event]) { throw new Error('Tried to remove an event from a non-existant event of type "'+event+'".'); }

			//remove each callback
			for(aI = 0; aI < args.length; aI += 1) {
				if(typeof args[aI] !== 'function') { throw new Error('Tried to remove a non-function.'); }
				var listenerIndex = listeners[event].indexOf(args[aI]);
				listeners[event].splice(listenerIndex, 1);
			}
		}

		/**
		 * Binds listeners to events. Once an event is fired the binding is cleared automatically.
		 * @param event
		 * @return {Object}
		 */
		function once(event     ) {
			var binding, args = Array.prototype.slice.apply(arguments, [1]), result = true, cleared = false;

			binding = on(event, function(    ) {
				var aI, eventArgs = Array.prototype.slice.apply(arguments);

				if(!binding) {
					if(cleared) { return; }
					cleared = true;
					setTimeout(function(){ binding.clear(); }, 0);
				} else {
					binding.clear();
				}

				for(aI = 0; aI < args.length; aI += 1) {
					if(args[aI].apply(this, eventArgs) === false) {
						result = false;
					}
				}

				return result;
			});

			return binding;
		}

		/**
		 * Triggers events. Passes listeners any additional arguments.
		 *  Optimized for 6 arguments.
		 * @param event
		 * @return {Boolean}
		 */
		function trigger(event, a1, a2, a3, a4, a5, a6, a7, a8, a9, la) {
			var longArgs, lI, eventListeners, result = true;

			if(typeof la !== 'undefined') {
				longArgs = Array.prototype.slice.apply(arguments, [1]);
			}

			if(typeof event === 'object' && typeof event.push === 'function') {
				if(longArgs) {
					return batchTrigger.apply(null, arguments);
				} else {
					return batchTrigger(event, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				}
			}

			event = event.split('.');
			while(event.length) {
				if(longArgs){
					if(triggerOnly.apply(this, [event.join('.')].concat(longArgs)) === false){
						result = false;
					}
				} else {
					if(triggerOnly(event.join('.'), a1, a2, a3, a4, a5, a6, a7, a8, a9) === false){
						result = false;
					}
				}
				
				event.pop();
			}

			return result;
		}

		/**
		 * Private method, triggers the event without triggering any subevents
		 */
		function triggerOnly(event, a1, a2, a3, a4, a5, a6, a7, a8, a9, la) {
			var longArgs, lI, eventListeners = listeners[event], result = true;
			
			if(typeof la !== 'undefined') {
				longArgs = Array.prototype.slice.apply(arguments, [1]);
			}

			if(event.substr(0,7) !== 'emitter' && (listeners['emitter'] || listeners['emitter.event'])) {
				if(longArgs) {
					trigger.apply(this, [].concat('emitter.event', event, longArgs));
				} else {
					trigger('emitter.event', event, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				}
			}

			if(eventListeners) {
				eventListeners = [].concat(eventListeners);
				for(lI = 0; lI < eventListeners.length; lI += 1) {
					if(longArgs) {
						if(eventListeners[lI].apply(this, longArgs) === false) {
							result = false;
						}
					} else {
						if(eventListeners[lI](a1, a2, a3, a4, a5, a6, a7, a8, a9) === false) {
							result = false;
						}
					}
				}
			}
			return result;
		}

		/**
		 * Triggers a batch of events. Passes listeners any additional arguments.
		 *  Optimized for 6 arguments.
		 */
		function batchTrigger(events, a1, a2, a3, a4, a5, a6, a7, a8, a9, la) {
			var longArgs, eI, result = true;

			if(typeof la !== 'undefined') {
				longArgs = Array.prototype.slice.apply(arguments, [1]);
			}

			for(eI = 0; eI < events.length; eI += 1) {
				if(longArgs) {
					args.unshift(events[eI]);
					if(trigger.apply(this, args) === false) { result = false; }
					args.shift();
				} else {
					if(trigger(events[eI], a1, a2, a3, a4, a5, a6, a7, a8, a9) === false) { result = false; }
				}

			}
			return result;
		}

		/**
		 * Sets events. Passes listeners any additional arguments.
		 *  Optimized for 6 arguments.
		 */
		function set(event, a1, a2, a3, a4, a5, a6, a7, a8, a9, la) {
			var args, binding, _clear;

			if(la) { args = Array.prototype.slice.apply(arguments, [1]); }

			if(typeof event === 'object' && event.push) {
				if(args) { return batchSet.apply(null, args); }
				else { return batchSet(event, a1, a2, a3, a4, a5, a6, a7, a8, a9); }
			}

			binding = on(['emitter.listener', 'pipe.listener'], function(_event, listener) {
				var lI;

				if(event === _event) {
					if(args) { listener.apply(null, args); }
					else { listener(a1, a2, a3, a4, a5, a6, a7, a8, a9); }
				}
			});

			if(args) { trigger.apply(null, arguments); }
			else { trigger(event, a1, a2, a3, a4, a5, a6, a7, a8, a9); }

			if(!setEvents[event]) { setEvents[event] = []; }
			setEvents[event].push(binding);

			_clear = binding.clear;
			binding.clear = clear;

			return binding;

			function clear() {
				trigger('emitter.unset', event);
				setEvents[event].splice(setEvents[event].indexOf(binding), 1);
				_clear();
			}
		}

		function batchSet(events, a1, a2, a3, a4, a5, a6, a7, a8, a9, la) {
			var binding = {}, args, eI, bindings = [];

			if(la) { args = Array.prototype.slice.apply(arguments, [1]); }

			for(eI = 0; eI < events.length; eI += 1) {
				if(args) {
					bindings.push(set.apply(null, [events[eI]].concat(args)));
				} else {
					bindings.push(set(events[eI], a1, a2, a3, a4, a5, a6, a7, a8, a9));
				}
			}

			binding.clear = clear;
			return binding;

			function clear() {
				var bI;
				for(bI = 0; bI < bindings.length; bI += 1) {
					bindings[bI].clear();
				}
			}
		}

		/**
		 * Clears a set event, or all set events.
		 * @param event
		 */
		function clearSet(event) {
			var bI;
			if(event && setEvents[event]) {
				for(bI = 0; bI < setEvents[event].length; bI += 1) {
					setEvents[event][bI].clear();
				}
				delete setEvents[event];
			} else if (!event) {
				for(event in setEvents) {
					if(!setEvents.hasOwnProperty(event)) { continue; }
					clearSet(event);
				}
			}
		}

		/**
		 * Pipes events from another emitter.
		 * @param event [optional]
		 * @return {Object}
		 */
		function pipe(event    ) {
			var binding = {}, emitters, eI, emitter, bindings = [],
			setEvents = [], eventCaptures = [], sendListeners = [];

			emitters = Array.prototype.slice.apply(arguments, [1]);

			if(typeof event === 'object') {
				if(event.on) { emitters.unshift(event); event = false; }
				else { return batchPipe.apply(null, arguments); }
			}

			for(eI = 0; eI < emitters.length; eI += 1) {
				emitter = emitters[eI];
				eventCaptures.push(emitter.on('emitter.event', captureEvent));
				sendListeners.push(on('emitter.listener', sendListener));
			}

			binding.clear = clear;
			return binding;

			function captureEvent(event     ) {
				var setEvent = false, args;
				args = Array.prototype.slice.apply(arguments, [1]);
				emitter.once(event, function() { setEvent = true; });
				if(event.substr(0, 4) !== 'pipe' && (listeners['pipe'] || listeners['pipe.event'])) {
					trigger('pipe.event', event, args);
				}
				if(setEvent) { setEvents.push(set.apply(null, [event].concat(args))); }
				else { triggerOnly.apply(null, [event].concat(args)); }
			}

			function sendListener(event, listener) {
				emitter.trigger('pipe.listener', event, listener);
			}

			function clear() {
				var bI, sI, eI, sII;
				for(bI = 0; bI < bindings.length; bI += 1) {
					bindings[bI].clear();
				}
				for(sI = 0; sI < bindings.length; sI += 1) {
					setEvents[sI].clear();
				}
				for(eI = 0; eI < eventListeners.length; eI += 1) {
					bindings[eI].clear();
				}
				for(sII = 0; sII < sendListeners.length; sII += 1) {
					setEvents[sII].clear();
				}
			}
		}

		function batchPipe(events    ) {
			var binding = {}, eI, bindings = [], emitters;
			emitters = Array.prototype.slice.apply(arguments, [1]);
			for(eI = 0; eI < events.length; eI += 1) {
				bindings.push(pipe.apply(null, [events[eI]].concat(emitters)));
			}

			binding.clear = clear;
			return binding;

			function clear() {
				var bI;
				for(bI = 0; bI < bindings.length; bI += 1) {
					bindings[bI].clear();
				}
			}
		}

		/**
		 * Clears pipes based on the events they transport.
		 * @param event
		 */
		function clearPipes(event) {
			var pI, bI, binding;

			for(pI = 0; pI < pipes.length; pI += 1) {
				if(event) {
					if(pipes[pI].type === 2) { continue; }
					if(pipes[pI].events.indexOf(event) === -1) { continue; }
					pipes[pI].events.splice(pipes[pI].events.indexOf(event), 1);
				}
				if(pipes[pI].type === 2) { pipes[pI].listenerBinding.clear(); }
				for(bI = 0; bI < pipes[pI].bindings.length; bI += 1) {
					if(event && pipes[pI].bindings[bI].event !== event) { continue; }
					pipes[pI].bindings[bI].clear();
					pipes[pI].bindings.splice(bI, 1);
					bI -= 1;
				}
				if(pipes[pI].bindings.length < 1) {
					pipes.splice(pI, 1);
					pI -= 1;
				}
			}
		}

		/**
		 * Gets listeners for events.
		 * @param event
		 * @return {*}
		 */
		function getListeners(event) {
			if(event) {
				return listeners[event];
			} else {
				return listeners;
			}
		}

		/**
		 * Clears listeners by events.
		 * @param event
		 */
		function clearListeners(event) {
			if(event) {
				delete listeners[event];
			} else {
				listeners = {};
			}
		}

		/**
		 * Clears the emitter
		 */
		function clear() {

			if(listeners['emitter'] || listeners['emitter.clear']) {
				trigger('emitter.clear');
			}

			listeners = {};

			clearSet();
			clearPipes();

			delete emitter.on;
			delete emitter.once;
			delete emitter.trigger;
			delete emitter.set;
			delete emitter.pipe;
			delete emitter.listeners;
			delete emitter.clear;
		}

		/**
		 * Binds the emitter's event system to the DOM event system
		 * @param node
		 */
		function handleNode(node) {
			var handledEvents = [], listenerBinding, DOMEventListeners = [];

			listenerBinding = on('emitter.listener', function(event) {
				if(handledEvents.indexOf(event) > -1) { return; }
				handledEvents.push(event);

				try {

					//W3C
					if(node.addEventListener) {
						node.addEventListener(event, nodeListener, false);
						DOMEventListeners.push({
							"event": event,
							"listener": nodeListener
						});
					}

					//MICROSOFT
					else if(node.attachEvent) {
						node.attachEvent('on' + event, nodeListener);
						DOMEventListeners.push({
							"event": event,
							"listener": nodeListener
						});
					}

				} catch(e) {
					console.error(e);
				}

				function nodeListener(eventObj    ) {
					var args = Array.prototype.slice.apply(arguments);
					args.unshift([event, 'dom.' + event]);
					if(trigger.apply(this, args) === false) {
						eventObj.preventDefault();
						eventObj.stopPropagation && eventObj.stopPropagation();
						eventObj.cancelBubble = true
					}
				}
			});

			emitter.clearNodeEmitter = clearNodeEmitter;

			function clearNodeEmitter() {
				var DI;
				for(DI = 0; DI < DOMEventListeners.length; DI += 1) {
					try {

						//W3C
						if(node.removeEventListener) {
							node.removeEventListener(DOMEventListeners[DI].event, DOMEventListeners[DI].listener, false);
						}

						//MICROSOFT
						else if(node.detachEvent) {
							node.detachEvent('on' + DOMEventListeners[DI].event, DOMEventListeners[DI].listener);
						}

					} catch(e) {
						console.error(e);
					}
				}

				handledEvents = [];
				listenerBinding.clear();
			}
		}
	}
});

;/* QuoJS v2.3.6 - 2013/5/13
   http://quojs.tapquo.com
   Copyright (c) 2013 Javi Jimenez Villar (@soyjavi) - Licensed MIT */
(function() {
  var Quo;

  Quo = (function() {
    var $$, EMPTY_ARRAY, Q;

    EMPTY_ARRAY = [];
    $$ = function(selector, children) {
      var dom;

      if (!selector) {
        return Q();
      } else if ($$.toType(selector) === "function") {
        return $$(document).ready(selector);
      } else {
        dom = $$.getDOMObject(selector, children);
        return Q(dom, selector);
      }
    };
    Q = function(dom, selector) {
      dom = dom || EMPTY_ARRAY;
      dom.__proto__ = Q.prototype;
      dom.selector = selector || '';
      return dom;
    };
    $$.extend = function(target) {
      Array.prototype.slice.call(arguments, 1).forEach(function(source) {
        var key, _results;

        _results = [];
        for (key in source) {
          _results.push(target[key] = source[key]);
        }
        return _results;
      });
      return target;
    };
    Q.prototype = $$.fn = {};
    return $$;
  })();

  window.Quo = Quo;

  "$$" in window || (window.$$ = Quo);

}).call(this);

(function() {
  (function($$) {
    var DEFAULT, JSONP_ID, MIME_TYPES, _isJsonP, _parseResponse, _xhrError, _xhrForm, _xhrHeaders, _xhrStatus, _xhrSuccess, _xhrTimeout;

    DEFAULT = {
      TYPE: "GET",
      MIME: "json"
    };
    MIME_TYPES = {
      script: "text/javascript, application/javascript",
      json: "application/json",
      xml: "application/xml, text/xml",
      html: "text/html",
      text: "text/plain"
    };
    JSONP_ID = 0;
    $$.ajaxSettings = {
      type: DEFAULT.TYPE,
      async: true,
      success: {},
      error: {},
      context: null,
      dataType: DEFAULT.MIME,
      headers: {},
      xhr: function() {
        return new window.XMLHttpRequest();
      },
      crossDomain: false,
      timeout: 0
    };
    $$.ajax = function(options) {
      var abortTimeout, error, settings, xhr;

      settings = $$.mix($$.ajaxSettings, options);
      if (settings.type === DEFAULT.TYPE) {
        settings.url += $$.serializeParameters(settings.data, "?");
      } else {
        settings.data = $$.serializeParameters(settings.data);
      }
      if (_isJsonP(settings.url)) {
        return $$.jsonp(settings);
      }
      xhr = settings.xhr();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          clearTimeout(abortTimeout);
          return _xhrStatus(xhr, settings);
        }
      };
      xhr.open(settings.type, settings.url, settings.async);
      _xhrHeaders(xhr, settings);
      if (settings.timeout > 0) {
        abortTimeout = setTimeout((function() {
          return _xhrTimeout(xhr, settings);
        }), settings.timeout);
      }
      try {
        xhr.send(settings.data);
      } catch (_error) {
        error = _error;
        xhr = error;
        _xhrError("Resource not found", xhr, settings);
      }
      if (settings.async) {
        return xhr;
      } else {
        return _parseResponse(xhr, settings);
      }
    };
    $$.jsonp = function(settings) {
      var abortTimeout, callbackName, script, xhr;

      if (settings.async) {
        callbackName = "jsonp" + (++JSONP_ID);
        script = document.createElement("script");
        xhr = {
          abort: function() {
            $$(script).remove();
            if (callbackName in window) {
              return window[callbackName] = {};
            }
          }
        };
        abortTimeout = void 0;
        window[callbackName] = function(response) {
          clearTimeout(abortTimeout);
          $$(script).remove();
          delete window[callbackName];
          return _xhrSuccess(response, xhr, settings);
        };
        script.src = settings.url.replace(RegExp("=\\?"), "=" + callbackName);
        $$("head").append(script);
        if (settings.timeout > 0) {
          abortTimeout = setTimeout((function() {
            return _xhrTimeout(xhr, settings);
          }), settings.timeout);
        }
        return xhr;
      } else {
        return console.error("QuoJS.ajax: Unable to make jsonp synchronous call.");
      }
    };
    $$.get = function(url, data, success, dataType) {
      return $$.ajax({
        url: url,
        data: data,
        success: success,
        dataType: dataType
      });
    };
    $$.post = function(url, data, success, dataType) {
      return _xhrForm("POST", url, data, success, dataType);
    };
    $$.put = function(url, data, success, dataType) {
      return _xhrForm("PUT", url, data, success, dataType);
    };
    $$["delete"] = function(url, data, success, dataType) {
      return _xhrForm("DELETE", url, data, success, dataType);
    };
    $$.json = function(url, data, success) {
      return $$.ajax({
        url: url,
        data: data,
        success: success,
        dataType: DEFAULT.MIME
      });
    };
    $$.serializeParameters = function(parameters, character) {
      var parameter, serialize;

      if (character == null) {
        character = "";
      }
      serialize = character;
      for (parameter in parameters) {
        if (parameters.hasOwnProperty(parameter)) {
          if (serialize !== character) {
            serialize += "&";
          }
          serialize += "" + (encodeURIComponent(parameter)) + "=" + (encodeURIComponent(parameters[parameter]));
        }
      }
      if (serialize === character) {
        return "";
      } else {
        return serialize;
      }
    };
    _xhrStatus = function(xhr, settings) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 0) {
        if (settings.async) {
          _xhrSuccess(_parseResponse(xhr, settings), xhr, settings);
        }
      } else {
        _xhrError("QuoJS.ajax: Unsuccesful request", xhr, settings);
      }
    };
    _xhrSuccess = function(response, xhr, settings) {
      settings.success.call(settings.context, response, xhr);
    };
    _xhrError = function(type, xhr, settings) {
      settings.error.call(settings.context, type, xhr, settings);
    };
    _xhrHeaders = function(xhr, settings) {
      var header;

      if (settings.contentType) {
        settings.headers["Content-Type"] = settings.contentType;
      }
      if (settings.dataType) {
        settings.headers["Accept"] = MIME_TYPES[settings.dataType];
      }
      for (header in settings.headers) {
        xhr.setRequestHeader(header, settings.headers[header]);
      }
    };
    _xhrTimeout = function(xhr, settings) {
      xhr.onreadystatechange = {};
      xhr.abort();
      _xhrError("QuoJS.ajax: Timeout exceeded", xhr, settings);
    };
    _xhrForm = function(method, url, data, success, dataType) {
      return $$.ajax({
        type: method,
        url: url,
        data: data,
        success: success,
        dataType: dataType,
        contentType: "application/x-www-form-urlencoded"
      });
    };
    _parseResponse = function(xhr, settings) {
      var error, response;

      response = xhr.responseText;
      if (response) {
        if (settings.dataType === DEFAULT.MIME) {
          try {
            response = JSON.parse(response);
          } catch (_error) {
            error = _error;
            response = error;
            _xhrError("QuoJS.ajax: Parse Error", xhr, settings);
          }
        } else {
          if (settings.dataType === "xml") {
            response = xhr.responseXML;
          }
        }
      }
      return response;
    };
    return _isJsonP = function(url) {
      return RegExp("=\\?").test(url);
    };
  })(Quo);

}).call(this);

(function() {
  (function($$) {
    var EMPTY_ARRAY, HTML_CONTAINERS, IS_HTML_FRAGMENT, OBJECT_PROTOTYPE, TABLE, TABLE_ROW, _compact, _flatten;

    EMPTY_ARRAY = [];
    OBJECT_PROTOTYPE = Object.prototype;
    IS_HTML_FRAGMENT = /^\s*<(\w+|!)[^>]*>/;
    TABLE = document.createElement('table');
    TABLE_ROW = document.createElement('tr');
    HTML_CONTAINERS = {
      "tr": document.createElement("tbody"),
      "tbody": TABLE,
      "thead": TABLE,
      "tfoot": TABLE,
      "td": TABLE_ROW,
      "th": TABLE_ROW,
      "*": document.createElement("div")
    };
    $$.toType = function(obj) {
      return OBJECT_PROTOTYPE.toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
    };
    $$.isOwnProperty = function(object, property) {
      return OBJECT_PROTOTYPE.hasOwnProperty.call(object, property);
    };
    $$.getDOMObject = function(selector, children) {
      var domain, elementTypes, type;

      domain = null;
      elementTypes = [1, 9, 11];
      type = $$.toType(selector);
      if (type === "array") {
        domain = _compact(selector);
      } else if (type === "string" && IS_HTML_FRAGMENT.test(selector)) {
        domain = $$.fragment(selector.trim(), RegExp.$1);
        selector = null;
      } else if (type === "string") {
        domain = $$.query(document, selector);
        if (children) {
          if (domain.length === 1) {
            domain = $$.query(domain[0], children);
          } else {
            domain = $$.map(function() {
              return $$.query(domain, children);
            });
          }
        }
      } else if (elementTypes.indexOf(selector.nodeType) >= 0 || selector === window) {
        domain = [selector];
        selector = null;
      }
      return domain;
    };
    $$.map = function(elements, callback) {
      var i, key, value, values;

      values = [];
      i = void 0;
      key = void 0;
      if ($$.toType(elements) === "array") {
        i = 0;
        while (i < elements.length) {
          value = callback(elements[i], i);
          if (value != null) {
            values.push(value);
          }
          i++;
        }
      } else {
        for (key in elements) {
          value = callback(elements[key], key);
          if (value != null) {
            values.push(value);
          }
        }
      }
      return _flatten(values);
    };
    $$.each = function(elements, callback) {
      var i, key;

      i = void 0;
      key = void 0;
      if ($$.toType(elements) === "array") {
        i = 0;
        while (i < elements.length) {
          if (callback.call(elements[i], i, elements[i]) === false) {
            return elements;
          }
          i++;
        }
      } else {
        for (key in elements) {
          if (callback.call(elements[key], key, elements[key]) === false) {
            return elements;
          }
        }
      }
      return elements;
    };
    $$.mix = function() {
      var arg, argument, child, len, prop;

      child = {};
      arg = 0;
      len = arguments.length;
      while (arg < len) {
        argument = arguments[arg];
        for (prop in argument) {
          if ($$.isOwnProperty(argument, prop) && argument[prop] !== undefined) {
            child[prop] = argument[prop];
          }
        }
        arg++;
      }
      return child;
    };
    $$.fragment = function(markup, tag) {
      var container;

      if (tag == null) {
        tag = "*";
      }
      if (!(tag in HTML_CONTAINERS)) {
        tag = "*";
      }
      container = HTML_CONTAINERS[tag];
      container.innerHTML = "" + markup;
      return $$.each(Array.prototype.slice.call(container.childNodes), function() {
        return container.removeChild(this);
      });
    };
    $$.fn.map = function(fn) {
      return $$.map(this, function(el, i) {
        return fn.call(el, i, el);
      });
    };
    $$.fn.instance = function(property) {
      return this.map(function() {
        return this[property];
      });
    };
    $$.fn.filter = function(selector) {
      return $$([].filter.call(this, function(element) {
        return element.parentNode && $$.query(element.parentNode, selector).indexOf(element) >= 0;
      }));
    };
    $$.fn.forEach = EMPTY_ARRAY.forEach;
    $$.fn.indexOf = EMPTY_ARRAY.indexOf;
    _compact = function(array) {
      return array.filter(function(item) {
        return item !== void 0 && item !== null;
      });
    };
    return _flatten = function(array) {
      if (array.length > 0) {
        return [].concat.apply([], array);
      } else {
        return array;
      }
    };
  })(Quo);

}).call(this);

(function() {
  (function($$) {
    $$.fn.attr = function(name, value) {
      if (this.length === 0) {
        null;
      }
      if ($$.toType(name) === "string" && value === void 0) {
        return this[0].getAttribute(name);
      } else {
        return this.each(function() {
          return this.setAttribute(name, value);
        });
      }
    };
    $$.fn.removeAttr = function(name) {
      return this.each(function() {
        return this.removeAttribute(name);
      });
    };
    $$.fn.data = function(name, value) {
      return this.attr("data-" + name, value);
    };
    $$.fn.removeData = function(name) {
      return this.removeAttr("data-" + name);
    };
    $$.fn.val = function(value) {
      if ($$.toType(value) === "string") {
        return this.each(function() {
          return this.value = value;
        });
      } else {
        if (this.length > 0) {
          return this[0].value;
        } else {
          return null;
        }
      }
    };
    $$.fn.show = function() {
      return this.style("display", "block");
    };
    $$.fn.hide = function() {
      return this.style("display", "none");
    };
    $$.fn.height = function() {
      var offset;

      offset = this.offset();
      return offset.height;
    };
    $$.fn.width = function() {
      var offset;

      offset = this.offset();
      return offset.width;
    };
    $$.fn.offset = function() {
      var bounding;

      bounding = this[0].getBoundingClientRect();
      return {
        left: bounding.left + window.pageXOffset,
        top: bounding.top + window.pageYOffset,
        width: bounding.width,
        height: bounding.height
      };
    };
    return $$.fn.remove = function() {
      return this.each(function() {
        if (this.parentNode != null) {
          return this.parentNode.removeChild(this);
        }
      });
    };
  })(Quo);

}).call(this);

(function() {
  (function($$) {
    var IS_WEBKIT, SUPPORTED_OS, _current, _detectBrowser, _detectEnvironment, _detectOS, _detectScreen;

    _current = null;
    IS_WEBKIT = /WebKit\/([\d.]+)/;
    SUPPORTED_OS = {
      Android: /(Android)\s+([\d.]+)/,
      ipad: /(iPad).*OS\s([\d_]+)/,
      iphone: /(iPhone\sOS)\s([\d_]+)/,
      Blackberry: /(BlackBerry|BB10|Playbook).*Version\/([\d.]+)/,
      FirefoxOS: /(Mozilla).*Mobile[^\/]*\/([\d\.]*)/,
      webOS: /(webOS|hpwOS)[\s\/]([\d.]+)/
    };
    $$.isMobile = function() {
      _current = _current || _detectEnvironment();
      return _current.isMobile && _current.os.name !== "firefoxOS";
    };
    $$.environment = function() {
      _current = _current || _detectEnvironment();
      return _current;
    };
    $$.isOnline = function() {
      return navigator.onLine;
    };
    _detectEnvironment = function() {
      var environment, user_agent;

      user_agent = navigator.userAgent;
      environment = {};
      environment.browser = _detectBrowser(user_agent);
      environment.os = _detectOS(user_agent);
      environment.isMobile = !!environment.os;
      environment.screen = _detectScreen();
      return environment;
    };
    _detectBrowser = function(user_agent) {
      var is_webkit;

      is_webkit = user_agent.match(IS_WEBKIT);
      if (is_webkit) {
        return is_webkit[0];
      } else {
        return user_agent;
      }
    };
    _detectOS = function(user_agent) {
      var detected_os, os, supported;

      detected_os = null;
      for (os in SUPPORTED_OS) {
        supported = user_agent.match(SUPPORTED_OS[os]);
        if (supported) {
          detected_os = {
            name: (os === "iphone" || os === "ipad" ? "ios" : os),
            version: supported[2].replace("_", ".")
          };
          break;
        }
      }
      return detected_os;
    };
    return _detectScreen = function() {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    };
  })(Quo);

}).call(this);

(function() {
  (function($$) {
    var ELEMENT_ID, EVENTS_DESKTOP, EVENT_METHODS, HANDLERS, READY_EXPRESSION, _createProxy, _createProxyCallback, _environmentEvent, _findHandlers, _getElementId, _subscribe, _unsubscribe;

    ELEMENT_ID = 1;
    HANDLERS = {};
    EVENT_METHODS = {
      preventDefault: "isDefaultPrevented",
      stopImmediatePropagation: "isImmediatePropagationStopped",
      stopPropagation: "isPropagationStopped"
    };
    EVENTS_DESKTOP = {
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup",
      touch: "click",
      doubletap: "dblclick",
      orientationchange: "resize"
    };
    READY_EXPRESSION = /complete|loaded|interactive/;
    $$.fn.on = function(event, selector, callback) {
      if (selector === "undefined" || $$.toType(selector) === "function") {
        return this.bind(event, selector);
      } else {
        return this.delegate(selector, event, callback);
      }
    };
    $$.fn.off = function(event, selector, callback) {
      if (selector === "undefined" || $$.toType(selector) === "function") {
        return this.unbind(event, selector);
      } else {
        return this.undelegate(selector, event, callback);
      }
    };
    $$.fn.ready = function(callback) {
      if (READY_EXPRESSION.test(document.readyState)) {
        return callback($$);
      } else {
        return $$.fn.addEvent(document, "DOMContentLoaded", function() {
          return callback($$);
        });
      }
    };
    $$.Event = function(type, touch) {
      var event, property;

      event = document.createEvent("Events");
      event.initEvent(type, true, true, null, null, null, null, null, null, null, null, null, null, null, null);
      if (touch) {
        for (property in touch) {
          event[property] = touch[property];
        }
      }
      return event;
    };
    $$.fn.bind = function(event, callback) {
      return this.each(function() {
        _subscribe(this, event, callback);
      });
    };
    $$.fn.unbind = function(event, callback) {
      return this.each(function() {
        _unsubscribe(this, event, callback);
      });
    };
    $$.fn.delegate = function(selector, event, callback) {
      return this.each(function(i, element) {
        _subscribe(element, event, callback, selector, function(fn) {
          return function(e) {
            var evt, match;

            match = $$(e.target).closest(selector, element).get(0);
            if (match) {
              evt = $$.extend(_createProxy(e), {
                currentTarget: match,
                liveFired: element
              });
              return fn.apply(match, [evt].concat([].slice.call(arguments, 1)));
            }
          };
        });
      });
    };
    $$.fn.undelegate = function(selector, event, callback) {
      return this.each(function() {
        _unsubscribe(this, event, callback, selector);
      });
    };
    $$.fn.trigger = function(event, touch, originalEvent) {
      if ($$.toType(event) === "string") {
        event = $$.Event(event, touch);
      }
      if (originalEvent != null) {
        event.originalEvent = originalEvent;
      }
      return this.each(function() {
        this.dispatchEvent(event);
      });
    };
    $$.fn.addEvent = function(element, event_name, callback) {
      if (element.addEventListener) {
        return element.addEventListener(event_name, callback, false);
      } else if (element.attachEvent) {
        return element.attachEvent("on" + event_name, callback);
      } else {
        return element["on" + event_name] = callback;
      }
    };
    $$.fn.removeEvent = function(element, event_name, callback) {
      if (element.removeEventListener) {
        return element.removeEventListener(event_name, callback, false);
      } else if (element.detachEvent) {
        return element.detachEvent("on" + event_name, callback);
      } else {
        return element["on" + event_name] = null;
      }
    };
    _subscribe = function(element, event, callback, selector, delegate_callback) {
      var delegate, element_handlers, element_id, handler;

      event = _environmentEvent(event);
      element_id = _getElementId(element);
      element_handlers = HANDLERS[element_id] || (HANDLERS[element_id] = []);
      delegate = delegate_callback && delegate_callback(callback, event);
      handler = {
        event: event,
        callback: callback,
        selector: selector,
        proxy: _createProxyCallback(delegate, callback, element),
        delegate: delegate,
        index: element_handlers.length
      };
      element_handlers.push(handler);
      return $$.fn.addEvent(element, handler.event, handler.proxy);
    };
    _unsubscribe = function(element, event, callback, selector) {
      var element_id;

      event = _environmentEvent(event);
      element_id = _getElementId(element);
      return _findHandlers(element_id, event, callback, selector).forEach(function(handler) {
        delete HANDLERS[element_id][handler.index];
        return $$.fn.removeEvent(element, handler.event, handler.proxy);
      });
    };
    _getElementId = function(element) {
      return element._id || (element._id = ELEMENT_ID++);
    };
    _environmentEvent = function(event) {
      var environment_event;

      environment_event = ($$.isMobile() ? event : EVENTS_DESKTOP[event]);
      return environment_event || event;
    };
    _createProxyCallback = function(delegate, callback, element) {
      var proxy;

      callback = delegate || callback;
      proxy = function(event) {
        var result;

        result = callback.apply(element, [event].concat(event.data));
        if (result === false) {
          event.preventDefault();
        }
        return result;
      };
      return proxy;
    };
    _findHandlers = function(element_id, event, fn, selector) {
      return (HANDLERS[element_id] || []).filter(function(handler) {
        return handler && (!event || handler.event === event) && (!fn || handler.callback === fn) && (!selector || handler.selector === selector);
      });
    };
    return _createProxy = function(event) {
      var proxy;

      proxy = $$.extend({
        originalEvent: event
      }, event);
      $$.each(EVENT_METHODS, function(name, method) {
        proxy[name] = function() {
          this[method] = function() {
            return true;
          };
          return event[name].apply(event, arguments);
        };
        return proxy[method] = function() {
          return false;
        };
      });
      return proxy;
    };
  })(Quo);

}).call(this);

(function() {
  (function($$) {
    var CURRENT_TOUCH, EVENT, FIRST_TOUCH, GESTURE, GESTURES, HOLD_DELAY, TAPS, TOUCH_TIMEOUT, _angle, _capturePinch, _captureRotation, _cleanGesture, _distance, _fingersPosition, _getTouches, _hold, _isSwipe, _listenTouches, _onTouchEnd, _onTouchMove, _onTouchStart, _parentIfText, _swipeDirection, _trigger;

    TAPS = null;
    EVENT = void 0;
    GESTURE = {};
    FIRST_TOUCH = [];
    CURRENT_TOUCH = [];
    TOUCH_TIMEOUT = void 0;
    HOLD_DELAY = 650;
    GESTURES = ["touch", "tap", "singleTap", "doubleTap", "hold", "swipe", "swiping", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "rotate", "rotating", "rotateLeft", "rotateRight", "pinch", "pinching", "pinchIn", "pinchOut", "drag", "dragLeft", "dragRight", "dragUp", "dragDown"];
    GESTURES.forEach(function(event) {
      $$.fn[event] = function(callback) {
        var event_name;

        event_name = event === "touch" ? "touchend" : event;
        return $$(document.body).delegate(this.selector, event_name, callback);
      };
      return this;
    });
    $$(document).ready(function() {
      return _listenTouches();
    });
    _listenTouches = function() {
      var environment;

      environment = $$(document.body);
      environment.bind("touchstart", _onTouchStart);
      environment.bind("touchmove", _onTouchMove);
      environment.bind("touchend", _onTouchEnd);
      return environment.bind("touchcancel", _cleanGesture);
    };
    _onTouchStart = function(event) {
      var delta, fingers, now, touches;

      EVENT = event;
      now = Date.now();
      delta = now - (GESTURE.last || now);
      TOUCH_TIMEOUT && clearTimeout(TOUCH_TIMEOUT);
      touches = _getTouches(event);
      fingers = touches.length;
      FIRST_TOUCH = _fingersPosition(touches, fingers);
      GESTURE.el = $$(_parentIfText(touches[0].target));
      GESTURE.fingers = fingers;
      GESTURE.last = now;
      if (!GESTURE.taps) {
        GESTURE.taps = 0;
      }
      GESTURE.taps++;
      if (fingers === 1) {
        if (fingers >= 1) {
          GESTURE.gap = delta > 0 && delta <= 250;
        }
        return setTimeout(_hold, HOLD_DELAY);
      } else if (fingers === 2) {
        GESTURE.initial_angle = parseInt(_angle(FIRST_TOUCH), 10);
        GESTURE.initial_distance = parseInt(_distance(FIRST_TOUCH), 10);
        GESTURE.angle_difference = 0;
        return GESTURE.distance_difference = 0;
      }
    };
    _onTouchMove = function(event) {
      var fingers, is_swipe, touches;

      EVENT = event;
      if (GESTURE.el) {
        touches = _getTouches(event);
        fingers = touches.length;
        if (fingers === GESTURE.fingers) {
          CURRENT_TOUCH = _fingersPosition(touches, fingers);
          is_swipe = _isSwipe(event);
          if (is_swipe) {
            GESTURE.prevSwipe = true;
          }
          if (is_swipe || GESTURE.prevSwipe === true) {
            _trigger("swiping");
          }
          if (fingers === 2) {
            _captureRotation();
            _capturePinch();
            event.preventDefault();
          }
        } else {
          _cleanGesture();
        }
      }
      return true;
    };
    _isSwipe = function(event) {
      var it_is, move_horizontal, move_vertical;

      it_is = false;
      if (CURRENT_TOUCH[0]) {
        move_horizontal = Math.abs(FIRST_TOUCH[0].x - CURRENT_TOUCH[0].x) > 30;
        move_vertical = Math.abs(FIRST_TOUCH[0].y - CURRENT_TOUCH[0].y) > 30;
        it_is = GESTURE.el && (move_horizontal || move_vertical);
      }
      return it_is;
    };
    _onTouchEnd = function(event) {
      var anyevent, drag_direction, pinch_direction, rotation_direction, swipe_direction;

      EVENT = event;
      _trigger("touch");
      if (GESTURE.fingers === 1) {
        if (GESTURE.taps === 2 && GESTURE.gap) {
          _trigger("doubleTap");
          _cleanGesture();
        } else if (_isSwipe() || GESTURE.prevSwipe) {
          _trigger("swipe");
          swipe_direction = _swipeDirection(FIRST_TOUCH[0].x, CURRENT_TOUCH[0].x, FIRST_TOUCH[0].y, CURRENT_TOUCH[0].y);
          _trigger("swipe" + swipe_direction);
          _cleanGesture();
        } else {
          _trigger("tap");
          if (GESTURE.taps === 1) {
            TOUCH_TIMEOUT = setTimeout((function() {
              _trigger("singleTap");
              return _cleanGesture();
            }), 100);
          }
        }
      } else {
        anyevent = false;
        if (GESTURE.angle_difference !== 0) {
          _trigger("rotate", {
            angle: GESTURE.angle_difference
          });
          rotation_direction = GESTURE.angle_difference > 0 ? "rotateRight" : "rotateLeft";
          _trigger(rotation_direction, {
            angle: GESTURE.angle_difference
          });
          anyevent = true;
        }
        if (GESTURE.distance_difference !== 0) {
          _trigger("pinch", {
            angle: GESTURE.distance_difference
          });
          pinch_direction = GESTURE.distance_difference > 0 ? "pinchOut" : "pinchIn";
          _trigger(pinch_direction, {
            distance: GESTURE.distance_difference
          });
          anyevent = true;
        }
        if (!anyevent && CURRENT_TOUCH[0]) {
          if (Math.abs(FIRST_TOUCH[0].x - CURRENT_TOUCH[0].x) > 10 || Math.abs(FIRST_TOUCH[0].y - CURRENT_TOUCH[0].y) > 10) {
            _trigger("drag");
            drag_direction = _swipeDirection(FIRST_TOUCH[0].x, CURRENT_TOUCH[0].x, FIRST_TOUCH[0].y, CURRENT_TOUCH[0].y);
            _trigger("drag" + drag_direction);
          }
        }
        _cleanGesture();
      }
      return EVENT = void 0;
    };
    _fingersPosition = function(touches, fingers) {
      var i, result;

      result = [];
      i = 0;
      touches = touches[0].targetTouches ? touches[0].targetTouches : touches;
      while (i < fingers) {
        result.push({
          x: touches[i].pageX,
          y: touches[i].pageY
        });
        i++;
      }
      return result;
    };
    _captureRotation = function() {
      var angle, diff, i, symbol;

      angle = parseInt(_angle(CURRENT_TOUCH), 10);
      diff = parseInt(GESTURE.initial_angle - angle, 10);
      if (Math.abs(diff) > 20 || GESTURE.angle_difference !== 0) {
        i = 0;
        symbol = GESTURE.angle_difference < 0 ? "-" : "+";
        while (Math.abs(diff - GESTURE.angle_difference) > 90 && i++ < 10) {
          eval("diff " + symbol + "= 180;");
        }
        GESTURE.angle_difference = parseInt(diff, 10);
        return _trigger("rotating", {
          angle: GESTURE.angle_difference
        });
      }
    };
    _capturePinch = function() {
      var diff, distance;

      distance = parseInt(_distance(CURRENT_TOUCH), 10);
      diff = GESTURE.initial_distance - distance;
      if (Math.abs(diff) > 10) {
        GESTURE.distance_difference = diff;
        return _trigger("pinching", {
          distance: diff
        });
      }
    };
    _trigger = function(type, params) {
      if (GESTURE.el) {
        params = params || {};
        if (CURRENT_TOUCH[0]) {
          params.iniTouch = (GESTURE.fingers > 1 ? FIRST_TOUCH : FIRST_TOUCH[0]);
          params.currentTouch = (GESTURE.fingers > 1 ? CURRENT_TOUCH : CURRENT_TOUCH[0]);
        }
        return GESTURE.el.trigger(type, params, EVENT);
      }
    };
    _cleanGesture = function(event) {
      FIRST_TOUCH = [];
      CURRENT_TOUCH = [];
      GESTURE = {};
      return clearTimeout(TOUCH_TIMEOUT);
    };
    _angle = function(touches_data) {
      var A, B, angle;

      A = touches_data[0];
      B = touches_data[1];
      angle = Math.atan((B.y - A.y) * -1 / (B.x - A.x)) * (180 / Math.PI);
      if (angle < 0) {
        return angle + 180;
      } else {
        return angle;
      }
    };
    _distance = function(touches_data) {
      var A, B;

      A = touches_data[0];
      B = touches_data[1];
      return Math.sqrt((B.x - A.x) * (B.x - A.x) + (B.y - A.y) * (B.y - A.y)) * -1;
    };
    _getTouches = function(event) {
      if ($$.isMobile()) {
        return event.touches;
      } else {
        return [event];
      }
    };
    _parentIfText = function(node) {
      if ("tagName" in node) {
        return node;
      } else {
        return node.parentNode;
      }
    };
    _swipeDirection = function(x1, x2, y1, y2) {
      var xDelta, yDelta;

      xDelta = Math.abs(x1 - x2);
      yDelta = Math.abs(y1 - y2);
      if (xDelta >= yDelta) {
        if (x1 - x2 > 0) {
          return "Left";
        } else {
          return "Right";
        }
      } else {
        if (y1 - y2 > 0) {
          return "Up";
        } else {
          return "Down";
        }
      }
    };
    return _hold = function() {
      if (GESTURE.last && (Date.now() - GESTURE.last >= HOLD_DELAY)) {
        _trigger("hold");
        return GESTURE.taps = 0;
      }
    };
  })(Quo);

}).call(this);

(function() {
  (function($$) {
    $$.fn.text = function(value) {
      if (value || $$.toType(value) === "number") {
        return this.each(function() {
          return this.textContent = value;
        });
      } else {
        return this[0].textContent;
      }
    };
    $$.fn.html = function(value) {
      var type;

      type = $$.toType(value);
      if (value || type === "number" || type === "string") {
        return this.each(function() {
          var element, _i, _len, _results;

          if (type === "string" || type === "number") {
            return this.innerHTML = value;
          } else {
            this.innerHTML = null;
            if (type === "array") {
              _results = [];
              for (_i = 0, _len = value.length; _i < _len; _i++) {
                element = value[_i];
                _results.push(this.appendChild(element));
              }
              return _results;
            } else {
              return this.appendChild(value);
            }
          }
        });
      } else {
        return this[0].innerHTML;
      }
    };
    $$.fn.append = function(value) {
      var type;

      type = $$.toType(value);
      return this.each(function() {
        var _this = this;

        if (type === "string") {
          return this.insertAdjacentHTML("beforeend", value);
        } else if (type === "array") {
          return value.each(function(index, value) {
            return _this.appendChild(value);
          });
        } else {
          return this.appendChild(value);
        }
      });
    };
    $$.fn.prepend = function(value) {
      var type;

      type = $$.toType(value);
      return this.each(function() {
        var _this = this;

        if (type === "string") {
          return this.insertAdjacentHTML("afterbegin", value);
        } else if (type === "array") {
          return value.each(function(index, value) {
            return _this.insertBefore(value, _this.firstChild);
          });
        } else {
          return this.insertBefore(value, this.firstChild);
        }
      });
    };
    $$.fn.replaceWith = function(value) {
      var type;

      type = $$.toType(value);
      this.each(function() {
        var _this = this;

        if (this.parentNode) {
          if (type === "string") {
            return this.insertAdjacentHTML("beforeBegin", value);
          } else if (type === "array") {
            return value.each(function(index, value) {
              return _this.parentNode.insertBefore(value, _this);
            });
          } else {
            return this.parentNode.insertBefore(value, this);
          }
        }
      });
      return this.remove();
    };
    return $$.fn.empty = function() {
      return this.each(function() {
        return this.innerHTML = null;
      });
    };
  })(Quo);

}).call(this);

(function() {
  (function($$) {
    var CLASS_SELECTOR, ID_SELECTOR, PARENT_NODE, TAG_SELECTOR, _filtered, _findAncestors;

    PARENT_NODE = "parentNode";
    CLASS_SELECTOR = /^\.([\w-]+)$/;
    ID_SELECTOR = /^#[\w\d-]+$/;
    TAG_SELECTOR = /^[\w-]+$/;
    $$.query = function(domain, selector) {
      var elements;

      selector = selector.trim();
      if (CLASS_SELECTOR.test(selector)) {
        elements = domain.getElementsByClassName(selector.replace(".", ""));
      } else if (TAG_SELECTOR.test(selector)) {
        elements = domain.getElementsByTagName(selector);
      } else if (ID_SELECTOR.test(selector) && domain === document) {
        elements = domain.getElementById(selector.replace("#", ""));
        if (!elements) {
          elements = [];
        }
      } else {
        elements = domain.querySelectorAll(selector);
      }
      if (elements.nodeType) {
        return [elements];
      } else {
        return Array.prototype.slice.call(elements);
      }
    };
    $$.fn.find = function(selector) {
      var result;

      if (this.length === 1) {
        result = Quo.query(this[0], selector);
      } else {
        result = this.map(function() {
          return Quo.query(this, selector);
        });
      }
      return $$(result);
    };
    $$.fn.parent = function(selector) {
      var ancestors;

      ancestors = (selector ? _findAncestors(this) : this.instance(PARENT_NODE));
      return _filtered(ancestors, selector);
    };
    $$.fn.siblings = function(selector) {
      var siblings_elements;

      siblings_elements = this.map(function(index, element) {
        return Array.prototype.slice.call(element.parentNode.children).filter(function(child) {
          return child !== element;
        });
      });
      return _filtered(siblings_elements, selector);
    };
    $$.fn.children = function(selector) {
      var children_elements;

      children_elements = this.map(function() {
        return Array.prototype.slice.call(this.children);
      });
      return _filtered(children_elements, selector);
    };
    $$.fn.get = function(index) {
      if (index === undefined) {
        return this;
      } else {
        return this[index];
      }
    };
    $$.fn.first = function() {
      return $$(this[0]);
    };
    $$.fn.last = function() {
      return $$(this[this.length - 1]);
    };
    $$.fn.closest = function(selector, context) {
      var candidates, node;

      node = this[0];
      candidates = $$(selector);
      if (!candidates.length) {
        node = null;
      }
      while (node && candidates.indexOf(node) < 0) {
        node = node !== context && node !== document && node.parentNode;
      }
      return $$(node);
    };
    $$.fn.each = function(callback) {
      this.forEach(function(element, index) {
        return callback.call(element, index, element);
      });
      return this;
    };
    _findAncestors = function(nodes) {
      var ancestors;

      ancestors = [];
      while (nodes.length > 0) {
        nodes = $$.map(nodes, function(node) {
          if ((node = node.parentNode) && node !== document && ancestors.indexOf(node) < 0) {
            ancestors.push(node);
            return node;
          }
        });
      }
      return ancestors;
    };
    return _filtered = function(nodes, selector) {
      if (selector === undefined) {
        return $$(nodes);
      } else {
        return $$(nodes).filter(selector);
      }
    };
  })(Quo);

}).call(this);

(function() {
  (function($$) {
    var VENDORS, _computedStyle, _existsClass;

    VENDORS = ["-webkit-", "-moz-", "-ms-", "-o-", ""];
    $$.fn.addClass = function(name) {
      return this.each(function() {
        if (!_existsClass(name, this.className)) {
          this.className += " " + name;
          return this.className = this.className.trim();
        }
      });
    };
    $$.fn.removeClass = function(name) {
      return this.each(function() {
        if (!name) {
          return this.className = "";
        } else {
          if (_existsClass(name, this.className)) {
            return this.className = this.className.replace(name, " ").replace(/\s+/g, " ").trim();
          }
        }
      });
    };
    $$.fn.toggleClass = function(name) {
      return this.each(function() {
        if (_existsClass(name, this.className)) {
          return this.className = this.className.replace(name, " ");
        } else {
          this.className += " " + name;
          return this.className = this.className.trim();
        }
      });
    };
    $$.fn.hasClass = function(name) {
      return _existsClass(name, this[0].className);
    };
    $$.fn.style = function(property, value) {
      if (value) {
        return this.each(function() {
          return this.style[property] = value;
        });
      } else {
        return this[0].style[property] || _computedStyle(this[0], property);
      }
    };
    $$.fn.css = function(property, value) {
      return this.style(property, value);
    };
    $$.fn.vendor = function(property, value) {
      var vendor, _i, _len, _results;

      _results = [];
      for (_i = 0, _len = VENDORS.length; _i < _len; _i++) {
        vendor = VENDORS[_i];
        _results.push(this.style("" + vendor + property, value));
      }
      return _results;
    };
    _existsClass = function(name, className) {
      var classes;

      classes = className.split(/\s+/g);
      return classes.indexOf(name) >= 0;
    };
    return _computedStyle = function(element, property) {
      return document.defaultView.getComputedStyle(element, "")[property];
    };
  })(Quo);

}).call(this);

;
//@ sourceMappingURL=vendor.js.map