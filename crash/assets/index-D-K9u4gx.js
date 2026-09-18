(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function mv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hg={exports:{}},gc={},pg={exports:{}},ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),gv=Symbol.for("react.portal"),_v=Symbol.for("react.fragment"),vv=Symbol.for("react.strict_mode"),xv=Symbol.for("react.profiler"),yv=Symbol.for("react.provider"),Sv=Symbol.for("react.context"),Mv=Symbol.for("react.forward_ref"),Ev=Symbol.for("react.suspense"),wv=Symbol.for("react.memo"),Tv=Symbol.for("react.lazy"),mh=Symbol.iterator;function Av(t){return t===null||typeof t!="object"?null:(t=mh&&t[mh]||t["@@iterator"],typeof t=="function"?t:null)}var mg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gg=Object.assign,_g={};function ho(t,e,n){this.props=t,this.context=e,this.refs=_g,this.updater=n||mg}ho.prototype.isReactComponent={};ho.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ho.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vg(){}vg.prototype=ho.prototype;function fd(t,e,n){this.props=t,this.context=e,this.refs=_g,this.updater=n||mg}var dd=fd.prototype=new vg;dd.constructor=fd;gg(dd,ho.prototype);dd.isPureReactComponent=!0;var gh=Array.isArray,xg=Object.prototype.hasOwnProperty,hd={current:null},yg={key:!0,ref:!0,__self:!0,__source:!0};function Sg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xg.call(e,i)&&!yg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:_a,type:t,key:s,ref:o,props:r,_owner:hd.current}}function Rv(t,e){return{$$typeof:_a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===_a}function Cv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _h=/\/+/g;function Hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Cv(""+t.key):e.toString(36)}function Tl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _a:case gv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Hc(o,0):i,gh(r)?(n="",t!=null&&(n=t.replace(_h,"$&/")+"/"),Tl(r,e,n,"",function(c){return c})):r!=null&&(pd(r)&&(r=Rv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(_h,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",gh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Hc(s,a);o+=Tl(s,e,n,l,r)}else if(l=Av(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Hc(s,a++),o+=Tl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ca(t,e,n){if(t==null)return t;var i=[],r=0;return Tl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function bv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vn={current:null},Al={transition:null},Pv={ReactCurrentDispatcher:vn,ReactCurrentBatchConfig:Al,ReactCurrentOwner:hd};function Mg(){throw Error("act(...) is not supported in production builds of React.")}ut.Children={map:Ca,forEach:function(t,e,n){Ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ca(t,function(){e++}),e},toArray:function(t){return Ca(t,function(e){return e})||[]},only:function(t){if(!pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ut.Component=ho;ut.Fragment=_v;ut.Profiler=xv;ut.PureComponent=fd;ut.StrictMode=vv;ut.Suspense=Ev;ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pv;ut.act=Mg;ut.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=gg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xg.call(e,l)&&!yg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:_a,type:t.type,key:r,ref:s,props:i,_owner:o}};ut.createContext=function(t){return t={$$typeof:Sv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yv,_context:t},t.Consumer=t};ut.createElement=Sg;ut.createFactory=function(t){var e=Sg.bind(null,t);return e.type=t,e};ut.createRef=function(){return{current:null}};ut.forwardRef=function(t){return{$$typeof:Mv,render:t}};ut.isValidElement=pd;ut.lazy=function(t){return{$$typeof:Tv,_payload:{_status:-1,_result:t},_init:bv}};ut.memo=function(t,e){return{$$typeof:wv,type:t,compare:e===void 0?null:e}};ut.startTransition=function(t){var e=Al.transition;Al.transition={};try{t()}finally{Al.transition=e}};ut.unstable_act=Mg;ut.useCallback=function(t,e){return vn.current.useCallback(t,e)};ut.useContext=function(t){return vn.current.useContext(t)};ut.useDebugValue=function(){};ut.useDeferredValue=function(t){return vn.current.useDeferredValue(t)};ut.useEffect=function(t,e){return vn.current.useEffect(t,e)};ut.useId=function(){return vn.current.useId()};ut.useImperativeHandle=function(t,e,n){return vn.current.useImperativeHandle(t,e,n)};ut.useInsertionEffect=function(t,e){return vn.current.useInsertionEffect(t,e)};ut.useLayoutEffect=function(t,e){return vn.current.useLayoutEffect(t,e)};ut.useMemo=function(t,e){return vn.current.useMemo(t,e)};ut.useReducer=function(t,e,n){return vn.current.useReducer(t,e,n)};ut.useRef=function(t){return vn.current.useRef(t)};ut.useState=function(t){return vn.current.useState(t)};ut.useSyncExternalStore=function(t,e,n){return vn.current.useSyncExternalStore(t,e,n)};ut.useTransition=function(){return vn.current.useTransition()};ut.version="18.3.1";pg.exports=ut;var _e=pg.exports;const Lv=mv(_e);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv=_e,Dv=Symbol.for("react.element"),Uv=Symbol.for("react.fragment"),Iv=Object.prototype.hasOwnProperty,Fv=Nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ov={key:!0,ref:!0,__self:!0,__source:!0};function Eg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Iv.call(e,i)&&!Ov.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Dv,type:t,key:s,ref:o,props:r,_owner:Fv.current}}gc.Fragment=Uv;gc.jsx=Eg;gc.jsxs=Eg;hg.exports=gc;var j=hg.exports,nf={},wg={exports:{}},zn={},Tg={exports:{}},Ag={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,O){var B=L.length;L.push(O);e:for(;0<B;){var ne=B-1>>>1,le=L[ne];if(0<r(le,O))L[ne]=O,L[B]=le,B=ne;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var O=L[0],B=L.pop();if(B!==O){L[0]=B;e:for(var ne=0,le=L.length,Le=le>>>1;ne<Le;){var H=2*(ne+1)-1,te=L[H],ve=H+1,Ne=L[ve];if(0>r(te,B))ve<le&&0>r(Ne,te)?(L[ne]=Ne,L[ve]=B,ne=ve):(L[ne]=te,L[H]=B,ne=H);else if(ve<le&&0>r(Ne,B))L[ne]=Ne,L[ve]=B,ne=ve;else break e}}return O}function r(L,O){var B=L.sortIndex-O.sortIndex;return B!==0?B:L.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=L)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function S(L){if(x=!1,g(L),!_)if(n(l)!==null)_=!0,X(A);else{var O=n(c);O!==null&&ee(S,O.startTime-L)}}function A(L,O){_=!1,x&&(x=!1,u(b),b=-1),m=!0;var B=h;try{for(g(O),d=n(l);d!==null&&(!(d.expirationTime>O)||L&&!C());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,h=d.priorityLevel;var le=ne(d.expirationTime<=O);O=t.unstable_now(),typeof le=="function"?d.callback=le:d===n(l)&&i(l),g(O)}else i(l);d=n(l)}if(d!==null)var Le=!0;else{var H=n(c);H!==null&&ee(S,H.startTime-O),Le=!1}return Le}finally{d=null,h=B,m=!1}}var T=!1,w=null,b=-1,Y=5,y=-1;function C(){return!(t.unstable_now()-y<Y)}function J(){if(w!==null){var L=t.unstable_now();y=L;var O=!0;try{O=w(!0,L)}finally{O?Q():(T=!1,w=null)}}else T=!1}var Q;if(typeof v=="function")Q=function(){v(J)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,K=P.port2;P.port1.onmessage=J,Q=function(){K.postMessage(null)}}else Q=function(){p(J,0)};function X(L){w=L,T||(T=!0,Q())}function ee(L,O){b=p(function(){L(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,X(A))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var B=h;h=O;try{return L()}finally{h=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,O){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var B=h;h=L;try{return O()}finally{h=B}},t.unstable_scheduleCallback=function(L,O,B){var ne=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ne+B:ne):B=ne,L){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=B+le,L={id:f++,callback:O,priorityLevel:L,startTime:B,expirationTime:le,sortIndex:-1},B>ne?(L.sortIndex=B,e(c,L),n(l)===null&&L===n(c)&&(x?(u(b),b=-1):x=!0,ee(S,B-ne))):(L.sortIndex=le,e(l,L),_||m||(_=!0,X(A))),L},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(L){var O=h;return function(){var B=h;h=O;try{return L.apply(this,arguments)}finally{h=B}}}})(Ag);Tg.exports=Ag;var zv=Tg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv=_e,On=zv;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rg=new Set,Zo={};function rs(t,e){to(t,e),to(t+"Capture",e)}function to(t,e){for(Zo[t]=e,t=0;t<e.length;t++)Rg.add(e[t])}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rf=Object.prototype.hasOwnProperty,Bv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vh={},xh={};function Hv(t){return rf.call(xh,t)?!0:rf.call(vh,t)?!1:Bv.test(t)?xh[t]=!0:(vh[t]=!0,!1)}function Gv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Vv(t,e,n,i){if(e===null||typeof e>"u"||Gv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nn[t]=new xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nn[e]=new xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nn[t]=new xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nn[t]=new xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nn[t]=new xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nn[t]=new xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nn[t]=new xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nn[t]=new xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nn[t]=new xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var md=/[\-:]([a-z])/g;function gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(md,gd);nn[e]=new xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(md,gd);nn[e]=new xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(md,gd);nn[e]=new xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nn[t]=new xn(t,1,!1,t.toLowerCase(),null,!1,!1)});nn.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nn[t]=new xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function _d(t,e,n,i){var r=nn.hasOwnProperty(e)?nn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Vv(e,n,r,i)&&(n=null),i||r===null?Hv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Gi=kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ba=Symbol.for("react.element"),Ds=Symbol.for("react.portal"),Us=Symbol.for("react.fragment"),vd=Symbol.for("react.strict_mode"),sf=Symbol.for("react.profiler"),Cg=Symbol.for("react.provider"),bg=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),of=Symbol.for("react.suspense"),af=Symbol.for("react.suspense_list"),yd=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),Pg=Symbol.for("react.offscreen"),yh=Symbol.iterator;function yo(t){return t===null||typeof t!="object"?null:(t=yh&&t[yh]||t["@@iterator"],typeof t=="function"?t:null)}var Ut=Object.assign,Gc;function zo(t){if(Gc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gc=e&&e[1]||""}return`
`+Gc+t}var Vc=!1;function Wc(t,e){if(!t||Vc)return"";Vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zo(t):""}function Wv(t){switch(t.tag){case 5:return zo(t.type);case 16:return zo("Lazy");case 13:return zo("Suspense");case 19:return zo("SuspenseList");case 0:case 2:case 15:return t=Wc(t.type,!1),t;case 11:return t=Wc(t.type.render,!1),t;case 1:return t=Wc(t.type,!0),t;default:return""}}function lf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Us:return"Fragment";case Ds:return"Portal";case sf:return"Profiler";case vd:return"StrictMode";case of:return"Suspense";case af:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case bg:return(t.displayName||"Context")+".Consumer";case Cg:return(t._context.displayName||"Context")+".Provider";case xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yd:return e=t.displayName||null,e!==null?e:lf(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return lf(t(e))}catch{}}return null}function Xv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lf(e);case 8:return e===vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jv(t){var e=Lg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pa(t){t._valueTracker||(t._valueTracker=jv(t))}function Ng(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Lg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cf(t,e){var n=e.checked;return Ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dg(t,e){e=e.checked,e!=null&&_d(t,"checked",e,!1)}function uf(t,e){Dg(t,e);var n=yr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ff(t,e.type,n):e.hasOwnProperty("defaultValue")&&ff(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ff(t,e,n){(e!=="number"||kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ko=Array.isArray;function Ys(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function df(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Eh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(ko(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function Ug(t,e){var n=yr(e.value),i=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function wh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ig(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ig(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var La,Fg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(La=La||document.createElement("div"),La.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=La.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yv=["Webkit","ms","Moz","O"];Object.keys(Go).forEach(function(t){Yv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Go[e]=Go[t]})});function Og(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Go.hasOwnProperty(t)&&Go[t]?(""+e).trim():e+"px"}function zg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Og(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var qv=Ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pf(t,e){if(e){if(qv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function mf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gf=null;function Sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _f=null,qs=null,$s=null;function Th(t){if(t=ya(t)){if(typeof _f!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Sc(e),_f(t.stateNode,t.type,e))}}function kg(t){qs?$s?$s.push(t):$s=[t]:qs=t}function Bg(){if(qs){var t=qs,e=$s;if($s=qs=null,Th(t),e)for(t=0;t<e.length;t++)Th(e[t])}}function Hg(t,e){return t(e)}function Gg(){}var Xc=!1;function Vg(t,e,n){if(Xc)return t(e,n);Xc=!0;try{return Hg(t,e,n)}finally{Xc=!1,(qs!==null||$s!==null)&&(Gg(),Bg())}}function Jo(t,e){var n=t.stateNode;if(n===null)return null;var i=Sc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var vf=!1;if(Oi)try{var So={};Object.defineProperty(So,"passive",{get:function(){vf=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{vf=!1}function $v(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Vo=!1,Bl=null,Hl=!1,xf=null,Kv={onError:function(t){Vo=!0,Bl=t}};function Zv(t,e,n,i,r,s,o,a,l){Vo=!1,Bl=null,$v.apply(Kv,arguments)}function Qv(t,e,n,i,r,s,o,a,l){if(Zv.apply(this,arguments),Vo){if(Vo){var c=Bl;Vo=!1,Bl=null}else throw Error(se(198));Hl||(Hl=!0,xf=c)}}function ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ah(t){if(ss(t)!==t)throw Error(se(188))}function Jv(t){var e=t.alternate;if(!e){if(e=ss(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ah(r),t;if(s===i)return Ah(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Xg(t){return t=Jv(t),t!==null?jg(t):null}function jg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jg(t);if(e!==null)return e;t=t.sibling}return null}var Yg=On.unstable_scheduleCallback,Rh=On.unstable_cancelCallback,ex=On.unstable_shouldYield,tx=On.unstable_requestPaint,zt=On.unstable_now,nx=On.unstable_getCurrentPriorityLevel,Md=On.unstable_ImmediatePriority,qg=On.unstable_UserBlockingPriority,Gl=On.unstable_NormalPriority,ix=On.unstable_LowPriority,$g=On.unstable_IdlePriority,_c=null,xi=null;function rx(t){if(xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(_c,t,void 0,(t.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:ax,sx=Math.log,ox=Math.LN2;function ax(t){return t>>>=0,t===0?32:31-(sx(t)/ox|0)|0}var Na=64,Da=4194304;function Bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Bo(a):(s&=o,s!==0&&(i=Bo(s)))}else o=n&~r,o!==0?i=Bo(o):s!==0&&(i=Bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ai(e),r=1<<n,i|=t[n],e&=~r;return i}function lx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ai(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=lx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function yf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kg(){var t=Na;return Na<<=1,!(Na&4194240)&&(Na=64),t}function jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ai(e),t[e]=n}function ux(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ai(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ed(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ai(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var mt=0;function Zg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qg,wd,Jg,e0,t0,Sf=!1,Ua=[],lr=null,cr=null,ur=null,ea=new Map,ta=new Map,nr=[],fx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ch(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(e.pointerId)}}function Mo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ya(e),e!==null&&wd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function dx(t,e,n,i,r){switch(e){case"focusin":return lr=Mo(lr,t,e,n,i,r),!0;case"dragenter":return cr=Mo(cr,t,e,n,i,r),!0;case"mouseover":return ur=Mo(ur,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ea.set(s,Mo(ea.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ta.set(s,Mo(ta.get(s)||null,t,e,n,i,r)),!0}return!1}function n0(t){var e=Wr(t.target);if(e!==null){var n=ss(e);if(n!==null){if(e=n.tag,e===13){if(e=Wg(n),e!==null){t.blockedOn=e,t0(t.priority,function(){Jg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);gf=i,n.target.dispatchEvent(i),gf=null}else return e=ya(n),e!==null&&wd(e),t.blockedOn=n,!1;e.shift()}return!0}function bh(t,e,n){Rl(t)&&n.delete(e)}function hx(){Sf=!1,lr!==null&&Rl(lr)&&(lr=null),cr!==null&&Rl(cr)&&(cr=null),ur!==null&&Rl(ur)&&(ur=null),ea.forEach(bh),ta.forEach(bh)}function Eo(t,e){t.blockedOn===e&&(t.blockedOn=null,Sf||(Sf=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,hx)))}function na(t){function e(r){return Eo(r,t)}if(0<Ua.length){Eo(Ua[0],t);for(var n=1;n<Ua.length;n++){var i=Ua[n];i.blockedOn===t&&(i.blockedOn=null)}}for(lr!==null&&Eo(lr,t),cr!==null&&Eo(cr,t),ur!==null&&Eo(ur,t),ea.forEach(e),ta.forEach(e),n=0;n<nr.length;n++)i=nr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)n0(n),n.blockedOn===null&&nr.shift()}var Ks=Gi.ReactCurrentBatchConfig,Wl=!0;function px(t,e,n,i){var r=mt,s=Ks.transition;Ks.transition=null;try{mt=1,Td(t,e,n,i)}finally{mt=r,Ks.transition=s}}function mx(t,e,n,i){var r=mt,s=Ks.transition;Ks.transition=null;try{mt=4,Td(t,e,n,i)}finally{mt=r,Ks.transition=s}}function Td(t,e,n,i){if(Wl){var r=Mf(t,e,n,i);if(r===null)nu(t,e,i,Xl,n),Ch(t,i);else if(dx(r,t,e,n,i))i.stopPropagation();else if(Ch(t,i),e&4&&-1<fx.indexOf(t)){for(;r!==null;){var s=ya(r);if(s!==null&&Qg(s),s=Mf(t,e,n,i),s===null&&nu(t,e,i,Xl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else nu(t,e,i,null,n)}}var Xl=null;function Mf(t,e,n,i){if(Xl=null,t=Sd(i),t=Wr(t),t!==null)if(e=ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xl=t,null}function i0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nx()){case Md:return 1;case qg:return 4;case Gl:case ix:return 16;case $g:return 536870912;default:return 16}default:return 16}}var sr=null,Ad=null,Cl=null;function r0(){if(Cl)return Cl;var t,e=Ad,n=e.length,i,r="value"in sr?sr.value:sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Cl=r.slice(t,1<i?1-i:void 0)}function bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ia(){return!0}function Ph(){return!1}function kn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ia:Ph,this.isPropagationStopped=Ph,this}return Ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),e}var po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rd=kn(po),xa=Ut({},po,{view:0,detail:0}),gx=kn(xa),Yc,qc,wo,vc=Ut({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(Yc=t.screenX-wo.screenX,qc=t.screenY-wo.screenY):qc=Yc=0,wo=t),Yc)},movementY:function(t){return"movementY"in t?t.movementY:qc}}),Lh=kn(vc),_x=Ut({},vc,{dataTransfer:0}),vx=kn(_x),xx=Ut({},xa,{relatedTarget:0}),$c=kn(xx),yx=Ut({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),Sx=kn(yx),Mx=Ut({},po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ex=kn(Mx),wx=Ut({},po,{data:0}),Nh=kn(wx),Tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Rx[t])?!!e[t]:!1}function Cd(){return Cx}var bx=Ut({},xa,{key:function(t){if(t.key){var e=Tx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ax[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cd,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Px=kn(bx),Lx=Ut({},vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dh=kn(Lx),Nx=Ut({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cd}),Dx=kn(Nx),Ux=Ut({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ix=kn(Ux),Fx=Ut({},vc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ox=kn(Fx),zx=[9,13,27,32],bd=Oi&&"CompositionEvent"in window,Wo=null;Oi&&"documentMode"in document&&(Wo=document.documentMode);var kx=Oi&&"TextEvent"in window&&!Wo,s0=Oi&&(!bd||Wo&&8<Wo&&11>=Wo),Uh=" ",Ih=!1;function o0(t,e){switch(t){case"keyup":return zx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function a0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function Bx(t,e){switch(t){case"compositionend":return a0(e);case"keypress":return e.which!==32?null:(Ih=!0,Uh);case"textInput":return t=e.data,t===Uh&&Ih?null:t;default:return null}}function Hx(t,e){if(Is)return t==="compositionend"||!bd&&o0(t,e)?(t=r0(),Cl=Ad=sr=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return s0&&e.locale!=="ko"?null:e.data;default:return null}}var Gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Gx[t.type]:e==="textarea"}function l0(t,e,n,i){kg(i),e=jl(e,"onChange"),0<e.length&&(n=new Rd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Xo=null,ia=null;function Vx(t){x0(t,0)}function xc(t){var e=zs(t);if(Ng(e))return t}function Wx(t,e){if(t==="change")return e}var c0=!1;if(Oi){var Kc;if(Oi){var Zc="oninput"in document;if(!Zc){var Oh=document.createElement("div");Oh.setAttribute("oninput","return;"),Zc=typeof Oh.oninput=="function"}Kc=Zc}else Kc=!1;c0=Kc&&(!document.documentMode||9<document.documentMode)}function zh(){Xo&&(Xo.detachEvent("onpropertychange",u0),ia=Xo=null)}function u0(t){if(t.propertyName==="value"&&xc(ia)){var e=[];l0(e,ia,t,Sd(t)),Vg(Vx,e)}}function Xx(t,e,n){t==="focusin"?(zh(),Xo=e,ia=n,Xo.attachEvent("onpropertychange",u0)):t==="focusout"&&zh()}function jx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xc(ia)}function Yx(t,e){if(t==="click")return xc(e)}function qx(t,e){if(t==="input"||t==="change")return xc(e)}function $x(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ui=typeof Object.is=="function"?Object.is:$x;function ra(t,e){if(ui(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!rf.call(e,r)||!ui(t[r],e[r]))return!1}return!0}function kh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bh(t,e){var n=kh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kh(n)}}function f0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?f0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function d0(){for(var t=window,e=kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kl(t.document)}return e}function Pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Kx(t){var e=d0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&f0(n.ownerDocument.documentElement,n)){if(i!==null&&Pd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Bh(n,s);var o=Bh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zx=Oi&&"documentMode"in document&&11>=document.documentMode,Fs=null,Ef=null,jo=null,wf=!1;function Hh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wf||Fs==null||Fs!==kl(i)||(i=Fs,"selectionStart"in i&&Pd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jo&&ra(jo,i)||(jo=i,i=jl(Ef,"onSelect"),0<i.length&&(e=new Rd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Fs)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},Qc={},h0={};Oi&&(h0=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function yc(t){if(Qc[t])return Qc[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in h0)return Qc[t]=e[n];return t}var p0=yc("animationend"),m0=yc("animationiteration"),g0=yc("animationstart"),_0=yc("transitionend"),v0=new Map,Gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){v0.set(t,e),rs(e,[t])}for(var Jc=0;Jc<Gh.length;Jc++){var eu=Gh[Jc],Qx=eu.toLowerCase(),Jx=eu[0].toUpperCase()+eu.slice(1);wr(Qx,"on"+Jx)}wr(p0,"onAnimationEnd");wr(m0,"onAnimationIteration");wr(g0,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(_0,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ey=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function Vh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Qv(i,e,void 0,t),t.currentTarget=null}function x0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Vh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Vh(r,a,c),s=l}}}if(Hl)throw t=xf,Hl=!1,xf=null,t}function Mt(t,e){var n=e[bf];n===void 0&&(n=e[bf]=new Set);var i=t+"__bubble";n.has(i)||(y0(e,t,2,!1),n.add(i))}function tu(t,e,n){var i=0;e&&(i|=4),y0(n,t,i,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function sa(t){if(!t[Oa]){t[Oa]=!0,Rg.forEach(function(n){n!=="selectionchange"&&(ey.has(n)||tu(n,!1,t),tu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,tu("selectionchange",!1,e))}}function y0(t,e,n,i){switch(i0(e)){case 1:var r=px;break;case 4:r=mx;break;default:r=Td}n=r.bind(null,e,n,t),r=void 0,!vf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function nu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Wr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Vg(function(){var c=s,f=Sd(n),d=[];e:{var h=v0.get(t);if(h!==void 0){var m=Rd,_=t;switch(t){case"keypress":if(bl(n)===0)break e;case"keydown":case"keyup":m=Px;break;case"focusin":_="focus",m=$c;break;case"focusout":_="blur",m=$c;break;case"beforeblur":case"afterblur":m=$c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Dx;break;case p0:case m0:case g0:m=Sx;break;case _0:m=Ix;break;case"scroll":m=gx;break;case"wheel":m=Ox;break;case"copy":case"cut":case"paste":m=Ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Dh}var x=(e&4)!==0,p=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var v=c,g;v!==null;){g=v;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,u!==null&&(S=Jo(v,u),S!=null&&x.push(oa(v,S,g)))),p)break;v=v.return}0<x.length&&(h=new m(h,_,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==gf&&(_=n.relatedTarget||n.fromElement)&&(Wr(_)||_[zi]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Wr(_):null,_!==null&&(p=ss(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(x=Lh,S="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Dh,S="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?h:zs(m),g=_==null?h:zs(_),h=new x(S,v+"leave",m,n,f),h.target=p,h.relatedTarget=g,S=null,Wr(f)===c&&(x=new x(u,v+"enter",_,n,f),x.target=g,x.relatedTarget=p,S=x),p=S,m&&_)t:{for(x=m,u=_,v=0,g=x;g;g=us(g))v++;for(g=0,S=u;S;S=us(S))g++;for(;0<v-g;)x=us(x),v--;for(;0<g-v;)u=us(u),g--;for(;v--;){if(x===u||u!==null&&x===u.alternate)break t;x=us(x),u=us(u)}x=null}else x=null;m!==null&&Wh(d,h,m,x,!1),_!==null&&p!==null&&Wh(d,p,_,x,!0)}}e:{if(h=c?zs(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var A=Wx;else if(Fh(h))if(c0)A=qx;else{A=jx;var T=Xx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=Yx);if(A&&(A=A(t,c))){l0(d,A,n,f);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&ff(h,"number",h.value)}switch(T=c?zs(c):window,t){case"focusin":(Fh(T)||T.contentEditable==="true")&&(Fs=T,Ef=c,jo=null);break;case"focusout":jo=Ef=Fs=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,Hh(d,n,f);break;case"selectionchange":if(Zx)break;case"keydown":case"keyup":Hh(d,n,f)}var w;if(bd)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Is?o0(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(s0&&n.locale!=="ko"&&(Is||b!=="onCompositionStart"?b==="onCompositionEnd"&&Is&&(w=r0()):(sr=f,Ad="value"in sr?sr.value:sr.textContent,Is=!0)),T=jl(c,b),0<T.length&&(b=new Nh(b,t,null,n,f),d.push({event:b,listeners:T}),w?b.data=w:(w=a0(n),w!==null&&(b.data=w)))),(w=kx?Bx(t,n):Hx(t,n))&&(c=jl(c,"onBeforeInput"),0<c.length&&(f=new Nh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=w))}x0(d,e)})}function oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function jl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Jo(t,n),s!=null&&i.unshift(oa(t,s,r)),s=Jo(t,e),s!=null&&i.push(oa(t,s,r))),t=t.return}return i}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Jo(n,s),l!=null&&o.unshift(oa(n,l,a))):r||(l=Jo(n,s),l!=null&&o.push(oa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ty=/\r\n?/g,ny=/\u0000|\uFFFD/g;function Xh(t){return(typeof t=="string"?t:""+t).replace(ty,`
`).replace(ny,"")}function za(t,e,n){if(e=Xh(e),Xh(t)!==e&&n)throw Error(se(425))}function Yl(){}var Tf=null,Af=null;function Rf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cf=typeof setTimeout=="function"?setTimeout:void 0,iy=typeof clearTimeout=="function"?clearTimeout:void 0,jh=typeof Promise=="function"?Promise:void 0,ry=typeof queueMicrotask=="function"?queueMicrotask:typeof jh<"u"?function(t){return jh.resolve(null).then(t).catch(sy)}:Cf;function sy(t){setTimeout(function(){throw t})}function iu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),na(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);na(e)}function fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var mo=Math.random().toString(36).slice(2),gi="__reactFiber$"+mo,aa="__reactProps$"+mo,zi="__reactContainer$"+mo,bf="__reactEvents$"+mo,oy="__reactListeners$"+mo,ay="__reactHandles$"+mo;function Wr(t){var e=t[gi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zi]||n[gi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yh(t);t!==null;){if(n=t[gi])return n;t=Yh(t)}return e}t=n,n=t.parentNode}return null}function ya(t){return t=t[gi]||t[zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Sc(t){return t[aa]||null}var Pf=[],ks=-1;function Tr(t){return{current:t}}function Tt(t){0>ks||(t.current=Pf[ks],Pf[ks]=null,ks--)}function St(t,e){ks++,Pf[ks]=t.current,t.current=e}var Sr={},fn=Tr(Sr),Tn=Tr(!1),Qr=Sr;function no(t,e){var n=t.type.contextTypes;if(!n)return Sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function An(t){return t=t.childContextTypes,t!=null}function ql(){Tt(Tn),Tt(fn)}function qh(t,e,n){if(fn.current!==Sr)throw Error(se(168));St(fn,e),St(Tn,n)}function S0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,Xv(t)||"Unknown",r));return Ut({},n,i)}function $l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,Qr=fn.current,St(fn,t),St(Tn,Tn.current),!0}function $h(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=S0(t,e,Qr),i.__reactInternalMemoizedMergedChildContext=t,Tt(Tn),Tt(fn),St(fn,t)):Tt(Tn),St(Tn,n)}var Li=null,Mc=!1,ru=!1;function M0(t){Li===null?Li=[t]:Li.push(t)}function ly(t){Mc=!0,M0(t)}function Ar(){if(!ru&&Li!==null){ru=!0;var t=0,e=mt;try{var n=Li;for(mt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Li=null,Mc=!1}catch(r){throw Li!==null&&(Li=Li.slice(t+1)),Yg(Md,Ar),r}finally{mt=e,ru=!1}}return null}var Bs=[],Hs=0,Kl=null,Zl=0,Vn=[],Wn=0,Jr=null,Di=1,Ui="";function zr(t,e){Bs[Hs++]=Zl,Bs[Hs++]=Kl,Kl=t,Zl=e}function E0(t,e,n){Vn[Wn++]=Di,Vn[Wn++]=Ui,Vn[Wn++]=Jr,Jr=t;var i=Di;t=Ui;var r=32-ai(i)-1;i&=~(1<<r),n+=1;var s=32-ai(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Di=1<<32-ai(e)+r|n<<r|i,Ui=s+t}else Di=1<<s|n<<r|i,Ui=t}function Ld(t){t.return!==null&&(zr(t,1),E0(t,1,0))}function Nd(t){for(;t===Kl;)Kl=Bs[--Hs],Bs[Hs]=null,Zl=Bs[--Hs],Bs[Hs]=null;for(;t===Jr;)Jr=Vn[--Wn],Vn[Wn]=null,Ui=Vn[--Wn],Vn[Wn]=null,Di=Vn[--Wn],Vn[Wn]=null}var Fn=null,In=null,Rt=!1,ri=null;function w0(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fn=t,In=fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fn=t,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:Di,overflow:Ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Fn=t,In=null,!0):!1;default:return!1}}function Lf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nf(t){if(Rt){var e=In;if(e){var n=e;if(!Kh(t,e)){if(Lf(t))throw Error(se(418));e=fr(n.nextSibling);var i=Fn;e&&Kh(t,e)?w0(i,n):(t.flags=t.flags&-4097|2,Rt=!1,Fn=t)}}else{if(Lf(t))throw Error(se(418));t.flags=t.flags&-4097|2,Rt=!1,Fn=t}}}function Zh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function ka(t){if(t!==Fn)return!1;if(!Rt)return Zh(t),Rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rf(t.type,t.memoizedProps)),e&&(e=In)){if(Lf(t))throw T0(),Error(se(418));for(;e;)w0(t,e),e=fr(e.nextSibling)}if(Zh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){In=fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}In=null}}else In=Fn?fr(t.stateNode.nextSibling):null;return!0}function T0(){for(var t=In;t;)t=fr(t.nextSibling)}function io(){In=Fn=null,Rt=!1}function Dd(t){ri===null?ri=[t]:ri.push(t)}var cy=Gi.ReactCurrentBatchConfig;function To(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Ba(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qh(t){var e=t._init;return e(t._payload)}function A0(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=mr(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,g,S){return v===null||v.tag!==6?(v=fu(g,u.mode,S),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,S){var A=g.type;return A===Us?f(u,v,g.props.children,S,g.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===er&&Qh(A)===v.type)?(S=r(v,g.props),S.ref=To(u,v,g),S.return=u,S):(S=Fl(g.type,g.key,g.props,null,u.mode,S),S.ref=To(u,v,g),S.return=u,S)}function c(u,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=du(g,u.mode,S),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function f(u,v,g,S,A){return v===null||v.tag!==7?(v=$r(g,u.mode,S,A),v.return=u,v):(v=r(v,g),v.return=u,v)}function d(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=fu(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ba:return g=Fl(v.type,v.key,v.props,null,u.mode,g),g.ref=To(u,null,v),g.return=u,g;case Ds:return v=du(v,u.mode,g),v.return=u,v;case er:var S=v._init;return d(u,S(v._payload),g)}if(ko(v)||yo(v))return v=$r(v,u.mode,g,null),v.return=u,v;Ba(u,v)}return null}function h(u,v,g,S){var A=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:a(u,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ba:return g.key===A?l(u,v,g,S):null;case Ds:return g.key===A?c(u,v,g,S):null;case er:return A=g._init,h(u,v,A(g._payload),S)}if(ko(g)||yo(g))return A!==null?null:f(u,v,g,S,null);Ba(u,g)}return null}function m(u,v,g,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(g)||null,a(v,u,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ba:return u=u.get(S.key===null?g:S.key)||null,l(v,u,S,A);case Ds:return u=u.get(S.key===null?g:S.key)||null,c(v,u,S,A);case er:var T=S._init;return m(u,v,g,T(S._payload),A)}if(ko(S)||yo(S))return u=u.get(g)||null,f(v,u,S,A,null);Ba(v,S)}return null}function _(u,v,g,S){for(var A=null,T=null,w=v,b=v=0,Y=null;w!==null&&b<g.length;b++){w.index>b?(Y=w,w=null):Y=w.sibling;var y=h(u,w,g[b],S);if(y===null){w===null&&(w=Y);break}t&&w&&y.alternate===null&&e(u,w),v=s(y,v,b),T===null?A=y:T.sibling=y,T=y,w=Y}if(b===g.length)return n(u,w),Rt&&zr(u,b),A;if(w===null){for(;b<g.length;b++)w=d(u,g[b],S),w!==null&&(v=s(w,v,b),T===null?A=w:T.sibling=w,T=w);return Rt&&zr(u,b),A}for(w=i(u,w);b<g.length;b++)Y=m(w,u,b,g[b],S),Y!==null&&(t&&Y.alternate!==null&&w.delete(Y.key===null?b:Y.key),v=s(Y,v,b),T===null?A=Y:T.sibling=Y,T=Y);return t&&w.forEach(function(C){return e(u,C)}),Rt&&zr(u,b),A}function x(u,v,g,S){var A=yo(g);if(typeof A!="function")throw Error(se(150));if(g=A.call(g),g==null)throw Error(se(151));for(var T=A=null,w=v,b=v=0,Y=null,y=g.next();w!==null&&!y.done;b++,y=g.next()){w.index>b?(Y=w,w=null):Y=w.sibling;var C=h(u,w,y.value,S);if(C===null){w===null&&(w=Y);break}t&&w&&C.alternate===null&&e(u,w),v=s(C,v,b),T===null?A=C:T.sibling=C,T=C,w=Y}if(y.done)return n(u,w),Rt&&zr(u,b),A;if(w===null){for(;!y.done;b++,y=g.next())y=d(u,y.value,S),y!==null&&(v=s(y,v,b),T===null?A=y:T.sibling=y,T=y);return Rt&&zr(u,b),A}for(w=i(u,w);!y.done;b++,y=g.next())y=m(w,u,b,y.value,S),y!==null&&(t&&y.alternate!==null&&w.delete(y.key===null?b:y.key),v=s(y,v,b),T===null?A=y:T.sibling=y,T=y);return t&&w.forEach(function(J){return e(u,J)}),Rt&&zr(u,b),A}function p(u,v,g,S){if(typeof g=="object"&&g!==null&&g.type===Us&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ba:e:{for(var A=g.key,T=v;T!==null;){if(T.key===A){if(A=g.type,A===Us){if(T.tag===7){n(u,T.sibling),v=r(T,g.props.children),v.return=u,u=v;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===er&&Qh(A)===T.type){n(u,T.sibling),v=r(T,g.props),v.ref=To(u,T,g),v.return=u,u=v;break e}n(u,T);break}else e(u,T);T=T.sibling}g.type===Us?(v=$r(g.props.children,u.mode,S,g.key),v.return=u,u=v):(S=Fl(g.type,g.key,g.props,null,u.mode,S),S.ref=To(u,v,g),S.return=u,u=S)}return o(u);case Ds:e:{for(T=g.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=du(g,u.mode,S),v.return=u,u=v}return o(u);case er:return T=g._init,p(u,v,T(g._payload),S)}if(ko(g))return _(u,v,g,S);if(yo(g))return x(u,v,g,S);Ba(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=fu(g,u.mode,S),v.return=u,u=v),o(u)):n(u,v)}return p}var ro=A0(!0),R0=A0(!1),Ql=Tr(null),Jl=null,Gs=null,Ud=null;function Id(){Ud=Gs=Jl=null}function Fd(t){var e=Ql.current;Tt(Ql),t._currentValue=e}function Df(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Zs(t,e){Jl=t,Ud=Gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wn=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(Ud!==t)if(t={context:t,memoizedValue:e,next:null},Gs===null){if(Jl===null)throw Error(se(308));Gs=t,Jl.dependencies={lanes:0,firstContext:t}}else Gs=Gs.next=t;return e}var Xr=null;function Od(t){Xr===null?Xr=[t]:Xr.push(t)}function C0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Od(e)):(n.next=r.next,r.next=n),e.interleaved=n,ki(t,i)}function ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function zd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,dt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ki(t,n)}return r=i.interleaved,r===null?(e.next=e,Od(i)):(e.next=r.next,r.next=e),i.interleaved=e,ki(t,n)}function Pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ed(t,n)}}function Jh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ec(t,e,n,i){var r=t.updateQueue;tr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(h=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(m,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break e;d=Ut({},d,h);break e;case 2:tr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=d):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ts|=o,t.lanes=o,t.memoizedState=d}}function ep(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Sa={},yi=Tr(Sa),la=Tr(Sa),ca=Tr(Sa);function jr(t){if(t===Sa)throw Error(se(174));return t}function kd(t,e){switch(St(ca,e),St(la,t),St(yi,Sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hf(e,t)}Tt(yi),St(yi,e)}function so(){Tt(yi),Tt(la),Tt(ca)}function P0(t){jr(ca.current);var e=jr(yi.current),n=hf(e,t.type);e!==n&&(St(la,t),St(yi,n))}function Bd(t){la.current===t&&(Tt(yi),Tt(la))}var Nt=Tr(0);function tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var su=[];function Hd(){for(var t=0;t<su.length;t++)su[t]._workInProgressVersionPrimary=null;su.length=0}var Ll=Gi.ReactCurrentDispatcher,ou=Gi.ReactCurrentBatchConfig,es=0,Dt=null,Xt=null,Qt=null,nc=!1,Yo=!1,ua=0,uy=0;function rn(){throw Error(se(321))}function Gd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ui(t[n],e[n]))return!1;return!0}function Vd(t,e,n,i,r,s){if(es=s,Dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ll.current=t===null||t.memoizedState===null?py:my,t=n(i,r),Yo){s=0;do{if(Yo=!1,ua=0,25<=s)throw Error(se(301));s+=1,Qt=Xt=null,e.updateQueue=null,Ll.current=gy,t=n(i,r)}while(Yo)}if(Ll.current=ic,e=Xt!==null&&Xt.next!==null,es=0,Qt=Xt=Dt=null,nc=!1,e)throw Error(se(300));return t}function Wd(){var t=ua!==0;return ua=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?Dt.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function Kn(){if(Xt===null){var t=Dt.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var e=Qt===null?Dt.memoizedState:Qt.next;if(e!==null)Qt=e,Xt=t;else{if(t===null)throw Error(se(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Qt===null?Dt.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function fa(t,e){return typeof e=="function"?e(t):e}function au(t){var e=Kn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Xt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((es&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Dt.lanes|=f,ts|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ui(i,e.memoizedState)||(wn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Dt.lanes|=s,ts|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lu(t){var e=Kn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ui(s,e.memoizedState)||(wn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function L0(){}function N0(t,e){var n=Dt,i=Kn(),r=e(),s=!ui(i.memoizedState,r);if(s&&(i.memoizedState=r,wn=!0),i=i.queue,Xd(I0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Qt!==null&&Qt.memoizedState.tag&1){if(n.flags|=2048,da(9,U0.bind(null,n,i,r,e),void 0,null),Jt===null)throw Error(se(349));es&30||D0(n,e,r)}return r}function D0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function U0(t,e,n,i){e.value=n,e.getSnapshot=i,F0(e)&&O0(t)}function I0(t,e,n){return n(function(){F0(e)&&O0(t)})}function F0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ui(t,n)}catch{return!0}}function O0(t){var e=ki(t,1);e!==null&&li(e,t,1,-1)}function tp(t){var e=pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},e.queue=t,t=t.dispatch=hy.bind(null,Dt,t),[e.memoizedState,t]}function da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function z0(){return Kn().memoizedState}function Nl(t,e,n,i){var r=pi();Dt.flags|=t,r.memoizedState=da(1|e,n,void 0,i===void 0?null:i)}function Ec(t,e,n,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(Xt!==null){var o=Xt.memoizedState;if(s=o.destroy,i!==null&&Gd(i,o.deps)){r.memoizedState=da(e,n,s,i);return}}Dt.flags|=t,r.memoizedState=da(1|e,n,s,i)}function np(t,e){return Nl(8390656,8,t,e)}function Xd(t,e){return Ec(2048,8,t,e)}function k0(t,e){return Ec(4,2,t,e)}function B0(t,e){return Ec(4,4,t,e)}function H0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function G0(t,e,n){return n=n!=null?n.concat([t]):null,Ec(4,4,H0.bind(null,e,t),n)}function jd(){}function V0(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function W0(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function X0(t,e,n){return es&21?(ui(n,e)||(n=Kg(),Dt.lanes|=n,ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wn=!0),t.memoizedState=n)}function fy(t,e){var n=mt;mt=n!==0&&4>n?n:4,t(!0);var i=ou.transition;ou.transition={};try{t(!1),e()}finally{mt=n,ou.transition=i}}function j0(){return Kn().memoizedState}function dy(t,e,n){var i=pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Y0(t))q0(e,n);else if(n=C0(t,e,n,i),n!==null){var r=gn();li(n,t,i,r),$0(n,e,i)}}function hy(t,e,n){var i=pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Y0(t))q0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ui(a,o)){var l=e.interleaved;l===null?(r.next=r,Od(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=C0(t,e,r,i),n!==null&&(r=gn(),li(n,t,i,r),$0(n,e,i))}}function Y0(t){var e=t.alternate;return t===Dt||e!==null&&e===Dt}function q0(t,e){Yo=nc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ed(t,n)}}var ic={readContext:$n,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},py={readContext:$n,useCallback:function(t,e){return pi().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:np,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,H0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=dy.bind(null,Dt,t),[i.memoizedState,t]},useRef:function(t){var e=pi();return t={current:t},e.memoizedState=t},useState:tp,useDebugValue:jd,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=tp(!1),e=t[0];return t=fy.bind(null,t[1]),pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Dt,r=pi();if(Rt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Jt===null)throw Error(se(349));es&30||D0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,np(I0.bind(null,i,s,t),[t]),i.flags|=2048,da(9,U0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=pi(),e=Jt.identifierPrefix;if(Rt){var n=Ui,i=Di;n=(i&~(1<<32-ai(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},my={readContext:$n,useCallback:V0,useContext:$n,useEffect:Xd,useImperativeHandle:G0,useInsertionEffect:k0,useLayoutEffect:B0,useMemo:W0,useReducer:au,useRef:z0,useState:function(){return au(fa)},useDebugValue:jd,useDeferredValue:function(t){var e=Kn();return X0(e,Xt.memoizedState,t)},useTransition:function(){var t=au(fa)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:L0,useSyncExternalStore:N0,useId:j0,unstable_isNewReconciler:!1},gy={readContext:$n,useCallback:V0,useContext:$n,useEffect:Xd,useImperativeHandle:G0,useInsertionEffect:k0,useLayoutEffect:B0,useMemo:W0,useReducer:lu,useRef:z0,useState:function(){return lu(fa)},useDebugValue:jd,useDeferredValue:function(t){var e=Kn();return Xt===null?e.memoizedState=t:X0(e,Xt.memoizedState,t)},useTransition:function(){var t=lu(fa)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:L0,useSyncExternalStore:N0,useId:j0,unstable_isNewReconciler:!1};function ni(t,e){if(t&&t.defaultProps){e=Ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Uf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wc={isMounted:function(t){return(t=t._reactInternals)?ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=gn(),r=pr(t),s=Fi(i,r);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,r),e!==null&&(li(e,t,r,i),Pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=gn(),r=pr(t),s=Fi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,r),e!==null&&(li(e,t,r,i),Pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gn(),i=pr(t),r=Fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=dr(t,r,i),e!==null&&(li(e,t,i,n),Pl(e,t,i))}};function ip(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ra(n,i)||!ra(r,s):!0}function K0(t,e,n){var i=!1,r=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=An(e)?Qr:fn.current,i=e.contextTypes,s=(i=i!=null)?no(t,r):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function rp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&wc.enqueueReplaceState(e,e.state,null)}function If(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},zd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=An(e)?Qr:fn.current,r.context=no(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Uf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wc.enqueueReplaceState(r,r.state,null),ec(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function oo(t,e){try{var n="",i=e;do n+=Wv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function cu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ff(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _y=typeof WeakMap=="function"?WeakMap:Map;function Z0(t,e,n){n=Fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){sc||(sc=!0,jf=i),Ff(t,e)},n}function Q0(t,e,n){n=Fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ff(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ff(t,e),typeof i!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new _y;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ly.bind(null,t,e,n),e.then(t,t))}function op(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ap(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fi(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var vy=Gi.ReactCurrentOwner,wn=!1;function pn(t,e,n,i){e.child=t===null?R0(e,null,n,i):ro(e,t.child,n,i)}function lp(t,e,n,i,r){n=n.render;var s=e.ref;return Zs(e,r),i=Vd(t,e,n,i,s,r),n=Wd(),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(Rt&&n&&Ld(e),e.flags|=1,pn(t,e,i,r),e.child)}function cp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!eh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,J0(t,e,s,i,r)):(t=Fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(o,i)&&t.ref===e.ref)return Bi(t,e,r)}return e.flags|=1,t=mr(s,i),t.ref=e.ref,t.return=e,e.child=t}function J0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ra(s,i)&&t.ref===e.ref)if(wn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(wn=!0);else return e.lanes=t.lanes,Bi(t,e,r)}return Of(t,e,n,i,r)}function e_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},St(Ws,Nn),Nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,St(Ws,Nn),Nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,St(Ws,Nn),Nn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,St(Ws,Nn),Nn|=i;return pn(t,e,r,n),e.child}function t_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Of(t,e,n,i,r){var s=An(n)?Qr:fn.current;return s=no(e,s),Zs(e,r),n=Vd(t,e,n,i,s,r),i=Wd(),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(Rt&&i&&Ld(e),e.flags|=1,pn(t,e,n,r),e.child)}function up(t,e,n,i,r){if(An(n)){var s=!0;$l(e)}else s=!1;if(Zs(e,r),e.stateNode===null)Dl(t,e),K0(e,n,i),If(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$n(c):(c=An(n)?Qr:fn.current,c=no(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&rp(e,o,i,c),tr=!1;var h=e.memoizedState;o.state=h,ec(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Tn.current||tr?(typeof f=="function"&&(Uf(e,n,f,i),l=e.memoizedState),(a=tr||ip(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,b0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ni(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$n(l):(l=An(n)?Qr:fn.current,l=no(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&rp(e,o,i,l),tr=!1,h=e.memoizedState,o.state=h,ec(e,i,o,r);var _=e.memoizedState;a!==d||h!==_||Tn.current||tr?(typeof m=="function"&&(Uf(e,n,m,i),_=e.memoizedState),(c=tr||ip(e,n,c,i,h,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return zf(t,e,n,i,s,r)}function zf(t,e,n,i,r,s){t_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&$h(e,n,!1),Bi(t,e,s);i=e.stateNode,vy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ro(e,t.child,null,s),e.child=ro(e,null,a,s)):pn(t,e,a,s),e.memoizedState=i.state,r&&$h(e,n,!0),e.child}function n_(t){var e=t.stateNode;e.pendingContext?qh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qh(t,e.context,!1),kd(t,e.containerInfo)}function fp(t,e,n,i,r){return io(),Dd(r),e.flags|=256,pn(t,e,n,i),e.child}var kf={dehydrated:null,treeContext:null,retryLane:0};function Bf(t){return{baseLanes:t,cachePool:null,transitions:null}}function i_(t,e,n){var i=e.pendingProps,r=Nt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),St(Nt,r&1),t===null)return Nf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rc(o,i,0,null),t=$r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bf(n),e.memoizedState=kf,t):Yd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return xy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=mr(a,s):(s=$r(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Bf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kf,i}return s=t.child,t=s.sibling,i=mr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Yd(t,e){return e=Rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ha(t,e,n,i){return i!==null&&Dd(i),ro(e,t.child,null,n),t=Yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=cu(Error(se(422))),Ha(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Rc({mode:"visible",children:i.children},r,0,null),s=$r(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ro(e,t.child,null,o),e.child.memoizedState=Bf(o),e.memoizedState=kf,s);if(!(e.mode&1))return Ha(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=cu(s,i,void 0),Ha(t,e,o,i)}if(a=(o&t.childLanes)!==0,wn||a){if(i=Jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ki(t,r),li(i,t,r,-1))}return Jd(),i=cu(Error(se(421))),Ha(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ny.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,In=fr(r.nextSibling),Fn=e,Rt=!0,ri=null,t!==null&&(Vn[Wn++]=Di,Vn[Wn++]=Ui,Vn[Wn++]=Jr,Di=t.id,Ui=t.overflow,Jr=e),e=Yd(e,i.children),e.flags|=4096,e)}function dp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Df(t.return,e,n)}function uu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function r_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(pn(t,e,i.children,n),i=Nt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dp(t,n,e);else if(t.tag===19)dp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(St(Nt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&tc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),uu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&tc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}uu(e,!0,n,null,s);break;case"together":uu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yy(t,e,n){switch(e.tag){case 3:n_(e),io();break;case 5:P0(e);break;case 1:An(e.type)&&$l(e);break;case 4:kd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;St(Ql,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(St(Nt,Nt.current&1),e.flags|=128,null):n&e.child.childLanes?i_(t,e,n):(St(Nt,Nt.current&1),t=Bi(t,e,n),t!==null?t.sibling:null);St(Nt,Nt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return r_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),St(Nt,Nt.current),i)break;return null;case 22:case 23:return e.lanes=0,e_(t,e,n)}return Bi(t,e,n)}var s_,Hf,o_,a_;s_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hf=function(){};o_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,jr(yi.current);var s=null;switch(n){case"input":r=cf(t,r),i=cf(t,i),s=[];break;case"select":r=Ut({},r,{value:void 0}),i=Ut({},i,{value:void 0}),s=[];break;case"textarea":r=df(t,r),i=df(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Yl)}pf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};a_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ao(t,e){if(!Rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Sy(t,e,n){var i=e.pendingProps;switch(Nd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(e),null;case 1:return An(e.type)&&ql(),sn(e),null;case 3:return i=e.stateNode,so(),Tt(Tn),Tt(fn),Hd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&($f(ri),ri=null))),Hf(t,e),sn(e),null;case 5:Bd(e);var r=jr(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)o_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return sn(e),null}if(t=jr(yi.current),ka(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[aa]=s,t=(e.mode&1)!==0,n){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(r=0;r<Ho.length;r++)Mt(Ho[r],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Sh(i,s),Mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Mt("invalid",i);break;case"textarea":Eh(i,s),Mt("invalid",i)}pf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&za(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&za(i.textContent,a,t),r=["children",""+a]):Zo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Mt("scroll",i)}switch(n){case"input":Pa(i),Mh(i,s,!0);break;case"textarea":Pa(i),wh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Yl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ig(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[gi]=e,t[aa]=i,s_(t,e,!1,!1),e.stateNode=t;e:{switch(o=mf(n,i),n){case"dialog":Mt("cancel",t),Mt("close",t),r=i;break;case"iframe":case"object":case"embed":Mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ho.length;r++)Mt(Ho[r],t);r=i;break;case"source":Mt("error",t),r=i;break;case"img":case"image":case"link":Mt("error",t),Mt("load",t),r=i;break;case"details":Mt("toggle",t),r=i;break;case"input":Sh(t,i),r=cf(t,i),Mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ut({},i,{value:void 0}),Mt("invalid",t);break;case"textarea":Eh(t,i),r=df(t,i),Mt("invalid",t);break;default:r=i}pf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?zg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Fg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qo(t,l):typeof l=="number"&&Qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Mt("scroll",t):l!=null&&_d(t,s,l,o))}switch(n){case"input":Pa(t),Mh(t,i,!1);break;case"textarea":Pa(t),wh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+yr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ys(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ys(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Yl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return sn(e),null;case 6:if(t&&e.stateNode!=null)a_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=jr(ca.current),jr(yi.current),ka(e)){if(i=e.stateNode,n=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==n)&&(t=Fn,t!==null))switch(t.tag){case 3:za(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return sn(e),null;case 13:if(Tt(Nt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Rt&&In!==null&&e.mode&1&&!(e.flags&128))T0(),io(),e.flags|=98560,s=!1;else if(s=ka(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[gi]=e}else io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sn(e),s=!1}else ri!==null&&($f(ri),ri=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Nt.current&1?jt===0&&(jt=3):Jd())),e.updateQueue!==null&&(e.flags|=4),sn(e),null);case 4:return so(),Hf(t,e),t===null&&sa(e.stateNode.containerInfo),sn(e),null;case 10:return Fd(e.type._context),sn(e),null;case 17:return An(e.type)&&ql(),sn(e),null;case 19:if(Tt(Nt),s=e.memoizedState,s===null)return sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ao(s,!1);else{if(jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=tc(t),o!==null){for(e.flags|=128,Ao(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return St(Nt,Nt.current&1|2),e.child}t=t.sibling}s.tail!==null&&zt()>ao&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304)}else{if(!i)if(t=tc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Rt)return sn(e),null}else 2*zt()-s.renderingStartTime>ao&&n!==1073741824&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=zt(),e.sibling=null,n=Nt.current,St(Nt,i?n&1|2:n&1),e):(sn(e),null);case 22:case 23:return Qd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Nn&1073741824&&(sn(e),e.subtreeFlags&6&&(e.flags|=8192)):sn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function My(t,e){switch(Nd(e),e.tag){case 1:return An(e.type)&&ql(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return so(),Tt(Tn),Tt(fn),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bd(e),null;case 13:if(Tt(Nt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));io()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Tt(Nt),null;case 4:return so(),null;case 10:return Fd(e.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var Ga=!1,cn=!1,Ey=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ft(t,e,i)}else n.current=null}function Gf(t,e,n){try{n()}catch(i){Ft(t,e,i)}}var hp=!1;function wy(t,e){if(Tf=Wl,t=d0(),Pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Af={focusedElem:t,selectionRange:n},Wl=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:ni(e.type,x),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){Ft(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return _=hp,hp=!1,_}function qo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Gf(e,n,s)}r=r.next}while(r!==i)}}function Tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Vf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function l_(t){var e=t.alternate;e!==null&&(t.alternate=null,l_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gi],delete e[aa],delete e[bf],delete e[oy],delete e[ay])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function c_(t){return t.tag===5||t.tag===3||t.tag===4}function pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||c_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yl));else if(i!==4&&(t=t.child,t!==null))for(Wf(t,e,n),t=t.sibling;t!==null;)Wf(t,e,n),t=t.sibling}function Xf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Xf(t,e,n),t=t.sibling;t!==null;)Xf(t,e,n),t=t.sibling}var en=null,ii=!1;function ji(t,e,n){for(n=n.child;n!==null;)u_(t,e,n),n=n.sibling}function u_(t,e,n){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(_c,n)}catch{}switch(n.tag){case 5:cn||Vs(n,e);case 6:var i=en,r=ii;en=null,ji(t,e,n),en=i,ii=r,en!==null&&(ii?(t=en,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):en.removeChild(n.stateNode));break;case 18:en!==null&&(ii?(t=en,n=n.stateNode,t.nodeType===8?iu(t.parentNode,n):t.nodeType===1&&iu(t,n),na(t)):iu(en,n.stateNode));break;case 4:i=en,r=ii,en=n.stateNode.containerInfo,ii=!0,ji(t,e,n),en=i,ii=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gf(n,e,o),r=r.next}while(r!==i)}ji(t,e,n);break;case 1:if(!cn&&(Vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ft(n,e,a)}ji(t,e,n);break;case 21:ji(t,e,n);break;case 22:n.mode&1?(cn=(i=cn)||n.memoizedState!==null,ji(t,e,n),cn=i):ji(t,e,n);break;default:ji(t,e,n)}}function mp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ey),e.forEach(function(i){var r=Dy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:en=a.stateNode,ii=!1;break e;case 3:en=a.stateNode.containerInfo,ii=!0;break e;case 4:en=a.stateNode.containerInfo,ii=!0;break e}a=a.return}if(en===null)throw Error(se(160));u_(s,o,r),en=null,ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ft(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)f_(e,t),e=e.sibling}function f_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(e,t),hi(t),i&4){try{qo(3,t,t.return),Tc(3,t)}catch(x){Ft(t,t.return,x)}try{qo(5,t,t.return)}catch(x){Ft(t,t.return,x)}}break;case 1:Qn(e,t),hi(t),i&512&&n!==null&&Vs(n,n.return);break;case 5:if(Qn(e,t),hi(t),i&512&&n!==null&&Vs(n,n.return),t.flags&32){var r=t.stateNode;try{Qo(r,"")}catch(x){Ft(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Dg(r,s),mf(a,o);var c=mf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?zg(r,d):f==="dangerouslySetInnerHTML"?Fg(r,d):f==="children"?Qo(r,d):_d(r,f,d,c)}switch(a){case"input":uf(r,s);break;case"textarea":Ug(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ys(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ys(r,!!s.multiple,s.defaultValue,!0):Ys(r,!!s.multiple,s.multiple?[]:"",!1))}r[aa]=s}catch(x){Ft(t,t.return,x)}}break;case 6:if(Qn(e,t),hi(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Ft(t,t.return,x)}}break;case 3:if(Qn(e,t),hi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{na(e.containerInfo)}catch(x){Ft(t,t.return,x)}break;case 4:Qn(e,t),hi(t);break;case 13:Qn(e,t),hi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Kd=zt())),i&4&&mp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(cn=(c=cn)||f,Qn(e,t),cn=c):Qn(e,t),hi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ee=t,f=t.child;f!==null;){for(d=Ee=f;Ee!==null;){switch(h=Ee,m=h.child,h.tag){case 0:case 11:case 14:case 15:qo(4,h,h.return);break;case 1:Vs(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){Ft(i,n,x)}}break;case 5:Vs(h,h.return);break;case 22:if(h.memoizedState!==null){_p(d);continue}}m!==null?(m.return=h,Ee=m):_p(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Og("display",o))}catch(x){Ft(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Ft(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qn(e,t),hi(t),i&4&&mp(t);break;case 21:break;default:Qn(e,t),hi(t)}}function hi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(c_(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Qo(r,""),i.flags&=-33);var s=pp(t);Xf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=pp(t);Wf(t,a,o);break;default:throw Error(se(161))}}catch(l){Ft(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ty(t,e,n){Ee=t,d_(t)}function d_(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ga;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||cn;a=Ga;var c=cn;if(Ga=o,(cn=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?vp(r):l!==null?(l.return=o,Ee=l):vp(r);for(;s!==null;)Ee=s,d_(s),s=s.sibling;Ee=r,Ga=a,cn=c}gp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):gp(t)}}function gp(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||Tc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ni(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ep(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ep(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&na(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}cn||e.flags&512&&Vf(e)}catch(h){Ft(e,e.return,h)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function _p(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function vp(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tc(4,e)}catch(l){Ft(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ft(e,r,l)}}var s=e.return;try{Vf(e)}catch(l){Ft(e,s,l)}break;case 5:var o=e.return;try{Vf(e)}catch(l){Ft(e,o,l)}}}catch(l){Ft(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var Ay=Math.ceil,rc=Gi.ReactCurrentDispatcher,qd=Gi.ReactCurrentOwner,qn=Gi.ReactCurrentBatchConfig,dt=0,Jt=null,Gt=null,tn=0,Nn=0,Ws=Tr(0),jt=0,ha=null,ts=0,Ac=0,$d=0,$o=null,Mn=null,Kd=0,ao=1/0,Pi=null,sc=!1,jf=null,hr=null,Va=!1,or=null,oc=0,Ko=0,Yf=null,Ul=-1,Il=0;function gn(){return dt&6?zt():Ul!==-1?Ul:Ul=zt()}function pr(t){return t.mode&1?dt&2&&tn!==0?tn&-tn:cy.transition!==null?(Il===0&&(Il=Kg()),Il):(t=mt,t!==0||(t=window.event,t=t===void 0?16:i0(t.type)),t):1}function li(t,e,n,i){if(50<Ko)throw Ko=0,Yf=null,Error(se(185));va(t,n,i),(!(dt&2)||t!==Jt)&&(t===Jt&&(!(dt&2)&&(Ac|=n),jt===4&&ir(t,tn)),Rn(t,i),n===1&&dt===0&&!(e.mode&1)&&(ao=zt()+500,Mc&&Ar()))}function Rn(t,e){var n=t.callbackNode;cx(t,e);var i=Vl(t,t===Jt?tn:0);if(i===0)n!==null&&Rh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Rh(n),e===1)t.tag===0?ly(xp.bind(null,t)):M0(xp.bind(null,t)),ry(function(){!(dt&6)&&Ar()}),n=null;else{switch(Zg(i)){case 1:n=Md;break;case 4:n=qg;break;case 16:n=Gl;break;case 536870912:n=$g;break;default:n=Gl}n=y_(n,h_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function h_(t,e){if(Ul=-1,Il=0,dt&6)throw Error(se(327));var n=t.callbackNode;if(Qs()&&t.callbackNode!==n)return null;var i=Vl(t,t===Jt?tn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ac(t,i);else{e=i;var r=dt;dt|=2;var s=m_();(Jt!==t||tn!==e)&&(Pi=null,ao=zt()+500,qr(t,e));do try{by();break}catch(a){p_(t,a)}while(!0);Id(),rc.current=s,dt=r,Gt!==null?e=0:(Jt=null,tn=0,e=jt)}if(e!==0){if(e===2&&(r=yf(t),r!==0&&(i=r,e=qf(t,r))),e===1)throw n=ha,qr(t,0),ir(t,i),Rn(t,zt()),n;if(e===6)ir(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ry(r)&&(e=ac(t,i),e===2&&(s=yf(t),s!==0&&(i=s,e=qf(t,s))),e===1))throw n=ha,qr(t,0),ir(t,i),Rn(t,zt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:kr(t,Mn,Pi);break;case 3:if(ir(t,i),(i&130023424)===i&&(e=Kd+500-zt(),10<e)){if(Vl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){gn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Cf(kr.bind(null,t,Mn,Pi),e);break}kr(t,Mn,Pi);break;case 4:if(ir(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ai(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=zt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ay(i/1960))-i,10<i){t.timeoutHandle=Cf(kr.bind(null,t,Mn,Pi),i);break}kr(t,Mn,Pi);break;case 5:kr(t,Mn,Pi);break;default:throw Error(se(329))}}}return Rn(t,zt()),t.callbackNode===n?h_.bind(null,t):null}function qf(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=ac(t,e),t!==2&&(e=Mn,Mn=n,e!==null&&$f(e)),t}function $f(t){Mn===null?Mn=t:Mn.push.apply(Mn,t)}function Ry(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ui(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~$d,e&=~Ac,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ai(e),i=1<<n;t[n]=-1,e&=~i}}function xp(t){if(dt&6)throw Error(se(327));Qs();var e=Vl(t,0);if(!(e&1))return Rn(t,zt()),null;var n=ac(t,e);if(t.tag!==0&&n===2){var i=yf(t);i!==0&&(e=i,n=qf(t,i))}if(n===1)throw n=ha,qr(t,0),ir(t,e),Rn(t,zt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,kr(t,Mn,Pi),Rn(t,zt()),null}function Zd(t,e){var n=dt;dt|=1;try{return t(e)}finally{dt=n,dt===0&&(ao=zt()+500,Mc&&Ar())}}function ns(t){or!==null&&or.tag===0&&!(dt&6)&&Qs();var e=dt;dt|=1;var n=qn.transition,i=mt;try{if(qn.transition=null,mt=1,t)return t()}finally{mt=i,qn.transition=n,dt=e,!(dt&6)&&Ar()}}function Qd(){Nn=Ws.current,Tt(Ws)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,iy(n)),Gt!==null)for(n=Gt.return;n!==null;){var i=n;switch(Nd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ql();break;case 3:so(),Tt(Tn),Tt(fn),Hd();break;case 5:Bd(i);break;case 4:so();break;case 13:Tt(Nt);break;case 19:Tt(Nt);break;case 10:Fd(i.type._context);break;case 22:case 23:Qd()}n=n.return}if(Jt=t,Gt=t=mr(t.current,null),tn=Nn=e,jt=0,ha=null,$d=Ac=ts=0,Mn=$o=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Xr=null}return t}function p_(t,e){do{var n=Gt;try{if(Id(),Ll.current=ic,nc){for(var i=Dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}nc=!1}if(es=0,Qt=Xt=Dt=null,Yo=!1,ua=0,qd.current=null,n===null||n.return===null){jt=1,ha=e,Gt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=op(o);if(m!==null){m.flags&=-257,ap(m,o,a,s,e),m.mode&1&&sp(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){sp(s,c,e),Jd();break e}l=Error(se(426))}}else if(Rt&&a.mode&1){var p=op(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),ap(p,o,a,s,e),Dd(oo(l,a));break e}}s=l=oo(l,a),jt!==4&&(jt=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Z0(s,l,e);Jh(s,u);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(hr===null||!hr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Q0(s,a,e);Jh(s,S);break e}}s=s.return}while(s!==null)}__(n)}catch(A){e=A,Gt===n&&n!==null&&(Gt=n=n.return);continue}break}while(!0)}function m_(){var t=rc.current;return rc.current=ic,t===null?ic:t}function Jd(){(jt===0||jt===3||jt===2)&&(jt=4),Jt===null||!(ts&268435455)&&!(Ac&268435455)||ir(Jt,tn)}function ac(t,e){var n=dt;dt|=2;var i=m_();(Jt!==t||tn!==e)&&(Pi=null,qr(t,e));do try{Cy();break}catch(r){p_(t,r)}while(!0);if(Id(),dt=n,rc.current=i,Gt!==null)throw Error(se(261));return Jt=null,tn=0,jt}function Cy(){for(;Gt!==null;)g_(Gt)}function by(){for(;Gt!==null&&!ex();)g_(Gt)}function g_(t){var e=x_(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,e===null?__(t):Gt=e,qd.current=null}function __(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=My(n,e),n!==null){n.flags&=32767,Gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,Gt=null;return}}else if(n=Sy(n,e,Nn),n!==null){Gt=n;return}if(e=e.sibling,e!==null){Gt=e;return}Gt=e=t}while(e!==null);jt===0&&(jt=5)}function kr(t,e,n){var i=mt,r=qn.transition;try{qn.transition=null,mt=1,Py(t,e,n,i)}finally{qn.transition=r,mt=i}return null}function Py(t,e,n,i){do Qs();while(or!==null);if(dt&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ux(t,s),t===Jt&&(Gt=Jt=null,tn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Va||(Va=!0,y_(Gl,function(){return Qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qn.transition,qn.transition=null;var o=mt;mt=1;var a=dt;dt|=4,qd.current=null,wy(t,n),f_(n,t),Kx(Af),Wl=!!Tf,Af=Tf=null,t.current=n,Ty(n),tx(),dt=a,mt=o,qn.transition=s}else t.current=n;if(Va&&(Va=!1,or=t,oc=r),s=t.pendingLanes,s===0&&(hr=null),rx(n.stateNode),Rn(t,zt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(sc)throw sc=!1,t=jf,jf=null,t;return oc&1&&t.tag!==0&&Qs(),s=t.pendingLanes,s&1?t===Yf?Ko++:(Ko=0,Yf=t):Ko=0,Ar(),null}function Qs(){if(or!==null){var t=Zg(oc),e=qn.transition,n=mt;try{if(qn.transition=null,mt=16>t?16:t,or===null)var i=!1;else{if(t=or,or=null,oc=0,dt&6)throw Error(se(331));var r=dt;for(dt|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var f=Ee;switch(f.tag){case 0:case 11:case 15:qo(8,f,s)}var d=f.child;if(d!==null)d.return=f,Ee=d;else for(;Ee!==null;){f=Ee;var h=f.sibling,m=f.return;if(l_(f),f===c){Ee=null;break}if(h!==null){h.return=m,Ee=h;break}Ee=m}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ee=u;break e}Ee=s.return}}var v=t.current;for(Ee=v;Ee!==null;){o=Ee;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,Ee=g;else e:for(o=v;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tc(9,a)}}catch(A){Ft(a,a.return,A)}if(a===o){Ee=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ee=S;break e}Ee=a.return}}if(dt=r,Ar(),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(_c,t)}catch{}i=!0}return i}finally{mt=n,qn.transition=e}}return!1}function yp(t,e,n){e=oo(n,e),e=Z0(t,e,1),t=dr(t,e,1),e=gn(),t!==null&&(va(t,1,e),Rn(t,e))}function Ft(t,e,n){if(t.tag===3)yp(t,t,n);else for(;e!==null;){if(e.tag===3){yp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(hr===null||!hr.has(i))){t=oo(n,t),t=Q0(e,t,1),e=dr(e,t,1),t=gn(),e!==null&&(va(e,1,t),Rn(e,t));break}}e=e.return}}function Ly(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=gn(),t.pingedLanes|=t.suspendedLanes&n,Jt===t&&(tn&n)===n&&(jt===4||jt===3&&(tn&130023424)===tn&&500>zt()-Kd?qr(t,0):$d|=n),Rn(t,e)}function v_(t,e){e===0&&(t.mode&1?(e=Da,Da<<=1,!(Da&130023424)&&(Da=4194304)):e=1);var n=gn();t=ki(t,e),t!==null&&(va(t,e,n),Rn(t,n))}function Ny(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),v_(t,n)}function Dy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),v_(t,n)}var x_;x_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tn.current)wn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wn=!1,yy(t,e,n);wn=!!(t.flags&131072)}else wn=!1,Rt&&e.flags&1048576&&E0(e,Zl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Dl(t,e),t=e.pendingProps;var r=no(e,fn.current);Zs(e,n),r=Vd(null,e,i,t,r,n);var s=Wd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(s=!0,$l(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,zd(e),r.updater=wc,e.stateNode=r,r._reactInternals=e,If(e,i,t,n),e=zf(null,e,i,!0,s,n)):(e.tag=0,Rt&&s&&Ld(e),pn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Dl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Iy(i),t=ni(i,t),r){case 0:e=Of(null,e,i,t,n);break e;case 1:e=up(null,e,i,t,n);break e;case 11:e=lp(null,e,i,t,n);break e;case 14:e=cp(null,e,i,ni(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Of(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),up(t,e,i,r,n);case 3:e:{if(n_(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,b0(t,e),ec(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=oo(Error(se(423)),e),e=fp(t,e,i,n,r);break e}else if(i!==r){r=oo(Error(se(424)),e),e=fp(t,e,i,n,r);break e}else for(In=fr(e.stateNode.containerInfo.firstChild),Fn=e,Rt=!0,ri=null,n=R0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(io(),i===r){e=Bi(t,e,n);break e}pn(t,e,i,n)}e=e.child}return e;case 5:return P0(e),t===null&&Nf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Rf(i,r)?o=null:s!==null&&Rf(i,s)&&(e.flags|=32),t_(t,e),pn(t,e,o,n),e.child;case 6:return t===null&&Nf(e),null;case 13:return i_(t,e,n);case 4:return kd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ro(e,null,i,n):pn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),lp(t,e,i,r,n);case 7:return pn(t,e,e.pendingProps,n),e.child;case 8:return pn(t,e,e.pendingProps.children,n),e.child;case 12:return pn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,St(Ql,i._currentValue),i._currentValue=o,s!==null)if(ui(s.value,o)){if(s.children===r.children&&!Tn.current){e=Bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Fi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Df(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Df(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Zs(e,n),r=$n(r),i=i(r),e.flags|=1,pn(t,e,i,n),e.child;case 14:return i=e.type,r=ni(i,e.pendingProps),r=ni(i.type,r),cp(t,e,i,r,n);case 15:return J0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Dl(t,e),e.tag=1,An(i)?(t=!0,$l(e)):t=!1,Zs(e,n),K0(e,i,r),If(e,i,r,n),zf(null,e,i,!0,t,n);case 19:return r_(t,e,n);case 22:return e_(t,e,n)}throw Error(se(156,e.tag))};function y_(t,e){return Yg(t,e)}function Uy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,i){return new Uy(t,e,n,i)}function eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Iy(t){if(typeof t=="function")return eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xd)return 11;if(t===yd)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")eh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Us:return $r(n.children,r,s,e);case vd:o=8,r|=8;break;case sf:return t=jn(12,n,e,r|2),t.elementType=sf,t.lanes=s,t;case of:return t=jn(13,n,e,r),t.elementType=of,t.lanes=s,t;case af:return t=jn(19,n,e,r),t.elementType=af,t.lanes=s,t;case Pg:return Rc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Cg:o=10;break e;case bg:o=9;break e;case xd:o=11;break e;case yd:o=14;break e;case er:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=jn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function $r(t,e,n,i){return t=jn(7,t,i,e),t.lanes=n,t}function Rc(t,e,n,i){return t=jn(22,t,i,e),t.elementType=Pg,t.lanes=n,t.stateNode={isHidden:!1},t}function fu(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function du(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Fy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jc(0),this.expirationTimes=jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function th(t,e,n,i,r,s,o,a,l){return t=new Fy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zd(s),t}function Oy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ds,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function S_(t){if(!t)return Sr;t=t._reactInternals;e:{if(ss(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(An(n))return S0(t,n,e)}return e}function M_(t,e,n,i,r,s,o,a,l){return t=th(n,i,!0,t,r,s,o,a,l),t.context=S_(null),n=t.current,i=gn(),r=pr(n),s=Fi(i,r),s.callback=e??null,dr(n,s,r),t.current.lanes=r,va(t,r,i),Rn(t,i),t}function Cc(t,e,n,i){var r=e.current,s=gn(),o=pr(r);return n=S_(n),e.context===null?e.context=n:e.pendingContext=n,e=Fi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=dr(r,e,o),t!==null&&(li(t,r,o,s),Pl(t,r,o)),o}function lc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nh(t,e){Sp(t,e),(t=t.alternate)&&Sp(t,e)}function zy(){return null}var E_=typeof reportError=="function"?reportError:function(t){console.error(t)};function ih(t){this._internalRoot=t}bc.prototype.render=ih.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Cc(t,e,null,null)};bc.prototype.unmount=ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ns(function(){Cc(null,t,null,null)}),e[zi]=null}};function bc(t){this._internalRoot=t}bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=e0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&n0(t)}};function rh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mp(){}function ky(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=lc(o);s.call(c)}}var o=M_(e,i,t,0,null,!1,!1,"",Mp);return t._reactRootContainer=o,t[zi]=o.current,sa(t.nodeType===8?t.parentNode:t),ns(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=lc(l);a.call(c)}}var l=th(t,0,!1,null,null,!1,!1,"",Mp);return t._reactRootContainer=l,t[zi]=l.current,sa(t.nodeType===8?t.parentNode:t),ns(function(){Cc(e,l,n,i)}),l}function Lc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=lc(o);a.call(l)}}Cc(e,o,t,r)}else o=ky(n,e,t,r,i);return lc(o)}Qg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bo(e.pendingLanes);n!==0&&(Ed(e,n|1),Rn(e,zt()),!(dt&6)&&(ao=zt()+500,Ar()))}break;case 13:ns(function(){var i=ki(t,1);if(i!==null){var r=gn();li(i,t,1,r)}}),nh(t,1)}};wd=function(t){if(t.tag===13){var e=ki(t,134217728);if(e!==null){var n=gn();li(e,t,134217728,n)}nh(t,134217728)}};Jg=function(t){if(t.tag===13){var e=pr(t),n=ki(t,e);if(n!==null){var i=gn();li(n,t,e,i)}nh(t,e)}};e0=function(){return mt};t0=function(t,e){var n=mt;try{return mt=t,e()}finally{mt=n}};_f=function(t,e,n){switch(e){case"input":if(uf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Sc(i);if(!r)throw Error(se(90));Ng(i),uf(i,r)}}}break;case"textarea":Ug(t,n);break;case"select":e=n.value,e!=null&&Ys(t,!!n.multiple,e,!1)}};Hg=Zd;Gg=ns;var By={usingClientEntryPoint:!1,Events:[ya,zs,Sc,kg,Bg,Zd]},Ro={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hy={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||zy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{_c=Wa.inject(Hy),xi=Wa}catch{}}zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=By;zn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rh(e))throw Error(se(200));return Oy(t,e,null,n)};zn.createRoot=function(t,e){if(!rh(t))throw Error(se(299));var n=!1,i="",r=E_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=th(t,1,!1,null,null,n,!1,i,r),t[zi]=e.current,sa(t.nodeType===8?t.parentNode:t),new ih(e)};zn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Xg(e),t=t===null?null:t.stateNode,t};zn.flushSync=function(t){return ns(t)};zn.hydrate=function(t,e,n){if(!Pc(e))throw Error(se(200));return Lc(null,t,e,!0,n)};zn.hydrateRoot=function(t,e,n){if(!rh(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=E_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=M_(e,null,t,1,n??null,r,!1,s,o),t[zi]=e.current,sa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new bc(e)};zn.render=function(t,e,n){if(!Pc(e))throw Error(se(200));return Lc(null,t,e,!1,n)};zn.unmountComponentAtNode=function(t){if(!Pc(t))throw Error(se(40));return t._reactRootContainer?(ns(function(){Lc(null,null,t,!1,function(){t._reactRootContainer=null,t[zi]=null})}),!0):!1};zn.unstable_batchedUpdates=Zd;zn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Pc(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Lc(t,e,n,!1,i)};zn.version="18.3.1-next-f1338f8080-20240426";function w_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w_)}catch(t){console.error(t)}}w_(),wg.exports=zn;var Gy=wg.exports,Ep=Gy;nf.createRoot=Ep.createRoot,nf.hydrateRoot=Ep.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sh="162",Vy=0,wp=1,Wy=2,T_=1,A_=2,bi=3,Mr=0,un=1,_i=2,gr=0,Js=1,Kf=2,Tp=3,Ap=4,Xy=5,Gr=100,jy=101,Yy=102,Rp=103,Cp=104,qy=200,$y=201,Ky=202,Zy=203,Zf=204,Qf=205,Qy=206,Jy=207,eS=208,tS=209,nS=210,iS=211,rS=212,sS=213,oS=214,aS=0,lS=1,cS=2,cc=3,uS=4,fS=5,dS=6,hS=7,R_=0,pS=1,mS=2,_r=0,gS=1,_S=2,vS=3,C_=4,xS=5,yS=6,SS=7,b_=300,lo=301,co=302,Jf=303,ed=304,Nc=306,pa=1e3,si=1001,td=1002,mn=1003,bp=1004,Co=1005,Sn=1006,hu=1007,Yr=1008,vr=1009,MS=1010,ES=1011,oh=1012,P_=1013,ar=1014,Ni=1015,ma=1016,L_=1017,N_=1018,Kr=1020,wS=1021,oi=1023,TS=1024,AS=1025,Zr=1026,uo=1027,RS=1028,D_=1029,CS=1030,U_=1031,I_=1033,pu=33776,mu=33777,gu=33778,_u=33779,Pp=35840,Lp=35841,Np=35842,Dp=35843,F_=36196,Up=37492,Ip=37496,Fp=37808,Op=37809,zp=37810,kp=37811,Bp=37812,Hp=37813,Gp=37814,Vp=37815,Wp=37816,Xp=37817,jp=37818,Yp=37819,qp=37820,$p=37821,vu=36492,Kp=36494,Zp=36495,bS=36283,Qp=36284,Jp=36285,em=36286,PS=3200,LS=3201,O_=0,NS=1,rr="",Dn="srgb",Rr="srgb-linear",ah="display-p3",Dc="display-p3-linear",uc="linear",Et="srgb",fc="rec709",dc="p3",fs=7680,tm=519,DS=512,US=513,IS=514,z_=515,FS=516,OS=517,zS=518,kS=519,nd=35044,nm="300 es",id=1035,Ii=2e3,hc=2001;class go{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ol=Math.PI/180,rd=180/Math.PI;function xr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[t&255]+on[t>>8&255]+on[t>>16&255]+on[t>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function En(t,e,n){return Math.max(e,Math.min(n,t))}function BS(t,e){return(t%e+e)%e}function xu(t,e,n){return(1-n)*t+n*e}function im(t){return(t&t-1)===0&&t!==0}function sd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function vi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function _t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,n,i,r,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],m=i[5],_=i[8],x=r[0],p=r[3],u=r[6],v=r[1],g=r[4],S=r[7],A=r[2],T=r[5],w=r[8];return s[0]=o*x+a*v+l*A,s[3]=o*p+a*g+l*T,s[6]=o*u+a*S+l*w,s[1]=c*x+f*v+d*A,s[4]=c*p+f*g+d*T,s[7]=c*u+f*S+d*w,s[2]=h*x+m*v+_*A,s[5]=h*p+m*g+_*T,s[8]=h*u+m*S+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,m=c*s-o*l,_=n*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*c-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(yu.makeScale(e,n)),this}rotate(e){return this.premultiply(yu.makeRotation(-e)),this}translate(e,n){return this.premultiply(yu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yu=new rt;function k_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function pc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function HS(){const t=pc("canvas");return t.style.display="block",t}const rm={};function B_(t){t in rm||(rm[t]=!0,console.warn(t))}const sm=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),om=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xa={[Rr]:{transfer:uc,primaries:fc,toReference:t=>t,fromReference:t=>t},[Dn]:{transfer:Et,primaries:fc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Dc]:{transfer:uc,primaries:dc,toReference:t=>t.applyMatrix3(om),fromReference:t=>t.applyMatrix3(sm)},[ah]:{transfer:Et,primaries:dc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(om),fromReference:t=>t.applyMatrix3(sm).convertLinearToSRGB()}},GS=new Set([Rr,Dc]),vt={enabled:!0,_workingColorSpace:Rr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!GS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Xa[e].toReference,r=Xa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Xa[t].primaries},getTransfer:function(t){return t===rr?uc:Xa[t].transfer}};function eo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Su(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ds;class H_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ds===void 0&&(ds=pc("canvas")),ds.width=e.width,ds.height=e.height;const i=ds.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ds}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=eo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(eo(n[i]/255)*255):n[i]=eo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VS=0;class G_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=xr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mu(r[o].image)):s.push(Mu(r[o]))}else s=Mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?H_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WS=0;class _n extends go{constructor(e=_n.DEFAULT_IMAGE,n=_n.DEFAULT_MAPPING,i=si,r=si,s=Sn,o=Yr,a=oi,l=vr,c=_n.DEFAULT_ANISOTROPY,f=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=xr(),this.name="",this.source=new G_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==b_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pa:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pa:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=b_;_n.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],m=l[5],_=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,S=(m+1)/2,A=(u+1)/2,T=(f+h)/4,w=(d+x)/4,b=(_+p)/4;return g>S&&g>A?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=T/i,s=w/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=b/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=b/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(d-x)/v,this.z=(h-f)/v,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XS extends go{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new _n(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new G_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends XS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class V_ extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jS extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ma{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(d!==x||l!==h||c!==m||f!==_){let p=1-a;const u=l*h+c*m+f*_+d*x,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const A=Math.sqrt(g),T=Math.atan2(A,u*v);p=Math.sin(p*T)/A,a=Math.sin(a*T)/A}const S=a*v;if(l=l*p+h*S,c=c*p+m*S,f=f*p+_*S,d=d*p+x*S,p===1-a){const A=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=A,c*=A,f*=A,d*=A}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+f*d+l*m-c*h,e[n+1]=l*_+f*h+c*d-a*m,e[n+2]=c*_+f*m+a*h-l*d,e[n+3]=f*_-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d-h*m*_;break;case"YXZ":this._x=h*f*d+c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d+h*m*_;break;case"ZXY":this._x=h*f*d-c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d-h*m*_;break;case"ZYX":this._x=h*f*d-c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d+h*m*_;break;case"YZX":this._x=h*f*d+c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d-h*m*_;break;case"XZY":this._x=h*f*d-c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(am.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(am.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new D,am=new Ma;class Ea{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),Ya.subVectors(this.max,bo),hs.subVectors(e.a,bo),ps.subVectors(e.b,bo),ms.subVectors(e.c,bo),Yi.subVectors(ps,hs),qi.subVectors(ms,ps),Nr.subVectors(hs,ms);let n=[0,-Yi.z,Yi.y,0,-qi.z,qi.y,0,-Nr.z,Nr.y,Yi.z,0,-Yi.x,qi.z,0,-qi.x,Nr.z,0,-Nr.x,-Yi.y,Yi.x,0,-qi.y,qi.x,0,-Nr.y,Nr.x,0];return!wu(n,hs,ps,ms,Ya)||(n=[1,0,0,0,1,0,0,0,1],!wu(n,hs,ps,ms,Ya))?!1:(qa.crossVectors(Yi,qi),n=[qa.x,qa.y,qa.z],wu(n,hs,ps,ms,Ya))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new D,new D,new D,new D,new D,new D,new D,new D],Jn=new D,ja=new Ea,hs=new D,ps=new D,ms=new D,Yi=new D,qi=new D,Nr=new D,bo=new D,Ya=new D,qa=new D,Dr=new D;function wu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Dr.fromArray(t,s);const a=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),l=e.dot(Dr),c=n.dot(Dr),f=i.dot(Dr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const YS=new Ea,Po=new D,Tu=new D;class Uc{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):YS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Tu)),this.expandByPoint(Po.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new D,Au=new D,$a=new D,$i=new D,Ru=new D,Ka=new D,Cu=new D;class W_{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Au.copy(e).add(n).multiplyScalar(.5),$a.copy(n).sub(e).normalize(),$i.copy(this.origin).sub(Au);const s=e.distanceTo(n)*.5,o=-this.direction.dot($a),a=$i.dot(this.direction),l=-$i.dot($a),c=$i.lengthSq(),f=Math.abs(1-o*o);let d,h,m,_;if(f>0)if(d=o*l-a,h=o*a-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const x=1/f;d*=x,h*=x,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Au).addScaledVector($a,h),m}intersectSphere(e,n){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,n,i,r,s){Ru.subVectors(n,e),Ka.subVectors(i,e),Cu.crossVectors(Ru,Ka);let o=this.direction.dot(Cu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);const l=a*this.direction.dot(Ka.crossVectors($i,Ka));if(l<0)return null;const c=a*this.direction.dot(Ru.cross($i));if(c<0||l+c>o)return null;const f=-a*$i.dot(Cu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,n,i,r,s,o,a,l,c,f,d,h,m,_,x,p){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,m,_,x,p)}set(e,n,i,r,s,o,a,l,c,f,d,h,m,_,x,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/gs.setFromMatrixColumn(e,0).length(),s=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*d,_=a*f,x=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=m+_*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,_=c*f,x=c*d;n[0]=h+x*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=m*a-_,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,_=c*f,x=c*d;n[0]=h-x*a,n[4]=-o*d,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*f,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*d,_=a*f,x=a*d;n[0]=l*f,n[4]=_*c-m,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=a*l,x=a*c;n[0]=l*f,n[4]=x-h*d,n[8]=_*d+m,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*d+_,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,m=o*c,_=a*l,x=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+x,n[5]=o*f,n[9]=m*d-_,n[2]=_*d-m,n[6]=a*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qS,e,$S)}lookAt(e,n,i){const r=this.elements;return Pn.subVectors(e,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Ki.crossVectors(i,Pn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Ki.crossVectors(i,Pn)),Ki.normalize(),Za.crossVectors(Pn,Ki),r[0]=Ki.x,r[4]=Za.x,r[8]=Pn.x,r[1]=Ki.y,r[5]=Za.y,r[9]=Pn.y,r[2]=Ki.z,r[6]=Za.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],m=i[13],_=i[2],x=i[6],p=i[10],u=i[14],v=i[3],g=i[7],S=i[11],A=i[15],T=r[0],w=r[4],b=r[8],Y=r[12],y=r[1],C=r[5],J=r[9],Q=r[13],P=r[2],K=r[6],X=r[10],ee=r[14],L=r[3],O=r[7],B=r[11],ne=r[15];return s[0]=o*T+a*y+l*P+c*L,s[4]=o*w+a*C+l*K+c*O,s[8]=o*b+a*J+l*X+c*B,s[12]=o*Y+a*Q+l*ee+c*ne,s[1]=f*T+d*y+h*P+m*L,s[5]=f*w+d*C+h*K+m*O,s[9]=f*b+d*J+h*X+m*B,s[13]=f*Y+d*Q+h*ee+m*ne,s[2]=_*T+x*y+p*P+u*L,s[6]=_*w+x*C+p*K+u*O,s[10]=_*b+x*J+p*X+u*B,s[14]=_*Y+x*Q+p*ee+u*ne,s[3]=v*T+g*y+S*P+A*L,s[7]=v*w+g*C+S*K+A*O,s[11]=v*b+g*J+S*X+A*B,s[15]=v*Y+g*Q+S*ee+A*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*m-i*l*m)+x*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*f-s*l*f)+p*(+n*c*d-n*a*m-s*o*d+i*o*m+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],u=e[15],v=d*p*c-x*h*c+x*l*m-a*p*m-d*l*u+a*h*u,g=_*h*c-f*p*c-_*l*m+o*p*m+f*l*u-o*h*u,S=f*x*c-_*d*c+_*a*m-o*x*m-f*a*u+o*d*u,A=_*d*l-f*x*l-_*a*h+o*x*h+f*a*p-o*d*p,T=n*v+i*g+r*S+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(x*h*s-d*p*s-x*r*m+i*p*m+d*r*u-i*h*u)*w,e[2]=(a*p*s-x*l*s+x*r*c-i*p*c-a*r*u+i*l*u)*w,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*m-i*l*m)*w,e[4]=g*w,e[5]=(f*p*s-_*h*s+_*r*m-n*p*m-f*r*u+n*h*u)*w,e[6]=(_*l*s-o*p*s-_*r*c+n*p*c+o*r*u-n*l*u)*w,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*m+n*l*m)*w,e[8]=S*w,e[9]=(_*d*s-f*x*s-_*i*m+n*x*m+f*i*u-n*d*u)*w,e[10]=(o*x*s-_*a*s+_*i*c-n*x*c-o*i*u+n*a*u)*w,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*m-n*a*m)*w,e[12]=A*w,e[13]=(f*x*r-_*d*r+_*i*h-n*x*h-f*i*p+n*d*p)*w,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*p-n*a*p)*w,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,m=s*f,_=s*d,x=o*f,p=o*d,u=a*d,v=l*c,g=l*f,S=l*d,A=i.x,T=i.y,w=i.z;return r[0]=(1-(x+u))*A,r[1]=(m+S)*A,r[2]=(_-g)*A,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(h+u))*T,r[6]=(p+v)*T,r[7]=0,r[8]=(_+g)*w,r[9]=(p-v)*w,r[10]=(1-(h+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=gs.set(r[0],r[1],r[2]).length();const o=gs.set(r[4],r[5],r[6]).length(),a=gs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ei.copy(this);const c=1/s,f=1/o,d=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=f,ei.elements[5]*=f,ei.elements[6]*=f,ei.elements[8]*=d,ei.elements[9]*=d,ei.elements[10]*=d,n.setFromRotationMatrix(ei),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ii){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(a===Ii)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===hc)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ii){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,m=(i+r)*f;let _,x;if(a===Ii)_=(o+s)*d,x=-2*d;else if(a===hc)_=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const gs=new D,ei=new bt,qS=new D(0,0,0),$S=new D(1,1,1),Ki=new D,Za=new D,Pn=new D,lm=new bt,cm=new Ma;class Si{constructor(e=0,n=0,i=0,r=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-En(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(En(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-En(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cm.setFromEuler(this),this.setFromQuaternion(cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class X_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let KS=0;const um=new D,_s=new Ma,Ai=new bt,Qa=new D,Lo=new D,ZS=new D,QS=new Ma,fm=new D(1,0,0),dm=new D(0,1,0),hm=new D(0,0,1),JS={type:"added"},eM={type:"removed"},bu={type:"childadded",child:null},Pu={type:"childremoved",child:null};class Vt extends go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new D,n=new Si,i=new Ma,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new rt}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(fm,e)}rotateY(e){return this.rotateOnAxis(dm,e)}rotateZ(e){return this.rotateOnAxis(hm,e)}translateOnAxis(e,n){return um.copy(e).applyQuaternion(this.quaternion),this.position.add(um.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fm,e)}translateY(e){return this.translateOnAxis(dm,e)}translateZ(e){return this.translateOnAxis(hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Qa.copy(e):Qa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Lo,Qa,this.up):Ai.lookAt(Qa,Lo,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),_s.setFromRotationMatrix(Ai),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(JS),bu.child=e,this.dispatchEvent(bu),bu.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(eM),Pu.child=e,this.dispatchEvent(Pu),Pu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,ZS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,QS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new D(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new D,Ri=new D,Lu=new D,Ci=new D,vs=new D,xs=new D,pm=new D,Nu=new D,Du=new D,Uu=new D;class Xn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ti.subVectors(e,n),r.cross(ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ti.subVectors(r,n),Ri.subVectors(i,n),Lu.subVectors(e,n);const o=ti.dot(ti),a=ti.dot(Ri),l=ti.dot(Lu),c=Ri.dot(Ri),f=Ri.dot(Lu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-a*f)*h,_=(o*f-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static isFrontFacing(e,n,i,r){return ti.subVectors(i,n),Ri.subVectors(e,n),ti.cross(Ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ti.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;vs.subVectors(r,i),xs.subVectors(s,i),Nu.subVectors(e,i);const l=vs.dot(Nu),c=xs.dot(Nu);if(l<=0&&c<=0)return n.copy(i);Du.subVectors(e,r);const f=vs.dot(Du),d=xs.dot(Du);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(vs,o);Uu.subVectors(e,s);const m=vs.dot(Uu),_=xs.dot(Uu);if(_>=0&&m<=_)return n.copy(s);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(xs,a);const p=f*_-m*d;if(p<=0&&d-f>=0&&m-_>=0)return pm.subVectors(s,r),a=(d-f)/(d-f+(m-_)),n.copy(r).addScaledVector(pm,a);const u=1/(p+x+h);return o=x*u,a=h*u,n.copy(i).addScaledVector(vs,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const j_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function Iu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class lt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=vt.workingColorSpace){return this.r=e,this.g=n,this.b=i,vt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=vt.workingColorSpace){if(e=BS(e,1),n=En(n,0,1),i=En(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Iu(o,s,e+1/3),this.g=Iu(o,s,e),this.b=Iu(o,s,e-1/3)}return vt.toWorkingColorSpace(this,r),this}setStyle(e,n=Dn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dn){const i=j_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}copyLinearToSRGB(e){return this.r=Su(e.r),this.g=Su(e.g),this.b=Su(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return vt.fromWorkingColorSpace(an.copy(this),e),Math.round(En(an.r*255,0,255))*65536+Math.round(En(an.g*255,0,255))*256+Math.round(En(an.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=vt.workingColorSpace){vt.fromWorkingColorSpace(an.copy(this),n);const i=an.r,r=an.g,s=an.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=vt.workingColorSpace){return vt.fromWorkingColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Dn){vt.fromWorkingColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==Dn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+n,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Zi),e.getHSL(Ja);const i=xu(Zi.h,Ja.h,n),r=xu(Zi.s,Ja.s,n),s=xu(Zi.l,Ja.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new lt;lt.NAMES=j_;let tM=0;class os extends go{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=Js,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zf,this.blendDst=Qf,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=cc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zf&&(i.blendSrc=this.blendSrc),this.blendDst!==Qf&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ga extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=R_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new D,el=new Ye;class ci{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=nd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return B_("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)el.fromBufferAttribute(this,n),el.applyMatrix3(e),this.setXY(n,el.x,el.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix3(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix4(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyNormalMatrix(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.transformDirection(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vi(n,this.array)),n}setX(e,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vi(n,this.array)),n}setY(e,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vi(n,this.array)),n}setW(e,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nd&&(e.usage=this.usage),e}}class Y_ extends ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class q_ extends ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ot extends ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}let nM=0;const Hn=new bt,Fu=new Vt,ys=new D,Ln=new Ea,No=new Ea,Zt=new D;class Cn extends go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(k_(e)?q_:Y_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new rt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ot(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];No.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Ln.min,No.min),Ln.expandByPoint(Zt),Zt.addVectors(Ln.max,No.max),Ln.expandByPoint(Zt)):(Ln.expandByPoint(No.min),Ln.expandByPoint(No.max))}Ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Zt.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(e,c),Zt.add(ys)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new D,l[b]=new D;const c=new D,f=new D,d=new D,h=new Ye,m=new Ye,_=new Ye,x=new D,p=new D;function u(b,Y,y){c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,Y),d.fromBufferAttribute(i,y),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,Y),_.fromBufferAttribute(s,y),f.sub(c),d.sub(c),m.sub(h),_.sub(h);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(C),a[b].add(x),a[Y].add(x),a[y].add(x),l[b].add(p),l[Y].add(p),l[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,Y=v.length;b<Y;++b){const y=v[b],C=y.start,J=y.count;for(let Q=C,P=C+J;Q<P;Q+=3)u(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const g=new D,S=new D,A=new D,T=new D;function w(b){A.fromBufferAttribute(r,b),T.copy(A);const Y=a[b];g.copy(Y),g.sub(A.multiplyScalar(A.dot(Y))).normalize(),S.crossVectors(T,Y);const C=S.dot(l[b])<0?-1:1;o.setXYZW(b,g.x,g.y,g.z,C)}for(let b=0,Y=v.length;b<Y;++b){const y=v[b],C=y.start,J=y.count;for(let Q=C,P=C+J;Q<P;Q+=3)w(e.getX(Q+0)),w(e.getX(Q+1)),w(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,f=new D,d=new D;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Zt.fromBufferAttribute(e,n),Zt.normalize(),e.setXYZ(n,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*f;for(let u=0;u<f;u++)h[_++]=c[m++]}return new ci(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mm=new bt,Ur=new W_,tl=new Uc,gm=new D,Ss=new D,Ms=new D,Es=new D,Ou=new D,nl=new D,il=new Ye,rl=new Ye,sl=new Ye,_m=new D,vm=new D,xm=new D,ol=new D,al=new D;class ge extends Vt{constructor(e=new Cn,n=new ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){nl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Ou.fromBufferAttribute(d,e),o?nl.addScaledVector(Ou,f):nl.addScaledVector(Ou.sub(n),f))}n.add(nl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(s),Ur.copy(e.ray).recast(e.near),!(tl.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(tl,gm)===null||Ur.origin.distanceToSquared(gm)>(e.far-e.near)**2))&&(mm.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(mm),!(i.boundingBox!==null&&Ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ur)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const p=h[_],u=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,A=g;S<A;S+=3){const T=a.getX(S),w=a.getX(S+1),b=a.getX(S+2);r=ll(this,u,e,i,c,f,d,T,w,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const v=a.getX(p),g=a.getX(p+1),S=a.getX(p+2);r=ll(this,o,e,i,c,f,d,v,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const p=h[_],u=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,A=g;S<A;S+=3){const T=S,w=S+1,b=S+2;r=ll(this,u,e,i,c,f,d,T,w,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const v=p,g=p+1,S=p+2;r=ll(this,o,e,i,c,f,d,v,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function iM(t,e,n,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Mr,a),l===null)return null;al.copy(a),al.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(al);return c<n.near||c>n.far?null:{distance:c,point:al.clone(),object:t}}function ll(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ss),t.getVertexPosition(l,Ms),t.getVertexPosition(c,Es);const f=iM(t,e,n,i,Ss,Ms,Es,ol);if(f){r&&(il.fromBufferAttribute(r,a),rl.fromBufferAttribute(r,l),sl.fromBufferAttribute(r,c),f.uv=Xn.getInterpolation(ol,Ss,Ms,Es,il,rl,sl,new Ye)),s&&(il.fromBufferAttribute(s,a),rl.fromBufferAttribute(s,l),sl.fromBufferAttribute(s,c),f.uv1=Xn.getInterpolation(ol,Ss,Ms,Es,il,rl,sl,new Ye)),o&&(_m.fromBufferAttribute(o,a),vm.fromBufferAttribute(o,l),xm.fromBufferAttribute(o,c),f.normal=Xn.getInterpolation(ol,Ss,Ms,Es,_m,vm,xm,new D),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};Xn.getNormal(Ss,Ms,Es,d.normal),f.face=d}return f}class xt extends Cn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(d,2));function _(x,p,u,v,g,S,A,T,w,b,Y){const y=S/w,C=A/b,J=S/2,Q=A/2,P=T/2,K=w+1,X=b+1;let ee=0,L=0;const O=new D;for(let B=0;B<X;B++){const ne=B*C-Q;for(let le=0;le<K;le++){const Le=le*y-J;O[x]=Le*v,O[p]=ne*g,O[u]=P,c.push(O.x,O.y,O.z),O[x]=0,O[p]=0,O[u]=T>0?1:-1,f.push(O.x,O.y,O.z),d.push(le/w),d.push(1-B/b),ee+=1}}for(let B=0;B<b;B++)for(let ne=0;ne<w;ne++){const le=h+ne+K*B,Le=h+ne+K*(B+1),H=h+(ne+1)+K*(B+1),te=h+(ne+1)+K*B;l.push(le,Le,te),l.push(Le,H,te),L+=6}a.addGroup(m,L,Y),m+=L,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function hn(t){const e={};for(let n=0;n<t.length;n++){const i=fo(t[n]);for(const r in i)e[r]=i[r]}return e}function rM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $_(t){return t.getRenderTarget()===null?t.outputColorSpace:vt.workingColorSpace}const sM={clone:fo,merge:hn};var oM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oM,this.fragmentShader=aM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=rM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class K_ extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Ii}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new D,ym=new Ye,Sm=new Ye;class Un extends K_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rd*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,ym,Sm),n.subVectors(Sm,ym)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ol*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ws=-90,Ts=1;class lM extends Vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(ws,Ts,e,n);r.layers=this.layers,this.add(r);const s=new Un(ws,Ts,e,n);s.layers=this.layers,this.add(s);const o=new Un(ws,Ts,e,n);o.layers=this.layers,this.add(o);const a=new Un(ws,Ts,e,n);a.layers=this.layers,this.add(a);const l=new Un(ws,Ts,e,n);l.layers=this.layers,this.add(l);const c=new Un(ws,Ts,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Z_ extends _n{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:lo,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cM extends is{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Z_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xt(5,5,5),s=new Hi({name:"CubemapFromEquirect",uniforms:fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:gr});s.uniforms.tEquirect.value=n;const o=new ge(r,s),a=n.minFilter;return n.minFilter===Yr&&(n.minFilter=Sn),new lM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const zu=new D,uM=new D,fM=new rt;class Br{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=zu.subVectors(i,n).cross(uM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(zu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||fM.getNormalMatrix(e),r=this.coplanarPoint(zu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Uc,cl=new D;class lh{constructor(e=new Br,n=new Br,i=new Br,r=new Br,s=new Br,o=new Br){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ii){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],m=r[8],_=r[9],x=r[10],p=r[11],u=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,p-m,S-u).normalize(),i[1].setComponents(l+s,h+c,p+m,S+u).normalize(),i[2].setComponents(l+o,h+f,p+_,S+v).normalize(),i[3].setComponents(l-o,h-f,p-_,S-v).normalize(),i[4].setComponents(l-a,h-d,p-x,S-g).normalize(),n===Ii)i[5].setComponents(l+a,h+d,p+x,S+g).normalize();else if(n===hc)i[5].setComponents(a,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(cl.x=r.normal.x>0?e.max.x:e.min.x,cl.y=r.normal.y>0?e.max.y:e.min.y,cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Q_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function dM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const d=c.array,h=c.usage,m=d.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,d,h),c.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,f,d){const h=f.array,m=f._updateRange,_=f.updateRanges;if(t.bindBuffer(d,c),m.count===-1&&_.length===0&&t.bufferSubData(d,0,h),_.length!==0){for(let x=0,p=_.length;x<p;x++){const u=_[x];n?t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,f),d.version=c.version}}return{get:o,remove:a,update:l}}class Ic extends Cn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,m=[],_=[],x=[],p=[];for(let u=0;u<f;u++){const v=u*h-o;for(let g=0;g<c;g++){const S=g*d-s;_.push(S,-v,0),x.push(0,0,1),p.push(g/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const g=v+c*u,S=v+c*(u+1),A=v+1+c*(u+1),T=v+1+c*u;m.push(g,S,T),m.push(S,A,T)}this.setIndex(m),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(x,3)),this.setAttribute("uv",new Ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.width,e.height,e.widthSegments,e.heightSegments)}}var hM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pM=`#ifdef USE_ALPHAHASH
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
#endif`,mM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xM=`#ifdef USE_AOMAP
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
#endif`,yM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SM=`#ifdef USE_BATCHING
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
#endif`,MM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,EM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AM=`#ifdef USE_IRIDESCENCE
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
#endif`,RM=`#ifdef USE_BUMPMAP
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
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,FM=`#define PI 3.141592653589793
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
} // validated`,OM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zM=`vec3 transformedNormal = objectNormal;
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
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VM="gl_FragColor = linearToOutputTexel( gl_FragColor );",WM=`
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
}`,XM=`#ifdef USE_ENVMAP
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
#endif`,jM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,qM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eE=`#ifdef USE_GRADIENTMAP
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
}`,tE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sE=`uniform bool receiveShadow;
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
#endif`,oE=`#ifdef USE_ENVMAP
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
#endif`,aE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fE=`PhysicalMaterial material;
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
#endif`,dE=`struct PhysicalMaterial {
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
}`,hE=`
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
#endif`,pE=`#if defined( RE_IndirectDiffuse )
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
#endif`,mE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_E=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ME=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,EE=`#if defined( USE_POINTS_UV )
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
#endif`,wE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CE=`#ifdef USE_MORPHNORMALS
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
#endif`,bE=`#ifdef USE_MORPHTARGETS
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
#endif`,PE=`#ifdef USE_MORPHTARGETS
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
#endif`,LE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FE=`#ifdef USE_NORMALMAP
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
#endif`,OE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$E=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QE=`float getShadowMask() {
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
}`,JE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e1=`#ifdef USE_SKINNING
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
#endif`,t1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n1=`#ifdef USE_SKINNING
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
#endif`,i1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a1=`#ifdef USE_TRANSMISSION
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
#endif`,l1=`#ifdef USE_TRANSMISSION
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
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p1=`uniform sampler2D t2D;
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
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`#include <common>
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
}`,y1=`#if DEPTH_PACKING == 3200
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
}`,S1=`#define DISTANCE
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
}`,M1=`#define DISTANCE
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`uniform float scale;
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
}`,A1=`uniform vec3 diffuse;
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
}`,R1=`#include <common>
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
}`,C1=`uniform vec3 diffuse;
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
}`,b1=`#define LAMBERT
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
}`,P1=`#define LAMBERT
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
}`,L1=`#define MATCAP
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
}`,N1=`#define MATCAP
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
}`,D1=`#define NORMAL
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
}`,U1=`#define NORMAL
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
}`,I1=`#define PHONG
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
}`,F1=`#define PHONG
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
}`,O1=`#define STANDARD
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
}`,z1=`#define STANDARD
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
}`,k1=`#define TOON
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
}`,B1=`#define TOON
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
}`,H1=`uniform float size;
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
}`,G1=`uniform vec3 diffuse;
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
}`,V1=`#include <common>
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
}`,W1=`uniform vec3 color;
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
}`,X1=`uniform float rotation;
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
}`,j1=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:hM,alphahash_pars_fragment:pM,alphamap_fragment:mM,alphamap_pars_fragment:gM,alphatest_fragment:_M,alphatest_pars_fragment:vM,aomap_fragment:xM,aomap_pars_fragment:yM,batching_pars_vertex:SM,batching_vertex:MM,begin_vertex:EM,beginnormal_vertex:wM,bsdfs:TM,iridescence_fragment:AM,bumpmap_pars_fragment:RM,clipping_planes_fragment:CM,clipping_planes_pars_fragment:bM,clipping_planes_pars_vertex:PM,clipping_planes_vertex:LM,color_fragment:NM,color_pars_fragment:DM,color_pars_vertex:UM,color_vertex:IM,common:FM,cube_uv_reflection_fragment:OM,defaultnormal_vertex:zM,displacementmap_pars_vertex:kM,displacementmap_vertex:BM,emissivemap_fragment:HM,emissivemap_pars_fragment:GM,colorspace_fragment:VM,colorspace_pars_fragment:WM,envmap_fragment:XM,envmap_common_pars_fragment:jM,envmap_pars_fragment:YM,envmap_pars_vertex:qM,envmap_physical_pars_fragment:oE,envmap_vertex:$M,fog_vertex:KM,fog_pars_vertex:ZM,fog_fragment:QM,fog_pars_fragment:JM,gradientmap_pars_fragment:eE,lightmap_fragment:tE,lightmap_pars_fragment:nE,lights_lambert_fragment:iE,lights_lambert_pars_fragment:rE,lights_pars_begin:sE,lights_toon_fragment:aE,lights_toon_pars_fragment:lE,lights_phong_fragment:cE,lights_phong_pars_fragment:uE,lights_physical_fragment:fE,lights_physical_pars_fragment:dE,lights_fragment_begin:hE,lights_fragment_maps:pE,lights_fragment_end:mE,logdepthbuf_fragment:gE,logdepthbuf_pars_fragment:_E,logdepthbuf_pars_vertex:vE,logdepthbuf_vertex:xE,map_fragment:yE,map_pars_fragment:SE,map_particle_fragment:ME,map_particle_pars_fragment:EE,metalnessmap_fragment:wE,metalnessmap_pars_fragment:TE,morphinstance_vertex:AE,morphcolor_vertex:RE,morphnormal_vertex:CE,morphtarget_pars_vertex:bE,morphtarget_vertex:PE,normal_fragment_begin:LE,normal_fragment_maps:NE,normal_pars_fragment:DE,normal_pars_vertex:UE,normal_vertex:IE,normalmap_pars_fragment:FE,clearcoat_normal_fragment_begin:OE,clearcoat_normal_fragment_maps:zE,clearcoat_pars_fragment:kE,iridescence_pars_fragment:BE,opaque_fragment:HE,packing:GE,premultiplied_alpha_fragment:VE,project_vertex:WE,dithering_fragment:XE,dithering_pars_fragment:jE,roughnessmap_fragment:YE,roughnessmap_pars_fragment:qE,shadowmap_pars_fragment:$E,shadowmap_pars_vertex:KE,shadowmap_vertex:ZE,shadowmask_pars_fragment:QE,skinbase_vertex:JE,skinning_pars_vertex:e1,skinning_vertex:t1,skinnormal_vertex:n1,specularmap_fragment:i1,specularmap_pars_fragment:r1,tonemapping_fragment:s1,tonemapping_pars_fragment:o1,transmission_fragment:a1,transmission_pars_fragment:l1,uv_pars_fragment:c1,uv_pars_vertex:u1,uv_vertex:f1,worldpos_vertex:d1,background_vert:h1,background_frag:p1,backgroundCube_vert:m1,backgroundCube_frag:g1,cube_vert:_1,cube_frag:v1,depth_vert:x1,depth_frag:y1,distanceRGBA_vert:S1,distanceRGBA_frag:M1,equirect_vert:E1,equirect_frag:w1,linedashed_vert:T1,linedashed_frag:A1,meshbasic_vert:R1,meshbasic_frag:C1,meshlambert_vert:b1,meshlambert_frag:P1,meshmatcap_vert:L1,meshmatcap_frag:N1,meshnormal_vert:D1,meshnormal_frag:U1,meshphong_vert:I1,meshphong_frag:F1,meshphysical_vert:O1,meshphysical_frag:z1,meshtoon_vert:k1,meshtoon_frag:B1,points_vert:H1,points_frag:G1,shadow_vert:V1,shadow_frag:W1,sprite_vert:X1,sprite_frag:j1},pe={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},mi={basic:{uniforms:hn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:hn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new lt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:hn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:hn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:hn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new lt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:hn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:hn([pe.points,pe.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:hn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:hn([pe.common,pe.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:hn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:hn([pe.sprite,pe.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:hn([pe.common,pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:hn([pe.lights,pe.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};mi.physical={uniforms:hn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const ul={r:0,b:0,g:0},Fr=new Si,Y1=new bt;function q1(t,e,n,i,r,s,o){const a=new lt(0);let l=s===!0?0:1,c,f,d=null,h=0,m=null;function _(p,u){let v=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),v=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Nc)?(f===void 0&&(f=new ge(new xt(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:fo(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Fr.copy(u.backgroundRotation),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Y1.makeRotationFromEuler(Fr)),f.material.toneMapped=vt.getTransfer(g.colorSpace)!==Et,(d!==g||h!==g.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new ge(new Ic(2,2),new Hi({name:"BackgroundMaterial",uniforms:fo(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=vt.getTransfer(g.colorSpace)!==Et,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,u){p.getRGB(ul,$_(t)),i.buffers.color.setClear(ul.r,ul.g,ul.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:_}}function $1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,f=!1;function d(P,K,X,ee,L){let O=!1;if(o){const B=x(ee,X,K);c!==B&&(c=B,m(c.object)),O=u(P,ee,X,L),O&&v(P,ee,X,L)}else{const B=K.wireframe===!0;(c.geometry!==ee.id||c.program!==X.id||c.wireframe!==B)&&(c.geometry=ee.id,c.program=X.id,c.wireframe=B,O=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,b(P,K,X,ee),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(P){return i.isWebGL2?t.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?t.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function x(P,K,X){const ee=X.wireframe===!0;let L=a[P.id];L===void 0&&(L={},a[P.id]=L);let O=L[K.id];O===void 0&&(O={},L[K.id]=O);let B=O[ee];return B===void 0&&(B=p(h()),O[ee]=B),B}function p(P){const K=[],X=[],ee=[];for(let L=0;L<r;L++)K[L]=0,X[L]=0,ee[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:X,attributeDivisors:ee,object:P,attributes:{},index:null}}function u(P,K,X,ee){const L=c.attributes,O=K.attributes;let B=0;const ne=X.getAttributes();for(const le in ne)if(ne[le].location>=0){const H=L[le];let te=O[le];if(te===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),H===void 0||H.attribute!==te||te&&H.data!==te.data)return!0;B++}return c.attributesNum!==B||c.index!==ee}function v(P,K,X,ee){const L={},O=K.attributes;let B=0;const ne=X.getAttributes();for(const le in ne)if(ne[le].location>=0){let H=O[le];H===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&(H=P.instanceColor));const te={};te.attribute=H,H&&H.data&&(te.data=H.data),L[le]=te,B++}c.attributes=L,c.attributesNum=B,c.index=ee}function g(){const P=c.newAttributes;for(let K=0,X=P.length;K<X;K++)P[K]=0}function S(P){A(P,0)}function A(P,K){const X=c.newAttributes,ee=c.enabledAttributes,L=c.attributeDivisors;X[P]=1,ee[P]===0&&(t.enableVertexAttribArray(P),ee[P]=1),L[P]!==K&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,K),L[P]=K)}function T(){const P=c.newAttributes,K=c.enabledAttributes;for(let X=0,ee=K.length;X<ee;X++)K[X]!==P[X]&&(t.disableVertexAttribArray(X),K[X]=0)}function w(P,K,X,ee,L,O,B){B===!0?t.vertexAttribIPointer(P,K,X,L,O):t.vertexAttribPointer(P,K,X,ee,L,O)}function b(P,K,X,ee){if(i.isWebGL2===!1&&(P.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const L=ee.attributes,O=X.getAttributes(),B=K.defaultAttributeValues;for(const ne in O){const le=O[ne];if(le.location>=0){let Le=L[ne];if(Le===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(Le=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(Le=P.instanceColor)),Le!==void 0){const H=Le.normalized,te=Le.itemSize,ve=n.get(Le);if(ve===void 0)continue;const Ne=ve.buffer,Pe=ve.type,we=ve.bytesPerElement,ht=i.isWebGL2===!0&&(Pe===t.INT||Pe===t.UNSIGNED_INT||Le.gpuType===P_);if(Le.isInterleavedBufferAttribute){const Be=Le.data,I=Be.stride,kt=Le.offset;if(Be.isInstancedInterleavedBuffer){for(let Fe=0;Fe<le.locationSize;Fe++)A(le.location+Fe,Be.meshPerAttribute);P.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let Fe=0;Fe<le.locationSize;Fe++)S(le.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let Fe=0;Fe<le.locationSize;Fe++)w(le.location+Fe,te/le.locationSize,Pe,H,I*we,(kt+te/le.locationSize*Fe)*we,ht)}else{if(Le.isInstancedBufferAttribute){for(let Be=0;Be<le.locationSize;Be++)A(le.location+Be,Le.meshPerAttribute);P.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let Be=0;Be<le.locationSize;Be++)S(le.location+Be);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let Be=0;Be<le.locationSize;Be++)w(le.location+Be,te/le.locationSize,Pe,H,te*we,te/le.locationSize*Be*we,ht)}}else if(B!==void 0){const H=B[ne];if(H!==void 0)switch(H.length){case 2:t.vertexAttrib2fv(le.location,H);break;case 3:t.vertexAttrib3fv(le.location,H);break;case 4:t.vertexAttrib4fv(le.location,H);break;default:t.vertexAttrib1fv(le.location,H)}}}}T()}function Y(){J();for(const P in a){const K=a[P];for(const X in K){const ee=K[X];for(const L in ee)_(ee[L].object),delete ee[L];delete K[X]}delete a[P]}}function y(P){if(a[P.id]===void 0)return;const K=a[P.id];for(const X in K){const ee=K[X];for(const L in ee)_(ee[L].object),delete ee[L];delete K[X]}delete a[P.id]}function C(P){for(const K in a){const X=a[K];if(X[P.id]===void 0)continue;const ee=X[P.id];for(const L in ee)_(ee[L].object),delete ee[L];delete X[P.id]}}function J(){Q(),f=!0,c!==l&&(c=l,m(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:J,resetDefaultState:Q,dispose:Y,releaseStatesOfGeometry:y,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:S,disableUnusedAttributes:T}}function K1(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let m,_;if(r)m=t,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,f,d,h),n.update(d,s,h)}function c(f,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h;_++)this.render(f[_],d[_]);else{m.multiDrawArraysWEBGL(s,f,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=d[x];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Z1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,S=o||e.has("OES_texture_float"),A=g&&S,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:A,maxSamples:T}}function Q1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Br,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||_===null||_.length===0||s&&!p)s?f(null):c();else{const v=s?0:i,g=v*4;let S=u.clippingState||null;l.value=S,S=f(_,h,g,m);for(let A=0;A!==g;++A)S[A]=n[A];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,_){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const u=m+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,S=m;g!==x;++g,S+=4)o.copy(d[g]).applyMatrix4(v,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function J1(t){let e=new WeakMap;function n(o,a){return a===Jf?o.mapping=lo:a===ed&&(o.mapping=co),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jf||a===ed)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new cM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class J_ extends K_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Xs=4,Mm=[.125,.215,.35,.446,.526,.582],Vr=20,ku=new J_,Em=new lt;let Bu=null,Hu=0,Gu=0;const Hr=(1+Math.sqrt(5))/2,As=1/Hr,wm=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Hr,As),new D(0,Hr,-As),new D(As,0,Hr),new D(-As,0,Hr),new D(Hr,As,0),new D(-Hr,As,0)];class od{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu,Hu,Gu),e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===lo||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:ma,format:oi,colorSpace:Rr,depthBuffer:!1},r=Tm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ew(s)),this._blurMaterial=tw(s,e,n)}return r}_compileMaterial(e){const n=new ge(this._lodPlanes[0],e);this._renderer.compile(n,ku)}_sceneToCubeUV(e,n,i,r){const a=new Un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Em),f.toneMapping=_r,f.autoClear=!1;const m=new ga({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),_=new ge(new xt,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Em),x=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;fl(r,v*g,u>2?g:0,g,g),f.setRenderTarget(r),x&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===lo||e.mapping===co;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;fl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ku)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wm[(r-1)%wm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new ge(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Vr-1),x=s/_,p=isFinite(s)?1+Math.floor(f*x):Vr;p>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vr}`);const u=[];let v=0;for(let w=0;w<Vr;++w){const b=w/x,Y=Math.exp(-b*b/2);u.push(Y),w===0?v+=Y:w<p&&(v+=2*Y)}for(let w=0;w<u.length;w++)u[w]=u[w]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const S=this._sizeLods[r],A=3*S*(r>g-Xs?r-g+Xs:0),T=4*(this._cubeSize-S);fl(n,A,T,3*S,2*S),l.setRenderTarget(n),l.render(d,ku)}}function ew(t){const e=[],n=[],i=[];let r=t;const s=t-Xs+1+Mm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Xs?l=Mm[o-t+Xs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,_=6,x=3,p=2,u=1,v=new Float32Array(x*_*m),g=new Float32Array(p*_*m),S=new Float32Array(u*_*m);for(let T=0;T<m;T++){const w=T%3*2/3-1,b=T>2?0:-1,Y=[w,b,0,w+2/3,b,0,w+2/3,b+1,0,w,b,0,w+2/3,b+1,0,w,b+1,0];v.set(Y,x*_*T),g.set(h,p*_*T);const y=[T,T,T,T,T,T];S.set(y,u*_*T)}const A=new Cn;A.setAttribute("position",new ci(v,x)),A.setAttribute("uv",new ci(g,p)),A.setAttribute("faceIndex",new ci(S,u)),e.push(A),r>Xs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Tm(t,e,n){const i=new is(t,e,n);return i.texture.mapping=Nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function tw(t,e,n){const i=new Float32Array(Vr),r=new D(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ch(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Am(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Rm(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function ch(){return`

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
	`}function nw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jf||l===ed,f=l===lo||l===co;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new od(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new od(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function iw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rw(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,u=x.length;p<u;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,_=d.attributes.position;let x=0;if(m!==null){const v=m.array;x=m.version;for(let g=0,S=v.length;g<S;g+=3){const A=v[g+0],T=v[g+1],w=v[g+2];h.push(A,T,T,w,w,A)}}else if(_!==void 0){const v=_.array;x=_.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const A=g+0,T=g+1,w=g+2;h.push(A,T,T,w,w,A)}}else return;const p=new(k_(h)?q_:Y_)(h,1);p.version=x;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function sw(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function f(m,_){t.drawElements(s,_,a,m*l),n.update(_,s,1)}function d(m,_,x){if(x===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,_,a,m*l,x),n.update(_,s,x)}function h(m,_,x){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<x;u++)this.render(m[u]/l,_[u]);else{p.multiDrawElementsWEBGL(s,_,0,a,m,0,x);let u=0;for(let v=0;v<x;v++)u+=_[v];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function ow(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function aw(t,e){return t[0]-e[0]}function lw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function cw(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=_!==void 0?_.length:0;let p=s.get(f);if(p===void 0||p.count!==x){let Q=function(){C.dispose(),s.delete(f),f.removeEventListener("dispose",Q)};var m=Q;p!==void 0&&p.texture.dispose();const u=f.morphAttributes.position!==void 0,v=f.morphAttributes.normal!==void 0,g=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],T=f.morphAttributes.color||[];let w=0;u===!0&&(w=1),v===!0&&(w=2),g===!0&&(w=3);let b=f.attributes.position.count*w,Y=1;b>e.maxTextureSize&&(Y=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const y=new Float32Array(b*Y*4*x),C=new V_(y,b,Y,x);C.type=Ni,C.needsUpdate=!0;const J=w*4;for(let P=0;P<x;P++){const K=S[P],X=A[P],ee=T[P],L=b*Y*4*P;for(let O=0;O<K.count;O++){const B=O*J;u===!0&&(o.fromBufferAttribute(K,O),y[L+B+0]=o.x,y[L+B+1]=o.y,y[L+B+2]=o.z,y[L+B+3]=0),v===!0&&(o.fromBufferAttribute(X,O),y[L+B+4]=o.x,y[L+B+5]=o.y,y[L+B+6]=o.z,y[L+B+7]=0),g===!0&&(o.fromBufferAttribute(ee,O),y[L+B+8]=o.x,y[L+B+9]=o.y,y[L+B+10]=o.z,y[L+B+11]=ee.itemSize===4?o.w:1)}}p={count:x,texture:C,size:new Ye(b,Y)},s.set(f,p),f.addEventListener("dispose",Q)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let u=0;for(let g=0;g<h.length;g++)u+=h[g];const v=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",h)}d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let x=i[f.id];if(x===void 0||x.length!==_){x=[];for(let S=0;S<_;S++)x[S]=[S,0];i[f.id]=x}for(let S=0;S<_;S++){const A=x[S];A[0]=S,A[1]=h[S]}x.sort(lw);for(let S=0;S<8;S++)S<_&&x[S][1]?(a[S][0]=x[S][0],a[S][1]=x[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(aw);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const A=a[S],T=A[0],w=A[1];T!==Number.MAX_SAFE_INTEGER&&w?(p&&f.getAttribute("morphTarget"+S)!==p[T]&&f.setAttribute("morphTarget"+S,p[T]),u&&f.getAttribute("morphNormal"+S)!==u[T]&&f.setAttribute("morphNormal"+S,u[T]),r[S]=w,v+=w):(p&&f.hasAttribute("morphTarget"+S)===!0&&f.deleteAttribute("morphTarget"+S),u&&f.hasAttribute("morphNormal"+S)===!0&&f.deleteAttribute("morphNormal"+S),r[S]=0)}const g=f.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function uw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class ev extends _n{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:Zr,f!==Zr&&f!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Zr&&(i=ar),i===void 0&&f===uo&&(i=Kr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const tv=new _n,nv=new ev(1,1);nv.compareFunction=z_;const iv=new V_,rv=new jS,sv=new Z_,Cm=[],bm=[],Pm=new Float32Array(16),Lm=new Float32Array(9),Nm=new Float32Array(4);function _o(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Cm[r];if(s===void 0&&(s=new Float32Array(r),Cm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function qt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fc(t,e){let n=bm[e];n===void 0&&(n=new Int32Array(e),bm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2fv(this.addr,e),qt(n,e)}}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;t.uniform3fv(this.addr,e),qt(n,e)}}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4fv(this.addr,e),qt(n,e)}}function mw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),qt(n,e)}else{if(Yt(n,i))return;Nm.set(i),t.uniformMatrix2fv(this.addr,!1,Nm),qt(n,i)}}function gw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),qt(n,e)}else{if(Yt(n,i))return;Lm.set(i),t.uniformMatrix3fv(this.addr,!1,Lm),qt(n,i)}}function _w(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),qt(n,e)}else{if(Yt(n,i))return;Pm.set(i),t.uniformMatrix4fv(this.addr,!1,Pm),qt(n,i)}}function vw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2iv(this.addr,e),qt(n,e)}}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3iv(this.addr,e),qt(n,e)}}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4iv(this.addr,e),qt(n,e)}}function Mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2uiv(this.addr,e),qt(n,e)}}function ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3uiv(this.addr,e),qt(n,e)}}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4uiv(this.addr,e),qt(n,e)}}function Aw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?nv:tv;n.setTexture2D(e||s,r)}function Rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||rv,r)}function Cw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||sv,r)}function bw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||iv,r)}function Pw(t){switch(t){case 5126:return fw;case 35664:return dw;case 35665:return hw;case 35666:return pw;case 35674:return mw;case 35675:return gw;case 35676:return _w;case 5124:case 35670:return vw;case 35667:case 35671:return xw;case 35668:case 35672:return yw;case 35669:case 35673:return Sw;case 5125:return Mw;case 36294:return Ew;case 36295:return ww;case 36296:return Tw;case 35678:case 36198:case 36298:case 36306:case 35682:return Aw;case 35679:case 36299:case 36307:return Rw;case 35680:case 36300:case 36308:case 36293:return Cw;case 36289:case 36303:case 36311:case 36292:return bw}}function Lw(t,e){t.uniform1fv(this.addr,e)}function Nw(t,e){const n=_o(e,this.size,2);t.uniform2fv(this.addr,n)}function Dw(t,e){const n=_o(e,this.size,3);t.uniform3fv(this.addr,n)}function Uw(t,e){const n=_o(e,this.size,4);t.uniform4fv(this.addr,n)}function Iw(t,e){const n=_o(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Fw(t,e){const n=_o(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ow(t,e){const n=_o(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function zw(t,e){t.uniform1iv(this.addr,e)}function kw(t,e){t.uniform2iv(this.addr,e)}function Bw(t,e){t.uniform3iv(this.addr,e)}function Hw(t,e){t.uniform4iv(this.addr,e)}function Gw(t,e){t.uniform1uiv(this.addr,e)}function Vw(t,e){t.uniform2uiv(this.addr,e)}function Ww(t,e){t.uniform3uiv(this.addr,e)}function Xw(t,e){t.uniform4uiv(this.addr,e)}function jw(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||tv,s[o])}function Yw(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||rv,s[o])}function qw(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||sv,s[o])}function $w(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||iv,s[o])}function Kw(t){switch(t){case 5126:return Lw;case 35664:return Nw;case 35665:return Dw;case 35666:return Uw;case 35674:return Iw;case 35675:return Fw;case 35676:return Ow;case 5124:case 35670:return zw;case 35667:case 35671:return kw;case 35668:case 35672:return Bw;case 35669:case 35673:return Hw;case 5125:return Gw;case 36294:return Vw;case 36295:return Ww;case 36296:return Xw;case 35678:case 36198:case 36298:case 36306:case 35682:return jw;case 35679:case 36299:case 36307:return Yw;case 35680:case 36300:case 36308:case 36293:return qw;case 36289:case 36303:case 36311:case 36292:return $w}}class Zw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Pw(n.type)}}class Qw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Kw(n.type)}}class Jw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Vu=/(\w+)(\])?(\[|\.)?/g;function Dm(t,e){t.seq.push(e),t.map[e.id]=e}function eT(t,e,n){const i=t.name,r=i.length;for(Vu.lastIndex=0;;){const s=Vu.exec(i),o=Vu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Dm(n,c===void 0?new Zw(a,t,e):new Qw(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Jw(a),Dm(n,d)),n=d}}}class zl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);eT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Um(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const tT=37297;let nT=0;function iT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function rT(t){const e=vt.getPrimaries(vt.workingColorSpace),n=vt.getPrimaries(t);let i;switch(e===n?i="":e===dc&&n===fc?i="LinearDisplayP3ToLinearSRGB":e===fc&&n===dc&&(i="LinearSRGBToLinearDisplayP3"),t){case Rr:case Dc:return[i,"LinearTransferOETF"];case Dn:case ah:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Im(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+iT(t.getShaderSource(e),o)}else return r}function sT(t,e){const n=rT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function oT(t,e){let n;switch(e){case gS:n="Linear";break;case _S:n="Reinhard";break;case vS:n="OptimizedCineon";break;case C_:n="ACESFilmic";break;case yS:n="AgX";break;case SS:n="Neutral";break;case xS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function aT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(js).join(`
`)}function lT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function cT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function uT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function js(t){return t!==""}function Fm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Om(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(t){return t.replace(fT,hT)}const dT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hT(t,e){let n=it[e];if(n===void 0){const i=dT.get(e);if(i!==void 0)n=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ad(n)}const pT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zm(t){return t.replace(pT,mT)}function mT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function km(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function gT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===T_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===A_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function _T(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case lo:case co:e="ENVMAP_TYPE_CUBE";break;case Nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case co:e="ENVMAP_MODE_REFRACTION";break}return e}function xT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case R_:e="ENVMAP_BLENDING_MULTIPLY";break;case pS:e="ENVMAP_BLENDING_MIX";break;case mS:e="ENVMAP_BLENDING_ADD";break}return e}function yT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ST(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=gT(n),c=_T(n),f=vT(n),d=xT(n),h=yT(n),m=n.isWebGL2?"":aT(n),_=lT(n),x=cT(s),p=r.createProgram();let u,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(js).join(`
`),u.length>0&&(u+=`
`),v=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(js).join(`
`),v.length>0&&(v+=`
`)):(u=[km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),v=[m,km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?it.tonemapping_pars_fragment:"",n.toneMapping!==_r?oT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,sT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(js).join(`
`)),o=ad(o),o=Fm(o,n),o=Om(o,n),a=ad(a),a=Fm(a,n),a=Om(a,n),o=zm(o),a=zm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=g+u+o,A=g+v+a,T=Um(r,r.VERTEX_SHADER,S),w=Um(r,r.FRAGMENT_SHADER,A);r.attachShader(p,T),r.attachShader(p,w),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function b(J){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(T).trim(),K=r.getShaderInfoLog(w).trim();let X=!0,ee=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,T,w);else{const L=Im(r,T,"vertex"),O=Im(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+J.name+`
Material Type: `+J.type+`

Program Info Log: `+Q+`
`+L+`
`+O)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(P===""||K==="")&&(ee=!1);ee&&(J.diagnostics={runnable:X,programLog:Q,vertexShader:{log:P,prefix:u},fragmentShader:{log:K,prefix:v}})}r.deleteShader(T),r.deleteShader(w),Y=new zl(r,p),y=uT(r,p)}let Y;this.getUniforms=function(){return Y===void 0&&b(this),Y};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(p,tT)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=w,this}let MT=0;class ET{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new wT(e),n.set(e,i)),i}}class wT{constructor(e){this.id=MT++,this.code=e,this.usedTimes=0}}function TT(t,e,n,i,r,s,o){const a=new X_,l=new ET,c=new Set,f=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,C,J,Q,P){const K=Q.fog,X=P.geometry,ee=y.isMeshStandardMaterial?Q.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||ee),O=L&&L.mapping===Nc?L.image.height:null,B=x[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const ne=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,le=ne!==void 0?ne.length:0;let Le=0;X.morphAttributes.position!==void 0&&(Le=1),X.morphAttributes.normal!==void 0&&(Le=2),X.morphAttributes.color!==void 0&&(Le=3);let H,te,ve,Ne;if(B){const pt=mi[B];H=pt.vertexShader,te=pt.fragmentShader}else H=y.vertexShader,te=y.fragmentShader,l.update(y),ve=l.getVertexShaderID(y),Ne=l.getFragmentShaderID(y);const Pe=t.getRenderTarget(),we=P.isInstancedMesh===!0,ht=P.isBatchedMesh===!0,Be=!!y.map,I=!!y.matcap,kt=!!L,Fe=!!y.aoMap,st=!!y.lightMap,ze=!!y.bumpMap,et=!!y.normalMap,We=!!y.displacementMap,tt=!!y.emissiveMap,Pt=!!y.metalnessMap,R=!!y.roughnessMap,M=y.anisotropy>0,q=y.clearcoat>0,Z=y.iridescence>0,re=y.sheen>0,ie=y.transmission>0,Ve=M&&!!y.anisotropyMap,ke=q&&!!y.clearcoatMap,fe=q&&!!y.clearcoatNormalMap,me=q&&!!y.clearcoatRoughnessMap,Ke=Z&&!!y.iridescenceMap,oe=Z&&!!y.iridescenceThicknessMap,It=re&&!!y.sheenColorMap,qe=re&&!!y.sheenRoughnessMap,De=!!y.specularMap,Ae=!!y.specularColorMap,Ce=!!y.specularIntensityMap,nt=ie&&!!y.transmissionMap,$e=ie&&!!y.thicknessMap,ft=!!y.gradientMap,N=!!y.alphaMap,ae=y.alphaTest>0,V=!!y.alphaHash,ce=!!y.extensions;let xe=_r;y.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(xe=t.toneMapping);const ot={isWebGL2:d,shaderID:B,shaderType:y.type,shaderName:y.name,vertexShader:H,fragmentShader:te,defines:y.defines,customVertexShaderID:ve,customFragmentShaderID:Ne,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:ht,instancing:we,instancingColor:we&&P.instanceColor!==null,instancingMorph:we&&P.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Pe===null?t.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Rr,alphaToCoverage:!!y.alphaToCoverage,map:Be,matcap:I,envMap:kt,envMapMode:kt&&L.mapping,envMapCubeUVHeight:O,aoMap:Fe,lightMap:st,bumpMap:ze,normalMap:et,displacementMap:m&&We,emissiveMap:tt,normalMapObjectSpace:et&&y.normalMapType===NS,normalMapTangentSpace:et&&y.normalMapType===O_,metalnessMap:Pt,roughnessMap:R,anisotropy:M,anisotropyMap:Ve,clearcoat:q,clearcoatMap:ke,clearcoatNormalMap:fe,clearcoatRoughnessMap:me,iridescence:Z,iridescenceMap:Ke,iridescenceThicknessMap:oe,sheen:re,sheenColorMap:It,sheenRoughnessMap:qe,specularMap:De,specularColorMap:Ae,specularIntensityMap:Ce,transmission:ie,transmissionMap:nt,thicknessMap:$e,gradientMap:ft,opaque:y.transparent===!1&&y.blending===Js&&y.alphaToCoverage===!1,alphaMap:N,alphaTest:ae,alphaHash:V,combine:y.combine,mapUv:Be&&p(y.map.channel),aoMapUv:Fe&&p(y.aoMap.channel),lightMapUv:st&&p(y.lightMap.channel),bumpMapUv:ze&&p(y.bumpMap.channel),normalMapUv:et&&p(y.normalMap.channel),displacementMapUv:We&&p(y.displacementMap.channel),emissiveMapUv:tt&&p(y.emissiveMap.channel),metalnessMapUv:Pt&&p(y.metalnessMap.channel),roughnessMapUv:R&&p(y.roughnessMap.channel),anisotropyMapUv:Ve&&p(y.anisotropyMap.channel),clearcoatMapUv:ke&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:It&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:qe&&p(y.sheenRoughnessMap.channel),specularMapUv:De&&p(y.specularMap.channel),specularColorMapUv:Ae&&p(y.specularColorMap.channel),specularIntensityMapUv:Ce&&p(y.specularIntensityMap.channel),transmissionMapUv:nt&&p(y.transmissionMap.channel),thicknessMapUv:$e&&p(y.thicknessMap.channel),alphaMapUv:N&&p(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(et||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!X.attributes.uv&&(Be||N),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Le,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&J.length>0,shadowMapType:t.shadowMap.type,toneMapping:xe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Be&&y.map.isVideoTexture===!0&&vt.getTransfer(y.map.colorSpace)===Et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_i,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ce&&y.extensions.derivatives===!0,extensionFragDepth:ce&&y.extensions.fragDepth===!0,extensionDrawBuffers:ce&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ce&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function v(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const J in y.defines)C.push(J),C.push(y.defines[J]);return y.isRawShaderMaterial===!1&&(g(C,y),S(C,y),C.push(t.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function g(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function S(y,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.instancingMorph&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.normalMapObjectSpace&&a.enable(7),C.normalMapTangentSpace&&a.enable(8),C.clearcoat&&a.enable(9),C.iridescence&&a.enable(10),C.alphaTest&&a.enable(11),C.vertexColors&&a.enable(12),C.vertexAlphas&&a.enable(13),C.vertexUv1s&&a.enable(14),C.vertexUv2s&&a.enable(15),C.vertexUv3s&&a.enable(16),C.vertexTangents&&a.enable(17),C.anisotropy&&a.enable(18),C.alphaHash&&a.enable(19),C.batching&&a.enable(20),y.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.alphaToCoverage&&a.enable(20),y.push(a.mask)}function A(y){const C=x[y.type];let J;if(C){const Q=mi[C];J=sM.clone(Q.uniforms)}else J=y.uniforms;return J}function T(y,C){let J;for(let Q=0,P=f.length;Q<P;Q++){const K=f[Q];if(K.cacheKey===C){J=K,++J.usedTimes;break}}return J===void 0&&(J=new ST(t,C,y,s),f.push(J)),J}function w(y){if(--y.usedTimes===0){const C=f.indexOf(y);f[C]=f[f.length-1],f.pop(),y.destroy()}}function b(y){l.remove(y)}function Y(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:A,acquireProgram:T,releaseProgram:w,releaseShaderCache:b,programs:f,dispose:Y}}function AT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function RT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Bm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Hm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,_,x,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=x,u.group=p),e++,u}function a(d,h,m,_,x,p){const u=o(d,h,m,_,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(d,h,m,_,x,p){const u=o(d,h,m,_,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||RT),i.length>1&&i.sort(h||Bm),r.length>1&&r.sort(h||Bm)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function CT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Hm,t.set(i,[o])):r>=s.length?(o=new Hm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function bT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new lt};break;case"SpotLight":n={position:new D,direction:new D,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function PT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let LT=0;function NT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function DT(t,e){const n=new bT,i=PT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new D);const s=new D,o=new bt,a=new bt;function l(f,d){let h=0,m=0,_=0;for(let J=0;J<9;J++)r.probe[J].set(0,0,0);let x=0,p=0,u=0,v=0,g=0,S=0,A=0,T=0,w=0,b=0,Y=0;f.sort(NT);const y=d===!0?Math.PI:1;for(let J=0,Q=f.length;J<Q;J++){const P=f[J],K=P.color,X=P.intensity,ee=P.distance,L=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=K.r*X*y,m+=K.g*X*y,_+=K.b*X*y;else if(P.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(P.sh.coefficients[O],X);Y++}else if(P.isDirectionalLight){const O=n.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){const B=P.shadow,ne=i.get(P);ne.shadowBias=B.bias,ne.shadowNormalBias=B.normalBias,ne.shadowRadius=B.radius,ne.shadowMapSize=B.mapSize,r.directionalShadow[x]=ne,r.directionalShadowMap[x]=L,r.directionalShadowMatrix[x]=P.shadow.matrix,S++}r.directional[x]=O,x++}else if(P.isSpotLight){const O=n.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(K).multiplyScalar(X*y),O.distance=ee,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,r.spot[u]=O;const B=P.shadow;if(P.map&&(r.spotLightMap[w]=P.map,w++,B.updateMatrices(P),P.castShadow&&b++),r.spotLightMatrix[u]=B.matrix,P.castShadow){const ne=i.get(P);ne.shadowBias=B.bias,ne.shadowNormalBias=B.normalBias,ne.shadowRadius=B.radius,ne.shadowMapSize=B.mapSize,r.spotShadow[u]=ne,r.spotShadowMap[u]=L,T++}u++}else if(P.isRectAreaLight){const O=n.get(P);O.color.copy(K).multiplyScalar(X),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),r.rectArea[v]=O,v++}else if(P.isPointLight){const O=n.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity*y),O.distance=P.distance,O.decay=P.decay,P.castShadow){const B=P.shadow,ne=i.get(P);ne.shadowBias=B.bias,ne.shadowNormalBias=B.normalBias,ne.shadowRadius=B.radius,ne.shadowMapSize=B.mapSize,ne.shadowCameraNear=B.camera.near,ne.shadowCameraFar=B.camera.far,r.pointShadow[p]=ne,r.pointShadowMap[p]=L,r.pointShadowMatrix[p]=P.shadow.matrix,A++}r.point[p]=O,p++}else if(P.isHemisphereLight){const O=n.get(P);O.skyColor.copy(P.color).multiplyScalar(X*y),O.groundColor.copy(P.groundColor).multiplyScalar(X*y),r.hemi[g]=O,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const C=r.hash;(C.directionalLength!==x||C.pointLength!==p||C.spotLength!==u||C.rectAreaLength!==v||C.hemiLength!==g||C.numDirectionalShadows!==S||C.numPointShadows!==A||C.numSpotShadows!==T||C.numSpotMaps!==w||C.numLightProbes!==Y)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=v,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=T+w-b,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=Y,C.directionalLength=x,C.pointLength=p,C.spotLength=u,C.rectAreaLength=v,C.hemiLength=g,C.numDirectionalShadows=S,C.numPointShadows=A,C.numSpotShadows=T,C.numSpotMaps=w,C.numLightProbes=Y,r.version=LT++)}function c(f,d){let h=0,m=0,_=0,x=0,p=0;const u=d.matrixWorldInverse;for(let v=0,g=f.length;v<g;v++){const S=f[v];if(S.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(u),h++}else if(S.isSpotLight){const A=r.spot[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(u),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(u),_++}else if(S.isRectAreaLight){const A=r.rectArea[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const A=r.point[m];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(u),m++}else if(S.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Gm(t,e){const n=new DT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function UT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Gm(t,e),n.set(s,[l])):o>=a.length?(l=new Gm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class IT extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FT extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const OT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zT=`uniform sampler2D shadow_pass;
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
}`;function kT(t,e,n){let i=new lh;const r=new Ye,s=new Ye,o=new Ct,a=new IT({depthPacking:LS}),l=new FT,c={},f=n.maxTextureSize,d={[Mr]:un,[un]:Mr,[_i]:_i},h=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:OT,fragmentShader:zT}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Cn;_.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ge(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=T_;let u=this.type;this.render=function(T,w,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const Y=t.getRenderTarget(),y=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),J=t.state;J.setBlending(gr),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Q=u!==bi&&this.type===bi,P=u===bi&&this.type!==bi;for(let K=0,X=T.length;K<X;K++){const ee=T[K],L=ee.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const O=L.getFrameExtents();if(r.multiply(O),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,L.mapSize.y=s.y)),L.map===null||Q===!0||P===!0){const ne=this.type!==bi?{minFilter:mn,magFilter:mn}:{};L.map!==null&&L.map.dispose(),L.map=new is(r.x,r.y,ne),L.map.texture.name=ee.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const B=L.getViewportCount();for(let ne=0;ne<B;ne++){const le=L.getViewport(ne);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),J.viewport(o),L.updateMatrices(ee,ne),i=L.getFrustum(),S(w,b,L.camera,ee,this.type)}L.isPointLightShadow!==!0&&this.type===bi&&v(L,b),L.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(Y,y,C)};function v(T,w){const b=e.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new is(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,b,h,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,b,m,x,null)}function g(T,w,b,Y){let y=null;const C=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)y=C;else if(y=b.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const J=y.uuid,Q=w.uuid;let P=c[J];P===void 0&&(P={},c[J]=P);let K=P[Q];K===void 0&&(K=y.clone(),P[Q]=K,w.addEventListener("dispose",A)),y=K}if(y.visible=w.visible,y.wireframe=w.wireframe,Y===bi?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const J=t.properties.get(y);J.light=b}return y}function S(T,w,b,Y,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===bi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const Q=e.update(T),P=T.material;if(Array.isArray(P)){const K=Q.groups;for(let X=0,ee=K.length;X<ee;X++){const L=K[X],O=P[L.materialIndex];if(O&&O.visible){const B=g(T,O,Y,y);T.onBeforeShadow(t,T,w,b,Q,B,L),t.renderBufferDirect(b,null,Q,B,T,L),T.onAfterShadow(t,T,w,b,Q,B,L)}}}else if(P.visible){const K=g(T,P,Y,y);T.onBeforeShadow(t,T,w,b,Q,K,null),t.renderBufferDirect(b,null,Q,K,T,null),T.onAfterShadow(t,T,w,b,Q,K,null)}}const J=T.children;for(let Q=0,P=J.length;Q<P;Q++)S(J[Q],w,b,Y,y)}function A(T){T.target.removeEventListener("dispose",A);for(const b in c){const Y=c[b],y=T.target.uuid;y in Y&&(Y[y].dispose(),delete Y[y])}}}function BT(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const ae=new Ct;let V=null;const ce=new Ct(0,0,0,0);return{setMask:function(xe){V!==xe&&!N&&(t.colorMask(xe,xe,xe,xe),V=xe)},setLocked:function(xe){N=xe},setClear:function(xe,ot,pt,Bt,Lt){Lt===!0&&(xe*=Bt,ot*=Bt,pt*=Bt),ae.set(xe,ot,pt,Bt),ce.equals(ae)===!1&&(t.clearColor(xe,ot,pt,Bt),ce.copy(ae))},reset:function(){N=!1,V=null,ce.set(-1,0,0,0)}}}function s(){let N=!1,ae=null,V=null,ce=null;return{setTest:function(xe){xe?we(t.DEPTH_TEST):ht(t.DEPTH_TEST)},setMask:function(xe){ae!==xe&&!N&&(t.depthMask(xe),ae=xe)},setFunc:function(xe){if(V!==xe){switch(xe){case aS:t.depthFunc(t.NEVER);break;case lS:t.depthFunc(t.ALWAYS);break;case cS:t.depthFunc(t.LESS);break;case cc:t.depthFunc(t.LEQUAL);break;case uS:t.depthFunc(t.EQUAL);break;case fS:t.depthFunc(t.GEQUAL);break;case dS:t.depthFunc(t.GREATER);break;case hS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}V=xe}},setLocked:function(xe){N=xe},setClear:function(xe){ce!==xe&&(t.clearDepth(xe),ce=xe)},reset:function(){N=!1,ae=null,V=null,ce=null}}}function o(){let N=!1,ae=null,V=null,ce=null,xe=null,ot=null,pt=null,Bt=null,Lt=null;return{setTest:function(Xe){N||(Xe?we(t.STENCIL_TEST):ht(t.STENCIL_TEST))},setMask:function(Xe){ae!==Xe&&!N&&(t.stencilMask(Xe),ae=Xe)},setFunc:function(Xe,$t,bn){(V!==Xe||ce!==$t||xe!==bn)&&(t.stencilFunc(Xe,$t,bn),V=Xe,ce=$t,xe=bn)},setOp:function(Xe,$t,bn){(ot!==Xe||pt!==$t||Bt!==bn)&&(t.stencilOp(Xe,$t,bn),ot=Xe,pt=$t,Bt=bn)},setLocked:function(Xe){N=Xe},setClear:function(Xe){Lt!==Xe&&(t.clearStencil(Xe),Lt=Xe)},reset:function(){N=!1,ae=null,V=null,ce=null,xe=null,ot=null,pt=null,Bt=null,Lt=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,d=new WeakMap;let h={},m={},_=new WeakMap,x=[],p=null,u=!1,v=null,g=null,S=null,A=null,T=null,w=null,b=null,Y=new lt(0,0,0),y=0,C=!1,J=null,Q=null,P=null,K=null,X=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,O=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(B)[1]),L=O>=1):B.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),L=O>=2);let ne=null,le={};const Le=t.getParameter(t.SCISSOR_BOX),H=t.getParameter(t.VIEWPORT),te=new Ct().fromArray(Le),ve=new Ct().fromArray(H);function Ne(N,ae,V,ce){const xe=new Uint8Array(4),ot=t.createTexture();t.bindTexture(N,ot),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let pt=0;pt<V;pt++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(ae,0,t.RGBA,1,1,ce,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(ae+pt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return ot}const Pe={};Pe[t.TEXTURE_2D]=Ne(t.TEXTURE_2D,t.TEXTURE_2D,1),Pe[t.TEXTURE_CUBE_MAP]=Ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pe[t.TEXTURE_2D_ARRAY]=Ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Pe[t.TEXTURE_3D]=Ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),we(t.DEPTH_TEST),l.setFunc(cc),We(!1),tt(wp),we(t.CULL_FACE),ze(gr);function we(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function ht(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function Be(N,ae){return m[N]!==ae?(t.bindFramebuffer(N,ae),m[N]=ae,i&&(N===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ae),N===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ae)),!0):!1}function I(N,ae){let V=x,ce=!1;if(N){V=_.get(ae),V===void 0&&(V=[],_.set(ae,V));const xe=N.textures;if(V.length!==xe.length||V[0]!==t.COLOR_ATTACHMENT0){for(let ot=0,pt=xe.length;ot<pt;ot++)V[ot]=t.COLOR_ATTACHMENT0+ot;V.length=xe.length,ce=!0}}else V[0]!==t.BACK&&(V[0]=t.BACK,ce=!0);if(ce)if(n.isWebGL2)t.drawBuffers(V);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function kt(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const Fe={[Gr]:t.FUNC_ADD,[jy]:t.FUNC_SUBTRACT,[Yy]:t.FUNC_REVERSE_SUBTRACT};if(i)Fe[Rp]=t.MIN,Fe[Cp]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Fe[Rp]=N.MIN_EXT,Fe[Cp]=N.MAX_EXT)}const st={[qy]:t.ZERO,[$y]:t.ONE,[Ky]:t.SRC_COLOR,[Zf]:t.SRC_ALPHA,[nS]:t.SRC_ALPHA_SATURATE,[eS]:t.DST_COLOR,[Qy]:t.DST_ALPHA,[Zy]:t.ONE_MINUS_SRC_COLOR,[Qf]:t.ONE_MINUS_SRC_ALPHA,[tS]:t.ONE_MINUS_DST_COLOR,[Jy]:t.ONE_MINUS_DST_ALPHA,[iS]:t.CONSTANT_COLOR,[rS]:t.ONE_MINUS_CONSTANT_COLOR,[sS]:t.CONSTANT_ALPHA,[oS]:t.ONE_MINUS_CONSTANT_ALPHA};function ze(N,ae,V,ce,xe,ot,pt,Bt,Lt,Xe){if(N===gr){u===!0&&(ht(t.BLEND),u=!1);return}if(u===!1&&(we(t.BLEND),u=!0),N!==Xy){if(N!==v||Xe!==C){if((g!==Gr||T!==Gr)&&(t.blendEquation(t.FUNC_ADD),g=Gr,T=Gr),Xe)switch(N){case Js:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Kf:t.blendFunc(t.ONE,t.ONE);break;case Tp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ap:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Js:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Kf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Tp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ap:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,A=null,w=null,b=null,Y.set(0,0,0),y=0,v=N,C=Xe}return}xe=xe||ae,ot=ot||V,pt=pt||ce,(ae!==g||xe!==T)&&(t.blendEquationSeparate(Fe[ae],Fe[xe]),g=ae,T=xe),(V!==S||ce!==A||ot!==w||pt!==b)&&(t.blendFuncSeparate(st[V],st[ce],st[ot],st[pt]),S=V,A=ce,w=ot,b=pt),(Bt.equals(Y)===!1||Lt!==y)&&(t.blendColor(Bt.r,Bt.g,Bt.b,Lt),Y.copy(Bt),y=Lt),v=N,C=!1}function et(N,ae){N.side===_i?ht(t.CULL_FACE):we(t.CULL_FACE);let V=N.side===un;ae&&(V=!V),We(V),N.blending===Js&&N.transparent===!1?ze(gr):ze(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const ce=N.stencilWrite;c.setTest(ce),ce&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),R(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?we(t.SAMPLE_ALPHA_TO_COVERAGE):ht(t.SAMPLE_ALPHA_TO_COVERAGE)}function We(N){J!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),J=N)}function tt(N){N!==Vy?(we(t.CULL_FACE),N!==Q&&(N===wp?t.cullFace(t.BACK):N===Wy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ht(t.CULL_FACE),Q=N}function Pt(N){N!==P&&(L&&t.lineWidth(N),P=N)}function R(N,ae,V){N?(we(t.POLYGON_OFFSET_FILL),(K!==ae||X!==V)&&(t.polygonOffset(ae,V),K=ae,X=V)):ht(t.POLYGON_OFFSET_FILL)}function M(N){N?we(t.SCISSOR_TEST):ht(t.SCISSOR_TEST)}function q(N){N===void 0&&(N=t.TEXTURE0+ee-1),ne!==N&&(t.activeTexture(N),ne=N)}function Z(N,ae,V){V===void 0&&(ne===null?V=t.TEXTURE0+ee-1:V=ne);let ce=le[V];ce===void 0&&(ce={type:void 0,texture:void 0},le[V]=ce),(ce.type!==N||ce.texture!==ae)&&(ne!==V&&(t.activeTexture(V),ne=V),t.bindTexture(N,ae||Pe[N]),ce.type=N,ce.texture=ae)}function re(){const N=le[ne];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ie(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ke(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qe(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(N){te.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),te.copy(N))}function Ce(N){ve.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),ve.copy(N))}function nt(N,ae){let V=d.get(ae);V===void 0&&(V=new WeakMap,d.set(ae,V));let ce=V.get(N);ce===void 0&&(ce=t.getUniformBlockIndex(ae,N.name),V.set(N,ce))}function $e(N,ae){const ce=d.get(ae).get(N);f.get(ae)!==ce&&(t.uniformBlockBinding(ae,ce,N.__bindingPointIndex),f.set(ae,ce))}function ft(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ne=null,le={},m={},_=new WeakMap,x=[],p=null,u=!1,v=null,g=null,S=null,A=null,T=null,w=null,b=null,Y=new lt(0,0,0),y=0,C=!1,J=null,Q=null,P=null,K=null,X=null,te.set(0,0,t.canvas.width,t.canvas.height),ve.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:we,disable:ht,bindFramebuffer:Be,drawBuffers:I,useProgram:kt,setBlending:ze,setMaterial:et,setFlipSided:We,setCullFace:tt,setLineWidth:Pt,setPolygonOffset:R,setScissorTest:M,activeTexture:q,bindTexture:Z,unbindTexture:re,compressedTexImage2D:ie,compressedTexImage3D:Ve,texImage2D:qe,texImage3D:De,updateUBOMapping:nt,uniformBlockBinding:$e,texStorage2D:oe,texStorage3D:It,texSubImage2D:ke,texSubImage3D:fe,compressedTexSubImage2D:me,compressedTexSubImage3D:Ke,scissor:Ae,viewport:Ce,reset:ft}}function HT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ye,d=new WeakMap;let h;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return _?new OffscreenCanvas(R,M):pc("canvas")}function p(R,M,q,Z){let re=1;const ie=Pt(R);if((ie.width>Z||ie.height>Z)&&(re=Z/Math.max(ie.width,ie.height)),re<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Ve=M?sd:Math.floor,ke=Ve(re*ie.width),fe=Ve(re*ie.height);h===void 0&&(h=x(ke,fe));const me=q?x(ke,fe):h;return me.width=ke,me.height=fe,me.getContext("2d").drawImage(R,0,0,ke,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ke+"x"+fe+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function u(R){const M=Pt(R);return im(M.width)&&im(M.height)}function v(R){return a?!1:R.wrapS!==si||R.wrapT!==si||R.minFilter!==mn&&R.minFilter!==Sn}function g(R,M){return R.generateMipmaps&&M&&R.minFilter!==mn&&R.minFilter!==Sn}function S(R){t.generateMipmap(R)}function A(R,M,q,Z,re=!1){if(a===!1)return M;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=M;if(M===t.RED&&(q===t.FLOAT&&(ie=t.R32F),q===t.HALF_FLOAT&&(ie=t.R16F),q===t.UNSIGNED_BYTE&&(ie=t.R8)),M===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&(ie=t.R8UI),q===t.UNSIGNED_SHORT&&(ie=t.R16UI),q===t.UNSIGNED_INT&&(ie=t.R32UI),q===t.BYTE&&(ie=t.R8I),q===t.SHORT&&(ie=t.R16I),q===t.INT&&(ie=t.R32I)),M===t.RG&&(q===t.FLOAT&&(ie=t.RG32F),q===t.HALF_FLOAT&&(ie=t.RG16F),q===t.UNSIGNED_BYTE&&(ie=t.RG8)),M===t.RG_INTEGER&&(q===t.UNSIGNED_BYTE&&(ie=t.RG8UI),q===t.UNSIGNED_SHORT&&(ie=t.RG16UI),q===t.UNSIGNED_INT&&(ie=t.RG32UI),q===t.BYTE&&(ie=t.RG8I),q===t.SHORT&&(ie=t.RG16I),q===t.INT&&(ie=t.RG32I)),M===t.RGBA){const Ve=re?uc:vt.getTransfer(Z);q===t.FLOAT&&(ie=t.RGBA32F),q===t.HALF_FLOAT&&(ie=t.RGBA16F),q===t.UNSIGNED_BYTE&&(ie=Ve===Et?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function T(R,M,q){return g(R,q)===!0||R.isFramebufferTexture&&R.minFilter!==mn&&R.minFilter!==Sn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function w(R){return R===mn||R===bp||R===Co?t.NEAREST:t.LINEAR}function b(R){const M=R.target;M.removeEventListener("dispose",b),y(M),M.isVideoTexture&&d.delete(M)}function Y(R){const M=R.target;M.removeEventListener("dispose",Y),J(M)}function y(R){const M=i.get(R);if(M.__webglInit===void 0)return;const q=R.source,Z=m.get(q);if(Z){const re=Z[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&C(R),Object.keys(Z).length===0&&m.delete(q)}i.remove(R)}function C(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const q=R.source,Z=m.get(q);delete Z[M.__cacheKey],o.memory.textures--}function J(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let re=0;re<M.__webglFramebuffer[Z].length;re++)t.deleteFramebuffer(M.__webglFramebuffer[Z][re]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=R.textures;for(let Z=0,re=q.length;Z<re;Z++){const ie=i.get(q[Z]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(q[Z])}i.remove(R)}let Q=0;function P(){Q=0}function K(){const R=Q;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),Q+=1,R}function X(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function ee(R,M){const q=i.get(R);if(R.isVideoTexture&&We(R),R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(q,R,M);return}}n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+M)}function L(R,M){const q=i.get(R);if(R.version>0&&q.__version!==R.version){ve(q,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+M)}function O(R,M){const q=i.get(R);if(R.version>0&&q.__version!==R.version){ve(q,R,M);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+M)}function B(R,M){const q=i.get(R);if(R.version>0&&q.__version!==R.version){Ne(q,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+M)}const ne={[pa]:t.REPEAT,[si]:t.CLAMP_TO_EDGE,[td]:t.MIRRORED_REPEAT},le={[mn]:t.NEAREST,[bp]:t.NEAREST_MIPMAP_NEAREST,[Co]:t.NEAREST_MIPMAP_LINEAR,[Sn]:t.LINEAR,[hu]:t.LINEAR_MIPMAP_NEAREST,[Yr]:t.LINEAR_MIPMAP_LINEAR},Le={[DS]:t.NEVER,[kS]:t.ALWAYS,[US]:t.LESS,[z_]:t.LEQUAL,[IS]:t.EQUAL,[zS]:t.GEQUAL,[FS]:t.GREATER,[OS]:t.NOTEQUAL};function H(R,M,q){if(M.type===Ni&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Sn||M.magFilter===hu||M.magFilter===Co||M.magFilter===Yr||M.minFilter===Sn||M.minFilter===hu||M.minFilter===Co||M.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),q?(t.texParameteri(R,t.TEXTURE_WRAP_S,ne[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ne[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ne[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,le[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,le[M.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==si||M.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,w(M.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==mn&&M.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===mn||M.minFilter!==Co&&M.minFilter!==Yr||M.type===Ni&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ma&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function te(R,M){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const Z=M.source;let re=m.get(Z);re===void 0&&(re={},m.set(Z,re));const ie=X(M);if(ie!==R.__cacheKey){re[ie]===void 0&&(re[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,q=!0),re[ie].usedTimes++;const Ve=re[R.__cacheKey];Ve!==void 0&&(re[R.__cacheKey].usedTimes--,Ve.usedTimes===0&&C(M)),R.__cacheKey=ie,R.__webglTexture=re[ie].texture}return q}function ve(R,M,q){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const re=te(R,M),ie=M.source;n.bindTexture(Z,R.__webglTexture,t.TEXTURE0+q);const Ve=i.get(ie);if(ie.version!==Ve.__version||re===!0){n.activeTexture(t.TEXTURE0+q);const ke=vt.getPrimaries(vt.workingColorSpace),fe=M.colorSpace===rr?null:vt.getPrimaries(M.colorSpace),me=M.colorSpace===rr||ke===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ke=v(M)&&u(M.image)===!1;let oe=p(M.image,Ke,!1,r.maxTextureSize);oe=tt(M,oe);const It=u(oe)||a,qe=s.convert(M.format,M.colorSpace);let De=s.convert(M.type),Ae=A(M.internalFormat,qe,De,M.colorSpace,M.isVideoTexture);H(Z,M,It);let Ce;const nt=M.mipmaps,$e=a&&M.isVideoTexture!==!0&&Ae!==F_,ft=Ve.__version===void 0||re===!0,N=ie.dataReady,ae=T(M,oe,It);if(M.isDepthTexture)Ae=t.DEPTH_COMPONENT,a?M.type===Ni?Ae=t.DEPTH_COMPONENT32F:M.type===ar?Ae=t.DEPTH_COMPONENT24:M.type===Kr?Ae=t.DEPTH24_STENCIL8:Ae=t.DEPTH_COMPONENT16:M.type===Ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Zr&&Ae===t.DEPTH_COMPONENT&&M.type!==oh&&M.type!==ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ar,De=s.convert(M.type)),M.format===uo&&Ae===t.DEPTH_COMPONENT&&(Ae=t.DEPTH_STENCIL,M.type!==Kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Kr,De=s.convert(M.type))),ft&&($e?n.texStorage2D(t.TEXTURE_2D,1,Ae,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Ae,oe.width,oe.height,0,qe,De,null));else if(M.isDataTexture)if(nt.length>0&&It){$e&&ft&&n.texStorage2D(t.TEXTURE_2D,ae,Ae,nt[0].width,nt[0].height);for(let V=0,ce=nt.length;V<ce;V++)Ce=nt[V],$e?N&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,Ce.width,Ce.height,qe,De,Ce.data):n.texImage2D(t.TEXTURE_2D,V,Ae,Ce.width,Ce.height,0,qe,De,Ce.data);M.generateMipmaps=!1}else $e?(ft&&n.texStorage2D(t.TEXTURE_2D,ae,Ae,oe.width,oe.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,qe,De,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,oe.width,oe.height,0,qe,De,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,Ae,nt[0].width,nt[0].height,oe.depth);for(let V=0,ce=nt.length;V<ce;V++)Ce=nt[V],M.format!==oi?qe!==null?$e?N&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,Ce.width,Ce.height,oe.depth,qe,Ce.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,V,Ae,Ce.width,Ce.height,oe.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,Ce.width,Ce.height,oe.depth,qe,De,Ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,V,Ae,Ce.width,Ce.height,oe.depth,0,qe,De,Ce.data)}else{$e&&ft&&n.texStorage2D(t.TEXTURE_2D,ae,Ae,nt[0].width,nt[0].height);for(let V=0,ce=nt.length;V<ce;V++)Ce=nt[V],M.format!==oi?qe!==null?$e?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,V,0,0,Ce.width,Ce.height,qe,Ce.data):n.compressedTexImage2D(t.TEXTURE_2D,V,Ae,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?N&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,Ce.width,Ce.height,qe,De,Ce.data):n.texImage2D(t.TEXTURE_2D,V,Ae,Ce.width,Ce.height,0,qe,De,Ce.data)}else if(M.isDataArrayTexture)$e?(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,Ae,oe.width,oe.height,oe.depth),N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,qe,De,oe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,oe.width,oe.height,oe.depth,0,qe,De,oe.data);else if(M.isData3DTexture)$e?(ft&&n.texStorage3D(t.TEXTURE_3D,ae,Ae,oe.width,oe.height,oe.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,qe,De,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,oe.width,oe.height,oe.depth,0,qe,De,oe.data);else if(M.isFramebufferTexture){if(ft)if($e)n.texStorage2D(t.TEXTURE_2D,ae,Ae,oe.width,oe.height);else{let V=oe.width,ce=oe.height;for(let xe=0;xe<ae;xe++)n.texImage2D(t.TEXTURE_2D,xe,Ae,V,ce,0,qe,De,null),V>>=1,ce>>=1}}else if(nt.length>0&&It){if($e&&ft){const V=Pt(nt[0]);n.texStorage2D(t.TEXTURE_2D,ae,Ae,V.width,V.height)}for(let V=0,ce=nt.length;V<ce;V++)Ce=nt[V],$e?N&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,qe,De,Ce):n.texImage2D(t.TEXTURE_2D,V,Ae,qe,De,Ce);M.generateMipmaps=!1}else if($e){if(ft){const V=Pt(oe);n.texStorage2D(t.TEXTURE_2D,ae,Ae,V.width,V.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,qe,De,oe)}else n.texImage2D(t.TEXTURE_2D,0,Ae,qe,De,oe);g(M,It)&&S(Z),Ve.__version=ie.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ne(R,M,q){if(M.image.length!==6)return;const Z=te(R,M),re=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+q);const ie=i.get(re);if(re.version!==ie.__version||Z===!0){n.activeTexture(t.TEXTURE0+q);const Ve=vt.getPrimaries(vt.workingColorSpace),ke=M.colorSpace===rr?null:vt.getPrimaries(M.colorSpace),fe=M.colorSpace===rr||Ve===ke?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const me=M.isCompressedTexture||M.image[0].isCompressedTexture,Ke=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let V=0;V<6;V++)!me&&!Ke?oe[V]=p(M.image[V],!1,!0,r.maxCubemapSize):oe[V]=Ke?M.image[V].image:M.image[V],oe[V]=tt(M,oe[V]);const It=oe[0],qe=u(It)||a,De=s.convert(M.format,M.colorSpace),Ae=s.convert(M.type),Ce=A(M.internalFormat,De,Ae,M.colorSpace),nt=a&&M.isVideoTexture!==!0,$e=ie.__version===void 0||Z===!0,ft=re.dataReady;let N=T(M,It,qe);H(t.TEXTURE_CUBE_MAP,M,qe);let ae;if(me){nt&&$e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,N,Ce,It.width,It.height);for(let V=0;V<6;V++){ae=oe[V].mipmaps;for(let ce=0;ce<ae.length;ce++){const xe=ae[ce];M.format!==oi?De!==null?nt?ft&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ce,0,0,xe.width,xe.height,De,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ce,Ce,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?ft&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ce,0,0,xe.width,xe.height,De,Ae,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ce,Ce,xe.width,xe.height,0,De,Ae,xe.data)}}}else{if(ae=M.mipmaps,nt&&$e){ae.length>0&&N++;const V=Pt(oe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,N,Ce,V.width,V.height)}for(let V=0;V<6;V++)if(Ke){nt?ft&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,oe[V].width,oe[V].height,De,Ae,oe[V].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Ce,oe[V].width,oe[V].height,0,De,Ae,oe[V].data);for(let ce=0;ce<ae.length;ce++){const ot=ae[ce].image[V].image;nt?ft&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ce+1,0,0,ot.width,ot.height,De,Ae,ot.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ce+1,Ce,ot.width,ot.height,0,De,Ae,ot.data)}}else{nt?ft&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,De,Ae,oe[V]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Ce,De,Ae,oe[V]);for(let ce=0;ce<ae.length;ce++){const xe=ae[ce];nt?ft&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ce+1,0,0,De,Ae,xe.image[V]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ce+1,Ce,De,Ae,xe.image[V])}}}g(M,qe)&&S(t.TEXTURE_CUBE_MAP),ie.__version=re.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Pe(R,M,q,Z,re,ie){const Ve=s.convert(q.format,q.colorSpace),ke=s.convert(q.type),fe=A(q.internalFormat,Ve,ke,q.colorSpace);if(!i.get(M).__hasExternalTextures){const Ke=Math.max(1,M.width>>ie),oe=Math.max(1,M.height>>ie);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ie,fe,Ke,oe,M.depth,0,Ve,ke,null):n.texImage2D(re,ie,fe,Ke,oe,0,Ve,ke,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),et(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,re,i.get(q).__webglTexture,0,ze(M)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,re,i.get(q).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(R,M,q){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let Z=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(q||et(M)){const re=M.depthTexture;re&&re.isDepthTexture&&(re.type===Ni?Z=t.DEPTH_COMPONENT32F:re.type===ar&&(Z=t.DEPTH_COMPONENT24));const ie=ze(M);et(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,Z,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,Z,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,Z,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const Z=ze(M);q&&et(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,M.width,M.height):et(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const Z=M.textures;for(let re=0;re<Z.length;re++){const ie=Z[re],Ve=s.convert(ie.format,ie.colorSpace),ke=s.convert(ie.type),fe=A(ie.internalFormat,Ve,ke,ie.colorSpace),me=ze(M);q&&et(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,fe,M.width,M.height):et(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,fe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,fe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ht(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);const Z=i.get(M.depthTexture).__webglTexture,re=ze(M);if(M.depthTexture.format===Zr)et(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(M.depthTexture.format===uo)et(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Be(R){const M=i.get(R),q=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ht(M.__webglFramebuffer,R)}else if(q){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]=t.createRenderbuffer(),we(M.__webglDepthbuffer[Z],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),we(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function I(R,M,q){const Z=i.get(R);M!==void 0&&Pe(Z.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&Be(R)}function kt(R){const M=R.texture,q=i.get(R),Z=i.get(M);R.addEventListener("dispose",Y);const re=R.textures,ie=R.isWebGLCubeRenderTarget===!0,Ve=re.length>1,ke=u(R)||a;if(Ve||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,o.memory.textures++),ie){q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[fe]=[];for(let me=0;me<M.mipmaps.length;me++)q.__webglFramebuffer[fe][me]=t.createFramebuffer()}else q.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)q.__webglFramebuffer[fe]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(Ve)if(r.drawBuffers)for(let fe=0,me=re.length;fe<me;fe++){const Ke=i.get(re[fe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=t.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&et(R)===!1){q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){const me=re[fe];q.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[fe]);const Ke=s.convert(me.format,me.colorSpace),oe=s.convert(me.type),It=A(me.internalFormat,Ke,oe,me.colorSpace,R.isXRRenderTarget===!0),qe=ze(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,It,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,q.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),we(q.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),H(t.TEXTURE_CUBE_MAP,M,ke);for(let fe=0;fe<6;fe++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)Pe(q.__webglFramebuffer[fe][me],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else Pe(q.__webglFramebuffer[fe],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(M,ke)&&S(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let fe=0,me=re.length;fe<me;fe++){const Ke=re[fe],oe=i.get(Ke);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),H(t.TEXTURE_2D,Ke,ke),Pe(q.__webglFramebuffer,R,Ke,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),g(Ke,ke)&&S(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(fe,Z.__webglTexture),H(fe,M,ke),a&&M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)Pe(q.__webglFramebuffer[me],R,M,t.COLOR_ATTACHMENT0,fe,me);else Pe(q.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,fe,0);g(M,ke)&&S(fe),n.unbindTexture()}R.depthBuffer&&Be(R)}function Fe(R){const M=u(R)||a,q=R.textures;for(let Z=0,re=q.length;Z<re;Z++){const ie=q[Z];if(g(ie,M)){const Ve=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ke=i.get(ie).__webglTexture;n.bindTexture(Ve,ke),S(Ve),n.unbindTexture()}}}function st(R){if(a&&R.samples>0&&et(R)===!1){const M=R.textures,q=R.width,Z=R.height;let re=t.COLOR_BUFFER_BIT;const ie=[],Ve=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ke=i.get(R),fe=M.length>1;if(fe)for(let me=0;me<M.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let me=0;me<M.length;me++){ie.push(t.COLOR_ATTACHMENT0+me),R.depthBuffer&&ie.push(Ve);const Ke=ke.__ignoreDepthValues!==void 0?ke.__ignoreDepthValues:!1;if(Ke===!1&&(R.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),fe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ke.__webglColorRenderbuffer[me]),Ke===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ve]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ve])),fe){const oe=i.get(M[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,q,Z,0,0,q,Z,re,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let me=0;me<M.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,ke.__webglColorRenderbuffer[me]);const Ke=i.get(M[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}}function ze(R){return Math.min(r.maxSamples,R.samples)}function et(R){const M=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function We(R){const M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function tt(R,M){const q=R.colorSpace,Z=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===id||q!==Rr&&q!==rr&&(vt.getTransfer(q)===Et?a===!1?e.has("EXT_sRGB")===!0&&Z===oi?(R.format=id,R.minFilter=Sn,R.generateMipmaps=!1):M=H_.sRGBToLinear(M):(Z!==oi||re!==vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),M}function Pt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(f.width=R.naturalWidth||R.width,f.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(f.width=R.displayWidth,f.height=R.displayHeight):(f.width=R.width,f.height=R.height),f}this.allocateTextureUnit=K,this.resetTextureUnits=P,this.setTexture2D=ee,this.setTexture2DArray=L,this.setTexture3D=O,this.setTextureCube=B,this.rebindTextures=I,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=et}function GT(t,e,n){const i=n.isWebGL2;function r(s,o=rr){let a;const l=vt.getTransfer(o);if(s===vr)return t.UNSIGNED_BYTE;if(s===L_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===N_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===MS)return t.BYTE;if(s===ES)return t.SHORT;if(s===oh)return t.UNSIGNED_SHORT;if(s===P_)return t.INT;if(s===ar)return t.UNSIGNED_INT;if(s===Ni)return t.FLOAT;if(s===ma)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===wS)return t.ALPHA;if(s===oi)return t.RGBA;if(s===TS)return t.LUMINANCE;if(s===AS)return t.LUMINANCE_ALPHA;if(s===Zr)return t.DEPTH_COMPONENT;if(s===uo)return t.DEPTH_STENCIL;if(s===id)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===RS)return t.RED;if(s===D_)return t.RED_INTEGER;if(s===CS)return t.RG;if(s===U_)return t.RG_INTEGER;if(s===I_)return t.RGBA_INTEGER;if(s===pu||s===mu||s===gu||s===_u)if(l===Et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===pu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_u)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===pu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_u)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pp||s===Lp||s===Np||s===Dp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Pp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Lp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Np)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===F_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Up||s===Ip)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Up)return l===Et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ip)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fp||s===Op||s===zp||s===kp||s===Bp||s===Hp||s===Gp||s===Vp||s===Wp||s===Xp||s===jp||s===Yp||s===qp||s===$p)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Fp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Op)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===kp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Hp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$p)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vu||s===Kp||s===Zp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===vu)return l===Et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Kp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bS||s===Qp||s===Jp||s===em)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===vu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Qp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===em)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Kr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class VT extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yn extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WT={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Yn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const XT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jT=`
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

}`;class YT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new _n,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Hi({extensions:{fragDepth:!0},vertexShader:XT,fragmentShader:jT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ge(new Ic(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class qT extends go{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,m=null,_=null;const x=new YT,p=n.getContextAttributes();let u=null,v=null;const g=[],S=[],A=new Ye;let T=null;const w=new Un;w.layers.enable(1),w.viewport=new Ct;const b=new Un;b.layers.enable(2),b.viewport=new Ct;const Y=[w,b],y=new VT;y.layers.enable(1),y.layers.enable(2);let C=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let te=g[H];return te===void 0&&(te=new Wu,g[H]=te),te.getTargetRaySpace()},this.getControllerGrip=function(H){let te=g[H];return te===void 0&&(te=new Wu,g[H]=te),te.getGripSpace()},this.getHand=function(H){let te=g[H];return te===void 0&&(te=new Wu,g[H]=te),te.getHandSpace()};function Q(H){const te=S.indexOf(H.inputSource);if(te===-1)return;const ve=g[te];ve!==void 0&&(ve.update(H.inputSource,H.frame,c||o),ve.dispatchEvent({type:H.type,data:H.inputSource}))}function P(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",K);for(let H=0;H<g.length;H++){const te=S[H];te!==null&&(S[H]=null,g[H].disconnect(te))}C=null,J=null,x.reset(),e.setRenderTarget(u),m=null,h=null,d=null,r=null,v=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",P),r.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new is(m.framebufferWidth,m.framebufferHeight,{format:oi,type:vr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,ve=null,Ne=null;p.depth&&(Ne=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=p.stencil?uo:Zr,ve=p.stencil?Kr:ar);const Pe={colorFormat:n.RGBA8,depthFormat:Ne,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new is(h.textureWidth,h.textureHeight,{format:oi,type:vr,depthTexture:new ev(h.textureWidth,h.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const we=e.properties.get(v);we.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(H){for(let te=0;te<H.removed.length;te++){const ve=H.removed[te],Ne=S.indexOf(ve);Ne>=0&&(S[Ne]=null,g[Ne].disconnect(ve))}for(let te=0;te<H.added.length;te++){const ve=H.added[te];let Ne=S.indexOf(ve);if(Ne===-1){for(let we=0;we<g.length;we++)if(we>=S.length){S.push(ve),Ne=we;break}else if(S[we]===null){S[we]=ve,Ne=we;break}if(Ne===-1)break}const Pe=g[Ne];Pe&&Pe.connect(ve)}}const X=new D,ee=new D;function L(H,te,ve){X.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(ve.matrixWorld);const Ne=X.distanceTo(ee),Pe=te.projectionMatrix.elements,we=ve.projectionMatrix.elements,ht=Pe[14]/(Pe[10]-1),Be=Pe[14]/(Pe[10]+1),I=(Pe[9]+1)/Pe[5],kt=(Pe[9]-1)/Pe[5],Fe=(Pe[8]-1)/Pe[0],st=(we[8]+1)/we[0],ze=ht*Fe,et=ht*st,We=Ne/(-Fe+st),tt=We*-Fe;te.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(tt),H.translateZ(We),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Pt=ht+We,R=Be+We,M=ze-tt,q=et+(Ne-tt),Z=I*Be/R*Pt,re=kt*Be/R*Pt;H.projectionMatrix.makePerspective(M,q,Z,re,Pt,R),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function O(H,te){te===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(te.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;x.texture!==null&&(H.near=x.depthNear,H.far=x.depthFar),y.near=b.near=w.near=H.near,y.far=b.far=w.far=H.far,(C!==y.near||J!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,J=y.far,w.near=C,w.far=J,b.near=C,b.far=J,w.updateProjectionMatrix(),b.updateProjectionMatrix(),H.updateProjectionMatrix());const te=H.parent,ve=y.cameras;O(y,te);for(let Ne=0;Ne<ve.length;Ne++)O(ve[Ne],te);ve.length===2?L(y,w,b):y.projectionMatrix.copy(w.projectionMatrix),B(H,y,te)};function B(H,te,ve){ve===null?H.matrix.copy(te.matrixWorld):(H.matrix.copy(ve.matrixWorld),H.matrix.invert(),H.matrix.multiply(te.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(te.projectionMatrix),H.projectionMatrixInverse.copy(te.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=rd*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null};let ne=null;function le(H,te){if(f=te.getViewerPose(c||o),_=te,f!==null){const ve=f.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Ne=!1;ve.length!==y.cameras.length&&(y.cameras.length=0,Ne=!0);for(let we=0;we<ve.length;we++){const ht=ve[we];let Be=null;if(m!==null)Be=m.getViewport(ht);else{const kt=d.getViewSubImage(h,ht);Be=kt.viewport,we===0&&(e.setRenderTargetTextures(v,kt.colorTexture,h.ignoreDepthValues?void 0:kt.depthStencilTexture),e.setRenderTarget(v))}let I=Y[we];I===void 0&&(I=new Un,I.layers.enable(we),I.viewport=new Ct,Y[we]=I),I.matrix.fromArray(ht.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(ht.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Be.x,Be.y,Be.width,Be.height),we===0&&(y.matrix.copy(I.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ne===!0&&y.cameras.push(I)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const we=d.getDepthInformation(ve[0]);we&&we.isValid&&we.texture&&x.init(e,we,r.renderState)}}for(let ve=0;ve<g.length;ve++){const Ne=S[ve],Pe=g[ve];Ne!==null&&Pe!==void 0&&Pe.update(Ne,te,c||o)}x.render(e,y),ne&&ne(H,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const Le=new Q_;Le.setAnimationLoop(le),this.setAnimationLoop=function(H){ne=H},this.dispose=function(){}}}const Or=new Si,$T=new bt;function KT(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,$_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,g,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,v,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===un&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===un&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u),g=v.envMap,S=v.envMapRotation;if(g&&(p.envMap.value=g,Or.copy(S),Or.x*=-1,Or.y*=-1,Or.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),p.envMapRotation.value.setFromMatrix4($T.makeRotationFromEuler(Or)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const A=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*A,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===un&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ZT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function c(v,g){let S=r[v.id];S===void 0&&(_(v),S=f(v),r[v.id]=S,v.addEventListener("dispose",p));const A=g.program;i.updateUBOMapping(v,A);const T=e.render.frame;s[v.id]!==T&&(h(v),s[v.id]=T)}function f(v){const g=d();v.__bindingPointIndex=g;const S=t.createBuffer(),A=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,A,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],S=v.uniforms,A=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let T=0,w=S.length;T<w;T++){const b=Array.isArray(S[T])?S[T]:[S[T]];for(let Y=0,y=b.length;Y<y;Y++){const C=b[Y];if(m(C,T,Y,A)===!0){const J=C.__offset,Q=Array.isArray(C.value)?C.value:[C.value];let P=0;for(let K=0;K<Q.length;K++){const X=Q[K],ee=x(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,J+P,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,P),P+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,J,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,S,A){const T=v.value,w=g+"_"+S;if(A[w]===void 0)return typeof T=="number"||typeof T=="boolean"?A[w]=T:A[w]=T.clone(),!0;{const b=A[w];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return A[w]=T,!0}else if(b.equals(T)===!1)return b.copy(T),!0}return!1}function _(v){const g=v.uniforms;let S=0;const A=16;for(let w=0,b=g.length;w<b;w++){const Y=Array.isArray(g[w])?g[w]:[g[w]];for(let y=0,C=Y.length;y<C;y++){const J=Y[y],Q=Array.isArray(J.value)?J.value:[J.value];for(let P=0,K=Q.length;P<K;P++){const X=Q[P],ee=x(X),L=S%A;L!==0&&A-L<ee.boundary&&(S+=A-L),J.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=S,S+=ee.storage}}}const T=S%A;return T>0&&(S+=A-T),v.__size=S,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class ov{constructor(e={}){const{canvas:n=HS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this._useLegacyLights=!1,this.toneMapping=_r,this.toneMappingExposure=1;const g=this;let S=!1,A=0,T=0,w=null,b=-1,Y=null;const y=new Ct,C=new Ct;let J=null;const Q=new lt(0);let P=0,K=n.width,X=n.height,ee=1,L=null,O=null;const B=new Ct(0,0,K,X),ne=new Ct(0,0,K,X);let le=!1;const Le=new lh;let H=!1,te=!1,ve=null;const Ne=new bt,Pe=new Ye,we=new D,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return w===null?ee:1}let I=i;function kt(E,U){for(let G=0;G<E.length;G++){const W=E[G],k=n.getContext(W,U);if(k!==null)return k}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sh}`),n.addEventListener("webglcontextlost",ft,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",ae,!1),I===null){const U=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&U.shift(),I=kt(U,E),I===null)throw kt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Fe,st,ze,et,We,tt,Pt,R,M,q,Z,re,ie,Ve,ke,fe,me,Ke,oe,It,qe,De,Ae,Ce;function nt(){Fe=new iw(I),st=new Z1(I,Fe,e),Fe.init(st),De=new GT(I,Fe,st),ze=new BT(I,Fe,st),et=new ow(I),We=new AT,tt=new HT(I,Fe,ze,We,st,De,et),Pt=new J1(g),R=new nw(g),M=new dM(I,st),Ae=new $1(I,Fe,M,st),q=new rw(I,M,et,Ae),Z=new uw(I,q,M,et),oe=new cw(I,st,tt),fe=new Q1(We),re=new TT(g,Pt,R,Fe,st,Ae,fe),ie=new KT(g,We),Ve=new CT,ke=new UT(Fe,st),Ke=new q1(g,Pt,R,ze,Z,h,l),me=new kT(g,Z,st),Ce=new ZT(I,et,st,ze),It=new K1(I,Fe,et,st),qe=new sw(I,Fe,et,st),et.programs=re.programs,g.capabilities=st,g.extensions=Fe,g.properties=We,g.renderLists=Ve,g.shadowMap=me,g.state=ze,g.info=et}nt();const $e=new qT(g,I);this.xr=$e,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Fe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Fe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(E){E!==void 0&&(ee=E,this.setSize(K,X,!1))},this.getSize=function(E){return E.set(K,X)},this.setSize=function(E,U,G=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,X=U,n.width=Math.floor(E*ee),n.height=Math.floor(U*ee),G===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(K*ee,X*ee).floor()},this.setDrawingBufferSize=function(E,U,G){K=E,X=U,ee=G,n.width=Math.floor(E*G),n.height=Math.floor(U*G),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(B)},this.setViewport=function(E,U,G,W){E.isVector4?B.set(E.x,E.y,E.z,E.w):B.set(E,U,G,W),ze.viewport(y.copy(B).multiplyScalar(ee).round())},this.getScissor=function(E){return E.copy(ne)},this.setScissor=function(E,U,G,W){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,U,G,W),ze.scissor(C.copy(ne).multiplyScalar(ee).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(E){ze.setScissorTest(le=E)},this.setOpaqueSort=function(E){L=E},this.setTransparentSort=function(E){O=E},this.getClearColor=function(E){return E.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(E=!0,U=!0,G=!0){let W=0;if(E){let k=!1;if(w!==null){const Me=w.texture.format;k=Me===I_||Me===U_||Me===D_}if(k){const Me=w.texture.type,ye=Me===vr||Me===ar||Me===oh||Me===Kr||Me===L_||Me===N_,Oe=Ke.getClearColor(),He=Ke.getClearAlpha(),Qe=Oe.r,z=Oe.g,de=Oe.b;ye?(m[0]=Qe,m[1]=z,m[2]=de,m[3]=He,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Qe,_[1]=z,_[2]=de,_[3]=He,I.clearBufferiv(I.COLOR,0,_))}else W|=I.COLOR_BUFFER_BIT}U&&(W|=I.DEPTH_BUFFER_BIT),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ft,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),Ve.dispose(),ke.dispose(),We.dispose(),Pt.dispose(),R.dispose(),Z.dispose(),Ae.dispose(),Ce.dispose(),re.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",Lt),$e.removeEventListener("sessionend",Xe),ve&&(ve.dispose(),ve=null),$t.stop()};function ft(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=et.autoReset,U=me.enabled,G=me.autoUpdate,W=me.needsUpdate,k=me.type;nt(),et.autoReset=E,me.enabled=U,me.autoUpdate=G,me.needsUpdate=W,me.type=k}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function V(E){const U=E.target;U.removeEventListener("dispose",V),ce(U)}function ce(E){xe(E),We.remove(E)}function xe(E){const U=We.get(E).programs;U!==void 0&&(U.forEach(function(G){re.releaseProgram(G)}),E.isShaderMaterial&&re.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,G,W,k,Me){U===null&&(U=ht);const ye=k.isMesh&&k.matrixWorld.determinant()<0,Oe=kc(E,U,G,W,k);ze.setMaterial(W,ye);let He=G.index,Qe=1;if(W.wireframe===!0){if(He=q.getWireframeAttribute(G),He===void 0)return;Qe=2}const z=G.drawRange,de=G.attributes.position;let be=z.start*Qe,Re=(z.start+z.count)*Qe;Me!==null&&(be=Math.max(be,Me.start*Qe),Re=Math.min(Re,(Me.start+Me.count)*Qe)),He!==null?(be=Math.max(be,0),Re=Math.min(Re,He.count)):de!=null&&(be=Math.max(be,0),Re=Math.min(Re,de.count));const Ge=Re-be;if(Ge<0||Ge===1/0)return;Ae.setup(k,W,Oe,G,He);let at,je=It;if(He!==null&&(at=M.get(He),je=qe,je.setIndex(at)),k.isMesh)W.wireframe===!0?(ze.setLineWidth(W.wireframeLinewidth*Be()),je.setMode(I.LINES)):je.setMode(I.TRIANGLES);else if(k.isLine){let Ue=W.linewidth;Ue===void 0&&(Ue=1),ze.setLineWidth(Ue*Be()),k.isLineSegments?je.setMode(I.LINES):k.isLineLoop?je.setMode(I.LINE_LOOP):je.setMode(I.LINE_STRIP)}else k.isPoints?je.setMode(I.POINTS):k.isSprite&&je.setMode(I.TRIANGLES);if(k.isBatchedMesh)je.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)je.renderInstances(be,Ge,k.count);else if(G.isInstancedBufferGeometry){const Ue=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Bn=Math.min(G.instanceCount,Ue);je.renderInstances(be,Ge,Bn)}else je.render(be,Ge)};function ot(E,U,G){E.transparent===!0&&E.side===_i&&E.forceSinglePass===!1?(E.side=un,E.needsUpdate=!0,Vi(E,U,G),E.side=Mr,E.needsUpdate=!0,Vi(E,U,G),E.side=_i):Vi(E,U,G)}this.compile=function(E,U,G=null){G===null&&(G=E),p=ke.get(G),p.init(),v.push(p),G.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),E!==G&&E.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(g._useLegacyLights);const W=new Set;return E.traverse(function(k){const Me=k.material;if(Me)if(Array.isArray(Me))for(let ye=0;ye<Me.length;ye++){const Oe=Me[ye];ot(Oe,G,k),W.add(Oe)}else ot(Me,G,k),W.add(Me)}),v.pop(),p=null,W},this.compileAsync=function(E,U,G=null){const W=this.compile(E,U,G);return new Promise(k=>{function Me(){if(W.forEach(function(ye){We.get(ye).currentProgram.isReady()&&W.delete(ye)}),W.size===0){k(E);return}setTimeout(Me,10)}Fe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let pt=null;function Bt(E){pt&&pt(E)}function Lt(){$t.stop()}function Xe(){$t.start()}const $t=new Q_;$t.setAnimationLoop(Bt),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(E){pt=E,$e.setAnimationLoop(E),E===null?$t.stop():$t.start()},$e.addEventListener("sessionstart",Lt),$e.addEventListener("sessionend",Xe),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(U),U=$e.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,U,w),p=ke.get(E,v.length),p.init(),v.push(p),Ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Le.setFromProjectionMatrix(Ne),te=this.localClippingEnabled,H=fe.init(this.clippingPlanes,te),x=Ve.get(E,u.length),x.init(),u.push(x),bn(E,U,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(L,O),this.info.render.frame++,H===!0&&fe.beginShadows();const G=p.state.shadowsArray;if(me.render(G,E,U),H===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),($e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1)&&Ke.render(x,E),p.setupLights(g._useLegacyLights),U.isArrayCamera){const W=U.cameras;for(let k=0,Me=W.length;k<Me;k++){const ye=W[k];wa(x,E,ye,ye.viewport)}}else wa(x,E,U);w!==null&&(tt.updateMultisampleRenderTarget(w),tt.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(g,E,U),Ae.resetDefaultState(),b=-1,Y=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function bn(E,U,G,W){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Le.intersectsSprite(E)){W&&we.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ne);const ye=Z.update(E),Oe=E.material;Oe.visible&&x.push(E,ye,Oe,G,we.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Le.intersectsObject(E))){const ye=Z.update(E),Oe=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),we.copy(E.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),we.copy(ye.boundingSphere.center)),we.applyMatrix4(E.matrixWorld).applyMatrix4(Ne)),Array.isArray(Oe)){const He=ye.groups;for(let Qe=0,z=He.length;Qe<z;Qe++){const de=He[Qe],be=Oe[de.materialIndex];be&&be.visible&&x.push(E,ye,be,G,we.z,de)}}else Oe.visible&&x.push(E,ye,Oe,G,we.z,null)}}const Me=E.children;for(let ye=0,Oe=Me.length;ye<Oe;ye++)bn(Me[ye],U,G,W)}function wa(E,U,G,W){const k=E.opaque,Me=E.transmissive,ye=E.transparent;p.setupLightsView(G),H===!0&&fe.setGlobalState(g.clippingPlanes,G),Me.length>0&&Ta(k,Me,U,G),W&&ze.viewport(y.copy(W)),k.length>0&&as(k,U,G),Me.length>0&&as(Me,U,G),ye.length>0&&as(ye,U,G),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function Ta(E,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const Me=st.isWebGL2;ve===null&&(ve=new is(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")?ma:vr,minFilter:Yr,samples:Me?4:0})),g.getDrawingBufferSize(Pe),Me?ve.setSize(Pe.x,Pe.y):ve.setSize(sd(Pe.x),sd(Pe.y));const ye=g.getRenderTarget();g.setRenderTarget(ve),g.getClearColor(Q),P=g.getClearAlpha(),P<1&&g.setClearColor(16777215,.5),g.clear();const Oe=g.toneMapping;g.toneMapping=_r,as(E,G,W),tt.updateMultisampleRenderTarget(ve),tt.updateRenderTargetMipmap(ve);let He=!1;for(let Qe=0,z=U.length;Qe<z;Qe++){const de=U[Qe],be=de.object,Re=de.geometry,Ge=de.material,at=de.group;if(Ge.side===_i&&be.layers.test(W.layers)){const je=Ge.side;Ge.side=un,Ge.needsUpdate=!0,Cr(be,G,W,Re,Ge,at),Ge.side=je,Ge.needsUpdate=!0,He=!0}}He===!0&&(tt.updateMultisampleRenderTarget(ve),tt.updateRenderTargetMipmap(ve)),g.setRenderTarget(ye),g.setClearColor(Q,P),g.toneMapping=Oe}function as(E,U,G){const W=U.isScene===!0?U.overrideMaterial:null;for(let k=0,Me=E.length;k<Me;k++){const ye=E[k],Oe=ye.object,He=ye.geometry,Qe=W===null?ye.material:W,z=ye.group;Oe.layers.test(G.layers)&&Cr(Oe,U,G,He,Qe,z)}}function Cr(E,U,G,W,k,Me){E.onBeforeRender(g,U,G,W,k,Me),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(g,U,G,W,E,Me),k.transparent===!0&&k.side===_i&&k.forceSinglePass===!1?(k.side=un,k.needsUpdate=!0,g.renderBufferDirect(G,U,W,k,E,Me),k.side=Mr,k.needsUpdate=!0,g.renderBufferDirect(G,U,W,k,E,Me),k.side=_i):g.renderBufferDirect(G,U,W,k,E,Me),E.onAfterRender(g,U,G,W,k,Me)}function Vi(E,U,G){U.isScene!==!0&&(U=ht);const W=We.get(E),k=p.state.lights,Me=p.state.shadowsArray,ye=k.state.version,Oe=re.getParameters(E,k.state,Me,U,G),He=re.getProgramCacheKey(Oe);let Qe=W.programs;W.environment=E.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(E.isMeshStandardMaterial?R:Pt).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Qe===void 0&&(E.addEventListener("dispose",V),Qe=new Map,W.programs=Qe);let z=Qe.get(He);if(z!==void 0){if(W.currentProgram===z&&W.lightsStateVersion===ye)return Aa(E,Oe),z}else Oe.uniforms=re.getUniforms(E),E.onBuild(G,Oe,g),E.onBeforeCompile(Oe,g),z=re.acquireProgram(Oe,He),Qe.set(He,z),W.uniforms=Oe.uniforms;const de=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(de.clippingPlanes=fe.uniform),Aa(E,Oe),W.needsLights=Ra(E),W.lightsStateVersion=ye,W.needsLights&&(de.ambientLightColor.value=k.state.ambient,de.lightProbe.value=k.state.probe,de.directionalLights.value=k.state.directional,de.directionalLightShadows.value=k.state.directionalShadow,de.spotLights.value=k.state.spot,de.spotLightShadows.value=k.state.spotShadow,de.rectAreaLights.value=k.state.rectArea,de.ltc_1.value=k.state.rectAreaLTC1,de.ltc_2.value=k.state.rectAreaLTC2,de.pointLights.value=k.state.point,de.pointLightShadows.value=k.state.pointShadow,de.hemisphereLights.value=k.state.hemi,de.directionalShadowMap.value=k.state.directionalShadowMap,de.directionalShadowMatrix.value=k.state.directionalShadowMatrix,de.spotShadowMap.value=k.state.spotShadowMap,de.spotLightMatrix.value=k.state.spotLightMatrix,de.spotLightMap.value=k.state.spotLightMap,de.pointShadowMap.value=k.state.pointShadowMap,de.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=z,W.uniformsList=null,z}function br(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=zl.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Aa(E,U){const G=We.get(E);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function kc(E,U,G,W,k){U.isScene!==!0&&(U=ht),tt.resetTextureUnits();const Me=U.fog,ye=W.isMeshStandardMaterial?U.environment:null,Oe=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Rr,He=(W.isMeshStandardMaterial?R:Pt).get(W.envMap||ye),Qe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,z=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),de=!!G.morphAttributes.position,be=!!G.morphAttributes.normal,Re=!!G.morphAttributes.color;let Ge=_r;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ge=g.toneMapping);const at=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,je=at!==void 0?at.length:0,Ue=We.get(W),Bn=p.state.lights;if(H===!0&&(te===!0||E!==Y)){const yn=E===Y&&W.id===b;fe.setState(W,E,yn)}let yt=!1;W.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Bn.state.version||Ue.outputColorSpace!==Oe||k.isBatchedMesh&&Ue.batching===!1||!k.isBatchedMesh&&Ue.batching===!0||k.isInstancedMesh&&Ue.instancing===!1||!k.isInstancedMesh&&Ue.instancing===!0||k.isSkinnedMesh&&Ue.skinning===!1||!k.isSkinnedMesh&&Ue.skinning===!0||k.isInstancedMesh&&Ue.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ue.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ue.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ue.instancingMorph===!1&&k.morphTexture!==null||Ue.envMap!==He||W.fog===!0&&Ue.fog!==Me||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==fe.numPlanes||Ue.numIntersection!==fe.numIntersection)||Ue.vertexAlphas!==Qe||Ue.vertexTangents!==z||Ue.morphTargets!==de||Ue.morphNormals!==be||Ue.morphColors!==Re||Ue.toneMapping!==Ge||st.isWebGL2===!0&&Ue.morphTargetsCount!==je)&&(yt=!0):(yt=!0,Ue.__version=W.version);let fi=Ue.currentProgram;yt===!0&&(fi=Vi(W,U,k));let Mi=!1,Lr=!1,vo=!1;const Kt=fi.getUniforms(),Zn=Ue.uniforms;if(ze.useProgram(fi.program)&&(Mi=!0,Lr=!0,vo=!0),W.id!==b&&(b=W.id,Lr=!0),Mi||Y!==E){Kt.setValue(I,"projectionMatrix",E.projectionMatrix),Kt.setValue(I,"viewMatrix",E.matrixWorldInverse);const yn=Kt.map.cameraPosition;yn!==void 0&&yn.setValue(I,we.setFromMatrixPosition(E.matrixWorld)),st.logarithmicDepthBuffer&&Kt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Kt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),Y!==E&&(Y=E,Lr=!0,vo=!0)}if(k.isSkinnedMesh){Kt.setOptional(I,k,"bindMatrix"),Kt.setOptional(I,k,"bindMatrixInverse");const yn=k.skeleton;yn&&(st.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),Kt.setValue(I,"boneTexture",yn.boneTexture,tt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Kt.setOptional(I,k,"batchingTexture"),Kt.setValue(I,"batchingTexture",k._matricesTexture,tt));const xo=G.morphAttributes;if((xo.position!==void 0||xo.normal!==void 0||xo.color!==void 0&&st.isWebGL2===!0)&&oe.update(k,G,fi),(Lr||Ue.receiveShadow!==k.receiveShadow)&&(Ue.receiveShadow=k.receiveShadow,Kt.setValue(I,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Zn.envMap.value=He,Zn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Lr&&(Kt.setValue(I,"toneMappingExposure",g.toneMappingExposure),Ue.needsLights&&Pr(Zn,vo),Me&&W.fog===!0&&ie.refreshFogUniforms(Zn,Me),ie.refreshMaterialUniforms(Zn,W,ee,X,ve),zl.upload(I,br(Ue),Zn,tt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(zl.upload(I,br(Ue),Zn,tt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Kt.setValue(I,"center",k.center),Kt.setValue(I,"modelViewMatrix",k.modelViewMatrix),Kt.setValue(I,"normalMatrix",k.normalMatrix),Kt.setValue(I,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const yn=W.uniformsGroups;for(let Wi=0,Bc=yn.length;Wi<Bc;Wi++)if(st.isWebGL2){const ls=yn[Wi];Ce.update(ls,fi),Ce.bind(ls,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function Pr(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Ra(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,U,G){We.get(E.texture).__webglTexture=U,We.get(E.depthTexture).__webglTexture=G;const W=We.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const G=We.get(E);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,G=0){w=E,A=U,T=G;let W=!0,k=null,Me=!1,ye=!1;if(E){const He=We.get(E);He.__useDefaultFramebuffer!==void 0?(ze.bindFramebuffer(I.FRAMEBUFFER,null),W=!1):He.__webglFramebuffer===void 0?tt.setupRenderTarget(E):He.__hasExternalTextures&&tt.rebindTextures(E,We.get(E.texture).__webglTexture,We.get(E.depthTexture).__webglTexture);const Qe=E.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(ye=!0);const z=We.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(z[U])?k=z[U][G]:k=z[U],Me=!0):st.isWebGL2&&E.samples>0&&tt.useMultisampledRTT(E)===!1?k=We.get(E).__webglMultisampledFramebuffer:Array.isArray(z)?k=z[G]:k=z,y.copy(E.viewport),C.copy(E.scissor),J=E.scissorTest}else y.copy(B).multiplyScalar(ee).floor(),C.copy(ne).multiplyScalar(ee).floor(),J=le;if(ze.bindFramebuffer(I.FRAMEBUFFER,k)&&st.drawBuffers&&W&&ze.drawBuffers(E,k),ze.viewport(y),ze.scissor(C),ze.setScissorTest(J),Me){const He=We.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,He.__webglTexture,G)}else if(ye){const He=We.get(E.texture),Qe=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,He.__webglTexture,G||0,Qe)}b=-1},this.readRenderTargetPixels=function(E,U,G,W,k,Me,ye){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=We.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Oe=Oe[ye]),Oe){ze.bindFramebuffer(I.FRAMEBUFFER,Oe);try{const He=E.texture,Qe=He.format,z=He.type;if(Qe!==oi&&De.convert(Qe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const de=z===ma&&(Fe.has("EXT_color_buffer_half_float")||st.isWebGL2&&Fe.has("EXT_color_buffer_float"));if(z!==vr&&De.convert(z)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(z===Ni&&(st.isWebGL2||Fe.has("OES_texture_float")||Fe.has("WEBGL_color_buffer_float")))&&!de){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-W&&G>=0&&G<=E.height-k&&I.readPixels(U,G,W,k,De.convert(Qe),De.convert(z),Me)}finally{const He=w!==null?We.get(w).__webglFramebuffer:null;ze.bindFramebuffer(I.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(E,U,G=0){const W=Math.pow(2,-G),k=Math.floor(U.image.width*W),Me=Math.floor(U.image.height*W);tt.setTexture2D(U,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,E.x,E.y,k,Me),ze.unbindTexture()},this.copyTextureToTexture=function(E,U,G,W=0){const k=U.image.width,Me=U.image.height,ye=De.convert(G.format),Oe=De.convert(G.type);tt.setTexture2D(G,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment),U.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,W,E.x,E.y,k,Me,ye,Oe,U.image.data):U.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,W,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,ye,U.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,W,E.x,E.y,ye,Oe,U.image),W===0&&G.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(E,U,G,W,k=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=Math.round(E.max.x-E.min.x),ye=Math.round(E.max.y-E.min.y),Oe=E.max.z-E.min.z+1,He=De.convert(W.format),Qe=De.convert(W.type);let z;if(W.isData3DTexture)tt.setTexture3D(W,0),z=I.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)tt.setTexture2DArray(W,0),z=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const de=I.getParameter(I.UNPACK_ROW_LENGTH),be=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Re=I.getParameter(I.UNPACK_SKIP_PIXELS),Ge=I.getParameter(I.UNPACK_SKIP_ROWS),at=I.getParameter(I.UNPACK_SKIP_IMAGES),je=G.isCompressedTexture?G.mipmaps[k]:G.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,je.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,je.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,E.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,E.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,E.min.z),G.isDataTexture||G.isData3DTexture?I.texSubImage3D(z,k,U.x,U.y,U.z,Me,ye,Oe,He,Qe,je.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(z,k,U.x,U.y,U.z,Me,ye,Oe,He,je.data):I.texSubImage3D(z,k,U.x,U.y,U.z,Me,ye,Oe,He,Qe,je),I.pixelStorei(I.UNPACK_ROW_LENGTH,de),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,be),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ge),I.pixelStorei(I.UNPACK_SKIP_IMAGES,at),k===0&&W.generateMipmaps&&I.generateMipmap(z),ze.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?tt.setTextureCube(E,0):E.isData3DTexture?tt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?tt.setTexture2DArray(E,0):tt.setTexture2D(E,0),ze.unbindTexture()},this.resetState=function(){A=0,T=0,w=null,ze.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ah?"display-p3":"srgb",n.unpackColorSpace=vt.workingColorSpace===Dc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class QT extends ov{}QT.prototype.isWebGL1Renderer=!0;class uh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new lt(e),this.density=n}clone(){return new uh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class av extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class JT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=nd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=xr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return B_("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new D;class mc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=vi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=vi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=vi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=vi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new ci(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ld extends os{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Rs;const Do=new D,Cs=new D,bs=new D,Ps=new Ye,Uo=new Ye,lv=new bt,dl=new D,Io=new D,hl=new D,Vm=new Ye,Xu=new Ye,Wm=new Ye;class Xm extends Vt{constructor(e=new ld){if(super(),this.isSprite=!0,this.type="Sprite",Rs===void 0){Rs=new Cn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new JT(n,5);Rs.setIndex([0,1,2,0,2,3]),Rs.setAttribute("position",new mc(i,3,0,!1)),Rs.setAttribute("uv",new mc(i,2,3,!1))}this.geometry=Rs,this.material=e,this.center=new Ye(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),lv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-bs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;pl(dl.set(-.5,-.5,0),bs,o,Cs,r,s),pl(Io.set(.5,-.5,0),bs,o,Cs,r,s),pl(hl.set(.5,.5,0),bs,o,Cs,r,s),Vm.set(0,0),Xu.set(1,0),Wm.set(1,1);let a=e.ray.intersectTriangle(dl,Io,hl,!1,Do);if(a===null&&(pl(Io.set(-.5,.5,0),bs,o,Cs,r,s),Xu.set(0,1),a=e.ray.intersectTriangle(dl,hl,Io,!1,Do),a===null))return;const l=e.ray.origin.distanceTo(Do);l<e.near||l>e.far||n.push({distance:l,point:Do.clone(),uv:Xn.getInterpolation(Do,dl,Io,hl,Vm,Xu,Wm,new Ye),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function pl(t,e,n,i,r,s){Ps.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Uo.x=s*Ps.x-r*Ps.y,Uo.y=r*Ps.x+s*Ps.y):Uo.copy(Ps),t.copy(e),t.x+=Uo.x,t.y+=Uo.y,t.applyMatrix4(lv)}class cv extends os{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jm=new D,Ym=new D,qm=new bt,ju=new W_,ml=new Uc;class eA extends Vt{constructor(e=new Cn,n=new cv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)jm.fromBufferAttribute(n,r-1),Ym.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=jm.distanceTo(Ym);e.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(r),ml.radius+=s,e.ray.intersectsSphere(ml)===!1)return;qm.copy(r).invert(),ju.copy(e.ray).applyMatrix4(qm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,f=new D,d=new D,h=new D,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const u=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let g=u,S=v-1;g<S;g+=m){const A=_.getX(g),T=_.getX(g+1);if(c.fromBufferAttribute(p,A),f.fromBufferAttribute(p,T),ju.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||n.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let g=u,S=v-1;g<S;g+=m){if(c.fromBufferAttribute(p,g),f.fromBufferAttribute(p,g+1),ju.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||n.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const $m=new D,Km=new D;class tA extends eA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)$m.fromBufferAttribute(n,r),Km.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+$m.distanceTo(Km);e.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cd extends _n{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fh extends Cn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new D,f=new Ye;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=n;d++,h+=3){const m=i+d/n*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[h]/e+1)/2,f.y=(o[h+1]/e+1)/2,l.push(f.x,f.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(a,3)),this.setAttribute("uv",new Ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Oc extends Cn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],m=[];let _=0;const x=[],p=i/2;let u=0;v(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(f),this.setAttribute("position",new Ot(d,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(m,2));function v(){const S=new D,A=new D;let T=0;const w=(n-e)/i;for(let b=0;b<=s;b++){const Y=[],y=b/s,C=y*(n-e)+e;for(let J=0;J<=r;J++){const Q=J/r,P=Q*l+a,K=Math.sin(P),X=Math.cos(P);A.x=C*K,A.y=-y*i+p,A.z=C*X,d.push(A.x,A.y,A.z),S.set(K,w,X).normalize(),h.push(S.x,S.y,S.z),m.push(Q,1-y),Y.push(_++)}x.push(Y)}for(let b=0;b<r;b++)for(let Y=0;Y<s;Y++){const y=x[Y][b],C=x[Y+1][b],J=x[Y+1][b+1],Q=x[Y][b+1];f.push(y,C,Q),f.push(C,J,Q),T+=6}c.addGroup(u,T,0),u+=T}function g(S){const A=_,T=new Ye,w=new D;let b=0;const Y=S===!0?e:n,y=S===!0?1:-1;for(let J=1;J<=r;J++)d.push(0,p*y,0),h.push(0,y,0),m.push(.5,.5),_++;const C=_;for(let J=0;J<=r;J++){const P=J/r*l+a,K=Math.cos(P),X=Math.sin(P);w.x=Y*X,w.y=p*y,w.z=Y*K,d.push(w.x,w.y,w.z),h.push(0,y,0),T.x=K*.5+.5,T.y=X*.5*y+.5,m.push(T.x,T.y),_++}for(let J=0;J<r;J++){const Q=A+J,P=C+J;S===!0?f.push(P,P+1,Q):f.push(P+1,P,Q),b+=3}c.addGroup(u,b,S===!0?1:2),u+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Er extends Oc{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Er(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const gl=new D,_l=new D,Yu=new D,vl=new Xn;class nA extends Cn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Ol*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),h={},m=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:x,b:p,c:u}=vl;if(x.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),vl.getNormal(Yu),d[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,d[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const g=(v+1)%3,S=d[v],A=d[g],T=vl[f[v]],w=vl[f[g]],b=`${S}_${A}`,Y=`${A}_${S}`;Y in h&&h[Y]?(Yu.dot(h[Y].normal)<=s&&(m.push(T.x,T.y,T.z),m.push(w.x,w.y,w.z)),h[Y]=null):b in h||(h[b]={index0:c[v],index1:c[g],normal:Yu.clone()})}}for(const _ in h)if(h[_]){const{index0:x,index1:p}=h[_];gl.fromBufferAttribute(a,x),_l.fromBufferAttribute(a,p),m.push(gl.x,gl.y,gl.z),m.push(_l.x,_l.y,_l.z)}this.setAttribute("position",new Ot(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class wt extends Cn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new D,h=new D,m=[],_=[],x=[],p=[];for(let u=0;u<=i;u++){const v=[],g=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let A=0;A<=n;A++){const T=A/n;d.x=-e*Math.cos(r+T*s)*Math.sin(o+g*a),d.y=e*Math.cos(o+g*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+g*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(T+S,1-g),v.push(c++)}f.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const g=f[u][v+1],S=f[u][v],A=f[u+1][v],T=f[u+1][v+1];(u!==0||o>0)&&m.push(g,S,T),(u!==i-1||l<Math.PI)&&m.push(S,A,T)}this.setIndex(m),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(x,3)),this.setAttribute("uv",new Ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zc extends Cn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new D,d=new D,h=new D;for(let m=0;m<=i;m++)for(let _=0;_<=r;_++){const x=_/r*s,p=m/i*Math.PI*2;d.x=(e+n*Math.cos(p))*Math.cos(x),d.y=(e+n*Math.cos(p))*Math.sin(x),d.z=n*Math.sin(p),a.push(d.x,d.y,d.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(_/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){const x=(r+1)*m+_-1,p=(r+1)*(m-1)+_-1,u=(r+1)*(m-1)+_,v=(r+1)*m+_;o.push(x,p,v),o.push(p,u,v)}this.setIndex(o),this.setAttribute("position",new Ot(a,3)),this.setAttribute("normal",new Ot(l,3)),this.setAttribute("uv",new Ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ct extends os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=O_,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dh extends Vt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class iA extends dh{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const qu=new bt,Zm=new D,Qm=new D;class uv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lh,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Zm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zm),Qm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Qm),n.updateMatrixWorld(),qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jm=new bt,Fo=new D,$u=new D;class rA extends uv{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Fo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Fo),$u.copy(i.position),$u.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt($u),i.updateMatrixWorld(),r.makeTranslation(-Fo.x,-Fo.y,-Fo.z),Jm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jm)}}class sA extends dh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new rA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class oA extends uv{constructor(){super(new J_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eg extends dh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new oA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sh);class aA extends av{constructor(e=null){super();const n=new xt;n.deleteAttribute("uv");const i=new ct({side:un}),r=new ct;let s=5;e!==null&&e._useLegacyLights===!1&&(s=900);const o=new sA(16777215,s,28,2);o.position.set(.418,16.199,.3),this.add(o);const a=new ge(n,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const l=new ge(n,r);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);const c=new ge(n,r);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);const f=new ge(n,r);f.position.set(6.167,.857,7.803),f.rotation.set(0,.561,0),f.scale.set(3.927,6.285,3.687),this.add(f);const d=new ge(n,r);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);const h=new ge(n,r);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const m=new ge(n,r);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);const _=new ge(n,Ls(50));_.position.set(-16.116,14.37,8.208),_.scale.set(.1,2.428,2.739),this.add(_);const x=new ge(n,Ls(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);const p=new ge(n,Ls(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const u=new ge(n,Ls(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const v=new ge(n,Ls(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const g=new ge(n,Ls(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Ls(t){const e=new ga;return e.color.setScalar(t),e}const Ku=.014,tg=.12,Ji=.235,ng=.45,Zu=22,lA=8,ig=1.7,xl=.35,ln=.7,yl=.35,cA=100,Qu=2.6,uA=90,Sl=3,Ml=15,rg=100,ud=[{name:"Selva",sky:8246268,ground:5078031,groundSide:4140306,accent:10741301,fog:10476016},{name:"Playa",sky:16639626,ground:14067809,groundSide:9593118,accent:16638023,fog:16639920},{name:"Ruinas",sky:12891645,ground:7893356,groundSide:4472892,accent:16096779,fog:12891645},{name:"Cueva",sky:1976635,ground:4674921,groundSide:1976635,accent:2282478,fog:1976635},{name:"Atardecer",sky:16478597,ground:10105874,groundSide:4396039,accent:16569165,fog:16492198}],fv={name:"Laboratorio",sky:7153881,ground:4988309,groundSide:1973067,accent:2282478,fog:4988309};function fA(t,e){return e?fv:ud[(t-1)%ud.length]}function dA(t){let e=t>>>0;return function(){e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}const Ju=(t,e)=>e[Math.floor(t()*e.length)];function hA(t,e){const n=e.reduce((r,s)=>r+s[1],0);let i=t()*n;for(const[r,s]of e)if(i-=s,i<=0)return r;return e[e.length-1][0]}function pA(t,e){const n=[["wood",42],["fruit",26],["bounce",12],["tnt",Math.min(6+e,22)],["life",4]];return e>=4&&n.push(["iron",9]),hA(t,n)}function mA(t,e){const n=dA(t*73856093^2654435769),i=Math.min(36+t*3,72),r=[],s=[],o=[],a=[],l=[],c=(_,x)=>r.push({cx:(_+x)/2,cy:-.5,cz:0,hx:(x-_)/2,hy:.5,hz:Sl,kind:"ground"});c(-2,6);let f=6;const d=[{x0:-2,x1:6}],h=2+Math.min(t*.08,1.1);for(;f<i-10;){const _=1.7+n()*(h-1.7),x=f;f+=_;const p=3+Math.floor(n()*2);for(let S=0;S<p;S++){const A=(S+1)/(p+1);a.push({x:x+A*_,y:1+Math.sin(A*Math.PI)*1.4,z:0})}const u=4+n()*4;c(f,f+u),d.push({x0:f,x1:f+u});const v=f+u/2;if(n()<.85){const S=1+Math.floor(n()*3),A=-1.6+n()*3.2;for(let T=0;T<S;T++)s.push({x:f+1+T*1.1+n()*(u-2-S),y:.5,z:A,type:pA(n,t)})}const g=Math.min(.3+t*.04,.85);if(n()<g&&((n()<.5?"z":"x")==="z"?o.push({x:v,y:.5,z:0,type:Ju(n,["walker","spinner"]),axis:"z",min:-Sl+.6,max:Sl-.6,dir:1,speed:Math.min(.03+t*.004,.07),dead:!1}):o.push({x:v,y:.5,z:-1+n()*2,type:Ju(n,["walker","spinner"]),axis:"x",min:f+.8,max:f+u-.8,dir:1,speed:Math.min(.03+t*.004,.07),dead:!1})),n()<.6){const S=2+Math.floor(n()*3),A=-1.5+n()*3;for(let T=0;T<S;T++)a.push({x:f+1+T*.9,y:1,z:A})}if(n()<.4){const S=1.4+n()*1,A=(n()<.5?-1:1)*(Sl-.8);r.push({cx:v,cy:S-.25,cz:A,hx:1.1,hy:.25,hz:.9,kind:"platform"}),n()<.5?s.push({x:v,y:S+.5,z:A,type:Ju(n,["fruit","bounce","life"])}):a.push({x:v,y:S+.6,z:A})}f+=u}c(i-10,i+3),d.push({x0:i-10,x1:i+3});const m=[];for(const _ of[.3,.55,.8]){const x=i*_;let p=d[0];for(const v of d)Math.abs((v.x0+v.x1)/2-x)<Math.abs((p.x0+p.x1)/2-x)&&(p=v);const u=(p.x0+p.x1)/2;u>8&&u<i-8&&!m.some(v=>Math.abs(v.x-u)<6)&&m.push({x:u,y:0,z:0})}if(n()<.8){const _=d.filter(p=>p.x0>i*.4),x=(_.length?_:d)[Math.floor(n()*(_.length?_.length:d.length))];l.push({x:(x.x0+x.x1)/2,y:1.4,z:-1+n()*2})}return{num:t,name:`${e.name} ${Math.ceil(t/ud.length)}`,boss:!1,length:i,theme:e,boxes:r,crates:s,enemies:o,fruits:a,masks:l,checkpoints:m,spawn:{x:2,y:ln,z:0},goal:{x:i-3,z:0},bossHp:0}}function gA(t,e){const i=[{cx:7,cy:-.5,cz:0,hx:9,hy:.5,hz:9,kind:"ground"},{cx:7,cy:1,cz:9,hx:9,hy:1.5,hz:.5,kind:"wall"},{cx:7,cy:1,cz:-9,hx:9,hy:1.5,hz:.5,kind:"wall"},{cx:-2,cy:1,cz:0,hx:.5,hy:1.5,hz:9,kind:"wall"},{cx:16,cy:1,cz:0,hx:.5,hy:1.5,hz:9,kind:"wall"}];return{num:t,name:`Guarida de Norberto ${t/5}`,boss:!0,length:2*9,theme:e,boxes:i,crates:[],enemies:[],checkpoints:[],fruits:[],masks:[{x:7,y:1.6,z:0}],spawn:{x:0,y:ln,z:0},goal:{x:9999,z:0},bossHp:t>=15?3:2}}function _A(t){return t%5===0?gA(t,fv):mA(t,fA(t,!1))}const sg="crash-names",ef="crash-best-by-user",tf="crash-progress-by-user",Ns=4,og={muyGrande:4.3,grande:6.2,pequeno:8.4,muyPequeno:11},El=["muyPequeno","pequeno","grande","muyGrande"],ag={muyPequeno:"Muy pequeño",pequeno:"Pequeño",grande:"Grande",muyGrande:"Muy grande"},lg=.005,Gn={kamyar:{name:"Kamyar",emoji:"🐶",fur:16347926,furDark:12730636,belly:16701354,tuft:8138002},martina:{name:"Martina",emoji:"🐬",fur:6003669,furDark:3108784,belly:15398139,tuft:1982639}},vA={wood:11565635,fruit:13273658,tnt:14427686,iron:9741240,bounce:2278750,life:1096065,check:16096779},cg=new Map,xA=t=>"#"+(t&16777215).toString(16).padStart(6,"0");function wl(t,e){const n=t>>16&255,i=t>>8&255,r=t&255,s=o=>Math.max(0,Math.min(255,Math.round(o+e*255)));return`rgb(${s(n)},${s(i)},${s(r)})`}const ug=new Map;function dv(t,e){const n=e+":"+t,i=ug.get(n);if(i)return i;const r=128,s=document.createElement("canvas");s.width=s.height=r;const o=s.getContext("2d");if(o.fillStyle=xA(t),o.fillRect(0,0,r,r),e==="grass")for(let p=0;p<2600;p++)o.fillStyle=wl(t,(Math.random()-.45)*.4),o.fillRect(Math.random()*r,Math.random()*r,1,1+Math.random()*3);else if(e==="soil")for(let p=0;p<1300;p++)o.fillStyle=wl(t,(Math.random()-.5)*.45),o.beginPath(),o.arc(Math.random()*r,Math.random()*r,.6+Math.random()*2,0,Math.PI*2),o.fill();else if(e==="rock"){for(let p=0;p<1e3;p++)o.fillStyle=wl(t,(Math.random()-.5)*.55),o.beginPath(),o.arc(Math.random()*r,Math.random()*r,1+Math.random()*3.4,0,Math.PI*2),o.fill();o.strokeStyle="rgba(0,0,0,0.28)",o.lineWidth=1.4;for(let p=0;p<12;p++)o.beginPath(),o.moveTo(Math.random()*r,Math.random()*r),o.lineTo(Math.random()*r,Math.random()*r),o.stroke()}else{for(let p=0;p<26;p++)o.fillStyle=wl(t,(Math.random()-.5)*.3),o.fillRect(0,p/26*r,r,r/26+1);o.strokeStyle="rgba(0,0,0,0.2)",o.lineWidth=1.2;for(let p=1;p<4;p++)o.beginPath(),o.moveTo(p/4*r,0),o.lineTo(p/4*r,r),o.stroke()}const a=o.getImageData(0,0,r,r).data,l=(p,u)=>{const v=((u+r)%r*r+(p+r)%r)*4;return(a[v]*.299+a[v+1]*.587+a[v+2]*.114)/255},c=e==="rock"?2.6:e==="wood"?1.6:e==="soil"?1.8:1.1,f=document.createElement("canvas");f.width=f.height=r;const d=f.getContext("2d"),h=d.createImageData(r,r);for(let p=0;p<r;p++)for(let u=0;u<r;u++){const v=(l(u+1,p)-l(u-1,p))*c,g=(l(u,p+1)-l(u,p-1))*c;let S=-v,A=-g,T=1;const w=1/Math.hypot(S,A,T);S*=w,A*=w,T*=w;const b=(p*r+u)*4;h.data[b]=(S*.5+.5)*255,h.data[b+1]=(A*.5+.5)*255,h.data[b+2]=(T*.5+.5)*255,h.data[b+3]=255}d.putImageData(h,0,0);const m=new cd(s);m.wrapS=m.wrapT=pa,m.colorSpace=Dn,m.anisotropy=4;const _=new cd(f);_.wrapS=_.wrapT=pa,_.anisotropy=4;const x={map:m,normal:_};return ug.set(n,x),x}function fg(t,e,n,i,r=.97){const{map:s,normal:o}=dv(t,e),a=Math.max(1,Math.round(n/2)),l=Math.max(1,Math.round(i/2)),c=s.clone();c.needsUpdate=!0,c.repeat.set(a,l);const f=o.clone();f.needsUpdate=!0,f.repeat.set(a,l);const d=e==="rock"?1.1:e==="soil"?.9:.6;return new ct({map:c,normalMap:f,normalScale:new Ye(d,d),roughness:r})}function dg(){const t=cg.get("cloud");if(t)return t;const e=128,n=document.createElement("canvas");n.width=n.height=e;const i=n.getContext("2d"),r=i.createRadialGradient(e/2,e/2,4,e/2,e/2,e/2);r.addColorStop(0,"rgba(255,255,255,0.95)"),r.addColorStop(.6,"rgba(255,255,255,0.5)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.fillRect(0,0,e,e);const s=new cd(n);return s.colorSpace=Dn,cg.set("cloud",s),s}function yA(t){return t==="martina"?MA():SA()}function SA(){const t=Gn.kamyar,e=new Yn,n=new ct({color:t.fur,roughness:.62}),i=new ct({color:t.furDark,roughness:.62}),r=new ct({color:t.belly,roughness:.72}),s=new ct({color:16777215,roughness:.22}),o=new ct({color:988970,roughness:.15,metalness:.3}),a=new ge(new xt(.6,.8,.45),n);e.add(a);const l=new ge(new xt(.4,.5,.1),r);l.position.set(0,-.05,.24),e.add(l);const c=new ge(new wt(.33,16,12),n);c.position.y=.62,e.add(c);const f=new ge(new xt(.22,.17,.2),r);f.position.set(0,.52,.32),e.add(f);const d=new ge(new wt(.075,10,8),o);d.position.set(0,.57,.44),e.add(d);for(const _ of[-.13,.13]){const x=new ge(new wt(.09,10,8),s);x.position.set(_,.7,.26),e.add(x);const p=new ge(new wt(.04,8,6),o);p.position.set(_,.7,.33),e.add(p)}for(const _ of[-1,1]){const x=new ge(new xt(.12,.34,.11),i);x.position.set(_*.32,.58,0),x.rotation.z=_*.25,e.add(x)}const h=new ge(new zc(.28,.05,8,20),new ct({color:14427686,roughness:.5}));h.position.y=.36,h.rotation.x=Math.PI/2,e.add(h);const m=new ge(new Er(.09,.4,8),i);m.position.set(0,.12,-.3),m.rotation.x=-.9,e.add(m);for(const _ of[-.36,.36]){const x=new ge(new wt(.12,8,6),s);x.position.set(_,-.05,.05),e.add(x)}for(const _ of[-.16,.16]){const x=new ge(new xt(.24,.16,.34),i);x.position.set(_,-.5,.06),e.add(x)}return e}function MA(){const t=Gn.martina,e=new Yn,n=new ct({color:t.fur,roughness:.35,metalness:.05}),i=new ct({color:t.furDark,roughness:.4}),r=new ct({color:t.belly,roughness:.5}),s=new ct({color:16777215,roughness:.22}),o=new ct({color:988970,roughness:.15,metalness:.3}),a=new ge(new wt(.34,20,16),n);a.scale.set(.9,1.35,.9),a.position.y=.02,e.add(a);const l=new ge(new wt(.28,18,14),r);l.scale.set(.7,1.15,.5),l.position.set(0,-.02,.16),e.add(l);const c=new ge(new wt(.3,18,14),n);c.position.y=.58,e.add(c);const f=new ge(new Er(.12,.34,12),n);f.position.set(0,.5,.34),f.rotation.x=Math.PI/2,e.add(f);const d=new ge(new xt(.16,.03,.02),o);d.position.set(0,.44,.44),e.add(d);for(const _ of[-.15,.15]){const x=new ge(new wt(.075,10,8),s);x.position.set(_,.64,.2),e.add(x);const p=new ge(new wt(.038,8,6),o);p.position.set(_,.64,.26),e.add(p)}const h=new ge(new wt(.05,8,6),i);h.position.set(0,.84,-.04),e.add(h);const m=new ge(new xt(.06,.34,.24),i);m.position.set(0,.42,-.16),m.rotation.x=-.5,e.add(m);for(const _ of[-1,1]){const x=new ge(new xt(.09,.34,.16),i);x.position.set(_*.3,0,.05),x.rotation.set(.3,0,_*.9),e.add(x)}for(const _ of[-1,1]){const x=new ge(new xt(.3,.06,.22),i);x.position.set(_*.18,-.5,-.02),x.rotation.y=_*.4,e.add(x)}return e}function EA(t){const e=vA[t]||11565635;let n;if(t==="wood"){const s=dv(11565635,"wood"),o=s.map.clone();o.needsUpdate=!0;const a=s.normal.clone();a.needsUpdate=!0,n=new ct({map:o,normalMap:a,roughness:.85})}else t==="iron"?n=new ct({color:e,metalness:.85,roughness:.32}):n=new ct({color:e,roughness:.55,emissive:t==="tnt"?3342336:0});const i=new ge(new xt(1,1,1),n),r=new tA(new nA(i.geometry),new cv({color:1710618}));if(i.add(r),t==="check"||t==="life"||t==="bounce"){const s=new ge(new xt(.3,.08,.3),new ct({color:16777215}));s.position.y=.55,i.add(s)}return i}function wA(t){const e=new Yn,n=t==="spinner"?8141549:959977,i=new ge(new wt(.45,20,14),new ct({color:n,roughness:.38,metalness:.12}));if(i.scale.y=.85,e.add(i),t==="spinner")for(let r=0;r<6;r++){const s=r/6*Math.PI*2,o=new ge(new Er(.1,.3,6),new ct({color:4988309}));o.position.set(Math.cos(s)*.45,0,Math.sin(s)*.45),o.rotation.z=-Math.PI/2,o.rotation.y=-s,e.add(o)}for(const r of[-.16,.16]){const s=new ge(new wt(.09,8,6),new ct({color:16777215}));s.position.set(r,.15,.38),e.add(s);const o=new ge(new wt(.045,6,6),new ct({color:988970}));o.position.set(r,.15,.44),e.add(o)}return e}function TA(){const t=new Yn,e=new ge(new xt(.5,.7,.18),new ct({color:11817737,roughness:.4,metalness:.15,emissive:3808512}));t.add(e);const n=new ge(new Er(.12,.35,6),new ct({color:15680580}));n.position.set(0,.5,0),t.add(n);const i=new ge(new Er(.08,.3,6),new ct({color:3900150}));i.position.set(-.22,.42,0),i.rotation.z=.6,t.add(i);const r=i.clone();r.position.x=.22,r.rotation.z=-.6,t.add(r);for(const o of[-.13,.13]){const a=new ge(new wt(.07,8,6),new ct({color:16777215}));a.position.set(o,.06,.1),t.add(a)}const s=new ge(new xt(.24,.08,.05),new ct({color:16638023}));return s.position.set(0,-.2,.1),t.add(s),t}function AA(){const t=new Yn,e=new ct({color:2042167,roughness:.55}),n=new ct({color:725280,roughness:.6}),i=new ct({color:14202016,roughness:.6}),r=new ct({color:1120295,roughness:.7}),s=new ct({color:16777215,roughness:.22}),o=new ct({color:15680580,emissive:10033947,emissiveIntensity:.9,roughness:.3});for(const _ of[-.28,.28]){const x=new ge(new xt(.4,.8,.5),n);x.position.set(_,.4,0),t.add(x)}const a=new ge(new xt(1.15,1.05,.65),e);a.position.y=1.3,t.add(a);const l=new ge(new xt(.16,.8,.1),new ct({color:8330525}));l.position.set(0,1.3,.34),t.add(l);for(const _ of[-1,1]){const x=new ge(new xt(.28,.95,.5),e);x.position.set(_*.72,1.28,0),t.add(x);const p=new ge(new wt(.14,10,8),i);p.position.set(_*.72,.78,0),t.add(p)}const c=new ge(new xt(.9,.3,.55),n);c.position.y=1.9,t.add(c);const f=new ge(new wt(.42,24,18),i);f.position.y=2.35,t.add(f);const d=new ge(new wt(.44,20,14),r);d.scale.set(1,.7,1),d.position.set(0,2.5,-.05),t.add(d);for(const _ of[-1,1]){const x=new ge(new xt(.2,.05,.06),r);x.position.set(_*.17,2.42,.36),x.rotation.z=_*.5,t.add(x)}for(const _ of[-.16,.16]){const x=new ge(new wt(.08,12,10),s);x.position.set(_,2.34,.34),t.add(x);const p=new ge(new wt(.045,8,6),o);p.position.set(_,2.34,.4),t.add(p)}const h=new ge(new xt(.28,.06,.05),n);h.position.set(0,2.16,.38),t.add(h);const m=new ge(new Er(.1,.22,6),r);return m.position.set(0,2,.34),m.rotation.x=Math.PI,t.add(m),t}const Oo=(t,e,n)=>t<e?e:t>n?n:t;function RA(){const t=_e.useRef(null),e=_e.useRef(null),n=_e.useRef(null),i=_e.useRef(null),r=_e.useRef(null),s=_e.useRef(null),o=_e.useRef(null),a=_e.useRef(null),l=_e.useRef(null),c=_e.useRef(null),f=_e.useRef(null),d=_e.useRef(null),h=_e.useRef(null),m=_e.useRef(null),_=_e.useRef([]),x=_e.useRef([]),p=_e.useRef([]),u=_e.useRef([]);_e.useRef([]);const v=_e.useRef(-1),g=_e.useRef(!1),S=_e.useRef({x:2,y:ln,z:0,yaw:Math.PI/2,vy:0,onGround:!1,spin:0,spinCd:0,coyote:0,jumpBuf:0,invuln:0}),A=_e.useRef(null),T=_e.useRef(1),w=_e.useRef({x:2,y:ln,z:0}),b=_e.useRef(null),Y=_e.useRef([]),y=_e.useRef("menu"),C=_e.useRef("kamyar"),J=_e.useRef("third"),Q=_e.useRef(Math.PI/2),P=_e.useRef(.45),K=_e.useRef(og.grande),X=_e.useRef(Ns),ee=_e.useRef(0),L=_e.useRef(0),O=_e.useRef(!1),B=_e.useRef(0),ne=_e.useRef(!1),le=_e.useRef({left:!1,right:!1,fwd:!1,back:!1,jump:!1,jumpPressed:!1,spinPressed:!1,camL:!1,camR:!1}),[Le,H]=_e.useState("menu"),[te,ve]=_e.useState("kamyar"),[Ne,Pe]=_e.useState("third"),[we,ht]=_e.useState("grande"),[Be,I]=_e.useState(!1),kt=_e.useRef(!1),[Fe,st]=_e.useState(!1);_e.useRef(null);const[ze,et]=_e.useState(Ns),[We,tt]=_e.useState(0),[Pt,R]=_e.useState(0),[M,q]=_e.useState(1),[Z,re]=_e.useState(!1),[ie,Ve]=_e.useState(0),[ke,fe]=_e.useState(0),[me,Ke]=_e.useState(0),[oe,It]=_e.useState(!1),[qe,De]=_e.useState({}),[Ae,Ce]=_e.useState({}),[nt,$e]=_e.useState([]),[ft,N]=_e.useState(""),[ae,V]=_e.useState(""),[ce,xe]=_e.useState("");_e.useEffect(()=>{y.current=Le},[Le]),_e.useEffect(()=>{C.current=te},[te]),_e.useEffect(()=>{J.current=Ne},[Ne]),_e.useEffect(()=>{K.current=og[we]},[we]),_e.useEffect(()=>{kt.current=Be},[Be]),_e.useEffect(()=>{ne.current=oe},[oe]),_e.useEffect(()=>{const z=JSON.parse(localStorage.getItem(ef)||"{}"),de=JSON.parse(localStorage.getItem(tf)||"{}"),be=JSON.parse(localStorage.getItem(sg)||"[]"),Re=Array.from(new Set([...be,...Object.keys(z)]));De(z),Ce(de),$e(Re),Re.length&&N(Re[0])},[]);const ot=ae&&qe[ae]||0,pt=ae&&Ae[ae]||1,Bt=_e.useRef(null),Lt=(z,de,be,Re,Ge)=>{if(ne.current)return;let at=Bt.current;if(!at)try{at=new(window.AudioContext||window.webkitAudioContext),Bt.current=at}catch{return}const je=at.currentTime,Ue=at.createOscillator(),Bn=at.createGain();Ue.type=be,Ue.frequency.setValueAtTime(z,je),Ge&&Ue.frequency.exponentialRampToValueAtTime(Math.max(40,Ge),je+de),Bn.gain.setValueAtTime(Re,je),Bn.gain.exponentialRampToValueAtTime(1e-4,je+de),Ue.connect(Bn),Bn.connect(at.destination),Ue.start(je),Ue.stop(je+de)},Xe={jump:()=>Lt(420,.16,"square",.05,720),spin:()=>Lt(180,.18,"sawtooth",.05,90),collect:()=>Lt(880,.08,"square",.045,1320),breakC:()=>Lt(220,.1,"square",.05,120),stomp:()=>Lt(300,.1,"triangle",.05,160),boom:()=>Lt(120,.32,"sawtooth",.07,50),hurt:()=>Lt(360,.3,"sawtooth",.06,90),power:()=>{Lt(660,.1,"triangle",.05,990),setTimeout(()=>Lt(990,.14,"triangle",.05,1480),90)},win:()=>{[523,659,784,1046].forEach((z,de)=>setTimeout(()=>Lt(z,.16,"triangle",.05),de*110))}},$t=z=>{$e(z),localStorage.setItem(sg,JSON.stringify(z))},bn=()=>{const z=ce.trim();z&&(nt.includes(z)||$t([z,...nt]),N(z),xe(""))},wa=z=>{$t(nt.filter(Re=>Re!==z));const de={...qe};delete de[z],De(de),localStorage.setItem(ef,JSON.stringify(de));const be={...Ae};delete be[z],Ce(be),localStorage.setItem(tf,JSON.stringify(be)),ft===z&&N("")},Ta=()=>{if(ae&&ee.current>(qe[ae]||0)){const z={...qe,[ae]:ee.current};De(z),localStorage.setItem(ef,JSON.stringify(z))}},as=z=>{if(ae&&z>(Ae[ae]||1)){const de={...Ae,[ae]:Math.min(z,Ml)};Ce(de),localStorage.setItem(tf,JSON.stringify(de))}},Cr=(z,de)=>{const be=_A(z);A.current=be,T.current=z,de||(w.current={...be.spawn},v.current=-1);const Re=w.current,Ge=S.current;Ge.x=Re.x,Ge.y=Re.y,Ge.z=Re.z,Ge.vy=0,Ge.yaw=Math.PI/2,Ge.spin=0,Ge.spinCd=0,Ge.onGround=!1,Ge.invuln=70,Ge.coyote=0,Ge.jumpBuf=0,Q.current=Math.PI/2,P.current=.45,Y.current=[],b.current=be.boss?{x:be.length-2,z:0,y:ln,vy:0,hp:be.bossHp,maxHp:be.bossHp,invuln:80,t:150,hopT:160}:null,g.current=!0,q(z),be.boss?(fe(be.bossHp),Ke(be.bossHp)):(fe(0),Ke(0)),I(be.boss&&!de)},Vi=z=>{const de=ft||ae;de&&(V(de),C.current=te,ee.current=0,tt(0),X.current=Ns,et(Ns),L.current=0,R(0),O.current=!1,re(!1),B.current=0,Ve(0),Cr(z,!1),y.current="playing",H("playing"))},br=()=>{y.current="menu",H("menu")},Aa=()=>Pe(z=>z==="third"?"first":"third"),kc=()=>ht(z=>El[(El.indexOf(z)+1)%El.length]),Pr=z=>{ee.current+=z,tt(ee.current)},Ra=()=>{L.current+=1,Pr(15),L.current>=rg&&(L.current-=rg,X.current+=1,et(X.current),Xe.power()),R(L.current),Xe.collect()},E=z=>{if(!z.dead){if(z.dead=!0,z.type==="fruit"){for(let de=0;de<3;de++)Ra();Pr(20)}else z.type==="life"?(X.current+=1,et(X.current),Xe.power()):z.type==="check"?(w.current={x:z.x-1.5,y:ln,z:z.z},Xe.power()):Pr(20);Xe.breakC()}},U=z=>{if(z.dead)return;z.dead=!0,Xe.boom();const de=A.current;for(const Re of de.crates)Re.dead||Re===z||Math.hypot(Re.x-z.x,Re.z-z.z)<Qu&&(Re.type==="tnt"?Re.fuse==null&&(Re.fuse=12):Re.type!=="iron"&&E(Re));for(const Re of de.enemies)!Re.dead&&Math.hypot(Re.x-z.x,Re.z-z.z)<Qu&&G(Re);const be=S.current;Math.hypot(be.x-z.x,be.z-z.z)<Qu&&Math.abs(be.y-z.y)<2&&W()},G=z=>{z.dead||(z.dead=!0,Pr(200),Xe.stomp())},W=()=>{const z=S.current;if(!(z.invuln>0||B.current>0)){if(O.current){O.current=!1,re(!1),z.invuln=uA,z.vy=.18,Xe.hurt();return}k()}},k=()=>{Xe.hurt(),X.current-=1,et(X.current),O.current=!1,re(!1),B.current=0,Ve(0),X.current<=0?(y.current="dead",H("dead"),Ta()):Cr(T.current,!0)},Me=()=>{const z=T.current;Pr(1e3+z*100),Ta(),as(z+1),Xe.win(),z>=Ml?(y.current="victory",H("victory")):(y.current="clear",H("clear"))};if(_e.useEffect(()=>{const z=(Re,Ge)=>{const at=Re.target;if(at&&at.tagName==="INPUT")return;const je=le.current;switch(Re.key){case"ArrowLeft":case"a":case"A":je.left=Ge;break;case"ArrowRight":case"d":case"D":je.right=Ge;break;case"ArrowUp":case"w":case"W":je.fwd=Ge;break;case"ArrowDown":case"s":case"S":je.back=Ge;break;case" ":Ge&&!je.jump&&(je.jumpPressed=!0),je.jump=Ge;break;case"j":case"J":case"k":case"K":case"x":case"X":case"Shift":Ge&&(je.spinPressed=!0);break;case"q":case"Q":je.camL=Ge;break;case"e":case"E":je.camR=Ge;break;case"c":case"C":Ge&&Pe(Ue=>Ue==="third"?"first":"third");break;default:return}Re.preventDefault()},de=Re=>z(Re,!0),be=Re=>z(Re,!1);return window.addEventListener("keydown",de),window.addEventListener("keyup",be),()=>{window.removeEventListener("keydown",de),window.removeEventListener("keyup",be)}},[]),_e.useEffect(()=>{if(Le==="menu"){e.current&&(e.current.dispose(),e.current.domElement.remove(),e.current=null,n.current=null,i.current=null,c.current=null);return}const z=t.current;if(!z)return;if(!e.current){const F=new ov({antialias:!0});F.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),F.setSize(z.clientWidth,z.clientHeight),F.outputColorSpace=Dn,F.toneMapping=C_,F.toneMappingExposure=1.05,F.shadowMap.enabled=!0,F.shadowMap.type=A_,z.appendChild(F.domElement),F.domElement.style.display="block",F.domElement.style.width="100%",F.domElement.style.height="100%";const $=new av,Te=new Un(62,z.clientWidth/z.clientHeight,.1,240),Wt=new iA(16777215,4674410,.55);$.add(Wt);const gt=new eg(16774368,2.4);gt.position.set(14,26,10),gt.castShadow=!0,gt.shadow.mapSize.set(4096,4096),gt.shadow.camera.near=1,gt.shadow.camera.far=90,gt.shadow.camera.left=-22,gt.shadow.camera.right=22,gt.shadow.camera.top=22,gt.shadow.camera.bottom=-22,gt.shadow.bias=-4e-4,gt.shadow.normalBias=.5,$.add(gt);const Ze=new Vt;$.add(Ze),gt.target=Ze;const Se=new eg(12374783,.35);Se.position.set(-10,8,-8),$.add(Se);const he=new od(F);$.environment=he.fromScene(new aA,.04).texture;const Ie=new ge(new wt(400,32,16),new Hi({side:un,depthWrite:!1,fog:!1,uniforms:{top:{value:new lt(3899344)},bottom:{value:new lt(13625599)},exponent:{value:.8}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying vec3 vP; uniform vec3 top; uniform vec3 bottom; uniform float exponent; void main(){ float h = normalize(vP).y; float t = pow(clamp(smoothstep(-0.1,0.6,h),0.0,1.0), exponent); gl_FragColor = vec4(mix(bottom, top, t), 1.0); }"}));Ie.frustumCulled=!1,$.add(Ie);const Je=new Xm(new ld({map:dg(),color:16773824,transparent:!0,depthWrite:!1,blending:Kf,fog:!1}));Je.scale.setScalar(70),$.add(Je);const At=new Yn;for(let Xi=0;Xi<14;Xi++){const di=new Xm(new ld({map:dg(),transparent:!0,opacity:.5,depthWrite:!1,fog:!1}));di.position.set((Math.random()-.5)*240,38+Math.random()*44,(Math.random()-.5)*240);const cs=18+Math.random()*26;di.scale.set(cs*1.7,cs,1),At.add(di)}$.add(At),e.current=F,n.current=$,i.current=Te,r.current=gt,s.current=Ze,o.current=Ie,a.current=Je,l.current=At}const de=e.current,be=n.current,Re=i.current,Ge=()=>{const F=t.current;F&&(de.setSize(F.clientWidth,F.clientHeight),Re.aspect=F.clientWidth/F.clientHeight,Re.updateProjectionMatrix())};window.addEventListener("resize",Ge);const at=de.domElement;at.style.touchAction="none";let je=!1,Ue=0,Bn=0;const yt=F=>{var $;je=!0,Ue=F.clientX,Bn=F.clientY,($=at.setPointerCapture)==null||$.call(at,F.pointerId)},fi=F=>{if(!je)return;const $=F.clientX-Ue,Te=F.clientY-Bn;Ue=F.clientX,Bn=F.clientY,Q.current-=$*lg,P.current=Oo(P.current+Te*lg,-.7,1.4)},Mi=F=>{var $;je=!1,($=at.releasePointerCapture)==null||$.call(at,F.pointerId)};at.addEventListener("pointerdown",yt),at.addEventListener("pointermove",fi),at.addEventListener("pointerup",Mi),at.addEventListener("pointercancel",Mi),at.addEventListener("pointerleave",Mi);const Lr=F=>{F.traverse($=>{var Ze,Se,he,Ie,Je;const Te=$;Te.geometry&&Te.geometry.dispose();const Wt=Te.material,gt=Array.isArray(Wt)?Wt:Wt?[Wt]:[];for(const At of gt)(Se=(Ze=At.map)==null?void 0:Ze.dispose)==null||Se.call(Ze),(Ie=(he=At.normalMap)==null?void 0:he.dispose)==null||Ie.call(he),(Je=At.dispose)==null||Je.call(At)})},vo=F=>{c.current&&(be.remove(c.current),Lr(c.current));const $=new Yn;if(be.background=new lt(F.theme.fog),be.fog=new uh(F.theme.fog,.011),o.current){const Se=o.current.material;Se.uniforms.top.value.set(F.theme.sky).multiplyScalar(.82),Se.uniforms.bottom.value.set(F.theme.fog)}for(const Se of F.boxes){const he=Se.kind==="ground"?"soil":"rock",Ie=Se.kind==="ground"?F.theme.ground:F.theme.groundSide,Je=fg(Ie,he,Se.hx*2,Se.hz*2,.97),At=new ge(new xt(Se.hx*2,Se.hy*2,Se.hz*2),Je);if(At.position.set(Se.cx,Se.cy,Se.cz),$.add(At),Se.kind==="ground"){const Xi=fg(F.theme.accent,"grass",Se.hx*2,Se.hz*2,.92),di=new ge(new xt(Se.hx*2,.12,Se.hz*2),Xi);di.position.set(Se.cx,Se.cy+Se.hy,Se.cz),$.add(di)}}_.current=F.crates.map(Se=>{const he=EA(Se.type);return he.position.set(Se.x,Se.y,Se.z),$.add(he),he}),x.current=F.enemies.map(Se=>{const he=wA(Se.type);return he.position.set(Se.x,Se.y,Se.z),$.add(he),he});const Te=new wt(.26,12,10),Wt=new ct({color:16096779,roughness:.4,emissive:8145410,metalness:.2});if(p.current=F.fruits.map(Se=>{const he=new ge(Te,Wt);return he.position.set(Se.x,Se.y,Se.z),$.add(he),he}),u.current=F.masks.map(Se=>{const he=TA();return he.position.set(Se.x,Se.y,Se.z),$.add(he),he}),F.boss)m.current=null;else{const Se=new Yn,he=new ge(new zc(1.1,.16,12,28),new ct({color:F.theme.accent,emissive:6702080}));he.position.y=1.3,Se.add(he);const Ie=new ge(new Oc(.9,.9,6,16,1,!0),new ga({color:F.theme.accent,transparent:!0,opacity:.16,side:_i}));Ie.position.y=3,Se.add(Ie),Se.position.set(F.goal.x,0,F.goal.z),$.add(Se),m.current=Se}const gt=yA(C.current);$.add(gt),f.current=gt;const Ze=new ge(new fh(.45,16),new ga({color:0,transparent:!0,opacity:.28}));if(Ze.rotation.x=-Math.PI/2,$.add(Ze),d.current=Ze,F.boss){const Se=AA();$.add(Se),h.current=Se}else h.current=null;$.traverse(Se=>{const he=Se;if(!he.isMesh)return;const Ie=he.material,Je=Array.isArray(Ie)?Ie.some(At=>At.transparent):Ie==null?void 0:Ie.transparent;he.receiveShadow=!0,he.castShadow=!Je}),be.add($),c.current=$},Kt=F=>{const $=[];for(const Te of F.boxes)$.push({minx:Te.cx-Te.hx,maxx:Te.cx+Te.hx,miny:Te.cy-Te.hy,maxy:Te.cy+Te.hy,minz:Te.cz-Te.hz,maxz:Te.cz+Te.hz});for(const Te of F.crates)Te.dead||$.push({minx:Te.x-.5,maxx:Te.x+.5,miny:Te.y-.5,maxy:Te.y+.5,minz:Te.z-.5,maxz:Te.z+.5,crate:Te});return $},Zn=(F,$)=>F.x-xl<$.maxx&&F.x+xl>$.minx&&F.y-ln<$.maxy&&F.y+ln>$.miny&&F.z-yl<$.maxz&&F.z+yl>$.minz,xo=()=>{const F=S.current,$=A.current,Te=le.current;F.invuln>0&&F.invuln--,F.spin>0&&F.spin--,F.spinCd>0&&F.spinCd--,F.coyote>0&&F.coyote--,F.jumpBuf>0&&F.jumpBuf--,B.current>0&&(B.current--,(B.current%6===0||B.current===0)&&Ve(B.current)),Te.camL&&(Q.current+=.035),Te.camR&&(Q.current-=.035);const Wt=Q.current,gt=Math.sin(Wt),Ze=Math.cos(Wt),Se=-Math.cos(Wt),he=Math.sin(Wt);let Ie=0,Je=0;Te.fwd&&(Ie+=gt,Je+=Ze),Te.back&&(Ie-=gt,Je-=Ze),Te.right&&(Ie+=Se,Je+=he),Te.left&&(Ie-=Se,Je-=he);const At=Math.hypot(Ie,Je);At>0&&(Ie/=At,Je/=At);const Xi=Ie*tg,di=Je*tg;if(At>0){let ue=Math.atan2(Ie,Je)-F.yaw;for(;ue>Math.PI;)ue-=Math.PI*2;for(;ue<-Math.PI;)ue+=Math.PI*2;F.yaw+=ue*.3}Te.spinPressed&&(Te.spinPressed=!1,F.spinCd<=0&&F.spin<=0&&(F.spin=Zu,F.spinCd=Zu+lA,Xe.spin())),Te.jumpPressed&&(F.jumpBuf=6,Te.jumpPressed=!1),F.jumpBuf>0&&(F.onGround||F.coyote>0)&&(F.vy=Ji,F.onGround=!1,F.coyote=0,F.jumpBuf=0,Xe.jump()),!Te.jump&&F.vy>Ji*ng&&(F.vy=Ji*ng);const cs=Kt($),hv=F.onGround;F.x+=Xi;for(const ue of cs)Zn(F,ue)&&(Xi>0?F.x=ue.minx-xl:Xi<0&&(F.x=ue.maxx+xl));F.z+=di;for(const ue of cs)Zn(F,ue)&&(di>0?F.z=ue.minz-yl:di<0&&(F.z=ue.maxz+yl));F.vy-=Ku,F.vy<-.55&&(F.vy=-.55),F.y+=F.vy,F.onGround=!1;let Ei=null;for(const ue of cs)Zn(F,ue)&&(F.vy<=0?(F.y=ue.maxy+ln,F.vy=0,F.onGround=!0,ue.crate&&(Ei=ue.crate)):(F.y=ue.miny-ln,F.vy=0));if(hv&&!F.onGround&&F.vy<=0&&(F.coyote=6),Ei&&!Ei.dead&&(Ei.type==="bounce"?(F.vy=Ji*1.5,F.onGround=!1,Xe.jump()):Ei.type==="tnt"?(Ei.fuse==null&&(Ei.fuse=cA,Xe.breakC()),F.vy=Ji*.7,F.onGround=!1):Ei.type==="iron"||(E(Ei),F.vy=Ji*.7,F.onGround=!1)),F.spin>0){for(const ue of $.crates)ue.dead||ue.type==="iron"||ue.type==="tnt"||Math.hypot(ue.x-F.x,ue.z-F.z)<ig&&Math.abs(ue.y-F.y)<1.4&&E(ue);for(const ue of $.enemies)ue.dead||Math.hypot(ue.x-F.x,ue.z-F.z)<ig&&Math.abs(ue.y-F.y)<1.4&&G(ue)}for(const ue of $.crates)ue.dead||ue.fuse==null||(ue.fuse--,ue.fuse<=0&&U(ue));for(const ue of $.enemies){if(ue.dead)continue;const ph=ue.speed*ue.dir;if(ue.axis==="z"?(ue.z+=ph,ue.z<ue.min&&(ue.z=ue.min,ue.dir=1),ue.z>ue.max&&(ue.z=ue.max,ue.dir=-1)):(ue.x+=ph,ue.x<ue.min&&(ue.x=ue.min,ue.dir=1),ue.x>ue.max&&(ue.x=ue.max,ue.dir=-1)),Math.hypot(ue.x-F.x,ue.z-F.z)<.7&&Math.abs(ue.y-F.y)<1.1){const pv=F.vy<=0&&F.y-ln>ue.y+.1;F.spin>0||B.current>0?G(ue):pv?(G(ue),F.vy=Ji*.8,F.onGround=!1):W()}}for(const ue of $.fruits)ue.taken||Math.hypot(ue.x-F.x,ue.z-F.z)<.8&&Math.abs(ue.y-F.y)<1.1&&(ue.taken=!0,Ra());for(const ue of $.masks)ue.taken||Math.hypot(ue.x-F.x,ue.z-F.z)<.9&&Math.abs(ue.y-F.y)<1.4&&(ue.taken=!0,O.current?(B.current=360,Ve(360)):(O.current=!0,re(!0)),Xe.power());$.boss&&b.current&&yn($),F.y<-6&&k(),!$.boss&&Math.hypot(F.x-$.goal.x,F.z-$.goal.z)<1.6&&y.current==="playing"&&Me()},yn=F=>{var Wt,gt;const $=b.current,Te=S.current;if($.invuln>0&&$.invuln--,$.vy-=Ku*.8,$.y+=$.vy,$.y<ln&&($.y=ln,$.vy=0),$.hopT--,$.hopT<=0&&$.y<=ln+.01&&($.vy=.16,$.hopT=140-($.maxHp-$.hp)*14),$.z+=Oo(Te.z-$.z,-.04,.04),$.x+=Oo(F.length-3-$.x,-.02,.02),$.t--,$.t<=0){const Ze=Te.x-$.x,Se=Te.z-$.z,he=Math.hypot(Ze,Se)||1,Ie=.11+($.maxHp-$.hp)*.012,Je=new ct({color:2042167}),At=new ge(new wt(.32,10,8),Je);(Wt=c.current)==null||Wt.add(At),Y.current.push({x:$.x,y:$.y+.6,z:$.z,vx:Ze/he*Ie,vy:.18,vz:Se/he*Ie,mesh:At}),$.t=Math.max(70,135-($.maxHp-$.hp)*10),Xe.breakC()}if(Y.current=Y.current.filter(Ze=>{Ze.vy-=Ku*.7,Ze.x+=Ze.vx,Ze.y+=Ze.vy,Ze.z+=Ze.vz,Ze.mesh.position.set(Ze.x,Ze.y,Ze.z);const Se=()=>{var he,Ie,Je;(he=c.current)==null||he.remove(Ze.mesh),(Je=(Ie=Ze.mesh.material).dispose)==null||Je.call(Ie),Ze.mesh.geometry.dispose()};return Math.hypot(Ze.x-Te.x,Ze.z-Te.z)<.7&&Math.abs(Ze.y-Te.y)<1.1?(Xe.boom(),W(),Se(),!1):Ze.y<.2?(Se(),!1):!0}),Math.hypot($.x-Te.x,$.z-Te.z)<1.1&&Math.abs($.y-Te.y)<2.2&&$.invuln<=0)if(Te.vy<=0&&Te.y-ln>$.y+.6||Te.spin>0){if($.hp-=1,$.invuln=80,fe($.hp),Te.vy=Ji,Te.onGround=!1,Xe.stomp(),$.hp<=0){for(const Se of Y.current)(gt=c.current)==null||gt.remove(Se.mesh);Y.current=[],Me()}}else W()},Wi={v:0},Bc=()=>{const F=A.current,$=S.current;if(Wi.v+=.05,r.current&&s.current&&(r.current.position.set($.x+14,26,$.z+10),s.current.position.set($.x,0,$.z)),o.current&&o.current.position.copy(Re.position),a.current&&a.current.position.set(Re.position.x+150,230,Re.position.z+110),l.current){l.current.position.set(Re.position.x,0,Re.position.z);for(const he of l.current.children)he.position.x+=.03,he.position.x>130&&(he.position.x-=260)}for(let he=0;he<F.crates.length;he++){const Ie=_.current[he];Ie&&(Ie.visible=!F.crates[he].dead)}for(let he=0;he<F.enemies.length;he++){const Ie=F.enemies[he],Je=x.current[he];Je&&(Je.visible=!Ie.dead,Je.position.set(Ie.x,Ie.y+Math.abs(Math.sin(Wi.v*2))*.06,Ie.z),Je.rotation.y+=Ie.type==="spinner"?.2:.04)}for(let he=0;he<F.fruits.length;he++){const Ie=F.fruits[he],Je=p.current[he];Je&&(Je.visible=!Ie.taken,Je.rotation.y+=.06,Je.position.y=Ie.y+Math.sin(Wi.v*2+Ie.x)*.08)}for(let he=0;he<F.masks.length;he++){const Ie=F.masks[he],Je=u.current[he];Je&&(Je.visible=!Ie.taken,Je.rotation.y+=.03,Je.position.y=Ie.y+Math.sin(Wi.v*1.5)*.12)}m.current&&(m.current.rotation.y+=.01);const Te=f.current;if(Te){Te.position.set($.x,$.y,$.z),Te.rotation.y=$.yaw+($.spin>0?(Zu-$.spin)*.9:0);const he=$.invuln>0&&Math.floor($.invuln/4)%2===0;Te.visible=J.current==="third"&&!he}if(d.current&&d.current.position.set($.x,.04,$.z),b.current&&h.current){const he=b.current;h.current.position.set(he.x,he.y-ln,he.z),h.current.lookAt($.x,he.y,$.z);const Ie=he.invuln>0&&Math.floor(he.invuln/4)%2===0;h.current.visible=!Ie}const Wt=Q.current,gt=P.current,Ze=Math.sin(Wt),Se=Math.cos(Wt);if(J.current==="third"){const he=K.current,Ie=$.x-Ze*he,Je=$.z-Se*he,At=$.y+1+Oo(gt,-.4,1.3)*4.2;Re.position.lerp(new D(Ie,At,Je),.18),Re.lookAt($.x,$.y+.5,$.z)}else{const he=Oo(gt,-.7,.9);Re.position.set($.x+Ze*.12,$.y+.5,$.z+Se*.12),Re.lookAt($.x+Ze*4,$.y+.5+he*4,$.z+Se*4)}de.render(be,Re)};let ls=0;const hh=()=>{g.current&&A.current&&(vo(A.current),g.current=!1),y.current==="playing"&&!kt.current&&xo(),A.current&&c.current&&Bc(),ls=requestAnimationFrame(hh)};return ls=requestAnimationFrame(hh),()=>{cancelAnimationFrame(ls),window.removeEventListener("resize",Ge),at.removeEventListener("pointerdown",yt),at.removeEventListener("pointermove",fi),at.removeEventListener("pointerup",Mi),at.removeEventListener("pointercancel",Mi),at.removeEventListener("pointerleave",Mi)}},[Le]),Le==="menu")return j.jsx("div",{className:"app-shell menu-shell",children:j.jsxs("div",{className:"menu-panel",children:[j.jsx("p",{className:"eyebrow",children:"Premium Arcade · Aventura 3D"}),j.jsxs("h1",{children:["Aventura ",j.jsx("span",{className:"accent",children:"Locura"})]}),j.jsx("div",{className:"menu-bird",children:"🐶"}),j.jsxs("p",{className:"menu-copy",children:["¡Norberto ha encerrado a los animales de la isla! Kamyar y Martina, con la máscara mágica",j.jsx("strong",{children:" Javier"}),", corren en ",j.jsx("strong",{children:"3D"}),", giran y rompen cajas para detenerlo.",j.jsxs("strong",{children:[" ",Ml," niveles"]})," y jefes."]}),j.jsxs("div",{className:"mode-row",children:[j.jsx("button",{type:"button",className:`mode-btn ${Ne==="third"?"selected":""}`,onClick:()=>Pe("third"),children:"🎥 3ª persona"}),j.jsx("button",{type:"button",className:`mode-btn ${Ne==="first"?"selected":""}`,onClick:()=>Pe("first"),children:"👁️ 1ª persona"})]}),j.jsx("p",{className:"eyebrow",style:{marginBottom:6},children:"🔍 Tamaño de cámara · arrastra con el ratón para mirar"}),j.jsx("div",{className:"mode-row zoom-row",children:El.map(z=>j.jsx("button",{type:"button",className:`mode-btn ${we===z?"selected":""}`,onClick:()=>ht(z),children:ag[z]},z))}),j.jsx("div",{className:"char-row",children:Object.keys(Gn).map(z=>j.jsxs("button",{type:"button",className:`char-card ${te===z?"selected":""}`,onClick:()=>ve(z),style:{"--cfur":`#${Gn[z].fur.toString(16).padStart(6,"0")}`},children:[j.jsx("span",{className:"char-face",style:{background:`#${Gn[z].fur.toString(16).padStart(6,"0")}`},children:j.jsx("span",{className:"char-belly",style:{background:`#${Gn[z].belly.toString(16).padStart(6,"0")}`}})}),j.jsxs("span",{className:"char-name",children:[Gn[z].emoji," ",Gn[z].name]})]},z))}),j.jsx("div",{className:"players",children:nt.length>0?nt.map(z=>j.jsxs("div",{className:`player-chip ${ft===z?"selected":""}`,children:[j.jsxs("button",{type:"button",className:"player-chip-main",onClick:()=>N(z),children:[j.jsx("span",{className:"avatar",children:z.charAt(0).toUpperCase()}),j.jsx("span",{className:"player-name",children:z}),j.jsxs("span",{className:"chip-best",children:["🏆 ",qe[z]||0," · 🗺️ ",Ae[z]||1]})]}),j.jsx("button",{type:"button",className:"player-chip-remove","aria-label":`Quitar ${z}`,onClick:()=>wa(z),children:"×"})]},z)):j.jsx("p",{className:"empty",children:"Aún no hay jugadores — añade uno abajo."})}),j.jsxs("div",{className:"add-row",children:[j.jsx("input",{value:ce,onChange:z=>xe(z.target.value),onKeyDown:z=>z.key==="Enter"&&bn(),type:"text",maxLength:16,placeholder:"Añade un nombre"}),j.jsx("button",{className:"add-button",onClick:bn,disabled:!ce.trim(),children:"+ Añadir"})]}),j.jsx("button",{className:"button-primary button-full",onClick:()=>Vi(1),disabled:!ft,children:"▶ Empezar aventura"}),ft&&pt>1&&j.jsxs("button",{className:"button-secondary button-full",style:{marginTop:8},onClick:()=>Vi(pt),children:["⏩ Continuar (Nivel ",pt,")"]}),ft&&j.jsxs("p",{className:"best-line",children:["Juegas como ",j.jsx("strong",{children:ft})," con ",j.jsx("strong",{children:Gn[te].name})," · cámara ",j.jsxs("strong",{children:[Ne==="third"?"3ª":"1ª"," persona"]})," · 🏆 ",qe[ft]||0]})]})});const ye=(z,de)=>()=>{const be=le.current;z==="jump"?(de&&!be.jump&&(be.jumpPressed=!0),be.jump=de):be[z]=de},Oe=()=>{le.current.spinPressed=!0},He=()=>{Cr(T.current+1,!1),y.current="playing",H("playing")},Qe=()=>{X.current=Ns,et(Ns),O.current=!1,re(!1),B.current=0,Ve(0),Cr(T.current,!1),y.current="playing",H("playing")};return j.jsxs("div",{className:"app-shell",children:[j.jsxs("header",{className:"game-bar",children:[j.jsxs("span",{className:"player-tag",children:[Gn[te].emoji," ",ae]}),j.jsxs("div",{style:{display:"flex",gap:8},children:[j.jsx("button",{className:"icon-button",onClick:Aa,"aria-label":"Cámara",children:Ne==="third"?"🎥 3ª":"👁️ 1ª"}),j.jsxs("button",{className:"icon-button",onClick:kc,"aria-label":"Tamaño de cámara",children:["🔍 ",ag[we]]}),j.jsx("button",{className:"icon-button",onClick:()=>It(z=>!z),"aria-label":"Sonido",children:oe?"🔇":"🔊"}),j.jsx("button",{className:"stop-button",onClick:br,children:"■ Salir"})]})]}),j.jsxs("div",{className:"score-strip four",children:[j.jsxs("div",{className:"score-chip",children:[j.jsx("span",{children:"Nivel"}),j.jsxs("strong",{children:[M,"/",Ml]})]}),j.jsxs("div",{className:"score-chip",children:[j.jsx("span",{children:"Puntos"}),j.jsx("strong",{children:We})]}),j.jsxs("div",{className:"score-chip",children:[j.jsx("span",{children:"Vidas"}),j.jsx("strong",{children:Gn[te].emoji.repeat(Math.max(0,Math.min(ze,5)))||"—"})]}),j.jsxs("div",{className:"score-chip",children:[j.jsx("span",{children:ie>0||Z?"Javier":"Frutas"}),j.jsx("strong",{children:ie>0?"✨":Z?"🛡️":`${Pt}/100`})]})]}),j.jsx("div",{className:"board-stage",children:j.jsxs("div",{className:"board-frame",children:[j.jsx("div",{ref:t,className:"game-3d"}),me>0&&Le==="playing"&&j.jsxs("div",{className:"boss-bar",children:[j.jsx("span",{children:"Norberto"}),j.jsx("div",{className:"boss-bar-track",children:j.jsx("div",{className:"boss-bar-fill",style:{width:`${ke/me*100}%`}})})]}),Le==="playing"&&Be&&j.jsx("div",{className:"overlay",children:j.jsxs("div",{className:"overlay-card",children:[j.jsx("p",{className:"overlay-eyebrow",children:"¡Jefe! · Guarida de Norberto"}),j.jsx("h2",{children:"Cómo vencerlo 🐶"}),j.jsxs("ul",{className:"boss-tips",children:[j.jsxs("li",{children:["🦘 ",j.jsx("strong",{children:"Salta sobre su cabeza"})," (Espacio / ⤒) ",j.jsx("em",{children:"o"})," ",j.jsx("strong",{children:"gírale al lado"})," (J · X · ⟳)."]}),j.jsxs("li",{children:["💥 Cuando ",j.jsx("strong",{children:"parpadea"})," es invulnerable — espera a que pare y vuelve a pegarle."]}),j.jsxs("li",{children:["⚫ Esquiva sus ",j.jsx("strong",{children:"bombas"})," moviéndote de lado (← →)."]}),j.jsxs("li",{children:["🎭 Coge a ",j.jsx("strong",{children:"Javier"})," (el centro) para un escudo."]}),j.jsxs("li",{children:["❤️ Le bastan ",j.jsxs("strong",{children:[me," golpe",me===1?"":"s"]}),"."]})]}),j.jsx("div",{className:"overlay-actions",children:j.jsx("button",{className:"button-primary",onClick:()=>I(!1),children:"▶ ¡A por él!"})})]})}),Le==="clear"&&j.jsx("div",{className:"overlay",children:j.jsxs("div",{className:"overlay-card",children:[j.jsx("p",{className:"overlay-eyebrow",children:"Nivel superado"}),j.jsx("h2",{children:"¡Bien hecho! 🎉"}),j.jsxs("div",{className:"overlay-score",children:[j.jsxs("div",{children:[j.jsx("span",{children:"Puntos"}),j.jsx("strong",{children:We})]}),j.jsxs("div",{children:[j.jsx("span",{children:"Siguiente"}),j.jsx("strong",{children:M+1})]})]}),j.jsxs("div",{className:"overlay-actions",children:[j.jsx("button",{className:"button-primary",onClick:He,children:"▶ Siguiente nivel"}),j.jsx("button",{className:"button-secondary",onClick:br,children:"‹ Menú"})]})]})}),Le==="dead"&&j.jsx("div",{className:"overlay",children:j.jsxs("div",{className:"overlay-card",children:[j.jsx("p",{className:"overlay-eyebrow",children:"Fin de la partida"}),j.jsx("h2",{children:"¡Norberto gana esta vez!"}),j.jsxs("div",{className:"overlay-score",children:[j.jsxs("div",{children:[j.jsx("span",{children:"Puntos"}),j.jsx("strong",{children:We})]}),j.jsxs("div",{children:[j.jsx("span",{children:"Récord"}),j.jsx("strong",{children:Math.max(ot,We)})]})]}),j.jsxs("div",{className:"overlay-actions",children:[j.jsxs("button",{className:"button-primary",onClick:Qe,children:["↻ Reintentar nivel ",M]}),j.jsx("button",{className:"button-secondary",onClick:br,children:"‹ Menú"})]})]})}),Le==="victory"&&j.jsx("div",{className:"overlay",children:j.jsxs("div",{className:"overlay-card",children:[j.jsx("p",{className:"overlay-eyebrow",children:"¡Aventura completada!"}),j.jsx("h2",{children:"🏆 ¡Has vencido a Norberto!"}),j.jsxs("p",{className:"menu-copy",style:{color:"#475569",margin:"0 0 14px"},children:["Los animales de la isla son libres. ¡",Gn[te].name," y Javier son héroes!"]}),j.jsx("div",{className:"overlay-score",children:j.jsxs("div",{children:[j.jsx("span",{children:"Puntos finales"}),j.jsx("strong",{children:We})]})}),j.jsxs("div",{className:"overlay-actions",children:[j.jsx("button",{className:"button-primary",onClick:()=>Vi(1),children:"↻ Jugar otra vez"}),j.jsx("button",{className:"button-secondary",onClick:br,children:"‹ Menú"})]})]})})]})}),j.jsxs("div",{className:"controls six",children:[j.jsx("button",{className:"ctrl-btn","aria-label":"Girar izquierda",onPointerDown:ye("left",!0),onPointerUp:ye("left",!1),onPointerLeave:ye("left",!1),onPointerCancel:ye("left",!1),children:"↺"}),j.jsx("button",{className:"ctrl-btn","aria-label":"Avanzar",onPointerDown:ye("fwd",!0),onPointerUp:ye("fwd",!1),onPointerLeave:ye("fwd",!1),onPointerCancel:ye("fwd",!1),children:"▲"}),j.jsx("button",{className:"ctrl-btn","aria-label":"Girar derecha",onPointerDown:ye("right",!0),onPointerUp:ye("right",!1),onPointerLeave:ye("right",!1),onPointerCancel:ye("right",!1),children:"↻"}),j.jsx("button",{className:"ctrl-btn jump","aria-label":"Saltar",onPointerDown:ye("jump",!0),onPointerUp:ye("jump",!1),onPointerLeave:ye("jump",!1),onPointerCancel:ye("jump",!1),children:"⤒"}),j.jsx("button",{className:"ctrl-btn spin","aria-label":"Girar ataque",onPointerDown:Oe,children:"⟳"})]}),j.jsx("p",{className:"hint",children:"← → girar · ↑ avanzar (↓ atrás) · Espacio saltar · J/X giro-ataque · C cambia cámara · 🖱️ arrastra para mover la cámara · 🔍 zoom"})]})}nf.createRoot(document.getElementById("root")).render(j.jsx(Lv.StrictMode,{children:j.jsx(RA,{})}));
