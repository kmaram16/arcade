(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function X_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jp={exports:{}},gl={},Yp={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo=Symbol.for("react.element"),j_=Symbol.for("react.portal"),Y_=Symbol.for("react.fragment"),q_=Symbol.for("react.strict_mode"),$_=Symbol.for("react.profiler"),K_=Symbol.for("react.provider"),Z_=Symbol.for("react.context"),Q_=Symbol.for("react.forward_ref"),J_=Symbol.for("react.suspense"),ev=Symbol.for("react.memo"),tv=Symbol.for("react.lazy"),od=Symbol.iterator;function nv(t){return t===null||typeof t!="object"?null:(t=od&&t[od]||t["@@iterator"],typeof t=="function"?t:null)}var qp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$p=Object.assign,Kp={};function Ps(t,e,n){this.props=t,this.context=e,this.refs=Kp,this.updater=n||qp}Ps.prototype.isReactComponent={};Ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zp(){}Zp.prototype=Ps.prototype;function Qc(t,e,n){this.props=t,this.context=e,this.refs=Kp,this.updater=n||qp}var Jc=Qc.prototype=new Zp;Jc.constructor=Qc;$p(Jc,Ps.prototype);Jc.isPureReactComponent=!0;var ad=Array.isArray,Qp=Object.prototype.hasOwnProperty,ef={current:null},Jp={key:!0,ref:!0,__self:!0,__source:!0};function em(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Qp.call(e,i)&&!Jp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Lo,type:t,key:s,ref:o,props:r,_owner:ef.current}}function iv(t,e){return{$$typeof:Lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Lo}function rv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ld=/\/+/g;function Bl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rv(""+t.key):e.toString(36)}function Aa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Lo:case j_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Bl(o,0):i,ad(r)?(n="",t!=null&&(n=t.replace(ld,"$&/")+"/"),Aa(r,e,n,"",function(u){return u})):r!=null&&(tf(r)&&(r=iv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ld,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ad(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Bl(s,a);o+=Aa(s,e,n,l,r)}else if(l=nv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Bl(s,a++),o+=Aa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Go(t,e,n){if(t==null)return t;var i=[],r=0;return Aa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function sv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Ra={transition:null},ov={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Ra,ReactCurrentOwner:ef};function tm(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Go,forEach:function(t,e,n){Go(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Go(t,function(){e++}),e},toArray:function(t){return Go(t,function(e){return e})||[]},only:function(t){if(!tf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Ps;Ye.Fragment=Y_;Ye.Profiler=$_;Ye.PureComponent=Qc;Ye.StrictMode=q_;Ye.Suspense=J_;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ov;Ye.act=tm;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=$p({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ef.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Qp.call(e,l)&&!Jp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Lo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:Z_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:K_,_context:t},t.Consumer=t};Ye.createElement=em;Ye.createFactory=function(t){var e=em.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:Q_,render:t}};Ye.isValidElement=tf;Ye.lazy=function(t){return{$$typeof:tv,_payload:{_status:-1,_result:t},_init:sv}};Ye.memo=function(t,e){return{$$typeof:ev,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=Ra.transition;Ra.transition={};try{t()}finally{Ra.transition=e}};Ye.unstable_act=tm;Ye.useCallback=function(t,e){return qt.current.useCallback(t,e)};Ye.useContext=function(t){return qt.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return qt.current.useEffect(t,e)};Ye.useId=function(){return qt.current.useId()};Ye.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return qt.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};Ye.useRef=function(t){return qt.current.useRef(t)};Ye.useState=function(t){return qt.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return qt.current.useTransition()};Ye.version="18.3.1";Yp.exports=Ye;var Ke=Yp.exports;const av=X_(Ke);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv=Ke,uv=Symbol.for("react.element"),cv=Symbol.for("react.fragment"),fv=Object.prototype.hasOwnProperty,dv=lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hv={key:!0,ref:!0,__self:!0,__source:!0};function nm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)fv.call(e,i)&&!hv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:uv,type:t,key:s,ref:o,props:r,_owner:dv.current}}gl.Fragment=cv;gl.jsx=nm;gl.jsxs=nm;jp.exports=gl;var fe=jp.exports,$u={},im={exports:{}},vn={},rm={exports:{}},sm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,O){var H=D.length;D.push(O);e:for(;0<H;){var J=H-1>>>1,le=D[J];if(0<r(le,O))D[J]=O,D[H]=le,H=J;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var O=D[0],H=D.pop();if(H!==O){D[0]=H;e:for(var J=0,le=D.length,Pe=le>>>1;J<Pe;){var k=2*(J+1)-1,ee=D[k],se=k+1,Ae=D[se];if(0>r(ee,H))se<le&&0>r(Ae,ee)?(D[J]=Ae,D[se]=H,J=se):(D[J]=ee,D[k]=H,J=k);else if(se<le&&0>r(Ae,H))D[J]=Ae,D[se]=H,J=se;else break e}}return O}function r(D,O){var H=D.sortIndex-O.sortIndex;return H!==0?H:D.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,d=null,h=3,m=!1,v=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var O=n(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=D)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function M(D){if(x=!1,g(D),!v)if(n(l)!==null)v=!0,V(A);else{var O=n(u);O!==null&&Z(M,O.startTime-D)}}function A(D,O){v=!1,x&&(x=!1,c(L),L=-1),m=!0;var H=h;try{for(g(O),d=n(l);d!==null&&(!(d.expirationTime>O)||D&&!C());){var J=d.callback;if(typeof J=="function"){d.callback=null,h=d.priorityLevel;var le=J(d.expirationTime<=O);O=t.unstable_now(),typeof le=="function"?d.callback=le:d===n(l)&&i(l),g(O)}else i(l);d=n(l)}if(d!==null)var Pe=!0;else{var k=n(u);k!==null&&Z(M,k.startTime-O),Pe=!1}return Pe}finally{d=null,h=H,m=!1}}var w=!1,T=null,L=-1,X=5,y=-1;function C(){return!(t.unstable_now()-y<X)}function q(){if(T!==null){var D=t.unstable_now();y=D;var O=!0;try{O=T(!0,D)}finally{O?K():(w=!1,T=null)}}else w=!1}var K;if(typeof _=="function")K=function(){_(q)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,j=b.port2;b.port1.onmessage=q,K=function(){j.postMessage(null)}}else K=function(){p(q,0)};function V(D){T=D,w||(w=!0,K())}function Z(D,O){L=p(function(){D(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,V(A))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var H=h;h=O;try{return D()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,O){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var H=h;h=D;try{return O()}finally{h=H}},t.unstable_scheduleCallback=function(D,O,H){var J=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?J+H:J):H=J,D){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=H+le,D={id:f++,callback:O,priorityLevel:D,startTime:H,expirationTime:le,sortIndex:-1},H>J?(D.sortIndex=H,e(u,D),n(l)===null&&D===n(u)&&(x?(c(L),L=-1):x=!0,Z(M,H-J))):(D.sortIndex=le,e(l,D),v||m||(v=!0,V(A))),D},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(D){var O=h;return function(){var H=h;h=O;try{return D.apply(this,arguments)}finally{h=H}}}})(sm);rm.exports=sm;var pv=rm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv=Ke,_n=pv;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var om=new Set,fo={};function Pr(t,e){vs(t,e),vs(t+"Capture",e)}function vs(t,e){for(fo[t]=e,t=0;t<e.length;t++)om.add(e[t])}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ku=Object.prototype.hasOwnProperty,gv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ud={},cd={};function _v(t){return Ku.call(cd,t)?!0:Ku.call(ud,t)?!1:gv.test(t)?cd[t]=!0:(ud[t]=!0,!1)}function vv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xv(t,e,n,i){if(e===null||typeof e>"u"||vv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var nf=/[\-:]([a-z])/g;function rf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nf,rf);It[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nf,rf);It[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nf,rf);It[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function sf(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xv(e,n,r,i)&&(n=null),i||r===null?_v(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var _i=mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vo=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),of=Symbol.for("react.strict_mode"),Zu=Symbol.for("react.profiler"),am=Symbol.for("react.provider"),lm=Symbol.for("react.context"),af=Symbol.for("react.forward_ref"),Qu=Symbol.for("react.suspense"),Ju=Symbol.for("react.suspense_list"),lf=Symbol.for("react.memo"),Ai=Symbol.for("react.lazy"),um=Symbol.for("react.offscreen"),fd=Symbol.iterator;function Fs(t){return t===null||typeof t!="object"?null:(t=fd&&t[fd]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,Hl;function Qs(t){if(Hl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hl=e&&e[1]||""}return`
`+Hl+t}var Gl=!1;function Vl(t,e){if(!t||Gl)return"";Gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qs(t):""}function yv(t){switch(t.tag){case 5:return Qs(t.type);case 16:return Qs("Lazy");case 13:return Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 2:case 15:return t=Vl(t.type,!1),t;case 11:return t=Vl(t.type.render,!1),t;case 1:return t=Vl(t.type,!0),t;default:return""}}function ec(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kr:return"Fragment";case $r:return"Portal";case Zu:return"Profiler";case of:return"StrictMode";case Qu:return"Suspense";case Ju:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lm:return(t.displayName||"Context")+".Consumer";case am:return(t._context.displayName||"Context")+".Provider";case af:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lf:return e=t.displayName||null,e!==null?e:ec(t.type)||"Memo";case Ai:e=t._payload,t=t._init;try{return ec(t(e))}catch{}}return null}function Sv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ec(e);case 8:return e===of?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mv(t){var e=cm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wo(t){t._valueTracker||(t._valueTracker=Mv(t))}function fm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=cm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ka(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tc(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dm(t,e){e=e.checked,e!=null&&sf(t,"checked",e,!1)}function nc(t,e){dm(t,e);var n=Xi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ic(t,e.type,n):e.hasOwnProperty("defaultValue")&&ic(t,e.type,Xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ic(t,e,n){(e!=="number"||ka(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Js=Array.isArray;function cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function rc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Js(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xi(n)}}function hm(t,e){var n=Xi(e.value),i=Xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function md(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xo,mm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xo=Xo||document.createElement("div"),Xo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ev=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(t){Ev.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),no[e]=no[t]})});function gm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||no.hasOwnProperty(t)&&no[t]?(""+e).trim():e+"px"}function _m(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=gm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Tv=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oc(t,e){if(e){if(Tv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function ac(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lc=null;function uf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uc=null,fs=null,ds=null;function gd(t){if(t=No(t)){if(typeof uc!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Sl(e),uc(t.stateNode,t.type,e))}}function vm(t){fs?ds?ds.push(t):ds=[t]:fs=t}function xm(){if(fs){var t=fs,e=ds;if(ds=fs=null,gd(t),e)for(t=0;t<e.length;t++)gd(e[t])}}function ym(t,e){return t(e)}function Sm(){}var Wl=!1;function Mm(t,e,n){if(Wl)return t(e,n);Wl=!0;try{return ym(t,e,n)}finally{Wl=!1,(fs!==null||ds!==null)&&(Sm(),xm())}}function po(t,e){var n=t.stateNode;if(n===null)return null;var i=Sl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var cc=!1;if(hi)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){cc=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{cc=!1}function wv(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var io=!1,Ba=null,Ha=!1,fc=null,Av={onError:function(t){io=!0,Ba=t}};function Rv(t,e,n,i,r,s,o,a,l){io=!1,Ba=null,wv.apply(Av,arguments)}function Cv(t,e,n,i,r,s,o,a,l){if(Rv.apply(this,arguments),io){if(io){var u=Ba;io=!1,Ba=null}else throw Error(re(198));Ha||(Ha=!0,fc=u)}}function Lr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Em(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _d(t){if(Lr(t)!==t)throw Error(re(188))}function Pv(t){var e=t.alternate;if(!e){if(e=Lr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return _d(r),t;if(s===i)return _d(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Tm(t){return t=Pv(t),t!==null?wm(t):null}function wm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wm(t);if(e!==null)return e;t=t.sibling}return null}var Am=_n.unstable_scheduleCallback,vd=_n.unstable_cancelCallback,Lv=_n.unstable_shouldYield,bv=_n.unstable_requestPaint,yt=_n.unstable_now,Dv=_n.unstable_getCurrentPriorityLevel,cf=_n.unstable_ImmediatePriority,Rm=_n.unstable_UserBlockingPriority,Ga=_n.unstable_NormalPriority,Nv=_n.unstable_LowPriority,Cm=_n.unstable_IdlePriority,_l=null,$n=null;function Uv(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(_l,t,void 0,(t.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:Ov,Iv=Math.log,Fv=Math.LN2;function Ov(t){return t>>>=0,t===0?32:31-(Iv(t)/Fv|0)|0}var jo=64,Yo=4194304;function eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Va(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=eo(a):(s&=o,s!==0&&(i=eo(s)))}else o=n&~r,o!==0?i=eo(o):s!==0&&(i=eo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-kn(e),r=1<<n,i|=t[n],e&=~r;return i}function zv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=zv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function dc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pm(){var t=jo;return jo<<=1,!(jo&4194240)&&(jo=64),t}function Xl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kn(e),t[e]=n}function Bv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ff(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function Lm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bm,df,Dm,Nm,Um,hc=!1,qo=[],Ui=null,Ii=null,Fi=null,mo=new Map,go=new Map,Ci=[],Hv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xd(t,e){switch(t){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(e.pointerId)}}function zs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=No(e),e!==null&&df(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Gv(t,e,n,i,r){switch(e){case"focusin":return Ui=zs(Ui,t,e,n,i,r),!0;case"dragenter":return Ii=zs(Ii,t,e,n,i,r),!0;case"mouseover":return Fi=zs(Fi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return mo.set(s,zs(mo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,go.set(s,zs(go.get(s)||null,t,e,n,i,r)),!0}return!1}function Im(t){var e=pr(t.target);if(e!==null){var n=Lr(e);if(n!==null){if(e=n.tag,e===13){if(e=Em(n),e!==null){t.blockedOn=e,Um(t.priority,function(){Dm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ca(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);lc=i,n.target.dispatchEvent(i),lc=null}else return e=No(n),e!==null&&df(e),t.blockedOn=n,!1;e.shift()}return!0}function yd(t,e,n){Ca(t)&&n.delete(e)}function Vv(){hc=!1,Ui!==null&&Ca(Ui)&&(Ui=null),Ii!==null&&Ca(Ii)&&(Ii=null),Fi!==null&&Ca(Fi)&&(Fi=null),mo.forEach(yd),go.forEach(yd)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,hc||(hc=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,Vv)))}function _o(t){function e(r){return ks(r,t)}if(0<qo.length){ks(qo[0],t);for(var n=1;n<qo.length;n++){var i=qo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ui!==null&&ks(Ui,t),Ii!==null&&ks(Ii,t),Fi!==null&&ks(Fi,t),mo.forEach(e),go.forEach(e),n=0;n<Ci.length;n++)i=Ci[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ci.length&&(n=Ci[0],n.blockedOn===null);)Im(n),n.blockedOn===null&&Ci.shift()}var hs=_i.ReactCurrentBatchConfig,Wa=!0;function Wv(t,e,n,i){var r=tt,s=hs.transition;hs.transition=null;try{tt=1,hf(t,e,n,i)}finally{tt=r,hs.transition=s}}function Xv(t,e,n,i){var r=tt,s=hs.transition;hs.transition=null;try{tt=4,hf(t,e,n,i)}finally{tt=r,hs.transition=s}}function hf(t,e,n,i){if(Wa){var r=pc(t,e,n,i);if(r===null)tu(t,e,i,Xa,n),xd(t,i);else if(Gv(r,t,e,n,i))i.stopPropagation();else if(xd(t,i),e&4&&-1<Hv.indexOf(t)){for(;r!==null;){var s=No(r);if(s!==null&&bm(s),s=pc(t,e,n,i),s===null&&tu(t,e,i,Xa,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else tu(t,e,i,null,n)}}var Xa=null;function pc(t,e,n,i){if(Xa=null,t=uf(i),t=pr(t),t!==null)if(e=Lr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Em(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xa=t,null}function Fm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dv()){case cf:return 1;case Rm:return 4;case Ga:case Nv:return 16;case Cm:return 536870912;default:return 16}default:return 16}}var bi=null,pf=null,Pa=null;function Om(){if(Pa)return Pa;var t,e=pf,n=e.length,i,r="value"in bi?bi.value:bi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Pa=r.slice(t,1<i?1-i:void 0)}function La(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $o(){return!0}function Sd(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$o:Sd,this.isPropagationStopped=Sd,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),e}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mf=xn(Ls),Do=gt({},Ls,{view:0,detail:0}),jv=xn(Do),jl,Yl,Bs,vl=gt({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(jl=t.screenX-Bs.screenX,Yl=t.screenY-Bs.screenY):Yl=jl=0,Bs=t),jl)},movementY:function(t){return"movementY"in t?t.movementY:Yl}}),Md=xn(vl),Yv=gt({},vl,{dataTransfer:0}),qv=xn(Yv),$v=gt({},Do,{relatedTarget:0}),ql=xn($v),Kv=gt({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Zv=xn(Kv),Qv=gt({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jv=xn(Qv),e0=gt({},Ls,{data:0}),Ed=xn(e0),t0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=i0[t])?!!e[t]:!1}function gf(){return r0}var s0=gt({},Do,{key:function(t){if(t.key){var e=t0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=La(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?n0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gf,charCode:function(t){return t.type==="keypress"?La(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?La(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),o0=xn(s0),a0=gt({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=xn(a0),l0=gt({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gf}),u0=xn(l0),c0=gt({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),f0=xn(c0),d0=gt({},vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),h0=xn(d0),p0=[9,13,27,32],_f=hi&&"CompositionEvent"in window,ro=null;hi&&"documentMode"in document&&(ro=document.documentMode);var m0=hi&&"TextEvent"in window&&!ro,zm=hi&&(!_f||ro&&8<ro&&11>=ro),wd=" ",Ad=!1;function km(t,e){switch(t){case"keyup":return p0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function g0(t,e){switch(t){case"compositionend":return Bm(e);case"keypress":return e.which!==32?null:(Ad=!0,wd);case"textInput":return t=e.data,t===wd&&Ad?null:t;default:return null}}function _0(t,e){if(Zr)return t==="compositionend"||!_f&&km(t,e)?(t=Om(),Pa=pf=bi=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zm&&e.locale!=="ko"?null:e.data;default:return null}}var v0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!v0[t.type]:e==="textarea"}function Hm(t,e,n,i){vm(i),e=ja(e,"onChange"),0<e.length&&(n=new mf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var so=null,vo=null;function x0(t){Qm(t,0)}function xl(t){var e=es(t);if(fm(e))return t}function y0(t,e){if(t==="change")return e}var Gm=!1;if(hi){var $l;if(hi){var Kl="oninput"in document;if(!Kl){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),Kl=typeof Cd.oninput=="function"}$l=Kl}else $l=!1;Gm=$l&&(!document.documentMode||9<document.documentMode)}function Pd(){so&&(so.detachEvent("onpropertychange",Vm),vo=so=null)}function Vm(t){if(t.propertyName==="value"&&xl(vo)){var e=[];Hm(e,vo,t,uf(t)),Mm(x0,e)}}function S0(t,e,n){t==="focusin"?(Pd(),so=e,vo=n,so.attachEvent("onpropertychange",Vm)):t==="focusout"&&Pd()}function M0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(vo)}function E0(t,e){if(t==="click")return xl(e)}function T0(t,e){if(t==="input"||t==="change")return xl(e)}function w0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:w0;function xo(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ku.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function Ld(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bd(t,e){var n=Ld(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ld(n)}}function Wm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Wm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xm(){for(var t=window,e=ka();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ka(t.document)}return e}function vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function A0(t){var e=Xm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Wm(n.ownerDocument.documentElement,n)){if(i!==null&&vf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=bd(n,s);var o=bd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var R0=hi&&"documentMode"in document&&11>=document.documentMode,Qr=null,mc=null,oo=null,gc=!1;function Dd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gc||Qr==null||Qr!==ka(i)||(i=Qr,"selectionStart"in i&&vf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),oo&&xo(oo,i)||(oo=i,i=ja(mc,"onSelect"),0<i.length&&(e=new mf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Qr)))}function Ko(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jr={animationend:Ko("Animation","AnimationEnd"),animationiteration:Ko("Animation","AnimationIteration"),animationstart:Ko("Animation","AnimationStart"),transitionend:Ko("Transition","TransitionEnd")},Zl={},jm={};hi&&(jm=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function yl(t){if(Zl[t])return Zl[t];if(!Jr[t])return t;var e=Jr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jm)return Zl[t]=e[n];return t}var Ym=yl("animationend"),qm=yl("animationiteration"),$m=yl("animationstart"),Km=yl("transitionend"),Zm=new Map,Nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,e){Zm.set(t,e),Pr(e,[t])}for(var Ql=0;Ql<Nd.length;Ql++){var Jl=Nd[Ql],C0=Jl.toLowerCase(),P0=Jl[0].toUpperCase()+Jl.slice(1);$i(C0,"on"+P0)}$i(Ym,"onAnimationEnd");$i(qm,"onAnimationIteration");$i($m,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(Km,"onTransitionEnd");vs("onMouseEnter",["mouseout","mouseover"]);vs("onMouseLeave",["mouseout","mouseover"]);vs("onPointerEnter",["pointerout","pointerover"]);vs("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L0=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Ud(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Cv(i,e,void 0,t),t.currentTarget=null}function Qm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ud(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ud(r,a,u),s=l}}}if(Ha)throw t=fc,Ha=!1,fc=null,t}function st(t,e){var n=e[Sc];n===void 0&&(n=e[Sc]=new Set);var i=t+"__bubble";n.has(i)||(Jm(e,t,2,!1),n.add(i))}function eu(t,e,n){var i=0;e&&(i|=4),Jm(n,t,i,e)}var Zo="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[Zo]){t[Zo]=!0,om.forEach(function(n){n!=="selectionchange"&&(L0.has(n)||eu(n,!1,t),eu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zo]||(e[Zo]=!0,eu("selectionchange",!1,e))}}function Jm(t,e,n,i){switch(Fm(e)){case 1:var r=Wv;break;case 4:r=Xv;break;default:r=hf}n=r.bind(null,e,n,t),r=void 0,!cc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function tu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=pr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Mm(function(){var u=s,f=uf(n),d=[];e:{var h=Zm.get(t);if(h!==void 0){var m=mf,v=t;switch(t){case"keypress":if(La(n)===0)break e;case"keydown":case"keyup":m=o0;break;case"focusin":v="focus",m=ql;break;case"focusout":v="blur",m=ql;break;case"beforeblur":case"afterblur":m=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=u0;break;case Ym:case qm:case $m:m=Zv;break;case Km:m=f0;break;case"scroll":m=jv;break;case"wheel":m=h0;break;case"copy":case"cut":case"paste":m=Jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Td}var x=(e&4)!==0,p=!x&&t==="scroll",c=x?h!==null?h+"Capture":null:h;x=[];for(var _=u,g;_!==null;){g=_;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,c!==null&&(M=po(_,c),M!=null&&x.push(So(_,M,g)))),p)break;_=_.return}0<x.length&&(h=new m(h,v,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==lc&&(v=n.relatedTarget||n.fromElement)&&(pr(v)||v[pi]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?pr(v):null,v!==null&&(p=Lr(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(x=Md,M="onMouseLeave",c="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Td,M="onPointerLeave",c="onPointerEnter",_="pointer"),p=m==null?h:es(m),g=v==null?h:es(v),h=new x(M,_+"leave",m,n,f),h.target=p,h.relatedTarget=g,M=null,pr(f)===u&&(x=new x(c,_+"enter",v,n,f),x.target=g,x.relatedTarget=p,M=x),p=M,m&&v)t:{for(x=m,c=v,_=0,g=x;g;g=br(g))_++;for(g=0,M=c;M;M=br(M))g++;for(;0<_-g;)x=br(x),_--;for(;0<g-_;)c=br(c),g--;for(;_--;){if(x===c||c!==null&&x===c.alternate)break t;x=br(x),c=br(c)}x=null}else x=null;m!==null&&Id(d,h,m,x,!1),v!==null&&p!==null&&Id(d,p,v,x,!0)}}e:{if(h=u?es(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var A=y0;else if(Rd(h))if(Gm)A=T0;else{A=M0;var w=S0}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=E0);if(A&&(A=A(t,u))){Hm(d,A,n,f);break e}w&&w(t,h,u),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&ic(h,"number",h.value)}switch(w=u?es(u):window,t){case"focusin":(Rd(w)||w.contentEditable==="true")&&(Qr=w,mc=u,oo=null);break;case"focusout":oo=mc=Qr=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,Dd(d,n,f);break;case"selectionchange":if(R0)break;case"keydown":case"keyup":Dd(d,n,f)}var T;if(_f)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Zr?km(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(zm&&n.locale!=="ko"&&(Zr||L!=="onCompositionStart"?L==="onCompositionEnd"&&Zr&&(T=Om()):(bi=f,pf="value"in bi?bi.value:bi.textContent,Zr=!0)),w=ja(u,L),0<w.length&&(L=new Ed(L,t,null,n,f),d.push({event:L,listeners:w}),T?L.data=T:(T=Bm(n),T!==null&&(L.data=T)))),(T=m0?g0(t,n):_0(t,n))&&(u=ja(u,"onBeforeInput"),0<u.length&&(f=new Ed("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=T))}Qm(d,e)})}function So(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ja(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=po(t,n),s!=null&&i.unshift(So(t,s,r)),s=po(t,e),s!=null&&i.push(So(t,s,r))),t=t.return}return i}function br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Id(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=po(n,s),l!=null&&o.unshift(So(n,l,a))):r||(l=po(n,s),l!=null&&o.push(So(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var b0=/\r\n?/g,D0=/\u0000|\uFFFD/g;function Fd(t){return(typeof t=="string"?t:""+t).replace(b0,`
`).replace(D0,"")}function Qo(t,e,n){if(e=Fd(e),Fd(t)!==e&&n)throw Error(re(425))}function Ya(){}var _c=null,vc=null;function xc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yc=typeof setTimeout=="function"?setTimeout:void 0,N0=typeof clearTimeout=="function"?clearTimeout:void 0,Od=typeof Promise=="function"?Promise:void 0,U0=typeof queueMicrotask=="function"?queueMicrotask:typeof Od<"u"?function(t){return Od.resolve(null).then(t).catch(I0)}:yc;function I0(t){setTimeout(function(){throw t})}function nu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),_o(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);_o(e)}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bs=Math.random().toString(36).slice(2),jn="__reactFiber$"+bs,Mo="__reactProps$"+bs,pi="__reactContainer$"+bs,Sc="__reactEvents$"+bs,F0="__reactListeners$"+bs,O0="__reactHandles$"+bs;function pr(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zd(t);t!==null;){if(n=t[jn])return n;t=zd(t)}return e}t=n,n=t.parentNode}return null}function No(t){return t=t[jn]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Sl(t){return t[Mo]||null}var Mc=[],ts=-1;function Ki(t){return{current:t}}function lt(t){0>ts||(t.current=Mc[ts],Mc[ts]=null,ts--)}function rt(t,e){ts++,Mc[ts]=t.current,t.current=e}var ji={},Gt=Ki(ji),tn=Ki(!1),Er=ji;function xs(t,e){var n=t.type.contextTypes;if(!n)return ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function qa(){lt(tn),lt(Gt)}function kd(t,e,n){if(Gt.current!==ji)throw Error(re(168));rt(Gt,e),rt(tn,n)}function eg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,Sv(t)||"Unknown",r));return gt({},n,i)}function $a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ji,Er=Gt.current,rt(Gt,t),rt(tn,tn.current),!0}function Bd(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=eg(t,e,Er),i.__reactInternalMemoizedMergedChildContext=t,lt(tn),lt(Gt),rt(Gt,t)):lt(tn),rt(tn,n)}var ai=null,Ml=!1,iu=!1;function tg(t){ai===null?ai=[t]:ai.push(t)}function z0(t){Ml=!0,tg(t)}function Zi(){if(!iu&&ai!==null){iu=!0;var t=0,e=tt;try{var n=ai;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ai=null,Ml=!1}catch(r){throw ai!==null&&(ai=ai.slice(t+1)),Am(cf,Zi),r}finally{tt=e,iu=!1}}return null}var ns=[],is=0,Ka=null,Za=0,Mn=[],En=0,Tr=null,ui=1,ci="";function lr(t,e){ns[is++]=Za,ns[is++]=Ka,Ka=t,Za=e}function ng(t,e,n){Mn[En++]=ui,Mn[En++]=ci,Mn[En++]=Tr,Tr=t;var i=ui;t=ci;var r=32-kn(i)-1;i&=~(1<<r),n+=1;var s=32-kn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ui=1<<32-kn(e)+r|n<<r|i,ci=s+t}else ui=1<<s|n<<r|i,ci=t}function xf(t){t.return!==null&&(lr(t,1),ng(t,1,0))}function yf(t){for(;t===Ka;)Ka=ns[--is],ns[is]=null,Za=ns[--is],ns[is]=null;for(;t===Tr;)Tr=Mn[--En],Mn[En]=null,ci=Mn[--En],Mn[En]=null,ui=Mn[--En],Mn[En]=null}var mn=null,pn=null,ft=!1,In=null;function ig(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=Oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Tr!==null?{id:ui,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function Ec(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tc(t){if(ft){var e=pn;if(e){var n=e;if(!Hd(t,e)){if(Ec(t))throw Error(re(418));e=Oi(n.nextSibling);var i=mn;e&&Hd(t,e)?ig(i,n):(t.flags=t.flags&-4097|2,ft=!1,mn=t)}}else{if(Ec(t))throw Error(re(418));t.flags=t.flags&-4097|2,ft=!1,mn=t}}}function Gd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Jo(t){if(t!==mn)return!1;if(!ft)return Gd(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xc(t.type,t.memoizedProps)),e&&(e=pn)){if(Ec(t))throw rg(),Error(re(418));for(;e;)ig(t,e),e=Oi(e.nextSibling)}if(Gd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?Oi(t.stateNode.nextSibling):null;return!0}function rg(){for(var t=pn;t;)t=Oi(t.nextSibling)}function ys(){pn=mn=null,ft=!1}function Sf(t){In===null?In=[t]:In.push(t)}var k0=_i.ReactCurrentBatchConfig;function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function ea(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vd(t){var e=t._init;return e(t._payload)}function sg(t){function e(c,_){if(t){var g=c.deletions;g===null?(c.deletions=[_],c.flags|=16):g.push(_)}}function n(c,_){if(!t)return null;for(;_!==null;)e(c,_),_=_.sibling;return null}function i(c,_){for(c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function r(c,_){return c=Hi(c,_),c.index=0,c.sibling=null,c}function s(c,_,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<_?(c.flags|=2,_):g):(c.flags|=2,_)):(c.flags|=1048576,_)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,_,g,M){return _===null||_.tag!==6?(_=cu(g,c.mode,M),_.return=c,_):(_=r(_,g),_.return=c,_)}function l(c,_,g,M){var A=g.type;return A===Kr?f(c,_,g.props.children,M,g.key):_!==null&&(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ai&&Vd(A)===_.type)?(M=r(_,g.props),M.ref=Hs(c,_,g),M.return=c,M):(M=Oa(g.type,g.key,g.props,null,c.mode,M),M.ref=Hs(c,_,g),M.return=c,M)}function u(c,_,g,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=fu(g,c.mode,M),_.return=c,_):(_=r(_,g.children||[]),_.return=c,_)}function f(c,_,g,M,A){return _===null||_.tag!==7?(_=xr(g,c.mode,M,A),_.return=c,_):(_=r(_,g),_.return=c,_)}function d(c,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=cu(""+_,c.mode,g),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Vo:return g=Oa(_.type,_.key,_.props,null,c.mode,g),g.ref=Hs(c,null,_),g.return=c,g;case $r:return _=fu(_,c.mode,g),_.return=c,_;case Ai:var M=_._init;return d(c,M(_._payload),g)}if(Js(_)||Fs(_))return _=xr(_,c.mode,g,null),_.return=c,_;ea(c,_)}return null}function h(c,_,g,M){var A=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:a(c,_,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Vo:return g.key===A?l(c,_,g,M):null;case $r:return g.key===A?u(c,_,g,M):null;case Ai:return A=g._init,h(c,_,A(g._payload),M)}if(Js(g)||Fs(g))return A!==null?null:f(c,_,g,M,null);ea(c,g)}return null}function m(c,_,g,M,A){if(typeof M=="string"&&M!==""||typeof M=="number")return c=c.get(g)||null,a(_,c,""+M,A);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Vo:return c=c.get(M.key===null?g:M.key)||null,l(_,c,M,A);case $r:return c=c.get(M.key===null?g:M.key)||null,u(_,c,M,A);case Ai:var w=M._init;return m(c,_,g,w(M._payload),A)}if(Js(M)||Fs(M))return c=c.get(g)||null,f(_,c,M,A,null);ea(_,M)}return null}function v(c,_,g,M){for(var A=null,w=null,T=_,L=_=0,X=null;T!==null&&L<g.length;L++){T.index>L?(X=T,T=null):X=T.sibling;var y=h(c,T,g[L],M);if(y===null){T===null&&(T=X);break}t&&T&&y.alternate===null&&e(c,T),_=s(y,_,L),w===null?A=y:w.sibling=y,w=y,T=X}if(L===g.length)return n(c,T),ft&&lr(c,L),A;if(T===null){for(;L<g.length;L++)T=d(c,g[L],M),T!==null&&(_=s(T,_,L),w===null?A=T:w.sibling=T,w=T);return ft&&lr(c,L),A}for(T=i(c,T);L<g.length;L++)X=m(T,c,L,g[L],M),X!==null&&(t&&X.alternate!==null&&T.delete(X.key===null?L:X.key),_=s(X,_,L),w===null?A=X:w.sibling=X,w=X);return t&&T.forEach(function(C){return e(c,C)}),ft&&lr(c,L),A}function x(c,_,g,M){var A=Fs(g);if(typeof A!="function")throw Error(re(150));if(g=A.call(g),g==null)throw Error(re(151));for(var w=A=null,T=_,L=_=0,X=null,y=g.next();T!==null&&!y.done;L++,y=g.next()){T.index>L?(X=T,T=null):X=T.sibling;var C=h(c,T,y.value,M);if(C===null){T===null&&(T=X);break}t&&T&&C.alternate===null&&e(c,T),_=s(C,_,L),w===null?A=C:w.sibling=C,w=C,T=X}if(y.done)return n(c,T),ft&&lr(c,L),A;if(T===null){for(;!y.done;L++,y=g.next())y=d(c,y.value,M),y!==null&&(_=s(y,_,L),w===null?A=y:w.sibling=y,w=y);return ft&&lr(c,L),A}for(T=i(c,T);!y.done;L++,y=g.next())y=m(T,c,L,y.value,M),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?L:y.key),_=s(y,_,L),w===null?A=y:w.sibling=y,w=y);return t&&T.forEach(function(q){return e(c,q)}),ft&&lr(c,L),A}function p(c,_,g,M){if(typeof g=="object"&&g!==null&&g.type===Kr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Vo:e:{for(var A=g.key,w=_;w!==null;){if(w.key===A){if(A=g.type,A===Kr){if(w.tag===7){n(c,w.sibling),_=r(w,g.props.children),_.return=c,c=_;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ai&&Vd(A)===w.type){n(c,w.sibling),_=r(w,g.props),_.ref=Hs(c,w,g),_.return=c,c=_;break e}n(c,w);break}else e(c,w);w=w.sibling}g.type===Kr?(_=xr(g.props.children,c.mode,M,g.key),_.return=c,c=_):(M=Oa(g.type,g.key,g.props,null,c.mode,M),M.ref=Hs(c,_,g),M.return=c,c=M)}return o(c);case $r:e:{for(w=g.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(c,_.sibling),_=r(_,g.children||[]),_.return=c,c=_;break e}else{n(c,_);break}else e(c,_);_=_.sibling}_=fu(g,c.mode,M),_.return=c,c=_}return o(c);case Ai:return w=g._init,p(c,_,w(g._payload),M)}if(Js(g))return v(c,_,g,M);if(Fs(g))return x(c,_,g,M);ea(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(c,_.sibling),_=r(_,g),_.return=c,c=_):(n(c,_),_=cu(g,c.mode,M),_.return=c,c=_),o(c)):n(c,_)}return p}var Ss=sg(!0),og=sg(!1),Qa=Ki(null),Ja=null,rs=null,Mf=null;function Ef(){Mf=rs=Ja=null}function Tf(t){var e=Qa.current;lt(Qa),t._currentValue=e}function wc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ps(t,e){Ja=t,Mf=rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(Mf!==t)if(t={context:t,memoizedValue:e,next:null},rs===null){if(Ja===null)throw Error(re(308));rs=t,Ja.dependencies={lanes:0,firstContext:t}}else rs=rs.next=t;return e}var mr=null;function wf(t){mr===null?mr=[t]:mr.push(t)}function ag(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,wf(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ri=!1;function Af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,wf(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function ba(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ff(t,n)}}function Wd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function el(t,e,n,i){var r=t.updateQueue;Ri=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(h=e,m=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(m,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(m,d,h):v,h==null)break e;d=gt({},d,h);break e;case 2:Ri=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,l=d):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ar|=o,t.lanes=o,t.memoizedState=d}}function Xd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Uo={},Kn=Ki(Uo),Eo=Ki(Uo),To=Ki(Uo);function gr(t){if(t===Uo)throw Error(re(174));return t}function Rf(t,e){switch(rt(To,e),rt(Eo,t),rt(Kn,Uo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sc(e,t)}lt(Kn),rt(Kn,e)}function Ms(){lt(Kn),lt(Eo),lt(To)}function ug(t){gr(To.current);var e=gr(Kn.current),n=sc(e,t.type);e!==n&&(rt(Eo,t),rt(Kn,n))}function Cf(t){Eo.current===t&&(lt(Kn),lt(Eo))}var pt=Ki(0);function tl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ru=[];function Pf(){for(var t=0;t<ru.length;t++)ru[t]._workInProgressVersionPrimary=null;ru.length=0}var Da=_i.ReactCurrentDispatcher,su=_i.ReactCurrentBatchConfig,wr=0,mt=null,Tt=null,Lt=null,nl=!1,ao=!1,wo=0,B0=0;function Ot(){throw Error(re(321))}function Lf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function bf(t,e,n,i,r,s){if(wr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Da.current=t===null||t.memoizedState===null?W0:X0,t=n(i,r),ao){s=0;do{if(ao=!1,wo=0,25<=s)throw Error(re(301));s+=1,Lt=Tt=null,e.updateQueue=null,Da.current=j0,t=n(i,r)}while(ao)}if(Da.current=il,e=Tt!==null&&Tt.next!==null,wr=0,Lt=Tt=mt=null,nl=!1,e)throw Error(re(300));return t}function Df(){var t=wo!==0;return wo=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?mt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Rn(){if(Tt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Lt===null?mt.memoizedState:Lt.next;if(e!==null)Lt=e,Tt=t;else{if(t===null)throw Error(re(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Lt===null?mt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Ao(t,e){return typeof e=="function"?e(t):e}function ou(t){var e=Rn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((wr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,mt.lanes|=f,Ar|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Hn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Ar|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function au(t){var e=Rn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Hn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function cg(){}function fg(t,e){var n=mt,i=Rn(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,en=!0),i=i.queue,Nf(pg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,Ro(9,hg.bind(null,n,i,r,e),void 0,null),bt===null)throw Error(re(349));wr&30||dg(n,e,r)}return r}function dg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hg(t,e,n,i){e.value=n,e.getSnapshot=i,mg(e)&&gg(t)}function pg(t,e,n){return n(function(){mg(e)&&gg(t)})}function mg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function gg(t){var e=mi(t,1);e!==null&&Bn(e,t,1,-1)}function jd(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},e.queue=t,t=t.dispatch=V0.bind(null,mt,t),[e.memoizedState,t]}function Ro(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function _g(){return Rn().memoizedState}function Na(t,e,n,i){var r=Vn();mt.flags|=t,r.memoizedState=Ro(1|e,n,void 0,i===void 0?null:i)}function El(t,e,n,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&Lf(i,o.deps)){r.memoizedState=Ro(e,n,s,i);return}}mt.flags|=t,r.memoizedState=Ro(1|e,n,s,i)}function Yd(t,e){return Na(8390656,8,t,e)}function Nf(t,e){return El(2048,8,t,e)}function vg(t,e){return El(4,2,t,e)}function xg(t,e){return El(4,4,t,e)}function yg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sg(t,e,n){return n=n!=null?n.concat([t]):null,El(4,4,yg.bind(null,e,t),n)}function Uf(){}function Mg(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Lf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Eg(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Lf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Tg(t,e,n){return wr&21?(Hn(n,e)||(n=Pm(),mt.lanes|=n,Ar|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function H0(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=su.transition;su.transition={};try{t(!1),e()}finally{tt=n,su.transition=i}}function wg(){return Rn().memoizedState}function G0(t,e,n){var i=Bi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ag(t))Rg(e,n);else if(n=ag(t,e,n,i),n!==null){var r=Yt();Bn(n,t,i,r),Cg(n,e,i)}}function V0(t,e,n){var i=Bi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ag(t))Rg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Hn(a,o)){var l=e.interleaved;l===null?(r.next=r,wf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ag(t,e,r,i),n!==null&&(r=Yt(),Bn(n,t,i,r),Cg(n,e,i))}}function Ag(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function Rg(t,e){ao=nl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Cg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ff(t,n)}}var il={readContext:An,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},W0={readContext:An,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:Yd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Na(4194308,4,yg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Na(4194308,4,t,e)},useInsertionEffect:function(t,e){return Na(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Vn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=G0.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:jd,useDebugValue:Uf,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=jd(!1),e=t[0];return t=H0.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Vn();if(ft){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),bt===null)throw Error(re(349));wr&30||dg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Yd(pg.bind(null,i,s,t),[t]),i.flags|=2048,Ro(9,hg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Vn(),e=bt.identifierPrefix;if(ft){var n=ci,i=ui;n=(i&~(1<<32-kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=B0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},X0={readContext:An,useCallback:Mg,useContext:An,useEffect:Nf,useImperativeHandle:Sg,useInsertionEffect:vg,useLayoutEffect:xg,useMemo:Eg,useReducer:ou,useRef:_g,useState:function(){return ou(Ao)},useDebugValue:Uf,useDeferredValue:function(t){var e=Rn();return Tg(e,Tt.memoizedState,t)},useTransition:function(){var t=ou(Ao)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:cg,useSyncExternalStore:fg,useId:wg,unstable_isNewReconciler:!1},j0={readContext:An,useCallback:Mg,useContext:An,useEffect:Nf,useImperativeHandle:Sg,useInsertionEffect:vg,useLayoutEffect:xg,useMemo:Eg,useReducer:au,useRef:_g,useState:function(){return au(Ao)},useDebugValue:Uf,useDeferredValue:function(t){var e=Rn();return Tt===null?e.memoizedState=t:Tg(e,Tt.memoizedState,t)},useTransition:function(){var t=au(Ao)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:cg,useSyncExternalStore:fg,useId:wg,unstable_isNewReconciler:!1};function Dn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ac(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tl={isMounted:function(t){return(t=t._reactInternals)?Lr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Bi(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(Bn(e,t,r,i),ba(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Bi(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(Bn(e,t,r,i),ba(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Bi(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=zi(t,r,i),e!==null&&(Bn(e,t,i,n),ba(e,t,i))}};function qd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!xo(n,i)||!xo(r,s):!0}function Pg(t,e,n){var i=!1,r=ji,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=nn(e)?Er:Gt.current,i=e.contextTypes,s=(i=i!=null)?xs(t,r):ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function $d(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Tl.enqueueReplaceState(e,e.state,null)}function Rc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Af(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=nn(e)?Er:Gt.current,r.context=xs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ac(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Tl.enqueueReplaceState(r,r.state,null),el(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Es(t,e){try{var n="",i=e;do n+=yv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function lu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Y0=typeof WeakMap=="function"?WeakMap:Map;function Lg(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){sl||(sl=!0,zc=i),Cc(t,e)},n}function bg(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Cc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cc(t,e),typeof i!="function"&&(ki===null?ki=new Set([this]):ki.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Kd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Y0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ax.bind(null,t,e,n),e.then(t,t))}function Zd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qd(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,zi(n,e,1))),n.lanes|=1),t)}var q0=_i.ReactCurrentOwner,en=!1;function Xt(t,e,n,i){e.child=t===null?og(e,null,n,i):Ss(e,t.child,n,i)}function Jd(t,e,n,i,r){n=n.render;var s=e.ref;return ps(e,r),i=bf(t,e,n,i,s,r),n=Df(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ft&&n&&xf(e),e.flags|=1,Xt(t,e,i,r),e.child)}function eh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Gf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Dg(t,e,s,i,r)):(t=Oa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xo,n(o,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Hi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Dg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(xo(s,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,gi(t,e,r)}return Pc(t,e,n,i,r)}function Ng(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(os,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(os,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(os,fn),fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(os,fn),fn|=i;return Xt(t,e,r,n),e.child}function Ug(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pc(t,e,n,i,r){var s=nn(n)?Er:Gt.current;return s=xs(e,s),ps(e,r),n=bf(t,e,n,i,s,r),i=Df(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ft&&i&&xf(e),e.flags|=1,Xt(t,e,n,r),e.child)}function th(t,e,n,i,r){if(nn(n)){var s=!0;$a(e)}else s=!1;if(ps(e,r),e.stateNode===null)Ua(t,e),Pg(e,n,i),Rc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=An(u):(u=nn(n)?Er:Gt.current,u=xs(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&$d(e,o,i,u),Ri=!1;var h=e.memoizedState;o.state=h,el(e,i,o,r),l=e.memoizedState,a!==i||h!==l||tn.current||Ri?(typeof f=="function"&&(Ac(e,n,f,i),l=e.memoizedState),(a=Ri||qd(e,n,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,lg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Dn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=nn(n)?Er:Gt.current,l=xs(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&$d(e,o,i,l),Ri=!1,h=e.memoizedState,o.state=h,el(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||tn.current||Ri?(typeof m=="function"&&(Ac(e,n,m,i),v=e.memoizedState),(u=Ri||qd(e,n,u,i,h,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Lc(t,e,n,i,s,r)}function Lc(t,e,n,i,r,s){Ug(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Bd(e,n,!1),gi(t,e,s);i=e.stateNode,q0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,a,s)):Xt(t,e,a,s),e.memoizedState=i.state,r&&Bd(e,n,!0),e.child}function Ig(t){var e=t.stateNode;e.pendingContext?kd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&kd(t,e.context,!1),Rf(t,e.containerInfo)}function nh(t,e,n,i,r){return ys(),Sf(r),e.flags|=256,Xt(t,e,n,i),e.child}var bc={dehydrated:null,treeContext:null,retryLane:0};function Dc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fg(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(pt,r&1),t===null)return Tc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rl(o,i,0,null),t=xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Dc(n),e.memoizedState=bc,t):If(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return $0(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Hi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Hi(a,s):(s=xr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Dc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=bc,i}return s=t.child,t=s.sibling,i=Hi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function If(t,e){return e=Rl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ta(t,e,n,i){return i!==null&&Sf(i),Ss(e,t.child,null,n),t=If(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $0(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=lu(Error(re(422))),ta(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Rl({mode:"visible",children:i.children},r,0,null),s=xr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ss(e,t.child,null,o),e.child.memoizedState=Dc(o),e.memoizedState=bc,s);if(!(e.mode&1))return ta(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=lu(s,i,void 0),ta(t,e,o,i)}if(a=(o&t.childLanes)!==0,en||a){if(i=bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,mi(t,r),Bn(i,t,r,-1))}return Hf(),i=lu(Error(re(421))),ta(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=lx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=Oi(r.nextSibling),mn=e,ft=!0,In=null,t!==null&&(Mn[En++]=ui,Mn[En++]=ci,Mn[En++]=Tr,ui=t.id,ci=t.overflow,Tr=e),e=If(e,i.children),e.flags|=4096,e)}function ih(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),wc(t.return,e,n)}function uu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Og(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ih(t,n,e);else if(t.tag===19)ih(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&tl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),uu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&tl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}uu(e,!0,n,null,s);break;case"together":uu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ua(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ar|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function K0(t,e,n){switch(e.tag){case 3:Ig(e),ys();break;case 5:ug(e);break;case 1:nn(e.type)&&$a(e);break;case 4:Rf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Qa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?Fg(t,e,n):(rt(pt,pt.current&1),t=gi(t,e,n),t!==null?t.sibling:null);rt(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Og(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,Ng(t,e,n)}return gi(t,e,n)}var zg,Nc,kg,Bg;zg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nc=function(){};kg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,gr(Kn.current);var s=null;switch(n){case"input":r=tc(t,r),i=tc(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=rc(t,r),i=rc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ya)}oc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&st("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Bg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Gs(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Z0(t,e,n){var i=e.pendingProps;switch(yf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return nn(e.type)&&qa(),zt(e),null;case 3:return i=e.stateNode,Ms(),lt(tn),lt(Gt),Pf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Jo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(Hc(In),In=null))),Nc(t,e),zt(e),null;case 5:Cf(e);var r=gr(To.current);if(n=e.type,t!==null&&e.stateNode!=null)kg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return zt(e),null}if(t=gr(Kn.current),Jo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[jn]=e,i[Mo]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<to.length;r++)st(to[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":dd(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":pd(i,s),st("invalid",i)}oc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qo(i.textContent,a,t),r=["children",""+a]):fo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(n){case"input":Wo(i),hd(i,s,!0);break;case"textarea":Wo(i),md(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ya)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[jn]=e,t[Mo]=i,zg(t,e,!1,!1),e.stateNode=t;e:{switch(o=ac(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<to.length;r++)st(to[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":dd(t,i),r=tc(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),st("invalid",t);break;case"textarea":pd(t,i),r=rc(t,i),st("invalid",t);break;default:r=i}oc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?_m(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ho(t,l):typeof l=="number"&&ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&sf(t,s,l,o))}switch(n){case"input":Wo(t),hd(t,i,!1);break;case"textarea":Wo(t),md(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Xi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ya)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)Bg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=gr(To.current),gr(Kn.current),Jo(e)){if(i=e.stateNode,n=e.memoizedProps,i[jn]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:Qo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[jn]=e,e.stateNode=i}return zt(e),null;case 13:if(lt(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&pn!==null&&e.mode&1&&!(e.flags&128))rg(),ys(),e.flags|=98560,s=!1;else if(s=Jo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[jn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else In!==null&&(Hc(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?wt===0&&(wt=3):Hf())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Ms(),Nc(t,e),t===null&&yo(e.stateNode.containerInfo),zt(e),null;case 10:return Tf(e.type._context),zt(e),null;case 17:return nn(e.type)&&qa(),zt(e),null;case 19:if(lt(pt),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Gs(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=tl(t),o!==null){for(e.flags|=128,Gs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>Ts&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304)}else{if(!i)if(t=tl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return zt(e),null}else 2*yt()-s.renderingStartTime>Ts&&n!==1073741824&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=pt.current,rt(pt,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Bf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Q0(t,e){switch(yf(e),e.tag){case 1:return nn(e.type)&&qa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ms(),lt(tn),lt(Gt),Pf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cf(e),null;case 13:if(lt(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(pt),null;case 4:return Ms(),null;case 10:return Tf(e.type._context),null;case 22:case 23:return Bf(),null;case 24:return null;default:return null}}var na=!1,Ht=!1,J0=typeof WeakSet=="function"?WeakSet:Set,pe=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function Uc(t,e,n){try{n()}catch(i){_t(t,e,i)}}var rh=!1;function ex(t,e){if(_c=Wa,t=Xm(),vf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++f===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vc={focusedElem:t,selectionRange:n},Wa=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,p=v.memoizedState,c=e.stateNode,_=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:Dn(e.type,x),p);c.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(M){_t(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return v=rh,rh=!1,v}function lo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Uc(e,n,s)}r=r.next}while(r!==i)}}function wl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ic(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Hg(t){var e=t.alternate;e!==null&&(t.alternate=null,Hg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[Mo],delete e[Sc],delete e[F0],delete e[O0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Gg(t){return t.tag===5||t.tag===3||t.tag===4}function sh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ya));else if(i!==4&&(t=t.child,t!==null))for(Fc(t,e,n),t=t.sibling;t!==null;)Fc(t,e,n),t=t.sibling}function Oc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Oc(t,e,n),t=t.sibling;t!==null;)Oc(t,e,n),t=t.sibling}var Dt=null,Nn=!1;function xi(t,e,n){for(n=n.child;n!==null;)Vg(t,e,n),n=n.sibling}function Vg(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(_l,n)}catch{}switch(n.tag){case 5:Ht||ss(n,e);case 6:var i=Dt,r=Nn;Dt=null,xi(t,e,n),Dt=i,Nn=r,Dt!==null&&(Nn?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Nn?(t=Dt,n=n.stateNode,t.nodeType===8?nu(t.parentNode,n):t.nodeType===1&&nu(t,n),_o(t)):nu(Dt,n.stateNode));break;case 4:i=Dt,r=Nn,Dt=n.stateNode.containerInfo,Nn=!0,xi(t,e,n),Dt=i,Nn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Uc(n,e,o),r=r.next}while(r!==i)}xi(t,e,n);break;case 1:if(!Ht&&(ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){_t(n,e,a)}xi(t,e,n);break;case 21:xi(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,xi(t,e,n),Ht=i):xi(t,e,n);break;default:xi(t,e,n)}}function oh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new J0),e.forEach(function(i){var r=ux.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Dt=a.stateNode,Nn=!1;break e;case 3:Dt=a.stateNode.containerInfo,Nn=!0;break e;case 4:Dt=a.stateNode.containerInfo,Nn=!0;break e}a=a.return}if(Dt===null)throw Error(re(160));Vg(s,o,r),Dt=null,Nn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){_t(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Wg(e,t),e=e.sibling}function Wg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Gn(t),i&4){try{lo(3,t,t.return),wl(3,t)}catch(x){_t(t,t.return,x)}try{lo(5,t,t.return)}catch(x){_t(t,t.return,x)}}break;case 1:Cn(e,t),Gn(t),i&512&&n!==null&&ss(n,n.return);break;case 5:if(Cn(e,t),Gn(t),i&512&&n!==null&&ss(n,n.return),t.flags&32){var r=t.stateNode;try{ho(r,"")}catch(x){_t(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&dm(r,s),ac(a,o);var u=ac(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?_m(r,d):f==="dangerouslySetInnerHTML"?mm(r,d):f==="children"?ho(r,d):sf(r,f,d,u)}switch(a){case"input":nc(r,s);break;case"textarea":hm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?cs(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?cs(r,!!s.multiple,s.defaultValue,!0):cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Mo]=s}catch(x){_t(t,t.return,x)}}break;case 6:if(Cn(e,t),Gn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){_t(t,t.return,x)}}break;case 3:if(Cn(e,t),Gn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{_o(e.containerInfo)}catch(x){_t(t,t.return,x)}break;case 4:Cn(e,t),Gn(t);break;case 13:Cn(e,t),Gn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(zf=yt())),i&4&&oh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(u=Ht)||f,Cn(e,t),Ht=u):Cn(e,t),Gn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(pe=t,f=t.child;f!==null;){for(d=pe=f;pe!==null;){switch(h=pe,m=h.child,h.tag){case 0:case 11:case 14:case 15:lo(4,h,h.return);break;case 1:ss(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){_t(i,n,x)}}break;case 5:ss(h,h.return);break;case 22:if(h.memoizedState!==null){lh(d);continue}}m!==null?(m.return=h,pe=m):lh(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gm("display",o))}catch(x){_t(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){_t(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Cn(e,t),Gn(t),i&4&&oh(t);break;case 21:break;default:Cn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Gg(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ho(r,""),i.flags&=-33);var s=sh(t);Oc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=sh(t);Fc(t,a,o);break;default:throw Error(re(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tx(t,e,n){pe=t,Xg(t)}function Xg(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||na;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=na;var u=Ht;if(na=o,(Ht=l)&&!u)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?uh(r):l!==null?(l.return=o,pe=l):uh(r);for(;s!==null;)pe=s,Xg(s),s=s.sibling;pe=r,na=a,Ht=u}ah(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):ah(t)}}function ah(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||wl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&_o(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Ht||e.flags&512&&Ic(e)}catch(h){_t(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function lh(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function uh(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wl(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{Ic(e)}catch(l){_t(e,s,l)}break;case 5:var o=e.return;try{Ic(e)}catch(l){_t(e,o,l)}}}catch(l){_t(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var nx=Math.ceil,rl=_i.ReactCurrentDispatcher,Ff=_i.ReactCurrentOwner,wn=_i.ReactCurrentBatchConfig,Je=0,bt=null,Et=null,Nt=0,fn=0,os=Ki(0),wt=0,Co=null,Ar=0,Al=0,Of=0,uo=null,Qt=null,zf=0,Ts=1/0,oi=null,sl=!1,zc=null,ki=null,ia=!1,Di=null,ol=0,co=0,kc=null,Ia=-1,Fa=0;function Yt(){return Je&6?yt():Ia!==-1?Ia:Ia=yt()}function Bi(t){return t.mode&1?Je&2&&Nt!==0?Nt&-Nt:k0.transition!==null?(Fa===0&&(Fa=Pm()),Fa):(t=tt,t!==0||(t=window.event,t=t===void 0?16:Fm(t.type)),t):1}function Bn(t,e,n,i){if(50<co)throw co=0,kc=null,Error(re(185));bo(t,n,i),(!(Je&2)||t!==bt)&&(t===bt&&(!(Je&2)&&(Al|=n),wt===4&&Pi(t,Nt)),rn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Ts=yt()+500,Ml&&Zi()))}function rn(t,e){var n=t.callbackNode;kv(t,e);var i=Va(t,t===bt?Nt:0);if(i===0)n!==null&&vd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&vd(n),e===1)t.tag===0?z0(ch.bind(null,t)):tg(ch.bind(null,t)),U0(function(){!(Je&6)&&Zi()}),n=null;else{switch(Lm(i)){case 1:n=cf;break;case 4:n=Rm;break;case 16:n=Ga;break;case 536870912:n=Cm;break;default:n=Ga}n=Jg(n,jg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jg(t,e){if(Ia=-1,Fa=0,Je&6)throw Error(re(327));var n=t.callbackNode;if(ms()&&t.callbackNode!==n)return null;var i=Va(t,t===bt?Nt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=al(t,i);else{e=i;var r=Je;Je|=2;var s=qg();(bt!==t||Nt!==e)&&(oi=null,Ts=yt()+500,vr(t,e));do try{sx();break}catch(a){Yg(t,a)}while(!0);Ef(),rl.current=s,Je=r,Et!==null?e=0:(bt=null,Nt=0,e=wt)}if(e!==0){if(e===2&&(r=dc(t),r!==0&&(i=r,e=Bc(t,r))),e===1)throw n=Co,vr(t,0),Pi(t,i),rn(t,yt()),n;if(e===6)Pi(t,i);else{if(r=t.current.alternate,!(i&30)&&!ix(r)&&(e=al(t,i),e===2&&(s=dc(t),s!==0&&(i=s,e=Bc(t,s))),e===1))throw n=Co,vr(t,0),Pi(t,i),rn(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:ur(t,Qt,oi);break;case 3:if(Pi(t,i),(i&130023424)===i&&(e=zf+500-yt(),10<e)){if(Va(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=yc(ur.bind(null,t,Qt,oi),e);break}ur(t,Qt,oi);break;case 4:if(Pi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-kn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*nx(i/1960))-i,10<i){t.timeoutHandle=yc(ur.bind(null,t,Qt,oi),i);break}ur(t,Qt,oi);break;case 5:ur(t,Qt,oi);break;default:throw Error(re(329))}}}return rn(t,yt()),t.callbackNode===n?jg.bind(null,t):null}function Bc(t,e){var n=uo;return t.current.memoizedState.isDehydrated&&(vr(t,e).flags|=256),t=al(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&Hc(e)),t}function Hc(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function ix(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pi(t,e){for(e&=~Of,e&=~Al,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),i=1<<n;t[n]=-1,e&=~i}}function ch(t){if(Je&6)throw Error(re(327));ms();var e=Va(t,0);if(!(e&1))return rn(t,yt()),null;var n=al(t,e);if(t.tag!==0&&n===2){var i=dc(t);i!==0&&(e=i,n=Bc(t,i))}if(n===1)throw n=Co,vr(t,0),Pi(t,e),rn(t,yt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,Qt,oi),rn(t,yt()),null}function kf(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Ts=yt()+500,Ml&&Zi())}}function Rr(t){Di!==null&&Di.tag===0&&!(Je&6)&&ms();var e=Je;Je|=1;var n=wn.transition,i=tt;try{if(wn.transition=null,tt=1,t)return t()}finally{tt=i,wn.transition=n,Je=e,!(Je&6)&&Zi()}}function Bf(){fn=os.current,lt(os)}function vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,N0(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(yf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&qa();break;case 3:Ms(),lt(tn),lt(Gt),Pf();break;case 5:Cf(i);break;case 4:Ms();break;case 13:lt(pt);break;case 19:lt(pt);break;case 10:Tf(i.type._context);break;case 22:case 23:Bf()}n=n.return}if(bt=t,Et=t=Hi(t.current,null),Nt=fn=e,wt=0,Co=null,Of=Al=Ar=0,Qt=uo=null,mr!==null){for(e=0;e<mr.length;e++)if(n=mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}mr=null}return t}function Yg(t,e){do{var n=Et;try{if(Ef(),Da.current=il,nl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}nl=!1}if(wr=0,Lt=Tt=mt=null,ao=!1,wo=0,Ff.current=null,n===null||n.return===null){wt=1,Co=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Nt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Zd(o);if(m!==null){m.flags&=-257,Qd(m,o,a,s,e),m.mode&1&&Kd(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){Kd(s,u,e),Hf();break e}l=Error(re(426))}}else if(ft&&a.mode&1){var p=Zd(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Qd(p,o,a,s,e),Sf(Es(l,a));break e}}s=l=Es(l,a),wt!==4&&(wt=2),uo===null?uo=[s]:uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=Lg(s,l,e);Wd(s,c);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ki===null||!ki.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=bg(s,a,e);Wd(s,M);break e}}s=s.return}while(s!==null)}Kg(n)}catch(A){e=A,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function qg(){var t=rl.current;return rl.current=il,t===null?il:t}function Hf(){(wt===0||wt===3||wt===2)&&(wt=4),bt===null||!(Ar&268435455)&&!(Al&268435455)||Pi(bt,Nt)}function al(t,e){var n=Je;Je|=2;var i=qg();(bt!==t||Nt!==e)&&(oi=null,vr(t,e));do try{rx();break}catch(r){Yg(t,r)}while(!0);if(Ef(),Je=n,rl.current=i,Et!==null)throw Error(re(261));return bt=null,Nt=0,wt}function rx(){for(;Et!==null;)$g(Et)}function sx(){for(;Et!==null&&!Lv();)$g(Et)}function $g(t){var e=Qg(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?Kg(t):Et=e,Ff.current=null}function Kg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Q0(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,Et=null;return}}else if(n=Z0(n,e,fn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);wt===0&&(wt=5)}function ur(t,e,n){var i=tt,r=wn.transition;try{wn.transition=null,tt=1,ox(t,e,n,i)}finally{wn.transition=r,tt=i}return null}function ox(t,e,n,i){do ms();while(Di!==null);if(Je&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Bv(t,s),t===bt&&(Et=bt=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ia||(ia=!0,Jg(Ga,function(){return ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var o=tt;tt=1;var a=Je;Je|=4,Ff.current=null,ex(t,n),Wg(n,t),A0(vc),Wa=!!_c,vc=_c=null,t.current=n,tx(n),bv(),Je=a,tt=o,wn.transition=s}else t.current=n;if(ia&&(ia=!1,Di=t,ol=r),s=t.pendingLanes,s===0&&(ki=null),Uv(n.stateNode),rn(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(sl)throw sl=!1,t=zc,zc=null,t;return ol&1&&t.tag!==0&&ms(),s=t.pendingLanes,s&1?t===kc?co++:(co=0,kc=t):co=0,Zi(),null}function ms(){if(Di!==null){var t=Lm(ol),e=wn.transition,n=tt;try{if(wn.transition=null,tt=16>t?16:t,Di===null)var i=!1;else{if(t=Di,Di=null,ol=0,Je&6)throw Error(re(331));var r=Je;for(Je|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(pe=u;pe!==null;){var f=pe;switch(f.tag){case 0:case 11:case 15:lo(8,f,s)}var d=f.child;if(d!==null)d.return=f,pe=d;else for(;pe!==null;){f=pe;var h=f.sibling,m=f.return;if(Hg(f),f===u){pe=null;break}if(h!==null){h.return=m,pe=h;break}pe=m}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:lo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,pe=c;break e}pe=s.return}}var _=t.current;for(pe=_;pe!==null;){o=pe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,pe=g;else e:for(o=_;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wl(9,a)}}catch(A){_t(a,a.return,A)}if(a===o){pe=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,pe=M;break e}pe=a.return}}if(Je=r,Zi(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(_l,t)}catch{}i=!0}return i}finally{tt=n,wn.transition=e}}return!1}function fh(t,e,n){e=Es(n,e),e=Lg(t,e,1),t=zi(t,e,1),e=Yt(),t!==null&&(bo(t,1,e),rn(t,e))}function _t(t,e,n){if(t.tag===3)fh(t,t,n);else for(;e!==null;){if(e.tag===3){fh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ki===null||!ki.has(i))){t=Es(n,t),t=bg(e,t,1),e=zi(e,t,1),t=Yt(),e!==null&&(bo(e,1,t),rn(e,t));break}}e=e.return}}function ax(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,bt===t&&(Nt&n)===n&&(wt===4||wt===3&&(Nt&130023424)===Nt&&500>yt()-zf?vr(t,0):Of|=n),rn(t,e)}function Zg(t,e){e===0&&(t.mode&1?(e=Yo,Yo<<=1,!(Yo&130023424)&&(Yo=4194304)):e=1);var n=Yt();t=mi(t,e),t!==null&&(bo(t,e,n),rn(t,n))}function lx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Zg(t,n)}function ux(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),Zg(t,n)}var Qg;Qg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,K0(t,e,n);en=!!(t.flags&131072)}else en=!1,ft&&e.flags&1048576&&ng(e,Za,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ua(t,e),t=e.pendingProps;var r=xs(e,Gt.current);ps(e,n),r=bf(null,e,i,t,r,n);var s=Df();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,$a(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Af(e),r.updater=Tl,e.stateNode=r,r._reactInternals=e,Rc(e,i,t,n),e=Lc(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&xf(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ua(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=fx(i),t=Dn(i,t),r){case 0:e=Pc(null,e,i,t,n);break e;case 1:e=th(null,e,i,t,n);break e;case 11:e=Jd(null,e,i,t,n);break e;case 14:e=eh(null,e,i,Dn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Pc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),th(t,e,i,r,n);case 3:e:{if(Ig(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,lg(t,e),el(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Es(Error(re(423)),e),e=nh(t,e,i,n,r);break e}else if(i!==r){r=Es(Error(re(424)),e),e=nh(t,e,i,n,r);break e}else for(pn=Oi(e.stateNode.containerInfo.firstChild),mn=e,ft=!0,In=null,n=og(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),i===r){e=gi(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return ug(e),t===null&&Tc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,xc(i,r)?o=null:s!==null&&xc(i,s)&&(e.flags|=32),Ug(t,e),Xt(t,e,o,n),e.child;case 6:return t===null&&Tc(e),null;case 13:return Fg(t,e,n);case 4:return Rf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ss(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Jd(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(Qa,i._currentValue),i._currentValue=o,s!==null)if(Hn(s.value,o)){if(s.children===r.children&&!tn.current){e=gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=di(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ps(e,n),r=An(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=Dn(i,e.pendingProps),r=Dn(i.type,r),eh(t,e,i,r,n);case 15:return Dg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Ua(t,e),e.tag=1,nn(i)?(t=!0,$a(e)):t=!1,ps(e,n),Pg(e,i,r),Rc(e,i,r,n),Lc(null,e,i,!0,t,n);case 19:return Og(t,e,n);case 22:return Ng(t,e,n)}throw Error(re(156,e.tag))};function Jg(t,e){return Am(t,e)}function cx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new cx(t,e,n,i)}function Gf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fx(t){if(typeof t=="function")return Gf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===af)return 11;if(t===lf)return 14}return 2}function Hi(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Gf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Kr:return xr(n.children,r,s,e);case of:o=8,r|=8;break;case Zu:return t=Tn(12,n,e,r|2),t.elementType=Zu,t.lanes=s,t;case Qu:return t=Tn(13,n,e,r),t.elementType=Qu,t.lanes=s,t;case Ju:return t=Tn(19,n,e,r),t.elementType=Ju,t.lanes=s,t;case um:return Rl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case am:o=10;break e;case lm:o=9;break e;case af:o=11;break e;case lf:o=14;break e;case Ai:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Tn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function xr(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function Rl(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=um,t.lanes=n,t.stateNode={isHidden:!1},t}function cu(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function fu(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vf(t,e,n,i,r,s,o,a,l){return t=new dx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Af(s),t}function hx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function e_(t){if(!t)return ji;t=t._reactInternals;e:{if(Lr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(nn(n))return eg(t,n,e)}return e}function t_(t,e,n,i,r,s,o,a,l){return t=Vf(n,i,!0,t,r,s,o,a,l),t.context=e_(null),n=t.current,i=Yt(),r=Bi(n),s=di(i,r),s.callback=e??null,zi(n,s,r),t.current.lanes=r,bo(t,r,i),rn(t,i),t}function Cl(t,e,n,i){var r=e.current,s=Yt(),o=Bi(r);return n=e_(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=zi(r,e,o),t!==null&&(Bn(t,r,o,s),ba(t,r,o)),o}function ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wf(t,e){dh(t,e),(t=t.alternate)&&dh(t,e)}function px(){return null}var n_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xf(t){this._internalRoot=t}Pl.prototype.render=Xf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Cl(t,e,null,null)};Pl.prototype.unmount=Xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){Cl(null,t,null,null)}),e[pi]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Nm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ci.length&&e!==0&&e<Ci[n].priority;n++);Ci.splice(n,0,t),n===0&&Im(t)}};function jf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hh(){}function mx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ll(o);s.call(u)}}var o=t_(e,i,t,0,null,!1,!1,"",hh);return t._reactRootContainer=o,t[pi]=o.current,yo(t.nodeType===8?t.parentNode:t),Rr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ll(l);a.call(u)}}var l=Vf(t,0,!1,null,null,!1,!1,"",hh);return t._reactRootContainer=l,t[pi]=l.current,yo(t.nodeType===8?t.parentNode:t),Rr(function(){Cl(e,l,n,i)}),l}function bl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ll(o);a.call(l)}}Cl(e,o,t,r)}else o=mx(n,e,t,r,i);return ll(o)}bm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=eo(e.pendingLanes);n!==0&&(ff(e,n|1),rn(e,yt()),!(Je&6)&&(Ts=yt()+500,Zi()))}break;case 13:Rr(function(){var i=mi(t,1);if(i!==null){var r=Yt();Bn(i,t,1,r)}}),Wf(t,1)}};df=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=Yt();Bn(e,t,134217728,n)}Wf(t,134217728)}};Dm=function(t){if(t.tag===13){var e=Bi(t),n=mi(t,e);if(n!==null){var i=Yt();Bn(n,t,e,i)}Wf(t,e)}};Nm=function(){return tt};Um=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};uc=function(t,e,n){switch(e){case"input":if(nc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Sl(i);if(!r)throw Error(re(90));fm(i),nc(i,r)}}}break;case"textarea":hm(t,n);break;case"select":e=n.value,e!=null&&cs(t,!!n.multiple,e,!1)}};ym=kf;Sm=Rr;var gx={usingClientEntryPoint:!1,Events:[No,es,Sl,vm,xm,kf]},Vs={findFiberByHostInstance:pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_x={bundleType:Vs.bundleType,version:Vs.version,rendererPackageName:Vs.rendererPackageName,rendererConfig:Vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tm(t),t===null?null:t.stateNode},findFiberByHostInstance:Vs.findFiberByHostInstance||px,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{_l=ra.inject(_x),$n=ra}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gx;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jf(e))throw Error(re(200));return hx(t,e,null,n)};vn.createRoot=function(t,e){if(!jf(t))throw Error(re(299));var n=!1,i="",r=n_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vf(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,yo(t.nodeType===8?t.parentNode:t),new Xf(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Tm(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Rr(t)};vn.hydrate=function(t,e,n){if(!Ll(e))throw Error(re(200));return bl(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!jf(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=n_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=t_(e,null,t,1,n??null,r,!1,s,o),t[pi]=e.current,yo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Pl(e)};vn.render=function(t,e,n){if(!Ll(e))throw Error(re(200));return bl(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Ll(t))throw Error(re(40));return t._reactRootContainer?(Rr(function(){bl(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};vn.unstable_batchedUpdates=kf;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ll(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return bl(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function i_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i_)}catch(t){console.error(t)}}i_(),im.exports=vn;var vx=im.exports,ph=vx;$u.createRoot=ph.createRoot,$u.hydrateRoot=ph.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yf="162",xx=0,mh=1,yx=2,r_=1,s_=2,si=3,Yi=0,sn=1,Yn=2,Gi=0,gs=1,gh=2,_h=3,vh=4,Sx=5,dr=100,Mx=101,Ex=102,xh=103,yh=104,Tx=200,wx=201,Ax=202,Rx=203,Gc=204,Vc=205,Cx=206,Px=207,Lx=208,bx=209,Dx=210,Nx=211,Ux=212,Ix=213,Fx=214,Ox=0,zx=1,kx=2,ul=3,Bx=4,Hx=5,Gx=6,Vx=7,o_=0,Wx=1,Xx=2,Vi=0,jx=1,Yx=2,qx=3,$x=4,Kx=5,Zx=6,Qx=7,a_=300,ws=301,As=302,Wc=303,Xc=304,Dl=306,jc=1e3,On=1001,Yc=1002,jt=1003,Sh=1004,Ws=1005,Zt=1006,du=1007,_r=1008,Wi=1009,Jx=1010,ey=1011,qf=1012,l_=1013,Ni=1014,li=1015,Po=1016,u_=1017,c_=1018,yr=1020,ty=1021,zn=1023,ny=1024,iy=1025,Sr=1026,Rs=1027,ry=1028,f_=1029,sy=1030,d_=1031,h_=1033,hu=33776,pu=33777,mu=33778,gu=33779,Mh=35840,Eh=35841,Th=35842,wh=35843,p_=36196,Ah=37492,Rh=37496,Ch=37808,Ph=37809,Lh=37810,bh=37811,Dh=37812,Nh=37813,Uh=37814,Ih=37815,Fh=37816,Oh=37817,zh=37818,kh=37819,Bh=37820,Hh=37821,_u=36492,Gh=36494,Vh=36495,oy=36283,Wh=36284,Xh=36285,jh=36286,ay=3200,ly=3201,m_=0,uy=1,Li="",Wn="srgb",Qi="srgb-linear",$f="display-p3",Nl="display-p3-linear",cl="linear",ot="srgb",fl="rec709",dl="p3",Dr=7680,Yh=519,cy=512,fy=513,dy=514,g_=515,hy=516,py=517,my=518,gy=519,qh=35044,$h="300 es",qc=1035,fi=2e3,hl=2001;class Ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vu=Math.PI/180,$c=180/Math.PI;function Io(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Jt(t,e,n){return Math.max(e,Math.min(n,t))}function _y(t,e){return(t%e+e)%e}function xu(t,e,n){return(1-n)*t+n*e}function Kh(t){return(t&t-1)===0&&t!==0}function Kc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Xs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],m=i[5],v=i[8],x=r[0],p=r[3],c=r[6],_=r[1],g=r[4],M=r[7],A=r[2],w=r[5],T=r[8];return s[0]=o*x+a*_+l*A,s[3]=o*p+a*g+l*w,s[6]=o*c+a*M+l*T,s[1]=u*x+f*_+d*A,s[4]=u*p+f*g+d*w,s[7]=u*c+f*M+d*T,s[2]=h*x+m*_+v*A,s[5]=h*p+m*g+v*w,s[8]=h*c+m*M+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*o-a*u,h=a*l-f*s,m=u*s-o*l,v=n*d+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*u-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(yu.makeScale(e,n)),this}rotate(e){return this.premultiply(yu.makeRotation(-e)),this}translate(e,n){return this.premultiply(yu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yu=new Ge;function __(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function pl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function vy(){const t=pl("canvas");return t.style.display="block",t}const Zh={};function xy(t){t in Zh||(Zh[t]=!0,console.warn(t))}const Qh=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jh=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sa={[Qi]:{transfer:cl,primaries:fl,toReference:t=>t,fromReference:t=>t},[Wn]:{transfer:ot,primaries:fl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Nl]:{transfer:cl,primaries:dl,toReference:t=>t.applyMatrix3(Jh),fromReference:t=>t.applyMatrix3(Qh)},[$f]:{transfer:ot,primaries:dl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Jh),fromReference:t=>t.applyMatrix3(Qh).convertLinearToSRGB()}},yy=new Set([Qi,Nl]),nt={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!yy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=sa[e].toReference,r=sa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return sa[t].primaries},getTransfer:function(t){return t===Li?cl:sa[t].transfer}};function _s(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Su(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Nr;class v_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Nr===void 0&&(Nr=pl("canvas")),Nr.width=e.width,Nr.height=e.height;const i=Nr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Nr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_s(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(_s(n[i]/255)*255):n[i]=_s(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sy=0;class x_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mu(r[o].image)):s.push(Mu(r[o]))}else s=Mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?v_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let My=0;class on extends Ds{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=On,r=On,s=Zt,o=_r,a=zn,l=Wi,u=on.DEFAULT_ANISOTROPY,f=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Io(),this.name="",this.source=new x_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==a_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jc:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jc:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=a_;on.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,n=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],m=l[5],v=l[9],x=l[2],p=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(v+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,M=(m+1)/2,A=(c+1)/2,w=(f+h)/4,T=(d+x)/4,L=(v+p)/4;return g>M&&g>A?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=w/i,s=T/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=w/r,s=L/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=T/s,r=L/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-v)*(p-v)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(d-x)/_,this.z=(h-f)/_,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ey extends Ds{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new dt(0,0,e,n),this.scissorTest=!1,this.viewport=new dt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new on(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new x_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends Ey{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class y_ extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ty extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(d!==x||l!==h||u!==m||f!==v){let p=1-a;const c=l*h+u*m+f*v+d*x,_=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const A=Math.sqrt(g),w=Math.atan2(A,c*_);p=Math.sin(p*w)/A,a=Math.sin(a*w)/A}const M=a*_;if(l=l*p+h*M,u=u*p+m*M,f=f*p+v*M,d=d*p+x*M,p===1-a){const A=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=A,u*=A,f*=A,d*=A}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+f*d+l*m-u*h,e[n+1]=l*v+f*h+u*d-a*m,e[n+2]=u*v+f*m+a*h-l*d,e[n+3]=f*v-a*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*f*d+u*m*v,this._y=u*m*d-h*f*v,this._z=u*f*v+h*m*d,this._w=u*f*d-h*m*v;break;case"YXZ":this._x=h*f*d+u*m*v,this._y=u*m*d-h*f*v,this._z=u*f*v-h*m*d,this._w=u*f*d+h*m*v;break;case"ZXY":this._x=h*f*d-u*m*v,this._y=u*m*d+h*f*v,this._z=u*f*v+h*m*d,this._w=u*f*d-h*m*v;break;case"ZYX":this._x=h*f*d-u*m*v,this._y=u*m*d+h*f*v,this._z=u*f*v-h*m*d,this._w=u*f*d+h*m*v;break;case"YZX":this._x=h*f*d+u*m*v,this._y=u*m*d+h*f*v,this._z=u*f*v-h*m*d,this._w=u*f*d-h*m*v;break;case"XZY":this._x=h*f*d-u*m*v,this._y=u*m*d-h*f*v,this._z=u*f*v+h*m*d,this._w=u*f*d+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ep.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ep.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*f,this.y=i+l*f+a*u-s*d,this.z=r+l*d+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new F,ep=new Fo;class Oo{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oa.copy(i.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),aa.subVectors(this.max,js),Ur.subVectors(e.a,js),Ir.subVectors(e.b,js),Fr.subVectors(e.c,js),yi.subVectors(Ir,Ur),Si.subVectors(Fr,Ir),tr.subVectors(Ur,Fr);let n=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-tr.z,tr.y,yi.z,0,-yi.x,Si.z,0,-Si.x,tr.z,0,-tr.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-tr.y,tr.x,0];return!Tu(n,Ur,Ir,Fr,aa)||(n=[1,0,0,0,1,0,0,0,1],!Tu(n,Ur,Ir,Fr,aa))?!1:(la.crossVectors(yi,Si),n=[la.x,la.y,la.z],Tu(n,Ur,Ir,Fr,aa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new F,new F,new F,new F,new F,new F,new F,new F],Pn=new F,oa=new Oo,Ur=new F,Ir=new F,Fr=new F,yi=new F,Si=new F,tr=new F,js=new F,aa=new F,la=new F,nr=new F;function Tu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){nr.fromArray(t,s);const a=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),u=n.dot(nr),f=i.dot(nr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const wy=new Oo,Ys=new F,wu=new F;class Kf{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):wy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const n=Ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(wu)),this.expandByPoint(Ys.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new F,Au=new F,ua=new F,Mi=new F,Ru=new F,ca=new F,Cu=new F;class Ay{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Au.copy(e).add(n).multiplyScalar(.5),ua.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(Au);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ua),a=Mi.dot(this.direction),l=-Mi.dot(ua),u=Mi.lengthSq(),f=Math.abs(1-o*o);let d,h,m,v;if(f>0)if(d=o*l-a,h=o*a-l,v=s*f,d>=0)if(h>=-v)if(h<=v){const x=1/f;d*=x,h*=x,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+u):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Au).addScaledVector(ua,h),m}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){Ru.subVectors(n,e),ca.subVectors(i,e),Cu.crossVectors(Ru,ca);let o=this.direction.dot(Cu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(ca.crossVectors(Mi,ca));if(l<0)return null;const u=a*this.direction.dot(Ru.cross(Mi));if(u<0||l+u>o)return null;const f=-a*Mi.dot(Cu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,o,a,l,u,f,d,h,m,v,x,p){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,d,h,m,v,x,p)}set(e,n,i,r,s,o,a,l,u,f,d,h,m,v,x,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=m,c[7]=v,c[11]=x,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),o=1/Or.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*d,v=a*f,x=a*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=m+v*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=v+m*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,v=u*f,x=u*d;n[0]=h+x*a,n[4]=v*a-m,n[8]=o*u,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=m*a-v,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,v=u*f,x=u*d;n[0]=h-x*a,n[4]=-o*d,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*f,n[9]=x-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*d,v=a*f,x=a*d;n[0]=l*f,n[4]=v*u-m,n[8]=h*u+x,n[1]=l*d,n[5]=x*u+h,n[9]=m*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,v=a*l,x=a*u;n[0]=l*f,n[4]=x-h*d,n[8]=v*d+m,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=m*d+v,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,m=o*u,v=a*l,x=a*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+x,n[5]=o*f,n[9]=m*d-v,n[2]=v*d-m,n[6]=a*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ry,e,Cy)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Ei.crossVectors(i,un),Ei.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ei.crossVectors(i,un)),Ei.normalize(),fa.crossVectors(un,Ei),r[0]=Ei.x,r[4]=fa.x,r[8]=un.x,r[1]=Ei.y,r[5]=fa.y,r[9]=un.y,r[2]=Ei.z,r[6]=fa.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],m=i[13],v=i[2],x=i[6],p=i[10],c=i[14],_=i[3],g=i[7],M=i[11],A=i[15],w=r[0],T=r[4],L=r[8],X=r[12],y=r[1],C=r[5],q=r[9],K=r[13],b=r[2],j=r[6],V=r[10],Z=r[14],D=r[3],O=r[7],H=r[11],J=r[15];return s[0]=o*w+a*y+l*b+u*D,s[4]=o*T+a*C+l*j+u*O,s[8]=o*L+a*q+l*V+u*H,s[12]=o*X+a*K+l*Z+u*J,s[1]=f*w+d*y+h*b+m*D,s[5]=f*T+d*C+h*j+m*O,s[9]=f*L+d*q+h*V+m*H,s[13]=f*X+d*K+h*Z+m*J,s[2]=v*w+x*y+p*b+c*D,s[6]=v*T+x*C+p*j+c*O,s[10]=v*L+x*q+p*V+c*H,s[14]=v*X+x*K+p*Z+c*J,s[3]=_*w+g*y+M*b+A*D,s[7]=_*T+g*C+M*j+A*O,s[11]=_*L+g*q+M*V+A*H,s[15]=_*X+g*K+M*Z+A*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],m=e[14],v=e[3],x=e[7],p=e[11],c=e[15];return v*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*m-i*l*m)+x*(+n*l*m-n*u*h+s*o*h-r*o*m+r*u*f-s*l*f)+p*(+n*u*d-n*a*m-s*o*d+i*o*m+s*a*f-i*u*f)+c*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],m=e[11],v=e[12],x=e[13],p=e[14],c=e[15],_=d*p*u-x*h*u+x*l*m-a*p*m-d*l*c+a*h*c,g=v*h*u-f*p*u-v*l*m+o*p*m+f*l*c-o*h*c,M=f*x*u-v*d*u+v*a*m-o*x*m-f*a*c+o*d*c,A=v*d*l-f*x*l-v*a*h+o*x*h+f*a*p-o*d*p,w=n*_+i*g+r*M+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=_*T,e[1]=(x*h*s-d*p*s-x*r*m+i*p*m+d*r*c-i*h*c)*T,e[2]=(a*p*s-x*l*s+x*r*u-i*p*u-a*r*c+i*l*c)*T,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*m-i*l*m)*T,e[4]=g*T,e[5]=(f*p*s-v*h*s+v*r*m-n*p*m-f*r*c+n*h*c)*T,e[6]=(v*l*s-o*p*s-v*r*u+n*p*u+o*r*c-n*l*c)*T,e[7]=(o*h*s-f*l*s+f*r*u-n*h*u-o*r*m+n*l*m)*T,e[8]=M*T,e[9]=(v*d*s-f*x*s-v*i*m+n*x*m+f*i*c-n*d*c)*T,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*c+n*a*c)*T,e[11]=(f*a*s-o*d*s-f*i*u+n*d*u+o*i*m-n*a*m)*T,e[12]=A*T,e[13]=(f*x*r-v*d*r+v*i*h-n*x*h-f*i*p+n*d*p)*T,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*p-n*a*p)*T,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,d=a+a,h=s*u,m=s*f,v=s*d,x=o*f,p=o*d,c=a*d,_=l*u,g=l*f,M=l*d,A=i.x,w=i.y,T=i.z;return r[0]=(1-(x+c))*A,r[1]=(m+M)*A,r[2]=(v-g)*A,r[3]=0,r[4]=(m-M)*w,r[5]=(1-(h+c))*w,r[6]=(p+_)*w,r[7]=0,r[8]=(v+g)*T,r[9]=(p-_)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Or.set(r[0],r[1],r[2]).length();const o=Or.set(r[4],r[5],r[6]).length(),a=Or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const u=1/s,f=1/o,d=1/a;return Ln.elements[0]*=u,Ln.elements[1]*=u,Ln.elements[2]*=u,Ln.elements[4]*=f,Ln.elements[5]*=f,Ln.elements[6]*=f,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,n.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=fi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,v;if(a===fi)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===hl)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=fi){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*u,m=(i+r)*f;let v,x;if(a===fi)v=(o+s)*d,x=-2*d;else if(a===hl)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Or=new F,Ln=new vt,Ry=new F(0,0,0),Cy=new F(1,1,1),Ei=new F,fa=new F,un=new F,tp=new vt,np=new Fo;class Qn{constructor(e=0,n=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return np.setFromEuler(this),this.setFromQuaternion(np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class S_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Py=0;const ip=new F,zr=new Fo,ni=new vt,da=new F,qs=new F,Ly=new F,by=new Fo,rp=new F(1,0,0),sp=new F(0,1,0),op=new F(0,0,1),Dy={type:"added"},Ny={type:"removed"},Pu={type:"childadded",child:null},Lu={type:"childremoved",child:null};class Ut extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new F,n=new Qn,i=new Fo,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ge}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new S_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(rp,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(op,e)}translateOnAxis(e,n){return ip.copy(e).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rp,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?da.copy(e):da.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(qs,da,this.up):ni.lookAt(da,qs,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(ni),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Dy),Pu.child=e,this.dispatchEvent(Pu),Pu.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ny),Lu.child=e,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,Ly),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,by,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new F(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new F,ii=new F,bu=new F,ri=new F,kr=new F,Br=new F,ap=new F,Du=new F,Nu=new F,Uu=new F;class qn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),bn.subVectors(e,n),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){bn.subVectors(r,n),ii.subVectors(i,n),bu.subVectors(e,n);const o=bn.dot(bn),a=bn.dot(ii),l=bn.dot(bu),u=ii.dot(ii),f=ii.dot(bu),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(u*l-a*f)*h,v=(o*f-a*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static isFrontFacing(e,n,i,r){return bn.subVectors(i,n),ii.subVectors(e,n),bn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),bn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;kr.subVectors(r,i),Br.subVectors(s,i),Du.subVectors(e,i);const l=kr.dot(Du),u=Br.dot(Du);if(l<=0&&u<=0)return n.copy(i);Nu.subVectors(e,r);const f=kr.dot(Nu),d=Br.dot(Nu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(kr,o);Uu.subVectors(e,s);const m=kr.dot(Uu),v=Br.dot(Uu);if(v>=0&&m<=v)return n.copy(s);const x=m*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Br,a);const p=f*v-m*d;if(p<=0&&d-f>=0&&m-v>=0)return ap.subVectors(s,r),a=(d-f)/(d-f+(m-v)),n.copy(r).addScaledVector(ap,a);const c=1/(p+x+h);return o=x*c,a=h*c,n.copy(i).addScaledVector(kr,o).addScaledVector(Br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const M_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Iu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=_y(e,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Iu(o,s,e+1/3),this.g=Iu(o,s,e),this.b=Iu(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=M_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}copyLinearToSRGB(e){return this.r=Su(e.r),this.g=Su(e.g),this.b=Su(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return nt.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Jt(Bt.r*255,0,255))*65536+Math.round(Jt(Bt.g*255,0,255))*256+Math.round(Jt(Bt.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Wn){nt.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+n,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ti),e.getHSL(ha);const i=xu(Ti.h,ha.h,n),r=xu(Ti.s,ha.s,n),s=xu(Ti.l,ha.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ze;Ze.NAMES=M_;let Uy=0;class zo extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=gs,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Vc,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gc&&(i.blendSrc=this.blendSrc),this.blendDst!==Vc&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ul&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ml extends zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=o_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new F,pa=new $e;class Zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=qh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return xy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)pa.fromBufferAttribute(this,n),pa.applyMatrix3(e),this.setXY(n,pa.x,pa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Xs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Xs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Xs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Xs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Xs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qh&&(e.usage=this.usage),e}}class E_ extends Zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class T_ extends Zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gn extends Zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Iy=0;const Sn=new vt,Fu=new Ut,Hr=new F,cn=new Oo,$s=new Oo,Pt=new F;class vi extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(__(e)?T_:E_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(cn.min,$s.min),cn.expandByPoint(Pt),Pt.addVectors(cn.max,$s.max),cn.expandByPoint(Pt)):(cn.expandByPoint($s.min),cn.expandByPoint($s.max))}cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Pt.fromBufferAttribute(a,u),l&&(Hr.fromBufferAttribute(e,u),Pt.add(Hr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new F,l[L]=new F;const u=new F,f=new F,d=new F,h=new $e,m=new $e,v=new $e,x=new F,p=new F;function c(L,X,y){u.fromBufferAttribute(i,L),f.fromBufferAttribute(i,X),d.fromBufferAttribute(i,y),h.fromBufferAttribute(s,L),m.fromBufferAttribute(s,X),v.fromBufferAttribute(s,y),f.sub(u),d.sub(u),m.sub(h),v.sub(h);const C=1/(m.x*v.y-v.x*m.y);isFinite(C)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(C),a[L].add(x),a[X].add(x),a[y].add(x),l[L].add(p),l[X].add(p),l[y].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let L=0,X=_.length;L<X;++L){const y=_[L],C=y.start,q=y.count;for(let K=C,b=C+q;K<b;K+=3)c(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const g=new F,M=new F,A=new F,w=new F;function T(L){A.fromBufferAttribute(r,L),w.copy(A);const X=a[L];g.copy(X),g.sub(A.multiplyScalar(A.dot(X))).normalize(),M.crossVectors(w,X);const C=M.dot(l[L])<0?-1:1;o.setXYZW(L,g.x,g.y,g.z,C)}for(let L=0,X=_.length;L<X;++L){const y=_[L],C=y.start,q=y.count;for(let K=C,b=C+q;K<b;K+=3)T(e.getX(K+0)),T(e.getX(K+1)),T(e.getX(K+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,f=new F,d=new F;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let m=0,v=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*f;for(let c=0;c<f;c++)h[v++]=u[m++]}return new Zn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lp=new vt,ir=new Ay,ma=new Kf,up=new F,Gr=new F,Vr=new F,Wr=new F,Ou=new F,ga=new F,_a=new $e,va=new $e,xa=new $e,cp=new F,fp=new F,dp=new F,ya=new F,Sa=new F;class at extends Ut{constructor(e=new vi,n=new ml){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ga.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],d=s[l];f!==0&&(Ou.fromBufferAttribute(d,e),o?ga.addScaledVector(Ou,f):ga.addScaledVector(Ou.sub(n),f))}n.add(ga)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(ma.containsPoint(ir.origin)===!1&&(ir.intersectSphere(ma,up)===null||ir.origin.distanceToSquared(up)>(e.far-e.near)**2))&&(lp.copy(s).invert(),ir.copy(e.ray).applyMatrix4(lp),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const p=h[v],c=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,A=g;M<A;M+=3){const w=a.getX(M),T=a.getX(M+1),L=a.getX(M+2);r=Ma(this,c,e,i,u,f,d,w,T,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=v,c=x;p<c;p+=3){const _=a.getX(p),g=a.getX(p+1),M=a.getX(p+2);r=Ma(this,o,e,i,u,f,d,_,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const p=h[v],c=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,A=g;M<A;M+=3){const w=M,T=M+1,L=M+2;r=Ma(this,c,e,i,u,f,d,w,T,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=v,c=x;p<c;p+=3){const _=p,g=p+1,M=p+2;r=Ma(this,o,e,i,u,f,d,_,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Fy(t,e,n,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Yi,a),l===null)return null;Sa.copy(a),Sa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Sa);return u<n.near||u>n.far?null:{distance:u,point:Sa.clone(),object:t}}function Ma(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Gr),t.getVertexPosition(l,Vr),t.getVertexPosition(u,Wr);const f=Fy(t,e,n,i,Gr,Vr,Wr,ya);if(f){r&&(_a.fromBufferAttribute(r,a),va.fromBufferAttribute(r,l),xa.fromBufferAttribute(r,u),f.uv=qn.getInterpolation(ya,Gr,Vr,Wr,_a,va,xa,new $e)),s&&(_a.fromBufferAttribute(s,a),va.fromBufferAttribute(s,l),xa.fromBufferAttribute(s,u),f.uv1=qn.getInterpolation(ya,Gr,Vr,Wr,_a,va,xa,new $e)),o&&(cp.fromBufferAttribute(o,a),fp.fromBufferAttribute(o,l),dp.fromBufferAttribute(o,u),f.normal=qn.getInterpolation(ya,Gr,Vr,Wr,cp,fp,dp,new F),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new F,materialIndex:0};qn.getNormal(Gr,Vr,Wr,d.normal),f.face=d}return f}class hn extends vi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],d=[];let h=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gn(u,3)),this.setAttribute("normal",new gn(f,3)),this.setAttribute("uv",new gn(d,2));function v(x,p,c,_,g,M,A,w,T,L,X){const y=M/T,C=A/L,q=M/2,K=A/2,b=w/2,j=T+1,V=L+1;let Z=0,D=0;const O=new F;for(let H=0;H<V;H++){const J=H*C-K;for(let le=0;le<j;le++){const Pe=le*y-q;O[x]=Pe*_,O[p]=J*g,O[c]=b,u.push(O.x,O.y,O.z),O[x]=0,O[p]=0,O[c]=w>0?1:-1,f.push(O.x,O.y,O.z),d.push(le/T),d.push(1-H/L),Z+=1}}for(let H=0;H<L;H++)for(let J=0;J<T;J++){const le=h+J+j*H,Pe=h+J+j*(H+1),k=h+(J+1)+j*(H+1),ee=h+(J+1)+j*H;l.push(le,Pe,ee),l.push(Pe,k,ee),D+=6}a.addGroup(m,D,X),m+=D,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=Cs(t[n]);for(const r in i)e[r]=i[r]}return e}function Oy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function w_(t){return t.getRenderTarget()===null?t.outputColorSpace:nt.workingColorSpace}const zy={clone:Cs,merge:Wt};var ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,By=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ky,this.fragmentShader=By,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=Oy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class A_ extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new F,hp=new $e,pp=new $e;class dn extends A_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$c*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $c*2*Math.atan(Math.tan(vu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,n){return this.getViewBounds(e,hp,pp),n.subVectors(pp,hp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xr=-90,jr=1;class Hy extends Ut{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(Xr,jr,e,n);r.layers=this.layers,this.add(r);const s=new dn(Xr,jr,e,n);s.layers=this.layers,this.add(s);const o=new dn(Xr,jr,e,n);o.layers=this.layers,this.add(o);const a=new dn(Xr,jr,e,n);a.layers=this.layers,this.add(a);const l=new dn(Xr,jr,e,n);l.layers=this.layers,this.add(l);const u=new dn(Xr,jr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class R_ extends on{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:ws,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gy extends Cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new R_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hn(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Gi});s.uniforms.tEquirect.value=n;const o=new at(r,s),a=n.minFilter;return n.minFilter===_r&&(n.minFilter=Zt),new Hy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const zu=new F,Vy=new F,Wy=new Ge;class cr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=zu.subVectors(i,n).cross(Vy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(zu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Wy.getNormalMatrix(e),r=this.coplanarPoint(zu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Kf,Ea=new F;class Zf{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,o=new cr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],m=r[8],v=r[9],x=r[10],p=r[11],c=r[12],_=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,h-u,p-m,M-c).normalize(),i[1].setComponents(l+s,h+u,p+m,M+c).normalize(),i[2].setComponents(l+o,h+f,p+v,M+_).normalize(),i[3].setComponents(l-o,h-f,p-v,M-_).normalize(),i[4].setComponents(l-a,h-d,p-x,M-g).normalize(),n===fi)i[5].setComponents(l+a,h+d,p+x,M+g).normalize();else if(n===hl)i[5].setComponents(a,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ea.x=r.normal.x>0?e.max.x:e.min.x,Ea.y=r.normal.y>0?e.max.y:e.min.y,Ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function C_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Xy(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const d=u.array,h=u.usage,m=d.byteLength,v=t.createBuffer();t.bindBuffer(f,v),t.bufferData(f,d,h),u.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:m}}function s(u,f,d){const h=f.array,m=f._updateRange,v=f.updateRanges;if(t.bindBuffer(d,u),m.count===-1&&v.length===0&&t.bufferSubData(d,0,h),v.length!==0){for(let x=0,p=v.length;x<p;x++){const c=v[x];n?t.bufferSubData(d,c.start*h.BYTES_PER_ELEMENT,h,c.start,c.count):t.bufferSubData(d,c.start*h.BYTES_PER_ELEMENT,h.subarray(c.start,c.start+c.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,f),d.version=u.version}}return{get:o,remove:a,update:l}}class ko extends vi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=n/l,m=[],v=[],x=[],p=[];for(let c=0;c<f;c++){const _=c*h-o;for(let g=0;g<u;g++){const M=g*d-s;v.push(M,-_,0),x.push(0,0,1),p.push(g/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<a;_++){const g=_+u*c,M=_+u*(c+1),A=_+1+u*(c+1),w=_+1+u*c;m.push(g,M,w),m.push(M,A,w)}this.setIndex(m),this.setAttribute("position",new gn(v,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.widthSegments,e.heightSegments)}}var jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yy=`#ifdef USE_ALPHAHASH
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
#endif`,qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qy=`#ifdef USE_AOMAP
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
#endif`,Jy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eS=`#ifdef USE_BATCHING
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
#endif`,tS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sS=`#ifdef USE_IRIDESCENCE
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
#endif`,oS=`#ifdef USE_BUMPMAP
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
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mS=`#define PI 3.141592653589793
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
} // validated`,gS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_S=`vec3 transformedNormal = objectNormal;
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
#endif`,vS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MS="gl_FragColor = linearToOutputTexel( gl_FragColor );",ES=`
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
}`,TS=`#ifdef USE_ENVMAP
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
#endif`,wS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AS=`#ifdef USE_ENVMAP
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
#endif`,RS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CS=`#ifdef USE_ENVMAP
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
#endif`,PS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NS=`#ifdef USE_GRADIENTMAP
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
}`,US=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,IS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zS=`uniform bool receiveShadow;
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
#endif`,kS=`#ifdef USE_ENVMAP
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
#endif`,BS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WS=`PhysicalMaterial material;
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
#endif`,XS=`struct PhysicalMaterial {
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
}`,jS=`
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
#endif`,YS=`#if defined( RE_IndirectDiffuse )
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
#endif`,qS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$S=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,QS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,JS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nM=`#if defined( USE_POINTS_UV )
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
#endif`,iM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aM=`#ifdef USE_MORPHNORMALS
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
#endif`,lM=`#ifdef USE_MORPHTARGETS
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
#endif`,uM=`#ifdef USE_MORPHTARGETS
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
#endif`,cM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mM=`#ifdef USE_NORMALMAP
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
#endif`,gM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,MM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bM=`float getShadowMask() {
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
}`,DM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NM=`#ifdef USE_SKINNING
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
#endif`,UM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IM=`#ifdef USE_SKINNING
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
#endif`,FM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BM=`#ifdef USE_TRANSMISSION
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
#endif`,HM=`#ifdef USE_TRANSMISSION
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
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YM=`uniform sampler2D t2D;
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
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`#include <common>
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
}`,JM=`#if DEPTH_PACKING == 3200
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
}`,eE=`#define DISTANCE
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
}`,tE=`#define DISTANCE
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
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`uniform float scale;
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
}`,sE=`uniform vec3 diffuse;
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
}`,oE=`#include <common>
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
}`,aE=`uniform vec3 diffuse;
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
}`,lE=`#define LAMBERT
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
}`,uE=`#define LAMBERT
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
}`,cE=`#define MATCAP
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
}`,fE=`#define MATCAP
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
}`,dE=`#define NORMAL
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
}`,hE=`#define NORMAL
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
}`,pE=`#define PHONG
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
}`,mE=`#define PHONG
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
}`,gE=`#define STANDARD
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
}`,_E=`#define STANDARD
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
}`,vE=`#define TOON
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
}`,xE=`#define TOON
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
}`,yE=`uniform float size;
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
}`,SE=`uniform vec3 diffuse;
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
}`,ME=`#include <common>
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
}`,EE=`uniform vec3 color;
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
}`,TE=`uniform float rotation;
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
}`,wE=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:jy,alphahash_pars_fragment:Yy,alphamap_fragment:qy,alphamap_pars_fragment:$y,alphatest_fragment:Ky,alphatest_pars_fragment:Zy,aomap_fragment:Qy,aomap_pars_fragment:Jy,batching_pars_vertex:eS,batching_vertex:tS,begin_vertex:nS,beginnormal_vertex:iS,bsdfs:rS,iridescence_fragment:sS,bumpmap_pars_fragment:oS,clipping_planes_fragment:aS,clipping_planes_pars_fragment:lS,clipping_planes_pars_vertex:uS,clipping_planes_vertex:cS,color_fragment:fS,color_pars_fragment:dS,color_pars_vertex:hS,color_vertex:pS,common:mS,cube_uv_reflection_fragment:gS,defaultnormal_vertex:_S,displacementmap_pars_vertex:vS,displacementmap_vertex:xS,emissivemap_fragment:yS,emissivemap_pars_fragment:SS,colorspace_fragment:MS,colorspace_pars_fragment:ES,envmap_fragment:TS,envmap_common_pars_fragment:wS,envmap_pars_fragment:AS,envmap_pars_vertex:RS,envmap_physical_pars_fragment:kS,envmap_vertex:CS,fog_vertex:PS,fog_pars_vertex:LS,fog_fragment:bS,fog_pars_fragment:DS,gradientmap_pars_fragment:NS,lightmap_fragment:US,lightmap_pars_fragment:IS,lights_lambert_fragment:FS,lights_lambert_pars_fragment:OS,lights_pars_begin:zS,lights_toon_fragment:BS,lights_toon_pars_fragment:HS,lights_phong_fragment:GS,lights_phong_pars_fragment:VS,lights_physical_fragment:WS,lights_physical_pars_fragment:XS,lights_fragment_begin:jS,lights_fragment_maps:YS,lights_fragment_end:qS,logdepthbuf_fragment:$S,logdepthbuf_pars_fragment:KS,logdepthbuf_pars_vertex:ZS,logdepthbuf_vertex:QS,map_fragment:JS,map_pars_fragment:eM,map_particle_fragment:tM,map_particle_pars_fragment:nM,metalnessmap_fragment:iM,metalnessmap_pars_fragment:rM,morphinstance_vertex:sM,morphcolor_vertex:oM,morphnormal_vertex:aM,morphtarget_pars_vertex:lM,morphtarget_vertex:uM,normal_fragment_begin:cM,normal_fragment_maps:fM,normal_pars_fragment:dM,normal_pars_vertex:hM,normal_vertex:pM,normalmap_pars_fragment:mM,clearcoat_normal_fragment_begin:gM,clearcoat_normal_fragment_maps:_M,clearcoat_pars_fragment:vM,iridescence_pars_fragment:xM,opaque_fragment:yM,packing:SM,premultiplied_alpha_fragment:MM,project_vertex:EM,dithering_fragment:TM,dithering_pars_fragment:wM,roughnessmap_fragment:AM,roughnessmap_pars_fragment:RM,shadowmap_pars_fragment:CM,shadowmap_pars_vertex:PM,shadowmap_vertex:LM,shadowmask_pars_fragment:bM,skinbase_vertex:DM,skinning_pars_vertex:NM,skinning_vertex:UM,skinnormal_vertex:IM,specularmap_fragment:FM,specularmap_pars_fragment:OM,tonemapping_fragment:zM,tonemapping_pars_fragment:kM,transmission_fragment:BM,transmission_pars_fragment:HM,uv_pars_fragment:GM,uv_pars_vertex:VM,uv_vertex:WM,worldpos_vertex:XM,background_vert:jM,background_frag:YM,backgroundCube_vert:qM,backgroundCube_frag:$M,cube_vert:KM,cube_frag:ZM,depth_vert:QM,depth_frag:JM,distanceRGBA_vert:eE,distanceRGBA_frag:tE,equirect_vert:nE,equirect_frag:iE,linedashed_vert:rE,linedashed_frag:sE,meshbasic_vert:oE,meshbasic_frag:aE,meshlambert_vert:lE,meshlambert_frag:uE,meshmatcap_vert:cE,meshmatcap_frag:fE,meshnormal_vert:dE,meshnormal_frag:hE,meshphong_vert:pE,meshphong_frag:mE,meshphysical_vert:gE,meshphysical_frag:_E,meshtoon_vert:vE,meshtoon_frag:xE,points_vert:yE,points_frag:SE,shadow_vert:ME,shadow_frag:EE,sprite_vert:TE,sprite_frag:wE},ce={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Xn={basic:{uniforms:Wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Wt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Wt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Wt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Wt([ce.points,ce.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Wt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Wt([ce.common,ce.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Wt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Wt([ce.sprite,ce.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Wt([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Wt([ce.lights,ce.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Xn.physical={uniforms:Wt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ta={r:0,b:0,g:0},sr=new Qn,AE=new vt;function RE(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,u,f,d=null,h=0,m=null;function v(p,c){let _=!1,g=c.isScene===!0?c.background:null;g&&g.isTexture&&(g=(c.backgroundBlurriness>0?n:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),_=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Dl)?(f===void 0&&(f=new at(new hn(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Cs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),sr.copy(c.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(AE.makeRotationFromEuler(sr)),f.material.toneMapped=nt.getTransfer(g.colorSpace)!==ot,(d!==g||h!==g.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new at(new ko(2,2),new qi({name:"BackgroundMaterial",uniforms:Cs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=nt.getTransfer(g.colorSpace)!==ot,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function x(p,c){p.getRGB(Ta,w_(t)),i.buffers.color.setClear(Ta.r,Ta.g,Ta.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),l=c,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:v}}function CE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,f=!1;function d(b,j,V,Z,D){let O=!1;if(o){const H=x(Z,V,j);u!==H&&(u=H,m(u.object)),O=c(b,Z,V,D),O&&_(b,Z,V,D)}else{const H=j.wireframe===!0;(u.geometry!==Z.id||u.program!==V.id||u.wireframe!==H)&&(u.geometry=Z.id,u.program=V.id,u.wireframe=H,O=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,L(b,j,V,Z),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(b){return i.isWebGL2?t.bindVertexArray(b):s.bindVertexArrayOES(b)}function v(b){return i.isWebGL2?t.deleteVertexArray(b):s.deleteVertexArrayOES(b)}function x(b,j,V){const Z=V.wireframe===!0;let D=a[b.id];D===void 0&&(D={},a[b.id]=D);let O=D[j.id];O===void 0&&(O={},D[j.id]=O);let H=O[Z];return H===void 0&&(H=p(h()),O[Z]=H),H}function p(b){const j=[],V=[],Z=[];for(let D=0;D<r;D++)j[D]=0,V[D]=0,Z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:V,attributeDivisors:Z,object:b,attributes:{},index:null}}function c(b,j,V,Z){const D=u.attributes,O=j.attributes;let H=0;const J=V.getAttributes();for(const le in J)if(J[le].location>=0){const k=D[le];let ee=O[le];if(ee===void 0&&(le==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),le==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor)),k===void 0||k.attribute!==ee||ee&&k.data!==ee.data)return!0;H++}return u.attributesNum!==H||u.index!==Z}function _(b,j,V,Z){const D={},O=j.attributes;let H=0;const J=V.getAttributes();for(const le in J)if(J[le].location>=0){let k=O[le];k===void 0&&(le==="instanceMatrix"&&b.instanceMatrix&&(k=b.instanceMatrix),le==="instanceColor"&&b.instanceColor&&(k=b.instanceColor));const ee={};ee.attribute=k,k&&k.data&&(ee.data=k.data),D[le]=ee,H++}u.attributes=D,u.attributesNum=H,u.index=Z}function g(){const b=u.newAttributes;for(let j=0,V=b.length;j<V;j++)b[j]=0}function M(b){A(b,0)}function A(b,j){const V=u.newAttributes,Z=u.enabledAttributes,D=u.attributeDivisors;V[b]=1,Z[b]===0&&(t.enableVertexAttribArray(b),Z[b]=1),D[b]!==j&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,j),D[b]=j)}function w(){const b=u.newAttributes,j=u.enabledAttributes;for(let V=0,Z=j.length;V<Z;V++)j[V]!==b[V]&&(t.disableVertexAttribArray(V),j[V]=0)}function T(b,j,V,Z,D,O,H){H===!0?t.vertexAttribIPointer(b,j,V,D,O):t.vertexAttribPointer(b,j,V,Z,D,O)}function L(b,j,V,Z){if(i.isWebGL2===!1&&(b.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const D=Z.attributes,O=V.getAttributes(),H=j.defaultAttributeValues;for(const J in O){const le=O[J];if(le.location>=0){let Pe=D[J];if(Pe===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(Pe=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(Pe=b.instanceColor)),Pe!==void 0){const k=Pe.normalized,ee=Pe.itemSize,se=n.get(Pe);if(se===void 0)continue;const Ae=se.buffer,Te=se.type,$=se.bytesPerElement,ye=i.isWebGL2===!0&&(Te===t.INT||Te===t.UNSIGNED_INT||Pe.gpuType===l_);if(Pe.isInterleavedBufferAttribute){const Se=Pe.data,N=Se.stride,ke=Pe.offset;if(Se.isInstancedInterleavedBuffer){for(let _e=0;_e<le.locationSize;_e++)A(le.location+_e,Se.meshPerAttribute);b.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let _e=0;_e<le.locationSize;_e++)M(le.location+_e);t.bindBuffer(t.ARRAY_BUFFER,Ae);for(let _e=0;_e<le.locationSize;_e++)T(le.location+_e,ee/le.locationSize,Te,k,N*$,(ke+ee/le.locationSize*_e)*$,ye)}else{if(Pe.isInstancedBufferAttribute){for(let Se=0;Se<le.locationSize;Se++)A(le.location+Se,Pe.meshPerAttribute);b.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Se=0;Se<le.locationSize;Se++)M(le.location+Se);t.bindBuffer(t.ARRAY_BUFFER,Ae);for(let Se=0;Se<le.locationSize;Se++)T(le.location+Se,ee/le.locationSize,Te,k,ee*$,ee/le.locationSize*Se*$,ye)}}else if(H!==void 0){const k=H[J];if(k!==void 0)switch(k.length){case 2:t.vertexAttrib2fv(le.location,k);break;case 3:t.vertexAttrib3fv(le.location,k);break;case 4:t.vertexAttrib4fv(le.location,k);break;default:t.vertexAttrib1fv(le.location,k)}}}}w()}function X(){q();for(const b in a){const j=a[b];for(const V in j){const Z=j[V];for(const D in Z)v(Z[D].object),delete Z[D];delete j[V]}delete a[b]}}function y(b){if(a[b.id]===void 0)return;const j=a[b.id];for(const V in j){const Z=j[V];for(const D in Z)v(Z[D].object),delete Z[D];delete j[V]}delete a[b.id]}function C(b){for(const j in a){const V=a[j];if(V[b.id]===void 0)continue;const Z=V[b.id];for(const D in Z)v(Z[D].object),delete Z[D];delete V[b.id]}}function q(){K(),f=!0,u!==l&&(u=l,m(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:K,dispose:X,releaseStatesOfGeometry:y,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:M,disableUnusedAttributes:w}}function PE(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let m,v;if(r)m=t,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,f,d,h),n.update(d,s,h)}function u(f,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<h;v++)this.render(f[v],d[v]);else{m.multiDrawArraysWEBGL(s,f,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=d[x];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function LE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,M=o||e.has("OES_texture_float"),A=g&&M,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:M,floatVertexTextures:A,maxSamples:w}}function bE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new cr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const v=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,c=t.get(d);if(!r||v===null||v.length===0||s&&!p)s?f(null):u();else{const _=s?0:i,g=_*4;let M=c.clippingState||null;l.value=M,M=f(v,h,g,m);for(let A=0;A!==g;++A)M[A]=n[A];c.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,v){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,v!==!0||p===null){const c=m+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<c)&&(p=new Float32Array(c));for(let g=0,M=m;g!==x;++g,M+=4)o.copy(d[g]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function DE(t){let e=new WeakMap;function n(o,a){return a===Wc?o.mapping=ws:a===Xc&&(o.mapping=As),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wc||a===Xc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Gy(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class P_ extends A_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const as=4,mp=[.125,.215,.35,.446,.526,.582],hr=20,ku=new P_,gp=new Ze;let Bu=null,Hu=0,Gu=0;const fr=(1+Math.sqrt(5))/2,Yr=1/fr,_p=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,fr,Yr),new F(0,fr,-Yr),new F(Yr,0,fr),new F(-Yr,0,fr),new F(fr,Yr,0),new F(-fr,Yr,0)];class vp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu,Hu,Gu),e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ws||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Po,format:zn,colorSpace:Qi,depthBuffer:!1},r=xp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NE(s)),this._blurMaterial=UE(s,e,n)}return r}_compileMaterial(e){const n=new at(this._lodPlanes[0],e);this._renderer.compile(n,ku)}_sceneToCubeUV(e,n,i,r){const a=new dn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(gp),f.toneMapping=Vi,f.autoClear=!1;const m=new ml({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),v=new at(new hn,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(gp),x=!0);for(let c=0;c<6;c++){const _=c%3;_===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):_===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;wa(r,_*g,c>2?g:0,g,g),f.setRenderTarget(r),x&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ws||e.mapping===As;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ku)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_p[(r-1)%_p.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new at(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*hr-1),x=s/v,p=isFinite(s)?1+Math.floor(f*x):hr;p>hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hr}`);const c=[];let _=0;for(let T=0;T<hr;++T){const L=T/x,X=Math.exp(-L*L/2);c.push(X),T===0?_+=X:T<p&&(_+=2*X)}for(let T=0;T<c.length;T++)c[T]=c[T]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=v,h.mipInt.value=g-i;const M=this._sizeLods[r],A=3*M*(r>g-as?r-g+as:0),w=4*(this._cubeSize-M);wa(n,A,w,3*M,2*M),l.setRenderTarget(n),l.render(d,ku)}}function NE(t){const e=[],n=[],i=[];let r=t;const s=t-as+1+mp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-as?l=mp[o-t+as-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,v=6,x=3,p=2,c=1,_=new Float32Array(x*v*m),g=new Float32Array(p*v*m),M=new Float32Array(c*v*m);for(let w=0;w<m;w++){const T=w%3*2/3-1,L=w>2?0:-1,X=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];_.set(X,x*v*w),g.set(h,p*v*w);const y=[w,w,w,w,w,w];M.set(y,c*v*w)}const A=new vi;A.setAttribute("position",new Zn(_,x)),A.setAttribute("uv",new Zn(g,p)),A.setAttribute("faceIndex",new Zn(M,c)),e.push(A),r>as&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function xp(t,e,n){const i=new Cr(t,e,n);return i.texture.mapping=Dl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function UE(t,e,n){const i=new Float32Array(hr),r=new F(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qf(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function yp(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qf(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Sp(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Qf(){return`

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
	`}function IE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Wc||l===Xc,f=l===ws||l===As;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new vp(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new vp(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function FE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function OE(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let p=0,c=x.length;p<c;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const x=m[v];for(let p=0,c=x.length;p<c;p++)e.update(x[p],t.ARRAY_BUFFER)}}function u(d){const h=[],m=d.index,v=d.attributes.position;let x=0;if(m!==null){const _=m.array;x=m.version;for(let g=0,M=_.length;g<M;g+=3){const A=_[g+0],w=_[g+1],T=_[g+2];h.push(A,w,w,T,T,A)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,M=_.length/3-1;g<M;g+=3){const A=g+0,w=g+1,T=g+2;h.push(A,w,w,T,T,A)}}else return;const p=new(__(h)?T_:E_)(h,1);p.version=x;const c=s.get(d);c&&e.remove(c),s.set(d,p)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function zE(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function u(m){a=m.type,l=m.bytesPerElement}function f(m,v){t.drawElements(s,v,a,m*l),n.update(v,s,1)}function d(m,v,x){if(x===0)return;let p,c;if(r)p=t,c="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[c](s,v,a,m*l,x),n.update(v,s,x)}function h(m,v,x){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let c=0;c<x;c++)this.render(m[c]/l,v[c]);else{p.multiDrawElementsWEBGL(s,v,0,a,m,0,x);let c=0;for(let _=0;_<x;_++)c+=v[_];n.update(c,s,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function kE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function BE(t,e){return t[0]-e[0]}function HE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function GE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new dt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=v!==void 0?v.length:0;let p=s.get(f);if(p===void 0||p.count!==x){let K=function(){C.dispose(),s.delete(f),f.removeEventListener("dispose",K)};var m=K;p!==void 0&&p.texture.dispose();const c=f.morphAttributes.position!==void 0,_=f.morphAttributes.normal!==void 0,g=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let T=0;c===!0&&(T=1),_===!0&&(T=2),g===!0&&(T=3);let L=f.attributes.position.count*T,X=1;L>e.maxTextureSize&&(X=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const y=new Float32Array(L*X*4*x),C=new y_(y,L,X,x);C.type=li,C.needsUpdate=!0;const q=T*4;for(let b=0;b<x;b++){const j=M[b],V=A[b],Z=w[b],D=L*X*4*b;for(let O=0;O<j.count;O++){const H=O*q;c===!0&&(o.fromBufferAttribute(j,O),y[D+H+0]=o.x,y[D+H+1]=o.y,y[D+H+2]=o.z,y[D+H+3]=0),_===!0&&(o.fromBufferAttribute(V,O),y[D+H+4]=o.x,y[D+H+5]=o.y,y[D+H+6]=o.z,y[D+H+7]=0),g===!0&&(o.fromBufferAttribute(Z,O),y[D+H+8]=o.x,y[D+H+9]=o.y,y[D+H+10]=o.z,y[D+H+11]=Z.itemSize===4?o.w:1)}}p={count:x,texture:C,size:new $e(L,X)},s.set(f,p),f.addEventListener("dispose",K)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(t,"morphTexture",u.morphTexture,n);else{let c=0;for(let g=0;g<h.length;g++)c+=h[g];const _=f.morphTargetsRelative?1:1-c;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",h)}d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const v=h===void 0?0:h.length;let x=i[f.id];if(x===void 0||x.length!==v){x=[];for(let M=0;M<v;M++)x[M]=[M,0];i[f.id]=x}for(let M=0;M<v;M++){const A=x[M];A[0]=M,A[1]=h[M]}x.sort(HE);for(let M=0;M<8;M++)M<v&&x[M][1]?(a[M][0]=x[M][0],a[M][1]=x[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(BE);const p=f.morphAttributes.position,c=f.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const A=a[M],w=A[0],T=A[1];w!==Number.MAX_SAFE_INTEGER&&T?(p&&f.getAttribute("morphTarget"+M)!==p[w]&&f.setAttribute("morphTarget"+M,p[w]),c&&f.getAttribute("morphNormal"+M)!==c[w]&&f.setAttribute("morphNormal"+M,c[w]),r[M]=T,_+=T):(p&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),c&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),r[M]=0)}const g=f.morphTargetsRelative?1:1-_;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function VE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class L_ extends on{constructor(e,n,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:Sr,f!==Sr&&f!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Sr&&(i=Ni),i===void 0&&f===Rs&&(i=yr),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const b_=new on,D_=new L_(1,1);D_.compareFunction=g_;const N_=new y_,U_=new Ty,I_=new R_,Mp=[],Ep=[],Tp=new Float32Array(16),wp=new Float32Array(9),Ap=new Float32Array(4);function Ns(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Mp[r];if(s===void 0&&(s=new Float32Array(r),Mp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ul(t,e){let n=Ep[e];n===void 0&&(n=new Int32Array(e),Ep[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function WE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function qE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(At(n,i))return;Ap.set(i),t.uniformMatrix2fv(this.addr,!1,Ap),Rt(n,i)}}function $E(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(At(n,i))return;wp.set(i),t.uniformMatrix3fv(this.addr,!1,wp),Rt(n,i)}}function KE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(At(n,i))return;Tp.set(i),t.uniformMatrix4fv(this.addr,!1,Tp),Rt(n,i)}}function ZE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function QE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function tT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function sT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?D_:b_;n.setTexture2D(e||s,r)}function oT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||U_,r)}function aT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||I_,r)}function lT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||N_,r)}function uT(t){switch(t){case 5126:return WE;case 35664:return XE;case 35665:return jE;case 35666:return YE;case 35674:return qE;case 35675:return $E;case 35676:return KE;case 5124:case 35670:return ZE;case 35667:case 35671:return QE;case 35668:case 35672:return JE;case 35669:case 35673:return eT;case 5125:return tT;case 36294:return nT;case 36295:return iT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return sT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return lT}}function cT(t,e){t.uniform1fv(this.addr,e)}function fT(t,e){const n=Ns(e,this.size,2);t.uniform2fv(this.addr,n)}function dT(t,e){const n=Ns(e,this.size,3);t.uniform3fv(this.addr,n)}function hT(t,e){const n=Ns(e,this.size,4);t.uniform4fv(this.addr,n)}function pT(t,e){const n=Ns(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function mT(t,e){const n=Ns(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function gT(t,e){const n=Ns(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _T(t,e){t.uniform1iv(this.addr,e)}function vT(t,e){t.uniform2iv(this.addr,e)}function xT(t,e){t.uniform3iv(this.addr,e)}function yT(t,e){t.uniform4iv(this.addr,e)}function ST(t,e){t.uniform1uiv(this.addr,e)}function MT(t,e){t.uniform2uiv(this.addr,e)}function ET(t,e){t.uniform3uiv(this.addr,e)}function TT(t,e){t.uniform4uiv(this.addr,e)}function wT(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||b_,s[o])}function AT(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||U_,s[o])}function RT(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||I_,s[o])}function CT(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||N_,s[o])}function PT(t){switch(t){case 5126:return cT;case 35664:return fT;case 35665:return dT;case 35666:return hT;case 35674:return pT;case 35675:return mT;case 35676:return gT;case 5124:case 35670:return _T;case 35667:case 35671:return vT;case 35668:case 35672:return xT;case 35669:case 35673:return yT;case 5125:return ST;case 36294:return MT;case 36295:return ET;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return wT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return RT;case 36289:case 36303:case 36311:case 36292:return CT}}class LT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=uT(n.type)}}class bT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=PT(n.type)}}class DT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Vu=/(\w+)(\])?(\[|\.)?/g;function Rp(t,e){t.seq.push(e),t.map[e.id]=e}function NT(t,e,n){const i=t.name,r=i.length;for(Vu.lastIndex=0;;){const s=Vu.exec(i),o=Vu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Rp(n,u===void 0?new LT(a,t,e):new bT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new DT(a),Rp(n,d)),n=d}}}class za{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);NT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Cp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const UT=37297;let IT=0;function FT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function OT(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===dl&&n===fl?i="LinearDisplayP3ToLinearSRGB":e===fl&&n===dl&&(i="LinearSRGBToLinearDisplayP3"),t){case Qi:case Nl:return[i,"LinearTransferOETF"];case Wn:case $f:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Pp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+FT(t.getShaderSource(e),o)}else return r}function zT(t,e){const n=OT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function kT(t,e){let n;switch(e){case jx:n="Linear";break;case Yx:n="Reinhard";break;case qx:n="OptimizedCineon";break;case $x:n="ACESFilmic";break;case Zx:n="AgX";break;case Qx:n="Neutral";break;case Kx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function BT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ls).join(`
`)}function HT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function GT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function VT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ls(t){return t!==""}function Lp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(t){return t.replace(WT,jT)}const XT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jT(t,e){let n=He[e];if(n===void 0){const i=XT.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zc(n)}const YT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dp(t){return t.replace(YT,qT)}function qT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Np(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function $T(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===r_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===s_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function KT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ws:case As:e="ENVMAP_TYPE_CUBE";break;case Dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function QT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case o_:e="ENVMAP_BLENDING_MULTIPLY";break;case Wx:e="ENVMAP_BLENDING_MIX";break;case Xx:e="ENVMAP_BLENDING_ADD";break}return e}function JT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ew(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=$T(n),u=KT(n),f=ZT(n),d=QT(n),h=JT(n),m=n.isWebGL2?"":BT(n),v=HT(n),x=GT(s),p=r.createProgram();let c,_,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ls).join(`
`),c.length>0&&(c+=`
`),_=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ls).join(`
`),_.length>0&&(_+=`
`)):(c=[Np(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),_=[m,Np(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vi?"#define TONE_MAPPING":"",n.toneMapping!==Vi?He.tonemapping_pars_fragment:"",n.toneMapping!==Vi?kT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,zT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ls).join(`
`)),o=Zc(o),o=Lp(o,n),o=bp(o,n),a=Zc(a),a=Lp(a,n),a=bp(a,n),o=Dp(o),a=Dp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,c=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=g+c+o,A=g+_+a,w=Cp(r,r.VERTEX_SHADER,M),T=Cp(r,r.FRAGMENT_SHADER,A);r.attachShader(p,w),r.attachShader(p,T),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function L(q){if(t.debug.checkShaderErrors){const K=r.getProgramInfoLog(p).trim(),b=r.getShaderInfoLog(w).trim(),j=r.getShaderInfoLog(T).trim();let V=!0,Z=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,w,T);else{const D=Pp(r,w,"vertex"),O=Pp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+K+`
`+D+`
`+O)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(b===""||j==="")&&(Z=!1);Z&&(q.diagnostics={runnable:V,programLog:K,vertexShader:{log:b,prefix:c},fragmentShader:{log:j,prefix:_}})}r.deleteShader(w),r.deleteShader(T),X=new za(r,p),y=VT(r,p)}let X;this.getUniforms=function(){return X===void 0&&L(this),X};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(p,UT)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=T,this}let tw=0;class nw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new iw(e),n.set(e,i)),i}}class iw{constructor(e){this.id=tw++,this.code=e,this.usedTimes=0}}function rw(t,e,n,i,r,s,o){const a=new S_,l=new nw,u=new Set,f=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return u.add(y),y===0?"uv":`uv${y}`}function c(y,C,q,K,b){const j=K.fog,V=b.geometry,Z=y.isMeshStandardMaterial?K.environment:null,D=(y.isMeshStandardMaterial?n:e).get(y.envMap||Z),O=D&&D.mapping===Dl?D.image.height:null,H=x[y.type];y.precision!==null&&(v=r.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const J=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,le=J!==void 0?J.length:0;let Pe=0;V.morphAttributes.position!==void 0&&(Pe=1),V.morphAttributes.normal!==void 0&&(Pe=2),V.morphAttributes.color!==void 0&&(Pe=3);let k,ee,se,Ae;if(H){const et=Xn[H];k=et.vertexShader,ee=et.fragmentShader}else k=y.vertexShader,ee=y.fragmentShader,l.update(y),se=l.getVertexShaderID(y),Ae=l.getFragmentShaderID(y);const Te=t.getRenderTarget(),$=b.isInstancedMesh===!0,ye=b.isBatchedMesh===!0,Se=!!y.map,N=!!y.matcap,ke=!!D,_e=!!y.aoMap,ge=!!y.lightMap,Me=!!y.bumpMap,je=!!y.normalMap,Oe=!!y.displacementMap,Ve=!!y.emissiveMap,ut=!!y.metalnessMap,R=!!y.roughnessMap,S=y.anisotropy>0,W=y.clearcoat>0,Y=y.iridescence>0,ne=y.sheen>0,te=y.transmission>0,Ne=S&&!!y.anisotropyMap,Re=W&&!!y.clearcoatMap,ue=W&&!!y.clearcoatNormalMap,de=W&&!!y.clearcoatRoughnessMap,Ue=Y&&!!y.iridescenceMap,oe=Y&&!!y.iridescenceThicknessMap,it=ne&&!!y.sheenColorMap,We=ne&&!!y.sheenRoughnessMap,we=!!y.specularMap,ve=!!y.specularColorMap,xe=!!y.specularIntensityMap,qe=te&&!!y.transmissionMap,De=te&&!!y.thicknessMap,me=!!y.gradientMap,P=!!y.alphaMap,ie=y.alphaTest>0,U=!!y.alphaHash,Q=!!y.extensions;let ae=Vi;y.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(ae=t.toneMapping);const Ie={isWebGL2:d,shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:k,fragmentShader:ee,defines:y.defines,customVertexShaderID:se,customFragmentShaderID:Ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:ye,instancing:$,instancingColor:$&&b.instanceColor!==null,instancingMorph:$&&b.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Te===null?t.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Qi,alphaToCoverage:!!y.alphaToCoverage,map:Se,matcap:N,envMap:ke,envMapMode:ke&&D.mapping,envMapCubeUVHeight:O,aoMap:_e,lightMap:ge,bumpMap:Me,normalMap:je,displacementMap:m&&Oe,emissiveMap:Ve,normalMapObjectSpace:je&&y.normalMapType===uy,normalMapTangentSpace:je&&y.normalMapType===m_,metalnessMap:ut,roughnessMap:R,anisotropy:S,anisotropyMap:Ne,clearcoat:W,clearcoatMap:Re,clearcoatNormalMap:ue,clearcoatRoughnessMap:de,iridescence:Y,iridescenceMap:Ue,iridescenceThicknessMap:oe,sheen:ne,sheenColorMap:it,sheenRoughnessMap:We,specularMap:we,specularColorMap:ve,specularIntensityMap:xe,transmission:te,transmissionMap:qe,thicknessMap:De,gradientMap:me,opaque:y.transparent===!1&&y.blending===gs&&y.alphaToCoverage===!1,alphaMap:P,alphaTest:ie,alphaHash:U,combine:y.combine,mapUv:Se&&p(y.map.channel),aoMapUv:_e&&p(y.aoMap.channel),lightMapUv:ge&&p(y.lightMap.channel),bumpMapUv:Me&&p(y.bumpMap.channel),normalMapUv:je&&p(y.normalMap.channel),displacementMapUv:Oe&&p(y.displacementMap.channel),emissiveMapUv:Ve&&p(y.emissiveMap.channel),metalnessMapUv:ut&&p(y.metalnessMap.channel),roughnessMapUv:R&&p(y.roughnessMap.channel),anisotropyMapUv:Ne&&p(y.anisotropyMap.channel),clearcoatMapUv:Re&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:it&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:We&&p(y.sheenRoughnessMap.channel),specularMapUv:we&&p(y.specularMap.channel),specularColorMapUv:ve&&p(y.specularColorMap.channel),specularIntensityMapUv:xe&&p(y.specularIntensityMap.channel),transmissionMapUv:qe&&p(y.transmissionMap.channel),thicknessMapUv:De&&p(y.thicknessMap.channel),alphaMapUv:P&&p(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(je||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!V.attributes.uv&&(Se||P),fog:!!j,useFog:y.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:b.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Pe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&q.length>0,shadowMapType:t.shadowMap.type,toneMapping:ae,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Se&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Yn,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:Q&&y.extensions.derivatives===!0,extensionFragDepth:Q&&y.extensions.fragDepth===!0,extensionDrawBuffers:Q&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:Q&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Q&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Q&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ie.vertexUv1s=u.has(1),Ie.vertexUv2s=u.has(2),Ie.vertexUv3s=u.has(3),u.clear(),Ie}function _(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const q in y.defines)C.push(q),C.push(y.defines[q]);return y.isRawShaderMaterial===!1&&(g(C,y),M(C,y),C.push(t.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function g(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function M(y,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.instancingMorph&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.normalMapObjectSpace&&a.enable(7),C.normalMapTangentSpace&&a.enable(8),C.clearcoat&&a.enable(9),C.iridescence&&a.enable(10),C.alphaTest&&a.enable(11),C.vertexColors&&a.enable(12),C.vertexAlphas&&a.enable(13),C.vertexUv1s&&a.enable(14),C.vertexUv2s&&a.enable(15),C.vertexUv3s&&a.enable(16),C.vertexTangents&&a.enable(17),C.anisotropy&&a.enable(18),C.alphaHash&&a.enable(19),C.batching&&a.enable(20),y.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.alphaToCoverage&&a.enable(20),y.push(a.mask)}function A(y){const C=x[y.type];let q;if(C){const K=Xn[C];q=zy.clone(K.uniforms)}else q=y.uniforms;return q}function w(y,C){let q;for(let K=0,b=f.length;K<b;K++){const j=f[K];if(j.cacheKey===C){q=j,++q.usedTimes;break}}return q===void 0&&(q=new ew(t,C,y,s),f.push(q)),q}function T(y){if(--y.usedTimes===0){const C=f.indexOf(y);f[C]=f[f.length-1],f.pop(),y.destroy()}}function L(y){l.remove(y)}function X(){l.dispose()}return{getParameters:c,getProgramCacheKey:_,getUniforms:A,acquireProgram:w,releaseProgram:T,releaseShaderCache:L,programs:f,dispose:X}}function sw(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function ow(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Up(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ip(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,v,x,p){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:m,groupOrder:v,renderOrder:d.renderOrder,z:x,group:p},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=m,c.groupOrder=v,c.renderOrder=d.renderOrder,c.z=x,c.group=p),e++,c}function a(d,h,m,v,x,p){const c=o(d,h,m,v,x,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(d,h,m,v,x,p){const c=o(d,h,m,v,x,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||ow),i.length>1&&i.sort(h||Up),r.length>1&&r.sort(h||Up)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function aw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ip,t.set(i,[o])):r>=s.length?(o=new Ip,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function lw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Ze};break;case"SpotLight":n={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function uw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let cw=0;function fw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function dw(t,e){const n=new lw,i=uw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new F);const s=new F,o=new vt,a=new vt;function l(f,d){let h=0,m=0,v=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let x=0,p=0,c=0,_=0,g=0,M=0,A=0,w=0,T=0,L=0,X=0;f.sort(fw);const y=d===!0?Math.PI:1;for(let q=0,K=f.length;q<K;q++){const b=f[q],j=b.color,V=b.intensity,Z=b.distance,D=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=j.r*V*y,m+=j.g*V*y,v+=j.b*V*y;else if(b.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(b.sh.coefficients[O],V);X++}else if(b.isDirectionalLight){const O=n.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity*y),b.castShadow){const H=b.shadow,J=i.get(b);J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,r.directionalShadow[x]=J,r.directionalShadowMap[x]=D,r.directionalShadowMatrix[x]=b.shadow.matrix,M++}r.directional[x]=O,x++}else if(b.isSpotLight){const O=n.get(b);O.position.setFromMatrixPosition(b.matrixWorld),O.color.copy(j).multiplyScalar(V*y),O.distance=Z,O.coneCos=Math.cos(b.angle),O.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),O.decay=b.decay,r.spot[c]=O;const H=b.shadow;if(b.map&&(r.spotLightMap[T]=b.map,T++,H.updateMatrices(b),b.castShadow&&L++),r.spotLightMatrix[c]=H.matrix,b.castShadow){const J=i.get(b);J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,r.spotShadow[c]=J,r.spotShadowMap[c]=D,w++}c++}else if(b.isRectAreaLight){const O=n.get(b);O.color.copy(j).multiplyScalar(V),O.halfWidth.set(b.width*.5,0,0),O.halfHeight.set(0,b.height*.5,0),r.rectArea[_]=O,_++}else if(b.isPointLight){const O=n.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity*y),O.distance=b.distance,O.decay=b.decay,b.castShadow){const H=b.shadow,J=i.get(b);J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,r.pointShadow[p]=J,r.pointShadowMap[p]=D,r.pointShadowMatrix[p]=b.shadow.matrix,A++}r.point[p]=O,p++}else if(b.isHemisphereLight){const O=n.get(b);O.skyColor.copy(b.color).multiplyScalar(V*y),O.groundColor.copy(b.groundColor).multiplyScalar(V*y),r.hemi[g]=O,g++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=v;const C=r.hash;(C.directionalLength!==x||C.pointLength!==p||C.spotLength!==c||C.rectAreaLength!==_||C.hemiLength!==g||C.numDirectionalShadows!==M||C.numPointShadows!==A||C.numSpotShadows!==w||C.numSpotMaps!==T||C.numLightProbes!==X)&&(r.directional.length=x,r.spot.length=c,r.rectArea.length=_,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=w+T-L,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=X,C.directionalLength=x,C.pointLength=p,C.spotLength=c,C.rectAreaLength=_,C.hemiLength=g,C.numDirectionalShadows=M,C.numPointShadows=A,C.numSpotShadows=w,C.numSpotMaps=T,C.numLightProbes=X,r.version=cw++)}function u(f,d){let h=0,m=0,v=0,x=0,p=0;const c=d.matrixWorldInverse;for(let _=0,g=f.length;_<g;_++){const M=f[_];if(M.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(c),h++}else if(M.isSpotLight){const A=r.spot[v];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(c),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(c),v++}else if(M.isRectAreaLight){const A=r.rectArea[x];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(c),a.identity(),o.copy(M.matrixWorld),o.premultiply(c),a.extractRotation(o),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const A=r.point[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(c),m++}else if(M.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(c),p++}}}return{setup:l,setupView:u,state:r}}function Fp(t,e){const n=new dw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function hw(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Fp(t,e),n.set(s,[l])):o>=a.length?(l=new Fp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class pw extends zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ay,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mw extends zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_w=`uniform sampler2D shadow_pass;
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
}`;function vw(t,e,n){let i=new Zf;const r=new $e,s=new $e,o=new dt,a=new pw({depthPacking:ly}),l=new mw,u={},f=n.maxTextureSize,d={[Yi]:sn,[sn]:Yi,[Yn]:Yn},h=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:gw,fragmentShader:_w}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new vi;v.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new at(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=r_;let c=this.type;this.render=function(w,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const X=t.getRenderTarget(),y=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),q=t.state;q.setBlending(Gi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const K=c!==si&&this.type===si,b=c===si&&this.type!==si;for(let j=0,V=w.length;j<V;j++){const Z=w[j],D=Z.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const O=D.getFrameExtents();if(r.multiply(O),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,D.mapSize.y=s.y)),D.map===null||K===!0||b===!0){const J=this.type!==si?{minFilter:jt,magFilter:jt}:{};D.map!==null&&D.map.dispose(),D.map=new Cr(r.x,r.y,J),D.map.texture.name=Z.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const H=D.getViewportCount();for(let J=0;J<H;J++){const le=D.getViewport(J);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),q.viewport(o),D.updateMatrices(Z,J),i=D.getFrustum(),M(T,L,D.camera,Z,this.type)}D.isPointLightShadow!==!0&&this.type===si&&_(D,L),D.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(X,y,C)};function _(w,T){const L=e.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Cr(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(T,null,L,h,x,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(T,null,L,m,x,null)}function g(w,T,L,X){let y=null;const C=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)y=C;else if(y=L.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const q=y.uuid,K=T.uuid;let b=u[q];b===void 0&&(b={},u[q]=b);let j=b[K];j===void 0&&(j=y.clone(),b[K]=j,T.addEventListener("dispose",A)),y=j}if(y.visible=T.visible,y.wireframe=T.wireframe,X===si?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const q=t.properties.get(y);q.light=L}return y}function M(w,T,L,X,y){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===si)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const K=e.update(w),b=w.material;if(Array.isArray(b)){const j=K.groups;for(let V=0,Z=j.length;V<Z;V++){const D=j[V],O=b[D.materialIndex];if(O&&O.visible){const H=g(w,O,X,y);w.onBeforeShadow(t,w,T,L,K,H,D),t.renderBufferDirect(L,null,K,H,w,D),w.onAfterShadow(t,w,T,L,K,H,D)}}}else if(b.visible){const j=g(w,b,X,y);w.onBeforeShadow(t,w,T,L,K,j,null),t.renderBufferDirect(L,null,K,j,w,null),w.onAfterShadow(t,w,T,L,K,j,null)}}const q=w.children;for(let K=0,b=q.length;K<b;K++)M(q[K],T,L,X,y)}function A(w){w.target.removeEventListener("dispose",A);for(const L in u){const X=u[L],y=w.target.uuid;y in X&&(X[y].dispose(),delete X[y])}}}function xw(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const ie=new dt;let U=null;const Q=new dt(0,0,0,0);return{setMask:function(ae){U!==ae&&!P&&(t.colorMask(ae,ae,ae,ae),U=ae)},setLocked:function(ae){P=ae},setClear:function(ae,Ie,et,St,Vt){Vt===!0&&(ae*=St,Ie*=St,et*=St),ie.set(ae,Ie,et,St),Q.equals(ie)===!1&&(t.clearColor(ae,Ie,et,St),Q.copy(ie))},reset:function(){P=!1,U=null,Q.set(-1,0,0,0)}}}function s(){let P=!1,ie=null,U=null,Q=null;return{setTest:function(ae){ae?$(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(ae){ie!==ae&&!P&&(t.depthMask(ae),ie=ae)},setFunc:function(ae){if(U!==ae){switch(ae){case Ox:t.depthFunc(t.NEVER);break;case zx:t.depthFunc(t.ALWAYS);break;case kx:t.depthFunc(t.LESS);break;case ul:t.depthFunc(t.LEQUAL);break;case Bx:t.depthFunc(t.EQUAL);break;case Hx:t.depthFunc(t.GEQUAL);break;case Gx:t.depthFunc(t.GREATER);break;case Vx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}U=ae}},setLocked:function(ae){P=ae},setClear:function(ae){Q!==ae&&(t.clearDepth(ae),Q=ae)},reset:function(){P=!1,ie=null,U=null,Q=null}}}function o(){let P=!1,ie=null,U=null,Q=null,ae=null,Ie=null,et=null,St=null,Vt=null;return{setTest:function(Le){P||(Le?$(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(Le){ie!==Le&&!P&&(t.stencilMask(Le),ie=Le)},setFunc:function(Le,Qe,an){(U!==Le||Q!==Qe||ae!==an)&&(t.stencilFunc(Le,Qe,an),U=Le,Q=Qe,ae=an)},setOp:function(Le,Qe,an){(Ie!==Le||et!==Qe||St!==an)&&(t.stencilOp(Le,Qe,an),Ie=Le,et=Qe,St=an)},setLocked:function(Le){P=Le},setClear:function(Le){Vt!==Le&&(t.clearStencil(Le),Vt=Le)},reset:function(){P=!1,ie=null,U=null,Q=null,ae=null,Ie=null,et=null,St=null,Vt=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,d=new WeakMap;let h={},m={},v=new WeakMap,x=[],p=null,c=!1,_=null,g=null,M=null,A=null,w=null,T=null,L=null,X=new Ze(0,0,0),y=0,C=!1,q=null,K=null,b=null,j=null,V=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,O=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(H)[1]),D=O>=1):H.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),D=O>=2);let J=null,le={};const Pe=t.getParameter(t.SCISSOR_BOX),k=t.getParameter(t.VIEWPORT),ee=new dt().fromArray(Pe),se=new dt().fromArray(k);function Ae(P,ie,U,Q){const ae=new Uint8Array(4),Ie=t.createTexture();t.bindTexture(P,Ie),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<U;et++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(ie,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(ie+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Ie}const Te={};Te[t.TEXTURE_2D]=Ae(t.TEXTURE_2D,t.TEXTURE_2D,1),Te[t.TEXTURE_CUBE_MAP]=Ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Te[t.TEXTURE_2D_ARRAY]=Ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Te[t.TEXTURE_3D]=Ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),$(t.DEPTH_TEST),l.setFunc(ul),Oe(!1),Ve(mh),$(t.CULL_FACE),Me(Gi);function $(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function ye(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function Se(P,ie){return m[P]!==ie?(t.bindFramebuffer(P,ie),m[P]=ie,i&&(P===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ie),P===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ie)),!0):!1}function N(P,ie){let U=x,Q=!1;if(P){U=v.get(ie),U===void 0&&(U=[],v.set(ie,U));const ae=P.textures;if(U.length!==ae.length||U[0]!==t.COLOR_ATTACHMENT0){for(let Ie=0,et=ae.length;Ie<et;Ie++)U[Ie]=t.COLOR_ATTACHMENT0+Ie;U.length=ae.length,Q=!0}}else U[0]!==t.BACK&&(U[0]=t.BACK,Q=!0);if(Q)if(n.isWebGL2)t.drawBuffers(U);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(U);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ke(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const _e={[dr]:t.FUNC_ADD,[Mx]:t.FUNC_SUBTRACT,[Ex]:t.FUNC_REVERSE_SUBTRACT};if(i)_e[xh]=t.MIN,_e[yh]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(_e[xh]=P.MIN_EXT,_e[yh]=P.MAX_EXT)}const ge={[Tx]:t.ZERO,[wx]:t.ONE,[Ax]:t.SRC_COLOR,[Gc]:t.SRC_ALPHA,[Dx]:t.SRC_ALPHA_SATURATE,[Lx]:t.DST_COLOR,[Cx]:t.DST_ALPHA,[Rx]:t.ONE_MINUS_SRC_COLOR,[Vc]:t.ONE_MINUS_SRC_ALPHA,[bx]:t.ONE_MINUS_DST_COLOR,[Px]:t.ONE_MINUS_DST_ALPHA,[Nx]:t.CONSTANT_COLOR,[Ux]:t.ONE_MINUS_CONSTANT_COLOR,[Ix]:t.CONSTANT_ALPHA,[Fx]:t.ONE_MINUS_CONSTANT_ALPHA};function Me(P,ie,U,Q,ae,Ie,et,St,Vt,Le){if(P===Gi){c===!0&&(ye(t.BLEND),c=!1);return}if(c===!1&&($(t.BLEND),c=!0),P!==Sx){if(P!==_||Le!==C){if((g!==dr||w!==dr)&&(t.blendEquation(t.FUNC_ADD),g=dr,w=dr),Le)switch(P){case gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gh:t.blendFunc(t.ONE,t.ONE);break;case _h:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case _h:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,A=null,T=null,L=null,X.set(0,0,0),y=0,_=P,C=Le}return}ae=ae||ie,Ie=Ie||U,et=et||Q,(ie!==g||ae!==w)&&(t.blendEquationSeparate(_e[ie],_e[ae]),g=ie,w=ae),(U!==M||Q!==A||Ie!==T||et!==L)&&(t.blendFuncSeparate(ge[U],ge[Q],ge[Ie],ge[et]),M=U,A=Q,T=Ie,L=et),(St.equals(X)===!1||Vt!==y)&&(t.blendColor(St.r,St.g,St.b,Vt),X.copy(St),y=Vt),_=P,C=!1}function je(P,ie){P.side===Yn?ye(t.CULL_FACE):$(t.CULL_FACE);let U=P.side===sn;ie&&(U=!U),Oe(U),P.blending===gs&&P.transparent===!1?Me(Gi):Me(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Q=P.stencilWrite;u.setTest(Q),Q&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),R(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?$(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(P){q!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),q=P)}function Ve(P){P!==xx?($(t.CULL_FACE),P!==K&&(P===mh?t.cullFace(t.BACK):P===yx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),K=P}function ut(P){P!==b&&(D&&t.lineWidth(P),b=P)}function R(P,ie,U){P?($(t.POLYGON_OFFSET_FILL),(j!==ie||V!==U)&&(t.polygonOffset(ie,U),j=ie,V=U)):ye(t.POLYGON_OFFSET_FILL)}function S(P){P?$(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function W(P){P===void 0&&(P=t.TEXTURE0+Z-1),J!==P&&(t.activeTexture(P),J=P)}function Y(P,ie,U){U===void 0&&(J===null?U=t.TEXTURE0+Z-1:U=J);let Q=le[U];Q===void 0&&(Q={type:void 0,texture:void 0},le[U]=Q),(Q.type!==P||Q.texture!==ie)&&(J!==U&&(t.activeTexture(U),J=U),t.bindTexture(P,ie||Te[P]),Q.type=P,Q.texture=ie)}function ne(){const P=le[J];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function it(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function We(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(P){ee.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),ee.copy(P))}function xe(P){se.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),se.copy(P))}function qe(P,ie){let U=d.get(ie);U===void 0&&(U=new WeakMap,d.set(ie,U));let Q=U.get(P);Q===void 0&&(Q=t.getUniformBlockIndex(ie,P.name),U.set(P,Q))}function De(P,ie){const Q=d.get(ie).get(P);f.get(ie)!==Q&&(t.uniformBlockBinding(ie,Q,P.__bindingPointIndex),f.set(ie,Q))}function me(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},J=null,le={},m={},v=new WeakMap,x=[],p=null,c=!1,_=null,g=null,M=null,A=null,w=null,T=null,L=null,X=new Ze(0,0,0),y=0,C=!1,q=null,K=null,b=null,j=null,V=null,ee.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:$,disable:ye,bindFramebuffer:Se,drawBuffers:N,useProgram:ke,setBlending:Me,setMaterial:je,setFlipSided:Oe,setCullFace:Ve,setLineWidth:ut,setPolygonOffset:R,setScissorTest:S,activeTexture:W,bindTexture:Y,unbindTexture:ne,compressedTexImage2D:te,compressedTexImage3D:Ne,texImage2D:We,texImage3D:we,updateUBOMapping:qe,uniformBlockBinding:De,texStorage2D:oe,texStorage3D:it,texSubImage2D:Re,texSubImage3D:ue,compressedTexSubImage2D:de,compressedTexSubImage3D:Ue,scissor:ve,viewport:xe,reset:me}}function yw(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new $e,d=new WeakMap;let h;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,S){return v?new OffscreenCanvas(R,S):pl("canvas")}function p(R,S,W,Y){let ne=1;const te=ut(R);if((te.width>Y||te.height>Y)&&(ne=Y/Math.max(te.width,te.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Ne=S?Kc:Math.floor,Re=Ne(ne*te.width),ue=Ne(ne*te.height);h===void 0&&(h=x(Re,ue));const de=W?x(Re,ue):h;return de.width=Re,de.height=ue,de.getContext("2d").drawImage(R,0,0,Re,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Re+"x"+ue+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function c(R){const S=ut(R);return Kh(S.width)&&Kh(S.height)}function _(R){return a?!1:R.wrapS!==On||R.wrapT!==On||R.minFilter!==jt&&R.minFilter!==Zt}function g(R,S){return R.generateMipmaps&&S&&R.minFilter!==jt&&R.minFilter!==Zt}function M(R){t.generateMipmap(R)}function A(R,S,W,Y,ne=!1){if(a===!1)return S;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=S;if(S===t.RED&&(W===t.FLOAT&&(te=t.R32F),W===t.HALF_FLOAT&&(te=t.R16F),W===t.UNSIGNED_BYTE&&(te=t.R8)),S===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(te=t.R8UI),W===t.UNSIGNED_SHORT&&(te=t.R16UI),W===t.UNSIGNED_INT&&(te=t.R32UI),W===t.BYTE&&(te=t.R8I),W===t.SHORT&&(te=t.R16I),W===t.INT&&(te=t.R32I)),S===t.RG&&(W===t.FLOAT&&(te=t.RG32F),W===t.HALF_FLOAT&&(te=t.RG16F),W===t.UNSIGNED_BYTE&&(te=t.RG8)),S===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(te=t.RG8UI),W===t.UNSIGNED_SHORT&&(te=t.RG16UI),W===t.UNSIGNED_INT&&(te=t.RG32UI),W===t.BYTE&&(te=t.RG8I),W===t.SHORT&&(te=t.RG16I),W===t.INT&&(te=t.RG32I)),S===t.RGBA){const Ne=ne?cl:nt.getTransfer(Y);W===t.FLOAT&&(te=t.RGBA32F),W===t.HALF_FLOAT&&(te=t.RGBA16F),W===t.UNSIGNED_BYTE&&(te=Ne===ot?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function w(R,S,W){return g(R,W)===!0||R.isFramebufferTexture&&R.minFilter!==jt&&R.minFilter!==Zt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){return R===jt||R===Sh||R===Ws?t.NEAREST:t.LINEAR}function L(R){const S=R.target;S.removeEventListener("dispose",L),y(S),S.isVideoTexture&&d.delete(S)}function X(R){const S=R.target;S.removeEventListener("dispose",X),q(S)}function y(R){const S=i.get(R);if(S.__webglInit===void 0)return;const W=R.source,Y=m.get(W);if(Y){const ne=Y[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&C(R),Object.keys(Y).length===0&&m.delete(W)}i.remove(R)}function C(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const W=R.source,Y=m.get(W);delete Y[S.__cacheKey],o.memory.textures--}function q(R){const S=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let ne=0;ne<S.__webglFramebuffer[Y].length;ne++)t.deleteFramebuffer(S.__webglFramebuffer[Y][ne]);else t.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)t.deleteFramebuffer(S.__webglFramebuffer[Y]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=R.textures;for(let Y=0,ne=W.length;Y<ne;Y++){const te=i.get(W[Y]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(W[Y])}i.remove(R)}let K=0;function b(){K=0}function j(){const R=K;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),K+=1,R}function V(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Z(R,S){const W=i.get(R);if(R.isVideoTexture&&Oe(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(W,R,S);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+S)}function D(R,S){const W=i.get(R);if(R.version>0&&W.__version!==R.version){se(W,R,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+S)}function O(R,S){const W=i.get(R);if(R.version>0&&W.__version!==R.version){se(W,R,S);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+S)}function H(R,S){const W=i.get(R);if(R.version>0&&W.__version!==R.version){Ae(W,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+S)}const J={[jc]:t.REPEAT,[On]:t.CLAMP_TO_EDGE,[Yc]:t.MIRRORED_REPEAT},le={[jt]:t.NEAREST,[Sh]:t.NEAREST_MIPMAP_NEAREST,[Ws]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[du]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},Pe={[cy]:t.NEVER,[gy]:t.ALWAYS,[fy]:t.LESS,[g_]:t.LEQUAL,[dy]:t.EQUAL,[my]:t.GEQUAL,[hy]:t.GREATER,[py]:t.NOTEQUAL};function k(R,S,W){if(S.type===li&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Zt||S.magFilter===du||S.magFilter===Ws||S.magFilter===_r||S.minFilter===Zt||S.minFilter===du||S.minFilter===Ws||S.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),W?(t.texParameteri(R,t.TEXTURE_WRAP_S,J[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,J[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,J[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,le[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,le[S.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==On||S.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,T(S.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==jt&&S.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===jt||S.minFilter!==Ws&&S.minFilter!==_r||S.type===li&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Po&&e.has("OES_texture_half_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ee(R,S){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",L));const Y=S.source;let ne=m.get(Y);ne===void 0&&(ne={},m.set(Y,ne));const te=V(S);if(te!==R.__cacheKey){ne[te]===void 0&&(ne[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ne[te].usedTimes++;const Ne=ne[R.__cacheKey];Ne!==void 0&&(ne[R.__cacheKey].usedTimes--,Ne.usedTimes===0&&C(S)),R.__cacheKey=te,R.__webglTexture=ne[te].texture}return W}function se(R,S,W){let Y=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=t.TEXTURE_3D);const ne=ee(R,S),te=S.source;n.bindTexture(Y,R.__webglTexture,t.TEXTURE0+W);const Ne=i.get(te);if(te.version!==Ne.__version||ne===!0){n.activeTexture(t.TEXTURE0+W);const Re=nt.getPrimaries(nt.workingColorSpace),ue=S.colorSpace===Li?null:nt.getPrimaries(S.colorSpace),de=S.colorSpace===Li||Re===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ue=_(S)&&c(S.image)===!1;let oe=p(S.image,Ue,!1,r.maxTextureSize);oe=Ve(S,oe);const it=c(oe)||a,We=s.convert(S.format,S.colorSpace);let we=s.convert(S.type),ve=A(S.internalFormat,We,we,S.colorSpace,S.isVideoTexture);k(Y,S,it);let xe;const qe=S.mipmaps,De=a&&S.isVideoTexture!==!0&&ve!==p_,me=Ne.__version===void 0||ne===!0,P=te.dataReady,ie=w(S,oe,it);if(S.isDepthTexture)ve=t.DEPTH_COMPONENT,a?S.type===li?ve=t.DEPTH_COMPONENT32F:S.type===Ni?ve=t.DEPTH_COMPONENT24:S.type===yr?ve=t.DEPTH24_STENCIL8:ve=t.DEPTH_COMPONENT16:S.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Sr&&ve===t.DEPTH_COMPONENT&&S.type!==qf&&S.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ni,we=s.convert(S.type)),S.format===Rs&&ve===t.DEPTH_COMPONENT&&(ve=t.DEPTH_STENCIL,S.type!==yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=yr,we=s.convert(S.type))),me&&(De?n.texStorage2D(t.TEXTURE_2D,1,ve,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,ve,oe.width,oe.height,0,We,we,null));else if(S.isDataTexture)if(qe.length>0&&it){De&&me&&n.texStorage2D(t.TEXTURE_2D,ie,ve,qe[0].width,qe[0].height);for(let U=0,Q=qe.length;U<Q;U++)xe=qe[U],De?P&&n.texSubImage2D(t.TEXTURE_2D,U,0,0,xe.width,xe.height,We,we,xe.data):n.texImage2D(t.TEXTURE_2D,U,ve,xe.width,xe.height,0,We,we,xe.data);S.generateMipmaps=!1}else De?(me&&n.texStorage2D(t.TEXTURE_2D,ie,ve,oe.width,oe.height),P&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,We,we,oe.data)):n.texImage2D(t.TEXTURE_2D,0,ve,oe.width,oe.height,0,We,we,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){De&&me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,ve,qe[0].width,qe[0].height,oe.depth);for(let U=0,Q=qe.length;U<Q;U++)xe=qe[U],S.format!==zn?We!==null?De?P&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,U,0,0,0,xe.width,xe.height,oe.depth,We,xe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,U,ve,xe.width,xe.height,oe.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?P&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,U,0,0,0,xe.width,xe.height,oe.depth,We,we,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,U,ve,xe.width,xe.height,oe.depth,0,We,we,xe.data)}else{De&&me&&n.texStorage2D(t.TEXTURE_2D,ie,ve,qe[0].width,qe[0].height);for(let U=0,Q=qe.length;U<Q;U++)xe=qe[U],S.format!==zn?We!==null?De?P&&n.compressedTexSubImage2D(t.TEXTURE_2D,U,0,0,xe.width,xe.height,We,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,U,ve,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?P&&n.texSubImage2D(t.TEXTURE_2D,U,0,0,xe.width,xe.height,We,we,xe.data):n.texImage2D(t.TEXTURE_2D,U,ve,xe.width,xe.height,0,We,we,xe.data)}else if(S.isDataArrayTexture)De?(me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,ve,oe.width,oe.height,oe.depth),P&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,We,we,oe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ve,oe.width,oe.height,oe.depth,0,We,we,oe.data);else if(S.isData3DTexture)De?(me&&n.texStorage3D(t.TEXTURE_3D,ie,ve,oe.width,oe.height,oe.depth),P&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,We,we,oe.data)):n.texImage3D(t.TEXTURE_3D,0,ve,oe.width,oe.height,oe.depth,0,We,we,oe.data);else if(S.isFramebufferTexture){if(me)if(De)n.texStorage2D(t.TEXTURE_2D,ie,ve,oe.width,oe.height);else{let U=oe.width,Q=oe.height;for(let ae=0;ae<ie;ae++)n.texImage2D(t.TEXTURE_2D,ae,ve,U,Q,0,We,we,null),U>>=1,Q>>=1}}else if(qe.length>0&&it){if(De&&me){const U=ut(qe[0]);n.texStorage2D(t.TEXTURE_2D,ie,ve,U.width,U.height)}for(let U=0,Q=qe.length;U<Q;U++)xe=qe[U],De?P&&n.texSubImage2D(t.TEXTURE_2D,U,0,0,We,we,xe):n.texImage2D(t.TEXTURE_2D,U,ve,We,we,xe);S.generateMipmaps=!1}else if(De){if(me){const U=ut(oe);n.texStorage2D(t.TEXTURE_2D,ie,ve,U.width,U.height)}P&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,we,oe)}else n.texImage2D(t.TEXTURE_2D,0,ve,We,we,oe);g(S,it)&&M(Y),Ne.__version=te.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ae(R,S,W){if(S.image.length!==6)return;const Y=ee(R,S),ne=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+W);const te=i.get(ne);if(ne.version!==te.__version||Y===!0){n.activeTexture(t.TEXTURE0+W);const Ne=nt.getPrimaries(nt.workingColorSpace),Re=S.colorSpace===Li?null:nt.getPrimaries(S.colorSpace),ue=S.colorSpace===Li||Ne===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const de=S.isCompressedTexture||S.image[0].isCompressedTexture,Ue=S.image[0]&&S.image[0].isDataTexture,oe=[];for(let U=0;U<6;U++)!de&&!Ue?oe[U]=p(S.image[U],!1,!0,r.maxCubemapSize):oe[U]=Ue?S.image[U].image:S.image[U],oe[U]=Ve(S,oe[U]);const it=oe[0],We=c(it)||a,we=s.convert(S.format,S.colorSpace),ve=s.convert(S.type),xe=A(S.internalFormat,we,ve,S.colorSpace),qe=a&&S.isVideoTexture!==!0,De=te.__version===void 0||Y===!0,me=ne.dataReady;let P=w(S,it,We);k(t.TEXTURE_CUBE_MAP,S,We);let ie;if(de){qe&&De&&n.texStorage2D(t.TEXTURE_CUBE_MAP,P,xe,it.width,it.height);for(let U=0;U<6;U++){ie=oe[U].mipmaps;for(let Q=0;Q<ie.length;Q++){const ae=ie[Q];S.format!==zn?we!==null?qe?me&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,Q,0,0,ae.width,ae.height,we,ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,Q,xe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,Q,0,0,ae.width,ae.height,we,ve,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,Q,xe,ae.width,ae.height,0,we,ve,ae.data)}}}else{if(ie=S.mipmaps,qe&&De){ie.length>0&&P++;const U=ut(oe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,P,xe,U.width,U.height)}for(let U=0;U<6;U++)if(Ue){qe?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,oe[U].width,oe[U].height,we,ve,oe[U].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,xe,oe[U].width,oe[U].height,0,we,ve,oe[U].data);for(let Q=0;Q<ie.length;Q++){const Ie=ie[Q].image[U].image;qe?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,Q+1,0,0,Ie.width,Ie.height,we,ve,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,Q+1,xe,Ie.width,Ie.height,0,we,ve,Ie.data)}}else{qe?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,we,ve,oe[U]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,xe,we,ve,oe[U]);for(let Q=0;Q<ie.length;Q++){const ae=ie[Q];qe?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,Q+1,0,0,we,ve,ae.image[U]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,Q+1,xe,we,ve,ae.image[U])}}}g(S,We)&&M(t.TEXTURE_CUBE_MAP),te.__version=ne.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Te(R,S,W,Y,ne,te){const Ne=s.convert(W.format,W.colorSpace),Re=s.convert(W.type),ue=A(W.internalFormat,Ne,Re,W.colorSpace);if(!i.get(S).__hasExternalTextures){const Ue=Math.max(1,S.width>>te),oe=Math.max(1,S.height>>te);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,te,ue,Ue,oe,S.depth,0,Ne,Re,null):n.texImage2D(ne,te,ue,Ue,oe,0,Ne,Re,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),je(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,ne,i.get(W).__webglTexture,0,Me(S)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,ne,i.get(W).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function $(R,S,W){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let Y=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(W||je(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===li?Y=t.DEPTH_COMPONENT32F:ne.type===Ni&&(Y=t.DEPTH_COMPONENT24));const te=Me(S);je(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,Y,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,te,Y,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,Y,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){const Y=Me(S);W&&je(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Y,t.DEPTH24_STENCIL8,S.width,S.height):je(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Y,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const Y=S.textures;for(let ne=0;ne<Y.length;ne++){const te=Y[ne],Ne=s.convert(te.format,te.colorSpace),Re=s.convert(te.type),ue=A(te.internalFormat,Ne,Re,te.colorSpace),de=Me(S);W&&je(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,ue,S.width,S.height):je(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,ue,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ue,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ye(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const Y=i.get(S.depthTexture).__webglTexture,ne=Me(S);if(S.depthTexture.format===Sr)je(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(S.depthTexture.format===Rs)je(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Se(R){const S=i.get(R),W=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ye(S.__webglFramebuffer,R)}else if(W){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]=t.createRenderbuffer(),$(S.__webglDepthbuffer[Y],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),$(S.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function N(R,S,W){const Y=i.get(R);S!==void 0&&Te(Y.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Se(R)}function ke(R){const S=R.texture,W=i.get(R),Y=i.get(S);R.addEventListener("dispose",X);const ne=R.textures,te=R.isWebGLCubeRenderTarget===!0,Ne=ne.length>1,Re=c(R)||a;if(Ne||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=S.version,o.memory.textures++),te){W.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[ue]=[];for(let de=0;de<S.mipmaps.length;de++)W.__webglFramebuffer[ue][de]=t.createFramebuffer()}else W.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)W.__webglFramebuffer[ue]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(Ne)if(r.drawBuffers)for(let ue=0,de=ne.length;ue<de;ue++){const Ue=i.get(ne[ue]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&je(R)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ue=0;ue<ne.length;ue++){const de=ne[ue];W.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[ue]);const Ue=s.convert(de.format,de.colorSpace),oe=s.convert(de.type),it=A(de.internalFormat,Ue,oe,de.colorSpace,R.isXRRenderTarget===!0),We=Me(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,it,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,W.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),$(W.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),k(t.TEXTURE_CUBE_MAP,S,Re);for(let ue=0;ue<6;ue++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)Te(W.__webglFramebuffer[ue][de],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else Te(W.__webglFramebuffer[ue],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(S,Re)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ne){for(let ue=0,de=ne.length;ue<de;ue++){const Ue=ne[ue],oe=i.get(Ue);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),k(t.TEXTURE_2D,Ue,Re),Te(W.__webglFramebuffer,R,Ue,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),g(Ue,Re)&&M(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ue,Y.__webglTexture),k(ue,S,Re),a&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)Te(W.__webglFramebuffer[de],R,S,t.COLOR_ATTACHMENT0,ue,de);else Te(W.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,ue,0);g(S,Re)&&M(ue),n.unbindTexture()}R.depthBuffer&&Se(R)}function _e(R){const S=c(R)||a,W=R.textures;for(let Y=0,ne=W.length;Y<ne;Y++){const te=W[Y];if(g(te,S)){const Ne=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Re=i.get(te).__webglTexture;n.bindTexture(Ne,Re),M(Ne),n.unbindTexture()}}}function ge(R){if(a&&R.samples>0&&je(R)===!1){const S=R.textures,W=R.width,Y=R.height;let ne=t.COLOR_BUFFER_BIT;const te=[],Ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(R),ue=S.length>1;if(ue)for(let de=0;de<S.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let de=0;de<S.length;de++){te.push(t.COLOR_ATTACHMENT0+de),R.depthBuffer&&te.push(Ne);const Ue=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;if(Ue===!1&&(R.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ue&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[de]),Ue===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ne]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ne])),ue){const oe=i.get(S[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,W,Y,0,0,W,Y,ne,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let de=0;de<S.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,Re.__webglColorRenderbuffer[de]);const Ue=i.get(S[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,Ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}}function Me(R){return Math.min(r.maxSamples,R.samples)}function je(R){const S=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Oe(R){const S=o.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function Ve(R,S){const W=R.colorSpace,Y=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===qc||W!==Qi&&W!==Li&&(nt.getTransfer(W)===ot?a===!1?e.has("EXT_sRGB")===!0&&Y===zn?(R.format=qc,R.minFilter=Zt,R.generateMipmaps=!1):S=v_.sRGBToLinear(S):(Y!==zn||ne!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}function ut(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(f.width=R.naturalWidth||R.width,f.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(f.width=R.displayWidth,f.height=R.displayHeight):(f.width=R.width,f.height=R.height),f}this.allocateTextureUnit=j,this.resetTextureUnits=b,this.setTexture2D=Z,this.setTexture2DArray=D,this.setTexture3D=O,this.setTextureCube=H,this.rebindTextures=N,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=je}function Sw(t,e,n){const i=n.isWebGL2;function r(s,o=Li){let a;const l=nt.getTransfer(o);if(s===Wi)return t.UNSIGNED_BYTE;if(s===u_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===c_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Jx)return t.BYTE;if(s===ey)return t.SHORT;if(s===qf)return t.UNSIGNED_SHORT;if(s===l_)return t.INT;if(s===Ni)return t.UNSIGNED_INT;if(s===li)return t.FLOAT;if(s===Po)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ty)return t.ALPHA;if(s===zn)return t.RGBA;if(s===ny)return t.LUMINANCE;if(s===iy)return t.LUMINANCE_ALPHA;if(s===Sr)return t.DEPTH_COMPONENT;if(s===Rs)return t.DEPTH_STENCIL;if(s===qc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ry)return t.RED;if(s===f_)return t.RED_INTEGER;if(s===sy)return t.RG;if(s===d_)return t.RG_INTEGER;if(s===h_)return t.RGBA_INTEGER;if(s===hu||s===pu||s===mu||s===gu)if(l===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===hu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===hu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Mh||s===Eh||s===Th||s===wh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Mh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Eh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Th)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===p_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ah||s===Rh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ah)return l===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Rh)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ch||s===Ph||s===Lh||s===bh||s===Dh||s===Nh||s===Uh||s===Ih||s===Fh||s===Oh||s===zh||s===kh||s===Bh||s===Hh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ch)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ph)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lh)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bh)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dh)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nh)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Uh)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ih)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Fh)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Oh)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zh)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kh)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bh)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hh)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_u||s===Gh||s===Vh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===_u)return l===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Vh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===oy||s===Wh||s===Xh||s===jh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===_u)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Wh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Mw extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class us extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ew={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),c=this._getHandJoint(u,x);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,v=.005;u.inputState.pinching&&h>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ew)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Tw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ww=`
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

}`;class Aw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new on,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new qi({extensions:{fragDepth:!0},vertexShader:Tw,fragmentShader:ww,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new at(new ko(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class Rw extends Ds{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,m=null,v=null;const x=new Aw,p=n.getContextAttributes();let c=null,_=null;const g=[],M=[],A=new $e;let w=null;const T=new dn;T.layers.enable(1),T.viewport=new dt;const L=new dn;L.layers.enable(2),L.viewport=new dt;const X=[T,L],y=new Mw;y.layers.enable(1),y.layers.enable(2);let C=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ee=g[k];return ee===void 0&&(ee=new Wu,g[k]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(k){let ee=g[k];return ee===void 0&&(ee=new Wu,g[k]=ee),ee.getGripSpace()},this.getHand=function(k){let ee=g[k];return ee===void 0&&(ee=new Wu,g[k]=ee),ee.getHandSpace()};function K(k){const ee=M.indexOf(k.inputSource);if(ee===-1)return;const se=g[ee];se!==void 0&&(se.update(k.inputSource,k.frame,u||o),se.dispatchEvent({type:k.type,data:k.inputSource}))}function b(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",b),r.removeEventListener("inputsourceschange",j);for(let k=0;k<g.length;k++){const ee=M[k];ee!==null&&(M[k]=null,g[k].disconnect(ee))}C=null,q=null,x.reset(),e.setRenderTarget(c),m=null,h=null,d=null,r=null,_=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",b),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Cr(m.framebufferWidth,m.framebufferHeight,{format:zn,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,se=null,Ae=null;p.depth&&(Ae=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=p.stencil?Rs:Sr,se=p.stencil?yr:Ni);const Te={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Te),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Cr(h.textureWidth,h.textureHeight,{format:zn,type:Wi,depthTexture:new L_(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const $=e.properties.get(_);$.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(k){for(let ee=0;ee<k.removed.length;ee++){const se=k.removed[ee],Ae=M.indexOf(se);Ae>=0&&(M[Ae]=null,g[Ae].disconnect(se))}for(let ee=0;ee<k.added.length;ee++){const se=k.added[ee];let Ae=M.indexOf(se);if(Ae===-1){for(let $=0;$<g.length;$++)if($>=M.length){M.push(se),Ae=$;break}else if(M[$]===null){M[$]=se,Ae=$;break}if(Ae===-1)break}const Te=g[Ae];Te&&Te.connect(se)}}const V=new F,Z=new F;function D(k,ee,se){V.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(se.matrixWorld);const Ae=V.distanceTo(Z),Te=ee.projectionMatrix.elements,$=se.projectionMatrix.elements,ye=Te[14]/(Te[10]-1),Se=Te[14]/(Te[10]+1),N=(Te[9]+1)/Te[5],ke=(Te[9]-1)/Te[5],_e=(Te[8]-1)/Te[0],ge=($[8]+1)/$[0],Me=ye*_e,je=ye*ge,Oe=Ae/(-_e+ge),Ve=Oe*-_e;ee.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ve),k.translateZ(Oe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const ut=ye+Oe,R=Se+Oe,S=Me-Ve,W=je+(Ae-Ve),Y=N*Se/R*ut,ne=ke*Se/R*ut;k.projectionMatrix.makePerspective(S,W,Y,ne,ut,R),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function O(k,ee){ee===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ee.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;x.texture!==null&&(k.near=x.depthNear,k.far=x.depthFar),y.near=L.near=T.near=k.near,y.far=L.far=T.far=k.far,(C!==y.near||q!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,q=y.far,T.near=C,T.far=q,L.near=C,L.far=q,T.updateProjectionMatrix(),L.updateProjectionMatrix(),k.updateProjectionMatrix());const ee=k.parent,se=y.cameras;O(y,ee);for(let Ae=0;Ae<se.length;Ae++)O(se[Ae],ee);se.length===2?D(y,T,L):y.projectionMatrix.copy(T.projectionMatrix),H(k,y,ee)};function H(k,ee,se){se===null?k.matrix.copy(ee.matrixWorld):(k.matrix.copy(se.matrixWorld),k.matrix.invert(),k.matrix.multiply(ee.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ee.projectionMatrix),k.projectionMatrixInverse.copy(ee.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=$c*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return x.texture!==null};let J=null;function le(k,ee){if(f=ee.getViewerPose(u||o),v=ee,f!==null){const se=f.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let Ae=!1;se.length!==y.cameras.length&&(y.cameras.length=0,Ae=!0);for(let $=0;$<se.length;$++){const ye=se[$];let Se=null;if(m!==null)Se=m.getViewport(ye);else{const ke=d.getViewSubImage(h,ye);Se=ke.viewport,$===0&&(e.setRenderTargetTextures(_,ke.colorTexture,h.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(_))}let N=X[$];N===void 0&&(N=new dn,N.layers.enable($),N.viewport=new dt,X[$]=N),N.matrix.fromArray(ye.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(ye.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Se.x,Se.y,Se.width,Se.height),$===0&&(y.matrix.copy(N.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ae===!0&&y.cameras.push(N)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const $=d.getDepthInformation(se[0]);$&&$.isValid&&$.texture&&x.init(e,$,r.renderState)}}for(let se=0;se<g.length;se++){const Ae=M[se],Te=g[se];Ae!==null&&Te!==void 0&&Te.update(Ae,ee,u||o)}x.render(e,y),J&&J(k,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),v=null}const Pe=new C_;Pe.setAnimationLoop(le),this.setAnimationLoop=function(k){J=k},this.dispose=function(){}}}const or=new Qn,Cw=new vt;function Pw(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,w_(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,_,g,M){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),d(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),h(p,c),c.isMeshPhysicalMaterial&&m(p,c,M)):c.isMeshMatcapMaterial?(s(p,c),v(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),x(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,_,g):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===sn&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===sn&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const _=e.get(c),g=_.envMap,M=_.envMapRotation;if(g&&(p.envMap.value=g,or.copy(M),or.x*=-1,or.y*=-1,or.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),p.envMapRotation.value.setFromMatrix4(Cw.makeRotationFromEuler(or)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const A=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*A,n(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,_,g){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*_,p.scale.value=g*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function d(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function h(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,_){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===sn&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,c){c.matcap&&(p.matcap.value=c.matcap)}function x(p,c){const _=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Lw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const M=g.program;i.uniformBlockBinding(_,M)}function u(_,g){let M=r[_.id];M===void 0&&(v(_),M=f(_),r[_.id]=M,_.addEventListener("dispose",p));const A=g.program;i.updateUBOMapping(_,A);const w=e.render.frame;s[_.id]!==w&&(h(_),s[_.id]=w)}function f(_){const g=d();_.__bindingPointIndex=g;const M=t.createBuffer(),A=_.__size,w=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,A,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],M=_.uniforms,A=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let w=0,T=M.length;w<T;w++){const L=Array.isArray(M[w])?M[w]:[M[w]];for(let X=0,y=L.length;X<y;X++){const C=L[X];if(m(C,w,X,A)===!0){const q=C.__offset,K=Array.isArray(C.value)?C.value:[C.value];let b=0;for(let j=0;j<K.length;j++){const V=K[j],Z=x(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,q+b,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,b),b+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,g,M,A){const w=_.value,T=g+"_"+M;if(A[T]===void 0)return typeof w=="number"||typeof w=="boolean"?A[T]=w:A[T]=w.clone(),!0;{const L=A[T];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return A[T]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function v(_){const g=_.uniforms;let M=0;const A=16;for(let T=0,L=g.length;T<L;T++){const X=Array.isArray(g[T])?g[T]:[g[T]];for(let y=0,C=X.length;y<C;y++){const q=X[y],K=Array.isArray(q.value)?q.value:[q.value];for(let b=0,j=K.length;b<j;b++){const V=K[b],Z=x(V),D=M%A;D!==0&&A-D<Z.boundary&&(M+=A-D),q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=M,M+=Z.storage}}}const w=M%A;return w>0&&(M+=A-w),_.__size=M,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function c(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class F_{constructor(e={}){const{canvas:n=vy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const c=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this._useLegacyLights=!1,this.toneMapping=Vi,this.toneMappingExposure=1;const g=this;let M=!1,A=0,w=0,T=null,L=-1,X=null;const y=new dt,C=new dt;let q=null;const K=new Ze(0);let b=0,j=n.width,V=n.height,Z=1,D=null,O=null;const H=new dt(0,0,j,V),J=new dt(0,0,j,V);let le=!1;const Pe=new Zf;let k=!1,ee=!1,se=null;const Ae=new vt,Te=new $e,$=new F,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return T===null?Z:1}let N=i;function ke(E,I){for(let B=0;B<E.length;B++){const G=E[B],z=n.getContext(G,I);if(z!==null)return z}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yf}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",ie,!1),N===null){const I=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&I.shift(),N=ke(I,E),N===null)throw ke(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let _e,ge,Me,je,Oe,Ve,ut,R,S,W,Y,ne,te,Ne,Re,ue,de,Ue,oe,it,We,we,ve,xe;function qe(){_e=new FE(N),ge=new LE(N,_e,e),_e.init(ge),we=new Sw(N,_e,ge),Me=new xw(N,_e,ge),je=new kE(N),Oe=new sw,Ve=new yw(N,_e,Me,Oe,ge,we,je),ut=new DE(g),R=new IE(g),S=new Xy(N,ge),ve=new CE(N,_e,S,ge),W=new OE(N,S,je,ve),Y=new VE(N,W,S,je),oe=new GE(N,ge,Ve),ue=new bE(Oe),ne=new rw(g,ut,R,_e,ge,ve,ue),te=new Pw(g,Oe),Ne=new aw,Re=new hw(_e,ge),Ue=new RE(g,ut,R,Me,Y,h,l),de=new vw(g,Y,ge),xe=new Lw(N,je,ge,Me),it=new PE(N,_e,je,ge),We=new zE(N,_e,je,ge),je.programs=ne.programs,g.capabilities=ge,g.extensions=_e,g.properties=Oe,g.renderLists=Ne,g.shadowMap=de,g.state=Me,g.info=je}qe();const De=new Rw(g,N);this.xr=De,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=_e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=_e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(j,V,!1))},this.getSize=function(E){return E.set(j,V)},this.setSize=function(E,I,B=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,V=I,n.width=Math.floor(E*Z),n.height=Math.floor(I*Z),B===!0&&(n.style.width=E+"px",n.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(j*Z,V*Z).floor()},this.setDrawingBufferSize=function(E,I,B){j=E,V=I,Z=B,n.width=Math.floor(E*B),n.height=Math.floor(I*B),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(H)},this.setViewport=function(E,I,B,G){E.isVector4?H.set(E.x,E.y,E.z,E.w):H.set(E,I,B,G),Me.viewport(y.copy(H).multiplyScalar(Z).round())},this.getScissor=function(E){return E.copy(J)},this.setScissor=function(E,I,B,G){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,I,B,G),Me.scissor(C.copy(J).multiplyScalar(Z).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(E){Me.setScissorTest(le=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){O=E},this.getClearColor=function(E){return E.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(E=!0,I=!0,B=!0){let G=0;if(E){let z=!1;if(T!==null){const he=T.texture.format;z=he===h_||he===d_||he===f_}if(z){const he=T.texture.type,Ee=he===Wi||he===Ni||he===qf||he===yr||he===u_||he===c_,Ce=Ue.getClearColor(),be=Ue.getClearAlpha(),Xe=Ce.r,Fe=Ce.g,ze=Ce.b;Ee?(m[0]=Xe,m[1]=Fe,m[2]=ze,m[3]=be,N.clearBufferuiv(N.COLOR,0,m)):(v[0]=Xe,v[1]=Fe,v[2]=ze,v[3]=be,N.clearBufferiv(N.COLOR,0,v))}else G|=N.COLOR_BUFFER_BIT}I&&(G|=N.DEPTH_BUFFER_BIT),B&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),Ne.dispose(),Re.dispose(),Oe.dispose(),ut.dispose(),R.dispose(),Y.dispose(),ve.dispose(),xe.dispose(),ne.dispose(),De.dispose(),De.removeEventListener("sessionstart",Vt),De.removeEventListener("sessionend",Le),se&&(se.dispose(),se=null),Qe.stop()};function me(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=je.autoReset,I=de.enabled,B=de.autoUpdate,G=de.needsUpdate,z=de.type;qe(),je.autoReset=E,de.enabled=I,de.autoUpdate=B,de.needsUpdate=G,de.type=z}function ie(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function U(E){const I=E.target;I.removeEventListener("dispose",U),Q(I)}function Q(E){ae(E),Oe.remove(E)}function ae(E){const I=Oe.get(E).programs;I!==void 0&&(I.forEach(function(B){ne.releaseProgram(B)}),E.isShaderMaterial&&ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,B,G,z,he){I===null&&(I=ye);const Ee=z.isMesh&&z.matrixWorld.determinant()<0,Ce=H_(E,I,B,G,z);Me.setMaterial(G,Ee);let be=B.index,Xe=1;if(G.wireframe===!0){if(be=W.getWireframeAttribute(B),be===void 0)return;Xe=2}const Fe=B.drawRange,ze=B.attributes.position;let xt=Fe.start*Xe,ln=(Fe.start+Fe.count)*Xe;he!==null&&(xt=Math.max(xt,he.start*Xe),ln=Math.min(ln,(he.start+he.count)*Xe)),be!==null?(xt=Math.max(xt,0),ln=Math.min(ln,be.count)):ze!=null&&(xt=Math.max(xt,0),ln=Math.min(ln,ze.count));const Ct=ln-xt;if(Ct<0||Ct===1/0)return;ve.setup(z,G,Ce,B,be);let Jn,ht=it;if(be!==null&&(Jn=S.get(be),ht=We,ht.setIndex(Jn)),z.isMesh)G.wireframe===!0?(Me.setLineWidth(G.wireframeLinewidth*Se()),ht.setMode(N.LINES)):ht.setMode(N.TRIANGLES);else if(z.isLine){let Be=G.linewidth;Be===void 0&&(Be=1),Me.setLineWidth(Be*Se()),z.isLineSegments?ht.setMode(N.LINES):z.isLineLoop?ht.setMode(N.LINE_LOOP):ht.setMode(N.LINE_STRIP)}else z.isPoints?ht.setMode(N.POINTS):z.isSprite&&ht.setMode(N.TRIANGLES);if(z.isBatchedMesh)ht.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ht.renderInstances(xt,Ct,z.count);else if(B.isInstancedBufferGeometry){const Be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Fl=Math.min(B.instanceCount,Be);ht.renderInstances(xt,Ct,Fl)}else ht.render(xt,Ct)};function Ie(E,I,B){E.transparent===!0&&E.side===Yn&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,Ho(E,I,B),E.side=Yi,E.needsUpdate=!0,Ho(E,I,B),E.side=Yn):Ho(E,I,B)}this.compile=function(E,I,B=null){B===null&&(B=E),p=Re.get(B),p.init(),_.push(p),B.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==B&&E.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(g._useLegacyLights);const G=new Set;return E.traverse(function(z){const he=z.material;if(he)if(Array.isArray(he))for(let Ee=0;Ee<he.length;Ee++){const Ce=he[Ee];Ie(Ce,B,z),G.add(Ce)}else Ie(he,B,z),G.add(he)}),_.pop(),p=null,G},this.compileAsync=function(E,I,B=null){const G=this.compile(E,I,B);return new Promise(z=>{function he(){if(G.forEach(function(Ee){Oe.get(Ee).currentProgram.isReady()&&G.delete(Ee)}),G.size===0){z(E);return}setTimeout(he,10)}_e.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let et=null;function St(E){et&&et(E)}function Vt(){Qe.stop()}function Le(){Qe.start()}const Qe=new C_;Qe.setAnimationLoop(St),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(E){et=E,De.setAnimationLoop(E),E===null?Qe.stop():Qe.start()},De.addEventListener("sessionstart",Vt),De.addEventListener("sessionend",Le),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(I),I=De.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,I,T),p=Re.get(E,_.length),p.init(),_.push(p),Ae.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Pe.setFromProjectionMatrix(Ae),ee=this.localClippingEnabled,k=ue.init(this.clippingPlanes,ee),x=Ne.get(E,c.length),x.init(),c.push(x),an(E,I,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(D,O),this.info.render.frame++,k===!0&&ue.beginShadows();const B=p.state.shadowsArray;if(de.render(B,E,I),k===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1)&&Ue.render(x,E),p.setupLights(g._useLegacyLights),I.isArrayCamera){const G=I.cameras;for(let z=0,he=G.length;z<he;z++){const Ee=G[z];Us(x,E,Ee,Ee.viewport)}}else Us(x,E,I);T!==null&&(Ve.updateMultisampleRenderTarget(T),Ve.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(g,E,I),ve.resetDefaultState(),L=-1,X=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function an(E,I,B,G){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Pe.intersectsSprite(E)){G&&$.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ae);const Ee=Y.update(E),Ce=E.material;Ce.visible&&x.push(E,Ee,Ce,B,$.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Pe.intersectsObject(E))){const Ee=Y.update(E),Ce=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),$.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),$.copy(Ee.boundingSphere.center)),$.applyMatrix4(E.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ce)){const be=Ee.groups;for(let Xe=0,Fe=be.length;Xe<Fe;Xe++){const ze=be[Xe],xt=Ce[ze.materialIndex];xt&&xt.visible&&x.push(E,Ee,xt,B,$.z,ze)}}else Ce.visible&&x.push(E,Ee,Ce,B,$.z,null)}}const he=E.children;for(let Ee=0,Ce=he.length;Ee<Ce;Ee++)an(he[Ee],I,B,G)}function Us(E,I,B,G){const z=E.opaque,he=E.transmissive,Ee=E.transparent;p.setupLightsView(B),k===!0&&ue.setGlobalState(g.clippingPlanes,B),he.length>0&&B_(z,he,I,B),G&&Me.viewport(y.copy(G)),z.length>0&&Bo(z,I,B),he.length>0&&Bo(he,I,B),Ee.length>0&&Bo(Ee,I,B),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function B_(E,I,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const he=ge.isWebGL2;se===null&&(se=new Cr(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Po:Wi,minFilter:_r,samples:he?4:0})),g.getDrawingBufferSize(Te),he?se.setSize(Te.x,Te.y):se.setSize(Kc(Te.x),Kc(Te.y));const Ee=g.getRenderTarget();g.setRenderTarget(se),g.getClearColor(K),b=g.getClearAlpha(),b<1&&g.setClearColor(16777215,.5),g.clear();const Ce=g.toneMapping;g.toneMapping=Vi,Bo(E,B,G),Ve.updateMultisampleRenderTarget(se),Ve.updateRenderTargetMipmap(se);let be=!1;for(let Xe=0,Fe=I.length;Xe<Fe;Xe++){const ze=I[Xe],xt=ze.object,ln=ze.geometry,Ct=ze.material,Jn=ze.group;if(Ct.side===Yn&&xt.layers.test(G.layers)){const ht=Ct.side;Ct.side=sn,Ct.needsUpdate=!0,td(xt,B,G,ln,Ct,Jn),Ct.side=ht,Ct.needsUpdate=!0,be=!0}}be===!0&&(Ve.updateMultisampleRenderTarget(se),Ve.updateRenderTargetMipmap(se)),g.setRenderTarget(Ee),g.setClearColor(K,b),g.toneMapping=Ce}function Bo(E,I,B){const G=I.isScene===!0?I.overrideMaterial:null;for(let z=0,he=E.length;z<he;z++){const Ee=E[z],Ce=Ee.object,be=Ee.geometry,Xe=G===null?Ee.material:G,Fe=Ee.group;Ce.layers.test(B.layers)&&td(Ce,I,B,be,Xe,Fe)}}function td(E,I,B,G,z,he){E.onBeforeRender(g,I,B,G,z,he),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(g,I,B,G,E,he),z.transparent===!0&&z.side===Yn&&z.forceSinglePass===!1?(z.side=sn,z.needsUpdate=!0,g.renderBufferDirect(B,I,G,z,E,he),z.side=Yi,z.needsUpdate=!0,g.renderBufferDirect(B,I,G,z,E,he),z.side=Yn):g.renderBufferDirect(B,I,G,z,E,he),E.onAfterRender(g,I,B,G,z,he)}function Ho(E,I,B){I.isScene!==!0&&(I=ye);const G=Oe.get(E),z=p.state.lights,he=p.state.shadowsArray,Ee=z.state.version,Ce=ne.getParameters(E,z.state,he,I,B),be=ne.getProgramCacheKey(Ce);let Xe=G.programs;G.environment=E.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(E.isMeshStandardMaterial?R:ut).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Xe===void 0&&(E.addEventListener("dispose",U),Xe=new Map,G.programs=Xe);let Fe=Xe.get(be);if(Fe!==void 0){if(G.currentProgram===Fe&&G.lightsStateVersion===Ee)return id(E,Ce),Fe}else Ce.uniforms=ne.getUniforms(E),E.onBuild(B,Ce,g),E.onBeforeCompile(Ce,g),Fe=ne.acquireProgram(Ce,be),Xe.set(be,Fe),G.uniforms=Ce.uniforms;const ze=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=ue.uniform),id(E,Ce),G.needsLights=V_(E),G.lightsStateVersion=Ee,G.needsLights&&(ze.ambientLightColor.value=z.state.ambient,ze.lightProbe.value=z.state.probe,ze.directionalLights.value=z.state.directional,ze.directionalLightShadows.value=z.state.directionalShadow,ze.spotLights.value=z.state.spot,ze.spotLightShadows.value=z.state.spotShadow,ze.rectAreaLights.value=z.state.rectArea,ze.ltc_1.value=z.state.rectAreaLTC1,ze.ltc_2.value=z.state.rectAreaLTC2,ze.pointLights.value=z.state.point,ze.pointLightShadows.value=z.state.pointShadow,ze.hemisphereLights.value=z.state.hemi,ze.directionalShadowMap.value=z.state.directionalShadowMap,ze.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ze.spotShadowMap.value=z.state.spotShadowMap,ze.spotLightMatrix.value=z.state.spotLightMatrix,ze.spotLightMap.value=z.state.spotLightMap,ze.pointShadowMap.value=z.state.pointShadowMap,ze.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Fe,G.uniformsList=null,Fe}function nd(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=za.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function id(E,I){const B=Oe.get(E);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function H_(E,I,B,G,z){I.isScene!==!0&&(I=ye),Ve.resetTextureUnits();const he=I.fog,Ee=G.isMeshStandardMaterial?I.environment:null,Ce=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Qi,be=(G.isMeshStandardMaterial?R:ut).get(G.envMap||Ee),Xe=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Fe=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ze=!!B.morphAttributes.position,xt=!!B.morphAttributes.normal,ln=!!B.morphAttributes.color;let Ct=Vi;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ct=g.toneMapping);const Jn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ht=Jn!==void 0?Jn.length:0,Be=Oe.get(G),Fl=p.state.lights;if(k===!0&&(ee===!0||E!==X)){const yn=E===X&&G.id===L;ue.setState(G,E,yn)}let ct=!1;G.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Fl.state.version||Be.outputColorSpace!==Ce||z.isBatchedMesh&&Be.batching===!1||!z.isBatchedMesh&&Be.batching===!0||z.isInstancedMesh&&Be.instancing===!1||!z.isInstancedMesh&&Be.instancing===!0||z.isSkinnedMesh&&Be.skinning===!1||!z.isSkinnedMesh&&Be.skinning===!0||z.isInstancedMesh&&Be.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Be.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Be.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Be.instancingMorph===!1&&z.morphTexture!==null||Be.envMap!==be||G.fog===!0&&Be.fog!==he||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ue.numPlanes||Be.numIntersection!==ue.numIntersection)||Be.vertexAlphas!==Xe||Be.vertexTangents!==Fe||Be.morphTargets!==ze||Be.morphNormals!==xt||Be.morphColors!==ln||Be.toneMapping!==Ct||ge.isWebGL2===!0&&Be.morphTargetsCount!==ht)&&(ct=!0):(ct=!0,Be.__version=G.version);let Ji=Be.currentProgram;ct===!0&&(Ji=Ho(G,I,z));let rd=!1,Is=!1,Ol=!1;const Ft=Ji.getUniforms(),er=Be.uniforms;if(Me.useProgram(Ji.program)&&(rd=!0,Is=!0,Ol=!0),G.id!==L&&(L=G.id,Is=!0),rd||X!==E){Ft.setValue(N,"projectionMatrix",E.projectionMatrix),Ft.setValue(N,"viewMatrix",E.matrixWorldInverse);const yn=Ft.map.cameraPosition;yn!==void 0&&yn.setValue(N,$.setFromMatrixPosition(E.matrixWorld)),ge.logarithmicDepthBuffer&&Ft.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ft.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,Is=!0,Ol=!0)}if(z.isSkinnedMesh){Ft.setOptional(N,z,"bindMatrix"),Ft.setOptional(N,z,"bindMatrixInverse");const yn=z.skeleton;yn&&(ge.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),Ft.setValue(N,"boneTexture",yn.boneTexture,Ve)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Ft.setOptional(N,z,"batchingTexture"),Ft.setValue(N,"batchingTexture",z._matricesTexture,Ve));const zl=B.morphAttributes;if((zl.position!==void 0||zl.normal!==void 0||zl.color!==void 0&&ge.isWebGL2===!0)&&oe.update(z,B,Ji),(Is||Be.receiveShadow!==z.receiveShadow)&&(Be.receiveShadow=z.receiveShadow,Ft.setValue(N,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(er.envMap.value=be,er.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Is&&(Ft.setValue(N,"toneMappingExposure",g.toneMappingExposure),Be.needsLights&&G_(er,Ol),he&&G.fog===!0&&te.refreshFogUniforms(er,he),te.refreshMaterialUniforms(er,G,Z,V,se),za.upload(N,nd(Be),er,Ve)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(za.upload(N,nd(Be),er,Ve),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ft.setValue(N,"center",z.center),Ft.setValue(N,"modelViewMatrix",z.modelViewMatrix),Ft.setValue(N,"normalMatrix",z.normalMatrix),Ft.setValue(N,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const yn=G.uniformsGroups;for(let kl=0,W_=yn.length;kl<W_;kl++)if(ge.isWebGL2){const sd=yn[kl];xe.update(sd,Ji),xe.bind(sd,Ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ji}function G_(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function V_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,I,B){Oe.get(E.texture).__webglTexture=I,Oe.get(E.depthTexture).__webglTexture=B;const G=Oe.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const B=Oe.get(E);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,B=0){T=E,A=I,w=B;let G=!0,z=null,he=!1,Ee=!1;if(E){const be=Oe.get(E);be.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(N.FRAMEBUFFER,null),G=!1):be.__webglFramebuffer===void 0?Ve.setupRenderTarget(E):be.__hasExternalTextures&&Ve.rebindTextures(E,Oe.get(E.texture).__webglTexture,Oe.get(E.depthTexture).__webglTexture);const Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ee=!0);const Fe=Oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[I])?z=Fe[I][B]:z=Fe[I],he=!0):ge.isWebGL2&&E.samples>0&&Ve.useMultisampledRTT(E)===!1?z=Oe.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?z=Fe[B]:z=Fe,y.copy(E.viewport),C.copy(E.scissor),q=E.scissorTest}else y.copy(H).multiplyScalar(Z).floor(),C.copy(J).multiplyScalar(Z).floor(),q=le;if(Me.bindFramebuffer(N.FRAMEBUFFER,z)&&ge.drawBuffers&&G&&Me.drawBuffers(E,z),Me.viewport(y),Me.scissor(C),Me.setScissorTest(q),he){const be=Oe.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,be.__webglTexture,B)}else if(Ee){const be=Oe.get(E.texture),Xe=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.__webglTexture,B||0,Xe)}L=-1},this.readRenderTargetPixels=function(E,I,B,G,z,he,Ee){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){Me.bindFramebuffer(N.FRAMEBUFFER,Ce);try{const be=E.texture,Xe=be.format,Fe=be.type;if(Xe!==zn&&we.convert(Xe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Fe===Po&&(_e.has("EXT_color_buffer_half_float")||ge.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Fe!==Wi&&we.convert(Fe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===li&&(ge.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-G&&B>=0&&B<=E.height-z&&N.readPixels(I,B,G,z,we.convert(Xe),we.convert(Fe),he)}finally{const be=T!==null?Oe.get(T).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(E,I,B=0){const G=Math.pow(2,-B),z=Math.floor(I.image.width*G),he=Math.floor(I.image.height*G);Ve.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,E.x,E.y,z,he),Me.unbindTexture()},this.copyTextureToTexture=function(E,I,B,G=0){const z=I.image.width,he=I.image.height,Ee=we.convert(B.format),Ce=we.convert(B.type);Ve.setTexture2D(B,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,G,E.x,E.y,z,he,Ee,Ce,I.image.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,G,E.x,E.y,I.mipmaps[0].width,I.mipmaps[0].height,Ee,I.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,G,E.x,E.y,Ee,Ce,I.image),G===0&&B.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(E,I,B,G,z=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=Math.round(E.max.x-E.min.x),Ee=Math.round(E.max.y-E.min.y),Ce=E.max.z-E.min.z+1,be=we.convert(G.format),Xe=we.convert(G.type);let Fe;if(G.isData3DTexture)Ve.setTexture3D(G,0),Fe=N.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)Ve.setTexture2DArray(G,0),Fe=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);const ze=N.getParameter(N.UNPACK_ROW_LENGTH),xt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ln=N.getParameter(N.UNPACK_SKIP_PIXELS),Ct=N.getParameter(N.UNPACK_SKIP_ROWS),Jn=N.getParameter(N.UNPACK_SKIP_IMAGES),ht=B.isCompressedTexture?B.mipmaps[z]:B.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ht.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,E.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,E.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,E.min.z),B.isDataTexture||B.isData3DTexture?N.texSubImage3D(Fe,z,I.x,I.y,I.z,he,Ee,Ce,be,Xe,ht.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D(Fe,z,I.x,I.y,I.z,he,Ee,Ce,be,ht.data):N.texSubImage3D(Fe,z,I.x,I.y,I.z,he,Ee,Ce,be,Xe,ht),N.pixelStorei(N.UNPACK_ROW_LENGTH,ze),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ln),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ct),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Jn),z===0&&G.generateMipmaps&&N.generateMipmap(Fe),Me.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ve.setTextureCube(E,0):E.isData3DTexture?Ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ve.setTexture2DArray(E,0):Ve.setTexture2D(E,0),Me.unbindTexture()},this.resetState=function(){A=0,w=0,T=null,Me.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===$f?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===Nl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bw extends F_{}bw.prototype.isWebGL1Renderer=!0;class Jf{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=n,this.far=i}clone(){return new Jf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Dw extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Mr extends vi{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],m=[];let v=0;const x=[],p=i/2;let c=0;_(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(f),this.setAttribute("position",new gn(d,3)),this.setAttribute("normal",new gn(h,3)),this.setAttribute("uv",new gn(m,2));function _(){const M=new F,A=new F;let w=0;const T=(n-e)/i;for(let L=0;L<=s;L++){const X=[],y=L/s,C=y*(n-e)+e;for(let q=0;q<=r;q++){const K=q/r,b=K*l+a,j=Math.sin(b),V=Math.cos(b);A.x=C*j,A.y=-y*i+p,A.z=C*V,d.push(A.x,A.y,A.z),M.set(j,T,V).normalize(),h.push(M.x,M.y,M.z),m.push(K,1-y),X.push(v++)}x.push(X)}for(let L=0;L<r;L++)for(let X=0;X<s;X++){const y=x[X][L],C=x[X+1][L],q=x[X+1][L+1],K=x[X][L+1];f.push(y,C,K),f.push(C,q,K),w+=6}u.addGroup(c,w,0),c+=w}function g(M){const A=v,w=new $e,T=new F;let L=0;const X=M===!0?e:n,y=M===!0?1:-1;for(let q=1;q<=r;q++)d.push(0,p*y,0),h.push(0,y,0),m.push(.5,.5),v++;const C=v;for(let q=0;q<=r;q++){const b=q/r*l+a,j=Math.cos(b),V=Math.sin(b);T.x=X*V,T.y=p*y,T.z=X*j,d.push(T.x,T.y,T.z),h.push(0,y,0),w.x=j*.5+.5,w.y=V*.5*y+.5,m.push(w.x,w.y),v++}for(let q=0;q<r;q++){const K=A+q,b=C+q;M===!0?f.push(b,b+1,K):f.push(b+1,b,K),L+=3}u.addGroup(c,L,M===!0?1:2),c+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Il extends vi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const f=[],d=new F,h=new F,m=[],v=[],x=[],p=[];for(let c=0;c<=i;c++){const _=[],g=c/i;let M=0;c===0&&o===0?M=.5/n:c===i&&l===Math.PI&&(M=-.5/n);for(let A=0;A<=n;A++){const w=A/n;d.x=-e*Math.cos(r+w*s)*Math.sin(o+g*a),d.y=e*Math.cos(o+g*a),d.z=e*Math.sin(r+w*s)*Math.sin(o+g*a),v.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(w+M,1-g),_.push(u++)}f.push(_)}for(let c=0;c<i;c++)for(let _=0;_<n;_++){const g=f[c][_+1],M=f[c][_],A=f[c+1][_],w=f[c+1][_+1];(c!==0||o>0)&&m.push(g,M,w),(c!==i-1||l<Math.PI)&&m.push(M,A,w)}this.setIndex(m),this.setAttribute("position",new gn(v,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Un extends zo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=m_,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ed extends Ut{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class Nw extends ed{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Xu=new vt,Op=new F,zp=new F;class O_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zf,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Op.setFromMatrixPosition(e.matrixWorld),n.position.copy(Op),zp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(zp),n.updateMatrixWorld(),Xu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const kp=new vt,Ks=new F,ju=new F;class Uw extends O_{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ks.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ks),ju.copy(i.position),ju.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(ju),i.updateMatrixWorld(),r.makeTranslation(-Ks.x,-Ks.y,-Ks.z),kp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kp)}}class Iw extends ed{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Uw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fw extends O_{constructor(){super(new P_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ow extends ed{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Fw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yf);const qr={title:"Uncharted",edition:"",console:"PS3",accent:"#c2803a",accent2:"#f0c060",hero:"#7a5230"},z_=[{code:"es",label:"Español"},{code:"en",label:"English"},{code:"pt",label:"Português"},{code:"fr",label:"Français"},{code:"de",label:"Deutsch"},{code:"it",label:"Italiano"},{code:"zh",label:"中文"},{code:"ja",label:"日本語"},{code:"ar",label:"العربية"}],zw=["ar"],k_="arcade.lang",kw={es:{langLabel:"Idioma",eyebrow:"Arcade Premium",heroCopy:"Salta entre las ruinas, reúne las reliquias y alcanza el tesoro dorado.",live:"En directo",players:"Aventureros",noPlayers:"Aún no hay aventureros: añade uno abajo.",remove:t=>`Quitar ${t}`,addPlaceholder:"Añadir un nombre",add:"+ Añadir",start:"▶ Aventura",playingAs:"Juegas como",best:"Mejor",score:"Puntos",treasures:"Reliquias",time:"Tiempo",stop:"■ Salir",go:"¡YA!",finish:"¡Tesoro!",won:"¡Tesoro hallado! 🏆",fell:"¡Al vacío! Reapareces…",playAgain:"↻ Jugar otra vez",menu:"‹ Menú",hint:"Flechas/WASD para moverte · Espacio para saltar · o el mando 🎮"},en:{langLabel:"Language",eyebrow:"Premium Arcade",heroCopy:"Leap across the ruins, gather the relics and reach the golden treasure.",live:"Live",players:"Adventurers",noPlayers:"No adventurers yet — add one below.",remove:t=>`Remove ${t}`,addPlaceholder:"Add a new name",add:"+ Add",start:"▶ Adventure",playingAs:"Playing as",best:"Best",score:"Score",treasures:"Relics",time:"Time",stop:"■ Exit",go:"GO!",finish:"Treasure!",won:"Treasure found! 🏆",fell:"Into the void! Respawning…",playAgain:"↻ Play again",menu:"‹ Menu",hint:"Arrow keys / WASD to move · Space to jump · or a gamepad 🎮"},pt:{langLabel:"Idioma",eyebrow:"Arcade Premium",heroCopy:"Salte entre as ruínas, reúna as relíquias e alcance o tesouro dourado.",live:"No ar",players:"Aventureiros",noPlayers:"Ainda não há aventureiros — adicione um abaixo.",remove:t=>`Remover ${t}`,addPlaceholder:"Adicionar um nome",add:"+ Adicionar",start:"▶ Aventura",playingAs:"Jogando como",best:"Melhor",score:"Pontos",treasures:"Relíquias",time:"Tempo",stop:"■ Sair",go:"JÁ!",finish:"Tesouro!",won:"Tesouro encontrado! 🏆",fell:"No vazio! Renascendo…",playAgain:"↻ Jogar de novo",menu:"‹ Menu",hint:"Setas / WASD para mover · Espaço para pular · ou o controle 🎮"},fr:{langLabel:"Langue",eyebrow:"Arcade Premium",heroCopy:"Bondis à travers les ruines, récolte les reliques et atteins le trésor doré.",live:"En ligne",players:"Aventuriers",noPlayers:"Aucun aventurier — ajoutes-en un ci-dessous.",remove:t=>`Retirer ${t}`,addPlaceholder:"Ajouter un nom",add:"+ Ajouter",start:"▶ Aventure",playingAs:"Tu joues",best:"Record",score:"Score",treasures:"Reliques",time:"Temps",stop:"■ Quitter",go:"PARTEZ !",finish:"Trésor !",won:"Trésor trouvé ! 🏆",fell:"Dans le vide ! Réapparition…",playAgain:"↻ Rejouer",menu:"‹ Menu",hint:"Flèches / WASD pour bouger · Espace pour sauter · ou une manette 🎮"},de:{langLabel:"Sprache",eyebrow:"Premium-Arcade",heroCopy:"Springe durch die Ruinen, sammle die Relikte und erreiche den goldenen Schatz.",live:"Live",players:"Abenteurer",noPlayers:"Noch keine Abenteurer — unten einen hinzufügen.",remove:t=>`${t} entfernen`,addPlaceholder:"Namen hinzufügen",add:"+ Hinzu",start:"▶ Abenteuer",playingAs:"Du spielst",best:"Rekord",score:"Punkte",treasures:"Relikte",time:"Zeit",stop:"■ Verlassen",go:"LOS!",finish:"Schatz!",won:"Schatz gefunden! 🏆",fell:"Ins Leere! Neustart…",playAgain:"↻ Nochmal",menu:"‹ Menü",hint:"Pfeile / WASD zum Bewegen · Leertaste zum Springen · oder ein Controller 🎮"},it:{langLabel:"Lingua",eyebrow:"Arcade Premium",heroCopy:"Salta tra le rovine, raccogli le reliquie e raggiungi il tesoro dorato.",live:"Attivo",players:"Avventurieri",noPlayers:"Ancora nessun avventuriero — aggiungine uno sotto.",remove:t=>`Rimuovi ${t}`,addPlaceholder:"Aggiungi un nome",add:"+ Aggiungi",start:"▶ Avventura",playingAs:"Giochi come",best:"Record",score:"Punti",treasures:"Reliquie",time:"Tempo",stop:"■ Esci",go:"VIA!",finish:"Tesoro!",won:"Tesoro trovato! 🏆",fell:"Nel vuoto! Rinasci…",playAgain:"↻ Rigioca",menu:"‹ Menu",hint:"Frecce / WASD per muoverti · Spazio per saltare · o un controller 🎮"},zh:{langLabel:"语言",eyebrow:"精品街机",heroCopy:"在遗迹间跳跃，收集圣物，抵达金色宝藏。",live:"在线",players:"冒险者",noPlayers:"还没有冒险者 —— 在下面添加一个。",remove:t=>`移除 ${t}`,addPlaceholder:"添加新名字",add:"+ 添加",start:"▶ 冒险",playingAs:"当前玩家",best:"最佳",score:"分数",treasures:"圣物",time:"时间",stop:"■ 退出",go:"出发！",finish:"宝藏！",won:"找到宝藏！🏆",fell:"坠入深渊！重生中…",playAgain:"↻ 再玩一次",menu:"‹ 菜单",hint:"方向键 / WASD 移动 · 空格跳跃 · 或用手柄 🎮"},ja:{langLabel:"言語",eyebrow:"プレミアム アーケード",heroCopy:"遺跡を飛び越え、遺物を集めて黄金の秘宝を目指そう。",live:"オンライン",players:"冒険者",noPlayers:"まだ冒険者がいません — 下で追加。",remove:t=>`${t} を削除`,addPlaceholder:"名前を追加",add:"+ 追加",start:"▶ 冒険",playingAs:"プレイヤー",best:"ベスト",score:"スコア",treasures:"遺物",time:"タイム",stop:"■ 退出",go:"スタート！",finish:"秘宝！",won:"秘宝発見！🏆",fell:"奈落へ！復活中…",playAgain:"↻ もう一度",menu:"‹ メニュー",hint:"矢印 / WASD で移動 · スペースでジャンプ · またはゲームパッド 🎮"},ar:{langLabel:"اللغة",eyebrow:"أركيد بريميوم",heroCopy:"اقفز بين الأطلال، واجمع الآثار، وابلغ الكنز الذهبي.",live:"مباشر",players:"المغامرون",noPlayers:"لا مغامرين بعد — أضف واحدًا بالأسفل.",remove:t=>`أزل ${t}`,addPlaceholder:"أضف اسمًا جديدًا",add:"+ أضف",start:"▶ مغامرة",playingAs:"تلعب باسم",best:"الأفضل",score:"النقاط",treasures:"الآثار",time:"الوقت",stop:"■ خروج",go:"!انطلق",finish:"!الكنز",won:"🏆 !عُثر على الكنز",fell:"…إلى الهاوية! تعود للظهور",playAgain:"↻ العب مجددًا",menu:"‹ القائمة",hint:"الأسهم / WASD للحركة · مسافة للقفز · أو يد التحكم 🎮"}};function Yu(t){return t&&z_.some(e=>e.code===t)?t:null}function Bw(){try{const e=new URLSearchParams(window.location.search).get("lang"),n=Yu((e??"").toLowerCase());if(n)return n;const i=Yu(localStorage.getItem(k_));if(i)return i}catch{}const t=(typeof navigator<"u"?navigator.language:"en").slice(0,2).toLowerCase();return Yu(t)??"en"}function Hw(t){try{localStorage.setItem(k_,t)}catch{}}const Bp={0:"A",1:"B",2:"X",3:"Y",4:"LB",5:"RB",8:"back",9:"start"},Gw=["up","down","left","right"];function Vw(t){const e=t.repeatMs??130,n=t.firstRepeatMs??300,i=t.deadzone??.5;let r=0;const s=[],o={up:!1,down:!1,left:!1,right:!1},a={up:0,down:0,left:0,right:0},l=()=>{var d,h,m,v,x,p;const u=typeof navigator.getGamepads=="function"?navigator.getGamepads():[];let f=null;for(const c of u)if(c){f=c;break}if(f){const c=performance.now();f.buttons.forEach((A,w)=>{var L;const T=A.pressed;T&&!s[w]&&Bp[w]!==void 0&&((L=t.onButton)==null||L.call(t,Bp[w])),s[w]=T});const _=f.axes[0]??0,g=f.axes[1]??0,M={up:(((d=f.buttons[12])==null?void 0:d.pressed)??!1)||g<-i,down:(((h=f.buttons[13])==null?void 0:h.pressed)??!1)||g>i,left:(((m=f.buttons[14])==null?void 0:m.pressed)??!1)||_<-i,right:(((v=f.buttons[15])==null?void 0:v.pressed)??!1)||_>i};for(const A of Gw)M[A]?o[A]?c>=a[A]&&(a[A]=c+e,(p=t.onDir)==null||p.call(t,A)):(o[A]=!0,a[A]=c+n,(x=t.onDir)==null||x.call(t,A)):o[A]=!1}r=requestAnimationFrame(l)};return r=requestAnimationFrame(l),()=>cancelAnimationFrame(r)}const Hp={A:0,B:1,X:2,Y:3,LB:4,RB:5,back:8,start:9};function Ww(t){return t.startsWith("Arrow")?t:t===" "?"Space":t==="Enter"?"Enter":t.length===1?`Key${t.toUpperCase()}`:t}function qu(t,e){const n=new KeyboardEvent(t,{key:e,code:Ww(e),bubbles:!0,cancelable:!0});window.dispatchEvent(n)}function Xw(t,e=.5){let n=0;const i={},r=(o,a)=>{const l=t[o];l&&(a&&!i[o]?(i[o]=!0,qu("keydown",l)):!a&&i[o]&&(i[o]=!1,qu("keyup",l)))},s=()=>{var l,u,f,d;const o=typeof navigator.getGamepads=="function"?navigator.getGamepads():[];let a=null;for(const h of o)if(h){a=h;break}if(a){const h=a.axes[0]??0,m=a.axes[1]??0;r("up",(((l=a.buttons[12])==null?void 0:l.pressed)??!1)||m<-e),r("down",(((u=a.buttons[13])==null?void 0:u.pressed)??!1)||m>e),r("left",(((f=a.buttons[14])==null?void 0:f.pressed)??!1)||h<-e),r("right",(((d=a.buttons[15])==null?void 0:d.pressed)??!1)||h>e),Object.keys(Hp).forEach(v=>{var x;return r(v,((x=a.buttons[Hp[v]])==null?void 0:x.pressed)??!1)})}n=requestAnimationFrame(s)};return n=requestAnimationFrame(s),()=>{cancelAnimationFrame(n),Object.keys(i).forEach(o=>{i[o]&&t[o]&&qu("keyup",t[o])})}}const Fn=[{x:0,y:0,z:0,hw:3.6,hd:3.6},{x:0,y:.4,z:8,hw:3,hd:3},{x:4,y:1.2,z:15,hw:2.8,hd:2.8},{x:1,y:.6,z:22,hw:2.6,hd:2.6},{x:-3,y:1.8,z:29,hw:2.8,hd:2.8},{x:-6,y:1,z:36.5,hw:2.6,hd:2.6},{x:-2,y:2.6,z:43.5,hw:2.6,hd:2.6},{x:3,y:2,z:50.5,hw:2.8,hd:2.8},{x:6,y:3.4,z:57.5,hw:2.6,hd:2.6},{x:2,y:2.2,z:65,hw:2.6,hd:2.6},{x:-3,y:3.6,z:72,hw:2.8,hd:2.8},{x:0,y:3,z:80,hw:3.4,hd:3.4},{x:0,y:3.4,z:90,hw:5,hd:5}],Zs=Fn[Fn.length-1],jw=[1,3,5,7,9,11],ar=jw.map(t=>({x:Fn[t].x,y:Fn[t].y+1.5,z:Fn[t].z})),Gp=.18,Yw=.024,qw=.47,$w=-.85,Kw=-20,Vp="unch-names",Wp="unch-best-by-user",Xp=t=>{const e=Math.floor(t/1e3),n=Math.floor(t%1e3/10);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}.${String(n).padStart(2,"0")}`};function Zw(){const t=new us,e=new Un({color:new Ze(qr.hero),roughness:.7,metalness:.05}),n=new Un({color:3811090,roughness:.8}),i=new Un({color:14262374,roughness:.6}),r=new Un({color:4861974,roughness:.75}),s=new at(new hn(.24,.6,.3),n);s.position.set(-.17,.3,0);const o=s.clone();o.position.x=.17;const a=new at(new hn(.72,.78,.42),e);a.position.set(0,.99,0);const l=new at(new hn(.5,.55,.24),n);l.position.set(0,1,-.32);const u=new at(new hn(.18,.62,.22),e);u.position.set(-.47,.99,0);const f=u.clone();f.position.x=.47;const d=new at(new Il(.3,18,14),i);d.position.set(0,1.68,0);const h=new at(new hn(.1,.1,.12),i);h.position.set(0,1.66,.3);const m=new at(new Mr(.46,.46,.07,18),r);m.position.set(0,1.82,0);const v=new at(new Mr(.28,.3,.26,18),r);v.position.set(0,1.96,0);for(const x of[s,o,a,l,u,f,d,h,m,v])x.castShadow=!0,t.add(x);return t}function Qw(){const[t,e]=Ke.useState(Bw),n=kw[t],i=Ke.useRef(null),[r,s]=Ke.useState("menu"),o=Ke.useRef("menu"),[a,l]=Ke.useState({score:0,treasures:0,timeMs:0,best:0,count:3}),[u,f]=Ke.useState({score:0,treasures:0,timeMs:0}),[d,h]=Ke.useState(!1),[m,v]=Ke.useState([]),[x,p]=Ke.useState(""),[c,_]=Ke.useState(""),[g,M]=Ke.useState(""),[A,w]=Ke.useState({}),T=Ke.useRef({x:0,y:0,z:0}),L=Ke.useRef(0),X=Ke.useRef(!0),y=Ke.useRef(0),C=Ke.useRef(0),q=Ke.useRef({up:!1,down:!1,left:!1,right:!1}),K=Ke.useRef(!1),b=Ke.useRef(!1),j=Ke.useRef(0),V=Ke.useRef([]),Z=Ke.useRef(0),D=Ke.useRef(0),O=Ke.useRef(0),H=Ke.useRef(null);Ke.useEffect(()=>{o.current=r},[r]),Ke.useEffect(()=>{document.documentElement.lang=t,document.documentElement.dir=zw.includes(t)?"rtl":"ltr";const $=document.documentElement.style;$.setProperty("--accent",qr.accent),$.setProperty("--accent2",qr.accent2)},[t]),Ke.useEffect(()=>{try{v(JSON.parse(localStorage.getItem(Vp)||"[]")),w(JSON.parse(localStorage.getItem(Wp)||"{}"))}catch{}},[]);const J=$=>{v($),localStorage.setItem(Vp,JSON.stringify($))},le=()=>{const $=g.trim();$&&(m.includes($)||J([$,...m]),p($),M(""))},Pe=$=>{J(m.filter(ye=>ye!==$)),x===$&&p("")};Ke.useEffect(()=>{const $=(N,ke)=>{const _e=N.target;if(_e&&(_e.tagName==="INPUT"||_e.tagName==="SELECT"))return;const ge=N.key;if(ge==="ArrowUp"||ge==="w"||ge==="W")q.current.up=ke;else if(ge==="ArrowDown"||ge==="s"||ge==="S")q.current.down=ke;else if(ge==="ArrowLeft"||ge==="a"||ge==="A")q.current.left=ke;else if(ge==="ArrowRight"||ge==="d"||ge==="D")q.current.right=ke;else if(ge===" "||N.code==="Space")ke?b.current||(b.current=!0,K.current=!0):b.current=!1;else return;N.preventDefault()},ye=N=>$(N,!0),Se=N=>$(N,!1);return window.addEventListener("keydown",ye),window.addEventListener("keyup",Se),()=>{window.removeEventListener("keydown",ye),window.removeEventListener("keyup",Se)}},[]),Ke.useEffect(()=>{const $=Xw({up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",A:" "}),ye=Vw({onButton:Se=>{const N=H.current,ke=o.current;Se==="start"?(ke==="menu"||ke==="won")&&N&&N.start():(Se==="B"||Se==="back")&&ke!=="menu"&&N&&N.exit()}});return()=>{$(),ye()}},[]);const k=()=>{const $=x||c;if(!$)return;_($);const ye=Fn[0];T.current={x:ye.x,y:ye.y,z:ye.z},L.current=0,X.current=!0,y.current=0,C.current=0,q.current={up:!1,down:!1,left:!1,right:!1},K.current=!1,j.current=0,Z.current=0,V.current=ar.map(()=>!1),O.current=150,h(!1),l({score:0,treasures:0,timeMs:0,best:0,count:3}),o.current="count",s("count")},ee=()=>{o.current="menu",s("menu")};H.current={start:k,exit:ee};const se=($,ye)=>Se=>{Se.preventDefault(),q.current[$]=ye},Ae=$=>{$.preventDefault(),K.current=!0};Ke.useEffect(()=>{if(r==="menu")return;const $=i.current;if(!$)return;const ye=new Dw,Se=new Ze("#c9772f");ye.background=Se,ye.fog=new Jf(Se.getHex(),70,200);const N=new dn(62,1,.1,1e3);N.position.set(0,7,-12);const ke=new F_({antialias:!0});ke.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),ke.shadowMap.enabled=!0,ke.shadowMap.type=s_,$.appendChild(ke.domElement),ke.domElement.style.width="100%",ke.domElement.style.height="100%",ke.domElement.style.display="block";const _e=()=>{const me=$.clientWidth||1,P=$.clientHeight||1;ke.setSize(me,P,!1),N.aspect=me/P,N.updateProjectionMatrix()};_e(),window.addEventListener("resize",_e),ye.add(new Nw(16767136,2758152,.85));const ge=new Ow(16769200,1.5);ge.position.set(-40,70,-30),ge.castShadow=!0,ge.shadow.mapSize.set(2048,2048);const Me=ge.shadow.camera;Me.left=-70,Me.right=70,Me.top=70,Me.bottom=-70,Me.near=10,Me.far=260,Me.updateProjectionMatrix(),ge.shadow.bias=-5e-4,ye.add(ge);const je=new at(new ko(600,600),new Un({color:1773318}));je.rotation.x=-Math.PI/2,je.position.y=-16,ye.add(je);const Oe=new Un({color:13281128,roughness:.95}),Ve=new Un({color:11570770,roughness:.95});Fn.forEach((me,P)=>{const ie=P===Fn.length-1,U=1.6,Q=new at(new hn(me.hw*2,U,me.hd*2),ie?new Un({color:14202999,roughness:.9}):P%2===0?Oe:Ve);Q.position.set(me.x,me.y-U/2,me.z),Q.castShadow=!0,Q.receiveShadow=!0,ye.add(Q)});const ut=new Un({color:10255688,roughness:.95});for(let me=0;me<9;me++){const P=me%2===0?1:-1,ie=6+me*10,U=P*(9+me%3*2.5),Q=9+me*3%5*2.2,ae=new at(new Mr(1.1,1.35,Q,12),ut);ae.position.set(U,-10+Q/2,ie),ae.castShadow=!0,ae.receiveShadow=!0,ye.add(ae);const Ie=new at(new hn(3.2,.7,3.2),ut);Ie.position.set(U,-10+Q+.35,ie),Ie.castShadow=!0,ye.add(Ie)}const R=new Mr(.5,.5,.12,20),S=new Un({color:15777888,emissive:15777888,emissiveIntensity:.55,metalness:.7,roughness:.3}),W=ar.map(me=>{const P=new at(R,S);return P.rotation.x=Math.PI/2,P.position.set(me.x,me.y,me.z),P.castShadow=!0,ye.add(P),P}),Y=new us,ne=new at(new hn(1.8,1.1,1.2),new Un({color:15777888,emissive:7031314,emissiveIntensity:.5,metalness:.85,roughness:.25}));ne.position.y=.8,ne.castShadow=!0,Y.add(ne);const te=new at(new Il(1.3,20,16),new ml({color:16771232,transparent:!0,opacity:.28}));te.position.y=1.2,Y.add(te);const Ne=new at(new Mr(.5,1.1,10,16,1,!0),new ml({color:16768906,transparent:!0,opacity:.14,side:Yn}));Ne.position.y=6,Y.add(Ne);const Re=new Iw(16765040,1.6,26,2);Re.position.set(0,2.4,0),Y.add(Re),Y.position.set(Zs.x,Zs.y,Zs.z),ye.add(Y);const ue=Zw();ye.add(ue);const de=new F,Ue=new F;let oe=0,it=0,We=0,we=0;const ve=(me,P,ie)=>P>=me.x-me.hw&&P<=me.x+me.hw&&ie>=me.z-me.hd&&ie<=me.z+me.hd,xe=()=>{const me=performance.now()-D.current,P=Math.max(0,Math.round((12e4-me)/200)),ie=j.current*100+500+P;Z.current=ie,f({score:ie,treasures:j.current,timeMs:me});const U=x||c;U&&w(Q=>{if(Q[U]&&Q[U]>=ie)return Q;const ae={...Q,[U]:ie};return localStorage.setItem(Wp,JSON.stringify(ae)),ae}),o.current="won",s("won")},qe=()=>{it++;const me=o.current,P=T.current;if(me==="count")O.current-=1,O.current<=0&&(o.current="playing",s("playing"),D.current=performance.now());else if(me==="playing"){const U=q.current;let Q=(U.right?1:0)-(U.left?1:0),ae=(U.up?1:0)-(U.down?1:0);if(Q!==0&&ae!==0){const Le=1/Math.SQRT2;Q*=Le,ae*=Le}X.current&&K.current&&(L.current=qw,X.current=!1),K.current=!1,P.x+=Q*Gp,P.z+=ae*Gp,L.current=Math.max($w,L.current-Yw);const Ie=P.y;P.y+=L.current;let et=!1;if(L.current<=0)for(let Le=0;Le<Fn.length;Le++){const Qe=Fn[Le];if(ve(Qe,P.x,P.z)&&P.y<=Qe.y&&Ie>=Qe.y-1){P.y=Qe.y,L.current=0,et=!0,y.current=Le;break}}if(X.current=et,P.y<Kw){const Le=Fn[y.current];P.x=Le.x,P.z=Le.z,P.y=Le.y,L.current=0,X.current=!0;const Qe=performance.now();Qe-we>400&&(we=Qe,h(!0),window.setTimeout(()=>h(!1),1200))}for(let Le=0;Le<ar.length;Le++){if(V.current[Le])continue;const Qe=ar[Le],an=P.x-Qe.x,Us=P.z-Qe.z;an*an+Us*Us<1.5&&Math.abs(P.y+1-Qe.y)<2.2&&(V.current[Le]=!0,W[Le].visible=!1,j.current+=1,Z.current+=100)}const St=P.x-Zs.x,Vt=P.z-Zs.z;if(St*St+Vt*Vt<2.4*2.4&&xe(),Q!==0||ae!==0){let Qe=Math.atan2(Q,ae)-C.current;for(;Qe>Math.PI;)Qe-=Math.PI*2;for(;Qe<-Math.PI;)Qe+=Math.PI*2;C.current+=Qe*.25}}ue.position.set(P.x,P.y,P.z),ue.rotation.y=C.current;const ie=it*.06;for(let U=0;U<W.length;U++){const Q=W[U];Q.visible&&(Q.rotation.y=ie,Q.position.y=ar[U].y+Math.sin(it*.05+U)*.15)}ne.rotation.y=Math.sin(it*.02)*.12,te.scale.setScalar(1+Math.sin(it*.06)*.08),de.set(P.x,P.y+1.2,P.z),Ue.set(P.x,P.y+6,P.z-10),N.position.lerp(Ue,.1),N.lookAt(de.x,de.y+.4,de.z+2)},De=()=>{if(qe(),ke.render(ye,N),++We%6===0){const me=o.current;me==="playing"?l({score:Z.current,treasures:j.current,timeMs:performance.now()-D.current,best:0,count:0}):me==="count"&&l(P=>({...P,count:Math.ceil(O.current/60)}))}oe=requestAnimationFrame(De)};return oe=requestAnimationFrame(De),()=>{cancelAnimationFrame(oe),window.removeEventListener("resize",_e),ke.dispose(),ke.domElement.parentNode===$&&$.removeChild(ke.domElement),ye.traverse(me=>{const P=me;P.geometry&&P.geometry.dispose();const ie=P.material;Array.isArray(ie)?ie.forEach(U=>U.dispose()):ie&&ie.dispose()})}},[r==="menu"]);const Te=c&&A[c]?A[c]:x&&A[x]?A[x]:0;return r==="menu"?fe.jsx("div",{className:"shell menu",children:fe.jsxs("div",{className:"panel",children:[fe.jsxs("div",{className:"head",children:[fe.jsxs("div",{children:[fe.jsxs("p",{className:"eyebrow",children:[qr.console," · ",n.eyebrow]}),fe.jsxs("h1",{children:[qr.title," ",fe.jsx("span",{className:"ed",children:qr.edition})]}),fe.jsx("p",{className:"copy",children:n.heroCopy})]}),fe.jsxs("div",{className:"head-side",children:[fe.jsx("select",{className:"lang-select",value:t,onChange:$=>{e($.target.value),Hw($.target.value)},"aria-label":n.langLabel,children:z_.map($=>fe.jsx("option",{value:$.code,children:$.label},$.code))}),fe.jsxs("span",{className:"pill",children:["● ",n.live]})]})]}),fe.jsx("h2",{className:"section",children:n.players}),fe.jsx("div",{className:"players",children:m.length?m.map($=>fe.jsxs("div",{className:`chip ${x===$?"sel":""}`,children:[fe.jsxs("button",{type:"button",className:"chip-main",onClick:()=>p($),children:[fe.jsx("span",{className:"avatar",children:$.charAt(0).toUpperCase()}),fe.jsx("span",{children:$}),A[$]?fe.jsxs("span",{className:"chip-best",children:["🏆 ",A[$]]}):null]}),fe.jsx("button",{type:"button",className:"chip-x","aria-label":n.remove($),onClick:()=>Pe($),children:"×"})]},$)):fe.jsx("p",{className:"empty",children:n.noPlayers})}),fe.jsxs("div",{className:"add-row",children:[fe.jsx("input",{value:g,onChange:$=>M($.target.value),onKeyDown:$=>$.key==="Enter"&&le(),maxLength:16,placeholder:n.addPlaceholder}),fe.jsx("button",{className:"btn",onClick:le,disabled:!g.trim(),children:n.add})]}),fe.jsx("button",{className:"btn primary big",onClick:k,disabled:!x,children:n.start}),x&&fe.jsxs("p",{className:"best-line",children:[n.playingAs," ",fe.jsx("strong",{children:x}),A[x]?` · ${n.best} ${A[x]}`:""]})]})}):fe.jsxs("div",{className:"shell",children:[fe.jsxs("header",{className:"bar",children:[fe.jsxs("span",{className:"tag",children:["🗺️ ",c]}),fe.jsx("div",{className:"bar-right",children:fe.jsx("button",{className:"stop",onClick:ee,children:n.stop})})]}),fe.jsxs("div",{className:"hud",children:[fe.jsxs("div",{className:"hud-chip",children:[fe.jsx("span",{children:n.score}),fe.jsx("strong",{children:a.score})]}),fe.jsxs("div",{className:"hud-chip",children:[fe.jsx("span",{children:n.treasures}),fe.jsxs("strong",{children:[a.treasures,"/",ar.length]})]}),fe.jsxs("div",{className:"hud-chip",children:[fe.jsx("span",{children:n.time}),fe.jsx("strong",{children:Xp(a.timeMs)})]}),fe.jsxs("div",{className:"hud-chip",children:[fe.jsx("span",{children:n.best}),fe.jsx("strong",{children:Te||"—"})]})]}),fe.jsxs("div",{className:"stage",children:[fe.jsx("div",{ref:i,className:"scene3d"}),r!=="won"&&fe.jsxs("div",{className:"touch",children:[fe.jsxs("div",{className:"touch-pad",children:[fe.jsx("button",{className:"tbtn up","aria-label":"▲",onPointerDown:se("up",!0),onPointerUp:se("up",!1),onPointerLeave:se("up",!1),onPointerCancel:se("up",!1),children:"▲"}),fe.jsx("button",{className:"tbtn left","aria-label":"◀",onPointerDown:se("left",!0),onPointerUp:se("left",!1),onPointerLeave:se("left",!1),onPointerCancel:se("left",!1),children:"◀"}),fe.jsx("button",{className:"tbtn right","aria-label":"▶",onPointerDown:se("right",!0),onPointerUp:se("right",!1),onPointerLeave:se("right",!1),onPointerCancel:se("right",!1),children:"▶"}),fe.jsx("button",{className:"tbtn down","aria-label":"▼",onPointerDown:se("down",!0),onPointerUp:se("down",!1),onPointerLeave:se("down",!1),onPointerCancel:se("down",!1),children:"▼"})]}),fe.jsx("button",{className:"tbtn jump","aria-label":"jump",onPointerDown:Ae,children:"⤴"})]}),d&&r==="playing"&&fe.jsx("div",{className:"flash","aria-hidden":!0,children:fe.jsx("span",{children:n.fell})}),r==="count"&&fe.jsx("div",{className:"count","aria-hidden":!0,children:fe.jsx("span",{children:a.count>0?a.count:n.go})}),r==="won"&&fe.jsx("div",{className:"overlay",children:fe.jsxs("div",{className:"card",children:[fe.jsx("p",{className:"ov-eyebrow",children:n.finish}),fe.jsx("h2",{children:n.won}),fe.jsxs("div",{className:"ov-row",children:[fe.jsxs("div",{children:[fe.jsx("span",{children:n.score}),fe.jsx("strong",{children:u.score})]}),fe.jsxs("div",{children:[fe.jsx("span",{children:n.treasures}),fe.jsxs("strong",{children:[u.treasures,"/",ar.length]})]}),fe.jsxs("div",{children:[fe.jsx("span",{children:n.time}),fe.jsx("strong",{children:Xp(u.timeMs)})]})]}),fe.jsxs("div",{className:"ov-actions",children:[fe.jsx("button",{className:"btn primary",onClick:k,children:n.playAgain}),fe.jsx("button",{className:"btn",onClick:ee,children:n.menu})]})]})})]}),fe.jsx("p",{className:"hint",children:n.hint})]})}$u.createRoot(document.getElementById("root")).render(fe.jsx(av.StrictMode,{children:fe.jsx(Qw,{})}));
