(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4369)}])},9270:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var s=t(5893);function r(e){let{show:n}=e;return n?(0,s.jsx)("div",{className:"loader"}):null}},6383:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(5893),r=t(1664),c=t.n(r);function i(e){let{posts:n,admin:t}=e;return n?(0,s.jsx)("div",{children:n.map(e=>(0,s.jsx)(u,{post:e,admin:t},e.slug))}):null}function u(e){let{post:n,admin:t=!1}=e,r=null==n?void 0:n.content.trim().split(/\s+/g).length,i=(r/100+1).toFixed(0);return(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)(c(),{href:"/".concat(n.username),children:(0,s.jsxs)("strong",{children:["By @",n.username]})}),(0,s.jsx)(c(),{href:"/".concat(n.username,"/").concat(n.slug),children:(0,s.jsx)("h2",{children:n.title})}),(0,s.jsxs)("footer",{children:[(0,s.jsxs)("span",{children:[r," words. ",i," min read"]}),(0,s.jsxs)("span",{className:"push-left",children:["❤️ ",n.heartCount||0," Hearts"]})]}),t&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c(),{href:"admin/".concat(n.slug),children:(0,s.jsx)("h3",{children:(0,s.jsx)("button",{className:"btn-blue",children:"Edit"})})}),n.published?(0,s.jsx)("p",{className:"text-success",children:"Live"}):(0,s.jsx)("p",{className:"text-danger",children:"Unpublished"})]})]})}},4369:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return a},default:function(){return l}});var s=t(5893),r=t(6383),c=t(9270),i=t(26),u=t(7294),a=!0;function l(e){let[n,t]=(0,u.useState)(e.posts),[a,l]=(0,u.useState)(!1),[d,o]=(0,u.useState)(!1),h=async()=>{l(!0);let e=n[n.length-1],s="number"==typeof e.createdAt?(0,i.Lg)(e.createdAt):e.createdAt,r=i.RZ.collectionGroup("posts").where("published","==",!0).orderBy("createdAt","desc").startAfter(s).limit(1),c=(await r.get()).docs.map(e=>e.data());t(n.concat(c)),l(!1),c.length<1&&o(!0)};return(0,s.jsxs)("main",{children:[(0,s.jsx)(r.Z,{posts:n}),!a&&!d&&(0,s.jsx)("button",{onClick:h,children:"Load More"}),(0,s.jsx)(c.Z,{show:a}),d&&"You have reached the end!"]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);