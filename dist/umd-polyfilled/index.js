(function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?this:self:global:window,b.createVisibilityStateListener=a()}})(function(){var a=Math.min;return function(){function b(d,e,g){function a(j,i){if(!e[j]){if(!d[j]){var f="function"==typeof require&&require;if(!i&&f)return f(j,!0);if(h)return h(j,!0);var c=new Error("Cannot find module '"+j+"'");throw c.code="MODULE_NOT_FOUND",c}var k=e[j]={exports:{}};d[j][0].call(k.exports,function(b){var c=d[j][1][b];return a(c||b)},k,k.exports,b,d,e,g)}return e[j].exports}for(var h="function"==typeof require&&require,c=0;c<g.length;c++)a(g[c]);return a}return b}()({1:[function(a,b){b.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function");return a}},{}],2:[function(a,b){var c=a("../internals/is-object");b.exports=function(a){if(!c(a))throw TypeError(a+" is not an object");return a}},{"../internals/is-object":30}],3:[function(a,b){var c=a("../internals/to-indexed-object"),d=a("../internals/to-length"),e=a("../internals/to-absolute-index"),f=function(a){return function(b,f,g){var h,i=c(b),j=d(i.length),k=e(g,j);if(a&&f!=f){for(;j>k;)if(h=i[k++],h!=h)return!0;}else for(;j>k;k++)if((a||k in i)&&i[k]===f)return a||k||0;return!a&&-1}};b.exports={includes:f(!0),indexOf:f(!1)}},{"../internals/to-absolute-index":48,"../internals/to-indexed-object":49,"../internals/to-length":51}],4:[function(a,b){var c=a("../internals/function-bind-context"),d=a("../internals/indexed-object"),e=a("../internals/to-object"),f=a("../internals/to-length"),g=a("../internals/array-species-create"),h=[].push,i=function(a){var b=1==a,i=4==a,j=6==a;return function(k,l,m,n){for(var o,p,q=e(k),r=d(q),s=c(l,m,3),t=f(r.length),u=0,v=n||g,w=b?v(k,t):2==a?v(k,0):void 0;t>u;u++)if((5==a||j||u in r)&&(o=r[u],p=s(o,u,q),a))if(b)w[u]=p;else if(p)switch(a){case 3:return!0;case 5:return o;case 6:return u;case 2:h.call(w,o);}else if(i)return!1;return j?-1:3==a||i?i:w}};b.exports={forEach:i(0),map:i(1),filter:i(2),some:i(3),every:i(4),find:i(5),findIndex:i(6)}},{"../internals/array-species-create":7,"../internals/function-bind-context":19,"../internals/indexed-object":25,"../internals/to-length":51,"../internals/to-object":52}],5:[function(a,b){var c=a("../internals/fails"),d=a("../internals/well-known-symbol"),e=a("../internals/engine-v8-version"),f=d("species");b.exports=function(a){return 51<=e||!c(function(){var b=[],c=b.constructor={};return c[f]=function(){return{foo:1}},1!==b[a](Boolean).foo})}},{"../internals/engine-v8-version":15,"../internals/fails":18,"../internals/well-known-symbol":56}],6:[function(a,b){var c=a("../internals/descriptors"),d=a("../internals/fails"),e=a("../internals/has"),f=Object.defineProperty,g={},h=function(a){throw a};b.exports=function(a,b){if(e(g,a))return g[a];b||(b={});var i=[][a],j=!!e(b,"ACCESSORS")&&b.ACCESSORS,k=e(b,0)?b[0]:h,l=e(b,1)?b[1]:void 0;return g[a]=!!i&&!d(function(){if(j&&!c)return!0;var a={length:-1};j?f(a,1,{enumerable:!0,get:h}):a[1]=1,i.call(a,k,l)})}},{"../internals/descriptors":12,"../internals/fails":18,"../internals/has":22}],7:[function(a,b){var c=a("../internals/is-object"),d=a("../internals/is-array"),e=a("../internals/well-known-symbol"),f=e("species");b.exports=function(a,b){var e;return d(a)&&(e=a.constructor,"function"==typeof e&&(e===Array||d(e.prototype))?e=void 0:c(e)&&(e=e[f],null===e&&(e=void 0))),new(void 0===e?Array:e)(0===b?0:b)}},{"../internals/is-array":28,"../internals/is-object":30,"../internals/well-known-symbol":56}],8:[function(a,b){var c={}.toString;b.exports=function(a){return c.call(a).slice(8,-1)}},{}],9:[function(a,b){var c=a("../internals/has"),d=a("../internals/own-keys"),e=a("../internals/object-get-own-property-descriptor"),f=a("../internals/object-define-property");b.exports=function(a,b){for(var g,h=d(b),j=f.f,k=e.f,l=0;l<h.length;l++)g=h[l],c(a,g)||j(a,g,k(b,g))}},{"../internals/has":22,"../internals/object-define-property":34,"../internals/object-get-own-property-descriptor":35,"../internals/own-keys":40}],10:[function(a,b){var c=a("../internals/descriptors"),d=a("../internals/object-define-property"),e=a("../internals/create-property-descriptor");b.exports=c?function(a,b,c){return d.f(a,b,e(1,c))}:function(a,b,c){return a[b]=c,a}},{"../internals/create-property-descriptor":11,"../internals/descriptors":12,"../internals/object-define-property":34}],11:[function(a,b){b.exports=function(a,b){return{enumerable:!(1&a),configurable:!(2&a),writable:!(4&a),value:b}}},{}],12:[function(a,b){var c=a("../internals/fails");b.exports=!c(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},{"../internals/fails":18}],13:[function(a,b){var c=a("../internals/global"),d=a("../internals/is-object"),e=c.document,f=d(e)&&d(e.createElement);b.exports=function(a){return f?e.createElement(a):{}}},{"../internals/global":21,"../internals/is-object":30}],14:[function(a,b){var c=a("../internals/get-built-in");b.exports=c("navigator","userAgent")||""},{"../internals/get-built-in":20}],15:[function(a,b){var c,d,e=a("../internals/global"),f=a("../internals/engine-user-agent"),g=e.process,h=g&&g.versions,i=h&&h.v8;i?(c=i.split("."),d=c[0]+c[1]):f&&(c=f.match(/Edge\/(\d+)/),(!c||74<=c[1])&&(c=f.match(/Chrome\/(\d+)/),c&&(d=c[1]))),b.exports=d&&+d},{"../internals/engine-user-agent":14,"../internals/global":21}],16:[function(a,b){b.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},{}],17:[function(a,b){var c=a("../internals/global"),d=a("../internals/object-get-own-property-descriptor").f,e=a("../internals/create-non-enumerable-property"),f=a("../internals/redefine"),g=a("../internals/set-global"),h=a("../internals/copy-constructor-properties"),i=a("../internals/is-forced");b.exports=function(a,b){var j,k,l,m,n,o,p=a.target,q=a.global,r=a.stat;if(k=q?c:r?c[p]||g(p,{}):(c[p]||{}).prototype,k)for(l in b){if(n=b[l],a.noTargetGet?(o=d(k,l),m=o&&o.value):m=k[l],j=i(q?l:p+(r?".":"#")+l,a.forced),!j&&void 0!==m){if(typeof n==typeof m)continue;h(n,m)}(a.sham||m&&m.sham)&&e(n,"sham",!0),f(k,l,n,a)}}},{"../internals/copy-constructor-properties":9,"../internals/create-non-enumerable-property":10,"../internals/global":21,"../internals/is-forced":29,"../internals/object-get-own-property-descriptor":35,"../internals/redefine":42,"../internals/set-global":44}],18:[function(a,b){b.exports=function(a){try{return!!a()}catch(a){return!0}}},{}],19:[function(a,b){var c=a("../internals/a-function");b.exports=function(d,e,f){return(c(d),void 0===e)?d:0===f?function(){return d.call(e)}:1===f?function(b){return d.call(e,b)}:2===f?function(c,a){return d.call(e,c,a)}:3===f?function(f,a,b){return d.call(e,f,a,b)}:function(){return d.apply(e,arguments)}}},{"../internals/a-function":1}],20:[function(a,b){var c=a("../internals/path"),d=a("../internals/global"),e=function(a){return"function"==typeof a?a:void 0};b.exports=function(a,b){return 2>arguments.length?e(c[a])||e(d[a]):c[a]&&c[a][b]||d[a]&&d[a][b]}},{"../internals/global":21,"../internals/path":41}],21:[function(a,b){(function(a){var c=function(a){return a&&a.Math==Math&&a};b.exports=c("object"==typeof globalThis&&globalThis)||c("object"==typeof window&&window)||c("object"==typeof self&&self)||c("object"==typeof a&&a)||Function("return this")()}).call(this,"undefined"==typeof global?"undefined"==typeof self?"undefined"==typeof window?{}:window:self:global)},{}],22:[function(a,b){var c={}.hasOwnProperty;b.exports=function(a,b){return c.call(a,b)}},{}],23:[function(a,b){b.exports={}},{}],24:[function(a,b){var c=a("../internals/descriptors"),d=a("../internals/fails"),e=a("../internals/document-create-element");b.exports=!c&&!d(function(){return 7!=Object.defineProperty(e("div"),"a",{get:function(){return 7}}).a})},{"../internals/descriptors":12,"../internals/document-create-element":13,"../internals/fails":18}],25:[function(a,b){var c=a("../internals/fails"),d=a("../internals/classof-raw"),e="".split;b.exports=c(function(){return!Object("z").propertyIsEnumerable(0)})?function(a){return"String"==d(a)?e.call(a,""):Object(a)}:Object},{"../internals/classof-raw":8,"../internals/fails":18}],26:[function(a,b){var c=a("../internals/shared-store"),d=Function.toString;"function"!=typeof c.inspectSource&&(c.inspectSource=function(a){return d.call(a)}),b.exports=c.inspectSource},{"../internals/shared-store":46}],27:[function(a,b){var c,d,e,f=a("../internals/native-weak-map"),g=a("../internals/global"),h=a("../internals/is-object"),i=a("../internals/create-non-enumerable-property"),j=a("../internals/has"),k=a("../internals/shared-key"),l=a("../internals/hidden-keys"),m=g.WeakMap,n=function(a){return e(a)?d(a):c(a,{})};if(f){var o=new m,p=o.get,q=o.has,r=o.set;c=function(a,b){return r.call(o,a,b),b},d=function(a){return p.call(o,a)||{}},e=function(a){return q.call(o,a)}}else{var s=k("state");l[s]=!0,c=function(a,b){return i(a,s,b),b},d=function(a){return j(a,s)?a[s]:{}},e=function(a){return j(a,s)}}b.exports={set:c,get:d,has:e,enforce:n,getterFor:function(a){return function(b){var c;if(!h(b)||(c=d(b)).type!==a)throw TypeError("Incompatible receiver, "+a+" required");return c}}}},{"../internals/create-non-enumerable-property":10,"../internals/global":21,"../internals/has":22,"../internals/hidden-keys":23,"../internals/is-object":30,"../internals/native-weak-map":33,"../internals/shared-key":45}],28:[function(a,b){var c=a("../internals/classof-raw");b.exports=Array.isArray||function(a){return"Array"==c(a)}},{"../internals/classof-raw":8}],29:[function(a,b){var c=a("../internals/fails"),d=/#|\.prototype\./,e=function(a,b){var d=g[f(a)];return!(d!=i)||d!=h&&("function"==typeof b?c(b):!!b)},f=e.normalize=function(a){return(a+"").replace(d,".").toLowerCase()},g=e.data={},h=e.NATIVE="N",i=e.POLYFILL="P";b.exports=e},{"../internals/fails":18}],30:[function(a,b){b.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},{}],31:[function(a,b){b.exports=!1},{}],32:[function(a,b){var c=a("../internals/fails");b.exports=!!Object.getOwnPropertySymbols&&!c(function(){return!(Symbol()+"")})},{"../internals/fails":18}],33:[function(a,b){var c=a("../internals/global"),d=a("../internals/inspect-source"),e=c.WeakMap;b.exports="function"==typeof e&&/native code/.test(d(e))},{"../internals/global":21,"../internals/inspect-source":26}],34:[function(a,b,c){var d=a("../internals/descriptors"),e=a("../internals/ie8-dom-define"),f=a("../internals/an-object"),g=a("../internals/to-primitive"),h=Object.defineProperty;c.f=d?h:function(a,b,c){if(f(a),b=g(b,!0),f(c),e)try{return h(a,b,c)}catch(a){}if("get"in c||"set"in c)throw TypeError("Accessors not supported");return"value"in c&&(a[b]=c.value),a}},{"../internals/an-object":2,"../internals/descriptors":12,"../internals/ie8-dom-define":24,"../internals/to-primitive":53}],35:[function(a,b,c){var d=a("../internals/descriptors"),e=a("../internals/object-property-is-enumerable"),f=a("../internals/create-property-descriptor"),g=a("../internals/to-indexed-object"),h=a("../internals/to-primitive"),i=a("../internals/has"),j=a("../internals/ie8-dom-define"),k=Object.getOwnPropertyDescriptor;c.f=d?k:function(a,b){if(a=g(a),b=h(b,!0),j)try{return k(a,b)}catch(a){}return i(a,b)?f(!e.f.call(a,b),a[b]):void 0}},{"../internals/create-property-descriptor":11,"../internals/descriptors":12,"../internals/has":22,"../internals/ie8-dom-define":24,"../internals/object-property-is-enumerable":39,"../internals/to-indexed-object":49,"../internals/to-primitive":53}],36:[function(a,b,c){var d=a("../internals/object-keys-internal"),e=a("../internals/enum-bug-keys"),f=e.concat("length","prototype");c.f=Object.getOwnPropertyNames||function(a){return d(a,f)}},{"../internals/enum-bug-keys":16,"../internals/object-keys-internal":38}],37:[function(a,b,c){c.f=Object.getOwnPropertySymbols},{}],38:[function(a,b){var c=a("../internals/has"),d=a("../internals/to-indexed-object"),e=a("../internals/array-includes").indexOf,f=a("../internals/hidden-keys");b.exports=function(a,b){var g,h=d(a),j=0,k=[];for(g in h)!c(f,g)&&c(h,g)&&k.push(g);for(;b.length>j;)c(h,g=b[j++])&&(~e(k,g)||k.push(g));return k}},{"../internals/array-includes":3,"../internals/has":22,"../internals/hidden-keys":23,"../internals/to-indexed-object":49}],39:[function(a,b,c){'use strict';var d={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,f=e&&!d.call({1:2},1);c.f=f?function(a){var b=e(this,a);return!!b&&b.enumerable}:d},{}],40:[function(a,b){var c=a("../internals/get-built-in"),d=a("../internals/object-get-own-property-names"),e=a("../internals/object-get-own-property-symbols"),f=a("../internals/an-object");b.exports=c("Reflect","ownKeys")||function(a){var b=d.f(f(a)),c=e.f;return c?b.concat(c(a)):b}},{"../internals/an-object":2,"../internals/get-built-in":20,"../internals/object-get-own-property-names":36,"../internals/object-get-own-property-symbols":37}],41:[function(a,b){var c=a("../internals/global");b.exports=c},{"../internals/global":21}],42:[function(a,b){var c=a("../internals/global"),d=a("../internals/create-non-enumerable-property"),e=a("../internals/has"),f=a("../internals/set-global"),g=a("../internals/inspect-source"),h=a("../internals/internal-state"),i=h.get,j=h.enforce,k=(String+"").split("String");(b.exports=function(a,b,g,h){var i=!!h&&!!h.unsafe,l=!!h&&!!h.enumerable,m=!!h&&!!h.noTargetGet;return("function"==typeof g&&("string"==typeof b&&!e(g,"name")&&d(g,"name",b),j(g).source=k.join("string"==typeof b?b:"")),a===c)?void(l?a[b]=g:f(b,g)):void(i?!m&&a[b]&&(l=!0):delete a[b],l?a[b]=g:d(a,b,g))})(Function.prototype,"toString",function(){return"function"==typeof this&&i(this).source||g(this)})},{"../internals/create-non-enumerable-property":10,"../internals/global":21,"../internals/has":22,"../internals/inspect-source":26,"../internals/internal-state":27,"../internals/set-global":44}],43:[function(a,b){b.exports=function(a){if(a==null)throw TypeError("Can't call method on "+a);return a}},{}],44:[function(a,b){var c=a("../internals/global"),d=a("../internals/create-non-enumerable-property");b.exports=function(a,b){try{d(c,a,b)}catch(d){c[a]=b}return b}},{"../internals/create-non-enumerable-property":10,"../internals/global":21}],45:[function(a,b){var c=a("../internals/shared"),d=a("../internals/uid"),e=c("keys");b.exports=function(a){return e[a]||(e[a]=d(a))}},{"../internals/shared":47,"../internals/uid":54}],46:[function(a,b){var c=a("../internals/global"),d=a("../internals/set-global"),e="__core-js_shared__",f=c[e]||d(e,{});b.exports=f},{"../internals/global":21,"../internals/set-global":44}],47:[function(a,b){var c=a("../internals/is-pure"),d=a("../internals/shared-store");(b.exports=function(a,b){return d[a]||(d[a]=b===void 0?{}:b)})("versions",[]).push({version:"3.6.4",mode:c?"pure":"global",copyright:"\xA9 2020 Denis Pushkarev (zloirock.ru)"})},{"../internals/is-pure":31,"../internals/shared-store":46}],48:[function(b,c){var d=b("../internals/to-integer"),e=Math.max;c.exports=function(b,c){var f=d(b);return 0>f?e(f+c,0):a(f,c)}},{"../internals/to-integer":50}],49:[function(a,b){var c=a("../internals/indexed-object"),d=a("../internals/require-object-coercible");b.exports=function(a){return c(d(a))}},{"../internals/indexed-object":25,"../internals/require-object-coercible":43}],50:[function(a,b){var c=Math.ceil,d=Math.floor;b.exports=function(a){return isNaN(a=+a)?0:(0<a?d:c)(a)}},{}],51:[function(b,c){var d=b("../internals/to-integer");c.exports=function(b){return 0<b?a(d(b),9007199254740991):0}},{"../internals/to-integer":50}],52:[function(a,b){var c=a("../internals/require-object-coercible");b.exports=function(a){return Object(c(a))}},{"../internals/require-object-coercible":43}],53:[function(a,b){var c=a("../internals/is-object");b.exports=function(a,b){if(!c(a))return a;var d,e;if(b&&"function"==typeof(d=a.toString)&&!c(e=d.call(a)))return e;if("function"==typeof(d=a.valueOf)&&!c(e=d.call(a)))return e;if(!b&&"function"==typeof(d=a.toString)&&!c(e=d.call(a)))return e;throw TypeError("Can't convert object to primitive value")}},{"../internals/is-object":30}],54:[function(a,b){var c=0,d=Math.random();b.exports=function(a){return"Symbol("+((a===void 0?"":a)+"")+")_"+(++c+d).toString(36)}},{}],55:[function(a,b){var c=a("../internals/native-symbol");b.exports=c&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},{"../internals/native-symbol":32}],56:[function(a,b){var c=a("../internals/global"),d=a("../internals/shared"),e=a("../internals/has"),f=a("../internals/uid"),g=a("../internals/native-symbol"),h=a("../internals/use-symbol-as-uid"),i=d("wks"),j=c.Symbol,k=h?j:j&&j.withoutSetter||f;b.exports=function(a){return e(i,a)||(g&&e(j,a)?i[a]=j[a]:i[a]=k("Symbol."+a)),i[a]}},{"../internals/global":21,"../internals/has":22,"../internals/native-symbol":32,"../internals/shared":47,"../internals/uid":54,"../internals/use-symbol-as-uid":55}],57:[function(a){'use strict';var b=a("../internals/export"),c=a("../internals/array-iteration").filter,d=a("../internals/array-method-has-species-support"),e=a("../internals/array-method-uses-to-length"),f=d("filter"),g=e("filter");b({target:"Array",proto:!0,forced:!f||!g},{filter:function(a){return c(this,a,1<arguments.length?arguments[1]:void 0)}})},{"../internals/array-iteration":4,"../internals/array-method-has-species-support":5,"../internals/array-method-uses-to-length":6,"../internals/export":17}],58:[function(a,b){function c(d){const e=d||{},a=Object.keys(e);this._events=0<a.length?a.reduce(function(b,a){return b[a]=Array.isArray(e[a])?e[a]:[e[a]],b},{}):{}}c.prototype._eventsWillBeFiredOnce={},c.prototype.on=function(f,a,b=null){if("function"!=typeof a||"string"!=typeof f)return!1;this._events.hasOwnProperty(f)||(this._events[f]=[]),this._eventsWillBeFiredOnce.hasOwnProperty(f)||(this._eventsWillBeFiredOnce[f]=[]);const c="[object Object]"===Object.prototype.toString.call(b)?b:{once:!1},d=this._events[f].push(a);return c.once&&!0===c.once&&this._eventsWillBeFiredOnce[f].push(d-1),!0},c.prototype.once=function(c,a){return this.on(c,a,{once:!0})},c.prototype.emit=function(e,f=[]){if(!this._events.hasOwnProperty(e)){if("error"==e){const b=f instanceof Error?f:new Error("Unhandled error.");throw b}return!1}const a=Array.isArray(f)?f:[f];for(let b=0;b<this._events[e].length;b++)this._events[e][b].apply(this,a);if(this._eventsWillBeFiredOnce.hasOwnProperty(e))for(var b=0;b<this._eventsWillBeFiredOnce[e].length;b++)this.removeListener(e,this._eventsWillBeFiredOnce[e][b]);return!0},c.prototype.removeListener=function(c,a){this._events[c].splice(a,1)},c.prototype.removeListeners=function(b){return"string"==typeof b&&!!this._events.hasOwnProperty(b)&&(this._events[b]=[],this._eventsWillBeFiredOnce.hasOwnProperty(b)&&(this._eventsWillBeFiredOnce[b]=[]),!0)},c.prototype.flushEventEmitter=function(){this._events={},this._eventsWillBeFiredOnce={}},b.exports=c},{}],59:[function(a,b){"use strict";function c(){function q(){var b=i[m];b!=g.value&&(g.value=b,f.emit("update"))}function a(){"visible"!=g.value&&(g.value="visible",f.emit("update"))}function b(){"hidden"!=g.value&&(g.value="hidden",f.emit("update"))}function c(){"undefined"==typeof h||"undefined"==typeof i||!0===g.started||("modern"==n?i.addEventListener(r+"visibilitychange",q,0):"focus-blur"==n?(h.addEventListener("focus",a,!0),h.addEventListener("blur",b,!0)):"focus-blur-ie"==n&&(i.attachEvent("onfocusin",a),i.attachEvent("onfocusout",b)),g.started=!0)}function d(){"undefined"==typeof h||"undefined"==typeof i||!1===g.started||("modern"==n?i.removeEventListener(r+"visibilitychange",q,1):"focus-blur"==n?(h.removeEventListener("focus",a,!0),h.removeEventListener("blur",b,!0)):"focus-blur-ie"==n&&(i.detachEvent("onfocusin",a),i.detachEvent("onfocusout",b)),g.started=!1)}var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},f=new p({}),g={error:null,started:!1,value:"visible"},h=e.window||("undefined"==typeof window?void 0:window),i=e.document||("undefined"==typeof document?void 0:document);("undefined"==typeof h||"undefined"==typeof i)&&(g.error="INVALID_GLOBALS");var j=[];"undefined"!=typeof i&&(j=["webkit","ms","o","moz","khtml"].filter(function(b){return b+"Hidden"in i}));var r=j&&0<j.length?j[0]:"",l=r+(0<r.length?"H":"h")+"idden",m=r+(0<r.length?"V":"v")+"isibilityState",n=null;return"undefined"!=typeof i&&(n=l in i?"modern":i.addEventListener?"focus-blur":"focus-blur-ie"),{emitter:f,start:c,pause:d,getError:function(){return g.error},getState:function(){return g.value}}}a("core-js/modules/es.array.filter");var p=a("event-emitter-object");b.exports=c},{"core-js/modules/es.array.filter":57,"event-emitter-object":58}]},{},[59])(59)});