(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[815],{3898:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/[slug]",function(){return t(1929)}])},9724:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var s=t(5893),c=t(1664),i=t.n(c),r=t(7294),l=t(8059);function a(e){let{username:n}=(0,r.useContext)(l.S);return n?e.children:e.fallback||(0,s.jsx)(i(),{href:"/enter",children:"You must be signed in"})}},9270:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var s=t(5893);function c(e){let{show:n}=e;return n?(0,s.jsx)("div",{className:"loader"}):null}},1929:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var s=t(5893),c=t(713),i=t.n(c),r=t(9724),l=t(26),a=t(7294),o=t(9270);function u(){let[e,n]=(0,a.useState)(!1),[t,c]=(0,a.useState)(0),[i,r]=(0,a.useState)(null),u=async e=>{let t=Array.from(e.target.files)[0],s=t.type.split("/")[1],i=l.tO.ref("uploads/".concat(l.I8.currentUser.uid,"/").concat(Date.now(),".").concat(s));n(!0);let a=i.put(t);a.on(l.mC,e=>{let t=(e.bytesTransferred/e.totalBytes*100).toFixed(0);c(t),a.then(e=>i.getDownloadURL()).then(e=>{r(e),n(!1)})})};return(0,s.jsxs)("div",{className:"box",children:[(0,s.jsx)(o.Z,{show:e}),e&&(0,s.jsxs)("h3",{children:[t,"%"]}),!e&&(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("label",{className:"btn",children:["\uD83D\uDCF8 Upload Img",(0,s.jsx)("input",{type:"file",onChange:u,accept:"image/x-png,image/gif,image/jpeg"})]})}),i&&(0,s.jsx)("code",{className:"upload-snippet",children:"![alt](".concat(i,")")})]})}var d=t(1163),h=t(6552),x=t(7536),m=t(3985),f=t(1664),j=t.n(f),p=t(6501);function _(e){return(0,s.jsx)(r.Z,{children:(0,s.jsx)(g,{})})}function g(){let[e,n]=(0,a.useState)(!1),t=(0,d.useRouter)(),{slug:c}=t.query,r=l.RZ.collection("users").doc(l.I8.currentUser.uid).collection("posts").doc(c),[o]=(0,h.Xi)(r);return(0,s.jsx)("main",{className:i().container,children:o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("section",{children:[(0,s.jsx)("h1",{children:o.title}),(0,s.jsxs)("p",{children:["ID: ",o.slug]}),(0,s.jsx)(b,{postRef:r,defaultValues:o,preview:e})]}),(0,s.jsxs)("aside",{children:[(0,s.jsx)("h3",{children:"Tools"}),(0,s.jsx)("button",{onClick:()=>n(!e),children:e?"Edit":"Preview"}),(0,s.jsx)(j(),{href:"/".concat(o.username,"/").concat(o.slug),children:(0,s.jsx)("button",{className:"btn-blue",children:"Live view"})})]})]})})}function b(e){let{defaultValues:n,postRef:t,preview:c}=e,{register:r,handleSubmit:a,reset:o,watch:d,formState:{errors:h,isValid:f,isDirty:j}}=(0,x.cI)({defaultValues:n,mode:"onChange"}),_=async e=>{let{content:n,published:s}=e;await t.update({content:n,published:s,updatedAt:(0,l.Bt)()}),o({content:n,published:s}),p.ZP.success("Post updated successfully!")};return(0,s.jsxs)("form",{onSubmit:a(_),children:[c&&(0,s.jsx)("div",{className:"card",children:(0,s.jsx)(m.D,{children:d("content")})}),(0,s.jsxs)("div",{className:c?i().hidden:i().controls,children:[(0,s.jsx)(u,{}),(0,s.jsx)("textarea",{...r("content",{minLength:{value:10,message:"content is too short"},maxLength:{value:2e4,message:"content is too long"},required:{value:!0,message:"content is required"}})}),h.content&&(0,s.jsx)("p",{className:"text-danger",children:h.content.message}),(0,s.jsxs)("fieldset",{children:[(0,s.jsx)("input",{className:i().checkbox,type:"checkbox",...r("published")}),(0,s.jsx)("label",{children:"Published"})]}),(0,s.jsx)("button",{type:"submit",className:"btn-green",disabled:!j||!f,children:"Save Changes"})]})]})}},713:function(e){e.exports={container:"Admin_container__7Kd1y",hidden:"Admin_hidden__blWKt",controls:"Admin_controls__RhTAv",input:"Admin_input__9_7r7",checkbox:"Admin_checkbox__Ttf_p"}}},function(e){e.O(0,[432,536,774,888,179],function(){return e(e.s=3898)}),_N_E=e.O()}]);