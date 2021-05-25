!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("event-emitter-object")):"function"==typeof define&&define.amd?define(["event-emitter-object"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).VisibilityStateListener=e(t.EventEmitterObject)}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=e(t),n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||function(){return this}()||Function("return this")(),u={},f=function(t){try{return!!t()}catch(t){return!0}},c=!f((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={},l={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,p=s&&!l.call({1:2},1);a.f=p?function(t){var e=s(this,t);return!!e&&e.enumerable}:l;var d=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},v={}.toString,y=function(t){return v.call(t).slice(8,-1)},h=y,b="".split,g=f((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==h(t)?b.call(t,""):Object(t)}:Object,m=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},w=g,S=m,E=function(t){return w(S(t))},O=function(t){return"object"==typeof t?null!==t:"function"==typeof t},j=O,x=function(t,e){if(!j(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!j(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!j(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!j(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},P=m,T=function(t){return Object(P(t))},L=T,A={}.hasOwnProperty,M=function(t,e){return A.call(L(t),e)},I=O,k=i.document,_=I(k)&&I(k.createElement),N=function(t){return _?k.createElement(t):{}},z=!c&&!f((function(){return 7!=Object.defineProperty(N("div"),"a",{get:function(){return 7}}).a})),F=c,C=a,D=d,V=E,G=x,q=M,B=z,H=Object.getOwnPropertyDescriptor;u.f=F?H:function(t,e){if(t=V(t),e=G(e,!0),B)try{return H(t,e)}catch(t){}if(q(t,e))return D(!C.f.call(t,e),t[e])};var W={},K=O,R=function(t){if(!K(t))throw TypeError(String(t)+" is not an object");return t},Y=c,J=z,Q=R,U=x,X=Object.defineProperty;W.f=Y?X:function(t,e,r){if(Q(t),e=U(e,!0),Q(r),J)try{return X(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var Z=W,$=d,tt=c?function(t,e,r){return Z.f(t,e,$(1,r))}:function(t,e,r){return t[e]=r,t},et={exports:{}},rt=i,nt=tt,ot=function(t,e){try{nt(rt,t,e)}catch(r){rt[t]=e}return e},it=ot,ut="__core-js_shared__",ft=i[ut]||it(ut,{}),ct=ft,at=Function.toString;"function"!=typeof ct.inspectSource&&(ct.inspectSource=function(t){return at.call(t)});var lt=ct.inspectSource,st=lt,pt=i.WeakMap,dt="function"==typeof pt&&/native code/.test(st(pt)),vt={exports:{}},yt=ft;(vt.exports=function(t,e){return yt[t]||(yt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.12.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var ht,bt,gt,mt=0,wt=Math.random(),St=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++mt+wt).toString(36)},Et=vt.exports,Ot=St,jt=Et("keys"),xt={},Pt=dt,Tt=O,Lt=tt,At=M,Mt=ft,It=function(t){return jt[t]||(jt[t]=Ot(t))},kt=xt,_t="Object already initialized",Nt=i.WeakMap;if(Pt||Mt.state){var zt=Mt.state||(Mt.state=new Nt),Ft=zt.get,Ct=zt.has,Dt=zt.set;ht=function(t,e){if(Ct.call(zt,t))throw new TypeError(_t);return e.facade=t,Dt.call(zt,t,e),e},bt=function(t){return Ft.call(zt,t)||{}},gt=function(t){return Ct.call(zt,t)}}else{var Vt=It("state");kt[Vt]=!0,ht=function(t,e){if(At(t,Vt))throw new TypeError(_t);return e.facade=t,Lt(t,Vt,e),e},bt=function(t){return At(t,Vt)?t[Vt]:{}},gt=function(t){return At(t,Vt)}}var Gt={set:ht,get:bt,has:gt,enforce:function(t){return gt(t)?bt(t):ht(t,{})},getterFor:function(t){return function(e){var r;if(!Tt(e)||(r=bt(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},qt=i,Bt=tt,Ht=M,Wt=ot,Kt=lt,Rt=Gt.get,Yt=Gt.enforce,Jt=String(String).split("String");(et.exports=function(t,e,r,n){var o,i=!!n&&!!n.unsafe,u=!!n&&!!n.enumerable,f=!!n&&!!n.noTargetGet;"function"==typeof r&&("string"!=typeof e||Ht(r,"name")||Bt(r,"name",e),(o=Yt(r)).source||(o.source=Jt.join("string"==typeof e?e:""))),t!==qt?(i?!f&&t[e]&&(u=!0):delete t[e],u?t[e]=r:Bt(t,e,r)):u?t[e]=r:Wt(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&Rt(this).source||Kt(this)}));var Qt=i,Ut=i,Xt=function(t){return"function"==typeof t?t:void 0},Zt=function(t,e){return arguments.length<2?Xt(Qt[t])||Xt(Ut[t]):Qt[t]&&Qt[t][e]||Ut[t]&&Ut[t][e]},$t={},te=Math.ceil,ee=Math.floor,re=function(t){return isNaN(t=+t)?0:(t>0?ee:te)(t)},ne=re,oe=Math.min,ie=function(t){return t>0?oe(ne(t),9007199254740991):0},ue=re,fe=Math.max,ce=Math.min,ae=E,le=ie,se=function(t,e){var r=ue(t);return r<0?fe(r+e,0):ce(r,e)},pe=function(t){return function(e,r,n){var o,i=ae(e),u=le(i.length),f=se(n,u);if(t&&r!=r){for(;u>f;)if((o=i[f++])!=o)return!0}else for(;u>f;f++)if((t||f in i)&&i[f]===r)return t||f||0;return!t&&-1}},de={includes:pe(!0),indexOf:pe(!1)},ve=M,ye=E,he=de.indexOf,be=xt,ge=function(t,e){var r,n=ye(t),o=0,i=[];for(r in n)!ve(be,r)&&ve(n,r)&&i.push(r);for(;e.length>o;)ve(n,r=e[o++])&&(~he(i,r)||i.push(r));return i},me=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");$t.f=Object.getOwnPropertyNames||function(t){return ge(t,me)};var we={};we.f=Object.getOwnPropertySymbols;var Se,Ee,Oe=$t,je=we,xe=R,Pe=Zt("Reflect","ownKeys")||function(t){var e=Oe.f(xe(t)),r=je.f;return r?e.concat(r(t)):e},Te=M,Le=Pe,Ae=u,Me=W,Ie=f,ke=/#|\.prototype\./,_e=function(t,e){var r=ze[Ne(t)];return r==Ce||r!=Fe&&("function"==typeof e?Ie(e):!!e)},Ne=_e.normalize=function(t){return String(t).replace(ke,".").toLowerCase()},ze=_e.data={},Fe=_e.NATIVE="N",Ce=_e.POLYFILL="P",De=_e,Ve=i,Ge=u.f,qe=tt,Be=et.exports,He=ot,We=function(t,e){for(var r=Le(e),n=Me.f,o=Ae.f,i=0;i<r.length;i++){var u=r[i];Te(t,u)||n(t,u,o(e,u))}},Ke=De,Re=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Ye=y,Je=Array.isArray||function(t){return"Array"==Ye(t)},Qe=Zt("navigator","userAgent")||"",Ue=i.process,Xe=Ue&&Ue.versions,Ze=Xe&&Xe.v8;Ze?Ee=(Se=Ze.split("."))[0]<4?1:Se[0]+Se[1]:Qe&&(!(Se=Qe.match(/Edge\/(\d+)/))||Se[1]>=74)&&(Se=Qe.match(/Chrome\/(\d+)/))&&(Ee=Se[1]);var $e=Ee&&+Ee,tr=$e,er=f,rr=!!Object.getOwnPropertySymbols&&!er((function(){return!String(Symbol())||!Symbol.sham&&tr&&tr<41})),nr=rr&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,or=i,ir=vt.exports,ur=M,fr=St,cr=rr,ar=nr,lr=ir("wks"),sr=or.Symbol,pr=ar?sr:sr&&sr.withoutSetter||fr,dr=function(t){return ur(lr,t)&&(cr||"string"==typeof lr[t])||(cr&&ur(sr,t)?lr[t]=sr[t]:lr[t]=pr("Symbol."+t)),lr[t]},vr=O,yr=Je,hr=dr("species"),br=function(t,e,r){if(Re(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}},gr=g,mr=T,wr=ie,Sr=function(t,e){var r;return yr(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!yr(r.prototype)?vr(r)&&null===(r=r[hr])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)},Er=[].push,Or=function(t){var e=1==t,r=2==t,n=3==t,o=4==t,i=6==t,u=7==t,f=5==t||i;return function(c,a,l,s){for(var p,d,v=mr(c),y=gr(v),h=br(a,l,3),b=wr(y.length),g=0,m=s||Sr,w=e?m(c,b):r||u?m(c,0):void 0;b>g;g++)if((f||g in y)&&(d=h(p=y[g],g,v),t))if(e)w[g]=d;else if(d)switch(t){case 3:return!0;case 5:return p;case 6:return g;case 2:Er.call(w,p)}else switch(t){case 4:return!1;case 7:Er.call(w,p)}return i?-1:n||o?o:w}},jr={forEach:Or(0),map:Or(1),filter:Or(2),some:Or(3),every:Or(4),find:Or(5),findIndex:Or(6),filterOut:Or(7)},xr=f,Pr=$e,Tr=dr("species"),Lr=jr.filter;(function(t,e){var r,n,o,i,u,f=t.target,c=t.global,a=t.stat;if(r=c?Ve:a?Ve[f]||He(f,{}):(Ve[f]||{}).prototype)for(n in e){if(i=e[n],o=t.noTargetGet?(u=Ge(r,n))&&u.value:r[n],!Ke(c?n:f+(a?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;We(i,o)}(t.sham||o&&o.sham)&&qe(i,"sham",!0),Be(r,n,i,t)}})({target:"Array",proto:!0,forced:!function(t){return Pr>=51||!xr((function(){var e=[];return(e.constructor={})[Tr]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}("filter")},{filter:function(t){return Lr(this,t,arguments.length>1?arguments[1]:void 0)}});var Ar=r.default.create;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};function e(t){var e=["webkit","ms","o","moz","khtml"].filter((function(e){return e+"Hidden"in t}));return e&&e.length>0?e[0]:""}var r=Ar(),n=t.window||("undefined"==typeof window?void 0:window),o=t.document||("undefined"==typeof document?void 0:document),i={error:null,started:!1,value:"visible",prefix:"",visibilityProp:"",hiddenProp:""};void 0!==n&&void 0!==o||(i.error="INVALID_GLOBALS"),i.error||(i.prefix=e(o),i.hiddenProp=i.prefix+(i.prefix.length>0?"H":"h")+"idden",i.visibilityProp=i.prefix+(i.prefix.length>0?"V":"v")+"isibilityState");var u=o?i.hiddenProp in o?"modern":o.addEventListener?"focus-blur":"focus-blur-ie":"";function f(){var t=o[i.visibilityProp];t!=i.value&&(i.value=t,r.emit("update",[t]))}function c(){var t="visible";t!=i.value&&(i.value=t,r.emit("update",[t]))}function a(){var t="hidden";t!=i.value&&(i.value=t,r.emit("update",[t]))}function l(){return!i.error&&(!0===i.started||("modern"==u?o.addEventListener(i.prefix+"visibilitychange",f,0):"focus-blur"==u?(n.addEventListener("focus",c,!0),n.addEventListener("blur",a,!0)):"focus-blur-ie"==u&&(o.attachEvent("onfocusin",c),o.attachEvent("onfocusout",a)),i.started=!0),!0)}function s(){return!i.error&&(!1===i.started||("modern"==u?o.removeEventListener(i.prefix+"visibilitychange",f,1):"focus-blur"==u?(n.removeEventListener("focus",c,!0),n.removeEventListener("blur",a,!0)):"focus-blur-ie"==u&&(o.detachEvent("onfocusin",c),o.detachEvent("onfocusout",a)),i.started=!1),!0)}return{on:r.on,start:l,pause:s,hasError:function(){return"string"==typeof i.error&&i.error.length>0},getError:function(){return i.error},getState:function(){return i.value}}}()}));
