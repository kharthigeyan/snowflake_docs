"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[144],{7086:function(e,t,n){n.d(t,{x2:function(){return v},sL:function(){return p},b9:function(){return f}});var r,s,a=n(5893),i=n(7294);!function(e){e[e.YOUTUBE=0]="YOUTUBE",e[e.VIMEO=1]="VIMEO"}(r||(r={})),function(e){e.NEGATIVE="NEGATIVE",e.POSITIVE="POSITIVE"}(s||(s={}));var c,o=n(4505),l=n(291),u=n(7814),d=n(1436),m=n(7541),h=n(1163),p=2e3,f=256;function x(e){var t=e.comment,n=e.errorMsg,r=e.sentiment,i=e.setComment,c=e.handleSubmit,l=(0,o.$G)("common").t,u=l("What was most helpful?"),d=l("What could have been better?"),m=r===s.POSITIVE?u:d;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{className:"mb-3",children:m}),(0,a.jsx)("textarea",{rows:4,maxLength:p,className:"border p-2 mb-3 rounded-md w-full bg-white-00 dark:bg-gray-85",value:t,onChange:function(e){return i(e.target.value)},autoFocus:!0}),n&&(0,a.jsx)("div",{className:"rounded-md bg-pink-25 text-red py-2 px-3 mb-3",children:n}),(0,a.jsx)("button",{className:"border rounded-md py-1 px-3 button-primary-bg button-primary-text",onClick:c,children:l("Submit")})]})}function b(e){var t=e.setCurrentScreen,n=(0,o.$G)("common").t;return(0,i.useEffect)((function(){setTimeout((function(){t(c.SENTIMENT)}),5e3)}),[t]),(0,a.jsx)("div",{className:"mb-3",children:(0,a.jsx)("p",{className:"font-semibold",children:n("Thank you for your feedback!")})})}function N(e){var t=e.setSentiment,n=e.setCurrentScreen,r=(0,o.$G)("common").t,i=(0,l.Z)();return(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("p",{className:"mr-4 text-primary",children:r("Was this page helpful?")}),(0,a.jsxs)("button",{className:"button-primary-bg rounded-md button-primary-text py-1 px-3 text-sm mr-2",onClick:function(){i.addEvent(m.I.LOG,window.location.pathname,{action:"click sentiment feedback",sentiment:s.POSITIVE}),t(s.POSITIVE),n(c.COMMENT)},children:[(0,a.jsx)(u.G,{icon:d.u8Q,className:"pr-2"}),r("Yes")]}),(0,a.jsxs)("button",{className:"button-primary-bg rounded-md button-primary-text py-1 px-3 text-sm",onClick:function(){i.addEvent(m.I.LOG,window.location.pathname,{action:"click sentiment feedback",sentiment:s.NEGATIVE}),t(s.NEGATIVE),n(c.COMMENT)},children:[(0,a.jsx)(u.G,{icon:d.bam,className:"pr-2"}),r("No")]})]})}function v(){var e=function(){s(c.SENTIMENT),d(null),j("")},t=function(){v.length>p?y("Comment is too large"):(y(""),(0,l.Z)().addEvent(m.I.LOG,window.location.pathname,{action:"submit feedback",sentiment:u,comment:v}),j(""),d(null),s(c.THANKYOU))},n=(0,i.useState)(c.SENTIMENT),r=n[0],s=n[1],o=(0,i.useState)(null),u=o[0],d=o[1],f=(0,i.useState)(""),v=f[0],j=f[1],g=(0,i.useState)(""),E=g[0],y=g[1],w=(0,h.useRouter)();return(0,i.useEffect)((function(){w.events.on("routeChangeComplete",e)}),[w]),(0,a.jsx)("div",{className:"mb-8",children:function(){switch(r){case c.SENTIMENT:return(0,a.jsx)(N,{setSentiment:d,setCurrentScreen:s});case c.COMMENT:return(0,a.jsx)(x,{sentiment:u,comment:v,errorMsg:E,setComment:j,setCurrentScreen:s,handleSubmit:t});case c.THANKYOU:return(0,a.jsx)(b,{setCurrentScreen:s})}}()})}!function(e){e[e.SENTIMENT=0]="SENTIMENT",e[e.COMMENT=1]="COMMENT",e[e.THANKYOU=2]="THANKYOU"}(c||(c={}))},2980:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(5893),s=(n(7294),n(7190)),a=n(3329),i=n(7086);function c(){return(0,r.jsxs)("footer",{className:"mt-24 mb-12 print:hidden",children:[(0,r.jsx)(i.x2,{}),(0,r.jsx)(s.Z,{}),(0,r.jsx)(a.Z,{})]})}},4972:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(6042),s=n(9396),a=n(5893),i=n(7294),c=n(8158),o=n(9095),l=n(828),u=n(3460),d=n(291),m=n(7541),h=n(1472),p=n(4184),f=n.n(p);function x(e){return(0,a.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M2 6.5L4.5 4L2 1.5",stroke:"#8A96AD",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"round"})})}var b=["","pl-5","pl-7","pl-9","pl-11","pl-13","pl-15"];function N(e){return b[e]}function v(e){var t,n=e.label,c=e.isOpen,o=e.depth,p=(0,i.useState)(!1),b=p[0],v=p[1],j=(0,i.useState)(c),g=j[0],E=j[1],y=(0,l.Z)((0,u.Z)(),2),w=y[0],T=y[1].height,I=(0,i.useCallback)((function(){return g&&b?{duration:100,height:T,opacity:1}:!g&&b?{duration:100,height:0,opacity:0}:c&&!b?T?{duration:100,height:T,opacity:1}:{duration:100,opacity:1}:{height:0,opacity:0}}),[g,b,T,c]),S=(0,h.useSpring)({to:I()}),k=(0,h.useSpring)({to:{transform:g?"rotate(90deg)":"rotate(0deg)"}});return(0,a.jsxs)("li",{children:[(0,a.jsxs)("div",{className:f()("flex items-center cursor-pointer group justify-between px-3 mx-5 py-2 text-sm",N(o)),onClick:function(){v(!0);var e=(0,d.Z)();g?(e.addEvent(m.I.CLICK,window.location.pathname,{target:"nav section",action:"hide",label:n}),E(!1)):(e.addEvent(m.I.CLICK,window.location.pathname,{target:"nav section",action:"show",label:n}),E(!0))},children:[(0,a.jsx)("span",{className:"block",children:n}),(0,a.jsx)(h.animated.div,{className:"w-5 h-5 cursor-pointer flex justify-center items-center select-none py-2",style:k,children:(0,a.jsx)(x,{})})]}),(0,a.jsx)(h.animated.ol,{className:"overflow-hidden",style:S,children:(0,a.jsx)("div",{ref:w,children:null===(t=e.children)||void 0===t?void 0:t.map((function(e,t){return(0,i.createElement)(C,(0,s.Z)((0,r.Z)({},e),{key:t}))}))})})]})}function j(e){var t=e.href,n=e.label,r=e.active,s=e.isInitiallyOpen,c=e.children,o=e.depth,l=(0,i.useState)(s),u=l[0],h=l[1],p=(0,i.useRef)(!1),x=(0,d.Z)();return(0,a.jsxs)("li",{className:"font-normal",children:[(0,a.jsxs)("div",{className:f()("px-3 text-sm rounded-md hover:bg-level-3 mx-5 flex justify-between items-center",{"bg-highlight text-blue-60 dark:text-blue-30":r},N(o)),id:r?"selected-item":void 0,children:[(0,a.jsx)("a",{href:t,className:"w-full py-2 text-ellipsis overflow-hidden text-sm leading-4",onClick:function(){h(!0)},title:n,children:(0,a.jsx)("span",{children:n})}),(0,a.jsx)(g,{className:"py-2",isOpen:u,childNodes:c,callback:function(e){p.current=!0,e.preventDefault(),u?(x.addEvent(m.I.CLICK,window.location.pathname,{target:"pagecaret",action:"collapse",href:t,label:n}),h(!1)):(x.addEvent(m.I.CLICK,window.location.pathname,{target:"pagecaret",action:"expand",href:t,label:n}),h(!0))}})]}),(0,a.jsx)("ul",{children:(0,a.jsx)(E,{isOpen:u,childNodes:c,userHasToggledCaret:p.current})})]})}function g(e){var t=e.className,n=e.childNodes,r=e.isOpen,s=e.callback,i=(0,h.useSpring)({to:{transform:r?"rotate(90deg)":"rotate(0deg)"}});return n&&n.length?(0,a.jsx)(h.animated.div,{onClick:s,className:f()("w-5 h-5 cursor-pointer flex justify-center items-center select-none",t),style:i,children:(0,a.jsx)(x,{})}):null}function E(e){var t=e.childNodes,n=e.isOpen,c=e.userHasToggledCaret,o=(0,l.Z)((0,u.Z)(),2),d=o[0],m=o[1].height,p=(0,h.useSpring)({duration:500,from:{height:0,opacity:0},to:{height:n&&t?m:0,opacity:n&&t?1:0}});if(!t||!t.length)return null;return(0,a.jsx)(h.animated.ol,{className:"overflow-hidden",style:(0,s.Z)((0,r.Z)({},p),{height:c?p.height:n?"auto":0}),children:(0,a.jsx)("div",{ref:d,children:n&&t.map((function(e,t){return(0,i.createElement)(C,(0,s.Z)((0,r.Z)({},e),{key:t}))}))})})}var y=n(7814),w=n(1436);function T(e){var t=e.href,n=e.label,r=e.depth;return(0,a.jsx)("li",{className:"font-normal",children:(0,a.jsxs)("a",{href:t,className:f()("py-2 px-3 text-sm hover:bg-level-3 rounded-md mx-5 flex justify-between items-center",N(r)),target:"_blank",rel:"noreferrer",children:[(0,a.jsx)("span",{children:n}),(0,a.jsx)("span",{className:"opacity-60",children:(0,a.jsx)(y.G,{icon:w.wlW})})]})})}function I(e){var t=e.label,n=e.depth;return(0,a.jsx)("li",{className:f()("pt-3 px-3 py-1 mx-5",N(n)),children:(0,a.jsx)("span",{className:"font-bold text-sm",children:t})})}function C(e){switch(e.type){case c.e.LINE:return(0,a.jsx)(o.x,{className:"mx-5"});case c.e.SECTION:return(0,a.jsx)(v,(0,r.Z)({},e));case c.e.ALIAS:case c.e.PAGE:return(0,a.jsx)(j,(0,r.Z)({},e));case c.e.EXTERNAL:return(0,a.jsx)(T,(0,r.Z)({},e));case c.e.CATEGORY:return(0,a.jsx)(I,(0,r.Z)({},e));default:return(0,a.jsx)("span",{children:"Error"})}}var S=n(8789);function k(e){var t,n=e.tree,c=(0,i.useRef)(null);return(0,i.useEffect)((function(){if(c.current){var e=c.current.querySelector("#selected-item");e&&e.scrollIntoView({behavior:"auto",block:"center"})}}),[]),(0,a.jsx)("aside",{className:"flex-none hidden lg:block overflow-y-auto bg-lightgray border-r pb-8 scroll-bar w-80 scroll-bar-stable","data-testid":"toc-wrapper",ref:c,children:(0,a.jsxs)("div",{className:"pt-6 pl-1",children:["versionList"in n&&(0,a.jsx)(S.Q,{className:"ml-3 mr-3 mb-4 text-sm",versions:n.versionList}),(0,a.jsx)("nav",{id:"toc",children:(0,a.jsx)("ol",{children:"children"in n&&(null===(t=n.children)||void 0===t?void 0:t.map((function(e,t){return(0,i.createElement)(C,(0,s.Z)((0,r.Z)({},e),{key:t}))})))})})]})})}},1750:function(e,t,n){var r,s;n.d(t,{_h:function(){return s},s2:function(){return r}}),function(e){e.core="core",e.supp="supp",e.misc="misc"}(r||(r={})),function(e){e.external_site="external_site"}(s||(s={}))}}]);