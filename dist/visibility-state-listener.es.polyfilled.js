import t from"event-emitter-object";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e){return t(e={exports:{}},e.exports),e.exports}var r=function(t){return t&&t.Math==Math&&t},o=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||Function("return this")(),i=function(t){try{return!!t()}catch(t){return!0}},u=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,a={f:f&&!c.call({1:2},1)?function(t){var e=f(this,t);return!!e&&e.enumerable}:c},l=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},s={}.toString,d=function(t){return s.call(t).slice(8,-1)},v="".split,p=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==d(t)?v.call(t,""):Object(t)}:Object,y=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},h=function(t){return p(y(t))},g=function(t){return"object"==typeof t?null!==t:"function"==typeof t},b=function(t,e){if(!g(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!g(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!g(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!g(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,w=function(t,e){return m.call(t,e)},S=o.document,O=g(S)&&g(S.createElement),E=!u&&!i((function(){return 7!=Object.defineProperty((t="div",O?S.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),j=Object.getOwnPropertyDescriptor,L={f:u?j:function(t,e){if(t=h(t),e=b(e,!0),E)try{return j(t,e)}catch(t){}if(w(t,e))return l(!a.f.call(t,e),t[e])}},P=function(t){if(!g(t))throw TypeError(String(t)+" is not an object");return t},A=Object.defineProperty,T={f:u?A:function(t,e,n){if(P(t),e=b(e,!0),P(n),E)try{return A(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},_=u?function(t,e,n){return T.f(t,e,l(1,n))}:function(t,e,n){return t[e]=n,t},x=function(t,e){try{_(o,t,e)}catch(n){o[t]=e}return e},M=o["__core-js_shared__"]||x("__core-js_shared__",{}),I=Function.toString;"function"!=typeof M.inspectSource&&(M.inspectSource=function(t){return I.call(t)});var k,C,N,F,z=M.inspectSource,D=o.WeakMap,G="function"==typeof D&&/native code/.test(z(D)),R=n((function(t){(t.exports=function(t,e){return M[t]||(M[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),V=0,B=Math.random(),H=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++V+B).toString(36)},W=R("keys"),q={},K=o.WeakMap;if(G){var Y=new K,J=Y.get,Q=Y.has,U=Y.set;k=function(t,e){return U.call(Y,t,e),e},C=function(t){return J.call(Y,t)||{}},N=function(t){return Q.call(Y,t)}}else{var X=W[F="state"]||(W[F]=H(F));q[X]=!0,k=function(t,e){return _(t,X,e),e},C=function(t){return w(t,X)?t[X]:{}},N=function(t){return w(t,X)}}var Z,$,tt={set:k,get:C,has:N,enforce:function(t){return N(t)?C(t):k(t,{})},getterFor:function(t){return function(e){var n;if(!g(e)||(n=C(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},et=n((function(t){var e=tt.get,n=tt.enforce,r=String(String).split("String");(t.exports=function(t,e,i,u){var c=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,a=!!u&&!!u.noTargetGet;"function"==typeof i&&("string"!=typeof e||w(i,"name")||_(i,"name",e),n(i).source=r.join("string"==typeof e?e:"")),t!==o?(c?!a&&t[e]&&(f=!0):delete t[e],f?t[e]=i:_(t,e,i)):f?t[e]=i:x(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||z(this)}))})),nt=o,rt=function(t){return"function"==typeof t?t:void 0},ot=function(t,e){return arguments.length<2?rt(nt[t])||rt(o[t]):nt[t]&&nt[t][e]||o[t]&&o[t][e]},it=Math.ceil,ut=Math.floor,ct=function(t){return isNaN(t=+t)?0:(t>0?ut:it)(t)},ft=Math.min,at=function(t){return t>0?ft(ct(t),9007199254740991):0},lt=Math.max,st=Math.min,dt=function(t){return function(e,n,r){var o,i=h(e),u=at(i.length),c=function(t,e){var n=ct(t);return n<0?lt(n+e,0):st(n,e)}(r,u);if(t&&n!=n){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},vt={includes:dt(!0),indexOf:dt(!1)}.indexOf,pt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),yt={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=h(t),o=0,i=[];for(n in r)!w(q,n)&&w(r,n)&&i.push(n);for(;e.length>o;)w(r,n=e[o++])&&(~vt(i,n)||i.push(n));return i}(t,pt)}},ht={f:Object.getOwnPropertySymbols},gt=ot("Reflect","ownKeys")||function(t){var e=yt.f(P(t)),n=ht.f;return n?e.concat(n(t)):e},bt=function(t,e){for(var n=gt(e),r=T.f,o=L.f,i=0;i<n.length;i++){var u=n[i];w(t,u)||r(t,u,o(e,u))}},mt=/#|\.prototype\./,wt=function(t,e){var n=Ot[St(t)];return n==jt||n!=Et&&("function"==typeof e?i(e):!!e)},St=wt.normalize=function(t){return String(t).replace(mt,".").toLowerCase()},Ot=wt.data={},Et=wt.NATIVE="N",jt=wt.POLYFILL="P",Lt=wt,Pt=L.f,At=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},Tt=Array.isArray||function(t){return"Array"==d(t)},_t=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),xt=_t&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Mt=R("wks"),It=o.Symbol,kt=xt?It:It&&It.withoutSetter||H,Ct=function(t){return w(Mt,t)||(_t&&w(It,t)?Mt[t]=It[t]:Mt[t]=kt("Symbol."+t)),Mt[t]},Nt=Ct("species"),Ft=function(t,e){var n;return Tt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Tt(n.prototype)?g(n)&&null===(n=n[Nt])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},zt=[].push,Dt=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,u=5==t||i;return function(c,f,a,l){for(var s,d,v=Object(y(c)),h=p(v),g=At(f,a,3),b=at(h.length),m=0,w=l||Ft,S=e?w(c,b):n?w(c,0):void 0;b>m;m++)if((u||m in h)&&(d=g(s=h[m],m,v),t))if(e)S[m]=d;else if(d)switch(t){case 3:return!0;case 5:return s;case 6:return m;case 2:zt.call(S,s)}else if(o)return!1;return i?-1:r||o?o:S}},Gt={forEach:Dt(0),map:Dt(1),filter:Dt(2),some:Dt(3),every:Dt(4),find:Dt(5),findIndex:Dt(6)},Rt=ot("navigator","userAgent")||"",Vt=o.process,Bt=Vt&&Vt.versions,Ht=Bt&&Bt.v8;Ht?$=(Z=Ht.split("."))[0]+Z[1]:Rt&&(!(Z=Rt.match(/Edge\/(\d+)/))||Z[1]>=74)&&(Z=Rt.match(/Chrome\/(\d+)/))&&($=Z[1]);var Wt,qt=$&&+$,Kt=Ct("species"),Yt=Object.defineProperty,Jt={},Qt=function(t){throw t},Ut=Gt.filter,Xt=(Wt="filter",qt>=51||!i((function(){var t=[];return(t.constructor={})[Kt]=function(){return{foo:1}},1!==t[Wt](Boolean).foo}))),Zt=function(t,e){if(w(Jt,t))return Jt[t];e||(e={});var n=[][t],r=!!w(e,"ACCESSORS")&&e.ACCESSORS,o=w(e,0)?e[0]:Qt,c=w(e,1)?e[1]:void 0;return Jt[t]=!!n&&!i((function(){if(r&&!u)return!0;var t={length:-1};r?Yt(t,1,{enumerable:!0,get:Qt}):t[1]=1,n.call(t,o,c)}))}("filter");!function(t,e){var n,r,i,u,c,f=t.target,a=t.global,l=t.stat;if(n=a?o:l?o[f]||x(f,{}):(o[f]||{}).prototype)for(r in e){if(u=e[r],i=t.noTargetGet?(c=Pt(n,r))&&c.value:n[r],!Lt(a?r:f+(l?".":"#")+r,t.forced)&&void 0!==i){if(typeof u==typeof i)continue;bt(u,i)}(t.sham||i&&i.sham)&&_(u,"sham",!0),et(n,r,u,t)}}({target:"Array",proto:!0,forced:!Xt||!Zt},{filter:function(t){return Ut(this,t,arguments.length>1?arguments[1]:void 0)}});var $t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=new t({}),r=["webkit","ms","o","moz","khtml"],o={error:null,started:!1,value:"visible"},i=e.window||("undefined"==typeof window?void 0:window),u=e.document||("undefined"==typeof document?void 0:document);void 0!==i&&void 0!==u||(o.error="INVALID_GLOBALS");var c=[];void 0!==u&&(c=r.filter((function(t){return t+"Hidden"in u})));var f=c&&c.length>0?c[0]:"",a=f+(f.length>0?"H":"h")+"idden",l=f+(f.length>0?"V":"v")+"isibilityState",s=null;function d(){var t=u[l];t!=o.value&&(o.value=t,n.emit("update",t))}function v(){"visible"!=o.value&&(o.value="visible",n.emit("update","visible"))}function p(){"hidden"!=o.value&&(o.value="hidden",n.emit("update","hidden"))}function y(){void 0!==i&&void 0!==u&&!0!==o.started&&("modern"==s?u.addEventListener(f+"visibilitychange",d,0):"focus-blur"==s?(i.addEventListener("focus",v,!0),i.addEventListener("blur",p,!0)):"focus-blur-ie"==s&&(u.attachEvent("onfocusin",v),u.attachEvent("onfocusout",p)),o.started=!0)}function h(){void 0!==i&&void 0!==u&&!1!==o.started&&("modern"==s?u.removeEventListener(f+"visibilitychange",d,1):"focus-blur"==s?(i.removeEventListener("focus",v,!0),i.removeEventListener("blur",p,!0)):"focus-blur-ie"==s&&(u.detachEvent("onfocusin",v),u.detachEvent("onfocusout",p)),o.started=!1)}return void 0!==u&&(s=a in u?"modern":u.addEventListener?"focus-blur":"focus-blur-ie"),{emitter:n,start:y,pause:h,getError:function(){return o.error},getState:function(){return o.value}}};export default $t;
