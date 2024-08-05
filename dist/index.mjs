import e,{useState as r}from"react";var t=function(){return t=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},t.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var n,o={exports:{}},a={};var i,s={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */"production"===process.env.NODE_ENV?o.exports=function(){if(n)return a;n=1;var r=e,t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var o,a={},c=null,p=null;for(o in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)i.call(r,o)&&!l.hasOwnProperty(o)&&(a[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===a[o]&&(a[o]=r[o]);return{$$typeof:t,type:e,key:c,ref:p,props:a,_owner:s.current}}return a.Fragment=o,a.jsx=c,a.jsxs=c,a}():o.exports=(i||(i=1,"production"!==process.env.NODE_ENV&&function(){var r=e,t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen"),h=Symbol.iterator,g="@@iterator",x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function m(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];!function(e,r,t){var n=x.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(r+="%s",t=t.concat([n]));var o=t.map((function(e){return String(e)}));o.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,o)}("error",e,t)}var b,j=!1,k=!1,E=!1,_=!1,S=!1;function O(e){return e.displayName||"Context"}function w(e){if(null==e)return null;if("number"==typeof e.tag&&m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case n:return"Portal";case i:return"Profiler";case a:return"StrictMode";case u:return"Suspense";case f:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case c:return O(e)+".Consumer";case l:return O(e._context)+".Provider";case p:return function(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return""!==o?t+"("+o+")":t}(e,e.render,"ForwardRef");case d:var r=e.displayName||null;return null!==r?r:w(e.type)||"Memo";case y:var t=e,s=t._payload,v=t._init;try{return w(v(s))}catch(e){return null}}return null}b=Symbol.for("react.module.reference");var C,R,T,P,N,$,A,L=Object.assign,D=0;function F(){}F.__reactDisabledLog=!0;var I,z=x.ReactCurrentDispatcher;function W(e,r,t){if(void 0===I)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);I=n&&n[1]||""}return"\n"+I+e}var U,B=!1,M="function"==typeof WeakMap?WeakMap:Map;function Y(e,r){if(!e||B)return"";var t,n=U.get(e);if(void 0!==n)return n;B=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=z.current,z.current=null,function(){if(0===D){C=console.log,R=console.info,T=console.warn,P=console.error,N=console.group,$=console.groupCollapsed,A=console.groupEnd;var e={configurable:!0,enumerable:!0,value:F,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}D++}();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){t=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){t=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){t=e}e()}}catch(r){if(r&&t&&"string"==typeof r.stack){for(var s=r.stack.split("\n"),l=t.stack.split("\n"),c=s.length-1,p=l.length-1;c>=1&&p>=0&&s[c]!==l[p];)p--;for(;c>=1&&p>=0;c--,p--)if(s[c]!==l[p]){if(1!==c||1!==p)do{if(c--,--p<0||s[c]!==l[p]){var u="\n"+s[c].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),"function"==typeof e&&U.set(e,u),u}}while(c>=1&&p>=0);break}}}finally{B=!1,z.current=o,function(){if(0==--D){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:L({},e,{value:C}),info:L({},e,{value:R}),warn:L({},e,{value:T}),error:L({},e,{value:P}),group:L({},e,{value:N}),groupCollapsed:L({},e,{value:$}),groupEnd:L({},e,{value:A})})}D<0&&m("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var f=e?e.displayName||e.name:"",d=f?W(f):"";return"function"==typeof e&&U.set(e,d),d}function V(e,r,t){if(null==e)return"";if("function"==typeof e)return Y(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return W(e);switch(e){case u:return W("Suspense");case f:return W("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case p:return Y(e.render,!1);case d:return V(e.type,r,t);case y:var o=e,a=o._payload,i=o._init;try{return V(i(a),r,t)}catch(e){}}return""}U=new M;var J=Object.prototype.hasOwnProperty,K={},X=x.ReactDebugCurrentFrame;function q(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);X.setExtraStackFrame(t)}else X.setExtraStackFrame(null)}var H=Array.isArray;function G(e){return H(e)}function Q(e){return""+e}function Z(e){if(function(e){try{return Q(e),!1}catch(e){return!0}}(e))return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),Q(e)}var ee,re,te,ne=x.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};te={};var ae=function(e,r,n,o,a,i,s){var l={$$typeof:t,type:e,key:r,ref:n,props:s,_owner:i,_store:{}};return Object.defineProperty(l._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(l,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(l,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(l.props),Object.freeze(l)),l};function ie(e,r,t,n,o){var a,i={},s=null,l=null;for(a in void 0!==t&&(Z(t),s=""+t),function(e){if(J.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==e.key}(r)&&(Z(r.key),s=""+r.key),function(e){if(J.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return void 0!==e.ref}(r)&&(l=r.ref,function(e,r){if("string"==typeof e.ref&&ne.current&&r&&ne.current.stateNode!==r){var t=w(ne.current.type);te[t]||(m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',w(ne.current.type),e.ref),te[t]=!0)}}(r,o)),r)J.call(r,a)&&!oe.hasOwnProperty(a)&&(i[a]=r[a]);if(e&&e.defaultProps){var c=e.defaultProps;for(a in c)void 0===i[a]&&(i[a]=c[a])}if(s||l){var p="function"==typeof e?e.displayName||e.name||"Unknown":e;s&&function(e,r){var t=function(){ee||(ee=!0,m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(i,p),l&&function(e,r){var t=function(){re||(re=!0,m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}(i,p)}return ae(e,s,l,o,n,ne.current,i)}var se,le=x.ReactCurrentOwner,ce=x.ReactDebugCurrentFrame;function pe(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);ce.setExtraStackFrame(t)}else ce.setExtraStackFrame(null)}function ue(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function fe(){if(le.current){var e=w(le.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}se=!1;var de={};function ye(e,r){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var t=function(e){var r=fe();if(!r){var t="string"==typeof e?e:e.displayName||e.name;t&&(r="\n\nCheck the top-level render call using <"+t+">.")}return r}(r);if(!de[t]){de[t]=!0;var n="";e&&e._owner&&e._owner!==le.current&&(n=" It was passed a child from "+w(e._owner.type)+"."),pe(e),m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),pe(null)}}}function ve(e,r){if("object"==typeof e)if(G(e))for(var t=0;t<e.length;t++){var n=e[t];ue(n)&&ye(n,r)}else if(ue(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var r=h&&e[h]||e[g];return"function"==typeof r?r:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)ue(a.value)&&ye(a.value,r)}}function he(e){var r,t=e.type;if(null!=t&&"string"!=typeof t){if("function"==typeof t)r=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==p&&t.$$typeof!==d)return;r=t.propTypes}if(r){var n=w(t);!function(e,r,t,n,o){var a=Function.call.bind(J);for(var i in e)if(a(e,i)){var s=void 0;try{if("function"!=typeof e[i]){var l=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw l.name="Invariant Violation",l}s=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){s=e}!s||s instanceof Error||(q(o),m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof s),q(null)),s instanceof Error&&!(s.message in K)&&(K[s.message]=!0,q(o),m("Failed %s type: %s",t,s.message),q(null))}}(r,e.props,"prop",n,e)}else void 0===t.PropTypes||se||(se=!0,m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",w(t)||"Unknown"));"function"!=typeof t.getDefaultProps||t.getDefaultProps.isReactClassApproved||m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}var ge={};function xe(e,r,n,s,h,g){var x=function(e){return"string"==typeof e||"function"==typeof e||!!(e===o||e===i||S||e===a||e===u||e===f||_||e===v||j||k||E)||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===d||e.$$typeof===l||e.$$typeof===c||e.$$typeof===p||e.$$typeof===b||void 0!==e.getModuleId)}(e);if(!x){var O,C="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(C+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),C+=fe(),null===e?O="null":G(e)?O="array":void 0!==e&&e.$$typeof===t?(O="<"+(w(e.type)||"Unknown")+" />",C=" Did you accidentally export a JSX literal instead of a component?"):O=typeof e,m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",O,C)}var R=ie(e,r,n,h,g);if(null==R)return R;if(x){var T=r.children;if(void 0!==T)if(s)if(G(T)){for(var P=0;P<T.length;P++)ve(T[P],e);Object.freeze&&Object.freeze(T)}else m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ve(T,e)}if(J.call(r,"key")){var N=w(e),$=Object.keys(r).filter((function(e){return"key"!==e})),A=$.length>0?"{key: someKey, "+$.join(": ..., ")+": ...}":"{key: someKey}";ge[N+A]||(m('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',A,N,$.length>0?"{"+$.join(": ..., ")+": ...}":"{}",N),ge[N+A]=!0)}return e===o?function(e){for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if("children"!==n&&"key"!==n){pe(e),m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),pe(null);break}}null!==e.ref&&(pe(e),m("Invalid attribute `ref` supplied to `React.Fragment`."),pe(null))}(R):he(R),R}var me=function(e,r,t){return xe(e,r,t,!1)},be=function(e,r,t){return xe(e,r,t,!0)};s.Fragment=o,s.jsx=me,s.jsxs=be}()),s);var l=o.exports,c=function(){var e=r([]),t=e[0],n=e[1];return{isExpanded:t,handleExpand:function(e){n((function(r){var t=function(e,r,t){if(t||2===arguments.length)for(var n,o=0,a=r.length;o<a;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return e.concat(n||Array.prototype.slice.call(r))}([],r,!0);return t[e]=!t[e],t}))}}};function p(e){var r=e.keyName,t=e.isExpanded,n=e.handleExpand,o=e.keyColor;return l.jsx("div",{style:{display:"flex",alignItems:"start"},children:l.jsxs("div",{style:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:function(){return n()},children:[l.jsx("div",{style:{height:"fit-content",width:"fit-content",fontSize:"10px"},children:l.jsx("div",{style:{marginRight:"8px"},id:"icon",children:t?"▶":"▼"})}),l.jsxs("div",{style:{color:o||"#0A0A0A",fontWeight:"600",display:"flex",wordBreak:"keep-all"},children:[r," ",l.jsx("span",{style:{color:"grey"},children:" : "})]})]})})}var u=function(e){var r=e.data,n=e.keyColor,o=e.valueColor,a=e.hideTypes,i=c(),s=i.handleExpand,u=i.isExpanded;return l.jsx("div",{children:r.map((function(e,r,i){return Array.isArray(e)&&e.length?l.jsxs("div",{style:{display:"flex"},children:[l.jsx(p,{handleExpand:function(){return s(r)},keyName:r,isExpanded:u[r],keyColor:n}),l.jsx(f,{isExpanded:u[r],value:e,isLast:i.length-1===r,keyColor:n,valueColor:o,hideTypes:a})]},r):e&&"object"==typeof e&&Object.keys(e).length?l.jsxs("div",{style:{display:"flex"},children:[l.jsx(p,{handleExpand:function(){return s(r)},keyName:r,isExpanded:u[r],keyColor:n}),l.jsx(y,t({isExpanded:u[r],value:e,isLast:i.length-1===r,keyColor:n,valueColor:o},a?{hideTypes:a}:{}))]},r):l.jsxs("p",{style:{color:"#333333"},children:["".concat(e)," ",i.length-1===r?"":","]},r)}))})};function f(e){var r=e.value,n=e.isExpanded,o=e.isLast,a=e.keyColor,i=e.valueColor,s=e.hideTypes;return l.jsx("div",{children:n?l.jsxs("div",{children:[s?null:l.jsx("span",{style:{fontSize:"12px",margin:"0 4px"},children:"array(".concat(r.length,")")}),"[....]"]}):l.jsxs("div",{children:[l.jsxs("div",{children:[s?null:l.jsx("span",{style:{fontSize:"12px",margin:"0 4px"},children:"(array)"}),"["]}),l.jsx("div",{style:{paddingLeft:"12px"},children:l.jsx(u,t({data:r,keyColor:a,valueColor:i},s?{hideTypes:s}:{}))}),l.jsx("div",{children:"]"+(o?"":",")})]})})}var d=function(e){var r=e.data,t=e.keyColor,n=e.valueColor,o=e.hideTypes,a=c(),i=a.handleExpand,s=a.isExpanded;return l.jsx("div",{children:Object.entries(r).map((function(e,r,a){var c=e[0],u=e[1];return Array.isArray(u)&&u.length?l.jsxs("div",{style:{display:"flex"},children:[l.jsx(p,{handleExpand:function(){return i(r)},keyName:c,isExpanded:s[r],keyColor:t}),l.jsx(f,{isExpanded:s[r],value:u,isLast:a.length-1===r,keyColor:t,valueColor:n,hideTypes:o})]},c):u&&"object"==typeof u&&Object.keys(u).length?l.jsxs("div",{style:{display:"flex"},children:[l.jsx(p,{handleExpand:function(){return i(r)},keyName:c,isExpanded:s[r],keyColor:t}),l.jsx(y,{isExpanded:s[r],value:u,isLast:a.length-1===r,keyColor:t,valueColor:n,hideTypes:o})]},c):l.jsxs("div",{style:{display:"flex",margin:"4px 0"},children:[l.jsxs("p",{style:{paddingLeft:"12px",color:"#0A0A0A",wordBreak:"keep-all",fontWeight:600},children:["".concat(c),":"]})," ",l.jsxs("p",{style:{color:"#333333"},children:[o?null:l.jsx("span",{style:{fontSize:"12px",margin:"0 4px",color:"black"},children:"(".concat(typeof u,")")}),"".concat(u)+(a.length-1===r?"":" ,")]})]},c)}))})};function y(e){var r=e.value,n=e.isExpanded,o=e.isLast,a=e.keyColor,i=e.valueColor,s=e.hideTypes;return l.jsx("div",{children:n?l.jsxs("div",{children:[s?null:l.jsx("span",{style:{fontSize:"12px",margin:"0 4px"},children:"object(".concat(Object.keys(r).length,")")}),"{...}"]}):l.jsxs("div",{children:[l.jsxs("div",{style:{paddingLeft:"8px"},children:[s?null:l.jsx("span",{style:{fontSize:"12px",margin:"0 4px"},children:"(object)"}),"{"]}),l.jsx("div",{style:{paddingLeft:"12px"},children:l.jsx(d,t({data:r,valueColor:i,keyColor:a},s?{hideTypes:s}:{}))}),l.jsx("div",{children:"}"+(o?"":",")})]})})}function v(e){var r=e.json,n=e.keyColor,o=e.valueColor,a=e.background,i=e.hideTypes,s=c(),u=s.handleExpand,d=s.isExpanded;return l.jsx("div",{style:{padding:"24px",background:a||"#f7f7f7",minHeight:"100vh"},children:Object.entries(r).map((function(e,r,a){var s=e[0],c=e[1];return Array.isArray(c)&&(null==c?void 0:c.length)?l.jsxs("div",{style:{display:"flex"},children:[l.jsx(p,{handleExpand:function(){return u(r)},keyName:s,isExpanded:d[r],keyColor:n}),l.jsx(f,t({isExpanded:d[r],value:c,isLast:a.length-1===r,keyColor:n,valueColor:o},i?{hideTypes:i}:{}))]},s):c&&"object"==typeof c&&Object.keys(c).length?l.jsxs("div",{style:{display:"flex"},children:[l.jsx(p,{handleExpand:function(){return u(r)},keyName:s,isExpanded:d[r],keyColor:n}),l.jsx(y,{isExpanded:d[r],value:c,isLast:a.length-1===r,keyColor:n,valueColor:o,hideTypes:i})]},s):l.jsxs("div",{style:{display:"flex",alignItems:"start",paddingLeft:"12px"},children:[l.jsxs("div",{style:{color:"#0A0A0A",wordBreak:"keep-all",fontWeight:600,display:"flex"},children:[s," ",l.jsx("span",{style:{color:"grey"},children:" : "})]}),l.jsxs("div",{style:{color:"#333333"},children:[i?null:l.jsx("span",{style:{fontSize:"12px",margin:"0 4px",color:"black"},children:"(".concat(typeof c,")")}),"".concat(c)]})]},s)}))})}export{v as default};
//# sourceMappingURL=index.mjs.map