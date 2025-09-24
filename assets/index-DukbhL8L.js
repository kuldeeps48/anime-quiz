(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))o(b);new MutationObserver(b=>{for(const p of b)if(p.type==="childList")for(const E of p.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&o(E)}).observe(document,{childList:!0,subtree:!0});function f(b){const p={};return b.integrity&&(p.integrity=b.integrity),b.referrerPolicy&&(p.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?p.credentials="include":b.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(b){if(b.ep)return;b.ep=!0;const p=f(b);fetch(b.href,p)}})();var Bf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jf(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var vo={exports:{}},_n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf;function b1(){if(Sf)return _n;Sf=1;var c=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function f(o,b,p){var E=null;if(p!==void 0&&(E=""+p),b.key!==void 0&&(E=""+b.key),"key"in b){p={};for(var z in b)z!=="key"&&(p[z]=b[z])}else p=b;return b=p.ref,{$$typeof:c,type:o,key:E,ref:b!==void 0?b:null,props:p}}return _n.Fragment=i,_n.jsx=f,_n.jsxs=f,_n}var qf;function m1(){return qf||(qf=1,vo.exports=b1()),vo.exports}var Du=m1(),Do={exports:{}},W={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of;function g1(){if(Of)return W;Of=1;var c=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),E=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),F=Symbol.iterator;function V(h){return h===null||typeof h!="object"?null:(h=F&&h[F]||h["@@iterator"],typeof h=="function"?h:null)}var fu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,k={};function K(h,C,R){this.props=h,this.context=C,this.refs=k,this.updater=R||fu}K.prototype.isReactComponent={},K.prototype.setState=function(h,C){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,C,"setState")},K.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function Au(){}Au.prototype=K.prototype;function du(h,C,R){this.props=h,this.context=C,this.refs=k,this.updater=R||fu}var nu=du.prototype=new Au;nu.constructor=du,j(nu,K.prototype),nu.isPureReactComponent=!0;var Su=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},Cu=Object.prototype.hasOwnProperty;function gu(h,C,R,M,H,uu){return R=uu.ref,{$$typeof:c,type:h,key:C,ref:R!==void 0?R:null,props:uu}}function Tu(h,C){return gu(h.type,C,void 0,void 0,void 0,h.props)}function yu(h){return typeof h=="object"&&h!==null&&h.$$typeof===c}function Fa(h){var C={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(R){return C[R]})}var Ca=/\/+/g;function Fu(h,C){return typeof h=="object"&&h!==null&&h.key!=null?Fa(""+h.key):C.toString(36)}function Hu(){}function Ba(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(Hu,Hu):(h.status="pending",h.then(function(C){h.status==="pending"&&(h.status="fulfilled",h.value=C)},function(C){h.status==="pending"&&(h.status="rejected",h.reason=C)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function wu(h,C,R,M,H){var uu=typeof h;(uu==="undefined"||uu==="boolean")&&(h=null);var X=!1;if(h===null)X=!0;else switch(uu){case"bigint":case"string":case"number":X=!0;break;case"object":switch(h.$$typeof){case c:case i:X=!0;break;case w:return X=h._init,wu(X(h._payload),C,R,M,H)}}if(X)return H=H(h),X=M===""?"."+Fu(h,0):M,Su(H)?(R="",X!=null&&(R=X.replace(Ca,"$&/")+"/"),wu(H,C,R,"",function(pa){return pa})):H!=null&&(yu(H)&&(H=Tu(H,R+(H.key==null||h&&h.key===H.key?"":(""+H.key).replace(Ca,"$&/")+"/")+X)),C.push(H)),1;X=0;var iu=M===""?".":M+":";if(Su(h))for(var ou=0;ou<h.length;ou++)M=h[ou],uu=iu+Fu(M,ou),X+=wu(M,C,R,uu,H);else if(ou=V(h),typeof ou=="function")for(h=ou.call(h),ou=0;!(M=h.next()).done;)M=M.value,uu=iu+Fu(M,ou++),X+=wu(M,C,R,uu,H);else if(uu==="object"){if(typeof h.then=="function")return wu(Ba(h),C,R,M,H);throw C=String(h),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return X}function B(h,C,R){if(h==null)return h;var M=[],H=0;return wu(h,M,"","",function(uu){return C.call(R,uu,H++)}),M}function _(h){if(h._status===-1){var C=h._result;C=C(),C.then(function(R){(h._status===0||h._status===-1)&&(h._status=1,h._result=R)},function(R){(h._status===0||h._status===-1)&&(h._status=2,h._result=R)}),h._status===-1&&(h._status=0,h._result=C)}if(h._status===1)return h._result.default;throw h._result}var Y=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)};function U(){}return W.Children={map:B,forEach:function(h,C,R){B(h,function(){C.apply(this,arguments)},R)},count:function(h){var C=0;return B(h,function(){C++}),C},toArray:function(h){return B(h,function(C){return C})||[]},only:function(h){if(!yu(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},W.Component=K,W.Fragment=f,W.Profiler=b,W.PureComponent=du,W.StrictMode=o,W.Suspense=O,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,W.__COMPILER_RUNTIME={__proto__:null,c:function(h){return P.H.useMemoCache(h)}},W.cache=function(h){return function(){return h.apply(null,arguments)}},W.cloneElement=function(h,C,R){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var M=j({},h.props),H=h.key,uu=void 0;if(C!=null)for(X in C.ref!==void 0&&(uu=void 0),C.key!==void 0&&(H=""+C.key),C)!Cu.call(C,X)||X==="key"||X==="__self"||X==="__source"||X==="ref"&&C.ref===void 0||(M[X]=C[X]);var X=arguments.length-2;if(X===1)M.children=R;else if(1<X){for(var iu=Array(X),ou=0;ou<X;ou++)iu[ou]=arguments[ou+2];M.children=iu}return gu(h.type,H,void 0,void 0,uu,M)},W.createContext=function(h){return h={$$typeof:E,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:p,_context:h},h},W.createElement=function(h,C,R){var M,H={},uu=null;if(C!=null)for(M in C.key!==void 0&&(uu=""+C.key),C)Cu.call(C,M)&&M!=="key"&&M!=="__self"&&M!=="__source"&&(H[M]=C[M]);var X=arguments.length-2;if(X===1)H.children=R;else if(1<X){for(var iu=Array(X),ou=0;ou<X;ou++)iu[ou]=arguments[ou+2];H.children=iu}if(h&&h.defaultProps)for(M in X=h.defaultProps,X)H[M]===void 0&&(H[M]=X[M]);return gu(h,uu,void 0,void 0,null,H)},W.createRef=function(){return{current:null}},W.forwardRef=function(h){return{$$typeof:z,render:h}},W.isValidElement=yu,W.lazy=function(h){return{$$typeof:w,_payload:{_status:-1,_result:h},_init:_}},W.memo=function(h,C){return{$$typeof:x,type:h,compare:C===void 0?null:C}},W.startTransition=function(h){var C=P.T,R={};P.T=R;try{var M=h(),H=P.S;H!==null&&H(R,M),typeof M=="object"&&M!==null&&typeof M.then=="function"&&M.then(U,Y)}catch(uu){Y(uu)}finally{P.T=C}},W.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},W.use=function(h){return P.H.use(h)},W.useActionState=function(h,C,R){return P.H.useActionState(h,C,R)},W.useCallback=function(h,C){return P.H.useCallback(h,C)},W.useContext=function(h){return P.H.useContext(h)},W.useDebugValue=function(){},W.useDeferredValue=function(h,C){return P.H.useDeferredValue(h,C)},W.useEffect=function(h,C,R){var M=P.H;if(typeof R=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return M.useEffect(h,C)},W.useId=function(){return P.H.useId()},W.useImperativeHandle=function(h,C,R){return P.H.useImperativeHandle(h,C,R)},W.useInsertionEffect=function(h,C){return P.H.useInsertionEffect(h,C)},W.useLayoutEffect=function(h,C){return P.H.useLayoutEffect(h,C)},W.useMemo=function(h,C){return P.H.useMemo(h,C)},W.useOptimistic=function(h,C){return P.H.useOptimistic(h,C)},W.useReducer=function(h,C,R){return P.H.useReducer(h,C,R)},W.useRef=function(h){return P.H.useRef(h)},W.useState=function(h){return P.H.useState(h)},W.useSyncExternalStore=function(h,C,R){return P.H.useSyncExternalStore(h,C,R)},W.useTransition=function(){return P.H.useTransition()},W.version="19.1.1",W}var Tf;function To(){return Tf||(Tf=1,Do.exports=g1()),Do.exports}var Hn=To();const ha=jf(Hn);var yo={exports:{}},Un={},Ao={exports:{}},xo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf;function v1(){return wf||(wf=1,(function(c){function i(B,_){var Y=B.length;B.push(_);u:for(;0<Y;){var U=Y-1>>>1,h=B[U];if(0<b(h,_))B[U]=_,B[Y]=h,Y=U;else break u}}function f(B){return B.length===0?null:B[0]}function o(B){if(B.length===0)return null;var _=B[0],Y=B.pop();if(Y!==_){B[0]=Y;u:for(var U=0,h=B.length,C=h>>>1;U<C;){var R=2*(U+1)-1,M=B[R],H=R+1,uu=B[H];if(0>b(M,Y))H<h&&0>b(uu,M)?(B[U]=uu,B[H]=Y,U=H):(B[U]=M,B[R]=Y,U=R);else if(H<h&&0>b(uu,Y))B[U]=uu,B[H]=Y,U=H;else break u}}return _}function b(B,_){var Y=B.sortIndex-_.sortIndex;return Y!==0?Y:B.id-_.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;c.unstable_now=function(){return p.now()}}else{var E=Date,z=E.now();c.unstable_now=function(){return E.now()-z}}var O=[],x=[],w=1,F=null,V=3,fu=!1,j=!1,k=!1,K=!1,Au=typeof setTimeout=="function"?setTimeout:null,du=typeof clearTimeout=="function"?clearTimeout:null,nu=typeof setImmediate<"u"?setImmediate:null;function Su(B){for(var _=f(x);_!==null;){if(_.callback===null)o(x);else if(_.startTime<=B)o(x),_.sortIndex=_.expirationTime,i(O,_);else break;_=f(x)}}function P(B){if(k=!1,Su(B),!j)if(f(O)!==null)j=!0,Cu||(Cu=!0,Fu());else{var _=f(x);_!==null&&wu(P,_.startTime-B)}}var Cu=!1,gu=-1,Tu=5,yu=-1;function Fa(){return K?!0:!(c.unstable_now()-yu<Tu)}function Ca(){if(K=!1,Cu){var B=c.unstable_now();yu=B;var _=!0;try{u:{j=!1,k&&(k=!1,du(gu),gu=-1),fu=!0;var Y=V;try{a:{for(Su(B),F=f(O);F!==null&&!(F.expirationTime>B&&Fa());){var U=F.callback;if(typeof U=="function"){F.callback=null,V=F.priorityLevel;var h=U(F.expirationTime<=B);if(B=c.unstable_now(),typeof h=="function"){F.callback=h,Su(B),_=!0;break a}F===f(O)&&o(O),Su(B)}else o(O);F=f(O)}if(F!==null)_=!0;else{var C=f(x);C!==null&&wu(P,C.startTime-B),_=!1}}break u}finally{F=null,V=Y,fu=!1}_=void 0}}finally{_?Fu():Cu=!1}}}var Fu;if(typeof nu=="function")Fu=function(){nu(Ca)};else if(typeof MessageChannel<"u"){var Hu=new MessageChannel,Ba=Hu.port2;Hu.port1.onmessage=Ca,Fu=function(){Ba.postMessage(null)}}else Fu=function(){Au(Ca,0)};function wu(B,_){gu=Au(function(){B(c.unstable_now())},_)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(B){B.callback=null},c.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Tu=0<B?Math.floor(1e3/B):5},c.unstable_getCurrentPriorityLevel=function(){return V},c.unstable_next=function(B){switch(V){case 1:case 2:case 3:var _=3;break;default:_=V}var Y=V;V=_;try{return B()}finally{V=Y}},c.unstable_requestPaint=function(){K=!0},c.unstable_runWithPriority=function(B,_){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=V;V=B;try{return _()}finally{V=Y}},c.unstable_scheduleCallback=function(B,_,Y){var U=c.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?U+Y:U):Y=U,B){case 1:var h=-1;break;case 2:h=250;break;case 5:h=1073741823;break;case 4:h=1e4;break;default:h=5e3}return h=Y+h,B={id:w++,callback:_,priorityLevel:B,startTime:Y,expirationTime:h,sortIndex:-1},Y>U?(B.sortIndex=Y,i(x,B),f(O)===null&&B===f(x)&&(k?(du(gu),gu=-1):k=!0,wu(P,Y-U))):(B.sortIndex=h,i(O,B),j||fu||(j=!0,Cu||(Cu=!0,Fu()))),B},c.unstable_shouldYield=Fa,c.unstable_wrapCallback=function(B){var _=V;return function(){var Y=V;V=_;try{return B.apply(this,arguments)}finally{V=Y}}}})(xo)),xo}var zf;function D1(){return zf||(zf=1,Ao.exports=v1()),Ao.exports}var Eo={exports:{}},Ju={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf;function y1(){if(kf)return Ju;kf=1;var c=To();function i(O){var x="https://react.dev/errors/"+O;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)x+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+O+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var o={d:{f,r:function(){throw Error(i(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},b=Symbol.for("react.portal");function p(O,x,w){var F=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:F==null?null:""+F,children:O,containerInfo:x,implementation:w}}var E=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(O,x){if(O==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Ju.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ju.createPortal=function(O,x){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(i(299));return p(O,x,null,w)},Ju.flushSync=function(O){var x=E.T,w=o.p;try{if(E.T=null,o.p=2,O)return O()}finally{E.T=x,o.p=w,o.d.f()}},Ju.preconnect=function(O,x){typeof O=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,o.d.C(O,x))},Ju.prefetchDNS=function(O){typeof O=="string"&&o.d.D(O)},Ju.preinit=function(O,x){if(typeof O=="string"&&x&&typeof x.as=="string"){var w=x.as,F=z(w,x.crossOrigin),V=typeof x.integrity=="string"?x.integrity:void 0,fu=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;w==="style"?o.d.S(O,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:F,integrity:V,fetchPriority:fu}):w==="script"&&o.d.X(O,{crossOrigin:F,integrity:V,fetchPriority:fu,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Ju.preinitModule=function(O,x){if(typeof O=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var w=z(x.as,x.crossOrigin);o.d.M(O,{crossOrigin:w,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&o.d.M(O)},Ju.preload=function(O,x){if(typeof O=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var w=x.as,F=z(w,x.crossOrigin);o.d.L(O,w,{crossOrigin:F,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Ju.preloadModule=function(O,x){if(typeof O=="string")if(x){var w=z(x.as,x.crossOrigin);o.d.m(O,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:w,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else o.d.m(O)},Ju.requestFormReset=function(O){o.d.r(O)},Ju.unstable_batchedUpdates=function(O,x){return O(x)},Ju.useFormState=function(O,x,w){return E.H.useFormState(O,x,w)},Ju.useFormStatus=function(){return E.H.useHostTransitionStatus()},Ju.version="19.1.1",Ju}var Rf;function A1(){if(Rf)return Eo.exports;Rf=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(i){console.error(i)}}return c(),Eo.exports=y1(),Eo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function x1(){if(Mf)return Un;Mf=1;var c=D1(),i=To(),f=A1();function o(u){var a="https://react.dev/errors/"+u;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+u+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(u){return!(!u||u.nodeType!==1&&u.nodeType!==9&&u.nodeType!==11)}function p(u){var a=u,t=u;if(u.alternate)for(;a.return;)a=a.return;else{u=a;do a=u,(a.flags&4098)!==0&&(t=a.return),u=a.return;while(u)}return a.tag===3?t:null}function E(u){if(u.tag===13){var a=u.memoizedState;if(a===null&&(u=u.alternate,u!==null&&(a=u.memoizedState)),a!==null)return a.dehydrated}return null}function z(u){if(p(u)!==u)throw Error(o(188))}function O(u){var a=u.alternate;if(!a){if(a=p(u),a===null)throw Error(o(188));return a!==u?null:u}for(var t=u,e=a;;){var n=t.return;if(n===null)break;var l=n.alternate;if(l===null){if(e=n.return,e!==null){t=e;continue}break}if(n.child===l.child){for(l=n.child;l;){if(l===t)return z(n),u;if(l===e)return z(n),a;l=l.sibling}throw Error(o(188))}if(t.return!==e.return)t=n,e=l;else{for(var r=!1,s=n.child;s;){if(s===t){r=!0,t=n,e=l;break}if(s===e){r=!0,e=n,t=l;break}s=s.sibling}if(!r){for(s=l.child;s;){if(s===t){r=!0,t=l,e=n;break}if(s===e){r=!0,e=l,t=n;break}s=s.sibling}if(!r)throw Error(o(189))}}if(t.alternate!==e)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?u:a}function x(u){var a=u.tag;if(a===5||a===26||a===27||a===6)return u;for(u=u.child;u!==null;){if(a=x(u),a!==null)return a;u=u.sibling}return null}var w=Object.assign,F=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),fu=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),Au=Symbol.for("react.provider"),du=Symbol.for("react.consumer"),nu=Symbol.for("react.context"),Su=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Cu=Symbol.for("react.suspense_list"),gu=Symbol.for("react.memo"),Tu=Symbol.for("react.lazy"),yu=Symbol.for("react.activity"),Fa=Symbol.for("react.memo_cache_sentinel"),Ca=Symbol.iterator;function Fu(u){return u===null||typeof u!="object"?null:(u=Ca&&u[Ca]||u["@@iterator"],typeof u=="function"?u:null)}var Hu=Symbol.for("react.client.reference");function Ba(u){if(u==null)return null;if(typeof u=="function")return u.$$typeof===Hu?null:u.displayName||u.name||null;if(typeof u=="string")return u;switch(u){case j:return"Fragment";case K:return"Profiler";case k:return"StrictMode";case P:return"Suspense";case Cu:return"SuspenseList";case yu:return"Activity"}if(typeof u=="object")switch(u.$$typeof){case fu:return"Portal";case nu:return(u.displayName||"Context")+".Provider";case du:return(u._context.displayName||"Context")+".Consumer";case Su:var a=u.render;return u=u.displayName,u||(u=a.displayName||a.name||"",u=u!==""?"ForwardRef("+u+")":"ForwardRef"),u;case gu:return a=u.displayName||null,a!==null?a:Ba(u.type)||"Memo";case Tu:a=u._payload,u=u._init;try{return Ba(u(a))}catch{}}return null}var wu=Array.isArray,B=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},U=[],h=-1;function C(u){return{current:u}}function R(u){0>h||(u.current=U[h],U[h]=null,h--)}function M(u,a){h++,U[h]=u.current,u.current=a}var H=C(null),uu=C(null),X=C(null),iu=C(null);function ou(u,a){switch(M(X,a),M(uu,u),M(H,null),a.nodeType){case 9:case 11:u=(u=a.documentElement)&&(u=u.namespaceURI)?$2(u):0;break;default:if(u=a.tagName,a=a.namespaceURI)a=$2(a),u=I2(a,u);else switch(u){case"svg":u=1;break;case"math":u=2;break;default:u=0}}R(H),M(H,u)}function pa(){R(H),R(uu),R(X)}function Zt(u){u.memoizedState!==null&&M(iu,u);var a=H.current,t=I2(a,u.type);a!==t&&(M(uu,u),M(H,t))}function Ha(u){uu.current===u&&(R(H),R(uu)),iu.current===u&&(R(iu),wn._currentValue=Y)}var tt=Object.prototype.hasOwnProperty,Kt=c.unstable_scheduleCallback,Jt=c.unstable_cancelCallback,Pt=c.unstable_shouldYield,Wt=c.unstable_requestPaint,za=c.unstable_now,Jf=c.unstable_getCurrentPriorityLevel,ko=c.unstable_ImmediatePriority,Ro=c.unstable_UserBlockingPriority,Gn=c.unstable_NormalPriority,Pf=c.unstable_LowPriority,Mo=c.unstable_IdlePriority,Wf=c.log,$f=c.unstable_setDisableYieldValue,Ne=null,ta=null;function et(u){if(typeof Wf=="function"&&$f(u),ta&&typeof ta.setStrictMode=="function")try{ta.setStrictMode(Ne,u)}catch{}}var ea=Math.clz32?Math.clz32:a0,If=Math.log,u0=Math.LN2;function a0(u){return u>>>=0,u===0?32:31-(If(u)/u0|0)|0}var Vn=256,Yn=4194304;function Tt(u){var a=u&42;if(a!==0)return a;switch(u&-u){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return u&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return u&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return u}}function jn(u,a,t){var e=u.pendingLanes;if(e===0)return 0;var n=0,l=u.suspendedLanes,r=u.pingedLanes;u=u.warmLanes;var s=e&134217727;return s!==0?(e=s&~l,e!==0?n=Tt(e):(r&=s,r!==0?n=Tt(r):t||(t=s&~u,t!==0&&(n=Tt(t))))):(s=e&~l,s!==0?n=Tt(s):r!==0?n=Tt(r):t||(t=e&~u,t!==0&&(n=Tt(t)))),n===0?0:a!==0&&a!==n&&(a&l)===0&&(l=n&-n,t=a&-a,l>=t||l===32&&(t&4194048)!==0)?a:n}function Fe(u,a){return(u.pendingLanes&~(u.suspendedLanes&~u.pingedLanes)&a)===0}function t0(u,a){switch(u){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _o(){var u=Vn;return Vn<<=1,(Vn&4194048)===0&&(Vn=256),u}function Uo(){var u=Yn;return Yn<<=1,(Yn&62914560)===0&&(Yn=4194304),u}function rr(u){for(var a=[],t=0;31>t;t++)a.push(u);return a}function He(u,a){u.pendingLanes|=a,a!==268435456&&(u.suspendedLanes=0,u.pingedLanes=0,u.warmLanes=0)}function e0(u,a,t,e,n,l){var r=u.pendingLanes;u.pendingLanes=t,u.suspendedLanes=0,u.pingedLanes=0,u.warmLanes=0,u.expiredLanes&=t,u.entangledLanes&=t,u.errorRecoveryDisabledLanes&=t,u.shellSuspendCounter=0;var s=u.entanglements,d=u.expirationTimes,D=u.hiddenUpdates;for(t=r&~t;0<t;){var S=31-ea(t),T=1<<S;s[S]=0,d[S]=-1;var y=D[S];if(y!==null)for(D[S]=null,S=0;S<y.length;S++){var A=y[S];A!==null&&(A.lane&=-536870913)}t&=~T}e!==0&&No(u,e,0),l!==0&&n===0&&u.tag!==0&&(u.suspendedLanes|=l&~(r&~a))}function No(u,a,t){u.pendingLanes|=a,u.suspendedLanes&=~a;var e=31-ea(a);u.entangledLanes|=a,u.entanglements[e]=u.entanglements[e]|1073741824|t&4194090}function Fo(u,a){var t=u.entangledLanes|=a;for(u=u.entanglements;t;){var e=31-ea(t),n=1<<e;n&a|u[e]&a&&(u[e]|=a),t&=~n}}function ir(u){switch(u){case 2:u=1;break;case 8:u=4;break;case 32:u=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:u=128;break;case 268435456:u=134217728;break;default:u=0}return u}function or(u){return u&=-u,2<u?8<u?(u&134217727)!==0?32:268435456:8:2}function Ho(){var u=_.p;return u!==0?u:(u=window.event,u===void 0?32:Df(u.type))}function n0(u,a){var t=_.p;try{return _.p=u,a()}finally{_.p=t}}var nt=Math.random().toString(36).slice(2),Zu="__reactFiber$"+nt,Wu="__reactProps$"+nt,$t="__reactContainer$"+nt,cr="__reactEvents$"+nt,l0="__reactListeners$"+nt,r0="__reactHandles$"+nt,Lo="__reactResources$"+nt,Le="__reactMarker$"+nt;function sr(u){delete u[Zu],delete u[Wu],delete u[cr],delete u[l0],delete u[r0]}function It(u){var a=u[Zu];if(a)return a;for(var t=u.parentNode;t;){if(a=t[$t]||t[Zu]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(u=ef(u);u!==null;){if(t=u[Zu])return t;u=ef(u)}return a}u=t,t=u.parentNode}return null}function ue(u){if(u=u[Zu]||u[$t]){var a=u.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return u}return null}function Ge(u){var a=u.tag;if(a===5||a===26||a===27||a===6)return u.stateNode;throw Error(o(33))}function ae(u){var a=u[Lo];return a||(a=u[Lo]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Lu(u){u[Le]=!0}var Go=new Set,Vo={};function wt(u,a){te(u,a),te(u+"Capture",a)}function te(u,a){for(Vo[u]=a,u=0;u<a.length;u++)Go.add(a[u])}var i0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yo={},jo={};function o0(u){return tt.call(jo,u)?!0:tt.call(Yo,u)?!1:i0.test(u)?jo[u]=!0:(Yo[u]=!0,!1)}function Xn(u,a,t){if(o0(a))if(t===null)u.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":u.removeAttribute(a);return;case"boolean":var e=a.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){u.removeAttribute(a);return}}u.setAttribute(a,""+t)}}function Qn(u,a,t){if(t===null)u.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":u.removeAttribute(a);return}u.setAttribute(a,""+t)}}function La(u,a,t,e){if(e===null)u.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":u.removeAttribute(t);return}u.setAttributeNS(a,t,""+e)}}var fr,Xo;function ee(u){if(fr===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);fr=a&&a[1]||"",Xo=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fr+u+Xo}var dr=!1;function hr(u,a){if(!u||dr)return"";dr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(a){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(A){var y=A}Reflect.construct(u,[],T)}else{try{T.call()}catch(A){y=A}u.call(T.prototype)}}else{try{throw Error()}catch(A){y=A}(T=u())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(A){if(A&&y&&typeof A.stack=="string")return[A.stack,y.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=e.DetermineComponentFrameRoot(),r=l[0],s=l[1];if(r&&s){var d=r.split(`
`),D=s.split(`
`);for(n=e=0;e<d.length&&!d[e].includes("DetermineComponentFrameRoot");)e++;for(;n<D.length&&!D[n].includes("DetermineComponentFrameRoot");)n++;if(e===d.length||n===D.length)for(e=d.length-1,n=D.length-1;1<=e&&0<=n&&d[e]!==D[n];)n--;for(;1<=e&&0<=n;e--,n--)if(d[e]!==D[n]){if(e!==1||n!==1)do if(e--,n--,0>n||d[e]!==D[n]){var S=`
`+d[e].replace(" at new "," at ");return u.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",u.displayName)),S}while(1<=e&&0<=n);break}}}finally{dr=!1,Error.prepareStackTrace=t}return(t=u?u.displayName||u.name:"")?ee(t):""}function c0(u){switch(u.tag){case 26:case 27:case 5:return ee(u.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 15:return hr(u.type,!1);case 11:return hr(u.type.render,!1);case 1:return hr(u.type,!0);case 31:return ee("Activity");default:return""}}function Qo(u){try{var a="";do a+=c0(u),u=u.return;while(u);return a}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function ba(u){switch(typeof u){case"bigint":case"boolean":case"number":case"string":case"undefined":return u;case"object":return u;default:return""}}function Zo(u){var a=u.type;return(u=u.nodeName)&&u.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function s0(u){var a=Zo(u)?"checked":"value",t=Object.getOwnPropertyDescriptor(u.constructor.prototype,a),e=""+u[a];if(!u.hasOwnProperty(a)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var n=t.get,l=t.set;return Object.defineProperty(u,a,{configurable:!0,get:function(){return n.call(this)},set:function(r){e=""+r,l.call(this,r)}}),Object.defineProperty(u,a,{enumerable:t.enumerable}),{getValue:function(){return e},setValue:function(r){e=""+r},stopTracking:function(){u._valueTracker=null,delete u[a]}}}}function Zn(u){u._valueTracker||(u._valueTracker=s0(u))}function Ko(u){if(!u)return!1;var a=u._valueTracker;if(!a)return!0;var t=a.getValue(),e="";return u&&(e=Zo(u)?u.checked?"true":"false":u.value),u=e,u!==t?(a.setValue(u),!0):!1}function Kn(u){if(u=u||(typeof document<"u"?document:void 0),typeof u>"u")return null;try{return u.activeElement||u.body}catch{return u.body}}var f0=/[\n"\\]/g;function ma(u){return u.replace(f0,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function pr(u,a,t,e,n,l,r,s){u.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?u.type=r:u.removeAttribute("type"),a!=null?r==="number"?(a===0&&u.value===""||u.value!=a)&&(u.value=""+ba(a)):u.value!==""+ba(a)&&(u.value=""+ba(a)):r!=="submit"&&r!=="reset"||u.removeAttribute("value"),a!=null?br(u,r,ba(a)):t!=null?br(u,r,ba(t)):e!=null&&u.removeAttribute("value"),n==null&&l!=null&&(u.defaultChecked=!!l),n!=null&&(u.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?u.name=""+ba(s):u.removeAttribute("name")}function Jo(u,a,t,e,n,l,r,s){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(u.type=l),a!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||a!=null))return;t=t!=null?""+ba(t):"",a=a!=null?""+ba(a):t,s||a===u.value||(u.value=a),u.defaultValue=a}e=e??n,e=typeof e!="function"&&typeof e!="symbol"&&!!e,u.checked=s?u.checked:!!e,u.defaultChecked=!!e,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(u.name=r)}function br(u,a,t){a==="number"&&Kn(u.ownerDocument)===u||u.defaultValue===""+t||(u.defaultValue=""+t)}function ne(u,a,t,e){if(u=u.options,a){a={};for(var n=0;n<t.length;n++)a["$"+t[n]]=!0;for(t=0;t<u.length;t++)n=a.hasOwnProperty("$"+u[t].value),u[t].selected!==n&&(u[t].selected=n),n&&e&&(u[t].defaultSelected=!0)}else{for(t=""+ba(t),a=null,n=0;n<u.length;n++){if(u[n].value===t){u[n].selected=!0,e&&(u[n].defaultSelected=!0);return}a!==null||u[n].disabled||(a=u[n])}a!==null&&(a.selected=!0)}}function Po(u,a,t){if(a!=null&&(a=""+ba(a),a!==u.value&&(u.value=a),t==null)){u.defaultValue!==a&&(u.defaultValue=a);return}u.defaultValue=t!=null?""+ba(t):""}function Wo(u,a,t,e){if(a==null){if(e!=null){if(t!=null)throw Error(o(92));if(wu(e)){if(1<e.length)throw Error(o(93));e=e[0]}t=e}t==null&&(t=""),a=t}t=ba(a),u.defaultValue=t,e=u.textContent,e===t&&e!==""&&e!==null&&(u.value=e)}function le(u,a){if(a){var t=u.firstChild;if(t&&t===u.lastChild&&t.nodeType===3){t.nodeValue=a;return}}u.textContent=a}var d0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $o(u,a,t){var e=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?e?u.setProperty(a,""):a==="float"?u.cssFloat="":u[a]="":e?u.setProperty(a,t):typeof t!="number"||t===0||d0.has(a)?a==="float"?u.cssFloat=t:u[a]=(""+t).trim():u[a]=t+"px"}function Io(u,a,t){if(a!=null&&typeof a!="object")throw Error(o(62));if(u=u.style,t!=null){for(var e in t)!t.hasOwnProperty(e)||a!=null&&a.hasOwnProperty(e)||(e.indexOf("--")===0?u.setProperty(e,""):e==="float"?u.cssFloat="":u[e]="");for(var n in a)e=a[n],a.hasOwnProperty(n)&&t[n]!==e&&$o(u,n,e)}else for(var l in a)a.hasOwnProperty(l)&&$o(u,l,a[l])}function mr(u){if(u.indexOf("-")===-1)return!1;switch(u){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var h0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),p0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jn(u){return p0.test(""+u)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":u}var gr=null;function vr(u){return u=u.target||u.srcElement||window,u.correspondingUseElement&&(u=u.correspondingUseElement),u.nodeType===3?u.parentNode:u}var re=null,ie=null;function uc(u){var a=ue(u);if(a&&(u=a.stateNode)){var t=u[Wu]||null;u:switch(u=a.stateNode,a.type){case"input":if(pr(u,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=u;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+ma(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var e=t[a];if(e!==u&&e.form===u.form){var n=e[Wu]||null;if(!n)throw Error(o(90));pr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<t.length;a++)e=t[a],e.form===u.form&&Ko(e)}break u;case"textarea":Po(u,t.value,t.defaultValue);break u;case"select":a=t.value,a!=null&&ne(u,!!t.multiple,a,!1)}}}var Dr=!1;function ac(u,a,t){if(Dr)return u(a,t);Dr=!0;try{var e=u(a);return e}finally{if(Dr=!1,(re!==null||ie!==null)&&(Ml(),re&&(a=re,u=ie,ie=re=null,uc(a),u)))for(a=0;a<u.length;a++)uc(u[a])}}function Ve(u,a){var t=u.stateNode;if(t===null)return null;var e=t[Wu]||null;if(e===null)return null;t=e[a];u:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(u=u.type,e=!(u==="button"||u==="input"||u==="select"||u==="textarea")),u=!e;break u;default:u=!1}if(u)return null;if(t&&typeof t!="function")throw Error(o(231,a,typeof t));return t}var Ga=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yr=!1;if(Ga)try{var Ye={};Object.defineProperty(Ye,"passive",{get:function(){yr=!0}}),window.addEventListener("test",Ye,Ye),window.removeEventListener("test",Ye,Ye)}catch{yr=!1}var lt=null,Ar=null,Pn=null;function tc(){if(Pn)return Pn;var u,a=Ar,t=a.length,e,n="value"in lt?lt.value:lt.textContent,l=n.length;for(u=0;u<t&&a[u]===n[u];u++);var r=t-u;for(e=1;e<=r&&a[t-e]===n[l-e];e++);return Pn=n.slice(u,1<e?1-e:void 0)}function Wn(u){var a=u.keyCode;return"charCode"in u?(u=u.charCode,u===0&&a===13&&(u=13)):u=a,u===10&&(u=13),32<=u||u===13?u:0}function $n(){return!0}function ec(){return!1}function $u(u){function a(t,e,n,l,r){this._reactName=t,this._targetInst=n,this.type=e,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var s in u)u.hasOwnProperty(s)&&(t=u[s],this[s]=t?t(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?$n:ec,this.isPropagationStopped=ec,this}return w(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),a}var zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(u){return u.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},In=$u(zt),je=w({},zt,{view:0,detail:0}),b0=$u(je),xr,Er,Xe,ul=w({},je,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Br,button:0,buttons:0,relatedTarget:function(u){return u.relatedTarget===void 0?u.fromElement===u.srcElement?u.toElement:u.fromElement:u.relatedTarget},movementX:function(u){return"movementX"in u?u.movementX:(u!==Xe&&(Xe&&u.type==="mousemove"?(xr=u.screenX-Xe.screenX,Er=u.screenY-Xe.screenY):Er=xr=0,Xe=u),xr)},movementY:function(u){return"movementY"in u?u.movementY:Er}}),nc=$u(ul),m0=w({},ul,{dataTransfer:0}),g0=$u(m0),v0=w({},je,{relatedTarget:0}),Cr=$u(v0),D0=w({},zt,{animationName:0,elapsedTime:0,pseudoElement:0}),y0=$u(D0),A0=w({},zt,{clipboardData:function(u){return"clipboardData"in u?u.clipboardData:window.clipboardData}}),x0=$u(A0),E0=w({},zt,{data:0}),lc=$u(E0),C0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q0(u){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(u):(u=S0[u])?!!a[u]:!1}function Br(){return q0}var O0=w({},je,{key:function(u){if(u.key){var a=C0[u.key]||u.key;if(a!=="Unidentified")return a}return u.type==="keypress"?(u=Wn(u),u===13?"Enter":String.fromCharCode(u)):u.type==="keydown"||u.type==="keyup"?B0[u.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Br,charCode:function(u){return u.type==="keypress"?Wn(u):0},keyCode:function(u){return u.type==="keydown"||u.type==="keyup"?u.keyCode:0},which:function(u){return u.type==="keypress"?Wn(u):u.type==="keydown"||u.type==="keyup"?u.keyCode:0}}),T0=$u(O0),w0=w({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rc=$u(w0),z0=w({},je,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Br}),k0=$u(z0),R0=w({},zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),M0=$u(R0),_0=w({},ul,{deltaX:function(u){return"deltaX"in u?u.deltaX:"wheelDeltaX"in u?-u.wheelDeltaX:0},deltaY:function(u){return"deltaY"in u?u.deltaY:"wheelDeltaY"in u?-u.wheelDeltaY:"wheelDelta"in u?-u.wheelDelta:0},deltaZ:0,deltaMode:0}),U0=$u(_0),N0=w({},zt,{newState:0,oldState:0}),F0=$u(N0),H0=[9,13,27,32],Sr=Ga&&"CompositionEvent"in window,Qe=null;Ga&&"documentMode"in document&&(Qe=document.documentMode);var L0=Ga&&"TextEvent"in window&&!Qe,ic=Ga&&(!Sr||Qe&&8<Qe&&11>=Qe),oc=" ",cc=!1;function sc(u,a){switch(u){case"keyup":return H0.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fc(u){return u=u.detail,typeof u=="object"&&"data"in u?u.data:null}var oe=!1;function G0(u,a){switch(u){case"compositionend":return fc(a);case"keypress":return a.which!==32?null:(cc=!0,oc);case"textInput":return u=a.data,u===oc&&cc?null:u;default:return null}}function V0(u,a){if(oe)return u==="compositionend"||!Sr&&sc(u,a)?(u=tc(),Pn=Ar=lt=null,oe=!1,u):null;switch(u){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return ic&&a.locale!=="ko"?null:a.data;default:return null}}var Y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dc(u){var a=u&&u.nodeName&&u.nodeName.toLowerCase();return a==="input"?!!Y0[u.type]:a==="textarea"}function hc(u,a,t,e){re?ie?ie.push(e):ie=[e]:re=e,a=Ll(a,"onChange"),0<a.length&&(t=new In("onChange","change",null,t,e),u.push({event:t,listeners:a}))}var Ze=null,Ke=null;function j0(u){Z2(u,0)}function al(u){var a=Ge(u);if(Ko(a))return u}function pc(u,a){if(u==="change")return a}var bc=!1;if(Ga){var qr;if(Ga){var Or="oninput"in document;if(!Or){var mc=document.createElement("div");mc.setAttribute("oninput","return;"),Or=typeof mc.oninput=="function"}qr=Or}else qr=!1;bc=qr&&(!document.documentMode||9<document.documentMode)}function gc(){Ze&&(Ze.detachEvent("onpropertychange",vc),Ke=Ze=null)}function vc(u){if(u.propertyName==="value"&&al(Ke)){var a=[];hc(a,Ke,u,vr(u)),ac(j0,a)}}function X0(u,a,t){u==="focusin"?(gc(),Ze=a,Ke=t,Ze.attachEvent("onpropertychange",vc)):u==="focusout"&&gc()}function Q0(u){if(u==="selectionchange"||u==="keyup"||u==="keydown")return al(Ke)}function Z0(u,a){if(u==="click")return al(a)}function K0(u,a){if(u==="input"||u==="change")return al(a)}function J0(u,a){return u===a&&(u!==0||1/u===1/a)||u!==u&&a!==a}var na=typeof Object.is=="function"?Object.is:J0;function Je(u,a){if(na(u,a))return!0;if(typeof u!="object"||u===null||typeof a!="object"||a===null)return!1;var t=Object.keys(u),e=Object.keys(a);if(t.length!==e.length)return!1;for(e=0;e<t.length;e++){var n=t[e];if(!tt.call(a,n)||!na(u[n],a[n]))return!1}return!0}function Dc(u){for(;u&&u.firstChild;)u=u.firstChild;return u}function yc(u,a){var t=Dc(u);u=0;for(var e;t;){if(t.nodeType===3){if(e=u+t.textContent.length,u<=a&&e>=a)return{node:t,offset:a-u};u=e}u:{for(;t;){if(t.nextSibling){t=t.nextSibling;break u}t=t.parentNode}t=void 0}t=Dc(t)}}function Ac(u,a){return u&&a?u===a?!0:u&&u.nodeType===3?!1:a&&a.nodeType===3?Ac(u,a.parentNode):"contains"in u?u.contains(a):u.compareDocumentPosition?!!(u.compareDocumentPosition(a)&16):!1:!1}function xc(u){u=u!=null&&u.ownerDocument!=null&&u.ownerDocument.defaultView!=null?u.ownerDocument.defaultView:window;for(var a=Kn(u.document);a instanceof u.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)u=a.contentWindow;else break;a=Kn(u.document)}return a}function Tr(u){var a=u&&u.nodeName&&u.nodeName.toLowerCase();return a&&(a==="input"&&(u.type==="text"||u.type==="search"||u.type==="tel"||u.type==="url"||u.type==="password")||a==="textarea"||u.contentEditable==="true")}var P0=Ga&&"documentMode"in document&&11>=document.documentMode,ce=null,wr=null,Pe=null,zr=!1;function Ec(u,a,t){var e=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;zr||ce==null||ce!==Kn(e)||(e=ce,"selectionStart"in e&&Tr(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Pe&&Je(Pe,e)||(Pe=e,e=Ll(wr,"onSelect"),0<e.length&&(a=new In("onSelect","select",null,a,t),u.push({event:a,listeners:e}),a.target=ce)))}function kt(u,a){var t={};return t[u.toLowerCase()]=a.toLowerCase(),t["Webkit"+u]="webkit"+a,t["Moz"+u]="moz"+a,t}var se={animationend:kt("Animation","AnimationEnd"),animationiteration:kt("Animation","AnimationIteration"),animationstart:kt("Animation","AnimationStart"),transitionrun:kt("Transition","TransitionRun"),transitionstart:kt("Transition","TransitionStart"),transitioncancel:kt("Transition","TransitionCancel"),transitionend:kt("Transition","TransitionEnd")},kr={},Cc={};Ga&&(Cc=document.createElement("div").style,"AnimationEvent"in window||(delete se.animationend.animation,delete se.animationiteration.animation,delete se.animationstart.animation),"TransitionEvent"in window||delete se.transitionend.transition);function Rt(u){if(kr[u])return kr[u];if(!se[u])return u;var a=se[u],t;for(t in a)if(a.hasOwnProperty(t)&&t in Cc)return kr[u]=a[t];return u}var Bc=Rt("animationend"),Sc=Rt("animationiteration"),qc=Rt("animationstart"),W0=Rt("transitionrun"),$0=Rt("transitionstart"),I0=Rt("transitioncancel"),Oc=Rt("transitionend"),Tc=new Map,Rr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rr.push("scrollEnd");function Sa(u,a){Tc.set(u,a),wt(a,[u])}var wc=new WeakMap;function ga(u,a){if(typeof u=="object"&&u!==null){var t=wc.get(u);return t!==void 0?t:(a={value:u,source:a,stack:Qo(a)},wc.set(u,a),a)}return{value:u,source:a,stack:Qo(a)}}var va=[],fe=0,Mr=0;function tl(){for(var u=fe,a=Mr=fe=0;a<u;){var t=va[a];va[a++]=null;var e=va[a];va[a++]=null;var n=va[a];va[a++]=null;var l=va[a];if(va[a++]=null,e!==null&&n!==null){var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}l!==0&&zc(t,n,l)}}function el(u,a,t,e){va[fe++]=u,va[fe++]=a,va[fe++]=t,va[fe++]=e,Mr|=e,u.lanes|=e,u=u.alternate,u!==null&&(u.lanes|=e)}function _r(u,a,t,e){return el(u,a,t,e),nl(u)}function de(u,a){return el(u,null,null,a),nl(u)}function zc(u,a,t){u.lanes|=t;var e=u.alternate;e!==null&&(e.lanes|=t);for(var n=!1,l=u.return;l!==null;)l.childLanes|=t,e=l.alternate,e!==null&&(e.childLanes|=t),l.tag===22&&(u=l.stateNode,u===null||u._visibility&1||(n=!0)),u=l,l=l.return;return u.tag===3?(l=u.stateNode,n&&a!==null&&(n=31-ea(t),u=l.hiddenUpdates,e=u[n],e===null?u[n]=[a]:e.push(a),a.lane=t|536870912),l):null}function nl(u){if(50<xn)throw xn=0,Gi=null,Error(o(185));for(var a=u.return;a!==null;)u=a,a=u.return;return u.tag===3?u.stateNode:null}var he={};function ud(u,a,t,e){this.tag=u,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function la(u,a,t,e){return new ud(u,a,t,e)}function Ur(u){return u=u.prototype,!(!u||!u.isReactComponent)}function Va(u,a){var t=u.alternate;return t===null?(t=la(u.tag,a,u.key,u.mode),t.elementType=u.elementType,t.type=u.type,t.stateNode=u.stateNode,t.alternate=u,u.alternate=t):(t.pendingProps=a,t.type=u.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=u.flags&65011712,t.childLanes=u.childLanes,t.lanes=u.lanes,t.child=u.child,t.memoizedProps=u.memoizedProps,t.memoizedState=u.memoizedState,t.updateQueue=u.updateQueue,a=u.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=u.sibling,t.index=u.index,t.ref=u.ref,t.refCleanup=u.refCleanup,t}function kc(u,a){u.flags&=65011714;var t=u.alternate;return t===null?(u.childLanes=0,u.lanes=a,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=t.childLanes,u.lanes=t.lanes,u.child=t.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=t.memoizedProps,u.memoizedState=t.memoizedState,u.updateQueue=t.updateQueue,u.type=t.type,a=t.dependencies,u.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),u}function ll(u,a,t,e,n,l){var r=0;if(e=u,typeof u=="function")Ur(u)&&(r=1);else if(typeof u=="string")r=t1(u,t,H.current)?26:u==="html"||u==="head"||u==="body"?27:5;else u:switch(u){case yu:return u=la(31,t,a,n),u.elementType=yu,u.lanes=l,u;case j:return Mt(t.children,n,l,a);case k:r=8,n|=24;break;case K:return u=la(12,t,a,n|2),u.elementType=K,u.lanes=l,u;case P:return u=la(13,t,a,n),u.elementType=P,u.lanes=l,u;case Cu:return u=la(19,t,a,n),u.elementType=Cu,u.lanes=l,u;default:if(typeof u=="object"&&u!==null)switch(u.$$typeof){case Au:case nu:r=10;break u;case du:r=9;break u;case Su:r=11;break u;case gu:r=14;break u;case Tu:r=16,e=null;break u}r=29,t=Error(o(130,u===null?"null":typeof u,"")),e=null}return a=la(r,t,a,n),a.elementType=u,a.type=e,a.lanes=l,a}function Mt(u,a,t,e){return u=la(7,u,e,a),u.lanes=t,u}function Nr(u,a,t){return u=la(6,u,null,a),u.lanes=t,u}function Fr(u,a,t){return a=la(4,u.children!==null?u.children:[],u.key,a),a.lanes=t,a.stateNode={containerInfo:u.containerInfo,pendingChildren:null,implementation:u.implementation},a}var pe=[],be=0,rl=null,il=0,Da=[],ya=0,_t=null,Ya=1,ja="";function Ut(u,a){pe[be++]=il,pe[be++]=rl,rl=u,il=a}function Rc(u,a,t){Da[ya++]=Ya,Da[ya++]=ja,Da[ya++]=_t,_t=u;var e=Ya;u=ja;var n=32-ea(e)-1;e&=~(1<<n),t+=1;var l=32-ea(a)+n;if(30<l){var r=n-n%5;l=(e&(1<<r)-1).toString(32),e>>=r,n-=r,Ya=1<<32-ea(a)+n|t<<n|e,ja=l+u}else Ya=1<<l|t<<n|e,ja=u}function Hr(u){u.return!==null&&(Ut(u,1),Rc(u,1,0))}function Lr(u){for(;u===rl;)rl=pe[--be],pe[be]=null,il=pe[--be],pe[be]=null;for(;u===_t;)_t=Da[--ya],Da[ya]=null,ja=Da[--ya],Da[ya]=null,Ya=Da[--ya],Da[ya]=null}var Pu=null,qu=null,ru=!1,Nt=null,ka=!1,Gr=Error(o(519));function Ft(u){var a=Error(o(418,""));throw Ie(ga(a,u)),Gr}function Mc(u){var a=u.stateNode,t=u.type,e=u.memoizedProps;switch(a[Zu]=u,a[Wu]=e,t){case"dialog":tu("cancel",a),tu("close",a);break;case"iframe":case"object":case"embed":tu("load",a);break;case"video":case"audio":for(t=0;t<Cn.length;t++)tu(Cn[t],a);break;case"source":tu("error",a);break;case"img":case"image":case"link":tu("error",a),tu("load",a);break;case"details":tu("toggle",a);break;case"input":tu("invalid",a),Jo(a,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0),Zn(a);break;case"select":tu("invalid",a);break;case"textarea":tu("invalid",a),Wo(a,e.value,e.defaultValue,e.children),Zn(a)}t=e.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||e.suppressHydrationWarning===!0||W2(a.textContent,t)?(e.popover!=null&&(tu("beforetoggle",a),tu("toggle",a)),e.onScroll!=null&&tu("scroll",a),e.onScrollEnd!=null&&tu("scrollend",a),e.onClick!=null&&(a.onclick=Gl),a=!0):a=!1,a||Ft(u)}function _c(u){for(Pu=u.return;Pu;)switch(Pu.tag){case 5:case 13:ka=!1;return;case 27:case 3:ka=!0;return;default:Pu=Pu.return}}function We(u){if(u!==Pu)return!1;if(!ru)return _c(u),ru=!0,!1;var a=u.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=u.type,t=!(t!=="form"&&t!=="button")||eo(u.type,u.memoizedProps)),t=!t),t&&qu&&Ft(u),_c(u),a===13){if(u=u.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u:{for(u=u.nextSibling,a=0;u;){if(u.nodeType===8)if(t=u.data,t==="/$"){if(a===0){qu=Oa(u.nextSibling);break u}a--}else t!=="$"&&t!=="$!"&&t!=="$?"||a++;u=u.nextSibling}qu=null}}else a===27?(a=qu,At(u.type)?(u=io,io=null,qu=u):qu=a):qu=Pu?Oa(u.stateNode.nextSibling):null;return!0}function $e(){qu=Pu=null,ru=!1}function Uc(){var u=Nt;return u!==null&&(aa===null?aa=u:aa.push.apply(aa,u),Nt=null),u}function Ie(u){Nt===null?Nt=[u]:Nt.push(u)}var Vr=C(null),Ht=null,Xa=null;function rt(u,a,t){M(Vr,a._currentValue),a._currentValue=t}function Qa(u){u._currentValue=Vr.current,R(Vr)}function Yr(u,a,t){for(;u!==null;){var e=u.alternate;if((u.childLanes&a)!==a?(u.childLanes|=a,e!==null&&(e.childLanes|=a)):e!==null&&(e.childLanes&a)!==a&&(e.childLanes|=a),u===t)break;u=u.return}}function jr(u,a,t,e){var n=u.child;for(n!==null&&(n.return=u);n!==null;){var l=n.dependencies;if(l!==null){var r=n.child;l=l.firstContext;u:for(;l!==null;){var s=l;l=n;for(var d=0;d<a.length;d++)if(s.context===a[d]){l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Yr(l.return,t,u),e||(r=null);break u}l=s.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(o(341));r.lanes|=t,l=r.alternate,l!==null&&(l.lanes|=t),Yr(r,t,u),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===u){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function un(u,a,t,e){u=null;for(var n=a,l=!1;n!==null;){if(!l){if((n.flags&524288)!==0)l=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(o(387));if(r=r.memoizedProps,r!==null){var s=n.type;na(n.pendingProps.value,r.value)||(u!==null?u.push(s):u=[s])}}else if(n===iu.current){if(r=n.alternate,r===null)throw Error(o(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(u!==null?u.push(wn):u=[wn])}n=n.return}u!==null&&jr(a,u,t,e),a.flags|=262144}function ol(u){for(u=u.firstContext;u!==null;){if(!na(u.context._currentValue,u.memoizedValue))return!0;u=u.next}return!1}function Lt(u){Ht=u,Xa=null,u=u.dependencies,u!==null&&(u.firstContext=null)}function Ku(u){return Nc(Ht,u)}function cl(u,a){return Ht===null&&Lt(u),Nc(u,a)}function Nc(u,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Xa===null){if(u===null)throw Error(o(308));Xa=a,u.dependencies={lanes:0,firstContext:a},u.flags|=524288}else Xa=Xa.next=a;return t}var ad=typeof AbortController<"u"?AbortController:function(){var u=[],a=this.signal={aborted:!1,addEventListener:function(t,e){u.push(e)}};this.abort=function(){a.aborted=!0,u.forEach(function(t){return t()})}},td=c.unstable_scheduleCallback,ed=c.unstable_NormalPriority,_u={$$typeof:nu,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xr(){return{controller:new ad,data:new Map,refCount:0}}function an(u){u.refCount--,u.refCount===0&&td(ed,function(){u.controller.abort()})}var tn=null,Qr=0,me=0,ge=null;function nd(u,a){if(tn===null){var t=tn=[];Qr=0,me=Ki(),ge={status:"pending",value:void 0,then:function(e){t.push(e)}}}return Qr++,a.then(Fc,Fc),a}function Fc(){if(--Qr===0&&tn!==null){ge!==null&&(ge.status="fulfilled");var u=tn;tn=null,me=0,ge=null;for(var a=0;a<u.length;a++)(0,u[a])()}}function ld(u,a){var t=[],e={status:"pending",value:null,reason:null,then:function(n){t.push(n)}};return u.then(function(){e.status="fulfilled",e.value=a;for(var n=0;n<t.length;n++)(0,t[n])(a)},function(n){for(e.status="rejected",e.reason=n,n=0;n<t.length;n++)(0,t[n])(void 0)}),e}var Hc=B.S;B.S=function(u,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&nd(u,a),Hc!==null&&Hc(u,a)};var Gt=C(null);function Zr(){var u=Gt.current;return u!==null?u:vu.pooledCache}function sl(u,a){a===null?M(Gt,Gt.current):M(Gt,a.pool)}function Lc(){var u=Zr();return u===null?null:{parent:_u._currentValue,pool:u}}var en=Error(o(460)),Gc=Error(o(474)),fl=Error(o(542)),Kr={then:function(){}};function Vc(u){return u=u.status,u==="fulfilled"||u==="rejected"}function dl(){}function Yc(u,a,t){switch(t=u[t],t===void 0?u.push(a):t!==a&&(a.then(dl,dl),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw u=a.reason,Xc(u),u;default:if(typeof a.status=="string")a.then(dl,dl);else{if(u=vu,u!==null&&100<u.shellSuspendCounter)throw Error(o(482));u=a,u.status="pending",u.then(function(e){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=e}},function(e){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw u=a.reason,Xc(u),u}throw nn=a,en}}var nn=null;function jc(){if(nn===null)throw Error(o(459));var u=nn;return nn=null,u}function Xc(u){if(u===en||u===fl)throw Error(o(483))}var it=!1;function Jr(u){u.updateQueue={baseState:u.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pr(u,a){u=u.updateQueue,a.updateQueue===u&&(a.updateQueue={baseState:u.baseState,firstBaseUpdate:u.firstBaseUpdate,lastBaseUpdate:u.lastBaseUpdate,shared:u.shared,callbacks:null})}function ot(u){return{lane:u,tag:0,payload:null,callback:null,next:null}}function ct(u,a,t){var e=u.updateQueue;if(e===null)return null;if(e=e.shared,(cu&2)!==0){var n=e.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a,a=nl(u),zc(u,null,t),a}return el(u,e,a,t),nl(u)}function ln(u,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var e=a.lanes;e&=u.pendingLanes,t|=e,a.lanes=t,Fo(u,t)}}function Wr(u,a){var t=u.updateQueue,e=u.alternate;if(e!==null&&(e=e.updateQueue,t===e)){var n=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var r={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?n=l=r:l=l.next=r,t=t.next}while(t!==null);l===null?n=l=a:l=l.next=a}else n=l=a;t={baseState:e.baseState,firstBaseUpdate:n,lastBaseUpdate:l,shared:e.shared,callbacks:e.callbacks},u.updateQueue=t;return}u=t.lastBaseUpdate,u===null?t.firstBaseUpdate=a:u.next=a,t.lastBaseUpdate=a}var $r=!1;function rn(){if($r){var u=ge;if(u!==null)throw u}}function on(u,a,t,e){$r=!1;var n=u.updateQueue;it=!1;var l=n.firstBaseUpdate,r=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var d=s,D=d.next;d.next=null,r===null?l=D:r.next=D,r=d;var S=u.alternate;S!==null&&(S=S.updateQueue,s=S.lastBaseUpdate,s!==r&&(s===null?S.firstBaseUpdate=D:s.next=D,S.lastBaseUpdate=d))}if(l!==null){var T=n.baseState;r=0,S=D=d=null,s=l;do{var y=s.lane&-536870913,A=y!==s.lane;if(A?(eu&y)===y:(e&y)===y){y!==0&&y===me&&($r=!0),S!==null&&(S=S.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});u:{var J=u,Q=s;y=a;var bu=t;switch(Q.tag){case 1:if(J=Q.payload,typeof J=="function"){T=J.call(bu,T,y);break u}T=J;break u;case 3:J.flags=J.flags&-65537|128;case 0:if(J=Q.payload,y=typeof J=="function"?J.call(bu,T,y):J,y==null)break u;T=w({},T,y);break u;case 2:it=!0}}y=s.callback,y!==null&&(u.flags|=64,A&&(u.flags|=8192),A=n.callbacks,A===null?n.callbacks=[y]:A.push(y))}else A={lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},S===null?(D=S=A,d=T):S=S.next=A,r|=y;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;A=s,s=A.next,A.next=null,n.lastBaseUpdate=A,n.shared.pending=null}}while(!0);S===null&&(d=T),n.baseState=d,n.firstBaseUpdate=D,n.lastBaseUpdate=S,l===null&&(n.shared.lanes=0),gt|=r,u.lanes=r,u.memoizedState=T}}function Qc(u,a){if(typeof u!="function")throw Error(o(191,u));u.call(a)}function Zc(u,a){var t=u.callbacks;if(t!==null)for(u.callbacks=null,u=0;u<t.length;u++)Qc(t[u],a)}var ve=C(null),hl=C(0);function Kc(u,a){u=Ia,M(hl,u),M(ve,a),Ia=u|a.baseLanes}function Ir(){M(hl,Ia),M(ve,ve.current)}function ui(){Ia=hl.current,R(ve),R(hl)}var st=0,$=null,hu=null,Ru=null,pl=!1,De=!1,Vt=!1,bl=0,cn=0,ye=null,rd=0;function zu(){throw Error(o(321))}function ai(u,a){if(a===null)return!1;for(var t=0;t<a.length&&t<u.length;t++)if(!na(u[t],a[t]))return!1;return!0}function ti(u,a,t,e,n,l){return st=l,$=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,B.H=u===null||u.memoizedState===null?zs:ks,Vt=!1,l=t(e,n),Vt=!1,De&&(l=Pc(a,t,e,n)),Jc(u),l}function Jc(u){B.H=Al;var a=hu!==null&&hu.next!==null;if(st=0,Ru=hu=$=null,pl=!1,cn=0,ye=null,a)throw Error(o(300));u===null||Gu||(u=u.dependencies,u!==null&&ol(u)&&(Gu=!0))}function Pc(u,a,t,e){$=u;var n=0;do{if(De&&(ye=null),cn=0,De=!1,25<=n)throw Error(o(301));if(n+=1,Ru=hu=null,u.updateQueue!=null){var l=u.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}B.H=hd,l=a(t,e)}while(De);return l}function id(){var u=B.H,a=u.useState()[0];return a=typeof a.then=="function"?sn(a):a,u=u.useState()[0],(hu!==null?hu.memoizedState:null)!==u&&($.flags|=1024),a}function ei(){var u=bl!==0;return bl=0,u}function ni(u,a,t){a.updateQueue=u.updateQueue,a.flags&=-2053,u.lanes&=~t}function li(u){if(pl){for(u=u.memoizedState;u!==null;){var a=u.queue;a!==null&&(a.pending=null),u=u.next}pl=!1}st=0,Ru=hu=$=null,De=!1,cn=bl=0,ye=null}function Iu(){var u={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ru===null?$.memoizedState=Ru=u:Ru=Ru.next=u,Ru}function Mu(){if(hu===null){var u=$.alternate;u=u!==null?u.memoizedState:null}else u=hu.next;var a=Ru===null?$.memoizedState:Ru.next;if(a!==null)Ru=a,hu=u;else{if(u===null)throw $.alternate===null?Error(o(467)):Error(o(310));hu=u,u={memoizedState:hu.memoizedState,baseState:hu.baseState,baseQueue:hu.baseQueue,queue:hu.queue,next:null},Ru===null?$.memoizedState=Ru=u:Ru=Ru.next=u}return Ru}function ri(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sn(u){var a=cn;return cn+=1,ye===null&&(ye=[]),u=Yc(ye,u,a),a=$,(Ru===null?a.memoizedState:Ru.next)===null&&(a=a.alternate,B.H=a===null||a.memoizedState===null?zs:ks),u}function ml(u){if(u!==null&&typeof u=="object"){if(typeof u.then=="function")return sn(u);if(u.$$typeof===nu)return Ku(u)}throw Error(o(438,String(u)))}function ii(u){var a=null,t=$.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var e=$.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(a={data:e.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=ri(),$.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(u),e=0;e<u;e++)t[e]=Fa;return a.index++,t}function Za(u,a){return typeof a=="function"?a(u):a}function gl(u){var a=Mu();return oi(a,hu,u)}function oi(u,a,t){var e=u.queue;if(e===null)throw Error(o(311));e.lastRenderedReducer=t;var n=u.baseQueue,l=e.pending;if(l!==null){if(n!==null){var r=n.next;n.next=l.next,l.next=r}a.baseQueue=n=l,e.pending=null}if(l=u.baseState,n===null)u.memoizedState=l;else{a=n.next;var s=r=null,d=null,D=a,S=!1;do{var T=D.lane&-536870913;if(T!==D.lane?(eu&T)===T:(st&T)===T){var y=D.revertLane;if(y===0)d!==null&&(d=d.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),T===me&&(S=!0);else if((st&y)===y){D=D.next,y===me&&(S=!0);continue}else T={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},d===null?(s=d=T,r=l):d=d.next=T,$.lanes|=y,gt|=y;T=D.action,Vt&&t(l,T),l=D.hasEagerState?D.eagerState:t(l,T)}else y={lane:T,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},d===null?(s=d=y,r=l):d=d.next=y,$.lanes|=T,gt|=T;D=D.next}while(D!==null&&D!==a);if(d===null?r=l:d.next=s,!na(l,u.memoizedState)&&(Gu=!0,S&&(t=ge,t!==null)))throw t;u.memoizedState=l,u.baseState=r,u.baseQueue=d,e.lastRenderedState=l}return n===null&&(e.lanes=0),[u.memoizedState,e.dispatch]}function ci(u){var a=Mu(),t=a.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=u;var e=t.dispatch,n=t.pending,l=a.memoizedState;if(n!==null){t.pending=null;var r=n=n.next;do l=u(l,r.action),r=r.next;while(r!==n);na(l,a.memoizedState)||(Gu=!0),a.memoizedState=l,a.baseQueue===null&&(a.baseState=l),t.lastRenderedState=l}return[l,e]}function Wc(u,a,t){var e=$,n=Mu(),l=ru;if(l){if(t===void 0)throw Error(o(407));t=t()}else t=a();var r=!na((hu||n).memoizedState,t);r&&(n.memoizedState=t,Gu=!0),n=n.queue;var s=us.bind(null,e,n,u);if(fn(2048,8,s,[u]),n.getSnapshot!==a||r||Ru!==null&&Ru.memoizedState.tag&1){if(e.flags|=2048,Ae(9,vl(),Ic.bind(null,e,n,t,a),null),vu===null)throw Error(o(349));l||(st&124)!==0||$c(e,a,t)}return t}function $c(u,a,t){u.flags|=16384,u={getSnapshot:a,value:t},a=$.updateQueue,a===null?(a=ri(),$.updateQueue=a,a.stores=[u]):(t=a.stores,t===null?a.stores=[u]:t.push(u))}function Ic(u,a,t,e){a.value=t,a.getSnapshot=e,as(a)&&ts(u)}function us(u,a,t){return t(function(){as(a)&&ts(u)})}function as(u){var a=u.getSnapshot;u=u.value;try{var t=a();return!na(u,t)}catch{return!0}}function ts(u){var a=de(u,2);a!==null&&sa(a,u,2)}function si(u){var a=Iu();if(typeof u=="function"){var t=u;if(u=t(),Vt){et(!0);try{t()}finally{et(!1)}}}return a.memoizedState=a.baseState=u,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:u},a}function es(u,a,t,e){return u.baseState=t,oi(u,hu,typeof e=="function"?e:Za)}function od(u,a,t,e,n){if(yl(u))throw Error(o(485));if(u=a.action,u!==null){var l={payload:n,action:u,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){l.listeners.push(r)}};B.T!==null?t(!0):l.isTransition=!1,e(l),t=a.pending,t===null?(l.next=a.pending=l,ns(a,l)):(l.next=t.next,a.pending=t.next=l)}}function ns(u,a){var t=a.action,e=a.payload,n=u.state;if(a.isTransition){var l=B.T,r={};B.T=r;try{var s=t(n,e),d=B.S;d!==null&&d(r,s),ls(u,a,s)}catch(D){fi(u,a,D)}finally{B.T=l}}else try{l=t(n,e),ls(u,a,l)}catch(D){fi(u,a,D)}}function ls(u,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(e){rs(u,a,e)},function(e){return fi(u,a,e)}):rs(u,a,t)}function rs(u,a,t){a.status="fulfilled",a.value=t,is(a),u.state=t,a=u.pending,a!==null&&(t=a.next,t===a?u.pending=null:(t=t.next,a.next=t,ns(u,t)))}function fi(u,a,t){var e=u.pending;if(u.pending=null,e!==null){e=e.next;do a.status="rejected",a.reason=t,is(a),a=a.next;while(a!==e)}u.action=null}function is(u){u=u.listeners;for(var a=0;a<u.length;a++)(0,u[a])()}function os(u,a){return a}function cs(u,a){if(ru){var t=vu.formState;if(t!==null){u:{var e=$;if(ru){if(qu){a:{for(var n=qu,l=ka;n.nodeType!==8;){if(!l){n=null;break a}if(n=Oa(n.nextSibling),n===null){n=null;break a}}l=n.data,n=l==="F!"||l==="F"?n:null}if(n){qu=Oa(n.nextSibling),e=n.data==="F!";break u}}Ft(e)}e=!1}e&&(a=t[0])}}return t=Iu(),t.memoizedState=t.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:a},t.queue=e,t=Os.bind(null,$,e),e.dispatch=t,e=si(!1),l=mi.bind(null,$,!1,e.queue),e=Iu(),n={state:a,dispatch:null,action:u,pending:null},e.queue=n,t=od.bind(null,$,n,l,t),n.dispatch=t,e.memoizedState=u,[a,t,!1]}function ss(u){var a=Mu();return fs(a,hu,u)}function fs(u,a,t){if(a=oi(u,a,os)[0],u=gl(Za)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var e=sn(a)}catch(r){throw r===en?fl:r}else e=a;a=Mu();var n=a.queue,l=n.dispatch;return t!==a.memoizedState&&($.flags|=2048,Ae(9,vl(),cd.bind(null,n,t),null)),[e,l,u]}function cd(u,a){u.action=a}function ds(u){var a=Mu(),t=hu;if(t!==null)return fs(a,t,u);Mu(),a=a.memoizedState,t=Mu();var e=t.queue.dispatch;return t.memoizedState=u,[a,e,!1]}function Ae(u,a,t,e){return u={tag:u,create:t,deps:e,inst:a,next:null},a=$.updateQueue,a===null&&(a=ri(),$.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=u.next=u:(e=t.next,t.next=u,u.next=e,a.lastEffect=u),u}function vl(){return{destroy:void 0,resource:void 0}}function hs(){return Mu().memoizedState}function Dl(u,a,t,e){var n=Iu();e=e===void 0?null:e,$.flags|=u,n.memoizedState=Ae(1|a,vl(),t,e)}function fn(u,a,t,e){var n=Mu();e=e===void 0?null:e;var l=n.memoizedState.inst;hu!==null&&e!==null&&ai(e,hu.memoizedState.deps)?n.memoizedState=Ae(a,l,t,e):($.flags|=u,n.memoizedState=Ae(1|a,l,t,e))}function ps(u,a){Dl(8390656,8,u,a)}function bs(u,a){fn(2048,8,u,a)}function ms(u,a){return fn(4,2,u,a)}function gs(u,a){return fn(4,4,u,a)}function vs(u,a){if(typeof a=="function"){u=u();var t=a(u);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return u=u(),a.current=u,function(){a.current=null}}function Ds(u,a,t){t=t!=null?t.concat([u]):null,fn(4,4,vs.bind(null,a,u),t)}function di(){}function ys(u,a){var t=Mu();a=a===void 0?null:a;var e=t.memoizedState;return a!==null&&ai(a,e[1])?e[0]:(t.memoizedState=[u,a],u)}function As(u,a){var t=Mu();a=a===void 0?null:a;var e=t.memoizedState;if(a!==null&&ai(a,e[1]))return e[0];if(e=u(),Vt){et(!0);try{u()}finally{et(!1)}}return t.memoizedState=[e,a],e}function hi(u,a,t){return t===void 0||(st&1073741824)!==0?u.memoizedState=a:(u.memoizedState=t,u=C2(),$.lanes|=u,gt|=u,t)}function xs(u,a,t,e){return na(t,a)?t:ve.current!==null?(u=hi(u,t,e),na(u,a)||(Gu=!0),u):(st&42)===0?(Gu=!0,u.memoizedState=t):(u=C2(),$.lanes|=u,gt|=u,a)}function Es(u,a,t,e,n){var l=_.p;_.p=l!==0&&8>l?l:8;var r=B.T,s={};B.T=s,mi(u,!1,a,t);try{var d=n(),D=B.S;if(D!==null&&D(s,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var S=ld(d,e);dn(u,a,S,ca(u))}else dn(u,a,e,ca(u))}catch(T){dn(u,a,{then:function(){},status:"rejected",reason:T},ca())}finally{_.p=l,B.T=r}}function sd(){}function pi(u,a,t,e){if(u.tag!==5)throw Error(o(476));var n=Cs(u).queue;Es(u,n,a,Y,t===null?sd:function(){return Bs(u),t(e)})}function Cs(u){var a=u.memoizedState;if(a!==null)return a;a={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:Y},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:t},next:null},u.memoizedState=a,u=u.alternate,u!==null&&(u.memoizedState=a),a}function Bs(u){var a=Cs(u).next.queue;dn(u,a,{},ca())}function bi(){return Ku(wn)}function Ss(){return Mu().memoizedState}function qs(){return Mu().memoizedState}function fd(u){for(var a=u.return;a!==null;){switch(a.tag){case 24:case 3:var t=ca();u=ot(t);var e=ct(a,u,t);e!==null&&(sa(e,a,t),ln(e,a,t)),a={cache:Xr()},u.payload=a;return}a=a.return}}function dd(u,a,t){var e=ca();t={lane:e,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},yl(u)?Ts(a,t):(t=_r(u,a,t,e),t!==null&&(sa(t,u,e),ws(t,a,e)))}function Os(u,a,t){var e=ca();dn(u,a,t,e)}function dn(u,a,t,e){var n={lane:e,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(yl(u))Ts(a,n);else{var l=u.alternate;if(u.lanes===0&&(l===null||l.lanes===0)&&(l=a.lastRenderedReducer,l!==null))try{var r=a.lastRenderedState,s=l(r,t);if(n.hasEagerState=!0,n.eagerState=s,na(s,r))return el(u,a,n,0),vu===null&&tl(),!1}catch{}finally{}if(t=_r(u,a,n,e),t!==null)return sa(t,u,e),ws(t,a,e),!0}return!1}function mi(u,a,t,e){if(e={lane:2,revertLane:Ki(),action:e,hasEagerState:!1,eagerState:null,next:null},yl(u)){if(a)throw Error(o(479))}else a=_r(u,t,e,2),a!==null&&sa(a,u,2)}function yl(u){var a=u.alternate;return u===$||a!==null&&a===$}function Ts(u,a){De=pl=!0;var t=u.pending;t===null?a.next=a:(a.next=t.next,t.next=a),u.pending=a}function ws(u,a,t){if((t&4194048)!==0){var e=a.lanes;e&=u.pendingLanes,t|=e,a.lanes=t,Fo(u,t)}}var Al={readContext:Ku,use:ml,useCallback:zu,useContext:zu,useEffect:zu,useImperativeHandle:zu,useLayoutEffect:zu,useInsertionEffect:zu,useMemo:zu,useReducer:zu,useRef:zu,useState:zu,useDebugValue:zu,useDeferredValue:zu,useTransition:zu,useSyncExternalStore:zu,useId:zu,useHostTransitionStatus:zu,useFormState:zu,useActionState:zu,useOptimistic:zu,useMemoCache:zu,useCacheRefresh:zu},zs={readContext:Ku,use:ml,useCallback:function(u,a){return Iu().memoizedState=[u,a===void 0?null:a],u},useContext:Ku,useEffect:ps,useImperativeHandle:function(u,a,t){t=t!=null?t.concat([u]):null,Dl(4194308,4,vs.bind(null,a,u),t)},useLayoutEffect:function(u,a){return Dl(4194308,4,u,a)},useInsertionEffect:function(u,a){Dl(4,2,u,a)},useMemo:function(u,a){var t=Iu();a=a===void 0?null:a;var e=u();if(Vt){et(!0);try{u()}finally{et(!1)}}return t.memoizedState=[e,a],e},useReducer:function(u,a,t){var e=Iu();if(t!==void 0){var n=t(a);if(Vt){et(!0);try{t(a)}finally{et(!1)}}}else n=a;return e.memoizedState=e.baseState=n,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:u,lastRenderedState:n},e.queue=u,u=u.dispatch=dd.bind(null,$,u),[e.memoizedState,u]},useRef:function(u){var a=Iu();return u={current:u},a.memoizedState=u},useState:function(u){u=si(u);var a=u.queue,t=Os.bind(null,$,a);return a.dispatch=t,[u.memoizedState,t]},useDebugValue:di,useDeferredValue:function(u,a){var t=Iu();return hi(t,u,a)},useTransition:function(){var u=si(!1);return u=Es.bind(null,$,u.queue,!0,!1),Iu().memoizedState=u,[!1,u]},useSyncExternalStore:function(u,a,t){var e=$,n=Iu();if(ru){if(t===void 0)throw Error(o(407));t=t()}else{if(t=a(),vu===null)throw Error(o(349));(eu&124)!==0||$c(e,a,t)}n.memoizedState=t;var l={value:t,getSnapshot:a};return n.queue=l,ps(us.bind(null,e,l,u),[u]),e.flags|=2048,Ae(9,vl(),Ic.bind(null,e,l,t,a),null),t},useId:function(){var u=Iu(),a=vu.identifierPrefix;if(ru){var t=ja,e=Ya;t=(e&~(1<<32-ea(e)-1)).toString(32)+t,a="«"+a+"R"+t,t=bl++,0<t&&(a+="H"+t.toString(32)),a+="»"}else t=rd++,a="«"+a+"r"+t.toString(32)+"»";return u.memoizedState=a},useHostTransitionStatus:bi,useFormState:cs,useActionState:cs,useOptimistic:function(u){var a=Iu();a.memoizedState=a.baseState=u;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=mi.bind(null,$,!0,t),t.dispatch=a,[u,a]},useMemoCache:ii,useCacheRefresh:function(){return Iu().memoizedState=fd.bind(null,$)}},ks={readContext:Ku,use:ml,useCallback:ys,useContext:Ku,useEffect:bs,useImperativeHandle:Ds,useInsertionEffect:ms,useLayoutEffect:gs,useMemo:As,useReducer:gl,useRef:hs,useState:function(){return gl(Za)},useDebugValue:di,useDeferredValue:function(u,a){var t=Mu();return xs(t,hu.memoizedState,u,a)},useTransition:function(){var u=gl(Za)[0],a=Mu().memoizedState;return[typeof u=="boolean"?u:sn(u),a]},useSyncExternalStore:Wc,useId:Ss,useHostTransitionStatus:bi,useFormState:ss,useActionState:ss,useOptimistic:function(u,a){var t=Mu();return es(t,hu,u,a)},useMemoCache:ii,useCacheRefresh:qs},hd={readContext:Ku,use:ml,useCallback:ys,useContext:Ku,useEffect:bs,useImperativeHandle:Ds,useInsertionEffect:ms,useLayoutEffect:gs,useMemo:As,useReducer:ci,useRef:hs,useState:function(){return ci(Za)},useDebugValue:di,useDeferredValue:function(u,a){var t=Mu();return hu===null?hi(t,u,a):xs(t,hu.memoizedState,u,a)},useTransition:function(){var u=ci(Za)[0],a=Mu().memoizedState;return[typeof u=="boolean"?u:sn(u),a]},useSyncExternalStore:Wc,useId:Ss,useHostTransitionStatus:bi,useFormState:ds,useActionState:ds,useOptimistic:function(u,a){var t=Mu();return hu!==null?es(t,hu,u,a):(t.baseState=u,[u,t.queue.dispatch])},useMemoCache:ii,useCacheRefresh:qs},xe=null,hn=0;function xl(u){var a=hn;return hn+=1,xe===null&&(xe=[]),Yc(xe,u,a)}function pn(u,a){a=a.props.ref,u.ref=a!==void 0?a:null}function El(u,a){throw a.$$typeof===F?Error(o(525)):(u=Object.prototype.toString.call(a),Error(o(31,u==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":u)))}function Rs(u){var a=u._init;return a(u._payload)}function Ms(u){function a(g,m){if(u){var v=g.deletions;v===null?(g.deletions=[m],g.flags|=16):v.push(m)}}function t(g,m){if(!u)return null;for(;m!==null;)a(g,m),m=m.sibling;return null}function e(g){for(var m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function n(g,m){return g=Va(g,m),g.index=0,g.sibling=null,g}function l(g,m,v){return g.index=v,u?(v=g.alternate,v!==null?(v=v.index,v<m?(g.flags|=67108866,m):v):(g.flags|=67108866,m)):(g.flags|=1048576,m)}function r(g){return u&&g.alternate===null&&(g.flags|=67108866),g}function s(g,m,v,q){return m===null||m.tag!==6?(m=Nr(v,g.mode,q),m.return=g,m):(m=n(m,v),m.return=g,m)}function d(g,m,v,q){var N=v.type;return N===j?S(g,m,v.props.children,q,v.key):m!==null&&(m.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Tu&&Rs(N)===m.type)?(m=n(m,v.props),pn(m,v),m.return=g,m):(m=ll(v.type,v.key,v.props,null,g.mode,q),pn(m,v),m.return=g,m)}function D(g,m,v,q){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Fr(v,g.mode,q),m.return=g,m):(m=n(m,v.children||[]),m.return=g,m)}function S(g,m,v,q,N){return m===null||m.tag!==7?(m=Mt(v,g.mode,q,N),m.return=g,m):(m=n(m,v),m.return=g,m)}function T(g,m,v){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Nr(""+m,g.mode,v),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case V:return v=ll(m.type,m.key,m.props,null,g.mode,v),pn(v,m),v.return=g,v;case fu:return m=Fr(m,g.mode,v),m.return=g,m;case Tu:var q=m._init;return m=q(m._payload),T(g,m,v)}if(wu(m)||Fu(m))return m=Mt(m,g.mode,v,null),m.return=g,m;if(typeof m.then=="function")return T(g,xl(m),v);if(m.$$typeof===nu)return T(g,cl(g,m),v);El(g,m)}return null}function y(g,m,v,q){var N=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return N!==null?null:s(g,m,""+v,q);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case V:return v.key===N?d(g,m,v,q):null;case fu:return v.key===N?D(g,m,v,q):null;case Tu:return N=v._init,v=N(v._payload),y(g,m,v,q)}if(wu(v)||Fu(v))return N!==null?null:S(g,m,v,q,null);if(typeof v.then=="function")return y(g,m,xl(v),q);if(v.$$typeof===nu)return y(g,m,cl(g,v),q);El(g,v)}return null}function A(g,m,v,q,N){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return g=g.get(v)||null,s(m,g,""+q,N);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case V:return g=g.get(q.key===null?v:q.key)||null,d(m,g,q,N);case fu:return g=g.get(q.key===null?v:q.key)||null,D(m,g,q,N);case Tu:var I=q._init;return q=I(q._payload),A(g,m,v,q,N)}if(wu(q)||Fu(q))return g=g.get(v)||null,S(m,g,q,N,null);if(typeof q.then=="function")return A(g,m,v,xl(q),N);if(q.$$typeof===nu)return A(g,m,v,cl(m,q),N);El(m,q)}return null}function J(g,m,v,q){for(var N=null,I=null,L=m,Z=m=0,Yu=null;L!==null&&Z<v.length;Z++){L.index>Z?(Yu=L,L=null):Yu=L.sibling;var lu=y(g,L,v[Z],q);if(lu===null){L===null&&(L=Yu);break}u&&L&&lu.alternate===null&&a(g,L),m=l(lu,m,Z),I===null?N=lu:I.sibling=lu,I=lu,L=Yu}if(Z===v.length)return t(g,L),ru&&Ut(g,Z),N;if(L===null){for(;Z<v.length;Z++)L=T(g,v[Z],q),L!==null&&(m=l(L,m,Z),I===null?N=L:I.sibling=L,I=L);return ru&&Ut(g,Z),N}for(L=e(L);Z<v.length;Z++)Yu=A(L,g,Z,v[Z],q),Yu!==null&&(u&&Yu.alternate!==null&&L.delete(Yu.key===null?Z:Yu.key),m=l(Yu,m,Z),I===null?N=Yu:I.sibling=Yu,I=Yu);return u&&L.forEach(function(St){return a(g,St)}),ru&&Ut(g,Z),N}function Q(g,m,v,q){if(v==null)throw Error(o(151));for(var N=null,I=null,L=m,Z=m=0,Yu=null,lu=v.next();L!==null&&!lu.done;Z++,lu=v.next()){L.index>Z?(Yu=L,L=null):Yu=L.sibling;var St=y(g,L,lu.value,q);if(St===null){L===null&&(L=Yu);break}u&&L&&St.alternate===null&&a(g,L),m=l(St,m,Z),I===null?N=St:I.sibling=St,I=St,L=Yu}if(lu.done)return t(g,L),ru&&Ut(g,Z),N;if(L===null){for(;!lu.done;Z++,lu=v.next())lu=T(g,lu.value,q),lu!==null&&(m=l(lu,m,Z),I===null?N=lu:I.sibling=lu,I=lu);return ru&&Ut(g,Z),N}for(L=e(L);!lu.done;Z++,lu=v.next())lu=A(L,g,Z,lu.value,q),lu!==null&&(u&&lu.alternate!==null&&L.delete(lu.key===null?Z:lu.key),m=l(lu,m,Z),I===null?N=lu:I.sibling=lu,I=lu);return u&&L.forEach(function(p1){return a(g,p1)}),ru&&Ut(g,Z),N}function bu(g,m,v,q){if(typeof v=="object"&&v!==null&&v.type===j&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case V:u:{for(var N=v.key;m!==null;){if(m.key===N){if(N=v.type,N===j){if(m.tag===7){t(g,m.sibling),q=n(m,v.props.children),q.return=g,g=q;break u}}else if(m.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Tu&&Rs(N)===m.type){t(g,m.sibling),q=n(m,v.props),pn(q,v),q.return=g,g=q;break u}t(g,m);break}else a(g,m);m=m.sibling}v.type===j?(q=Mt(v.props.children,g.mode,q,v.key),q.return=g,g=q):(q=ll(v.type,v.key,v.props,null,g.mode,q),pn(q,v),q.return=g,g=q)}return r(g);case fu:u:{for(N=v.key;m!==null;){if(m.key===N)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){t(g,m.sibling),q=n(m,v.children||[]),q.return=g,g=q;break u}else{t(g,m);break}else a(g,m);m=m.sibling}q=Fr(v,g.mode,q),q.return=g,g=q}return r(g);case Tu:return N=v._init,v=N(v._payload),bu(g,m,v,q)}if(wu(v))return J(g,m,v,q);if(Fu(v)){if(N=Fu(v),typeof N!="function")throw Error(o(150));return v=N.call(v),Q(g,m,v,q)}if(typeof v.then=="function")return bu(g,m,xl(v),q);if(v.$$typeof===nu)return bu(g,m,cl(g,v),q);El(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,m!==null&&m.tag===6?(t(g,m.sibling),q=n(m,v),q.return=g,g=q):(t(g,m),q=Nr(v,g.mode,q),q.return=g,g=q),r(g)):t(g,m)}return function(g,m,v,q){try{hn=0;var N=bu(g,m,v,q);return xe=null,N}catch(L){if(L===en||L===fl)throw L;var I=la(29,L,null,g.mode);return I.lanes=q,I.return=g,I}finally{}}}var Ee=Ms(!0),_s=Ms(!1),Aa=C(null),Ra=null;function ft(u){var a=u.alternate;M(Uu,Uu.current&1),M(Aa,u),Ra===null&&(a===null||ve.current!==null||a.memoizedState!==null)&&(Ra=u)}function Us(u){if(u.tag===22){if(M(Uu,Uu.current),M(Aa,u),Ra===null){var a=u.alternate;a!==null&&a.memoizedState!==null&&(Ra=u)}}else dt()}function dt(){M(Uu,Uu.current),M(Aa,Aa.current)}function Ka(u){R(Aa),Ra===u&&(Ra=null),R(Uu)}var Uu=C(0);function Cl(u){for(var a=u;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||ro(t)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===u)break;for(;a.sibling===null;){if(a.return===null||a.return===u)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function gi(u,a,t,e){a=u.memoizedState,t=t(e,a),t=t==null?a:w({},a,t),u.memoizedState=t,u.lanes===0&&(u.updateQueue.baseState=t)}var vi={enqueueSetState:function(u,a,t){u=u._reactInternals;var e=ca(),n=ot(e);n.payload=a,t!=null&&(n.callback=t),a=ct(u,n,e),a!==null&&(sa(a,u,e),ln(a,u,e))},enqueueReplaceState:function(u,a,t){u=u._reactInternals;var e=ca(),n=ot(e);n.tag=1,n.payload=a,t!=null&&(n.callback=t),a=ct(u,n,e),a!==null&&(sa(a,u,e),ln(a,u,e))},enqueueForceUpdate:function(u,a){u=u._reactInternals;var t=ca(),e=ot(t);e.tag=2,a!=null&&(e.callback=a),a=ct(u,e,t),a!==null&&(sa(a,u,t),ln(a,u,t))}};function Ns(u,a,t,e,n,l,r){return u=u.stateNode,typeof u.shouldComponentUpdate=="function"?u.shouldComponentUpdate(e,l,r):a.prototype&&a.prototype.isPureReactComponent?!Je(t,e)||!Je(n,l):!0}function Fs(u,a,t,e){u=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,e),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,e),a.state!==u&&vi.enqueueReplaceState(a,a.state,null)}function Yt(u,a){var t=a;if("ref"in a){t={};for(var e in a)e!=="ref"&&(t[e]=a[e])}if(u=u.defaultProps){t===a&&(t=w({},t));for(var n in u)t[n]===void 0&&(t[n]=u[n])}return t}var Bl=typeof reportError=="function"?reportError:function(u){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u),error:u});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",u);return}console.error(u)};function Hs(u){Bl(u)}function Ls(u){console.error(u)}function Gs(u){Bl(u)}function Sl(u,a){try{var t=u.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(e){setTimeout(function(){throw e})}}function Vs(u,a,t){try{var e=u.onCaughtError;e(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Di(u,a,t){return t=ot(t),t.tag=3,t.payload={element:null},t.callback=function(){Sl(u,a)},t}function Ys(u){return u=ot(u),u.tag=3,u}function js(u,a,t,e){var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var l=e.value;u.payload=function(){return n(l)},u.callback=function(){Vs(a,t,e)}}var r=t.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(u.callback=function(){Vs(a,t,e),typeof n!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})})}function pd(u,a,t,e,n){if(t.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(a=t.alternate,a!==null&&un(a,t,n,!0),t=Aa.current,t!==null){switch(t.tag){case 13:return Ra===null?Yi():t.alternate===null&&Ou===0&&(Ou=3),t.flags&=-257,t.flags|=65536,t.lanes=n,e===Kr?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([e]):a.add(e),Xi(u,e,n)),!1;case 22:return t.flags|=65536,e===Kr?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([e])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([e]):t.add(e)),Xi(u,e,n)),!1}throw Error(o(435,t.tag))}return Xi(u,e,n),Yi(),!1}if(ru)return a=Aa.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,e!==Gr&&(u=Error(o(422),{cause:e}),Ie(ga(u,t)))):(e!==Gr&&(a=Error(o(423),{cause:e}),Ie(ga(a,t))),u=u.current.alternate,u.flags|=65536,n&=-n,u.lanes|=n,e=ga(e,t),n=Di(u.stateNode,e,n),Wr(u,n),Ou!==4&&(Ou=2)),!1;var l=Error(o(520),{cause:e});if(l=ga(l,t),An===null?An=[l]:An.push(l),Ou!==4&&(Ou=2),a===null)return!0;e=ga(e,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,u=n&-n,t.lanes|=u,u=Di(t.stateNode,e,u),Wr(t,u),!1;case 1:if(a=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(vt===null||!vt.has(l))))return t.flags|=65536,n&=-n,t.lanes|=n,n=Ys(n),js(n,u,t,e),Wr(t,n),!1}t=t.return}while(t!==null);return!1}var Xs=Error(o(461)),Gu=!1;function ju(u,a,t,e){a.child=u===null?_s(a,null,t,e):Ee(a,u.child,t,e)}function Qs(u,a,t,e,n){t=t.render;var l=a.ref;if("ref"in e){var r={};for(var s in e)s!=="ref"&&(r[s]=e[s])}else r=e;return Lt(a),e=ti(u,a,t,r,l,n),s=ei(),u!==null&&!Gu?(ni(u,a,n),Ja(u,a,n)):(ru&&s&&Hr(a),a.flags|=1,ju(u,a,e,n),a.child)}function Zs(u,a,t,e,n){if(u===null){var l=t.type;return typeof l=="function"&&!Ur(l)&&l.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=l,Ks(u,a,l,e,n)):(u=ll(t.type,null,e,a,a.mode,n),u.ref=a.ref,u.return=a,a.child=u)}if(l=u.child,!qi(u,n)){var r=l.memoizedProps;if(t=t.compare,t=t!==null?t:Je,t(r,e)&&u.ref===a.ref)return Ja(u,a,n)}return a.flags|=1,u=Va(l,e),u.ref=a.ref,u.return=a,a.child=u}function Ks(u,a,t,e,n){if(u!==null){var l=u.memoizedProps;if(Je(l,e)&&u.ref===a.ref)if(Gu=!1,a.pendingProps=e=l,qi(u,n))(u.flags&131072)!==0&&(Gu=!0);else return a.lanes=u.lanes,Ja(u,a,n)}return yi(u,a,t,e,n)}function Js(u,a,t){var e=a.pendingProps,n=e.children,l=u!==null?u.memoizedState:null;if(e.mode==="hidden"){if((a.flags&128)!==0){if(e=l!==null?l.baseLanes|t:t,u!==null){for(n=a.child=u.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;a.childLanes=l&~e}else a.childLanes=0,a.child=null;return Ps(u,a,e,t)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},u!==null&&sl(a,l!==null?l.cachePool:null),l!==null?Kc(a,l):Ir(),Us(a);else return a.lanes=a.childLanes=536870912,Ps(u,a,l!==null?l.baseLanes|t:t,t)}else l!==null?(sl(a,l.cachePool),Kc(a,l),dt(),a.memoizedState=null):(u!==null&&sl(a,null),Ir(),dt());return ju(u,a,n,t),a.child}function Ps(u,a,t,e){var n=Zr();return n=n===null?null:{parent:_u._currentValue,pool:n},a.memoizedState={baseLanes:t,cachePool:n},u!==null&&sl(a,null),Ir(),Us(a),u!==null&&un(u,a,e,!0),null}function ql(u,a){var t=a.ref;if(t===null)u!==null&&u.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(o(284));(u===null||u.ref!==t)&&(a.flags|=4194816)}}function yi(u,a,t,e,n){return Lt(a),t=ti(u,a,t,e,void 0,n),e=ei(),u!==null&&!Gu?(ni(u,a,n),Ja(u,a,n)):(ru&&e&&Hr(a),a.flags|=1,ju(u,a,t,n),a.child)}function Ws(u,a,t,e,n,l){return Lt(a),a.updateQueue=null,t=Pc(a,e,t,n),Jc(u),e=ei(),u!==null&&!Gu?(ni(u,a,l),Ja(u,a,l)):(ru&&e&&Hr(a),a.flags|=1,ju(u,a,t,l),a.child)}function $s(u,a,t,e,n){if(Lt(a),a.stateNode===null){var l=he,r=t.contextType;typeof r=="object"&&r!==null&&(l=Ku(r)),l=new t(e,l),a.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=vi,a.stateNode=l,l._reactInternals=a,l=a.stateNode,l.props=e,l.state=a.memoizedState,l.refs={},Jr(a),r=t.contextType,l.context=typeof r=="object"&&r!==null?Ku(r):he,l.state=a.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(gi(a,t,r,e),l.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&vi.enqueueReplaceState(l,l.state,null),on(a,e,l,n),rn(),l.state=a.memoizedState),typeof l.componentDidMount=="function"&&(a.flags|=4194308),e=!0}else if(u===null){l=a.stateNode;var s=a.memoizedProps,d=Yt(t,s);l.props=d;var D=l.context,S=t.contextType;r=he,typeof S=="object"&&S!==null&&(r=Ku(S));var T=t.getDerivedStateFromProps;S=typeof T=="function"||typeof l.getSnapshotBeforeUpdate=="function",s=a.pendingProps!==s,S||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s||D!==r)&&Fs(a,l,e,r),it=!1;var y=a.memoizedState;l.state=y,on(a,e,l,n),rn(),D=a.memoizedState,s||y!==D||it?(typeof T=="function"&&(gi(a,t,T,e),D=a.memoizedState),(d=it||Ns(a,t,d,e,y,D,r))?(S||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(a.flags|=4194308)):(typeof l.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=e,a.memoizedState=D),l.props=e,l.state=D,l.context=r,e=d):(typeof l.componentDidMount=="function"&&(a.flags|=4194308),e=!1)}else{l=a.stateNode,Pr(u,a),r=a.memoizedProps,S=Yt(t,r),l.props=S,T=a.pendingProps,y=l.context,D=t.contextType,d=he,typeof D=="object"&&D!==null&&(d=Ku(D)),s=t.getDerivedStateFromProps,(D=typeof s=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r!==T||y!==d)&&Fs(a,l,e,d),it=!1,y=a.memoizedState,l.state=y,on(a,e,l,n),rn();var A=a.memoizedState;r!==T||y!==A||it||u!==null&&u.dependencies!==null&&ol(u.dependencies)?(typeof s=="function"&&(gi(a,t,s,e),A=a.memoizedState),(S=it||Ns(a,t,S,e,y,A,d)||u!==null&&u.dependencies!==null&&ol(u.dependencies))?(D||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(e,A,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(e,A,d)),typeof l.componentDidUpdate=="function"&&(a.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof l.componentDidUpdate!="function"||r===u.memoizedProps&&y===u.memoizedState||(a.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===u.memoizedProps&&y===u.memoizedState||(a.flags|=1024),a.memoizedProps=e,a.memoizedState=A),l.props=e,l.state=A,l.context=d,e=S):(typeof l.componentDidUpdate!="function"||r===u.memoizedProps&&y===u.memoizedState||(a.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===u.memoizedProps&&y===u.memoizedState||(a.flags|=1024),e=!1)}return l=e,ql(u,a),e=(a.flags&128)!==0,l||e?(l=a.stateNode,t=e&&typeof t.getDerivedStateFromError!="function"?null:l.render(),a.flags|=1,u!==null&&e?(a.child=Ee(a,u.child,null,n),a.child=Ee(a,null,t,n)):ju(u,a,t,n),a.memoizedState=l.state,u=a.child):u=Ja(u,a,n),u}function Is(u,a,t,e){return $e(),a.flags|=256,ju(u,a,t,e),a.child}var Ai={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xi(u){return{baseLanes:u,cachePool:Lc()}}function Ei(u,a,t){return u=u!==null?u.childLanes&~t:0,a&&(u|=xa),u}function u2(u,a,t){var e=a.pendingProps,n=!1,l=(a.flags&128)!==0,r;if((r=l)||(r=u!==null&&u.memoizedState===null?!1:(Uu.current&2)!==0),r&&(n=!0,a.flags&=-129),r=(a.flags&32)!==0,a.flags&=-33,u===null){if(ru){if(n?ft(a):dt(),ru){var s=qu,d;if(d=s){u:{for(d=s,s=ka;d.nodeType!==8;){if(!s){s=null;break u}if(d=Oa(d.nextSibling),d===null){s=null;break u}}s=d}s!==null?(a.memoizedState={dehydrated:s,treeContext:_t!==null?{id:Ya,overflow:ja}:null,retryLane:536870912,hydrationErrors:null},d=la(18,null,null,0),d.stateNode=s,d.return=a,a.child=d,Pu=a,qu=null,d=!0):d=!1}d||Ft(a)}if(s=a.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return ro(s)?a.lanes=32:a.lanes=536870912,null;Ka(a)}return s=e.children,e=e.fallback,n?(dt(),n=a.mode,s=Ol({mode:"hidden",children:s},n),e=Mt(e,n,t,null),s.return=a,e.return=a,s.sibling=e,a.child=s,n=a.child,n.memoizedState=xi(t),n.childLanes=Ei(u,r,t),a.memoizedState=Ai,e):(ft(a),Ci(a,s))}if(d=u.memoizedState,d!==null&&(s=d.dehydrated,s!==null)){if(l)a.flags&256?(ft(a),a.flags&=-257,a=Bi(u,a,t)):a.memoizedState!==null?(dt(),a.child=u.child,a.flags|=128,a=null):(dt(),n=e.fallback,s=a.mode,e=Ol({mode:"visible",children:e.children},s),n=Mt(n,s,t,null),n.flags|=2,e.return=a,n.return=a,e.sibling=n,a.child=e,Ee(a,u.child,null,t),e=a.child,e.memoizedState=xi(t),e.childLanes=Ei(u,r,t),a.memoizedState=Ai,a=n);else if(ft(a),ro(s)){if(r=s.nextSibling&&s.nextSibling.dataset,r)var D=r.dgst;r=D,e=Error(o(419)),e.stack="",e.digest=r,Ie({value:e,source:null,stack:null}),a=Bi(u,a,t)}else if(Gu||un(u,a,t,!1),r=(t&u.childLanes)!==0,Gu||r){if(r=vu,r!==null&&(e=t&-t,e=(e&42)!==0?1:ir(e),e=(e&(r.suspendedLanes|t))!==0?0:e,e!==0&&e!==d.retryLane))throw d.retryLane=e,de(u,e),sa(r,u,e),Xs;s.data==="$?"||Yi(),a=Bi(u,a,t)}else s.data==="$?"?(a.flags|=192,a.child=u.child,a=null):(u=d.treeContext,qu=Oa(s.nextSibling),Pu=a,ru=!0,Nt=null,ka=!1,u!==null&&(Da[ya++]=Ya,Da[ya++]=ja,Da[ya++]=_t,Ya=u.id,ja=u.overflow,_t=a),a=Ci(a,e.children),a.flags|=4096);return a}return n?(dt(),n=e.fallback,s=a.mode,d=u.child,D=d.sibling,e=Va(d,{mode:"hidden",children:e.children}),e.subtreeFlags=d.subtreeFlags&65011712,D!==null?n=Va(D,n):(n=Mt(n,s,t,null),n.flags|=2),n.return=a,e.return=a,e.sibling=n,a.child=e,e=n,n=a.child,s=u.child.memoizedState,s===null?s=xi(t):(d=s.cachePool,d!==null?(D=_u._currentValue,d=d.parent!==D?{parent:D,pool:D}:d):d=Lc(),s={baseLanes:s.baseLanes|t,cachePool:d}),n.memoizedState=s,n.childLanes=Ei(u,r,t),a.memoizedState=Ai,e):(ft(a),t=u.child,u=t.sibling,t=Va(t,{mode:"visible",children:e.children}),t.return=a,t.sibling=null,u!==null&&(r=a.deletions,r===null?(a.deletions=[u],a.flags|=16):r.push(u)),a.child=t,a.memoizedState=null,t)}function Ci(u,a){return a=Ol({mode:"visible",children:a},u.mode),a.return=u,u.child=a}function Ol(u,a){return u=la(22,u,null,a),u.lanes=0,u.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},u}function Bi(u,a,t){return Ee(a,u.child,null,t),u=Ci(a,a.pendingProps.children),u.flags|=2,a.memoizedState=null,u}function a2(u,a,t){u.lanes|=a;var e=u.alternate;e!==null&&(e.lanes|=a),Yr(u.return,a,t)}function Si(u,a,t,e,n){var l=u.memoizedState;l===null?u.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:e,tail:t,tailMode:n}:(l.isBackwards=a,l.rendering=null,l.renderingStartTime=0,l.last=e,l.tail=t,l.tailMode=n)}function t2(u,a,t){var e=a.pendingProps,n=e.revealOrder,l=e.tail;if(ju(u,a,e.children,t),e=Uu.current,(e&2)!==0)e=e&1|2,a.flags|=128;else{if(u!==null&&(u.flags&128)!==0)u:for(u=a.child;u!==null;){if(u.tag===13)u.memoizedState!==null&&a2(u,t,a);else if(u.tag===19)a2(u,t,a);else if(u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break u;for(;u.sibling===null;){if(u.return===null||u.return===a)break u;u=u.return}u.sibling.return=u.return,u=u.sibling}e&=1}switch(M(Uu,e),n){case"forwards":for(t=a.child,n=null;t!==null;)u=t.alternate,u!==null&&Cl(u)===null&&(n=t),t=t.sibling;t=n,t===null?(n=a.child,a.child=null):(n=t.sibling,t.sibling=null),Si(a,!1,n,t,l);break;case"backwards":for(t=null,n=a.child,a.child=null;n!==null;){if(u=n.alternate,u!==null&&Cl(u)===null){a.child=n;break}u=n.sibling,n.sibling=t,t=n,n=u}Si(a,!0,t,null,l);break;case"together":Si(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Ja(u,a,t){if(u!==null&&(a.dependencies=u.dependencies),gt|=a.lanes,(t&a.childLanes)===0)if(u!==null){if(un(u,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(u!==null&&a.child!==u.child)throw Error(o(153));if(a.child!==null){for(u=a.child,t=Va(u,u.pendingProps),a.child=t,t.return=a;u.sibling!==null;)u=u.sibling,t=t.sibling=Va(u,u.pendingProps),t.return=a;t.sibling=null}return a.child}function qi(u,a){return(u.lanes&a)!==0?!0:(u=u.dependencies,!!(u!==null&&ol(u)))}function bd(u,a,t){switch(a.tag){case 3:ou(a,a.stateNode.containerInfo),rt(a,_u,u.memoizedState.cache),$e();break;case 27:case 5:Zt(a);break;case 4:ou(a,a.stateNode.containerInfo);break;case 10:rt(a,a.type,a.memoizedProps.value);break;case 13:var e=a.memoizedState;if(e!==null)return e.dehydrated!==null?(ft(a),a.flags|=128,null):(t&a.child.childLanes)!==0?u2(u,a,t):(ft(a),u=Ja(u,a,t),u!==null?u.sibling:null);ft(a);break;case 19:var n=(u.flags&128)!==0;if(e=(t&a.childLanes)!==0,e||(un(u,a,t,!1),e=(t&a.childLanes)!==0),n){if(e)return t2(u,a,t);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),M(Uu,Uu.current),e)break;return null;case 22:case 23:return a.lanes=0,Js(u,a,t);case 24:rt(a,_u,u.memoizedState.cache)}return Ja(u,a,t)}function e2(u,a,t){if(u!==null)if(u.memoizedProps!==a.pendingProps)Gu=!0;else{if(!qi(u,t)&&(a.flags&128)===0)return Gu=!1,bd(u,a,t);Gu=(u.flags&131072)!==0}else Gu=!1,ru&&(a.flags&1048576)!==0&&Rc(a,il,a.index);switch(a.lanes=0,a.tag){case 16:u:{u=a.pendingProps;var e=a.elementType,n=e._init;if(e=n(e._payload),a.type=e,typeof e=="function")Ur(e)?(u=Yt(e,u),a.tag=1,a=$s(null,a,e,u,t)):(a.tag=0,a=yi(null,a,e,u,t));else{if(e!=null){if(n=e.$$typeof,n===Su){a.tag=11,a=Qs(null,a,e,u,t);break u}else if(n===gu){a.tag=14,a=Zs(null,a,e,u,t);break u}}throw a=Ba(e)||e,Error(o(306,a,""))}}return a;case 0:return yi(u,a,a.type,a.pendingProps,t);case 1:return e=a.type,n=Yt(e,a.pendingProps),$s(u,a,e,n,t);case 3:u:{if(ou(a,a.stateNode.containerInfo),u===null)throw Error(o(387));e=a.pendingProps;var l=a.memoizedState;n=l.element,Pr(u,a),on(a,e,null,t);var r=a.memoizedState;if(e=r.cache,rt(a,_u,e),e!==l.cache&&jr(a,[_u],t,!0),rn(),e=r.element,l.isDehydrated)if(l={element:e,isDehydrated:!1,cache:r.cache},a.updateQueue.baseState=l,a.memoizedState=l,a.flags&256){a=Is(u,a,e,t);break u}else if(e!==n){n=ga(Error(o(424)),a),Ie(n),a=Is(u,a,e,t);break u}else{switch(u=a.stateNode.containerInfo,u.nodeType){case 9:u=u.body;break;default:u=u.nodeName==="HTML"?u.ownerDocument.body:u}for(qu=Oa(u.firstChild),Pu=a,ru=!0,Nt=null,ka=!0,t=_s(a,null,e,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if($e(),e===n){a=Ja(u,a,t);break u}ju(u,a,e,t)}a=a.child}return a;case 26:return ql(u,a),u===null?(t=of(a.type,null,a.pendingProps,null))?a.memoizedState=t:ru||(t=a.type,u=a.pendingProps,e=Vl(X.current).createElement(t),e[Zu]=a,e[Wu]=u,Qu(e,t,u),Lu(e),a.stateNode=e):a.memoizedState=of(a.type,u.memoizedProps,a.pendingProps,u.memoizedState),null;case 27:return Zt(a),u===null&&ru&&(e=a.stateNode=nf(a.type,a.pendingProps,X.current),Pu=a,ka=!0,n=qu,At(a.type)?(io=n,qu=Oa(e.firstChild)):qu=n),ju(u,a,a.pendingProps.children,t),ql(u,a),u===null&&(a.flags|=4194304),a.child;case 5:return u===null&&ru&&((n=e=qu)&&(e=Yd(e,a.type,a.pendingProps,ka),e!==null?(a.stateNode=e,Pu=a,qu=Oa(e.firstChild),ka=!1,n=!0):n=!1),n||Ft(a)),Zt(a),n=a.type,l=a.pendingProps,r=u!==null?u.memoizedProps:null,e=l.children,eo(n,l)?e=null:r!==null&&eo(n,r)&&(a.flags|=32),a.memoizedState!==null&&(n=ti(u,a,id,null,null,t),wn._currentValue=n),ql(u,a),ju(u,a,e,t),a.child;case 6:return u===null&&ru&&((u=t=qu)&&(t=jd(t,a.pendingProps,ka),t!==null?(a.stateNode=t,Pu=a,qu=null,u=!0):u=!1),u||Ft(a)),null;case 13:return u2(u,a,t);case 4:return ou(a,a.stateNode.containerInfo),e=a.pendingProps,u===null?a.child=Ee(a,null,e,t):ju(u,a,e,t),a.child;case 11:return Qs(u,a,a.type,a.pendingProps,t);case 7:return ju(u,a,a.pendingProps,t),a.child;case 8:return ju(u,a,a.pendingProps.children,t),a.child;case 12:return ju(u,a,a.pendingProps.children,t),a.child;case 10:return e=a.pendingProps,rt(a,a.type,e.value),ju(u,a,e.children,t),a.child;case 9:return n=a.type._context,e=a.pendingProps.children,Lt(a),n=Ku(n),e=e(n),a.flags|=1,ju(u,a,e,t),a.child;case 14:return Zs(u,a,a.type,a.pendingProps,t);case 15:return Ks(u,a,a.type,a.pendingProps,t);case 19:return t2(u,a,t);case 31:return e=a.pendingProps,t=a.mode,e={mode:e.mode,children:e.children},u===null?(t=Ol(e,t),t.ref=a.ref,a.child=t,t.return=a,a=t):(t=Va(u.child,e),t.ref=a.ref,a.child=t,t.return=a,a=t),a;case 22:return Js(u,a,t);case 24:return Lt(a),e=Ku(_u),u===null?(n=Zr(),n===null&&(n=vu,l=Xr(),n.pooledCache=l,l.refCount++,l!==null&&(n.pooledCacheLanes|=t),n=l),a.memoizedState={parent:e,cache:n},Jr(a),rt(a,_u,n)):((u.lanes&t)!==0&&(Pr(u,a),on(a,null,null,t),rn()),n=u.memoizedState,l=a.memoizedState,n.parent!==e?(n={parent:e,cache:e},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),rt(a,_u,e)):(e=l.cache,rt(a,_u,e),e!==n.cache&&jr(a,[_u],t,!0))),ju(u,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(o(156,a.tag))}function Pa(u){u.flags|=4}function n2(u,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)u.flags&=-16777217;else if(u.flags|=16777216,!hf(a)){if(a=Aa.current,a!==null&&((eu&4194048)===eu?Ra!==null:(eu&62914560)!==eu&&(eu&536870912)===0||a!==Ra))throw nn=Kr,Gc;u.flags|=8192}}function Tl(u,a){a!==null&&(u.flags|=4),u.flags&16384&&(a=u.tag!==22?Uo():536870912,u.lanes|=a,qe|=a)}function bn(u,a){if(!ru)switch(u.tailMode){case"hidden":a=u.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?u.tail=null:t.sibling=null;break;case"collapsed":t=u.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?a||u.tail===null?u.tail=null:u.tail.sibling=null:e.sibling=null}}function Bu(u){var a=u.alternate!==null&&u.alternate.child===u.child,t=0,e=0;if(a)for(var n=u.child;n!==null;)t|=n.lanes|n.childLanes,e|=n.subtreeFlags&65011712,e|=n.flags&65011712,n.return=u,n=n.sibling;else for(n=u.child;n!==null;)t|=n.lanes|n.childLanes,e|=n.subtreeFlags,e|=n.flags,n.return=u,n=n.sibling;return u.subtreeFlags|=e,u.childLanes=t,a}function md(u,a,t){var e=a.pendingProps;switch(Lr(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bu(a),null;case 1:return Bu(a),null;case 3:return t=a.stateNode,e=null,u!==null&&(e=u.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),Qa(_u),pa(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(u===null||u.child===null)&&(We(a)?Pa(a):u===null||u.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Uc())),Bu(a),null;case 26:return t=a.memoizedState,u===null?(Pa(a),t!==null?(Bu(a),n2(a,t)):(Bu(a),a.flags&=-16777217)):t?t!==u.memoizedState?(Pa(a),Bu(a),n2(a,t)):(Bu(a),a.flags&=-16777217):(u.memoizedProps!==e&&Pa(a),Bu(a),a.flags&=-16777217),null;case 27:Ha(a),t=X.current;var n=a.type;if(u!==null&&a.stateNode!=null)u.memoizedProps!==e&&Pa(a);else{if(!e){if(a.stateNode===null)throw Error(o(166));return Bu(a),null}u=H.current,We(a)?Mc(a):(u=nf(n,e,t),a.stateNode=u,Pa(a))}return Bu(a),null;case 5:if(Ha(a),t=a.type,u!==null&&a.stateNode!=null)u.memoizedProps!==e&&Pa(a);else{if(!e){if(a.stateNode===null)throw Error(o(166));return Bu(a),null}if(u=H.current,We(a))Mc(a);else{switch(n=Vl(X.current),u){case 1:u=n.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:u=n.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":u=n.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":u=n.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":u=n.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof e.is=="string"?n.createElement("select",{is:e.is}):n.createElement("select"),e.multiple?u.multiple=!0:e.size&&(u.size=e.size);break;default:u=typeof e.is=="string"?n.createElement(t,{is:e.is}):n.createElement(t)}}u[Zu]=a,u[Wu]=e;u:for(n=a.child;n!==null;){if(n.tag===5||n.tag===6)u.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break u;for(;n.sibling===null;){if(n.return===null||n.return===a)break u;n=n.return}n.sibling.return=n.return,n=n.sibling}a.stateNode=u;u:switch(Qu(u,t,e),t){case"button":case"input":case"select":case"textarea":u=!!e.autoFocus;break u;case"img":u=!0;break u;default:u=!1}u&&Pa(a)}}return Bu(a),a.flags&=-16777217,null;case 6:if(u&&a.stateNode!=null)u.memoizedProps!==e&&Pa(a);else{if(typeof e!="string"&&a.stateNode===null)throw Error(o(166));if(u=X.current,We(a)){if(u=a.stateNode,t=a.memoizedProps,e=null,n=Pu,n!==null)switch(n.tag){case 27:case 5:e=n.memoizedProps}u[Zu]=a,u=!!(u.nodeValue===t||e!==null&&e.suppressHydrationWarning===!0||W2(u.nodeValue,t)),u||Ft(a)}else u=Vl(u).createTextNode(e),u[Zu]=a,a.stateNode=u}return Bu(a),null;case 13:if(e=a.memoizedState,u===null||u.memoizedState!==null&&u.memoizedState.dehydrated!==null){if(n=We(a),e!==null&&e.dehydrated!==null){if(u===null){if(!n)throw Error(o(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[Zu]=a}else $e(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Bu(a),n=!1}else n=Uc(),u!==null&&u.memoizedState!==null&&(u.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(Ka(a),a):(Ka(a),null)}if(Ka(a),(a.flags&128)!==0)return a.lanes=t,a;if(t=e!==null,u=u!==null&&u.memoizedState!==null,t){e=a.child,n=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(n=e.alternate.memoizedState.cachePool.pool);var l=null;e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==n&&(e.flags|=2048)}return t!==u&&t&&(a.child.flags|=8192),Tl(a,a.updateQueue),Bu(a),null;case 4:return pa(),u===null&&$i(a.stateNode.containerInfo),Bu(a),null;case 10:return Qa(a.type),Bu(a),null;case 19:if(R(Uu),n=a.memoizedState,n===null)return Bu(a),null;if(e=(a.flags&128)!==0,l=n.rendering,l===null)if(e)bn(n,!1);else{if(Ou!==0||u!==null&&(u.flags&128)!==0)for(u=a.child;u!==null;){if(l=Cl(u),l!==null){for(a.flags|=128,bn(n,!1),u=l.updateQueue,a.updateQueue=u,Tl(a,u),a.subtreeFlags=0,u=t,t=a.child;t!==null;)kc(t,u),t=t.sibling;return M(Uu,Uu.current&1|2),a.child}u=u.sibling}n.tail!==null&&za()>kl&&(a.flags|=128,e=!0,bn(n,!1),a.lanes=4194304)}else{if(!e)if(u=Cl(l),u!==null){if(a.flags|=128,e=!0,u=u.updateQueue,a.updateQueue=u,Tl(a,u),bn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!l.alternate&&!ru)return Bu(a),null}else 2*za()-n.renderingStartTime>kl&&t!==536870912&&(a.flags|=128,e=!0,bn(n,!1),a.lanes=4194304);n.isBackwards?(l.sibling=a.child,a.child=l):(u=n.last,u!==null?u.sibling=l:a.child=l,n.last=l)}return n.tail!==null?(a=n.tail,n.rendering=a,n.tail=a.sibling,n.renderingStartTime=za(),a.sibling=null,u=Uu.current,M(Uu,e?u&1|2:u&1),a):(Bu(a),null);case 22:case 23:return Ka(a),ui(),e=a.memoizedState!==null,u!==null?u.memoizedState!==null!==e&&(a.flags|=8192):e&&(a.flags|=8192),e?(t&536870912)!==0&&(a.flags&128)===0&&(Bu(a),a.subtreeFlags&6&&(a.flags|=8192)):Bu(a),t=a.updateQueue,t!==null&&Tl(a,t.retryQueue),t=null,u!==null&&u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(t=u.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(a.flags|=2048),u!==null&&R(Gt),null;case 24:return t=null,u!==null&&(t=u.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Qa(_u),Bu(a),null;case 25:return null;case 30:return null}throw Error(o(156,a.tag))}function gd(u,a){switch(Lr(a),a.tag){case 1:return u=a.flags,u&65536?(a.flags=u&-65537|128,a):null;case 3:return Qa(_u),pa(),u=a.flags,(u&65536)!==0&&(u&128)===0?(a.flags=u&-65537|128,a):null;case 26:case 27:case 5:return Ha(a),null;case 13:if(Ka(a),u=a.memoizedState,u!==null&&u.dehydrated!==null){if(a.alternate===null)throw Error(o(340));$e()}return u=a.flags,u&65536?(a.flags=u&-65537|128,a):null;case 19:return R(Uu),null;case 4:return pa(),null;case 10:return Qa(a.type),null;case 22:case 23:return Ka(a),ui(),u!==null&&R(Gt),u=a.flags,u&65536?(a.flags=u&-65537|128,a):null;case 24:return Qa(_u),null;case 25:return null;default:return null}}function l2(u,a){switch(Lr(a),a.tag){case 3:Qa(_u),pa();break;case 26:case 27:case 5:Ha(a);break;case 4:pa();break;case 13:Ka(a);break;case 19:R(Uu);break;case 10:Qa(a.type);break;case 22:case 23:Ka(a),ui(),u!==null&&R(Gt);break;case 24:Qa(_u)}}function mn(u,a){try{var t=a.updateQueue,e=t!==null?t.lastEffect:null;if(e!==null){var n=e.next;t=n;do{if((t.tag&u)===u){e=void 0;var l=t.create,r=t.inst;e=l(),r.destroy=e}t=t.next}while(t!==n)}}catch(s){mu(a,a.return,s)}}function ht(u,a,t){try{var e=a.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var l=n.next;e=l;do{if((e.tag&u)===u){var r=e.inst,s=r.destroy;if(s!==void 0){r.destroy=void 0,n=a;var d=t,D=s;try{D()}catch(S){mu(n,d,S)}}}e=e.next}while(e!==l)}}catch(S){mu(a,a.return,S)}}function r2(u){var a=u.updateQueue;if(a!==null){var t=u.stateNode;try{Zc(a,t)}catch(e){mu(u,u.return,e)}}}function i2(u,a,t){t.props=Yt(u.type,u.memoizedProps),t.state=u.memoizedState;try{t.componentWillUnmount()}catch(e){mu(u,a,e)}}function gn(u,a){try{var t=u.ref;if(t!==null){switch(u.tag){case 26:case 27:case 5:var e=u.stateNode;break;case 30:e=u.stateNode;break;default:e=u.stateNode}typeof t=="function"?u.refCleanup=t(e):t.current=e}}catch(n){mu(u,a,n)}}function Ma(u,a){var t=u.ref,e=u.refCleanup;if(t!==null)if(typeof e=="function")try{e()}catch(n){mu(u,a,n)}finally{u.refCleanup=null,u=u.alternate,u!=null&&(u.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(n){mu(u,a,n)}else t.current=null}function o2(u){var a=u.type,t=u.memoizedProps,e=u.stateNode;try{u:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&e.focus();break u;case"img":t.src?e.src=t.src:t.srcSet&&(e.srcset=t.srcSet)}}catch(n){mu(u,u.return,n)}}function Oi(u,a,t){try{var e=u.stateNode;Fd(e,u.type,t,a),e[Wu]=a}catch(n){mu(u,u.return,n)}}function c2(u){return u.tag===5||u.tag===3||u.tag===26||u.tag===27&&At(u.type)||u.tag===4}function Ti(u){u:for(;;){for(;u.sibling===null;){if(u.return===null||c2(u.return))return null;u=u.return}for(u.sibling.return=u.return,u=u.sibling;u.tag!==5&&u.tag!==6&&u.tag!==18;){if(u.tag===27&&At(u.type)||u.flags&2||u.child===null||u.tag===4)continue u;u.child.return=u,u=u.child}if(!(u.flags&2))return u.stateNode}}function wi(u,a,t){var e=u.tag;if(e===5||e===6)u=u.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(u,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(u),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Gl));else if(e!==4&&(e===27&&At(u.type)&&(t=u.stateNode,a=null),u=u.child,u!==null))for(wi(u,a,t),u=u.sibling;u!==null;)wi(u,a,t),u=u.sibling}function wl(u,a,t){var e=u.tag;if(e===5||e===6)u=u.stateNode,a?t.insertBefore(u,a):t.appendChild(u);else if(e!==4&&(e===27&&At(u.type)&&(t=u.stateNode),u=u.child,u!==null))for(wl(u,a,t),u=u.sibling;u!==null;)wl(u,a,t),u=u.sibling}function s2(u){var a=u.stateNode,t=u.memoizedProps;try{for(var e=u.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Qu(a,e,t),a[Zu]=u,a[Wu]=t}catch(l){mu(u,u.return,l)}}var Wa=!1,ku=!1,zi=!1,f2=typeof WeakSet=="function"?WeakSet:Set,Vu=null;function vd(u,a){if(u=u.containerInfo,ao=Kl,u=xc(u),Tr(u)){if("selectionStart"in u)var t={start:u.selectionStart,end:u.selectionEnd};else u:{t=(t=u.ownerDocument)&&t.defaultView||window;var e=t.getSelection&&t.getSelection();if(e&&e.rangeCount!==0){t=e.anchorNode;var n=e.anchorOffset,l=e.focusNode;e=e.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break u}var r=0,s=-1,d=-1,D=0,S=0,T=u,y=null;a:for(;;){for(var A;T!==t||n!==0&&T.nodeType!==3||(s=r+n),T!==l||e!==0&&T.nodeType!==3||(d=r+e),T.nodeType===3&&(r+=T.nodeValue.length),(A=T.firstChild)!==null;)y=T,T=A;for(;;){if(T===u)break a;if(y===t&&++D===n&&(s=r),y===l&&++S===e&&(d=r),(A=T.nextSibling)!==null)break;T=y,y=T.parentNode}T=A}t=s===-1||d===-1?null:{start:s,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(to={focusedElem:u,selectionRange:t},Kl=!1,Vu=a;Vu!==null;)if(a=Vu,u=a.child,(a.subtreeFlags&1024)!==0&&u!==null)u.return=a,Vu=u;else for(;Vu!==null;){switch(a=Vu,l=a.alternate,u=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((u&1024)!==0&&l!==null){u=void 0,t=a,n=l.memoizedProps,l=l.memoizedState,e=t.stateNode;try{var J=Yt(t.type,n,t.elementType===t.type);u=e.getSnapshotBeforeUpdate(J,l),e.__reactInternalSnapshotBeforeUpdate=u}catch(Q){mu(t,t.return,Q)}}break;case 3:if((u&1024)!==0){if(u=a.stateNode.containerInfo,t=u.nodeType,t===9)lo(u);else if(t===1)switch(u.nodeName){case"HEAD":case"HTML":case"BODY":lo(u);break;default:u.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((u&1024)!==0)throw Error(o(163))}if(u=a.sibling,u!==null){u.return=a.return,Vu=u;break}Vu=a.return}}function d2(u,a,t){var e=t.flags;switch(t.tag){case 0:case 11:case 15:pt(u,t),e&4&&mn(5,t);break;case 1:if(pt(u,t),e&4)if(u=t.stateNode,a===null)try{u.componentDidMount()}catch(r){mu(t,t.return,r)}else{var n=Yt(t.type,a.memoizedProps);a=a.memoizedState;try{u.componentDidUpdate(n,a,u.__reactInternalSnapshotBeforeUpdate)}catch(r){mu(t,t.return,r)}}e&64&&r2(t),e&512&&gn(t,t.return);break;case 3:if(pt(u,t),e&64&&(u=t.updateQueue,u!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Zc(u,a)}catch(r){mu(t,t.return,r)}}break;case 27:a===null&&e&4&&s2(t);case 26:case 5:pt(u,t),a===null&&e&4&&o2(t),e&512&&gn(t,t.return);break;case 12:pt(u,t);break;case 13:pt(u,t),e&4&&b2(u,t),e&64&&(u=t.memoizedState,u!==null&&(u=u.dehydrated,u!==null&&(t=qd.bind(null,t),Xd(u,t))));break;case 22:if(e=t.memoizedState!==null||Wa,!e){a=a!==null&&a.memoizedState!==null||ku,n=Wa;var l=ku;Wa=e,(ku=a)&&!l?bt(u,t,(t.subtreeFlags&8772)!==0):pt(u,t),Wa=n,ku=l}break;case 30:break;default:pt(u,t)}}function h2(u){var a=u.alternate;a!==null&&(u.alternate=null,h2(a)),u.child=null,u.deletions=null,u.sibling=null,u.tag===5&&(a=u.stateNode,a!==null&&sr(a)),u.stateNode=null,u.return=null,u.dependencies=null,u.memoizedProps=null,u.memoizedState=null,u.pendingProps=null,u.stateNode=null,u.updateQueue=null}var xu=null,ua=!1;function $a(u,a,t){for(t=t.child;t!==null;)p2(u,a,t),t=t.sibling}function p2(u,a,t){if(ta&&typeof ta.onCommitFiberUnmount=="function")try{ta.onCommitFiberUnmount(Ne,t)}catch{}switch(t.tag){case 26:ku||Ma(t,a),$a(u,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:ku||Ma(t,a);var e=xu,n=ua;At(t.type)&&(xu=t.stateNode,ua=!1),$a(u,a,t),Sn(t.stateNode),xu=e,ua=n;break;case 5:ku||Ma(t,a);case 6:if(e=xu,n=ua,xu=null,$a(u,a,t),xu=e,ua=n,xu!==null)if(ua)try{(xu.nodeType===9?xu.body:xu.nodeName==="HTML"?xu.ownerDocument.body:xu).removeChild(t.stateNode)}catch(l){mu(t,a,l)}else try{xu.removeChild(t.stateNode)}catch(l){mu(t,a,l)}break;case 18:xu!==null&&(ua?(u=xu,tf(u.nodeType===9?u.body:u.nodeName==="HTML"?u.ownerDocument.body:u,t.stateNode),Mn(u)):tf(xu,t.stateNode));break;case 4:e=xu,n=ua,xu=t.stateNode.containerInfo,ua=!0,$a(u,a,t),xu=e,ua=n;break;case 0:case 11:case 14:case 15:ku||ht(2,t,a),ku||ht(4,t,a),$a(u,a,t);break;case 1:ku||(Ma(t,a),e=t.stateNode,typeof e.componentWillUnmount=="function"&&i2(t,a,e)),$a(u,a,t);break;case 21:$a(u,a,t);break;case 22:ku=(e=ku)||t.memoizedState!==null,$a(u,a,t),ku=e;break;default:$a(u,a,t)}}function b2(u,a){if(a.memoizedState===null&&(u=a.alternate,u!==null&&(u=u.memoizedState,u!==null&&(u=u.dehydrated,u!==null))))try{Mn(u)}catch(t){mu(a,a.return,t)}}function Dd(u){switch(u.tag){case 13:case 19:var a=u.stateNode;return a===null&&(a=u.stateNode=new f2),a;case 22:return u=u.stateNode,a=u._retryCache,a===null&&(a=u._retryCache=new f2),a;default:throw Error(o(435,u.tag))}}function ki(u,a){var t=Dd(u);a.forEach(function(e){var n=Od.bind(null,u,e);t.has(e)||(t.add(e),e.then(n,n))})}function ra(u,a){var t=a.deletions;if(t!==null)for(var e=0;e<t.length;e++){var n=t[e],l=u,r=a,s=r;u:for(;s!==null;){switch(s.tag){case 27:if(At(s.type)){xu=s.stateNode,ua=!1;break u}break;case 5:xu=s.stateNode,ua=!1;break u;case 3:case 4:xu=s.stateNode.containerInfo,ua=!0;break u}s=s.return}if(xu===null)throw Error(o(160));p2(l,r,n),xu=null,ua=!1,l=n.alternate,l!==null&&(l.return=null),n.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)m2(a,u),a=a.sibling}var qa=null;function m2(u,a){var t=u.alternate,e=u.flags;switch(u.tag){case 0:case 11:case 14:case 15:ra(a,u),ia(u),e&4&&(ht(3,u,u.return),mn(3,u),ht(5,u,u.return));break;case 1:ra(a,u),ia(u),e&512&&(ku||t===null||Ma(t,t.return)),e&64&&Wa&&(u=u.updateQueue,u!==null&&(e=u.callbacks,e!==null&&(t=u.shared.hiddenCallbacks,u.shared.hiddenCallbacks=t===null?e:t.concat(e))));break;case 26:var n=qa;if(ra(a,u),ia(u),e&512&&(ku||t===null||Ma(t,t.return)),e&4){var l=t!==null?t.memoizedState:null;if(e=u.memoizedState,t===null)if(e===null)if(u.stateNode===null){u:{e=u.type,t=u.memoizedProps,n=n.ownerDocument||n;a:switch(e){case"title":l=n.getElementsByTagName("title")[0],(!l||l[Le]||l[Zu]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(e),n.head.insertBefore(l,n.querySelector("head > title"))),Qu(l,e,t),l[Zu]=u,Lu(l),e=l;break u;case"link":var r=ff("link","href",n).get(e+(t.href||""));if(r){for(var s=0;s<r.length;s++)if(l=r[s],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){r.splice(s,1);break a}}l=n.createElement(e),Qu(l,e,t),n.head.appendChild(l);break;case"meta":if(r=ff("meta","content",n).get(e+(t.content||""))){for(s=0;s<r.length;s++)if(l=r[s],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){r.splice(s,1);break a}}l=n.createElement(e),Qu(l,e,t),n.head.appendChild(l);break;default:throw Error(o(468,e))}l[Zu]=u,Lu(l),e=l}u.stateNode=e}else df(n,u.type,u.stateNode);else u.stateNode=sf(n,e,u.memoizedProps);else l!==e?(l===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):l.count--,e===null?df(n,u.type,u.stateNode):sf(n,e,u.memoizedProps)):e===null&&u.stateNode!==null&&Oi(u,u.memoizedProps,t.memoizedProps)}break;case 27:ra(a,u),ia(u),e&512&&(ku||t===null||Ma(t,t.return)),t!==null&&e&4&&Oi(u,u.memoizedProps,t.memoizedProps);break;case 5:if(ra(a,u),ia(u),e&512&&(ku||t===null||Ma(t,t.return)),u.flags&32){n=u.stateNode;try{le(n,"")}catch(A){mu(u,u.return,A)}}e&4&&u.stateNode!=null&&(n=u.memoizedProps,Oi(u,n,t!==null?t.memoizedProps:n)),e&1024&&(zi=!0);break;case 6:if(ra(a,u),ia(u),e&4){if(u.stateNode===null)throw Error(o(162));e=u.memoizedProps,t=u.stateNode;try{t.nodeValue=e}catch(A){mu(u,u.return,A)}}break;case 3:if(Xl=null,n=qa,qa=Yl(a.containerInfo),ra(a,u),qa=n,ia(u),e&4&&t!==null&&t.memoizedState.isDehydrated)try{Mn(a.containerInfo)}catch(A){mu(u,u.return,A)}zi&&(zi=!1,g2(u));break;case 4:e=qa,qa=Yl(u.stateNode.containerInfo),ra(a,u),ia(u),qa=e;break;case 12:ra(a,u),ia(u);break;case 13:ra(a,u),ia(u),u.child.flags&8192&&u.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Fi=za()),e&4&&(e=u.updateQueue,e!==null&&(u.updateQueue=null,ki(u,e)));break;case 22:n=u.memoizedState!==null;var d=t!==null&&t.memoizedState!==null,D=Wa,S=ku;if(Wa=D||n,ku=S||d,ra(a,u),ku=S,Wa=D,ia(u),e&8192)u:for(a=u.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(t===null||d||Wa||ku||jt(u)),t=null,a=u;;){if(a.tag===5||a.tag===26){if(t===null){d=t=a;try{if(l=d.stateNode,n)r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{s=d.stateNode;var T=d.memoizedProps.style,y=T!=null&&T.hasOwnProperty("display")?T.display:null;s.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(A){mu(d,d.return,A)}}}else if(a.tag===6){if(t===null){d=a;try{d.stateNode.nodeValue=n?"":d.memoizedProps}catch(A){mu(d,d.return,A)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===u)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===u)break u;for(;a.sibling===null;){if(a.return===null||a.return===u)break u;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}e&4&&(e=u.updateQueue,e!==null&&(t=e.retryQueue,t!==null&&(e.retryQueue=null,ki(u,t))));break;case 19:ra(a,u),ia(u),e&4&&(e=u.updateQueue,e!==null&&(u.updateQueue=null,ki(u,e)));break;case 30:break;case 21:break;default:ra(a,u),ia(u)}}function ia(u){var a=u.flags;if(a&2){try{for(var t,e=u.return;e!==null;){if(c2(e)){t=e;break}e=e.return}if(t==null)throw Error(o(160));switch(t.tag){case 27:var n=t.stateNode,l=Ti(u);wl(u,l,n);break;case 5:var r=t.stateNode;t.flags&32&&(le(r,""),t.flags&=-33);var s=Ti(u);wl(u,s,r);break;case 3:case 4:var d=t.stateNode.containerInfo,D=Ti(u);wi(u,D,d);break;default:throw Error(o(161))}}catch(S){mu(u,u.return,S)}u.flags&=-3}a&4096&&(u.flags&=-4097)}function g2(u){if(u.subtreeFlags&1024)for(u=u.child;u!==null;){var a=u;g2(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),u=u.sibling}}function pt(u,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)d2(u,a.alternate,a),a=a.sibling}function jt(u){for(u=u.child;u!==null;){var a=u;switch(a.tag){case 0:case 11:case 14:case 15:ht(4,a,a.return),jt(a);break;case 1:Ma(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&i2(a,a.return,t),jt(a);break;case 27:Sn(a.stateNode);case 26:case 5:Ma(a,a.return),jt(a);break;case 22:a.memoizedState===null&&jt(a);break;case 30:jt(a);break;default:jt(a)}u=u.sibling}}function bt(u,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var e=a.alternate,n=u,l=a,r=l.flags;switch(l.tag){case 0:case 11:case 15:bt(n,l,t),mn(4,l);break;case 1:if(bt(n,l,t),e=l,n=e.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(D){mu(e,e.return,D)}if(e=l,n=e.updateQueue,n!==null){var s=e.stateNode;try{var d=n.shared.hiddenCallbacks;if(d!==null)for(n.shared.hiddenCallbacks=null,n=0;n<d.length;n++)Qc(d[n],s)}catch(D){mu(e,e.return,D)}}t&&r&64&&r2(l),gn(l,l.return);break;case 27:s2(l);case 26:case 5:bt(n,l,t),t&&e===null&&r&4&&o2(l),gn(l,l.return);break;case 12:bt(n,l,t);break;case 13:bt(n,l,t),t&&r&4&&b2(n,l);break;case 22:l.memoizedState===null&&bt(n,l,t),gn(l,l.return);break;case 30:break;default:bt(n,l,t)}a=a.sibling}}function Ri(u,a){var t=null;u!==null&&u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(t=u.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==t&&(u!=null&&u.refCount++,t!=null&&an(t))}function Mi(u,a){u=null,a.alternate!==null&&(u=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==u&&(a.refCount++,u!=null&&an(u))}function _a(u,a,t,e){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)v2(u,a,t,e),a=a.sibling}function v2(u,a,t,e){var n=a.flags;switch(a.tag){case 0:case 11:case 15:_a(u,a,t,e),n&2048&&mn(9,a);break;case 1:_a(u,a,t,e);break;case 3:_a(u,a,t,e),n&2048&&(u=null,a.alternate!==null&&(u=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==u&&(a.refCount++,u!=null&&an(u)));break;case 12:if(n&2048){_a(u,a,t,e),u=a.stateNode;try{var l=a.memoizedProps,r=l.id,s=l.onPostCommit;typeof s=="function"&&s(r,a.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(d){mu(a,a.return,d)}}else _a(u,a,t,e);break;case 13:_a(u,a,t,e);break;case 23:break;case 22:l=a.stateNode,r=a.alternate,a.memoizedState!==null?l._visibility&2?_a(u,a,t,e):vn(u,a):l._visibility&2?_a(u,a,t,e):(l._visibility|=2,Ce(u,a,t,e,(a.subtreeFlags&10256)!==0)),n&2048&&Ri(r,a);break;case 24:_a(u,a,t,e),n&2048&&Mi(a.alternate,a);break;default:_a(u,a,t,e)}}function Ce(u,a,t,e,n){for(n=n&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var l=u,r=a,s=t,d=e,D=r.flags;switch(r.tag){case 0:case 11:case 15:Ce(l,r,s,d,n),mn(8,r);break;case 23:break;case 22:var S=r.stateNode;r.memoizedState!==null?S._visibility&2?Ce(l,r,s,d,n):vn(l,r):(S._visibility|=2,Ce(l,r,s,d,n)),n&&D&2048&&Ri(r.alternate,r);break;case 24:Ce(l,r,s,d,n),n&&D&2048&&Mi(r.alternate,r);break;default:Ce(l,r,s,d,n)}a=a.sibling}}function vn(u,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=u,e=a,n=e.flags;switch(e.tag){case 22:vn(t,e),n&2048&&Ri(e.alternate,e);break;case 24:vn(t,e),n&2048&&Mi(e.alternate,e);break;default:vn(t,e)}a=a.sibling}}var Dn=8192;function Be(u){if(u.subtreeFlags&Dn)for(u=u.child;u!==null;)D2(u),u=u.sibling}function D2(u){switch(u.tag){case 26:Be(u),u.flags&Dn&&u.memoizedState!==null&&n1(qa,u.memoizedState,u.memoizedProps);break;case 5:Be(u);break;case 3:case 4:var a=qa;qa=Yl(u.stateNode.containerInfo),Be(u),qa=a;break;case 22:u.memoizedState===null&&(a=u.alternate,a!==null&&a.memoizedState!==null?(a=Dn,Dn=16777216,Be(u),Dn=a):Be(u));break;default:Be(u)}}function y2(u){var a=u.alternate;if(a!==null&&(u=a.child,u!==null)){a.child=null;do a=u.sibling,u.sibling=null,u=a;while(u!==null)}}function yn(u){var a=u.deletions;if((u.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var e=a[t];Vu=e,x2(e,u)}y2(u)}if(u.subtreeFlags&10256)for(u=u.child;u!==null;)A2(u),u=u.sibling}function A2(u){switch(u.tag){case 0:case 11:case 15:yn(u),u.flags&2048&&ht(9,u,u.return);break;case 3:yn(u);break;case 12:yn(u);break;case 22:var a=u.stateNode;u.memoizedState!==null&&a._visibility&2&&(u.return===null||u.return.tag!==13)?(a._visibility&=-3,zl(u)):yn(u);break;default:yn(u)}}function zl(u){var a=u.deletions;if((u.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var e=a[t];Vu=e,x2(e,u)}y2(u)}for(u=u.child;u!==null;){switch(a=u,a.tag){case 0:case 11:case 15:ht(8,a,a.return),zl(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,zl(a));break;default:zl(a)}u=u.sibling}}function x2(u,a){for(;Vu!==null;){var t=Vu;switch(t.tag){case 0:case 11:case 15:ht(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var e=t.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:an(t.memoizedState.cache)}if(e=t.child,e!==null)e.return=t,Vu=e;else u:for(t=u;Vu!==null;){e=Vu;var n=e.sibling,l=e.return;if(h2(e),e===t){Vu=null;break u}if(n!==null){n.return=l,Vu=n;break u}Vu=l}}}var yd={getCacheForType:function(u){var a=Ku(_u),t=a.data.get(u);return t===void 0&&(t=u(),a.data.set(u,t)),t}},Ad=typeof WeakMap=="function"?WeakMap:Map,cu=0,vu=null,au=null,eu=0,su=0,oa=null,mt=!1,Se=!1,_i=!1,Ia=0,Ou=0,gt=0,Xt=0,Ui=0,xa=0,qe=0,An=null,aa=null,Ni=!1,Fi=0,kl=1/0,Rl=null,vt=null,Xu=0,Dt=null,Oe=null,Te=0,Hi=0,Li=null,E2=null,xn=0,Gi=null;function ca(){if((cu&2)!==0&&eu!==0)return eu&-eu;if(B.T!==null){var u=me;return u!==0?u:Ki()}return Ho()}function C2(){xa===0&&(xa=(eu&536870912)===0||ru?_o():536870912);var u=Aa.current;return u!==null&&(u.flags|=32),xa}function sa(u,a,t){(u===vu&&(su===2||su===9)||u.cancelPendingCommit!==null)&&(we(u,0),yt(u,eu,xa,!1)),He(u,t),((cu&2)===0||u!==vu)&&(u===vu&&((cu&2)===0&&(Xt|=t),Ou===4&&yt(u,eu,xa,!1)),Ua(u))}function B2(u,a,t){if((cu&6)!==0)throw Error(o(327));var e=!t&&(a&124)===0&&(a&u.expiredLanes)===0||Fe(u,a),n=e?Cd(u,a):ji(u,a,!0),l=e;do{if(n===0){Se&&!e&&yt(u,a,0,!1);break}else{if(t=u.current.alternate,l&&!xd(t)){n=ji(u,a,!1),l=!1;continue}if(n===2){if(l=a,u.errorRecoveryDisabledLanes&l)var r=0;else r=u.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){a=r;u:{var s=u;n=An;var d=s.current.memoizedState.isDehydrated;if(d&&(we(s,r).flags|=256),r=ji(s,r,!1),r!==2){if(_i&&!d){s.errorRecoveryDisabledLanes|=l,Xt|=l,n=4;break u}l=aa,aa=n,l!==null&&(aa===null?aa=l:aa.push.apply(aa,l))}n=r}if(l=!1,n!==2)continue}}if(n===1){we(u,0),yt(u,a,0,!0);break}u:{switch(e=u,l=n,l){case 0:case 1:throw Error(o(345));case 4:if((a&4194048)!==a)break;case 6:yt(e,a,xa,!mt);break u;case 2:aa=null;break;case 3:case 5:break;default:throw Error(o(329))}if((a&62914560)===a&&(n=Fi+300-za(),10<n)){if(yt(e,a,xa,!mt),jn(e,0,!0)!==0)break u;e.timeoutHandle=uf(S2.bind(null,e,t,aa,Rl,Ni,a,xa,Xt,qe,mt,l,2,-0,0),n);break u}S2(e,t,aa,Rl,Ni,a,xa,Xt,qe,mt,l,0,-0,0)}}break}while(!0);Ua(u)}function S2(u,a,t,e,n,l,r,s,d,D,S,T,y,A){if(u.timeoutHandle=-1,T=a.subtreeFlags,(T&8192||(T&16785408)===16785408)&&(Tn={stylesheets:null,count:0,unsuspend:e1},D2(a),T=l1(),T!==null)){u.cancelPendingCommit=T(R2.bind(null,u,a,l,t,e,n,r,s,d,S,1,y,A)),yt(u,l,r,!D);return}R2(u,a,l,t,e,n,r,s,d)}function xd(u){for(var a=u;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var e=0;e<t.length;e++){var n=t[e],l=n.getSnapshot;n=n.value;try{if(!na(l(),n))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===u)break;for(;a.sibling===null;){if(a.return===null||a.return===u)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function yt(u,a,t,e){a&=~Ui,a&=~Xt,u.suspendedLanes|=a,u.pingedLanes&=~a,e&&(u.warmLanes|=a),e=u.expirationTimes;for(var n=a;0<n;){var l=31-ea(n),r=1<<l;e[l]=-1,n&=~r}t!==0&&No(u,t,a)}function Ml(){return(cu&6)===0?(En(0),!1):!0}function Vi(){if(au!==null){if(su===0)var u=au.return;else u=au,Xa=Ht=null,li(u),xe=null,hn=0,u=au;for(;u!==null;)l2(u.alternate,u),u=u.return;au=null}}function we(u,a){var t=u.timeoutHandle;t!==-1&&(u.timeoutHandle=-1,Ld(t)),t=u.cancelPendingCommit,t!==null&&(u.cancelPendingCommit=null,t()),Vi(),vu=u,au=t=Va(u.current,null),eu=a,su=0,oa=null,mt=!1,Se=Fe(u,a),_i=!1,qe=xa=Ui=Xt=gt=Ou=0,aa=An=null,Ni=!1,(a&8)!==0&&(a|=a&32);var e=u.entangledLanes;if(e!==0)for(u=u.entanglements,e&=a;0<e;){var n=31-ea(e),l=1<<n;a|=u[n],e&=~l}return Ia=a,tl(),t}function q2(u,a){$=null,B.H=Al,a===en||a===fl?(a=jc(),su=3):a===Gc?(a=jc(),su=4):su=a===Xs?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,oa=a,au===null&&(Ou=1,Sl(u,ga(a,u.current)))}function O2(){var u=B.H;return B.H=Al,u===null?Al:u}function T2(){var u=B.A;return B.A=yd,u}function Yi(){Ou=4,mt||(eu&4194048)!==eu&&Aa.current!==null||(Se=!0),(gt&134217727)===0&&(Xt&134217727)===0||vu===null||yt(vu,eu,xa,!1)}function ji(u,a,t){var e=cu;cu|=2;var n=O2(),l=T2();(vu!==u||eu!==a)&&(Rl=null,we(u,a)),a=!1;var r=Ou;u:do try{if(su!==0&&au!==null){var s=au,d=oa;switch(su){case 8:Vi(),r=6;break u;case 3:case 2:case 9:case 6:Aa.current===null&&(a=!0);var D=su;if(su=0,oa=null,ze(u,s,d,D),t&&Se){r=0;break u}break;default:D=su,su=0,oa=null,ze(u,s,d,D)}}Ed(),r=Ou;break}catch(S){q2(u,S)}while(!0);return a&&u.shellSuspendCounter++,Xa=Ht=null,cu=e,B.H=n,B.A=l,au===null&&(vu=null,eu=0,tl()),r}function Ed(){for(;au!==null;)w2(au)}function Cd(u,a){var t=cu;cu|=2;var e=O2(),n=T2();vu!==u||eu!==a?(Rl=null,kl=za()+500,we(u,a)):Se=Fe(u,a);u:do try{if(su!==0&&au!==null){a=au;var l=oa;a:switch(su){case 1:su=0,oa=null,ze(u,a,l,1);break;case 2:case 9:if(Vc(l)){su=0,oa=null,z2(a);break}a=function(){su!==2&&su!==9||vu!==u||(su=7),Ua(u)},l.then(a,a);break u;case 3:su=7;break u;case 4:su=5;break u;case 7:Vc(l)?(su=0,oa=null,z2(a)):(su=0,oa=null,ze(u,a,l,7));break;case 5:var r=null;switch(au.tag){case 26:r=au.memoizedState;case 5:case 27:var s=au;if(!r||hf(r)){su=0,oa=null;var d=s.sibling;if(d!==null)au=d;else{var D=s.return;D!==null?(au=D,_l(D)):au=null}break a}}su=0,oa=null,ze(u,a,l,5);break;case 6:su=0,oa=null,ze(u,a,l,6);break;case 8:Vi(),Ou=6;break u;default:throw Error(o(462))}}Bd();break}catch(S){q2(u,S)}while(!0);return Xa=Ht=null,B.H=e,B.A=n,cu=t,au!==null?0:(vu=null,eu=0,tl(),Ou)}function Bd(){for(;au!==null&&!Pt();)w2(au)}function w2(u){var a=e2(u.alternate,u,Ia);u.memoizedProps=u.pendingProps,a===null?_l(u):au=a}function z2(u){var a=u,t=a.alternate;switch(a.tag){case 15:case 0:a=Ws(t,a,a.pendingProps,a.type,void 0,eu);break;case 11:a=Ws(t,a,a.pendingProps,a.type.render,a.ref,eu);break;case 5:li(a);default:l2(t,a),a=au=kc(a,Ia),a=e2(t,a,Ia)}u.memoizedProps=u.pendingProps,a===null?_l(u):au=a}function ze(u,a,t,e){Xa=Ht=null,li(a),xe=null,hn=0;var n=a.return;try{if(pd(u,n,a,t,eu)){Ou=1,Sl(u,ga(t,u.current)),au=null;return}}catch(l){if(n!==null)throw au=n,l;Ou=1,Sl(u,ga(t,u.current)),au=null;return}a.flags&32768?(ru||e===1?u=!0:Se||(eu&536870912)!==0?u=!1:(mt=u=!0,(e===2||e===9||e===3||e===6)&&(e=Aa.current,e!==null&&e.tag===13&&(e.flags|=16384))),k2(a,u)):_l(a)}function _l(u){var a=u;do{if((a.flags&32768)!==0){k2(a,mt);return}u=a.return;var t=md(a.alternate,a,Ia);if(t!==null){au=t;return}if(a=a.sibling,a!==null){au=a;return}au=a=u}while(a!==null);Ou===0&&(Ou=5)}function k2(u,a){do{var t=gd(u.alternate,u);if(t!==null){t.flags&=32767,au=t;return}if(t=u.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(u=u.sibling,u!==null)){au=u;return}au=u=t}while(u!==null);Ou=6,au=null}function R2(u,a,t,e,n,l,r,s,d){u.cancelPendingCommit=null;do Ul();while(Xu!==0);if((cu&6)!==0)throw Error(o(327));if(a!==null){if(a===u.current)throw Error(o(177));if(l=a.lanes|a.childLanes,l|=Mr,e0(u,t,l,r,s,d),u===vu&&(au=vu=null,eu=0),Oe=a,Dt=u,Te=t,Hi=l,Li=n,E2=e,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(u.callbackNode=null,u.callbackPriority=0,Td(Gn,function(){return F2(),null})):(u.callbackNode=null,u.callbackPriority=0),e=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||e){e=B.T,B.T=null,n=_.p,_.p=2,r=cu,cu|=4;try{vd(u,a,t)}finally{cu=r,_.p=n,B.T=e}}Xu=1,M2(),_2(),U2()}}function M2(){if(Xu===1){Xu=0;var u=Dt,a=Oe,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=B.T,B.T=null;var e=_.p;_.p=2;var n=cu;cu|=4;try{m2(a,u);var l=to,r=xc(u.containerInfo),s=l.focusedElem,d=l.selectionRange;if(r!==s&&s&&s.ownerDocument&&Ac(s.ownerDocument.documentElement,s)){if(d!==null&&Tr(s)){var D=d.start,S=d.end;if(S===void 0&&(S=D),"selectionStart"in s)s.selectionStart=D,s.selectionEnd=Math.min(S,s.value.length);else{var T=s.ownerDocument||document,y=T&&T.defaultView||window;if(y.getSelection){var A=y.getSelection(),J=s.textContent.length,Q=Math.min(d.start,J),bu=d.end===void 0?Q:Math.min(d.end,J);!A.extend&&Q>bu&&(r=bu,bu=Q,Q=r);var g=yc(s,Q),m=yc(s,bu);if(g&&m&&(A.rangeCount!==1||A.anchorNode!==g.node||A.anchorOffset!==g.offset||A.focusNode!==m.node||A.focusOffset!==m.offset)){var v=T.createRange();v.setStart(g.node,g.offset),A.removeAllRanges(),Q>bu?(A.addRange(v),A.extend(m.node,m.offset)):(v.setEnd(m.node,m.offset),A.addRange(v))}}}}for(T=[],A=s;A=A.parentNode;)A.nodeType===1&&T.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<T.length;s++){var q=T[s];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Kl=!!ao,to=ao=null}finally{cu=n,_.p=e,B.T=t}}u.current=a,Xu=2}}function _2(){if(Xu===2){Xu=0;var u=Dt,a=Oe,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=B.T,B.T=null;var e=_.p;_.p=2;var n=cu;cu|=4;try{d2(u,a.alternate,a)}finally{cu=n,_.p=e,B.T=t}}Xu=3}}function U2(){if(Xu===4||Xu===3){Xu=0,Wt();var u=Dt,a=Oe,t=Te,e=E2;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Xu=5:(Xu=0,Oe=Dt=null,N2(u,u.pendingLanes));var n=u.pendingLanes;if(n===0&&(vt=null),or(t),a=a.stateNode,ta&&typeof ta.onCommitFiberRoot=="function")try{ta.onCommitFiberRoot(Ne,a,void 0,(a.current.flags&128)===128)}catch{}if(e!==null){a=B.T,n=_.p,_.p=2,B.T=null;try{for(var l=u.onRecoverableError,r=0;r<e.length;r++){var s=e[r];l(s.value,{componentStack:s.stack})}}finally{B.T=a,_.p=n}}(Te&3)!==0&&Ul(),Ua(u),n=u.pendingLanes,(t&4194090)!==0&&(n&42)!==0?u===Gi?xn++:(xn=0,Gi=u):xn=0,En(0)}}function N2(u,a){(u.pooledCacheLanes&=a)===0&&(a=u.pooledCache,a!=null&&(u.pooledCache=null,an(a)))}function Ul(u){return M2(),_2(),U2(),F2()}function F2(){if(Xu!==5)return!1;var u=Dt,a=Hi;Hi=0;var t=or(Te),e=B.T,n=_.p;try{_.p=32>t?32:t,B.T=null,t=Li,Li=null;var l=Dt,r=Te;if(Xu=0,Oe=Dt=null,Te=0,(cu&6)!==0)throw Error(o(331));var s=cu;if(cu|=4,A2(l.current),v2(l,l.current,r,t),cu=s,En(0,!1),ta&&typeof ta.onPostCommitFiberRoot=="function")try{ta.onPostCommitFiberRoot(Ne,l)}catch{}return!0}finally{_.p=n,B.T=e,N2(u,a)}}function H2(u,a,t){a=ga(t,a),a=Di(u.stateNode,a,2),u=ct(u,a,2),u!==null&&(He(u,2),Ua(u))}function mu(u,a,t){if(u.tag===3)H2(u,u,t);else for(;a!==null;){if(a.tag===3){H2(a,u,t);break}else if(a.tag===1){var e=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(vt===null||!vt.has(e))){u=ga(t,u),t=Ys(2),e=ct(a,t,2),e!==null&&(js(t,e,a,u),He(e,2),Ua(e));break}}a=a.return}}function Xi(u,a,t){var e=u.pingCache;if(e===null){e=u.pingCache=new Ad;var n=new Set;e.set(a,n)}else n=e.get(a),n===void 0&&(n=new Set,e.set(a,n));n.has(t)||(_i=!0,n.add(t),u=Sd.bind(null,u,a,t),a.then(u,u))}function Sd(u,a,t){var e=u.pingCache;e!==null&&e.delete(a),u.pingedLanes|=u.suspendedLanes&t,u.warmLanes&=~t,vu===u&&(eu&t)===t&&(Ou===4||Ou===3&&(eu&62914560)===eu&&300>za()-Fi?(cu&2)===0&&we(u,0):Ui|=t,qe===eu&&(qe=0)),Ua(u)}function L2(u,a){a===0&&(a=Uo()),u=de(u,a),u!==null&&(He(u,a),Ua(u))}function qd(u){var a=u.memoizedState,t=0;a!==null&&(t=a.retryLane),L2(u,t)}function Od(u,a){var t=0;switch(u.tag){case 13:var e=u.stateNode,n=u.memoizedState;n!==null&&(t=n.retryLane);break;case 19:e=u.stateNode;break;case 22:e=u.stateNode._retryCache;break;default:throw Error(o(314))}e!==null&&e.delete(a),L2(u,t)}function Td(u,a){return Kt(u,a)}var Nl=null,ke=null,Qi=!1,Fl=!1,Zi=!1,Qt=0;function Ua(u){u!==ke&&u.next===null&&(ke===null?Nl=ke=u:ke=ke.next=u),Fl=!0,Qi||(Qi=!0,zd())}function En(u,a){if(!Zi&&Fl){Zi=!0;do for(var t=!1,e=Nl;e!==null;){if(u!==0){var n=e.pendingLanes;if(n===0)var l=0;else{var r=e.suspendedLanes,s=e.pingedLanes;l=(1<<31-ea(42|u)+1)-1,l&=n&~(r&~s),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,j2(e,l))}else l=eu,l=jn(e,e===vu?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(l&3)===0||Fe(e,l)||(t=!0,j2(e,l));e=e.next}while(t);Zi=!1}}function wd(){G2()}function G2(){Fl=Qi=!1;var u=0;Qt!==0&&(Hd()&&(u=Qt),Qt=0);for(var a=za(),t=null,e=Nl;e!==null;){var n=e.next,l=V2(e,a);l===0?(e.next=null,t===null?Nl=n:t.next=n,n===null&&(ke=t)):(t=e,(u!==0||(l&3)!==0)&&(Fl=!0)),e=n}En(u)}function V2(u,a){for(var t=u.suspendedLanes,e=u.pingedLanes,n=u.expirationTimes,l=u.pendingLanes&-62914561;0<l;){var r=31-ea(l),s=1<<r,d=n[r];d===-1?((s&t)===0||(s&e)!==0)&&(n[r]=t0(s,a)):d<=a&&(u.expiredLanes|=s),l&=~s}if(a=vu,t=eu,t=jn(u,u===a?t:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),e=u.callbackNode,t===0||u===a&&(su===2||su===9)||u.cancelPendingCommit!==null)return e!==null&&e!==null&&Jt(e),u.callbackNode=null,u.callbackPriority=0;if((t&3)===0||Fe(u,t)){if(a=t&-t,a===u.callbackPriority)return a;switch(e!==null&&Jt(e),or(t)){case 2:case 8:t=Ro;break;case 32:t=Gn;break;case 268435456:t=Mo;break;default:t=Gn}return e=Y2.bind(null,u),t=Kt(t,e),u.callbackPriority=a,u.callbackNode=t,a}return e!==null&&e!==null&&Jt(e),u.callbackPriority=2,u.callbackNode=null,2}function Y2(u,a){if(Xu!==0&&Xu!==5)return u.callbackNode=null,u.callbackPriority=0,null;var t=u.callbackNode;if(Ul()&&u.callbackNode!==t)return null;var e=eu;return e=jn(u,u===vu?e:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),e===0?null:(B2(u,e,a),V2(u,za()),u.callbackNode!=null&&u.callbackNode===t?Y2.bind(null,u):null)}function j2(u,a){if(Ul())return null;B2(u,a,!0)}function zd(){Gd(function(){(cu&6)!==0?Kt(ko,wd):G2()})}function Ki(){return Qt===0&&(Qt=_o()),Qt}function X2(u){return u==null||typeof u=="symbol"||typeof u=="boolean"?null:typeof u=="function"?u:Jn(""+u)}function Q2(u,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,u.id&&t.setAttribute("form",u.id),a.parentNode.insertBefore(t,a),u=new FormData(u),t.parentNode.removeChild(t),u}function kd(u,a,t,e,n){if(a==="submit"&&t&&t.stateNode===n){var l=X2((n[Wu]||null).action),r=e.submitter;r&&(a=(a=r[Wu]||null)?X2(a.formAction):r.getAttribute("formAction"),a!==null&&(l=a,r=null));var s=new In("action","action",null,e,n);u.push({event:s,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(Qt!==0){var d=r?Q2(n,r):new FormData(n);pi(t,{pending:!0,data:d,method:n.method,action:l},null,d)}}else typeof l=="function"&&(s.preventDefault(),d=r?Q2(n,r):new FormData(n),pi(t,{pending:!0,data:d,method:n.method,action:l},l,d))},currentTarget:n}]})}}for(var Ji=0;Ji<Rr.length;Ji++){var Pi=Rr[Ji],Rd=Pi.toLowerCase(),Md=Pi[0].toUpperCase()+Pi.slice(1);Sa(Rd,"on"+Md)}Sa(Bc,"onAnimationEnd"),Sa(Sc,"onAnimationIteration"),Sa(qc,"onAnimationStart"),Sa("dblclick","onDoubleClick"),Sa("focusin","onFocus"),Sa("focusout","onBlur"),Sa(W0,"onTransitionRun"),Sa($0,"onTransitionStart"),Sa(I0,"onTransitionCancel"),Sa(Oc,"onTransitionEnd"),te("onMouseEnter",["mouseout","mouseover"]),te("onMouseLeave",["mouseout","mouseover"]),te("onPointerEnter",["pointerout","pointerover"]),te("onPointerLeave",["pointerout","pointerover"]),wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wt("onBeforeInput",["compositionend","keypress","textInput","paste"]),wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_d=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cn));function Z2(u,a){a=(a&4)!==0;for(var t=0;t<u.length;t++){var e=u[t],n=e.event;e=e.listeners;u:{var l=void 0;if(a)for(var r=e.length-1;0<=r;r--){var s=e[r],d=s.instance,D=s.currentTarget;if(s=s.listener,d!==l&&n.isPropagationStopped())break u;l=s,n.currentTarget=D;try{l(n)}catch(S){Bl(S)}n.currentTarget=null,l=d}else for(r=0;r<e.length;r++){if(s=e[r],d=s.instance,D=s.currentTarget,s=s.listener,d!==l&&n.isPropagationStopped())break u;l=s,n.currentTarget=D;try{l(n)}catch(S){Bl(S)}n.currentTarget=null,l=d}}}}function tu(u,a){var t=a[cr];t===void 0&&(t=a[cr]=new Set);var e=u+"__bubble";t.has(e)||(K2(a,u,2,!1),t.add(e))}function Wi(u,a,t){var e=0;a&&(e|=4),K2(t,u,e,a)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function $i(u){if(!u[Hl]){u[Hl]=!0,Go.forEach(function(t){t!=="selectionchange"&&(_d.has(t)||Wi(t,!1,u),Wi(t,!0,u))});var a=u.nodeType===9?u:u.ownerDocument;a===null||a[Hl]||(a[Hl]=!0,Wi("selectionchange",!1,a))}}function K2(u,a,t,e){switch(Df(a)){case 2:var n=o1;break;case 8:n=c1;break;default:n=ho}t=n.bind(null,a,t,u),n=void 0,!yr||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),e?n!==void 0?u.addEventListener(a,t,{capture:!0,passive:n}):u.addEventListener(a,t,!0):n!==void 0?u.addEventListener(a,t,{passive:n}):u.addEventListener(a,t,!1)}function Ii(u,a,t,e,n){var l=e;if((a&1)===0&&(a&2)===0&&e!==null)u:for(;;){if(e===null)return;var r=e.tag;if(r===3||r===4){var s=e.stateNode.containerInfo;if(s===n)break;if(r===4)for(r=e.return;r!==null;){var d=r.tag;if((d===3||d===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;s!==null;){if(r=It(s),r===null)return;if(d=r.tag,d===5||d===6||d===26||d===27){e=l=r;continue u}s=s.parentNode}}e=e.return}ac(function(){var D=l,S=vr(t),T=[];u:{var y=Tc.get(u);if(y!==void 0){var A=In,J=u;switch(u){case"keypress":if(Wn(t)===0)break u;case"keydown":case"keyup":A=T0;break;case"focusin":J="focus",A=Cr;break;case"focusout":J="blur",A=Cr;break;case"beforeblur":case"afterblur":A=Cr;break;case"click":if(t.button===2)break u;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=g0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=k0;break;case Bc:case Sc:case qc:A=y0;break;case Oc:A=M0;break;case"scroll":case"scrollend":A=b0;break;case"wheel":A=U0;break;case"copy":case"cut":case"paste":A=x0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=rc;break;case"toggle":case"beforetoggle":A=F0}var Q=(a&4)!==0,bu=!Q&&(u==="scroll"||u==="scrollend"),g=Q?y!==null?y+"Capture":null:y;Q=[];for(var m=D,v;m!==null;){var q=m;if(v=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||v===null||g===null||(q=Ve(m,g),q!=null&&Q.push(Bn(m,q,v))),bu)break;m=m.return}0<Q.length&&(y=new A(y,J,null,t,S),T.push({event:y,listeners:Q}))}}if((a&7)===0){u:{if(y=u==="mouseover"||u==="pointerover",A=u==="mouseout"||u==="pointerout",y&&t!==gr&&(J=t.relatedTarget||t.fromElement)&&(It(J)||J[$t]))break u;if((A||y)&&(y=S.window===S?S:(y=S.ownerDocument)?y.defaultView||y.parentWindow:window,A?(J=t.relatedTarget||t.toElement,A=D,J=J?It(J):null,J!==null&&(bu=p(J),Q=J.tag,J!==bu||Q!==5&&Q!==27&&Q!==6)&&(J=null)):(A=null,J=D),A!==J)){if(Q=nc,q="onMouseLeave",g="onMouseEnter",m="mouse",(u==="pointerout"||u==="pointerover")&&(Q=rc,q="onPointerLeave",g="onPointerEnter",m="pointer"),bu=A==null?y:Ge(A),v=J==null?y:Ge(J),y=new Q(q,m+"leave",A,t,S),y.target=bu,y.relatedTarget=v,q=null,It(S)===D&&(Q=new Q(g,m+"enter",J,t,S),Q.target=v,Q.relatedTarget=bu,q=Q),bu=q,A&&J)a:{for(Q=A,g=J,m=0,v=Q;v;v=Re(v))m++;for(v=0,q=g;q;q=Re(q))v++;for(;0<m-v;)Q=Re(Q),m--;for(;0<v-m;)g=Re(g),v--;for(;m--;){if(Q===g||g!==null&&Q===g.alternate)break a;Q=Re(Q),g=Re(g)}Q=null}else Q=null;A!==null&&J2(T,y,A,Q,!1),J!==null&&bu!==null&&J2(T,bu,J,Q,!0)}}u:{if(y=D?Ge(D):window,A=y.nodeName&&y.nodeName.toLowerCase(),A==="select"||A==="input"&&y.type==="file")var N=pc;else if(dc(y))if(bc)N=K0;else{N=Q0;var I=X0}else A=y.nodeName,!A||A.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?D&&mr(D.elementType)&&(N=pc):N=Z0;if(N&&(N=N(u,D))){hc(T,N,t,S);break u}I&&I(u,y,D),u==="focusout"&&D&&y.type==="number"&&D.memoizedProps.value!=null&&br(y,"number",y.value)}switch(I=D?Ge(D):window,u){case"focusin":(dc(I)||I.contentEditable==="true")&&(ce=I,wr=D,Pe=null);break;case"focusout":Pe=wr=ce=null;break;case"mousedown":zr=!0;break;case"contextmenu":case"mouseup":case"dragend":zr=!1,Ec(T,t,S);break;case"selectionchange":if(P0)break;case"keydown":case"keyup":Ec(T,t,S)}var L;if(Sr)u:{switch(u){case"compositionstart":var Z="onCompositionStart";break u;case"compositionend":Z="onCompositionEnd";break u;case"compositionupdate":Z="onCompositionUpdate";break u}Z=void 0}else oe?sc(u,t)&&(Z="onCompositionEnd"):u==="keydown"&&t.keyCode===229&&(Z="onCompositionStart");Z&&(ic&&t.locale!=="ko"&&(oe||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&oe&&(L=tc()):(lt=S,Ar="value"in lt?lt.value:lt.textContent,oe=!0)),I=Ll(D,Z),0<I.length&&(Z=new lc(Z,u,null,t,S),T.push({event:Z,listeners:I}),L?Z.data=L:(L=fc(t),L!==null&&(Z.data=L)))),(L=L0?G0(u,t):V0(u,t))&&(Z=Ll(D,"onBeforeInput"),0<Z.length&&(I=new lc("onBeforeInput","beforeinput",null,t,S),T.push({event:I,listeners:Z}),I.data=L)),kd(T,u,D,t,S)}Z2(T,a)})}function Bn(u,a,t){return{instance:u,listener:a,currentTarget:t}}function Ll(u,a){for(var t=a+"Capture",e=[];u!==null;){var n=u,l=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||l===null||(n=Ve(u,t),n!=null&&e.unshift(Bn(u,n,l)),n=Ve(u,a),n!=null&&e.push(Bn(u,n,l))),u.tag===3)return e;u=u.return}return[]}function Re(u){if(u===null)return null;do u=u.return;while(u&&u.tag!==5&&u.tag!==27);return u||null}function J2(u,a,t,e,n){for(var l=a._reactName,r=[];t!==null&&t!==e;){var s=t,d=s.alternate,D=s.stateNode;if(s=s.tag,d!==null&&d===e)break;s!==5&&s!==26&&s!==27||D===null||(d=D,n?(D=Ve(t,l),D!=null&&r.unshift(Bn(t,D,d))):n||(D=Ve(t,l),D!=null&&r.push(Bn(t,D,d)))),t=t.return}r.length!==0&&u.push({event:a,listeners:r})}var Ud=/\r\n?/g,Nd=/\u0000|\uFFFD/g;function P2(u){return(typeof u=="string"?u:""+u).replace(Ud,`
`).replace(Nd,"")}function W2(u,a){return a=P2(a),P2(u)===a}function Gl(){}function pu(u,a,t,e,n,l){switch(t){case"children":typeof e=="string"?a==="body"||a==="textarea"&&e===""||le(u,e):(typeof e=="number"||typeof e=="bigint")&&a!=="body"&&le(u,""+e);break;case"className":Qn(u,"class",e);break;case"tabIndex":Qn(u,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":Qn(u,t,e);break;case"style":Io(u,e,l);break;case"data":if(a!=="object"){Qn(u,"data",e);break}case"src":case"href":if(e===""&&(a!=="a"||t!=="href")){u.removeAttribute(t);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){u.removeAttribute(t);break}e=Jn(""+e),u.setAttribute(t,e);break;case"action":case"formAction":if(typeof e=="function"){u.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(a!=="input"&&pu(u,a,"name",n.name,n,null),pu(u,a,"formEncType",n.formEncType,n,null),pu(u,a,"formMethod",n.formMethod,n,null),pu(u,a,"formTarget",n.formTarget,n,null)):(pu(u,a,"encType",n.encType,n,null),pu(u,a,"method",n.method,n,null),pu(u,a,"target",n.target,n,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){u.removeAttribute(t);break}e=Jn(""+e),u.setAttribute(t,e);break;case"onClick":e!=null&&(u.onclick=Gl);break;case"onScroll":e!=null&&tu("scroll",u);break;case"onScrollEnd":e!=null&&tu("scrollend",u);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(o(61));if(t=e.__html,t!=null){if(n.children!=null)throw Error(o(60));u.innerHTML=t}}break;case"multiple":u.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":u.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){u.removeAttribute("xlink:href");break}t=Jn(""+e),u.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?u.setAttribute(t,""+e):u.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?u.setAttribute(t,""):u.removeAttribute(t);break;case"capture":case"download":e===!0?u.setAttribute(t,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?u.setAttribute(t,e):u.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?u.setAttribute(t,e):u.removeAttribute(t);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?u.removeAttribute(t):u.setAttribute(t,e);break;case"popover":tu("beforetoggle",u),tu("toggle",u),Xn(u,"popover",e);break;case"xlinkActuate":La(u,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":La(u,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":La(u,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":La(u,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":La(u,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":La(u,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":La(u,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":La(u,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":La(u,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Xn(u,"is",e);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=h0.get(t)||t,Xn(u,t,e))}}function uo(u,a,t,e,n,l){switch(t){case"style":Io(u,e,l);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(o(61));if(t=e.__html,t!=null){if(n.children!=null)throw Error(o(60));u.innerHTML=t}}break;case"children":typeof e=="string"?le(u,e):(typeof e=="number"||typeof e=="bigint")&&le(u,""+e);break;case"onScroll":e!=null&&tu("scroll",u);break;case"onScrollEnd":e!=null&&tu("scrollend",u);break;case"onClick":e!=null&&(u.onclick=Gl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vo.hasOwnProperty(t))u:{if(t[0]==="o"&&t[1]==="n"&&(n=t.endsWith("Capture"),a=t.slice(2,n?t.length-7:void 0),l=u[Wu]||null,l=l!=null?l[t]:null,typeof l=="function"&&u.removeEventListener(a,l,n),typeof e=="function")){typeof l!="function"&&l!==null&&(t in u?u[t]=null:u.hasAttribute(t)&&u.removeAttribute(t)),u.addEventListener(a,e,n);break u}t in u?u[t]=e:e===!0?u.setAttribute(t,""):Xn(u,t,e)}}}function Qu(u,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":tu("error",u),tu("load",u);var e=!1,n=!1,l;for(l in t)if(t.hasOwnProperty(l)){var r=t[l];if(r!=null)switch(l){case"src":e=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,a));default:pu(u,a,l,r,t,null)}}n&&pu(u,a,"srcSet",t.srcSet,t,null),e&&pu(u,a,"src",t.src,t,null);return;case"input":tu("invalid",u);var s=l=r=n=null,d=null,D=null;for(e in t)if(t.hasOwnProperty(e)){var S=t[e];if(S!=null)switch(e){case"name":n=S;break;case"type":r=S;break;case"checked":d=S;break;case"defaultChecked":D=S;break;case"value":l=S;break;case"defaultValue":s=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(o(137,a));break;default:pu(u,a,e,S,t,null)}}Jo(u,l,s,d,D,r,n,!1),Zn(u);return;case"select":tu("invalid",u),e=r=l=null;for(n in t)if(t.hasOwnProperty(n)&&(s=t[n],s!=null))switch(n){case"value":l=s;break;case"defaultValue":r=s;break;case"multiple":e=s;default:pu(u,a,n,s,t,null)}a=l,t=r,u.multiple=!!e,a!=null?ne(u,!!e,a,!1):t!=null&&ne(u,!!e,t,!0);return;case"textarea":tu("invalid",u),l=n=e=null;for(r in t)if(t.hasOwnProperty(r)&&(s=t[r],s!=null))switch(r){case"value":e=s;break;case"defaultValue":n=s;break;case"children":l=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:pu(u,a,r,s,t,null)}Wo(u,e,n,l),Zn(u);return;case"option":for(d in t)if(t.hasOwnProperty(d)&&(e=t[d],e!=null))switch(d){case"selected":u.selected=e&&typeof e!="function"&&typeof e!="symbol";break;default:pu(u,a,d,e,t,null)}return;case"dialog":tu("beforetoggle",u),tu("toggle",u),tu("cancel",u),tu("close",u);break;case"iframe":case"object":tu("load",u);break;case"video":case"audio":for(e=0;e<Cn.length;e++)tu(Cn[e],u);break;case"image":tu("error",u),tu("load",u);break;case"details":tu("toggle",u);break;case"embed":case"source":case"link":tu("error",u),tu("load",u);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in t)if(t.hasOwnProperty(D)&&(e=t[D],e!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,a));default:pu(u,a,D,e,t,null)}return;default:if(mr(a)){for(S in t)t.hasOwnProperty(S)&&(e=t[S],e!==void 0&&uo(u,a,S,e,t,void 0));return}}for(s in t)t.hasOwnProperty(s)&&(e=t[s],e!=null&&pu(u,a,s,e,t,null))}function Fd(u,a,t,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,l=null,r=null,s=null,d=null,D=null,S=null;for(A in t){var T=t[A];if(t.hasOwnProperty(A)&&T!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":d=T;default:e.hasOwnProperty(A)||pu(u,a,A,null,e,T)}}for(var y in e){var A=e[y];if(T=t[y],e.hasOwnProperty(y)&&(A!=null||T!=null))switch(y){case"type":l=A;break;case"name":n=A;break;case"checked":D=A;break;case"defaultChecked":S=A;break;case"value":r=A;break;case"defaultValue":s=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,a));break;default:A!==T&&pu(u,a,y,A,e,T)}}pr(u,r,s,d,D,S,l,n);return;case"select":A=r=s=y=null;for(l in t)if(d=t[l],t.hasOwnProperty(l)&&d!=null)switch(l){case"value":break;case"multiple":A=d;default:e.hasOwnProperty(l)||pu(u,a,l,null,e,d)}for(n in e)if(l=e[n],d=t[n],e.hasOwnProperty(n)&&(l!=null||d!=null))switch(n){case"value":y=l;break;case"defaultValue":s=l;break;case"multiple":r=l;default:l!==d&&pu(u,a,n,l,e,d)}a=s,t=r,e=A,y!=null?ne(u,!!t,y,!1):!!e!=!!t&&(a!=null?ne(u,!!t,a,!0):ne(u,!!t,t?[]:"",!1));return;case"textarea":A=y=null;for(s in t)if(n=t[s],t.hasOwnProperty(s)&&n!=null&&!e.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:pu(u,a,s,null,e,n)}for(r in e)if(n=e[r],l=t[r],e.hasOwnProperty(r)&&(n!=null||l!=null))switch(r){case"value":y=n;break;case"defaultValue":A=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==l&&pu(u,a,r,n,e,l)}Po(u,y,A);return;case"option":for(var J in t)if(y=t[J],t.hasOwnProperty(J)&&y!=null&&!e.hasOwnProperty(J))switch(J){case"selected":u.selected=!1;break;default:pu(u,a,J,null,e,y)}for(d in e)if(y=e[d],A=t[d],e.hasOwnProperty(d)&&y!==A&&(y!=null||A!=null))switch(d){case"selected":u.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:pu(u,a,d,y,e,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in t)y=t[Q],t.hasOwnProperty(Q)&&y!=null&&!e.hasOwnProperty(Q)&&pu(u,a,Q,null,e,y);for(D in e)if(y=e[D],A=t[D],e.hasOwnProperty(D)&&y!==A&&(y!=null||A!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(137,a));break;default:pu(u,a,D,y,e,A)}return;default:if(mr(a)){for(var bu in t)y=t[bu],t.hasOwnProperty(bu)&&y!==void 0&&!e.hasOwnProperty(bu)&&uo(u,a,bu,void 0,e,y);for(S in e)y=e[S],A=t[S],!e.hasOwnProperty(S)||y===A||y===void 0&&A===void 0||uo(u,a,S,y,e,A);return}}for(var g in t)y=t[g],t.hasOwnProperty(g)&&y!=null&&!e.hasOwnProperty(g)&&pu(u,a,g,null,e,y);for(T in e)y=e[T],A=t[T],!e.hasOwnProperty(T)||y===A||y==null&&A==null||pu(u,a,T,y,e,A)}var ao=null,to=null;function Vl(u){return u.nodeType===9?u:u.ownerDocument}function $2(u){switch(u){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function I2(u,a){if(u===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return u===1&&a==="foreignObject"?0:u}function eo(u,a){return u==="textarea"||u==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var no=null;function Hd(){var u=window.event;return u&&u.type==="popstate"?u===no?!1:(no=u,!0):(no=null,!1)}var uf=typeof setTimeout=="function"?setTimeout:void 0,Ld=typeof clearTimeout=="function"?clearTimeout:void 0,af=typeof Promise=="function"?Promise:void 0,Gd=typeof queueMicrotask=="function"?queueMicrotask:typeof af<"u"?function(u){return af.resolve(null).then(u).catch(Vd)}:uf;function Vd(u){setTimeout(function(){throw u})}function At(u){return u==="head"}function tf(u,a){var t=a,e=0,n=0;do{var l=t.nextSibling;if(u.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(0<e&&8>e){t=e;var r=u.ownerDocument;if(t&1&&Sn(r.documentElement),t&2&&Sn(r.body),t&4)for(t=r.head,Sn(t),r=t.firstChild;r;){var s=r.nextSibling,d=r.nodeName;r[Le]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&r.rel.toLowerCase()==="stylesheet"||t.removeChild(r),r=s}}if(n===0){u.removeChild(l),Mn(a);return}n--}else t==="$"||t==="$?"||t==="$!"?n++:e=t.charCodeAt(0)-48;else e=0;t=l}while(t);Mn(a)}function lo(u){var a=u.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":lo(t),sr(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}u.removeChild(t)}}function Yd(u,a,t,e){for(;u.nodeType===1;){var n=t;if(u.nodeName.toLowerCase()!==a.toLowerCase()){if(!e&&(u.nodeName!=="INPUT"||u.type!=="hidden"))break}else if(e){if(!u[Le])switch(a){case"meta":if(!u.hasAttribute("itemprop"))break;return u;case"link":if(l=u.getAttribute("rel"),l==="stylesheet"&&u.hasAttribute("data-precedence"))break;if(l!==n.rel||u.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||u.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||u.getAttribute("title")!==(n.title==null?null:n.title))break;return u;case"style":if(u.hasAttribute("data-precedence"))break;return u;case"script":if(l=u.getAttribute("src"),(l!==(n.src==null?null:n.src)||u.getAttribute("type")!==(n.type==null?null:n.type)||u.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&l&&u.hasAttribute("async")&&!u.hasAttribute("itemprop"))break;return u;default:return u}}else if(a==="input"&&u.type==="hidden"){var l=n.name==null?null:""+n.name;if(n.type==="hidden"&&u.getAttribute("name")===l)return u}else return u;if(u=Oa(u.nextSibling),u===null)break}return null}function jd(u,a,t){if(a==="")return null;for(;u.nodeType!==3;)if((u.nodeType!==1||u.nodeName!=="INPUT"||u.type!=="hidden")&&!t||(u=Oa(u.nextSibling),u===null))return null;return u}function ro(u){return u.data==="$!"||u.data==="$?"&&u.ownerDocument.readyState==="complete"}function Xd(u,a){var t=u.ownerDocument;if(u.data!=="$?"||t.readyState==="complete")a();else{var e=function(){a(),t.removeEventListener("DOMContentLoaded",e)};t.addEventListener("DOMContentLoaded",e),u._reactRetry=e}}function Oa(u){for(;u!=null;u=u.nextSibling){var a=u.nodeType;if(a===1||a===3)break;if(a===8){if(a=u.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return u}var io=null;function ef(u){u=u.previousSibling;for(var a=0;u;){if(u.nodeType===8){var t=u.data;if(t==="$"||t==="$!"||t==="$?"){if(a===0)return u;a--}else t==="/$"&&a++}u=u.previousSibling}return null}function nf(u,a,t){switch(a=Vl(t),u){case"html":if(u=a.documentElement,!u)throw Error(o(452));return u;case"head":if(u=a.head,!u)throw Error(o(453));return u;case"body":if(u=a.body,!u)throw Error(o(454));return u;default:throw Error(o(451))}}function Sn(u){for(var a=u.attributes;a.length;)u.removeAttributeNode(a[0]);sr(u)}var Ea=new Map,lf=new Set;function Yl(u){return typeof u.getRootNode=="function"?u.getRootNode():u.nodeType===9?u:u.ownerDocument}var ut=_.d;_.d={f:Qd,r:Zd,D:Kd,C:Jd,L:Pd,m:Wd,X:Id,S:$d,M:u1};function Qd(){var u=ut.f(),a=Ml();return u||a}function Zd(u){var a=ue(u);a!==null&&a.tag===5&&a.type==="form"?Bs(a):ut.r(u)}var Me=typeof document>"u"?null:document;function rf(u,a,t){var e=Me;if(e&&typeof a=="string"&&a){var n=ma(a);n='link[rel="'+u+'"][href="'+n+'"]',typeof t=="string"&&(n+='[crossorigin="'+t+'"]'),lf.has(n)||(lf.add(n),u={rel:u,crossOrigin:t,href:a},e.querySelector(n)===null&&(a=e.createElement("link"),Qu(a,"link",u),Lu(a),e.head.appendChild(a)))}}function Kd(u){ut.D(u),rf("dns-prefetch",u,null)}function Jd(u,a){ut.C(u,a),rf("preconnect",u,a)}function Pd(u,a,t){ut.L(u,a,t);var e=Me;if(e&&u&&a){var n='link[rel="preload"][as="'+ma(a)+'"]';a==="image"&&t&&t.imageSrcSet?(n+='[imagesrcset="'+ma(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(n+='[imagesizes="'+ma(t.imageSizes)+'"]')):n+='[href="'+ma(u)+'"]';var l=n;switch(a){case"style":l=_e(u);break;case"script":l=Ue(u)}Ea.has(l)||(u=w({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:u,as:a},t),Ea.set(l,u),e.querySelector(n)!==null||a==="style"&&e.querySelector(qn(l))||a==="script"&&e.querySelector(On(l))||(a=e.createElement("link"),Qu(a,"link",u),Lu(a),e.head.appendChild(a)))}}function Wd(u,a){ut.m(u,a);var t=Me;if(t&&u){var e=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+ma(e)+'"][href="'+ma(u)+'"]',l=n;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ue(u)}if(!Ea.has(l)&&(u=w({rel:"modulepreload",href:u},a),Ea.set(l,u),t.querySelector(n)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(On(l)))return}e=t.createElement("link"),Qu(e,"link",u),Lu(e),t.head.appendChild(e)}}}function $d(u,a,t){ut.S(u,a,t);var e=Me;if(e&&u){var n=ae(e).hoistableStyles,l=_e(u);a=a||"default";var r=n.get(l);if(!r){var s={loading:0,preload:null};if(r=e.querySelector(qn(l)))s.loading=5;else{u=w({rel:"stylesheet",href:u,"data-precedence":a},t),(t=Ea.get(l))&&oo(u,t);var d=r=e.createElement("link");Lu(d),Qu(d,"link",u),d._p=new Promise(function(D,S){d.onload=D,d.onerror=S}),d.addEventListener("load",function(){s.loading|=1}),d.addEventListener("error",function(){s.loading|=2}),s.loading|=4,jl(r,a,e)}r={type:"stylesheet",instance:r,count:1,state:s},n.set(l,r)}}}function Id(u,a){ut.X(u,a);var t=Me;if(t&&u){var e=ae(t).hoistableScripts,n=Ue(u),l=e.get(n);l||(l=t.querySelector(On(n)),l||(u=w({src:u,async:!0},a),(a=Ea.get(n))&&co(u,a),l=t.createElement("script"),Lu(l),Qu(l,"link",u),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},e.set(n,l))}}function u1(u,a){ut.M(u,a);var t=Me;if(t&&u){var e=ae(t).hoistableScripts,n=Ue(u),l=e.get(n);l||(l=t.querySelector(On(n)),l||(u=w({src:u,async:!0,type:"module"},a),(a=Ea.get(n))&&co(u,a),l=t.createElement("script"),Lu(l),Qu(l,"link",u),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},e.set(n,l))}}function of(u,a,t,e){var n=(n=X.current)?Yl(n):null;if(!n)throw Error(o(446));switch(u){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=_e(t.href),t=ae(n).hoistableStyles,e=t.get(a),e||(e={type:"style",instance:null,count:0,state:null},t.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){u=_e(t.href);var l=ae(n).hoistableStyles,r=l.get(u);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(u,r),(l=n.querySelector(qn(u)))&&!l._p&&(r.instance=l,r.state.loading=5),Ea.has(u)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ea.set(u,t),l||a1(n,u,t,r.state))),a&&e===null)throw Error(o(528,""));return r}if(a&&e!==null)throw Error(o(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Ue(t),t=ae(n).hoistableScripts,e=t.get(a),e||(e={type:"script",instance:null,count:0,state:null},t.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,u))}}function _e(u){return'href="'+ma(u)+'"'}function qn(u){return'link[rel="stylesheet"]['+u+"]"}function cf(u){return w({},u,{"data-precedence":u.precedence,precedence:null})}function a1(u,a,t,e){u.querySelector('link[rel="preload"][as="style"]['+a+"]")?e.loading=1:(a=u.createElement("link"),e.preload=a,a.addEventListener("load",function(){return e.loading|=1}),a.addEventListener("error",function(){return e.loading|=2}),Qu(a,"link",t),Lu(a),u.head.appendChild(a))}function Ue(u){return'[src="'+ma(u)+'"]'}function On(u){return"script[async]"+u}function sf(u,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var e=u.querySelector('style[data-href~="'+ma(t.href)+'"]');if(e)return a.instance=e,Lu(e),e;var n=w({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return e=(u.ownerDocument||u).createElement("style"),Lu(e),Qu(e,"style",n),jl(e,t.precedence,u),a.instance=e;case"stylesheet":n=_e(t.href);var l=u.querySelector(qn(n));if(l)return a.state.loading|=4,a.instance=l,Lu(l),l;e=cf(t),(n=Ea.get(n))&&oo(e,n),l=(u.ownerDocument||u).createElement("link"),Lu(l);var r=l;return r._p=new Promise(function(s,d){r.onload=s,r.onerror=d}),Qu(l,"link",e),a.state.loading|=4,jl(l,t.precedence,u),a.instance=l;case"script":return l=Ue(t.src),(n=u.querySelector(On(l)))?(a.instance=n,Lu(n),n):(e=t,(n=Ea.get(l))&&(e=w({},t),co(e,n)),u=u.ownerDocument||u,n=u.createElement("script"),Lu(n),Qu(n,"link",e),u.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(o(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(e=a.instance,a.state.loading|=4,jl(e,t.precedence,u));return a.instance}function jl(u,a,t){for(var e=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=e.length?e[e.length-1]:null,l=n,r=0;r<e.length;r++){var s=e[r];if(s.dataset.precedence===a)l=s;else if(l!==n)break}l?l.parentNode.insertBefore(u,l.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(u,a.firstChild))}function oo(u,a){u.crossOrigin==null&&(u.crossOrigin=a.crossOrigin),u.referrerPolicy==null&&(u.referrerPolicy=a.referrerPolicy),u.title==null&&(u.title=a.title)}function co(u,a){u.crossOrigin==null&&(u.crossOrigin=a.crossOrigin),u.referrerPolicy==null&&(u.referrerPolicy=a.referrerPolicy),u.integrity==null&&(u.integrity=a.integrity)}var Xl=null;function ff(u,a,t){if(Xl===null){var e=new Map,n=Xl=new Map;n.set(t,e)}else n=Xl,e=n.get(t),e||(e=new Map,n.set(t,e));if(e.has(u))return e;for(e.set(u,null),t=t.getElementsByTagName(u),n=0;n<t.length;n++){var l=t[n];if(!(l[Le]||l[Zu]||u==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var r=l.getAttribute(a)||"";r=u+r;var s=e.get(r);s?s.push(l):e.set(r,[l])}}return e}function df(u,a,t){u=u.ownerDocument||u,u.head.insertBefore(t,a==="title"?u.querySelector("head > title"):null)}function t1(u,a,t){if(t===1||a.itemProp!=null)return!1;switch(u){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return u=a.disabled,typeof a.precedence=="string"&&u==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function hf(u){return!(u.type==="stylesheet"&&(u.state.loading&3)===0)}var Tn=null;function e1(){}function n1(u,a,t){if(Tn===null)throw Error(o(475));var e=Tn;if(a.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=_e(t.href),l=u.querySelector(qn(n));if(l){u=l._p,u!==null&&typeof u=="object"&&typeof u.then=="function"&&(e.count++,e=Ql.bind(e),u.then(e,e)),a.state.loading|=4,a.instance=l,Lu(l);return}l=u.ownerDocument||u,t=cf(t),(n=Ea.get(n))&&oo(t,n),l=l.createElement("link"),Lu(l);var r=l;r._p=new Promise(function(s,d){r.onload=s,r.onerror=d}),Qu(l,"link",t),a.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,u),(u=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ql.bind(e),u.addEventListener("load",a),u.addEventListener("error",a))}}function l1(){if(Tn===null)throw Error(o(475));var u=Tn;return u.stylesheets&&u.count===0&&so(u,u.stylesheets),0<u.count?function(a){var t=setTimeout(function(){if(u.stylesheets&&so(u,u.stylesheets),u.unsuspend){var e=u.unsuspend;u.unsuspend=null,e()}},6e4);return u.unsuspend=a,function(){u.unsuspend=null,clearTimeout(t)}}:null}function Ql(){if(this.count--,this.count===0){if(this.stylesheets)so(this,this.stylesheets);else if(this.unsuspend){var u=this.unsuspend;this.unsuspend=null,u()}}}var Zl=null;function so(u,a){u.stylesheets=null,u.unsuspend!==null&&(u.count++,Zl=new Map,a.forEach(r1,u),Zl=null,Ql.call(u))}function r1(u,a){if(!(a.state.loading&4)){var t=Zl.get(u);if(t)var e=t.get(null);else{t=new Map,Zl.set(u,t);for(var n=u.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<n.length;l++){var r=n[l];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(t.set(r.dataset.precedence,r),e=r)}e&&t.set(null,e)}n=a.instance,r=n.getAttribute("data-precedence"),l=t.get(r)||e,l===e&&t.set(null,n),t.set(r,n),this.count++,e=Ql.bind(this),n.addEventListener("load",e),n.addEventListener("error",e),l?l.parentNode.insertBefore(n,l.nextSibling):(u=u.nodeType===9?u.head:u,u.insertBefore(n,u.firstChild)),a.state.loading|=4}}var wn={$$typeof:nu,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function i1(u,a,t,e,n,l,r,s){this.tag=1,this.containerInfo=u,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rr(0),this.hiddenUpdates=rr(null),this.identifierPrefix=e,this.onUncaughtError=n,this.onCaughtError=l,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function pf(u,a,t,e,n,l,r,s,d,D,S,T){return u=new i1(u,a,t,r,s,d,D,T),a=1,l===!0&&(a|=24),l=la(3,null,null,a),u.current=l,l.stateNode=u,a=Xr(),a.refCount++,u.pooledCache=a,a.refCount++,l.memoizedState={element:e,isDehydrated:t,cache:a},Jr(l),u}function bf(u){return u?(u=he,u):he}function mf(u,a,t,e,n,l){n=bf(n),e.context===null?e.context=n:e.pendingContext=n,e=ot(a),e.payload={element:t},l=l===void 0?null:l,l!==null&&(e.callback=l),t=ct(u,e,a),t!==null&&(sa(t,u,a),ln(t,u,a))}function gf(u,a){if(u=u.memoizedState,u!==null&&u.dehydrated!==null){var t=u.retryLane;u.retryLane=t!==0&&t<a?t:a}}function fo(u,a){gf(u,a),(u=u.alternate)&&gf(u,a)}function vf(u){if(u.tag===13){var a=de(u,67108864);a!==null&&sa(a,u,67108864),fo(u,67108864)}}var Kl=!0;function o1(u,a,t,e){var n=B.T;B.T=null;var l=_.p;try{_.p=2,ho(u,a,t,e)}finally{_.p=l,B.T=n}}function c1(u,a,t,e){var n=B.T;B.T=null;var l=_.p;try{_.p=8,ho(u,a,t,e)}finally{_.p=l,B.T=n}}function ho(u,a,t,e){if(Kl){var n=po(e);if(n===null)Ii(u,a,e,Jl,t),yf(u,e);else if(f1(n,u,a,t,e))e.stopPropagation();else if(yf(u,e),a&4&&-1<s1.indexOf(u)){for(;n!==null;){var l=ue(n);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var r=Tt(l.pendingLanes);if(r!==0){var s=l;for(s.pendingLanes|=2,s.entangledLanes|=2;r;){var d=1<<31-ea(r);s.entanglements[1]|=d,r&=~d}Ua(l),(cu&6)===0&&(kl=za()+500,En(0))}}break;case 13:s=de(l,2),s!==null&&sa(s,l,2),Ml(),fo(l,2)}if(l=po(e),l===null&&Ii(u,a,e,Jl,t),l===n)break;n=l}n!==null&&e.stopPropagation()}else Ii(u,a,e,null,t)}}function po(u){return u=vr(u),bo(u)}var Jl=null;function bo(u){if(Jl=null,u=It(u),u!==null){var a=p(u);if(a===null)u=null;else{var t=a.tag;if(t===13){if(u=E(a),u!==null)return u;u=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;u=null}else a!==u&&(u=null)}}return Jl=u,null}function Df(u){switch(u){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jf()){case ko:return 2;case Ro:return 8;case Gn:case Pf:return 32;case Mo:return 268435456;default:return 32}default:return 32}}var mo=!1,xt=null,Et=null,Ct=null,zn=new Map,kn=new Map,Bt=[],s1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yf(u,a){switch(u){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":zn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":kn.delete(a.pointerId)}}function Rn(u,a,t,e,n,l){return u===null||u.nativeEvent!==l?(u={blockedOn:a,domEventName:t,eventSystemFlags:e,nativeEvent:l,targetContainers:[n]},a!==null&&(a=ue(a),a!==null&&vf(a)),u):(u.eventSystemFlags|=e,a=u.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),u)}function f1(u,a,t,e,n){switch(a){case"focusin":return xt=Rn(xt,u,a,t,e,n),!0;case"dragenter":return Et=Rn(Et,u,a,t,e,n),!0;case"mouseover":return Ct=Rn(Ct,u,a,t,e,n),!0;case"pointerover":var l=n.pointerId;return zn.set(l,Rn(zn.get(l)||null,u,a,t,e,n)),!0;case"gotpointercapture":return l=n.pointerId,kn.set(l,Rn(kn.get(l)||null,u,a,t,e,n)),!0}return!1}function Af(u){var a=It(u.target);if(a!==null){var t=p(a);if(t!==null){if(a=t.tag,a===13){if(a=E(t),a!==null){u.blockedOn=a,n0(u.priority,function(){if(t.tag===13){var e=ca();e=ir(e);var n=de(t,e);n!==null&&sa(n,t,e),fo(t,e)}});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){u.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}u.blockedOn=null}function Pl(u){if(u.blockedOn!==null)return!1;for(var a=u.targetContainers;0<a.length;){var t=po(u.nativeEvent);if(t===null){t=u.nativeEvent;var e=new t.constructor(t.type,t);gr=e,t.target.dispatchEvent(e),gr=null}else return a=ue(t),a!==null&&vf(a),u.blockedOn=t,!1;a.shift()}return!0}function xf(u,a,t){Pl(u)&&t.delete(a)}function d1(){mo=!1,xt!==null&&Pl(xt)&&(xt=null),Et!==null&&Pl(Et)&&(Et=null),Ct!==null&&Pl(Ct)&&(Ct=null),zn.forEach(xf),kn.forEach(xf)}function Wl(u,a){u.blockedOn===a&&(u.blockedOn=null,mo||(mo=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,d1)))}var $l=null;function Ef(u){$l!==u&&($l=u,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){$l===u&&($l=null);for(var a=0;a<u.length;a+=3){var t=u[a],e=u[a+1],n=u[a+2];if(typeof e!="function"){if(bo(e||t)===null)continue;break}var l=ue(t);l!==null&&(u.splice(a,3),a-=3,pi(l,{pending:!0,data:n,method:t.method,action:e},e,n))}}))}function Mn(u){function a(d){return Wl(d,u)}xt!==null&&Wl(xt,u),Et!==null&&Wl(Et,u),Ct!==null&&Wl(Ct,u),zn.forEach(a),kn.forEach(a);for(var t=0;t<Bt.length;t++){var e=Bt[t];e.blockedOn===u&&(e.blockedOn=null)}for(;0<Bt.length&&(t=Bt[0],t.blockedOn===null);)Af(t),t.blockedOn===null&&Bt.shift();if(t=(u.ownerDocument||u).$$reactFormReplay,t!=null)for(e=0;e<t.length;e+=3){var n=t[e],l=t[e+1],r=n[Wu]||null;if(typeof l=="function")r||Ef(t);else if(r){var s=null;if(l&&l.hasAttribute("formAction")){if(n=l,r=l[Wu]||null)s=r.formAction;else if(bo(n)!==null)continue}else s=r.action;typeof s=="function"?t[e+1]=s:(t.splice(e,3),e-=3),Ef(t)}}}function go(u){this._internalRoot=u}Il.prototype.render=go.prototype.render=function(u){var a=this._internalRoot;if(a===null)throw Error(o(409));var t=a.current,e=ca();mf(t,e,u,a,null,null)},Il.prototype.unmount=go.prototype.unmount=function(){var u=this._internalRoot;if(u!==null){this._internalRoot=null;var a=u.containerInfo;mf(u.current,2,null,u,null,null),Ml(),a[$t]=null}};function Il(u){this._internalRoot=u}Il.prototype.unstable_scheduleHydration=function(u){if(u){var a=Ho();u={blockedOn:null,target:u,priority:a};for(var t=0;t<Bt.length&&a!==0&&a<Bt[t].priority;t++);Bt.splice(t,0,u),t===0&&Af(u)}};var Cf=i.version;if(Cf!=="19.1.1")throw Error(o(527,Cf,"19.1.1"));_.findDOMNode=function(u){var a=u._reactInternals;if(a===void 0)throw typeof u.render=="function"?Error(o(188)):(u=Object.keys(u).join(","),Error(o(268,u)));return u=O(a),u=u!==null?x(u):null,u=u===null?null:u.stateNode,u};var h1={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ur=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ur.isDisabled&&ur.supportsFiber)try{Ne=ur.inject(h1),ta=ur}catch{}}return Un.createRoot=function(u,a){if(!b(u))throw Error(o(299));var t=!1,e="",n=Hs,l=Ls,r=Gs,s=null;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(l=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(s=a.unstable_transitionCallbacks)),a=pf(u,1,!1,null,null,t,e,n,l,r,s,null),u[$t]=a.current,$i(u),new go(a)},Un.hydrateRoot=function(u,a,t){if(!b(u))throw Error(o(299));var e=!1,n="",l=Hs,r=Ls,s=Gs,d=null,D=null;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(d=t.unstable_transitionCallbacks),t.formState!==void 0&&(D=t.formState)),a=pf(u,1,!0,a,t??null,e,n,l,r,s,d,D),a.context=bf(null),t=a.current,e=ca(),e=ir(e),n=ot(e),n.callback=null,ct(t,n,e),t=e,a.current.lanes=t,He(a,t),Ua(a),u[$t]=a.current,$i(u),new Il(a)},Un.version="19.1.1",Un}var _f;function E1(){if(_f)return yo.exports;_f=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(i){console.error(i)}}return c(),yo.exports=x1(),yo.exports}var C1=E1(),Nn={exports:{}};/*! https://mths.be/he v1.2.0 by @mathias | MIT license */var B1=Nn.exports,Uf;function S1(){return Uf||(Uf=1,(function(c,i){(function(f){var o=i,b=c&&c.exports==o&&c,p=typeof Bf=="object"&&Bf;(p.global===p||p.window===p)&&(f=p);var E=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,z=/[\x01-\x7F]/g,O=/[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,x=/<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,w={"­":"shy","‌":"zwnj","‍":"zwj","‎":"lrm","⁣":"ic","⁢":"it","⁡":"af","‏":"rlm","​":"ZeroWidthSpace","⁠":"NoBreak","̑":"DownBreve","⃛":"tdot","⃜":"DotDot","	":"Tab","\n":"NewLine"," ":"puncsp"," ":"MediumSpace"," ":"thinsp"," ":"hairsp"," ":"emsp13"," ":"ensp"," ":"emsp14"," ":"emsp"," ":"numsp"," ":"nbsp","  ":"ThickSpace","‾":"oline",_:"lowbar","‐":"dash","–":"ndash","—":"mdash","―":"horbar",",":"comma",";":"semi","⁏":"bsemi",":":"colon","⩴":"Colone","!":"excl","¡":"iexcl","?":"quest","¿":"iquest",".":"period","‥":"nldr","…":"mldr","·":"middot","'":"apos","‘":"lsquo","’":"rsquo","‚":"sbquo","‹":"lsaquo","›":"rsaquo",'"':"quot","“":"ldquo","”":"rdquo","„":"bdquo","«":"laquo","»":"raquo","(":"lpar",")":"rpar","[":"lsqb","]":"rsqb","{":"lcub","}":"rcub","⌈":"lceil","⌉":"rceil","⌊":"lfloor","⌋":"rfloor","⦅":"lopar","⦆":"ropar","⦋":"lbrke","⦌":"rbrke","⦍":"lbrkslu","⦎":"rbrksld","⦏":"lbrksld","⦐":"rbrkslu","⦑":"langd","⦒":"rangd","⦓":"lparlt","⦔":"rpargt","⦕":"gtlPar","⦖":"ltrPar","⟦":"lobrk","⟧":"robrk","⟨":"lang","⟩":"rang","⟪":"Lang","⟫":"Rang","⟬":"loang","⟭":"roang","❲":"lbbrk","❳":"rbbrk","‖":"Vert","§":"sect","¶":"para","@":"commat","*":"ast","/":"sol",undefined:null,"&":"amp","#":"num","%":"percnt","‰":"permil","‱":"pertenk","†":"dagger","‡":"Dagger","•":"bull","⁃":"hybull","′":"prime","″":"Prime","‴":"tprime","⁗":"qprime","‵":"bprime","⁁":"caret","`":"grave","´":"acute","˜":"tilde","^":"Hat","¯":"macr","˘":"breve","˙":"dot","¨":"die","˚":"ring","˝":"dblac","¸":"cedil","˛":"ogon","ˆ":"circ","ˇ":"caron","°":"deg","©":"copy","®":"reg","℗":"copysr","℘":"wp","℞":"rx","℧":"mho","℩":"iiota","←":"larr","↚":"nlarr","→":"rarr","↛":"nrarr","↑":"uarr","↓":"darr","↔":"harr","↮":"nharr","↕":"varr","↖":"nwarr","↗":"nearr","↘":"searr","↙":"swarr","↝":"rarrw","↝̸":"nrarrw","↞":"Larr","↟":"Uarr","↠":"Rarr","↡":"Darr","↢":"larrtl","↣":"rarrtl","↤":"mapstoleft","↥":"mapstoup","↦":"map","↧":"mapstodown","↩":"larrhk","↪":"rarrhk","↫":"larrlp","↬":"rarrlp","↭":"harrw","↰":"lsh","↱":"rsh","↲":"ldsh","↳":"rdsh","↵":"crarr","↶":"cularr","↷":"curarr","↺":"olarr","↻":"orarr","↼":"lharu","↽":"lhard","↾":"uharr","↿":"uharl","⇀":"rharu","⇁":"rhard","⇂":"dharr","⇃":"dharl","⇄":"rlarr","⇅":"udarr","⇆":"lrarr","⇇":"llarr","⇈":"uuarr","⇉":"rrarr","⇊":"ddarr","⇋":"lrhar","⇌":"rlhar","⇐":"lArr","⇍":"nlArr","⇑":"uArr","⇒":"rArr","⇏":"nrArr","⇓":"dArr","⇔":"iff","⇎":"nhArr","⇕":"vArr","⇖":"nwArr","⇗":"neArr","⇘":"seArr","⇙":"swArr","⇚":"lAarr","⇛":"rAarr","⇝":"zigrarr","⇤":"larrb","⇥":"rarrb","⇵":"duarr","⇽":"loarr","⇾":"roarr","⇿":"hoarr","∀":"forall","∁":"comp","∂":"part","∂̸":"npart","∃":"exist","∄":"nexist","∅":"empty","∇":"Del","∈":"in","∉":"notin","∋":"ni","∌":"notni","϶":"bepsi","∏":"prod","∐":"coprod","∑":"sum","+":"plus","±":"pm","÷":"div","×":"times","<":"lt","≮":"nlt","<⃒":"nvlt","=":"equals","≠":"ne","=⃥":"bne","⩵":"Equal",">":"gt","≯":"ngt",">⃒":"nvgt","¬":"not","|":"vert","¦":"brvbar","−":"minus","∓":"mp","∔":"plusdo","⁄":"frasl","∖":"setmn","∗":"lowast","∘":"compfn","√":"Sqrt","∝":"prop","∞":"infin","∟":"angrt","∠":"ang","∠⃒":"nang","∡":"angmsd","∢":"angsph","∣":"mid","∤":"nmid","∥":"par","∦":"npar","∧":"and","∨":"or","∩":"cap","∩︀":"caps","∪":"cup","∪︀":"cups","∫":"int","∬":"Int","∭":"tint","⨌":"qint","∮":"oint","∯":"Conint","∰":"Cconint","∱":"cwint","∲":"cwconint","∳":"awconint","∴":"there4","∵":"becaus","∶":"ratio","∷":"Colon","∸":"minusd","∺":"mDDot","∻":"homtht","∼":"sim","≁":"nsim","∼⃒":"nvsim","∽":"bsim","∽̱":"race","∾":"ac","∾̳":"acE","∿":"acd","≀":"wr","≂":"esim","≂̸":"nesim","≃":"sime","≄":"nsime","≅":"cong","≇":"ncong","≆":"simne","≈":"ap","≉":"nap","≊":"ape","≋":"apid","≋̸":"napid","≌":"bcong","≍":"CupCap","≭":"NotCupCap","≍⃒":"nvap","≎":"bump","≎̸":"nbump","≏":"bumpe","≏̸":"nbumpe","≐":"doteq","≐̸":"nedot","≑":"eDot","≒":"efDot","≓":"erDot","≔":"colone","≕":"ecolon","≖":"ecir","≗":"cire","≙":"wedgeq","≚":"veeeq","≜":"trie","≟":"equest","≡":"equiv","≢":"nequiv","≡⃥":"bnequiv","≤":"le","≰":"nle","≤⃒":"nvle","≥":"ge","≱":"nge","≥⃒":"nvge","≦":"lE","≦̸":"nlE","≧":"gE","≧̸":"ngE","≨︀":"lvnE","≨":"lnE","≩":"gnE","≩︀":"gvnE","≪":"ll","≪̸":"nLtv","≪⃒":"nLt","≫":"gg","≫̸":"nGtv","≫⃒":"nGt","≬":"twixt","≲":"lsim","≴":"nlsim","≳":"gsim","≵":"ngsim","≶":"lg","≸":"ntlg","≷":"gl","≹":"ntgl","≺":"pr","⊀":"npr","≻":"sc","⊁":"nsc","≼":"prcue","⋠":"nprcue","≽":"sccue","⋡":"nsccue","≾":"prsim","≿":"scsim","≿̸":"NotSucceedsTilde","⊂":"sub","⊄":"nsub","⊂⃒":"vnsub","⊃":"sup","⊅":"nsup","⊃⃒":"vnsup","⊆":"sube","⊈":"nsube","⊇":"supe","⊉":"nsupe","⊊︀":"vsubne","⊊":"subne","⊋︀":"vsupne","⊋":"supne","⊍":"cupdot","⊎":"uplus","⊏":"sqsub","⊏̸":"NotSquareSubset","⊐":"sqsup","⊐̸":"NotSquareSuperset","⊑":"sqsube","⋢":"nsqsube","⊒":"sqsupe","⋣":"nsqsupe","⊓":"sqcap","⊓︀":"sqcaps","⊔":"sqcup","⊔︀":"sqcups","⊕":"oplus","⊖":"ominus","⊗":"otimes","⊘":"osol","⊙":"odot","⊚":"ocir","⊛":"oast","⊝":"odash","⊞":"plusb","⊟":"minusb","⊠":"timesb","⊡":"sdotb","⊢":"vdash","⊬":"nvdash","⊣":"dashv","⊤":"top","⊥":"bot","⊧":"models","⊨":"vDash","⊭":"nvDash","⊩":"Vdash","⊮":"nVdash","⊪":"Vvdash","⊫":"VDash","⊯":"nVDash","⊰":"prurel","⊲":"vltri","⋪":"nltri","⊳":"vrtri","⋫":"nrtri","⊴":"ltrie","⋬":"nltrie","⊴⃒":"nvltrie","⊵":"rtrie","⋭":"nrtrie","⊵⃒":"nvrtrie","⊶":"origof","⊷":"imof","⊸":"mumap","⊹":"hercon","⊺":"intcal","⊻":"veebar","⊽":"barvee","⊾":"angrtvb","⊿":"lrtri","⋀":"Wedge","⋁":"Vee","⋂":"xcap","⋃":"xcup","⋄":"diam","⋅":"sdot","⋆":"Star","⋇":"divonx","⋈":"bowtie","⋉":"ltimes","⋊":"rtimes","⋋":"lthree","⋌":"rthree","⋍":"bsime","⋎":"cuvee","⋏":"cuwed","⋐":"Sub","⋑":"Sup","⋒":"Cap","⋓":"Cup","⋔":"fork","⋕":"epar","⋖":"ltdot","⋗":"gtdot","⋘":"Ll","⋘̸":"nLl","⋙":"Gg","⋙̸":"nGg","⋚︀":"lesg","⋚":"leg","⋛":"gel","⋛︀":"gesl","⋞":"cuepr","⋟":"cuesc","⋦":"lnsim","⋧":"gnsim","⋨":"prnsim","⋩":"scnsim","⋮":"vellip","⋯":"ctdot","⋰":"utdot","⋱":"dtdot","⋲":"disin","⋳":"isinsv","⋴":"isins","⋵":"isindot","⋵̸":"notindot","⋶":"notinvc","⋷":"notinvb","⋹":"isinE","⋹̸":"notinE","⋺":"nisd","⋻":"xnis","⋼":"nis","⋽":"notnivc","⋾":"notnivb","⌅":"barwed","⌆":"Barwed","⌌":"drcrop","⌍":"dlcrop","⌎":"urcrop","⌏":"ulcrop","⌐":"bnot","⌒":"profline","⌓":"profsurf","⌕":"telrec","⌖":"target","⌜":"ulcorn","⌝":"urcorn","⌞":"dlcorn","⌟":"drcorn","⌢":"frown","⌣":"smile","⌭":"cylcty","⌮":"profalar","⌶":"topbot","⌽":"ovbar","⌿":"solbar","⍼":"angzarr","⎰":"lmoust","⎱":"rmoust","⎴":"tbrk","⎵":"bbrk","⎶":"bbrktbrk","⏜":"OverParenthesis","⏝":"UnderParenthesis","⏞":"OverBrace","⏟":"UnderBrace","⏢":"trpezium","⏧":"elinters","␣":"blank","─":"boxh","│":"boxv","┌":"boxdr","┐":"boxdl","└":"boxur","┘":"boxul","├":"boxvr","┤":"boxvl","┬":"boxhd","┴":"boxhu","┼":"boxvh","═":"boxH","║":"boxV","╒":"boxdR","╓":"boxDr","╔":"boxDR","╕":"boxdL","╖":"boxDl","╗":"boxDL","╘":"boxuR","╙":"boxUr","╚":"boxUR","╛":"boxuL","╜":"boxUl","╝":"boxUL","╞":"boxvR","╟":"boxVr","╠":"boxVR","╡":"boxvL","╢":"boxVl","╣":"boxVL","╤":"boxHd","╥":"boxhD","╦":"boxHD","╧":"boxHu","╨":"boxhU","╩":"boxHU","╪":"boxvH","╫":"boxVh","╬":"boxVH","▀":"uhblk","▄":"lhblk","█":"block","░":"blk14","▒":"blk12","▓":"blk34","□":"squ","▪":"squf","▫":"EmptyVerySmallSquare","▭":"rect","▮":"marker","▱":"fltns","△":"xutri","▴":"utrif","▵":"utri","▸":"rtrif","▹":"rtri","▽":"xdtri","▾":"dtrif","▿":"dtri","◂":"ltrif","◃":"ltri","◊":"loz","○":"cir","◬":"tridot","◯":"xcirc","◸":"ultri","◹":"urtri","◺":"lltri","◻":"EmptySmallSquare","◼":"FilledSmallSquare","★":"starf","☆":"star","☎":"phone","♀":"female","♂":"male","♠":"spades","♣":"clubs","♥":"hearts","♦":"diams","♪":"sung","✓":"check","✗":"cross","✠":"malt","✶":"sext","❘":"VerticalSeparator","⟈":"bsolhsub","⟉":"suphsol","⟵":"xlarr","⟶":"xrarr","⟷":"xharr","⟸":"xlArr","⟹":"xrArr","⟺":"xhArr","⟼":"xmap","⟿":"dzigrarr","⤂":"nvlArr","⤃":"nvrArr","⤄":"nvHarr","⤅":"Map","⤌":"lbarr","⤍":"rbarr","⤎":"lBarr","⤏":"rBarr","⤐":"RBarr","⤑":"DDotrahd","⤒":"UpArrowBar","⤓":"DownArrowBar","⤖":"Rarrtl","⤙":"latail","⤚":"ratail","⤛":"lAtail","⤜":"rAtail","⤝":"larrfs","⤞":"rarrfs","⤟":"larrbfs","⤠":"rarrbfs","⤣":"nwarhk","⤤":"nearhk","⤥":"searhk","⤦":"swarhk","⤧":"nwnear","⤨":"toea","⤩":"tosa","⤪":"swnwar","⤳":"rarrc","⤳̸":"nrarrc","⤵":"cudarrr","⤶":"ldca","⤷":"rdca","⤸":"cudarrl","⤹":"larrpl","⤼":"curarrm","⤽":"cularrp","⥅":"rarrpl","⥈":"harrcir","⥉":"Uarrocir","⥊":"lurdshar","⥋":"ldrushar","⥎":"LeftRightVector","⥏":"RightUpDownVector","⥐":"DownLeftRightVector","⥑":"LeftUpDownVector","⥒":"LeftVectorBar","⥓":"RightVectorBar","⥔":"RightUpVectorBar","⥕":"RightDownVectorBar","⥖":"DownLeftVectorBar","⥗":"DownRightVectorBar","⥘":"LeftUpVectorBar","⥙":"LeftDownVectorBar","⥚":"LeftTeeVector","⥛":"RightTeeVector","⥜":"RightUpTeeVector","⥝":"RightDownTeeVector","⥞":"DownLeftTeeVector","⥟":"DownRightTeeVector","⥠":"LeftUpTeeVector","⥡":"LeftDownTeeVector","⥢":"lHar","⥣":"uHar","⥤":"rHar","⥥":"dHar","⥦":"luruhar","⥧":"ldrdhar","⥨":"ruluhar","⥩":"rdldhar","⥪":"lharul","⥫":"llhard","⥬":"rharul","⥭":"lrhard","⥮":"udhar","⥯":"duhar","⥰":"RoundImplies","⥱":"erarr","⥲":"simrarr","⥳":"larrsim","⥴":"rarrsim","⥵":"rarrap","⥶":"ltlarr","⥸":"gtrarr","⥹":"subrarr","⥻":"suplarr","⥼":"lfisht","⥽":"rfisht","⥾":"ufisht","⥿":"dfisht","⦚":"vzigzag","⦜":"vangrt","⦝":"angrtvbd","⦤":"ange","⦥":"range","⦦":"dwangle","⦧":"uwangle","⦨":"angmsdaa","⦩":"angmsdab","⦪":"angmsdac","⦫":"angmsdad","⦬":"angmsdae","⦭":"angmsdaf","⦮":"angmsdag","⦯":"angmsdah","⦰":"bemptyv","⦱":"demptyv","⦲":"cemptyv","⦳":"raemptyv","⦴":"laemptyv","⦵":"ohbar","⦶":"omid","⦷":"opar","⦹":"operp","⦻":"olcross","⦼":"odsold","⦾":"olcir","⦿":"ofcir","⧀":"olt","⧁":"ogt","⧂":"cirscir","⧃":"cirE","⧄":"solb","⧅":"bsolb","⧉":"boxbox","⧍":"trisb","⧎":"rtriltri","⧏":"LeftTriangleBar","⧏̸":"NotLeftTriangleBar","⧐":"RightTriangleBar","⧐̸":"NotRightTriangleBar","⧜":"iinfin","⧝":"infintie","⧞":"nvinfin","⧣":"eparsl","⧤":"smeparsl","⧥":"eqvparsl","⧫":"lozf","⧴":"RuleDelayed","⧶":"dsol","⨀":"xodot","⨁":"xoplus","⨂":"xotime","⨄":"xuplus","⨆":"xsqcup","⨍":"fpartint","⨐":"cirfnint","⨑":"awint","⨒":"rppolint","⨓":"scpolint","⨔":"npolint","⨕":"pointint","⨖":"quatint","⨗":"intlarhk","⨢":"pluscir","⨣":"plusacir","⨤":"simplus","⨥":"plusdu","⨦":"plussim","⨧":"plustwo","⨩":"mcomma","⨪":"minusdu","⨭":"loplus","⨮":"roplus","⨯":"Cross","⨰":"timesd","⨱":"timesbar","⨳":"smashp","⨴":"lotimes","⨵":"rotimes","⨶":"otimesas","⨷":"Otimes","⨸":"odiv","⨹":"triplus","⨺":"triminus","⨻":"tritime","⨼":"iprod","⨿":"amalg","⩀":"capdot","⩂":"ncup","⩃":"ncap","⩄":"capand","⩅":"cupor","⩆":"cupcap","⩇":"capcup","⩈":"cupbrcap","⩉":"capbrcup","⩊":"cupcup","⩋":"capcap","⩌":"ccups","⩍":"ccaps","⩐":"ccupssm","⩓":"And","⩔":"Or","⩕":"andand","⩖":"oror","⩗":"orslope","⩘":"andslope","⩚":"andv","⩛":"orv","⩜":"andd","⩝":"ord","⩟":"wedbar","⩦":"sdote","⩪":"simdot","⩭":"congdot","⩭̸":"ncongdot","⩮":"easter","⩯":"apacir","⩰":"apE","⩰̸":"napE","⩱":"eplus","⩲":"pluse","⩳":"Esim","⩷":"eDDot","⩸":"equivDD","⩹":"ltcir","⩺":"gtcir","⩻":"ltquest","⩼":"gtquest","⩽":"les","⩽̸":"nles","⩾":"ges","⩾̸":"nges","⩿":"lesdot","⪀":"gesdot","⪁":"lesdoto","⪂":"gesdoto","⪃":"lesdotor","⪄":"gesdotol","⪅":"lap","⪆":"gap","⪇":"lne","⪈":"gne","⪉":"lnap","⪊":"gnap","⪋":"lEg","⪌":"gEl","⪍":"lsime","⪎":"gsime","⪏":"lsimg","⪐":"gsiml","⪑":"lgE","⪒":"glE","⪓":"lesges","⪔":"gesles","⪕":"els","⪖":"egs","⪗":"elsdot","⪘":"egsdot","⪙":"el","⪚":"eg","⪝":"siml","⪞":"simg","⪟":"simlE","⪠":"simgE","⪡":"LessLess","⪡̸":"NotNestedLessLess","⪢":"GreaterGreater","⪢̸":"NotNestedGreaterGreater","⪤":"glj","⪥":"gla","⪦":"ltcc","⪧":"gtcc","⪨":"lescc","⪩":"gescc","⪪":"smt","⪫":"lat","⪬":"smte","⪬︀":"smtes","⪭":"late","⪭︀":"lates","⪮":"bumpE","⪯":"pre","⪯̸":"npre","⪰":"sce","⪰̸":"nsce","⪳":"prE","⪴":"scE","⪵":"prnE","⪶":"scnE","⪷":"prap","⪸":"scap","⪹":"prnap","⪺":"scnap","⪻":"Pr","⪼":"Sc","⪽":"subdot","⪾":"supdot","⪿":"subplus","⫀":"supplus","⫁":"submult","⫂":"supmult","⫃":"subedot","⫄":"supedot","⫅":"subE","⫅̸":"nsubE","⫆":"supE","⫆̸":"nsupE","⫇":"subsim","⫈":"supsim","⫋︀":"vsubnE","⫋":"subnE","⫌︀":"vsupnE","⫌":"supnE","⫏":"csub","⫐":"csup","⫑":"csube","⫒":"csupe","⫓":"subsup","⫔":"supsub","⫕":"subsub","⫖":"supsup","⫗":"suphsub","⫘":"supdsub","⫙":"forkv","⫚":"topfork","⫛":"mlcp","⫤":"Dashv","⫦":"Vdashl","⫧":"Barv","⫨":"vBar","⫩":"vBarv","⫫":"Vbar","⫬":"Not","⫭":"bNot","⫮":"rnmid","⫯":"cirmid","⫰":"midcir","⫱":"topcir","⫲":"nhpar","⫳":"parsim","⫽":"parsl","⫽⃥":"nparsl","♭":"flat","♮":"natur","♯":"sharp","¤":"curren","¢":"cent",$:"dollar","£":"pound","¥":"yen","€":"euro","¹":"sup1","½":"half","⅓":"frac13","¼":"frac14","⅕":"frac15","⅙":"frac16","⅛":"frac18","²":"sup2","⅔":"frac23","⅖":"frac25","³":"sup3","¾":"frac34","⅗":"frac35","⅜":"frac38","⅘":"frac45","⅚":"frac56","⅝":"frac58","⅞":"frac78","𝒶":"ascr","𝕒":"aopf","𝔞":"afr","𝔸":"Aopf","𝔄":"Afr","𝒜":"Ascr",ª:"ordf",á:"aacute",Á:"Aacute",à:"agrave",À:"Agrave",ă:"abreve",Ă:"Abreve",â:"acirc",Â:"Acirc",å:"aring",Å:"angst",ä:"auml",Ä:"Auml",ã:"atilde",Ã:"Atilde",ą:"aogon",Ą:"Aogon",ā:"amacr",Ā:"Amacr",æ:"aelig",Æ:"AElig","𝒷":"bscr","𝕓":"bopf","𝔟":"bfr","𝔹":"Bopf",ℬ:"Bscr","𝔅":"Bfr","𝔠":"cfr","𝒸":"cscr","𝕔":"copf",ℭ:"Cfr","𝒞":"Cscr",ℂ:"Copf",ć:"cacute",Ć:"Cacute",ĉ:"ccirc",Ĉ:"Ccirc",č:"ccaron",Č:"Ccaron",ċ:"cdot",Ċ:"Cdot",ç:"ccedil",Ç:"Ccedil","℅":"incare","𝔡":"dfr","ⅆ":"dd","𝕕":"dopf","𝒹":"dscr","𝒟":"Dscr","𝔇":"Dfr","ⅅ":"DD","𝔻":"Dopf",ď:"dcaron",Ď:"Dcaron",đ:"dstrok",Đ:"Dstrok",ð:"eth",Ð:"ETH","ⅇ":"ee",ℯ:"escr","𝔢":"efr","𝕖":"eopf",ℰ:"Escr","𝔈":"Efr","𝔼":"Eopf",é:"eacute",É:"Eacute",è:"egrave",È:"Egrave",ê:"ecirc",Ê:"Ecirc",ě:"ecaron",Ě:"Ecaron",ë:"euml",Ë:"Euml",ė:"edot",Ė:"Edot",ę:"eogon",Ę:"Eogon",ē:"emacr",Ē:"Emacr","𝔣":"ffr","𝕗":"fopf","𝒻":"fscr","𝔉":"Ffr","𝔽":"Fopf",ℱ:"Fscr",ﬀ:"fflig",ﬃ:"ffilig",ﬄ:"ffllig",ﬁ:"filig",fj:"fjlig",ﬂ:"fllig",ƒ:"fnof",ℊ:"gscr","𝕘":"gopf","𝔤":"gfr","𝒢":"Gscr","𝔾":"Gopf","𝔊":"Gfr",ǵ:"gacute",ğ:"gbreve",Ğ:"Gbreve",ĝ:"gcirc",Ĝ:"Gcirc",ġ:"gdot",Ġ:"Gdot",Ģ:"Gcedil","𝔥":"hfr",ℎ:"planckh","𝒽":"hscr","𝕙":"hopf",ℋ:"Hscr",ℌ:"Hfr",ℍ:"Hopf",ĥ:"hcirc",Ĥ:"Hcirc",ℏ:"hbar",ħ:"hstrok",Ħ:"Hstrok","𝕚":"iopf","𝔦":"ifr","𝒾":"iscr","ⅈ":"ii","𝕀":"Iopf",ℐ:"Iscr",ℑ:"Im",í:"iacute",Í:"Iacute",ì:"igrave",Ì:"Igrave",î:"icirc",Î:"Icirc",ï:"iuml",Ï:"Iuml",ĩ:"itilde",Ĩ:"Itilde",İ:"Idot",į:"iogon",Į:"Iogon",ī:"imacr",Ī:"Imacr",ĳ:"ijlig",Ĳ:"IJlig",ı:"imath","𝒿":"jscr","𝕛":"jopf","𝔧":"jfr","𝒥":"Jscr","𝔍":"Jfr","𝕁":"Jopf",ĵ:"jcirc",Ĵ:"Jcirc","ȷ":"jmath","𝕜":"kopf","𝓀":"kscr","𝔨":"kfr","𝒦":"Kscr","𝕂":"Kopf","𝔎":"Kfr",ķ:"kcedil",Ķ:"Kcedil","𝔩":"lfr","𝓁":"lscr",ℓ:"ell","𝕝":"lopf",ℒ:"Lscr","𝔏":"Lfr","𝕃":"Lopf",ĺ:"lacute",Ĺ:"Lacute",ľ:"lcaron",Ľ:"Lcaron",ļ:"lcedil",Ļ:"Lcedil",ł:"lstrok",Ł:"Lstrok",ŀ:"lmidot",Ŀ:"Lmidot","𝔪":"mfr","𝕞":"mopf","𝓂":"mscr","𝔐":"Mfr","𝕄":"Mopf",ℳ:"Mscr","𝔫":"nfr","𝕟":"nopf","𝓃":"nscr",ℕ:"Nopf","𝒩":"Nscr","𝔑":"Nfr",ń:"nacute",Ń:"Nacute",ň:"ncaron",Ň:"Ncaron",ñ:"ntilde",Ñ:"Ntilde",ņ:"ncedil",Ņ:"Ncedil","№":"numero",ŋ:"eng",Ŋ:"ENG","𝕠":"oopf","𝔬":"ofr",ℴ:"oscr","𝒪":"Oscr","𝔒":"Ofr","𝕆":"Oopf",º:"ordm",ó:"oacute",Ó:"Oacute",ò:"ograve",Ò:"Ograve",ô:"ocirc",Ô:"Ocirc",ö:"ouml",Ö:"Ouml",ő:"odblac",Ő:"Odblac",õ:"otilde",Õ:"Otilde",ø:"oslash",Ø:"Oslash",ō:"omacr",Ō:"Omacr",œ:"oelig",Œ:"OElig","𝔭":"pfr","𝓅":"pscr","𝕡":"popf",ℙ:"Popf","𝔓":"Pfr","𝒫":"Pscr","𝕢":"qopf","𝔮":"qfr","𝓆":"qscr","𝒬":"Qscr","𝔔":"Qfr",ℚ:"Qopf",ĸ:"kgreen","𝔯":"rfr","𝕣":"ropf","𝓇":"rscr",ℛ:"Rscr",ℜ:"Re",ℝ:"Ropf",ŕ:"racute",Ŕ:"Racute",ř:"rcaron",Ř:"Rcaron",ŗ:"rcedil",Ŗ:"Rcedil","𝕤":"sopf","𝓈":"sscr","𝔰":"sfr","𝕊":"Sopf","𝔖":"Sfr","𝒮":"Sscr","Ⓢ":"oS",ś:"sacute",Ś:"Sacute",ŝ:"scirc",Ŝ:"Scirc",š:"scaron",Š:"Scaron",ş:"scedil",Ş:"Scedil",ß:"szlig","𝔱":"tfr","𝓉":"tscr","𝕥":"topf","𝒯":"Tscr","𝔗":"Tfr","𝕋":"Topf",ť:"tcaron",Ť:"Tcaron",ţ:"tcedil",Ţ:"Tcedil","™":"trade",ŧ:"tstrok",Ŧ:"Tstrok","𝓊":"uscr","𝕦":"uopf","𝔲":"ufr","𝕌":"Uopf","𝔘":"Ufr","𝒰":"Uscr",ú:"uacute",Ú:"Uacute",ù:"ugrave",Ù:"Ugrave",ŭ:"ubreve",Ŭ:"Ubreve",û:"ucirc",Û:"Ucirc",ů:"uring",Ů:"Uring",ü:"uuml",Ü:"Uuml",ű:"udblac",Ű:"Udblac",ũ:"utilde",Ũ:"Utilde",ų:"uogon",Ų:"Uogon",ū:"umacr",Ū:"Umacr","𝔳":"vfr","𝕧":"vopf","𝓋":"vscr","𝔙":"Vfr","𝕍":"Vopf","𝒱":"Vscr","𝕨":"wopf","𝓌":"wscr","𝔴":"wfr","𝒲":"Wscr","𝕎":"Wopf","𝔚":"Wfr",ŵ:"wcirc",Ŵ:"Wcirc","𝔵":"xfr","𝓍":"xscr","𝕩":"xopf","𝕏":"Xopf","𝔛":"Xfr","𝒳":"Xscr","𝔶":"yfr","𝓎":"yscr","𝕪":"yopf","𝒴":"Yscr","𝔜":"Yfr","𝕐":"Yopf",ý:"yacute",Ý:"Yacute",ŷ:"ycirc",Ŷ:"Ycirc",ÿ:"yuml",Ÿ:"Yuml","𝓏":"zscr","𝔷":"zfr","𝕫":"zopf",ℨ:"Zfr",ℤ:"Zopf","𝒵":"Zscr",ź:"zacute",Ź:"Zacute",ž:"zcaron",Ž:"Zcaron",ż:"zdot",Ż:"Zdot",Ƶ:"imped",þ:"thorn",Þ:"THORN",ŉ:"napos",α:"alpha",Α:"Alpha",β:"beta",Β:"Beta",γ:"gamma",Γ:"Gamma",δ:"delta",Δ:"Delta",ε:"epsi","ϵ":"epsiv",Ε:"Epsilon",ϝ:"gammad",Ϝ:"Gammad",ζ:"zeta",Ζ:"Zeta",η:"eta",Η:"Eta",θ:"theta",ϑ:"thetav",Θ:"Theta",ι:"iota",Ι:"Iota",κ:"kappa",ϰ:"kappav",Κ:"Kappa",λ:"lambda",Λ:"Lambda",μ:"mu",µ:"micro",Μ:"Mu",ν:"nu",Ν:"Nu",ξ:"xi",Ξ:"Xi",ο:"omicron",Ο:"Omicron",π:"pi",ϖ:"piv",Π:"Pi",ρ:"rho",ϱ:"rhov",Ρ:"Rho",σ:"sigma",Σ:"Sigma",ς:"sigmaf",τ:"tau",Τ:"Tau",υ:"upsi",Υ:"Upsilon",ϒ:"Upsi",φ:"phi",ϕ:"phiv",Φ:"Phi",χ:"chi",Χ:"Chi",ψ:"psi",Ψ:"Psi",ω:"omega",Ω:"ohm",а:"acy",А:"Acy",б:"bcy",Б:"Bcy",в:"vcy",В:"Vcy",г:"gcy",Г:"Gcy",ѓ:"gjcy",Ѓ:"GJcy",д:"dcy",Д:"Dcy",ђ:"djcy",Ђ:"DJcy",е:"iecy",Е:"IEcy",ё:"iocy",Ё:"IOcy",є:"jukcy",Є:"Jukcy",ж:"zhcy",Ж:"ZHcy",з:"zcy",З:"Zcy",ѕ:"dscy",Ѕ:"DScy",и:"icy",И:"Icy",і:"iukcy",І:"Iukcy",ї:"yicy",Ї:"YIcy",й:"jcy",Й:"Jcy",ј:"jsercy",Ј:"Jsercy",к:"kcy",К:"Kcy",ќ:"kjcy",Ќ:"KJcy",л:"lcy",Л:"Lcy",љ:"ljcy",Љ:"LJcy",м:"mcy",М:"Mcy",н:"ncy",Н:"Ncy",њ:"njcy",Њ:"NJcy",о:"ocy",О:"Ocy",п:"pcy",П:"Pcy",р:"rcy",Р:"Rcy",с:"scy",С:"Scy",т:"tcy",Т:"Tcy",ћ:"tshcy",Ћ:"TSHcy",у:"ucy",У:"Ucy",ў:"ubrcy",Ў:"Ubrcy",ф:"fcy",Ф:"Fcy",х:"khcy",Х:"KHcy",ц:"tscy",Ц:"TScy",ч:"chcy",Ч:"CHcy",џ:"dzcy",Џ:"DZcy",ш:"shcy",Ш:"SHcy",щ:"shchcy",Щ:"SHCHcy",ъ:"hardcy",Ъ:"HARDcy",ы:"ycy",Ы:"Ycy",ь:"softcy",Ь:"SOFTcy",э:"ecy",Э:"Ecy",ю:"yucy",Ю:"YUcy",я:"yacy",Я:"YAcy",ℵ:"aleph",ℶ:"beth",ℷ:"gimel",ℸ:"daleth"},F=/["&'<>`]/g,V={'"':"&quot;","&":"&amp;","'":"&#x27;","<":"&lt;",">":"&gt;","`":"&#x60;"},fu=/&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,j=/[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,k=/&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g,K={aacute:"á",Aacute:"Á",abreve:"ă",Abreve:"Ă",ac:"∾",acd:"∿",acE:"∾̳",acirc:"â",Acirc:"Â",acute:"´",acy:"а",Acy:"А",aelig:"æ",AElig:"Æ",af:"⁡",afr:"𝔞",Afr:"𝔄",agrave:"à",Agrave:"À",alefsym:"ℵ",aleph:"ℵ",alpha:"α",Alpha:"Α",amacr:"ā",Amacr:"Ā",amalg:"⨿",amp:"&",AMP:"&",and:"∧",And:"⩓",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",aogon:"ą",Aogon:"Ą",aopf:"𝕒",Aopf:"𝔸",ap:"≈",apacir:"⩯",ape:"≊",apE:"⩰",apid:"≋",apos:"'",ApplyFunction:"⁡",approx:"≈",approxeq:"≊",aring:"å",Aring:"Å",ascr:"𝒶",Ascr:"𝒜",Assign:"≔",ast:"*",asymp:"≈",asympeq:"≍",atilde:"ã",Atilde:"Ã",auml:"ä",Auml:"Ä",awconint:"∳",awint:"⨑",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",Backslash:"∖",Barv:"⫧",barvee:"⊽",barwed:"⌅",Barwed:"⌆",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",bcy:"б",Bcy:"Б",bdquo:"„",becaus:"∵",because:"∵",Because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",Bernoullis:"ℬ",beta:"β",Beta:"Β",beth:"ℶ",between:"≬",bfr:"𝔟",Bfr:"𝔅",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bnot:"⌐",bNot:"⫭",bopf:"𝕓",Bopf:"𝔹",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxbox:"⧉",boxdl:"┐",boxdL:"╕",boxDl:"╖",boxDL:"╗",boxdr:"┌",boxdR:"╒",boxDr:"╓",boxDR:"╔",boxh:"─",boxH:"═",boxhd:"┬",boxhD:"╥",boxHd:"╤",boxHD:"╦",boxhu:"┴",boxhU:"╨",boxHu:"╧",boxHU:"╩",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxul:"┘",boxuL:"╛",boxUl:"╜",boxUL:"╝",boxur:"└",boxuR:"╘",boxUr:"╙",boxUR:"╚",boxv:"│",boxV:"║",boxvh:"┼",boxvH:"╪",boxVh:"╫",boxVH:"╬",boxvl:"┤",boxvL:"╡",boxVl:"╢",boxVL:"╣",boxvr:"├",boxvR:"╞",boxVr:"╟",boxVR:"╠",bprime:"‵",breve:"˘",Breve:"˘",brvbar:"¦",bscr:"𝒷",Bscr:"ℬ",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpe:"≏",bumpE:"⪮",bumpeq:"≏",Bumpeq:"≎",cacute:"ć",Cacute:"Ć",cap:"∩",Cap:"⋒",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",CapitalDifferentialD:"ⅅ",caps:"∩︀",caret:"⁁",caron:"ˇ",Cayleys:"ℭ",ccaps:"⩍",ccaron:"č",Ccaron:"Č",ccedil:"ç",Ccedil:"Ç",ccirc:"ĉ",Ccirc:"Ĉ",Cconint:"∰",ccups:"⩌",ccupssm:"⩐",cdot:"ċ",Cdot:"Ċ",cedil:"¸",Cedilla:"¸",cemptyv:"⦲",cent:"¢",centerdot:"·",CenterDot:"·",cfr:"𝔠",Cfr:"ℭ",chcy:"ч",CHcy:"Ч",check:"✓",checkmark:"✓",chi:"χ",Chi:"Χ",cir:"○",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",CircleDot:"⊙",circledR:"®",circledS:"Ⓢ",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",cire:"≗",cirE:"⧃",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",clubs:"♣",clubsuit:"♣",colon:":",Colon:"∷",colone:"≔",Colone:"⩴",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",Congruent:"≡",conint:"∮",Conint:"∯",ContourIntegral:"∮",copf:"𝕔",Copf:"ℂ",coprod:"∐",Coproduct:"∐",copy:"©",COPY:"©",copysr:"℗",CounterClockwiseContourIntegral:"∳",crarr:"↵",cross:"✗",Cross:"⨯",cscr:"𝒸",Cscr:"𝒞",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cup:"∪",Cup:"⋓",cupbrcap:"⩈",cupcap:"⩆",CupCap:"≍",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dagger:"†",Dagger:"‡",daleth:"ℸ",darr:"↓",dArr:"⇓",Darr:"↡",dash:"‐",dashv:"⊣",Dashv:"⫤",dbkarow:"⤏",dblac:"˝",dcaron:"ď",Dcaron:"Ď",dcy:"д",Dcy:"Д",dd:"ⅆ",DD:"ⅅ",ddagger:"‡",ddarr:"⇊",DDotrahd:"⤑",ddotseq:"⩷",deg:"°",Del:"∇",delta:"δ",Delta:"Δ",demptyv:"⦱",dfisht:"⥿",dfr:"𝔡",Dfr:"𝔇",dHar:"⥥",dharl:"⇃",dharr:"⇂",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",diam:"⋄",diamond:"⋄",Diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",DifferentialD:"ⅆ",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",djcy:"ђ",DJcy:"Ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",dopf:"𝕕",Dopf:"𝔻",dot:"˙",Dot:"¨",DotDot:"⃜",doteq:"≐",doteqdot:"≑",DotEqual:"≐",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",downarrow:"↓",Downarrow:"⇓",DownArrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",dscr:"𝒹",Dscr:"𝒟",dscy:"ѕ",DScy:"Ѕ",dsol:"⧶",dstrok:"đ",Dstrok:"Đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",dzcy:"џ",DZcy:"Џ",dzigrarr:"⟿",eacute:"é",Eacute:"É",easter:"⩮",ecaron:"ě",Ecaron:"Ě",ecir:"≖",ecirc:"ê",Ecirc:"Ê",ecolon:"≕",ecy:"э",Ecy:"Э",eDDot:"⩷",edot:"ė",eDot:"≑",Edot:"Ė",ee:"ⅇ",efDot:"≒",efr:"𝔢",Efr:"𝔈",eg:"⪚",egrave:"è",Egrave:"È",egs:"⪖",egsdot:"⪘",el:"⪙",Element:"∈",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",emacr:"ē",Emacr:"Ē",empty:"∅",emptyset:"∅",EmptySmallSquare:"◻",emptyv:"∅",EmptyVerySmallSquare:"▫",emsp:" ",emsp13:" ",emsp14:" ",eng:"ŋ",ENG:"Ŋ",ensp:" ",eogon:"ę",Eogon:"Ę",eopf:"𝕖",Eopf:"𝔼",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",epsilon:"ε",Epsilon:"Ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",Equal:"⩵",equals:"=",EqualTilde:"≂",equest:"≟",Equilibrium:"⇌",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erarr:"⥱",erDot:"≓",escr:"ℯ",Escr:"ℰ",esdot:"≐",esim:"≂",Esim:"⩳",eta:"η",Eta:"Η",eth:"ð",ETH:"Ð",euml:"ë",Euml:"Ë",euro:"€",excl:"!",exist:"∃",Exists:"∃",expectation:"ℰ",exponentiale:"ⅇ",ExponentialE:"ⅇ",fallingdotseq:"≒",fcy:"ф",Fcy:"Ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",ffr:"𝔣",Ffr:"𝔉",filig:"ﬁ",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",fopf:"𝕗",Fopf:"𝔽",forall:"∀",ForAll:"∀",fork:"⋔",forkv:"⫙",Fouriertrf:"ℱ",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"𝒻",Fscr:"ℱ",gacute:"ǵ",gamma:"γ",Gamma:"Γ",gammad:"ϝ",Gammad:"Ϝ",gap:"⪆",gbreve:"ğ",Gbreve:"Ğ",Gcedil:"Ģ",gcirc:"ĝ",Gcirc:"Ĝ",gcy:"г",Gcy:"Г",gdot:"ġ",Gdot:"Ġ",ge:"≥",gE:"≧",gel:"⋛",gEl:"⪌",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",gfr:"𝔤",Gfr:"𝔊",gg:"≫",Gg:"⋙",ggg:"⋙",gimel:"ℷ",gjcy:"ѓ",GJcy:"Ѓ",gl:"≷",gla:"⪥",glE:"⪒",glj:"⪤",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gnE:"≩",gneq:"⪈",gneqq:"≩",gnsim:"⋧",gopf:"𝕘",Gopf:"𝔾",grave:"`",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",gscr:"ℊ",Gscr:"𝒢",gsim:"≳",gsime:"⪎",gsiml:"⪐",gt:">",Gt:"≫",GT:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",Hacek:"ˇ",hairsp:" ",half:"½",hamilt:"ℋ",hardcy:"ъ",HARDcy:"Ъ",harr:"↔",hArr:"⇔",harrcir:"⥈",harrw:"↭",Hat:"^",hbar:"ℏ",hcirc:"ĥ",Hcirc:"Ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"𝔥",Hfr:"ℌ",HilbertSpace:"ℋ",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"𝕙",Hopf:"ℍ",horbar:"―",HorizontalLine:"─",hscr:"𝒽",Hscr:"ℋ",hslash:"ℏ",hstrok:"ħ",Hstrok:"Ħ",HumpDownHump:"≎",HumpEqual:"≏",hybull:"⁃",hyphen:"‐",iacute:"í",Iacute:"Í",ic:"⁣",icirc:"î",Icirc:"Î",icy:"и",Icy:"И",Idot:"İ",iecy:"е",IEcy:"Е",iexcl:"¡",iff:"⇔",ifr:"𝔦",Ifr:"ℑ",igrave:"ì",Igrave:"Ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",ijlig:"ĳ",IJlig:"Ĳ",Im:"ℑ",imacr:"ī",Imacr:"Ī",image:"ℑ",ImaginaryI:"ⅈ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",Implies:"⇒",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",int:"∫",Int:"∬",intcal:"⊺",integers:"ℤ",Integral:"∫",intercal:"⊺",Intersection:"⋂",intlarhk:"⨗",intprod:"⨼",InvisibleComma:"⁣",InvisibleTimes:"⁢",iocy:"ё",IOcy:"Ё",iogon:"į",Iogon:"Į",iopf:"𝕚",Iopf:"𝕀",iota:"ι",Iota:"Ι",iprod:"⨼",iquest:"¿",iscr:"𝒾",Iscr:"ℐ",isin:"∈",isindot:"⋵",isinE:"⋹",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",itilde:"ĩ",Itilde:"Ĩ",iukcy:"і",Iukcy:"І",iuml:"ï",Iuml:"Ï",jcirc:"ĵ",Jcirc:"Ĵ",jcy:"й",Jcy:"Й",jfr:"𝔧",Jfr:"𝔍",jmath:"ȷ",jopf:"𝕛",Jopf:"𝕁",jscr:"𝒿",Jscr:"𝒥",jsercy:"ј",Jsercy:"Ј",jukcy:"є",Jukcy:"Є",kappa:"κ",Kappa:"Κ",kappav:"ϰ",kcedil:"ķ",Kcedil:"Ķ",kcy:"к",Kcy:"К",kfr:"𝔨",Kfr:"𝔎",kgreen:"ĸ",khcy:"х",KHcy:"Х",kjcy:"ќ",KJcy:"Ќ",kopf:"𝕜",Kopf:"𝕂",kscr:"𝓀",Kscr:"𝒦",lAarr:"⇚",lacute:"ĺ",Lacute:"Ĺ",laemptyv:"⦴",lagran:"ℒ",lambda:"λ",Lambda:"Λ",lang:"⟨",Lang:"⟪",langd:"⦑",langle:"⟨",lap:"⪅",Laplacetrf:"ℒ",laquo:"«",larr:"←",lArr:"⇐",Larr:"↞",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",latail:"⤙",lAtail:"⤛",late:"⪭",lates:"⪭︀",lbarr:"⤌",lBarr:"⤎",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",lcaron:"ľ",Lcaron:"Ľ",lcedil:"ļ",Lcedil:"Ļ",lceil:"⌈",lcub:"{",lcy:"л",Lcy:"Л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",lE:"≦",LeftAngleBracket:"⟨",leftarrow:"←",Leftarrow:"⇐",LeftArrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",leftarrowtail:"↢",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",Leftrightarrow:"⇔",LeftRightArrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",leftthreetimes:"⋋",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",leg:"⋚",lEg:"⪋",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",lessgtr:"≶",LessLess:"⪡",lesssim:"≲",LessSlantEqual:"⩽",LessTilde:"≲",lfisht:"⥼",lfloor:"⌊",lfr:"𝔩",Lfr:"𝔏",lg:"≶",lgE:"⪑",lHar:"⥢",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",ljcy:"љ",LJcy:"Љ",ll:"≪",Ll:"⋘",llarr:"⇇",llcorner:"⌞",Lleftarrow:"⇚",llhard:"⥫",lltri:"◺",lmidot:"ŀ",Lmidot:"Ŀ",lmoust:"⎰",lmoustache:"⎰",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lnE:"≨",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",Longleftarrow:"⟸",LongLeftArrow:"⟵",longleftrightarrow:"⟷",Longleftrightarrow:"⟺",LongLeftRightArrow:"⟷",longmapsto:"⟼",longrightarrow:"⟶",Longrightarrow:"⟹",LongRightArrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",lopf:"𝕝",Lopf:"𝕃",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",LowerLeftArrow:"↙",LowerRightArrow:"↘",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"𝓁",Lscr:"ℒ",lsh:"↰",Lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",lstrok:"ł",Lstrok:"Ł",lt:"<",Lt:"≪",LT:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltri:"◃",ltrie:"⊴",ltrif:"◂",ltrPar:"⦖",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",macr:"¯",male:"♂",malt:"✠",maltese:"✠",map:"↦",Map:"⤅",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",mcy:"м",Mcy:"М",mdash:"—",mDDot:"∺",measuredangle:"∡",MediumSpace:" ",Mellintrf:"ℳ",mfr:"𝔪",Mfr:"𝔐",mho:"℧",micro:"µ",mid:"∣",midast:"*",midcir:"⫰",middot:"·",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",MinusPlus:"∓",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",mopf:"𝕞",Mopf:"𝕄",mp:"∓",mscr:"𝓂",Mscr:"ℳ",mstpos:"∾",mu:"μ",Mu:"Μ",multimap:"⊸",mumap:"⊸",nabla:"∇",nacute:"ń",Nacute:"Ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",ncaron:"ň",Ncaron:"Ň",ncedil:"ņ",Ncedil:"Ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",ncy:"н",Ncy:"Н",ndash:"–",ne:"≠",nearhk:"⤤",nearr:"↗",neArr:"⇗",nearrow:"↗",nedot:"≐̸",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",nequiv:"≢",nesear:"⤨",nesim:"≂̸",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:`
`,nexist:"∄",nexists:"∄",nfr:"𝔫",Nfr:"𝔑",nge:"≱",ngE:"≧̸",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",nGg:"⋙̸",ngsim:"≵",ngt:"≯",nGt:"≫⃒",ngtr:"≯",nGtv:"≫̸",nharr:"↮",nhArr:"⇎",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",njcy:"њ",NJcy:"Њ",nlarr:"↚",nlArr:"⇍",nldr:"‥",nle:"≰",nlE:"≦̸",nleftarrow:"↚",nLeftarrow:"⇍",nleftrightarrow:"↮",nLeftrightarrow:"⇎",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nLl:"⋘̸",nlsim:"≴",nlt:"≮",nLt:"≪⃒",nltri:"⋪",nltrie:"⋬",nLtv:"≪̸",nmid:"∤",NoBreak:"⁠",NonBreakingSpace:" ",nopf:"𝕟",Nopf:"ℕ",not:"¬",Not:"⫬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",notin:"∉",notindot:"⋵̸",notinE:"⋹̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrarr:"↛",nrArr:"⇏",nrarrc:"⤳̸",nrarrw:"↝̸",nrightarrow:"↛",nRightarrow:"⇏",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",nscr:"𝓃",Nscr:"𝒩",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsube:"⊈",nsubE:"⫅̸",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupe:"⊉",nsupE:"⫆̸",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",ntilde:"ñ",Ntilde:"Ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",nu:"ν",Nu:"Ν",num:"#",numero:"№",numsp:" ",nvap:"≍⃒",nvdash:"⊬",nvDash:"⊭",nVdash:"⊮",nVDash:"⊯",nvge:"≥⃒",nvgt:">⃒",nvHarr:"⤄",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwarhk:"⤣",nwarr:"↖",nwArr:"⇖",nwarrow:"↖",nwnear:"⤧",oacute:"ó",Oacute:"Ó",oast:"⊛",ocir:"⊚",ocirc:"ô",Ocirc:"Ô",ocy:"о",Ocy:"О",odash:"⊝",odblac:"ő",Odblac:"Ő",odiv:"⨸",odot:"⊙",odsold:"⦼",oelig:"œ",OElig:"Œ",ofcir:"⦿",ofr:"𝔬",Ofr:"𝔒",ogon:"˛",ograve:"ò",Ograve:"Ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",omacr:"ō",Omacr:"Ō",omega:"ω",Omega:"Ω",omicron:"ο",Omicron:"Ο",omid:"⦶",ominus:"⊖",oopf:"𝕠",Oopf:"𝕆",opar:"⦷",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",operp:"⦹",oplus:"⊕",or:"∨",Or:"⩔",orarr:"↻",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oS:"Ⓢ",oscr:"ℴ",Oscr:"𝒪",oslash:"ø",Oslash:"Ø",osol:"⊘",otilde:"õ",Otilde:"Õ",otimes:"⊗",Otimes:"⨷",otimesas:"⨶",ouml:"ö",Ouml:"Ö",ovbar:"⌽",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",par:"∥",para:"¶",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",PartialD:"∂",pcy:"п",Pcy:"П",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",pfr:"𝔭",Pfr:"𝔓",phi:"φ",Phi:"Φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",pi:"π",Pi:"Π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",PlusMinus:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",Poincareplane:"ℌ",pointint:"⨕",popf:"𝕡",Popf:"ℙ",pound:"£",pr:"≺",Pr:"⪻",prap:"⪷",prcue:"≼",pre:"⪯",prE:"⪳",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",prime:"′",Prime:"″",primes:"ℙ",prnap:"⪹",prnE:"⪵",prnsim:"⋨",prod:"∏",Product:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",Proportion:"∷",Proportional:"∝",propto:"∝",prsim:"≾",prurel:"⊰",pscr:"𝓅",Pscr:"𝒫",psi:"ψ",Psi:"Ψ",puncsp:" ",qfr:"𝔮",Qfr:"𝔔",qint:"⨌",qopf:"𝕢",Qopf:"ℚ",qprime:"⁗",qscr:"𝓆",Qscr:"𝒬",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',QUOT:'"',rAarr:"⇛",race:"∽̱",racute:"ŕ",Racute:"Ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",Rang:"⟫",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",rarr:"→",rArr:"⇒",Rarr:"↠",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",rarrtl:"↣",Rarrtl:"⤖",rarrw:"↝",ratail:"⤚",rAtail:"⤜",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rBarr:"⤏",RBarr:"⤐",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",rcaron:"ř",Rcaron:"Ř",rcedil:"ŗ",Rcedil:"Ŗ",rceil:"⌉",rcub:"}",rcy:"р",Rcy:"Р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",Re:"ℜ",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",reg:"®",REG:"®",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",rfisht:"⥽",rfloor:"⌋",rfr:"𝔯",Rfr:"ℜ",rHar:"⥤",rhard:"⇁",rharu:"⇀",rharul:"⥬",rho:"ρ",Rho:"Ρ",rhov:"ϱ",RightAngleBracket:"⟩",rightarrow:"→",Rightarrow:"⇒",RightArrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",rightarrowtail:"↣",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",rightthreetimes:"⋌",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"𝕣",Ropf:"ℝ",roplus:"⨮",rotimes:"⨵",RoundImplies:"⥰",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",Rrightarrow:"⇛",rsaquo:"›",rscr:"𝓇",Rscr:"ℛ",rsh:"↱",Rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",RuleDelayed:"⧴",ruluhar:"⥨",rx:"℞",sacute:"ś",Sacute:"Ś",sbquo:"‚",sc:"≻",Sc:"⪼",scap:"⪸",scaron:"š",Scaron:"Š",sccue:"≽",sce:"⪰",scE:"⪴",scedil:"ş",Scedil:"Ş",scirc:"ŝ",Scirc:"Ŝ",scnap:"⪺",scnE:"⪶",scnsim:"⋩",scpolint:"⨓",scsim:"≿",scy:"с",Scy:"С",sdot:"⋅",sdotb:"⊡",sdote:"⩦",searhk:"⤥",searr:"↘",seArr:"⇘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",sfr:"𝔰",Sfr:"𝔖",sfrown:"⌢",sharp:"♯",shchcy:"щ",SHCHcy:"Щ",shcy:"ш",SHcy:"Ш",ShortDownArrow:"↓",ShortLeftArrow:"←",shortmid:"∣",shortparallel:"∥",ShortRightArrow:"→",ShortUpArrow:"↑",shy:"­",sigma:"σ",Sigma:"Σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",SmallCircle:"∘",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",softcy:"ь",SOFTcy:"Ь",sol:"/",solb:"⧄",solbar:"⌿",sopf:"𝕤",Sopf:"𝕊",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",Sqrt:"√",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",square:"□",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",squarf:"▪",squf:"▪",srarr:"→",sscr:"𝓈",Sscr:"𝒮",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",star:"☆",Star:"⋆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",Sub:"⋐",subdot:"⪽",sube:"⊆",subE:"⫅",subedot:"⫃",submult:"⫁",subne:"⊊",subnE:"⫋",subplus:"⪿",subrarr:"⥹",subset:"⊂",Subset:"⋐",subseteq:"⊆",subseteqq:"⫅",SubsetEqual:"⊆",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",SuchThat:"∋",sum:"∑",Sum:"∑",sung:"♪",sup:"⊃",Sup:"⋑",sup1:"¹",sup2:"²",sup3:"³",supdot:"⪾",supdsub:"⫘",supe:"⊇",supE:"⫆",supedot:"⫄",Superset:"⊃",SupersetEqual:"⊇",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supne:"⊋",supnE:"⫌",supplus:"⫀",supset:"⊃",Supset:"⋑",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swarhk:"⤦",swarr:"↙",swArr:"⇙",swarrow:"↙",swnwar:"⤪",szlig:"ß",Tab:"	",target:"⌖",tau:"τ",Tau:"Τ",tbrk:"⎴",tcaron:"ť",Tcaron:"Ť",tcedil:"ţ",Tcedil:"Ţ",tcy:"т",Tcy:"Т",tdot:"⃛",telrec:"⌕",tfr:"𝔱",Tfr:"𝔗",there4:"∴",therefore:"∴",Therefore:"∴",theta:"θ",Theta:"Θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",ThickSpace:"  ",thinsp:" ",ThinSpace:" ",thkap:"≈",thksim:"∼",thorn:"þ",THORN:"Þ",tilde:"˜",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",times:"×",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",topf:"𝕥",Topf:"𝕋",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",TRADE:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",TripleDot:"⃛",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",tscr:"𝓉",Tscr:"𝒯",tscy:"ц",TScy:"Ц",tshcy:"ћ",TSHcy:"Ћ",tstrok:"ŧ",Tstrok:"Ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",uacute:"ú",Uacute:"Ú",uarr:"↑",uArr:"⇑",Uarr:"↟",Uarrocir:"⥉",ubrcy:"ў",Ubrcy:"Ў",ubreve:"ŭ",Ubreve:"Ŭ",ucirc:"û",Ucirc:"Û",ucy:"у",Ucy:"У",udarr:"⇅",udblac:"ű",Udblac:"Ű",udhar:"⥮",ufisht:"⥾",ufr:"𝔲",Ufr:"𝔘",ugrave:"ù",Ugrave:"Ù",uHar:"⥣",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",umacr:"ū",Umacr:"Ū",uml:"¨",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",uogon:"ų",Uogon:"Ų",uopf:"𝕦",Uopf:"𝕌",uparrow:"↑",Uparrow:"⇑",UpArrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",updownarrow:"↕",Updownarrow:"⇕",UpDownArrow:"↕",UpEquilibrium:"⥮",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",UpperLeftArrow:"↖",UpperRightArrow:"↗",upsi:"υ",Upsi:"ϒ",upsih:"ϒ",upsilon:"υ",Upsilon:"Υ",UpTee:"⊥",UpTeeArrow:"↥",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",uring:"ů",Uring:"Ů",urtri:"◹",uscr:"𝓊",Uscr:"𝒰",utdot:"⋰",utilde:"ũ",Utilde:"Ũ",utri:"▵",utrif:"▴",uuarr:"⇈",uuml:"ü",Uuml:"Ü",uwangle:"⦧",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",vArr:"⇕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vBar:"⫨",Vbar:"⫫",vBarv:"⫩",vcy:"в",Vcy:"В",vdash:"⊢",vDash:"⊨",Vdash:"⊩",VDash:"⊫",Vdashl:"⫦",vee:"∨",Vee:"⋁",veebar:"⊻",veeeq:"≚",vellip:"⋮",verbar:"|",Verbar:"‖",vert:"|",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",vfr:"𝔳",Vfr:"𝔙",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",vopf:"𝕧",Vopf:"𝕍",vprop:"∝",vrtri:"⊳",vscr:"𝓋",Vscr:"𝒱",vsubne:"⊊︀",vsubnE:"⫋︀",vsupne:"⊋︀",vsupnE:"⫌︀",Vvdash:"⊪",vzigzag:"⦚",wcirc:"ŵ",Wcirc:"Ŵ",wedbar:"⩟",wedge:"∧",Wedge:"⋀",wedgeq:"≙",weierp:"℘",wfr:"𝔴",Wfr:"𝔚",wopf:"𝕨",Wopf:"𝕎",wp:"℘",wr:"≀",wreath:"≀",wscr:"𝓌",Wscr:"𝒲",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",xfr:"𝔵",Xfr:"𝔛",xharr:"⟷",xhArr:"⟺",xi:"ξ",Xi:"Ξ",xlarr:"⟵",xlArr:"⟸",xmap:"⟼",xnis:"⋻",xodot:"⨀",xopf:"𝕩",Xopf:"𝕏",xoplus:"⨁",xotime:"⨂",xrarr:"⟶",xrArr:"⟹",xscr:"𝓍",Xscr:"𝒳",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",yacute:"ý",Yacute:"Ý",yacy:"я",YAcy:"Я",ycirc:"ŷ",Ycirc:"Ŷ",ycy:"ы",Ycy:"Ы",yen:"¥",yfr:"𝔶",Yfr:"𝔜",yicy:"ї",YIcy:"Ї",yopf:"𝕪",Yopf:"𝕐",yscr:"𝓎",Yscr:"𝒴",yucy:"ю",YUcy:"Ю",yuml:"ÿ",Yuml:"Ÿ",zacute:"ź",Zacute:"Ź",zcaron:"ž",Zcaron:"Ž",zcy:"з",Zcy:"З",zdot:"ż",Zdot:"Ż",zeetrf:"ℨ",ZeroWidthSpace:"​",zeta:"ζ",Zeta:"Ζ",zfr:"𝔷",Zfr:"ℨ",zhcy:"ж",ZHcy:"Ж",zigrarr:"⇝",zopf:"𝕫",Zopf:"ℤ",zscr:"𝓏",Zscr:"𝒵",zwj:"‍",zwnj:"‌"},Au={aacute:"á",Aacute:"Á",acirc:"â",Acirc:"Â",acute:"´",aelig:"æ",AElig:"Æ",agrave:"à",Agrave:"À",amp:"&",AMP:"&",aring:"å",Aring:"Å",atilde:"ã",Atilde:"Ã",auml:"ä",Auml:"Ä",brvbar:"¦",ccedil:"ç",Ccedil:"Ç",cedil:"¸",cent:"¢",copy:"©",COPY:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",Eacute:"É",ecirc:"ê",Ecirc:"Ê",egrave:"è",Egrave:"È",eth:"ð",ETH:"Ð",euml:"ë",Euml:"Ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",GT:">",iacute:"í",Iacute:"Í",icirc:"î",Icirc:"Î",iexcl:"¡",igrave:"ì",Igrave:"Ì",iquest:"¿",iuml:"ï",Iuml:"Ï",laquo:"«",lt:"<",LT:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",Ntilde:"Ñ",oacute:"ó",Oacute:"Ó",ocirc:"ô",Ocirc:"Ô",ograve:"ò",Ograve:"Ò",ordf:"ª",ordm:"º",oslash:"ø",Oslash:"Ø",otilde:"õ",Otilde:"Õ",ouml:"ö",Ouml:"Ö",para:"¶",plusmn:"±",pound:"£",quot:'"',QUOT:'"',raquo:"»",reg:"®",REG:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",THORN:"Þ",times:"×",uacute:"ú",Uacute:"Ú",ucirc:"û",Ucirc:"Û",ugrave:"ù",Ugrave:"Ù",uml:"¨",uuml:"ü",Uuml:"Ü",yacute:"ý",Yacute:"Ý",yen:"¥",yuml:"ÿ"},du={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"},nu=[1,2,3,4,5,6,7,8,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,64976,64977,64978,64979,64980,64981,64982,64983,64984,64985,64986,64987,64988,64989,64990,64991,64992,64993,64994,64995,64996,64997,64998,64999,65e3,65001,65002,65003,65004,65005,65006,65007,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111],Su=String.fromCharCode,P={},Cu=P.hasOwnProperty,gu=function(U,h){return Cu.call(U,h)},Tu=function(U,h){for(var C=-1,R=U.length;++C<R;)if(U[C]==h)return!0;return!1},yu=function(U,h){if(!U)return h;var C={},R;for(R in h)C[R]=gu(U,R)?U[R]:h[R];return C},Fa=function(U,h){var C="";return U>=55296&&U<=57343||U>1114111?(h&&Hu("character reference outside the permissible Unicode range"),"�"):gu(du,U)?(h&&Hu("disallowed character reference"),du[U]):(h&&Tu(nu,U)&&Hu("disallowed character reference"),U>65535&&(U-=65536,C+=Su(U>>>10&1023|55296),U=56320|U&1023),C+=Su(U),C)},Ca=function(U){return"&#x"+U.toString(16).toUpperCase()+";"},Fu=function(U){return"&#"+U+";"},Hu=function(U){throw Error("Parse error: "+U)},Ba=function(U,h){h=yu(h,Ba.options);var C=h.strict;C&&j.test(U)&&Hu("forbidden code point");var R=h.encodeEverything,M=h.useNamedReferences,H=h.allowUnsafeSymbols,uu=h.decimal?Fu:Ca,X=function(iu){return uu(iu.charCodeAt(0))};return R?(U=U.replace(z,function(iu){return M&&gu(w,iu)?"&"+w[iu]+";":X(iu)}),M&&(U=U.replace(/&gt;\u20D2/g,"&nvgt;").replace(/&lt;\u20D2/g,"&nvlt;").replace(/&#x66;&#x6A;/g,"&fjlig;")),M&&(U=U.replace(x,function(iu){return"&"+w[iu]+";"}))):M?(H||(U=U.replace(F,function(iu){return"&"+w[iu]+";"})),U=U.replace(/&gt;\u20D2/g,"&nvgt;").replace(/&lt;\u20D2/g,"&nvlt;"),U=U.replace(x,function(iu){return"&"+w[iu]+";"})):H||(U=U.replace(F,X)),U.replace(E,function(iu){var ou=iu.charCodeAt(0),pa=iu.charCodeAt(1),Zt=(ou-55296)*1024+pa-56320+65536;return uu(Zt)}).replace(O,X)};Ba.options={allowUnsafeSymbols:!1,encodeEverything:!1,strict:!1,useNamedReferences:!1,decimal:!1};var wu=function(U,h){h=yu(h,wu.options);var C=h.strict;return C&&fu.test(U)&&Hu("malformed character reference"),U.replace(k,function(R,M,H,uu,X,iu,ou,pa,Zt){var Ha,tt,Kt,Jt,Pt,Wt;return M?(Pt=M,K[Pt]):H?(Pt=H,Wt=uu,Wt&&h.isAttributeValue?(C&&Wt=="="&&Hu("`&` did not start a character reference"),R):(C&&Hu("named character reference was not terminated by a semicolon"),Au[Pt]+(Wt||""))):X?(Kt=X,tt=iu,C&&!tt&&Hu("character reference was not terminated by a semicolon"),Ha=parseInt(Kt,10),Fa(Ha,C)):ou?(Jt=ou,tt=pa,C&&!tt&&Hu("character reference was not terminated by a semicolon"),Ha=parseInt(Jt,16),Fa(Ha,C)):(C&&Hu("named character reference was not terminated by a semicolon"),R)})};wu.options={isAttributeValue:!1,strict:!1};var B=function(U){return U.replace(F,function(h){return V[h]})},_={version:"1.2.0",encode:Ba,decode:wu,escape:B,unescape:wu};if(o&&!o.nodeType)if(b)b.exports=_;else for(var Y in _)gu(_,Y)&&(o[Y]=_[Y]);else f.he=_})(B1)})(Nn,Nn.exports)),Nn.exports}var q1=S1();const Co=jf(q1);function O1(c){let i,f,o;for(o=c.length-1;o>0;o--)i=Math.floor(Math.random()*(o+1)),f=c[o],c[o]=c[i],c[i]=f;return c}function Xf(c){var i,f,o="";if(typeof c=="string"||typeof c=="number")o+=c;else if(typeof c=="object")if(Array.isArray(c)){var b=c.length;for(i=0;i<b;i++)c[i]&&(f=Xf(c[i]))&&(o&&(o+=" "),o+=f)}else for(f in c)c[f]&&(o&&(o+=" "),o+=f);return o}function T1(){for(var c,i,f=0,o="",b=arguments.length;f<b;f++)(c=arguments[f])&&(i=Xf(c))&&(o&&(o+=" "),o+=i);return o}var Bo,Nf;function w1(){if(Nf)return Bo;Nf=1;var c={linear:function(i,f,o,b){var p=o-f;return p*i/b+f},easeInQuad:function(i,f,o,b){var p=o-f;return p*(i/=b)*i+f},easeOutQuad:function(i,f,o,b){var p=o-f;return-p*(i/=b)*(i-2)+f},easeInOutQuad:function(i,f,o,b){var p=o-f;return(i/=b/2)<1?p/2*i*i+f:-p/2*(--i*(i-2)-1)+f},easeInCubic:function(i,f,o,b){var p=o-f;return p*(i/=b)*i*i+f},easeOutCubic:function(i,f,o,b){var p=o-f;return p*((i=i/b-1)*i*i+1)+f},easeInOutCubic:function(i,f,o,b){var p=o-f;return(i/=b/2)<1?p/2*i*i*i+f:p/2*((i-=2)*i*i+2)+f},easeInQuart:function(i,f,o,b){var p=o-f;return p*(i/=b)*i*i*i+f},easeOutQuart:function(i,f,o,b){var p=o-f;return-p*((i=i/b-1)*i*i*i-1)+f},easeInOutQuart:function(i,f,o,b){var p=o-f;return(i/=b/2)<1?p/2*i*i*i*i+f:-p/2*((i-=2)*i*i*i-2)+f},easeInQuint:function(i,f,o,b){var p=o-f;return p*(i/=b)*i*i*i*i+f},easeOutQuint:function(i,f,o,b){var p=o-f;return p*((i=i/b-1)*i*i*i*i+1)+f},easeInOutQuint:function(i,f,o,b){var p=o-f;return(i/=b/2)<1?p/2*i*i*i*i*i+f:p/2*((i-=2)*i*i*i*i+2)+f},easeInSine:function(i,f,o,b){var p=o-f;return-p*Math.cos(i/b*(Math.PI/2))+p+f},easeOutSine:function(i,f,o,b){var p=o-f;return p*Math.sin(i/b*(Math.PI/2))+f},easeInOutSine:function(i,f,o,b){var p=o-f;return-p/2*(Math.cos(Math.PI*i/b)-1)+f},easeInExpo:function(i,f,o,b){var p=o-f;return i==0?f:p*Math.pow(2,10*(i/b-1))+f},easeOutExpo:function(i,f,o,b){var p=o-f;return i==b?f+p:p*(-Math.pow(2,-10*i/b)+1)+f},easeInOutExpo:function(i,f,o,b){var p=o-f;return i===0?f:i===b?f+p:(i/=b/2)<1?p/2*Math.pow(2,10*(i-1))+f:p/2*(-Math.pow(2,-10*--i)+2)+f},easeInCirc:function(i,f,o,b){var p=o-f;return-p*(Math.sqrt(1-(i/=b)*i)-1)+f},easeOutCirc:function(i,f,o,b){var p=o-f;return p*Math.sqrt(1-(i=i/b-1)*i)+f},easeInOutCirc:function(i,f,o,b){var p=o-f;return(i/=b/2)<1?-p/2*(Math.sqrt(1-i*i)-1)+f:p/2*(Math.sqrt(1-(i-=2)*i)+1)+f},easeInElastic:function(i,f,o,b){var p=o-f,E,z,O;return O=1.70158,z=0,E=p,i===0?f:(i/=b)===1?f+p:(z||(z=b*.3),E<Math.abs(p)?(E=p,O=z/4):O=z/(2*Math.PI)*Math.asin(p/E),-(E*Math.pow(2,10*(i-=1))*Math.sin((i*b-O)*(2*Math.PI)/z))+f)},easeOutElastic:function(i,f,o,b){var p=o-f,E,z,O;return O=1.70158,z=0,E=p,i===0?f:(i/=b)===1?f+p:(z||(z=b*.3),E<Math.abs(p)?(E=p,O=z/4):O=z/(2*Math.PI)*Math.asin(p/E),E*Math.pow(2,-10*i)*Math.sin((i*b-O)*(2*Math.PI)/z)+p+f)},easeInOutElastic:function(i,f,o,b){var p=o-f,E,z,O;return O=1.70158,z=0,E=p,i===0?f:(i/=b/2)===2?f+p:(z||(z=b*(.3*1.5)),E<Math.abs(p)?(E=p,O=z/4):O=z/(2*Math.PI)*Math.asin(p/E),i<1?-.5*(E*Math.pow(2,10*(i-=1))*Math.sin((i*b-O)*(2*Math.PI)/z))+f:E*Math.pow(2,-10*(i-=1))*Math.sin((i*b-O)*(2*Math.PI)/z)*.5+p+f)},easeInBack:function(i,f,o,b,p){var E=o-f;return p===void 0&&(p=1.70158),E*(i/=b)*i*((p+1)*i-p)+f},easeOutBack:function(i,f,o,b,p){var E=o-f;return p===void 0&&(p=1.70158),E*((i=i/b-1)*i*((p+1)*i+p)+1)+f},easeInOutBack:function(i,f,o,b,p){var E=o-f;return p===void 0&&(p=1.70158),(i/=b/2)<1?E/2*(i*i*(((p*=1.525)+1)*i-p))+f:E/2*((i-=2)*i*(((p*=1.525)+1)*i+p)+2)+f},easeInBounce:function(i,f,o,b){var p=o-f,E;return E=c.easeOutBounce(b-i,0,p,b),p-E+f},easeOutBounce:function(i,f,o,b){var p=o-f;return(i/=b)<1/2.75?p*(7.5625*i*i)+f:i<2/2.75?p*(7.5625*(i-=1.5/2.75)*i+.75)+f:i<2.5/2.75?p*(7.5625*(i-=2.25/2.75)*i+.9375)+f:p*(7.5625*(i-=2.625/2.75)*i+.984375)+f},easeInOutBounce:function(i,f,o,b){var p=o-f,E;return i<b/2?(E=c.easeInBounce(i*2,0,p,b),E*.5+f):(E=c.easeOutBounce(i*2-b,0,p,b),E*.5+p*.5+f)}};return Bo=c,Bo}var z1=w1();function k1(c){return c*Math.PI/180}function da(c,i){return c+Math.random()*(i-c)}function R1(c,i){return Math.floor(c+Math.random()*(i-c+1))}var Ln;(function(c){c[c.Circle=0]="Circle",c[c.Square=1]="Square",c[c.Strip=2]="Strip"})(Ln||(Ln={}));var Ot;(function(c){c[c.Positive=1]="Positive",c[c.Negative=-1]="Negative"})(Ot||(Ot={}));const M1=1e3/60;class _1{constructor(i,f,o,b){this.getOptions=f;const{colors:p,initialVelocityX:E,initialVelocityY:z}=this.getOptions();this.context=i,this.x=o,this.y=b,this.w=da(5,20),this.h=da(5,20),this.radius=da(5,10),this.vx=typeof E=="number"?da(-E,E):da(E.min,E.max),this.vy=typeof z=="number"?da(-z,0):da(z.min,z.max),this.shape=R1(0,2),this.angle=k1(da(0,360)),this.angularSpin=da(-.2,.2),this.color=p[Math.floor(Math.random()*p.length)],this.rotateY=da(0,1),this.rotationDirection=da(0,1)?Ot.Positive:Ot.Negative}update(i){const{gravity:f,wind:o,friction:b,opacity:p,drawShape:E}=this.getOptions(),z=i/M1;this.x+=this.vx*z,this.y+=this.vy*z,this.vy+=f*z,this.vx+=o*z,this.vx*=b**z,this.vy*=b**z,this.rotateY>=1&&this.rotationDirection===Ot.Positive?this.rotationDirection=Ot.Negative:this.rotateY<=-1&&this.rotationDirection===Ot.Negative&&(this.rotationDirection=Ot.Positive);const O=.1*this.rotationDirection*z;if(this.rotateY+=O,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=p,this.context.lineCap="round",this.context.lineWidth=2,E&&typeof E=="function")E.call(this,this.context);else switch(this.shape){case Ln.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case Ln.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case Ln.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class U1{constructor(i,f){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=b=>{this.particles.splice(b,1)},this.getParticle=()=>{const b=da(this.x,this.w+this.x),p=da(this.y,this.h+this.y);return new _1(this.context,this.getOptions,b,p)},this.animate=b=>{const{canvas:p,context:E,particlesGenerated:z,lastNumberOfPieces:O}=this,{run:x,recycle:w,numberOfPieces:F,debug:V,tweenFunction:fu,tweenDuration:j}=this.getOptions();if(!x)return!1;const k=this.particles.length,K=w?k:z;if(K<F){O!==F&&(this.tweenProgress=0,this.tweenFrom=K,this.lastNumberOfPieces=F),this.tweenProgress=Math.min(j,Math.max(0,this.tweenProgress+b));const Au=fu(this.tweenProgress,this.tweenFrom,F,j),du=Math.round(Au-K);for(let nu=0;nu<du;nu++)this.particles.push(this.getParticle());this.particlesGenerated+=du}V&&(E.font="12px sans-serif",E.fillStyle="#333",E.textAlign="right",E.fillText(`Particles: ${k}`,p.width-10,p.height-20));for(let Au=this.particles.length-1;Au>=0;Au--){const du=this.particles[Au];du.update(b),(du.y>p.height||du.y<-100||du.x>p.width+100||du.x<-100)&&(w&&K<=F?this.particles[Au]=this.getParticle():this.removeParticleAt(Au))}return k>0||K<F},this.canvas=i;const o=this.canvas.getContext("2d");if(!o)throw new Error("Could not get canvas context");this.context=o,this.getOptions=f}}const wo={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:z1.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class N1{constructor(i,f){this.lastFrameTime=0,this.setOptionsWithDefaults=b=>{const p={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...p,...wo,...b},Object.assign(this,b.confettiSource)},this.update=(b=0)=>{const{options:{run:p,onConfettiComplete:E,frameRate:z},canvas:O,context:x}=this,w=Math.min(b-this.lastFrameTime,50);if(z&&w<1e3/z){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=b-(z?w%z:0),p&&(x.fillStyle="white",x.clearRect(0,0,O.width,O.height)),this.generator.animate(w)?this.rafId=requestAnimationFrame(this.update):(E&&typeof E=="function"&&this.generator.particlesGenerated>0&&E.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=i;const o=this.canvas.getContext("2d");if(!o)throw new Error("Could not get canvas context");this.context=o,this.generator=new U1(this.canvas,()=>this.options),this.options=f,this.update()}get options(){return this._options}set options(i){const f=this._options?.run,o=this._options?.recycle;this.setOptionsWithDefaults(i),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof i.recycle=="boolean"&&i.recycle&&o===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof i.run=="boolean"&&i.run&&f===!1&&this.update()}}const F1=ha.createRef();class zo extends ha.Component{constructor(i){super(i),this.canvas=ha.createRef(),this.canvas=i.canvasRef||F1}componentDidMount(){if(this.canvas.current){const i=So(this.props)[0];this.confetti=new N1(this.canvas.current,i)}}componentDidUpdate(){const i=So(this.props)[0];this.confetti&&(this.confetti.options=i)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[i,f]=So(this.props),o={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...f.style};return Du.jsx("canvas",{width:i.width,height:i.height,ref:this.canvas,...f,style:o})}}zo.defaultProps={...wo};zo.displayName="ReactConfetti";function So(c){const i={},f={},o={},b=[...Object.keys(wo),"confettiSource","drawShape","onConfettiComplete","frameRate"],p=["canvasRef"];for(const E in c){const z=c[E];b.includes(E)?i[E]=z:p.includes(E)?p[E]=z:o[E]=z}return[i,o,f]}const H1=ha.forwardRef((c,i)=>Du.jsx(zo,{canvasRef:i,...c}));function Nu(c,i){i===void 0&&(i={});var f=i.insertAt;if(c&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],b=document.createElement("style");b.type="text/css",f==="top"&&o.firstChild?o.insertBefore(b,o.firstChild):o.appendChild(b),b.styleSheet?b.styleSheet.cssText=c:b.appendChild(document.createTextNode(c))}}Nu(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Na=function(){return Na=Object.assign||function(c){for(var i,f=1,o=arguments.length;f<o;f++)for(var b in i=arguments[f])Object.prototype.hasOwnProperty.call(i,b)&&(c[b]=i[b]);return c},Na.apply(this,arguments)};function nr(c){return nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},nr(c)}var L1=/^\s+/,G1=/\s+$/;function G(c,i){if(i=i||{},(c=c||"")instanceof G)return c;if(!(this instanceof G))return new G(c,i);var f=(function(o){var b={r:0,g:0,b:0},p=1,E=null,z=null,O=null,x=!1,w=!1;typeof o=="string"&&(o=(function(j){j=j.replace(L1,"").replace(G1,"").toLowerCase();var k,K=!1;if(Oo[j])j=Oo[j],K=!0;else if(j=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(k=Ta.rgb.exec(j))?{r:k[1],g:k[2],b:k[3]}:(k=Ta.rgba.exec(j))?{r:k[1],g:k[2],b:k[3],a:k[4]}:(k=Ta.hsl.exec(j))?{h:k[1],s:k[2],l:k[3]}:(k=Ta.hsla.exec(j))?{h:k[1],s:k[2],l:k[3],a:k[4]}:(k=Ta.hsv.exec(j))?{h:k[1],s:k[2],v:k[3]}:(k=Ta.hsva.exec(j))?{h:k[1],s:k[2],v:k[3],a:k[4]}:(k=Ta.hex8.exec(j))?{r:fa(k[1]),g:fa(k[2]),b:fa(k[3]),a:Yf(k[4]),format:K?"name":"hex8"}:(k=Ta.hex6.exec(j))?{r:fa(k[1]),g:fa(k[2]),b:fa(k[3]),format:K?"name":"hex"}:(k=Ta.hex4.exec(j))?{r:fa(k[1]+""+k[1]),g:fa(k[2]+""+k[2]),b:fa(k[3]+""+k[3]),a:Yf(k[4]+""+k[4]),format:K?"name":"hex8"}:(k=Ta.hex3.exec(j))?{r:fa(k[1]+""+k[1]),g:fa(k[2]+""+k[2]),b:fa(k[3]+""+k[3]),format:K?"name":"hex"}:!1})(o)),nr(o)=="object"&&(at(o.r)&&at(o.g)&&at(o.b)?(F=o.r,V=o.g,fu=o.b,b={r:255*Eu(F,255),g:255*Eu(V,255),b:255*Eu(fu,255)},x=!0,w=String(o.r).substr(-1)==="%"?"prgb":"rgb"):at(o.h)&&at(o.s)&&at(o.v)?(E=Fn(o.s),z=Fn(o.v),b=(function(j,k,K){j=6*Eu(j,360),k=Eu(k,100),K=Eu(K,100);var Au=Math.floor(j),du=j-Au,nu=K*(1-k),Su=K*(1-du*k),P=K*(1-(1-du)*k),Cu=Au%6,gu=[K,Su,nu,nu,P,K][Cu],Tu=[P,K,K,Su,nu,nu][Cu],yu=[nu,nu,P,K,K,Su][Cu];return{r:255*gu,g:255*Tu,b:255*yu}})(o.h,E,z),x=!0,w="hsv"):at(o.h)&&at(o.s)&&at(o.l)&&(E=Fn(o.s),O=Fn(o.l),b=(function(j,k,K){var Au,du,nu;function Su(gu,Tu,yu){return yu<0&&(yu+=1),yu>1&&(yu-=1),yu<1/6?gu+6*(Tu-gu)*yu:yu<.5?Tu:yu<2/3?gu+(Tu-gu)*(2/3-yu)*6:gu}if(j=Eu(j,360),k=Eu(k,100),K=Eu(K,100),k===0)Au=du=nu=K;else{var P=K<.5?K*(1+k):K+k-K*k,Cu=2*K-P;Au=Su(Cu,P,j+1/3),du=Su(Cu,P,j),nu=Su(Cu,P,j-1/3)}return{r:255*Au,g:255*du,b:255*nu}})(o.h,E,O),x=!0,w="hsl"),o.hasOwnProperty("a")&&(p=o.a));var F,V,fu;return p=Qf(p),{ok:x,format:o.format||w,r:Math.min(255,Math.max(b.r,0)),g:Math.min(255,Math.max(b.g,0)),b:Math.min(255,Math.max(b.b,0)),a:p}})(c);this._originalInput=c,this._r=f.r,this._g=f.g,this._b=f.b,this._a=f.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||f.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=f.ok}function Ff(c,i,f){c=Eu(c,255),i=Eu(i,255),f=Eu(f,255);var o,b,p=Math.max(c,i,f),E=Math.min(c,i,f),z=(p+E)/2;if(p==E)o=b=0;else{var O=p-E;switch(b=z>.5?O/(2-p-E):O/(p+E),p){case c:o=(i-f)/O+(i<f?6:0);break;case i:o=(f-c)/O+2;break;case f:o=(c-i)/O+4}o/=6}return{h:o,s:b,l:z}}function Hf(c,i,f){c=Eu(c,255),i=Eu(i,255),f=Eu(f,255);var o,b,p=Math.max(c,i,f),E=Math.min(c,i,f),z=p,O=p-E;if(b=p===0?0:O/p,p==E)o=0;else{switch(p){case c:o=(i-f)/O+(i<f?6:0);break;case i:o=(f-c)/O+2;break;case f:o=(c-i)/O+4}o/=6}return{h:o,s:b,v:z}}function Lf(c,i,f,o){var b=[wa(Math.round(c).toString(16)),wa(Math.round(i).toString(16)),wa(Math.round(f).toString(16))];return o&&b[0].charAt(0)==b[0].charAt(1)&&b[1].charAt(0)==b[1].charAt(1)&&b[2].charAt(0)==b[2].charAt(1)?b[0].charAt(0)+b[1].charAt(0)+b[2].charAt(0):b.join("")}function Gf(c,i,f,o){return[wa(Zf(o)),wa(Math.round(c).toString(16)),wa(Math.round(i).toString(16)),wa(Math.round(f).toString(16))].join("")}function V1(c,i){i=i===0?0:i||10;var f=G(c).toHsl();return f.s-=i/100,f.s=lr(f.s),G(f)}function Y1(c,i){i=i===0?0:i||10;var f=G(c).toHsl();return f.s+=i/100,f.s=lr(f.s),G(f)}function j1(c){return G(c).desaturate(100)}function X1(c,i){i=i===0?0:i||10;var f=G(c).toHsl();return f.l+=i/100,f.l=lr(f.l),G(f)}function Q1(c,i){i=i===0?0:i||10;var f=G(c).toRgb();return f.r=Math.max(0,Math.min(255,f.r-Math.round(-i/100*255))),f.g=Math.max(0,Math.min(255,f.g-Math.round(-i/100*255))),f.b=Math.max(0,Math.min(255,f.b-Math.round(-i/100*255))),G(f)}function Z1(c,i){i=i===0?0:i||10;var f=G(c).toHsl();return f.l-=i/100,f.l=lr(f.l),G(f)}function K1(c,i){var f=G(c).toHsl(),o=(f.h+i)%360;return f.h=o<0?360+o:o,G(f)}function J1(c){var i=G(c).toHsl();return i.h=(i.h+180)%360,G(i)}function Vf(c,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var f=G(c).toHsl(),o=[G(c)],b=360/i,p=1;p<i;p++)o.push(G({h:(f.h+p*b)%360,s:f.s,l:f.l}));return o}function P1(c){var i=G(c).toHsl(),f=i.h;return[G(c),G({h:(f+72)%360,s:i.s,l:i.l}),G({h:(f+216)%360,s:i.s,l:i.l})]}function W1(c,i,f){i=i||6,f=f||30;var o=G(c).toHsl(),b=360/f,p=[G(c)];for(o.h=(o.h-(b*i>>1)+720)%360;--i;)o.h=(o.h+b)%360,p.push(G(o));return p}function $1(c,i){i=i||6;for(var f=G(c).toHsv(),o=f.h,b=f.s,p=f.v,E=[],z=1/i;i--;)E.push(G({h:o,s:b,v:p})),p=(p+z)%1;return E}G.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var c=this.toRgb();return(299*c.r+587*c.g+114*c.b)/1e3},getLuminance:function(){var c,i,f,o=this.toRgb();return c=o.r/255,i=o.g/255,f=o.b/255,.2126*(c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(f<=.03928?f/12.92:Math.pow((f+.055)/1.055,2.4))},setAlpha:function(c){return this._a=Qf(c),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var c=Hf(this._r,this._g,this._b);return{h:360*c.h,s:c.s,v:c.v,a:this._a}},toHsvString:function(){var c=Hf(this._r,this._g,this._b),i=Math.round(360*c.h),f=Math.round(100*c.s),o=Math.round(100*c.v);return this._a==1?"hsv("+i+", "+f+"%, "+o+"%)":"hsva("+i+", "+f+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var c=Ff(this._r,this._g,this._b);return{h:360*c.h,s:c.s,l:c.l,a:this._a}},toHslString:function(){var c=Ff(this._r,this._g,this._b),i=Math.round(360*c.h),f=Math.round(100*c.s),o=Math.round(100*c.l);return this._a==1?"hsl("+i+", "+f+"%, "+o+"%)":"hsla("+i+", "+f+"%, "+o+"%, "+this._roundA+")"},toHex:function(c){return Lf(this._r,this._g,this._b,c)},toHexString:function(c){return"#"+this.toHex(c)},toHex8:function(c){return(function(i,f,o,b,p){var E=[wa(Math.round(i).toString(16)),wa(Math.round(f).toString(16)),wa(Math.round(o).toString(16)),wa(Zf(b))];return p&&E[0].charAt(0)==E[0].charAt(1)&&E[1].charAt(0)==E[1].charAt(1)&&E[2].charAt(0)==E[2].charAt(1)&&E[3].charAt(0)==E[3].charAt(1)?E[0].charAt(0)+E[1].charAt(0)+E[2].charAt(0)+E[3].charAt(0):E.join("")})(this._r,this._g,this._b,this._a,c)},toHex8String:function(c){return"#"+this.toHex8(c)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Eu(this._r,255))+"%",g:Math.round(100*Eu(this._g,255))+"%",b:Math.round(100*Eu(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Eu(this._r,255))+"%, "+Math.round(100*Eu(this._g,255))+"%, "+Math.round(100*Eu(this._b,255))+"%)":"rgba("+Math.round(100*Eu(this._r,255))+"%, "+Math.round(100*Eu(this._g,255))+"%, "+Math.round(100*Eu(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(I1[Lf(this._r,this._g,this._b,!0)]||!1)},toFilter:function(c){var i="#"+Gf(this._r,this._g,this._b,this._a),f=i,o=this._gradientType?"GradientType = 1, ":"";if(c){var b=G(c);f="#"+Gf(b._r,b._g,b._b,b._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+i+",endColorstr="+f+")"},toString:function(c){var i=!!c;c=c||this._format;var f=!1,o=this._a<1&&this._a>=0;return i||!o||c!=="hex"&&c!=="hex6"&&c!=="hex3"&&c!=="hex4"&&c!=="hex8"&&c!=="name"?(c==="rgb"&&(f=this.toRgbString()),c==="prgb"&&(f=this.toPercentageRgbString()),c!=="hex"&&c!=="hex6"||(f=this.toHexString()),c==="hex3"&&(f=this.toHexString(!0)),c==="hex4"&&(f=this.toHex8String(!0)),c==="hex8"&&(f=this.toHex8String()),c==="name"&&(f=this.toName()),c==="hsl"&&(f=this.toHslString()),c==="hsv"&&(f=this.toHsvString()),f||this.toHexString()):c==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return G(this.toString())},_applyModification:function(c,i){var f=c.apply(null,[this].concat([].slice.call(i)));return this._r=f._r,this._g=f._g,this._b=f._b,this.setAlpha(f._a),this},lighten:function(){return this._applyModification(X1,arguments)},brighten:function(){return this._applyModification(Q1,arguments)},darken:function(){return this._applyModification(Z1,arguments)},desaturate:function(){return this._applyModification(V1,arguments)},saturate:function(){return this._applyModification(Y1,arguments)},greyscale:function(){return this._applyModification(j1,arguments)},spin:function(){return this._applyModification(K1,arguments)},_applyCombination:function(c,i){return c.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(W1,arguments)},complement:function(){return this._applyCombination(J1,arguments)},monochromatic:function(){return this._applyCombination($1,arguments)},splitcomplement:function(){return this._applyCombination(P1,arguments)},triad:function(){return this._applyCombination(Vf,[3])},tetrad:function(){return this._applyCombination(Vf,[4])}},G.fromRatio=function(c,i){if(nr(c)=="object"){var f={};for(var o in c)c.hasOwnProperty(o)&&(f[o]=o==="a"?c[o]:Fn(c[o]));c=f}return G(c,i)},G.equals=function(c,i){return!(!c||!i)&&G(c).toRgbString()==G(i).toRgbString()},G.random=function(){return G.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},G.mix=function(c,i,f){f=f===0?0:f||50;var o=G(c).toRgb(),b=G(i).toRgb(),p=f/100;return G({r:(b.r-o.r)*p+o.r,g:(b.g-o.g)*p+o.g,b:(b.b-o.b)*p+o.b,a:(b.a-o.a)*p+o.a})},G.readability=function(c,i){var f=G(c),o=G(i);return(Math.max(f.getLuminance(),o.getLuminance())+.05)/(Math.min(f.getLuminance(),o.getLuminance())+.05)},G.isReadable=function(c,i,f){var o,b,p=G.readability(c,i);switch(b=!1,(o=(function(E){var z,O;return z=((E=E||{level:"AA",size:"small"}).level||"AA").toUpperCase(),O=(E.size||"small").toLowerCase(),z!=="AA"&&z!=="AAA"&&(z="AA"),O!=="small"&&O!=="large"&&(O="small"),{level:z,size:O}})(f)).level+o.size){case"AAsmall":case"AAAlarge":b=p>=4.5;break;case"AAlarge":b=p>=3;break;case"AAAsmall":b=p>=7}return b},G.mostReadable=function(c,i,f){var o,b,p,E,z=null,O=0;b=(f=f||{}).includeFallbackColors,p=f.level,E=f.size;for(var x=0;x<i.length;x++)(o=G.readability(c,i[x]))>O&&(O=o,z=G(i[x]));return G.isReadable(c,z,{level:p,size:E})||!b?z:(f.includeFallbackColors=!1,G.mostReadable(c,["#fff","#000"],f))};var Oo=G.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},I1=G.hexNames=(function(c){var i={};for(var f in c)c.hasOwnProperty(f)&&(i[c[f]]=f);return i})(Oo);function Qf(c){return c=parseFloat(c),(isNaN(c)||c<0||c>1)&&(c=1),c}function Eu(c,i){(function(o){return typeof o=="string"&&o.indexOf(".")!=-1&&parseFloat(o)===1})(c)&&(c="100%");var f=(function(o){return typeof o=="string"&&o.indexOf("%")!=-1})(c);return c=Math.min(i,Math.max(0,parseFloat(c))),f&&(c=parseInt(c*i,10)/100),Math.abs(c-i)<1e-6?1:c%i/parseFloat(i)}function lr(c){return Math.min(1,Math.max(0,c))}function fa(c){return parseInt(c,16)}function wa(c){return c.length==1?"0"+c:""+c}function Fn(c){return c<=1&&(c=100*c+"%"),c}function Zf(c){return Math.round(255*parseFloat(c)).toString(16)}function Yf(c){return fa(c)/255}var qt,ar,tr,Ta=(ar="[\\s|\\(]+("+(qt="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+qt+")[,|\\s]+("+qt+")\\s*\\)?",tr="[\\s|\\(]+("+qt+")[,|\\s]+("+qt+")[,|\\s]+("+qt+")[,|\\s]+("+qt+")\\s*\\)?",{CSS_UNIT:new RegExp(qt),rgb:new RegExp("rgb"+ar),rgba:new RegExp("rgba"+tr),hsl:new RegExp("hsl"+ar),hsla:new RegExp("hsla"+tr),hsv:new RegExp("hsv"+ar),hsva:new RegExp("hsva"+tr),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function at(c){return!!Ta.CSS_UNIT.exec(c)}var uh=function(c,i){var f=(typeof c=="string"?parseInt(c):c)||0;if(f>=-5&&f<=5){var o=f,b=parseFloat(i),p=b+o*(b/5)*-1;return(p==0||p<=Number.EPSILON)&&(p=.1),{animationPeriod:p+"s"}}return{animationPeriod:i}},ah=function(c,i){var f=c||{},o="";switch(i){case"small":o="12px";break;case"medium":o="16px";break;case"large":o="20px";break;default:o=void 0}var b={};if(f.fontSize){var p=f.fontSize;b=(function(E,z){var O={};for(var x in E)Object.prototype.hasOwnProperty.call(E,x)&&z.indexOf(x)<0&&(O[x]=E[x]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function"){var w=0;for(x=Object.getOwnPropertySymbols(E);w<x.length;w++)z.indexOf(x[w])<0&&Object.prototype.propertyIsEnumerable.call(E,x[w])&&(O[x[w]]=E[x[w]])}return O})(f,["fontSize"]),o=p}return{fontSize:o,styles:b}},th={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},eh=function(c){var i=c.className,f=c.text,o=c.textColor,b=c.staticText,p=c.style;return f?ha.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:Na(Na(Na({},b&&th),o&&{color:o,mixBlendMode:"unset"}),p&&p)},typeof f=="string"&&f.length?f:"loading"):null},Kf="rgb(50, 205, 50)";function nh(c,i){if(i===void 0&&(i=0),c.length===0)throw new Error("Input array cannot be empty!");var f=[];return(function o(b,p){return p===void 0&&(p=0),f.push.apply(f,b),f.length<p&&o(f,p),f.slice(0,p)})(c,i)}Nu(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);G(Kf).toRgb();Array.from({length:4},(function(c,i){return"--atom-phase".concat(i+1,"-rgb")}));Nu(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},(function(c,i){return"--commet-phase".concat(i+1,"-color")}));Nu(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},(function(c,i){return"--OP-annulus-phase".concat(i+1,"-color")}));function qo(c){return c&&c.Math===Math&&c}Nu(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);qo(typeof window=="object"&&window)||qo(typeof self=="object"&&self)||qo(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();Array.from({length:4},(function(c,i){return"--OP-dotted-phase".concat(i+1,"-color")}));Nu(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},(function(c,i){return"--OP-spokes-phase".concat(i+1,"-color")}));Nu(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},(function(c,i){return"--OP-annulus-dual-sectors-phase".concat(i+1,"-color")}));Nu(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},(function(c,i){return["--OP-annulus-track-phase".concat(i+1,"-color"),"--OP-annulus-sector-phase".concat(i+1,"-color")]}));Nu(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},(function(c,i){return"--four-square-phase".concat(i+1,"-color")}));Nu(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},(function(c,i){return"--mosaic-phase".concat(i+1,"-color")}));Nu(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},(function(c,i){return"--riple-phase".concat(i+1,"-color")}));Nu(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},(function(c,i){return"--TD-pulsate-phase".concat(i+1,"-color")}));Nu(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},(function(c,i){return"--TD-brick-stack-phase".concat(i+1,"-color")}));Nu(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},(function(c,i){return"--TD-bob-phase".concat(i+1,"-color")}));Nu(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},(function(c,i){return"--TD-bounce-phase".concat(i+1,"-color")}));Nu(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);var er=Array.from({length:4},(function(c,i){return"--shape-phase".concat(i+1,"-color")})),lh=function(c){var i,f=ah(c?.style,c?.size),o=f.styles,b=f.fontSize,p=c?.easing,E=uh(c?.speedPlus,"1.2s").animationPeriod,z=(function(O){var x={},w=er.length;if(Array.isArray(O)&&O.length>0){for(var F=nh(O,w),V=0;V<F.length&&!(V>w-1);V++){var fu=F[V];x[er[V]]=fu}return x}try{if(typeof O!="string")throw new Error("Color String expected");for(V=0;V<w;V++)x[er[V]]=O}catch(j){for(j instanceof Error?console.warn("[".concat(j.message,']: Received "').concat(typeof O,'" instead with value, ').concat(JSON.stringify(O))):console.warn("".concat(JSON.stringify(O)," received in <BlinkBlur /> indicator cannot be processed. Using default instead!")),V=0;V<w;V++)x[er[V]]=Kf}return x})((i=c?.color)!==null&&i!==void 0?i:"");return ha.createElement("span",{className:"rli-d-i-b blink-blur-rli-bounding-box",style:Na(Na(Na(Na(Na({},b&&{fontSize:b}),E&&{"--rli-animation-duration":E}),p&&{"--rli-animation-function":p}),z),o),role:"status","aria-live":"polite","aria-label":"Loading"},ha.createElement("span",{className:"rli-d-i-b blink-blur-indicator"},ha.createElement("span",{className:"blink-blur-shape blink-blur-shape1"}),ha.createElement("span",{className:"blink-blur-shape blink-blur-shape2"}),ha.createElement("span",{className:"blink-blur-shape blink-blur-shape3"}),ha.createElement("span",{className:"blink-blur-shape blink-blur-shape4"}),ha.createElement("span",{className:"blink-blur-shape blink-blur-shape5"})),ha.createElement(eh,{staticText:!0,text:c?.text,textColor:c?.textColor,style:{marginTop:"0.8em"}}))};Nu(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},(function(c,i){return"--trophySpin-phase".concat(i+1,"-color")}));Nu(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},(function(c,i){return"--slab-phase".concat(i+1,"-color")}));Nu(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},(function(c,i){return"--life-line-phase".concat(i+1,"-color")}));function rh(c){const[i,f]=Hn.useState([]),[o,b]=Hn.useState(!1),p=i.length>0&&i?.every(w=>w.selected_answer)||!1,E=o?i.filter(w=>w.selected_answer===w.correct_answer).length:0;Hn.useEffect(()=>{setTimeout(()=>{fetch("https://opentdb.com/api.php?amount=10&category=31&difficulty=medium").then(w=>w.json()).then(w=>{f(w.results.slice(0,5).map(F=>({question:Co.decode(F.question),correct_answer:Co.decode(F.correct_answer),incorrect_answers:O1(Array.from(new Set([...F.incorrect_answers,F.correct_answer]))).map(V=>Co.decode(V)),selected_answer:null})))}).catch(w=>{console.error("Error fetching quiz data:",w),c.restart()})},1e3)},[]);function z(w,F){f(V=>V.map(fu=>fu.question===w?{...fu,selected_answer:F}:fu))}function O(){if(p){if(o){c.restart();return}b(!0)}}let x=null;return i.length>0&&(x=i.map(w=>Du.jsxs("div",{className:"question-section",children:[Du.jsx("h2",{className:"question",children:w.question}),Du.jsx("div",{className:"options",children:w.incorrect_answers.map(F=>{const V=T1({selected:w.selected_answer===F,correct:o&&F===w.correct_answer,incorrect:o&&F===w.selected_answer&&F!==w.correct_answer});return Du.jsx("button",{className:V,onClick:()=>z(w.question,F),disabled:o,children:F},F)})}),Du.jsx("hr",{})]},w.question))),Du.jsxs(Du.Fragment,{children:[o&&E===i.length&&Du.jsx(H1,{}),i.length===0&&Du.jsx("div",{className:"loader",children:Du.jsx(lh,{color:"#4D5B9E",size:"medium"})}),Du.jsx("section",{className:"quiz-section",children:x}),i?.length>0&&Du.jsxs("div",{className:"results-section",children:[o&&Du.jsxs("h2",{children:["You scored ",E,"/",i.length," correct answers"]}),Du.jsx("button",{onClick:O,disabled:!p,children:o?"Play again":"Check answers"})]})]})}function ih(){const[c,i]=Hn.useState(0);function f(){i(1)}function o(){i(0)}return Du.jsxs("div",{children:[Du.jsxs("header",{children:[Du.jsx("div",{className:"blob_left"}),Du.jsx("div",{className:"blob_right"})]}),c==0&&Du.jsxs("main",{children:[Du.jsx("h1",{children:"Anime quiz"}),Du.jsx("p",{children:"Let's see if you can answer 10 trivia about anime!"}),Du.jsx("button",{onClick:f,children:"Let's go!"})]}),c==1&&Du.jsx(rh,{restart:()=>o()})]})}C1.createRoot(document.getElementById("root")).render(Du.jsx(ih,{}));
