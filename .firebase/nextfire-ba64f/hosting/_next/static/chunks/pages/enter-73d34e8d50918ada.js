(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[926],{1296:function(e,t,n){var i=0/0,r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,l="object"==typeof self&&self&&self.Object===Object&&self,f=c||l||Function("return this")(),d=Object.prototype.toString,h=Math.max,p=Math.min,m=function(){return f.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function x(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||(n=t)&&"object"==typeof n&&"[object Symbol]"==d.call(t))return i;if(g(e)){var t,n,c="function"==typeof e.valueOf?e.valueOf():e;e=g(c)?c+"":c}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=s.test(e);return l||u.test(e)?a(e.slice(2),l?2:8):o.test(e)?i:+e}e.exports=function(e,t,n){var i,r,o,s,u,a,c=0,l=!1,f=!1,d=!0;if("function"!=typeof e)throw TypeError("Expected a function");function j(t){var n=i,o=r;return i=r=void 0,c=t,s=e.apply(o,n)}function b(e){var n=e-a,i=e-c;return void 0===a||n>=t||n<0||f&&i>=o}function v(){var e,n,i,r=m();if(b(r))return y(r);u=setTimeout(v,(e=r-a,n=r-c,i=t-e,f?p(i,o-n):i))}function y(e){return(u=void 0,d&&i)?j(e):(i=r=void 0,s)}function _(){var e,n=m(),o=b(n);if(i=arguments,r=this,a=n,o){if(void 0===u)return c=e=a,u=setTimeout(v,t),l?j(e):s;if(f)return u=setTimeout(v,t),j(a)}return void 0===u&&(u=setTimeout(v,t)),s}return t=x(t)||0,g(n)&&(l=!!n.leading,o=(f="maxWait"in n)?h(x(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),_.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=a=r=u=void 0},_.flush=function(){return void 0===u?s:y(m())},_}},8523:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/enter",function(){return n(297)}])},297:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var i=n(5893),r=n(26),o=n(8059),s=n(7294),u=n(1296),a=n.n(u);function c(e){let{user:t,username:n}=(0,s.useContext)(o.S);return(0,i.jsx)("main",{children:t?n?(0,i.jsx)(f,{}):(0,i.jsx)(d,{}):(0,i.jsx)(l,{})})}function l(){let e=async()=>{await r.I8.signInWithPopup(r.qV)};return(0,i.jsxs)("button",{className:"btn-google",onClick:e,children:[(0,i.jsx)("img",{src:"/google.png"})," Sign in with Google"]})}function f(){return(0,i.jsx)("button",{onClick:()=>r.I8.signOut(),children:"Sign Out"})}function d(){let[e,t]=(0,s.useState)(""),[n,u]=(0,s.useState)(!1),[c,l]=(0,s.useState)(!1),{user:f,username:d}=(0,s.useContext)(o.S);(0,s.useEffect)(()=>{m(e)},[e]);let p=e=>{let n=e.target.value.toLowerCase();n.length<3&&(t(n),l(!1),u(!1)),/^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(n)&&(t(n),l(!0),u(!1))},m=(0,s.useCallback)(a()(async e=>{if(e.length>=3){let t=r.RZ.doc("usernames/".concat(e)),{exists:n}=await t.get();console.log("Firestore read executed!"),u(!n),l(!1)}},500),[]),g=async t=>{t.preventDefault();let n=r.RZ.doc("users/".concat(f.uid)),i=r.RZ.doc("usernames/".concat(e)),o=r.RZ.batch();o.set(n,{username:e,photoURL:f.photoURL,displayName:f.displayName}),o.set(i,{uid:f.uid}),await o.commit()};return!d&&(0,i.jsxs)("section",{children:[(0,i.jsx)("h3",{children:"Choose Username"}),(0,i.jsxs)("form",{onSubmit:g,children:[(0,i.jsx)("input",{name:"username",placeholder:"username",value:e,onChange:p}),(0,i.jsx)(h,{username:e,isValid:n,loading:c}),(0,i.jsx)("button",{type:"submit",className:"btn-green",disabled:!n,children:"Choose"}),(0,i.jsx)("h3",{children:"Debug State"}),(0,i.jsxs)("div",{children:["Username: ",e,(0,i.jsx)("br",{}),"Loading: ",c.toString(),(0,i.jsx)("br",{}),"Username Valid: ",n.toString()]})]})]})}function h(e){let{username:t,isValid:n,loading:r}=e;return r?(0,i.jsx)("p",{children:"Checking..."}):n?(0,i.jsxs)("p",{className:"text-success",children:[t," is available!"]}):t&&!n?(0,i.jsx)("p",{className:"text-danger",children:"That username is taken!"}):(0,i.jsx)("p",{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8523)}),_N_E=e.O()}]);