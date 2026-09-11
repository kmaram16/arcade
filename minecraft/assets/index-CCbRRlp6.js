var Fy=Object.defineProperty;var Oy=(t,e,n)=>e in t?Fy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var q=(t,e,n)=>Oy(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function zy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var L0={exports:{}},Vc={},N0={exports:{}},tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),By=Symbol.for("react.portal"),Hy=Symbol.for("react.fragment"),Gy=Symbol.for("react.strict_mode"),Vy=Symbol.for("react.profiler"),Wy=Symbol.for("react.provider"),jy=Symbol.for("react.context"),Xy=Symbol.for("react.forward_ref"),$y=Symbol.for("react.suspense"),qy=Symbol.for("react.memo"),Yy=Symbol.for("react.lazy"),op=Symbol.iterator;function Ky(t){return t===null||typeof t!="object"?null:(t=op&&t[op]||t["@@iterator"],typeof t=="function"?t:null)}var D0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I0=Object.assign,U0={};function yo(t,e,n){this.props=t,this.context=e,this.refs=U0,this.updater=n||D0}yo.prototype.isReactComponent={};yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function k0(){}k0.prototype=yo.prototype;function qh(t,e,n){this.props=t,this.context=e,this.refs=U0,this.updater=n||D0}var Yh=qh.prototype=new k0;Yh.constructor=qh;I0(Yh,yo.prototype);Yh.isPureReactComponent=!0;var ap=Array.isArray,F0=Object.prototype.hasOwnProperty,Kh={current:null},O0={key:!0,ref:!0,__self:!0,__source:!0};function z0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)F0.call(e,i)&&!O0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Fa,type:t,key:s,ref:o,props:r,_owner:Kh.current}}function Zy(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function Qy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lp=/\/+/g;function gu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Qy(""+t.key):e.toString(36)}function Yl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fa:case By:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+gu(o,0):i,ap(r)?(n="",t!=null&&(n=t.replace(lp,"$&/")+"/"),Yl(r,e,n,"",function(c){return c})):r!=null&&(Zh(r)&&(r=Zy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(lp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ap(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+gu(s,a);o+=Yl(s,e,n,l,r)}else if(l=Ky(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+gu(s,a++),o+=Yl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ka(t,e,n){if(t==null)return t;var i=[],r=0;return Yl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Jy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _n={current:null},Kl={transition:null},ex={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:Kl,ReactCurrentOwner:Kh};function B0(){throw Error("act(...) is not supported in production builds of React.")}tt.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!Zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};tt.Component=yo;tt.Fragment=Hy;tt.Profiler=Vy;tt.PureComponent=qh;tt.StrictMode=Gy;tt.Suspense=$y;tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ex;tt.act=B0;tt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=I0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)F0.call(e,l)&&!O0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Fa,type:t.type,key:r,ref:s,props:i,_owner:o}};tt.createContext=function(t){return t={$$typeof:jy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Wy,_context:t},t.Consumer=t};tt.createElement=z0;tt.createFactory=function(t){var e=z0.bind(null,t);return e.type=t,e};tt.createRef=function(){return{current:null}};tt.forwardRef=function(t){return{$$typeof:Xy,render:t}};tt.isValidElement=Zh;tt.lazy=function(t){return{$$typeof:Yy,_payload:{_status:-1,_result:t},_init:Jy}};tt.memo=function(t,e){return{$$typeof:qy,type:t,compare:e===void 0?null:e}};tt.startTransition=function(t){var e=Kl.transition;Kl.transition={};try{t()}finally{Kl.transition=e}};tt.unstable_act=B0;tt.useCallback=function(t,e){return _n.current.useCallback(t,e)};tt.useContext=function(t){return _n.current.useContext(t)};tt.useDebugValue=function(){};tt.useDeferredValue=function(t){return _n.current.useDeferredValue(t)};tt.useEffect=function(t,e){return _n.current.useEffect(t,e)};tt.useId=function(){return _n.current.useId()};tt.useImperativeHandle=function(t,e,n){return _n.current.useImperativeHandle(t,e,n)};tt.useInsertionEffect=function(t,e){return _n.current.useInsertionEffect(t,e)};tt.useLayoutEffect=function(t,e){return _n.current.useLayoutEffect(t,e)};tt.useMemo=function(t,e){return _n.current.useMemo(t,e)};tt.useReducer=function(t,e,n){return _n.current.useReducer(t,e,n)};tt.useRef=function(t){return _n.current.useRef(t)};tt.useState=function(t){return _n.current.useState(t)};tt.useSyncExternalStore=function(t,e,n){return _n.current.useSyncExternalStore(t,e,n)};tt.useTransition=function(){return _n.current.useTransition()};tt.version="18.3.1";N0.exports=tt;var xe=N0.exports;const tx=zy(xe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nx=xe,ix=Symbol.for("react.element"),rx=Symbol.for("react.fragment"),sx=Object.prototype.hasOwnProperty,ox=nx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ax={key:!0,ref:!0,__self:!0,__source:!0};function H0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)sx.call(e,i)&&!ax.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ix,type:t,key:s,ref:o,props:r,_owner:ox.current}}Vc.Fragment=rx;Vc.jsx=H0;Vc.jsxs=H0;L0.exports=Vc;var A=L0.exports,kd={},G0={exports:{}},Hn={},V0={exports:{}},W0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,z){var W=N.length;N.push(z);e:for(;0<W;){var J=W-1>>>1,le=N[J];if(0<r(le,z))N[J]=z,N[W]=le,W=J;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var z=N[0],W=N.pop();if(W!==z){N[0]=W;e:for(var J=0,le=N.length,be=le>>>1;J<be;){var G=2*(J+1)-1,ee=N[G],pe=G+1,Pe=N[pe];if(0>r(ee,W))pe<le&&0>r(Pe,ee)?(N[J]=Pe,N[pe]=W,J=pe):(N[J]=ee,N[G]=W,J=G);else if(pe<le&&0>r(Pe,W))N[J]=Pe,N[pe]=W,J=pe;else break e}}return z}function r(N,z){var W=N.sortIndex-z.sortIndex;return W!==0?W:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,g=!1,v=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=N)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function S(N){if(_=!1,m(N),!v)if(n(l)!==null)v=!0,$(C);else{var z=n(c);z!==null&&Q(S,z.startTime-N)}}function C(N,z){v=!1,_&&(_=!1,d(L),L=-1),g=!0;var W=f;try{for(m(z),h=n(l);h!==null&&(!(h.expirationTime>z)||N&&!P());){var J=h.callback;if(typeof J=="function"){h.callback=null,f=h.priorityLevel;var le=J(h.expirationTime<=z);z=t.unstable_now(),typeof le=="function"?h.callback=le:h===n(l)&&i(l),m(z)}else i(l);h=n(l)}if(h!==null)var be=!0;else{var G=n(c);G!==null&&Q(S,G.startTime-z),be=!1}return be}finally{h=null,f=W,g=!1}}var b=!1,T=null,L=-1,K=5,x=-1;function P(){return!(t.unstable_now()-x<K)}function se(){if(T!==null){var N=t.unstable_now();x=N;var z=!0;try{z=T(!0,N)}finally{z?ne():(b=!1,T=null)}}else b=!1}var ne;if(typeof y=="function")ne=function(){y(se)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,Y=U.port2;U.port1.onmessage=se,ne=function(){Y.postMessage(null)}}else ne=function(){p(se,0)};function $(N){T=N,b||(b=!0,ne())}function Q(N,z){L=p(function(){N(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,$(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var W=f;f=z;try{return N()}finally{f=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=f;f=N;try{return z()}finally{f=W}},t.unstable_scheduleCallback=function(N,z,W){var J=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?J+W:J):W=J,N){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=W+le,N={id:u++,callback:z,priorityLevel:N,startTime:W,expirationTime:le,sortIndex:-1},W>J?(N.sortIndex=W,e(c,N),n(l)===null&&N===n(c)&&(_?(d(L),L=-1):_=!0,Q(S,W-J))):(N.sortIndex=le,e(l,N),v||g||(v=!0,$(C))),N},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(N){var z=f;return function(){var W=f;f=z;try{return N.apply(this,arguments)}finally{f=W}}}})(W0);V0.exports=W0;var lx=V0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cx=xe,Bn=lx;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j0=new Set,ya={};function rs(t,e){ao(t,e),ao(t+"Capture",e)}function ao(t,e){for(ya[t]=e,t=0;t<e.length;t++)j0.add(e[t])}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fd=Object.prototype.hasOwnProperty,ux=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cp={},up={};function dx(t){return Fd.call(up,t)?!0:Fd.call(cp,t)?!1:ux.test(t)?up[t]=!0:(cp[t]=!0,!1)}function hx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fx(t,e,n,i){if(e===null||typeof e>"u"||hx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nn[t]=new yn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nn[e]=new yn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nn[t]=new yn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nn[t]=new yn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nn[t]=new yn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nn[t]=new yn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nn[t]=new yn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nn[t]=new yn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nn[t]=new yn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qh=/[\-:]([a-z])/g;function Jh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qh,Jh);nn[e]=new yn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qh,Jh);nn[e]=new yn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qh,Jh);nn[e]=new yn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nn[t]=new yn(t,1,!1,t.toLowerCase(),null,!1,!1)});nn.xlinkHref=new yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nn[t]=new yn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ef(t,e,n,i){var r=nn.hasOwnProperty(e)?nn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fx(e,n,r,i)&&(n=null),i||r===null?dx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var $i=cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),ks=Symbol.for("react.portal"),Fs=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),Od=Symbol.for("react.profiler"),X0=Symbol.for("react.provider"),$0=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Bd=Symbol.for("react.suspense_list"),rf=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),q0=Symbol.for("react.offscreen"),dp=Symbol.iterator;function Io(t){return t===null||typeof t!="object"?null:(t=dp&&t[dp]||t["@@iterator"],typeof t=="function"?t:null)}var Lt=Object.assign,vu;function ia(t){if(vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vu=e&&e[1]||""}return`
`+vu+t}var _u=!1;function yu(t,e){if(!t||_u)return"";_u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{_u=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function px(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=yu(t.type,!1),t;case 11:return t=yu(t.type.render,!1),t;case 1:return t=yu(t.type,!0),t;default:return""}}function Hd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fs:return"Fragment";case ks:return"Portal";case Od:return"Profiler";case tf:return"StrictMode";case zd:return"Suspense";case Bd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $0:return(t.displayName||"Context")+".Consumer";case X0:return(t._context.displayName||"Context")+".Provider";case nf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rf:return e=t.displayName||null,e!==null?e:Hd(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return Hd(t(e))}catch{}}return null}function mx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hd(e);case 8:return e===tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Y0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gx(t){var e=Y0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qa(t){t._valueTracker||(t._valueTracker=gx(t))}function K0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Y0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gd(t,e){var n=e.checked;return Lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Z0(t,e){e=e.checked,e!=null&&ef(t,"checked",e,!1)}function Vd(t,e){Z0(t,e);var n=Mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wd(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wd(t,e,n){(e!=="number"||dc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function Qs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function jd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(ra(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function Q0(t,e){var n=Mr(e.value),i=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function mp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function J0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?J0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ja,ev=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vx=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(t){vx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),la[e]=la[t]})});function tv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||la.hasOwnProperty(t)&&la[t]?(""+e).trim():e+"px"}function nv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=tv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var _x=Lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $d(t,e){if(e){if(_x[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function qd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yd=null;function sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kd=null,Js=null,eo=null;function gp(t){if(t=Ba(t)){if(typeof Kd!="function")throw Error(re(280));var e=t.stateNode;e&&(e=qc(e),Kd(t.stateNode,t.type,e))}}function iv(t){Js?eo?eo.push(t):eo=[t]:Js=t}function rv(){if(Js){var t=Js,e=eo;if(eo=Js=null,gp(t),e)for(t=0;t<e.length;t++)gp(e[t])}}function sv(t,e){return t(e)}function ov(){}var xu=!1;function av(t,e,n){if(xu)return t(e,n);xu=!0;try{return sv(t,e,n)}finally{xu=!1,(Js!==null||eo!==null)&&(ov(),rv())}}function Sa(t,e){var n=t.stateNode;if(n===null)return null;var i=qc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Zd=!1;if(Vi)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){Zd=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{Zd=!1}function yx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ca=!1,hc=null,fc=!1,Qd=null,xx={onError:function(t){ca=!0,hc=t}};function Sx(t,e,n,i,r,s,o,a,l){ca=!1,hc=null,yx.apply(xx,arguments)}function Mx(t,e,n,i,r,s,o,a,l){if(Sx.apply(this,arguments),ca){if(ca){var c=hc;ca=!1,hc=null}else throw Error(re(198));fc||(fc=!0,Qd=c)}}function ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vp(t){if(ss(t)!==t)throw Error(re(188))}function Ex(t){var e=t.alternate;if(!e){if(e=ss(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return vp(r),t;if(s===i)return vp(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function cv(t){return t=Ex(t),t!==null?uv(t):null}function uv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=uv(t);if(e!==null)return e;t=t.sibling}return null}var dv=Bn.unstable_scheduleCallback,_p=Bn.unstable_cancelCallback,wx=Bn.unstable_shouldYield,Tx=Bn.unstable_requestPaint,Ut=Bn.unstable_now,Ax=Bn.unstable_getCurrentPriorityLevel,of=Bn.unstable_ImmediatePriority,hv=Bn.unstable_UserBlockingPriority,pc=Bn.unstable_NormalPriority,bx=Bn.unstable_LowPriority,fv=Bn.unstable_IdlePriority,Wc=null,Ei=null;function Rx(t){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(Wc,t,void 0,(t.current.flags&128)===128)}catch{}}var ci=Math.clz32?Math.clz32:Lx,Cx=Math.log,Px=Math.LN2;function Lx(t){return t>>>=0,t===0?32:31-(Cx(t)/Px|0)|0}var el=64,tl=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=sa(a):(s&=o,s!==0&&(i=sa(s)))}else o=n&~r,o!==0?i=sa(o):s!==0&&(i=sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ci(e),r=1<<n,i|=t[n],e&=~r;return i}function Nx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ci(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Nx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Jd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pv(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function Su(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ci(e),t[e]=n}function Ix(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ci(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ci(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var dt=0;function mv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gv,lf,vv,_v,yv,eh=!1,nl=[],dr=null,hr=null,fr=null,Ma=new Map,Ea=new Map,sr=[],Ux="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yp(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(e.pointerId)}}function ko(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ba(e),e!==null&&lf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function kx(t,e,n,i,r){switch(e){case"focusin":return dr=ko(dr,t,e,n,i,r),!0;case"dragenter":return hr=ko(hr,t,e,n,i,r),!0;case"mouseover":return fr=ko(fr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ma.set(s,ko(Ma.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ea.set(s,ko(Ea.get(s)||null,t,e,n,i,r)),!0}return!1}function xv(t){var e=Wr(t.target);if(e!==null){var n=ss(e);if(n!==null){if(e=n.tag,e===13){if(e=lv(n),e!==null){t.blockedOn=e,yv(t.priority,function(){vv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=th(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Yd=i,n.target.dispatchEvent(i),Yd=null}else return e=Ba(n),e!==null&&lf(e),t.blockedOn=n,!1;e.shift()}return!0}function xp(t,e,n){Zl(t)&&n.delete(e)}function Fx(){eh=!1,dr!==null&&Zl(dr)&&(dr=null),hr!==null&&Zl(hr)&&(hr=null),fr!==null&&Zl(fr)&&(fr=null),Ma.forEach(xp),Ea.forEach(xp)}function Fo(t,e){t.blockedOn===e&&(t.blockedOn=null,eh||(eh=!0,Bn.unstable_scheduleCallback(Bn.unstable_NormalPriority,Fx)))}function wa(t){function e(r){return Fo(r,t)}if(0<nl.length){Fo(nl[0],t);for(var n=1;n<nl.length;n++){var i=nl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(dr!==null&&Fo(dr,t),hr!==null&&Fo(hr,t),fr!==null&&Fo(fr,t),Ma.forEach(e),Ea.forEach(e),n=0;n<sr.length;n++)i=sr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)xv(n),n.blockedOn===null&&sr.shift()}var to=$i.ReactCurrentBatchConfig,gc=!0;function Ox(t,e,n,i){var r=dt,s=to.transition;to.transition=null;try{dt=1,cf(t,e,n,i)}finally{dt=r,to.transition=s}}function zx(t,e,n,i){var r=dt,s=to.transition;to.transition=null;try{dt=4,cf(t,e,n,i)}finally{dt=r,to.transition=s}}function cf(t,e,n,i){if(gc){var r=th(t,e,n,i);if(r===null)Lu(t,e,i,vc,n),yp(t,i);else if(kx(r,t,e,n,i))i.stopPropagation();else if(yp(t,i),e&4&&-1<Ux.indexOf(t)){for(;r!==null;){var s=Ba(r);if(s!==null&&gv(s),s=th(t,e,n,i),s===null&&Lu(t,e,i,vc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Lu(t,e,i,null,n)}}var vc=null;function th(t,e,n,i){if(vc=null,t=sf(i),t=Wr(t),t!==null)if(e=ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vc=t,null}function Sv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ax()){case of:return 1;case hv:return 4;case pc:case bx:return 16;case fv:return 536870912;default:return 16}default:return 16}}var lr=null,uf=null,Ql=null;function Mv(){if(Ql)return Ql;var t,e=uf,n=e.length,i,r="value"in lr?lr.value:lr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ql=r.slice(t,1<i?1-i:void 0)}function Jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function il(){return!0}function Sp(){return!1}function Gn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?il:Sp,this.isPropagationStopped=Sp,this}return Lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),e}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},df=Gn(xo),za=Lt({},xo,{view:0,detail:0}),Bx=Gn(za),Mu,Eu,Oo,jc=Lt({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oo&&(Oo&&t.type==="mousemove"?(Mu=t.screenX-Oo.screenX,Eu=t.screenY-Oo.screenY):Eu=Mu=0,Oo=t),Mu)},movementY:function(t){return"movementY"in t?t.movementY:Eu}}),Mp=Gn(jc),Hx=Lt({},jc,{dataTransfer:0}),Gx=Gn(Hx),Vx=Lt({},za,{relatedTarget:0}),wu=Gn(Vx),Wx=Lt({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),jx=Gn(Wx),Xx=Lt({},xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$x=Gn(Xx),qx=Lt({},xo,{data:0}),Ep=Gn(qx),Yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Zx[t])?!!e[t]:!1}function hf(){return Qx}var Jx=Lt({},za,{key:function(t){if(t.key){var e=Yx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(t){return t.type==="keypress"?Jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eS=Gn(Jx),tS=Lt({},jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=Gn(tS),nS=Lt({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),iS=Gn(nS),rS=Lt({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),sS=Gn(rS),oS=Lt({},jc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aS=Gn(oS),lS=[9,13,27,32],ff=Vi&&"CompositionEvent"in window,ua=null;Vi&&"documentMode"in document&&(ua=document.documentMode);var cS=Vi&&"TextEvent"in window&&!ua,Ev=Vi&&(!ff||ua&&8<ua&&11>=ua),Tp=" ",Ap=!1;function wv(t,e){switch(t){case"keyup":return lS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function uS(t,e){switch(t){case"compositionend":return Tv(e);case"keypress":return e.which!==32?null:(Ap=!0,Tp);case"textInput":return t=e.data,t===Tp&&Ap?null:t;default:return null}}function dS(t,e){if(Os)return t==="compositionend"||!ff&&wv(t,e)?(t=Mv(),Ql=uf=lr=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ev&&e.locale!=="ko"?null:e.data;default:return null}}var hS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hS[t.type]:e==="textarea"}function Av(t,e,n,i){iv(i),e=_c(e,"onChange"),0<e.length&&(n=new df("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var da=null,Ta=null;function fS(t){Fv(t,0)}function Xc(t){var e=Hs(t);if(K0(e))return t}function pS(t,e){if(t==="change")return e}var bv=!1;if(Vi){var Tu;if(Vi){var Au="oninput"in document;if(!Au){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),Au=typeof Rp.oninput=="function"}Tu=Au}else Tu=!1;bv=Tu&&(!document.documentMode||9<document.documentMode)}function Cp(){da&&(da.detachEvent("onpropertychange",Rv),Ta=da=null)}function Rv(t){if(t.propertyName==="value"&&Xc(Ta)){var e=[];Av(e,Ta,t,sf(t)),av(fS,e)}}function mS(t,e,n){t==="focusin"?(Cp(),da=e,Ta=n,da.attachEvent("onpropertychange",Rv)):t==="focusout"&&Cp()}function gS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xc(Ta)}function vS(t,e){if(t==="click")return Xc(e)}function _S(t,e){if(t==="input"||t==="change")return Xc(e)}function yS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var di=typeof Object.is=="function"?Object.is:yS;function Aa(t,e){if(di(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Fd.call(e,r)||!di(t[r],e[r]))return!1}return!0}function Pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lp(t,e){var n=Pp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pp(n)}}function Cv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pv(){for(var t=window,e=dc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dc(t.document)}return e}function pf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xS(t){var e=Pv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cv(n.ownerDocument.documentElement,n)){if(i!==null&&pf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Lp(n,s);var o=Lp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var SS=Vi&&"documentMode"in document&&11>=document.documentMode,zs=null,nh=null,ha=null,ih=!1;function Np(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ih||zs==null||zs!==dc(i)||(i=zs,"selectionStart"in i&&pf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ha&&Aa(ha,i)||(ha=i,i=_c(nh,"onSelect"),0<i.length&&(e=new df("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=zs)))}function rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Bs={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},bu={},Lv={};Vi&&(Lv=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function $c(t){if(bu[t])return bu[t];if(!Bs[t])return t;var e=Bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Lv)return bu[t]=e[n];return t}var Nv=$c("animationend"),Dv=$c("animationiteration"),Iv=$c("animationstart"),Uv=$c("transitionend"),kv=new Map,Dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){kv.set(t,e),rs(e,[t])}for(var Ru=0;Ru<Dp.length;Ru++){var Cu=Dp[Ru],MS=Cu.toLowerCase(),ES=Cu[0].toUpperCase()+Cu.slice(1);Ar(MS,"on"+ES)}Ar(Nv,"onAnimationEnd");Ar(Dv,"onAnimationIteration");Ar(Iv,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(Uv,"onTransitionEnd");ao("onMouseEnter",["mouseout","mouseover"]);ao("onMouseLeave",["mouseout","mouseover"]);ao("onPointerEnter",["pointerout","pointerover"]);ao("onPointerLeave",["pointerout","pointerover"]);rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wS=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function Ip(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Mx(i,e,void 0,t),t.currentTarget=null}function Fv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ip(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ip(r,a,c),s=l}}}if(fc)throw t=Qd,fc=!1,Qd=null,t}function wt(t,e){var n=e[lh];n===void 0&&(n=e[lh]=new Set);var i=t+"__bubble";n.has(i)||(Ov(e,t,2,!1),n.add(i))}function Pu(t,e,n){var i=0;e&&(i|=4),Ov(n,t,i,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function ba(t){if(!t[sl]){t[sl]=!0,j0.forEach(function(n){n!=="selectionchange"&&(wS.has(n)||Pu(n,!1,t),Pu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,Pu("selectionchange",!1,e))}}function Ov(t,e,n,i){switch(Sv(e)){case 1:var r=Ox;break;case 4:r=zx;break;default:r=cf}n=r.bind(null,e,n,t),r=void 0,!Zd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Lu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Wr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}av(function(){var c=s,u=sf(n),h=[];e:{var f=kv.get(t);if(f!==void 0){var g=df,v=t;switch(t){case"keypress":if(Jl(n)===0)break e;case"keydown":case"keyup":g=eS;break;case"focusin":v="focus",g=wu;break;case"focusout":v="blur",g=wu;break;case"beforeblur":case"afterblur":g=wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=iS;break;case Nv:case Dv:case Iv:g=jx;break;case Uv:g=sS;break;case"scroll":g=Bx;break;case"wheel":g=aS;break;case"copy":case"cut":case"paste":g=$x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=wp}var _=(e&4)!==0,p=!_&&t==="scroll",d=_?f!==null?f+"Capture":null:f;_=[];for(var y=c,m;y!==null;){m=y;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,d!==null&&(S=Sa(y,d),S!=null&&_.push(Ra(y,S,m)))),p)break;y=y.return}0<_.length&&(f=new g(f,v,null,n,u),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Yd&&(v=n.relatedTarget||n.fromElement)&&(Wr(v)||v[Wi]))break e;if((g||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?Wr(v):null,v!==null&&(p=ss(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(_=Mp,S="onMouseLeave",d="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(_=wp,S="onPointerLeave",d="onPointerEnter",y="pointer"),p=g==null?f:Hs(g),m=v==null?f:Hs(v),f=new _(S,y+"leave",g,n,u),f.target=p,f.relatedTarget=m,S=null,Wr(u)===c&&(_=new _(d,y+"enter",v,n,u),_.target=m,_.relatedTarget=p,S=_),p=S,g&&v)t:{for(_=g,d=v,y=0,m=_;m;m=ds(m))y++;for(m=0,S=d;S;S=ds(S))m++;for(;0<y-m;)_=ds(_),y--;for(;0<m-y;)d=ds(d),m--;for(;y--;){if(_===d||d!==null&&_===d.alternate)break t;_=ds(_),d=ds(d)}_=null}else _=null;g!==null&&Up(h,f,g,_,!1),v!==null&&p!==null&&Up(h,p,v,_,!0)}}e:{if(f=c?Hs(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var C=pS;else if(bp(f))if(bv)C=_S;else{C=gS;var b=mS}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=vS);if(C&&(C=C(t,c))){Av(h,C,n,u);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&Wd(f,"number",f.value)}switch(b=c?Hs(c):window,t){case"focusin":(bp(b)||b.contentEditable==="true")&&(zs=b,nh=c,ha=null);break;case"focusout":ha=nh=zs=null;break;case"mousedown":ih=!0;break;case"contextmenu":case"mouseup":case"dragend":ih=!1,Np(h,n,u);break;case"selectionchange":if(SS)break;case"keydown":case"keyup":Np(h,n,u)}var T;if(ff)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Os?wv(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Ev&&n.locale!=="ko"&&(Os||L!=="onCompositionStart"?L==="onCompositionEnd"&&Os&&(T=Mv()):(lr=u,uf="value"in lr?lr.value:lr.textContent,Os=!0)),b=_c(c,L),0<b.length&&(L=new Ep(L,t,null,n,u),h.push({event:L,listeners:b}),T?L.data=T:(T=Tv(n),T!==null&&(L.data=T)))),(T=cS?uS(t,n):dS(t,n))&&(c=_c(c,"onBeforeInput"),0<c.length&&(u=new Ep("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=T))}Fv(h,e)})}function Ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _c(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Sa(t,n),s!=null&&i.unshift(Ra(t,s,r)),s=Sa(t,e),s!=null&&i.push(Ra(t,s,r))),t=t.return}return i}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Up(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Sa(n,s),l!=null&&o.unshift(Ra(n,l,a))):r||(l=Sa(n,s),l!=null&&o.push(Ra(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TS=/\r\n?/g,AS=/\u0000|\uFFFD/g;function kp(t){return(typeof t=="string"?t:""+t).replace(TS,`
`).replace(AS,"")}function ol(t,e,n){if(e=kp(e),kp(t)!==e&&n)throw Error(re(425))}function yc(){}var rh=null,sh=null;function oh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ah=typeof setTimeout=="function"?setTimeout:void 0,bS=typeof clearTimeout=="function"?clearTimeout:void 0,Fp=typeof Promise=="function"?Promise:void 0,RS=typeof queueMicrotask=="function"?queueMicrotask:typeof Fp<"u"?function(t){return Fp.resolve(null).then(t).catch(CS)}:ah;function CS(t){setTimeout(function(){throw t})}function Nu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),wa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);wa(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Op(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var So=Math.random().toString(36).slice(2),_i="__reactFiber$"+So,Ca="__reactProps$"+So,Wi="__reactContainer$"+So,lh="__reactEvents$"+So,PS="__reactListeners$"+So,LS="__reactHandles$"+So;function Wr(t){var e=t[_i];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wi]||n[_i]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Op(t);t!==null;){if(n=t[_i])return n;t=Op(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[_i]||t[Wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function qc(t){return t[Ca]||null}var ch=[],Gs=-1;function br(t){return{current:t}}function At(t){0>Gs||(t.current=ch[Gs],ch[Gs]=null,Gs--)}function xt(t,e){Gs++,ch[Gs]=t.current,t.current=e}var Er={},dn=br(Er),bn=br(!1),Qr=Er;function lo(t,e){var n=t.type.contextTypes;if(!n)return Er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Rn(t){return t=t.childContextTypes,t!=null}function xc(){At(bn),At(dn)}function zp(t,e,n){if(dn.current!==Er)throw Error(re(168));xt(dn,e),xt(bn,n)}function zv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,mx(t)||"Unknown",r));return Lt({},n,i)}function Sc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,Qr=dn.current,xt(dn,t),xt(bn,bn.current),!0}function Bp(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=zv(t,e,Qr),i.__reactInternalMemoizedMergedChildContext=t,At(bn),At(dn),xt(dn,t)):At(bn),xt(bn,n)}var Ui=null,Yc=!1,Du=!1;function Bv(t){Ui===null?Ui=[t]:Ui.push(t)}function NS(t){Yc=!0,Bv(t)}function Rr(){if(!Du&&Ui!==null){Du=!0;var t=0,e=dt;try{var n=Ui;for(dt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,Yc=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),dv(of,Rr),r}finally{dt=e,Du=!1}}return null}var Vs=[],Ws=0,Mc=null,Ec=0,jn=[],Xn=0,Jr=null,Fi=1,Oi="";function Or(t,e){Vs[Ws++]=Ec,Vs[Ws++]=Mc,Mc=t,Ec=e}function Hv(t,e,n){jn[Xn++]=Fi,jn[Xn++]=Oi,jn[Xn++]=Jr,Jr=t;var i=Fi;t=Oi;var r=32-ci(i)-1;i&=~(1<<r),n+=1;var s=32-ci(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Fi=1<<32-ci(e)+r|n<<r|i,Oi=s+t}else Fi=1<<s|n<<r|i,Oi=t}function mf(t){t.return!==null&&(Or(t,1),Hv(t,1,0))}function gf(t){for(;t===Mc;)Mc=Vs[--Ws],Vs[Ws]=null,Ec=Vs[--Ws],Vs[Ws]=null;for(;t===Jr;)Jr=jn[--Xn],jn[Xn]=null,Oi=jn[--Xn],jn[Xn]=null,Fi=jn[--Xn],jn[Xn]=null}var On=null,Fn=null,bt=!1,oi=null;function Gv(t,e){var n=qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,On=t,Fn=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,On=t,Fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:Fi,overflow:Oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,On=t,Fn=null,!0):!1;default:return!1}}function uh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dh(t){if(bt){var e=Fn;if(e){var n=e;if(!Hp(t,e)){if(uh(t))throw Error(re(418));e=pr(n.nextSibling);var i=On;e&&Hp(t,e)?Gv(i,n):(t.flags=t.flags&-4097|2,bt=!1,On=t)}}else{if(uh(t))throw Error(re(418));t.flags=t.flags&-4097|2,bt=!1,On=t}}}function Gp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function al(t){if(t!==On)return!1;if(!bt)return Gp(t),bt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!oh(t.type,t.memoizedProps)),e&&(e=Fn)){if(uh(t))throw Vv(),Error(re(418));for(;e;)Gv(t,e),e=pr(e.nextSibling)}if(Gp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fn=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fn=null}}else Fn=On?pr(t.stateNode.nextSibling):null;return!0}function Vv(){for(var t=Fn;t;)t=pr(t.nextSibling)}function co(){Fn=On=null,bt=!1}function vf(t){oi===null?oi=[t]:oi.push(t)}var DS=$i.ReactCurrentBatchConfig;function zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vp(t){var e=t._init;return e(t._payload)}function Wv(t){function e(d,y){if(t){var m=d.deletions;m===null?(d.deletions=[y],d.flags|=16):m.push(y)}}function n(d,y){if(!t)return null;for(;y!==null;)e(d,y),y=y.sibling;return null}function i(d,y){for(d=new Map;y!==null;)y.key!==null?d.set(y.key,y):d.set(y.index,y),y=y.sibling;return d}function r(d,y){return d=_r(d,y),d.index=0,d.sibling=null,d}function s(d,y,m){return d.index=m,t?(m=d.alternate,m!==null?(m=m.index,m<y?(d.flags|=2,y):m):(d.flags|=2,y)):(d.flags|=1048576,y)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,y,m,S){return y===null||y.tag!==6?(y=Bu(m,d.mode,S),y.return=d,y):(y=r(y,m),y.return=d,y)}function l(d,y,m,S){var C=m.type;return C===Fs?u(d,y,m.props.children,S,m.key):y!==null&&(y.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ir&&Vp(C)===y.type)?(S=r(y,m.props),S.ref=zo(d,y,m),S.return=d,S):(S=oc(m.type,m.key,m.props,null,d.mode,S),S.ref=zo(d,y,m),S.return=d,S)}function c(d,y,m,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==m.containerInfo||y.stateNode.implementation!==m.implementation?(y=Hu(m,d.mode,S),y.return=d,y):(y=r(y,m.children||[]),y.return=d,y)}function u(d,y,m,S,C){return y===null||y.tag!==7?(y=Yr(m,d.mode,S,C),y.return=d,y):(y=r(y,m),y.return=d,y)}function h(d,y,m){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Bu(""+y,d.mode,m),y.return=d,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Za:return m=oc(y.type,y.key,y.props,null,d.mode,m),m.ref=zo(d,null,y),m.return=d,m;case ks:return y=Hu(y,d.mode,m),y.return=d,y;case ir:var S=y._init;return h(d,S(y._payload),m)}if(ra(y)||Io(y))return y=Yr(y,d.mode,m,null),y.return=d,y;ll(d,y)}return null}function f(d,y,m,S){var C=y!==null?y.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(d,y,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Za:return m.key===C?l(d,y,m,S):null;case ks:return m.key===C?c(d,y,m,S):null;case ir:return C=m._init,f(d,y,C(m._payload),S)}if(ra(m)||Io(m))return C!==null?null:u(d,y,m,S,null);ll(d,m)}return null}function g(d,y,m,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(m)||null,a(y,d,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Za:return d=d.get(S.key===null?m:S.key)||null,l(y,d,S,C);case ks:return d=d.get(S.key===null?m:S.key)||null,c(y,d,S,C);case ir:var b=S._init;return g(d,y,m,b(S._payload),C)}if(ra(S)||Io(S))return d=d.get(m)||null,u(y,d,S,C,null);ll(y,S)}return null}function v(d,y,m,S){for(var C=null,b=null,T=y,L=y=0,K=null;T!==null&&L<m.length;L++){T.index>L?(K=T,T=null):K=T.sibling;var x=f(d,T,m[L],S);if(x===null){T===null&&(T=K);break}t&&T&&x.alternate===null&&e(d,T),y=s(x,y,L),b===null?C=x:b.sibling=x,b=x,T=K}if(L===m.length)return n(d,T),bt&&Or(d,L),C;if(T===null){for(;L<m.length;L++)T=h(d,m[L],S),T!==null&&(y=s(T,y,L),b===null?C=T:b.sibling=T,b=T);return bt&&Or(d,L),C}for(T=i(d,T);L<m.length;L++)K=g(T,d,L,m[L],S),K!==null&&(t&&K.alternate!==null&&T.delete(K.key===null?L:K.key),y=s(K,y,L),b===null?C=K:b.sibling=K,b=K);return t&&T.forEach(function(P){return e(d,P)}),bt&&Or(d,L),C}function _(d,y,m,S){var C=Io(m);if(typeof C!="function")throw Error(re(150));if(m=C.call(m),m==null)throw Error(re(151));for(var b=C=null,T=y,L=y=0,K=null,x=m.next();T!==null&&!x.done;L++,x=m.next()){T.index>L?(K=T,T=null):K=T.sibling;var P=f(d,T,x.value,S);if(P===null){T===null&&(T=K);break}t&&T&&P.alternate===null&&e(d,T),y=s(P,y,L),b===null?C=P:b.sibling=P,b=P,T=K}if(x.done)return n(d,T),bt&&Or(d,L),C;if(T===null){for(;!x.done;L++,x=m.next())x=h(d,x.value,S),x!==null&&(y=s(x,y,L),b===null?C=x:b.sibling=x,b=x);return bt&&Or(d,L),C}for(T=i(d,T);!x.done;L++,x=m.next())x=g(T,d,L,x.value,S),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?L:x.key),y=s(x,y,L),b===null?C=x:b.sibling=x,b=x);return t&&T.forEach(function(se){return e(d,se)}),bt&&Or(d,L),C}function p(d,y,m,S){if(typeof m=="object"&&m!==null&&m.type===Fs&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Za:e:{for(var C=m.key,b=y;b!==null;){if(b.key===C){if(C=m.type,C===Fs){if(b.tag===7){n(d,b.sibling),y=r(b,m.props.children),y.return=d,d=y;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ir&&Vp(C)===b.type){n(d,b.sibling),y=r(b,m.props),y.ref=zo(d,b,m),y.return=d,d=y;break e}n(d,b);break}else e(d,b);b=b.sibling}m.type===Fs?(y=Yr(m.props.children,d.mode,S,m.key),y.return=d,d=y):(S=oc(m.type,m.key,m.props,null,d.mode,S),S.ref=zo(d,y,m),S.return=d,d=S)}return o(d);case ks:e:{for(b=m.key;y!==null;){if(y.key===b)if(y.tag===4&&y.stateNode.containerInfo===m.containerInfo&&y.stateNode.implementation===m.implementation){n(d,y.sibling),y=r(y,m.children||[]),y.return=d,d=y;break e}else{n(d,y);break}else e(d,y);y=y.sibling}y=Hu(m,d.mode,S),y.return=d,d=y}return o(d);case ir:return b=m._init,p(d,y,b(m._payload),S)}if(ra(m))return v(d,y,m,S);if(Io(m))return _(d,y,m,S);ll(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,y!==null&&y.tag===6?(n(d,y.sibling),y=r(y,m),y.return=d,d=y):(n(d,y),y=Bu(m,d.mode,S),y.return=d,d=y),o(d)):n(d,y)}return p}var uo=Wv(!0),jv=Wv(!1),wc=br(null),Tc=null,js=null,_f=null;function yf(){_f=js=Tc=null}function xf(t){var e=wc.current;At(wc),t._currentValue=e}function hh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function no(t,e){Tc=t,_f=js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(An=!0),t.firstContext=null)}function Kn(t){var e=t._currentValue;if(_f!==t)if(t={context:t,memoizedValue:e,next:null},js===null){if(Tc===null)throw Error(re(308));js=t,Tc.dependencies={lanes:0,firstContext:t}}else js=js.next=t;return e}var jr=null;function Sf(t){jr===null?jr=[t]:jr.push(t)}function Xv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sf(e)):(n.next=r.next,r.next=n),e.interleaved=n,ji(t,i)}function ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rr=!1;function Mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $v(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,st&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ji(t,n)}return r=i.interleaved,r===null?(e.next=e,Sf(i)):(e.next=r.next,r.next=e),i.interleaved=e,ji(t,n)}function ec(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,af(t,n)}}function Wp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ac(t,e,n,i){var r=t.updateQueue;rr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,g=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(g,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(g,h,f):v,f==null)break e;h=Lt({},h,f);break e;case 2:rr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=g,l=h):u=u.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ts|=o,t.lanes=o,t.memoizedState=h}}function jp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Ha={},wi=br(Ha),Pa=br(Ha),La=br(Ha);function Xr(t){if(t===Ha)throw Error(re(174));return t}function Ef(t,e){switch(xt(La,e),xt(Pa,t),xt(wi,Ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xd(e,t)}At(wi),xt(wi,e)}function ho(){At(wi),At(Pa),At(La)}function qv(t){Xr(La.current);var e=Xr(wi.current),n=Xd(e,t.type);e!==n&&(xt(Pa,t),xt(wi,n))}function wf(t){Pa.current===t&&(At(wi),At(Pa))}var Ct=br(0);function bc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Iu=[];function Tf(){for(var t=0;t<Iu.length;t++)Iu[t]._workInProgressVersionPrimary=null;Iu.length=0}var tc=$i.ReactCurrentDispatcher,Uu=$i.ReactCurrentBatchConfig,es=0,Pt=null,Wt=null,Kt=null,Rc=!1,fa=!1,Na=0,IS=0;function sn(){throw Error(re(321))}function Af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!di(t[n],e[n]))return!1;return!0}function bf(t,e,n,i,r,s){if(es=s,Pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tc.current=t===null||t.memoizedState===null?OS:zS,t=n(i,r),fa){s=0;do{if(fa=!1,Na=0,25<=s)throw Error(re(301));s+=1,Kt=Wt=null,e.updateQueue=null,tc.current=BS,t=n(i,r)}while(fa)}if(tc.current=Cc,e=Wt!==null&&Wt.next!==null,es=0,Kt=Wt=Pt=null,Rc=!1,e)throw Error(re(300));return t}function Rf(){var t=Na!==0;return Na=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Pt.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function Zn(){if(Wt===null){var t=Pt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var e=Kt===null?Pt.memoizedState:Kt.next;if(e!==null)Kt=e,Wt=t;else{if(t===null)throw Error(re(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Kt===null?Pt.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}function Da(t,e){return typeof e=="function"?e(t):e}function ku(t){var e=Zn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((es&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Pt.lanes|=u,ts|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,di(i,e.memoizedState)||(An=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Pt.lanes|=s,ts|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fu(t){var e=Zn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);di(s,e.memoizedState)||(An=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Yv(){}function Kv(t,e){var n=Pt,i=Zn(),r=e(),s=!di(i.memoizedState,r);if(s&&(i.memoizedState=r,An=!0),i=i.queue,Cf(Jv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Kt!==null&&Kt.memoizedState.tag&1){if(n.flags|=2048,Ia(9,Qv.bind(null,n,i,r,e),void 0,null),Qt===null)throw Error(re(349));es&30||Zv(n,e,r)}return r}function Zv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pt.updateQueue,e===null?(e={lastEffect:null,stores:null},Pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qv(t,e,n,i){e.value=n,e.getSnapshot=i,e_(e)&&t_(t)}function Jv(t,e,n){return n(function(){e_(e)&&t_(t)})}function e_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!di(t,n)}catch{return!0}}function t_(t){var e=ji(t,1);e!==null&&ui(e,t,1,-1)}function Xp(t){var e=mi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},e.queue=t,t=t.dispatch=FS.bind(null,Pt,t),[e.memoizedState,t]}function Ia(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Pt.updateQueue,e===null?(e={lastEffect:null,stores:null},Pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function n_(){return Zn().memoizedState}function nc(t,e,n,i){var r=mi();Pt.flags|=t,r.memoizedState=Ia(1|e,n,void 0,i===void 0?null:i)}function Kc(t,e,n,i){var r=Zn();i=i===void 0?null:i;var s=void 0;if(Wt!==null){var o=Wt.memoizedState;if(s=o.destroy,i!==null&&Af(i,o.deps)){r.memoizedState=Ia(e,n,s,i);return}}Pt.flags|=t,r.memoizedState=Ia(1|e,n,s,i)}function $p(t,e){return nc(8390656,8,t,e)}function Cf(t,e){return Kc(2048,8,t,e)}function i_(t,e){return Kc(4,2,t,e)}function r_(t,e){return Kc(4,4,t,e)}function s_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function o_(t,e,n){return n=n!=null?n.concat([t]):null,Kc(4,4,s_.bind(null,e,t),n)}function Pf(){}function a_(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Af(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function l_(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Af(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function c_(t,e,n){return es&21?(di(n,e)||(n=pv(),Pt.lanes|=n,ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=n)}function US(t,e){var n=dt;dt=n!==0&&4>n?n:4,t(!0);var i=Uu.transition;Uu.transition={};try{t(!1),e()}finally{dt=n,Uu.transition=i}}function u_(){return Zn().memoizedState}function kS(t,e,n){var i=vr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},d_(t))h_(e,n);else if(n=Xv(t,e,n,i),n!==null){var r=vn();ui(n,t,i,r),f_(n,e,i)}}function FS(t,e,n){var i=vr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(d_(t))h_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,di(a,o)){var l=e.interleaved;l===null?(r.next=r,Sf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Xv(t,e,r,i),n!==null&&(r=vn(),ui(n,t,i,r),f_(n,e,i))}}function d_(t){var e=t.alternate;return t===Pt||e!==null&&e===Pt}function h_(t,e){fa=Rc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function f_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,af(t,n)}}var Cc={readContext:Kn,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},OS={readContext:Kn,useCallback:function(t,e){return mi().memoizedState=[t,e===void 0?null:e],t},useContext:Kn,useEffect:$p,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nc(4194308,4,s_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nc(4194308,4,t,e)},useInsertionEffect:function(t,e){return nc(4,2,t,e)},useMemo:function(t,e){var n=mi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=mi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=kS.bind(null,Pt,t),[i.memoizedState,t]},useRef:function(t){var e=mi();return t={current:t},e.memoizedState=t},useState:Xp,useDebugValue:Pf,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=Xp(!1),e=t[0];return t=US.bind(null,t[1]),mi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Pt,r=mi();if(bt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Qt===null)throw Error(re(349));es&30||Zv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,$p(Jv.bind(null,i,s,t),[t]),i.flags|=2048,Ia(9,Qv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=mi(),e=Qt.identifierPrefix;if(bt){var n=Oi,i=Fi;n=(i&~(1<<32-ci(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=IS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zS={readContext:Kn,useCallback:a_,useContext:Kn,useEffect:Cf,useImperativeHandle:o_,useInsertionEffect:i_,useLayoutEffect:r_,useMemo:l_,useReducer:ku,useRef:n_,useState:function(){return ku(Da)},useDebugValue:Pf,useDeferredValue:function(t){var e=Zn();return c_(e,Wt.memoizedState,t)},useTransition:function(){var t=ku(Da)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:Yv,useSyncExternalStore:Kv,useId:u_,unstable_isNewReconciler:!1},BS={readContext:Kn,useCallback:a_,useContext:Kn,useEffect:Cf,useImperativeHandle:o_,useInsertionEffect:i_,useLayoutEffect:r_,useMemo:l_,useReducer:Fu,useRef:n_,useState:function(){return Fu(Da)},useDebugValue:Pf,useDeferredValue:function(t){var e=Zn();return Wt===null?e.memoizedState=t:c_(e,Wt.memoizedState,t)},useTransition:function(){var t=Fu(Da)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:Yv,useSyncExternalStore:Kv,useId:u_,unstable_isNewReconciler:!1};function ri(t,e){if(t&&t.defaultProps){e=Lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zc={isMounted:function(t){return(t=t._reactInternals)?ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=vn(),r=vr(t),s=Hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,r),e!==null&&(ui(e,t,r,i),ec(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=vn(),r=vr(t),s=Hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,r),e!==null&&(ui(e,t,r,i),ec(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vn(),i=vr(t),r=Hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=mr(t,r,i),e!==null&&(ui(e,t,i,n),ec(e,t,i))}};function qp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Aa(n,i)||!Aa(r,s):!0}function p_(t,e,n){var i=!1,r=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Kn(s):(r=Rn(e)?Qr:dn.current,i=e.contextTypes,s=(i=i!=null)?lo(t,r):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zc.enqueueReplaceState(e,e.state,null)}function ph(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Mf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Kn(s):(s=Rn(e)?Qr:dn.current,r.context=lo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Zc.enqueueReplaceState(r,r.state,null),Ac(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function fo(t,e){try{var n="",i=e;do n+=px(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ou(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var HS=typeof WeakMap=="function"?WeakMap:Map;function m_(t,e,n){n=Hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Lc||(Lc=!0,Th=i),mh(t,e)},n}function g_(t,e,n){n=Hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){mh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mh(t,e),typeof i!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Kp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new HS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=tM.bind(null,t,e,n),e.then(t,t))}function Zp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hi(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var GS=$i.ReactCurrentOwner,An=!1;function gn(t,e,n,i){e.child=t===null?jv(e,null,n,i):uo(e,t.child,n,i)}function Jp(t,e,n,i,r){n=n.render;var s=e.ref;return no(e,r),i=bf(t,e,n,i,s,r),n=Rf(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(bt&&n&&mf(e),e.flags|=1,gn(t,e,i,r),e.child)}function em(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Of(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,v_(t,e,s,i,r)):(t=oc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Aa,n(o,i)&&t.ref===e.ref)return Xi(t,e,r)}return e.flags|=1,t=_r(s,i),t.ref=e.ref,t.return=e,e.child=t}function v_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Aa(s,i)&&t.ref===e.ref)if(An=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(An=!0);else return e.lanes=t.lanes,Xi(t,e,r)}return gh(t,e,n,i,r)}function __(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt($s,Un),Un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt($s,Un),Un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,xt($s,Un),Un|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,xt($s,Un),Un|=i;return gn(t,e,r,n),e.child}function y_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gh(t,e,n,i,r){var s=Rn(n)?Qr:dn.current;return s=lo(e,s),no(e,r),n=bf(t,e,n,i,s,r),i=Rf(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(bt&&i&&mf(e),e.flags|=1,gn(t,e,n,r),e.child)}function tm(t,e,n,i,r){if(Rn(n)){var s=!0;Sc(e)}else s=!1;if(no(e,r),e.stateNode===null)ic(t,e),p_(e,n,i),ph(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kn(c):(c=Rn(n)?Qr:dn.current,c=lo(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Yp(e,o,i,c),rr=!1;var f=e.memoizedState;o.state=f,Ac(e,i,o,r),l=e.memoizedState,a!==i||f!==l||bn.current||rr?(typeof u=="function"&&(fh(e,n,u,i),l=e.memoizedState),(a=rr||qp(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,$v(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ri(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kn(l):(l=Rn(n)?Qr:dn.current,l=lo(e,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Yp(e,o,i,l),rr=!1,f=e.memoizedState,o.state=f,Ac(e,i,o,r);var v=e.memoizedState;a!==h||f!==v||bn.current||rr?(typeof g=="function"&&(fh(e,n,g,i),v=e.memoizedState),(c=rr||qp(e,n,c,i,f,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return vh(t,e,n,i,s,r)}function vh(t,e,n,i,r,s){y_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Bp(e,n,!1),Xi(t,e,s);i=e.stateNode,GS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=uo(e,t.child,null,s),e.child=uo(e,null,a,s)):gn(t,e,a,s),e.memoizedState=i.state,r&&Bp(e,n,!0),e.child}function x_(t){var e=t.stateNode;e.pendingContext?zp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zp(t,e.context,!1),Ef(t,e.containerInfo)}function nm(t,e,n,i,r){return co(),vf(r),e.flags|=256,gn(t,e,n,i),e.child}var _h={dehydrated:null,treeContext:null,retryLane:0};function yh(t){return{baseLanes:t,cachePool:null,transitions:null}}function S_(t,e,n){var i=e.pendingProps,r=Ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(Ct,r&1),t===null)return dh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=eu(o,i,0,null),t=Yr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yh(n),e.memoizedState=_h,t):Lf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return VS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=_r(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=_r(a,s):(s=Yr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?yh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_h,i}return s=t.child,t=s.sibling,i=_r(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Lf(t,e){return e=eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cl(t,e,n,i){return i!==null&&vf(i),uo(e,t.child,null,n),t=Lf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ou(Error(re(422))),cl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=eu({mode:"visible",children:i.children},r,0,null),s=Yr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&uo(e,t.child,null,o),e.child.memoizedState=yh(o),e.memoizedState=_h,s);if(!(e.mode&1))return cl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Ou(s,i,void 0),cl(t,e,o,i)}if(a=(o&t.childLanes)!==0,An||a){if(i=Qt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ji(t,r),ui(i,t,r,-1))}return Ff(),i=Ou(Error(re(421))),cl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=nM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Fn=pr(r.nextSibling),On=e,bt=!0,oi=null,t!==null&&(jn[Xn++]=Fi,jn[Xn++]=Oi,jn[Xn++]=Jr,Fi=t.id,Oi=t.overflow,Jr=e),e=Lf(e,i.children),e.flags|=4096,e)}function im(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),hh(t.return,e,n)}function zu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function M_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(gn(t,e,i.children,n),i=Ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&im(t,n,e);else if(t.tag===19)im(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(Ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&bc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),zu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&bc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}zu(e,!0,n,null,s);break;case"together":zu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ic(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WS(t,e,n){switch(e.tag){case 3:x_(e),co();break;case 5:qv(e);break;case 1:Rn(e.type)&&Sc(e);break;case 4:Ef(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(wc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(Ct,Ct.current&1),e.flags|=128,null):n&e.child.childLanes?S_(t,e,n):(xt(Ct,Ct.current&1),t=Xi(t,e,n),t!==null?t.sibling:null);xt(Ct,Ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return M_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(Ct,Ct.current),i)break;return null;case 22:case 23:return e.lanes=0,__(t,e,n)}return Xi(t,e,n)}var E_,xh,w_,T_;E_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xh=function(){};w_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Xr(wi.current);var s=null;switch(n){case"input":r=Gd(t,r),i=Gd(t,i),s=[];break;case"select":r=Lt({},r,{value:void 0}),i=Lt({},i,{value:void 0}),s=[];break;case"textarea":r=jd(t,r),i=jd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=yc)}$d(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ya.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ya.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&wt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};T_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Bo(t,e){if(!bt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function on(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function jS(t,e,n){var i=e.pendingProps;switch(gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(e),null;case 1:return Rn(e.type)&&xc(),on(e),null;case 3:return i=e.stateNode,ho(),At(bn),At(dn),Tf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,oi!==null&&(Rh(oi),oi=null))),xh(t,e),on(e),null;case 5:wf(e);var r=Xr(La.current);if(n=e.type,t!==null&&e.stateNode!=null)w_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return on(e),null}if(t=Xr(wi.current),al(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[_i]=e,i[Ca]=s,t=(e.mode&1)!==0,n){case"dialog":wt("cancel",i),wt("close",i);break;case"iframe":case"object":case"embed":wt("load",i);break;case"video":case"audio":for(r=0;r<oa.length;r++)wt(oa[r],i);break;case"source":wt("error",i);break;case"img":case"image":case"link":wt("error",i),wt("load",i);break;case"details":wt("toggle",i);break;case"input":hp(i,s),wt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},wt("invalid",i);break;case"textarea":pp(i,s),wt("invalid",i)}$d(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ol(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ol(i.textContent,a,t),r=["children",""+a]):ya.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&wt("scroll",i)}switch(n){case"input":Qa(i),fp(i,s,!0);break;case"textarea":Qa(i),mp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=yc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=J0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[_i]=e,t[Ca]=i,E_(t,e,!1,!1),e.stateNode=t;e:{switch(o=qd(n,i),n){case"dialog":wt("cancel",t),wt("close",t),r=i;break;case"iframe":case"object":case"embed":wt("load",t),r=i;break;case"video":case"audio":for(r=0;r<oa.length;r++)wt(oa[r],t);r=i;break;case"source":wt("error",t),r=i;break;case"img":case"image":case"link":wt("error",t),wt("load",t),r=i;break;case"details":wt("toggle",t),r=i;break;case"input":hp(t,i),r=Gd(t,i),wt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Lt({},i,{value:void 0}),wt("invalid",t);break;case"textarea":pp(t,i),r=jd(t,i),wt("invalid",t);break;default:r=i}$d(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?nv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ev(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xa(t,l):typeof l=="number"&&xa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ya.hasOwnProperty(s)?l!=null&&s==="onScroll"&&wt("scroll",t):l!=null&&ef(t,s,l,o))}switch(n){case"input":Qa(t),fp(t,i,!1);break;case"textarea":Qa(t),mp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Qs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Qs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=yc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return on(e),null;case 6:if(t&&e.stateNode!=null)T_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Xr(La.current),Xr(wi.current),al(e)){if(i=e.stateNode,n=e.memoizedProps,i[_i]=e,(s=i.nodeValue!==n)&&(t=On,t!==null))switch(t.tag){case 3:ol(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[_i]=e,e.stateNode=i}return on(e),null;case 13:if(At(Ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(bt&&Fn!==null&&e.mode&1&&!(e.flags&128))Vv(),co(),e.flags|=98560,s=!1;else if(s=al(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[_i]=e}else co(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;on(e),s=!1}else oi!==null&&(Rh(oi),oi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ct.current&1?jt===0&&(jt=3):Ff())),e.updateQueue!==null&&(e.flags|=4),on(e),null);case 4:return ho(),xh(t,e),t===null&&ba(e.stateNode.containerInfo),on(e),null;case 10:return xf(e.type._context),on(e),null;case 17:return Rn(e.type)&&xc(),on(e),null;case 19:if(At(Ct),s=e.memoizedState,s===null)return on(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Bo(s,!1);else{if(jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bc(t),o!==null){for(e.flags|=128,Bo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(Ct,Ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ut()>po&&(e.flags|=128,i=!0,Bo(s,!1),e.lanes=4194304)}else{if(!i)if(t=bc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!bt)return on(e),null}else 2*Ut()-s.renderingStartTime>po&&n!==1073741824&&(e.flags|=128,i=!0,Bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ut(),e.sibling=null,n=Ct.current,xt(Ct,i?n&1|2:n&1),e):(on(e),null);case 22:case 23:return kf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Un&1073741824&&(on(e),e.subtreeFlags&6&&(e.flags|=8192)):on(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function XS(t,e){switch(gf(e),e.tag){case 1:return Rn(e.type)&&xc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ho(),At(bn),At(dn),Tf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wf(e),null;case 13:if(At(Ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));co()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return At(Ct),null;case 4:return ho(),null;case 10:return xf(e.type._context),null;case 22:case 23:return kf(),null;case 24:return null;default:return null}}var ul=!1,cn=!1,$S=typeof WeakSet=="function"?WeakSet:Set,ye=null;function Xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Dt(t,e,i)}else n.current=null}function Sh(t,e,n){try{n()}catch(i){Dt(t,e,i)}}var rm=!1;function qS(t,e){if(rh=gc,t=Pv(),pf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,f=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sh={focusedElem:t,selectionRange:n},gc=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,p=v.memoizedState,d=e.stateNode,y=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:ri(e.type,_),p);d.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){Dt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return v=rm,rm=!1,v}function pa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Sh(e,n,s)}r=r.next}while(r!==i)}}function Qc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Mh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function A_(t){var e=t.alternate;e!==null&&(t.alternate=null,A_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_i],delete e[Ca],delete e[lh],delete e[PS],delete e[LS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function b_(t){return t.tag===5||t.tag===3||t.tag===4}function sm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||b_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Eh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yc));else if(i!==4&&(t=t.child,t!==null))for(Eh(t,e,n),t=t.sibling;t!==null;)Eh(t,e,n),t=t.sibling}function wh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(wh(t,e,n),t=t.sibling;t!==null;)wh(t,e,n),t=t.sibling}var Jt=null,si=!1;function Ki(t,e,n){for(n=n.child;n!==null;)R_(t,e,n),n=n.sibling}function R_(t,e,n){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(Wc,n)}catch{}switch(n.tag){case 5:cn||Xs(n,e);case 6:var i=Jt,r=si;Jt=null,Ki(t,e,n),Jt=i,si=r,Jt!==null&&(si?(t=Jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Jt.removeChild(n.stateNode));break;case 18:Jt!==null&&(si?(t=Jt,n=n.stateNode,t.nodeType===8?Nu(t.parentNode,n):t.nodeType===1&&Nu(t,n),wa(t)):Nu(Jt,n.stateNode));break;case 4:i=Jt,r=si,Jt=n.stateNode.containerInfo,si=!0,Ki(t,e,n),Jt=i,si=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sh(n,e,o),r=r.next}while(r!==i)}Ki(t,e,n);break;case 1:if(!cn&&(Xs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Dt(n,e,a)}Ki(t,e,n);break;case 21:Ki(t,e,n);break;case 22:n.mode&1?(cn=(i=cn)||n.memoizedState!==null,Ki(t,e,n),cn=i):Ki(t,e,n);break;default:Ki(t,e,n)}}function om(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $S),e.forEach(function(i){var r=iM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ei(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Jt=a.stateNode,si=!1;break e;case 3:Jt=a.stateNode.containerInfo,si=!0;break e;case 4:Jt=a.stateNode.containerInfo,si=!0;break e}a=a.return}if(Jt===null)throw Error(re(160));R_(s,o,r),Jt=null,si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Dt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)C_(e,t),e=e.sibling}function C_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ei(e,t),pi(t),i&4){try{pa(3,t,t.return),Qc(3,t)}catch(_){Dt(t,t.return,_)}try{pa(5,t,t.return)}catch(_){Dt(t,t.return,_)}}break;case 1:ei(e,t),pi(t),i&512&&n!==null&&Xs(n,n.return);break;case 5:if(ei(e,t),pi(t),i&512&&n!==null&&Xs(n,n.return),t.flags&32){var r=t.stateNode;try{xa(r,"")}catch(_){Dt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Z0(r,s),qd(a,o);var c=qd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?nv(r,h):u==="dangerouslySetInnerHTML"?ev(r,h):u==="children"?xa(r,h):ef(r,u,h,c)}switch(a){case"input":Vd(r,s);break;case"textarea":Q0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Qs(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Qs(r,!!s.multiple,s.defaultValue,!0):Qs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ca]=s}catch(_){Dt(t,t.return,_)}}break;case 6:if(ei(e,t),pi(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){Dt(t,t.return,_)}}break;case 3:if(ei(e,t),pi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wa(e.containerInfo)}catch(_){Dt(t,t.return,_)}break;case 4:ei(e,t),pi(t);break;case 13:ei(e,t),pi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(If=Ut())),i&4&&om(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(cn=(c=cn)||u,ei(e,t),cn=c):ei(e,t),pi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ye=t,u=t.child;u!==null;){for(h=ye=u;ye!==null;){switch(f=ye,g=f.child,f.tag){case 0:case 11:case 14:case 15:pa(4,f,f.return);break;case 1:Xs(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Dt(i,n,_)}}break;case 5:Xs(f,f.return);break;case 22:if(f.memoizedState!==null){lm(h);continue}}g!==null?(g.return=f,ye=g):lm(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=tv("display",o))}catch(_){Dt(t,t.return,_)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){Dt(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ei(e,t),pi(t),i&4&&om(t);break;case 21:break;default:ei(e,t),pi(t)}}function pi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(b_(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xa(r,""),i.flags&=-33);var s=sm(t);wh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=sm(t);Eh(t,a,o);break;default:throw Error(re(161))}}catch(l){Dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function YS(t,e,n){ye=t,P_(t)}function P_(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ul;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||cn;a=ul;var c=cn;if(ul=o,(cn=l)&&!c)for(ye=r;ye!==null;)o=ye,l=o.child,o.tag===22&&o.memoizedState!==null?cm(r):l!==null?(l.return=o,ye=l):cm(r);for(;s!==null;)ye=s,P_(s),s=s.sibling;ye=r,ul=a,cn=c}am(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):am(t)}}function am(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||Qc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ri(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&wa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}cn||e.flags&512&&Mh(e)}catch(f){Dt(e,e.return,f)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function lm(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function cm(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qc(4,e)}catch(l){Dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Dt(e,r,l)}}var s=e.return;try{Mh(e)}catch(l){Dt(e,s,l)}break;case 5:var o=e.return;try{Mh(e)}catch(l){Dt(e,o,l)}}}catch(l){Dt(e,e.return,l)}if(e===t){ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ye=a;break}ye=e.return}}var KS=Math.ceil,Pc=$i.ReactCurrentDispatcher,Nf=$i.ReactCurrentOwner,Yn=$i.ReactCurrentBatchConfig,st=0,Qt=null,Vt=null,tn=0,Un=0,$s=br(0),jt=0,Ua=null,ts=0,Jc=0,Df=0,ma=null,wn=null,If=0,po=1/0,Ii=null,Lc=!1,Th=null,gr=null,dl=!1,cr=null,Nc=0,ga=0,Ah=null,rc=-1,sc=0;function vn(){return st&6?Ut():rc!==-1?rc:rc=Ut()}function vr(t){return t.mode&1?st&2&&tn!==0?tn&-tn:DS.transition!==null?(sc===0&&(sc=pv()),sc):(t=dt,t!==0||(t=window.event,t=t===void 0?16:Sv(t.type)),t):1}function ui(t,e,n,i){if(50<ga)throw ga=0,Ah=null,Error(re(185));Oa(t,n,i),(!(st&2)||t!==Qt)&&(t===Qt&&(!(st&2)&&(Jc|=n),jt===4&&or(t,tn)),Cn(t,i),n===1&&st===0&&!(e.mode&1)&&(po=Ut()+500,Yc&&Rr()))}function Cn(t,e){var n=t.callbackNode;Dx(t,e);var i=mc(t,t===Qt?tn:0);if(i===0)n!==null&&_p(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&_p(n),e===1)t.tag===0?NS(um.bind(null,t)):Bv(um.bind(null,t)),RS(function(){!(st&6)&&Rr()}),n=null;else{switch(mv(i)){case 1:n=of;break;case 4:n=hv;break;case 16:n=pc;break;case 536870912:n=fv;break;default:n=pc}n=O_(n,L_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function L_(t,e){if(rc=-1,sc=0,st&6)throw Error(re(327));var n=t.callbackNode;if(io()&&t.callbackNode!==n)return null;var i=mc(t,t===Qt?tn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dc(t,i);else{e=i;var r=st;st|=2;var s=D_();(Qt!==t||tn!==e)&&(Ii=null,po=Ut()+500,qr(t,e));do try{JS();break}catch(a){N_(t,a)}while(!0);yf(),Pc.current=s,st=r,Vt!==null?e=0:(Qt=null,tn=0,e=jt)}if(e!==0){if(e===2&&(r=Jd(t),r!==0&&(i=r,e=bh(t,r))),e===1)throw n=Ua,qr(t,0),or(t,i),Cn(t,Ut()),n;if(e===6)or(t,i);else{if(r=t.current.alternate,!(i&30)&&!ZS(r)&&(e=Dc(t,i),e===2&&(s=Jd(t),s!==0&&(i=s,e=bh(t,s))),e===1))throw n=Ua,qr(t,0),or(t,i),Cn(t,Ut()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:zr(t,wn,Ii);break;case 3:if(or(t,i),(i&130023424)===i&&(e=If+500-Ut(),10<e)){if(mc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){vn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ah(zr.bind(null,t,wn,Ii),e);break}zr(t,wn,Ii);break;case 4:if(or(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ci(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ut()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*KS(i/1960))-i,10<i){t.timeoutHandle=ah(zr.bind(null,t,wn,Ii),i);break}zr(t,wn,Ii);break;case 5:zr(t,wn,Ii);break;default:throw Error(re(329))}}}return Cn(t,Ut()),t.callbackNode===n?L_.bind(null,t):null}function bh(t,e){var n=ma;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=Dc(t,e),t!==2&&(e=wn,wn=n,e!==null&&Rh(e)),t}function Rh(t){wn===null?wn=t:wn.push.apply(wn,t)}function ZS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!di(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~Df,e&=~Jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ci(e),i=1<<n;t[n]=-1,e&=~i}}function um(t){if(st&6)throw Error(re(327));io();var e=mc(t,0);if(!(e&1))return Cn(t,Ut()),null;var n=Dc(t,e);if(t.tag!==0&&n===2){var i=Jd(t);i!==0&&(e=i,n=bh(t,i))}if(n===1)throw n=Ua,qr(t,0),or(t,e),Cn(t,Ut()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,wn,Ii),Cn(t,Ut()),null}function Uf(t,e){var n=st;st|=1;try{return t(e)}finally{st=n,st===0&&(po=Ut()+500,Yc&&Rr())}}function ns(t){cr!==null&&cr.tag===0&&!(st&6)&&io();var e=st;st|=1;var n=Yn.transition,i=dt;try{if(Yn.transition=null,dt=1,t)return t()}finally{dt=i,Yn.transition=n,st=e,!(st&6)&&Rr()}}function kf(){Un=$s.current,At($s)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bS(n)),Vt!==null)for(n=Vt.return;n!==null;){var i=n;switch(gf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xc();break;case 3:ho(),At(bn),At(dn),Tf();break;case 5:wf(i);break;case 4:ho();break;case 13:At(Ct);break;case 19:At(Ct);break;case 10:xf(i.type._context);break;case 22:case 23:kf()}n=n.return}if(Qt=t,Vt=t=_r(t.current,null),tn=Un=e,jt=0,Ua=null,Df=Jc=ts=0,wn=ma=null,jr!==null){for(e=0;e<jr.length;e++)if(n=jr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}jr=null}return t}function N_(t,e){do{var n=Vt;try{if(yf(),tc.current=Cc,Rc){for(var i=Pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rc=!1}if(es=0,Kt=Wt=Pt=null,fa=!1,Na=0,Nf.current=null,n===null||n.return===null){jt=1,Ua=e,Vt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=Zp(o);if(g!==null){g.flags&=-257,Qp(g,o,a,s,e),g.mode&1&&Kp(s,c,e),e=g,l=c;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Kp(s,c,e),Ff();break e}l=Error(re(426))}}else if(bt&&a.mode&1){var p=Zp(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Qp(p,o,a,s,e),vf(fo(l,a));break e}}s=l=fo(l,a),jt!==4&&(jt=2),ma===null?ma=[s]:ma.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=m_(s,l,e);Wp(s,d);break e;case 1:a=l;var y=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(gr===null||!gr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=g_(s,a,e);Wp(s,S);break e}}s=s.return}while(s!==null)}U_(n)}catch(C){e=C,Vt===n&&n!==null&&(Vt=n=n.return);continue}break}while(!0)}function D_(){var t=Pc.current;return Pc.current=Cc,t===null?Cc:t}function Ff(){(jt===0||jt===3||jt===2)&&(jt=4),Qt===null||!(ts&268435455)&&!(Jc&268435455)||or(Qt,tn)}function Dc(t,e){var n=st;st|=2;var i=D_();(Qt!==t||tn!==e)&&(Ii=null,qr(t,e));do try{QS();break}catch(r){N_(t,r)}while(!0);if(yf(),st=n,Pc.current=i,Vt!==null)throw Error(re(261));return Qt=null,tn=0,jt}function QS(){for(;Vt!==null;)I_(Vt)}function JS(){for(;Vt!==null&&!wx();)I_(Vt)}function I_(t){var e=F_(t.alternate,t,Un);t.memoizedProps=t.pendingProps,e===null?U_(t):Vt=e,Nf.current=null}function U_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=XS(n,e),n!==null){n.flags&=32767,Vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,Vt=null;return}}else if(n=jS(n,e,Un),n!==null){Vt=n;return}if(e=e.sibling,e!==null){Vt=e;return}Vt=e=t}while(e!==null);jt===0&&(jt=5)}function zr(t,e,n){var i=dt,r=Yn.transition;try{Yn.transition=null,dt=1,eM(t,e,n,i)}finally{Yn.transition=r,dt=i}return null}function eM(t,e,n,i){do io();while(cr!==null);if(st&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ix(t,s),t===Qt&&(Vt=Qt=null,tn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,O_(pc,function(){return io(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yn.transition,Yn.transition=null;var o=dt;dt=1;var a=st;st|=4,Nf.current=null,qS(t,n),C_(n,t),xS(sh),gc=!!rh,sh=rh=null,t.current=n,YS(n),Tx(),st=a,dt=o,Yn.transition=s}else t.current=n;if(dl&&(dl=!1,cr=t,Nc=r),s=t.pendingLanes,s===0&&(gr=null),Rx(n.stateNode),Cn(t,Ut()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Lc)throw Lc=!1,t=Th,Th=null,t;return Nc&1&&t.tag!==0&&io(),s=t.pendingLanes,s&1?t===Ah?ga++:(ga=0,Ah=t):ga=0,Rr(),null}function io(){if(cr!==null){var t=mv(Nc),e=Yn.transition,n=dt;try{if(Yn.transition=null,dt=16>t?16:t,cr===null)var i=!1;else{if(t=cr,cr=null,Nc=0,st&6)throw Error(re(331));var r=st;for(st|=4,ye=t.current;ye!==null;){var s=ye,o=s.child;if(ye.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ye=c;ye!==null;){var u=ye;switch(u.tag){case 0:case 11:case 15:pa(8,u,s)}var h=u.child;if(h!==null)h.return=u,ye=h;else for(;ye!==null;){u=ye;var f=u.sibling,g=u.return;if(A_(u),u===c){ye=null;break}if(f!==null){f.return=g,ye=f;break}ye=g}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}ye=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ye=o;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:pa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ye=d;break e}ye=s.return}}var y=t.current;for(ye=y;ye!==null;){o=ye;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,ye=m;else e:for(o=y;ye!==null;){if(a=ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qc(9,a)}}catch(C){Dt(a,a.return,C)}if(a===o){ye=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ye=S;break e}ye=a.return}}if(st=r,Rr(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(Wc,t)}catch{}i=!0}return i}finally{dt=n,Yn.transition=e}}return!1}function dm(t,e,n){e=fo(n,e),e=m_(t,e,1),t=mr(t,e,1),e=vn(),t!==null&&(Oa(t,1,e),Cn(t,e))}function Dt(t,e,n){if(t.tag===3)dm(t,t,n);else for(;e!==null;){if(e.tag===3){dm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gr===null||!gr.has(i))){t=fo(n,t),t=g_(e,t,1),e=mr(e,t,1),t=vn(),e!==null&&(Oa(e,1,t),Cn(e,t));break}}e=e.return}}function tM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=vn(),t.pingedLanes|=t.suspendedLanes&n,Qt===t&&(tn&n)===n&&(jt===4||jt===3&&(tn&130023424)===tn&&500>Ut()-If?qr(t,0):Df|=n),Cn(t,e)}function k_(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=vn();t=ji(t,e),t!==null&&(Oa(t,e,n),Cn(t,n))}function nM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),k_(t,n)}function iM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),k_(t,n)}var F_;F_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bn.current)An=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return An=!1,WS(t,e,n);An=!!(t.flags&131072)}else An=!1,bt&&e.flags&1048576&&Hv(e,Ec,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ic(t,e),t=e.pendingProps;var r=lo(e,dn.current);no(e,n),r=bf(null,e,i,t,r,n);var s=Rf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rn(i)?(s=!0,Sc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mf(e),r.updater=Zc,e.stateNode=r,r._reactInternals=e,ph(e,i,t,n),e=vh(null,e,i,!0,s,n)):(e.tag=0,bt&&s&&mf(e),gn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ic(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=sM(i),t=ri(i,t),r){case 0:e=gh(null,e,i,t,n);break e;case 1:e=tm(null,e,i,t,n);break e;case 11:e=Jp(null,e,i,t,n);break e;case 14:e=em(null,e,i,ri(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),gh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),tm(t,e,i,r,n);case 3:e:{if(x_(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,$v(t,e),Ac(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=fo(Error(re(423)),e),e=nm(t,e,i,n,r);break e}else if(i!==r){r=fo(Error(re(424)),e),e=nm(t,e,i,n,r);break e}else for(Fn=pr(e.stateNode.containerInfo.firstChild),On=e,bt=!0,oi=null,n=jv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(co(),i===r){e=Xi(t,e,n);break e}gn(t,e,i,n)}e=e.child}return e;case 5:return qv(e),t===null&&dh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,oh(i,r)?o=null:s!==null&&oh(i,s)&&(e.flags|=32),y_(t,e),gn(t,e,o,n),e.child;case 6:return t===null&&dh(e),null;case 13:return S_(t,e,n);case 4:return Ef(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=uo(e,null,i,n):gn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Jp(t,e,i,r,n);case 7:return gn(t,e,e.pendingProps,n),e.child;case 8:return gn(t,e,e.pendingProps.children,n),e.child;case 12:return gn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,xt(wc,i._currentValue),i._currentValue=o,s!==null)if(di(s.value,o)){if(s.children===r.children&&!bn.current){e=Xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),hh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,no(e,n),r=Kn(r),i=i(r),e.flags|=1,gn(t,e,i,n),e.child;case 14:return i=e.type,r=ri(i,e.pendingProps),r=ri(i.type,r),em(t,e,i,r,n);case 15:return v_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),ic(t,e),e.tag=1,Rn(i)?(t=!0,Sc(e)):t=!1,no(e,n),p_(e,i,r),ph(e,i,r,n),vh(null,e,i,!0,t,n);case 19:return M_(t,e,n);case 22:return __(t,e,n)}throw Error(re(156,e.tag))};function O_(t,e){return dv(t,e)}function rM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,e,n,i){return new rM(t,e,n,i)}function Of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sM(t){if(typeof t=="function")return Of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nf)return 11;if(t===rf)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function oc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Of(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fs:return Yr(n.children,r,s,e);case tf:o=8,r|=8;break;case Od:return t=qn(12,n,e,r|2),t.elementType=Od,t.lanes=s,t;case zd:return t=qn(13,n,e,r),t.elementType=zd,t.lanes=s,t;case Bd:return t=qn(19,n,e,r),t.elementType=Bd,t.lanes=s,t;case q0:return eu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case X0:o=10;break e;case $0:o=9;break e;case nf:o=11;break e;case rf:o=14;break e;case ir:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=qn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Yr(t,e,n,i){return t=qn(7,t,i,e),t.lanes=n,t}function eu(t,e,n,i){return t=qn(22,t,i,e),t.elementType=q0,t.lanes=n,t.stateNode={isHidden:!1},t}function Bu(t,e,n){return t=qn(6,t,null,e),t.lanes=n,t}function Hu(t,e,n){return e=qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Su(0),this.expirationTimes=Su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Su(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function zf(t,e,n,i,r,s,o,a,l){return t=new oM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mf(s),t}function aM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ks,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function z_(t){if(!t)return Er;t=t._reactInternals;e:{if(ss(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(Rn(n))return zv(t,n,e)}return e}function B_(t,e,n,i,r,s,o,a,l){return t=zf(n,i,!0,t,r,s,o,a,l),t.context=z_(null),n=t.current,i=vn(),r=vr(n),s=Hi(i,r),s.callback=e??null,mr(n,s,r),t.current.lanes=r,Oa(t,r,i),Cn(t,i),t}function tu(t,e,n,i){var r=e.current,s=vn(),o=vr(r);return n=z_(n),e.context===null?e.context=n:e.pendingContext=n,e=Hi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=mr(r,e,o),t!==null&&(ui(t,r,o,s),ec(t,r,o)),o}function Ic(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bf(t,e){hm(t,e),(t=t.alternate)&&hm(t,e)}function lM(){return null}var H_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hf(t){this._internalRoot=t}nu.prototype.render=Hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));tu(t,e,null,null)};nu.prototype.unmount=Hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ns(function(){tu(null,t,null,null)}),e[Wi]=null}};function nu(t){this._internalRoot=t}nu.prototype.unstable_scheduleHydration=function(t){if(t){var e=_v();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&xv(t)}};function Gf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fm(){}function cM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ic(o);s.call(c)}}var o=B_(e,i,t,0,null,!1,!1,"",fm);return t._reactRootContainer=o,t[Wi]=o.current,ba(t.nodeType===8?t.parentNode:t),ns(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ic(l);a.call(c)}}var l=zf(t,0,!1,null,null,!1,!1,"",fm);return t._reactRootContainer=l,t[Wi]=l.current,ba(t.nodeType===8?t.parentNode:t),ns(function(){tu(e,l,n,i)}),l}function ru(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ic(o);a.call(l)}}tu(e,o,t,r)}else o=cM(n,e,t,r,i);return Ic(o)}gv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(af(e,n|1),Cn(e,Ut()),!(st&6)&&(po=Ut()+500,Rr()))}break;case 13:ns(function(){var i=ji(t,1);if(i!==null){var r=vn();ui(i,t,1,r)}}),Bf(t,1)}};lf=function(t){if(t.tag===13){var e=ji(t,134217728);if(e!==null){var n=vn();ui(e,t,134217728,n)}Bf(t,134217728)}};vv=function(t){if(t.tag===13){var e=vr(t),n=ji(t,e);if(n!==null){var i=vn();ui(n,t,e,i)}Bf(t,e)}};_v=function(){return dt};yv=function(t,e){var n=dt;try{return dt=t,e()}finally{dt=n}};Kd=function(t,e,n){switch(e){case"input":if(Vd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=qc(i);if(!r)throw Error(re(90));K0(i),Vd(i,r)}}}break;case"textarea":Q0(t,n);break;case"select":e=n.value,e!=null&&Qs(t,!!n.multiple,e,!1)}};sv=Uf;ov=ns;var uM={usingClientEntryPoint:!1,Events:[Ba,Hs,qc,iv,rv,Uf]},Ho={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dM={bundleType:Ho.bundleType,version:Ho.version,rendererPackageName:Ho.rendererPackageName,rendererConfig:Ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ho.findFiberByHostInstance||lM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{Wc=hl.inject(dM),Ei=hl}catch{}}Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uM;Hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gf(e))throw Error(re(200));return aM(t,e,null,n)};Hn.createRoot=function(t,e){if(!Gf(t))throw Error(re(299));var n=!1,i="",r=H_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=zf(t,1,!1,null,null,n,!1,i,r),t[Wi]=e.current,ba(t.nodeType===8?t.parentNode:t),new Hf(e)};Hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=cv(e),t=t===null?null:t.stateNode,t};Hn.flushSync=function(t){return ns(t)};Hn.hydrate=function(t,e,n){if(!iu(e))throw Error(re(200));return ru(null,t,e,!0,n)};Hn.hydrateRoot=function(t,e,n){if(!Gf(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=H_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=B_(e,null,t,1,n??null,r,!1,s,o),t[Wi]=e.current,ba(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nu(e)};Hn.render=function(t,e,n){if(!iu(e))throw Error(re(200));return ru(null,t,e,!1,n)};Hn.unmountComponentAtNode=function(t){if(!iu(t))throw Error(re(40));return t._reactRootContainer?(ns(function(){ru(null,null,t,!1,function(){t._reactRootContainer=null,t[Wi]=null})}),!0):!1};Hn.unstable_batchedUpdates=Uf;Hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!iu(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return ru(t,e,n,!1,i)};Hn.version="18.3.1-next-f1338f8080-20240426";function G_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G_)}catch(t){console.error(t)}}G_(),G0.exports=Hn;var hM=G0.exports,pm=hM;kd.createRoot=pm.createRoot,kd.hydrateRoot=pm.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vf="162",fM=0,mm=1,pM=2,V_=1,W_=2,Di=3,wr=0,Pn=1,ki=2,yr=0,ro=1,Ch=2,gm=3,vm=4,mM=5,Gr=100,gM=101,vM=102,_m=103,ym=104,_M=200,yM=201,xM=202,SM=203,Ph=204,Lh=205,MM=206,EM=207,wM=208,TM=209,AM=210,bM=211,RM=212,CM=213,PM=214,LM=0,NM=1,DM=2,Uc=3,IM=4,UM=5,kM=6,FM=7,Wf=0,OM=1,zM=2,Gi=0,BM=1,HM=2,GM=3,j_=4,VM=5,WM=6,jM=7,X_=300,mo=301,go=302,Nh=303,Dh=304,su=306,Ih=1e3,ai=1001,Uh=1002,Zt=1003,kh=1004,Go=1005,En=1006,Gu=1007,$r=1008,xr=1009,XM=1010,$M=1011,jf=1012,$_=1013,ur=1014,yi=1015,ka=1016,q_=1017,Y_=1018,Kr=1020,qM=1021,li=1023,YM=1024,KM=1025,Zr=1026,vo=1027,K_=1028,Z_=1029,ZM=1030,Q_=1031,J_=1033,Vu=33776,Wu=33777,ju=33778,Xu=33779,xm=35840,Sm=35841,Mm=35842,Em=35843,ey=36196,wm=37492,Tm=37496,Am=37808,bm=37809,Rm=37810,Cm=37811,Pm=37812,Lm=37813,Nm=37814,Dm=37815,Im=37816,Um=37817,km=37818,Fm=37819,Om=37820,zm=37821,$u=36492,Bm=36494,Hm=36495,QM=36283,Gm=36284,Vm=36285,Wm=36286,JM=3200,eE=3201,ty=0,tE=1,ar="",Wn="srgb",Cr="srgb-linear",Xf="display-p3",ou="display-p3-linear",kc="linear",Tt="srgb",Fc="rec709",Oc="p3",hs=7680,jm=519,nE=512,iE=513,rE=514,ny=515,sE=516,oE=517,aE=518,lE=519,Fh=35044,Xm=35048,$m="300 es",Oh=1035,zi=2e3,zc=2001;class Mo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ac=Math.PI/180,zh=180/Math.PI;function Sr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[t&255]+an[t>>8&255]+an[t>>16&255]+an[t>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function Tn(t,e,n){return Math.max(e,Math.min(n,t))}function cE(t,e){return(t%e+e)%e}function qu(t,e,n){return(1-n)*t+n*e}function qm(t){return(t&t-1)===0&&t!==0}function Bh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function xi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function pt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,n,i,r,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],g=i[5],v=i[8],_=r[0],p=r[3],d=r[6],y=r[1],m=r[4],S=r[7],C=r[2],b=r[5],T=r[8];return s[0]=o*_+a*y+l*C,s[3]=o*p+a*m+l*b,s[6]=o*d+a*S+l*T,s[1]=c*_+u*y+h*C,s[4]=c*p+u*m+h*b,s[7]=c*d+u*S+h*T,s[2]=f*_+g*y+v*C,s[5]=f*p+g*m+v*b,s[8]=f*d+g*S+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,g=c*s-o*l,v=n*h+i*f+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=g*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Yu.makeScale(e,n)),this}rotate(e){return this.premultiply(Yu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Yu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yu=new Ke;function iy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function uE(){const t=Bc("canvas");return t.style.display="block",t}const Ym={};function ry(t){t in Ym||(Ym[t]=!0,console.warn(t))}const Km=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zm=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fl={[Cr]:{transfer:kc,primaries:Fc,toReference:t=>t,fromReference:t=>t},[Wn]:{transfer:Tt,primaries:Fc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ou]:{transfer:kc,primaries:Oc,toReference:t=>t.applyMatrix3(Zm),fromReference:t=>t.applyMatrix3(Km)},[Xf]:{transfer:Tt,primaries:Oc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Zm),fromReference:t=>t.applyMatrix3(Km).convertLinearToSRGB()}},dE=new Set([Cr,ou]),mt={enabled:!0,_workingColorSpace:Cr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!dE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=fl[e].toReference,r=fl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return fl[t].primaries},getTransfer:function(t){return t===ar?kc:fl[t].transfer}};function so(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ku(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let fs;class sy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fs===void 0&&(fs=Bc("canvas")),fs.width=e.width,fs.height=e.height;const i=fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=so(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(so(n[i]/255)*255):n[i]=so(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hE=0;class oy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Zu(r[o].image)):s.push(Zu(r[o]))}else s=Zu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Zu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?sy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fE=0;class un extends Mo{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=ai,r=ai,s=En,o=$r,a=li,l=xr,c=un.DEFAULT_ANISOTROPY,u=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Sr(),this.name="",this.source=new oy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==X_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ih:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ih:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=X_;un.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],g=l[5],v=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(v+p)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(c+1)/2,S=(g+1)/2,C=(d+1)/2,b=(u+f)/4,T=(h+_)/4,L=(v+p)/4;return m>S&&m>C?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=b/i,s=T/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=L/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=L/s),this.set(i,r,s,n),this}let y=Math.sqrt((p-v)*(p-v)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-v)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+g+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pE extends Mo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new oy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends pE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ay extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mE extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ga{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],g=s[o+1],v=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=g,e[n+2]=v,e[n+3]=_;return}if(h!==_||l!==f||c!==g||u!==v){let p=1-a;const d=l*f+c*g+u*v+h*_,y=d>=0?1:-1,m=1-d*d;if(m>Number.EPSILON){const C=Math.sqrt(m),b=Math.atan2(C,d*y);p=Math.sin(p*b)/C,a=Math.sin(a*b)/C}const S=a*y;if(l=l*p+f*S,c=c*p+g*S,u=u*p+v*S,h=h*p+_*S,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],g=s[o+2],v=s[o+3];return e[n]=a*v+u*h+l*g-c*f,e[n+1]=l*v+u*f+c*h-a*g,e[n+2]=c*v+u*g+a*f-l*h,e[n+3]=u*v-a*h-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),g=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*g*v,this._y=c*g*h-f*u*v,this._z=c*u*v+f*g*h,this._w=c*u*h-f*g*v;break;case"YXZ":this._x=f*u*h+c*g*v,this._y=c*g*h-f*u*v,this._z=c*u*v-f*g*h,this._w=c*u*h+f*g*v;break;case"ZXY":this._x=f*u*h-c*g*v,this._y=c*g*h+f*u*v,this._z=c*u*v+f*g*h,this._w=c*u*h-f*g*v;break;case"ZYX":this._x=f*u*h-c*g*v,this._y=c*g*h+f*u*v,this._z=c*u*v-f*g*h,this._w=c*u*h+f*g*v;break;case"YZX":this._x=f*u*h+c*g*v,this._y=c*g*h+f*u*v,this._z=c*u*v-f*g*h,this._w=c*u*h-f*g*v;break;case"XZY":this._x=f*u*h-c*g*v,this._y=c*g*h-f*u*v,this._z=c*u*v+f*g*h,this._w=c*u*h+f*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(u-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qu.copy(this).projectOnVector(e),this.sub(Qu)}reflect(e){return this.sub(Qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qu=new I,Qm=new Ga;class os{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(s,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pl.copy(i.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),ml.subVectors(this.max,Vo),ps.subVectors(e.a,Vo),ms.subVectors(e.b,Vo),gs.subVectors(e.c,Vo),Zi.subVectors(ms,ps),Qi.subVectors(gs,ms),Nr.subVectors(ps,gs);let n=[0,-Zi.z,Zi.y,0,-Qi.z,Qi.y,0,-Nr.z,Nr.y,Zi.z,0,-Zi.x,Qi.z,0,-Qi.x,Nr.z,0,-Nr.x,-Zi.y,Zi.x,0,-Qi.y,Qi.x,0,-Nr.y,Nr.x,0];return!Ju(n,ps,ms,gs,ml)||(n=[1,0,0,0,1,0,0,0,1],!Ju(n,ps,ms,gs,ml))?!1:(gl.crossVectors(Zi,Qi),n=[gl.x,gl.y,gl.z],Ju(n,ps,ms,gs,ml))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new I,new I,new I,new I,new I,new I,new I,new I],ti=new I,pl=new os,ps=new I,ms=new I,gs=new I,Zi=new I,Qi=new I,Nr=new I,Vo=new I,ml=new I,gl=new I,Dr=new I;function Ju(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Dr.fromArray(t,s);const a=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),l=e.dot(Dr),c=n.dot(Dr),u=i.dot(Dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const gE=new os,Wo=new I,ed=new I;class as{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):gE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const n=Wo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Wo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(ed)),this.expandByPoint(Wo.copy(e.center).sub(ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new I,td=new I,vl=new I,Ji=new I,nd=new I,_l=new I,id=new I;class au{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){td.copy(e).add(n).multiplyScalar(.5),vl.copy(n).sub(e).normalize(),Ji.copy(this.origin).sub(td);const s=e.distanceTo(n)*.5,o=-this.direction.dot(vl),a=Ji.dot(this.direction),l=-Ji.dot(vl),c=Ji.lengthSq(),u=Math.abs(1-o*o);let h,f,g,v;if(u>0)if(h=o*l-a,f=o*a-l,v=s*u,h>=0)if(f>=-v)if(f<=v){const _=1/u;h*=_,f*=_,g=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(td).addScaledVector(vl,f),g}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,s){nd.subVectors(n,e),_l.subVectors(i,e),id.crossVectors(nd,_l);let o=this.direction.dot(id),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);const l=a*this.direction.dot(_l.crossVectors(Ji,_l));if(l<0)return null;const c=a*this.direction.dot(nd.cross(Ji));if(c<0||l+c>o)return null;const u=-a*Ji.dot(id);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,n,i,r,s,o,a,l,c,u,h,f,g,v,_,p){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,f,g,v,_,p)}set(e,n,i,r,s,o,a,l,c,u,h,f,g,v,_,p){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=g,d[7]=v,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,g=o*h,v=a*u,_=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=g+v*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=v+g*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,g=l*h,v=c*u,_=c*h;n[0]=f+_*a,n[4]=v*a-g,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=g*a-v,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,g=l*h,v=c*u,_=c*h;n[0]=f-_*a,n[4]=-o*h,n[8]=v+g*a,n[1]=g+v*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,g=o*h,v=a*u,_=a*h;n[0]=l*u,n[4]=v*c-g,n[8]=f*c+_,n[1]=l*h,n[5]=_*c+f,n[9]=g*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*c,v=a*l,_=a*c;n[0]=l*u,n[4]=_-f*h,n[8]=v*h+g,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=g*h+v,n[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,g=o*c,v=a*l,_=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+_,n[5]=o*u,n[9]=g*h-v,n[2]=v*h-g,n[6]=a*u,n[10]=_*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vE,e,_E)}lookAt(e,n,i){const r=this.elements;return Ln.subVectors(e,n),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),er.crossVectors(i,Ln),er.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),er.crossVectors(i,Ln)),er.normalize(),yl.crossVectors(Ln,er),r[0]=er.x,r[4]=yl.x,r[8]=Ln.x,r[1]=er.y,r[5]=yl.y,r[9]=Ln.y,r[2]=er.z,r[6]=yl.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],g=i[13],v=i[2],_=i[6],p=i[10],d=i[14],y=i[3],m=i[7],S=i[11],C=i[15],b=r[0],T=r[4],L=r[8],K=r[12],x=r[1],P=r[5],se=r[9],ne=r[13],U=r[2],Y=r[6],$=r[10],Q=r[14],N=r[3],z=r[7],W=r[11],J=r[15];return s[0]=o*b+a*x+l*U+c*N,s[4]=o*T+a*P+l*Y+c*z,s[8]=o*L+a*se+l*$+c*W,s[12]=o*K+a*ne+l*Q+c*J,s[1]=u*b+h*x+f*U+g*N,s[5]=u*T+h*P+f*Y+g*z,s[9]=u*L+h*se+f*$+g*W,s[13]=u*K+h*ne+f*Q+g*J,s[2]=v*b+_*x+p*U+d*N,s[6]=v*T+_*P+p*Y+d*z,s[10]=v*L+_*se+p*$+d*W,s[14]=v*K+_*ne+p*Q+d*J,s[3]=y*b+m*x+S*U+C*N,s[7]=y*T+m*P+S*Y+C*z,s[11]=y*L+m*se+S*$+C*W,s[15]=y*K+m*ne+S*Q+C*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],g=e[14],v=e[3],_=e[7],p=e[11],d=e[15];return v*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*g-i*l*g)+_*(+n*l*g-n*c*f+s*o*f-r*o*g+r*c*u-s*l*u)+p*(+n*c*h-n*a*g-s*o*h+i*o*g+s*a*u-i*c*u)+d*(-r*a*u-n*l*h+n*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],g=e[11],v=e[12],_=e[13],p=e[14],d=e[15],y=h*p*c-_*f*c+_*l*g-a*p*g-h*l*d+a*f*d,m=v*f*c-u*p*c-v*l*g+o*p*g+u*l*d-o*f*d,S=u*_*c-v*h*c+v*a*g-o*_*g-u*a*d+o*h*d,C=v*h*l-u*_*l-v*a*f+o*_*f+u*a*p-o*h*p,b=n*y+i*m+r*S+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=y*T,e[1]=(_*f*s-h*p*s-_*r*g+i*p*g+h*r*d-i*f*d)*T,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*d+i*l*d)*T,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*g-i*l*g)*T,e[4]=m*T,e[5]=(u*p*s-v*f*s+v*r*g-n*p*g-u*r*d+n*f*d)*T,e[6]=(v*l*s-o*p*s-v*r*c+n*p*c+o*r*d-n*l*d)*T,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*g+n*l*g)*T,e[8]=S*T,e[9]=(v*h*s-u*_*s-v*i*g+n*_*g+u*i*d-n*h*d)*T,e[10]=(o*_*s-v*a*s+v*i*c-n*_*c-o*i*d+n*a*d)*T,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*g-n*a*g)*T,e[12]=C*T,e[13]=(u*_*r-v*h*r+v*i*f-n*_*f-u*i*p+n*h*p)*T,e[14]=(v*a*r-o*_*r-v*i*l+n*_*l+o*i*p-n*a*p)*T,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*f+n*a*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,f=s*c,g=s*u,v=s*h,_=o*u,p=o*h,d=a*h,y=l*c,m=l*u,S=l*h,C=i.x,b=i.y,T=i.z;return r[0]=(1-(_+d))*C,r[1]=(g+S)*C,r[2]=(v-m)*C,r[3]=0,r[4]=(g-S)*b,r[5]=(1-(f+d))*b,r[6]=(p+y)*b,r[7]=0,r[8]=(v+m)*T,r[9]=(p-y)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=vs.set(r[0],r[1],r[2]).length();const o=vs.set(r[4],r[5],r[6]).length(),a=vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ni.copy(this);const c=1/s,u=1/o,h=1/a;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=h,ni.elements[9]*=h,ni.elements[10]*=h,n.setFromRotationMatrix(ni),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=zi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let g,v;if(a===zi)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===zc)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=zi){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(o-s),f=(n+e)*c,g=(i+r)*u;let v,_;if(a===zi)v=(o+s)*h,_=-2*h;else if(a===zc)v=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vs=new I,ni=new it,vE=new I(0,0,0),_E=new I(1,1,1),er=new I,yl=new I,Ln=new I,Jm=new it,eg=new Ga;class hi{constructor(e=0,n=0,i=0,r=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return eg.setFromEuler(this),this.setFromQuaternion(eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class $f{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yE=0;const tg=new I,_s=new Ga,Pi=new it,xl=new I,jo=new I,xE=new I,SE=new Ga,ng=new I(1,0,0),ig=new I(0,1,0),rg=new I(0,0,1),ME={type:"added"},EE={type:"removed"},rd={type:"childadded",child:null},sd={type:"childremoved",child:null};class kt extends Mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new I,n=new hi,i=new Ga,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new Ke}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $f,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(ng,e)}rotateY(e){return this.rotateOnAxis(ig,e)}rotateZ(e){return this.rotateOnAxis(rg,e)}translateOnAxis(e,n){return tg.copy(e).applyQuaternion(this.quaternion),this.position.add(tg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ng,e)}translateY(e){return this.translateOnAxis(ig,e)}translateZ(e){return this.translateOnAxis(rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xl.copy(e):xl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(jo,xl,this.up):Pi.lookAt(xl,jo,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),_s.setFromRotationMatrix(Pi),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ME),rd.child=e,this.dispatchEvent(rd),rd.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(EE),sd.child=e,this.dispatchEvent(sd),sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,xE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,SE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),g=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new I(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new I,Li=new I,od=new I,Ni=new I,ys=new I,xs=new I,sg=new I,ad=new I,ld=new I,cd=new I;class $n{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ii.subVectors(e,n),r.cross(ii);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ii.subVectors(r,n),Li.subVectors(i,n),od.subVectors(e,n);const o=ii.dot(ii),a=ii.dot(Li),l=ii.dot(od),c=Li.dot(Li),u=Li.dot(od),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,g=(c*l-a*u)*f,v=(o*u-a*l)*f;return s.set(1-g-v,v,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(o,Ni.y),l.addScaledVector(a,Ni.z),l)}static isFrontFacing(e,n,i,r){return ii.subVectors(i,n),Li.subVectors(e,n),ii.cross(Li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ii.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ys.subVectors(r,i),xs.subVectors(s,i),ad.subVectors(e,i);const l=ys.dot(ad),c=xs.dot(ad);if(l<=0&&c<=0)return n.copy(i);ld.subVectors(e,r);const u=ys.dot(ld),h=xs.dot(ld);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ys,o);cd.subVectors(e,s);const g=ys.dot(cd),v=xs.dot(cd);if(v>=0&&g<=v)return n.copy(s);const _=g*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(xs,a);const p=u*v-g*h;if(p<=0&&h-u>=0&&g-v>=0)return sg.subVectors(s,r),a=(h-u)/(h-u+(g-v)),n.copy(r).addScaledVector(sg,a);const d=1/(p+_+f);return o=_*d,a=f*d,n.copy(i).addScaledVector(ys,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ly={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function ud(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=mt.workingColorSpace){return this.r=e,this.g=n,this.b=i,mt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=mt.workingColorSpace){if(e=cE(e,1),n=Tn(n,0,1),i=Tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ud(o,s,e+1/3),this.g=ud(o,s,e),this.b=ud(o,s,e-1/3)}return mt.toWorkingColorSpace(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=ly[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}copyLinearToSRGB(e){return this.r=Ku(e.r),this.g=Ku(e.g),this.b=Ku(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return mt.fromWorkingColorSpace(ln.copy(this),e),Math.round(Tn(ln.r*255,0,255))*65536+Math.round(Tn(ln.g*255,0,255))*256+Math.round(Tn(ln.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=mt.workingColorSpace){mt.fromWorkingColorSpace(ln.copy(this),n);const i=ln.r,r=ln.g,s=ln.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=mt.workingColorSpace){return mt.fromWorkingColorSpace(ln.copy(this),n),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Wn){mt.fromWorkingColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,r=ln.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+n,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(tr),e.getHSL(Sl);const i=qu(tr.h,Sl.h,n),r=qu(tr.s,Sl.s,n),s=qu(tr.l,Sl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Ge;Ge.NAMES=ly;let wE=0;class Pr extends Mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=ro,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Lh,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Uc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(i.blending=this.blending),this.side!==wr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ph&&(i.blendSrc=this.blendSrc),this.blendDst!==Lh&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Uc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hc extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new I,Ml=new Ve;class zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Fh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ry("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ml.fromBufferAttribute(this,n),Ml.applyMatrix3(e),this.setXY(n,Ml.x,Ml.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix3(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix4(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyNormalMatrix(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.transformDirection(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=xi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=xi(n,this.array)),n}setX(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=xi(n,this.array)),n}setY(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=xi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=xi(n,this.array)),n}setW(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fh&&(e.usage=this.usage),e}}class cy extends zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class uy extends zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ti extends zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let TE=0;const Vn=new it,dd=new kt,Ss=new I,Nn=new os,Xo=new os,Yt=new I;class Qn extends Mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iy(e)?uy:cy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return dd.lookAt(e),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ti(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Nn.min,Xo.min),Nn.expandByPoint(Yt),Yt.addVectors(Nn.max,Xo.max),Nn.expandByPoint(Yt)):(Nn.expandByPoint(Xo.min),Nn.expandByPoint(Xo.max))}Nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),Yt.add(Ss)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new I,l[L]=new I;const c=new I,u=new I,h=new I,f=new Ve,g=new Ve,v=new Ve,_=new I,p=new I;function d(L,K,x){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,K),h.fromBufferAttribute(i,x),f.fromBufferAttribute(s,L),g.fromBufferAttribute(s,K),v.fromBufferAttribute(s,x),u.sub(c),h.sub(c),g.sub(f),v.sub(f);const P=1/(g.x*v.y-v.x*g.y);isFinite(P)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(h,-g.y).multiplyScalar(P),p.copy(h).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(P),a[L].add(_),a[K].add(_),a[x].add(_),l[L].add(p),l[K].add(p),l[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,K=y.length;L<K;++L){const x=y[L],P=x.start,se=x.count;for(let ne=P,U=P+se;ne<U;ne+=3)d(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const m=new I,S=new I,C=new I,b=new I;function T(L){C.fromBufferAttribute(r,L),b.copy(C);const K=a[L];m.copy(K),m.sub(C.multiplyScalar(C.dot(K))).normalize(),S.crossVectors(b,K);const P=S.dot(l[L])<0?-1:1;o.setXYZW(L,m.x,m.y,m.z,P)}for(let L=0,K=y.length;L<K;++L){const x=y[L],P=x.start,se=x.count;for(let ne=P,U=P+se;ne<U;ne+=3)T(e.getX(ne+0)),T(e.getX(ne+1)),T(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,g=e.count;f<g;f+=3){const v=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let g=0,v=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?g=l[_]*a.data.stride+a.offset:g=l[_]*u;for(let d=0;d<u;d++)f[v++]=c[g++]}return new zn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const g=c[h];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,g=h.length;f<g;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const og=new it,Ir=new au,El=new as,ag=new I,Ms=new I,Es=new I,ws=new I,hd=new I,wl=new I,Tl=new Ve,Al=new Ve,bl=new Ve,lg=new I,cg=new I,ug=new I,Rl=new I,Cl=new I;class en extends kt{constructor(e=new Qn,n=new Hc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){wl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(hd.fromBufferAttribute(h,e),o?wl.addScaledVector(hd,u):wl.addScaledVector(hd.sub(n),u))}n.add(wl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(s),Ir.copy(e.ray).recast(e.near),!(El.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(El,ag)===null||Ir.origin.distanceToSquared(ag)>(e.far-e.near)**2))&&(og.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(og),!(i.boundingBox!==null&&Ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const p=f[v],d=o[p.materialIndex],y=Math.max(p.start,g.start),m=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let S=y,C=m;S<C;S+=3){const b=a.getX(S),T=a.getX(S+1),L=a.getX(S+2);r=Pl(this,d,e,i,c,u,h,b,T,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let p=v,d=_;p<d;p+=3){const y=a.getX(p),m=a.getX(p+1),S=a.getX(p+2);r=Pl(this,o,e,i,c,u,h,y,m,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const p=f[v],d=o[p.materialIndex],y=Math.max(p.start,g.start),m=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let S=y,C=m;S<C;S+=3){const b=S,T=S+1,L=S+2;r=Pl(this,d,e,i,c,u,h,b,T,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let p=v,d=_;p<d;p+=3){const y=p,m=p+1,S=p+2;r=Pl(this,o,e,i,c,u,h,y,m,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function AE(t,e,n,i,r,s,o,a){let l;if(e.side===Pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===wr,a),l===null)return null;Cl.copy(a),Cl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Cl);return c<n.near||c>n.far?null:{distance:c,point:Cl.clone(),object:t}}function Pl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ms),t.getVertexPosition(l,Es),t.getVertexPosition(c,ws);const u=AE(t,e,n,i,Ms,Es,ws,Rl);if(u){r&&(Tl.fromBufferAttribute(r,a),Al.fromBufferAttribute(r,l),bl.fromBufferAttribute(r,c),u.uv=$n.getInterpolation(Rl,Ms,Es,ws,Tl,Al,bl,new Ve)),s&&(Tl.fromBufferAttribute(s,a),Al.fromBufferAttribute(s,l),bl.fromBufferAttribute(s,c),u.uv1=$n.getInterpolation(Rl,Ms,Es,ws,Tl,Al,bl,new Ve)),o&&(lg.fromBufferAttribute(o,a),cg.fromBufferAttribute(o,l),ug.fromBufferAttribute(o,c),u.normal=$n.getInterpolation(Rl,Ms,Es,ws,lg,cg,ug,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};$n.getNormal(Ms,Es,ws,h.normal),u.face=h}return u}class Si extends Qn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,g=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ti(c,3)),this.setAttribute("normal",new Ti(u,3)),this.setAttribute("uv",new Ti(h,2));function v(_,p,d,y,m,S,C,b,T,L,K){const x=S/T,P=C/L,se=S/2,ne=C/2,U=b/2,Y=T+1,$=L+1;let Q=0,N=0;const z=new I;for(let W=0;W<$;W++){const J=W*P-ne;for(let le=0;le<Y;le++){const be=le*x-se;z[_]=be*y,z[p]=J*m,z[d]=U,c.push(z.x,z.y,z.z),z[_]=0,z[p]=0,z[d]=b>0?1:-1,u.push(z.x,z.y,z.z),h.push(le/T),h.push(1-W/L),Q+=1}}for(let W=0;W<L;W++)for(let J=0;J<T;J++){const le=f+J+Y*W,be=f+J+Y*(W+1),G=f+(J+1)+Y*(W+1),ee=f+(J+1)+Y*W;l.push(le,be,ee),l.push(be,G,ee),N+=6}a.addGroup(g,N,K),g+=N,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _o(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function mn(t){const e={};for(let n=0;n<t.length;n++){const i=_o(t[n]);for(const r in i)e[r]=i[r]}return e}function bE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function dy(t){return t.getRenderTarget()===null?t.outputColorSpace:mt.workingColorSpace}const RE={clone:_o,merge:mn};var CE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CE,this.fragmentShader=PE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=bE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class hy extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new I,dg=new Ve,hg=new Ve;class kn extends hy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zh*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,n){return this.getViewBounds(e,dg,hg),n.subVectors(hg,dg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ac*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ts=-90,As=1;class LE extends kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(Ts,As,e,n);r.layers=this.layers,this.add(r);const s=new kn(Ts,As,e,n);s.layers=this.layers,this.add(s);const o=new kn(Ts,As,e,n);o.layers=this.layers,this.add(o);const a=new kn(Ts,As,e,n);a.layers=this.layers,this.add(a);const l=new kn(Ts,As,e,n);l.layers=this.layers,this.add(l);const c=new kn(Ts,As,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,f,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class fy extends un{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:mo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class NE extends is{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fy(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:En}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Si(5,5,5),s=new Tr({name:"CubemapFromEquirect",uniforms:_o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:yr});s.uniforms.tEquirect.value=n;const o=new en(r,s),a=n.minFilter;return n.minFilter===$r&&(n.minFilter=En),new LE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const fd=new I,DE=new I,IE=new Ke;class Br{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fd.subVectors(i,n).cross(DE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(fd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||IE.getNormalMatrix(e),r=this.coplanarPoint(fd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new as,Ll=new I;class qf{constructor(e=new Br,n=new Br,i=new Br,r=new Br,s=new Br,o=new Br){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=zi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],g=r[8],v=r[9],_=r[10],p=r[11],d=r[12],y=r[13],m=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,p-g,S-d).normalize(),i[1].setComponents(l+s,f+c,p+g,S+d).normalize(),i[2].setComponents(l+o,f+u,p+v,S+y).normalize(),i[3].setComponents(l-o,f-u,p-v,S-y).normalize(),i[4].setComponents(l-a,f-h,p-_,S-m).normalize(),n===zi)i[5].setComponents(l+a,f+h,p+_,S+m).normalize();else if(n===zc)i[5].setComponents(a,h,_,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ll.x=r.normal.x>0?e.max.x:e.min.x,Ll.y=r.normal.y>0?e.max.y:e.min.y,Ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function py(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function UE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,g=h.byteLength,v=t.createBuffer();t.bindBuffer(u,v),t.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=t.SHORT;else if(h instanceof Uint32Array)_=t.UNSIGNED_INT;else if(h instanceof Int32Array)_=t.INT;else if(h instanceof Int8Array)_=t.BYTE;else if(h instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,u,h){const f=u.array,g=u._updateRange,v=u.updateRanges;if(t.bindBuffer(h,c),g.count===-1&&v.length===0&&t.bufferSubData(h,0,f),v.length!==0){for(let _=0,p=v.length;_<p;_++){const d=v[_];n?t.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):t.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):t.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class lu extends Qn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=n/l,g=[],v=[],_=[],p=[];for(let d=0;d<u;d++){const y=d*f-o;for(let m=0;m<c;m++){const S=m*h-s;v.push(S,-y,0),_.push(0,0,1),p.push(m/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const m=y+c*d,S=y+c*(d+1),C=y+1+c*(d+1),b=y+1+c*d;g.push(m,S,b),g.push(S,C,b)}this.setIndex(g),this.setAttribute("position",new Ti(v,3)),this.setAttribute("normal",new Ti(_,3)),this.setAttribute("uv",new Ti(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.width,e.height,e.widthSegments,e.heightSegments)}}var kE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,OE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,VE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,XE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$E=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,YE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,KE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,s1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,o1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,a1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h1="gl_FragColor = linearToOutputTexel( gl_FragColor );",f1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,p1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,m1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,v1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,T1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,C1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,P1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,U1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,k1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,F1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,O1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,G1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,V1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,X1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Q1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,J1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ew=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ow=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_w=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ew=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ww=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Aw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Uw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ww=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$w=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:kE,alphahash_pars_fragment:FE,alphamap_fragment:OE,alphamap_pars_fragment:zE,alphatest_fragment:BE,alphatest_pars_fragment:HE,aomap_fragment:GE,aomap_pars_fragment:VE,batching_pars_vertex:WE,batching_vertex:jE,begin_vertex:XE,beginnormal_vertex:$E,bsdfs:qE,iridescence_fragment:YE,bumpmap_pars_fragment:KE,clipping_planes_fragment:ZE,clipping_planes_pars_fragment:QE,clipping_planes_pars_vertex:JE,clipping_planes_vertex:e1,color_fragment:t1,color_pars_fragment:n1,color_pars_vertex:i1,color_vertex:r1,common:s1,cube_uv_reflection_fragment:o1,defaultnormal_vertex:a1,displacementmap_pars_vertex:l1,displacementmap_vertex:c1,emissivemap_fragment:u1,emissivemap_pars_fragment:d1,colorspace_fragment:h1,colorspace_pars_fragment:f1,envmap_fragment:p1,envmap_common_pars_fragment:m1,envmap_pars_fragment:g1,envmap_pars_vertex:v1,envmap_physical_pars_fragment:C1,envmap_vertex:_1,fog_vertex:y1,fog_pars_vertex:x1,fog_fragment:S1,fog_pars_fragment:M1,gradientmap_pars_fragment:E1,lightmap_fragment:w1,lightmap_pars_fragment:T1,lights_lambert_fragment:A1,lights_lambert_pars_fragment:b1,lights_pars_begin:R1,lights_toon_fragment:P1,lights_toon_pars_fragment:L1,lights_phong_fragment:N1,lights_phong_pars_fragment:D1,lights_physical_fragment:I1,lights_physical_pars_fragment:U1,lights_fragment_begin:k1,lights_fragment_maps:F1,lights_fragment_end:O1,logdepthbuf_fragment:z1,logdepthbuf_pars_fragment:B1,logdepthbuf_pars_vertex:H1,logdepthbuf_vertex:G1,map_fragment:V1,map_pars_fragment:W1,map_particle_fragment:j1,map_particle_pars_fragment:X1,metalnessmap_fragment:$1,metalnessmap_pars_fragment:q1,morphinstance_vertex:Y1,morphcolor_vertex:K1,morphnormal_vertex:Z1,morphtarget_pars_vertex:Q1,morphtarget_vertex:J1,normal_fragment_begin:ew,normal_fragment_maps:tw,normal_pars_fragment:nw,normal_pars_vertex:iw,normal_vertex:rw,normalmap_pars_fragment:sw,clearcoat_normal_fragment_begin:ow,clearcoat_normal_fragment_maps:aw,clearcoat_pars_fragment:lw,iridescence_pars_fragment:cw,opaque_fragment:uw,packing:dw,premultiplied_alpha_fragment:hw,project_vertex:fw,dithering_fragment:pw,dithering_pars_fragment:mw,roughnessmap_fragment:gw,roughnessmap_pars_fragment:vw,shadowmap_pars_fragment:_w,shadowmap_pars_vertex:yw,shadowmap_vertex:xw,shadowmask_pars_fragment:Sw,skinbase_vertex:Mw,skinning_pars_vertex:Ew,skinning_vertex:ww,skinnormal_vertex:Tw,specularmap_fragment:Aw,specularmap_pars_fragment:bw,tonemapping_fragment:Rw,tonemapping_pars_fragment:Cw,transmission_fragment:Pw,transmission_pars_fragment:Lw,uv_pars_fragment:Nw,uv_pars_vertex:Dw,uv_vertex:Iw,worldpos_vertex:Uw,background_vert:kw,background_frag:Fw,backgroundCube_vert:Ow,backgroundCube_frag:zw,cube_vert:Bw,cube_frag:Hw,depth_vert:Gw,depth_frag:Vw,distanceRGBA_vert:Ww,distanceRGBA_frag:jw,equirect_vert:Xw,equirect_frag:$w,linedashed_vert:qw,linedashed_frag:Yw,meshbasic_vert:Kw,meshbasic_frag:Zw,meshlambert_vert:Qw,meshlambert_frag:Jw,meshmatcap_vert:eT,meshmatcap_frag:tT,meshnormal_vert:nT,meshnormal_frag:iT,meshphong_vert:rT,meshphong_frag:sT,meshphysical_vert:oT,meshphysical_frag:aT,meshtoon_vert:lT,meshtoon_frag:cT,points_vert:uT,points_frag:dT,shadow_vert:hT,shadow_frag:fT,sprite_vert:pT,sprite_frag:mT},he={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},gi={basic:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:mn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:mn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:mn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:mn([he.points,he.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:mn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:mn([he.common,he.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:mn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:mn([he.sprite,he.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:mn([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:mn([he.lights,he.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};gi.physical={uniforms:mn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Nl={r:0,b:0,g:0},kr=new hi,gT=new it;function vT(t,e,n,i,r,s,o){const a=new Ge(0);let l=s===!0?0:1,c,u,h=null,f=0,g=null;function v(p,d){let y=!1,m=d.isScene===!0?d.background:null;m&&m.isTexture&&(m=(d.backgroundBlurriness>0?n:e).get(m)),m===null?_(a,l):m&&m.isColor&&(_(m,1),y=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===su)?(u===void 0&&(u=new en(new Si(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:_o(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),kr.copy(d.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),u.material.uniforms.envMap.value=m,u.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(gT.makeRotationFromEuler(kr)),u.material.toneMapped=mt.getTransfer(m.colorSpace)!==Tt,(h!==m||f!==m.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,h=m,f=m.version,g=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new en(new lu(2,2),new Tr({name:"BackgroundMaterial",uniforms:_o(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=mt.getTransfer(m.colorSpace)!==Tt,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(h!==m||f!==m.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,h=m,f=m.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(Nl,dy(t)),i.buffers.color.setClear(Nl.r,Nl.g,Nl.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:v}}function _T(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(U,Y,$,Q,N){let z=!1;if(o){const W=_(Q,$,Y);c!==W&&(c=W,g(c.object)),z=d(U,Q,$,N),z&&y(U,Q,$,N)}else{const W=Y.wireframe===!0;(c.geometry!==Q.id||c.program!==$.id||c.wireframe!==W)&&(c.geometry=Q.id,c.program=$.id,c.wireframe=W,z=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,L(U,Y,$,Q),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(U){return i.isWebGL2?t.bindVertexArray(U):s.bindVertexArrayOES(U)}function v(U){return i.isWebGL2?t.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function _(U,Y,$){const Q=$.wireframe===!0;let N=a[U.id];N===void 0&&(N={},a[U.id]=N);let z=N[Y.id];z===void 0&&(z={},N[Y.id]=z);let W=z[Q];return W===void 0&&(W=p(f()),z[Q]=W),W}function p(U){const Y=[],$=[],Q=[];for(let N=0;N<r;N++)Y[N]=0,$[N]=0,Q[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:$,attributeDivisors:Q,object:U,attributes:{},index:null}}function d(U,Y,$,Q){const N=c.attributes,z=Y.attributes;let W=0;const J=$.getAttributes();for(const le in J)if(J[le].location>=0){const G=N[le];let ee=z[le];if(ee===void 0&&(le==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),le==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor)),G===void 0||G.attribute!==ee||ee&&G.data!==ee.data)return!0;W++}return c.attributesNum!==W||c.index!==Q}function y(U,Y,$,Q){const N={},z=Y.attributes;let W=0;const J=$.getAttributes();for(const le in J)if(J[le].location>=0){let G=z[le];G===void 0&&(le==="instanceMatrix"&&U.instanceMatrix&&(G=U.instanceMatrix),le==="instanceColor"&&U.instanceColor&&(G=U.instanceColor));const ee={};ee.attribute=G,G&&G.data&&(ee.data=G.data),N[le]=ee,W++}c.attributes=N,c.attributesNum=W,c.index=Q}function m(){const U=c.newAttributes;for(let Y=0,$=U.length;Y<$;Y++)U[Y]=0}function S(U){C(U,0)}function C(U,Y){const $=c.newAttributes,Q=c.enabledAttributes,N=c.attributeDivisors;$[U]=1,Q[U]===0&&(t.enableVertexAttribArray(U),Q[U]=1),N[U]!==Y&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,Y),N[U]=Y)}function b(){const U=c.newAttributes,Y=c.enabledAttributes;for(let $=0,Q=Y.length;$<Q;$++)Y[$]!==U[$]&&(t.disableVertexAttribArray($),Y[$]=0)}function T(U,Y,$,Q,N,z,W){W===!0?t.vertexAttribIPointer(U,Y,$,N,z):t.vertexAttribPointer(U,Y,$,Q,N,z)}function L(U,Y,$,Q){if(i.isWebGL2===!1&&(U.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const N=Q.attributes,z=$.getAttributes(),W=Y.defaultAttributeValues;for(const J in z){const le=z[J];if(le.location>=0){let be=N[J];if(be===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(be=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(be=U.instanceColor)),be!==void 0){const G=be.normalized,ee=be.itemSize,pe=n.get(be);if(pe===void 0)continue;const Pe=pe.buffer,Ae=pe.type,_e=pe.bytesPerElement,at=i.isWebGL2===!0&&(Ae===t.INT||Ae===t.UNSIGNED_INT||be.gpuType===$_);if(be.isInterleavedBufferAttribute){const Ue=be.data,F=Ue.stride,It=be.offset;if(Ue.isInstancedInterleavedBuffer){for(let Ce=0;Ce<le.locationSize;Ce++)C(le.location+Ce,Ue.meshPerAttribute);U.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Ce=0;Ce<le.locationSize;Ce++)S(le.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let Ce=0;Ce<le.locationSize;Ce++)T(le.location+Ce,ee/le.locationSize,Ae,G,F*_e,(It+ee/le.locationSize*Ce)*_e,at)}else{if(be.isInstancedBufferAttribute){for(let Ue=0;Ue<le.locationSize;Ue++)C(le.location+Ue,be.meshPerAttribute);U.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ue=0;Ue<le.locationSize;Ue++)S(le.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let Ue=0;Ue<le.locationSize;Ue++)T(le.location+Ue,ee/le.locationSize,Ae,G,ee*_e,ee/le.locationSize*Ue*_e,at)}}else if(W!==void 0){const G=W[J];if(G!==void 0)switch(G.length){case 2:t.vertexAttrib2fv(le.location,G);break;case 3:t.vertexAttrib3fv(le.location,G);break;case 4:t.vertexAttrib4fv(le.location,G);break;default:t.vertexAttrib1fv(le.location,G)}}}}b()}function K(){se();for(const U in a){const Y=a[U];for(const $ in Y){const Q=Y[$];for(const N in Q)v(Q[N].object),delete Q[N];delete Y[$]}delete a[U]}}function x(U){if(a[U.id]===void 0)return;const Y=a[U.id];for(const $ in Y){const Q=Y[$];for(const N in Q)v(Q[N].object),delete Q[N];delete Y[$]}delete a[U.id]}function P(U){for(const Y in a){const $=a[Y];if($[U.id]===void 0)continue;const Q=$[U.id];for(const N in Q)v(Q[N].object),delete Q[N];delete $[U.id]}}function se(){ne(),u=!0,c!==l&&(c=l,g(c.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:se,resetDefaultState:ne,dispose:K,releaseStatesOfGeometry:x,releaseStatesOfProgram:P,initAttributes:m,enableAttribute:S,disableUnusedAttributes:b}}function yT(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){t.drawArrays(s,u,h),n.update(h,s,1)}function l(u,h,f){if(f===0)return;let g,v;if(r)g=t,v="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](s,u,h,f),n.update(h,s,f)}function c(u,h,f){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<f;v++)this.render(u[v],h[v]);else{g.multiDrawArraysWEBGL(s,u,0,h,0,f);let v=0;for(let _=0;_<f;_++)v+=h[_];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function xT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=f>0,S=o||e.has("OES_texture_float"),C=m&&S,b=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:m,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:b}}function ST(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Br,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const g=h.length!==0||f||i!==0||r;return r=f,i=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,g){const v=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,d=t.get(h);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const y=s?0:i,m=y*4;let S=d.clippingState||null;l.value=S,S=u(v,f,m,g);for(let C=0;C!==m;++C)S[C]=n[C];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,g,v){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const d=g+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let m=0,S=g;m!==_;++m,S+=4)o.copy(h[m]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function MT(t){let e=new WeakMap;function n(o,a){return a===Nh?o.mapping=mo:a===Dh&&(o.mapping=go),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nh||a===Dh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new NE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class my extends hy{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const qs=4,fg=[.125,.215,.35,.446,.526,.582],Vr=20,pd=new my,pg=new Ge;let md=null,gd=0,vd=0;const Hr=(1+Math.sqrt(5))/2,bs=1/Hr,mg=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Hr,bs),new I(0,Hr,-bs),new I(bs,0,Hr),new I(-bs,0,Hr),new I(Hr,bs,0),new I(-Hr,bs,0)];class gg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(md,gd,vd),e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:ka,format:li,colorSpace:Cr,depthBuffer:!1},r=vg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ET(s)),this._blurMaterial=wT(s,e,n)}return r}_compileMaterial(e){const n=new en(this._lodPlanes[0],e);this._renderer.compile(n,pd)}_sceneToCubeUV(e,n,i,r){const a=new kn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(pg),u.toneMapping=Gi,u.autoClear=!1;const g=new Hc({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),v=new en(new Si,g);let _=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,_=!0):(g.color.copy(pg),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const m=this._cubeSize;Dl(r,y*m,d>2?m:0,m,m),u.setRenderTarget(r),_&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===mo||e.mapping===go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_g());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new en(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Dl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,pd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mg[(r-1)%mg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new en(this._lodPlanes[r],c),f=c.uniforms,g=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Vr-1),_=s/v,p=isFinite(s)?1+Math.floor(u*_):Vr;p>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vr}`);const d=[];let y=0;for(let T=0;T<Vr;++T){const L=T/_,K=Math.exp(-L*L/2);d.push(K),T===0?y+=K:T<p&&(y+=2*K)}for(let T=0;T<d.length;T++)d[T]=d[T]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:m}=this;f.dTheta.value=v,f.mipInt.value=m-i;const S=this._sizeLods[r],C=3*S*(r>m-qs?r-m+qs:0),b=4*(this._cubeSize-S);Dl(n,C,b,3*S,2*S),l.setRenderTarget(n),l.render(h,pd)}}function ET(t){const e=[],n=[],i=[];let r=t;const s=t-qs+1+fg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-qs?l=fg[o-t+qs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,v=6,_=3,p=2,d=1,y=new Float32Array(_*v*g),m=new Float32Array(p*v*g),S=new Float32Array(d*v*g);for(let b=0;b<g;b++){const T=b%3*2/3-1,L=b>2?0:-1,K=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];y.set(K,_*v*b),m.set(f,p*v*b);const x=[b,b,b,b,b,b];S.set(x,d*v*b)}const C=new Qn;C.setAttribute("position",new zn(y,_)),C.setAttribute("uv",new zn(m,p)),C.setAttribute("faceIndex",new zn(S,d)),e.push(C),r>qs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function vg(t,e,n){const i=new is(t,e,n);return i.texture.mapping=su,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function wT(t,e,n){const i=new Float32Array(Vr),r=new I(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function _g(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function yg(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Yf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function TT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nh||l===Dh,u=l===mo||l===go;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new gg(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){n===null&&(n=new gg(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function AT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bT(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const _=f.morphAttributes[v];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)e.update(f[v],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const v in g){const _=g[v];for(let p=0,d=_.length;p<d;p++)e.update(_[p],t.ARRAY_BUFFER)}}function c(h){const f=[],g=h.index,v=h.attributes.position;let _=0;if(g!==null){const y=g.array;_=g.version;for(let m=0,S=y.length;m<S;m+=3){const C=y[m+0],b=y[m+1],T=y[m+2];f.push(C,b,b,T,T,C)}}else if(v!==void 0){const y=v.array;_=v.version;for(let m=0,S=y.length/3-1;m<S;m+=3){const C=m+0,b=m+1,T=m+2;f.push(C,b,b,T,T,C)}}else return;const p=new(iy(f)?uy:cy)(f,1);p.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const g=h.index;g!==null&&f.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function RT(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function u(g,v){t.drawElements(s,v,a,g*l),n.update(v,s,1)}function h(g,v,_){if(_===0)return;let p,d;if(r)p=t,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,v,a,g*l,_),n.update(v,s,_)}function f(g,v,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<_;d++)this.render(g[d]/l,v[d]);else{p.multiDrawElementsWEBGL(s,v,0,a,g,0,_);let d=0;for(let y=0;y<_;y++)d+=v[y];n.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function CT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function PT(t,e){return t[0]-e[0]}function LT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function NT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Rt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=v!==void 0?v.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let ne=function(){P.dispose(),s.delete(u),u.removeEventListener("dispose",ne)};var g=ne;p!==void 0&&p.texture.dispose();const d=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,m=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let T=0;d===!0&&(T=1),y===!0&&(T=2),m===!0&&(T=3);let L=u.attributes.position.count*T,K=1;L>e.maxTextureSize&&(K=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const x=new Float32Array(L*K*4*_),P=new ay(x,L,K,_);P.type=yi,P.needsUpdate=!0;const se=T*4;for(let U=0;U<_;U++){const Y=S[U],$=C[U],Q=b[U],N=L*K*4*U;for(let z=0;z<Y.count;z++){const W=z*se;d===!0&&(o.fromBufferAttribute(Y,z),x[N+W+0]=o.x,x[N+W+1]=o.y,x[N+W+2]=o.z,x[N+W+3]=0),y===!0&&(o.fromBufferAttribute($,z),x[N+W+4]=o.x,x[N+W+5]=o.y,x[N+W+6]=o.z,x[N+W+7]=0),m===!0&&(o.fromBufferAttribute(Q,z),x[N+W+8]=o.x,x[N+W+9]=o.y,x[N+W+10]=o.z,x[N+W+11]=Q.itemSize===4?o.w:1)}}p={count:_,texture:P,size:new Ve(L,K)},s.set(u,p),u.addEventListener("dispose",ne)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let d=0;for(let m=0;m<f.length;m++)d+=f[m];const y=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(t,"morphTargetBaseInfluence",y),h.getUniforms().setValue(t,"morphTargetInfluences",f)}h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const v=f===void 0?0:f.length;let _=i[u.id];if(_===void 0||_.length!==v){_=[];for(let S=0;S<v;S++)_[S]=[S,0];i[u.id]=_}for(let S=0;S<v;S++){const C=_[S];C[0]=S,C[1]=f[S]}_.sort(LT);for(let S=0;S<8;S++)S<v&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(PT);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const C=a[S],b=C[0],T=C[1];b!==Number.MAX_SAFE_INTEGER&&T?(p&&u.getAttribute("morphTarget"+S)!==p[b]&&u.setAttribute("morphTarget"+S,p[b]),d&&u.getAttribute("morphNormal"+S)!==d[b]&&u.setAttribute("morphNormal"+S,d[b]),r[S]=T,y+=T):(p&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),d&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const m=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(t,"morphTargetBaseInfluence",m),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function DT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class gy extends un{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Zr,u!==Zr&&u!==vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Zr&&(i=ur),i===void 0&&u===vo&&(i=Kr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const vy=new un,_y=new gy(1,1);_y.compareFunction=ny;const yy=new ay,xy=new mE,Sy=new fy,xg=[],Sg=[],Mg=new Float32Array(16),Eg=new Float32Array(9),wg=new Float32Array(4);function Eo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=xg[r];if(s===void 0&&(s=new Float32Array(r),xg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function $t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cu(t,e){let n=Sg[e];n===void 0&&(n=new Int32Array(e),Sg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function IT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),$t(n,e)}}function kT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),$t(n,e)}}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),$t(n,e)}}function OT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;wg.set(i),t.uniformMatrix2fv(this.addr,!1,wg),$t(n,i)}}function zT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;Eg.set(i),t.uniformMatrix3fv(this.addr,!1,Eg),$t(n,i)}}function BT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;Mg.set(i),t.uniformMatrix4fv(this.addr,!1,Mg),$t(n,i)}}function HT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function GT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),$t(n,e)}}function VT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),$t(n,e)}}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),$t(n,e)}}function jT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),$t(n,e)}}function $T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),$t(n,e)}}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),$t(n,e)}}function YT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?_y:vy;n.setTexture2D(e||s,r)}function KT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||xy,r)}function ZT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Sy,r)}function QT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||yy,r)}function JT(t){switch(t){case 5126:return IT;case 35664:return UT;case 35665:return kT;case 35666:return FT;case 35674:return OT;case 35675:return zT;case 35676:return BT;case 5124:case 35670:return HT;case 35667:case 35671:return GT;case 35668:case 35672:return VT;case 35669:case 35673:return WT;case 5125:return jT;case 36294:return XT;case 36295:return $T;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return ZT;case 36289:case 36303:case 36311:case 36292:return QT}}function eA(t,e){t.uniform1fv(this.addr,e)}function tA(t,e){const n=Eo(e,this.size,2);t.uniform2fv(this.addr,n)}function nA(t,e){const n=Eo(e,this.size,3);t.uniform3fv(this.addr,n)}function iA(t,e){const n=Eo(e,this.size,4);t.uniform4fv(this.addr,n)}function rA(t,e){const n=Eo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function sA(t,e){const n=Eo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function oA(t,e){const n=Eo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function aA(t,e){t.uniform1iv(this.addr,e)}function lA(t,e){t.uniform2iv(this.addr,e)}function cA(t,e){t.uniform3iv(this.addr,e)}function uA(t,e){t.uniform4iv(this.addr,e)}function dA(t,e){t.uniform1uiv(this.addr,e)}function hA(t,e){t.uniform2uiv(this.addr,e)}function fA(t,e){t.uniform3uiv(this.addr,e)}function pA(t,e){t.uniform4uiv(this.addr,e)}function mA(t,e,n){const i=this.cache,r=e.length,s=cu(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||vy,s[o])}function gA(t,e,n){const i=this.cache,r=e.length,s=cu(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||xy,s[o])}function vA(t,e,n){const i=this.cache,r=e.length,s=cu(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Sy,s[o])}function _A(t,e,n){const i=this.cache,r=e.length,s=cu(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||yy,s[o])}function yA(t){switch(t){case 5126:return eA;case 35664:return tA;case 35665:return nA;case 35666:return iA;case 35674:return rA;case 35675:return sA;case 35676:return oA;case 5124:case 35670:return aA;case 35667:case 35671:return lA;case 35668:case 35672:return cA;case 35669:case 35673:return uA;case 5125:return dA;case 36294:return hA;case 36295:return fA;case 36296:return pA;case 35678:case 36198:case 36298:case 36306:case 35682:return mA;case 35679:case 36299:case 36307:return gA;case 35680:case 36300:case 36308:case 36293:return vA;case 36289:case 36303:case 36311:case 36292:return _A}}class xA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=JT(n.type)}}class SA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yA(n.type)}}class MA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const _d=/(\w+)(\])?(\[|\.)?/g;function Tg(t,e){t.seq.push(e),t.map[e.id]=e}function EA(t,e,n){const i=t.name,r=i.length;for(_d.lastIndex=0;;){const s=_d.exec(i),o=_d.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Tg(n,c===void 0?new xA(a,t,e):new SA(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new MA(a),Tg(n,h)),n=h}}}class lc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);EA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Ag(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const wA=37297;let TA=0;function AA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function bA(t){const e=mt.getPrimaries(mt.workingColorSpace),n=mt.getPrimaries(t);let i;switch(e===n?i="":e===Oc&&n===Fc?i="LinearDisplayP3ToLinearSRGB":e===Fc&&n===Oc&&(i="LinearSRGBToLinearDisplayP3"),t){case Cr:case ou:return[i,"LinearTransferOETF"];case Wn:case Xf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function bg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+AA(t.getShaderSource(e),o)}else return r}function RA(t,e){const n=bA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function CA(t,e){let n;switch(e){case BM:n="Linear";break;case HM:n="Reinhard";break;case GM:n="OptimizedCineon";break;case j_:n="ACESFilmic";break;case WM:n="AgX";break;case jM:n="Neutral";break;case VM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function PA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ys).join(`
`)}function LA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function NA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function DA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ys(t){return t!==""}function Rg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(t){return t.replace(IA,kA)}const UA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kA(t,e){let n=Ye[e];if(n===void 0){const i=UA.get(e);if(i!==void 0)n=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hh(n)}const FA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pg(t){return t.replace(FA,OA)}function OA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===V_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function BA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case su:e="ENVMAP_TYPE_CUBE_UV";break}return e}function HA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function GA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Wf:e="ENVMAP_BLENDING_MULTIPLY";break;case OM:e="ENVMAP_BLENDING_MIX";break;case zM:e="ENVMAP_BLENDING_ADD";break}return e}function VA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function WA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=zA(n),c=BA(n),u=HA(n),h=GA(n),f=VA(n),g=n.isWebGL2?"":PA(n),v=LA(n),_=NA(s),p=r.createProgram();let d,y,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ys).join(`
`),d.length>0&&(d+=`
`),y=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ys).join(`
`),y.length>0&&(y+=`
`)):(d=[Lg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),y=[g,Lg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?Ye.tonemapping_pars_fragment:"",n.toneMapping!==Gi?CA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,RA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ys).join(`
`)),o=Hh(o),o=Rg(o,n),o=Cg(o,n),a=Hh(a),a=Rg(a,n),a=Cg(a,n),o=Pg(o),a=Pg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===$m?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=m+d+o,C=m+y+a,b=Ag(r,r.VERTEX_SHADER,S),T=Ag(r,r.FRAGMENT_SHADER,C);r.attachShader(p,b),r.attachShader(p,T),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function L(se){if(t.debug.checkShaderErrors){const ne=r.getProgramInfoLog(p).trim(),U=r.getShaderInfoLog(b).trim(),Y=r.getShaderInfoLog(T).trim();let $=!0,Q=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,b,T);else{const N=bg(r,b,"vertex"),z=bg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+se.name+`
Material Type: `+se.type+`

Program Info Log: `+ne+`
`+N+`
`+z)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(U===""||Y==="")&&(Q=!1);Q&&(se.diagnostics={runnable:$,programLog:ne,vertexShader:{log:U,prefix:d},fragmentShader:{log:Y,prefix:y}})}r.deleteShader(b),r.deleteShader(T),K=new lc(r,p),x=DA(r,p)}let K;this.getUniforms=function(){return K===void 0&&L(this),K};let x;this.getAttributes=function(){return x===void 0&&L(this),x};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(p,wA)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=TA++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=T,this}let jA=0;class XA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $A(e),n.set(e,i)),i}}class $A{constructor(e){this.id=jA++,this.code=e,this.usedTimes=0}}function qA(t,e,n,i,r,s,o){const a=new $f,l=new XA,c=new Set,u=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function d(x,P,se,ne,U){const Y=ne.fog,$=U.geometry,Q=x.isMeshStandardMaterial?ne.environment:null,N=(x.isMeshStandardMaterial?n:e).get(x.envMap||Q),z=N&&N.mapping===su?N.image.height:null,W=_[x.type];x.precision!==null&&(v=r.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));const J=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,le=J!==void 0?J.length:0;let be=0;$.morphAttributes.position!==void 0&&(be=1),$.morphAttributes.normal!==void 0&&(be=2),$.morphAttributes.color!==void 0&&(be=3);let G,ee,pe,Pe;if(W){const ft=gi[W];G=ft.vertexShader,ee=ft.fragmentShader}else G=x.vertexShader,ee=x.fragmentShader,l.update(x),pe=l.getVertexShaderID(x),Pe=l.getFragmentShaderID(x);const Ae=t.getRenderTarget(),_e=U.isInstancedMesh===!0,at=U.isBatchedMesh===!0,Ue=!!x.map,F=!!x.matcap,It=!!N,Ce=!!x.aoMap,$e=!!x.lightMap,Le=!!x.bumpMap,Je=!!x.normalMap,We=!!x.displacementMap,qe=!!x.emissiveMap,Mt=!!x.metalnessMap,R=!!x.roughnessMap,M=x.anisotropy>0,X=x.clearcoat>0,Z=x.iridescence>0,ie=x.sheen>0,te=x.transmission>0,Fe=M&&!!x.anisotropyMap,Ie=X&&!!x.clearcoatMap,ce=X&&!!x.clearcoatNormalMap,me=X&&!!x.clearcoatRoughnessMap,je=Z&&!!x.iridescenceMap,oe=Z&&!!x.iridescenceThicknessMap,ht=ie&&!!x.sheenColorMap,ke=ie&&!!x.sheenRoughnessMap,we=!!x.specularMap,Se=!!x.specularColorMap,Me=!!x.specularIntensityMap,Ze=te&&!!x.transmissionMap,Oe=te&&!!x.thicknessMap,gt=!!x.gradientMap,D=!!x.alphaMap,fe=x.alphaTest>0,H=!!x.alphaHash,ue=!!x.extensions;let ge=Gi;x.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ge=t.toneMapping);const Qe={isWebGL2:h,shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:G,fragmentShader:ee,defines:x.defines,customVertexShaderID:pe,customFragmentShaderID:Pe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,batching:at,instancing:_e,instancingColor:_e&&U.instanceColor!==null,instancingMorph:_e&&U.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Ae===null?t.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Cr,alphaToCoverage:!!x.alphaToCoverage,map:Ue,matcap:F,envMap:It,envMapMode:It&&N.mapping,envMapCubeUVHeight:z,aoMap:Ce,lightMap:$e,bumpMap:Le,normalMap:Je,displacementMap:g&&We,emissiveMap:qe,normalMapObjectSpace:Je&&x.normalMapType===tE,normalMapTangentSpace:Je&&x.normalMapType===ty,metalnessMap:Mt,roughnessMap:R,anisotropy:M,anisotropyMap:Fe,clearcoat:X,clearcoatMap:Ie,clearcoatNormalMap:ce,clearcoatRoughnessMap:me,iridescence:Z,iridescenceMap:je,iridescenceThicknessMap:oe,sheen:ie,sheenColorMap:ht,sheenRoughnessMap:ke,specularMap:we,specularColorMap:Se,specularIntensityMap:Me,transmission:te,transmissionMap:Ze,thicknessMap:Oe,gradientMap:gt,opaque:x.transparent===!1&&x.blending===ro&&x.alphaToCoverage===!1,alphaMap:D,alphaTest:fe,alphaHash:H,combine:x.combine,mapUv:Ue&&p(x.map.channel),aoMapUv:Ce&&p(x.aoMap.channel),lightMapUv:$e&&p(x.lightMap.channel),bumpMapUv:Le&&p(x.bumpMap.channel),normalMapUv:Je&&p(x.normalMap.channel),displacementMapUv:We&&p(x.displacementMap.channel),emissiveMapUv:qe&&p(x.emissiveMap.channel),metalnessMapUv:Mt&&p(x.metalnessMap.channel),roughnessMapUv:R&&p(x.roughnessMap.channel),anisotropyMapUv:Fe&&p(x.anisotropyMap.channel),clearcoatMapUv:Ie&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:ke&&p(x.sheenRoughnessMap.channel),specularMapUv:we&&p(x.specularMap.channel),specularColorMapUv:Se&&p(x.specularColorMap.channel),specularIntensityMapUv:Me&&p(x.specularIntensityMap.channel),transmissionMapUv:Ze&&p(x.transmissionMap.channel),thicknessMapUv:Oe&&p(x.thicknessMap.channel),alphaMapUv:D&&p(x.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Je||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!$.attributes.uv&&(Ue||D),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:be,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&se.length>0,shadowMapType:t.shadowMap.type,toneMapping:ge,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ue&&x.map.isVideoTexture===!0&&mt.getTransfer(x.map.colorSpace)===Tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ki,flipSided:x.side===Pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ue&&x.extensions.derivatives===!0,extensionFragDepth:ue&&x.extensions.fragDepth===!0,extensionDrawBuffers:ue&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ue&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function y(x){const P=[];if(x.shaderID?P.push(x.shaderID):(P.push(x.customVertexShaderID),P.push(x.customFragmentShaderID)),x.defines!==void 0)for(const se in x.defines)P.push(se),P.push(x.defines[se]);return x.isRawShaderMaterial===!1&&(m(P,x),S(P,x),P.push(t.outputColorSpace)),P.push(x.customProgramCacheKey),P.join()}function m(x,P){x.push(P.precision),x.push(P.outputColorSpace),x.push(P.envMapMode),x.push(P.envMapCubeUVHeight),x.push(P.mapUv),x.push(P.alphaMapUv),x.push(P.lightMapUv),x.push(P.aoMapUv),x.push(P.bumpMapUv),x.push(P.normalMapUv),x.push(P.displacementMapUv),x.push(P.emissiveMapUv),x.push(P.metalnessMapUv),x.push(P.roughnessMapUv),x.push(P.anisotropyMapUv),x.push(P.clearcoatMapUv),x.push(P.clearcoatNormalMapUv),x.push(P.clearcoatRoughnessMapUv),x.push(P.iridescenceMapUv),x.push(P.iridescenceThicknessMapUv),x.push(P.sheenColorMapUv),x.push(P.sheenRoughnessMapUv),x.push(P.specularMapUv),x.push(P.specularColorMapUv),x.push(P.specularIntensityMapUv),x.push(P.transmissionMapUv),x.push(P.thicknessMapUv),x.push(P.combine),x.push(P.fogExp2),x.push(P.sizeAttenuation),x.push(P.morphTargetsCount),x.push(P.morphAttributeCount),x.push(P.numDirLights),x.push(P.numPointLights),x.push(P.numSpotLights),x.push(P.numSpotLightMaps),x.push(P.numHemiLights),x.push(P.numRectAreaLights),x.push(P.numDirLightShadows),x.push(P.numPointLightShadows),x.push(P.numSpotLightShadows),x.push(P.numSpotLightShadowsWithMaps),x.push(P.numLightProbes),x.push(P.shadowMapType),x.push(P.toneMapping),x.push(P.numClippingPlanes),x.push(P.numClipIntersection),x.push(P.depthPacking)}function S(x,P){a.disableAll(),P.isWebGL2&&a.enable(0),P.supportsVertexTextures&&a.enable(1),P.instancing&&a.enable(2),P.instancingColor&&a.enable(3),P.instancingMorph&&a.enable(4),P.matcap&&a.enable(5),P.envMap&&a.enable(6),P.normalMapObjectSpace&&a.enable(7),P.normalMapTangentSpace&&a.enable(8),P.clearcoat&&a.enable(9),P.iridescence&&a.enable(10),P.alphaTest&&a.enable(11),P.vertexColors&&a.enable(12),P.vertexAlphas&&a.enable(13),P.vertexUv1s&&a.enable(14),P.vertexUv2s&&a.enable(15),P.vertexUv3s&&a.enable(16),P.vertexTangents&&a.enable(17),P.anisotropy&&a.enable(18),P.alphaHash&&a.enable(19),P.batching&&a.enable(20),x.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.skinning&&a.enable(4),P.morphTargets&&a.enable(5),P.morphNormals&&a.enable(6),P.morphColors&&a.enable(7),P.premultipliedAlpha&&a.enable(8),P.shadowMapEnabled&&a.enable(9),P.useLegacyLights&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.alphaToCoverage&&a.enable(20),x.push(a.mask)}function C(x){const P=_[x.type];let se;if(P){const ne=gi[P];se=RE.clone(ne.uniforms)}else se=x.uniforms;return se}function b(x,P){let se;for(let ne=0,U=u.length;ne<U;ne++){const Y=u[ne];if(Y.cacheKey===P){se=Y,++se.usedTimes;break}}return se===void 0&&(se=new WA(t,P,x,s),u.push(se)),se}function T(x){if(--x.usedTimes===0){const P=u.indexOf(x);u[P]=u[u.length-1],u.pop(),x.destroy()}}function L(x){l.remove(x)}function K(){l.dispose()}return{getParameters:d,getProgramCacheKey:y,getUniforms:C,acquireProgram:b,releaseProgram:T,releaseShaderCache:L,programs:u,dispose:K}}function YA(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function KA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ng(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Dg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,g,v,_,p){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:g,groupOrder:v,renderOrder:h.renderOrder,z:_,group:p},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=g,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=_,d.group=p),e++,d}function a(h,f,g,v,_,p){const d=o(h,f,g,v,_,p);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function l(h,f,g,v,_,p){const d=o(h,f,g,v,_,p);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||KA),i.length>1&&i.sort(f||Ng),r.length>1&&r.sort(f||Ng)}function u(){for(let h=e,f=t.length;h<f;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function ZA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Dg,t.set(i,[o])):r>=s.length?(o=new Dg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function QA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Ge};break;case"SpotLight":n={position:new I,direction:new I,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function JA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let eb=0;function tb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function nb(t,e){const n=new QA,i=JA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new it,a=new it;function l(u,h){let f=0,g=0,v=0;for(let se=0;se<9;se++)r.probe[se].set(0,0,0);let _=0,p=0,d=0,y=0,m=0,S=0,C=0,b=0,T=0,L=0,K=0;u.sort(tb);const x=h===!0?Math.PI:1;for(let se=0,ne=u.length;se<ne;se++){const U=u[se],Y=U.color,$=U.intensity,Q=U.distance,N=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=Y.r*$*x,g+=Y.g*$*x,v+=Y.b*$*x;else if(U.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(U.sh.coefficients[z],$);K++}else if(U.isDirectionalLight){const z=n.get(U);if(z.color.copy(U.color).multiplyScalar(U.intensity*x),U.castShadow){const W=U.shadow,J=i.get(U);J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,r.directionalShadow[_]=J,r.directionalShadowMap[_]=N,r.directionalShadowMatrix[_]=U.shadow.matrix,S++}r.directional[_]=z,_++}else if(U.isSpotLight){const z=n.get(U);z.position.setFromMatrixPosition(U.matrixWorld),z.color.copy(Y).multiplyScalar($*x),z.distance=Q,z.coneCos=Math.cos(U.angle),z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),z.decay=U.decay,r.spot[d]=z;const W=U.shadow;if(U.map&&(r.spotLightMap[T]=U.map,T++,W.updateMatrices(U),U.castShadow&&L++),r.spotLightMatrix[d]=W.matrix,U.castShadow){const J=i.get(U);J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,r.spotShadow[d]=J,r.spotShadowMap[d]=N,b++}d++}else if(U.isRectAreaLight){const z=n.get(U);z.color.copy(Y).multiplyScalar($),z.halfWidth.set(U.width*.5,0,0),z.halfHeight.set(0,U.height*.5,0),r.rectArea[y]=z,y++}else if(U.isPointLight){const z=n.get(U);if(z.color.copy(U.color).multiplyScalar(U.intensity*x),z.distance=U.distance,z.decay=U.decay,U.castShadow){const W=U.shadow,J=i.get(U);J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,J.shadowCameraNear=W.camera.near,J.shadowCameraFar=W.camera.far,r.pointShadow[p]=J,r.pointShadowMap[p]=N,r.pointShadowMatrix[p]=U.shadow.matrix,C++}r.point[p]=z,p++}else if(U.isHemisphereLight){const z=n.get(U);z.skyColor.copy(U.color).multiplyScalar($*x),z.groundColor.copy(U.groundColor).multiplyScalar($*x),r.hemi[m]=z,m++}}y>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=v;const P=r.hash;(P.directionalLength!==_||P.pointLength!==p||P.spotLength!==d||P.rectAreaLength!==y||P.hemiLength!==m||P.numDirectionalShadows!==S||P.numPointShadows!==C||P.numSpotShadows!==b||P.numSpotMaps!==T||P.numLightProbes!==K)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=y,r.point.length=p,r.hemi.length=m,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=b+T-L,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=K,P.directionalLength=_,P.pointLength=p,P.spotLength=d,P.rectAreaLength=y,P.hemiLength=m,P.numDirectionalShadows=S,P.numPointShadows=C,P.numSpotShadows=b,P.numSpotMaps=T,P.numLightProbes=K,r.version=eb++)}function c(u,h){let f=0,g=0,v=0,_=0,p=0;const d=h.matrixWorldInverse;for(let y=0,m=u.length;y<m;y++){const S=u[y];if(S.isDirectionalLight){const C=r.directional[f];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),f++}else if(S.isSpotLight){const C=r.spot[v];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),v++}else if(S.isRectAreaLight){const C=r.rectArea[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(d),g++}else if(S.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:r}}function Ig(t,e){const n=new nb(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ib(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Ig(t,e),n.set(s,[l])):o>=a.length?(l=new Ig(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class rb extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sb extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ab=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lb(t,e,n){let i=new qf;const r=new Ve,s=new Ve,o=new Rt,a=new rb({depthPacking:eE}),l=new sb,c={},u=n.maxTextureSize,h={[wr]:Pn,[Pn]:wr,[ki]:ki},f=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:ob,fragmentShader:ab}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const v=new Qn;v.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new en(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=V_;let d=this.type;this.render=function(b,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const K=t.getRenderTarget(),x=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),se=t.state;se.setBlending(yr),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const ne=d!==Di&&this.type===Di,U=d===Di&&this.type!==Di;for(let Y=0,$=b.length;Y<$;Y++){const Q=b[Y],N=Q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const z=N.getFrameExtents();if(r.multiply(z),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,N.mapSize.y=s.y)),N.map===null||ne===!0||U===!0){const J=this.type!==Di?{minFilter:Zt,magFilter:Zt}:{};N.map!==null&&N.map.dispose(),N.map=new is(r.x,r.y,J),N.map.texture.name=Q.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const W=N.getViewportCount();for(let J=0;J<W;J++){const le=N.getViewport(J);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),se.viewport(o),N.updateMatrices(Q,J),i=N.getFrustum(),S(T,L,N.camera,Q,this.type)}N.isPointLightShadow!==!0&&this.type===Di&&y(N,L),N.needsUpdate=!1}d=this.type,p.needsUpdate=!1,t.setRenderTarget(K,x,P)};function y(b,T){const L=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new is(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(T,null,L,f,_,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(T,null,L,g,_,null)}function m(b,T,L,K){let x=null;const P=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)x=P;else if(x=L.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const se=x.uuid,ne=T.uuid;let U=c[se];U===void 0&&(U={},c[se]=U);let Y=U[ne];Y===void 0&&(Y=x.clone(),U[ne]=Y,T.addEventListener("dispose",C)),x=Y}if(x.visible=T.visible,x.wireframe=T.wireframe,K===Di?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const se=t.properties.get(x);se.light=L}return x}function S(b,T,L,K,x){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Di)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const ne=e.update(b),U=b.material;if(Array.isArray(U)){const Y=ne.groups;for(let $=0,Q=Y.length;$<Q;$++){const N=Y[$],z=U[N.materialIndex];if(z&&z.visible){const W=m(b,z,K,x);b.onBeforeShadow(t,b,T,L,ne,W,N),t.renderBufferDirect(L,null,ne,W,b,N),b.onAfterShadow(t,b,T,L,ne,W,N)}}}else if(U.visible){const Y=m(b,U,K,x);b.onBeforeShadow(t,b,T,L,ne,Y,null),t.renderBufferDirect(L,null,ne,Y,b,null),b.onAfterShadow(t,b,T,L,ne,Y,null)}}const se=b.children;for(let ne=0,U=se.length;ne<U;ne++)S(se[ne],T,L,K,x)}function C(b){b.target.removeEventListener("dispose",C);for(const L in c){const K=c[L],x=b.target.uuid;x in K&&(K[x].dispose(),delete K[x])}}}function cb(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const fe=new Rt;let H=null;const ue=new Rt(0,0,0,0);return{setMask:function(ge){H!==ge&&!D&&(t.colorMask(ge,ge,ge,ge),H=ge)},setLocked:function(ge){D=ge},setClear:function(ge,Qe,ft,Ot,rn){rn===!0&&(ge*=Ot,Qe*=Ot,ft*=Ot),fe.set(ge,Qe,ft,Ot),ue.equals(fe)===!1&&(t.clearColor(ge,Qe,ft,Ot),ue.copy(fe))},reset:function(){D=!1,H=null,ue.set(-1,0,0,0)}}}function s(){let D=!1,fe=null,H=null,ue=null;return{setTest:function(ge){ge?_e(t.DEPTH_TEST):at(t.DEPTH_TEST)},setMask:function(ge){fe!==ge&&!D&&(t.depthMask(ge),fe=ge)},setFunc:function(ge){if(H!==ge){switch(ge){case LM:t.depthFunc(t.NEVER);break;case NM:t.depthFunc(t.ALWAYS);break;case DM:t.depthFunc(t.LESS);break;case Uc:t.depthFunc(t.LEQUAL);break;case IM:t.depthFunc(t.EQUAL);break;case UM:t.depthFunc(t.GEQUAL);break;case kM:t.depthFunc(t.GREATER);break;case FM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}H=ge}},setLocked:function(ge){D=ge},setClear:function(ge){ue!==ge&&(t.clearDepth(ge),ue=ge)},reset:function(){D=!1,fe=null,H=null,ue=null}}}function o(){let D=!1,fe=null,H=null,ue=null,ge=null,Qe=null,ft=null,Ot=null,rn=null;return{setTest:function(lt){D||(lt?_e(t.STENCIL_TEST):at(t.STENCIL_TEST))},setMask:function(lt){fe!==lt&&!D&&(t.stencilMask(lt),fe=lt)},setFunc:function(lt,zt,xn){(H!==lt||ue!==zt||ge!==xn)&&(t.stencilFunc(lt,zt,xn),H=lt,ue=zt,ge=xn)},setOp:function(lt,zt,xn){(Qe!==lt||ft!==zt||Ot!==xn)&&(t.stencilOp(lt,zt,xn),Qe=lt,ft=zt,Ot=xn)},setLocked:function(lt){D=lt},setClear:function(lt){rn!==lt&&(t.clearStencil(lt),rn=lt)},reset:function(){D=!1,fe=null,H=null,ue=null,ge=null,Qe=null,ft=null,Ot=null,rn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},g={},v=new WeakMap,_=[],p=null,d=!1,y=null,m=null,S=null,C=null,b=null,T=null,L=null,K=new Ge(0,0,0),x=0,P=!1,se=null,ne=null,U=null,Y=null,$=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,z=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(W)[1]),N=z>=1):W.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),N=z>=2);let J=null,le={};const be=t.getParameter(t.SCISSOR_BOX),G=t.getParameter(t.VIEWPORT),ee=new Rt().fromArray(be),pe=new Rt().fromArray(G);function Pe(D,fe,H,ue){const ge=new Uint8Array(4),Qe=t.createTexture();t.bindTexture(D,Qe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ft=0;ft<H;ft++)i&&(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)?t.texImage3D(fe,0,t.RGBA,1,1,ue,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(fe+ft,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return Qe}const Ae={};Ae[t.TEXTURE_2D]=Pe(t.TEXTURE_2D,t.TEXTURE_2D,1),Ae[t.TEXTURE_CUBE_MAP]=Pe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[t.TEXTURE_2D_ARRAY]=Pe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ae[t.TEXTURE_3D]=Pe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_e(t.DEPTH_TEST),l.setFunc(Uc),We(!1),qe(mm),_e(t.CULL_FACE),Le(yr);function _e(D){f[D]!==!0&&(t.enable(D),f[D]=!0)}function at(D){f[D]!==!1&&(t.disable(D),f[D]=!1)}function Ue(D,fe){return g[D]!==fe?(t.bindFramebuffer(D,fe),g[D]=fe,i&&(D===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=fe),D===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=fe)),!0):!1}function F(D,fe){let H=_,ue=!1;if(D){H=v.get(fe),H===void 0&&(H=[],v.set(fe,H));const ge=D.textures;if(H.length!==ge.length||H[0]!==t.COLOR_ATTACHMENT0){for(let Qe=0,ft=ge.length;Qe<ft;Qe++)H[Qe]=t.COLOR_ATTACHMENT0+Qe;H.length=ge.length,ue=!0}}else H[0]!==t.BACK&&(H[0]=t.BACK,ue=!0);if(ue)if(n.isWebGL2)t.drawBuffers(H);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function It(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const Ce={[Gr]:t.FUNC_ADD,[gM]:t.FUNC_SUBTRACT,[vM]:t.FUNC_REVERSE_SUBTRACT};if(i)Ce[_m]=t.MIN,Ce[ym]=t.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ce[_m]=D.MIN_EXT,Ce[ym]=D.MAX_EXT)}const $e={[_M]:t.ZERO,[yM]:t.ONE,[xM]:t.SRC_COLOR,[Ph]:t.SRC_ALPHA,[AM]:t.SRC_ALPHA_SATURATE,[wM]:t.DST_COLOR,[MM]:t.DST_ALPHA,[SM]:t.ONE_MINUS_SRC_COLOR,[Lh]:t.ONE_MINUS_SRC_ALPHA,[TM]:t.ONE_MINUS_DST_COLOR,[EM]:t.ONE_MINUS_DST_ALPHA,[bM]:t.CONSTANT_COLOR,[RM]:t.ONE_MINUS_CONSTANT_COLOR,[CM]:t.CONSTANT_ALPHA,[PM]:t.ONE_MINUS_CONSTANT_ALPHA};function Le(D,fe,H,ue,ge,Qe,ft,Ot,rn,lt){if(D===yr){d===!0&&(at(t.BLEND),d=!1);return}if(d===!1&&(_e(t.BLEND),d=!0),D!==mM){if(D!==y||lt!==P){if((m!==Gr||b!==Gr)&&(t.blendEquation(t.FUNC_ADD),m=Gr,b=Gr),lt)switch(D){case ro:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ch:t.blendFunc(t.ONE,t.ONE);break;case gm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ro:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ch:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case gm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,C=null,T=null,L=null,K.set(0,0,0),x=0,y=D,P=lt}return}ge=ge||fe,Qe=Qe||H,ft=ft||ue,(fe!==m||ge!==b)&&(t.blendEquationSeparate(Ce[fe],Ce[ge]),m=fe,b=ge),(H!==S||ue!==C||Qe!==T||ft!==L)&&(t.blendFuncSeparate($e[H],$e[ue],$e[Qe],$e[ft]),S=H,C=ue,T=Qe,L=ft),(Ot.equals(K)===!1||rn!==x)&&(t.blendColor(Ot.r,Ot.g,Ot.b,rn),K.copy(Ot),x=rn),y=D,P=!1}function Je(D,fe){D.side===ki?at(t.CULL_FACE):_e(t.CULL_FACE);let H=D.side===Pn;fe&&(H=!H),We(H),D.blending===ro&&D.transparent===!1?Le(yr):Le(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const ue=D.stencilWrite;c.setTest(ue),ue&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),R(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):at(t.SAMPLE_ALPHA_TO_COVERAGE)}function We(D){se!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),se=D)}function qe(D){D!==fM?(_e(t.CULL_FACE),D!==ne&&(D===mm?t.cullFace(t.BACK):D===pM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):at(t.CULL_FACE),ne=D}function Mt(D){D!==U&&(N&&t.lineWidth(D),U=D)}function R(D,fe,H){D?(_e(t.POLYGON_OFFSET_FILL),(Y!==fe||$!==H)&&(t.polygonOffset(fe,H),Y=fe,$=H)):at(t.POLYGON_OFFSET_FILL)}function M(D){D?_e(t.SCISSOR_TEST):at(t.SCISSOR_TEST)}function X(D){D===void 0&&(D=t.TEXTURE0+Q-1),J!==D&&(t.activeTexture(D),J=D)}function Z(D,fe,H){H===void 0&&(J===null?H=t.TEXTURE0+Q-1:H=J);let ue=le[H];ue===void 0&&(ue={type:void 0,texture:void 0},le[H]=ue),(ue.type!==D||ue.texture!==fe)&&(J!==H&&(t.activeTexture(H),J=H),t.bindTexture(D,fe||Ae[D]),ue.type=D,ue.texture=fe)}function ie(){const D=le[J];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(D){ee.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),ee.copy(D))}function Me(D){pe.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),pe.copy(D))}function Ze(D,fe){let H=h.get(fe);H===void 0&&(H=new WeakMap,h.set(fe,H));let ue=H.get(D);ue===void 0&&(ue=t.getUniformBlockIndex(fe,D.name),H.set(D,ue))}function Oe(D,fe){const ue=h.get(fe).get(D);u.get(fe)!==ue&&(t.uniformBlockBinding(fe,ue,D.__bindingPointIndex),u.set(fe,ue))}function gt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},J=null,le={},g={},v=new WeakMap,_=[],p=null,d=!1,y=null,m=null,S=null,C=null,b=null,T=null,L=null,K=new Ge(0,0,0),x=0,P=!1,se=null,ne=null,U=null,Y=null,$=null,ee.set(0,0,t.canvas.width,t.canvas.height),pe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:_e,disable:at,bindFramebuffer:Ue,drawBuffers:F,useProgram:It,setBlending:Le,setMaterial:Je,setFlipSided:We,setCullFace:qe,setLineWidth:Mt,setPolygonOffset:R,setScissorTest:M,activeTexture:X,bindTexture:Z,unbindTexture:ie,compressedTexImage2D:te,compressedTexImage3D:Fe,texImage2D:ke,texImage3D:we,updateUBOMapping:Ze,uniformBlockBinding:Oe,texStorage2D:oe,texStorage3D:ht,texSubImage2D:Ie,texSubImage3D:ce,compressedTexSubImage2D:me,compressedTexSubImage3D:je,scissor:Se,viewport:Me,reset:gt}}function ub(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ve,h=new WeakMap;let f;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return v?new OffscreenCanvas(R,M):Bc("canvas")}function p(R,M,X,Z){let ie=1;const te=Mt(R);if((te.width>Z||te.height>Z)&&(ie=Z/Math.max(te.width,te.height)),ie<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Fe=M?Bh:Math.floor,Ie=Fe(ie*te.width),ce=Fe(ie*te.height);f===void 0&&(f=_(Ie,ce));const me=X?_(Ie,ce):f;return me.width=Ie,me.height=ce,me.getContext("2d").drawImage(R,0,0,Ie,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Ie+"x"+ce+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function d(R){const M=Mt(R);return qm(M.width)&&qm(M.height)}function y(R){return a?!1:R.wrapS!==ai||R.wrapT!==ai||R.minFilter!==Zt&&R.minFilter!==En}function m(R,M){return R.generateMipmaps&&M&&R.minFilter!==Zt&&R.minFilter!==En}function S(R){t.generateMipmap(R)}function C(R,M,X,Z,ie=!1){if(a===!1)return M;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=M;if(M===t.RED&&(X===t.FLOAT&&(te=t.R32F),X===t.HALF_FLOAT&&(te=t.R16F),X===t.UNSIGNED_BYTE&&(te=t.R8)),M===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(te=t.R8UI),X===t.UNSIGNED_SHORT&&(te=t.R16UI),X===t.UNSIGNED_INT&&(te=t.R32UI),X===t.BYTE&&(te=t.R8I),X===t.SHORT&&(te=t.R16I),X===t.INT&&(te=t.R32I)),M===t.RG&&(X===t.FLOAT&&(te=t.RG32F),X===t.HALF_FLOAT&&(te=t.RG16F),X===t.UNSIGNED_BYTE&&(te=t.RG8)),M===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(te=t.RG8UI),X===t.UNSIGNED_SHORT&&(te=t.RG16UI),X===t.UNSIGNED_INT&&(te=t.RG32UI),X===t.BYTE&&(te=t.RG8I),X===t.SHORT&&(te=t.RG16I),X===t.INT&&(te=t.RG32I)),M===t.RGBA){const Fe=ie?kc:mt.getTransfer(Z);X===t.FLOAT&&(te=t.RGBA32F),X===t.HALF_FLOAT&&(te=t.RGBA16F),X===t.UNSIGNED_BYTE&&(te=Fe===Tt?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function b(R,M,X){return m(R,X)===!0||R.isFramebufferTexture&&R.minFilter!==Zt&&R.minFilter!==En?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function T(R){return R===Zt||R===kh||R===Go?t.NEAREST:t.LINEAR}function L(R){const M=R.target;M.removeEventListener("dispose",L),x(M),M.isVideoTexture&&h.delete(M)}function K(R){const M=R.target;M.removeEventListener("dispose",K),se(M)}function x(R){const M=i.get(R);if(M.__webglInit===void 0)return;const X=R.source,Z=g.get(X);if(Z){const ie=Z[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(R),Object.keys(Z).length===0&&g.delete(X)}i.remove(R)}function P(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const X=R.source,Z=g.get(X);delete Z[M.__cacheKey],o.memory.textures--}function se(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let ie=0;ie<M.__webglFramebuffer[Z].length;ie++)t.deleteFramebuffer(M.__webglFramebuffer[Z][ie]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=R.textures;for(let Z=0,ie=X.length;Z<ie;Z++){const te=i.get(X[Z]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(X[Z])}i.remove(R)}let ne=0;function U(){ne=0}function Y(){const R=ne;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),ne+=1,R}function $(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Q(R,M){const X=i.get(R);if(R.isVideoTexture&&We(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(X,R,M);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+M)}function N(R,M){const X=i.get(R);if(R.version>0&&X.__version!==R.version){pe(X,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+M)}function z(R,M){const X=i.get(R);if(R.version>0&&X.__version!==R.version){pe(X,R,M);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+M)}function W(R,M){const X=i.get(R);if(R.version>0&&X.__version!==R.version){Pe(X,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+M)}const J={[Ih]:t.REPEAT,[ai]:t.CLAMP_TO_EDGE,[Uh]:t.MIRRORED_REPEAT},le={[Zt]:t.NEAREST,[kh]:t.NEAREST_MIPMAP_NEAREST,[Go]:t.NEAREST_MIPMAP_LINEAR,[En]:t.LINEAR,[Gu]:t.LINEAR_MIPMAP_NEAREST,[$r]:t.LINEAR_MIPMAP_LINEAR},be={[nE]:t.NEVER,[lE]:t.ALWAYS,[iE]:t.LESS,[ny]:t.LEQUAL,[rE]:t.EQUAL,[aE]:t.GEQUAL,[sE]:t.GREATER,[oE]:t.NOTEQUAL};function G(R,M,X){if(M.type===yi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===En||M.magFilter===Gu||M.magFilter===Go||M.magFilter===$r||M.minFilter===En||M.minFilter===Gu||M.minFilter===Go||M.minFilter===$r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(t.texParameteri(R,t.TEXTURE_WRAP_S,J[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,J[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,J[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,le[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,le[M.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==ai||M.wrapT!==ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,T(M.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Zt&&M.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,be[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Zt||M.minFilter!==Go&&M.minFilter!==$r||M.type===yi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ka&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ee(R,M){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",L));const Z=M.source;let ie=g.get(Z);ie===void 0&&(ie={},g.set(Z,ie));const te=$(M);if(te!==R.__cacheKey){ie[te]===void 0&&(ie[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ie[te].usedTimes++;const Fe=ie[R.__cacheKey];Fe!==void 0&&(ie[R.__cacheKey].usedTimes--,Fe.usedTimes===0&&P(M)),R.__cacheKey=te,R.__webglTexture=ie[te].texture}return X}function pe(R,M,X){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const ie=ee(R,M),te=M.source;n.bindTexture(Z,R.__webglTexture,t.TEXTURE0+X);const Fe=i.get(te);if(te.version!==Fe.__version||ie===!0){n.activeTexture(t.TEXTURE0+X);const Ie=mt.getPrimaries(mt.workingColorSpace),ce=M.colorSpace===ar?null:mt.getPrimaries(M.colorSpace),me=M.colorSpace===ar||Ie===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const je=y(M)&&d(M.image)===!1;let oe=p(M.image,je,!1,r.maxTextureSize);oe=qe(M,oe);const ht=d(oe)||a,ke=s.convert(M.format,M.colorSpace);let we=s.convert(M.type),Se=C(M.internalFormat,ke,we,M.colorSpace,M.isVideoTexture);G(Z,M,ht);let Me;const Ze=M.mipmaps,Oe=a&&M.isVideoTexture!==!0&&Se!==ey,gt=Fe.__version===void 0||ie===!0,D=te.dataReady,fe=b(M,oe,ht);if(M.isDepthTexture)Se=t.DEPTH_COMPONENT,a?M.type===yi?Se=t.DEPTH_COMPONENT32F:M.type===ur?Se=t.DEPTH_COMPONENT24:M.type===Kr?Se=t.DEPTH24_STENCIL8:Se=t.DEPTH_COMPONENT16:M.type===yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Zr&&Se===t.DEPTH_COMPONENT&&M.type!==jf&&M.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ur,we=s.convert(M.type)),M.format===vo&&Se===t.DEPTH_COMPONENT&&(Se=t.DEPTH_STENCIL,M.type!==Kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Kr,we=s.convert(M.type))),gt&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Se,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Se,oe.width,oe.height,0,ke,we,null));else if(M.isDataTexture)if(Ze.length>0&&ht){Oe&&gt&&n.texStorage2D(t.TEXTURE_2D,fe,Se,Ze[0].width,Ze[0].height);for(let H=0,ue=Ze.length;H<ue;H++)Me=Ze[H],Oe?D&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,Me.width,Me.height,ke,we,Me.data):n.texImage2D(t.TEXTURE_2D,H,Se,Me.width,Me.height,0,ke,we,Me.data);M.generateMipmaps=!1}else Oe?(gt&&n.texStorage2D(t.TEXTURE_2D,fe,Se,oe.width,oe.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,ke,we,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Se,oe.width,oe.height,0,ke,we,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Se,Ze[0].width,Ze[0].height,oe.depth);for(let H=0,ue=Ze.length;H<ue;H++)Me=Ze[H],M.format!==li?ke!==null?Oe?D&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,Me.width,Me.height,oe.depth,ke,Me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,H,Se,Me.width,Me.height,oe.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,Me.width,Me.height,oe.depth,ke,we,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,H,Se,Me.width,Me.height,oe.depth,0,ke,we,Me.data)}else{Oe&&gt&&n.texStorage2D(t.TEXTURE_2D,fe,Se,Ze[0].width,Ze[0].height);for(let H=0,ue=Ze.length;H<ue;H++)Me=Ze[H],M.format!==li?ke!==null?Oe?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,H,0,0,Me.width,Me.height,ke,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,H,Se,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?D&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,Me.width,Me.height,ke,we,Me.data):n.texImage2D(t.TEXTURE_2D,H,Se,Me.width,Me.height,0,ke,we,Me.data)}else if(M.isDataArrayTexture)Oe?(gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Se,oe.width,oe.height,oe.depth),D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ke,we,oe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,oe.width,oe.height,oe.depth,0,ke,we,oe.data);else if(M.isData3DTexture)Oe?(gt&&n.texStorage3D(t.TEXTURE_3D,fe,Se,oe.width,oe.height,oe.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ke,we,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Se,oe.width,oe.height,oe.depth,0,ke,we,oe.data);else if(M.isFramebufferTexture){if(gt)if(Oe)n.texStorage2D(t.TEXTURE_2D,fe,Se,oe.width,oe.height);else{let H=oe.width,ue=oe.height;for(let ge=0;ge<fe;ge++)n.texImage2D(t.TEXTURE_2D,ge,Se,H,ue,0,ke,we,null),H>>=1,ue>>=1}}else if(Ze.length>0&&ht){if(Oe&&gt){const H=Mt(Ze[0]);n.texStorage2D(t.TEXTURE_2D,fe,Se,H.width,H.height)}for(let H=0,ue=Ze.length;H<ue;H++)Me=Ze[H],Oe?D&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,ke,we,Me):n.texImage2D(t.TEXTURE_2D,H,Se,ke,we,Me);M.generateMipmaps=!1}else if(Oe){if(gt){const H=Mt(oe);n.texStorage2D(t.TEXTURE_2D,fe,Se,H.width,H.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ke,we,oe)}else n.texImage2D(t.TEXTURE_2D,0,Se,ke,we,oe);m(M,ht)&&S(Z),Fe.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Pe(R,M,X){if(M.image.length!==6)return;const Z=ee(R,M),ie=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+X);const te=i.get(ie);if(ie.version!==te.__version||Z===!0){n.activeTexture(t.TEXTURE0+X);const Fe=mt.getPrimaries(mt.workingColorSpace),Ie=M.colorSpace===ar?null:mt.getPrimaries(M.colorSpace),ce=M.colorSpace===ar||Fe===Ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const me=M.isCompressedTexture||M.image[0].isCompressedTexture,je=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let H=0;H<6;H++)!me&&!je?oe[H]=p(M.image[H],!1,!0,r.maxCubemapSize):oe[H]=je?M.image[H].image:M.image[H],oe[H]=qe(M,oe[H]);const ht=oe[0],ke=d(ht)||a,we=s.convert(M.format,M.colorSpace),Se=s.convert(M.type),Me=C(M.internalFormat,we,Se,M.colorSpace),Ze=a&&M.isVideoTexture!==!0,Oe=te.__version===void 0||Z===!0,gt=ie.dataReady;let D=b(M,ht,ke);G(t.TEXTURE_CUBE_MAP,M,ke);let fe;if(me){Ze&&Oe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,D,Me,ht.width,ht.height);for(let H=0;H<6;H++){fe=oe[H].mipmaps;for(let ue=0;ue<fe.length;ue++){const ge=fe[ue];M.format!==li?we!==null?Ze?gt&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ue,0,0,ge.width,ge.height,we,ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ue,Me,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?gt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ue,0,0,ge.width,ge.height,we,Se,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ue,Me,ge.width,ge.height,0,we,Se,ge.data)}}}else{if(fe=M.mipmaps,Ze&&Oe){fe.length>0&&D++;const H=Mt(oe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,D,Me,H.width,H.height)}for(let H=0;H<6;H++)if(je){Ze?gt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,oe[H].width,oe[H].height,we,Se,oe[H].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Me,oe[H].width,oe[H].height,0,we,Se,oe[H].data);for(let ue=0;ue<fe.length;ue++){const Qe=fe[ue].image[H].image;Ze?gt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ue+1,0,0,Qe.width,Qe.height,we,Se,Qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ue+1,Me,Qe.width,Qe.height,0,we,Se,Qe.data)}}else{Ze?gt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,we,Se,oe[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Me,we,Se,oe[H]);for(let ue=0;ue<fe.length;ue++){const ge=fe[ue];Ze?gt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ue+1,0,0,we,Se,ge.image[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ue+1,Me,we,Se,ge.image[H])}}}m(M,ke)&&S(t.TEXTURE_CUBE_MAP),te.__version=ie.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ae(R,M,X,Z,ie,te){const Fe=s.convert(X.format,X.colorSpace),Ie=s.convert(X.type),ce=C(X.internalFormat,Fe,Ie,X.colorSpace);if(!i.get(M).__hasExternalTextures){const je=Math.max(1,M.width>>te),oe=Math.max(1,M.height>>te);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,te,ce,je,oe,M.depth,0,Fe,Ie,null):n.texImage2D(ie,te,ce,je,oe,0,Fe,Ie,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Je(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ie,i.get(X).__webglTexture,0,Le(M)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ie,i.get(X).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function _e(R,M,X){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let Z=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(X||Je(M)){const ie=M.depthTexture;ie&&ie.isDepthTexture&&(ie.type===yi?Z=t.DEPTH_COMPONENT32F:ie.type===ur&&(Z=t.DEPTH_COMPONENT24));const te=Le(M);Je(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,Z,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,te,Z,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,Z,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const Z=Le(M);X&&Je(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,M.width,M.height):Je(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const Z=M.textures;for(let ie=0;ie<Z.length;ie++){const te=Z[ie],Fe=s.convert(te.format,te.colorSpace),Ie=s.convert(te.type),ce=C(te.internalFormat,Fe,Ie,te.colorSpace),me=Le(M);X&&Je(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,ce,M.width,M.height):Je(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,ce,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ce,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function at(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q(M.depthTexture,0);const Z=i.get(M.depthTexture).__webglTexture,ie=Le(M);if(M.depthTexture.format===Zr)Je(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(M.depthTexture.format===vo)Je(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ue(R){const M=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");at(M.__webglFramebuffer,R)}else if(X){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]=t.createRenderbuffer(),_e(M.__webglDepthbuffer[Z],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),_e(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function F(R,M,X){const Z=i.get(R);M!==void 0&&Ae(Z.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&Ue(R)}function It(R){const M=R.texture,X=i.get(R),Z=i.get(M);R.addEventListener("dispose",K);const ie=R.textures,te=R.isWebGLCubeRenderTarget===!0,Fe=ie.length>1,Ie=d(R)||a;if(Fe||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,o.memory.textures++),te){X.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[ce]=[];for(let me=0;me<M.mipmaps.length;me++)X.__webglFramebuffer[ce][me]=t.createFramebuffer()}else X.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)X.__webglFramebuffer[ce]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(Fe)if(r.drawBuffers)for(let ce=0,me=ie.length;ce<me;ce++){const je=i.get(ie[ce]);je.__webglTexture===void 0&&(je.__webglTexture=t.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Je(R)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ce=0;ce<ie.length;ce++){const me=ie[ce];X.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[ce]);const je=s.convert(me.format,me.colorSpace),oe=s.convert(me.type),ht=C(me.internalFormat,je,oe,me.colorSpace,R.isXRRenderTarget===!0),ke=Le(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,ht,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,X.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),_e(X.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),G(t.TEXTURE_CUBE_MAP,M,Ie);for(let ce=0;ce<6;ce++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)Ae(X.__webglFramebuffer[ce][me],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else Ae(X.__webglFramebuffer[ce],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(M,Ie)&&S(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Fe){for(let ce=0,me=ie.length;ce<me;ce++){const je=ie[ce],oe=i.get(je);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),G(t.TEXTURE_2D,je,Ie),Ae(X.__webglFramebuffer,R,je,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(je,Ie)&&S(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ce,Z.__webglTexture),G(ce,M,Ie),a&&M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)Ae(X.__webglFramebuffer[me],R,M,t.COLOR_ATTACHMENT0,ce,me);else Ae(X.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ce,0);m(M,Ie)&&S(ce),n.unbindTexture()}R.depthBuffer&&Ue(R)}function Ce(R){const M=d(R)||a,X=R.textures;for(let Z=0,ie=X.length;Z<ie;Z++){const te=X[Z];if(m(te,M)){const Fe=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ie=i.get(te).__webglTexture;n.bindTexture(Fe,Ie),S(Fe),n.unbindTexture()}}}function $e(R){if(a&&R.samples>0&&Je(R)===!1){const M=R.textures,X=R.width,Z=R.height;let ie=t.COLOR_BUFFER_BIT;const te=[],Fe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=i.get(R),ce=M.length>1;if(ce)for(let me=0;me<M.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let me=0;me<M.length;me++){te.push(t.COLOR_ATTACHMENT0+me),R.depthBuffer&&te.push(Fe);const je=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if(je===!1&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),ce&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[me]),je===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Fe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Fe])),ce){const oe=i.get(M[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,X,Z,0,0,X,Z,ie,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<M.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[me]);const je=i.get(M[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,je,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}}function Le(R){return Math.min(r.maxSamples,R.samples)}function Je(R){const M=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function We(R){const M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function qe(R,M){const X=R.colorSpace,Z=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Oh||X!==Cr&&X!==ar&&(mt.getTransfer(X)===Tt?a===!1?e.has("EXT_sRGB")===!0&&Z===li?(R.format=Oh,R.minFilter=En,R.generateMipmaps=!1):M=sy.sRGBToLinear(M):(Z!==li||ie!==xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}function Mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=Y,this.resetTextureUnits=U,this.setTexture2D=Q,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=F,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Je}function db(t,e,n){const i=n.isWebGL2;function r(s,o=ar){let a;const l=mt.getTransfer(o);if(s===xr)return t.UNSIGNED_BYTE;if(s===q_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Y_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===XM)return t.BYTE;if(s===$M)return t.SHORT;if(s===jf)return t.UNSIGNED_SHORT;if(s===$_)return t.INT;if(s===ur)return t.UNSIGNED_INT;if(s===yi)return t.FLOAT;if(s===ka)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===qM)return t.ALPHA;if(s===li)return t.RGBA;if(s===YM)return t.LUMINANCE;if(s===KM)return t.LUMINANCE_ALPHA;if(s===Zr)return t.DEPTH_COMPONENT;if(s===vo)return t.DEPTH_STENCIL;if(s===Oh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===K_)return t.RED;if(s===Z_)return t.RED_INTEGER;if(s===ZM)return t.RG;if(s===Q_)return t.RG_INTEGER;if(s===J_)return t.RGBA_INTEGER;if(s===Vu||s===Wu||s===ju||s===Xu)if(l===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Vu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ju)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Vu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ju)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xm||s===Sm||s===Mm||s===Em)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===xm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Mm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Em)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ey)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===wm||s===Tm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===wm)return l===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Tm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Am||s===bm||s===Rm||s===Cm||s===Pm||s===Lm||s===Nm||s===Dm||s===Im||s===Um||s===km||s===Fm||s===Om||s===zm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Am)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===bm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Lm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Im)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Um)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===km)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Om)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===zm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$u||s===Bm||s===Hm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===$u)return l===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Bm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===QM||s===Gm||s===Vm||s===Wm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===$u)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Gm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Wm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Kr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class hb extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mi extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fb={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),g=.02,v=.005;c.inputState.pinching&&f>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Mi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Tr({extensions:{fragDepth:!0},vertexShader:pb,fragmentShader:mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new en(new lu(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class vb extends Mo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,g=null,v=null;const _=new gb,p=n.getContextAttributes();let d=null,y=null;const m=[],S=[],C=new Ve;let b=null;const T=new kn;T.layers.enable(1),T.viewport=new Rt;const L=new kn;L.layers.enable(2),L.viewport=new Rt;const K=[T,L],x=new hb;x.layers.enable(1),x.layers.enable(2);let P=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ee=m[G];return ee===void 0&&(ee=new yd,m[G]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(G){let ee=m[G];return ee===void 0&&(ee=new yd,m[G]=ee),ee.getGripSpace()},this.getHand=function(G){let ee=m[G];return ee===void 0&&(ee=new yd,m[G]=ee),ee.getHandSpace()};function ne(G){const ee=S.indexOf(G.inputSource);if(ee===-1)return;const pe=m[ee];pe!==void 0&&(pe.update(G.inputSource,G.frame,c||o),pe.dispatchEvent({type:G.type,data:G.inputSource}))}function U(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",Y);for(let G=0;G<m.length;G++){const ee=S[G];ee!==null&&(S[G]=null,m[G].disconnect(ee))}P=null,se=null,_.reset(),e.setRenderTarget(d),g=null,f=null,h=null,r=null,y=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",U),r.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new is(g.framebufferWidth,g.framebufferHeight,{format:li,type:xr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,pe=null,Pe=null;p.depth&&(Pe=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=p.stencil?vo:Zr,pe=p.stencil?Kr:ur);const Ae={colorFormat:n.RGBA8,depthFormat:Pe,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new is(f.textureWidth,f.textureHeight,{format:li,type:xr,depthTexture:new gy(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const _e=e.properties.get(y);_e.__ignoreDepthValues=f.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),be.setContext(r),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(G){for(let ee=0;ee<G.removed.length;ee++){const pe=G.removed[ee],Pe=S.indexOf(pe);Pe>=0&&(S[Pe]=null,m[Pe].disconnect(pe))}for(let ee=0;ee<G.added.length;ee++){const pe=G.added[ee];let Pe=S.indexOf(pe);if(Pe===-1){for(let _e=0;_e<m.length;_e++)if(_e>=S.length){S.push(pe),Pe=_e;break}else if(S[_e]===null){S[_e]=pe,Pe=_e;break}if(Pe===-1)break}const Ae=m[Pe];Ae&&Ae.connect(pe)}}const $=new I,Q=new I;function N(G,ee,pe){$.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(pe.matrixWorld);const Pe=$.distanceTo(Q),Ae=ee.projectionMatrix.elements,_e=pe.projectionMatrix.elements,at=Ae[14]/(Ae[10]-1),Ue=Ae[14]/(Ae[10]+1),F=(Ae[9]+1)/Ae[5],It=(Ae[9]-1)/Ae[5],Ce=(Ae[8]-1)/Ae[0],$e=(_e[8]+1)/_e[0],Le=at*Ce,Je=at*$e,We=Pe/(-Ce+$e),qe=We*-Ce;ee.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(qe),G.translateZ(We),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Mt=at+We,R=Ue+We,M=Le-qe,X=Je+(Pe-qe),Z=F*Ue/R*Mt,ie=It*Ue/R*Mt;G.projectionMatrix.makePerspective(M,X,Z,ie,Mt,R),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function z(G,ee){ee===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ee.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;_.texture!==null&&(G.near=_.depthNear,G.far=_.depthFar),x.near=L.near=T.near=G.near,x.far=L.far=T.far=G.far,(P!==x.near||se!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,se=x.far,T.near=P,T.far=se,L.near=P,L.far=se,T.updateProjectionMatrix(),L.updateProjectionMatrix(),G.updateProjectionMatrix());const ee=G.parent,pe=x.cameras;z(x,ee);for(let Pe=0;Pe<pe.length;Pe++)z(pe[Pe],ee);pe.length===2?N(x,T,L):x.projectionMatrix.copy(T.projectionMatrix),W(G,x,ee)};function W(G,ee,pe){pe===null?G.matrix.copy(ee.matrixWorld):(G.matrix.copy(pe.matrixWorld),G.matrix.invert(),G.matrix.multiply(ee.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ee.projectionMatrix),G.projectionMatrixInverse.copy(ee.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=zh*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null};let J=null;function le(G,ee){if(u=ee.getViewerPose(c||o),v=ee,u!==null){const pe=u.views;g!==null&&(e.setRenderTargetFramebuffer(y,g.framebuffer),e.setRenderTarget(y));let Pe=!1;pe.length!==x.cameras.length&&(x.cameras.length=0,Pe=!0);for(let _e=0;_e<pe.length;_e++){const at=pe[_e];let Ue=null;if(g!==null)Ue=g.getViewport(at);else{const It=h.getViewSubImage(f,at);Ue=It.viewport,_e===0&&(e.setRenderTargetTextures(y,It.colorTexture,f.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(y))}let F=K[_e];F===void 0&&(F=new kn,F.layers.enable(_e),F.viewport=new Rt,K[_e]=F),F.matrix.fromArray(at.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(at.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),_e===0&&(x.matrix.copy(F.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Pe===!0&&x.cameras.push(F)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const _e=h.getDepthInformation(pe[0]);_e&&_e.isValid&&_e.texture&&_.init(e,_e,r.renderState)}}for(let pe=0;pe<m.length;pe++){const Pe=S[pe],Ae=m[pe];Pe!==null&&Ae!==void 0&&Ae.update(Pe,ee,c||o)}_.render(e,x),J&&J(G,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),v=null}const be=new py;be.setAnimationLoop(le),this.setAnimationLoop=function(G){J=G},this.dispose=function(){}}}const Fr=new hi,_b=new it;function yb(t,e){function n(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,dy(t)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,y,m,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&g(p,d,S)):d.isMeshMatcapMaterial?(s(p,d),v(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,y,m):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Pn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Pn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=e.get(d),m=y.envMap,S=y.envMapRotation;if(m&&(p.envMap.value=m,Fr.copy(S),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),p.envMapRotation.value.setFromMatrix4(_b.makeRotationFromEuler(Fr)),p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const C=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*C,n(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,y,m){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=m*.5,d.map&&(p.map.value=d.map,n(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pn&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const y=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xb(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,m){const S=m.program;i.uniformBlockBinding(y,S)}function c(y,m){let S=r[y.id];S===void 0&&(v(y),S=u(y),r[y.id]=S,y.addEventListener("dispose",p));const C=m.program;i.updateUBOMapping(y,C);const b=e.render.frame;s[y.id]!==b&&(f(y),s[y.id]=b)}function u(y){const m=h();y.__bindingPointIndex=m;const S=t.createBuffer(),C=y.__size,b=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,S),S}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const m=r[y.id],S=y.uniforms,C=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let b=0,T=S.length;b<T;b++){const L=Array.isArray(S[b])?S[b]:[S[b]];for(let K=0,x=L.length;K<x;K++){const P=L[K];if(g(P,b,K,C)===!0){const se=P.__offset,ne=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let Y=0;Y<ne.length;Y++){const $=ne[Y],Q=_($);typeof $=="number"||typeof $=="boolean"?(P.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,se+U,P.__data)):$.isMatrix3?(P.__data[0]=$.elements[0],P.__data[1]=$.elements[1],P.__data[2]=$.elements[2],P.__data[3]=0,P.__data[4]=$.elements[3],P.__data[5]=$.elements[4],P.__data[6]=$.elements[5],P.__data[7]=0,P.__data[8]=$.elements[6],P.__data[9]=$.elements[7],P.__data[10]=$.elements[8],P.__data[11]=0):($.toArray(P.__data,U),U+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,se,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(y,m,S,C){const b=y.value,T=m+"_"+S;if(C[T]===void 0)return typeof b=="number"||typeof b=="boolean"?C[T]=b:C[T]=b.clone(),!0;{const L=C[T];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return C[T]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function v(y){const m=y.uniforms;let S=0;const C=16;for(let T=0,L=m.length;T<L;T++){const K=Array.isArray(m[T])?m[T]:[m[T]];for(let x=0,P=K.length;x<P;x++){const se=K[x],ne=Array.isArray(se.value)?se.value:[se.value];for(let U=0,Y=ne.length;U<Y;U++){const $=ne[U],Q=_($),N=S%C;N!==0&&C-N<Q.boundary&&(S+=C-N),se.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=S,S+=Q.storage}}}const b=S%C;return b>0&&(S+=C-b),y.__size=S,y.__cache={},this}function _(y){const m={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(m.boundary=4,m.storage=4):y.isVector2?(m.boundary=8,m.storage=8):y.isVector3||y.isColor?(m.boundary=16,m.storage=12):y.isVector4?(m.boundary=16,m.storage=16):y.isMatrix3?(m.boundary=48,m.storage=48):y.isMatrix4?(m.boundary=64,m.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),m}function p(y){const m=y.target;m.removeEventListener("dispose",p);const S=o.indexOf(m.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function d(){for(const y in r)t.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class My{constructor(e={}){const{canvas:n=uE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const g=new Uint32Array(4),v=new Int32Array(4);let _=null,p=null;const d=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this._useLegacyLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;const m=this;let S=!1,C=0,b=0,T=null,L=-1,K=null;const x=new Rt,P=new Rt;let se=null;const ne=new Ge(0);let U=0,Y=n.width,$=n.height,Q=1,N=null,z=null;const W=new Rt(0,0,Y,$),J=new Rt(0,0,Y,$);let le=!1;const be=new qf;let G=!1,ee=!1,pe=null;const Pe=new it,Ae=new Ve,_e=new I,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return T===null?Q:1}let F=i;function It(E,k){for(let B=0;B<E.length;B++){const V=E[B],O=n.getContext(V,k);if(O!==null)return O}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vf}`),n.addEventListener("webglcontextlost",gt,!1),n.addEventListener("webglcontextrestored",D,!1),n.addEventListener("webglcontextcreationerror",fe,!1),F===null){const k=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&k.shift(),F=It(k,E),F===null)throw It(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ce,$e,Le,Je,We,qe,Mt,R,M,X,Z,ie,te,Fe,Ie,ce,me,je,oe,ht,ke,we,Se,Me;function Ze(){Ce=new AT(F),$e=new xT(F,Ce,e),Ce.init($e),we=new db(F,Ce,$e),Le=new cb(F,Ce,$e),Je=new CT(F),We=new YA,qe=new ub(F,Ce,Le,We,$e,we,Je),Mt=new MT(m),R=new TT(m),M=new UE(F,$e),Se=new _T(F,Ce,M,$e),X=new bT(F,M,Je,Se),Z=new DT(F,X,M,Je),oe=new NT(F,$e,qe),ce=new ST(We),ie=new qA(m,Mt,R,Ce,$e,Se,ce),te=new yb(m,We),Fe=new ZA,Ie=new ib(Ce,$e),je=new vT(m,Mt,R,Le,Z,f,l),me=new lb(m,Z,$e),Me=new xb(F,Je,$e,Le),ht=new yT(F,Ce,Je,$e),ke=new RT(F,Ce,Je,$e),Je.programs=ie.programs,m.capabilities=$e,m.extensions=Ce,m.properties=We,m.renderLists=Fe,m.shadowMap=me,m.state=Le,m.info=Je}Ze();const Oe=new vb(m,F);this.xr=Oe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Ce.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ce.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(Y,$,!1))},this.getSize=function(E){return E.set(Y,$)},this.setSize=function(E,k,B=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,$=k,n.width=Math.floor(E*Q),n.height=Math.floor(k*Q),B===!0&&(n.style.width=E+"px",n.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(Y*Q,$*Q).floor()},this.setDrawingBufferSize=function(E,k,B){Y=E,$=k,Q=B,n.width=Math.floor(E*B),n.height=Math.floor(k*B),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(W)},this.setViewport=function(E,k,B,V){E.isVector4?W.set(E.x,E.y,E.z,E.w):W.set(E,k,B,V),Le.viewport(x.copy(W).multiplyScalar(Q).round())},this.getScissor=function(E){return E.copy(J)},this.setScissor=function(E,k,B,V){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,k,B,V),Le.scissor(P.copy(J).multiplyScalar(Q).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(E){Le.setScissorTest(le=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(E=!0,k=!0,B=!0){let V=0;if(E){let O=!1;if(T!==null){const ve=T.texture.format;O=ve===J_||ve===Q_||ve===Z_}if(O){const ve=T.texture.type,Ee=ve===xr||ve===ur||ve===jf||ve===Kr||ve===q_||ve===Y_,Ne=je.getClearColor(),De=je.getClearAlpha(),Xe=Ne.r,ze=Ne.g,Be=Ne.b;Ee?(g[0]=Xe,g[1]=ze,g[2]=Be,g[3]=De,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=Xe,v[1]=ze,v[2]=Be,v[3]=De,F.clearBufferiv(F.COLOR,0,v))}else V|=F.COLOR_BUFFER_BIT}k&&(V|=F.DEPTH_BUFFER_BIT),B&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",gt,!1),n.removeEventListener("webglcontextrestored",D,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),Fe.dispose(),Ie.dispose(),We.dispose(),Mt.dispose(),R.dispose(),Z.dispose(),Se.dispose(),Me.dispose(),ie.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",rn),Oe.removeEventListener("sessionend",lt),pe&&(pe.dispose(),pe=null),zt.stop()};function gt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=Je.autoReset,k=me.enabled,B=me.autoUpdate,V=me.needsUpdate,O=me.type;Ze(),Je.autoReset=E,me.enabled=k,me.autoUpdate=B,me.needsUpdate=V,me.type=O}function fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function H(E){const k=E.target;k.removeEventListener("dispose",H),ue(k)}function ue(E){ge(E),We.remove(E)}function ge(E){const k=We.get(E).programs;k!==void 0&&(k.forEach(function(B){ie.releaseProgram(B)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,B,V,O,ve){k===null&&(k=at);const Ee=O.isMesh&&O.matrixWorld.determinant()<0,Ne=du(E,k,B,V,O);Le.setMaterial(V,Ee);let De=B.index,Xe=1;if(V.wireframe===!0){if(De=X.getWireframeAttribute(B),De===void 0)return;Xe=2}const ze=B.drawRange,Be=B.attributes.position;let Et=ze.start*Xe,hn=(ze.start+ze.count)*Xe;ve!==null&&(Et=Math.max(Et,ve.start*Xe),hn=Math.min(hn,(ve.start+ve.count)*Xe)),De!==null?(Et=Math.max(Et,0),hn=Math.min(hn,De.count)):Be!=null&&(Et=Math.max(Et,0),hn=Math.min(hn,Be.count));const rt=hn-Et;if(rt<0||rt===1/0)return;Se.setup(O,V,Ne,B,De);let Jn,vt=ht;if(De!==null&&(Jn=M.get(De),vt=ke,vt.setIndex(Jn)),O.isMesh)V.wireframe===!0?(Le.setLineWidth(V.wireframeLinewidth*Ue()),vt.setMode(F.LINES)):vt.setMode(F.TRIANGLES);else if(O.isLine){let He=V.linewidth;He===void 0&&(He=1),Le.setLineWidth(He*Ue()),O.isLineSegments?vt.setMode(F.LINES):O.isLineLoop?vt.setMode(F.LINE_LOOP):vt.setMode(F.LINE_STRIP)}else O.isPoints?vt.setMode(F.POINTS):O.isSprite&&vt.setMode(F.TRIANGLES);if(O.isBatchedMesh)vt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)vt.renderInstances(Et,rt,O.count);else if(B.isInstancedBufferGeometry){const He=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,bo=Math.min(B.instanceCount,He);vt.renderInstances(Et,rt,bo)}else vt.render(Et,rt)};function Qe(E,k,B){E.transparent===!0&&E.side===ki&&E.forceSinglePass===!1?(E.side=Pn,E.needsUpdate=!0,qi(E,k,B),E.side=wr,E.needsUpdate=!0,qi(E,k,B),E.side=ki):qi(E,k,B)}this.compile=function(E,k,B=null){B===null&&(B=E),p=Ie.get(B),p.init(),y.push(p),B.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==B&&E.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(m._useLegacyLights);const V=new Set;return E.traverse(function(O){const ve=O.material;if(ve)if(Array.isArray(ve))for(let Ee=0;Ee<ve.length;Ee++){const Ne=ve[Ee];Qe(Ne,B,O),V.add(Ne)}else Qe(ve,B,O),V.add(ve)}),y.pop(),p=null,V},this.compileAsync=function(E,k,B=null){const V=this.compile(E,k,B);return new Promise(O=>{function ve(){if(V.forEach(function(Ee){We.get(Ee).currentProgram.isReady()&&V.delete(Ee)}),V.size===0){O(E);return}setTimeout(ve,10)}Ce.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let ft=null;function Ot(E){ft&&ft(E)}function rn(){zt.stop()}function lt(){zt.start()}const zt=new py;zt.setAnimationLoop(Ot),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(E){ft=E,Oe.setAnimationLoop(E),E===null?zt.stop():zt.start()},Oe.addEventListener("sessionstart",rn),Oe.addEventListener("sessionend",lt),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(k),k=Oe.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,k,T),p=Ie.get(E,y.length),p.init(),y.push(p),Pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),be.setFromProjectionMatrix(Pe),ee=this.localClippingEnabled,G=ce.init(this.clippingPlanes,ee),_=Fe.get(E,d.length),_.init(),d.push(_),xn(E,k,0,m.sortObjects),_.finish(),m.sortObjects===!0&&_.sort(N,z),this.info.render.frame++,G===!0&&ce.beginShadows();const B=p.state.shadowsArray;if(me.render(B,E,k),G===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1)&&je.render(_,E),p.setupLights(m._useLegacyLights),k.isArrayCamera){const V=k.cameras;for(let O=0,ve=V.length;O<ve;O++){const Ee=V[O];wo(_,E,Ee,Ee.viewport)}}else wo(_,E,k);T!==null&&(qe.updateMultisampleRenderTarget(T),qe.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(m,E,k),Se.resetDefaultState(),L=-1,K=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function xn(E,k,B,V){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||be.intersectsSprite(E)){V&&_e.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pe);const Ee=Z.update(E),Ne=E.material;Ne.visible&&_.push(E,Ee,Ne,B,_e.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||be.intersectsObject(E))){const Ee=Z.update(E),Ne=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),_e.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),_e.copy(Ee.boundingSphere.center)),_e.applyMatrix4(E.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ne)){const De=Ee.groups;for(let Xe=0,ze=De.length;Xe<ze;Xe++){const Be=De[Xe],Et=Ne[Be.materialIndex];Et&&Et.visible&&_.push(E,Ee,Et,B,_e.z,Be)}}else Ne.visible&&_.push(E,Ee,Ne,B,_e.z,null)}}const ve=E.children;for(let Ee=0,Ne=ve.length;Ee<Ne;Ee++)xn(ve[Ee],k,B,V)}function wo(E,k,B,V){const O=E.opaque,ve=E.transmissive,Ee=E.transparent;p.setupLightsView(B),G===!0&&ce.setGlobalState(m.clippingPlanes,B),ve.length>0&&ls(O,ve,k,B),V&&Le.viewport(x.copy(V)),O.length>0&&cs(O,k,B),ve.length>0&&cs(ve,k,B),Ee.length>0&&cs(Ee,k,B),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function ls(E,k,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const ve=$e.isWebGL2;pe===null&&(pe=new is(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?ka:xr,minFilter:$r,samples:ve?4:0})),m.getDrawingBufferSize(Ae),ve?pe.setSize(Ae.x,Ae.y):pe.setSize(Bh(Ae.x),Bh(Ae.y));const Ee=m.getRenderTarget();m.setRenderTarget(pe),m.getClearColor(ne),U=m.getClearAlpha(),U<1&&m.setClearColor(16777215,.5),m.clear();const Ne=m.toneMapping;m.toneMapping=Gi,cs(E,B,V),qe.updateMultisampleRenderTarget(pe),qe.updateRenderTargetMipmap(pe);let De=!1;for(let Xe=0,ze=k.length;Xe<ze;Xe++){const Be=k[Xe],Et=Be.object,hn=Be.geometry,rt=Be.material,Jn=Be.group;if(rt.side===ki&&Et.layers.test(V.layers)){const vt=rt.side;rt.side=Pn,rt.needsUpdate=!0,Wa(Et,B,V,hn,rt,Jn),rt.side=vt,rt.needsUpdate=!0,De=!0}}De===!0&&(qe.updateMultisampleRenderTarget(pe),qe.updateRenderTargetMipmap(pe)),m.setRenderTarget(Ee),m.setClearColor(ne,U),m.toneMapping=Ne}function cs(E,k,B){const V=k.isScene===!0?k.overrideMaterial:null;for(let O=0,ve=E.length;O<ve;O++){const Ee=E[O],Ne=Ee.object,De=Ee.geometry,Xe=V===null?Ee.material:V,ze=Ee.group;Ne.layers.test(B.layers)&&Wa(Ne,k,B,De,Xe,ze)}}function Wa(E,k,B,V,O,ve){E.onBeforeRender(m,k,B,V,O,ve),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(m,k,B,V,E,ve),O.transparent===!0&&O.side===ki&&O.forceSinglePass===!1?(O.side=Pn,O.needsUpdate=!0,m.renderBufferDirect(B,k,V,O,E,ve),O.side=wr,O.needsUpdate=!0,m.renderBufferDirect(B,k,V,O,E,ve),O.side=ki):m.renderBufferDirect(B,k,V,O,E,ve),E.onAfterRender(m,k,B,V,O,ve)}function qi(E,k,B){k.isScene!==!0&&(k=at);const V=We.get(E),O=p.state.lights,ve=p.state.shadowsArray,Ee=O.state.version,Ne=ie.getParameters(E,O.state,ve,k,B),De=ie.getProgramCacheKey(Ne);let Xe=V.programs;V.environment=E.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(E.isMeshStandardMaterial?R:Mt).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Xe===void 0&&(E.addEventListener("dispose",H),Xe=new Map,V.programs=Xe);let ze=Xe.get(De);if(ze!==void 0){if(V.currentProgram===ze&&V.lightsStateVersion===Ee)return To(E,Ne),ze}else Ne.uniforms=ie.getUniforms(E),E.onBuild(B,Ne,m),E.onBeforeCompile(Ne,m),ze=ie.acquireProgram(Ne,De),Xe.set(De,ze),V.uniforms=Ne.uniforms;const Be=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=ce.uniform),To(E,Ne),V.needsLights=Xa(E),V.lightsStateVersion=Ee,V.needsLights&&(Be.ambientLightColor.value=O.state.ambient,Be.lightProbe.value=O.state.probe,Be.directionalLights.value=O.state.directional,Be.directionalLightShadows.value=O.state.directionalShadow,Be.spotLights.value=O.state.spot,Be.spotLightShadows.value=O.state.spotShadow,Be.rectAreaLights.value=O.state.rectArea,Be.ltc_1.value=O.state.rectAreaLTC1,Be.ltc_2.value=O.state.rectAreaLTC2,Be.pointLights.value=O.state.point,Be.pointLightShadows.value=O.state.pointShadow,Be.hemisphereLights.value=O.state.hemi,Be.directionalShadowMap.value=O.state.directionalShadowMap,Be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Be.spotShadowMap.value=O.state.spotShadowMap,Be.spotLightMatrix.value=O.state.spotLightMatrix,Be.spotLightMap.value=O.state.spotLightMap,Be.pointShadowMap.value=O.state.pointShadowMap,Be.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=ze,V.uniformsList=null,ze}function ja(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=lc.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function To(E,k){const B=We.get(E);B.outputColorSpace=k.outputColorSpace,B.batching=k.batching,B.instancing=k.instancing,B.instancingColor=k.instancingColor,B.instancingMorph=k.instancingMorph,B.skinning=k.skinning,B.morphTargets=k.morphTargets,B.morphNormals=k.morphNormals,B.morphColors=k.morphColors,B.morphTargetsCount=k.morphTargetsCount,B.numClippingPlanes=k.numClippingPlanes,B.numIntersection=k.numClipIntersection,B.vertexAlphas=k.vertexAlphas,B.vertexTangents=k.vertexTangents,B.toneMapping=k.toneMapping}function du(E,k,B,V,O){k.isScene!==!0&&(k=at),qe.resetTextureUnits();const ve=k.fog,Ee=V.isMeshStandardMaterial?k.environment:null,Ne=T===null?m.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Cr,De=(V.isMeshStandardMaterial?R:Mt).get(V.envMap||Ee),Xe=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ze=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Be=!!B.morphAttributes.position,Et=!!B.morphAttributes.normal,hn=!!B.morphAttributes.color;let rt=Gi;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(rt=m.toneMapping);const Jn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,vt=Jn!==void 0?Jn.length:0,He=We.get(V),bo=p.state.lights;if(G===!0&&(ee===!0||E!==K)){const Sn=E===K&&V.id===L;ce.setState(V,E,Sn)}let _t=!1;V.version===He.__version?(He.needsLights&&He.lightsStateVersion!==bo.state.version||He.outputColorSpace!==Ne||O.isBatchedMesh&&He.batching===!1||!O.isBatchedMesh&&He.batching===!0||O.isInstancedMesh&&He.instancing===!1||!O.isInstancedMesh&&He.instancing===!0||O.isSkinnedMesh&&He.skinning===!1||!O.isSkinnedMesh&&He.skinning===!0||O.isInstancedMesh&&He.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&He.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&He.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&He.instancingMorph===!1&&O.morphTexture!==null||He.envMap!==De||V.fog===!0&&He.fog!==ve||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ce.numPlanes||He.numIntersection!==ce.numIntersection)||He.vertexAlphas!==Xe||He.vertexTangents!==ze||He.morphTargets!==Be||He.morphNormals!==Et||He.morphColors!==hn||He.toneMapping!==rt||$e.isWebGL2===!0&&He.morphTargetsCount!==vt)&&(_t=!0):(_t=!0,He.__version=V.version);let Ai=He.currentProgram;_t===!0&&(Ai=qi(V,k,O));let Lr=!1,fi=!1,Ro=!1;const qt=Ai.getUniforms(),bi=He.uniforms;if(Le.useProgram(Ai.program)&&(Lr=!0,fi=!0,Ro=!0),V.id!==L&&(L=V.id,fi=!0),Lr||K!==E){qt.setValue(F,"projectionMatrix",E.projectionMatrix),qt.setValue(F,"viewMatrix",E.matrixWorldInverse);const Sn=qt.map.cameraPosition;Sn!==void 0&&Sn.setValue(F,_e.setFromMatrixPosition(E.matrixWorld)),$e.logarithmicDepthBuffer&&qt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&qt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),K!==E&&(K=E,fi=!0,Ro=!0)}if(O.isSkinnedMesh){qt.setOptional(F,O,"bindMatrix"),qt.setOptional(F,O,"bindMatrixInverse");const Sn=O.skeleton;Sn&&($e.floatVertexTextures?(Sn.boneTexture===null&&Sn.computeBoneTexture(),qt.setValue(F,"boneTexture",Sn.boneTexture,qe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(qt.setOptional(F,O,"batchingTexture"),qt.setValue(F,"batchingTexture",O._matricesTexture,qe));const Co=B.morphAttributes;if((Co.position!==void 0||Co.normal!==void 0||Co.color!==void 0&&$e.isWebGL2===!0)&&oe.update(O,B,Ai),(fi||He.receiveShadow!==O.receiveShadow)&&(He.receiveShadow=O.receiveShadow,qt.setValue(F,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(bi.envMap.value=De,bi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),fi&&(qt.setValue(F,"toneMappingExposure",m.toneMappingExposure),He.needsLights&&Ao(bi,Ro),ve&&V.fog===!0&&te.refreshFogUniforms(bi,ve),te.refreshMaterialUniforms(bi,V,Q,$,pe),lc.upload(F,ja(He),bi,qe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(lc.upload(F,ja(He),bi,qe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&qt.setValue(F,"center",O.center),qt.setValue(F,"modelViewMatrix",O.modelViewMatrix),qt.setValue(F,"normalMatrix",O.normalMatrix),qt.setValue(F,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Sn=V.uniformsGroups;for(let Po=0,Lo=Sn.length;Po<Lo;Po++)if($e.isWebGL2){const Yi=Sn[Po];Me.update(Yi,Ai),Me.bind(Yi,Ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ai}function Ao(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Xa(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,k,B){We.get(E.texture).__webglTexture=k,We.get(E.depthTexture).__webglTexture=B;const V=We.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const B=We.get(E);B.__webglFramebuffer=k,B.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,B=0){T=E,C=k,b=B;let V=!0,O=null,ve=!1,Ee=!1;if(E){const De=We.get(E);De.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(F.FRAMEBUFFER,null),V=!1):De.__webglFramebuffer===void 0?qe.setupRenderTarget(E):De.__hasExternalTextures&&qe.rebindTextures(E,We.get(E.texture).__webglTexture,We.get(E.depthTexture).__webglTexture);const Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ee=!0);const ze=We.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[k])?O=ze[k][B]:O=ze[k],ve=!0):$e.isWebGL2&&E.samples>0&&qe.useMultisampledRTT(E)===!1?O=We.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?O=ze[B]:O=ze,x.copy(E.viewport),P.copy(E.scissor),se=E.scissorTest}else x.copy(W).multiplyScalar(Q).floor(),P.copy(J).multiplyScalar(Q).floor(),se=le;if(Le.bindFramebuffer(F.FRAMEBUFFER,O)&&$e.drawBuffers&&V&&Le.drawBuffers(E,O),Le.viewport(x),Le.scissor(P),Le.setScissorTest(se),ve){const De=We.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,De.__webglTexture,B)}else if(Ee){const De=We.get(E.texture),Xe=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,De.__webglTexture,B||0,Xe)}L=-1},this.readRenderTargetPixels=function(E,k,B,V,O,ve,Ee){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=We.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ne=Ne[Ee]),Ne){Le.bindFramebuffer(F.FRAMEBUFFER,Ne);try{const De=E.texture,Xe=De.format,ze=De.type;if(Xe!==li&&we.convert(Xe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ze===ka&&(Ce.has("EXT_color_buffer_half_float")||$e.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(ze!==xr&&we.convert(ze)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===yi&&($e.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-V&&B>=0&&B<=E.height-O&&F.readPixels(k,B,V,O,we.convert(Xe),we.convert(ze),ve)}finally{const De=T!==null?We.get(T).__webglFramebuffer:null;Le.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(E,k,B=0){const V=Math.pow(2,-B),O=Math.floor(k.image.width*V),ve=Math.floor(k.image.height*V);qe.setTexture2D(k,0),F.copyTexSubImage2D(F.TEXTURE_2D,B,0,0,E.x,E.y,O,ve),Le.unbindTexture()},this.copyTextureToTexture=function(E,k,B,V=0){const O=k.image.width,ve=k.image.height,Ee=we.convert(B.format),Ne=we.convert(B.type);qe.setTexture2D(B,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment),k.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,V,E.x,E.y,O,ve,Ee,Ne,k.image.data):k.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,V,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,Ee,k.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,V,E.x,E.y,Ee,Ne,k.image),V===0&&B.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(E,k,B,V,O=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=Math.round(E.max.x-E.min.x),Ee=Math.round(E.max.y-E.min.y),Ne=E.max.z-E.min.z+1,De=we.convert(V.format),Xe=we.convert(V.type);let ze;if(V.isData3DTexture)qe.setTexture3D(V,0),ze=F.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)qe.setTexture2DArray(V,0),ze=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const Be=F.getParameter(F.UNPACK_ROW_LENGTH),Et=F.getParameter(F.UNPACK_IMAGE_HEIGHT),hn=F.getParameter(F.UNPACK_SKIP_PIXELS),rt=F.getParameter(F.UNPACK_SKIP_ROWS),Jn=F.getParameter(F.UNPACK_SKIP_IMAGES),vt=B.isCompressedTexture?B.mipmaps[O]:B.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,vt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,vt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),B.isDataTexture||B.isData3DTexture?F.texSubImage3D(ze,O,k.x,k.y,k.z,ve,Ee,Ne,De,Xe,vt.data):V.isCompressedArrayTexture?F.compressedTexSubImage3D(ze,O,k.x,k.y,k.z,ve,Ee,Ne,De,vt.data):F.texSubImage3D(ze,O,k.x,k.y,k.z,ve,Ee,Ne,De,Xe,vt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Be),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Et),F.pixelStorei(F.UNPACK_SKIP_PIXELS,hn),F.pixelStorei(F.UNPACK_SKIP_ROWS,rt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Jn),O===0&&V.generateMipmaps&&F.generateMipmap(ze),Le.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?qe.setTextureCube(E,0):E.isData3DTexture?qe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?qe.setTexture2DArray(E,0):qe.setTexture2D(E,0),Le.unbindTexture()},this.resetState=function(){C=0,b=0,T=null,Le.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Xf?"display-p3":"srgb",n.unpackColorSpace=mt.workingColorSpace===ou?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Sb extends My{}Sb.prototype.isWebGL1Renderer=!0;class Kf{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=n,this.far=i}clone(){return new Kf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mb extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Eb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Fh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Sr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ry("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fn=new I;class Gc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=xi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=xi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=xi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=xi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=xi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new zn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gh extends Pr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Rs;const $o=new I,Cs=new I,Ps=new I,Ls=new Ve,qo=new Ve,Ey=new it,Il=new I,Yo=new I,Ul=new I,Ug=new Ve,xd=new Ve,kg=new Ve;class Fg extends kt{constructor(e=new Gh){if(super(),this.isSprite=!0,this.type="Sprite",Rs===void 0){Rs=new Qn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Eb(n,5);Rs.setIndex([0,1,2,0,2,3]),Rs.setAttribute("position",new Gc(i,3,0,!1)),Rs.setAttribute("uv",new Gc(i,2,3,!1))}this.geometry=Rs,this.material=e,this.center=new Ve(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),Ey.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-Ps.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;kl(Il.set(-.5,-.5,0),Ps,o,Cs,r,s),kl(Yo.set(.5,-.5,0),Ps,o,Cs,r,s),kl(Ul.set(.5,.5,0),Ps,o,Cs,r,s),Ug.set(0,0),xd.set(1,0),kg.set(1,1);let a=e.ray.intersectTriangle(Il,Yo,Ul,!1,$o);if(a===null&&(kl(Yo.set(-.5,.5,0),Ps,o,Cs,r,s),xd.set(0,1),a=e.ray.intersectTriangle(Il,Ul,Yo,!1,$o),a===null))return;const l=e.ray.origin.distanceTo($o);l<e.near||l>e.far||n.push({distance:l,point:$o.clone(),uv:$n.getInterpolation($o,Il,Yo,Ul,Ug,xd,kg,new Ve),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function kl(t,e,n,i,r,s){Ls.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(qo.x=s*Ls.x-r*Ls.y,qo.y=r*Ls.x+s*Ls.y):qo.copy(Ls),t.copy(e),t.x+=qo.x,t.y+=qo.y,t.applyMatrix4(Ey)}class wb extends un{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Zt,u=Zt,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Og extends zn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ns=new it,zg=new it,Fl=[],Bg=new os,Tb=new it,Ko=new en,Zo=new as;class Sd extends en{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Og(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Tb)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new os),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ns),Bg.copy(e.boundingBox).applyMatrix4(Ns),this.boundingBox.union(Bg)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new as),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ns),Zo.copy(e.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(Zo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Ko.geometry=this.geometry,Ko.material=this.material,Ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zo.copy(this.boundingSphere),Zo.applyMatrix4(i),e.ray.intersectsSphere(Zo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ns),zg.multiplyMatrices(i,Ns),Ko.matrixWorld=zg,Ko.raycast(e,Fl);for(let o=0,a=Fl.length;o<a;o++){const l=Fl[o];l.instanceId=s,l.object=this,n.push(l)}Fl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Og(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new wb(new Float32Array(r*this.count),r,this.count,K_,yi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class wy extends Pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hg=new I,Gg=new I,Vg=new it,Md=new au,Ol=new as;class Ab extends kt{constructor(e=new Qn,n=new wy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Hg.fromBufferAttribute(n,r-1),Gg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Hg.distanceTo(Gg);e.setAttribute("lineDistance",new Ti(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(r),Ol.radius+=s,e.ray.intersectsSphere(Ol)===!1)return;Vg.copy(r).invert(),Md.copy(e.ray).applyMatrix4(Vg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,h=new I,f=new I,g=this.isLineSegments?2:1,v=i.index,p=i.attributes.position;if(v!==null){const d=Math.max(0,o.start),y=Math.min(v.count,o.start+o.count);for(let m=d,S=y-1;m<S;m+=g){const C=v.getX(m),b=v.getX(m+1);if(c.fromBufferAttribute(p,C),u.fromBufferAttribute(p,b),Md.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||n.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let m=d,S=y-1;m<S;m+=g){if(c.fromBufferAttribute(p,m),u.fromBufferAttribute(p,m+1),Md.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||n.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Wg=new I,jg=new I;class bb extends Ab{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Wg.fromBufferAttribute(n,r),jg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Wg.distanceTo(jg);e.setAttribute("lineDistance",new Ti(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ty extends Pr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xg=new it,Vh=new au,zl=new as,Bl=new I;class Rb extends kt{constructor(e=new Qn,n=new Ty){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(r),zl.radius+=s,e.ray.intersectsSphere(zl)===!1)return;Xg.copy(r).invert(),Vh.copy(e.ray).applyMatrix4(Xg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let v=f,_=g;v<_;v++){const p=c.getX(v);Bl.fromBufferAttribute(h,p),$g(Bl,p,l,r,e,n,this)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,_=g;v<_;v++)Bl.fromBufferAttribute(h,v),$g(Bl,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $g(t,e,n,i,r,s,o){const a=Vh.distanceSqToPoint(t);if(a<n){const l=new I;Vh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Wh extends un{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Hl=new I,Gl=new I,Ed=new I,Vl=new $n;class Cb extends Qn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(ac*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},g=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:_,b:p,c:d}=Vl;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),Vl.getNormal(Ed),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,h[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const m=(y+1)%3,S=h[y],C=h[m],b=Vl[u[y]],T=Vl[u[m]],L=`${S}_${C}`,K=`${C}_${S}`;K in f&&f[K]?(Ed.dot(f[K].normal)<=s&&(g.push(b.x,b.y,b.z),g.push(T.x,T.y,T.z)),f[K]=null):L in f||(f[L]={index0:c[y],index1:c[m],normal:Ed.clone()})}}for(const v in f)if(f[v]){const{index0:_,index1:p}=f[v];Hl.fromBufferAttribute(a,_),Gl.fromBufferAttribute(a,p),g.push(Hl.x,Hl.y,Hl.z),g.push(Gl.x,Gl.y,Gl.z)}this.setAttribute("position",new Ti(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ks extends Pr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ty,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uu extends kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class Pb extends uu{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const wd=new it,qg=new I,Yg=new I;class Ay{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qf,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;qg.setFromMatrixPosition(e.matrixWorld),n.position.copy(qg),Yg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Yg),n.updateMatrixWorld(),wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Kg=new it,Qo=new I,Td=new I;class Lb extends Ay{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Qo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Qo),Td.copy(i.position),Td.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Td),i.updateMatrixWorld(),r.makeTranslation(-Qo.x,-Qo.y,-Qo.z),Kg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kg)}}class Nb extends uu{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Lb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Db extends Ay{constructor(){super(new my(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ib extends uu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Db}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ub extends uu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class kb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Zg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Zg(){return(typeof performance>"u"?Date:performance).now()}const Qg=new it;class Fb{constructor(e,n,i=0,r=1/0){this.ray=new au(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new $f,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Qg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qg),this}intersectObject(e,n=!0,i=[]){return jh(e,this,i,n),i.sort(Jg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)jh(e[r],this,i,n);return i.sort(Jg),i}}function Jg(t,e){return t.distance-e.distance}function jh(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)jh(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vf);const e0=new Set(["glass","slime_block","ice_block","magenta_glass"]),ae=16;function nt(t){const e=document.createElement("canvas");e.width=ae,e.height=ae;const n=e.getContext("2d");return t(n),e}const yt=(t,e,n,i)=>{t.fillStyle=i,t.fillRect(e,n,1,1)},ot=(t,e)=>{t.fillStyle=e,t.fillRect(0,0,ae,ae)};function St(t,e,n=.45){for(let i=0;i<ae;i++)for(let r=0;r<ae;r++)Math.random()<n&&yt(t,r,i,e[Math.random()*e.length|0])}function Ad(t,e,n,i,r){for(let s=0;s<e.length;s++)for(let o=0;o<5;o++)e[s]>>4-o&1&&yt(t,n+o,i+s,r)}function Xh(t,e,n){return nt(i=>{ot(i,t),St(i,[e,t,n],.3),i.fillStyle=e,i.fillRect(0,0,ae,1),i.fillRect(0,0,1,ae),i.fillStyle=n,i.fillRect(0,ae-1,ae,1),i.fillRect(ae-1,0,1,ae),i.fillStyle=e,i.fillRect(3,3,4,4)})}function Wl(t,e,n,i){return nt(r=>{ot(r,t),St(r,[t,n],.18),r.fillStyle=e,r.fillRect(0,0,ae,1),r.fillRect(0,ae-1,ae,1),r.fillRect(0,0,1,ae),r.fillRect(ae-1,0,1,ae);const s=(o,a)=>{yt(r,o,a-1,i),yt(r,o-1,a,i),yt(r,o+1,a,n),yt(r,o,a+1,n),yt(r,o,a,"#ffffff"),yt(r,o,a-2,e)};s(4,5),s(11,4),s(8,9),s(4,12),s(12,12)})}function Ds(t,e){return nt(n=>{ot(n,t),St(n,[t,e],.35),n.fillStyle=e;for(let i=1;i<ae;i+=4)n.fillRect(0,i,ae,1);for(let i=2;i<ae;i+=4)n.fillRect(i,0,1,ae)})}const Ob=nt(t=>{ot(t,"#5d9e3f"),St(t,["#54923a","#69ab48","#4f8a35","#62a544"],.55)}),t0=nt(t=>{ot(t,"#8a6843"),St(t,["#7d5d3a","#95734c","#74552f","#83613e"],.5)}),zb=nt(t=>{ot(t,"#8a6843"),St(t,["#7d5d3a","#95734c","#74552f"],.45);for(let e=0;e<ae;e++){const n=3+(Math.random()*2|0);for(let i=0;i<n;i++)yt(t,e,i,["#5d9e3f","#54923a","#69ab48"][Math.random()*3|0])}}),Bb=nt(t=>{ot(t,"#8c8c8c"),St(t,["#828282","#979797","#7a7a7a","#8f8f8f"],.5)}),Hb=nt(t=>{ot(t,"#7f7f7f");const e=[[1,1,5,4],[8,1,6,5],[1,6,4,5],[6,7,4,4],[11,7,4,6],[1,12,5,3],[7,12,3,3]];for(const[n,i,r,s]of e)t.fillStyle=["#9a9a9a","#909090","#a2a2a2"][Math.random()*3|0],t.fillRect(n,i,r,s);St(t,["#6e6e6e","#5f5f5f"],.18)}),Gb=nt(t=>{ot(t,"#7f7f7f");const e=[[1,1,5,4],[8,1,6,5],[1,6,4,5],[6,7,4,4],[11,7,4,6]];for(const[n,i,r,s]of e)t.fillStyle=["#9a9a9a","#909090"][Math.random()*2|0],t.fillRect(n,i,r,s);St(t,["#5f7d3f","#4d6b32","#6e6e6e"],.32)}),Vb=nt(t=>{ot(t,"#dcd29a"),St(t,["#d3c88d","#e4dba8","#cabd80"],.5)}),Wb=nt(t=>{ot(t,"#f3f8ff"),St(t,["#e6eefb","#ffffff","#dde8f7"],.4)}),jb=nt(t=>{for(let e=0;e<ae;e++)t.fillStyle=["#6e5230","#5b4426","#7a5d36","#634a2b"][Math.random()*4|0],t.fillRect(e,0,1,ae);for(let e=0;e<30;e++)yt(t,Math.random()*ae|0,Math.random()*ae|0,"#4d3a20");t.fillStyle="#4d3a20",t.fillRect(0,0,ae,1),t.fillRect(0,ae-1,ae,1)}),n0=nt(t=>{ot(t,"#b08a4f");for(const[e,n]of[[6,"#9c7740"],[4,"#a8824a"],[2,"#8a6736"]])t.strokeStyle=n,t.strokeRect(8-e,8-e,e*2,e*2);yt(t,7,7,"#7c5d31"),yt(t,8,8,"#7c5d31")}),Jo=nt(t=>{ot(t,"#b08a4f"),St(t,["#a8824a","#b88f55","#9c7740"],.3),t.fillStyle="#7c5d31";for(let e=3;e<ae;e+=4)t.fillRect(0,e,ae,1);for(const[e,n]of[[7,0],[3,4],[11,4],[5,8],[12,8],[8,12]])t.fillRect(e,n,1,3)}),Xb=nt(t=>{ot(t,"#3f7a32"),St(t,["#356b2a","#4a8c3a","#2f5f25","#449235"],.7);for(let e=0;e<10;e++)yt(t,Math.random()*ae|0,Math.random()*ae|0,"#274d1f")}),$b=nt(t=>{ot(t,"#b08a4f"),t.fillStyle="#7c5d31",t.fillRect(0,0,ae,2),t.fillRect(0,14,ae,2);const e=["#b6443a","#3f7ab6","#5fae46","#d6a738","#8a4fb6","#c96a2f"];let n=1;for(;n<15;){const i=1+(Math.random()*2|0);t.fillStyle=e[Math.random()*e.length|0],t.fillRect(n,3,i,10),yt(t,n,3,"#2a2a2a"),n+=i+1}}),qb=nt(t=>{ot(t,"#b08a4f"),t.fillStyle="#7c5d31";for(let e=0;e<=ae;e+=5)t.fillRect(e===ae?ae-1:e,0,1,ae),t.fillRect(0,e===ae?ae-1:e,ae,1);t.fillStyle="#5f4727",t.fillRect(6,6,4,4)}),Yb=nt(t=>{ot(t,"#b08a4f"),St(t,["#a8824a","#9c7740"],.25),t.fillStyle="#7c5d31",t.fillRect(2,3,5,1),t.fillRect(4,3,1,6),t.fillRect(9,8,5,1)}),i0=nt(t=>{ot(t,"#7c7c7c"),St(t,["#727272","#868686","#6a6a6a"],.45)}),Kb=nt(t=>{ot(t,"#7c7c7c"),St(t,["#727272","#868686"],.3),t.fillStyle="#2b2b2b",t.fillRect(3,6,10,7),t.fillStyle="#5a3320",t.fillRect(5,10,2,2),t.fillRect(9,10,2,2)}),Zb=nt(t=>{ot(t,"#9c4a36"),t.fillStyle="#b6b0a6";for(let e=3;e<ae;e+=4)t.fillRect(0,e,ae,1);for(let e=0;e<ae;e+=4){const n=e/4%2===0?0:8;t.fillRect((n+7)%ae,e,1,4),t.fillRect((n+15)%ae,e,1,4)}St(t,["#923f2e","#a85540"],.18)}),Qb=nt(t=>{t.clearRect(0,0,ae,ae),t.strokeStyle="#cfeefe",t.strokeRect(.5,.5,ae-1,ae-1),t.fillStyle="rgba(255,255,255,0.55)";for(let e=0;e<3;e++)t.fillRect(3+e,3+e,1,1);t.fillStyle="rgba(207,238,254,0.18)",t.fillRect(1,1,ae-2,ae-2)}),Jb=nt(t=>{ot(t,"#120a1f"),St(t,["#3a2357","#281a3d","#0d0716","#4a2f6e"],.4)}),eR=nt(t=>{ot(t,"#555555");const e=[[0,0,6,5],[7,1,5,4],[12,0,4,6],[1,6,4,5],[6,6,5,6],[12,7,4,5],[0,12,6,4],[11,12,5,4]];for(const[n,i,r,s]of e)t.fillStyle=["#3f3f3f","#6a6a6a","#4a4a4a","#5f5f5f"][Math.random()*4|0],t.fillRect(n,i,r,s)}),tR=nt(t=>{ot(t,"#f6d98a"),St(t,["#fff3c0","#e7c266","#ffe9a0"],.5);for(const[e,n]of[[3,4],[10,3],[6,9],[12,11],[2,12]])t.fillStyle="#c9a347",t.fillRect(e,n,2,2),yt(t,e,n,"#fff8d6")}),nR=nt(t=>{ot(t,"#241c12"),t.fillStyle="#7a5a2e",t.fillRect(7,6,2,9),t.fillStyle="#ffd24a",t.fillRect(6,2,4,4),t.fillStyle="#ff8c2a",t.fillRect(7,1,2,2),yt(t,7,3,"#fff3b0")}),iR=nt(t=>{ot(t,"#b1351f"),St(t,["#a52f1b","#bf3b22"],.18),t.fillStyle="#7a2415",t.fillRect(0,0,ae,2),t.fillRect(0,14,ae,2),t.fillStyle="#efe9df",t.fillRect(0,5,ae,7),Ad(t,[31,4,4,4,4],0,6,"#b1351f"),Ad(t,[17,25,21,19,17],6,6,"#b1351f"),Ad(t,[31,4,4,4,4],11,6,"#b1351f")}),r0=nt(t=>{ot(t,"#8f8f8f"),St(t,["#828282","#9a9a9a"],.35),t.fillStyle="#3a2c1c",t.beginPath(),t.arc(8,8,2.5,0,Math.PI*2),t.fill(),yt(t,8,8,"#1f1710")}),rR=nt(t=>{ot(t,"#c0392b"),St(t,["#b1331f","#cf432f"],.2),t.fillStyle="#f4f1ea",t.fillRect(1,1,ae-2,4),t.fillStyle="#7c5d31",t.fillRect(0,ae-1,ae,1)}),sR=nt(t=>{ot(t,"#7c5d31"),t.fillStyle="#c0392b",t.fillRect(0,0,ae,9),t.fillStyle="#f4f1ea",t.fillRect(0,0,5,4),St(t,["#6e5230"],.12)}),oR=nt(t=>{ot(t,"#e08a26"),t.fillStyle="#c0721c";for(let e=2;e<ae;e+=4)t.fillRect(e,0,1,ae);t.fillStyle="#3a2410",t.fillRect(3,4,3,2),t.fillRect(10,4,3,2),t.fillRect(4,9,8,2),yt(t,6,11,"#3a2410"),yt(t,9,11,"#3a2410")}),s0=nt(t=>{ot(t,"#d98220"),t.fillStyle="#c0721c";for(let e=2;e<ae;e+=4)t.fillRect(e,0,1,ae);t.fillStyle="#5f7d2e",t.fillRect(7,6,3,3)}),aR=nt(t=>{ot(t,"#c9b54e"),St(t,["#bda743","#d6c45e"],.5);for(let e=0;e<16;e++)yt(t,Math.random()*ae|0,Math.random()*ae|0,"#9c8a37")});function Ft(t,e=[],n=.4,i){return nt(r=>{ot(r,t),e.length&&St(r,e,n),i==null||i(r)})}function Va(t,e){return nt(n=>{ot(n,"#8c8c8c"),St(n,["#828282","#979797","#7a7a7a"],.5);for(const[i,r]of[[3,4],[10,3],[5,10],[12,11],[7,7]])n.fillStyle=t,n.fillRect(i,r,2,2),yt(n,i,r,e),yt(n,i+1,r+1,e)})}const lR=Xh("#9aa6b2","#c4ccd6","#6f7a86"),cR=Ft("#3a3f44",["#33373c","#42474d"],.3,t=>{t.fillStyle="#16181a",t.beginPath(),t.arc(8,9,4,0,7),t.fill(),t.fillStyle="#0a0a0a",t.beginPath(),t.arc(8,9,2,0,7),t.fill(),yt(t,7,8,"#5fd0ff"),t.fillStyle="#ff3b3b",t.fillRect(12,2,2,2)}),uR=Ft("#2a0d0d",["#3a1414"],.3,t=>{t.fillStyle="#ff2e2e";for(let e=2;e<ae;e+=4)t.fillRect(0,e,ae,1),t.fillRect(e,0,1,ae)}),dR=Ft("#6fce5a",["#5fbf4d","#7fd96a"],.3,t=>{t.strokeStyle="#4fae3f",t.strokeRect(2.5,2.5,11,11),t.strokeRect(5.5,5.5,5,5)}),hR=Ft("#a9d6f5",["#bfe2fb","#92c4ec"],.3,t=>{t.strokeStyle="#7fb6e0",t.beginPath(),t.moveTo(2,3),t.lineTo(7,8),t.lineTo(5,13),t.moveTo(11,2),t.lineTo(9,9),t.lineTo(13,14),t.stroke()}),fR=Ft("#ff2ec4",["#ff5cd0","#d61fa6"],.3),pR=Ft("#f2f6ff",["#e6ecfb","#ffffff"],.5),mR=Ft("#b21f1f",["#9c1a1a"],.25,t=>{t.fillStyle="#f4d03f",t.fillRect(0,0,ae,2),t.fillRect(0,14,ae,2),t.fillRect(2,7,12,2),t.fillStyle="#bff7ff",t.beginPath(),t.arc(8,8,2.6,0,7),t.fill(),yt(t,8,8,"#ffffff")}),gR=Ft("#2f6fd0",["#2356a8"],.25,t=>{t.fillStyle="#ffffff",t.beginPath(),t.moveTo(8,2),t.lineTo(12,7),t.lineTo(8,12),t.lineTo(4,7),t.closePath(),t.fill(),t.fillStyle="#c0392b",t.fillRect(0,13,ae,3)}),vR=Ft("#4caf50",["#3c9140","#5fbf52","#2f7d33"],.55),_R=Ft("#9aa6b2",["#c4ccd6","#6f7a86"],.3,t=>{t.fillStyle="#3a6bd6",t.fillRect(5,2,6,4),t.fillRect(7,6,2,8)}),yR=Va("#2b2b2b","#444444"),xR=Va("#c9a27a","#e0c4a0"),SR=Va("#f4d03f","#fff0a0"),MR=Va("#6fdedb","#bff7f4"),ER=Va("#2fae57","#7fe6a0"),wR=Ft("#5d9e3f",["#54923a","#69ab48"],.45,t=>{t.fillStyle="#2f7d33",t.fillRect(7,8,1,6),t.fillStyle="#c0392b",t.fillRect(6,4,4,4),yt(t,7,5,"#ffd24a")}),TR=Ft("#ffd98a",["#ffe9a0","#e7c266"],.4,t=>{t.strokeStyle="#b8862f",t.strokeRect(.5,.5,15,15),t.strokeRect(4.5,4.5,7,7)}),AR=Ft("#c0392b",["#a52f22"],.2,t=>{t.fillStyle="#f4f1ea";for(const[e,n]of[[2,2],[8,3],[12,6],[4,9],[10,11],[6,13]])t.fillRect(e,n,3,3)}),bR=Ft("#d9b53b",["#c9a52f","#e6c455"],.4,t=>{t.fillStyle="#9c7f24";for(let e=2;e<ae;e+=4)t.fillRect(0,e,ae,1);t.fillRect(0,0,ae,2),t.fillRect(0,14,ae,2)}),RR=Ft("#9be000",["#8ad000","#aef21a"],.3,t=>{t.fillStyle="#111111",t.beginPath(),t.arc(8,8,2,0,7),t.fill();for(const e of[-Math.PI/2,Math.PI/6,Math.PI*5/6])t.beginPath(),t.moveTo(8,8),t.arc(8,8,6,e-.5,e+.5),t.closePath(),t.fill()}),CR=Ft("#b1351f",["#a52f1b"],.2,t=>{t.fillStyle="#7a2415";for(let e=2;e<ae;e+=5)t.fillRect(e,2,3,12);t.fillStyle="#3a2c1c",t.fillRect(0,0,ae,2),yt(t,4,1,"#ffd24a")}),PR=Ft("#5a1f1f",["#4a1818","#6e2626","#3a1212"],.55),LR=Ft("#5a4632",["#4a3a2a","#6a5440"],.4,t=>{t.fillStyle="#2f241a",t.beginPath(),t.arc(5,6,2,0,7),t.arc(11,9,2,0,7),t.fill()}),NR=Ft("#ff7a1a",["#ff9a3a","#e0560a"],.4,t=>{t.fillStyle="#b33a08";for(const[e,n]of[[3,3],[9,5],[6,10],[12,11]])t.fillRect(e,n,3,2)}),DR=Ft("#ece7df",["#f5f1ea","#ddd6cb"],.35),IR=Ft("#f0f0f0",["#e4e4e4","#fafafa"],.3,t=>{t.strokeStyle="#d0d0d0",t.strokeRect(.5,.5,15,15)}),UR=nt(t=>{t.clearRect(0,0,ae,ae),t.strokeStyle="#ff7ae0",t.strokeRect(.5,.5,ae-1,ae-1),t.fillStyle="rgba(255,46,196,0.25)",t.fillRect(1,1,ae-2,ae-2)}),Te=t=>({top:t,bottom:t,side:t}),vi={grass:{label:"Grass",top:Ob,bottom:t0,side:zb},dirt:{label:"Dirt",...Te(t0)},stone:{label:"Stone",...Te(Bb)},cobblestone:{label:"Cobblestone",...Te(Hb)},mossy_cobblestone:{label:"Mossy Cobble",...Te(Gb)},sand:{label:"Sand",...Te(Vb)},snow:{label:"Snow",...Te(Wb)},oak_log:{label:"Oak Wood",top:n0,bottom:n0,side:jb},oak_planks:{label:"Oak Planks",...Te(Jo)},leaves:{label:"Oak Leaves",...Te(Xb)},bookshelf:{label:"Bookshelf",top:Jo,bottom:Jo,side:$b},crafting_table:{label:"Crafting Table",top:qb,bottom:Jo,side:Yb},furnace:{label:"Furnace",top:i0,bottom:i0,side:Kb},brick:{label:"Bricks",...Te(Zb)},glass:{label:"Glass",...Te(Qb),transparent:!0},diamond_block:{label:"Diamond Block",...Te(Wl("#6fdedb","#3f9d9a","#7fdedb","#eaffff"))},gold_block:{label:"Gold Block",...Te(Xh("#f4d03f","#fff0a0","#c79a1e"))},iron_block:{label:"Iron Block",...Te(Xh("#d8d8d8","#f4f4f4","#a8a8a8"))},emerald_block:{label:"Emerald Block",...Te(Wl("#2fae57","#1d7d3c","#43c96d","#d6ffe6"))},redstone_block:{label:"Redstone Block",...Te(Wl("#a51d12","#6e120a","#d6362a","#ffd0c0"))},lapis_block:{label:"Lapis Block",...Te(Wl("#1f49a8","#143173","#3a6bd6","#cfe0ff"))},obsidian:{label:"Obsidian",...Te(Jb)},bedrock:{label:"Bedrock",...Te(eR),unbreakable:!0},glowstone:{label:"Glowstone",...Te(tR),emissive:"#ffe08a",emissiveIntensity:.9},torch:{label:"Torch",...Te(nR),emissive:"#ffb24a",emissiveIntensity:1},tnt:{label:"TNT",top:r0,bottom:r0,side:iR},bed:{label:"Bed",top:rR,bottom:Jo,side:sR},pumpkin:{label:"Pumpkin",top:s0,bottom:s0,side:oR},sponge:{label:"Sponge",...Te(aR)},wool_white:{label:"White Wool",...Te(Ds("#e9ecef","#cfd4da"))},wool_red:{label:"Red Wool",...Te(Ds("#c0392b","#9c2d22"))},wool_blue:{label:"Blue Wool",...Te(Ds("#2f6fd0","#2356a8"))},wool_green:{label:"Green Wool",...Te(Ds("#4caf50","#3c9140"))},wool_yellow:{label:"Yellow Wool",...Te(Ds("#f4d03f","#d4af1e"))},wool_black:{label:"Black Wool",...Te(Ds("#3a3f44","#26292d"))},steel_block:{label:"Steel Block",...Te(lR)},security_camera:{label:"Security Cam",...Te(cR)},laser_block:{label:"Laser Block",...Te(uR),emissive:"#ff2e2e",emissiveIntensity:.8},slime_block:{label:"Slime Block",...Te(dR),opacity:.82,bouncy:!0},ice_block:{label:"Ice",...Te(hR),opacity:.72,slippery:!0},neon_block:{label:"Neon Block",...Te(fR),emissive:"#ff2ec4",emissiveIntensity:.7},cloud_block:{label:"Cloud",...Te(pR)},ironman_block:{label:"Iron Man Block",...Te(mR)},cap_block:{label:"Captain Block",...Te(gR)},hulk_block:{label:"Hulk Block",...Te(vR)},thor_block:{label:"Thor Block",...Te(_R)},coal_ore:{label:"Coal Ore",...Te(yR)},iron_ore:{label:"Iron Ore",...Te(xR)},gold_ore:{label:"Gold Ore",...Te(SR)},diamond_ore:{label:"Diamond Ore",...Te(MR)},emerald_ore:{label:"Emerald Ore",...Te(ER)},rose_block:{label:"Rose",...Te(wR)},lamp_block:{label:"Lamp",...Te(TR),emissive:"#ffd98a",emissiveIntensity:.9},mushroom_block:{label:"Mushroom",...Te(AR)},hay_block:{label:"Hay Bale",...Te(bR)},nuke_block:{label:"Nuke",...Te(RR),emissive:"#aef21a",emissiveIntensity:.6},dynamite_block:{label:"Dynamite",...Te(CR)},netherrack:{label:"Netherrack",...Te(PR)},soul_sand:{label:"Soul Sand",...Te(LR)},lava_block:{label:"Lava",...Te(NR),emissive:"#ff6a10",emissiveIntensity:.8},quartz_block:{label:"Quartz",...Te(DR)},rainbow_block:{label:"Rainbow Block",...Te(IR)},magenta_glass:{label:"Magenta Glass",...Te(UR),transparent:!0}},Zf=Object.keys(vi),o0=new Map;function kR(t){let e=o0.get(t);return e||(e=new Wh(t),e.magFilter=Zt,e.minFilter=kh,e.colorSpace=Wn,e.anisotropy=4,o0.set(t,e)),e}function bd(t,e){const n=kR(t),i=e.opacity!=null,r=new Ks({map:n,transparent:e.transparent||i,opacity:e.opacity??1,alphaTest:e.transparent&&!i?.1:0});return e.emissive&&(r.emissive=new Ge(e.emissive),r.emissiveMap=n,r.emissiveIntensity=e.emissiveIntensity??1),r}const a0=new Map;function cc(t){let e=a0.get(t);if(!e){const n=vi[t],i=bd(n.side,n),r=bd(n.top,n),s=bd(n.bottom,n);e=[i,i,r,s,i,i],a0.set(t,e)}return e}const l0=new Map;function FR(t){let e=l0.get(t);return e||(e=vi[t].side.toDataURL(),l0.set(t,e)),e}const Rd=[{id:"xray",name:"X-Ray",emoji:"👁️",desc:"See through dirt & stone to spot ores."},{id:"killaura",name:"KillAura",emoji:"⚔️",desc:"Auto-attack any mob that comes close."},{id:"fly",name:"Creative Fly",emoji:"🕊️",desc:"Fly freely — Space up, Shift down (toggle with F)."},{id:"speed",name:"Speed",emoji:"💨",desc:"Run much, much faster."},{id:"superjump",name:"Super Jump",emoji:"🦘",desc:"Leap several blocks into the air."},{id:"noclip",name:"No-Clip",emoji:"👻",desc:"Walk straight through walls."},{id:"reach",name:"Super Reach",emoji:"🤏",desc:"Mine and place from far away."},{id:"nuker",name:"Nuker",emoji:"🪓",desc:"Smash a whole cluster of blocks at once."},{id:"jetpack",name:"Jetpack",emoji:"🚀",desc:"Hold Space to rocket upward."},{id:"fullbright",name:"Fullbright",emoji:"💡",desc:"Always bright — night never falls dark."}],$h=[{id:"realism",name:"Realism",emoji:"🌅",desc:"Real sun shadows, filmic light & richer color."},{id:"mechanics",name:"Real Mechanics",emoji:"🪓",desc:"Trees topple when chopped; sand & gravel fall."},{id:"security",name:"Security",emoji:"🛡️",desc:"Steel, cameras & glowing lasers."},{id:"special",name:"Special Blocks",emoji:"✨",desc:"Bouncy slime, slippery ice, neon & clouds."},{id:"heroes",name:"Super Heroes",emoji:"🦸",desc:"Hero blocks + super speed & jump."},{id:"mobs",name:"Mobs",emoji:"🧟",desc:"Zombies & pigs roam the world."},{id:"ores",name:"More Ores",emoji:"⛏️",desc:"Ores buried underground (try with X-Ray)."},{id:"decorations",name:"Decorations",emoji:"🌹",desc:"Flowers, lamps, mushrooms & hay."},{id:"explosives",name:"Mega Explosives",emoji:"💣",desc:"Nukes & dynamite — much bigger blasts."},{id:"weather",name:"Weather",emoji:"🌧️",desc:"Rain pours across the whole world."},{id:"nether",name:"Nether",emoji:"🔥",desc:"Netherrack, lava, soul sand & a red sky."},{id:"rainbow",name:"Rainbow",emoji:"🌈",desc:"Colour-cycling rainbow blocks."},{id:"tools",name:"Tools+",emoji:"🔨",desc:"Diamond pickaxe, sword & a 3×3 hammer."}],by={security:["steel_block","security_camera","laser_block"],special:["slime_block","ice_block","neon_block","cloud_block"],heroes:["ironman_block","cap_block","hulk_block","thor_block"],mobs:[],ores:["coal_ore","iron_ore","gold_ore","diamond_ore","emerald_ore"],decorations:["rose_block","lamp_block","mushroom_block","hay_block"],explosives:["nuke_block","dynamite_block"],weather:[],nether:["netherrack","soul_sand","lava_block","quartz_block"],rainbow:["rainbow_block","magenta_glass"],tools:[]},OR={tools:["diamond_pickaxe","diamond_sword","hammer"]};function va(t){const e=document.createElement("canvas");e.width=16,e.height=16;const n=e.getContext("2d");return t(n),e.toDataURL()}const _a="#7a5a2e";function c0(t){return va(e=>{e.strokeStyle=t,e.lineWidth=2,e.beginPath(),e.moveTo(2,5),e.quadraticCurveTo(8,1,14,5),e.stroke(),e.fillStyle=_a,e.fillRect(7,4,2,11)})}function u0(t){return va(e=>{e.fillStyle=t,e.fillRect(7,1,2,9),e.fillStyle="#9aa0a8",e.fillRect(6,9,4,1),e.fillStyle=_a,e.fillRect(7,10,2,4)})}const zR={pickaxe:c0("#c2c6cc"),diamond_pickaxe:c0("#6fdedb"),sword:u0("#dfe3e8"),diamond_sword:u0("#6fdedb"),axe:va(t=>{t.fillStyle="#c2c6cc",t.fillRect(7,2,6,5),t.fillRect(6,3,1,3),t.fillStyle=_a,t.fillRect(8,4,2,11)}),shovel:va(t=>{t.fillStyle="#c2c6cc",t.fillRect(5,2,6,5),t.fillStyle=_a,t.fillRect(7,6,2,9)}),hammer:va(t=>{t.fillStyle="#9aa0a8",t.fillRect(3,2,10,5),t.fillStyle="#c2c6cc",t.fillRect(4,3,8,2),t.fillStyle=_a,t.fillRect(7,6,2,9)})},BR={pickaxe:"Pickaxe",sword:"Sword",axe:"Axe",shovel:"Shovel",diamond_pickaxe:"Diamond Pickaxe",diamond_sword:"Diamond Sword",hammer:"Hammer (3×3)"};function HR(t){return{id:t,name:BR[t],tool:t,icon:zR[t],areaBreak:t==="hammer"}}function GR(t){return{id:t,name:vi[t].label,block:t,icon:FR(t)}}const VR=["pickaxe","sword","axe","shovel"],Bi=new Map;for(const t of["pickaxe","sword","axe","shovel","diamond_pickaxe","diamond_sword","hammer"])Bi.set(t,HR(t));for(const t of Zf)Bi.set(t,GR(t));const WR=new Set(Object.values(by).flat()),jR=Zf.filter(t=>!WR.has(t));function XR(t){const e=[];for(const n of VR)e.push(Bi.get(n));if(t.has("tools"))for(const n of OR.tools)e.push(Bi.get(n));for(const n of jR)e.push(Bi.get(n));for(const n of $h)if(t.has(n.id))for(const i of by[n.id]??[])e.push(Bi.get(i));return e}const Ry=["pickaxe","sword","tnt","grass","dirt","stone","oak_planks","glass","diamond_block"],Cy=new Si(1,1,1);function pn(t,e,n,i,r=0,s=0,o=0){const a=new en(Cy,new Ks({color:i,depthTest:!1}));return a.scale.set(t,e,n),a.position.set(r,s,o),a.renderOrder=999,a}function $R(t){const e=new Mi,n=t==="diamond_pickaxe"||t==="diamond_sword"?"#6fdedb":"#b9bdc4";return t==="pickaxe"||t==="diamond_pickaxe"?(e.add(pn(.07,.75,.07,"#7a5a2e")),e.add(pn(.55,.12,.08,n,0,.34,0)),e.add(pn(.12,.12,.08,"#9aa0a8",-.27,.3,0)),e.add(pn(.12,.12,.08,"#9aa0a8",.27,.3,0))):t==="sword"||t==="diamond_sword"?(e.add(pn(.07,.2,.07,"#5a3b22",0,-.22,0)),e.add(pn(.26,.06,.07,"#8a6a3a",0,-.09,0)),e.add(pn(.09,.62,.04,n,0,.24,0))):t==="axe"?(e.add(pn(.07,.75,.07,"#7a5a2e")),e.add(pn(.24,.26,.08,"#b9bdc4",.14,.3,0)),e.add(pn(.06,.26,.08,"#9aa0a8",.01,.3,0))):t==="hammer"?(e.add(pn(.07,.7,.07,"#7a5a2e")),e.add(pn(.42,.26,.26,"#9aa0a8",0,.34,0)),e.add(pn(.44,.12,.28,"#c2c6cc",0,.34,0))):(e.add(pn(.07,.7,.07,"#7a5a2e")),e.add(pn(.22,.24,.05,"#b9bdc4",0,.42,0))),e}function qR(t){if(t.tool){const r=$R(t.tool);return r.traverse(s=>s.renderOrder=999),r}const e=cc(t.block).map(r=>{const s=r.clone();return s.depthTest=!1,s}),n=new en(Cy,e);n.renderOrder=999;const i=new Mi;return i.add(n),i}const In=8,YR=5,aa=-8,d0=6,Cd=18,oo={x:0,y:0,z:0};function Is(t,e,n=0){let i=(t|0)*374761393+(e|0)*668265263+n*2246822519;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967295}class KR{constructor(){q(this,"map",new Map);q(this,"loaded",new Set);q(this,"type","normal");q(this,"mods",new Set);q(this,"renderDist",YR)}key(e,n,i){return`${e},${n},${i}`}get(e,n,i){return this.map.get(this.key(e,n,i))}set(e,n,i,r){this.map.set(this.key(e,n,i),r)}remove(e,n,i){this.map.delete(this.key(e,n,i))}reset(){this.map.clear(),this.loaded.clear()}setRenderDistance(e){this.renderDist=Math.max(1,Math.round(e))}isSolid(e,n,i){return this.map.has(this.key(e,n,i))}isOpaque(e,n,i){const r=this.get(e,n,i);return r!==void 0&&!e0.has(r)}isHidden(e,n,i){const r=this.get(e,n,i);return r===void 0?!0:e0.has(r)?!1:this.isOpaque(e+1,n,i)&&this.isOpaque(e-1,n,i)&&this.isOpaque(e,n+1,i)&&this.isOpaque(e,n-1,i)&&this.isOpaque(e,n,i+1)&&this.isOpaque(e,n,i-1)}surfaceHeight(e,n){if(this.type!=="normal")return 0;const i=Math.max(Math.abs(e),Math.abs(n));let r=Math.sin(e*.18)*Math.cos(n*.16)*2.3;r+=Math.sin((e+n)*.07)*1.7,r+=(Is(e,n,7)-.5)*1.4,r+=1.5;const s=Math.min(1,Math.max(0,(i-d0)/6));return Math.round(r*s)}init(e,n){this.type=e,this.mods=n,this.streamAround(0,0),e==="skyblock"?this.skyblockIsland():e==="oneblock"?this.set(oo.x,oo.y,oo.z,"grass"):this.showroom()}chunkKey(e,n){return`${e},${n}`}isSpawnChunk(e,n){return Math.abs(e)<=1&&Math.abs(n)<=1}streamAround(e,n){const i=Math.floor(e/In),r=Math.floor(n/In);let s=!1;for(let o=i-this.renderDist;o<=i+this.renderDist;o++)for(let a=r-this.renderDist;a<=r+this.renderDist;a++)this.ensureChunk(o,a)&&(s=!0);for(const o of this.loaded){const[a,l]=o.split(",").map(Number);this.isSpawnChunk(a,l)||(Math.abs(a-i)>this.renderDist||Math.abs(l-r)>this.renderDist)&&(this.unloadChunk(a,l),s=!0)}return s}ensureChunk(e,n){const i=this.chunkKey(e,n);if(this.loaded.has(i))return!1;this.loaded.add(i);const r=e*In,s=n*In;for(let o=r;o<r+In;o++)for(let a=s;a<s+In;a++)this.column(o,a);return!0}unloadChunk(e,n){const i=e*In,r=n*In;for(let s=i;s<i+In;s++)for(let o=r;o<r+In;o++)for(let a=aa;a<=aa+40;a++)this.remove(s,a,o);this.loaded.delete(this.chunkKey(e,n))}column(e,n){if(this.type==="skyblock"||this.type==="oneblock")return;const i=this.mods.has("nether"),r=this.surfaceHeight(e,n);for(let s=r;s>=aa;s--)if(s===aa)this.set(e,s,n,"bedrock");else if(s===r)this.set(e,s,n,i?"netherrack":"grass");else if(s>=r-3)this.set(e,s,n,i?"soul_sand":"dirt");else if(this.mods.has("ores")&&Is(e,n,s*131+3)<.08){const o=["coal_ore","coal_ore","iron_ore","iron_ore","gold_ore","diamond_ore","emerald_ore"];this.set(e,s,n,o[Math.floor(Is(e,n,s*131+4)*o.length)])}else this.set(e,s,n,i&&Is(e,n,s*131+5)<.05?"lava_block":"stone");i&&Is(e,n,9)<.04&&this.set(e,r,n,"lava_block"),this.type==="normal"&&!i&&this.get(e,r,n)==="grass"&&Math.max(Math.abs(e),Math.abs(n))>d0+1&&Is(e,n,11)<.02&&this.tree(e,n,r+1)}tree(e,n,i){for(let s=0;s<4;s++)this.set(e,i+s,n,"oak_log");for(let s=1;s<=2;s++)for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)Math.abs(o)===2&&Math.abs(a)===2||this.leafIfEmpty(e+o,i+4-2+s,n+a);for(let s=-1;s<=1;s++)for(let o=-1;o<=1;o++)Math.abs(s)===1&&Math.abs(o)===1||this.leafIfEmpty(e+s,i+4+1,n+o)}leafIfEmpty(e,n,i){this.isSolid(e,n,i)||this.set(e,n,i,"leaves")}skyblockIsland(){for(let e=-2;e<=2;e++)for(let n=-2;n<=2;n++)this.set(e,0,n,"grass"),this.set(e,-1,n,"dirt"),this.set(e,-2,n,"dirt");this.tree(-2,-2,1),this.set(2,1,2,"crafting_table"),this.set(2,1,-2,"bed");for(let e=6;e<=8;e++)for(let n=-1;n<=1;n++)this.set(e,0,n,"stone");this.set(7,1,0,"diamond_ore")}showroom(){Zf.forEach((e,n)=>{const i=n%9,r=Math.floor(n/9);this.set(i-4,1,-2-r,e)});for(let e=0;e<=1;e++)for(let n=0;n<=1;n++)for(let i=1;i<=2;i++)this.set(e-1,i,n+2,"diamond_block");for(let e=1;e<=4;e++)this.set(3,e,2,"oak_log");for(let e=4;e<=6;e++)for(let n=1;n<=3;n++)this.set(e,n,2,"oak_planks");this.set(4,4,2,"glowstone");for(let e=-1;e<=1;e++)for(let n=-1;n<=1;n++)this.set(e-5,1,n+5,"tnt");this.set(-5,2,5,"tnt"),this.set(6,1,6,"bed"),this.set(5,1,6,"torch"),this.set(7,1,6,"torch")}}const Zs=9,Gt=.3,jl=1.8,Pd=1.62,ZR=28,QR=4.8,JR=8,h0=9,f0=9.2,p0=6,Us=.001,m0=16,g0=38,v0=130,e2=470,t2=120,_0=1.6,uc=3.4,Xl=240,ea={tnt:uc,dynamite_block:5,nuke_block:9},y0=["grass","dirt","stone","cobblestone","oak_log","sand","coal_ore","iron_ore","oak_planks","gold_ore","mossy_cobblestone","snow","diamond_ore","glowstone","emerald_ore"],n2=new Set(["grass","dirt","stone","cobblestone","mossy_cobblestone","sand","snow","netherrack","soul_sand"]),Ld=280,i2=new Set(["sand"]),r2=24,x0=360,S0={torch:{color:16757322,intensity:9,dist:10,flicker:!0},glowstone:{color:16769162,intensity:12,dist:13},lamp_block:{color:16767370,intensity:10,dist:12},lava_block:{color:16738832,intensity:8,dist:9,flicker:!0},neon_block:{color:16723652,intensity:6,dist:8},laser_block:{color:16723502,intensity:6,dist:7},nuke_block:{color:11465242,intensity:5,dist:7}},M0=14,Dn=20,E0=17,s2=2.4,ta=3.2,o2=1.4,a2=2,l2=.4,c2=2,u2=.8,d2=1.15,h2=30,$l="mc-from-kmm-deathban";class f2{constructor(e,n,i={mods:new Set,hacks:new Set}){q(this,"canvas");q(this,"hud");q(this,"mods");q(this,"hacks");q(this,"worldType");q(this,"hotbar");q(this,"inventoryOpen",!1);q(this,"hacksOpen",!1);q(this,"chunkX",NaN);q(this,"chunkZ",NaN);q(this,"oneBlockCount",0);q(this,"speedMul",1);q(this,"jumpVel",f0);q(this,"reach",p0);q(this,"noclip",!1);q(this,"jetpack",!1);q(this,"fullbright",!1);q(this,"xray",!1);q(this,"nuker",!1);q(this,"killaura",!1);q(this,"op",!1);q(this,"mode");q(this,"spectator",!1);q(this,"hardcore",!1);q(this,"deathban",!1);q(this,"damageable",!1);q(this,"health",Dn);q(this,"dead",!1);q(this,"timeSinceHurt",ta);q(this,"regenTimer",0);q(this,"lavaTimer",0);q(this,"mobDmgCool",0);q(this,"mobs",[]);q(this,"rain");q(this,"rainPos",[]);q(this,"auraCool",0);q(this,"renderer");q(this,"scene",new Mb);q(this,"camera");q(this,"world",new KR);q(this,"clock",new kb);q(this,"raycaster",new Fb);q(this,"boxGeo",new Si(1,1,1));q(this,"meshes",[]);q(this,"highlight");q(this,"sun");q(this,"hemi");q(this,"ambient");q(this,"realism",!1);q(this,"sunTarget",new kt);q(this,"sunDir",new I(0,1,0));q(this,"mechanics",!1);q(this,"falling",[]);q(this,"blockLights",[]);q(this,"lightSources",[]);q(this,"peers",new Map);q(this,"remoteEdits",[]);q(this,"stateCool",0);q(this,"stars");q(this,"sunSprite");q(this,"heldGroup",new Mi);q(this,"heldBasePos",new I);q(this,"heldBaseRot",new hi);q(this,"swingT",999);q(this,"primed",[]);q(this,"particles");q(this,"pool",[]);q(this,"pos",new I(.5,1,9.5));q(this,"vel",new I);q(this,"yaw",0);q(this,"pitch",0);q(this,"onGround",!1);q(this,"fly",!1);q(this,"selected",0);q(this,"locked",!1);q(this,"touch",!1);q(this,"keys",new Set);q(this,"time",.12);q(this,"daySpeed",1);q(this,"sensMul",1);q(this,"fogNear",m0);q(this,"fogFar",g0);q(this,"elapsed",0);q(this,"shakeT",0);q(this,"shakeDur",0);q(this,"shakeMag",0);q(this,"timeReport",0);q(this,"fpsAccum",0);q(this,"fpsFrames",0);q(this,"raf",0);q(this,"disposed",!1);q(this,"_xrayMat");q(this,"onResize",()=>this.resize());q(this,"onKeyDown",e=>this.keyDown(e));q(this,"onKeyUp",e=>this.keys.delete(e.code));q(this,"onMouseMove",e=>this.mouseMove(e));q(this,"onMouseDown",e=>this.mouseDown(e));q(this,"onWheel",e=>{e.preventDefault(),this.setSelected(this.selected+(e.deltaY>0?1:-1))});q(this,"onClick",()=>{this.locked||this.canvas.requestPointerLock()});q(this,"onContextMenu",e=>e.preventDefault());q(this,"onPointerLock",()=>{this.locked=document.pointerLockElement===this.canvas,this.locked||this.keys.clear(),this.hud.onLock(this.locked)});q(this,"loop",()=>{if(this.disposed)return;this.raf=requestAnimationFrame(this.loop);const e=Math.min(this.clock.getDelta(),.05);if(this.elapsed+=e,this.time=(this.time+e/t2*this.daySpeed)%1,(this.locked||this.touch)&&this.update(e),this.drainRemoteEdits(),this.updatePeers(e),this.sendState(e),this.streamChunks(),this.updateSurvival(e),this.updatePrimed(e),this.updateParticles(e),this.updateFalling(e),this.updateBlockLights(),this.updateMobs(e),this.updateRain(e),this.updateRainbow(),this.updateSky(),this.updateHeldTransform(e),this.camera.position.set(this.pos.x,this.pos.y+Pd,this.pos.z),this.shakeT>0){const n=this.shakeT/this.shakeDur*this.shakeMag;this.camera.position.x+=(Math.random()-.5)*n,this.camera.position.y+=(Math.random()-.5)*n,this.camera.position.z+=(Math.random()-.5)*n,this.shakeT-=e}this.camera.rotation.set(this.pitch,this.yaw,0),this.updateHighlight(),this.renderer.render(this.scene,this.camera),this.timeReport+=e,this.timeReport>=.25&&(this.hud.onTime(this.time),this.timeReport=0),this.fpsAccum+=e,this.fpsFrames++,this.fpsAccum>=.5&&(this.hud.onFps(Math.round(this.fpsFrames/this.fpsAccum)),this.fpsAccum=0,this.fpsFrames=0)});this.canvas=e,this.hud=n,this.mods=i.mods,this.hacks=i.hacks,this.worldType=i.worldType??"normal",this.mode=i.mode??"creative",this.realism=i.mods.has("realism"),this.mechanics=i.mods.has("mechanics"),this.applyMode(),this.hotbar=this.resolveHotbar(i.hotbar??Ry),this.deriveTuning(),this.renderer=new My({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.camera=new kn(72,1,.1,1e3),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.camera.add(this.heldGroup),this.scene.background=new Ge("#9ad0ff"),this.scene.fog=new Kf("#9ad0ff",m0,g0),this.setupLights(),this.setupHighlight(),this.setupParticles(),this.setupSky(),this.applyRealism(),this.world.init(this.worldType,this.mods),this.respawn(),this.rebuild(),this.updateHeld(),this.spawnMobs(),this.setupRain(),this.resize(),this.bindEvents(),this.hud.onSelect(this.selected),this.hud.onHealth(this.health,Dn),this.deathban&&this.checkBan()}deriveTuning(){const e=i=>this.hacks.has(i),n=this.mods.has("heroes");this.speedMul=(e("speed")?1.9:1)*(n?1.6:1),this.jumpVel=e("superjump")?17:n?13:f0,this.reach=e("reach")?11:p0,this.noclip=e("noclip"),this.jetpack=e("jetpack"),this.fullbright=e("fullbright"),this.xray=e("xray"),this.nuker=e("nuker"),this.killaura=e("killaura")}get ghost(){return this.noclip||this.spectator}applyMode(){this.spectator=this.mode==="spectator",this.hardcore=this.mode==="hardcore",this.deathban=this.mode==="deathban",this.damageable=this.mode==="survival"||this.mode==="hardcore"||this.deathban}setMode(e){this.mode=e,this.applyMode(),this.health=Dn,this.timeSinceHurt=ta,this.hud.onHealth(this.health,Dn),this.updateHeld()}setWorld(e){this.worldType=e,this.oneBlockCount=0,this.world.reset(),this.world.init(e,this.mods),this.chunkX=NaN,this.chunkZ=NaN,this.respawn(),this.rebuild()}applyHacks(){const e=this.xray;this.deriveTuning(),this.fly=this.hacks.has("fly"),this.xray!==e&&this.rebuild()}setHacks(e){this.hacks=new Set(e),this.applyHacks()}setOp(e){this.op=e}setSensitivity(e){this.sensMul=e}setFov(e){this.camera.fov=e,this.camera.updateProjectionMatrix()}setDaySpeed(e){this.daySpeed=e}setQuality(e){const n=Math.min(window.devicePixelRatio,2);this.renderer.setPixelRatio(Math.min(2,Math.max(.4,n*e))),this.resize()}setRenderDistance(e){this.world.setRenderDistance(e),this.fogFar=e*In*.95,this.fogNear=Math.max(8,this.fogFar-22),this.chunkX=NaN,this.chunkZ=NaN,this.world.streamAround(this.pos.x,this.pos.z),this.rebuild()}toggleHack(e){this.hacks.has(e)?this.hacks.delete(e):this.hacks.add(e),this.applyHacks(),this.hud.onHackState(new Set(this.hacks));const n=this.hacks.has(e);this.hud.onMessage(`${e} ${n?"ON":"OFF"}`)}openHacks(){this.hacksOpen||(this.hacksOpen=!0,document.pointerLockElement===this.canvas&&document.exitPointerLock(),this.hud.onHacks(!0))}closeHacks(){this.hacksOpen&&(this.hacksOpen=!1,this.hud.onHacks(!1),this.canvas.requestPointerLock())}resolveHotbar(e){const n=[];for(let i=0;i<Zs;i++){const r=e[i]??null;n.push(r?Bi.get(r)??null:null)}return n}setHotbar(e){this.hotbar=this.resolveHotbar(e),this.selected>=Zs&&(this.selected=Zs-1),this.updateHeld()}openInventory(){this.inventoryOpen||(this.inventoryOpen=!0,document.pointerLockElement===this.canvas&&document.exitPointerLock(),this.hud.onInventory(!0))}closeInventory(){this.inventoryOpen&&(this.inventoryOpen=!1,this.hud.onInventory(!1),this.canvas.requestPointerLock())}openConsole(){this.dead||(document.pointerLockElement===this.canvas&&document.exitPointerLock(),this.hud.onConsole(!0))}setupLights(){this.hemi=new Pb("#cfe8ff","#5a6a3a",.95),this.scene.add(this.hemi),this.sun=new Ib("#fff6e0",.85),this.scene.add(this.sun),this.scene.add(this.sunTarget),this.sun.target=this.sunTarget,this.ambient=new Ub("#ffffff",.25),this.scene.add(this.ambient)}applyRealism(){const e=this.realism;if(this.renderer.toneMapping=e?j_:Gi,this.renderer.toneMappingExposure=e?1.12:1,this.renderer.shadowMap.enabled=e,this.renderer.shadowMap.type=W_,this.sun.castShadow=e,e){const n=this.sun.shadow;n.mapSize.set(2048,2048),n.bias=-4e-4,n.normalBias=.6;const i=n.camera;i.near=1,i.far=360,i.left=-52,i.right=52,i.top=52,i.bottom=-52,i.updateProjectionMatrix()}if(this.renderer.shadowMap.needsUpdate=!0,e&&this.blockLights.length===0)for(let n=0;n<M0;n++){const i=new Nb(16777215,0,10,1.6);i.castShadow=!1,i.visible=!1,this.scene.add(i),this.blockLights.push(i)}if(!e)for(const n of this.blockLights)n.visible=!1,n.intensity=0}setRealism(e){this.realism!==e&&(this.realism=e,this.applyRealism(),this.rebuild())}setupHighlight(){const e=new Cb(new Si(1.002,1.002,1.002)),n=new wy({color:0,transparent:!0,opacity:.5});this.highlight=new bb(e,n),this.highlight.visible=!1,this.scene.add(this.highlight)}setupParticles(){const e=new Si(.14,.14,.14),n=new Hc;this.particles=new Sd(e,n,Xl),this.particles.instanceMatrix.setUsage(Xm),this.particles.frustumCulled=!1;const i=new it().makeScale(0,0,0);for(let r=0;r<Xl;r++)this.particles.setMatrixAt(r,i),this.pool.push({pos:new I,vel:new I,life:0,max:0});this.scene.add(this.particles)}setupSky(){const n=new Float32Array(4200),i=new I;for(let h=0;h<1400;h++)i.set(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize().multiplyScalar(480),n.set([i.x,i.y,i.z],h*3);const r=new Qn;r.setAttribute("position",new zn(n,3));const s=new Ty({color:"#ffffff",size:1.7,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1});this.stars=new Rb(r,s),this.stars.frustumCulled=!1,this.scene.add(this.stars);const o=document.createElement("canvas");o.width=o.height=64;const a=o.getContext("2d"),l=a.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.35,"rgba(255,244,214,0.95)"),l.addColorStop(.7,"rgba(255,210,130,0.35)"),l.addColorStop(1,"rgba(255,200,120,0)"),a.fillStyle=l,a.fillRect(0,0,64,64);const c=new Wh(o),u=new Gh({map:c,transparent:!0,depthWrite:!1,blending:Ch,fog:!1});this.sunSprite=new Fg(u),this.sunSprite.scale.setScalar(60),this.scene.add(this.sunSprite)}rebuild(){for(const i of this.meshes)this.scene.remove(i),i.dispose();this.meshes=[];const e=new Map;this.lightSources=[];for(const[i,r]of this.world.map){const[s,o,a]=i.split(",").map(Number);if(S0[r]&&this.lightSources.push({x:s,y:o,z:a,type:r}),this.world.isHidden(s,o,a))continue;let l=e.get(r);l||e.set(r,l=[]),l.push([s,o,a])}const n=new it;for(const[i,r]of e){const s=this.xray&&n2.has(i)?this.xrayMaterial():cc(i),o=new Sd(this.boxGeo,s,r.length);r.forEach((a,l)=>{n.makeTranslation(a[0]+.5,a[1]+.5,a[2]+.5),o.setMatrixAt(l,n)}),o.instanceMatrix.needsUpdate=!0,o.frustumCulled=!1,o.castShadow=this.realism,o.receiveShadow=this.realism,o.userData.coords=r,this.scene.add(o),this.meshes.push(o)}}xrayMaterial(){return this._xrayMat||(this._xrayMat=new Ks({color:"#9fb4c9",transparent:!0,opacity:.12,depthWrite:!1})),this._xrayMat}start(){this.loop()}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.unbindEvents();for(const e of[...this.peers.keys()])this.removePeer(e);document.pointerLockElement===this.canvas&&document.exitPointerLock(),this.renderer.dispose(),this.boxGeo.dispose()}setSelected(e){const n=Zs;this.selected=(e%n+n)%n,this.hud.onSelect(this.selected),this.updateHeld()}updateHeld(){this.camera.remove(this.heldGroup),this.heldGroup=new Mi;const e=this.spectator?null:this.hotbar[this.selected];if(!e){this.camera.add(this.heldGroup);return}const n=qR(e);e.tool?(n.scale.setScalar(.5),this.heldBasePos.set(.42,-.4,-.85),this.heldBaseRot.set(.1,-.35,-.5)):(n.scale.setScalar(.32),this.heldBasePos.set(.5,-.48,-.85),this.heldBaseRot.set(-.25,.6,.15)),this.heldGroup.add(n),this.camera.add(this.heldGroup)}swing(){this.swingT=0}bindEvents(){window.addEventListener("resize",this.onResize),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("pointerlockchange",this.onPointerLock),this.canvas.addEventListener("mousedown",this.onMouseDown),this.canvas.addEventListener("click",this.onClick),this.canvas.addEventListener("wheel",this.onWheel,{passive:!1}),this.canvas.addEventListener("contextmenu",this.onContextMenu)}unbindEvents(){window.removeEventListener("resize",this.onResize),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("pointerlockchange",this.onPointerLock),this.canvas.removeEventListener("mousedown",this.onMouseDown),this.canvas.removeEventListener("click",this.onClick),this.canvas.removeEventListener("wheel",this.onWheel),this.canvas.removeEventListener("contextmenu",this.onContextMenu)}resize(){const e=window.innerWidth,n=window.innerHeight;this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}keyDown(e){const n=document.activeElement,i=!!n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA");if(e.code==="F1"){e.preventDefault(),i||this.openConsole();return}if(!i){if(e.code==="KeyE"){this.inventoryOpen?this.closeInventory():this.openInventory();return}if(e.code==="KeyH"){this.hacksOpen?this.closeHacks():this.openHacks();return}if(e.code==="KeyX"){this.toggleHack("xray");return}if(this.keys.add(e.code),e.code==="KeyF"&&(this.fly=!this.fly,this.fly?this.hacks.add("fly"):this.hacks.delete("fly"),this.vel.y=0,this.hud.onHackState(new Set(this.hacks)),this.hud.onMessage(this.fly?"Fly ON ✈️":"Fly OFF")),e.code.startsWith("Digit")){const r=Number(e.code.slice(5));r>=1&&r<=9&&this.setSelected(r-1)}e.code==="Space"&&this.locked&&e.preventDefault()}}mouseMove(e){if(!this.locked)return;const n=.0022*this.sensMul;this.yaw-=e.movementX*n,this.pitch-=e.movementY*n;const i=Math.PI/2-.01;this.pitch=Math.max(-i,Math.min(i,this.pitch))}mouseDown(e){this.locked&&(e.button===0?this.primaryAction():e.button===2&&this.secondaryAction())}setTouchActive(e){this.touch=e,e||this.keys.clear()}touchKey(e,n){n?this.keys.add(e):this.keys.delete(e)}touchLook(e,n){const i=.004*this.sensMul;this.yaw-=e*i,this.pitch-=n*i;const r=Math.PI/2-.01;this.pitch=Math.max(-r,Math.min(r,this.pitch))}touchPrimary(){this.primaryAction()}touchSecondary(){this.secondaryAction()}target(){this.raycaster.setFromCamera(new Ve(0,0),this.camera),this.raycaster.far=this.reach;const e=this.raycaster.intersectObjects(this.meshes,!1);for(const n of e){if(n.instanceId==null||!n.face)continue;return{coord:n.object.userData.coords[n.instanceId],normal:n.face.normal.clone().round()}}return null}primaryAction(){var l;if(this.spectator||(this.swing(),this.hitMobInFront()))return;const e=this.target();if(!e)return;const[n,i,r]=e.coord,s=this.world.get(n,i,r);if(!s)return;if(this.worldType==="oneblock"&&n===oo.x&&i===oo.y&&r===oo.z){this.oneBlockCount++;const c=y0[this.oneBlockCount%y0.length];this.world.set(n,i,r,c),this.emitEdit(n,i,r,c),this.spawnParticles(n+.5,i+.9,r+.5,8,["#ffffff","#cfe8ff","#9ad0ff"]),this.rebuild(),this.hud.onMessage(`OneBlock ×${this.oneBlockCount} → ${vi[c].label}`);return}if(vi[s].unbreakable){this.hud.onMessage("Bedrock is unbreakable");return}const o=ea[s];if(o!=null){this.primeTNT(n,i,r,_0,o),this.rebuild(),this.hud.onMessage(s==="nuke_block"?"☢️ NUKE armed!":s==="dynamite_block"?"Dynamite lit! 🧨":"TNT lit! 💥");return}const a=this.nuker?2:(l=this.hotbar[this.selected])!=null&&l.areaBreak?1:0;if(this.mechanics&&a===0&&s==="oak_log"){this.fellTree(n,i,r);return}a>0?this.mineCluster(n,i,r,a):(this.world.remove(n,i,r),this.emitEdit(n,i,r,null)),this.rebuild(),this.mechanics&&this.fallColumn(n,i+1,r)}fellTree(e,n,i){const r=[],s=new Set([`${e},${n},${i}`]),o=[[e,n,i]];for(;o.length&&r.length<x0;){const[u,h,f]=o.shift();if(this.world.get(u,h,f)==="oak_log"){r.push([u,h,f]);for(let g=-1;g<=1;g++)for(let v=-1;v<=1;v++)for(let _=-1;_<=1;_++){if(!g&&!v&&!_)continue;const p=u+g,d=h+v,y=f+_,m=`${p},${d},${y}`;s.has(m)||(s.add(m),this.world.get(p,d,y)==="oak_log"&&o.push([p,d,y]))}}}const a=[],l=new Set,c=[];for(const[u,h,f]of r)for(let g=-1;g<=1;g++)for(let v=-1;v<=1;v++)for(let _=-1;_<=1;_++){const p=`${u+g},${h+v},${f+_}`;!l.has(p)&&this.world.get(u+g,h+v,f+_)==="leaves"&&(l.add(p),c.push([u+g,h+v,f+_]))}for(;c.length&&a.length<x0;){const[u,h,f]=c.shift();a.push([u,h,f]);for(let g=-1;g<=1;g++)for(let v=-1;v<=1;v++)for(let _=-1;_<=1;_++){const p=`${u+g},${h+_},${f+v}`;!l.has(p)&&this.world.get(u+g,h+_,f+v)==="leaves"&&(l.add(p),c.push([u+g,h+_,f+v]))}}for(const[u,h,f]of r)this.world.remove(u,h,f),this.emitEdit(u,h,f,null),this.spawnFalling(u,h,f,"oak_log",h,"fade");for(const[u,h,f]of a)this.world.remove(u,h,f),this.emitEdit(u,h,f,null),this.spawnFalling(u,h,f,"leaves",h,"fade");this.rebuild(),this.spawnParticles(e+.5,n+1,i+.5,14,["#6e5230","#5b4426","#3f7a32","#356b2a"]),this.hud.onMessage("🪵 ¡Timber!")}fallColumn(e,n,i){const r=[];let s=n;for(;i2.has(this.world.get(e,s,i));)r.push(s),s++;if(!r.length)return;let o=r[0]-1;for(;o>aa&&!this.world.isSolid(e,o,i);)o--;let a=o+1;for(const l of r){const c=this.world.get(e,l,i);this.world.remove(e,l,i),this.emitEdit(e,l,i,null),this.spawnFalling(e,l,i,c,a,"settle"),a++}this.rebuild()}spawnFalling(e,n,i,r,s,o){if(this.falling.length>600)return;const a=new en(this.boxGeo,cc(r));a.position.set(e+.5,n+.5,i+.5),a.castShadow=this.realism,this.scene.add(a),this.falling.push({mesh:a,bx:e,bz:i,y:n+.5,vel:0,type:r,target:s,mode:o,vx:o==="fade"?(Math.random()*2-1)*1.1:0,vz:o==="fade"?(Math.random()*2-1)*1.1:0,life:o==="fade"?.9+Math.random()*.5:0,spin:o==="fade"?(Math.random()*2-1)*5:0})}updateFalling(e){if(!this.falling.length)return;let n=!1;for(let i=this.falling.length-1;i>=0;i--){const r=this.falling[i];if(r.vel-=r2*e,r.y+=r.vel*e,r.mode==="fade")r.life-=e,r.bx+=r.vx*e,r.bz+=r.vz*e,r.mesh.position.set(r.bx+.5,r.y,r.bz+.5),r.mesh.rotation.x+=r.spin*e,r.mesh.rotation.z+=r.spin*.6*e,r.mesh.scale.setScalar(Math.max(.02,Math.min(1,r.life*1.6))),r.life<=0&&(this.scene.remove(r.mesh),this.falling.splice(i,1));else{const s=r.target+.5;r.y<=s?(this.scene.remove(r.mesh),this.falling.splice(i,1),this.world.set(r.bx,r.target,r.bz,r.type),this.emitEdit(r.bx,r.target,r.bz,r.type),n=!0):r.mesh.position.y=r.y}}n&&this.rebuild()}updateBlockLights(){if(!this.realism||!this.blockLights.length)return;const e=this.pos.x,n=this.pos.y+Pd,i=this.pos.z,r=this.lightSources.map(s=>({s,d:(s.x-e)**2+(s.y-n)**2+(s.z-i)**2})).sort((s,o)=>s.d-o.d).slice(0,M0);for(let s=0;s<this.blockLights.length;s++){const o=this.blockLights[s],a=r[s];if(!a){o.visible=!1,o.intensity=0;continue}const l=S0[a.s.type];o.visible=!0,o.color.setHex(l.color),o.distance=l.dist;const c=l.flicker?.78+.22*Math.sin(this.elapsed*11+a.s.x*1.7+a.s.z):1;o.intensity=l.intensity*c,o.position.set(a.s.x+.5,a.s.y+.5,a.s.z+.5)}}emitEdit(e,n,i,r){var s,o;(o=(s=this.hud).onEdit)==null||o.call(s,e,n,i,r)}applyRemoteEdit(e,n,i,r){this.remoteEdits.push({x:e,y:n,z:i,block:r})}drainRemoteEdits(){if(this.remoteEdits.length){for(const e of this.remoteEdits)e.block===null?this.world.remove(e.x,e.y,e.z):this.world.set(e.x,e.y,e.z,e.block);this.remoteEdits.length=0,this.rebuild()}}addPeer(e,n){const i=this.peers.get(e);if(i){i.name=n;return}const{group:r,label:s}=this.makePeerAvatar(n);r.position.copy(this.pos),this.scene.add(r),this.peers.set(e,{group:r,label:s,name:n,pos:this.pos.clone(),target:this.pos.clone(),yaw:0,targetYaw:0,bob:0})}setPeerState(e,n,i,r,s,o){let a=this.peers.get(e);a||(this.addPeer(e,"Player"),a=this.peers.get(e)),a.target.set(n,i,r),a.targetYaw=s}removePeer(e){var i;const n=this.peers.get(e);n&&(this.scene.remove(n.group),(i=n.label.material.map)==null||i.dispose(),n.label.material.dispose(),this.peers.delete(e))}updatePeers(e){if(!this.peers.size)return;const n=Math.min(1,e*12);for(const i of this.peers.values()){i.pos.lerp(i.target,n);let r=i.targetYaw-i.yaw;r=Math.atan2(Math.sin(r),Math.cos(r)),i.yaw+=r*n;const s=i.pos.distanceToSquared(i.target)>4e-4;i.bob+=e*(s?9:0),i.group.position.set(i.pos.x,i.pos.y+Math.abs(Math.sin(i.bob))*.04,i.pos.z),i.group.rotation.y=i.yaw}}sendState(e){this.hud.onState&&(this.stateCool-=e,!(this.stateCool>0)&&(this.stateCool=.05,this.hud.onState(this.pos.x,this.pos.y,this.pos.z,this.yaw,this.pitch)))}makePeerAvatar(e){const n=new Mi,i=(l,c,u,h,f,g,v)=>{const _=new en(this.boxGeo,new Ks({color:h}));_.scale.set(l,c,u),_.position.set(f,g,v),_.castShadow=!0,n.add(_)},r="#e8b98a",s="#2f6fd0",o="#2b3a67";i(.2,.7,.2,o,-.12,.35,0),i(.2,.7,.2,o,.12,.35,0),i(.5,.6,.28,s,0,1,0),i(.16,.6,.18,r,-.33,1,0),i(.16,.6,.18,r,.33,1,0),i(.42,.42,.42,r,0,1.55,0);const a=this.makeNameTag(e);return a.position.set(0,2.15,0),n.add(a),{group:n,label:a}}makeNameTag(e){const n=e.slice(0,16)||"Player",i=document.createElement("canvas"),r=i.getContext("2d");r.font="bold 28px system-ui, sans-serif";const s=Math.ceil(r.measureText(n).width)+24;i.width=s,i.height=40;const o=i.getContext("2d");o.font="bold 28px system-ui, sans-serif",o.textBaseline="middle",o.fillStyle="rgba(8,12,20,0.66)",o.fillRect(0,0,s,40),o.fillStyle="#ffffff",o.fillText(n,12,21);const a=new Wh(i);a.colorSpace=Wn;const l=new Gh({map:a,transparent:!0,depthTest:!1,fog:!1}),c=new Fg(l);return c.scale.set(s/40*.6,.6,1),c}mineCluster(e,n,i,r){for(let s=e-r;s<=e+r;s++)for(let o=n-r;o<=n+r;o++)for(let a=i-r;a<=i+r;a++){const l=this.world.get(s,o,a);!l||vi[l].unbreakable||(ea[l]!=null?this.primeTNT(s,o,a,.2,ea[l]):(this.world.remove(s,o,a),this.emitEdit(s,o,a,null)))}}secondaryAction(){if(this.spectator)return;this.swing();const e=this.target();if(!e)return;if(this.world.get(e.coord[0],e.coord[1],e.coord[2])==="bed"){this.sleep();return}const i=this.hotbar[this.selected];if(!(i!=null&&i.block))return;const r=e.coord[0]+e.normal.x,s=e.coord[1]+e.normal.y,o=e.coord[2]+e.normal.z;this.world.isSolid(r,s,o)||this.overlapsPlayer(r,s,o)||(this.world.set(r,s,o,i.block),this.emitEdit(r,s,o,i.block),this.rebuild())}overlapsPlayer(e,n,i){return this.pos.x+Gt>e&&this.pos.x-Gt<e+1&&this.pos.y+jl>n&&this.pos.y<n+1&&this.pos.z+Gt>i&&this.pos.z-Gt<i+1}pasteMansion(){const e=-Math.sin(this.yaw),n=-Math.cos(this.yaw),i=Math.round(this.pos.x+e*7),r=Math.round(this.pos.z+n*7),s=Math.floor(this.pos.y),o=5,a=4,l=(v,_,p,d)=>{this.world.set(i+v,s+_,r+p,d),this.emitEdit(i+v,s+_,r+p,d)},c=(v,_,p)=>{this.world.remove(i+v,s+_,r+p),this.emitEdit(i+v,s+_,r+p,null)};for(let v=-o;v<=o;v++)for(let _=-a;_<=a;_++)l(v,0,_,"quartz_block"),l(v,5,_,"oak_planks"),l(v,10,_,"quartz_block");const u=(v,_,p)=>{const d=_<=4?_:_-5,y=(d===2||d===3)&&(v+p)%2===0;l(v,_,p,y?"glass":"quartz_block")};for(const v of[0,5])for(let _=1;_<=4;_++){for(let p=-o;p<=o;p++)u(p,v+_,-a),u(p,v+_,a);for(let p=-a;p<=a;p++)u(-o,v+_,p),u(o,v+_,p)}for(let v=0;v<=10;v++)l(-o,v,-a,"oak_log"),l(o,v,-a,"oak_log"),l(-o,v,a,"oak_log"),l(o,v,a,"oak_log");for(let v=-o;v<=o;v++)l(v,11,-a,"quartz_block"),l(v,11,a,"quartz_block");for(let v=-a;v<=a;v++)l(-o,11,v,"quartz_block"),l(o,11,v,"quartz_block");l(0,11,0,"glowstone"),c(0,1,-a),c(0,2,-a),c(0,6,-a),c(0,7,-a),c(3,5,0),c(3,5,1),l(3,1,3,"quartz_block"),l(3,2,2,"quartz_block"),l(3,3,1,"quartz_block"),l(3,4,0,"quartz_block"),l(-o+1,1,a-1,"bed"),l(o-1,1,a-1,"crafting_table"),l(-o+1,1,-a+1,"diamond_block"),l(o-1,1,-a+1,"diamond_block"),l(-2,4,-2,"glowstone"),l(2,4,2,"glowstone"),l(2,4,-2,"glowstone"),l(-2,4,2,"glowstone"),l(0,3,a-1,"torch"),l(0,3,-a+1,"torch"),l(-o+1,6,a-1,"bed"),l(o-1,6,a-1,"diamond_block"),l(-2,9,-2,"glowstone"),l(2,9,2,"glowstone");const h=Math.floor(this.pos.x),f=Math.floor(this.pos.y),g=Math.floor(this.pos.z);for(let v=0;v<3;v++)this.world.remove(h,f+v,g);this.rebuild()}pasteBigHouse(){const e=-Math.sin(this.yaw),n=-Math.cos(this.yaw),i=Math.round(this.pos.x+e*20),r=Math.round(this.pos.z+n*20),s=Math.floor(this.pos.y),o=16,a=5,l=4,c=a*l,u=-o,h=o-1,f=(m,S,C,b)=>{this.world.set(i+m,s+S,r+C,b),this.emitEdit(i+m,s+S,r+C,b)},g=(m,S,C)=>{this.world.remove(i+m,s+S,r+C),this.emitEdit(i+m,s+S,r+C,null)};for(let m=0;m<=a;m++){const S=m*l,C=m===0||m===a?"quartz_block":"oak_planks";for(let b=u;b<=h;b++)for(let T=u;T<=h;T++)f(b,S,T,C)}for(let m=0;m<a;m++){const S=m*l;for(let C=1;C<l;C++){const b=(T,L)=>C===2&&(T+L)%3===0;for(let T=u;T<=h;T++)f(T,S+C,u,b(T,u)?"glass":"quartz_block"),f(T,S+C,h,b(T,h)?"glass":"quartz_block");for(let T=u;T<=h;T++)f(u,S+C,T,b(u,T)?"glass":"quartz_block"),f(h,S+C,T,b(h,T)?"glass":"quartz_block")}}for(let m=0;m<=c;m++)f(u,m,u,"oak_log"),f(h,m,u,"oak_log"),f(u,m,h,"oak_log"),f(h,m,h,"oak_log");for(let m=u;m<=h;m++)f(m,c+1,u,"quartz_block"),f(m,c+1,h,"quartz_block");for(let m=u;m<=h;m++)f(u,c+1,m,"quartz_block"),f(h,c+1,m,"quartz_block");f(0,c+1,0,"glowstone");for(let m=1;m<=3;m++)g(-5,m,u),g(-4,m,u),g(4,m,u),g(5,m,u);const v=u+3,_=h-4;for(let m=0;m<a;m++){const S=m*l;for(let C=0;C<l;C++){const b=v+C;f(b,S+1+C,_,"quartz_block"),g(b,S+2+C,_),g(b,S+3+C,_),g(b,(m+1)*l,_),g(b,(m+1)*l,_-1)}}for(let m=0;m<a;m++){const S=m*l;f(u+2,S+1,h-2,"bed"),f(h-2,S+1,h-2,"crafting_table"),f(u+2,S+1,u+2,"diamond_block"),f(0,S+3,0,"glowstone"),f(u+5,S+3,u+5,"glowstone"),f(h-5,S+3,h-5,"glowstone"),f(u+5,S+3,h-5,"glowstone"),f(h-5,S+3,u+5,"glowstone")}const p=Math.floor(this.pos.x),d=Math.floor(this.pos.y),y=Math.floor(this.pos.z);for(let m=0;m<3;m++)this.world.remove(p,d+m,y);this.rebuild()}primeTNT(e,n,i,r,s=uc){this.world.remove(e,n,i),this.emitEdit(e,n,i,null);const o=new Ks({color:"#b1351f",emissive:"#ffffff",emissiveIntensity:0}),a=new en(this.boxGeo,o);a.position.set(e+.5,n+.5,i+.5),this.scene.add(a),this.primed.push({x:e,y:n,z:i,fuse:r,mesh:a,radius:s})}explode(e,n,i,r){const s=r/uc;this.shake(.45*s,.4*Math.min(s,1.6)),this.spawnParticles(e,n,i,Math.min(50+r*6,140),["#ffce54","#ff8c2a","#e0492a","#8a8a8a","#6e5230","#fff3b0"]),this.hurtMobsNear(e,n,i,r+1);const o=Math.ceil(r),a=[];for(let l=Math.floor(e)-o;l<=Math.floor(e)+o;l++)for(let c=Math.floor(n)-o;c<=Math.floor(n)+o;c++)for(let u=Math.floor(i)-o;u<=Math.floor(i)+o;u++){const h=Math.hypot(l+.5-e,c+.5-n,u+.5-i);if(h>r)continue;const f=this.world.get(l,c,u);if(!(!f||vi[f].unbreakable)){if(ea[f]!=null){a.push([l,c,u]);continue}h>r-1&&Math.random()<.35||(this.world.remove(l,c,u),this.emitEdit(l,c,u,null))}}for(const[l,c,u]of a)this.primeTNT(l,c,u,.1+Math.random()*.3,ea[this.world.get(l,c,u)??"tnt"]??uc);this.rebuild()}updatePrimed(e){for(let n=this.primed.length-1;n>=0;n--){const i=this.primed[n];i.fuse-=e;const r=.5+.5*Math.sin(this.elapsed*(8+(_0-i.fuse)*14));i.mesh.material.emissiveIntensity=r*.9;const s=1+r*.08;i.mesh.scale.setScalar(s),i.fuse<=0&&(this.scene.remove(i.mesh),i.mesh.material.dispose(),this.primed.splice(n,1),this.explode(i.x+.5,i.y+.5,i.z+.5,i.radius))}}spawnParticles(e,n,i,r,s){const o=new Ge;let a=0;for(let l=0;l<Xl&&a<r;l++){const c=this.pool[l];c.life>0||(c.pos.set(e+(Math.random()-.5),n+(Math.random()-.5),i+(Math.random()-.5)),c.vel.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(2+Math.random()*7),c.vel.y+=2,c.max=.45+Math.random()*.5,c.life=c.max,o.set(s[Math.random()*s.length|0]),this.particles.setColorAt(l,o),a++)}this.particles.instanceColor&&(this.particles.instanceColor.needsUpdate=!0)}updateParticles(e){const n=new it,i=new it().makeScale(0,0,0);let r=!1;for(let s=0;s<Xl;s++){const o=this.pool[s];if(o.life<=0)continue;if(r=!0,o.life-=e,o.life<=0){this.particles.setMatrixAt(s,i);continue}o.vel.y-=18*e,o.pos.addScaledVector(o.vel,e);const a=Math.max(.05,o.life/o.max);n.makeScale(a,a,a),n.setPosition(o.pos.x,o.pos.y,o.pos.z),this.particles.setMatrixAt(s,n)}r&&(this.particles.instanceMatrix.needsUpdate=!0)}shake(e,n){this.shakeMag=e,this.shakeT=n,this.shakeDur=n}sleep(){this.time=.04,this.hud.onMessage("💤  …  Good morning! ☀️")}updateSky(){const e=this.time,n=e*Math.PI*2;this.sunDir.set(Math.cos(n)*100,Math.sin(n)*100+12,35).normalize(),this.realism?(this.sun.position.set(this.pos.x+this.sunDir.x*140,this.pos.y+this.sunDir.y*140,this.pos.z+this.sunDir.z*140),this.sunTarget.position.copy(this.pos),this.sunTarget.updateMatrixWorld()):this.sun.position.set(Math.cos(n)*100,Math.sin(n)*100+12,35);const i=y2;this.mods.has("nether")?(i.set("#2a0807"),this.sun.intensity=.45,this.sun.color.set("#ff7a4a"),this.hemi.intensity=.5,this.ambient.intensity=.45):(i.copy(A0(p2,e)),this.sun.intensity=Nd(g2,e),this.sun.color.copy(A0(m2,e)),this.hemi.intensity=Nd(v2,e),this.ambient.intensity=Nd(_2,e),this.realism&&(this.sun.intensity*=1.45,this.hemi.intensity*=.72,this.ambient.intensity*=.55),this.fullbright&&(this.sun.intensity=Math.max(this.sun.intensity,.55),this.hemi.intensity=Math.max(this.hemi.intensity,.95),this.ambient.intensity=Math.max(this.ambient.intensity,.7)));const r=Math.max(0,Math.min(1,(this.pos.y-v0)/(e2-v0)));i.lerp(x2.set("#05060d"),r),this.scene.background.copy(i);const s=this.scene.fog;s.color.copy(i),s.near=this.fogNear+r*240,s.far=this.fogFar+r*640,r>0&&(this.ambient.intensity=Math.max(this.ambient.intensity,.25+r*.3)),this.updateSkyDecor(r)}updateSkyDecor(e){const n=this.pos.x,i=this.pos.y+Pd,r=this.pos.z;this.stars.position.set(n,i,r);const s=1-Math.min(1,this.sun.intensity/.7);this.stars.material.opacity=Math.min(1,Math.max(s,e)),na.copy(this.sunDir),this.sunSprite.position.set(n+na.x*400,i+na.y*400,r+na.z*400);const o=na.y>-.1?1:0;this.sunSprite.material.opacity=o*Math.min(1,this.sun.intensity+e*.6)}updateHeldTransform(e){this.swingT<.28&&(this.swingT+=e);const n=this.swingT<.28?this.swingT/.28:-1,i=n>=0?Math.sin(n*Math.PI):0;this.heldGroup.position.set(this.heldBasePos.x,this.heldBasePos.y-.18*i,this.heldBasePos.z+.12*i),this.heldGroup.rotation.set(this.heldBaseRot.x-1.3*i,this.heldBaseRot.y,this.heldBaseRot.z)}update(e){if(this.dead)return;const n=-Math.sin(this.yaw),i=-Math.cos(this.yaw),r=Math.cos(this.yaw),s=-Math.sin(this.yaw);let o=0,a=0;this.keys.has("KeyW")&&(o+=n,a+=i),this.keys.has("KeyS")&&(o-=n,a-=i),this.keys.has("KeyD")&&(o+=r,a+=s),this.keys.has("KeyA")&&(o-=r,a-=s);const l=Math.hypot(o,a),c=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),u=this.fly||this.ghost,h=(u?h0:c?JR:QR)*this.speedMul,f=l>0?o/l*h:0,g=l>0?a/l*h:0,v=!u&&this.standingOn("slippery")?.08:1;if(this.vel.x+=(f-this.vel.x)*v,this.vel.z+=(g-this.vel.z)*v,u){let _=0;this.keys.has("Space")&&(_+=1),c&&(_-=1),this.vel.y=_*h0}else this.jetpack&&this.keys.has("Space")?this.vel.y=8.5:(this.vel.y-=ZR*e,this.vel.y<-55&&(this.vel.y=-55),this.onGround&&this.keys.has("Space")&&(this.vel.y=this.jumpVel,this.onGround=!1));this.onGround=!1,this.moveAxis(0,this.vel.x*e),this.moveAxis(2,this.vel.z*e),this.moveAxis(1,this.vel.y*e),this.pos.y<-30&&(this.damageable?this.hurt(Dn):this.respawn())}respawn(){this.worldType==="skyblock"||this.worldType==="oneblock"?this.pos.set(.5,3,.5):this.pos.set(.5,this.world.surfaceHeight(0,9)+2,9.5),this.vel.set(0,0,0)}moveAxis(e,n){if(n===0)return;const i=this.pos;if(i.setComponent(e,i.getComponent(e)+n),this.ghost)return;const r=Math.floor(i.x-Gt),s=Math.floor(i.x+Gt),o=Math.floor(i.y),a=Math.floor(i.y+jl),l=Math.floor(i.z-Gt),c=Math.floor(i.z+Gt);for(let u=r;u<=s;u++)for(let h=o;h<=a;h++)for(let f=l;f<=c;f++)if(this.world.isSolid(u,h,f)){if(e===0)i.x=n>0?u-Gt-Us:u+1+Gt+Us,this.vel.x=0;else if(e===2)i.z=n>0?f-Gt-Us:f+1+Gt+Us,this.vel.z=0;else if(n>0)i.y=h-jl-Us,this.vel.y=0;else{i.y=h+1+Us;const g=this.world.get(u,h,f);g&&vi[g].bouncy&&this.vel.y<-6?this.vel.y=Math.min(-this.vel.y*.72,16):(this.damageable&&this.vel.y<-E0&&this.hurt(Math.round((-this.vel.y-E0)/s2)),this.vel.y=0,this.onGround=!0)}return}}streamChunks(){const e=Math.floor(this.pos.x/In),n=Math.floor(this.pos.z/In);e===this.chunkX&&n===this.chunkZ||(this.chunkX=e,this.chunkZ=n,this.world.streamAround(this.pos.x,this.pos.z)&&this.rebuild())}standingOn(e){const n=Math.floor(this.pos.y-.06);for(let i=Math.floor(this.pos.x-Gt);i<=Math.floor(this.pos.x+Gt);i++)for(let r=Math.floor(this.pos.z-Gt);r<=Math.floor(this.pos.z+Gt);r++){const s=this.world.get(i,n,r);if(s&&vi[s][e])return!0}return!1}updateHighlight(){if(this.spectator){this.highlight.visible=!1;return}const e=this.target();if(!e){this.highlight.visible=!1;return}this.highlight.visible=!0,this.highlight.position.set(e.coord[0]+.5,e.coord[1]+.5,e.coord[2]+.5)}spawnMobs(){if(this.mods.has("mobs"))for(let e=0;e<7;e++){const n=e%2===0?"zombie":"pig",i=(Math.random()*2-1)*(Cd-2),r=(Math.random()*2-1)*(Cd-2),s=this.mobMesh(n),o=new I(i,this.world.surfaceHeight(Math.round(i),Math.round(r))+1,r);s.position.copy(o),this.scene.add(s),this.mobs.push({kind:n,group:s,pos:o,dir:Math.random()*Math.PI*2,changeT:0,hp:3,bob:Math.random()*6,hurtT:0})}}mobMesh(e){const n=new Mi,i=e==="zombie"?"#4a7a3a":"#e89aa6",r=e==="zombie"?"#3a6a2f":"#e08594",s=e==="zombie"?"#34562a":"#ca7d8a",o=(a,l,c,u,h,f,g)=>{const v=new en(this.boxGeo,new Ks({color:u}));v.scale.set(a,l,c),v.position.set(h,f,g),v.castShadow=!0,n.add(v)};return o(.18,.4,.18,s,-.13,.2,0),o(.18,.4,.18,s,.13,.2,0),o(.5,.5,.28,i,0,.65,0),o(.36,.36,.36,r,0,1.08,.02),e==="pig"&&o(.14,.1,.08,"#d97a88",0,1.06,.2),n}updateMobs(e){if(this.mobs.length){this.killaura&&(this.auraCool-=e);for(const n of this.mobs){if(n.changeT-=e,n.changeT<=0&&(n.dir=Math.random()*Math.PI*2,n.changeT=1.5+Math.random()*2.5),n.kind==="zombie"){const s=this.pos.x-n.pos.x,o=this.pos.z-n.pos.z,a=Math.hypot(s,o);a<11&&a>.001&&(n.dir=Math.atan2(o,s))}const i=n.kind==="zombie"?1.7:1.3;n.pos.x+=Math.cos(n.dir)*i*e,n.pos.z+=Math.sin(n.dir)*i*e;const r=Cd;(n.pos.x<-r||n.pos.x>r)&&(n.pos.x=Math.max(-r,Math.min(r,n.pos.x)),n.dir=Math.PI-n.dir),(n.pos.z<-r||n.pos.z>r)&&(n.pos.z=Math.max(-r,Math.min(r,n.pos.z)),n.dir=-n.dir),n.pos.y=this.world.surfaceHeight(Math.round(n.pos.x),Math.round(n.pos.z))+1,n.bob+=e*6,n.group.position.set(n.pos.x,n.pos.y+Math.abs(Math.sin(n.bob))*.05,n.pos.z),n.group.rotation.y=-n.dir+Math.PI/2,n.hurtT>0&&(n.hurtT-=e),this.damageable&&n.kind==="zombie"&&this.mobDmgCool<=0&&Math.hypot(n.pos.x-this.pos.x,n.pos.z-this.pos.z)<d2&&Math.abs(n.pos.y-this.pos.y)<2&&(this.hurt(c2),this.mobDmgCool=u2),this.killaura&&this.auraCool<=0&&Math.hypot(n.pos.x-this.pos.x,n.pos.z-this.pos.z)<4&&(this.damageMob(n,1),this.swing())}this.killaura&&this.auraCool<=0&&(this.auraCool=.5),this.mobs=this.mobs.filter(n=>n.hp>0)}}hitMobInFront(){var s,o;if(!this.mobs.length)return!1;const e=-Math.sin(this.yaw)*Math.cos(this.pitch),n=-Math.cos(this.yaw)*Math.cos(this.pitch);let i=null,r=4;for(const a of this.mobs){const l=a.pos.x-this.pos.x,c=a.pos.z-this.pos.z,u=Math.hypot(l,c);u>r||u<.001||l/u*e+c/u*n<.55||(i=a,r=u)}return i?(this.damageMob(i,(o=(s=this.hotbar[this.selected])==null?void 0:s.tool)!=null&&o.includes("sword")?3:1),!0):!1}hurtMobsNear(e,n,i,r){for(const s of this.mobs)Math.hypot(s.pos.x-e,s.pos.y-n,s.pos.z-i)<=r&&this.damageMob(s,99)}damageMob(e,n){if(e.hp<=0)return;e.hp-=n,e.hurtT=.12;const i=e.kind==="zombie"?["#4a7a3a","#6fae4a","#2f5a26"]:["#e89aa6","#f4c0c8","#ca7d8a"];this.spawnParticles(e.pos.x,e.pos.y+.7,e.pos.z,e.hp<=0?16:6,i),e.hp<=0&&(this.scene.remove(e.group),this.hud.onMessage(e.kind==="zombie"?"🧟 Zombie down!":"🐷 Oink!"))}updateSurvival(e){!this.damageable||this.dead||(this.mobDmgCool-=e,this.lavaTimer-=e,this.lavaTimer<=0&&this.inLava()&&(this.hurt(a2),this.lavaTimer=l2),this.timeSinceHurt+=e,this.health<Dn&&this.timeSinceHurt>=ta&&(this.regenTimer+=e,this.regenTimer>=o2&&(this.regenTimer=0,this.health=Math.min(Dn,this.health+1),this.hud.onHealth(this.health,Dn))))}inLava(){const e=Math.floor(this.pos.x-Gt),n=Math.floor(this.pos.x+Gt),i=Math.floor(this.pos.z-Gt),r=Math.floor(this.pos.z+Gt),s=Math.floor(this.pos.y-.06),o=Math.floor(this.pos.y+jl);for(let a=e;a<=n;a++)for(let l=i;l<=r;l++)for(let c=s;c<=o;c++)if(this.world.get(a,c,l)==="lava_block")return!0;return!1}hurt(e){!this.damageable||this.dead||this.op||e<=0||(this.health=Math.max(0,this.health-e),this.timeSinceHurt=0,this.regenTimer=0,this.hud.onHealth(this.health,Dn),this.shake(.22,.16),this.health<=0&&this.die())}die(){if(this.spawnParticles(this.pos.x,this.pos.y+.9,this.pos.z,18,["#b1351f","#e0492a","#8a8a8a"]),this.hardcore)this.dead=!0,this.hud.onDead(!0),this.hud.onMessage("☠️ Game Over"),document.pointerLockElement===this.canvas&&document.exitPointerLock();else if(this.deathban){const e=Date.now()+h2*1e3;try{localStorage.setItem($l,String(e))}catch{}this.dead=!0,this.hud.onDead(!0),this.hud.onBanned(e),this.hud.onMessage("⏳ DeathBan!"),document.pointerLockElement===this.canvas&&document.exitPointerLock()}else this.health=Dn,this.timeSinceHurt=ta,this.respawn(),this.hud.onHealth(this.health,Dn),this.hud.onMessage("💀 You died — respawned")}get isDead(){return this.dead}checkBan(){let e=0;try{e=Number(localStorage.getItem($l))||0}catch{}if(e>Date.now())this.dead=!0,this.hud.onDead(!0),this.hud.onBanned(e);else if(e)try{localStorage.removeItem($l)}catch{}}rejoin(){if(this.deathban){try{localStorage.removeItem($l)}catch{}this.dead=!1,this.health=Dn,this.timeSinceHurt=ta,this.respawn(),this.hud.onDead(!1),this.hud.onHealth(this.health,Dn),this.canvas.requestPointerLock()}}setupRain(){if(!this.mods.has("weather"))return;const e=new Si(.025,.55,.025),n=new Hc({color:"#9fc4ff",transparent:!0,opacity:.5});this.rain=new Sd(e,n,Ld),this.rain.instanceMatrix.setUsage(Xm),this.rain.frustumCulled=!1;for(let i=0;i<Ld;i++)this.rainPos.push(new I((Math.random()-.5)*36,Math.random()*22,(Math.random()-.5)*36));this.scene.add(this.rain)}updateRain(e){if(!this.rain)return;const n=new it;for(let i=0;i<Ld;i++){const r=this.rainPos[i];r.y-=26*e,r.y<-4&&(r.y+=26,r.x=(Math.random()-.5)*36,r.z=(Math.random()-.5)*36),n.makeTranslation(this.pos.x+r.x,this.pos.y+r.y,this.pos.z+r.z),this.rain.setMatrixAt(i,n)}this.rain.instanceMatrix.needsUpdate=!0}updateRainbow(){if(!this.mods.has("rainbow"))return;const e=this.elapsed*.12%1;for(const n of cc("rainbow_block"))n.color.setHSL(e,.85,.6)}}const p2=[{t:0,v:"#f7b27a"},{t:.08,v:"#9ad0ff"},{t:.45,v:"#9ad0ff"},{t:.52,v:"#f5895a"},{t:.6,v:"#0b1026"},{t:.92,v:"#0b1026"},{t:1,v:"#f7b27a"}],m2=[{t:0,v:"#ffcaa0"},{t:.12,v:"#fff6e0"},{t:.5,v:"#ffb47a"},{t:.6,v:"#6a78c0"},{t:.9,v:"#6a78c0"},{t:1,v:"#ffcaa0"}],g2=[{t:0,v:.3},{t:.12,v:.9},{t:.45,v:.9},{t:.55,v:.25},{t:.6,v:.05},{t:.92,v:.05},{t:1,v:.3}],v2=[{t:0,v:.6},{t:.12,v:.95},{t:.5,v:.7},{t:.6,v:.28},{t:.92,v:.28},{t:1,v:.6}],_2=[{t:0,v:.2},{t:.12,v:.28},{t:.5,v:.22},{t:.6,v:.1},{t:.92,v:.1},{t:1,v:.2}];function Py(t,e){for(let n=0;n<t.length-1;n++)if(e>=t[n].t&&e<=t[n+1].t){const i=(e-t[n].t)/(t[n+1].t-t[n].t||1);return[t[n],t[n+1],i]}return[t[t.length-1],t[t.length-1],0]}const y2=new Ge,x2=new Ge,na=new I,w0=new Ge,T0=new Ge;function A0(t,e){const[n,i,r]=Py(t,e);return w0.set(n.v),T0.set(i.v),w0.lerp(T0,r)}function Nd(t,e){const[n,i,r]=Py(t,e);return n.v+(i.v-n.v)*r}const b0=[{id:"survival",name:"Survival",emoji:"🗡️",desc:"Hearts, fall & mob damage. Stay alive!"},{id:"creative",name:"Creative",emoji:"🎨",desc:"Fly, no damage, build anything."},{id:"hardcore",name:"Hardcore",emoji:"💀",desc:"Survival — but one death ends the world."},{id:"deathban",name:"DeathBan",emoji:"⏳",desc:"Estilo DanoMC: si mueres, baneo temporal."},{id:"spectator",name:"Spectator",emoji:"👀",desc:"Fly through everything. Look, don’t touch."}],Dd={survival:"Survival",creative:"Creative",hardcore:"Hardcore",deathban:"DeathBan",spectator:"Spectator"},S2=[{id:"hypixel",name:"Hypixel Network",emoji:"🟡",motd:"The #1 Minecraft server — minigames & more!",players:98234,ping:5,mode:"survival",worldType:"normal",mods:["mobs","ores","decorations","tools"]},{id:"mikecrack",name:"El Mundo de Mike",emoji:"🐶",motd:"¡El server de Mikecrack y los compas!",players:45120,ping:4,mode:"creative",worldType:"normal",mods:["rainbow","decorations","mobs","special"]},{id:"karmaland",name:"Karmaland — Vegetta777",emoji:"🟣",motd:"Aventuras, mods y caos con la banda.",players:31002,ping:4,mode:"survival",worldType:"normal",mods:["mobs","ores","tools","explosives"]},{id:"rubius",name:"Rubius SMP",emoji:"🔴",motd:"¡Sobrevive si puedes! Una vida.",players:52310,ping:3,mode:"hardcore",worldType:"normal",mods:["mobs","ores","tools"]},{id:"danomc",name:"DanoMC",emoji:"🟠",motd:"¡DeathBan! Si mueres, baneo temporal.",players:38940,ping:4,mode:"deathban",worldType:"normal",mods:["mobs","ores","tools"]},{id:"dreamsmp",name:"Dream SMP",emoji:"🟢",motd:"Manhunt, TNT & total chaos.",players:27771,ping:4,mode:"survival",worldType:"normal",mods:["mobs","explosives","tools"]},{id:"grefg",name:"TheGrefg — Floppy World",emoji:"🔵",motd:"Build battles on a flat canvas.",players:19880,ping:5,mode:"creative",worldType:"flat",mods:["decorations","rainbow","special","heroes"]},{id:"preston",name:"PrestonPlayz Explosives",emoji:"💣",motd:"Nukes, dynamite & giant craters!",players:14302,ping:3,mode:"creative",worldType:"flat",mods:["explosives","tools","special"]},{id:"sky",name:"Skywars Islands",emoji:"🏝️",motd:"One island, one chance. Survive the void.",players:6651,ping:4,mode:"hardcore",worldType:"skyblock",mods:["mobs","tools"]},{id:"kmm",name:"KMM Realms",emoji:"⛏️",motd:"Tu reino privado — build with friends.",players:1,ping:5,mode:"creative",worldType:"oneblock",mods:["decorations","rainbow"]}];class Qf{constructor(e,n){q(this,"ws");q(this,"url");q(this,"ev");q(this,"myId","");this.ev=e,this.url=n||Qf.defaultUrl()}static defaultUrl(){const e=new URLSearchParams(location.search).get("net");return e||`${location.protocol==="https:"?"wss":"ws"}://${location.host||"localhost:4188"}/ws`}connect(e,n,i){this.ev.onStatus("connecting");let r;try{r=new WebSocket(this.url)}catch{this.ev.onStatus("closed");return}this.ws=r,r.onopen=()=>{this.send({t:"join",room:e,name:n,config:i}),this.ev.onStatus("open")},r.onclose=()=>this.ev.onStatus("closed"),r.onerror=()=>this.ev.onStatus("closed"),r.onmessage=s=>{let o;try{o=JSON.parse(s.data)}catch{return}this.dispatch(o)}}dispatch(e){switch(e.t){case"welcome":this.myId=e.id,this.ev.onWelcome(e.id,e.config??null,e.edits??[],e.players??[]);break;case"peer-join":this.ev.onPeerJoin(e.id,e.name);break;case"peer-leave":this.ev.onPeerLeave(e.id);break;case"peer-state":this.ev.onPeerState(e.id,e.x,e.y,e.z,e.yaw,e.pitch);break;case"peer-edit":this.ev.onPeerEdit(e.id,e.x,e.y,e.z,e.block??null);break;case"chat":this.ev.onChat(e.from,e.name,e.text,e.ts);break;case"system":this.ev.onSystem(e.text,e.ts);break;case"presence":this.ev.onPresence(e.users??[]);break;case"signal":this.ev.onSignal(e.from,e.data);break}}send(e){var n;((n=this.ws)==null?void 0:n.readyState)===WebSocket.OPEN&&this.ws.send(JSON.stringify(e))}state(e,n,i,r,s){this.send({t:"state",x:e,y:n,z:i,yaw:r,pitch:s})}edit(e,n,i,r){this.send({t:"edit",x:e,y:n,z:i,block:r})}chat(e){this.send({t:"chat",text:e})}signal(e,n){this.send({t:"signal",to:e,data:n})}close(){var e;try{(e=this.ws)==null||e.close()}catch{}this.ws=void 0}}const M2={iceServers:[{urls:"stun:stun.l.google.com:19302"}]};class E2{constructor(e){q(this,"net");q(this,"local");q(this,"pcs",new Map);q(this,"audios",new Map);q(this,"active",!1);q(this,"muted",!1);q(this,"onError");q(this,"onPeerSpeaking");this.net=e}async start(){var e;if(this.active)return!0;try{return this.local=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1}),this.active=!0,!0}catch{return(e=this.onError)==null||e.call(this,"No se pudo abrir el micrófono (permiso denegado o no disponible)."),!1}}connectPeer(e){if(!this.local||this.pcs.has(e))return;const n=this.net.myId>e,i=new RTCPeerConnection(M2);this.pcs.set(e,i);for(const r of this.local.getTracks())i.addTrack(r,this.local);i.onicecandidate=r=>{r.candidate&&this.net.signal(e,{ice:r.candidate.toJSON()})},i.ontrack=r=>this.attach(e,r.streams[0]),i.onconnectionstatechange=()=>{(i.connectionState==="failed"||i.connectionState==="closed")&&this.removePeer(e)},n&&(i.onnegotiationneeded=async()=>{var r;try{const s=await i.createOffer();await i.setLocalDescription(s),this.net.signal(e,{sdp:(r=i.localDescription)==null?void 0:r.toJSON()})}catch{}})}async onSignal(e,n){var s;if(!this.local)return;const i=n;let r=this.pcs.get(e);if(r||(this.connectPeer(e),r=this.pcs.get(e)),!!r)try{if(i.sdp){if(await r.setRemoteDescription(i.sdp),i.sdp.type==="offer"){const o=await r.createAnswer();await r.setLocalDescription(o),this.net.signal(e,{sdp:(s=r.localDescription)==null?void 0:s.toJSON()})}}else i.ice&&await r.addIceCandidate(i.ice)}catch{}}attach(e,n){let i=this.audios.get(e);i||(i=new Audio,i.autoplay=!0,this.audios.set(e,i)),i.srcObject=n,i.play().catch(()=>{})}removePeer(e){const n=this.pcs.get(e);if(n)try{n.close()}catch{}this.pcs.delete(e);const i=this.audios.get(e);i&&(i.srcObject=null),this.audios.delete(e)}setMuted(e){var n;this.muted=e,(n=this.local)==null||n.getAudioTracks().forEach(i=>{i.enabled=!e})}stop(){var e;for(const n of[...this.pcs.keys()])this.removePeer(n);(e=this.local)==null||e.getTracks().forEach(n=>n.stop()),this.local=void 0,this.active=!1}}const R0=["Now with hearts!","100% block-powered!","Watch that lava!","¡Vamos a minar!","Try Hardcore mode!","Diamonds below!","Survival awaits!","Build something epic!","Mine, craft, repeat!","Don’t dig straight down!","Spectator goes through walls!"],ql=20;var P0;const C0=typeof window<"u"&&(((P0=window.matchMedia)==null?void 0:P0.call(window,"(pointer: coarse)").matches)||"ontouchstart"in window),Ly="mc-from-kmm-friends";function w2(){try{const t=localStorage.getItem(Ly);if(t)return JSON.parse(t)}catch{}return[{name:"Mikecrack",admin:!1},{name:"DanoMC",admin:!0}]}function T2(t){let e=0;for(let n=0;n<t.length;n++)e=e+t.charCodeAt(n)*(n+1)|0;return e%3!==0}const Id={creative:"creative",crea:"creative",creativo:"creative",c:"creative",survival:"survival",surv:"survival",sv:"survival",supervivencia:"survival",spectator:"spectator",spec:"spectator",espectador:"spectator",hardcore:"hardcore",hc:"hardcore",deathban:"deathban",db:"deathban"},Ud={normal:"normal",flat:"flat",plano:"flat",plana:"flat",skyblock:"skyblock",isla:"skyblock",oneblock:"oneblock",unbloque:"oneblock"};function A2(){var rp;const t=xe.useRef(null),e=xe.useRef(null),n=xe.useRef(null),i=xe.useRef(void 0),[r,s]=xe.useState("title"),[o]=xe.useState(()=>R0[Math.floor(Math.random()*R0.length)]),[a,l]=xe.useState(new Set),[c,u]=xe.useState(new Set),[h,f]=xe.useState("normal"),[g,v]=xe.useState("creative"),[_,p]=xe.useState(!1),[d,y]=xe.useState(()=>Ry.slice(0,Zs)),[m,S]=xe.useState(!1),[C,b]=xe.useState(!1),[T,L]=xe.useState(0),[K,x]=xe.useState(!1),[P,se]=xe.useState(0),[ne,U]=xe.useState(0),[Y,$]=xe.useState(null),[Q,N]=xe.useState(.12),[z,W]=xe.useState(ql),[J,le]=xe.useState(ql),[be,G]=xe.useState(!1),[ee,pe]=xe.useState(0),[Pe,Ae]=xe.useState(()=>Date.now()),[_e,at]=xe.useState(w2),[Ue,F]=xe.useState(""),[It,Ce]=xe.useState(!1),[$e,Le]=xe.useState(!1),[Je,We]=xe.useState(""),[qe,Mt]=xe.useState(!1),[R,M]=xe.useState(1),[X,Z]=xe.useState(72),[ie,te]=xe.useState(1),[Fe,Ie]=xe.useState(1),[ce,me]=xe.useState(5),[je,oe]=xe.useState(!1),ht=xe.useRef(null),ke=xe.useRef(null),we=xe.useRef(null),[Se,Me]=xe.useState(!1),[Ze,Oe]=xe.useState(""),[gt,D]=xe.useState(""),[fe,H]=xe.useState("closed"),[ue,ge]=xe.useState([]),[Qe,ft]=xe.useState([]),[Ot,rn]=xe.useState(""),[lt,zt]=xe.useState(!1),[xn,wo]=xe.useState(!1),[ls,cs]=xe.useState(!1),Wa=xe.useMemo(()=>XR(c),[c]),qi=d.map(w=>w?Bi.get(w)??null:null),ja=g==="survival"||g==="hardcore"||g==="deathban";xe.useEffect(()=>{var j;if(!_)return;const w=new f2(t.current,{onLock:x,onSelect:se,onFps:U,onTime:N,onInventory:S,onHacks:b,onHackState:l,onHealth:(Re,et)=>{W(Re),le(et)},onDead:G,onBanned:pe,onConsole:Le,onMessage:Re=>{$(Re),window.clearTimeout(i.current),i.current=window.setTimeout(()=>$(null),1700)},...Se&&ht.current?{onState:(Re,et,de,ct,ut)=>{var Bt;return(Bt=ht.current)==null?void 0:Bt.state(Re,et,de,ct,ut)},onEdit:(Re,et,de,ct)=>{var ut;return(ut=ht.current)==null?void 0:ut.edit(Re,et,de,ct)}}:{}},{mods:c,hacks:a,hotbar:d,worldType:h,mode:g});if(e.current=w,w.start(),w.setSensitivity(R),w.setFov(X),w.setDaySpeed(ie),w.setQuality(Fe),ce!==5&&w.setRenderDistance(ce),oe(c.has("realism")),Se){const Re=we.current;if(we.current=null,Re){for(const de of Re.edits){const[ct,ut,Bt]=de.k.split(",").map(Number);w.applyRemoteEdit(ct,ut,Bt,de.b)}for(const de of Re.players)w.addPeer(de.id,de.name),w.setPeerState(de.id,de.x,de.y,de.z,de.yaw,de.pitch)}const et=ke.current;et==null||et.start().then(de=>{if(de){wo(!0);for(const ct of(Re==null?void 0:Re.players)??[])et.connectPeer(ct.id)}})}return C0?w.setTouchActive(!0):w.isDead||(j=t.current)==null||j.requestPointerLock(),()=>{var Re,et;window.clearTimeout(i.current),w.dispose(),e.current=null,(Re=ke.current)==null||Re.stop(),(et=ht.current)==null||et.close(),ke.current=null,ht.current=null}},[_]),xe.useEffect(()=>{var w;(w=n.current)==null||w.scrollIntoView({block:"nearest",inline:"center"})},[P]),xe.useEffect(()=>{if(!Se)return;const w=j=>{const Re=document.activeElement,et=!!Re&&(Re.tagName==="INPUT"||Re.tagName==="TEXTAREA");j.code==="KeyT"&&!et&&!lt&&(j.preventDefault(),document.pointerLockElement&&document.exitPointerLock(),zt(!0))};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[Se,lt]),xe.useEffect(()=>{if(!(be&&g==="deathban"))return;const w=window.setInterval(()=>Ae(Date.now()),250);return()=>window.clearInterval(w)},[be,g]);const To=Math.max(0,Math.ceil((ee-Pe)/1e3)),du=Q>.05&&Q<.52,Ao=qi[P],Xa=w=>{const j=new Set(c);j.has(w)?j.delete(w):j.add(w),u(j)},E=w=>{var Re;const j=new Set(a);j.has(w)?j.delete(w):j.add(w),l(j),(Re=e.current)==null||Re.setHacks(j)},k=w=>{var Re;const j=[...d];j[T]=w,y(j),(Re=e.current)==null||Re.setHotbar(j),L(et=>Math.min(et+1,Zs-1))},B=()=>{W(ql),le(ql),G(!1),p(!0)},V=w=>{f(w.worldType),u(new Set(w.mods)),l(new Set(w.hacks??[])),v(w.mode),B()},O=w=>ft(j=>[...j.slice(-40),w]),ve=()=>{const w=Ze.trim()||`Player${Math.floor(1e3+Math.random()*9e3)}`,j=gt.trim().toLowerCase()||"lobby";Oe(w),D(j);const Re=new Qf({onStatus:H,onWelcome:(de,ct,ut,Bt)=>{ct&&(f(ct.worldType),u(new Set(ct.mods))),v("creative"),we.current={edits:ut,players:Bt},ge(Bt.map(Mn=>({id:Mn.id,name:Mn.name}))),Me(!0),B()},onPeerJoin:(de,ct)=>{var ut,Bt;(ut=e.current)==null||ut.addPeer(de,ct),(Bt=ke.current)==null||Bt.connectPeer(de)},onPeerLeave:de=>{var ct,ut;(ct=e.current)==null||ct.removePeer(de),(ut=ke.current)==null||ut.removePeer(de)},onPeerState:(de,ct,ut,Bt,Mn,Nt)=>{var No;return(No=e.current)==null?void 0:No.setPeerState(de,ct,ut,Bt,Mn,Nt)},onPeerEdit:(de,ct,ut,Bt,Mn)=>{var Nt;return(Nt=e.current)==null?void 0:Nt.applyRemoteEdit(ct,ut,Bt,Mn)},onChat:(de,ct,ut)=>O({name:ct,text:ut}),onSystem:de=>O({name:"",text:de,sys:!0}),onPresence:de=>ge(de),onSignal:(de,ct)=>{var ut;return(ut=ke.current)==null?void 0:ut.onSignal(de,ct)}});ht.current=Re;const et=new E2(Re);et.onError=de=>{rt(de),wo(!1)},ke.current=et,Re.connect(j,w,{worldType:h,mods:[...c]})},Ee=()=>{var j;const w=!ls;cs(w),(j=ke.current)==null||j.setMuted(w)},Ne=()=>{var j,Re;const w=Ot.trim();w&&((j=ht.current)==null||j.chat(w),O({name:Ze,text:w})),rn(""),zt(!1),(Re=t.current)==null||Re.requestPointerLock()},De=w=>{at(w);try{localStorage.setItem(Ly,JSON.stringify(w))}catch{}},Xe=()=>{const w=Ue.trim();!w||_e.some(j=>j.name.toLowerCase()===w.toLowerCase())||(De([..._e,{name:w,admin:!1}]),F(""))},ze=w=>De(_e.filter(j=>j.name!==w)),Be=w=>De(_e.map(j=>j.name===w?{...j,admin:!j.admin}:j)),Et=w=>{var Re,et;Ce(w);const j=w?new Set(Rd.map(de=>de.id)):new Set;l(j),(Re=e.current)==null||Re.setHacks(j),(et=e.current)==null||et.setOp(w)},hn=()=>Et(!It),rt=w=>{$(w),window.clearTimeout(i.current),i.current=window.setTimeout(()=>$(null),1700)},Jn=w=>{var et,de;const j=[...d];let Re=j.findIndex(ct=>ct===null);Re===-1&&(Re=P),j[Re]=w,y(j),(et=e.current)==null||et.setHotbar(j),(de=e.current)==null||de.setSelected(Re)},vt=w=>{var j;v(w),(j=e.current)==null||j.setMode(w),rt(`Modo: ${Dd[w]}`)},He=w=>{var j;f(w),(j=e.current)==null||j.setWorld(w),rt(`🌍 Mundo: ${w}`)},bo=w=>{var j;M(w),(j=e.current)==null||j.setSensitivity(w)},_t=w=>{var j;Z(w),(j=e.current)==null||j.setFov(w)},Ai=w=>{var j;te(w),(j=e.current)==null||j.setDaySpeed(w)},Lr=w=>{var j;Ie(w),(j=e.current)==null||j.setQuality(w)},fi=w=>{var j;me(w),(j=e.current)==null||j.setRenderDistance(w)},Ro=w=>{var j;oe(w),(j=e.current)==null||j.setRealism(w)},qt=()=>{Lr(.6),fi(3)},bi=()=>{Lr(1),fi(5)},Co=()=>{Lr(1.5),fi(7)},Sn=()=>{var w;Mt(!1),(w=t.current)==null||w.requestPointerLock()},Po=w=>{var Bt,Mn;const j=w.trim().replace(/^\//,"");if(!j)return!1;const[Re,...et]=j.split(/\s+/),de=Re.toLowerCase(),ut=["@t","@e","@todos","todos"].includes((et[0]??"").toLowerCase())?"todos":"ti";if(de==="objeto"||de==="give"||de==="item"||de==="dar"){const Nt=et.join(" ").trim().toLowerCase();if(!Nt)return rt("Uso: /objeto <bloque>"),!1;const No=Nt.replace(/\s+/g,"_"),sp=[...Bi.values()],mu=sp.find(Do=>Do.id.toLowerCase()===No||Do.name.toLowerCase()===Nt)||sp.find(Do=>Do.id.toLowerCase().includes(No)||Do.name.toLowerCase().includes(Nt));if(!mu)return rt(`No existe el bloque "${Nt}"`),!1;Jn(mu.id),rt(`📦 Tienes: ${mu.name}`)}else if(de==="op")Et(!0),rt(`🛡️ OP activado para ${ut}`);else if(de==="desop")Et(!1),rt(`OP quitado para ${ut}`);else if(de==="gamemode"||de==="modo"||de==="gm"){const Nt=Id[(et[0]??"").toLowerCase()];if(!Nt)return rt("Uso: /gamemode <creative|survival|spectator|hardcore|deathban>"),!1;vt(Nt)}else if(Id[de])vt(Id[de]);else if(de==="mundo"||de==="world"){const Nt=Ud[(et[0]??"").toLowerCase()];if(!Nt)return rt("Uso: /mundo <normal|plano|skyblock|oneblock>"),!1;He(Nt)}else if(Ud[de])He(Ud[de]);else if(de==="casa1000"||de==="casagrande"||de==="grande"||de==="big"||de==="mansiongrande"||de==="casa"&&et[0]==="1000"||de==="mansion"&&et[0]==="grande")(Bt=e.current)==null||Bt.pasteBigHouse(),rt("🏢 ¡Casa de 1000 m² · 5 plantas · 2 puertas!");else if(de==="paste"||de==="mansion"||de==="mansión"||de==="casa")(Mn=e.current)==null||Mn.pasteMansion(),rt("🏰 ¡Mansión de lujo construida!");else if(de==="copy"||de==="copiar")rt("Mansión copiada — escribe /paste para construirla");else{if(de==="ajustes"||de==="settings"||de==="opciones"||de==="config")return Mt(!0),!0;rt(`Comando desconocido: /${de}`)}return!1},Lo=(w=!0)=>{var j;Le(!1),We(""),w&&((j=t.current)==null||j.requestPointerLock())},Yi=xe.useRef(null),$a=xe.useRef({x:0,y:0}),qa=xe.useRef(null),hu=xe.useRef({x:0,y:0}),[Jf,ep]=xe.useState({x:0,y:0}),us=xe.useRef(null),fu=52;xe.useEffect(()=>()=>{us.current!=null&&window.clearInterval(us.current)},[]);const Ny=w=>{Yi.current===null&&(Yi.current=w.pointerId,$a.current={x:w.clientX,y:w.clientY})},Dy=w=>{var j;w.pointerId===Yi.current&&((j=e.current)==null||j.touchLook(w.clientX-$a.current.x,w.clientY-$a.current.y),$a.current={x:w.clientX,y:w.clientY})},tp=w=>{w.pointerId===Yi.current&&(Yi.current=null)},np=(w,j)=>{const Re=w-hu.current.x,et=j-hu.current.y,de=Math.hypot(Re,et)||1,ct=Math.min(de,fu);ep({x:Re/de*ct,y:et/de*ct});const ut=Re/fu,Bt=et/fu,Mn=.35,Nt=e.current;Nt&&(Nt.touchKey("KeyW",Bt<-Mn),Nt.touchKey("KeyS",Bt>Mn),Nt.touchKey("KeyA",ut<-Mn),Nt.touchKey("KeyD",ut>Mn))},Iy=w=>{qa.current=w.pointerId;const j=w.currentTarget.getBoundingClientRect();hu.current={x:j.left+j.width/2,y:j.top+j.height/2},w.currentTarget.setPointerCapture(w.pointerId),np(w.clientX,w.clientY)},Uy=w=>{w.pointerId===qa.current&&np(w.clientX,w.clientY)},ip=w=>{if(w.pointerId!==qa.current)return;qa.current=null,ep({x:0,y:0});const j=e.current;j==null||j.touchKey("KeyW",!1),j==null||j.touchKey("KeyS",!1),j==null||j.touchKey("KeyA",!1),j==null||j.touchKey("KeyD",!1)},Ya=w=>{var j;return(j=e.current)==null?void 0:j.touchKey("Space",w)},ky=()=>{var w;(w=e.current)==null||w.touchPrimary(),us.current=window.setInterval(()=>{var j;return(j=e.current)==null?void 0:j.touchPrimary()},260)},pu=()=>{us.current!=null&&(window.clearInterval(us.current),us.current=null)};return A.jsxs("div",{className:"game",children:[A.jsx("canvas",{ref:t,className:"viewport"}),C0&&_&&!be&&A.jsxs(A.Fragment,{children:[A.jsx("div",{className:"touch-look",onPointerDown:Ny,onPointerMove:Dy,onPointerUp:tp,onPointerCancel:tp}),A.jsx("div",{className:"touch-joystick",onPointerDown:Iy,onPointerMove:Uy,onPointerUp:ip,onPointerCancel:ip,children:A.jsx("div",{className:"touch-knob",style:{transform:`translate(${Jf.x}px, ${Jf.y}px)`}})}),A.jsxs("div",{className:"touch-actions",children:[A.jsx("button",{className:"touch-btn jump","aria-label":"Saltar",onPointerDown:()=>Ya(!0),onPointerUp:()=>Ya(!1),onPointerLeave:()=>Ya(!1),onPointerCancel:()=>Ya(!1),children:"⤒"}),A.jsx("button",{className:"touch-btn place","aria-label":"Poner bloque",onPointerDown:()=>{var w;return(w=e.current)==null?void 0:w.touchSecondary()},children:"🧱"}),A.jsx("button",{className:"touch-btn mine","aria-label":"Picar",onPointerDown:ky,onPointerUp:pu,onPointerLeave:pu,onPointerCancel:pu,children:"⛏️"})]})]}),A.jsxs("div",{className:"crosshair","aria-hidden":!0,children:[A.jsx("span",{}),A.jsx("span",{})]}),A.jsxs("div",{className:"topbar",children:[A.jsxs("span",{className:"fps",children:[ne," FPS"]}),_&&!be&&A.jsxs("span",{className:"hud-btns",children:[A.jsx("button",{className:"inv-btn",title:"Hacks (H)",onClick:()=>{var w;return(w=e.current)==null?void 0:w.openHacks()},children:"⚡"}),A.jsx("button",{className:"inv-btn",title:"Inventory — choose your 9 blocks (E)",onClick:()=>{var w;return(w=e.current)==null?void 0:w.openInventory()},children:"⋮"}),Se&&A.jsxs(A.Fragment,{children:[A.jsx("button",{className:"inv-btn",title:"Chat (T)",onClick:()=>{document.exitPointerLock(),zt(!0)},children:"💬"}),A.jsx("button",{className:`inv-btn${ls||!xn?" off":""}`,title:xn?ls?"Activar micrófono":"Silenciar micrófono":"Micrófono no disponible",onClick:Ee,children:xn&&!ls?"🎙️":"🔇"})]})]}),_&&Se&&A.jsxs("span",{className:"roster",title:"Jugadores en la sala",children:["👥 ",ue.length+1]}),A.jsxs("span",{className:"clock",title:"Time of day",children:[du?"☀️":"🌙",A.jsx("span",{className:"clockbar",children:A.jsx("span",{className:"clockfill",style:{width:`${Math.round(Q*100)}%`}})})]})]}),Y&&A.jsx("div",{className:"toast",children:Y}),_&&Se&&A.jsxs("div",{className:`chat${lt?" open":""}`,children:[A.jsx("div",{className:"chat-log",children:Qe.slice(-7).map((w,j)=>A.jsx("div",{className:`chat-line${w.sys?" sys":""}`,children:w.sys?A.jsx("em",{children:w.text}):A.jsxs(A.Fragment,{children:[A.jsxs("span",{className:"chat-name",children:[w.name,":"]})," ",w.text]})},j))}),lt&&A.jsx("input",{className:"chat-input",autoFocus:!0,maxLength:280,value:Ot,placeholder:"Escribe un mensaje…  (Enter envía · Esc cierra)",onChange:w=>rn(w.target.value),onKeyDown:w=>{var j;w.key==="Enter"?Ne():w.key==="Escape"&&(zt(!1),rn(""),(j=t.current)==null||j.requestPointerLock())}})]}),_&&$e&&A.jsxs("div",{className:"cmd-bar",children:[A.jsx("span",{className:"cmd-prompt",children:"/"}),A.jsx("input",{className:"cmd-input",autoFocus:!0,value:Je,placeholder:"objeto stone · gamemode creative · paste · op @a · ajustes",onChange:w=>We(w.target.value),onKeyDown:w=>{if(w.code==="F1")w.preventDefault(),Lo();else if(w.key==="Enter"){const j=Po(Je);Lo(!j)}else w.key==="Escape"&&Lo()}})]}),_&&A.jsxs("div",{className:"belt-wrap",children:[ja&&A.jsx("div",{className:"hearts",title:`${z} / ${J} health`,children:Array.from({length:J/2}).map((w,j)=>{const Re=Math.max(0,Math.min(2,z-j*2));return A.jsx("span",{className:"heart",children:A.jsx("span",{className:"heart-fill",style:{width:`${Re/2*100}%`}})},j)})}),A.jsx("div",{className:"held-name",children:(Ao==null?void 0:Ao.name)??"—"}),A.jsx("div",{className:"belt",children:qi.map((w,j)=>A.jsxs("button",{ref:j===P?n:void 0,className:`slot${j===P?" active":""}${w?"":" empty"}`,title:(w==null?void 0:w.name)??"Empty",onClick:()=>{var Re;return(Re=e.current)==null?void 0:Re.setSelected(j)},children:[w&&A.jsx("img",{src:w.icon,alt:w.name,draggable:!1}),A.jsx("span",{className:"num",children:j+1}),(w==null?void 0:w.tool)&&A.jsx("span",{className:"tooltag",children:"tool"})]},j))})]}),!_&&r==="title"&&A.jsx("div",{className:"overlay title-bg",children:A.jsxs("div",{className:"title-screen",children:[A.jsxs("h1",{className:"mc-title",children:["MINECRAFT",A.jsx("span",{className:"kmm-tag",children:"from KMM"})]}),A.jsx("div",{className:"splash",children:o}),A.jsxs("div",{className:"menu-btns",children:[A.jsx("button",{className:"menu-btn primary",onClick:()=>s("single"),children:"🎮 Singleplayer"}),A.jsx("button",{className:"menu-btn",onClick:()=>s("online"),children:"🌍 Jugar con amigos"}),A.jsx("button",{className:"menu-btn",onClick:()=>s("multi"),children:"🌐 Servidores"}),A.jsx("button",{className:"menu-btn",onClick:()=>s("friends"),children:"👥 Amigos"}),A.jsx("button",{className:"menu-btn ghost",onClick:()=>window.location.reload(),children:"↺ Reset"})]}),A.jsx("div",{className:"title-foot",children:"Mini-Game Arcade · KMM"})]})}),!_&&r==="single"&&A.jsx("div",{className:"overlay",children:A.jsxs("div",{className:"panel menu",children:[A.jsx("button",{className:"back",onClick:()=>s("title"),children:"‹ Back"}),A.jsx("h1",{children:"🎮 Singleplayer"}),A.jsx("p",{className:"sub",children:"Choose your world, mode, hacks & mods."}),A.jsxs("div",{className:"picker",children:[A.jsx("div",{className:"picker-head",children:A.jsx("span",{children:"🌍 World"})}),A.jsxs("div",{className:"chips",children:[A.jsxs("button",{className:`chip${h==="normal"?" on":""}`,title:"Infinite rolling hills with trees.",onClick:()=>f("normal"),children:[A.jsx("span",{className:"chip-emoji",children:"⛰️"}),"Normal"]}),A.jsxs("button",{className:`chip${h==="flat"?" on":""}`,title:"Infinite dead-level superflat.",onClick:()=>f("flat"),children:[A.jsx("span",{className:"chip-emoji",children:"🟩"}),"Flat"]}),A.jsxs("button",{className:`chip${h==="skyblock"?" on":""}`,title:"A tiny starter island floating in the void.",onClick:()=>f("skyblock"),children:[A.jsx("span",{className:"chip-emoji",children:"🏝️"}),"Skyblock"]}),A.jsxs("button",{className:`chip${h==="oneblock"?" on":""}`,title:"One block that regenerates forever — mine it for new types.",onClick:()=>f("oneblock"),children:[A.jsx("span",{className:"chip-emoji",children:"🧱"}),"OneBlock"]})]}),A.jsx("div",{className:"picker-head",children:A.jsx("span",{children:"🎯 Game mode"})}),A.jsx("div",{className:"chips",children:b0.map(w=>A.jsxs("button",{className:`chip${g===w.id?" on":""}`,title:w.desc,onClick:()=>v(w.id),children:[A.jsx("span",{className:"chip-emoji",children:w.emoji}),w.name]},w.id))}),A.jsx("p",{className:"mode-desc",children:(rp=b0.find(w=>w.id===g))==null?void 0:rp.desc}),A.jsxs("div",{className:"picker-head",children:[A.jsx("span",{children:"⚡ Hacks"}),a.size>0&&A.jsx("button",{className:"clear",onClick:()=>l(new Set),children:"clear"})]}),A.jsx("div",{className:"chips",children:Rd.map(w=>A.jsxs("button",{className:`chip${a.has(w.id)?" on":""}`,title:w.desc,onClick:()=>E(w.id),children:[A.jsx("span",{className:"chip-emoji",children:w.emoji}),w.name]},w.id))}),A.jsxs("div",{className:"picker-head",children:[A.jsx("span",{children:"🧩 Mods"}),c.size>0&&A.jsx("button",{className:"clear",onClick:()=>u(new Set),children:"clear"})]}),A.jsx("div",{className:"chips",children:$h.map(w=>A.jsxs("button",{className:`chip${c.has(w.id)?" on":""}`,title:w.desc,onClick:()=>Xa(w.id),children:[A.jsx("span",{className:"chip-emoji",children:w.emoji}),w.name]},w.id))})]}),A.jsxs("div",{className:"controls",children:[A.jsxs("div",{children:[A.jsx("kbd",{children:"W"}),A.jsx("kbd",{children:"A"}),A.jsx("kbd",{children:"S"}),A.jsx("kbd",{children:"D"}),A.jsx("span",{children:"Move"})]}),A.jsxs("div",{children:[A.jsx("kbd",{children:"E"}),A.jsx("span",{children:"Inventory"})]}),A.jsxs("div",{children:[A.jsx("kbd",{children:"H"}),A.jsx("span",{children:"Hacks panel"})]}),A.jsxs("div",{children:[A.jsx("kbd",{children:"X"}),A.jsx("span",{children:"X-Ray on/off"})]}),A.jsxs("div",{children:[A.jsx("kbd",{children:"F"}),A.jsx("span",{children:"Toggle fly"})]}),A.jsxs("div",{children:[A.jsx("kbd",{children:"Space"}),A.jsx("span",{children:"Jump / fly up"})]}),A.jsxs("div",{children:[A.jsx("kbd",{children:"Shift"}),A.jsx("span",{children:"Sprint / fly down"})]}),A.jsxs("div",{children:[A.jsx("kbd",{children:"F1"}),A.jsx("span",{children:"Comandos (/objeto, /op)"})]})]}),A.jsxs("button",{className:"play",onClick:B,children:["Play · ",Dd[g],a.size+c.size>0?` · ${a.size+c.size} active`:""]})]})}),!_&&r==="multi"&&A.jsx("div",{className:"overlay",children:A.jsxs("div",{className:"panel menu",children:[A.jsx("button",{className:"back",onClick:()=>s("title"),children:"‹ Back"}),A.jsx("h1",{children:"🌐 Multiplayer"}),A.jsx("p",{className:"sub",children:"Pick a server — each loads its own world."}),A.jsx("div",{className:"servers",children:S2.map(w=>A.jsxs("button",{className:"server",onClick:()=>V(w),children:[A.jsx("span",{className:"server-icon",children:w.emoji}),A.jsxs("span",{className:"server-body",children:[A.jsx("span",{className:"server-name",children:w.name}),A.jsx("span",{className:"server-motd",children:w.motd}),A.jsxs("span",{className:"server-tags",children:[A.jsx("span",{className:"tag",children:Dd[w.mode]}),A.jsx("span",{className:"tag",children:w.worldType}),w.mods.length>0&&A.jsxs("span",{className:"tag",children:[w.mods.length," mods"]})]})]}),A.jsxs("span",{className:"server-meta",children:[A.jsxs("span",{className:`ping ping-${w.ping}`,title:`${w.ping}/5 connection`,children:[A.jsx("i",{}),A.jsx("i",{}),A.jsx("i",{}),A.jsx("i",{}),A.jsx("i",{})]}),A.jsxs("span",{className:"server-players",children:["👥 ",w.players.toLocaleString()]}),A.jsx("span",{className:"join",children:"Join ›"})]})]},w.id))})]})}),!_&&r==="friends"&&A.jsx("div",{className:"overlay",children:A.jsxs("div",{className:"panel menu",children:[A.jsx("button",{className:"back",onClick:()=>s("title"),children:"‹ Back"}),A.jsx("h1",{children:"👥 Amigos"}),A.jsx("p",{className:"sub",children:"Agrega amigos y dales permisos de admin (OP)."}),A.jsxs("div",{className:"add-friend",children:[A.jsx("input",{className:"friend-input",placeholder:"Nombre del amigo…",value:Ue,maxLength:16,onChange:w=>F(w.target.value),onKeyDown:w=>{w.key==="Enter"&&Xe()}}),A.jsx("button",{className:"friend-add",onClick:Xe,children:"＋ Agregar"})]}),A.jsxs("div",{className:"friends",children:[_e.length===0&&A.jsx("p",{className:"empty",children:"Aún no tienes amigos. ¡Agrega uno!"}),_e.map(w=>{const j=T2(w.name);return A.jsxs("div",{className:"friend",children:[A.jsx("span",{className:`dot${j?" on":""}`,title:j?"En línea":"Desconectado"}),A.jsx("span",{className:"friend-name",children:w.name}),w.admin&&A.jsx("span",{className:"badge-admin",children:"🛡️ Admin"}),A.jsxs("span",{className:"friend-actions",children:[A.jsx("button",{className:`role${w.admin?" on":""}`,onClick:()=>Be(w.name),children:w.admin?"Quitar OP":"Hacer Admin"}),A.jsx("button",{className:"kick",title:"Eliminar",onClick:()=>ze(w.name),children:"✕"})]})]},w.name)})]})]})}),!_&&r==="online"&&A.jsx("div",{className:"overlay",children:A.jsxs("div",{className:"panel menu",children:[A.jsx("button",{className:"back",onClick:()=>s("title"),children:"‹ Back"}),A.jsx("h1",{children:"🌍 Jugar con amigos"}),A.jsx("p",{className:"sub",children:"Mundo compartido en vivo · chat · voz por micrófono."}),A.jsxs("div",{className:"add-friend",children:[A.jsx("input",{className:"friend-input",placeholder:"Tu nombre…",value:Ze,maxLength:16,onChange:w=>Oe(w.target.value)}),A.jsx("input",{className:"friend-input",placeholder:"Código de sala (ej: kmm)",value:gt,maxLength:24,onChange:w=>D(w.target.value),onKeyDown:w=>{w.key==="Enter"&&ve()}})]}),A.jsx("p",{className:"sub",style:{marginTop:4},children:"Comparte el mismo código con tus amigos para caer en el mismo mundo. El primero en entrar elige el mundo y los mods."}),A.jsxs("div",{className:"picker",children:[A.jsx("div",{className:"picker-head",children:A.jsx("span",{children:"🌍 World"})}),A.jsx("div",{className:"chips",children:["normal","flat","skyblock","oneblock"].map(w=>A.jsx("button",{className:`chip${h===w?" on":""}`,onClick:()=>f(w),children:w},w))}),A.jsxs("div",{className:"picker-head",children:[A.jsx("span",{children:"🧩 Mods"}),c.size>0&&A.jsx("button",{className:"clear",onClick:()=>u(new Set),children:"clear"})]}),A.jsx("div",{className:"chips",children:$h.map(w=>A.jsxs("button",{className:`chip${c.has(w.id)?" on":""}`,title:w.desc,onClick:()=>Xa(w.id),children:[A.jsx("span",{className:"chip-emoji",children:w.emoji}),w.name]},w.id))})]}),A.jsx("p",{className:"sub",children:"🎙️ Al entrar se pedirá permiso del micrófono para la voz (puedes silenciarlo dentro)."}),A.jsx("button",{className:"play",onClick:ve,children:fe==="connecting"?"Conectando…":"🚀 Conectar y jugar"}),A.jsx("p",{className:"sub",style:{marginTop:8,opacity:.7},children:"¿Amigos en otra casa? Comparte tu enlace con un túnel (cloudflared) — todos abren ese link y caen aquí."})]})}),_&&C&&A.jsx("div",{className:"overlay inv-overlay",children:A.jsxs("div",{className:"panel menu",children:[A.jsxs("div",{className:"inv-head",children:[A.jsx("h1",{children:"⚡ Hacks"}),A.jsxs("span",{className:"inv-hint",children:["Click to toggle · ",A.jsx("kbd",{children:"H"})," to close"]})]}),A.jsx("div",{className:"chips",children:Rd.map(w=>A.jsxs("button",{className:`chip${a.has(w.id)?" on":""}`,title:w.desc,onClick:()=>E(w.id),children:[A.jsx("span",{className:"chip-emoji",children:w.emoji}),w.name]},w.id))}),A.jsx("button",{className:"play",onClick:()=>{var w;return(w=e.current)==null?void 0:w.closeHacks()},children:"Done"})]})}),_&&m&&A.jsx("div",{className:"overlay inv-overlay",children:A.jsxs("div",{className:"panel inventory",children:[A.jsxs("div",{className:"inv-head",children:[A.jsx("h1",{children:"Inventory"}),A.jsxs("span",{className:"inv-hint",children:["Pick a slot, then a block · ",A.jsx("kbd",{children:"E"})," to close"]})]}),A.jsx("div",{className:"inv-hotbar",children:qi.map((w,j)=>A.jsxs("button",{className:`slot${j===T?" editing":""}${w?"":" empty"}`,title:`Slot ${j+1}`,onClick:()=>L(j),children:[w&&A.jsx("img",{src:w.icon,alt:w.name,draggable:!1}),A.jsx("span",{className:"num",children:j+1})]},j))}),A.jsxs("div",{className:"inv-grid",children:[A.jsx("button",{className:"inv-item clear-item",title:"Empty this slot",onClick:()=>k(null),children:"✕"}),Wa.map(w=>A.jsxs("button",{className:"inv-item",title:w.name,onClick:()=>k(w.id),children:[A.jsx("img",{src:w.icon,alt:w.name,draggable:!1}),w.tool&&A.jsx("span",{className:"tooltag",children:"tool"})]},w.id))]}),A.jsx("button",{className:"play",onClick:()=>{var w;return(w=e.current)==null?void 0:w.closeInventory()},children:"Done"})]})}),_&&qe&&A.jsx("div",{className:"overlay inv-overlay",children:A.jsxs("div",{className:"panel menu",children:[A.jsxs("div",{className:"inv-head",children:[A.jsx("h1",{children:"⚙️ Ajustes"}),A.jsx("span",{className:"inv-hint",children:"Cambios en vivo"})]}),A.jsxs("div",{className:"settings",children:[A.jsxs("label",{className:"setting",children:[A.jsxs("span",{children:["Sensibilidad del ratón ",A.jsxs("b",{children:[R.toFixed(1),"×"]})]}),A.jsx("input",{type:"range",min:.2,max:3,step:.1,value:R,onChange:w=>bo(Number(w.target.value))})]}),A.jsxs("label",{className:"setting",children:[A.jsxs("span",{children:["Campo de visión (FOV) ",A.jsxs("b",{children:[X,"°"]})]}),A.jsx("input",{type:"range",min:50,max:110,step:1,value:X,onChange:w=>_t(Number(w.target.value))})]}),A.jsxs("label",{className:"setting",children:[A.jsxs("span",{children:["Velocidad día/noche ",A.jsxs("b",{children:[ie.toFixed(1),"×"]})]}),A.jsx("input",{type:"range",min:0,max:3,step:.1,value:ie,onChange:w=>Ai(Number(w.target.value))})]}),A.jsx("div",{className:"picker-head",children:A.jsx("span",{children:"🖥️ Gráficos"})}),A.jsxs("label",{className:"setting toggle-row",children:[A.jsxs("span",{children:["🌅 Realismo ",A.jsx("small",{children:"(sombras del sol + luz cinematográfica)"})]}),A.jsx("input",{type:"checkbox",checked:je,onChange:w=>Ro(w.target.checked)})]}),A.jsxs("label",{className:"setting",children:[A.jsxs("span",{children:["Resolución / nitidez ",A.jsxs("b",{children:[Fe.toFixed(1),"×"]})," ",A.jsx("small",{children:"(menos = más FPS)"})]}),A.jsx("input",{type:"range",min:.4,max:2,step:.1,value:Fe,onChange:w=>Lr(Number(w.target.value))})]}),A.jsxs("label",{className:"setting",children:[A.jsxs("span",{children:["Distancia de visión ",A.jsx("b",{children:ce})," ",A.jsx("small",{children:"(menos = más FPS)"})]}),A.jsx("input",{type:"range",min:2,max:8,step:1,value:ce,onChange:w=>fi(Number(w.target.value))})]}),A.jsxs("div",{className:"chips",children:[A.jsx("button",{className:"chip",onClick:qt,children:"⚡ Más FPS"}),A.jsx("button",{className:"chip",onClick:bi,children:"⚖️ Normal"}),A.jsx("button",{className:"chip",onClick:Co,children:"🌟 Bonito"})]})]}),A.jsx("button",{className:"play",onClick:Sn,children:"Listo"})]})}),_&&be&&g==="hardcore"&&A.jsx("div",{className:"overlay gameover-bg",children:A.jsxs("div",{className:"panel gameover",children:[A.jsx("h1",{children:"☠️ Game Over"}),A.jsx("p",{className:"sub",children:"Hardcore is one life only. The world is gone."}),A.jsx("button",{className:"play danger",onClick:()=>window.location.reload(),children:"↺ New world"})]})}),_&&be&&g==="deathban"&&A.jsx("div",{className:"overlay gameover-bg",children:A.jsxs("div",{className:"panel gameover",children:[A.jsx("h1",{children:"⏳ DeathBan"}),A.jsx("p",{className:"sub",children:"Moriste. Baneo temporal estilo DanoMC — espera para reconectar."}),To>0?A.jsxs("button",{className:"play",disabled:!0,children:["Reconectar en ",To,"s…"]}):A.jsx("button",{className:"play",onClick:()=>{var w;return(w=e.current)==null?void 0:w.rejoin()},children:"↩ Reconectar"}),A.jsx("button",{className:"reload",onClick:()=>window.location.reload(),children:"‹ Menú"})]})}),_&&!K&&!m&&!C&&!be&&!$e&&!qe&&A.jsx("div",{className:"overlay",children:A.jsxs("div",{className:"panel pause",children:[A.jsx("h1",{children:"Paused"}),A.jsx("p",{className:"sub",children:"Click to jump back in."}),A.jsx("button",{className:"play",onClick:()=>{var w;return(w=t.current)==null?void 0:w.requestPointerLock()},children:"Resume"}),A.jsx("button",{className:"reload",onClick:()=>{var w;return(w=e.current)==null?void 0:w.openHacks()},children:"⚡ Hacks"}),A.jsxs("button",{className:`reload${It?" op-on":""}`,onClick:hn,children:["🛡️ ",It?"Quitar OP":"Hacerme OP (admin)"]}),A.jsx("button",{className:"reload",onClick:()=>Mt(!0),children:"⚙️ Ajustes"}),A.jsx("button",{className:"reload",onClick:()=>{var w;return(w=e.current)==null?void 0:w.openInventory()},children:"⋮ Choose blocks"}),A.jsx("button",{className:"reload",onClick:()=>window.location.reload(),children:"↺ New game"})]})})]})}kd.createRoot(document.getElementById("root")).render(A.jsx(tx.StrictMode,{children:A.jsx(A2,{})}));
