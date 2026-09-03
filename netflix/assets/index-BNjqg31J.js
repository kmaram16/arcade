var Fv=Object.defineProperty;var Ov=(t,e,n)=>e in t?Fv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Qe=(t,e,n)=>Ov(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function kv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zp={exports:{}},cl={},Bp={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ts=Symbol.for("react.element"),zv=Symbol.for("react.portal"),Bv=Symbol.for("react.fragment"),Hv=Symbol.for("react.strict_mode"),Gv=Symbol.for("react.profiler"),Vv=Symbol.for("react.provider"),Wv=Symbol.for("react.context"),jv=Symbol.for("react.forward_ref"),Xv=Symbol.for("react.suspense"),qv=Symbol.for("react.memo"),Yv=Symbol.for("react.lazy"),Qd=Symbol.iterator;function $v(t){return t===null||typeof t!="object"?null:(t=Qd&&t[Qd]||t["@@iterator"],typeof t=="function"?t:null)}var Hp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gp=Object.assign,Vp={};function Aa(t,e,n){this.props=t,this.context=e,this.refs=Vp,this.updater=n||Hp}Aa.prototype.isReactComponent={};Aa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Aa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wp(){}Wp.prototype=Aa.prototype;function Wu(t,e,n){this.props=t,this.context=e,this.refs=Vp,this.updater=n||Hp}var ju=Wu.prototype=new Wp;ju.constructor=Wu;Gp(ju,Aa.prototype);ju.isPureReactComponent=!0;var Jd=Array.isArray,jp=Object.prototype.hasOwnProperty,Xu={current:null},Xp={key:!0,ref:!0,__self:!0,__source:!0};function qp(t,e,n){var i,r={},a=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(a=""+e.key),e)jp.call(e,i)&&!Xp.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ts,type:t,key:a,ref:s,props:r,_owner:Xu.current}}function Kv(t,e){return{$$typeof:Ts,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ts}function Zv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ef=/\/+/g;function Nl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Zv(""+t.key):e.toString(36)}function yo(t,e,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ts:case zv:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Nl(s,0):i,Jd(r)?(n="",t!=null&&(n=t.replace(ef,"$&/")+"/"),yo(r,e,n,"",function(c){return c})):r!=null&&(qu(r)&&(r=Kv(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(ef,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Jd(t))for(var o=0;o<t.length;o++){a=t[o];var l=i+Nl(a,o);s+=yo(a,e,n,l,r)}else if(l=$v(t),typeof l=="function")for(t=l.call(t),o=0;!(a=t.next()).done;)a=a.value,l=i+Nl(a,o++),s+=yo(a,e,n,l,r);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Us(t,e,n){if(t==null)return t;var i=[],r=0;return yo(t,i,"","",function(a){return e.call(n,a,r++)}),i}function Qv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},So={transition:null},Jv={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:So,ReactCurrentOwner:Xu};function Yp(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Us,forEach:function(t,e,n){Us(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Us(t,function(){e++}),e},toArray:function(t){return Us(t,function(e){return e})||[]},only:function(t){if(!qu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Aa;We.Fragment=Bv;We.Profiler=Gv;We.PureComponent=Wu;We.StrictMode=Hv;We.Suspense=Xv;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jv;We.act=Yp;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Gp({},t.props),r=t.key,a=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,s=Xu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)jp.call(e,l)&&!Xp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ts,type:t.type,key:r,ref:a,props:i,_owner:s}};We.createContext=function(t){return t={$$typeof:Wv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Vv,_context:t},t.Consumer=t};We.createElement=qp;We.createFactory=function(t){var e=qp.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:jv,render:t}};We.isValidElement=qu;We.lazy=function(t){return{$$typeof:Yv,_payload:{_status:-1,_result:t},_init:Qv}};We.memo=function(t,e){return{$$typeof:qv,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=So.transition;So.transition={};try{t()}finally{So.transition=e}};We.unstable_act=Yp;We.useCallback=function(t,e){return Kt.current.useCallback(t,e)};We.useContext=function(t){return Kt.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};We.useEffect=function(t,e){return Kt.current.useEffect(t,e)};We.useId=function(){return Kt.current.useId()};We.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return Kt.current.useMemo(t,e)};We.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};We.useRef=function(t){return Kt.current.useRef(t)};We.useState=function(t){return Kt.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return Kt.current.useTransition()};We.version="18.3.1";Bp.exports=We;var Ve=Bp.exports;const e_=kv(Ve);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_=Ve,n_=Symbol.for("react.element"),i_=Symbol.for("react.fragment"),r_=Object.prototype.hasOwnProperty,a_=t_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s_={key:!0,ref:!0,__self:!0,__source:!0};function $p(t,e,n){var i,r={},a=null,s=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)r_.call(e,i)&&!s_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:n_,type:t,key:a,ref:s,props:r,_owner:a_.current}}cl.Fragment=i_;cl.jsx=$p;cl.jsxs=$p;zp.exports=cl;var R=zp.exports,zc={},Kp={exports:{}},mn={},Zp={exports:{}},Qp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,k){var V=N.length;N.push(k);e:for(;0<V;){var ee=V-1>>>1,se=N[ee];if(0<r(se,k))N[ee]=k,N[V]=se,V=ee;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var k=N[0],V=N.pop();if(V!==k){N[0]=V;e:for(var ee=0,se=N.length,Ce=se>>>1;ee<Ce;){var B=2*(ee+1)-1,te=N[B],ue=B+1,we=N[ue];if(0>r(te,V))ue<se&&0>r(we,te)?(N[ee]=we,N[ue]=V,ee=ue):(N[ee]=te,N[B]=V,ee=B);else if(ue<se&&0>r(we,V))N[ee]=we,N[ue]=V,ee=ue;else break e}}return k}function r(N,k){var V=N.sortIndex-k.sortIndex;return V!==0?V:N.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],c=[],d=1,f=null,h=3,m=!1,v=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=N)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function M(N){if(x=!1,g(N),!v)if(n(l)!==null)v=!0,q(P);else{var k=n(c);k!==null&&J(M,k.startTime-N)}}function P(N,k){v=!1,x&&(x=!1,u(I),I=-1),m=!0;var V=h;try{for(g(k),f=n(l);f!==null&&(!(f.expirationTime>k)||N&&!C());){var ee=f.callback;if(typeof ee=="function"){f.callback=null,h=f.priorityLevel;var se=ee(f.expirationTime<=k);k=t.unstable_now(),typeof se=="function"?f.callback=se:f===n(l)&&i(l),g(k)}else i(l);f=n(l)}if(f!==null)var Ce=!0;else{var B=n(c);B!==null&&J(M,B.startTime-k),Ce=!1}return Ce}finally{f=null,h=V,m=!1}}var w=!1,T=null,I=-1,Z=5,y=-1;function C(){return!(t.unstable_now()-y<Z)}function j(){if(T!==null){var N=t.unstable_now();y=N;var k=!0;try{k=T(!0,N)}finally{k?Y():(w=!1,T=null)}}else w=!1}var Y;if(typeof _=="function")Y=function(){_(j)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,$=L.port2;L.port1.onmessage=j,Y=function(){$.postMessage(null)}}else Y=function(){p(j,0)};function q(N){T=N,w||(w=!0,Y())}function J(N,k){I=p(function(){N(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,q(P))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var V=h;h=k;try{return N()}finally{h=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,k){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var V=h;h=N;try{return k()}finally{h=V}},t.unstable_scheduleCallback=function(N,k,V){var ee=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ee+V:ee):V=ee,N){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=V+se,N={id:d++,callback:k,priorityLevel:N,startTime:V,expirationTime:se,sortIndex:-1},V>ee?(N.sortIndex=V,e(c,N),n(l)===null&&N===n(c)&&(x?(u(I),I=-1):x=!0,J(M,V-ee))):(N.sortIndex=se,e(l,N),v||m||(v=!0,q(P))),N},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(N){var k=h;return function(){var V=h;h=k;try{return N.apply(this,arguments)}finally{h=V}}}})(Qp);Zp.exports=Qp;var o_=Zp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_=Ve,pn=o_;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jp=new Set,ss={};function Rr(t,e){ma(t,e),ma(t+"Capture",e)}function ma(t,e){for(ss[t]=e,t=0;t<e.length;t++)Jp.add(e[t])}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=Object.prototype.hasOwnProperty,c_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tf={},nf={};function u_(t){return Bc.call(nf,t)?!0:Bc.call(tf,t)?!1:c_.test(t)?nf[t]=!0:(tf[t]=!0,!1)}function d_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function f_(t,e,n,i){if(e===null||typeof e>"u"||d_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,a,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=s}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yu=/[\-:]([a-z])/g;function $u(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yu,$u);Ut[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yu,$u);Ut[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yu,$u);Ut[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ku(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(f_(e,n,r,i)&&(n=null),i||r===null?u_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var vi=l_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fs=Symbol.for("react.element"),qr=Symbol.for("react.portal"),Yr=Symbol.for("react.fragment"),Zu=Symbol.for("react.strict_mode"),Hc=Symbol.for("react.profiler"),em=Symbol.for("react.provider"),tm=Symbol.for("react.context"),Qu=Symbol.for("react.forward_ref"),Gc=Symbol.for("react.suspense"),Vc=Symbol.for("react.suspense_list"),Ju=Symbol.for("react.memo"),wi=Symbol.for("react.lazy"),nm=Symbol.for("react.offscreen"),rf=Symbol.iterator;function Na(t){return t===null||typeof t!="object"?null:(t=rf&&t[rf]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,Dl;function qa(t){if(Dl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dl=e&&e[1]||""}return`
`+Dl+t}var Ul=!1;function Fl(t,e){if(!t||Ul)return"";Ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),a=i.stack.split(`
`),s=r.length-1,o=a.length-1;1<=s&&0<=o&&r[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(r[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||r[s]!==a[o]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=o);break}}}finally{Ul=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qa(t):""}function h_(t){switch(t.tag){case 5:return qa(t.type);case 16:return qa("Lazy");case 13:return qa("Suspense");case 19:return qa("SuspenseList");case 0:case 2:case 15:return t=Fl(t.type,!1),t;case 11:return t=Fl(t.type.render,!1),t;case 1:return t=Fl(t.type,!0),t;default:return""}}function Wc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yr:return"Fragment";case qr:return"Portal";case Hc:return"Profiler";case Zu:return"StrictMode";case Gc:return"Suspense";case Vc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tm:return(t.displayName||"Context")+".Consumer";case em:return(t._context.displayName||"Context")+".Provider";case Qu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ju:return e=t.displayName||null,e!==null?e:Wc(t.type)||"Memo";case wi:e=t._payload,t=t._init;try{return Wc(t(e))}catch{}}return null}function p_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wc(e);case 8:return e===Zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function im(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function m_(t){var e=im(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Os(t){t._valueTracker||(t._valueTracker=m_(t))}function rm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=im(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function No(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jc(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function af(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function am(t,e){e=e.checked,e!=null&&Ku(t,"checked",e,!1)}function Xc(t,e){am(t,e);var n=ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qc(t,e.type,n):e.hasOwnProperty("defaultValue")&&qc(t,e.type,ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qc(t,e,n){(e!=="number"||No(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ya=Array.isArray;function oa(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Yc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function of(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Ya(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ji(n)}}function sm(t,e){var n=ji(e.value),i=ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function lf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function om(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $c(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?om(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ks,lm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ks=ks||document.createElement("div"),ks.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ks.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function os(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Za={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},g_=["Webkit","ms","Moz","O"];Object.keys(Za).forEach(function(t){g_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Za[e]=Za[t]})});function cm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Za.hasOwnProperty(t)&&Za[t]?(""+e).trim():e+"px"}function um(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=cm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var v_=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kc(t,e){if(e){if(v_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Zc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qc=null;function ed(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jc=null,la=null,ca=null;function cf(t){if(t=Cs(t)){if(typeof Jc!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=pl(e),Jc(t.stateNode,t.type,e))}}function dm(t){la?ca?ca.push(t):ca=[t]:la=t}function fm(){if(la){var t=la,e=ca;if(ca=la=null,cf(t),e)for(t=0;t<e.length;t++)cf(e[t])}}function hm(t,e){return t(e)}function pm(){}var Ol=!1;function mm(t,e,n){if(Ol)return t(e,n);Ol=!0;try{return hm(t,e,n)}finally{Ol=!1,(la!==null||ca!==null)&&(pm(),fm())}}function ls(t,e){var n=t.stateNode;if(n===null)return null;var i=pl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var eu=!1;if(hi)try{var Da={};Object.defineProperty(Da,"passive",{get:function(){eu=!0}}),window.addEventListener("test",Da,Da),window.removeEventListener("test",Da,Da)}catch{eu=!1}function __(t,e,n,i,r,a,s,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Qa=!1,Do=null,Uo=!1,tu=null,x_={onError:function(t){Qa=!0,Do=t}};function y_(t,e,n,i,r,a,s,o,l){Qa=!1,Do=null,__.apply(x_,arguments)}function S_(t,e,n,i,r,a,s,o,l){if(y_.apply(this,arguments),Qa){if(Qa){var c=Do;Qa=!1,Do=null}else throw Error(ie(198));Uo||(Uo=!0,tu=c)}}function br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function uf(t){if(br(t)!==t)throw Error(ie(188))}function M_(t){var e=t.alternate;if(!e){if(e=br(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return uf(r),t;if(a===i)return uf(r),e;a=a.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=a;else{for(var s=!1,o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function vm(t){return t=M_(t),t!==null?_m(t):null}function _m(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_m(t);if(e!==null)return e;t=t.sibling}return null}var xm=pn.unstable_scheduleCallback,df=pn.unstable_cancelCallback,E_=pn.unstable_shouldYield,T_=pn.unstable_requestPaint,vt=pn.unstable_now,w_=pn.unstable_getCurrentPriorityLevel,td=pn.unstable_ImmediatePriority,ym=pn.unstable_UserBlockingPriority,Fo=pn.unstable_NormalPriority,A_=pn.unstable_LowPriority,Sm=pn.unstable_IdlePriority,ul=null,Xn=null;function C_(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(ul,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:P_,R_=Math.log,b_=Math.LN2;function P_(t){return t>>>=0,t===0?32:31-(R_(t)/b_|0)|0}var zs=64,Bs=4194304;function $a(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Oo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,a=t.pingedLanes,s=n&268435455;if(s!==0){var o=s&~r;o!==0?i=$a(o):(a&=s,a!==0&&(i=$a(a)))}else s=n&~r,s!==0?i=$a(s):a!==0&&(i=$a(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,a=e&-e,r>=a||r===16&&(a&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function L_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes;0<a;){var s=31-On(a),o=1<<s,l=r[s];l===-1?(!(o&n)||o&i)&&(r[s]=L_(o,e)):l<=e&&(t.expiredLanes|=o),a&=~o}}function nu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mm(){var t=zs;return zs<<=1,!(zs&4194240)&&(zs=64),t}function kl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ws(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function N_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),a=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~a}}function nd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ke=0;function Em(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tm,id,wm,Am,Cm,iu=!1,Hs=[],Di=null,Ui=null,Fi=null,cs=new Map,us=new Map,Ci=[],D_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ff(t,e){switch(t){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":cs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":us.delete(e.pointerId)}}function Ua(t,e,n,i,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},e!==null&&(e=Cs(e),e!==null&&id(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function U_(t,e,n,i,r){switch(e){case"focusin":return Di=Ua(Di,t,e,n,i,r),!0;case"dragenter":return Ui=Ua(Ui,t,e,n,i,r),!0;case"mouseover":return Fi=Ua(Fi,t,e,n,i,r),!0;case"pointerover":var a=r.pointerId;return cs.set(a,Ua(cs.get(a)||null,t,e,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,us.set(a,Ua(us.get(a)||null,t,e,n,i,r)),!0}return!1}function Rm(t){var e=pr(t.target);if(e!==null){var n=br(e);if(n!==null){if(e=n.tag,e===13){if(e=gm(n),e!==null){t.blockedOn=e,Cm(t.priority,function(){wm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ru(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Qc=i,n.target.dispatchEvent(i),Qc=null}else return e=Cs(n),e!==null&&id(e),t.blockedOn=n,!1;e.shift()}return!0}function hf(t,e,n){Mo(t)&&n.delete(e)}function F_(){iu=!1,Di!==null&&Mo(Di)&&(Di=null),Ui!==null&&Mo(Ui)&&(Ui=null),Fi!==null&&Mo(Fi)&&(Fi=null),cs.forEach(hf),us.forEach(hf)}function Fa(t,e){t.blockedOn===e&&(t.blockedOn=null,iu||(iu=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,F_)))}function ds(t){function e(r){return Fa(r,t)}if(0<Hs.length){Fa(Hs[0],t);for(var n=1;n<Hs.length;n++){var i=Hs[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Di!==null&&Fa(Di,t),Ui!==null&&Fa(Ui,t),Fi!==null&&Fa(Fi,t),cs.forEach(e),us.forEach(e),n=0;n<Ci.length;n++)i=Ci[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ci.length&&(n=Ci[0],n.blockedOn===null);)Rm(n),n.blockedOn===null&&Ci.shift()}var ua=vi.ReactCurrentBatchConfig,ko=!0;function O_(t,e,n,i){var r=Ke,a=ua.transition;ua.transition=null;try{Ke=1,rd(t,e,n,i)}finally{Ke=r,ua.transition=a}}function k_(t,e,n,i){var r=Ke,a=ua.transition;ua.transition=null;try{Ke=4,rd(t,e,n,i)}finally{Ke=r,ua.transition=a}}function rd(t,e,n,i){if(ko){var r=ru(t,e,n,i);if(r===null)Yl(t,e,i,zo,n),ff(t,i);else if(U_(r,t,e,n,i))i.stopPropagation();else if(ff(t,i),e&4&&-1<D_.indexOf(t)){for(;r!==null;){var a=Cs(r);if(a!==null&&Tm(a),a=ru(t,e,n,i),a===null&&Yl(t,e,i,zo,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else Yl(t,e,i,null,n)}}var zo=null;function ru(t,e,n,i){if(zo=null,t=ed(i),t=pr(t),t!==null)if(e=br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zo=t,null}function bm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(w_()){case td:return 1;case ym:return 4;case Fo:case A_:return 16;case Sm:return 536870912;default:return 16}default:return 16}}var Pi=null,ad=null,Eo=null;function Pm(){if(Eo)return Eo;var t,e=ad,n=e.length,i,r="value"in Pi?Pi.value:Pi.textContent,a=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[a-i];i++);return Eo=r.slice(t,1<i?1-i:void 0)}function To(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gs(){return!0}function pf(){return!1}function gn(t){function e(n,i,r,a,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Gs:pf,this.isPropagationStopped=pf,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gs)},persist:function(){},isPersistent:Gs}),e}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sd=gn(Ca),As=dt({},Ca,{view:0,detail:0}),z_=gn(As),zl,Bl,Oa,dl=dt({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:od,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oa&&(Oa&&t.type==="mousemove"?(zl=t.screenX-Oa.screenX,Bl=t.screenY-Oa.screenY):Bl=zl=0,Oa=t),zl)},movementY:function(t){return"movementY"in t?t.movementY:Bl}}),mf=gn(dl),B_=dt({},dl,{dataTransfer:0}),H_=gn(B_),G_=dt({},As,{relatedTarget:0}),Hl=gn(G_),V_=dt({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),W_=gn(V_),j_=dt({},Ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),X_=gn(j_),q_=dt({},Ca,{data:0}),gf=gn(q_),Y_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=K_[t])?!!e[t]:!1}function od(){return Z_}var Q_=dt({},As,{key:function(t){if(t.key){var e=Y_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=To(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:od,charCode:function(t){return t.type==="keypress"?To(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?To(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),J_=gn(Q_),e0=dt({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vf=gn(e0),t0=dt({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:od}),n0=gn(t0),i0=dt({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),r0=gn(i0),a0=dt({},dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s0=gn(a0),o0=[9,13,27,32],ld=hi&&"CompositionEvent"in window,Ja=null;hi&&"documentMode"in document&&(Ja=document.documentMode);var l0=hi&&"TextEvent"in window&&!Ja,Lm=hi&&(!ld||Ja&&8<Ja&&11>=Ja),_f=" ",xf=!1;function Im(t,e){switch(t){case"keyup":return o0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function c0(t,e){switch(t){case"compositionend":return Nm(e);case"keypress":return e.which!==32?null:(xf=!0,_f);case"textInput":return t=e.data,t===_f&&xf?null:t;default:return null}}function u0(t,e){if($r)return t==="compositionend"||!ld&&Im(t,e)?(t=Pm(),Eo=ad=Pi=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lm&&e.locale!=="ko"?null:e.data;default:return null}}var d0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!d0[t.type]:e==="textarea"}function Dm(t,e,n,i){dm(i),e=Bo(e,"onChange"),0<e.length&&(n=new sd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var es=null,fs=null;function f0(t){jm(t,0)}function fl(t){var e=Qr(t);if(rm(e))return t}function h0(t,e){if(t==="change")return e}var Um=!1;if(hi){var Gl;if(hi){var Vl="oninput"in document;if(!Vl){var Sf=document.createElement("div");Sf.setAttribute("oninput","return;"),Vl=typeof Sf.oninput=="function"}Gl=Vl}else Gl=!1;Um=Gl&&(!document.documentMode||9<document.documentMode)}function Mf(){es&&(es.detachEvent("onpropertychange",Fm),fs=es=null)}function Fm(t){if(t.propertyName==="value"&&fl(fs)){var e=[];Dm(e,fs,t,ed(t)),mm(f0,e)}}function p0(t,e,n){t==="focusin"?(Mf(),es=e,fs=n,es.attachEvent("onpropertychange",Fm)):t==="focusout"&&Mf()}function m0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fl(fs)}function g0(t,e){if(t==="click")return fl(e)}function v0(t,e){if(t==="input"||t==="change")return fl(e)}function _0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:_0;function hs(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bc.call(e,r)||!zn(t[r],e[r]))return!1}return!0}function Ef(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tf(t,e){var n=Ef(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ef(n)}}function Om(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Om(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function km(){for(var t=window,e=No();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=No(t.document)}return e}function cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function x0(t){var e=km(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Om(n.ownerDocument.documentElement,n)){if(i!==null&&cd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!t.extend&&a>i&&(r=i,i=a,a=r),r=Tf(n,a);var s=Tf(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var y0=hi&&"documentMode"in document&&11>=document.documentMode,Kr=null,au=null,ts=null,su=!1;function wf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;su||Kr==null||Kr!==No(i)||(i=Kr,"selectionStart"in i&&cd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ts&&hs(ts,i)||(ts=i,i=Bo(au,"onSelect"),0<i.length&&(e=new sd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Kr)))}function Vs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zr={animationend:Vs("Animation","AnimationEnd"),animationiteration:Vs("Animation","AnimationIteration"),animationstart:Vs("Animation","AnimationStart"),transitionend:Vs("Transition","TransitionEnd")},Wl={},zm={};hi&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function hl(t){if(Wl[t])return Wl[t];if(!Zr[t])return t;var e=Zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zm)return Wl[t]=e[n];return t}var Bm=hl("animationend"),Hm=hl("animationiteration"),Gm=hl("animationstart"),Vm=hl("transitionend"),Wm=new Map,Af="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,e){Wm.set(t,e),Rr(e,[t])}for(var jl=0;jl<Af.length;jl++){var Xl=Af[jl],S0=Xl.toLowerCase(),M0=Xl[0].toUpperCase()+Xl.slice(1);$i(S0,"on"+M0)}$i(Bm,"onAnimationEnd");$i(Hm,"onAnimationIteration");$i(Gm,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(Vm,"onTransitionEnd");ma("onMouseEnter",["mouseout","mouseover"]);ma("onMouseLeave",["mouseout","mouseover"]);ma("onPointerEnter",["pointerout","pointerover"]);ma("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ka));function Cf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,S_(i,e,void 0,t),t.currentTarget=null}function jm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&r.isPropagationStopped())break e;Cf(r,o,c),a=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&r.isPropagationStopped())break e;Cf(r,o,c),a=l}}}if(Uo)throw t=tu,Uo=!1,tu=null,t}function nt(t,e){var n=e[du];n===void 0&&(n=e[du]=new Set);var i=t+"__bubble";n.has(i)||(Xm(e,t,2,!1),n.add(i))}function ql(t,e,n){var i=0;e&&(i|=4),Xm(n,t,i,e)}var Ws="_reactListening"+Math.random().toString(36).slice(2);function ps(t){if(!t[Ws]){t[Ws]=!0,Jp.forEach(function(n){n!=="selectionchange"&&(E0.has(n)||ql(n,!1,t),ql(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ws]||(e[Ws]=!0,ql("selectionchange",!1,e))}}function Xm(t,e,n,i){switch(bm(e)){case 1:var r=O_;break;case 4:r=k_;break;default:r=rd}n=r.bind(null,e,n,t),r=void 0,!eu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Yl(t,e,n,i,r){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;o!==null;){if(s=pr(o),s===null)return;if(l=s.tag,l===5||l===6){i=a=s;continue e}o=o.parentNode}}i=i.return}mm(function(){var c=a,d=ed(n),f=[];e:{var h=Wm.get(t);if(h!==void 0){var m=sd,v=t;switch(t){case"keypress":if(To(n)===0)break e;case"keydown":case"keyup":m=J_;break;case"focusin":v="focus",m=Hl;break;case"focusout":v="blur",m=Hl;break;case"beforeblur":case"afterblur":m=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=H_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=n0;break;case Bm:case Hm:case Gm:m=W_;break;case Vm:m=r0;break;case"scroll":m=z_;break;case"wheel":m=s0;break;case"copy":case"cut":case"paste":m=X_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=vf}var x=(e&4)!==0,p=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var _=c,g;_!==null;){g=_;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,u!==null&&(M=ls(_,u),M!=null&&x.push(ms(_,M,g)))),p)break;_=_.return}0<x.length&&(h=new m(h,v,null,n,d),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Qc&&(v=n.relatedTarget||n.fromElement)&&(pr(v)||v[pi]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?pr(v):null,v!==null&&(p=br(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(x=mf,M="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=vf,M="onPointerLeave",u="onPointerEnter",_="pointer"),p=m==null?h:Qr(m),g=v==null?h:Qr(v),h=new x(M,_+"leave",m,n,d),h.target=p,h.relatedTarget=g,M=null,pr(d)===c&&(x=new x(u,_+"enter",v,n,d),x.target=g,x.relatedTarget=p,M=x),p=M,m&&v)t:{for(x=m,u=v,_=0,g=x;g;g=Pr(g))_++;for(g=0,M=u;M;M=Pr(M))g++;for(;0<_-g;)x=Pr(x),_--;for(;0<g-_;)u=Pr(u),g--;for(;_--;){if(x===u||u!==null&&x===u.alternate)break t;x=Pr(x),u=Pr(u)}x=null}else x=null;m!==null&&Rf(f,h,m,x,!1),v!==null&&p!==null&&Rf(f,p,v,x,!0)}}e:{if(h=c?Qr(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var P=h0;else if(yf(h))if(Um)P=v0;else{P=m0;var w=p0}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=g0);if(P&&(P=P(t,c))){Dm(f,P,n,d);break e}w&&w(t,h,c),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&qc(h,"number",h.value)}switch(w=c?Qr(c):window,t){case"focusin":(yf(w)||w.contentEditable==="true")&&(Kr=w,au=c,ts=null);break;case"focusout":ts=au=Kr=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,wf(f,n,d);break;case"selectionchange":if(y0)break;case"keydown":case"keyup":wf(f,n,d)}var T;if(ld)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else $r?Im(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Lm&&n.locale!=="ko"&&($r||I!=="onCompositionStart"?I==="onCompositionEnd"&&$r&&(T=Pm()):(Pi=d,ad="value"in Pi?Pi.value:Pi.textContent,$r=!0)),w=Bo(c,I),0<w.length&&(I=new gf(I,t,null,n,d),f.push({event:I,listeners:w}),T?I.data=T:(T=Nm(n),T!==null&&(I.data=T)))),(T=l0?c0(t,n):u0(t,n))&&(c=Bo(c,"onBeforeInput"),0<c.length&&(d=new gf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}jm(f,e)})}function ms(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bo(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=ls(t,n),a!=null&&i.unshift(ms(t,a,r)),a=ls(t,e),a!=null&&i.push(ms(t,a,r))),t=t.return}return i}function Pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rf(t,e,n,i,r){for(var a=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ls(n,a),l!=null&&s.unshift(ms(n,l,o))):r||(l=ls(n,a),l!=null&&s.push(ms(n,l,o)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var T0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function bf(t){return(typeof t=="string"?t:""+t).replace(T0,`
`).replace(w0,"")}function js(t,e,n){if(e=bf(e),bf(t)!==e&&n)throw Error(ie(425))}function Ho(){}var ou=null,lu=null;function cu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uu=typeof setTimeout=="function"?setTimeout:void 0,A0=typeof clearTimeout=="function"?clearTimeout:void 0,Pf=typeof Promise=="function"?Promise:void 0,C0=typeof queueMicrotask=="function"?queueMicrotask:typeof Pf<"u"?function(t){return Pf.resolve(null).then(t).catch(R0)}:uu;function R0(t){setTimeout(function(){throw t})}function $l(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ds(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ds(e)}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ra=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Ra,gs="__reactProps$"+Ra,pi="__reactContainer$"+Ra,du="__reactEvents$"+Ra,b0="__reactListeners$"+Ra,P0="__reactHandles$"+Ra;function pr(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lf(t);t!==null;){if(n=t[Wn])return n;t=Lf(t)}return e}t=n,n=t.parentNode}return null}function Cs(t){return t=t[Wn]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function pl(t){return t[gs]||null}var fu=[],Jr=-1;function Ki(t){return{current:t}}function rt(t){0>Jr||(t.current=fu[Jr],fu[Jr]=null,Jr--)}function tt(t,e){Jr++,fu[Jr]=t.current,t.current=e}var Xi={},Vt=Ki(Xi),rn=Ki(!1),Mr=Xi;function ga(t,e){var n=t.type.contextTypes;if(!n)return Xi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function Go(){rt(rn),rt(Vt)}function If(t,e,n){if(Vt.current!==Xi)throw Error(ie(168));tt(Vt,e),tt(rn,n)}function qm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,p_(t)||"Unknown",r));return dt({},n,i)}function Vo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xi,Mr=Vt.current,tt(Vt,t),tt(rn,rn.current),!0}function Nf(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=qm(t,e,Mr),i.__reactInternalMemoizedMergedChildContext=t,rt(rn),rt(Vt),tt(Vt,t)):rt(rn),tt(rn,n)}var ai=null,ml=!1,Kl=!1;function Ym(t){ai===null?ai=[t]:ai.push(t)}function L0(t){ml=!0,Ym(t)}function Zi(){if(!Kl&&ai!==null){Kl=!0;var t=0,e=Ke;try{var n=ai;for(Ke=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ai=null,ml=!1}catch(r){throw ai!==null&&(ai=ai.slice(t+1)),xm(td,Zi),r}finally{Ke=e,Kl=!1}}return null}var ea=[],ta=0,Wo=null,jo=0,yn=[],Sn=0,Er=null,li=1,ci="";function lr(t,e){ea[ta++]=jo,ea[ta++]=Wo,Wo=t,jo=e}function $m(t,e,n){yn[Sn++]=li,yn[Sn++]=ci,yn[Sn++]=Er,Er=t;var i=li;t=ci;var r=32-On(i)-1;i&=~(1<<r),n+=1;var a=32-On(e)+r;if(30<a){var s=r-r%5;a=(i&(1<<s)-1).toString(32),i>>=s,r-=s,li=1<<32-On(e)+r|n<<r|i,ci=a+t}else li=1<<a|n<<r|i,ci=t}function ud(t){t.return!==null&&(lr(t,1),$m(t,1,0))}function dd(t){for(;t===Wo;)Wo=ea[--ta],ea[ta]=null,jo=ea[--ta],ea[ta]=null;for(;t===Er;)Er=yn[--Sn],yn[Sn]=null,ci=yn[--Sn],yn[Sn]=null,li=yn[--Sn],yn[Sn]=null}var hn=null,fn=null,ot=!1,Dn=null;function Km(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Df(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,fn=Oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Er!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,fn=null,!0):!1;default:return!1}}function hu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pu(t){if(ot){var e=fn;if(e){var n=e;if(!Df(t,e)){if(hu(t))throw Error(ie(418));e=Oi(n.nextSibling);var i=hn;e&&Df(t,e)?Km(i,n):(t.flags=t.flags&-4097|2,ot=!1,hn=t)}}else{if(hu(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ot=!1,hn=t}}}function Uf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function Xs(t){if(t!==hn)return!1;if(!ot)return Uf(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cu(t.type,t.memoizedProps)),e&&(e=fn)){if(hu(t))throw Zm(),Error(ie(418));for(;e;)Km(t,e),e=Oi(e.nextSibling)}if(Uf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=hn?Oi(t.stateNode.nextSibling):null;return!0}function Zm(){for(var t=fn;t;)t=Oi(t.nextSibling)}function va(){fn=hn=null,ot=!1}function fd(t){Dn===null?Dn=[t]:Dn.push(t)}var I0=vi.ReactCurrentBatchConfig;function ka(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(s){var o=r.refs;s===null?delete o[a]:o[a]=s},e._stringRef=a,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function qs(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ff(t){var e=t._init;return e(t._payload)}function Qm(t){function e(u,_){if(t){var g=u.deletions;g===null?(u.deletions=[_],u.flags|=16):g.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=Hi(u,_),u.index=0,u.sibling=null,u}function a(u,_,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<_?(u.flags|=2,_):g):(u.flags|=2,_)):(u.flags|=1048576,_)}function s(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,_,g,M){return _===null||_.tag!==6?(_=ic(g,u.mode,M),_.return=u,_):(_=r(_,g),_.return=u,_)}function l(u,_,g,M){var P=g.type;return P===Yr?d(u,_,g.props.children,M,g.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===wi&&Ff(P)===_.type)?(M=r(_,g.props),M.ref=ka(u,_,g),M.return=u,M):(M=Lo(g.type,g.key,g.props,null,u.mode,M),M.ref=ka(u,_,g),M.return=u,M)}function c(u,_,g,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=rc(g,u.mode,M),_.return=u,_):(_=r(_,g.children||[]),_.return=u,_)}function d(u,_,g,M,P){return _===null||_.tag!==7?(_=xr(g,u.mode,M,P),_.return=u,_):(_=r(_,g),_.return=u,_)}function f(u,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=ic(""+_,u.mode,g),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Fs:return g=Lo(_.type,_.key,_.props,null,u.mode,g),g.ref=ka(u,null,_),g.return=u,g;case qr:return _=rc(_,u.mode,g),_.return=u,_;case wi:var M=_._init;return f(u,M(_._payload),g)}if(Ya(_)||Na(_))return _=xr(_,u.mode,g,null),_.return=u,_;qs(u,_)}return null}function h(u,_,g,M){var P=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:o(u,_,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fs:return g.key===P?l(u,_,g,M):null;case qr:return g.key===P?c(u,_,g,M):null;case wi:return P=g._init,h(u,_,P(g._payload),M)}if(Ya(g)||Na(g))return P!==null?null:d(u,_,g,M,null);qs(u,g)}return null}function m(u,_,g,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(g)||null,o(_,u,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Fs:return u=u.get(M.key===null?g:M.key)||null,l(_,u,M,P);case qr:return u=u.get(M.key===null?g:M.key)||null,c(_,u,M,P);case wi:var w=M._init;return m(u,_,g,w(M._payload),P)}if(Ya(M)||Na(M))return u=u.get(g)||null,d(_,u,M,P,null);qs(_,M)}return null}function v(u,_,g,M){for(var P=null,w=null,T=_,I=_=0,Z=null;T!==null&&I<g.length;I++){T.index>I?(Z=T,T=null):Z=T.sibling;var y=h(u,T,g[I],M);if(y===null){T===null&&(T=Z);break}t&&T&&y.alternate===null&&e(u,T),_=a(y,_,I),w===null?P=y:w.sibling=y,w=y,T=Z}if(I===g.length)return n(u,T),ot&&lr(u,I),P;if(T===null){for(;I<g.length;I++)T=f(u,g[I],M),T!==null&&(_=a(T,_,I),w===null?P=T:w.sibling=T,w=T);return ot&&lr(u,I),P}for(T=i(u,T);I<g.length;I++)Z=m(T,u,I,g[I],M),Z!==null&&(t&&Z.alternate!==null&&T.delete(Z.key===null?I:Z.key),_=a(Z,_,I),w===null?P=Z:w.sibling=Z,w=Z);return t&&T.forEach(function(C){return e(u,C)}),ot&&lr(u,I),P}function x(u,_,g,M){var P=Na(g);if(typeof P!="function")throw Error(ie(150));if(g=P.call(g),g==null)throw Error(ie(151));for(var w=P=null,T=_,I=_=0,Z=null,y=g.next();T!==null&&!y.done;I++,y=g.next()){T.index>I?(Z=T,T=null):Z=T.sibling;var C=h(u,T,y.value,M);if(C===null){T===null&&(T=Z);break}t&&T&&C.alternate===null&&e(u,T),_=a(C,_,I),w===null?P=C:w.sibling=C,w=C,T=Z}if(y.done)return n(u,T),ot&&lr(u,I),P;if(T===null){for(;!y.done;I++,y=g.next())y=f(u,y.value,M),y!==null&&(_=a(y,_,I),w===null?P=y:w.sibling=y,w=y);return ot&&lr(u,I),P}for(T=i(u,T);!y.done;I++,y=g.next())y=m(T,u,I,y.value,M),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?I:y.key),_=a(y,_,I),w===null?P=y:w.sibling=y,w=y);return t&&T.forEach(function(j){return e(u,j)}),ot&&lr(u,I),P}function p(u,_,g,M){if(typeof g=="object"&&g!==null&&g.type===Yr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Fs:e:{for(var P=g.key,w=_;w!==null;){if(w.key===P){if(P=g.type,P===Yr){if(w.tag===7){n(u,w.sibling),_=r(w,g.props.children),_.return=u,u=_;break e}}else if(w.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===wi&&Ff(P)===w.type){n(u,w.sibling),_=r(w,g.props),_.ref=ka(u,w,g),_.return=u,u=_;break e}n(u,w);break}else e(u,w);w=w.sibling}g.type===Yr?(_=xr(g.props.children,u.mode,M,g.key),_.return=u,u=_):(M=Lo(g.type,g.key,g.props,null,u.mode,M),M.ref=ka(u,_,g),M.return=u,u=M)}return s(u);case qr:e:{for(w=g.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(u,_.sibling),_=r(_,g.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=rc(g,u.mode,M),_.return=u,u=_}return s(u);case wi:return w=g._init,p(u,_,w(g._payload),M)}if(Ya(g))return v(u,_,g,M);if(Na(g))return x(u,_,g,M);qs(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,g),_.return=u,u=_):(n(u,_),_=ic(g,u.mode,M),_.return=u,u=_),s(u)):n(u,_)}return p}var _a=Qm(!0),Jm=Qm(!1),Xo=Ki(null),qo=null,na=null,hd=null;function pd(){hd=na=qo=null}function md(t){var e=Xo.current;rt(Xo),t._currentValue=e}function mu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function da(t,e){qo=t,hd=na=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(hd!==t)if(t={context:t,memoizedValue:e,next:null},na===null){if(qo===null)throw Error(ie(308));na=t,qo.dependencies={lanes:0,firstContext:t}}else na=na.next=t;return e}var mr=null;function gd(t){mr===null?mr=[t]:mr.push(t)}function eg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,gd(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ai=!1;function vd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,gd(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function wo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nd(t,n)}}function Of(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?r=a=e:a=a.next=e}else r=a=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yo(t,e,n,i){var r=t.updateQueue;Ai=!1;var a=r.firstBaseUpdate,s=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?a=c:s.next=c,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(a!==null){var f=r.baseState;s=0,d=c=l=null,o=a;do{var h=o.lane,m=o.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,x=o;switch(h=e,m=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(m,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(m,f,h):v,h==null)break e;f=dt({},f,h);break e;case 2:Ai=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else m={eventTime:m,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,s|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else a===null&&(r.shared.lanes=0);wr|=s,t.lanes=s,t.memoizedState=f}}function kf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Rs={},qn=Ki(Rs),vs=Ki(Rs),_s=Ki(Rs);function gr(t){if(t===Rs)throw Error(ie(174));return t}function _d(t,e){switch(tt(_s,e),tt(vs,t),tt(qn,Rs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$c(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$c(e,t)}rt(qn),tt(qn,e)}function xa(){rt(qn),rt(vs),rt(_s)}function ng(t){gr(_s.current);var e=gr(qn.current),n=$c(e,t.type);e!==n&&(tt(vs,t),tt(qn,n))}function xd(t){vs.current===t&&(rt(qn),rt(vs))}var ct=Ki(0);function $o(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zl=[];function yd(){for(var t=0;t<Zl.length;t++)Zl[t]._workInProgressVersionPrimary=null;Zl.length=0}var Ao=vi.ReactCurrentDispatcher,Ql=vi.ReactCurrentBatchConfig,Tr=0,ut=null,Mt=null,Rt=null,Ko=!1,ns=!1,xs=0,N0=0;function Ot(){throw Error(ie(321))}function Sd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function Md(t,e,n,i,r,a){if(Tr=a,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ao.current=t===null||t.memoizedState===null?O0:k0,t=n(i,r),ns){a=0;do{if(ns=!1,xs=0,25<=a)throw Error(ie(301));a+=1,Rt=Mt=null,e.updateQueue=null,Ao.current=z0,t=n(i,r)}while(ns)}if(Ao.current=Zo,e=Mt!==null&&Mt.next!==null,Tr=0,Rt=Mt=ut=null,Ko=!1,e)throw Error(ie(300));return t}function Ed(){var t=xs!==0;return xs=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ut.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function An(){if(Mt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Rt===null?ut.memoizedState:Rt.next;if(e!==null)Rt=e,Mt=t;else{if(t===null)throw Error(ie(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Rt===null?ut.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function ys(t,e){return typeof e=="function"?e(t):e}function Jl(t){var e=An(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var s=r.next;r.next=a.next,a.next=s}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var o=s=null,l=null,c=a;do{var d=c.lane;if((Tr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,s=i):l=l.next=f,ut.lanes|=d,wr|=d}c=c.next}while(c!==null&&c!==a);l===null?s=i:l.next=o,zn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do a=r.lane,ut.lanes|=a,wr|=a,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ec(t){var e=An(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do a=t(a,s.action),s=s.next;while(s!==r);zn(a,e.memoizedState)||(nn=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function ig(){}function rg(t,e){var n=ut,i=An(),r=e(),a=!zn(i.memoizedState,r);if(a&&(i.memoizedState=r,nn=!0),i=i.queue,Td(og.bind(null,n,i,t),[t]),i.getSnapshot!==e||a||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,Ss(9,sg.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(ie(349));Tr&30||ag(n,e,r)}return r}function ag(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sg(t,e,n,i){e.value=n,e.getSnapshot=i,lg(e)&&cg(t)}function og(t,e,n){return n(function(){lg(e)&&cg(t)})}function lg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function cg(t){var e=mi(t,1);e!==null&&kn(e,t,1,-1)}function zf(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:t},e.queue=t,t=t.dispatch=F0.bind(null,ut,t),[e.memoizedState,t]}function Ss(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ug(){return An().memoizedState}function Co(t,e,n,i){var r=Gn();ut.flags|=t,r.memoizedState=Ss(1|e,n,void 0,i===void 0?null:i)}function gl(t,e,n,i){var r=An();i=i===void 0?null:i;var a=void 0;if(Mt!==null){var s=Mt.memoizedState;if(a=s.destroy,i!==null&&Sd(i,s.deps)){r.memoizedState=Ss(e,n,a,i);return}}ut.flags|=t,r.memoizedState=Ss(1|e,n,a,i)}function Bf(t,e){return Co(8390656,8,t,e)}function Td(t,e){return gl(2048,8,t,e)}function dg(t,e){return gl(4,2,t,e)}function fg(t,e){return gl(4,4,t,e)}function hg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pg(t,e,n){return n=n!=null?n.concat([t]):null,gl(4,4,hg.bind(null,e,t),n)}function wd(){}function mg(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function gg(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function vg(t,e,n){return Tr&21?(zn(n,e)||(n=Mm(),ut.lanes|=n,wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function D0(t,e){var n=Ke;Ke=n!==0&&4>n?n:4,t(!0);var i=Ql.transition;Ql.transition={};try{t(!1),e()}finally{Ke=n,Ql.transition=i}}function _g(){return An().memoizedState}function U0(t,e,n){var i=Bi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},xg(t))yg(e,n);else if(n=eg(t,e,n,i),n!==null){var r=Yt();kn(n,t,i,r),Sg(n,e,i)}}function F0(t,e,n){var i=Bi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(xg(t))yg(e,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,o=a(s,n);if(r.hasEagerState=!0,r.eagerState=o,zn(o,s)){var l=e.interleaved;l===null?(r.next=r,gd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=eg(t,e,r,i),n!==null&&(r=Yt(),kn(n,t,i,r),Sg(n,e,i))}}function xg(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function yg(t,e){ns=Ko=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Sg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nd(t,n)}}var Zo={readContext:wn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},O0={readContext:wn,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:Bf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Co(4194308,4,hg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Co(4194308,4,t,e)},useInsertionEffect:function(t,e){return Co(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Gn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=U0.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:zf,useDebugValue:wd,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=zf(!1),e=t[0];return t=D0.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=Gn();if(ot){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Pt===null)throw Error(ie(349));Tr&30||ag(i,e,n)}r.memoizedState=n;var a={value:n,getSnapshot:e};return r.queue=a,Bf(og.bind(null,i,a,t),[t]),i.flags|=2048,Ss(9,sg.bind(null,i,a,n,e),void 0,null),n},useId:function(){var t=Gn(),e=Pt.identifierPrefix;if(ot){var n=ci,i=li;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=N0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},k0={readContext:wn,useCallback:mg,useContext:wn,useEffect:Td,useImperativeHandle:pg,useInsertionEffect:dg,useLayoutEffect:fg,useMemo:gg,useReducer:Jl,useRef:ug,useState:function(){return Jl(ys)},useDebugValue:wd,useDeferredValue:function(t){var e=An();return vg(e,Mt.memoizedState,t)},useTransition:function(){var t=Jl(ys)[0],e=An().memoizedState;return[t,e]},useMutableSource:ig,useSyncExternalStore:rg,useId:_g,unstable_isNewReconciler:!1},z0={readContext:wn,useCallback:mg,useContext:wn,useEffect:Td,useImperativeHandle:pg,useInsertionEffect:dg,useLayoutEffect:fg,useMemo:gg,useReducer:ec,useRef:ug,useState:function(){return ec(ys)},useDebugValue:wd,useDeferredValue:function(t){var e=An();return Mt===null?e.memoizedState=t:vg(e,Mt.memoizedState,t)},useTransition:function(){var t=ec(ys)[0],e=An().memoizedState;return[t,e]},useMutableSource:ig,useSyncExternalStore:rg,useId:_g,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vl={isMounted:function(t){return(t=t._reactInternals)?br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Bi(t),a=fi(i,r);a.payload=e,n!=null&&(a.callback=n),e=ki(t,a,r),e!==null&&(kn(e,t,r,i),wo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Bi(t),a=fi(i,r);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=ki(t,a,r),e!==null&&(kn(e,t,r,i),wo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Bi(t),r=fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ki(t,r,i),e!==null&&(kn(e,t,i,n),wo(e,t,i))}};function Hf(t,e,n,i,r,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,s):e.prototype&&e.prototype.isPureReactComponent?!hs(n,i)||!hs(r,a):!0}function Mg(t,e,n){var i=!1,r=Xi,a=e.contextType;return typeof a=="object"&&a!==null?a=wn(a):(r=an(e)?Mr:Vt.current,i=e.contextTypes,a=(i=i!=null)?ga(t,r):Xi),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=a),e}function Gf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&vl.enqueueReplaceState(e,e.state,null)}function vu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},vd(t);var a=e.contextType;typeof a=="object"&&a!==null?r.context=wn(a):(a=an(e)?Mr:Vt.current,r.context=ga(t,a)),r.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(gu(t,e,a,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vl.enqueueReplaceState(r,r.state,null),Yo(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ya(t,e){try{var n="",i=e;do n+=h_(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:r,digest:null}}function tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _u(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var B0=typeof WeakMap=="function"?WeakMap:Map;function Eg(t,e,n){n=fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Jo||(Jo=!0,Ru=i),_u(t,e)},n}function Tg(t,e,n){n=fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){_u(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){_u(t,e),typeof i!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Vf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new B0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ex.bind(null,t,e,n),e.then(t,t))}function Wf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fi(-1,1),e.tag=2,ki(n,e,1))),n.lanes|=1),t)}var H0=vi.ReactCurrentOwner,nn=!1;function Xt(t,e,n,i){e.child=t===null?Jm(e,null,n,i):_a(e,t.child,n,i)}function Xf(t,e,n,i,r){n=n.render;var a=e.ref;return da(e,r),i=Md(t,e,n,i,a,r),n=Ed(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ot&&n&&ud(e),e.flags|=1,Xt(t,e,i,r),e.child)}function qf(t,e,n,i,r){if(t===null){var a=n.type;return typeof a=="function"&&!Nd(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,wg(t,e,a,i,r)):(t=Lo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&r)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:hs,n(s,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Hi(a,i),t.ref=e.ref,t.return=e,e.child=t}function wg(t,e,n,i,r){if(t!==null){var a=t.memoizedProps;if(hs(a,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=a,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,gi(t,e,r)}return xu(t,e,n,i,r)}function Ag(t,e,n){var i=e.pendingProps,r=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(ra,dn),dn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(ra,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,tt(ra,dn),dn|=i}else a!==null?(i=a.baseLanes|n,e.memoizedState=null):i=n,tt(ra,dn),dn|=i;return Xt(t,e,r,n),e.child}function Cg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xu(t,e,n,i,r){var a=an(n)?Mr:Vt.current;return a=ga(e,a),da(e,r),n=Md(t,e,n,i,a,r),i=Ed(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ot&&i&&ud(e),e.flags|=1,Xt(t,e,n,r),e.child)}function Yf(t,e,n,i,r){if(an(n)){var a=!0;Vo(e)}else a=!1;if(da(e,r),e.stateNode===null)Ro(t,e),Mg(e,n,i),vu(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=wn(c):(c=an(n)?Mr:Vt.current,c=ga(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Gf(e,s,i,c),Ai=!1;var h=e.memoizedState;s.state=h,Yo(e,i,s,r),l=e.memoizedState,o!==i||h!==l||rn.current||Ai?(typeof d=="function"&&(gu(e,n,d,i),l=e.memoizedState),(o=Ai||Hf(e,n,o,i,h,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,tg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Ln(e.type,o),s.props=c,f=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=wn(l):(l=an(n)?Mr:Vt.current,l=ga(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==f||h!==l)&&Gf(e,s,i,l),Ai=!1,h=e.memoizedState,s.state=h,Yo(e,i,s,r);var v=e.memoizedState;o!==f||h!==v||rn.current||Ai?(typeof m=="function"&&(gu(e,n,m,i),v=e.memoizedState),(c=Ai||Hf(e,n,c,i,h,v,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),s.props=i,s.state=v,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return yu(t,e,n,i,a,r)}function yu(t,e,n,i,r,a){Cg(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Nf(e,n,!1),gi(t,e,a);i=e.stateNode,H0.current=e;var o=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=_a(e,t.child,null,a),e.child=_a(e,null,o,a)):Xt(t,e,o,a),e.memoizedState=i.state,r&&Nf(e,n,!0),e.child}function Rg(t){var e=t.stateNode;e.pendingContext?If(t,e.pendingContext,e.pendingContext!==e.context):e.context&&If(t,e.context,!1),_d(t,e.containerInfo)}function $f(t,e,n,i,r){return va(),fd(r),e.flags|=256,Xt(t,e,n,i),e.child}var Su={dehydrated:null,treeContext:null,retryLane:0};function Mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function bg(t,e,n){var i=e.pendingProps,r=ct.current,a=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(ct,r&1),t===null)return pu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,a?(i=e.mode,a=e.child,s={mode:"hidden",children:s},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=yl(s,i,0,null),t=xr(t,i,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Mu(n),e.memoizedState=Su,t):Ad(e,s));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return G0(t,e,s,i,o,r,n);if(a){a=i.fallback,s=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Hi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?a=Hi(o,a):(a=xr(a,s,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,s=t.child.memoizedState,s=s===null?Mu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=t.childLanes&~n,e.memoizedState=Su,i}return a=t.child,t=a.sibling,i=Hi(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ad(t,e){return e=yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ys(t,e,n,i){return i!==null&&fd(i),_a(e,t.child,null,n),t=Ad(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function G0(t,e,n,i,r,a,s){if(n)return e.flags&256?(e.flags&=-257,i=tc(Error(ie(422))),Ys(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,r=e.mode,i=yl({mode:"visible",children:i.children},r,0,null),a=xr(a,r,s,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&_a(e,t.child,null,s),e.child.memoizedState=Mu(s),e.memoizedState=Su,a);if(!(e.mode&1))return Ys(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,a=Error(ie(419)),i=tc(a,i,void 0),Ys(t,e,s,i)}if(o=(s&t.childLanes)!==0,nn||o){if(i=Pt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,mi(t,r),kn(i,t,r,-1))}return Id(),i=tc(Error(ie(421))),Ys(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=tx.bind(null,t),r._reactRetry=e,null):(t=a.treeContext,fn=Oi(r.nextSibling),hn=e,ot=!0,Dn=null,t!==null&&(yn[Sn++]=li,yn[Sn++]=ci,yn[Sn++]=Er,li=t.id,ci=t.overflow,Er=e),e=Ad(e,i.children),e.flags|=4096,e)}function Kf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),mu(t.return,e,n)}function nc(t,e,n,i,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function Pg(t,e,n){var i=e.pendingProps,r=i.revealOrder,a=i.tail;if(Xt(t,e,i.children,n),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kf(t,n,e);else if(t.tag===19)Kf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&$o(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),nc(e,!1,r,n,a);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&$o(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}nc(e,!0,n,null,a);break;case"together":nc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ro(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function V0(t,e,n){switch(e.tag){case 3:Rg(e),va();break;case 5:ng(e);break;case 1:an(e.type)&&Vo(e);break;case 4:_d(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(Xo,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(ct,ct.current&1),e.flags|=128,null):n&e.child.childLanes?bg(t,e,n):(tt(ct,ct.current&1),t=gi(t,e,n),t!==null?t.sibling:null);tt(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Pg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,Ag(t,e,n)}return gi(t,e,n)}var Lg,Eu,Ig,Ng;Lg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Eu=function(){};Ig=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,gr(qn.current);var a=null;switch(n){case"input":r=jc(t,r),i=jc(t,i),a=[];break;case"select":r=dt({},r,{value:void 0}),i=dt({},i,{value:void 0}),a=[];break;case"textarea":r=Yc(t,r),i=Yc(t,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ho)}Kc(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ss.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ss.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&nt("scroll",t),a||o===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(e.updateQueue=c)&&(e.flags|=4)}};Ng=function(t,e,n,i){n!==i&&(e.flags|=4)};function za(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function W0(t,e,n){var i=e.pendingProps;switch(dd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return an(e.type)&&Go(),kt(e),null;case 3:return i=e.stateNode,xa(),rt(rn),rt(Vt),yd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Xs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(Lu(Dn),Dn=null))),Eu(t,e),kt(e),null;case 5:xd(e);var r=gr(_s.current);if(n=e.type,t!==null&&e.stateNode!=null)Ig(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return kt(e),null}if(t=gr(qn.current),Xs(e)){i=e.stateNode,n=e.type;var a=e.memoizedProps;switch(i[Wn]=e,i[gs]=a,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<Ka.length;r++)nt(Ka[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":af(i,a),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},nt("invalid",i);break;case"textarea":of(i,a),nt("invalid",i)}Kc(n,a),r=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?i.textContent!==o&&(a.suppressHydrationWarning!==!0&&js(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&js(i.textContent,o,t),r=["children",""+o]):ss.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&nt("scroll",i)}switch(n){case"input":Os(i),sf(i,a,!0);break;case"textarea":Os(i),lf(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Ho)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=om(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Wn]=e,t[gs]=i,Lg(t,e,!1,!1),e.stateNode=t;e:{switch(s=Zc(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ka.length;r++)nt(Ka[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":af(t,i),r=jc(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=dt({},i,{value:void 0}),nt("invalid",t);break;case"textarea":of(t,i),r=Yc(t,i),nt("invalid",t);break;default:r=i}Kc(n,r),o=r;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?um(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lm(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&os(t,l):typeof l=="number"&&os(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ss.hasOwnProperty(a)?l!=null&&a==="onScroll"&&nt("scroll",t):l!=null&&Ku(t,a,l,s))}switch(n){case"input":Os(t),sf(t,i,!1);break;case"textarea":Os(t),lf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ji(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?oa(t,!!i.multiple,a,!1):i.defaultValue!=null&&oa(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ho)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)Ng(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=gr(_s.current),gr(qn.current),Xs(e)){if(i=e.stateNode,n=e.memoizedProps,i[Wn]=e,(a=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:js(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&js(i.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Wn]=e,e.stateNode=i}return kt(e),null;case 13:if(rt(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&fn!==null&&e.mode&1&&!(e.flags&128))Zm(),va(),e.flags|=98560,a=!1;else if(a=Xs(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ie(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ie(317));a[Wn]=e}else va(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),a=!1}else Dn!==null&&(Lu(Dn),Dn=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?Et===0&&(Et=3):Id())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return xa(),Eu(t,e),t===null&&ps(e.stateNode.containerInfo),kt(e),null;case 10:return md(e.type._context),kt(e),null;case 17:return an(e.type)&&Go(),kt(e),null;case 19:if(rt(ct),a=e.memoizedState,a===null)return kt(e),null;if(i=(e.flags&128)!==0,s=a.rendering,s===null)if(i)za(a,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=$o(t),s!==null){for(e.flags|=128,za(a,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)a=n,t=i,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,t=s.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(ct,ct.current&1|2),e.child}t=t.sibling}a.tail!==null&&vt()>Sa&&(e.flags|=128,i=!0,za(a,!1),e.lanes=4194304)}else{if(!i)if(t=$o(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),za(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!ot)return kt(e),null}else 2*vt()-a.renderingStartTime>Sa&&n!==1073741824&&(e.flags|=128,i=!0,za(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(n=a.last,n!==null?n.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=vt(),e.sibling=null,n=ct.current,tt(ct,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return Ld(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function j0(t,e){switch(dd(e),e.tag){case 1:return an(e.type)&&Go(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xa(),rt(rn),rt(Vt),yd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xd(e),null;case 13:if(rt(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));va()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(ct),null;case 4:return xa(),null;case 10:return md(e.type._context),null;case 22:case 23:return Ld(),null;case 24:return null;default:return null}}var $s=!1,Ht=!1,X0=typeof WeakSet=="function"?WeakSet:Set,ge=null;function ia(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function Tu(t,e,n){try{n()}catch(i){pt(t,e,i)}}var Zf=!1;function q0(t,e){if(ou=ko,t=km(),cd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(o=s+r),f!==a||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===r&&(o=s),h===a&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lu={focusedElem:t,selectionRange:n},ko=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,p=v.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Ln(e.type,x),p);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(M){pt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return v=Zf,Zf=!1,v}function is(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.destroy;r.destroy=void 0,a!==void 0&&Tu(e,n,a)}r=r.next}while(r!==i)}}function _l(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Dg(t){var e=t.alternate;e!==null&&(t.alternate=null,Dg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[gs],delete e[du],delete e[b0],delete e[P0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ug(t){return t.tag===5||t.tag===3||t.tag===4}function Qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ug(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Au(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ho));else if(i!==4&&(t=t.child,t!==null))for(Au(t,e,n),t=t.sibling;t!==null;)Au(t,e,n),t=t.sibling}function Cu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Cu(t,e,n),t=t.sibling;t!==null;)Cu(t,e,n),t=t.sibling}var It=null,In=!1;function _i(t,e,n){for(n=n.child;n!==null;)Fg(t,e,n),n=n.sibling}function Fg(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(ul,n)}catch{}switch(n.tag){case 5:Ht||ia(n,e);case 6:var i=It,r=In;It=null,_i(t,e,n),It=i,In=r,It!==null&&(In?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(In?(t=It,n=n.stateNode,t.nodeType===8?$l(t.parentNode,n):t.nodeType===1&&$l(t,n),ds(t)):$l(It,n.stateNode));break;case 4:i=It,r=In,It=n.stateNode.containerInfo,In=!0,_i(t,e,n),It=i,In=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&Tu(n,e,s),r=r.next}while(r!==i)}_i(t,e,n);break;case 1:if(!Ht&&(ia(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){pt(n,e,o)}_i(t,e,n);break;case 21:_i(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,_i(t,e,n),Ht=i):_i(t,e,n);break;default:_i(t,e,n)}}function Jf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new X0),e.forEach(function(i){var r=nx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:It=o.stateNode,In=!1;break e;case 3:It=o.stateNode.containerInfo,In=!0;break e;case 4:It=o.stateNode.containerInfo,In=!0;break e}o=o.return}if(It===null)throw Error(ie(160));Fg(a,s,r),It=null,In=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Og(e,t),e=e.sibling}function Og(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Hn(t),i&4){try{is(3,t,t.return),_l(3,t)}catch(x){pt(t,t.return,x)}try{is(5,t,t.return)}catch(x){pt(t,t.return,x)}}break;case 1:Cn(e,t),Hn(t),i&512&&n!==null&&ia(n,n.return);break;case 5:if(Cn(e,t),Hn(t),i&512&&n!==null&&ia(n,n.return),t.flags&32){var r=t.stateNode;try{os(r,"")}catch(x){pt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var a=t.memoizedProps,s=n!==null?n.memoizedProps:a,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&am(r,a),Zc(o,s);var c=Zc(o,a);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?um(r,f):d==="dangerouslySetInnerHTML"?lm(r,f):d==="children"?os(r,f):Ku(r,d,f,c)}switch(o){case"input":Xc(r,a);break;case"textarea":sm(r,a);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?oa(r,!!a.multiple,m,!1):h!==!!a.multiple&&(a.defaultValue!=null?oa(r,!!a.multiple,a.defaultValue,!0):oa(r,!!a.multiple,a.multiple?[]:"",!1))}r[gs]=a}catch(x){pt(t,t.return,x)}}break;case 6:if(Cn(e,t),Hn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,a=t.memoizedProps;try{r.nodeValue=a}catch(x){pt(t,t.return,x)}}break;case 3:if(Cn(e,t),Hn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ds(e.containerInfo)}catch(x){pt(t,t.return,x)}break;case 4:Cn(e,t),Hn(t);break;case 13:Cn(e,t),Hn(t),r=t.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(bd=vt())),i&4&&Jf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(c=Ht)||d,Cn(e,t),Ht=c):Cn(e,t),Hn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ge=t,d=t.child;d!==null;){for(f=ge=d;ge!==null;){switch(h=ge,m=h.child,h.tag){case 0:case 11:case 14:case 15:is(4,h,h.return);break;case 1:ia(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){pt(i,n,x)}}break;case 5:ia(h,h.return);break;case 22:if(h.memoizedState!==null){th(f);continue}}m!==null?(m.return=h,ge=m):th(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=cm("display",s))}catch(x){pt(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){pt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Cn(e,t),Hn(t),i&4&&Jf(t);break;case 21:break;default:Cn(e,t),Hn(t)}}function Hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ug(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(os(r,""),i.flags&=-33);var a=Qf(t);Cu(t,a,r);break;case 3:case 4:var s=i.stateNode.containerInfo,o=Qf(t);Au(t,o,s);break;default:throw Error(ie(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Y0(t,e,n){ge=t,kg(t)}function kg(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,a=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||$s;if(!s){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Ht;o=$s;var c=Ht;if($s=s,(Ht=l)&&!c)for(ge=r;ge!==null;)s=ge,l=s.child,s.tag===22&&s.memoizedState!==null?nh(r):l!==null?(l.return=s,ge=l):nh(r);for(;a!==null;)ge=a,kg(a),a=a.sibling;ge=r,$s=o,Ht=c}eh(t)}else r.subtreeFlags&8772&&a!==null?(a.return=r,ge=a):eh(t)}}function eh(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||_l(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&kf(e,a,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kf(e,s,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ds(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Ht||e.flags&512&&wu(e)}catch(h){pt(e,e.return,h)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function th(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function nh(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_l(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var a=e.return;try{wu(e)}catch(l){pt(e,a,l)}break;case 5:var s=e.return;try{wu(e)}catch(l){pt(e,s,l)}}}catch(l){pt(e,e.return,l)}if(e===t){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var $0=Math.ceil,Qo=vi.ReactCurrentDispatcher,Cd=vi.ReactCurrentOwner,Tn=vi.ReactCurrentBatchConfig,$e=0,Pt=null,St=null,Nt=0,dn=0,ra=Ki(0),Et=0,Ms=null,wr=0,xl=0,Rd=0,rs=null,en=null,bd=0,Sa=1/0,ri=null,Jo=!1,Ru=null,zi=null,Ks=!1,Li=null,el=0,as=0,bu=null,bo=-1,Po=0;function Yt(){return $e&6?vt():bo!==-1?bo:bo=vt()}function Bi(t){return t.mode&1?$e&2&&Nt!==0?Nt&-Nt:I0.transition!==null?(Po===0&&(Po=Mm()),Po):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:bm(t.type)),t):1}function kn(t,e,n,i){if(50<as)throw as=0,bu=null,Error(ie(185));ws(t,n,i),(!($e&2)||t!==Pt)&&(t===Pt&&(!($e&2)&&(xl|=n),Et===4&&Ri(t,Nt)),sn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Sa=vt()+500,ml&&Zi()))}function sn(t,e){var n=t.callbackNode;I_(t,e);var i=Oo(t,t===Pt?Nt:0);if(i===0)n!==null&&df(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&df(n),e===1)t.tag===0?L0(ih.bind(null,t)):Ym(ih.bind(null,t)),C0(function(){!($e&6)&&Zi()}),n=null;else{switch(Em(i)){case 1:n=td;break;case 4:n=ym;break;case 16:n=Fo;break;case 536870912:n=Sm;break;default:n=Fo}n=Xg(n,zg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zg(t,e){if(bo=-1,Po=0,$e&6)throw Error(ie(327));var n=t.callbackNode;if(fa()&&t.callbackNode!==n)return null;var i=Oo(t,t===Pt?Nt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=tl(t,i);else{e=i;var r=$e;$e|=2;var a=Hg();(Pt!==t||Nt!==e)&&(ri=null,Sa=vt()+500,_r(t,e));do try{Q0();break}catch(o){Bg(t,o)}while(!0);pd(),Qo.current=a,$e=r,St!==null?e=0:(Pt=null,Nt=0,e=Et)}if(e!==0){if(e===2&&(r=nu(t),r!==0&&(i=r,e=Pu(t,r))),e===1)throw n=Ms,_r(t,0),Ri(t,i),sn(t,vt()),n;if(e===6)Ri(t,i);else{if(r=t.current.alternate,!(i&30)&&!K0(r)&&(e=tl(t,i),e===2&&(a=nu(t),a!==0&&(i=a,e=Pu(t,a))),e===1))throw n=Ms,_r(t,0),Ri(t,i),sn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:cr(t,en,ri);break;case 3:if(Ri(t,i),(i&130023424)===i&&(e=bd+500-vt(),10<e)){if(Oo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=uu(cr.bind(null,t,en,ri),e);break}cr(t,en,ri);break;case 4:if(Ri(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-On(i);a=1<<s,s=e[s],s>r&&(r=s),i&=~a}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*$0(i/1960))-i,10<i){t.timeoutHandle=uu(cr.bind(null,t,en,ri),i);break}cr(t,en,ri);break;case 5:cr(t,en,ri);break;default:throw Error(ie(329))}}}return sn(t,vt()),t.callbackNode===n?zg.bind(null,t):null}function Pu(t,e){var n=rs;return t.current.memoizedState.isDehydrated&&(_r(t,e).flags|=256),t=tl(t,e),t!==2&&(e=en,en=n,e!==null&&Lu(e)),t}function Lu(t){en===null?en=t:en.push.apply(en,t)}function K0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!zn(a(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ri(t,e){for(e&=~Rd,e&=~xl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function ih(t){if($e&6)throw Error(ie(327));fa();var e=Oo(t,0);if(!(e&1))return sn(t,vt()),null;var n=tl(t,e);if(t.tag!==0&&n===2){var i=nu(t);i!==0&&(e=i,n=Pu(t,i))}if(n===1)throw n=Ms,_r(t,0),Ri(t,e),sn(t,vt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cr(t,en,ri),sn(t,vt()),null}function Pd(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Sa=vt()+500,ml&&Zi())}}function Ar(t){Li!==null&&Li.tag===0&&!($e&6)&&fa();var e=$e;$e|=1;var n=Tn.transition,i=Ke;try{if(Tn.transition=null,Ke=1,t)return t()}finally{Ke=i,Tn.transition=n,$e=e,!($e&6)&&Zi()}}function Ld(){dn=ra.current,rt(ra)}function _r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,A0(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(dd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Go();break;case 3:xa(),rt(rn),rt(Vt),yd();break;case 5:xd(i);break;case 4:xa();break;case 13:rt(ct);break;case 19:rt(ct);break;case 10:md(i.type._context);break;case 22:case 23:Ld()}n=n.return}if(Pt=t,St=t=Hi(t.current,null),Nt=dn=e,Et=0,Ms=null,Rd=xl=wr=0,en=rs=null,mr!==null){for(e=0;e<mr.length;e++)if(n=mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var s=a.next;a.next=r,i.next=s}n.pending=i}mr=null}return t}function Bg(t,e){do{var n=St;try{if(pd(),Ao.current=Zo,Ko){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ko=!1}if(Tr=0,Rt=Mt=ut=null,ns=!1,xs=0,Cd.current=null,n===null||n.return===null){Et=1,Ms=e,St=null;break}e:{var a=t,s=n.return,o=n,l=e;if(e=Nt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Wf(s);if(m!==null){m.flags&=-257,jf(m,s,o,a,e),m.mode&1&&Vf(a,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){Vf(a,c,e),Id();break e}l=Error(ie(426))}}else if(ot&&o.mode&1){var p=Wf(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),jf(p,s,o,a,e),fd(ya(l,o));break e}}a=l=ya(l,o),Et!==4&&(Et=2),rs===null?rs=[a]:rs.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var u=Eg(a,l,e);Of(a,u);break e;case 1:o=l;var _=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(zi===null||!zi.has(g)))){a.flags|=65536,e&=-e,a.lanes|=e;var M=Tg(a,o,e);Of(a,M);break e}}a=a.return}while(a!==null)}Vg(n)}catch(P){e=P,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function Hg(){var t=Qo.current;return Qo.current=Zo,t===null?Zo:t}function Id(){(Et===0||Et===3||Et===2)&&(Et=4),Pt===null||!(wr&268435455)&&!(xl&268435455)||Ri(Pt,Nt)}function tl(t,e){var n=$e;$e|=2;var i=Hg();(Pt!==t||Nt!==e)&&(ri=null,_r(t,e));do try{Z0();break}catch(r){Bg(t,r)}while(!0);if(pd(),$e=n,Qo.current=i,St!==null)throw Error(ie(261));return Pt=null,Nt=0,Et}function Z0(){for(;St!==null;)Gg(St)}function Q0(){for(;St!==null&&!E_();)Gg(St)}function Gg(t){var e=jg(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?Vg(t):St=e,Cd.current=null}function Vg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=j0(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,St=null;return}}else if(n=W0(n,e,dn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Et===0&&(Et=5)}function cr(t,e,n){var i=Ke,r=Tn.transition;try{Tn.transition=null,Ke=1,J0(t,e,n,i)}finally{Tn.transition=r,Ke=i}return null}function J0(t,e,n,i){do fa();while(Li!==null);if($e&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(N_(t,a),t===Pt&&(St=Pt=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ks||(Ks=!0,Xg(Fo,function(){return fa(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Tn.transition,Tn.transition=null;var s=Ke;Ke=1;var o=$e;$e|=4,Cd.current=null,q0(t,n),Og(n,t),x0(lu),ko=!!ou,lu=ou=null,t.current=n,Y0(n),T_(),$e=o,Ke=s,Tn.transition=a}else t.current=n;if(Ks&&(Ks=!1,Li=t,el=r),a=t.pendingLanes,a===0&&(zi=null),C_(n.stateNode),sn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Jo)throw Jo=!1,t=Ru,Ru=null,t;return el&1&&t.tag!==0&&fa(),a=t.pendingLanes,a&1?t===bu?as++:(as=0,bu=t):as=0,Zi(),null}function fa(){if(Li!==null){var t=Em(el),e=Tn.transition,n=Ke;try{if(Tn.transition=null,Ke=16>t?16:t,Li===null)var i=!1;else{if(t=Li,Li=null,el=0,$e&6)throw Error(ie(331));var r=$e;for($e|=4,ge=t.current;ge!==null;){var a=ge,s=a.child;if(ge.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ge=c;ge!==null;){var d=ge;switch(d.tag){case 0:case 11:case 15:is(8,d,a)}var f=d.child;if(f!==null)f.return=d,ge=f;else for(;ge!==null;){d=ge;var h=d.sibling,m=d.return;if(Dg(d),d===c){ge=null;break}if(h!==null){h.return=m,ge=h;break}ge=m}}}var v=a.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}ge=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,ge=s;else e:for(;ge!==null;){if(a=ge,a.flags&2048)switch(a.tag){case 0:case 11:case 15:is(9,a,a.return)}var u=a.sibling;if(u!==null){u.return=a.return,ge=u;break e}ge=a.return}}var _=t.current;for(ge=_;ge!==null;){s=ge;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,ge=g;else e:for(s=_;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:_l(9,o)}}catch(P){pt(o,o.return,P)}if(o===s){ge=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,ge=M;break e}ge=o.return}}if($e=r,Zi(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(ul,t)}catch{}i=!0}return i}finally{Ke=n,Tn.transition=e}}return!1}function rh(t,e,n){e=ya(n,e),e=Eg(t,e,1),t=ki(t,e,1),e=Yt(),t!==null&&(ws(t,1,e),sn(t,e))}function pt(t,e,n){if(t.tag===3)rh(t,t,n);else for(;e!==null;){if(e.tag===3){rh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zi===null||!zi.has(i))){t=ya(n,t),t=Tg(e,t,1),e=ki(e,t,1),t=Yt(),e!==null&&(ws(e,1,t),sn(e,t));break}}e=e.return}}function ex(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(Nt&n)===n&&(Et===4||Et===3&&(Nt&130023424)===Nt&&500>vt()-bd?_r(t,0):Rd|=n),sn(t,e)}function Wg(t,e){e===0&&(t.mode&1?(e=Bs,Bs<<=1,!(Bs&130023424)&&(Bs=4194304)):e=1);var n=Yt();t=mi(t,e),t!==null&&(ws(t,e,n),sn(t,n))}function tx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wg(t,n)}function nx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Wg(t,n)}var jg;jg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,V0(t,e,n);nn=!!(t.flags&131072)}else nn=!1,ot&&e.flags&1048576&&$m(e,jo,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ro(t,e),t=e.pendingProps;var r=ga(e,Vt.current);da(e,n),r=Md(null,e,i,t,r,n);var a=Ed();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(a=!0,Vo(e)):a=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,vd(e),r.updater=vl,e.stateNode=r,r._reactInternals=e,vu(e,i,t,n),e=yu(null,e,i,!0,a,n)):(e.tag=0,ot&&a&&ud(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ro(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=rx(i),t=Ln(i,t),r){case 0:e=xu(null,e,i,t,n);break e;case 1:e=Yf(null,e,i,t,n);break e;case 11:e=Xf(null,e,i,t,n);break e;case 14:e=qf(null,e,i,Ln(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),xu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Yf(t,e,i,r,n);case 3:e:{if(Rg(e),t===null)throw Error(ie(387));i=e.pendingProps,a=e.memoizedState,r=a.element,tg(t,e),Yo(e,i,null,n);var s=e.memoizedState;if(i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){r=ya(Error(ie(423)),e),e=$f(t,e,i,n,r);break e}else if(i!==r){r=ya(Error(ie(424)),e),e=$f(t,e,i,n,r);break e}else for(fn=Oi(e.stateNode.containerInfo.firstChild),hn=e,ot=!0,Dn=null,n=Jm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(va(),i===r){e=gi(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return ng(e),t===null&&pu(e),i=e.type,r=e.pendingProps,a=t!==null?t.memoizedProps:null,s=r.children,cu(i,r)?s=null:a!==null&&cu(i,a)&&(e.flags|=32),Cg(t,e),Xt(t,e,s,n),e.child;case 6:return t===null&&pu(e),null;case 13:return bg(t,e,n);case 4:return _d(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_a(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Xf(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,a=e.memoizedProps,s=r.value,tt(Xo,i._currentValue),i._currentValue=s,a!==null)if(zn(a.value,s)){if(a.children===r.children&&!rn.current){e=gi(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=fi(-1,n&-n),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),mu(a.return,n,e),o.lanes|=n;break}l=l.next}}else if(a.tag===10)s=a.type===e.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(ie(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),mu(s,n,e),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,da(e,n),r=wn(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),qf(t,e,i,r,n);case 15:return wg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Ro(t,e),e.tag=1,an(i)?(t=!0,Vo(e)):t=!1,da(e,n),Mg(e,i,r),vu(e,i,r,n),yu(null,e,i,!0,t,n);case 19:return Pg(t,e,n);case 22:return Ag(t,e,n)}throw Error(ie(156,e.tag))};function Xg(t,e){return xm(t,e)}function ix(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,i){return new ix(t,e,n,i)}function Nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rx(t){if(typeof t=="function")return Nd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qu)return 11;if(t===Ju)return 14}return 2}function Hi(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Lo(t,e,n,i,r,a){var s=2;if(i=t,typeof t=="function")Nd(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Yr:return xr(n.children,r,a,e);case Zu:s=8,r|=8;break;case Hc:return t=En(12,n,e,r|2),t.elementType=Hc,t.lanes=a,t;case Gc:return t=En(13,n,e,r),t.elementType=Gc,t.lanes=a,t;case Vc:return t=En(19,n,e,r),t.elementType=Vc,t.lanes=a,t;case nm:return yl(n,r,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case em:s=10;break e;case tm:s=9;break e;case Qu:s=11;break e;case Ju:s=14;break e;case wi:s=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=En(s,n,e,r),e.elementType=t,e.type=i,e.lanes=a,e}function xr(t,e,n,i){return t=En(7,t,i,e),t.lanes=n,t}function yl(t,e,n,i){return t=En(22,t,i,e),t.elementType=nm,t.lanes=n,t.stateNode={isHidden:!1},t}function ic(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function rc(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ax(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Dd(t,e,n,i,r,a,s,o,l){return t=new ax(t,e,n,o,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=En(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vd(a),t}function sx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function qg(t){if(!t)return Xi;t=t._reactInternals;e:{if(br(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(an(n))return qm(t,n,e)}return e}function Yg(t,e,n,i,r,a,s,o,l){return t=Dd(n,i,!0,t,r,a,s,o,l),t.context=qg(null),n=t.current,i=Yt(),r=Bi(n),a=fi(i,r),a.callback=e??null,ki(n,a,r),t.current.lanes=r,ws(t,r,i),sn(t,i),t}function Sl(t,e,n,i){var r=e.current,a=Yt(),s=Bi(r);return n=qg(n),e.context===null?e.context=n:e.pendingContext=n,e=fi(a,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ki(r,e,s),t!==null&&(kn(t,r,s,a),wo(t,r,s)),s}function nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ah(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ud(t,e){ah(t,e),(t=t.alternate)&&ah(t,e)}function ox(){return null}var $g=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fd(t){this._internalRoot=t}Ml.prototype.render=Fd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Sl(t,e,null,null)};Ml.prototype.unmount=Fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ar(function(){Sl(null,t,null,null)}),e[pi]=null}};function Ml(t){this._internalRoot=t}Ml.prototype.unstable_scheduleHydration=function(t){if(t){var e=Am();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ci.length&&e!==0&&e<Ci[n].priority;n++);Ci.splice(n,0,t),n===0&&Rm(t)}};function Od(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function El(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sh(){}function lx(t,e,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var c=nl(s);a.call(c)}}var s=Yg(e,i,t,0,null,!1,!1,"",sh);return t._reactRootContainer=s,t[pi]=s.current,ps(t.nodeType===8?t.parentNode:t),Ar(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=nl(l);o.call(c)}}var l=Dd(t,0,!1,null,null,!1,!1,"",sh);return t._reactRootContainer=l,t[pi]=l.current,ps(t.nodeType===8?t.parentNode:t),Ar(function(){Sl(e,l,n,i)}),l}function Tl(t,e,n,i,r){var a=n._reactRootContainer;if(a){var s=a;if(typeof r=="function"){var o=r;r=function(){var l=nl(s);o.call(l)}}Sl(e,s,t,r)}else s=lx(n,e,t,r,i);return nl(s)}Tm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$a(e.pendingLanes);n!==0&&(nd(e,n|1),sn(e,vt()),!($e&6)&&(Sa=vt()+500,Zi()))}break;case 13:Ar(function(){var i=mi(t,1);if(i!==null){var r=Yt();kn(i,t,1,r)}}),Ud(t,1)}};id=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=Yt();kn(e,t,134217728,n)}Ud(t,134217728)}};wm=function(t){if(t.tag===13){var e=Bi(t),n=mi(t,e);if(n!==null){var i=Yt();kn(n,t,e,i)}Ud(t,e)}};Am=function(){return Ke};Cm=function(t,e){var n=Ke;try{return Ke=t,e()}finally{Ke=n}};Jc=function(t,e,n){switch(e){case"input":if(Xc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=pl(i);if(!r)throw Error(ie(90));rm(i),Xc(i,r)}}}break;case"textarea":sm(t,n);break;case"select":e=n.value,e!=null&&oa(t,!!n.multiple,e,!1)}};hm=Pd;pm=Ar;var cx={usingClientEntryPoint:!1,Events:[Cs,Qr,pl,dm,fm,Pd]},Ba={findFiberByHostInstance:pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ux={bundleType:Ba.bundleType,version:Ba.version,rendererPackageName:Ba.rendererPackageName,rendererConfig:Ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ba.findFiberByHostInstance||ox,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zs.isDisabled&&Zs.supportsFiber)try{ul=Zs.inject(ux),Xn=Zs}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cx;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Od(e))throw Error(ie(200));return sx(t,e,null,n)};mn.createRoot=function(t,e){if(!Od(t))throw Error(ie(299));var n=!1,i="",r=$g;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Dd(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,ps(t.nodeType===8?t.parentNode:t),new Fd(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=vm(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return Ar(t)};mn.hydrate=function(t,e,n){if(!El(e))throw Error(ie(200));return Tl(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!Od(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",s=$g;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Yg(e,null,t,1,n??null,r,!1,a,s),t[pi]=e.current,ps(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ml(e)};mn.render=function(t,e,n){if(!El(e))throw Error(ie(200));return Tl(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!El(t))throw Error(ie(40));return t._reactRootContainer?(Ar(function(){Tl(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};mn.unstable_batchedUpdates=Pd;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!El(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Tl(t,e,n,!1,i)};mn.version="18.3.1-next-f1338f8080-20240426";function Kg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kg)}catch(t){console.error(t)}}Kg(),Kp.exports=mn;var dx=Kp.exports,oh=dx;zc.createRoot=oh.createRoot,zc.hydrateRoot=oh.hydrateRoot;const ht={brand:"NETFLIX",byline:"por kamyar xd",storageKey:"kmm-netflix",accent:"#e50914",accent2:"#f6121d",bg:"#0b0b0f",surface:"#1a0608",catalog:[{id:"nf-1",title:"El Irlandés",year:2019,genre:"Crimen",rating:"18+",duration:"3h 29m",category:"Originales Netflix",emoji:"🕴️",colors:["#334155","#0f172a"],synopsis:"Frank Sheeran, un camionero metido a sicario de la mafia, recuerda su amistad con el sindicalista Jimmy Hoffa y los trabajos que lo cambiaron todo.",featured:!0,cast:[{id:"c1",name:"Robert De Niro",role:"Protagonista",emoji:"🕴️",color:"#94a3b8"},{id:"c2",name:"Al Pacino",role:"Secundario",emoji:"🎙️",color:"#f59e0b"},{id:"c3",name:"Joe Pesci",role:"Villano",emoji:"🤝",color:"#b91c1c"},{id:"c4",name:"Stephen Graham",role:"Secundario",emoji:"😠",color:"#dc2626"},{id:"c5",name:"Anna Paquin",role:"Cameo",emoji:"🚬",color:"#6b7280"}],props:[{id:"p1",name:"Pistola",emoji:"🔫"},{id:"p2",name:"Reloj de oro",emoji:"⌚"},{id:"p3",name:"Coche clásico",emoji:"🚗"},{id:"p4",name:"Camión",emoji:"🚛"},{id:"p5",name:"Anillo",emoji:"💍"}],scenes:[{id:"s1",title:"Una residencia, mirando atrás",colors:["#1f2937","#0f172a"],script:[{charId:"",text:"Un asilo. Un anciano en una silla de ruedas empieza a contar su vida."},{charId:"c1",text:"Yo antes pintaba casas… y también las construía y reparaba yo mismo."},{charId:"",text:"Pintar casas era su manera de hablar de matar para la mafia."},{charId:"c1",text:"Pero todo empezó por una avería en la carretera, con un camión de carne."}]},{id:"s2",title:"El camionero y Russell",colors:["#334155","#0f172a"],script:[{charId:"",text:"Años 50. A Frank Sheeran se le para el camión en una gasolinera."},{charId:"c3",text:"¿Problemas con el motor? Déjame echar un ojo, soy bueno con las máquinas."},{charId:"c1",text:"Se lo agradezco. No es fácil encontrar gente que ayude sin pedir nada."},{charId:"c3",text:"Soy Russell Bufalino. Recuerda mi nombre, quizá volvamos a vernos."}]},{id:"s3",title:"Pinto casas",colors:["#3f3f46","#0f172a"],script:[{charId:"c3",text:"Frank, necesito a alguien de confianza. Que haga trabajos y no pregunte."},{charId:"c1",text:"Dígame dónde y cuándo, señor Bufalino. Yo en la guerra ya aprendí a obedecer."},{charId:"c3",text:"Esto es como pintar casas. Tú pintas… y nadie tiene que enterarse."},{charId:"c1",text:"Entendido. Pinto casas."}]},{id:"s4",title:"Los primeros trabajos",colors:["#27272a","#0f172a"],script:[{charId:"",text:"Frank se gana un nombre. Eficaz, callado, leal."},{charId:"c3",text:"Tiras la pistola al río después. Siempre. Y nunca hablas de ello."},{charId:"c1",text:"Nunca llevo la misma dos veces. No dejo nada que me señale."},{charId:"",text:"Su lealtad llega a oídos del hombre más poderoso de los sindicatos."}]},{id:"s5",title:"Una llamada de Jimmy Hoffa",colors:["#1e3a8a","#0c1838"],script:[{charId:"c2",text:"¿Hablo con Frank Sheeran? Soy Jimmy Hoffa. He oído que pintas casas."},{charId:"c1",text:"Sí, señor Hoffa. Y también sé hacer carpintería yo mismo."},{charId:"c2",text:"Me gustas. En este país, o estás con Hoffa… o estás contra Hoffa."},{charId:"c1",text:"Para mí es un honor, señor Hoffa. Cuente conmigo."}]},{id:"s6",title:"El amigo y el guardaespaldas",colors:["#1e40af","#0c1838"],script:[{charId:"",text:"Frank se vuelve la sombra de Hoffa: su guardaespaldas y su amigo."},{charId:"c2",text:"Tú y yo somos iguales, Frank. A nosotros nadie nos regala nada."},{charId:"c1",text:"Por usted me dejo la piel, Jimmy. Lo sabe."},{charId:"c5",text:"Papá… ese hombre, el señor Russell, a mí me da miedo. Hoffa no."}]},{id:"s7",title:"El rey del sindicato",colors:["#1d4ed8","#0c1838"],script:[{charId:"c2",text:"¡Dos millones de afiliados! El fondo de pensiones lo manejo yo."},{charId:"c4",text:"Te crees el dueño de todo, Hoffa. Pero a mí no me das órdenes."},{charId:"c2",text:"¿Quién te crees que eres, Tony Pro? ¡A mí se me llega puntual!"},{charId:"c4",text:"Nadie le falta el respeto a Tony Provenzano. Nadie."}]},{id:"s8",title:"La cárcel y la caída",colors:["#3f3f46","#020617"],script:[{charId:"",text:"Hoffa va a prisión. Cuando sale, su silla ya la ocupa otro."},{charId:"c2",text:"¡He vuelto, y quiero MI sindicato de vuelta! Esto no se queda así."},{charId:"c3",text:"Jimmy, déjalo correr. Acepta el retiro y vive tranquilo."},{charId:"c2",text:"Ni hablar. Antes muerto que callado, Russell."}]},{id:"s9",title:"Tony Pro y la guerra abierta",colors:["#450a0a","#020617"],script:[{charId:"c4",text:"Retírate, Hoffa. Es un consejo de amigo… el último."},{charId:"c2",text:"¡A mí no me amenaza un don nadie como tú! ¡Llegaste tarde a la reunión!"},{charId:"c4",text:"Acabas de cometer un error muy grande, viejo."},{charId:"c1",text:"Jimmy, baja la voz. Hay gente a la que no conviene provocar."}]},{id:"s10",title:"Hay que pararlo",colors:["#1c1917","#020617"],script:[{charId:"c3",text:"Frank, lo hemos intentado todo. Jimmy no escucha a nadie."},{charId:"c1",text:"Es mi amigo, Russell. Lo que me pides… no es cualquier cosa."},{charId:"c3",text:"Ya está decidido, arriba. Y mejor que seas tú… por respeto a él."},{charId:"c1",text:"Es mi amigo… pero un trabajo es un trabajo."}]},{id:"s11",title:"El viaje a Detroit",colors:["#292524","#020617"],script:[{charId:"",text:"Un coche cruza el país hacia Detroit. Russell y Frank, en silencio."},{charId:"c3",text:"Después de esto, todo vuelve a la calma. Para todos."},{charId:"c1",text:"Pasamos a recoger a Jimmy. Confía en mí, va a subir al coche."},{charId:"c2",text:"Frank, menos mal que eres tú. A ti sí te abro la puerta."}]},{id:"s12",title:"Es lo que hay",colors:["#1f2937","#000000"],script:[{charId:"",text:"Una casa vacía en Detroit. Frank entra detrás de su amigo."},{charId:"c2",text:"Frank, tú nunca me fallarías, ¿verdad? Solo estamos tú y yo."},{charId:"c1",text:"Lo siento, Jimmy."},{charId:"",text:"Y así, sin más, Jimmy Hoffa desapareció para siempre. Nunca se halló el cuerpo."}]},{id:"s13",title:"Solo, al final",colors:["#18181b","#000000"],script:[{charId:"",text:"Pasan los años. Russell, Tony Pro, todos mueren entre rejas o de viejos."},{charId:"c5",text:"No tengo nada que hablar contigo, papá. Nunca lo tendré."},{charId:"c1",text:"Padre, ¿usted cree que se puede sentir algo… aunque ya no sientas nada?"},{charId:"c1",text:"No cierre la puerta del todo, por favor. Déjela un poquito abierta."}]}]},{id:"nf-2",title:"No Mires Arriba",year:2021,genre:"Comedia",rating:"16+",duration:"2h 18m",category:"Originales Netflix",emoji:"☄️",colors:["#1d4ed8","#172554"],synopsis:"Dos astrónomos descubren un cometa que destruirá la Tierra y recorren los platós de televisión intentando que alguien, quien sea, les haga caso.",cast:[{id:"c6",name:"Leonardo DiCaprio",role:"Protagonista",emoji:"🔭",color:"#0e7490"},{id:"c7",name:"Jennifer Lawrence",role:"Secundario",emoji:"🚨",color:"#dc2626"},{id:"c8",name:"Meryl Streep",role:"Villano",emoji:"🇺🇸",color:"#b91c1c"},{id:"c9",name:"Timothée Chalamet",role:"Secundario",emoji:"🛹",color:"#16a34a"}],props:[{id:"p6",name:"Telescopio",emoji:"🔭"},{id:"p7",name:"Cometa",emoji:"☄️"}],scenes:[{id:"s1",title:"El descubrimiento",colors:["#1d4ed8","#172554"],script:[{charId:"c7",text:"Profesor… ese cometa va directo hacia la Tierra."},{charId:"c6",text:"Impactará en seis meses. Es un evento de extinción."},{charId:"",text:"Pero nadie parecía dispuesto a creerlos."}]},{id:"s2",title:"¡Miren arriba!",colors:["#7f1d1d","#172554"],script:[{charId:"c8",text:"La gente no quiere malas noticias. Tranquilos y a confiar."},{charId:"c7",text:"¡Vamos a morir todos y a nadie le importa!"},{charId:"c6",text:"Al menos lo intentamos. Mirad arriba… ya se ve."}]}]},{id:"nf-3",title:"The Gray Man",year:2022,genre:"Acción",rating:"16+",duration:"2h 2m",category:"Acción a tope",emoji:"🕶️",colors:["#475569","#020617"],synopsis:"Un agente fantasma de la CIA descubre secretos sucios de la agencia y se convierte en el objetivo de un mercenario sin escrúpulos.",cast:[{id:"c10",name:"Ryan Gosling",role:"Protagonista",emoji:"🕶️",color:"#0e7490"},{id:"c11",name:"Chris Evans",role:"Villano",emoji:"🔪",color:"#dc2626"},{id:"c12",name:"Ana de Armas",role:"Secundario",emoji:"🔫",color:"#1d4ed8"},{id:"c13",name:"Billy Bob Thornton",role:"Secundario",emoji:"🎩",color:"#b45309"}],props:[{id:"p8",name:"Pistola",emoji:"🔫"},{id:"p9",name:"Móvil cifrado",emoji:"📱"}],scenes:[{id:"s1",title:"Sierra Seis",colors:["#475569","#020617"],script:[{charId:"c13",text:"Tienes secretos que la Agencia quiere enterrar, Seis."},{charId:"c10",text:"Entonces tendrán que atraparme primero."}]},{id:"s2",title:"El mercenario",colors:["#1f2937","#020617"],script:[{charId:"c11",text:"Te voy a cazar, y va a ser divertido."},{charId:"c12",text:"No vas solo en esto, Seis."},{charId:"c10",text:"Salgamos de aquí antes de que vuele todo por los aires."}]}]},{id:"nf-4",title:"Alerta Roja",year:2021,genre:"Acción",rating:"12+",duration:"1h 58m",category:"Acción a tope",emoji:"💎",colors:["#ca8a04","#3f2d0a"],synopsis:"Un perfilador del FBI une fuerzas a regañadientes con un ladrón de guante blanco para atrapar a la mayor estafadora de obras de arte del mundo.",cast:[{id:"c14",name:"Dwayne Johnson",role:"Protagonista",emoji:"💪",color:"#475569"},{id:"c15",name:"Ryan Reynolds",role:"Secundario",emoji:"😏",color:"#dc2626"},{id:"c16",name:"Gal Gadot",role:"Villano",emoji:"💎",color:"#f59e0b"}],props:[{id:"p10",name:"Huevo de Cleopatra",emoji:"🥚"},{id:"p11",name:"Esposas",emoji:"🔗"}],scenes:[{id:"s1",title:"El atraco al museo",colors:["#ca8a04","#3f2d0a"],script:[{charId:"c14",text:"Soy del FBI. Busco al ladrón de arte más buscado del mundo."},{charId:"c15",text:"Qué casualidad, yo también… más o menos."}]},{id:"s2",title:"El Obispo",colors:["#1f2937","#3f2d0a"],script:[{charId:"c16",text:"Siempre voy un paso por delante de vosotros, chicos."},{charId:"c14",text:"Esta vez no. Trabajamos juntos, Booth."},{charId:"c15",text:"¿Confías en mí? Mala idea."}]}]},{id:"nf-5",title:"Puñales por la Espalda: Glass Onion",year:2022,genre:"Misterio",rating:"12+",duration:"2h 19m",category:"Originales Netflix",emoji:"🔪",colors:["#0e7490","#083344"],synopsis:"El detective Benoit Blanc viaja a la isla griega de un millonario excéntrico, donde un juego de asesinato se convierte en un crimen muy real.",cast:[{id:"c17",name:"Daniel Craig",role:"Protagonista",emoji:"🕵️",color:"#0e7490"},{id:"c18",name:"Edward Norton",role:"Villano",emoji:"💰",color:"#ca8a04"},{id:"c19",name:"Janelle Monáe",role:"Secundario",emoji:"🧩",color:"#db2777"},{id:"c20",name:"Kate Hudson",role:"Secundario",emoji:"🥂",color:"#f59e0b"}],props:[{id:"p12",name:"Cuadro robado",emoji:"🖼️"},{id:"p13",name:"Pistola",emoji:"🔫"}],scenes:[{id:"s1",title:"La isla del millonario",colors:["#0e7490","#083344"],script:[{charId:"c18",text:"Bienvenidos a mi juego. Esta noche, alguien me asesina… de mentira."},{charId:"c17",text:"Qué interesante… pero el crimen de verdad ya ha empezado."}]},{id:"s2",title:"La cebolla de cristal",colors:["#1f2937","#083344"],script:[{charId:"c19",text:"Lo hiciste por dinero. Y mataste a mi hermana por ello."},{charId:"c18",text:"Nadie podrá probar nada. Soy intocable."},{charId:"c17",text:"La solución estaba a la vista. Tan simple que cegaba."}]}]},{id:"nf-6",title:"A Ciegas",year:2018,genre:"Terror",rating:"16+",duration:"2h 4m",category:"Terror nocturno",emoji:"🙈",colors:["#16a34a","#064e3b"],synopsis:"Una madre y sus dos hijos cruzan un río con los ojos vendados: mirar a las criaturas que han arrasado el mundo significa la muerte.",cast:[{id:"c21",name:"Sandra Bullock",role:"Protagonista",emoji:"🙈",color:"#0e7490"},{id:"c22",name:"Trevante Rhodes",role:"Secundario",emoji:"🚣",color:"#b45309"},{id:"c23",name:"John Malkovich",role:"Villano",emoji:"😠",color:"#b91c1c"}],props:[{id:"p14",name:"Venda",emoji:"🩹"},{id:"p15",name:"Barca",emoji:"🛶"}],scenes:[{id:"s1",title:"No abras los ojos",colors:["#16a34a","#064e3b"],script:[{charId:"",text:"Algo invisible empuja a quien lo mira a quitarse la vida."},{charId:"c23",text:"¡No miréis fuera! Cerrad todo. ¡Vendas en los ojos!"},{charId:"c21",text:"Si queremos vivir, cruzaremos el río a ciegas."}]},{id:"s2",title:"El río",colors:["#1f2937","#064e3b"],script:[{charId:"c22",text:"Lo conseguiremos, Malorie. Juntos."},{charId:"c21",text:"Niños, pase lo que pase, no os quitéis la venda."}]}]},{id:"nf-7",title:"Historia de un Matrimonio",year:2019,genre:"Drama",rating:"16+",duration:"2h 17m",category:"Dramas",emoji:"💔",colors:["#db2777","#500724"],synopsis:"Un director de teatro y una actriz atraviesan un divorcio que saca lo mejor y lo peor de ambos mientras intentan proteger a su hijo.",cast:[{id:"c24",name:"Adam Driver",role:"Protagonista",emoji:"🎭",color:"#475569"},{id:"c25",name:"Scarlett Johansson",role:"Secundario",emoji:"💔",color:"#1d4ed8"},{id:"c26",name:"Laura Dern",role:"Secundario",emoji:"⚖️",color:"#16a34a"}],props:[{id:"p16",name:"Carta",emoji:"💌"},{id:"p17",name:"Anillo",emoji:"💍"}],scenes:[{id:"s1",title:"La separación",colors:["#db2777","#500724"],script:[{charId:"c25",text:"Te quise, pero ya no me reconozco a tu lado."},{charId:"c24",text:"No quiero abogados. Hagámoslo bien, por el niño."}]},{id:"s2",title:"La discusión",colors:["#7f1d1d","#500724"],script:[{charId:"c26",text:"En un divorcio no hay buenos. Solo el que gana."},{charId:"c24",text:"¡No sé cómo hemos llegado a odiarnos así!"},{charId:"c25",text:"Yo tampoco… y aún así te querré de otra forma."}]}]},{id:"nf-8",title:"Roma",year:2018,genre:"Drama",rating:"16+",duration:"2h 15m",category:"Dramas",emoji:"🌊",colors:["#475569","#1e293b"],synopsis:"En el barrio de Roma de Ciudad de México, una empleada doméstica sostiene a una familia que se desmorona durante los convulsos años 70.",cast:[{id:"c27",name:"Yalitza Aparicio",role:"Protagonista",emoji:"🧺",color:"#0e7490"},{id:"c28",name:"Marina de Tavira",role:"Secundario",emoji:"🏠",color:"#b45309"}],props:[{id:"p18",name:"Cubo de agua",emoji:"🪣"},{id:"p19",name:"Avión de juguete",emoji:"✈️"}],scenes:[{id:"s1",title:"La casa",colors:["#475569","#1e293b"],script:[{charId:"",text:"Ciudad de México, 1971. Cleo cuida de una familia que se rompe."},{charId:"c28",text:"No estamos solas en esto, Cleo. Somos mujeres saliendo adelante."}]},{id:"s2",title:"El mar",colors:["#0e7490","#1e293b"],script:[{charId:"c27",text:"¡No sé nadar, pero el mar no se los va a llevar!"},{charId:"",text:"Y Cleo, que lo había perdido todo, los salvó a todos."}]}]},{id:"nf-9",title:"Policán",year:2025,genre:"Animación",rating:"TODOS",duration:"1h 30m",category:"Para toda la familia",emoji:"🐶",colors:["#f59e0b","#7c2d12"],synopsis:"Una bomba deja al agente Caballero sin cabeza y a su perro Greg sin cuerpo. A una enfermera se le ocurre una locura y nace Policán: el mejor policía de Ciudad Okey y el peor perro del mundo. De la Cárcel de Gatos a los Monines del Espacio, los 14 libros en una sola aventura sobre padres, hijos y segundas oportunidades.",cast:[{id:"c29",name:"Policán",role:"Protagonista",emoji:"🐶",color:"#f59e0b"},{id:"c30",name:"Pedrito",role:"Villano",emoji:"🐱",color:"#f97316"},{id:"c31",name:"Gatito",role:"Secundario",emoji:"🐈",color:"#fb923c"},{id:"c32",name:"El Jefe",role:"Secundario",emoji:"👮",color:"#1d4ed8"},{id:"c33",name:"El Abuelo",role:"Villano",emoji:"😾",color:"#57534e"},{id:"c34",name:"Sara Ladrido",role:"Secundario",emoji:"🎤",color:"#ec4899"},{id:"c35",name:"Flippy",role:"Villano",emoji:"🐟",color:"#22c55e"},{id:"c36",name:"Molly",role:"Secundario",emoji:"🐸",color:"#a855f7"},{id:"c37",name:"Big Jim",role:"Secundario",emoji:"🧁",color:"#eab308"}],props:[{id:"p20",name:"Espray Vivificador",emoji:"🧴"},{id:"p21",name:"Supa Puntitos",emoji:"🥫"},{id:"p22",name:"80-HD",emoji:"🤖"},{id:"p23",name:"Pelota",emoji:"🎾"},{id:"p24",name:"Anillo del Destino",emoji:"💍"},{id:"p25",name:"Ukelele",emoji:"🪕"}],scenes:[{id:"s1",title:"El agente Caballero y Greg",colors:["#1d4ed8","#0f172a"],script:[{charId:"",text:"Ciudad Okey. El agente Caballero y su perro policía Greg son el mejor equipo de la comisaría."},{charId:"c32",text:"¡Caballero! Pedrito ha puesto una bomba en el parque. ¡Tenéis diez minutos!"},{charId:"c30",text:"Jejeje… hoy me quito de encima al poli Y al chucho de una sola vez."},{charId:"",text:"Caballero no sabe qué cable cortar. Le pregunta a Greg. Greg gruñe."},{charId:"",text:"«¡El verde!», entiende Caballero. Y corta. ¡BUM! «¡Ay, no! ¡Olvidé que los perros son ciegos de colores!»"}]},{id:"s2",title:"La idea de la enfermera",colors:["#0891b2","#083344"],script:[{charId:"",text:"Hospital. Las noticias son malas: la cabeza de Caballero se muere… y el cuerpo de Greg también."},{charId:"c32",text:"No puede ser. Son mis dos mejores agentes y los voy a perder a los dos a la vez."},{charId:"",text:"Entonces a la enfermera se le ocurre la idea más loca de la historia: coser la cabeza de Greg al cuerpo de Caballero."},{charId:"",text:"Los médicos operan toda la noche. Y cuando caen las vendas…"},{charId:"c32",text:"¡Es… es PERFECTO! ¡Bienvenido al cuerpo, POLICÁN!"},{charId:"c29",text:"¡GUAU!"}]},{id:"s3",title:"El mejor poli y el peor perro",colors:["#f59e0b","#7c2d12"],script:[{charId:"",text:"Policán es un policía excelente. Y un perro horrible: persigue ardillas y bebe del váter."},{charId:"c30",text:"¡He construido una aspiradora gigante! ¡Se tragará la ciudad entera!"},{charId:"",text:"Policán la lleva hasta la playa. La aspiradora sorbe el mar… y revienta."},{charId:"c30",text:"Pues robaré las palabras de TODOS los libros. ¡El mundo se volverá supatonto!"},{charId:"",text:"Policán olfatea el escondite y reparte cada palabra robada a los niños de la ciudad."},{charId:"",text:"Y para fugarse de la Cárcel de Gatos, Pedrito usa un balancín y el peso de un preso enorme llamado Big Jim."}]},{id:"s4",title:"El perrito caliente que quería un amigo",colors:["#dc2626","#450a0a"],script:[{charId:"c30",text:"Mi Espray Vivificador. Daré vida a una salchicha y será mi soldado."},{charId:"",text:"La salchicha cobra vida, mira a Pedrito y le hace una sola pregunta."},{charId:"",text:"«¿Quieres ser mi amigo?»"},{charId:"c30",text:"¿Amigo? ¡YO NO NECESITO AMIGOS! ¡Largo de aquí!"},{charId:"",text:"Dolida, la salchicha levanta un ejército. Los perros de la ciudad se lo comen enterito."},{charId:"",text:"Pero esa pregunta se queda flotando. Y va a tardar catorce libros en tener respuesta."}]},{id:"s5",title:"Supa Puntitos en la pecera",colors:["#22c55e","#064e3b"],script:[{charId:"",text:"Cumpleaños del Jefe. Los polis le regalan un bote de Supa Puntitos, porque es un despistado."},{charId:"",text:"Policán le trae un pez de la tienda: Flippy, un abusón que robaba los cofrecitos del acuario."},{charId:"",text:"El Jefe cierra de un portazo. El bote se cae. Los Supa Puntitos se hunden en la pecera."},{charId:"c35",text:"Mi cerebro… ¡ha crecido once tallas! ¡Ahora muevo el mundo con la mente!"},{charId:"",text:"Empiezan a desaparecer cofrecitos por toda la ciudad. Y todos culpan a Pedrito."}]},{id:"s6",title:"Sara, Zuzu y la pelota de energía",colors:["#ec4899","#500724"],script:[{charId:"c34",text:"Soy Sara Ladrido, reportera. Aquí hay gato encerrado… y no es el gato que pensáis."},{charId:"",text:"Zuzu, su caniche, olfatea la verdad en dos segundos: el ladrón es Flippy."},{charId:"c35",text:"¡No me atraparéis! ¡Abandono este cuerpo y me meto dentro del Jefe!"},{charId:"",text:"Flippy sale de su pez convertido en energía pura. Pero la energía tiene forma de PELOTA."},{charId:"",text:"Y Policán no puede resistirse a una pelota. Jamás."},{charId:"c29",text:"¡GUAU! ¡ÑAM!"}]},{id:"s7",title:"El clon",colors:["#f97316","#7c2d12"],script:[{charId:"c30",text:"Mi máquina de clonar me dará un ayudante malvado idéntico a mí. ¡Prepárate, mundo!"},{charId:"",text:"De la máquina no sale un adulto. Sale un gatito."},{charId:"c31",text:"Hola, papá. ¿Jugamos al pato-pato-ganso?"},{charId:"c30",text:"¡NO! ¡Se supone que eres MALVADO! …Tardarás dieciocho años en servirme de algo."},{charId:"",text:"Pedrito lo deja tirado y se va. Policán lo encuentra solo… y se lo lleva a casa."}]},{id:"s8",title:"Los edificios despiertan",colors:["#16a34a","#052e16"],script:[{charId:"",text:"El cuerpo de Flippy cae en la Fábrica del Espray Vivificador y resucita, ahora biónico."},{charId:"c35",text:"¡Edificios de Ciudad Okey… LEVANTAOS!"},{charId:"",text:"Gatito pilota a 80-HD contra el ejército de edificios. El robot acaba hecho pedazos."},{charId:"c31",text:"Flippy, no te pregunto QUÉ haces. Te pregunto POR QUÉ lo haces."},{charId:"",text:"Flippy se queda quieto. Nadie le había preguntado eso nunca. Y su maldad se apaga sola."},{charId:"c35",text:"Iré a la cárcel. Pero por primera vez en mi vida… tengo un amigo."}]},{id:"s9",title:"La cuidadora de gatos",colors:["#a855f7","#3b0764"],script:[{charId:"",text:"Una viejecita se ofrece a cuidar a Gatito mientras Policán trabaja."},{charId:"c30",text:"Repite conmigo, chaval: «el caos sin pensar es lo mejor»."},{charId:"c31",text:"Papá, sé que eres tú. Se te ve el bigote por debajo del pañuelo."},{charId:"",text:"Pedrito tira el disfraz y le hace un traje de villano a juego. Y le llama «kid», chaval."},{charId:"c31",text:"¿Kid? ¡Pues entonces soy GATITO KID!"}]},{id:"s10",title:"La Bestia del Edén",colors:["#ca8a04","#422006"],script:[{charId:"",text:"En la ciudad ruedan una película de Policán. Pedrito la sabotea y secuestra a la actriz."},{charId:"c30",text:"Con el Espray Crecedor mi robot será gigante. ¡Presentando… la BESTIA DEL EDÉN!"},{charId:"",text:"La bestia arrasa los estudios. 80-HD la parte en dos por la mitad."},{charId:"",text:"Al caer, las letras del cartel se recolocan solas. De «el caos sin pensar es lo mejor»… a «TÚ ELIGES»."},{charId:"c31",text:"Papá, mira. Dice que puedo elegir. Que no tengo que ser lo que tú fuiste."}]},{id:"s11",title:"Las Pulgas",colors:["#78716c","#1c1917"],script:[{charId:"",text:"Gatito y 80-HD montan un club en el salón: los Supacolegas."},{charId:"",text:"Y del pasado de Pedrito vuelven tres viejos conocidos de los Bichoscouts: Piggy, Crunky y Bub."},{charId:"",text:"Ahora son las PULGAS: una escuadra de animalitos peludos y malvados, con Piggy al mando."},{charId:"c30",text:"Conmigo haced lo que queráis. Pero a mi hijo NO lo tocáis."},{charId:"",text:"Gatito pinta el Robo-Brontosaurio de ardilla. Policán sale disparado detrás. Fin del robot."}]},{id:"s12",title:"Por qué Pedrito es así",colors:["#57534e","#0c0a09"],script:[{charId:"",text:"Flashback. Pedrito era un gatito. Su madre estaba enferma. Y su padre se marchó."},{charId:"c33",text:"Me llevo la casa, los muebles y hasta las cortinas. Tú apáñate, chaval."},{charId:"",text:"Aquel día Pedrito decidió que si nadie lo quería a él, él no querría a nadie."},{charId:"c30",text:"Por eso soy así. Nadie me enseñó otra cosa."},{charId:"c30",text:"Volveré a la Cárcel de Gatos. Y me escaparé otra vez… para ir a por un helado con mi hijo."}]},{id:"s13",title:"Catorce años de perros",colors:["#475569","#020617"],script:[{charId:"",text:"Las Pulgas roban un banco disfrazadas de Policán. El dinero aparece en la cama de Policán."},{charId:"c32",text:"Yo no me lo creo. Pero la ley es la ley. Lo siento muchísimo."},{charId:"",text:"«¡Catorce años de perros de trabajos forzados!» En la perrera, los perros duros se ríen de él."},{charId:"",text:"Ni perro ni persona. Policán empieza a creer que no encaja en ninguna parte."},{charId:"c34",text:"Escúchame: yo tampoco encajo. Nadie encaja del todo. Por eso eres normal."}]},{id:"s14",title:"El monstruo de plastilina",colors:["#0d9488","#042f2e"],script:[{charId:"",text:"En el estreno de la película, las Pulgas rocían la pantalla con Espray Vivificador."},{charId:"",text:"El fuego de la peli sale del cine convertido en un monstruo gigante de plastilina."},{charId:"",text:"Demuestran que Policán es inocente y sale de la perrera justo a tiempo."},{charId:"c29",text:"¡GUAU!"},{charId:"",text:"Entre todos tumban al monstruo. Las Pulgas escapan, tan malas como siempre."}]},{id:"s15",title:"La pelota",colors:["#eab308","#422006"],script:[{charId:"",text:"Los Supacolegas deciden curarle las manías. Cada vez que persiga una pelota… ¡baño!"},{charId:"",text:"Funciona demasiado bien. Ahora Policán tiene PÁNICO a las pelotas."},{charId:"c32",text:"No puedo sacarte a la calle así, muchacho. Quédate en la comisaría."},{charId:"",text:"El Doctor Escoria, aquel que fabricó al Robo-Jefe hace años, huele la debilidad."},{charId:"",text:"Roba con Pelotas Ladronas. Y cuando le fallan, saca el Colosal-Bot 2000."}]},{id:"s16",title:"Llega el Abuelo",colors:["#44403c","#0c0a09"],script:[{charId:"c31",text:"80-HD, tengo una misión para ti. Encuéntrame a mi abuelo."},{charId:"",text:"El robot lo trae a casa. Pedrito se queda helado: no lo ve desde que era un gatito."},{charId:"c33",text:"¡Anda! Pero si eres… un momento. ¿Tú no eras más bajito?"},{charId:"c30",text:"Ese es tu nieto, papá. Yo soy tu hijo."},{charId:"",text:"El Abuelo se lleva todo lo del laboratorio. Todo, menos los cómics de Gatito."},{charId:"c30",text:"El mundo tiene un montón de problemas… pero nunca podría ser un sitio horrible, porque tú estás en él."}]},{id:"s17",title:"Fetch-22",colors:["#f472b6","#500724"],script:[{charId:"",text:"Pedrito sale de la cárcel decidido a empezar de cero. El mundo no se lo va a poner fácil."},{charId:"c33",text:"Si me disfrazo de mi propio hijo, salgo por la puerta… y encima le echan a él la culpa."},{charId:"",text:"Y funciona. Pedrito vuelve a ser sospechoso de todo sin haber hecho nada."},{charId:"",text:"Mientras, el Hada Justa se harta: «si no puede ser justo para todos, que no lo sea para nadie»."},{charId:"",text:"En la charca encuentra 22 renacuajos que se han pasado con los Supa Puntitos. Ahora mueven cosas con la mente."}]},{id:"s18",title:"Molly",colors:["#a855f7","#3b0764"],script:[{charId:"",text:"Los Supacolegas se preparan para pelear. Gatito hace otra cosa completamente distinta."},{charId:"c31",text:"Hola. Me llamo Gatito. ¿Quieres ser mi amiga?"},{charId:"c36",text:"¿Amiga? Nadie… nadie me había preguntado eso jamás."},{charId:"",text:"La misma pregunta que aquella salchicha le hizo a Pedrito. Esta vez alguien contesta que sí."},{charId:"",text:"Molly cambia de bando, y con ella los 22 renacuajos. Zuzu trae el antídoto de verdad."},{charId:"c31",text:"El amor y la amabilidad son los poderes más grandes que hay."}]},{id:"s19",title:"Barro y castigo",colors:["#92400e","#1c1917"],script:[{charId:"",text:"Ceremonia en el Ayuntamiento en honor al Jefe. Policán llega tarde y cubierto de barro."},{charId:"",text:"Le roba el sombrero al Alcalde, tira una columna y el edificio entero se viene abajo."},{charId:"",text:"El Alcalde lo despide en persona y le quita las placas."},{charId:"c32",text:"No estoy llorando. Son… alergias."},{charId:"",text:"De repente TODA la comisaría tiene alergia. Casi inundan el edificio de lágrimas."}]},{id:"s20",title:"El Cerebro Motor",colors:["#7c3aed","#2e1065"],script:[{charId:"c31",text:"80-HD y yo te hemos hecho un disfraz. A partir de ahora eres… ¡GATOMAN!"},{charId:"c33",text:"He inventado el Cerebro Motor. Sube el volumen de lo que ya llevas dentro."},{charId:"",text:"Al Abuelo lo convierte en Crud, puro odio. A Big Jim lo convierte en Snug, puro cariño."},{charId:"c37",text:"¡VEN AQUÍ QUE TE DÉ UN ABRAZO ENORME!"},{charId:"",text:"Crud escapa con Munchy, una bolsa del almuerzo viva. La máquina no te cambia: solo te sube el volumen."}]},{id:"s21",title:"Los niños dibujan",colors:["#0ea5e9","#0c4a6e"],script:[{charId:"",text:"Munchy arrasa la ciudad. A golpes no hay quien lo pare. Así que los niños prueban otra cosa."},{charId:"",text:"Le dibujan encima sus cosas favoritas. Munchy se mira… y deja de ser un monstruo."},{charId:"c30",text:"Papá, podría odiarte el resto de mi vida. He decidido que no."},{charId:"c33",text:"¿Qué… qué acabas de decir?"},{charId:"",text:"El Abuelo se quita el Cerebro Motor. Y Policán salva al Alcalde y a su osito de un incendio."},{charId:"c32",text:"Tus placas, muchacho. Estabas tardando."}]},{id:"s22",title:"El Hogar Feliz",colors:["#f59e0b","#451a03"],script:[{charId:"",text:"Pedrito lleva a Sara y a su cámara por los sitios de su vida. El último no lo esperaba nadie."},{charId:"c30",text:"Aquí viví con mi madre cuando él se fue. Se llamaba Hogar Feliz. Era un refugio."},{charId:"c30",text:"No teníamos nada. Y ella seguía cantando. Todos los días."},{charId:"c34",text:"¿Y cómo lo hacía?"},{charId:"c30",text:"No lo sé. Llevo toda la vida intentando averiguarlo."}]},{id:"s23",title:"Mecha Molly y el ukelele",colors:["#7c3aed","#1e1b4b"],script:[{charId:"",text:"El Abuelo vuelve a por Espray Vivificador. En la pelea, el espray cae sobre dos vasitos de bebé."},{charId:"",text:"Dos vasitos colosales y siniestros se tragan al Abuelo y a Big Jim y atrapan a toda la familia."},{charId:"c36",text:"¡Modo MECHA MOLLY! ¡Apartaos todos!"},{charId:"",text:"Molly los revienta. Pero la casa de Pedrito se viene abajo entera."},{charId:"c31",text:"Papá, mira. Entre los escombros. El ukelele de la abuela. Está entero."},{charId:"c30",text:"…Lo demás daba igual, ¿verdad? Lo importante siempre fue esto."}]},{id:"s24",title:"Veinte mil pulgas",colors:["#0891b2","#083344"],script:[{charId:"",text:"Piggy se escapa. Un rumor mal contado, y luego peor repetido, se convierte en un titular."},{charId:"",text:"«VEINTE MIL PULGAS BAJO EL MAR». La ciudad entra en pánico por algo que nunca pasó."},{charId:"",text:"Piggy lo aprovecha y encoge el submarino de los héroes con todos dentro."},{charId:"",text:"Acaban dentro de una glándula de sudor de la nariz de Piggy, peleando contra un ácaro gigante."},{charId:"",text:"Agrandan el submarino y a Piggy se le acaba el chollo. Luego todos ayudan a reconstruir el laboratorio."},{charId:"c30",text:"Un momento. ¿Esto lo estáis haciendo… por mí?"}]},{id:"s25",title:"El Mudador Escarlata",colors:["#dc2626","#450a0a"],script:[{charId:"",text:"El Jefe se casa con la enfermera y se va de luna de miel. Manda Maude, y Maude no perdona una."},{charId:"",text:"A Policán lo rocía una mofeta. El baño de zumo de tomate le quita el olor… y lo deja ROJO para siempre."},{charId:"",text:"Un malentendido tras otro, y Policán acaba en la cárcel."},{charId:"",text:"El Doctor Escoria le hace a Pedrito la oferta: yo saco a tu perro, tú vuelves a ser malo."},{charId:"c30",text:"Amiguitos de I.A. para todos. Que ellos vivan tu vida y tú a lo importante: selfis y redes."}]},{id:"s26",title:"Elijo cómo reacciono",colors:["#b91c1c","#1c1917"],script:[{charId:"",text:"Los robots se organizan. Si ellos lo hacen todo… ¿para qué hacen falta las personas?"},{charId:"",text:"Esa noche Pedrito sueña con el refugio. Con su madre cantando sin tener absolutamente nada."},{charId:"c30",text:"Ya lo entiendo, mamá. No puedo elegir lo que me pasa. Solo puedo elegir cómo reacciono."},{charId:"",text:"Rompe con Escoria. Y entran el Mudador Escarlata, Mecha Molly, el Chico Petardo y Ninja Tiburón."},{charId:"c32",text:"Ya he vuelto. Y ese sombrero es mío."}]},{id:"s27",title:"Big Jim empieza",colors:["#eab308","#422006"],script:[{charId:"",text:"Cárcel de Gatos. Big Jim le hace una oferta al Abuelo desde la litera de abajo."},{charId:"c37",text:"Te saco de aquí. Pero serás mi ayudante. Te llamarás Sprinkles."},{charId:"c33",text:"Acepto. ¿Y el uniforme?"},{charId:"c37",text:"Un maillot rosa. De purpurina."},{charId:"c33",text:"…Me quedo en la cárcel."}]},{id:"s28",title:"Busca a los que ayudan",colors:["#1e40af","#020617"],script:[{charId:"",text:"Big Jim cuenta su historia. De pequeño, una enfermera se sentó a su lado y se lo dijo bajito."},{charId:"",text:"Sus padres habían muerto en un accidente. Buscaban el Anillo del Destino y nunca lo encontraron."},{charId:"",text:"A su lado estaba la Ayudante. Cuando todo se rompe, busca siempre a los que ayudan."},{charId:"",text:"Jimito fundó el Club de Jóvenes Detectives: un niño llamado Clarence… y un cachorro llamado Greg."},{charId:"c32",text:"Un momento. Clarence soy yo. Y ese cachorro… ese cachorro era Greg."},{charId:"",text:"Los finales dolorosos, a veces, solo son principios disfrazados."}]},{id:"s29",title:"Los Monines del Espacio",colors:["#ec4899","#4a044e"],script:[{charId:"",text:"Un OVNI aterriza en Ciudad Okey. Bajan unos aliens adorables ofreciendo tarta gratis."},{charId:"",text:"El que se acerca recibe un rayo y sale convertido en algo cursi y con lacito."},{charId:"c37",text:"¡Mi cupcake es un gancho! ¡Agarraos fuerte!"},{charId:"",text:"Y por primera vez en catorce libros, la historia se corta sin resolver nada."}]},{id:"s30",title:"La nota que lo cambió todo",colors:["#57534e","#0c0a09"],script:[{charId:"c33",text:"Ahora me toca a mí. Yo nací gruñón. El bebé más gruñón del mundo."},{charId:"",text:"Un alienígena le dio una nota y un anillo. No eran para él: eran para la Ayudante."},{charId:"c33",text:"Y yo hice lo que hago siempre. La arrugué y la tiré al suelo."},{charId:"",text:"Aquella nota voló. Y el destino se equivocó de persona por culpa de un gato gruñón tirando basura."},{charId:"",text:"Toda esta historia, desde el primer día, empezó ahí."}]},{id:"s31",title:"Lo verás cuando lo creas",colors:["#f472b6","#3b0764"],script:[{charId:"",text:"Los Monines vuelven con el Canciller Chibi. Y esta vez traen Peste Espacial Antiabrazos."},{charId:"c37",text:"Los abrazos ya no les hacen nada. Da igual. Lo verás… cuando lo creas."},{charId:"",text:"A Big Jim lo convierten en un peluche. El Abuelo se lanza solo a por toda la gloria."},{charId:"",text:"Los cupcakes curan a los convertidos. Y al final, quien salva el día es un perro."},{charId:"c29",text:"¡GUAU!"}]},{id:"s32",title:"Una tapa de contenedor",colors:["#334155","#020617"],script:[{charId:"",text:"Se acabó. Big Jim y el Abuelo salen de un contenedor, despeinados pero enteros."},{charId:"c37",text:"Abuelo, que tú te creas algo no lo convierte en verdad."},{charId:"",text:"La tapa del contenedor le cae al Abuelo justo en la cabeza."},{charId:"c33",text:"¡PARA MÍ SÍ!"},{charId:"",text:"Y en Ciudad Okey, Policán mueve la cola. Porque al final solo quería una cosa: estar con los suyos."}]}]}]};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="162",fx=0,lh=1,hx=2,Zg=1,Qg=2,ii=3,qi=0,on=1,si=2,Gi=0,ha=1,ch=2,uh=3,dh=4,px=5,fr=100,mx=101,gx=102,fh=103,hh=104,vx=200,_x=201,xx=202,yx=203,Iu=204,Nu=205,Sx=206,Mx=207,Ex=208,Tx=209,wx=210,Ax=211,Cx=212,Rx=213,bx=214,Px=0,Lx=1,Ix=2,il=3,Nx=4,Dx=5,Ux=6,Fx=7,Jg=0,Ox=1,kx=2,Vi=0,zx=1,Bx=2,Hx=3,Gx=4,Vx=5,Wx=6,jx=7,ev=300,Ma=301,Ea=302,Du=303,Uu=304,wl=306,Fu=1e3,Un=1001,Ou=1002,qt=1003,ph=1004,Ha=1005,Jt=1006,ac=1007,vr=1008,Wi=1009,Xx=1010,qx=1011,zd=1012,tv=1013,Ii=1014,oi=1015,Es=1016,nv=1017,iv=1018,yr=1020,Yx=1021,Fn=1023,$x=1024,Kx=1025,Sr=1026,Ta=1027,Zx=1028,rv=1029,Qx=1030,av=1031,sv=1033,sc=33776,oc=33777,lc=33778,cc=33779,mh=35840,gh=35841,vh=35842,_h=35843,ov=36196,xh=37492,yh=37496,Sh=37808,Mh=37809,Eh=37810,Th=37811,wh=37812,Ah=37813,Ch=37814,Rh=37815,bh=37816,Ph=37817,Lh=37818,Ih=37819,Nh=37820,Dh=37821,uc=36492,Uh=36494,Fh=36495,Jx=36283,Oh=36284,kh=36285,zh=36286,ey=3200,ty=3201,lv=0,ny=1,bi="",Nn="srgb",Qi="srgb-linear",Bd="display-p3",Al="display-p3-linear",rl="linear",it="srgb",al="rec709",sl="p3",Lr=7680,Bh=519,iy=512,ry=513,ay=514,cv=515,sy=516,oy=517,ly=518,cy=519,Hh=35044,Gh="300 es",ku=1035,ui=2e3,ol=2001;class ba{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dc=Math.PI/180,zu=180/Math.PI;function bs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function uy(t,e){return(t%e+e)%e}function fc(t,e,n){return(1-n)*t+n*e}function Vh(t){return(t&t-1)===0&&t!==0}function Bu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ga(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,a,s,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,c)}set(e,n,i,r,a,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=a,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],m=i[5],v=i[8],x=r[0],p=r[3],u=r[6],_=r[1],g=r[4],M=r[7],P=r[2],w=r[5],T=r[8];return a[0]=s*x+o*_+l*P,a[3]=s*p+o*g+l*w,a[6]=s*u+o*M+l*T,a[1]=c*x+d*_+f*P,a[4]=c*p+d*g+f*w,a[7]=c*u+d*M+f*T,a[2]=h*x+m*_+v*P,a[5]=h*p+m*g+v*w,a[8]=h*u+m*M+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*s*d-n*o*c-i*a*d+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*s-o*c,h=o*l-d*a,m=c*a-s*l,v=n*f+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*c-d*i)*x,e[2]=(o*i-r*s)*x,e[3]=h*x,e[4]=(d*n-r*l)*x,e[5]=(r*a-o*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(s*n-i*a)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(hc.makeScale(e,n)),this}rotate(e){return this.premultiply(hc.makeRotation(-e)),this}translate(e,n){return this.premultiply(hc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hc=new Oe;function uv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ll(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dy(){const t=ll("canvas");return t.style.display="block",t}const Wh={};function fy(t){t in Wh||(Wh[t]=!0,console.warn(t))}const jh=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xh=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qs={[Qi]:{transfer:rl,primaries:al,toReference:t=>t,fromReference:t=>t},[Nn]:{transfer:it,primaries:al,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Al]:{transfer:rl,primaries:sl,toReference:t=>t.applyMatrix3(Xh),fromReference:t=>t.applyMatrix3(jh)},[Bd]:{transfer:it,primaries:sl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Xh),fromReference:t=>t.applyMatrix3(jh).convertLinearToSRGB()}},hy=new Set([Qi,Al]),Ze={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!hy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Qs[e].toReference,r=Qs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Qs[t].primaries},getTransfer:function(t){return t===bi?rl:Qs[t].transfer}};function pa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function pc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ir;class dv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=ll("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ir}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ll("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=pa(a[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(pa(n[i]/255)*255):n[i]=pa(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let py=0;class fv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(mc(r[s].image)):a.push(mc(r[s]))}else a=mc(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function mc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?dv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let my=0;class $t extends ba{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=Un,r=Un,a=Jt,s=vr,o=Fn,l=Wi,c=$t.DEFAULT_ANISOTROPY,d=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=bs(),this.name="",this.source=new fv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ev)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fu:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Ou:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fu:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Ou:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=ev;$t.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],v=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+x)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(m+1)/2,P=(u+1)/2,w=(d+h)/4,T=(f+x)/4,I=(v+p)/4;return g>M&&g>P?g<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(g),r=w/i,a=T/i):M>P?M<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),i=w/r,a=I/r):P<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(P),i=T/a,r=I/a),this.set(i,r,a,n),this}let _=Math.sqrt((p-v)*(p-v)+(f-x)*(f-x)+(h-d)*(h-d));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(f-x)/_,this.z=(h-d)/_,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gy extends ba{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const a=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new fv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends gy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class hv extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vy extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ps{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,s,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=a[s+0],m=a[s+1],v=a[s+2],x=a[s+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(f!==x||l!==h||c!==m||d!==v){let p=1-o;const u=l*h+c*m+d*v+f*x,_=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const P=Math.sqrt(g),w=Math.atan2(P,u*_);p=Math.sin(p*w)/P,o=Math.sin(o*w)/P}const M=o*_;if(l=l*p+h*M,c=c*p+m*M,d=d*p+v*M,f=f*p+x*M,p===1-o){const P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=a[s],h=a[s+1],m=a[s+2],v=a[s+3];return e[n]=o*v+d*f+l*m-c*h,e[n+1]=l*v+d*h+c*f-o*m,e[n+2]=c*v+d*m+o*h-l*f,e[n+3]=d*v-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(a/2),h=l(i/2),m=l(r/2),v=l(a/2);switch(s){case"XYZ":this._x=h*d*f+c*m*v,this._y=c*m*f-h*d*v,this._z=c*d*v+h*m*f,this._w=c*d*f-h*m*v;break;case"YXZ":this._x=h*d*f+c*m*v,this._y=c*m*f-h*d*v,this._z=c*d*v-h*m*f,this._w=c*d*f+h*m*v;break;case"ZXY":this._x=h*d*f-c*m*v,this._y=c*m*f+h*d*v,this._z=c*d*v+h*m*f,this._w=c*d*f-h*m*v;break;case"ZYX":this._x=h*d*f-c*m*v,this._y=c*m*f+h*d*v,this._z=c*d*v-h*m*f,this._w=c*d*f+h*m*v;break;case"YZX":this._x=h*d*f+c*m*v,this._y=c*m*f+h*d*v,this._z=c*d*v-h*m*f,this._w=c*d*f-h*m*v;break;case"XZY":this._x=h*d*f-c*m*v,this._y=c*m*f-h*d*v,this._z=c*d*v+h*m*f,this._w=c*d*f+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],s=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(a-c)*m,this._z=(s-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(a-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(s-r)/m,this._x=(a+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,s=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+s*o+r*c-a*l,this._y=r*d+s*l+a*o-i*c,this._z=a*d+s*c+i*l-r*o,this._w=s*d-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*a+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=a*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(n),a*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),d=2*(o*n-a*r),f=2*(a*i-s*n);return this.x=n+l*c+s*f-o*d,this.y=i+l*d+o*c-a*f,this.z=r+l*f+a*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,s=n.x,o=n.y,l=n.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gc=new O,qh=new Ps;class Ls{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Rn):Rn.fromBufferAttribute(a,s),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Js.copy(i.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Va),eo.subVectors(this.max,Va),Nr.subVectors(e.a,Va),Dr.subVectors(e.b,Va),Ur.subVectors(e.c,Va),xi.subVectors(Dr,Nr),yi.subVectors(Ur,Dr),nr.subVectors(Nr,Ur);let n=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-nr.z,nr.y,xi.z,0,-xi.x,yi.z,0,-yi.x,nr.z,0,-nr.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-nr.y,nr.x,0];return!vc(n,Nr,Dr,Ur,eo)||(n=[1,0,0,0,1,0,0,0,1],!vc(n,Nr,Dr,Ur,eo))?!1:(to.crossVectors(xi,yi),n=[to.x,to.y,to.z],vc(n,Nr,Dr,Ur,eo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new O,new O,new O,new O,new O,new O,new O,new O],Rn=new O,Js=new Ls,Nr=new O,Dr=new O,Ur=new O,xi=new O,yi=new O,nr=new O,Va=new O,eo=new O,to=new O,ir=new O;function vc(t,e,n,i,r){for(let a=0,s=t.length-3;a<=s;a+=3){ir.fromArray(t,a);const o=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),c=n.dot(ir),d=i.dot(ir);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const _y=new Ls,Wa=new O,_c=new O;class Hd{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):_y.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);const n=Wa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Wa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(_c)),this.expandByPoint(Wa.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new O,xc=new O,no=new O,Si=new O,yc=new O,io=new O,Sc=new O;class xy{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xc.copy(e).add(n).multiplyScalar(.5),no.copy(n).sub(e).normalize(),Si.copy(this.origin).sub(xc);const a=e.distanceTo(n)*.5,s=-this.direction.dot(no),o=Si.dot(this.direction),l=-Si.dot(no),c=Si.lengthSq(),d=Math.abs(1-s*s);let f,h,m,v;if(d>0)if(f=s*l-o,h=s*o-l,v=a*d,f>=0)if(h>=-v)if(h<=v){const x=1/d;f*=x,h*=x,m=f*(f+s*h+2*o)+h*(s*f+h+2*l)+c}else h=a,f=Math.max(0,-(s*h+o)),m=-f*f+h*(h+2*l)+c;else h=-a,f=Math.max(0,-(s*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-s*a+o)),h=f>0?-a:Math.min(Math.max(-a,-l),a),m=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-a,-l),a),m=h*(h+2*l)+c):(f=Math.max(0,-(s*a+o)),h=f>0?a:Math.min(Math.max(-a,-l),a),m=-f*f+h*(h+2*l)+c);else h=s>0?-a:a,f=Math.max(0,-(s*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xc).addScaledVector(no,h),m}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(a=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(a=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,a){yc.subVectors(n,e),io.subVectors(i,e),Sc.crossVectors(yc,io);let s=this.direction.dot(Sc),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Si.subVectors(this.origin,e);const l=o*this.direction.dot(io.crossVectors(Si,io));if(l<0)return null;const c=o*this.direction.dot(yc.cross(Si));if(c<0||l+c>s)return null;const d=-o*Si.dot(Sc);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,n,i,r,a,s,o,l,c,d,f,h,m,v,x,p){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,c,d,f,h,m,v,x,p)}set(e,n,i,r,a,s,o,l,c,d,f,h,m,v,x,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=a,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=v,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Fr.setFromMatrixColumn(e,0).length(),a=1/Fr.setFromMatrixColumn(e,1).length(),s=1/Fr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const h=s*d,m=s*f,v=o*d,x=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=m+v*c,n[5]=h-x*c,n[9]=-o*l,n[2]=x-h*c,n[6]=v+m*c,n[10]=s*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,v=c*d,x=c*f;n[0]=h+x*o,n[4]=v*o-m,n[8]=s*c,n[1]=s*f,n[5]=s*d,n[9]=-o,n[2]=m*o-v,n[6]=x+h*o,n[10]=s*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,v=c*d,x=c*f;n[0]=h-x*o,n[4]=-s*f,n[8]=v+m*o,n[1]=m+v*o,n[5]=s*d,n[9]=x-h*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const h=s*d,m=s*f,v=o*d,x=o*f;n[0]=l*d,n[4]=v*c-m,n[8]=h*c+x,n[1]=l*f,n[5]=x*c+h,n[9]=m*c-v,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*c,v=o*l,x=o*c;n[0]=l*d,n[4]=x-h*f,n[8]=v*f+m,n[1]=f,n[5]=s*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*f+v,n[10]=h-x*f}else if(e.order==="XZY"){const h=s*l,m=s*c,v=o*l,x=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+x,n[5]=s*d,n[9]=m*f-v,n[2]=v*f-m,n[6]=o*d,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yy,e,Sy)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Mi.crossVectors(i,cn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Mi.crossVectors(i,cn)),Mi.normalize(),ro.crossVectors(cn,Mi),r[0]=Mi.x,r[4]=ro.x,r[8]=cn.x,r[1]=Mi.y,r[5]=ro.y,r[9]=cn.y,r[2]=Mi.z,r[6]=ro.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],m=i[13],v=i[2],x=i[6],p=i[10],u=i[14],_=i[3],g=i[7],M=i[11],P=i[15],w=r[0],T=r[4],I=r[8],Z=r[12],y=r[1],C=r[5],j=r[9],Y=r[13],L=r[2],$=r[6],q=r[10],J=r[14],N=r[3],k=r[7],V=r[11],ee=r[15];return a[0]=s*w+o*y+l*L+c*N,a[4]=s*T+o*C+l*$+c*k,a[8]=s*I+o*j+l*q+c*V,a[12]=s*Z+o*Y+l*J+c*ee,a[1]=d*w+f*y+h*L+m*N,a[5]=d*T+f*C+h*$+m*k,a[9]=d*I+f*j+h*q+m*V,a[13]=d*Z+f*Y+h*J+m*ee,a[2]=v*w+x*y+p*L+u*N,a[6]=v*T+x*C+p*$+u*k,a[10]=v*I+x*j+p*q+u*V,a[14]=v*Z+x*Y+p*J+u*ee,a[3]=_*w+g*y+M*L+P*N,a[7]=_*T+g*C+M*$+P*k,a[11]=_*I+g*j+M*q+P*V,a[15]=_*Z+g*Y+M*J+P*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],v=e[3],x=e[7],p=e[11],u=e[15];return v*(+a*l*f-r*c*f-a*o*h+i*c*h+r*o*m-i*l*m)+x*(+n*l*m-n*c*h+a*s*h-r*s*m+r*c*d-a*l*d)+p*(+n*c*f-n*o*m-a*s*f+i*s*m+a*o*d-i*c*d)+u*(-r*o*d-n*l*f+n*o*h+r*s*f-i*s*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],v=e[12],x=e[13],p=e[14],u=e[15],_=f*p*c-x*h*c+x*l*m-o*p*m-f*l*u+o*h*u,g=v*h*c-d*p*c-v*l*m+s*p*m+d*l*u-s*h*u,M=d*x*c-v*f*c+v*o*m-s*x*m-d*o*u+s*f*u,P=v*f*l-d*x*l-v*o*h+s*x*h+d*o*p-s*f*p,w=n*_+i*g+r*M+a*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=_*T,e[1]=(x*h*a-f*p*a-x*r*m+i*p*m+f*r*u-i*h*u)*T,e[2]=(o*p*a-x*l*a+x*r*c-i*p*c-o*r*u+i*l*u)*T,e[3]=(f*l*a-o*h*a-f*r*c+i*h*c+o*r*m-i*l*m)*T,e[4]=g*T,e[5]=(d*p*a-v*h*a+v*r*m-n*p*m-d*r*u+n*h*u)*T,e[6]=(v*l*a-s*p*a-v*r*c+n*p*c+s*r*u-n*l*u)*T,e[7]=(s*h*a-d*l*a+d*r*c-n*h*c-s*r*m+n*l*m)*T,e[8]=M*T,e[9]=(v*f*a-d*x*a-v*i*m+n*x*m+d*i*u-n*f*u)*T,e[10]=(s*x*a-v*o*a+v*i*c-n*x*c-s*i*u+n*o*u)*T,e[11]=(d*o*a-s*f*a-d*i*c+n*f*c+s*i*m-n*o*m)*T,e[12]=P*T,e[13]=(d*x*r-v*f*r+v*i*h-n*x*h-d*i*p+n*f*p)*T,e[14]=(v*o*r-s*x*r-v*i*l+n*x*l+s*i*p-n*o*p)*T,e[15]=(s*f*r-d*o*r+d*i*l-n*f*l-s*i*h+n*o*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,d=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*s,0,c*l-r*o,d*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,s=n._y,o=n._z,l=n._w,c=a+a,d=s+s,f=o+o,h=a*c,m=a*d,v=a*f,x=s*d,p=s*f,u=o*f,_=l*c,g=l*d,M=l*f,P=i.x,w=i.y,T=i.z;return r[0]=(1-(x+u))*P,r[1]=(m+M)*P,r[2]=(v-g)*P,r[3]=0,r[4]=(m-M)*w,r[5]=(1-(h+u))*w,r[6]=(p+_)*w,r[7]=0,r[8]=(v+g)*T,r[9]=(p-_)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=Fr.set(r[0],r[1],r[2]).length();const s=Fr.set(r[4],r[5],r[6]).length(),o=Fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const c=1/a,d=1/s,f=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=d,bn.elements[5]*=d,bn.elements[6]*=d,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,n.setFromRotationMatrix(bn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,n,i,r,a,s,o=ui){const l=this.elements,c=2*a/(n-e),d=2*a/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,v;if(o===ui)m=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===ol)m=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,a,s,o=ui){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(s-a),h=(n+e)*c,m=(i+r)*d;let v,x;if(o===ui)v=(s+a)*f,x=-2*f;else if(o===ol)v=a*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Fr=new O,bn=new _t,yy=new O(0,0,0),Sy=new O(1,1,1),Mi=new O,ro=new O,cn=new O,Yh=new _t,$h=new Ps;class Kn{constructor(e=0,n=0,i=0,r=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-tn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class pv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let My=0;const Kh=new O,Or=new Ps,ei=new _t,ao=new O,ja=new O,Ey=new O,Ty=new Ps,Zh=new O(1,0,0),Qh=new O(0,1,0),Jh=new O(0,0,1),wy={type:"added"},Ay={type:"removed"},Mc={type:"childadded",child:null},Ec={type:"childremoved",child:null};class Dt extends ba{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new O,n=new Kn,i=new Ps,r=new O(1,1,1);function a(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Oe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(Zh,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,n){return Kh.copy(e).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zh,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ao.copy(e):ao.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(ja,ao,this.up):ei.lookAt(ao,ja,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(ei),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wy),Mc.child=e,this.dispatchEvent(Mc),Mc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ay),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,e,Ey),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,Ty,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),f=s(e.shapes),h=s(e.skeletons),m=s(e.animations),v=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new O(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new O,ti=new O,Tc=new O,ni=new O,kr=new O,zr=new O,ep=new O,wc=new O,Ac=new O,Cc=new O;class jn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){Pn.subVectors(r,n),ti.subVectors(i,n),Tc.subVectors(e,n);const s=Pn.dot(Pn),o=Pn.dot(ti),l=Pn.dot(Tc),c=ti.dot(ti),d=ti.dot(Tc),f=s*c-o*o;if(f===0)return a.set(0,0,0),null;const h=1/f,m=(c*l-o*d)*h,v=(s*d-o*l)*h;return a.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,n,i,r,a,s,o,l){return this.getBarycoord(e,n,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ni.x),l.addScaledVector(s,ni.y),l.addScaledVector(o,ni.z),l)}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ti.subVectors(e,n),Pn.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Pn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,a){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let s,o;kr.subVectors(r,i),zr.subVectors(a,i),wc.subVectors(e,i);const l=kr.dot(wc),c=zr.dot(wc);if(l<=0&&c<=0)return n.copy(i);Ac.subVectors(e,r);const d=kr.dot(Ac),f=zr.dot(Ac);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(kr,s);Cc.subVectors(e,a);const m=kr.dot(Cc),v=zr.dot(Cc);if(v>=0&&m<=v)return n.copy(a);const x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(zr,o);const p=d*v-m*f;if(p<=0&&f-d>=0&&m-v>=0)return ep.subVectors(a,r),o=(f-d)/(f-d+(m-v)),n.copy(r).addScaledVector(ep,o);const u=1/(p+x+h);return s=x*u,o=h*u,n.copy(i).addScaledVector(kr,s).addScaledVector(zr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},so={h:0,s:0,l:0};function Rc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Be{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=uy(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,s=2*i-a;this.r=Rc(s,a,e+1/3),this.g=Rc(s,a,e),this.b=Rc(s,a,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Nn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const i=mv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}copyLinearToSRGB(e){return this.r=pc(e.r),this.g=pc(e.g),this.b=pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return Ze.fromWorkingColorSpace(Bt.copy(this),e),Math.round(tn(Bt.r*255,0,255))*65536+Math.round(tn(Bt.g*255,0,255))*256+Math.round(tn(Bt.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,a=Bt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=d<=.5?f/(s+o):f/(2-s-o),s){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Nn){Ze.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(so);const i=fc(Ei.h,so.h,n),r=fc(Ei.s,so.s,n),a=fc(Ei.l,so.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Be;Be.NAMES=mv;let Cy=0;class Is extends ba{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=ha,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iu,this.blendDst=Nu,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ha&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Iu&&(i.blendSrc=this.blendSrc),this.blendDst!==Nu&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==il&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(n){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cl extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Jg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new O,oo=new qe;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Hh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return fy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)oo.fromBufferAttribute(this,n),oo.applyMatrix3(e),this.setXY(n,oo.x,oo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ga(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ga(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ga(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ga(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ga(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),a=Qt(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hh&&(e.usage=this.usage),e}}class gv extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class vv extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $n extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Ry=0;const xn=new _t,bc=new Dt,Br=new O,un=new Ls,Xa=new Ls,Ct=new O;class Ji extends ba{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uv(e)?vv:gv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Oe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,n,i){return xn.makeTranslation(e,n,i),this.applyMatrix4(xn),this}scale(e,n,i){return xn.makeScale(e,n,i),this.applyMatrix4(xn),this}lookAt(e){return bc.lookAt(e),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new $n(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];un.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let a=0,s=n.length;a<s;a++){const o=n[a];Xa.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(un.min,Xa.min),un.expandByPoint(Ct),Ct.addVectors(un.max,Xa.max),un.expandByPoint(Ct)):(un.expandByPoint(Xa.min),un.expandByPoint(Xa.max))}un.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Ct.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let a=0,s=n.length;a<s;a++){const o=n[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ct.fromBufferAttribute(o,c),l&&(Br.fromBufferAttribute(e,c),Ct.add(Br)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new O,l[I]=new O;const c=new O,d=new O,f=new O,h=new qe,m=new qe,v=new qe,x=new O,p=new O;function u(I,Z,y){c.fromBufferAttribute(i,I),d.fromBufferAttribute(i,Z),f.fromBufferAttribute(i,y),h.fromBufferAttribute(a,I),m.fromBufferAttribute(a,Z),v.fromBufferAttribute(a,y),d.sub(c),f.sub(c),m.sub(h),v.sub(h);const C=1/(m.x*v.y-v.x*m.y);isFinite(C)&&(x.copy(d).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(C),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(C),o[I].add(x),o[Z].add(x),o[y].add(x),l[I].add(p),l[Z].add(p),l[y].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let I=0,Z=_.length;I<Z;++I){const y=_[I],C=y.start,j=y.count;for(let Y=C,L=C+j;Y<L;Y+=3)u(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const g=new O,M=new O,P=new O,w=new O;function T(I){P.fromBufferAttribute(r,I),w.copy(P);const Z=o[I];g.copy(Z),g.sub(P.multiplyScalar(P.dot(Z))).normalize(),M.crossVectors(w,Z);const C=M.dot(l[I])<0?-1:1;s.setXYZW(I,g.x,g.y,g.z,C)}for(let I=0,Z=_.length;I<Z;++I){const y=_[I],C=y.start,j=y.count;for(let Y=C,L=C+j;Y<L;Y+=3)T(e.getX(Y+0)),T(e.getX(Y+1)),T(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new O,a=new O,s=new O,o=new O,l=new O,c=new O,d=new O,f=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,v),a.fromBufferAttribute(n,x),s.fromBufferAttribute(n,p),d.subVectors(s,a),f.subVectors(r,a),d.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),d.subVectors(s,a),f.subVectors(r,a),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let m=0,v=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*d;for(let u=0;u<d;u++)h[v++]=c[m++]}return new Yn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ji,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const a=e.morphAttributes;for(const c in a){const d=[],f=a[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tp=new _t,rr=new xy,lo=new Hd,np=new O,Hr=new O,Gr=new O,Vr=new O,Pc=new O,co=new O,uo=new qe,fo=new qe,ho=new qe,ip=new O,rp=new O,ap=new O,po=new O,mo=new O;class Gt extends Dt{constructor(e=new Ji,n=new Cl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){co.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],f=a[l];d!==0&&(Pc.fromBufferAttribute(f,e),s?co.addScaledVector(Pc,d):co.addScaledVector(Pc.sub(n),d))}n.add(co)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(a),rr.copy(e.ray).recast(e.near),!(lo.containsPoint(rr.origin)===!1&&(rr.intersectSphere(lo,np)===null||rr.origin.distanceToSquared(np)>(e.far-e.near)**2))&&(tp.copy(a).invert(),rr.copy(e.ray).applyMatrix4(tp),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,f=a.attributes.normal,h=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,x=h.length;v<x;v++){const p=h[v],u=s[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,P=g;M<P;M+=3){const w=o.getX(M),T=o.getX(M+1),I=o.getX(M+2);r=go(this,u,e,i,c,d,f,w,T,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=v,u=x;p<u;p+=3){const _=o.getX(p),g=o.getX(p+1),M=o.getX(p+2);r=go(this,s,e,i,c,d,f,_,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,x=h.length;v<x;v++){const p=h[v],u=s[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,P=g;M<P;M+=3){const w=M,T=M+1,I=M+2;r=go(this,u,e,i,c,d,f,w,T,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=v,u=x;p<u;p+=3){const _=p,g=p+1,M=p+2;r=go(this,s,e,i,c,d,f,_,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function by(t,e,n,i,r,a,s,o){let l;if(e.side===on?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===qi,o),l===null)return null;mo.copy(o),mo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(mo);return c<n.near||c>n.far?null:{distance:c,point:mo.clone(),object:t}}function go(t,e,n,i,r,a,s,o,l,c){t.getVertexPosition(o,Hr),t.getVertexPosition(l,Gr),t.getVertexPosition(c,Vr);const d=by(t,e,n,i,Hr,Gr,Vr,po);if(d){r&&(uo.fromBufferAttribute(r,o),fo.fromBufferAttribute(r,l),ho.fromBufferAttribute(r,c),d.uv=jn.getInterpolation(po,Hr,Gr,Vr,uo,fo,ho,new qe)),a&&(uo.fromBufferAttribute(a,o),fo.fromBufferAttribute(a,l),ho.fromBufferAttribute(a,c),d.uv1=jn.getInterpolation(po,Hr,Gr,Vr,uo,fo,ho,new qe)),s&&(ip.fromBufferAttribute(s,o),rp.fromBufferAttribute(s,l),ap.fromBufferAttribute(s,c),d.normal=jn.getInterpolation(po,Hr,Gr,Vr,ip,rp,ap,new O),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new O,materialIndex:0};jn.getNormal(Hr,Gr,Vr,f.normal),d.face=f}return d}class di extends Ji{constructor(e=1,n=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],d=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,i,n,e,s,a,0),v("z","y","x",1,-1,i,n,-e,s,a,1),v("x","z","y",1,1,e,i,n,r,s,2),v("x","z","y",1,-1,e,i,-n,r,s,3),v("x","y","z",1,-1,e,n,i,r,a,4),v("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new $n(c,3)),this.setAttribute("normal",new $n(d,3)),this.setAttribute("uv",new $n(f,2));function v(x,p,u,_,g,M,P,w,T,I,Z){const y=M/T,C=P/I,j=M/2,Y=P/2,L=w/2,$=T+1,q=I+1;let J=0,N=0;const k=new O;for(let V=0;V<q;V++){const ee=V*C-Y;for(let se=0;se<$;se++){const Ce=se*y-j;k[x]=Ce*_,k[p]=ee*g,k[u]=L,c.push(k.x,k.y,k.z),k[x]=0,k[p]=0,k[u]=w>0?1:-1,d.push(k.x,k.y,k.z),f.push(se/T),f.push(1-V/I),J+=1}}for(let V=0;V<I;V++)for(let ee=0;ee<T;ee++){const se=h+ee+$*V,Ce=h+ee+$*(V+1),B=h+(ee+1)+$*(V+1),te=h+(ee+1)+$*V;l.push(se,Ce,te),l.push(Ce,B,te),N+=6}o.addGroup(m,N,Z),m+=N,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=wa(t[n]);for(const r in i)e[r]=i[r]}return e}function Py(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function _v(t){return t.getRenderTarget()===null?t.outputColorSpace:Ze.workingColorSpace}const Ly={clone:wa,merge:jt};var Iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ny=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iy,this.fragmentShader=Ny,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wa(e.uniforms),this.uniformsGroups=Py(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class xv extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new O,sp=new qe,op=new qe;class Mn extends xv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zu*2*Math.atan(Math.tan(dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,n){return this.getViewBounds(e,sp,op),n.subVectors(op,sp)}setViewOffset(e,n,i,r,a,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(dc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wr=-90,jr=1;class Dy extends Dt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(Wr,jr,e,n);r.layers=this.layers,this.add(r);const a=new Mn(Wr,jr,e,n);a.layers=this.layers,this.add(a);const s=new Mn(Wr,jr,e,n);s.layers=this.layers,this.add(s);const o=new Mn(Wr,jr,e,n);o.layers=this.layers,this.add(o);const l=new Mn(Wr,jr,e,n);l.layers=this.layers,this.add(l);const c=new Mn(Wr,jr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,a,s,o,l]=n;for(const c of n)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,a),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class yv extends $t{constructor(e,n,i,r,a,s,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ma,super(e,n,i,r,a,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uy extends Cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new yv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Jt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new di(5,5,5),a=new Yi({name:"CubemapFromEquirect",uniforms:wa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Gi});a.uniforms.tEquirect.value=n;const s=new Gt(r,a),o=n.minFilter;return n.minFilter===vr&&(n.minFilter=Jt),new Dy(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(a)}}const Lc=new O,Fy=new O,Oy=new Oe;class ur{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Lc.subVectors(i,n).cross(Fy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Lc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Oy.getNormalMatrix(e),r=this.coplanarPoint(Lc).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Hd,vo=new O;class Gd{constructor(e=new ur,n=new ur,i=new ur,r=new ur,a=new ur,s=new ur){this.planes=[e,n,i,r,a,s]}set(e,n,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],m=r[8],v=r[9],x=r[10],p=r[11],u=r[12],_=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-a,h-c,p-m,M-u).normalize(),i[1].setComponents(l+a,h+c,p+m,M+u).normalize(),i[2].setComponents(l+s,h+d,p+v,M+_).normalize(),i[3].setComponents(l-s,h-d,p-v,M-_).normalize(),i[4].setComponents(l-o,h-f,p-x,M-g).normalize(),n===ui)i[5].setComponents(l+o,h+f,p+x,M+g).normalize();else if(n===ol)i[5].setComponents(o,f,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(vo.x=r.normal.x>0?e.max.x:e.min.x,vo.y=r.normal.y>0?e.max.y:e.min.y,vo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sv(){let t=null,e=!1,n=null,i=null;function r(a,s){n(a,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function ky(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,m=f.byteLength,v=t.createBuffer();t.bindBuffer(d,v),t.bufferData(d,f,h),c.onUploadCallback();let x;if(f instanceof Float32Array)x=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=t.SHORT;else if(f instanceof Uint32Array)x=t.UNSIGNED_INT;else if(f instanceof Int32Array)x=t.INT;else if(f instanceof Int8Array)x=t.BYTE;else if(f instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function a(c,d,f){const h=d.array,m=d._updateRange,v=d.updateRanges;if(t.bindBuffer(f,c),m.count===-1&&v.length===0&&t.bufferSubData(f,0,h),v.length!==0){for(let x=0,p=v.length;x<p;x++){const u=v[x];n?t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,c,d),f.version=c.version}}return{get:s,remove:o,update:l}}class Pa extends Ji{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,s=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,h=n/l,m=[],v=[],x=[],p=[];for(let u=0;u<d;u++){const _=u*h-s;for(let g=0;g<c;g++){const M=g*f-a;v.push(M,-_,0),x.push(0,0,1),p.push(g/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<o;_++){const g=_+c*u,M=_+c*(u+1),P=_+1+c*(u+1),w=_+1+c*u;m.push(g,M,w),m.push(M,P,w)}this.setIndex(m),this.setAttribute("position",new $n(v,3)),this.setAttribute("normal",new $n(x,3)),this.setAttribute("uv",new $n(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.widthSegments,e.heightSegments)}}var zy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,By=`#ifdef USE_ALPHAHASH
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
#endif`,Hy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jy=`#ifdef USE_AOMAP
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
#endif`,Xy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qy=`#ifdef USE_BATCHING
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
#endif`,Yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$y=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qy=`#ifdef USE_IRIDESCENCE
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
#endif`,Jy=`#ifdef USE_BUMPMAP
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
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,oS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lS=`#define PI 3.141592653589793
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
} // validated`,cS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uS=`vec3 transformedNormal = objectNormal;
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
#endif`,dS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mS="gl_FragColor = linearToOutputTexel( gl_FragColor );",gS=`
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
}`,vS=`#ifdef USE_ENVMAP
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
#endif`,_S=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xS=`#ifdef USE_ENVMAP
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
#endif`,yS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
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
#endif`,MS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ES=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AS=`#ifdef USE_GRADIENTMAP
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
}`,CS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,RS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LS=`uniform bool receiveShadow;
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
#endif`,IS=`#ifdef USE_ENVMAP
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
#endif`,NS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,US=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OS=`PhysicalMaterial material;
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
#endif`,kS=`struct PhysicalMaterial {
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
}`,zS=`
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
#endif`,BS=`#if defined( RE_IndirectDiffuse )
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
#endif`,HS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,XS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$S=`#if defined( USE_POINTS_UV )
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
#endif`,KS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eM=`#ifdef USE_MORPHNORMALS
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
#endif`,tM=`#ifdef USE_MORPHTARGETS
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
#endif`,nM=`#ifdef USE_MORPHTARGETS
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
#endif`,iM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lM=`#ifdef USE_NORMALMAP
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
#endif`,cM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_M=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TM=`float getShadowMask() {
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
}`,wM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AM=`#ifdef USE_SKINNING
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
#endif`,CM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RM=`#ifdef USE_SKINNING
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
#endif`,bM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NM=`#ifdef USE_TRANSMISSION
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
#endif`,DM=`#ifdef USE_TRANSMISSION
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
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BM=`uniform sampler2D t2D;
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
}`,HM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`#include <common>
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
}`,XM=`#if DEPTH_PACKING == 3200
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
}`,qM=`#define DISTANCE
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
}`,YM=`#define DISTANCE
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
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZM=`uniform float scale;
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
}`,QM=`uniform vec3 diffuse;
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
}`,JM=`#include <common>
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
}`,eE=`uniform vec3 diffuse;
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
}`,tE=`#define LAMBERT
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
}`,nE=`#define LAMBERT
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
}`,iE=`#define MATCAP
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
}`,rE=`#define MATCAP
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
}`,aE=`#define NORMAL
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
}`,sE=`#define NORMAL
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
}`,oE=`#define PHONG
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
}`,lE=`#define PHONG
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
}`,cE=`#define STANDARD
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
}`,uE=`#define STANDARD
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
}`,dE=`#define TOON
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
}`,fE=`#define TOON
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
}`,hE=`uniform float size;
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
}`,pE=`uniform vec3 diffuse;
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
}`,mE=`#include <common>
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
}`,gE=`uniform vec3 color;
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
}`,vE=`uniform float rotation;
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
}`,_E=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:zy,alphahash_pars_fragment:By,alphamap_fragment:Hy,alphamap_pars_fragment:Gy,alphatest_fragment:Vy,alphatest_pars_fragment:Wy,aomap_fragment:jy,aomap_pars_fragment:Xy,batching_pars_vertex:qy,batching_vertex:Yy,begin_vertex:$y,beginnormal_vertex:Ky,bsdfs:Zy,iridescence_fragment:Qy,bumpmap_pars_fragment:Jy,clipping_planes_fragment:eS,clipping_planes_pars_fragment:tS,clipping_planes_pars_vertex:nS,clipping_planes_vertex:iS,color_fragment:rS,color_pars_fragment:aS,color_pars_vertex:sS,color_vertex:oS,common:lS,cube_uv_reflection_fragment:cS,defaultnormal_vertex:uS,displacementmap_pars_vertex:dS,displacementmap_vertex:fS,emissivemap_fragment:hS,emissivemap_pars_fragment:pS,colorspace_fragment:mS,colorspace_pars_fragment:gS,envmap_fragment:vS,envmap_common_pars_fragment:_S,envmap_pars_fragment:xS,envmap_pars_vertex:yS,envmap_physical_pars_fragment:IS,envmap_vertex:SS,fog_vertex:MS,fog_pars_vertex:ES,fog_fragment:TS,fog_pars_fragment:wS,gradientmap_pars_fragment:AS,lightmap_fragment:CS,lightmap_pars_fragment:RS,lights_lambert_fragment:bS,lights_lambert_pars_fragment:PS,lights_pars_begin:LS,lights_toon_fragment:NS,lights_toon_pars_fragment:DS,lights_phong_fragment:US,lights_phong_pars_fragment:FS,lights_physical_fragment:OS,lights_physical_pars_fragment:kS,lights_fragment_begin:zS,lights_fragment_maps:BS,lights_fragment_end:HS,logdepthbuf_fragment:GS,logdepthbuf_pars_fragment:VS,logdepthbuf_pars_vertex:WS,logdepthbuf_vertex:jS,map_fragment:XS,map_pars_fragment:qS,map_particle_fragment:YS,map_particle_pars_fragment:$S,metalnessmap_fragment:KS,metalnessmap_pars_fragment:ZS,morphinstance_vertex:QS,morphcolor_vertex:JS,morphnormal_vertex:eM,morphtarget_pars_vertex:tM,morphtarget_vertex:nM,normal_fragment_begin:iM,normal_fragment_maps:rM,normal_pars_fragment:aM,normal_pars_vertex:sM,normal_vertex:oM,normalmap_pars_fragment:lM,clearcoat_normal_fragment_begin:cM,clearcoat_normal_fragment_maps:uM,clearcoat_pars_fragment:dM,iridescence_pars_fragment:fM,opaque_fragment:hM,packing:pM,premultiplied_alpha_fragment:mM,project_vertex:gM,dithering_fragment:vM,dithering_pars_fragment:_M,roughnessmap_fragment:xM,roughnessmap_pars_fragment:yM,shadowmap_pars_fragment:SM,shadowmap_pars_vertex:MM,shadowmap_vertex:EM,shadowmask_pars_fragment:TM,skinbase_vertex:wM,skinning_pars_vertex:AM,skinning_vertex:CM,skinnormal_vertex:RM,specularmap_fragment:bM,specularmap_pars_fragment:PM,tonemapping_fragment:LM,tonemapping_pars_fragment:IM,transmission_fragment:NM,transmission_pars_fragment:DM,uv_pars_fragment:UM,uv_pars_vertex:FM,uv_vertex:OM,worldpos_vertex:kM,background_vert:zM,background_frag:BM,backgroundCube_vert:HM,backgroundCube_frag:GM,cube_vert:VM,cube_frag:WM,depth_vert:jM,depth_frag:XM,distanceRGBA_vert:qM,distanceRGBA_frag:YM,equirect_vert:$M,equirect_frag:KM,linedashed_vert:ZM,linedashed_frag:QM,meshbasic_vert:JM,meshbasic_frag:eE,meshlambert_vert:tE,meshlambert_frag:nE,meshmatcap_vert:iE,meshmatcap_frag:rE,meshnormal_vert:aE,meshnormal_frag:sE,meshphong_vert:oE,meshphong_frag:lE,meshphysical_vert:cE,meshphysical_frag:uE,meshtoon_vert:dE,meshtoon_frag:fE,points_vert:hE,points_frag:pE,shadow_vert:mE,shadow_frag:gE,sprite_vert:vE,sprite_frag:_E},le={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Vn={basic:{uniforms:jt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:jt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Be(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:jt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:jt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:jt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Be(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:jt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:jt([le.points,le.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:jt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:jt([le.common,le.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:jt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:jt([le.sprite,le.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:jt([le.common,le.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:jt([le.lights,le.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Vn.physical={uniforms:jt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const _o={r:0,b:0,g:0},sr=new Kn,xE=new _t;function yE(t,e,n,i,r,a,s){const o=new Be(0);let l=a===!0?0:1,c,d,f=null,h=0,m=null;function v(p,u){let _=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?x(o,l):g&&g.isColor&&(x(g,1),_=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===wl)?(d===void 0&&(d=new Gt(new di(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:wa(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),sr.copy(u.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),d.material.uniforms.envMap.value=g,d.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(xE.makeRotationFromEuler(sr)),d.material.toneMapped=Ze.getTransfer(g.colorSpace)!==it,(f!==g||h!==g.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=g,h=g.version,m=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Gt(new Pa(2,2),new Yi({name:"BackgroundMaterial",uniforms:wa(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(g.colorSpace)!==it,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,u){p.getRGB(_o,_v(t)),i.buffers.color.setClear(_o.r,_o.g,_o.b,u,s)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(o,l)},render:v}}function SE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},l=p(null);let c=l,d=!1;function f(L,$,q,J,N){let k=!1;if(s){const V=x(J,q,$);c!==V&&(c=V,m(c.object)),k=u(L,J,q,N),k&&_(L,J,q,N)}else{const V=$.wireframe===!0;(c.geometry!==J.id||c.program!==q.id||c.wireframe!==V)&&(c.geometry=J.id,c.program=q.id,c.wireframe=V,k=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,I(L,$,q,J),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function h(){return i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function m(L){return i.isWebGL2?t.bindVertexArray(L):a.bindVertexArrayOES(L)}function v(L){return i.isWebGL2?t.deleteVertexArray(L):a.deleteVertexArrayOES(L)}function x(L,$,q){const J=q.wireframe===!0;let N=o[L.id];N===void 0&&(N={},o[L.id]=N);let k=N[$.id];k===void 0&&(k={},N[$.id]=k);let V=k[J];return V===void 0&&(V=p(h()),k[J]=V),V}function p(L){const $=[],q=[],J=[];for(let N=0;N<r;N++)$[N]=0,q[N]=0,J[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:q,attributeDivisors:J,object:L,attributes:{},index:null}}function u(L,$,q,J){const N=c.attributes,k=$.attributes;let V=0;const ee=q.getAttributes();for(const se in ee)if(ee[se].location>=0){const B=N[se];let te=k[se];if(te===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(te=L.instanceColor)),B===void 0||B.attribute!==te||te&&B.data!==te.data)return!0;V++}return c.attributesNum!==V||c.index!==J}function _(L,$,q,J){const N={},k=$.attributes;let V=0;const ee=q.getAttributes();for(const se in ee)if(ee[se].location>=0){let B=k[se];B===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(B=L.instanceColor));const te={};te.attribute=B,B&&B.data&&(te.data=B.data),N[se]=te,V++}c.attributes=N,c.attributesNum=V,c.index=J}function g(){const L=c.newAttributes;for(let $=0,q=L.length;$<q;$++)L[$]=0}function M(L){P(L,0)}function P(L,$){const q=c.newAttributes,J=c.enabledAttributes,N=c.attributeDivisors;q[L]=1,J[L]===0&&(t.enableVertexAttribArray(L),J[L]=1),N[L]!==$&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,$),N[L]=$)}function w(){const L=c.newAttributes,$=c.enabledAttributes;for(let q=0,J=$.length;q<J;q++)$[q]!==L[q]&&(t.disableVertexAttribArray(q),$[q]=0)}function T(L,$,q,J,N,k,V){V===!0?t.vertexAttribIPointer(L,$,q,N,k):t.vertexAttribPointer(L,$,q,J,N,k)}function I(L,$,q,J){if(i.isWebGL2===!1&&(L.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const N=J.attributes,k=q.getAttributes(),V=$.defaultAttributeValues;for(const ee in k){const se=k[ee];if(se.location>=0){let Ce=N[ee];if(Ce===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(Ce=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(Ce=L.instanceColor)),Ce!==void 0){const B=Ce.normalized,te=Ce.itemSize,ue=n.get(Ce);if(ue===void 0)continue;const we=ue.buffer,b=ue.type,K=ue.bytesPerElement,xe=i.isWebGL2===!0&&(b===t.INT||b===t.UNSIGNED_INT||Ce.gpuType===tv);if(Ce.isInterleavedBufferAttribute){const ve=Ce.data,F=ve.stride,ft=Ce.offset;if(ve.isInstancedInterleavedBuffer){for(let pe=0;pe<se.locationSize;pe++)P(se.location+pe,ve.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let pe=0;pe<se.locationSize;pe++)M(se.location+pe);t.bindBuffer(t.ARRAY_BUFFER,we);for(let pe=0;pe<se.locationSize;pe++)T(se.location+pe,te/se.locationSize,b,B,F*K,(ft+te/se.locationSize*pe)*K,xe)}else{if(Ce.isInstancedBufferAttribute){for(let ve=0;ve<se.locationSize;ve++)P(se.location+ve,Ce.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let ve=0;ve<se.locationSize;ve++)M(se.location+ve);t.bindBuffer(t.ARRAY_BUFFER,we);for(let ve=0;ve<se.locationSize;ve++)T(se.location+ve,te/se.locationSize,b,B,te*K,te/se.locationSize*ve*K,xe)}}else if(V!==void 0){const B=V[ee];if(B!==void 0)switch(B.length){case 2:t.vertexAttrib2fv(se.location,B);break;case 3:t.vertexAttrib3fv(se.location,B);break;case 4:t.vertexAttrib4fv(se.location,B);break;default:t.vertexAttrib1fv(se.location,B)}}}}w()}function Z(){j();for(const L in o){const $=o[L];for(const q in $){const J=$[q];for(const N in J)v(J[N].object),delete J[N];delete $[q]}delete o[L]}}function y(L){if(o[L.id]===void 0)return;const $=o[L.id];for(const q in $){const J=$[q];for(const N in J)v(J[N].object),delete J[N];delete $[q]}delete o[L.id]}function C(L){for(const $ in o){const q=o[$];if(q[L.id]===void 0)continue;const J=q[L.id];for(const N in J)v(J[N].object),delete J[N];delete q[L.id]}}function j(){Y(),d=!0,c!==l&&(c=l,m(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:j,resetDefaultState:Y,dispose:Z,releaseStatesOfGeometry:y,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:M,disableUnusedAttributes:w}}function ME(t,e,n,i){const r=i.isWebGL2;let a;function s(d){a=d}function o(d,f){t.drawArrays(a,d,f),n.update(f,a,1)}function l(d,f,h){if(h===0)return;let m,v;if(r)m=t,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](a,d,f,h),n.update(f,a,h)}function c(d,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<h;v++)this.render(d[v],f[v]);else{m.multiDrawArraysWEBGL(a,d,0,f,0,h);let v=0;for(let x=0;x<h;x++)v+=f[x];n.update(v,a,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function EE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,M=s||e.has("OES_texture_float"),P=g&&M,w=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:M,floatVertexTextures:P,maxSamples:w}}function TE(t){const e=this;let n=null,i=0,r=!1,a=!1;const s=new ur,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,m){const v=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!r||v===null||v.length===0||a&&!p)a?d(null):c();else{const _=a?0:i,g=_*4;let M=u.clippingState||null;l.value=M,M=d(v,h,g,m);for(let P=0;P!==g;++P)M[P]=n[P];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,v){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,v!==!0||p===null){const u=m+x*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,M=m;g!==x;++g,M+=4)s.copy(f[g]).applyMatrix4(_,o),s.normal.toArray(p,M),p[M+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function wE(t){let e=new WeakMap;function n(s,o){return o===Du?s.mapping=Ma:o===Uu&&(s.mapping=Ea),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Du||o===Uu)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Uy(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Mv extends xv{constructor(e=-1,n=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const aa=4,lp=[.125,.215,.35,.446,.526,.582],hr=20,Ic=new Mv,cp=new Be;let Nc=null,Dc=0,Uc=0;const dr=(1+Math.sqrt(5))/2,Xr=1/dr,up=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,dr,Xr),new O(0,dr,-Xr),new O(Xr,0,dr),new O(-Xr,0,dr),new O(dr,Xr,0),new O(-dr,Xr,0)];class dp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Nc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nc,Dc,Uc),e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ma||e.mapping===Ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Es,format:Fn,colorSpace:Qi,depthBuffer:!1},r=fp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fp(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AE(a)),this._blurMaterial=CE(a,e,n)}return r}_compileMaterial(e){const n=new Gt(this._lodPlanes[0],e);this._renderer.compile(n,Ic)}_sceneToCubeUV(e,n,i,r){const o=new Mn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(cp),d.toneMapping=Vi,d.autoClear=!1;const m=new Cl({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),v=new Gt(new di,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(cp),x=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):_===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const g=this._cubeSize;xo(r,_*g,u>2?g:0,g,g),d.setRenderTarget(r),x&&d.render(v,o),d.render(e,o)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ma||e.mapping===Ea;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hp());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Gt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;xo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Ic)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=up[(r-1)%up.length];this._blur(e,r-1,r,a,s)}n.autoClear=i}_blur(e,n,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Gt(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*hr-1),x=a/v,p=isFinite(a)?1+Math.floor(d*x):hr;p>hr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hr}`);const u=[];let _=0;for(let T=0;T<hr;++T){const I=T/x,Z=Math.exp(-I*I/2);u.push(Z),T===0?_+=Z:T<p&&(_+=2*Z)}for(let T=0;T<u.length;T++)u[T]=u[T]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=v,h.mipInt.value=g-i;const M=this._sizeLods[r],P=3*M*(r>g-aa?r-g+aa:0),w=4*(this._cubeSize-M);xo(n,P,w,3*M,2*M),l.setRenderTarget(n),l.render(f,Ic)}}function AE(t){const e=[],n=[],i=[];let r=t;const a=t-aa+1+lp.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);n.push(o);let l=1/o;s>t-aa?l=lp[s-t+aa-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,v=6,x=3,p=2,u=1,_=new Float32Array(x*v*m),g=new Float32Array(p*v*m),M=new Float32Array(u*v*m);for(let w=0;w<m;w++){const T=w%3*2/3-1,I=w>2?0:-1,Z=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];_.set(Z,x*v*w),g.set(h,p*v*w);const y=[w,w,w,w,w,w];M.set(y,u*v*w)}const P=new Ji;P.setAttribute("position",new Yn(_,x)),P.setAttribute("uv",new Yn(g,p)),P.setAttribute("faceIndex",new Yn(M,u)),e.push(P),r>aa&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function fp(t,e,n){const i=new Cr(t,e,n);return i.texture.mapping=wl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function CE(t,e,n){const i=new Float32Array(hr),r=new O(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vd(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function hp(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vd(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function pp(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Vd(){return`

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
	`}function RE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Du||l===Uu,d=l===Ma||l===Ea;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new dp(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new dp(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",a),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function bE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function PE(t,e,n,i){const r={},a=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}h.removeEventListener("dispose",s),delete r[h.id];const m=a.get(h);m&&(e.remove(m),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const x=m[v];for(let p=0,u=x.length;p<u;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,v=f.attributes.position;let x=0;if(m!==null){const _=m.array;x=m.version;for(let g=0,M=_.length;g<M;g+=3){const P=_[g+0],w=_[g+1],T=_[g+2];h.push(P,w,w,T,T,P)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,M=_.length/3-1;g<M;g+=3){const P=g+0,w=g+1,T=g+2;h.push(P,w,w,T,T,P)}}else return;const p=new(uv(h)?vv:gv)(h,1);p.version=x;const u=a.get(f);u&&e.remove(u),a.set(f,p)}function d(f){const h=a.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function LE(t,e,n,i){const r=i.isWebGL2;let a;function s(m){a=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function d(m,v){t.drawElements(a,v,o,m*l),n.update(v,a,1)}function f(m,v,x){if(x===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](a,v,o,m*l,x),n.update(v,a,x)}function h(m,v,x){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<x;u++)this.render(m[u]/l,v[u]);else{p.multiDrawElementsWEBGL(a,v,0,o,m,0,x);let u=0;for(let _=0;_<x;_++)u+=v[_];n.update(u,a,1)}}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function IE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(a/3);break;case t.LINES:n.lines+=o*(a/2);break;case t.LINE_STRIP:n.lines+=o*(a-1);break;case t.LINE_LOOP:n.lines+=o*a;break;case t.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function NE(t,e){return t[0]-e[0]}function DE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function UE(t,e,n){const i={},r=new Float32Array(8),a=new WeakMap,s=new bt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let p=a.get(d);if(p===void 0||p.count!==x){let Y=function(){C.dispose(),a.delete(d),d.removeEventListener("dispose",Y)};var m=Y;p!==void 0&&p.texture.dispose();const u=d.morphAttributes.position!==void 0,_=d.morphAttributes.normal!==void 0,g=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let T=0;u===!0&&(T=1),_===!0&&(T=2),g===!0&&(T=3);let I=d.attributes.position.count*T,Z=1;I>e.maxTextureSize&&(Z=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const y=new Float32Array(I*Z*4*x),C=new hv(y,I,Z,x);C.type=oi,C.needsUpdate=!0;const j=T*4;for(let L=0;L<x;L++){const $=M[L],q=P[L],J=w[L],N=I*Z*4*L;for(let k=0;k<$.count;k++){const V=k*j;u===!0&&(s.fromBufferAttribute($,k),y[N+V+0]=s.x,y[N+V+1]=s.y,y[N+V+2]=s.z,y[N+V+3]=0),_===!0&&(s.fromBufferAttribute(q,k),y[N+V+4]=s.x,y[N+V+5]=s.y,y[N+V+6]=s.z,y[N+V+7]=0),g===!0&&(s.fromBufferAttribute(J,k),y[N+V+8]=s.x,y[N+V+9]=s.y,y[N+V+10]=s.z,y[N+V+11]=J.itemSize===4?s.w:1)}}p={count:x,texture:C,size:new qe(I,Z)},a.set(d,p),d.addEventListener("dispose",Y)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let u=0;for(let g=0;g<h.length;g++)u+=h[g];const _=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",h)}f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const v=h===void 0?0:h.length;let x=i[d.id];if(x===void 0||x.length!==v){x=[];for(let M=0;M<v;M++)x[M]=[M,0];i[d.id]=x}for(let M=0;M<v;M++){const P=x[M];P[0]=M,P[1]=h[M]}x.sort(DE);for(let M=0;M<8;M++)M<v&&x[M][1]?(o[M][0]=x[M][0],o[M][1]=x[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(NE);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const P=o[M],w=P[0],T=P[1];w!==Number.MAX_SAFE_INTEGER&&T?(p&&d.getAttribute("morphTarget"+M)!==p[w]&&d.setAttribute("morphTarget"+M,p[w]),u&&d.getAttribute("morphNormal"+M)!==u[w]&&d.setAttribute("morphNormal"+M,u[w]),r[M]=T,_+=T):(p&&d.hasAttribute("morphTarget"+M)===!0&&d.deleteAttribute("morphTarget"+M),u&&d.hasAttribute("morphNormal"+M)===!0&&d.deleteAttribute("morphNormal"+M),r[M]=0)}const g=d.morphTargetsRelative?1:1-_;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function FE(t,e,n,i){let r=new WeakMap;function a(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:s}}class Ev extends $t{constructor(e,n,i,r,a,s,o,l,c,d){if(d=d!==void 0?d:Sr,d!==Sr&&d!==Ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Sr&&(i=Ii),i===void 0&&d===Ta&&(i=yr),super(null,r,a,s,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Tv=new $t,wv=new Ev(1,1);wv.compareFunction=cv;const Av=new hv,Cv=new vy,Rv=new yv,mp=[],gp=[],vp=new Float32Array(16),_p=new Float32Array(9),xp=new Float32Array(4);function La(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=mp[r];if(a===void 0&&(a=new Float32Array(r),mp[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(a,o)}return a}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Rl(t,e){let n=gp[e];n===void 0&&(n=new Int32Array(e),gp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function OE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function HE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Tt(n,i))return;xp.set(i),t.uniformMatrix2fv(this.addr,!1,xp),wt(n,i)}}function GE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Tt(n,i))return;_p.set(i),t.uniformMatrix3fv(this.addr,!1,_p),wt(n,i)}}function VE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Tt(n,i))return;vp.set(i),t.uniformMatrix4fv(this.addr,!1,vp),wt(n,i)}}function WE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function YE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function QE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const a=this.type===t.SAMPLER_2D_SHADOW?wv:Tv;n.setTexture2D(e||a,r)}function JE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Cv,r)}function eT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Rv,r)}function tT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Av,r)}function nT(t){switch(t){case 5126:return OE;case 35664:return kE;case 35665:return zE;case 35666:return BE;case 35674:return HE;case 35675:return GE;case 35676:return VE;case 5124:case 35670:return WE;case 35667:case 35671:return jE;case 35668:case 35672:return XE;case 35669:case 35673:return qE;case 5125:return YE;case 36294:return $E;case 36295:return KE;case 36296:return ZE;case 35678:case 36198:case 36298:case 36306:case 35682:return QE;case 35679:case 36299:case 36307:return JE;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return tT}}function iT(t,e){t.uniform1fv(this.addr,e)}function rT(t,e){const n=La(e,this.size,2);t.uniform2fv(this.addr,n)}function aT(t,e){const n=La(e,this.size,3);t.uniform3fv(this.addr,n)}function sT(t,e){const n=La(e,this.size,4);t.uniform4fv(this.addr,n)}function oT(t,e){const n=La(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function lT(t,e){const n=La(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cT(t,e){const n=La(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function uT(t,e){t.uniform1iv(this.addr,e)}function dT(t,e){t.uniform2iv(this.addr,e)}function fT(t,e){t.uniform3iv(this.addr,e)}function hT(t,e){t.uniform4iv(this.addr,e)}function pT(t,e){t.uniform1uiv(this.addr,e)}function mT(t,e){t.uniform2uiv(this.addr,e)}function gT(t,e){t.uniform3uiv(this.addr,e)}function vT(t,e){t.uniform4uiv(this.addr,e)}function _T(t,e,n){const i=this.cache,r=e.length,a=Rl(n,r);Tt(i,a)||(t.uniform1iv(this.addr,a),wt(i,a));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||Tv,a[s])}function xT(t,e,n){const i=this.cache,r=e.length,a=Rl(n,r);Tt(i,a)||(t.uniform1iv(this.addr,a),wt(i,a));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||Cv,a[s])}function yT(t,e,n){const i=this.cache,r=e.length,a=Rl(n,r);Tt(i,a)||(t.uniform1iv(this.addr,a),wt(i,a));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Rv,a[s])}function ST(t,e,n){const i=this.cache,r=e.length,a=Rl(n,r);Tt(i,a)||(t.uniform1iv(this.addr,a),wt(i,a));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||Av,a[s])}function MT(t){switch(t){case 5126:return iT;case 35664:return rT;case 35665:return aT;case 35666:return sT;case 35674:return oT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return dT;case 35668:case 35672:return fT;case 35669:case 35673:return hT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ST}}class ET{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=nT(n.type)}}class TT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=MT(n.type)}}class wT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,n[o.id],i)}}}const Fc=/(\w+)(\])?(\[|\.)?/g;function yp(t,e){t.seq.push(e),t.map[e.id]=e}function AT(t,e,n){const i=t.name,r=i.length;for(Fc.lastIndex=0;;){const a=Fc.exec(i),s=Fc.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){yp(n,c===void 0?new ET(o,t,e):new TT(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new wT(o),yp(n,f)),n=f}}}class Io{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),s=e.getUniformLocation(n,a.name);AT(a,s,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,s=n.length;a!==s;++a){const o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Sp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const CT=37297;let RT=0;function bT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function PT(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===sl&&n===al?i="LinearDisplayP3ToLinearSRGB":e===al&&n===sl&&(i="LinearSRGBToLinearDisplayP3"),t){case Qi:case Al:return[i,"LinearTransferOETF"];case Nn:case Bd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Mp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+bT(t.getShaderSource(e),s)}else return r}function LT(t,e){const n=PT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function IT(t,e){let n;switch(e){case zx:n="Linear";break;case Bx:n="Reinhard";break;case Hx:n="OptimizedCineon";break;case Gx:n="ACESFilmic";break;case Wx:n="AgX";break;case jx:n="Neutral";break;case Vx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function NT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sa).join(`
`)}function DT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function UT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function FT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),s=a.name;let o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),n[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function sa(t){return t!==""}function Ep(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hu(t){return t.replace(OT,zT)}const kT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zT(t,e){let n=Fe[e];if(n===void 0){const i=kT.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hu(n)}const BT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wp(t){return t.replace(BT,HT)}function HT(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Ap(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function GT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Qg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function VT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ma:case Ea:e="ENVMAP_TYPE_CUBE";break;case wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ea:e="ENVMAP_MODE_REFRACTION";break}return e}function jT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Jg:e="ENVMAP_BLENDING_MULTIPLY";break;case Ox:e="ENVMAP_BLENDING_MIX";break;case kx:e="ENVMAP_BLENDING_ADD";break}return e}function XT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function qT(t,e,n,i){const r=t.getContext(),a=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=GT(n),c=VT(n),d=WT(n),f=jT(n),h=XT(n),m=n.isWebGL2?"":NT(n),v=DT(n),x=UT(a),p=r.createProgram();let u,_,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(sa).join(`
`),u.length>0&&(u+=`
`),_=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(sa).join(`
`),_.length>0&&(_+=`
`)):(u=[Ap(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),_=[m,Ap(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vi?"#define TONE_MAPPING":"",n.toneMapping!==Vi?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Vi?IT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,LT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(sa).join(`
`)),s=Hu(s),s=Ep(s,n),s=Tp(s,n),o=Hu(o),o=Ep(o,n),o=Tp(o,n),s=wp(s),o=wp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=g+u+s,P=g+_+o,w=Sp(r,r.VERTEX_SHADER,M),T=Sp(r,r.FRAGMENT_SHADER,P);r.attachShader(p,w),r.attachShader(p,T),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function I(j){if(t.debug.checkShaderErrors){const Y=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(w).trim(),$=r.getShaderInfoLog(T).trim();let q=!0,J=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,w,T);else{const N=Mp(r,w,"vertex"),k=Mp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+Y+`
`+N+`
`+k)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(L===""||$==="")&&(J=!1);J&&(j.diagnostics={runnable:q,programLog:Y,vertexShader:{log:L,prefix:u},fragmentShader:{log:$,prefix:_}})}r.deleteShader(w),r.deleteShader(T),Z=new Io(r,p),y=FT(r,p)}let Z;this.getUniforms=function(){return Z===void 0&&I(this),Z};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(p,CT)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=T,this}let YT=0;class $T{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new KT(e),n.set(e,i)),i}}class KT{constructor(e){this.id=YT++,this.code=e,this.usedTimes=0}}function ZT(t,e,n,i,r,a,s){const o=new pv,l=new $T,c=new Set,d=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,C,j,Y,L){const $=Y.fog,q=L.geometry,J=y.isMeshStandardMaterial?Y.environment:null,N=(y.isMeshStandardMaterial?n:e).get(y.envMap||J),k=N&&N.mapping===wl?N.image.height:null,V=x[y.type];y.precision!==null&&(v=r.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const ee=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,se=ee!==void 0?ee.length:0;let Ce=0;q.morphAttributes.position!==void 0&&(Ce=1),q.morphAttributes.normal!==void 0&&(Ce=2),q.morphAttributes.color!==void 0&&(Ce=3);let B,te,ue,we;if(V){const Je=Vn[V];B=Je.vertexShader,te=Je.fragmentShader}else B=y.vertexShader,te=y.fragmentShader,l.update(y),ue=l.getVertexShaderID(y),we=l.getFragmentShaderID(y);const b=t.getRenderTarget(),K=L.isInstancedMesh===!0,xe=L.isBatchedMesh===!0,ve=!!y.map,F=!!y.matcap,ft=!!N,pe=!!y.aoMap,Ee=!!y.lightMap,_e=!!y.bumpMap,je=!!y.normalMap,ke=!!y.displacementMap,He=!!y.emissiveMap,mt=!!y.metalnessMap,A=!!y.roughnessMap,S=y.anisotropy>0,X=y.clearcoat>0,Q=y.iridescence>0,re=y.sheen>0,ne=y.transmission>0,Ne=S&&!!y.anisotropyMap,Re=X&&!!y.clearcoatMap,ce=X&&!!y.clearcoatNormalMap,fe=X&&!!y.clearcoatRoughnessMap,De=Q&&!!y.iridescenceMap,ae=Q&&!!y.iridescenceThicknessMap,xt=re&&!!y.sheenColorMap,Ge=re&&!!y.sheenRoughnessMap,Te=!!y.specularMap,ye=!!y.specularColorMap,Se=!!y.specularIntensityMap,Ye=ne&&!!y.transmissionMap,Le=ne&&!!y.thicknessMap,at=!!y.gradientMap,D=!!y.alphaMap,de=y.alphaTest>0,H=!!y.alphaHash,oe=!!y.extensions;let he=Vi;y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(he=t.toneMapping);const Xe={isWebGL2:f,shaderID:V,shaderType:y.type,shaderName:y.name,vertexShader:B,fragmentShader:te,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:we,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:xe,instancing:K,instancingColor:K&&L.instanceColor!==null,instancingMorph:K&&L.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:b===null?t.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Qi,alphaToCoverage:!!y.alphaToCoverage,map:ve,matcap:F,envMap:ft,envMapMode:ft&&N.mapping,envMapCubeUVHeight:k,aoMap:pe,lightMap:Ee,bumpMap:_e,normalMap:je,displacementMap:m&&ke,emissiveMap:He,normalMapObjectSpace:je&&y.normalMapType===ny,normalMapTangentSpace:je&&y.normalMapType===lv,metalnessMap:mt,roughnessMap:A,anisotropy:S,anisotropyMap:Ne,clearcoat:X,clearcoatMap:Re,clearcoatNormalMap:ce,clearcoatRoughnessMap:fe,iridescence:Q,iridescenceMap:De,iridescenceThicknessMap:ae,sheen:re,sheenColorMap:xt,sheenRoughnessMap:Ge,specularMap:Te,specularColorMap:ye,specularIntensityMap:Se,transmission:ne,transmissionMap:Ye,thicknessMap:Le,gradientMap:at,opaque:y.transparent===!1&&y.blending===ha&&y.alphaToCoverage===!1,alphaMap:D,alphaTest:de,alphaHash:H,combine:y.combine,mapUv:ve&&p(y.map.channel),aoMapUv:pe&&p(y.aoMap.channel),lightMapUv:Ee&&p(y.lightMap.channel),bumpMapUv:_e&&p(y.bumpMap.channel),normalMapUv:je&&p(y.normalMap.channel),displacementMapUv:ke&&p(y.displacementMap.channel),emissiveMapUv:He&&p(y.emissiveMap.channel),metalnessMapUv:mt&&p(y.metalnessMap.channel),roughnessMapUv:A&&p(y.roughnessMap.channel),anisotropyMapUv:Ne&&p(y.anisotropyMap.channel),clearcoatMapUv:Re&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&p(y.sheenRoughnessMap.channel),specularMapUv:Te&&p(y.specularMap.channel),specularColorMapUv:ye&&p(y.specularColorMap.channel),specularIntensityMapUv:Se&&p(y.specularIntensityMap.channel),transmissionMapUv:Ye&&p(y.transmissionMap.channel),thicknessMapUv:Le&&p(y.thicknessMap.channel),alphaMapUv:D&&p(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(je||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!q.attributes.uv&&(ve||D),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ce,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&j.length>0,shadowMapType:t.shadowMap.type,toneMapping:he,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ve&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===si,flipSided:y.side===on,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:oe&&y.extensions.derivatives===!0,extensionFragDepth:oe&&y.extensions.fragDepth===!0,extensionDrawBuffers:oe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:oe&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function _(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const j in y.defines)C.push(j),C.push(y.defines[j]);return y.isRawShaderMaterial===!1&&(g(C,y),M(C,y),C.push(t.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function g(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function M(y,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.instancingMorph&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.normalMapObjectSpace&&o.enable(7),C.normalMapTangentSpace&&o.enable(8),C.clearcoat&&o.enable(9),C.iridescence&&o.enable(10),C.alphaTest&&o.enable(11),C.vertexColors&&o.enable(12),C.vertexAlphas&&o.enable(13),C.vertexUv1s&&o.enable(14),C.vertexUv2s&&o.enable(15),C.vertexUv3s&&o.enable(16),C.vertexTangents&&o.enable(17),C.anisotropy&&o.enable(18),C.alphaHash&&o.enable(19),C.batching&&o.enable(20),y.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.alphaToCoverage&&o.enable(20),y.push(o.mask)}function P(y){const C=x[y.type];let j;if(C){const Y=Vn[C];j=Ly.clone(Y.uniforms)}else j=y.uniforms;return j}function w(y,C){let j;for(let Y=0,L=d.length;Y<L;Y++){const $=d[Y];if($.cacheKey===C){j=$,++j.usedTimes;break}}return j===void 0&&(j=new qT(t,C,y,a),d.push(j)),j}function T(y){if(--y.usedTimes===0){const C=d.indexOf(y);d[C]=d[d.length-1],d.pop(),y.destroy()}}function I(y){l.remove(y)}function Z(){l.dispose()}return{getParameters:u,getProgramCacheKey:_,getUniforms:P,acquireProgram:w,releaseProgram:T,releaseShaderCache:I,programs:d,dispose:Z}}function QT(){let t=new WeakMap;function e(a){let s=t.get(a);return s===void 0&&(s={},t.set(a,s)),s}function n(a){t.delete(a)}function i(a,s,o){t.get(a)[s]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function JT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Cp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Rp(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function s(f,h,m,v,x,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:v,renderOrder:f.renderOrder,z:x,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=v,u.renderOrder=f.renderOrder,u.z=x,u.group=p),e++,u}function o(f,h,m,v,x,p){const u=s(f,h,m,v,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(f,h,m,v,x,p){const u=s(f,h,m,v,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||JT),i.length>1&&i.sort(h||Cp),r.length>1&&r.sort(h||Cp)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:d,sort:c}}function e1(){let t=new WeakMap;function e(i,r){const a=t.get(i);let s;return a===void 0?(s=new Rp,t.set(i,[s])):r>=a.length?(s=new Rp,a.push(s)):s=a[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function t1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Be};break;case"SpotLight":n={position:new O,direction:new O,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function n1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let i1=0;function r1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function a1(t,e){const n=new t1,i=n1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new O);const a=new O,s=new _t,o=new _t;function l(d,f){let h=0,m=0,v=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let x=0,p=0,u=0,_=0,g=0,M=0,P=0,w=0,T=0,I=0,Z=0;d.sort(r1);const y=f===!0?Math.PI:1;for(let j=0,Y=d.length;j<Y;j++){const L=d[j],$=L.color,q=L.intensity,J=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=$.r*q*y,m+=$.g*q*y,v+=$.b*q*y;else if(L.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(L.sh.coefficients[k],q);Z++}else if(L.isDirectionalLight){const k=n.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*y),L.castShadow){const V=L.shadow,ee=i.get(L);ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,r.directionalShadow[x]=ee,r.directionalShadowMap[x]=N,r.directionalShadowMatrix[x]=L.shadow.matrix,M++}r.directional[x]=k,x++}else if(L.isSpotLight){const k=n.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy($).multiplyScalar(q*y),k.distance=J,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,r.spot[u]=k;const V=L.shadow;if(L.map&&(r.spotLightMap[T]=L.map,T++,V.updateMatrices(L),L.castShadow&&I++),r.spotLightMatrix[u]=V.matrix,L.castShadow){const ee=i.get(L);ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,r.spotShadow[u]=ee,r.spotShadowMap[u]=N,w++}u++}else if(L.isRectAreaLight){const k=n.get(L);k.color.copy($).multiplyScalar(q),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),r.rectArea[_]=k,_++}else if(L.isPointLight){const k=n.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*y),k.distance=L.distance,k.decay=L.decay,L.castShadow){const V=L.shadow,ee=i.get(L);ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,ee.shadowCameraNear=V.camera.near,ee.shadowCameraFar=V.camera.far,r.pointShadow[p]=ee,r.pointShadowMap[p]=N,r.pointShadowMatrix[p]=L.shadow.matrix,P++}r.point[p]=k,p++}else if(L.isHemisphereLight){const k=n.get(L);k.skyColor.copy(L.color).multiplyScalar(q*y),k.groundColor.copy(L.groundColor).multiplyScalar(q*y),r.hemi[g]=k,g++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=v;const C=r.hash;(C.directionalLength!==x||C.pointLength!==p||C.spotLength!==u||C.rectAreaLength!==_||C.hemiLength!==g||C.numDirectionalShadows!==M||C.numPointShadows!==P||C.numSpotShadows!==w||C.numSpotMaps!==T||C.numLightProbes!==Z)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=_,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=w+T-I,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=Z,C.directionalLength=x,C.pointLength=p,C.spotLength=u,C.rectAreaLength=_,C.hemiLength=g,C.numDirectionalShadows=M,C.numPointShadows=P,C.numSpotShadows=w,C.numSpotMaps=T,C.numLightProbes=Z,r.version=i1++)}function c(d,f){let h=0,m=0,v=0,x=0,p=0;const u=f.matrixWorldInverse;for(let _=0,g=d.length;_<g;_++){const M=d[_];if(M.isDirectionalLight){const P=r.directional[h];P.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(u),h++}else if(M.isSpotLight){const P=r.spot[v];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(u),P.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(u),v++}else if(M.isRectAreaLight){const P=r.rectArea[x];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(u),o.identity(),s.copy(M.matrixWorld),s.premultiply(u),o.extractRotation(s),P.halfWidth.set(M.width*.5,0,0),P.halfHeight.set(0,M.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(u),m++}else if(M.isHemisphereLight){const P=r.hemi[p];P.direction.setFromMatrixPosition(M.matrixWorld),P.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function bp(t,e){const n=new a1(t,e),i=[],r=[];function a(){i.length=0,r.length=0}function s(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function s1(t,e){let n=new WeakMap;function i(a,s=0){const o=n.get(a);let l;return o===void 0?(l=new bp(t,e),n.set(a,[l])):s>=o.length?(l=new bp(t,e),o.push(l)):l=o[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class o1 extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ey,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l1 extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const c1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u1=`uniform sampler2D shadow_pass;
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
}`;function d1(t,e,n){let i=new Gd;const r=new qe,a=new qe,s=new bt,o=new o1({depthPacking:ty}),l=new l1,c={},d=n.maxTextureSize,f={[qi]:on,[on]:qi,[si]:si},h=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:c1,fragmentShader:u1}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ji;v.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Gt(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zg;let u=this.type;this.render=function(w,T,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const Z=t.getRenderTarget(),y=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),j=t.state;j.setBlending(Gi),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Y=u!==ii&&this.type===ii,L=u===ii&&this.type!==ii;for(let $=0,q=w.length;$<q;$++){const J=w[$],N=J.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const k=N.getFrameExtents();if(r.multiply(k),a.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/k.x),r.x=a.x*k.x,N.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/k.y),r.y=a.y*k.y,N.mapSize.y=a.y)),N.map===null||Y===!0||L===!0){const ee=this.type!==ii?{minFilter:qt,magFilter:qt}:{};N.map!==null&&N.map.dispose(),N.map=new Cr(r.x,r.y,ee),N.map.texture.name=J.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const V=N.getViewportCount();for(let ee=0;ee<V;ee++){const se=N.getViewport(ee);s.set(a.x*se.x,a.y*se.y,a.x*se.z,a.y*se.w),j.viewport(s),N.updateMatrices(J,ee),i=N.getFrustum(),M(T,I,N.camera,J,this.type)}N.isPointLightShadow!==!0&&this.type===ii&&_(N,I),N.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(Z,y,C)};function _(w,T){const I=e.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Cr(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(T,null,I,h,x,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(T,null,I,m,x,null)}function g(w,T,I,Z){let y=null;const C=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)y=C;else if(y=I.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const j=y.uuid,Y=T.uuid;let L=c[j];L===void 0&&(L={},c[j]=L);let $=L[Y];$===void 0&&($=y.clone(),L[Y]=$,T.addEventListener("dispose",P)),y=$}if(y.visible=T.visible,y.wireframe=T.wireframe,Z===ii?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const j=t.properties.get(y);j.light=I}return y}function M(w,T,I,Z,y){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===ii)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const Y=e.update(w),L=w.material;if(Array.isArray(L)){const $=Y.groups;for(let q=0,J=$.length;q<J;q++){const N=$[q],k=L[N.materialIndex];if(k&&k.visible){const V=g(w,k,Z,y);w.onBeforeShadow(t,w,T,I,Y,V,N),t.renderBufferDirect(I,null,Y,V,w,N),w.onAfterShadow(t,w,T,I,Y,V,N)}}}else if(L.visible){const $=g(w,L,Z,y);w.onBeforeShadow(t,w,T,I,Y,$,null),t.renderBufferDirect(I,null,Y,$,w,null),w.onAfterShadow(t,w,T,I,Y,$,null)}}const j=w.children;for(let Y=0,L=j.length;Y<L;Y++)M(j[Y],T,I,Z,y)}function P(w){w.target.removeEventListener("dispose",P);for(const I in c){const Z=c[I],y=w.target.uuid;y in Z&&(Z[y].dispose(),delete Z[y])}}}function f1(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const de=new bt;let H=null;const oe=new bt(0,0,0,0);return{setMask:function(he){H!==he&&!D&&(t.colorMask(he,he,he,he),H=he)},setLocked:function(he){D=he},setClear:function(he,Xe,Je,Lt,vn){vn===!0&&(he*=Lt,Xe*=Lt,Je*=Lt),de.set(he,Xe,Je,Lt),oe.equals(de)===!1&&(t.clearColor(he,Xe,Je,Lt),oe.copy(de))},reset:function(){D=!1,H=null,oe.set(-1,0,0,0)}}}function a(){let D=!1,de=null,H=null,oe=null;return{setTest:function(he){he?K(t.DEPTH_TEST):xe(t.DEPTH_TEST)},setMask:function(he){de!==he&&!D&&(t.depthMask(he),de=he)},setFunc:function(he){if(H!==he){switch(he){case Px:t.depthFunc(t.NEVER);break;case Lx:t.depthFunc(t.ALWAYS);break;case Ix:t.depthFunc(t.LESS);break;case il:t.depthFunc(t.LEQUAL);break;case Nx:t.depthFunc(t.EQUAL);break;case Dx:t.depthFunc(t.GEQUAL);break;case Ux:t.depthFunc(t.GREATER);break;case Fx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}H=he}},setLocked:function(he){D=he},setClear:function(he){oe!==he&&(t.clearDepth(he),oe=he)},reset:function(){D=!1,de=null,H=null,oe=null}}}function s(){let D=!1,de=null,H=null,oe=null,he=null,Xe=null,Je=null,Lt=null,vn=null;return{setTest:function(et){D||(et?K(t.STENCIL_TEST):xe(t.STENCIL_TEST))},setMask:function(et){de!==et&&!D&&(t.stencilMask(et),de=et)},setFunc:function(et,Wt,Bn){(H!==et||oe!==Wt||he!==Bn)&&(t.stencilFunc(et,Wt,Bn),H=et,oe=Wt,he=Bn)},setOp:function(et,Wt,Bn){(Xe!==et||Je!==Wt||Lt!==Bn)&&(t.stencilOp(et,Wt,Bn),Xe=et,Je=Wt,Lt=Bn)},setLocked:function(et){D=et},setClear:function(et){vn!==et&&(t.clearStencil(et),vn=et)},reset:function(){D=!1,de=null,H=null,oe=null,he=null,Xe=null,Je=null,Lt=null,vn=null}}}const o=new r,l=new a,c=new s,d=new WeakMap,f=new WeakMap;let h={},m={},v=new WeakMap,x=[],p=null,u=!1,_=null,g=null,M=null,P=null,w=null,T=null,I=null,Z=new Be(0,0,0),y=0,C=!1,j=null,Y=null,L=null,$=null,q=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=k>=1):V.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=k>=2);let ee=null,se={};const Ce=t.getParameter(t.SCISSOR_BOX),B=t.getParameter(t.VIEWPORT),te=new bt().fromArray(Ce),ue=new bt().fromArray(B);function we(D,de,H,oe){const he=new Uint8Array(4),Xe=t.createTexture();t.bindTexture(D,Xe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<H;Je++)i&&(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)?t.texImage3D(de,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(de+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return Xe}const b={};b[t.TEXTURE_2D]=we(t.TEXTURE_2D,t.TEXTURE_2D,1),b[t.TEXTURE_CUBE_MAP]=we(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(b[t.TEXTURE_2D_ARRAY]=we(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),b[t.TEXTURE_3D]=we(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),K(t.DEPTH_TEST),l.setFunc(il),ke(!1),He(lh),K(t.CULL_FACE),_e(Gi);function K(D){h[D]!==!0&&(t.enable(D),h[D]=!0)}function xe(D){h[D]!==!1&&(t.disable(D),h[D]=!1)}function ve(D,de){return m[D]!==de?(t.bindFramebuffer(D,de),m[D]=de,i&&(D===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=de),D===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=de)),!0):!1}function F(D,de){let H=x,oe=!1;if(D){H=v.get(de),H===void 0&&(H=[],v.set(de,H));const he=D.textures;if(H.length!==he.length||H[0]!==t.COLOR_ATTACHMENT0){for(let Xe=0,Je=he.length;Xe<Je;Xe++)H[Xe]=t.COLOR_ATTACHMENT0+Xe;H.length=he.length,oe=!0}}else H[0]!==t.BACK&&(H[0]=t.BACK,oe=!0);if(oe)if(n.isWebGL2)t.drawBuffers(H);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ft(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const pe={[fr]:t.FUNC_ADD,[mx]:t.FUNC_SUBTRACT,[gx]:t.FUNC_REVERSE_SUBTRACT};if(i)pe[fh]=t.MIN,pe[hh]=t.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(pe[fh]=D.MIN_EXT,pe[hh]=D.MAX_EXT)}const Ee={[vx]:t.ZERO,[_x]:t.ONE,[xx]:t.SRC_COLOR,[Iu]:t.SRC_ALPHA,[wx]:t.SRC_ALPHA_SATURATE,[Ex]:t.DST_COLOR,[Sx]:t.DST_ALPHA,[yx]:t.ONE_MINUS_SRC_COLOR,[Nu]:t.ONE_MINUS_SRC_ALPHA,[Tx]:t.ONE_MINUS_DST_COLOR,[Mx]:t.ONE_MINUS_DST_ALPHA,[Ax]:t.CONSTANT_COLOR,[Cx]:t.ONE_MINUS_CONSTANT_COLOR,[Rx]:t.CONSTANT_ALPHA,[bx]:t.ONE_MINUS_CONSTANT_ALPHA};function _e(D,de,H,oe,he,Xe,Je,Lt,vn,et){if(D===Gi){u===!0&&(xe(t.BLEND),u=!1);return}if(u===!1&&(K(t.BLEND),u=!0),D!==px){if(D!==_||et!==C){if((g!==fr||w!==fr)&&(t.blendEquation(t.FUNC_ADD),g=fr,w=fr),et)switch(D){case ha:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ch:t.blendFunc(t.ONE,t.ONE);break;case uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ha:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ch:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,P=null,T=null,I=null,Z.set(0,0,0),y=0,_=D,C=et}return}he=he||de,Xe=Xe||H,Je=Je||oe,(de!==g||he!==w)&&(t.blendEquationSeparate(pe[de],pe[he]),g=de,w=he),(H!==M||oe!==P||Xe!==T||Je!==I)&&(t.blendFuncSeparate(Ee[H],Ee[oe],Ee[Xe],Ee[Je]),M=H,P=oe,T=Xe,I=Je),(Lt.equals(Z)===!1||vn!==y)&&(t.blendColor(Lt.r,Lt.g,Lt.b,vn),Z.copy(Lt),y=vn),_=D,C=!1}function je(D,de){D.side===si?xe(t.CULL_FACE):K(t.CULL_FACE);let H=D.side===on;de&&(H=!H),ke(H),D.blending===ha&&D.transparent===!1?_e(Gi):_e(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const oe=D.stencilWrite;c.setTest(oe),oe&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),A(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?K(t.SAMPLE_ALPHA_TO_COVERAGE):xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(D){j!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),j=D)}function He(D){D!==fx?(K(t.CULL_FACE),D!==Y&&(D===lh?t.cullFace(t.BACK):D===hx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):xe(t.CULL_FACE),Y=D}function mt(D){D!==L&&(N&&t.lineWidth(D),L=D)}function A(D,de,H){D?(K(t.POLYGON_OFFSET_FILL),($!==de||q!==H)&&(t.polygonOffset(de,H),$=de,q=H)):xe(t.POLYGON_OFFSET_FILL)}function S(D){D?K(t.SCISSOR_TEST):xe(t.SCISSOR_TEST)}function X(D){D===void 0&&(D=t.TEXTURE0+J-1),ee!==D&&(t.activeTexture(D),ee=D)}function Q(D,de,H){H===void 0&&(ee===null?H=t.TEXTURE0+J-1:H=ee);let oe=se[H];oe===void 0&&(oe={type:void 0,texture:void 0},se[H]=oe),(oe.type!==D||oe.texture!==de)&&(ee!==H&&(t.activeTexture(H),ee=H),t.bindTexture(D,de||b[D]),oe.type=D,oe.texture=de)}function re(){const D=se[ee];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ne(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(D){te.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),te.copy(D))}function Se(D){ue.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ue.copy(D))}function Ye(D,de){let H=f.get(de);H===void 0&&(H=new WeakMap,f.set(de,H));let oe=H.get(D);oe===void 0&&(oe=t.getUniformBlockIndex(de,D.name),H.set(D,oe))}function Le(D,de){const oe=f.get(de).get(D);d.get(de)!==oe&&(t.uniformBlockBinding(de,oe,D.__bindingPointIndex),d.set(de,oe))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ee=null,se={},m={},v=new WeakMap,x=[],p=null,u=!1,_=null,g=null,M=null,P=null,w=null,T=null,I=null,Z=new Be(0,0,0),y=0,C=!1,j=null,Y=null,L=null,$=null,q=null,te.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:K,disable:xe,bindFramebuffer:ve,drawBuffers:F,useProgram:ft,setBlending:_e,setMaterial:je,setFlipSided:ke,setCullFace:He,setLineWidth:mt,setPolygonOffset:A,setScissorTest:S,activeTexture:X,bindTexture:Q,unbindTexture:re,compressedTexImage2D:ne,compressedTexImage3D:Ne,texImage2D:Ge,texImage3D:Te,updateUBOMapping:Ye,uniformBlockBinding:Le,texStorage2D:ae,texStorage3D:xt,texSubImage2D:Re,texSubImage3D:ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:De,scissor:ye,viewport:Se,reset:at}}function h1(t,e,n,i,r,a,s){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new qe,f=new WeakMap;let h;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,S){return v?new OffscreenCanvas(A,S):ll("canvas")}function p(A,S,X,Q){let re=1;const ne=mt(A);if((ne.width>Q||ne.height>Q)&&(re=Q/Math.max(ne.width,ne.height)),re<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Ne=S?Bu:Math.floor,Re=Ne(re*ne.width),ce=Ne(re*ne.height);h===void 0&&(h=x(Re,ce));const fe=X?x(Re,ce):h;return fe.width=Re,fe.height=ce,fe.getContext("2d").drawImage(A,0,0,Re,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Re+"x"+ce+")."),fe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function u(A){const S=mt(A);return Vh(S.width)&&Vh(S.height)}function _(A){return o?!1:A.wrapS!==Un||A.wrapT!==Un||A.minFilter!==qt&&A.minFilter!==Jt}function g(A,S){return A.generateMipmaps&&S&&A.minFilter!==qt&&A.minFilter!==Jt}function M(A){t.generateMipmap(A)}function P(A,S,X,Q,re=!1){if(o===!1)return S;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ne=S;if(S===t.RED&&(X===t.FLOAT&&(ne=t.R32F),X===t.HALF_FLOAT&&(ne=t.R16F),X===t.UNSIGNED_BYTE&&(ne=t.R8)),S===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(ne=t.R8UI),X===t.UNSIGNED_SHORT&&(ne=t.R16UI),X===t.UNSIGNED_INT&&(ne=t.R32UI),X===t.BYTE&&(ne=t.R8I),X===t.SHORT&&(ne=t.R16I),X===t.INT&&(ne=t.R32I)),S===t.RG&&(X===t.FLOAT&&(ne=t.RG32F),X===t.HALF_FLOAT&&(ne=t.RG16F),X===t.UNSIGNED_BYTE&&(ne=t.RG8)),S===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(ne=t.RG8UI),X===t.UNSIGNED_SHORT&&(ne=t.RG16UI),X===t.UNSIGNED_INT&&(ne=t.RG32UI),X===t.BYTE&&(ne=t.RG8I),X===t.SHORT&&(ne=t.RG16I),X===t.INT&&(ne=t.RG32I)),S===t.RGBA){const Ne=re?rl:Ze.getTransfer(Q);X===t.FLOAT&&(ne=t.RGBA32F),X===t.HALF_FLOAT&&(ne=t.RGBA16F),X===t.UNSIGNED_BYTE&&(ne=Ne===it?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function w(A,S,X){return g(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==qt&&A.minFilter!==Jt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){return A===qt||A===ph||A===Ha?t.NEAREST:t.LINEAR}function I(A){const S=A.target;S.removeEventListener("dispose",I),y(S),S.isVideoTexture&&f.delete(S)}function Z(A){const S=A.target;S.removeEventListener("dispose",Z),j(S)}function y(A){const S=i.get(A);if(S.__webglInit===void 0)return;const X=A.source,Q=m.get(X);if(Q){const re=Q[S.__cacheKey];re.usedTimes--,re.usedTimes===0&&C(A),Object.keys(Q).length===0&&m.delete(X)}i.remove(A)}function C(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const X=A.source,Q=m.get(X);delete Q[S.__cacheKey],s.memory.textures--}function j(A){const S=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let re=0;re<S.__webglFramebuffer[Q].length;re++)t.deleteFramebuffer(S.__webglFramebuffer[Q][re]);else t.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[Q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const X=A.textures;for(let Q=0,re=X.length;Q<re;Q++){const ne=i.get(X[Q]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),s.memory.textures--),i.remove(X[Q])}i.remove(A)}let Y=0;function L(){Y=0}function $(){const A=Y;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),Y+=1,A}function q(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function J(A,S){const X=i.get(A);if(A.isVideoTexture&&ke(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(X,A,S);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+S)}function N(A,S){const X=i.get(A);if(A.version>0&&X.__version!==A.version){ue(X,A,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+S)}function k(A,S){const X=i.get(A);if(A.version>0&&X.__version!==A.version){ue(X,A,S);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+S)}function V(A,S){const X=i.get(A);if(A.version>0&&X.__version!==A.version){we(X,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+S)}const ee={[Fu]:t.REPEAT,[Un]:t.CLAMP_TO_EDGE,[Ou]:t.MIRRORED_REPEAT},se={[qt]:t.NEAREST,[ph]:t.NEAREST_MIPMAP_NEAREST,[Ha]:t.NEAREST_MIPMAP_LINEAR,[Jt]:t.LINEAR,[ac]:t.LINEAR_MIPMAP_NEAREST,[vr]:t.LINEAR_MIPMAP_LINEAR},Ce={[iy]:t.NEVER,[cy]:t.ALWAYS,[ry]:t.LESS,[cv]:t.LEQUAL,[ay]:t.EQUAL,[ly]:t.GEQUAL,[sy]:t.GREATER,[oy]:t.NOTEQUAL};function B(A,S,X){if(S.type===oi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Jt||S.magFilter===ac||S.magFilter===Ha||S.magFilter===vr||S.minFilter===Jt||S.minFilter===ac||S.minFilter===Ha||S.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(t.texParameteri(A,t.TEXTURE_WRAP_S,ee[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ee[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ee[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,se[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,se[S.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Un||S.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,T(S.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==qt&&S.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===qt||S.minFilter!==Ha&&S.minFilter!==vr||S.type===oi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Es&&e.has("OES_texture_half_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function te(A,S){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",I));const Q=S.source;let re=m.get(Q);re===void 0&&(re={},m.set(Q,re));const ne=q(S);if(ne!==A.__cacheKey){re[ne]===void 0&&(re[ne]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,X=!0),re[ne].usedTimes++;const Ne=re[A.__cacheKey];Ne!==void 0&&(re[A.__cacheKey].usedTimes--,Ne.usedTimes===0&&C(S)),A.__cacheKey=ne,A.__webglTexture=re[ne].texture}return X}function ue(A,S,X){let Q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=t.TEXTURE_3D);const re=te(A,S),ne=S.source;n.bindTexture(Q,A.__webglTexture,t.TEXTURE0+X);const Ne=i.get(ne);if(ne.version!==Ne.__version||re===!0){n.activeTexture(t.TEXTURE0+X);const Re=Ze.getPrimaries(Ze.workingColorSpace),ce=S.colorSpace===bi?null:Ze.getPrimaries(S.colorSpace),fe=S.colorSpace===bi||Re===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const De=_(S)&&u(S.image)===!1;let ae=p(S.image,De,!1,r.maxTextureSize);ae=He(S,ae);const xt=u(ae)||o,Ge=a.convert(S.format,S.colorSpace);let Te=a.convert(S.type),ye=P(S.internalFormat,Ge,Te,S.colorSpace,S.isVideoTexture);B(Q,S,xt);let Se;const Ye=S.mipmaps,Le=o&&S.isVideoTexture!==!0&&ye!==ov,at=Ne.__version===void 0||re===!0,D=ne.dataReady,de=w(S,ae,xt);if(S.isDepthTexture)ye=t.DEPTH_COMPONENT,o?S.type===oi?ye=t.DEPTH_COMPONENT32F:S.type===Ii?ye=t.DEPTH_COMPONENT24:S.type===yr?ye=t.DEPTH24_STENCIL8:ye=t.DEPTH_COMPONENT16:S.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Sr&&ye===t.DEPTH_COMPONENT&&S.type!==zd&&S.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ii,Te=a.convert(S.type)),S.format===Ta&&ye===t.DEPTH_COMPONENT&&(ye=t.DEPTH_STENCIL,S.type!==yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=yr,Te=a.convert(S.type))),at&&(Le?n.texStorage2D(t.TEXTURE_2D,1,ye,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,ye,ae.width,ae.height,0,Ge,Te,null));else if(S.isDataTexture)if(Ye.length>0&&xt){Le&&at&&n.texStorage2D(t.TEXTURE_2D,de,ye,Ye[0].width,Ye[0].height);for(let H=0,oe=Ye.length;H<oe;H++)Se=Ye[H],Le?D&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,Se.width,Se.height,Ge,Te,Se.data):n.texImage2D(t.TEXTURE_2D,H,ye,Se.width,Se.height,0,Ge,Te,Se.data);S.generateMipmaps=!1}else Le?(at&&n.texStorage2D(t.TEXTURE_2D,de,ye,ae.width,ae.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,Ge,Te,ae.data)):n.texImage2D(t.TEXTURE_2D,0,ye,ae.width,ae.height,0,Ge,Te,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Le&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ye,Ye[0].width,Ye[0].height,ae.depth);for(let H=0,oe=Ye.length;H<oe;H++)Se=Ye[H],S.format!==Fn?Ge!==null?Le?D&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,Se.width,Se.height,ae.depth,Ge,Se.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,H,ye,Se.width,Se.height,ae.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,Se.width,Se.height,ae.depth,Ge,Te,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,H,ye,Se.width,Se.height,ae.depth,0,Ge,Te,Se.data)}else{Le&&at&&n.texStorage2D(t.TEXTURE_2D,de,ye,Ye[0].width,Ye[0].height);for(let H=0,oe=Ye.length;H<oe;H++)Se=Ye[H],S.format!==Fn?Ge!==null?Le?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,H,0,0,Se.width,Se.height,Ge,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,H,ye,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?D&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,Se.width,Se.height,Ge,Te,Se.data):n.texImage2D(t.TEXTURE_2D,H,ye,Se.width,Se.height,0,Ge,Te,Se.data)}else if(S.isDataArrayTexture)Le?(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ye,ae.width,ae.height,ae.depth),D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ge,Te,ae.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,ae.width,ae.height,ae.depth,0,Ge,Te,ae.data);else if(S.isData3DTexture)Le?(at&&n.texStorage3D(t.TEXTURE_3D,de,ye,ae.width,ae.height,ae.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ge,Te,ae.data)):n.texImage3D(t.TEXTURE_3D,0,ye,ae.width,ae.height,ae.depth,0,Ge,Te,ae.data);else if(S.isFramebufferTexture){if(at)if(Le)n.texStorage2D(t.TEXTURE_2D,de,ye,ae.width,ae.height);else{let H=ae.width,oe=ae.height;for(let he=0;he<de;he++)n.texImage2D(t.TEXTURE_2D,he,ye,H,oe,0,Ge,Te,null),H>>=1,oe>>=1}}else if(Ye.length>0&&xt){if(Le&&at){const H=mt(Ye[0]);n.texStorage2D(t.TEXTURE_2D,de,ye,H.width,H.height)}for(let H=0,oe=Ye.length;H<oe;H++)Se=Ye[H],Le?D&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,Ge,Te,Se):n.texImage2D(t.TEXTURE_2D,H,ye,Ge,Te,Se);S.generateMipmaps=!1}else if(Le){if(at){const H=mt(ae);n.texStorage2D(t.TEXTURE_2D,de,ye,H.width,H.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ge,Te,ae)}else n.texImage2D(t.TEXTURE_2D,0,ye,Ge,Te,ae);g(S,xt)&&M(Q),Ne.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function we(A,S,X){if(S.image.length!==6)return;const Q=te(A,S),re=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+X);const ne=i.get(re);if(re.version!==ne.__version||Q===!0){n.activeTexture(t.TEXTURE0+X);const Ne=Ze.getPrimaries(Ze.workingColorSpace),Re=S.colorSpace===bi?null:Ze.getPrimaries(S.colorSpace),ce=S.colorSpace===bi||Ne===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const fe=S.isCompressedTexture||S.image[0].isCompressedTexture,De=S.image[0]&&S.image[0].isDataTexture,ae=[];for(let H=0;H<6;H++)!fe&&!De?ae[H]=p(S.image[H],!1,!0,r.maxCubemapSize):ae[H]=De?S.image[H].image:S.image[H],ae[H]=He(S,ae[H]);const xt=ae[0],Ge=u(xt)||o,Te=a.convert(S.format,S.colorSpace),ye=a.convert(S.type),Se=P(S.internalFormat,Te,ye,S.colorSpace),Ye=o&&S.isVideoTexture!==!0,Le=ne.__version===void 0||Q===!0,at=re.dataReady;let D=w(S,xt,Ge);B(t.TEXTURE_CUBE_MAP,S,Ge);let de;if(fe){Ye&&Le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,D,Se,xt.width,xt.height);for(let H=0;H<6;H++){de=ae[H].mipmaps;for(let oe=0;oe<de.length;oe++){const he=de[oe];S.format!==Fn?Te!==null?Ye?at&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe,0,0,he.width,he.height,Te,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe,Se,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe,0,0,he.width,he.height,Te,ye,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe,Se,he.width,he.height,0,Te,ye,he.data)}}}else{if(de=S.mipmaps,Ye&&Le){de.length>0&&D++;const H=mt(ae[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,D,Se,H.width,H.height)}for(let H=0;H<6;H++)if(De){Ye?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,ae[H].width,ae[H].height,Te,ye,ae[H].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Se,ae[H].width,ae[H].height,0,Te,ye,ae[H].data);for(let oe=0;oe<de.length;oe++){const Xe=de[oe].image[H].image;Ye?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe+1,0,0,Xe.width,Xe.height,Te,ye,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe+1,Se,Xe.width,Xe.height,0,Te,ye,Xe.data)}}else{Ye?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Te,ye,ae[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Se,Te,ye,ae[H]);for(let oe=0;oe<de.length;oe++){const he=de[oe];Ye?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe+1,0,0,Te,ye,he.image[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe+1,Se,Te,ye,he.image[H])}}}g(S,Ge)&&M(t.TEXTURE_CUBE_MAP),ne.__version=re.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function b(A,S,X,Q,re,ne){const Ne=a.convert(X.format,X.colorSpace),Re=a.convert(X.type),ce=P(X.internalFormat,Ne,Re,X.colorSpace);if(!i.get(S).__hasExternalTextures){const De=Math.max(1,S.width>>ne),ae=Math.max(1,S.height>>ne);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ne,ce,De,ae,S.depth,0,Ne,Re,null):n.texImage2D(re,ne,ce,De,ae,0,Ne,Re,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),je(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,re,i.get(X).__webglTexture,0,_e(S)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,re,i.get(X).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function K(A,S,X){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let Q=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(X||je(S)){const re=S.depthTexture;re&&re.isDepthTexture&&(re.type===oi?Q=t.DEPTH_COMPONENT32F:re.type===Ii&&(Q=t.DEPTH_COMPONENT24));const ne=_e(S);je(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,Q,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,Q,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,Q,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const Q=_e(S);X&&je(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,S.width,S.height):je(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const Q=S.textures;for(let re=0;re<Q.length;re++){const ne=Q[re],Ne=a.convert(ne.format,ne.colorSpace),Re=a.convert(ne.type),ce=P(ne.internalFormat,Ne,Re,ne.colorSpace),fe=_e(S);X&&je(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,ce,S.width,S.height):je(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,ce,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ce,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function xe(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);const Q=i.get(S.depthTexture).__webglTexture,re=_e(S);if(S.depthTexture.format===Sr)je(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Ta)je(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ve(A){const S=i.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");xe(S.__webglFramebuffer,A)}else if(X){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=t.createRenderbuffer(),K(S.__webglDepthbuffer[Q],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),K(S.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function F(A,S,X){const Q=i.get(A);S!==void 0&&b(Q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&ve(A)}function ft(A){const S=A.texture,X=i.get(A),Q=i.get(S);A.addEventListener("dispose",Z);const re=A.textures,ne=A.isWebGLCubeRenderTarget===!0,Ne=re.length>1,Re=u(A)||o;if(Ne||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=S.version,s.memory.textures++),ne){X.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(o&&S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[ce]=[];for(let fe=0;fe<S.mipmaps.length;fe++)X.__webglFramebuffer[ce][fe]=t.createFramebuffer()}else X.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)X.__webglFramebuffer[ce]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(Ne)if(r.drawBuffers)for(let ce=0,fe=re.length;ce<fe;ce++){const De=i.get(re[ce]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),s.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&je(A)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ce=0;ce<re.length;ce++){const fe=re[ce];X.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[ce]);const De=a.convert(fe.format,fe.colorSpace),ae=a.convert(fe.type),xt=P(fe.internalFormat,De,ae,fe.colorSpace,A.isXRRenderTarget===!0),Ge=_e(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,xt,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,X.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),K(X.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),B(t.TEXTURE_CUBE_MAP,S,Re);for(let ce=0;ce<6;ce++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)b(X.__webglFramebuffer[ce][fe],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else b(X.__webglFramebuffer[ce],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(S,Re)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ne){for(let ce=0,fe=re.length;ce<fe;ce++){const De=re[ce],ae=i.get(De);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),B(t.TEXTURE_2D,De,Re),b(X.__webglFramebuffer,A,De,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),g(De,Re)&&M(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ce,Q.__webglTexture),B(ce,S,Re),o&&S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)b(X.__webglFramebuffer[fe],A,S,t.COLOR_ATTACHMENT0,ce,fe);else b(X.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,ce,0);g(S,Re)&&M(ce),n.unbindTexture()}A.depthBuffer&&ve(A)}function pe(A){const S=u(A)||o,X=A.textures;for(let Q=0,re=X.length;Q<re;Q++){const ne=X[Q];if(g(ne,S)){const Ne=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Re=i.get(ne).__webglTexture;n.bindTexture(Ne,Re),M(Ne),n.unbindTexture()}}}function Ee(A){if(o&&A.samples>0&&je(A)===!1){const S=A.textures,X=A.width,Q=A.height;let re=t.COLOR_BUFFER_BIT;const ne=[],Ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(A),ce=S.length>1;if(ce)for(let fe=0;fe<S.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let fe=0;fe<S.length;fe++){ne.push(t.COLOR_ATTACHMENT0+fe),A.depthBuffer&&ne.push(Ne);const De=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;if(De===!1&&(A.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),ce&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[fe]),De===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ne]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ne])),ce){const ae=i.get(S[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ae,0)}t.blitFramebuffer(0,0,X,Q,0,0,X,Q,re,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let fe=0;fe<S.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,Re.__webglColorRenderbuffer[fe]);const De=i.get(S[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}}function _e(A){return Math.min(r.maxSamples,A.samples)}function je(A){const S=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ke(A){const S=s.render.frame;f.get(A)!==S&&(f.set(A,S),A.update())}function He(A,S){const X=A.colorSpace,Q=A.format,re=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ku||X!==Qi&&X!==bi&&(Ze.getTransfer(X)===it?o===!1?e.has("EXT_sRGB")===!0&&Q===Fn?(A.format=ku,A.minFilter=Jt,A.generateMipmaps=!1):S=dv.sRGBToLinear(S):(Q!==Fn||re!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function mt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(d.width=A.naturalWidth||A.width,d.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(d.width=A.displayWidth,d.height=A.displayHeight):(d.width=A.width,d.height=A.height),d}this.allocateTextureUnit=$,this.resetTextureUnits=L,this.setTexture2D=J,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=V,this.rebindTextures=F,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=b,this.useMultisampledRTT=je}function p1(t,e,n){const i=n.isWebGL2;function r(a,s=bi){let o;const l=Ze.getTransfer(s);if(a===Wi)return t.UNSIGNED_BYTE;if(a===nv)return t.UNSIGNED_SHORT_4_4_4_4;if(a===iv)return t.UNSIGNED_SHORT_5_5_5_1;if(a===Xx)return t.BYTE;if(a===qx)return t.SHORT;if(a===zd)return t.UNSIGNED_SHORT;if(a===tv)return t.INT;if(a===Ii)return t.UNSIGNED_INT;if(a===oi)return t.FLOAT;if(a===Es)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===Yx)return t.ALPHA;if(a===Fn)return t.RGBA;if(a===$x)return t.LUMINANCE;if(a===Kx)return t.LUMINANCE_ALPHA;if(a===Sr)return t.DEPTH_COMPONENT;if(a===Ta)return t.DEPTH_STENCIL;if(a===ku)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===Zx)return t.RED;if(a===rv)return t.RED_INTEGER;if(a===Qx)return t.RG;if(a===av)return t.RG_INTEGER;if(a===sv)return t.RGBA_INTEGER;if(a===sc||a===oc||a===lc||a===cc)if(l===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===sc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===oc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===lc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===cc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===sc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===oc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===lc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===cc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===mh||a===gh||a===vh||a===_h)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===mh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===gh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===vh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===_h)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ov)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===xh||a===yh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===xh)return l===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===yh)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Sh||a===Mh||a===Eh||a===Th||a===wh||a===Ah||a===Ch||a===Rh||a===bh||a===Ph||a===Lh||a===Ih||a===Nh||a===Dh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===Sh)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Mh)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Eh)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Th)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===wh)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ah)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Ch)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Rh)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===bh)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Ph)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Lh)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ih)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Nh)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Dh)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===uc||a===Uh||a===Fh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===uc)return l===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Uh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Fh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Jx||a===Oh||a===kh||a===zh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===uc)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Oh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===kh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===zh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===yr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:r}}class m1 extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ni extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g1={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(g1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ni;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const v1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_1=`
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

}`;class x1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new $t,a=e.properties.get(r);a.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Yi({extensions:{fragDepth:!0},vertexShader:v1,fragmentShader:_1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Gt(new Pa(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class y1 extends ba{constructor(e,n){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,v=null;const x=new x1,p=n.getContextAttributes();let u=null,_=null;const g=[],M=[],P=new qe;let w=null;const T=new Mn;T.layers.enable(1),T.viewport=new bt;const I=new Mn;I.layers.enable(2),I.viewport=new bt;const Z=[T,I],y=new m1;y.layers.enable(1),y.layers.enable(2);let C=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let te=g[B];return te===void 0&&(te=new Oc,g[B]=te),te.getTargetRaySpace()},this.getControllerGrip=function(B){let te=g[B];return te===void 0&&(te=new Oc,g[B]=te),te.getGripSpace()},this.getHand=function(B){let te=g[B];return te===void 0&&(te=new Oc,g[B]=te),te.getHandSpace()};function Y(B){const te=M.indexOf(B.inputSource);if(te===-1)return;const ue=g[te];ue!==void 0&&(ue.update(B.inputSource,B.frame,c||s),ue.dispatchEvent({type:B.type,data:B.inputSource}))}function L(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",$);for(let B=0;B<g.length;B++){const te=M[B];te!==null&&(M[B]=null,g[B].disconnect(te))}C=null,j=null,x.reset(),e.setRenderTarget(u),m=null,h=null,f=null,r=null,_=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",L),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Cr(m.framebufferWidth,m.framebufferHeight,{format:Fn,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,ue=null,we=null;p.depth&&(we=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=p.stencil?Ta:Sr,ue=p.stencil?yr:Ii);const b={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:a};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(b),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Cr(h.textureWidth,h.textureHeight,{format:Fn,type:Wi,depthTexture:new Ev(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const K=e.properties.get(_);K.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(B){for(let te=0;te<B.removed.length;te++){const ue=B.removed[te],we=M.indexOf(ue);we>=0&&(M[we]=null,g[we].disconnect(ue))}for(let te=0;te<B.added.length;te++){const ue=B.added[te];let we=M.indexOf(ue);if(we===-1){for(let K=0;K<g.length;K++)if(K>=M.length){M.push(ue),we=K;break}else if(M[K]===null){M[K]=ue,we=K;break}if(we===-1)break}const b=g[we];b&&b.connect(ue)}}const q=new O,J=new O;function N(B,te,ue){q.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(ue.matrixWorld);const we=q.distanceTo(J),b=te.projectionMatrix.elements,K=ue.projectionMatrix.elements,xe=b[14]/(b[10]-1),ve=b[14]/(b[10]+1),F=(b[9]+1)/b[5],ft=(b[9]-1)/b[5],pe=(b[8]-1)/b[0],Ee=(K[8]+1)/K[0],_e=xe*pe,je=xe*Ee,ke=we/(-pe+Ee),He=ke*-pe;te.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(He),B.translateZ(ke),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const mt=xe+ke,A=ve+ke,S=_e-He,X=je+(we-He),Q=F*ve/A*mt,re=ft*ve/A*mt;B.projectionMatrix.makePerspective(S,X,Q,re,mt,A),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function k(B,te){te===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(te.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;x.texture!==null&&(B.near=x.depthNear,B.far=x.depthFar),y.near=I.near=T.near=B.near,y.far=I.far=T.far=B.far,(C!==y.near||j!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,j=y.far,T.near=C,T.far=j,I.near=C,I.far=j,T.updateProjectionMatrix(),I.updateProjectionMatrix(),B.updateProjectionMatrix());const te=B.parent,ue=y.cameras;k(y,te);for(let we=0;we<ue.length;we++)k(ue[we],te);ue.length===2?N(y,T,I):y.projectionMatrix.copy(T.projectionMatrix),V(B,y,te)};function V(B,te,ue){ue===null?B.matrix.copy(te.matrixWorld):(B.matrix.copy(ue.matrixWorld),B.matrix.invert(),B.matrix.multiply(te.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(te.projectionMatrix),B.projectionMatrixInverse.copy(te.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=zu*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return x.texture!==null};let ee=null;function se(B,te){if(d=te.getViewerPose(c||s),v=te,d!==null){const ue=d.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let we=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,we=!0);for(let K=0;K<ue.length;K++){const xe=ue[K];let ve=null;if(m!==null)ve=m.getViewport(xe);else{const ft=f.getViewSubImage(h,xe);ve=ft.viewport,K===0&&(e.setRenderTargetTextures(_,ft.colorTexture,h.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(_))}let F=Z[K];F===void 0&&(F=new Mn,F.layers.enable(K),F.viewport=new bt,Z[K]=F),F.matrix.fromArray(xe.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(xe.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(ve.x,ve.y,ve.width,ve.height),K===0&&(y.matrix.copy(F.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),we===!0&&y.cameras.push(F)}const b=r.enabledFeatures;if(b&&b.includes("depth-sensing")){const K=f.getDepthInformation(ue[0]);K&&K.isValid&&K.texture&&x.init(e,K,r.renderState)}}for(let ue=0;ue<g.length;ue++){const we=M[ue],b=g[ue];we!==null&&b!==void 0&&b.update(we,te,c||s)}x.render(e,y),ee&&ee(B,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),v=null}const Ce=new Sv;Ce.setAnimationLoop(se),this.setAnimationLoop=function(B){ee=B},this.dispose=function(){}}}const or=new Kn,S1=new _t;function M1(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,_v(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,_,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(p,u):u.isMeshToonMaterial?(a(p,u),f(p,u)):u.isMeshPhongMaterial?(a(p,u),d(p,u)):u.isMeshStandardMaterial?(a(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(a(p,u),v(p,u)):u.isMeshDepthMaterial?a(p,u):u.isMeshDistanceMaterial?(a(p,u),x(p,u)):u.isMeshNormalMaterial?a(p,u):u.isLineBasicMaterial?(s(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,_,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===on&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===on&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const _=e.get(u),g=_.envMap,M=_.envMapRotation;if(g&&(p.envMap.value=g,or.copy(M),or.x*=-1,or.y*=-1,or.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),p.envMapRotation.value.setFromMatrix4(S1.makeRotationFromEuler(or)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const P=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*P,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function s(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,_,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===on&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const _=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function E1(t,e,n,i){let r={},a={},s=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const M=g.program;i.uniformBlockBinding(_,M)}function c(_,g){let M=r[_.id];M===void 0&&(v(_),M=d(_),r[_.id]=M,_.addEventListener("dispose",p));const P=g.program;i.updateUBOMapping(_,P);const w=e.render.frame;a[_.id]!==w&&(h(_),a[_.id]=w)}function d(_){const g=f();_.__bindingPointIndex=g;const M=t.createBuffer(),P=_.__size,w=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function f(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],M=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let w=0,T=M.length;w<T;w++){const I=Array.isArray(M[w])?M[w]:[M[w]];for(let Z=0,y=I.length;Z<y;Z++){const C=I[Z];if(m(C,w,Z,P)===!0){const j=C.__offset,Y=Array.isArray(C.value)?C.value:[C.value];let L=0;for(let $=0;$<Y.length;$++){const q=Y[$],J=x(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,j+L,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,L),L+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,g,M,P){const w=_.value,T=g+"_"+M;if(P[T]===void 0)return typeof w=="number"||typeof w=="boolean"?P[T]=w:P[T]=w.clone(),!0;{const I=P[T];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return P[T]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function v(_){const g=_.uniforms;let M=0;const P=16;for(let T=0,I=g.length;T<I;T++){const Z=Array.isArray(g[T])?g[T]:[g[T]];for(let y=0,C=Z.length;y<C;y++){const j=Z[y],Y=Array.isArray(j.value)?j.value:[j.value];for(let L=0,$=Y.length;L<$;L++){const q=Y[L],J=x(q),N=M%P;N!==0&&P-N<J.boundary&&(M+=P-N),j.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=M,M+=J.storage}}}const w=M%P;return w>0&&(M+=P-w),_.__size=M,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const M=s.indexOf(g.__bindingPointIndex);s.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete a[g.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);s=[],r={},a={}}return{bind:l,update:c,dispose:u}}class bv{constructor(e={}){const{canvas:n=dy(),context:i=null,depth:r=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nn,this._useLegacyLights=!1,this.toneMapping=Vi,this.toneMappingExposure=1;const g=this;let M=!1,P=0,w=0,T=null,I=-1,Z=null;const y=new bt,C=new bt;let j=null;const Y=new Be(0);let L=0,$=n.width,q=n.height,J=1,N=null,k=null;const V=new bt(0,0,$,q),ee=new bt(0,0,$,q);let se=!1;const Ce=new Gd;let B=!1,te=!1,ue=null;const we=new _t,b=new qe,K=new O,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return T===null?J:1}let F=i;function ft(E,U){for(let G=0;G<E.length;G++){const W=E[G],z=n.getContext(W,U);if(z!==null)return z}return null}try{const E={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kd}`),n.addEventListener("webglcontextlost",at,!1),n.addEventListener("webglcontextrestored",D,!1),n.addEventListener("webglcontextcreationerror",de,!1),F===null){const U=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&U.shift(),F=ft(U,E),F===null)throw ft(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let pe,Ee,_e,je,ke,He,mt,A,S,X,Q,re,ne,Ne,Re,ce,fe,De,ae,xt,Ge,Te,ye,Se;function Ye(){pe=new bE(F),Ee=new EE(F,pe,e),pe.init(Ee),Te=new p1(F,pe,Ee),_e=new f1(F,pe,Ee),je=new IE(F),ke=new QT,He=new h1(F,pe,_e,ke,Ee,Te,je),mt=new wE(g),A=new RE(g),S=new ky(F,Ee),ye=new SE(F,pe,S,Ee),X=new PE(F,S,je,ye),Q=new FE(F,X,S,je),ae=new UE(F,Ee,He),ce=new TE(ke),re=new ZT(g,mt,A,pe,Ee,ye,ce),ne=new M1(g,ke),Ne=new e1,Re=new s1(pe,Ee),De=new yE(g,mt,A,_e,Q,h,l),fe=new d1(g,Q,Ee),Se=new E1(F,je,Ee,_e),xt=new ME(F,pe,je,Ee),Ge=new LE(F,pe,je,Ee),je.programs=re.programs,g.capabilities=Ee,g.extensions=pe,g.properties=ke,g.renderLists=Ne,g.shadowMap=fe,g.state=_e,g.info=je}Ye();const Le=new y1(g,F);this.xr=Le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=pe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=pe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize($,q,!1))},this.getSize=function(E){return E.set($,q)},this.setSize=function(E,U,G=!0){if(Le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,q=U,n.width=Math.floor(E*J),n.height=Math.floor(U*J),G===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set($*J,q*J).floor()},this.setDrawingBufferSize=function(E,U,G){$=E,q=U,J=G,n.width=Math.floor(E*G),n.height=Math.floor(U*G),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(V)},this.setViewport=function(E,U,G,W){E.isVector4?V.set(E.x,E.y,E.z,E.w):V.set(E,U,G,W),_e.viewport(y.copy(V).multiplyScalar(J).round())},this.getScissor=function(E){return E.copy(ee)},this.setScissor=function(E,U,G,W){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,U,G,W),_e.scissor(C.copy(ee).multiplyScalar(J).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(E){_e.setScissorTest(se=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){k=E},this.getClearColor=function(E){return E.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(E=!0,U=!0,G=!0){let W=0;if(E){let z=!1;if(T!==null){const me=T.texture.format;z=me===sv||me===av||me===rv}if(z){const me=T.texture.type,Me=me===Wi||me===Ii||me===zd||me===yr||me===nv||me===iv,Ae=De.getClearColor(),be=De.getClearAlpha(),ze=Ae.r,Pe=Ae.g,Ie=Ae.b;Me?(m[0]=ze,m[1]=Pe,m[2]=Ie,m[3]=be,F.clearBufferuiv(F.COLOR,0,m)):(v[0]=ze,v[1]=Pe,v[2]=Ie,v[3]=be,F.clearBufferiv(F.COLOR,0,v))}else W|=F.COLOR_BUFFER_BIT}U&&(W|=F.DEPTH_BUFFER_BIT),G&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",at,!1),n.removeEventListener("webglcontextrestored",D,!1),n.removeEventListener("webglcontextcreationerror",de,!1),Ne.dispose(),Re.dispose(),ke.dispose(),mt.dispose(),A.dispose(),Q.dispose(),ye.dispose(),Se.dispose(),re.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",vn),Le.removeEventListener("sessionend",et),ue&&(ue.dispose(),ue=null),Wt.stop()};function at(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=je.autoReset,U=fe.enabled,G=fe.autoUpdate,W=fe.needsUpdate,z=fe.type;Ye(),je.autoReset=E,fe.enabled=U,fe.autoUpdate=G,fe.needsUpdate=W,fe.type=z}function de(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function H(E){const U=E.target;U.removeEventListener("dispose",H),oe(U)}function oe(E){he(E),ke.remove(E)}function he(E){const U=ke.get(E).programs;U!==void 0&&(U.forEach(function(G){re.releaseProgram(G)}),E.isShaderMaterial&&re.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,G,W,z,me){U===null&&(U=xe);const Me=z.isMesh&&z.matrixWorld.determinant()<0,Ae=Iv(E,U,G,W,z);_e.setMaterial(W,Me);let be=G.index,ze=1;if(W.wireframe===!0){if(be=X.getWireframeAttribute(G),be===void 0)return;ze=2}const Pe=G.drawRange,Ie=G.attributes.position;let gt=Pe.start*ze,ln=(Pe.start+Pe.count)*ze;me!==null&&(gt=Math.max(gt,me.start*ze),ln=Math.min(ln,(me.start+me.count)*ze)),be!==null?(gt=Math.max(gt,0),ln=Math.min(ln,be.count)):Ie!=null&&(gt=Math.max(gt,0),ln=Math.min(ln,Ie.count));const At=ln-gt;if(At<0||At===1/0)return;ye.setup(z,W,Ae,G,be);let Zn,lt=xt;if(be!==null&&(Zn=S.get(be),lt=Ge,lt.setIndex(Zn)),z.isMesh)W.wireframe===!0?(_e.setLineWidth(W.wireframeLinewidth*ve()),lt.setMode(F.LINES)):lt.setMode(F.TRIANGLES);else if(z.isLine){let Ue=W.linewidth;Ue===void 0&&(Ue=1),_e.setLineWidth(Ue*ve()),z.isLineSegments?lt.setMode(F.LINES):z.isLineLoop?lt.setMode(F.LINE_LOOP):lt.setMode(F.LINE_STRIP)}else z.isPoints?lt.setMode(F.POINTS):z.isSprite&&lt.setMode(F.TRIANGLES);if(z.isBatchedMesh)lt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)lt.renderInstances(gt,At,z.count);else if(G.isInstancedBufferGeometry){const Ue=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,bl=Math.min(G.instanceCount,Ue);lt.renderInstances(gt,At,bl)}else lt.render(gt,At)};function Xe(E,U,G){E.transparent===!0&&E.side===si&&E.forceSinglePass===!1?(E.side=on,E.needsUpdate=!0,Ds(E,U,G),E.side=qi,E.needsUpdate=!0,Ds(E,U,G),E.side=si):Ds(E,U,G)}this.compile=function(E,U,G=null){G===null&&(G=E),p=Re.get(G),p.init(),_.push(p),G.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==G&&E.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(g._useLegacyLights);const W=new Set;return E.traverse(function(z){const me=z.material;if(me)if(Array.isArray(me))for(let Me=0;Me<me.length;Me++){const Ae=me[Me];Xe(Ae,G,z),W.add(Ae)}else Xe(me,G,z),W.add(me)}),_.pop(),p=null,W},this.compileAsync=function(E,U,G=null){const W=this.compile(E,U,G);return new Promise(z=>{function me(){if(W.forEach(function(Me){ke.get(Me).currentProgram.isReady()&&W.delete(Me)}),W.size===0){z(E);return}setTimeout(me,10)}pe.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Je=null;function Lt(E){Je&&Je(E)}function vn(){Wt.stop()}function et(){Wt.start()}const Wt=new Sv;Wt.setAnimationLoop(Lt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(E){Je=E,Le.setAnimationLoop(E),E===null?Wt.stop():Wt.start()},Le.addEventListener("sessionstart",vn),Le.addEventListener("sessionend",et),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(U),U=Le.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,U,T),p=Re.get(E,_.length),p.init(),_.push(p),we.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ce.setFromProjectionMatrix(we),te=this.localClippingEnabled,B=ce.init(this.clippingPlanes,te),x=Ne.get(E,u.length),x.init(),u.push(x),Bn(E,U,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(N,k),this.info.render.frame++,B===!0&&ce.beginShadows();const G=p.state.shadowsArray;if(fe.render(G,E,U),B===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1)&&De.render(x,E),p.setupLights(g._useLegacyLights),U.isArrayCamera){const W=U.cameras;for(let z=0,me=W.length;z<me;z++){const Me=W[z];Xd(x,E,Me,Me.viewport)}}else Xd(x,E,U);T!==null&&(He.updateMultisampleRenderTarget(T),He.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(g,E,U),ye.resetDefaultState(),I=-1,Z=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Bn(E,U,G,W){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ce.intersectsSprite(E)){W&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(we);const Me=Q.update(E),Ae=E.material;Ae.visible&&x.push(E,Me,Ae,G,K.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ce.intersectsObject(E))){const Me=Q.update(E),Ae=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),K.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),K.copy(Me.boundingSphere.center)),K.applyMatrix4(E.matrixWorld).applyMatrix4(we)),Array.isArray(Ae)){const be=Me.groups;for(let ze=0,Pe=be.length;ze<Pe;ze++){const Ie=be[ze],gt=Ae[Ie.materialIndex];gt&&gt.visible&&x.push(E,Me,gt,G,K.z,Ie)}}else Ae.visible&&x.push(E,Me,Ae,G,K.z,null)}}const me=E.children;for(let Me=0,Ae=me.length;Me<Ae;Me++)Bn(me[Me],U,G,W)}function Xd(E,U,G,W){const z=E.opaque,me=E.transmissive,Me=E.transparent;p.setupLightsView(G),B===!0&&ce.setGlobalState(g.clippingPlanes,G),me.length>0&&Lv(z,me,U,G),W&&_e.viewport(y.copy(W)),z.length>0&&Ns(z,U,G),me.length>0&&Ns(me,U,G),Me.length>0&&Ns(Me,U,G),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Lv(E,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const me=Ee.isWebGL2;ue===null&&(ue=new Cr(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?Es:Wi,minFilter:vr,samples:me?4:0})),g.getDrawingBufferSize(b),me?ue.setSize(b.x,b.y):ue.setSize(Bu(b.x),Bu(b.y));const Me=g.getRenderTarget();g.setRenderTarget(ue),g.getClearColor(Y),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear();const Ae=g.toneMapping;g.toneMapping=Vi,Ns(E,G,W),He.updateMultisampleRenderTarget(ue),He.updateRenderTargetMipmap(ue);let be=!1;for(let ze=0,Pe=U.length;ze<Pe;ze++){const Ie=U[ze],gt=Ie.object,ln=Ie.geometry,At=Ie.material,Zn=Ie.group;if(At.side===si&&gt.layers.test(W.layers)){const lt=At.side;At.side=on,At.needsUpdate=!0,qd(gt,G,W,ln,At,Zn),At.side=lt,At.needsUpdate=!0,be=!0}}be===!0&&(He.updateMultisampleRenderTarget(ue),He.updateRenderTargetMipmap(ue)),g.setRenderTarget(Me),g.setClearColor(Y,L),g.toneMapping=Ae}function Ns(E,U,G){const W=U.isScene===!0?U.overrideMaterial:null;for(let z=0,me=E.length;z<me;z++){const Me=E[z],Ae=Me.object,be=Me.geometry,ze=W===null?Me.material:W,Pe=Me.group;Ae.layers.test(G.layers)&&qd(Ae,U,G,be,ze,Pe)}}function qd(E,U,G,W,z,me){E.onBeforeRender(g,U,G,W,z,me),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(g,U,G,W,E,me),z.transparent===!0&&z.side===si&&z.forceSinglePass===!1?(z.side=on,z.needsUpdate=!0,g.renderBufferDirect(G,U,W,z,E,me),z.side=qi,z.needsUpdate=!0,g.renderBufferDirect(G,U,W,z,E,me),z.side=si):g.renderBufferDirect(G,U,W,z,E,me),E.onAfterRender(g,U,G,W,z,me)}function Ds(E,U,G){U.isScene!==!0&&(U=xe);const W=ke.get(E),z=p.state.lights,me=p.state.shadowsArray,Me=z.state.version,Ae=re.getParameters(E,z.state,me,U,G),be=re.getProgramCacheKey(Ae);let ze=W.programs;W.environment=E.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(E.isMeshStandardMaterial?A:mt).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",H),ze=new Map,W.programs=ze);let Pe=ze.get(be);if(Pe!==void 0){if(W.currentProgram===Pe&&W.lightsStateVersion===Me)return $d(E,Ae),Pe}else Ae.uniforms=re.getUniforms(E),E.onBuild(G,Ae,g),E.onBeforeCompile(Ae,g),Pe=re.acquireProgram(Ae,be),ze.set(be,Pe),W.uniforms=Ae.uniforms;const Ie=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=ce.uniform),$d(E,Ae),W.needsLights=Dv(E),W.lightsStateVersion=Me,W.needsLights&&(Ie.ambientLightColor.value=z.state.ambient,Ie.lightProbe.value=z.state.probe,Ie.directionalLights.value=z.state.directional,Ie.directionalLightShadows.value=z.state.directionalShadow,Ie.spotLights.value=z.state.spot,Ie.spotLightShadows.value=z.state.spotShadow,Ie.rectAreaLights.value=z.state.rectArea,Ie.ltc_1.value=z.state.rectAreaLTC1,Ie.ltc_2.value=z.state.rectAreaLTC2,Ie.pointLights.value=z.state.point,Ie.pointLightShadows.value=z.state.pointShadow,Ie.hemisphereLights.value=z.state.hemi,Ie.directionalShadowMap.value=z.state.directionalShadowMap,Ie.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ie.spotShadowMap.value=z.state.spotShadowMap,Ie.spotLightMatrix.value=z.state.spotLightMatrix,Ie.spotLightMap.value=z.state.spotLightMap,Ie.pointShadowMap.value=z.state.pointShadowMap,Ie.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Pe,W.uniformsList=null,Pe}function Yd(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Io.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function $d(E,U){const G=ke.get(E);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Iv(E,U,G,W,z){U.isScene!==!0&&(U=xe),He.resetTextureUnits();const me=U.fog,Me=W.isMeshStandardMaterial?U.environment:null,Ae=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Qi,be=(W.isMeshStandardMaterial?A:mt).get(W.envMap||Me),ze=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Pe=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ie=!!G.morphAttributes.position,gt=!!G.morphAttributes.normal,ln=!!G.morphAttributes.color;let At=Vi;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(At=g.toneMapping);const Zn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,lt=Zn!==void 0?Zn.length:0,Ue=ke.get(W),bl=p.state.lights;if(B===!0&&(te===!0||E!==Z)){const _n=E===Z&&W.id===I;ce.setState(W,E,_n)}let st=!1;W.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==bl.state.version||Ue.outputColorSpace!==Ae||z.isBatchedMesh&&Ue.batching===!1||!z.isBatchedMesh&&Ue.batching===!0||z.isInstancedMesh&&Ue.instancing===!1||!z.isInstancedMesh&&Ue.instancing===!0||z.isSkinnedMesh&&Ue.skinning===!1||!z.isSkinnedMesh&&Ue.skinning===!0||z.isInstancedMesh&&Ue.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ue.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ue.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ue.instancingMorph===!1&&z.morphTexture!==null||Ue.envMap!==be||W.fog===!0&&Ue.fog!==me||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ce.numPlanes||Ue.numIntersection!==ce.numIntersection)||Ue.vertexAlphas!==ze||Ue.vertexTangents!==Pe||Ue.morphTargets!==Ie||Ue.morphNormals!==gt||Ue.morphColors!==ln||Ue.toneMapping!==At||Ee.isWebGL2===!0&&Ue.morphTargetsCount!==lt)&&(st=!0):(st=!0,Ue.__version=W.version);let er=Ue.currentProgram;st===!0&&(er=Ds(W,U,z));let Kd=!1,Ia=!1,Pl=!1;const Ft=er.getUniforms(),tr=Ue.uniforms;if(_e.useProgram(er.program)&&(Kd=!0,Ia=!0,Pl=!0),W.id!==I&&(I=W.id,Ia=!0),Kd||Z!==E){Ft.setValue(F,"projectionMatrix",E.projectionMatrix),Ft.setValue(F,"viewMatrix",E.matrixWorldInverse);const _n=Ft.map.cameraPosition;_n!==void 0&&_n.setValue(F,K.setFromMatrixPosition(E.matrixWorld)),Ee.logarithmicDepthBuffer&&Ft.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ft.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,Ia=!0,Pl=!0)}if(z.isSkinnedMesh){Ft.setOptional(F,z,"bindMatrix"),Ft.setOptional(F,z,"bindMatrixInverse");const _n=z.skeleton;_n&&(Ee.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),Ft.setValue(F,"boneTexture",_n.boneTexture,He)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Ft.setOptional(F,z,"batchingTexture"),Ft.setValue(F,"batchingTexture",z._matricesTexture,He));const Ll=G.morphAttributes;if((Ll.position!==void 0||Ll.normal!==void 0||Ll.color!==void 0&&Ee.isWebGL2===!0)&&ae.update(z,G,er),(Ia||Ue.receiveShadow!==z.receiveShadow)&&(Ue.receiveShadow=z.receiveShadow,Ft.setValue(F,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(tr.envMap.value=be,tr.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Ia&&(Ft.setValue(F,"toneMappingExposure",g.toneMappingExposure),Ue.needsLights&&Nv(tr,Pl),me&&W.fog===!0&&ne.refreshFogUniforms(tr,me),ne.refreshMaterialUniforms(tr,W,J,q,ue),Io.upload(F,Yd(Ue),tr,He)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Io.upload(F,Yd(Ue),tr,He),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ft.setValue(F,"center",z.center),Ft.setValue(F,"modelViewMatrix",z.modelViewMatrix),Ft.setValue(F,"normalMatrix",z.normalMatrix),Ft.setValue(F,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const _n=W.uniformsGroups;for(let Il=0,Uv=_n.length;Il<Uv;Il++)if(Ee.isWebGL2){const Zd=_n[Il];Se.update(Zd,er),Se.bind(Zd,er)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return er}function Nv(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Dv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,U,G){ke.get(E.texture).__webglTexture=U,ke.get(E.depthTexture).__webglTexture=G;const W=ke.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const G=ke.get(E);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,G=0){T=E,P=U,w=G;let W=!0,z=null,me=!1,Me=!1;if(E){const be=ke.get(E);be.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(F.FRAMEBUFFER,null),W=!1):be.__webglFramebuffer===void 0?He.setupRenderTarget(E):be.__hasExternalTextures&&He.rebindTextures(E,ke.get(E.texture).__webglTexture,ke.get(E.depthTexture).__webglTexture);const ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Me=!0);const Pe=ke.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?z=Pe[U][G]:z=Pe[U],me=!0):Ee.isWebGL2&&E.samples>0&&He.useMultisampledRTT(E)===!1?z=ke.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?z=Pe[G]:z=Pe,y.copy(E.viewport),C.copy(E.scissor),j=E.scissorTest}else y.copy(V).multiplyScalar(J).floor(),C.copy(ee).multiplyScalar(J).floor(),j=se;if(_e.bindFramebuffer(F.FRAMEBUFFER,z)&&Ee.drawBuffers&&W&&_e.drawBuffers(E,z),_e.viewport(y),_e.scissor(C),_e.setScissorTest(j),me){const be=ke.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,G)}else if(Me){const be=ke.get(E.texture),ze=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.__webglTexture,G||0,ze)}I=-1},this.readRenderTargetPixels=function(E,U,G,W,z,me,Me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){_e.bindFramebuffer(F.FRAMEBUFFER,Ae);try{const be=E.texture,ze=be.format,Pe=be.type;if(ze!==Fn&&Te.convert(ze)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Pe===Es&&(pe.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Pe!==Wi&&Te.convert(Pe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===oi&&(Ee.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-W&&G>=0&&G<=E.height-z&&F.readPixels(U,G,W,z,Te.convert(ze),Te.convert(Pe),me)}finally{const be=T!==null?ke.get(T).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(E,U,G=0){const W=Math.pow(2,-G),z=Math.floor(U.image.width*W),me=Math.floor(U.image.height*W);He.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,E.x,E.y,z,me),_e.unbindTexture()},this.copyTextureToTexture=function(E,U,G,W=0){const z=U.image.width,me=U.image.height,Me=Te.convert(G.format),Ae=Te.convert(G.type);He.setTexture2D(G,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,E.x,E.y,z,me,Me,Ae,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,Me,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,W,E.x,E.y,Me,Ae,U.image),W===0&&G.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(E,U,G,W,z=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=Math.round(E.max.x-E.min.x),Me=Math.round(E.max.y-E.min.y),Ae=E.max.z-E.min.z+1,be=Te.convert(W.format),ze=Te.convert(W.type);let Pe;if(W.isData3DTexture)He.setTexture3D(W,0),Pe=F.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)He.setTexture2DArray(W,0),Pe=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Ie=F.getParameter(F.UNPACK_ROW_LENGTH),gt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ln=F.getParameter(F.UNPACK_SKIP_PIXELS),At=F.getParameter(F.UNPACK_SKIP_ROWS),Zn=F.getParameter(F.UNPACK_SKIP_IMAGES),lt=G.isCompressedTexture?G.mipmaps[z]:G.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,lt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,lt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),G.isDataTexture||G.isData3DTexture?F.texSubImage3D(Pe,z,U.x,U.y,U.z,me,Me,Ae,be,ze,lt.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(Pe,z,U.x,U.y,U.z,me,Me,Ae,be,lt.data):F.texSubImage3D(Pe,z,U.x,U.y,U.z,me,Me,Ae,be,ze,lt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ie),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ln),F.pixelStorei(F.UNPACK_SKIP_ROWS,At),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Zn),z===0&&W.generateMipmaps&&F.generateMipmap(Pe),_e.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?He.setTextureCube(E,0):E.isData3DTexture?He.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?He.setTexture2DArray(E,0):He.setTexture2D(E,0),_e.unbindTexture()},this.resetState=function(){P=0,w=0,T=null,_e.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Bd?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===Al?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class T1 extends bv{}T1.prototype.isWebGL1Renderer=!0;class Wd{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=n,this.far=i}clone(){return new Wd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class w1 extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class A1 extends $t{constructor(e,n,i,r,a,s,o,l,c){super(e,n,i,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jd extends Ji{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const a=[],s=[],o=[],l=[],c=new O,d=new qe;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const m=i+f/n*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),s.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(s[h]/e+1)/2,d.y=(s[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)a.push(f,f+1,0);this.setIndex(a),this.setAttribute("position",new $n(s,3)),this.setAttribute("normal",new $n(o,3)),this.setAttribute("uv",new $n(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Gu extends Is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lv,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pv extends Dt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class C1 extends Pv{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const kc=new _t,Pp=new O,Lp=new O;class R1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gd,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Pp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pp),Lp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Lp),n.updateMatrixWorld(),kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class b1 extends R1{constructor(){super(new Mv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class P1 extends Pv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new b1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);function L1(t){const n=document.createElement("canvas");n.width=128,n.height=128;const i=n.getContext("2d");i.clearRect(0,0,128,128),i.font=`${Math.floor(128*.72)}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(t,128/2,128*.56);const r=new A1(n);return r.colorSpace=Nn,r}class I1{constructor(e){Qe(this,"group",new Ni);Qe(this,"body",new Ni);Qe(this,"lArm",new Ni);Qe(this,"rArm",new Ni);Qe(this,"phase",Math.random()*Math.PI*2);Qe(this,"mats",[]);Qe(this,"geos",[]);Qe(this,"home",new O);this.character=e;const n=v=>(this.mats.push(v),v),i=v=>(this.geos.push(v),v),r=new Be(e.color),a=r.clone().multiplyScalar(.55),s=n(new Gu({color:r,roughness:.7})),o=n(new Gu({color:a,roughness:.8})),l=new Gt(i(new di(.66,.8,.4)),s);l.position.y=1.25,l.castShadow=!0,this.body.add(l);const c=new Gt(i(new di(.6,.6,.42)),s);c.position.y=1.95,c.castShadow=!0,this.body.add(c);const d=n(new Cl({map:L1(e.emoji),transparent:!0})),f=new Gt(i(new Pa(.52,.52)),d);f.position.set(0,1.95,.22),this.body.add(f);const h=i(new di(.14,.6,.14));for(const[v,x]of[[-1,this.lArm],[1,this.rArm]]){const p=new Gt(h,s);p.position.y=-.3,p.castShadow=!0,x.add(p),x.position.set(v*.4,1.5,0),this.body.add(x)}const m=i(new di(.2,.7,.22));for(const v of[-1,1]){const x=new Gt(m,o);x.position.set(v*.16,.5,0),x.castShadow=!0,this.group.add(x)}this.group.add(this.body)}update(e,n,i){this.phase+=e*(n?7:1.6),this.group.position.lerp(i,Math.min(1,e*3));const r=Math.sin(this.phase)*(n?.07:.02);this.body.position.y=r,n?(this.lArm.rotation.x=-.5+Math.sin(this.phase)*.5,this.rArm.rotation.x=-.5-Math.sin(this.phase)*.5,this.group.scale.lerp(new O(1.12,1.12,1.12),Math.min(1,e*4))):(this.lArm.rotation.x+=(0-this.lArm.rotation.x)*Math.min(1,e*3),this.rArm.rotation.x+=(0-this.rArm.rotation.x)*Math.min(1,e*3),this.group.scale.lerp(new O(1,1,1),Math.min(1,e*4)))}dispose(){for(const e of this.geos)e.dispose();for(const e of this.mats){const n=e;n.map&&n.map.dispose(),e.dispose()}}}class N1{constructor(e,n){Qe(this,"renderer");Qe(this,"scene",new w1);Qe(this,"cam");Qe(this,"raf",0);Qe(this,"last",0);Qe(this,"actors",[]);Qe(this,"ground");Qe(this,"groundMat");Qe(this,"back");Qe(this,"backMat");Qe(this,"fog");Qe(this,"speakerId","");Qe(this,"view","third");Qe(this,"colTop",new Be("#222"));Qe(this,"colBottom",new Be("#111"));Qe(this,"camPos",new O(0,3.1,7.4));Qe(this,"camLook",new O(0,1.6,0));Qe(this,"loop",e=>{this.raf=requestAnimationFrame(this.loop),this.last||(this.last=e);const n=Math.min((e-this.last)/1e3,.05);this.last=e,this.backMat.color.lerp(this.colTop,Math.min(1,n*2)),this.groundMat.color.lerp(this.colBottom,Math.min(1,n*2)),this.scene.fog.color.lerp(this.colBottom,Math.min(1,n*2)),this.renderer.setClearColor(this.colBottom,1);const i=this.actors.find(r=>r.character.id===this.speakerId)??null;for(const r of this.actors){const a=r===i,s=a?new O(0,0,1.6):r.home;r.update(n,a,s)}if(this.view==="third"){const r=Math.sin(e/4200)*.7;this.camPos.lerp(new O(r,3.1,7.6),Math.min(1,n*2)),this.camLook.lerp(new O(0,1.7,0),Math.min(1,n*2))}else{this.camPos.lerp(new O(0,1.95,4.1),Math.min(1,n*3));const r=i?i.group.position:new O(0,0,0);this.camLook.lerp(new O(r.x,1.95,r.z),Math.min(1,n*3))}this.cam.position.copy(this.camPos),this.cam.lookAt(this.camLook),this.renderer.render(this.scene,this.cam)});this.canvas=e,this.renderer=new bv({canvas:e,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Qg,this.cam=new Mn(52,1,.1,120),this.scene.add(this.cam),this.fog=new Wd("#111111",14,42),this.scene.fog=this.fog,this.scene.add(new C1("#ffffff","#334155",1.15));const i=new P1("#ffffff",1.5);i.position.set(3,9,6),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),i.shadow.camera.near=1,i.shadow.camera.far=30;for(const[r,a]of[["left",-9],["right",9],["top",9],["bottom",-9]])i.shadow.camera[r]=a;this.scene.add(i),this.groundMat=new Gu({color:new Be("#333"),roughness:.95}),this.ground=new Gt(new jd(26,40),this.groundMat),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.scene.add(this.ground),this.backMat=new Cl({color:new Be("#111"),fog:!1}),this.back=new Gt(new Pa(70,34),this.backMat),this.back.position.set(0,8,-18),this.scene.add(this.back),this.setCast(n),this.resize(),this.raf=requestAnimationFrame(this.loop)}setCast(e){for(const i of this.actors)this.scene.remove(i.group),i.dispose();this.actors=[];const n=e.slice(0,6);n.forEach((i,r)=>{const a=new I1(i),s=n.length===1?0:r/(n.length-1)-.5;a.home.set(s*Math.min(7,n.length*1.5),0,Math.abs(s)*1.5-.6),a.group.position.copy(a.home),this.scene.add(a.group),this.actors.push(a)})}setSpeaker(e){this.speakerId=e}setColors(e,n){this.colTop.set(e),this.colBottom.set(n)}setView(e){this.view=e}resize(){const e=this.canvas.clientWidth||1,n=this.canvas.clientHeight||1;this.renderer.setSize(e,n,!1),this.cam.aspect=e/n,this.cam.updateProjectionMatrix()}dispose(){cancelAnimationFrame(this.raf);for(const e of this.actors)e.dispose();this.ground.geometry.dispose(),this.groundMat.dispose(),this.back.geometry.dispose(),this.backMat.dispose(),this.renderer.dispose()}}const Ip=`${ht.storageKey}:custom`,Np=`${ht.storageKey}:mylist`;function Dp(t,e){try{const n=localStorage.getItem(t);return n?JSON.parse(n):e}catch{return e}}function D1(t){const e=/(\d+)\s*h/.exec(t),n=/(\d+)\s*m/.exec(t);return(e?parseInt(e[1],10)*60:0)+(n?parseInt(n[1],10):0)||50}function Up(t){const e=Math.max(0,Math.floor(t)),n=e%60,i=Math.floor(e/60)%60,r=Math.floor(e/3600),a=String(i).padStart(2,"0"),s=String(n).padStart(2,"0");return r>0?`${r}:${a}:${s}`:`${i}:${s}`}const U1=["TODOS","7+","12+","16+","18+"],F1=["Protagonista","Secundario","Villano","Cameo"],O1=[1,2,5,10],Fp={Protagonista:["¡No pienso rendirme!","Esto acaba aquí y ahora.","Confía en mí, tengo un plan.","Lo hago por todos nosotros."],Villano:["Caerás ante mí.","Todo es parte de mi plan…","Jajaja, qué ingenuo.","Nadie podrá detenerme."],Secundario:["¡Te cubro las espaldas!","¿Seguro que es buena idea?","Vamos, no hay tiempo.","Por aquí, ¡rápido!"],Cameo:["Solo pasaba por aquí…","¿Alguien ha pedido ayuda?","¡Sorpresa!"]},Op=()=>({title:"",year:"2026",genre:"",category:"",rating:"TODOS",duration:"1h 30m",emoji:"🎬",c1:ht.accent,c2:ht.accent2,synopsis:"",cast:[],props:[],scenes:[{id:"sc-1",title:"Escena 1",colors:[ht.accent,ht.accent2],script:[]}]}),kp={1:[{left:"50%",top:"44%",s:1.2}],2:[{left:"35%",top:"48%",s:1},{left:"66%",top:"40%",s:1}],3:[{left:"27%",top:"52%",s:.9},{left:"52%",top:"38%",s:1.05},{left:"75%",top:"54%",s:.85}],4:[{left:"24%",top:"44%",s:.84},{left:"45%",top:"57%",s:.94},{left:"60%",top:"34%",s:.94},{left:"80%",top:"50%",s:.8}]};function Vu({movie:t,h:e}){const n=e.inList(t.id),i=t.cast&&t.cast.length?t.cast.slice(0,4):[{id:"star",name:t.title,role:"Protagonista",emoji:t.emoji,color:t.colors[0]}],r=kp[i.length]??kp[4];return R.jsx("div",{className:"poster",onClick:()=>e.onOpen(t),children:R.jsxs("div",{className:"poster-art",style:{background:`linear-gradient(150deg, ${t.colors[0]}, ${t.colors[1]})`},children:[R.jsx("div",{className:"poster-stage",children:i.map((a,s)=>R.jsx("div",{className:"poster-actor",style:{left:r[s].left,top:r[s].top,transform:`translate(-50%, -50%) scale(${r[s].s})`},title:a.name,children:R.jsx("span",{className:"poster-face",style:{background:`radial-gradient(circle at 50% 35%, ${a.color}, #000a)`,color:a.color,animationDelay:`${s*.6}s`},children:a.emoji})},a.id))}),R.jsx("span",{className:"poster-rating",children:t.rating}),t.custom&&R.jsx("span",{className:"poster-flag",children:"TUYA"}),R.jsx("div",{className:"poster-shade"}),R.jsxs("div",{className:"poster-foot",children:[R.jsx("span",{className:"poster-title",children:t.title}),R.jsxs("span",{className:"poster-sub",children:[t.year," · ",t.genre]})]}),R.jsxs("div",{className:"poster-actions",onClick:a=>a.stopPropagation(),children:[R.jsx("button",{className:"circle play",title:"Reproducir",onClick:()=>e.onPlay(t),children:"▶"}),R.jsx("button",{className:`circle ${n?"on":""}`,title:n?"Quitar de Mi lista":"Añadir a Mi lista",onClick:()=>e.onToggle(t.id),children:n?"✓":"+"}),R.jsx("button",{className:"circle",title:"Más info",onClick:()=>e.onOpen(t),children:"⌄"}),t.custom&&e.onRemove&&R.jsx("button",{className:"circle danger",title:"Eliminar",onClick:()=>e.onRemove(t.id),children:"🗑"})]})]})})}function k1({title:t,movies:e,h:n}){const i=Ve.useRef(null),r=a=>{var s;return(s=i.current)==null?void 0:s.scrollBy({left:a*i.current.clientWidth*.85,behavior:"smooth"})};return R.jsxs("section",{className:"row",children:[R.jsx("h2",{className:"row-title",children:t}),R.jsxs("div",{className:"row-wrap",children:[R.jsx("button",{className:"row-nav left",onClick:()=>r(-1),"aria-label":"Anterior",children:"‹"}),R.jsx("div",{className:"row-track",ref:i,children:e.map(a=>R.jsx(Vu,{movie:a,h:n},a.id))}),R.jsx("button",{className:"row-nav right",onClick:()=>r(1),"aria-label":"Siguiente",children:"›"})]})]})}const z1={id:"",name:"Narrador",emoji:"🎬",color:"#e5e7eb"};function B1({cast:t,speakerId:e,colors:n,view:i}){const r=Ve.useRef(null),a=Ve.useRef(null);return Ve.useEffect(()=>{if(!r.current)return;const s=new N1(r.current,t);a.current=s;const o=()=>s.resize();return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o),s.dispose(),a.current=null}},[t]),Ve.useEffect(()=>{var s;(s=a.current)==null||s.setSpeaker(e)},[e]),Ve.useEffect(()=>{var s;(s=a.current)==null||s.setColors(n[0],n[1])},[n]),Ve.useEffect(()=>{var s;(s=a.current)==null||s.setView(i)},[i]),R.jsx("canvas",{ref:r,className:"stage3d"})}function H1(t,e){const n=t.scenes&&t.scenes.length?t.scenes:[{id:"auto",title:t.title,colors:t.colors,script:[]}],i=[],r=[];return n.forEach((a,s)=>{if(r.push(i.length),a.script.length)a.script.forEach(o=>i.push({sceneIndex:s,charId:o.charId,text:o.text}));else for(let o=0;o<6;o++){const l=e[o%e.length],c=Fp[l.role]??Fp.Protagonista;i.push({sceneIndex:s,charId:l.id,text:c[o%c.length]})}}),i.length||i.push({sceneIndex:0,charId:e[0].id,text:"…"}),{scenes:n,beats:i,sceneStarts:r}}function G1({movie:t,onClose:e}){const i=D1(t.duration)*60,r=t.cast&&t.cast.length?t.cast:[{id:"star",name:t.title,role:"Protagonista",emoji:t.emoji,color:t.colors[0]}],a=t.props??[],{scenes:s,beats:o,sceneStarts:l}=Ve.useMemo(()=>H1(t,r),[t]),[c,d]=Ve.useState(0),[f,h]=Ve.useState(!1),[m,v]=Ve.useState(1),[x,p]=Ve.useState("third"),u=c>=i,_=j=>i*j/o.length,g=Math.min(o.length-1,Math.floor(c/i*o.length));Ve.useEffect(()=>{if(f||u)return;const j=250,Y=setInterval(()=>{d(L=>Math.min(i,L+j/1e3*m))},j);return()=>clearInterval(Y)},[f,u,m,i]);const M=()=>d(Math.min(i,_(g+1)+.01)),P=()=>{const j=o[g].sceneIndex,Y=j+1<l.length?l[j+1]:o.length;d(Math.min(i,_(Y)+.01))};Ve.useEffect(()=>{const j=Y=>{Y.key==="Escape"&&e(),Y.key===" "&&(Y.preventDefault(),h(L=>!L)),Y.key==="ArrowRight"&&d(L=>Math.min(i,L+30*m)),Y.key==="ArrowLeft"&&d(L=>Math.max(0,L-30*m))};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[e,i,m]);const w=o[g],T=s[w.sceneIndex],I=T.colors??t.colors,Z=r.find(j=>j.id===w.charId)??z1,y=Math.min(100,c/i*100),C=j=>{const Y=j.currentTarget.getBoundingClientRect(),L=Math.max(0,Math.min(1,(j.clientX-Y.left)/Y.width));d(L*i)};return R.jsxs("div",{className:"player",children:[R.jsxs("div",{className:`player-stage ${f?"paused":""}`,style:{background:`radial-gradient(circle at 50% 28%, ${I[0]}, ${I[1]} 72%, #000)`},onClick:()=>!u&&h(j=>!j),children:[!u&&R.jsx(B1,{cast:r,speakerId:Z.id,colors:I,view:x}),R.jsx("span",{className:"player-watermark",children:t.emoji}),R.jsx("div",{className:"player-brand",children:ht.brand}),!u&&R.jsx("button",{className:"view-toggle",onClick:j=>{j.stopPropagation(),p(Y=>Y==="third"?"first":"third")},children:x==="third"?"🎥 3ª persona":"👁️ 1ª persona"}),!u&&R.jsxs("div",{className:"chapters",onClick:j=>j.stopPropagation(),children:[R.jsxs("span",{className:"chapter-now",children:["Cap ",w.sceneIndex+1,"/",s.length," · ",T.title]}),s.length>1&&R.jsx("div",{className:"chapter-pips",children:s.map((j,Y)=>R.jsx("button",{className:`pip ${Y===w.sceneIndex?"on":""}`,title:j.title,onClick:()=>d(_(l[Y])+.01)},j.id))})]}),!u&&R.jsx("div",{className:"scene",children:a.map((j,Y)=>R.jsx("span",{className:"scene-prop",style:{left:`${8+Y*19%82}%`,top:`${12+Y%3*7}%`,animationDelay:`${Y*.5}s`},title:j.name,children:j.emoji},j.id))}),u?R.jsxs("div",{className:"player-end",children:[R.jsxs("h2",{children:["Has terminado «",t.title,"»"]}),R.jsxs("div",{className:"player-end-actions",children:[R.jsx("button",{className:"btn-play",onClick:j=>{j.stopPropagation(),d(0)},children:"↻ Volver a ver"}),R.jsx("button",{className:"btn-info",onClick:e,children:"Salir"})]})]}):R.jsxs(R.Fragment,{children:[f&&R.jsx("div",{className:"player-bigplay",children:"▶"}),R.jsxs("div",{className:"subtitle",children:[R.jsxs("b",{style:{color:Z.color},children:[Z.emoji," ",Z.name,":"]})," ",w.text]})]})]}),R.jsxs("div",{className:"player-bar",children:[R.jsxs("div",{className:"player-meta",children:[R.jsx("strong",{children:t.title}),R.jsxs("span",{children:[t.year," · ",t.genre," · ",t.rating]})]}),R.jsx("div",{className:"player-seek",onClick:C,children:R.jsx("div",{className:"player-seek-fill",style:{width:`${y}%`},children:R.jsx("span",{className:"player-knob"})})}),R.jsxs("div",{className:"player-controls",children:[R.jsxs("span",{className:"player-time",children:[Up(c)," / ",Up(i)]}),R.jsx("div",{className:"player-speed",title:"Velocidad de reproducción",children:O1.map(j=>R.jsxs("button",{className:`speed ${m===j?"on":""}`,onClick:()=>v(j),title:j===1?"Tiempo real":`${j}× más rápido`,children:[j,"×"]},j))}),R.jsxs("div",{className:"player-buttons",children:[R.jsx("button",{onClick:()=>d(0),title:"Reiniciar",children:"⏮"}),R.jsx("button",{onClick:()=>h(j=>!j),title:"Reproducir/Pausa",children:f?"▶":"❚❚"}),R.jsx("button",{onClick:M,title:"Siguiente línea",children:"⏭ Línea"}),s.length>1&&R.jsx("button",{onClick:P,title:"Siguiente escena",children:"⏩ Escena"}),R.jsx("button",{onClick:e,title:"Cerrar",children:"✕ Cerrar"})]})]})]})]})}function V1(){const[t,e]=Ve.useState(()=>Dp(Ip,[])),[n,i]=Ve.useState(()=>Dp(Np,[])),[r,a]=Ve.useState(""),[s,o]=Ve.useState("home"),[l,c]=Ve.useState(null),[d,f]=Ve.useState(null),[h,m]=Ve.useState(!1),[v,x]=Ve.useState(Op),[p,u]=Ve.useState({name:"",role:"Protagonista",emoji:"🦸",color:ht.accent}),[_,g]=Ve.useState({name:"",emoji:"🗝️"}),[M,P]=Ve.useState({});Ve.useEffect(()=>localStorage.setItem(Ip,JSON.stringify(t)),[t]),Ve.useEffect(()=>localStorage.setItem(Np,JSON.stringify(n)),[n]);const w=Ve.useMemo(()=>[...ht.catalog,...t],[t]),T=Ve.useMemo(()=>new Map(w.map(b=>[b.id,b])),[w]),I=Ve.useMemo(()=>ht.catalog.find(b=>b.featured)??ht.catalog[0],[]),Z=Ve.useMemo(()=>[...new Set(ht.catalog.map(b=>b.category))],[]),y=b=>n.includes(b),C=b=>i(K=>K.includes(b)?K.filter(xe=>xe!==b):[b,...K]),j=Ve.useMemo(()=>n.map(b=>T.get(b)).filter(b=>!!b),[n,T]),Y=Ve.useMemo(()=>{const b=[{title:"Tendencias ahora 🔥",movies:ht.catalog.slice(0,10)}];for(const K of Z)b.push({title:K,movies:w.filter(xe=>xe.category===K)});return t.length&&b.push({title:"Mis pelis ✨",movies:t}),b.filter(K=>K.movies.length>0)},[w,t,Z]),L=Ve.useMemo(()=>{const b=r.trim().toLowerCase();return b?w.filter(K=>K.title.toLowerCase().includes(b)||K.genre.toLowerCase().includes(b)||K.category.toLowerCase().includes(b)):null},[r,w]),$={onOpen:c,onPlay:b=>{c(null),f(b)},onToggle:C,inList:y,onRemove:b=>J(b)};function q(){const b={id:`custom-${Date.now()}`,title:v.title.trim()||"Sin título",year:parseInt(v.year,10)||2026,genre:v.genre.trim()||"Original",rating:v.rating,duration:v.duration.trim()||"1h 30m",category:v.category.trim()||"Mis pelis ✨",emoji:v.emoji.trim()||"🎬",colors:[v.c1,v.c2],synopsis:v.synopsis.trim()||"Una peli original creada por ti en este streaming.",cast:v.cast,props:v.props,scenes:v.scenes.filter(K=>K.script.length>0),custom:!0};e(K=>[b,...K]),m(!1),x(Op()),c(b)}function J(b){e(K=>K.filter(xe=>xe.id!==b)),i(K=>K.filter(xe=>xe!==b)),c(null)}const N=()=>{if(!p.name.trim())return;const b={id:`ch-${Date.now()}`,...p,name:p.name.trim()};x(K=>({...K,cast:[...K.cast,b]})),u(K=>({...K,name:""}))},k=()=>{if(!_.name.trim())return;const b={id:`pr-${Date.now()}`,name:_.name.trim(),emoji:_.emoji||"🧩"};x(K=>({...K,props:[...K.props,b]})),g(K=>({...K,name:""}))},V=b=>x(K=>({...K,cast:K.cast.filter(xe=>xe.id!==b)})),ee=b=>x(K=>({...K,props:K.props.filter(xe=>xe.id!==b)})),se=()=>x(b=>({...b,scenes:[...b.scenes,{id:`sc-${Date.now()}`,title:`Escena ${b.scenes.length+1}`,colors:[b.c1,b.c2],script:[]}]})),Ce=b=>x(K=>({...K,scenes:K.scenes.filter(xe=>xe.id!==b)})),B=(b,K)=>x(xe=>({...xe,scenes:xe.scenes.map(ve=>ve.id===b?{...ve,...K}:ve)})),te=b=>{const K=M[b]??{charId:"",text:""};K.text.trim()&&(x(xe=>({...xe,scenes:xe.scenes.map(ve=>ve.id===b?{...ve,script:[...ve.script,{charId:K.charId,text:K.text.trim()}]}:ve)})),P(xe=>({...xe,[b]:{charId:K.charId,text:""}})))},ue=(b,K)=>x(xe=>({...xe,scenes:xe.scenes.map(ve=>ve.id===b?{...ve,script:ve.script.filter((F,ft)=>ft!==K)}:ve)})),we={"--accent":ht.accent,"--accent2":ht.accent2,"--bg":ht.bg,"--surface":ht.surface};return R.jsxs("div",{className:"stream",style:we,children:[R.jsxs("header",{className:"nav",children:[R.jsxs("div",{className:"brand",onClick:()=>{o("home"),a("")},children:[R.jsx("span",{className:"brand-name",children:ht.brand}),R.jsx("span",{className:"brand-byline",children:ht.byline})]}),R.jsxs("nav",{className:"nav-links",children:[R.jsx("button",{className:s==="home"&&!r?"on":"",onClick:()=>{o("home"),a("")},children:"Inicio"}),R.jsx("button",{className:s==="mylist"?"on":"",onClick:()=>{o("mylist"),a("")},children:"Mi lista"})]}),R.jsxs("div",{className:"nav-right",children:[R.jsxs("label",{className:"nav-search",children:[R.jsx("span",{children:"⌕"}),R.jsx("input",{value:r,onChange:b=>a(b.target.value),placeholder:"Buscar pelis y series","aria-label":"Buscar"})]}),R.jsx("button",{className:"create-btn",onClick:()=>m(!0),children:"+ Crear peli"}),R.jsx("div",{className:"avatar",children:"K"})]})]}),L?R.jsxs("main",{className:"content",children:[R.jsxs("h2",{className:"row-title big",children:["Resultados de «",r,"»"]}),L.length?R.jsx("div",{className:"grid",children:L.map(b=>R.jsx(Vu,{movie:b,h:$},b.id))}):R.jsxs("p",{className:"empty",children:["No hay nada que coincida con «",r,"». ¿Y si la creas? 👆"]})]}):s==="mylist"?R.jsxs("main",{className:"content",children:[R.jsx("h2",{className:"row-title big",children:"Mi lista"}),j.length?R.jsx("div",{className:"grid",children:j.map(b=>R.jsx(Vu,{movie:b,h:$},b.id))}):R.jsx("p",{className:"empty",children:"Tu lista está vacía. Pulsa el “+” en cualquier peli para guardarla aquí."})]}):R.jsxs(R.Fragment,{children:[R.jsxs("section",{className:"hero",style:{background:`linear-gradient(120deg, ${I.colors[0]}, ${I.colors[1]})`},children:[R.jsx("div",{className:"hero-mask"}),R.jsx("span",{className:"hero-emoji",children:I.emoji}),R.jsxs("div",{className:"hero-content",children:[R.jsxs("span",{className:"hero-tag",children:["★ Destacada en ",ht.brand]}),R.jsx("h1",{children:I.title}),R.jsxs("div",{className:"hero-meta",children:[R.jsx("span",{className:"chip",children:I.rating}),R.jsx("span",{children:I.year}),R.jsx("span",{children:I.duration}),R.jsx("span",{children:I.genre})]}),R.jsx("p",{className:"hero-synopsis",children:I.synopsis}),R.jsxs("div",{className:"hero-buttons",children:[R.jsx("button",{className:"btn-play",onClick:()=>f(I),children:"▶ Reproducir"}),R.jsx("button",{className:"btn-info",onClick:()=>c(I),children:"ⓘ Más información"})]})]})]}),R.jsx("main",{className:"content rows",children:Y.map(b=>R.jsx(k1,{title:b.title,movies:b.movies,h:$},b.title))})]}),R.jsxs("footer",{className:"foot",children:[ht.brand," ",R.jsx("b",{children:ht.byline})," · Hecho con React + Vite · Tus pelis se guardan en este navegador."]}),l&&R.jsx("div",{className:"backdrop",onClick:()=>c(null),children:R.jsxs("div",{className:"sheet",onClick:b=>b.stopPropagation(),children:[R.jsxs("div",{className:"sheet-banner",style:{background:`linear-gradient(120deg, ${l.colors[0]}, ${l.colors[1]})`},children:[R.jsx("span",{className:"sheet-emoji",children:l.emoji}),R.jsx("button",{className:"sheet-close",onClick:()=>c(null),children:"✕"}),R.jsxs("div",{className:"sheet-banner-foot",children:[l.cast&&l.cast.length>0&&R.jsx("div",{className:"banner-cast",children:l.cast.slice(0,6).map(b=>R.jsx("span",{style:{background:`radial-gradient(circle at 50% 35%, ${b.color}, #000a)`},children:b.emoji},b.id))}),R.jsx("h2",{children:l.title}),R.jsxs("div",{className:"sheet-buttons",children:[R.jsx("button",{className:"btn-play",onClick:()=>{c(null),f(l)},children:"▶ Reproducir"}),R.jsx("button",{className:"circle big",onClick:()=>C(l.id),title:"Mi lista",children:y(l.id)?"✓":"+"}),l.custom&&R.jsx("button",{className:"circle big danger",onClick:()=>J(l.id),title:"Eliminar",children:"🗑"})]})]})]}),R.jsxs("div",{className:"sheet-body",children:[R.jsxs("div",{className:"sheet-meta",children:[R.jsx("span",{className:"chip",children:l.rating}),R.jsx("span",{children:l.year}),R.jsx("span",{children:l.duration}),R.jsx("span",{className:"dot-tag",children:l.genre}),l.custom&&R.jsx("span",{className:"dot-tag tuya",children:"Creada por ti"})]}),R.jsx("p",{children:l.synopsis}),R.jsxs("p",{className:"sheet-cat",children:["Categoría: ",R.jsx("b",{children:l.category})]}),l.cast&&l.cast.length>0&&R.jsxs("div",{className:"sheet-section",children:[R.jsx("h4",{children:"🎭 Reparto"}),R.jsx("div",{className:"cast-row",children:l.cast.map(b=>R.jsxs("div",{className:"cast-card",children:[R.jsx("span",{className:"cast-card-emoji",style:{background:`radial-gradient(circle at 50% 35%, ${b.color}, #000a)`},children:b.emoji}),R.jsx("b",{children:b.name}),R.jsx("small",{children:b.role})]},b.id))})]}),l.props&&l.props.length>0&&R.jsxs("div",{className:"sheet-section",children:[R.jsx("h4",{children:"🧩 Objetos en la peli"}),R.jsx("div",{className:"chip-list show",children:l.props.map(b=>R.jsxs("span",{className:"prop-chip static",children:[R.jsx("span",{children:b.emoji})," ",b.name]},b.id))})]}),l.scenes&&l.scenes.length>0&&R.jsxs("div",{className:"sheet-section",children:[R.jsx("h4",{children:"🎬 Capítulos"}),R.jsx("ol",{className:"chapter-list",children:l.scenes.map((b,K)=>R.jsxs("li",{children:[R.jsxs("b",{children:["Cap ",K+1," · ",b.title]}),R.jsxs("small",{children:[b.script.length," líneas de guion"]})]},b.id))})]})]})]})}),h&&R.jsx("div",{className:"backdrop",onClick:()=>m(!1),children:R.jsxs("div",{className:"sheet create",onClick:b=>b.stopPropagation(),children:[R.jsxs("div",{className:"create-head",children:[R.jsx("h2",{children:"🎬 Crear una peli"}),R.jsx("button",{className:"sheet-close solid",onClick:()=>m(!1),children:"✕"})]}),R.jsxs("div",{className:"create-preview",style:{background:`linear-gradient(150deg, ${v.c1}, ${v.c2})`},children:[R.jsx("span",{children:v.emoji||"🎬"}),R.jsxs("div",{className:"create-preview-info",children:[R.jsx("strong",{children:v.title||"Tu título"}),(v.cast.length>0||v.props.length>0)&&R.jsxs("span",{className:"create-preview-cast",children:[v.cast.slice(0,6).map(b=>b.emoji).join(" ")," ",v.props.slice(0,6).map(b=>b.emoji).join(" ")]})]})]}),R.jsxs("div",{className:"create-grid",children:[R.jsxs("label",{className:"full",children:["Título",R.jsx("input",{autoFocus:!0,value:v.title,onChange:b=>x({...v,title:b.target.value}),placeholder:"p. ej. Kamyar: El Regreso"})]}),R.jsxs("label",{children:["Año",R.jsx("input",{type:"number",value:v.year,onChange:b=>x({...v,year:b.target.value})})]}),R.jsxs("label",{children:["Género",R.jsx("input",{value:v.genre,onChange:b=>x({...v,genre:b.target.value}),placeholder:"Acción, Comedia…"})]}),R.jsxs("label",{children:["Duración",R.jsx("input",{value:v.duration,onChange:b=>x({...v,duration:b.target.value}),placeholder:"1h 52m"})]}),R.jsxs("label",{children:["Edad",R.jsx("select",{value:v.rating,onChange:b=>x({...v,rating:b.target.value}),children:U1.map(b=>R.jsx("option",{children:b},b))})]}),R.jsxs("label",{children:["Categoría (fila)",R.jsx("input",{list:"cats",value:v.category,onChange:b=>x({...v,category:b.target.value}),placeholder:"Mis pelis ✨"}),R.jsx("datalist",{id:"cats",children:Z.map(b=>R.jsx("option",{value:b},b))})]}),R.jsxs("label",{children:["Emoji póster",R.jsx("input",{value:v.emoji,onChange:b=>x({...v,emoji:b.target.value}),placeholder:"🎬"})]}),R.jsxs("label",{className:"color",children:["Color 1",R.jsx("input",{type:"color",value:v.c1,onChange:b=>x({...v,c1:b.target.value})})]}),R.jsxs("label",{className:"color",children:["Color 2",R.jsx("input",{type:"color",value:v.c2,onChange:b=>x({...v,c2:b.target.value})})]}),R.jsxs("label",{className:"full",children:["Sinopsis",R.jsx("textarea",{rows:3,value:v.synopsis,onChange:b=>x({...v,synopsis:b.target.value}),placeholder:"¿De qué va tu peli?"})]})]}),R.jsxs("div",{className:"builder",children:[R.jsxs("div",{className:"builder-block",children:[R.jsx("h3",{children:"🎭 Personajes"}),R.jsxs("div",{className:"chip-list",children:[v.cast.map(b=>R.jsxs("span",{className:"cast-chip",style:{borderColor:b.color},children:[R.jsx("span",{className:"cast-emoji",children:b.emoji}),R.jsxs("span",{className:"cast-info",children:[R.jsx("b",{children:b.name}),R.jsx("small",{children:b.role})]}),R.jsx("button",{onClick:()=>V(b.id),"aria-label":"Quitar personaje",children:"✕"})]},b.id)),v.cast.length===0&&R.jsx("span",{className:"builder-empty",children:"Aún no hay personajes. Crea el reparto 👇"})]}),R.jsxs("div",{className:"builder-add",children:[R.jsx("input",{className:"ce",value:p.emoji,onChange:b=>u({...p,emoji:b.target.value}),"aria-label":"Emoji del personaje"}),R.jsx("input",{value:p.name,onChange:b=>u({...p,name:b.target.value}),onKeyDown:b=>b.key==="Enter"&&N(),placeholder:"Nombre del personaje"}),R.jsx("select",{value:p.role,onChange:b=>u({...p,role:b.target.value}),children:F1.map(b=>R.jsx("option",{children:b},b))}),R.jsx("input",{type:"color",value:p.color,onChange:b=>u({...p,color:b.target.value}),"aria-label":"Color del personaje"}),R.jsx("button",{className:"add-mini",onClick:N,children:"+ Añadir"})]})]}),R.jsxs("div",{className:"builder-block",children:[R.jsx("h3",{children:"🧩 Objetos"}),R.jsxs("div",{className:"chip-list",children:[v.props.map(b=>R.jsxs("span",{className:"prop-chip",children:[R.jsx("span",{children:b.emoji})," ",b.name,R.jsx("button",{onClick:()=>ee(b.id),"aria-label":"Quitar objeto",children:"✕"})]},b.id)),v.props.length===0&&R.jsx("span",{className:"builder-empty",children:"Añade objetos y atrezo de la peli 👇"})]}),R.jsxs("div",{className:"builder-add",children:[R.jsx("input",{className:"ce",value:_.emoji,onChange:b=>g({..._,emoji:b.target.value}),"aria-label":"Emoji del objeto"}),R.jsx("input",{value:_.name,onChange:b=>g({..._,name:b.target.value}),onKeyDown:b=>b.key==="Enter"&&k(),placeholder:"Nombre del objeto"}),R.jsx("button",{className:"add-mini",onClick:k,children:"+ Añadir"})]})]}),R.jsxs("div",{className:"builder-block",children:[R.jsx("h3",{children:"🎬 Escenas y guion"}),v.scenes.map((b,K)=>{var xe,ve,F,ft;return R.jsxs("div",{className:"scene-edit",children:[R.jsxs("div",{className:"scene-edit-head",children:[R.jsx("span",{className:"scene-num",children:K+1}),R.jsx("input",{className:"scene-title",value:b.title,onChange:pe=>B(b.id,{title:pe.target.value}),placeholder:`Escena ${K+1}`}),R.jsx("input",{type:"color",value:((xe=b.colors)==null?void 0:xe[0])??v.c1,onChange:pe=>{var Ee;return B(b.id,{colors:[pe.target.value,((Ee=b.colors)==null?void 0:Ee[1])??v.c2]})},"aria-label":"Color de fondo 1"}),R.jsx("input",{type:"color",value:((ve=b.colors)==null?void 0:ve[1])??v.c2,onChange:pe=>{var Ee;return B(b.id,{colors:[((Ee=b.colors)==null?void 0:Ee[0])??v.c1,pe.target.value]})},"aria-label":"Color de fondo 2"}),v.scenes.length>1&&R.jsx("button",{className:"scene-del",onClick:()=>Ce(b.id),"aria-label":"Eliminar escena",children:"🗑"})]}),R.jsxs("ol",{className:"script-lines",children:[b.script.map((pe,Ee)=>{const _e=v.cast.find(je=>je.id===pe.charId);return R.jsxs("li",{children:[R.jsxs("span",{className:"line-who",style:{color:_e==null?void 0:_e.color},children:[_e?`${_e.emoji} ${_e.name}`:"🎬 Narrador",":"]}),R.jsx("span",{className:"line-text",children:pe.text}),R.jsx("button",{onClick:()=>ue(b.id,Ee),"aria-label":"Quitar línea",children:"✕"})]},Ee)}),b.script.length===0&&R.jsx("li",{className:"builder-empty",children:"Sin diálogos aún. Escribe la primera línea 👇"})]}),R.jsxs("div",{className:"line-add",children:[R.jsxs("select",{value:((F=M[b.id])==null?void 0:F.charId)??"",onChange:pe=>P(Ee=>{var _e;return{...Ee,[b.id]:{charId:pe.target.value,text:((_e=Ee[b.id])==null?void 0:_e.text)??""}}}),children:[R.jsx("option",{value:"",children:"🎬 Narrador"}),v.cast.map(pe=>R.jsxs("option",{value:pe.id,children:[pe.emoji," ",pe.name]},pe.id))]}),R.jsx("input",{value:((ft=M[b.id])==null?void 0:ft.text)??"",onChange:pe=>P(Ee=>{var _e;return{...Ee,[b.id]:{charId:((_e=Ee[b.id])==null?void 0:_e.charId)??"",text:pe.target.value}}}),onKeyDown:pe=>pe.key==="Enter"&&te(b.id),placeholder:"Escribe lo que dice…"}),R.jsx("button",{className:"add-mini",onClick:()=>te(b.id),children:"+ Línea"})]})]},b.id)}),R.jsx("button",{className:"add-scene",onClick:se,children:"+ Añadir escena"})]})]}),R.jsxs("div",{className:"create-actions",children:[R.jsx("button",{className:"btn-info",onClick:()=>m(!1),children:"Cancelar"}),R.jsx("button",{className:"btn-play",disabled:!v.title.trim(),onClick:q,children:"✓ Añadir al catálogo"})]})]})}),d&&R.jsx(G1,{movie:d,onClose:()=>f(null)},d.id)]})}zc.createRoot(document.getElementById("root")).render(R.jsx(e_.StrictMode,{children:R.jsx(V1,{})}));
