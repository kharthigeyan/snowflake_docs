(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[139],{1968:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[...path]",function(){return t(1554)}])},3862:function(e,r,t){"use strict";t.d(r,{U:function(){return c}});var n=t(7294),s=t(1163),a=t(291),l=t(7541),i="page-history",o="last-page";function c(e){var r=e.breadcrumbs,t=e.title,c=e.saveHistory,d=(0,s.useRouter)();(0,n.useEffect)((function(){var e=null===t||void 0===t?void 0:t.split("|")[0].trim(),n=window.localStorage.getItem(i),s=window.sessionStorage.getItem(o),d={title:e,href:window.location.href},u=n?JSON.parse(n):[],h="true"===window.localStorage.getItem("dark-mode");!function(e){var r=e.url,t=e.referrer,n=e.breadcrumbs,s=e.darkmode,i={hash:r.hash,href:r.href,origin:r.origin,pathname:r.pathname,referrer:t,breadcrumbs:n,queryParams:r.searchParams?Object.fromEntries(r.searchParams):{},darkmode:s};(0,a.Z)().addEvent(l.I.VISIT,r.pathname,i)}({url:new URL(window.location.href),referrer:s?JSON.parse(s).href:document.referrer,breadcrumbs:r,darkmode:h}),c&&(u&&u.length&&u[0].href===window.location.href||(u.unshift(d),window.localStorage.setItem(i,JSON.stringify(u.slice(0,4))))),window.sessionStorage.setItem(o,JSON.stringify(d))}),[d.asPath])}},1554:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSP:function(){return $},default:function(){return q}});var n=t(6042),s=t(5893),a=t(9008),l=t.n(a),i=t(9396),o=t(7294),c=t(4972),d=t(9815),u=t(4184),h=t.n(u),m=t(7814),f=t(1436),x=t(4505);function p(e){var r=e.headings,t=(0,o.useState)(""),n=t[0],a=t[1],l=(0,x.$G)("common").t;return(0,o.useEffect)((function(){var e=function(){window.requestAnimationFrame((function(){var e=function(e,r){return e.reduce((function(e,t){return t&&t.position&&t.position-150<r?t.href:e}),"")}(n,t.scrollTop);a(e)}))},t=document.getElementById("scrolltarget"),n=function(e){return e.reduce((function(e,r){var t=document.getElementById(r.href);return null===t?(console.error("Unable to find ID",r.href),e):(0,d.Z)(e).concat([{id:r.href,label:r.label,position:t.offsetTop,href:r.href}])}),[])}(r);return r.length&&a(r[0].label),t&&(t.removeEventListener("scroll",e),t.addEventListener("scroll",e)),function(){t&&t.removeEventListener("scroll",e)}}),[r]),r.length?(0,s.jsxs)("div",{className:"mb-4 md:mb-8 onthispage border md:border-0 rounded-md px-3 py-2 md:p-0",role:"complementary",children:[(0,s.jsx)("label",{htmlFor:"on-this-page-checkbox",children:(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("div",{className:"block md:hidden mr-2",children:(0,s.jsx)(m.G,{icon:f.I4f})}),(0,s.jsx)("p",{className:"font-semibold text-header",children:l("On this page")})]})}),(0,s.jsx)("input",{type:"checkbox",id:"on-this-page-checkbox",className:"peer hidden"}),(0,s.jsx)("ol",{className:"hidden peer-checked:block md:block",children:r.map((function(e,r){return(0,s.jsx)("li",{className:h()("my-3 break-words hover:underline",{active:e.href===n,"":1==e.depth,"pl-4 opacity-80":2==e.depth,"pl-8 opacity-80":3==e.depth,"pl-12 opacity-80":4==e.depth,"pl-16 opacity-80":5==e.depth,"pl-20 opacity-80":6==e.depth}),children:(0,s.jsx)("a",{href:"#"+e.href,children:e.label})},r)}))})]}):null}var v=t(2980),b=t(1163),j=t(291),w=t(7541);function g(e){var r=e.label;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"font-semibold",children:r}),(0,s.jsx)("span",{className:"ui-icon mb-2",children:(0,s.jsx)(m.G,{icon:f._tD})})]})}function N(e){var r=e.label;return(0,s.jsx)("span",{className:"mb-2",children:r})}function y(e){var r=e.label,t=e.href,n=(0,j.Z)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("a",{href:t,className:"text-link hover:underline",onClick:function(){n.addEvent(w.I.CLICK,window.location.pathname,{target:"breadcrumb",label:r,href:t})},children:r}),(0,s.jsx)("span",{className:"ui-icon mb-2",children:(0,s.jsx)(m.G,{icon:f._tD})})]})}function k(e){var r=e.breadcrumbs;return(0,s.jsx)("nav",{className:"mb-2 flex space-x-4 text-sm flex-wrap",children:r.map((function(e,t){return r.length===t+1?(0,o.createElement)(N,(0,i.Z)((0,n.Z)({},e),{key:t})):""===e.href?(0,o.createElement)(g,(0,i.Z)((0,n.Z)({},e),{key:t})):(0,o.createElement)(y,(0,i.Z)((0,n.Z)({},e),{key:t}))}))})}var S=t(1750),E=t(9839);function I(e){var r=e.topics,t=(0,x.$G)("common").t;return r&&r.length?(0,s.jsxs)("div",{className:"mb-8 border md:border-0 rounded-md px-3 py-2 md:p-0",children:[(0,s.jsx)("label",{htmlFor:"related-topics-checkbox",children:(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("div",{className:"block md:hidden mr-2",children:(0,s.jsx)(m.G,{icon:f.I4f})}),(0,s.jsx)("p",{className:"font-semibold text-header",children:t("Related content")})]})}),(0,s.jsx)("input",{type:"checkbox",id:"related-topics-checkbox",className:"peer hidden"}),(0,s.jsx)("ol",{className:"hidden peer-checked:block md:block",children:r.map((function(e,r){return e.isExternal?(0,s.jsx)("li",{className:"my-2 hover:underline",children:(0,s.jsxs)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:[(0,s.jsx)("span",{children:e.label}),(0,s.jsx)("span",{className:"opacity-60 ml-2",children:(0,s.jsx)(m.G,{icon:f.wlW})})]})},r):(0,s.jsx)("li",{className:"my-2 hover:underline",children:(0,s.jsx)("a",{href:"".concat(e.href),children:e.label})},r)}))})]}):(0,s.jsx)(s.Fragment,{})}function Z(e){var r=e.info,t=(0,x.$G)("common").t;return r?(0,s.jsxs)("div",{className:"text-sm bg-level-2 rounded-lg p-4 related-info",children:[(0,s.jsx)("p",{className:"font-semibold mb-2 text-header",children:t("Related info")}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]}):(0,s.jsx)(s.Fragment,{})}function C(){var e=(0,x.$G)("common").t;return E.Cf!==S.s2.supp?(0,s.jsx)(s.Fragment,{}):(0,s.jsxs)("div",{className:"bg-level-2 p-4 rounded-md mb-8 text-primary",children:[(0,s.jsx)("p",{className:"font-semibold mb-2 text-xs",children:e("Supplemental Documentation")}),(0,s.jsx)("p",{className:"text-xs",children:e("Additional terms of use may apply to features listed on this page.")})]})}function _(e){var r=e.message,t=e.href,n=e.hrefMessage;return(0,s.jsxs)("div",{className:"bg-product-blue/10 border border-product-blue/30 p-4 mt-4 rounded mb-8",children:[r," ",(0,s.jsx)("a",{href:t,className:"text-link hover:underline",children:n})]})}function G(e){var r=e.breadcrumbs,t=e.content,a=e.headings,l=e.notices,d=(e.mastheads,e.relatedInfo),u=e.relatedTopics,h=(e.title,e.tree),m=(0,b.useRouter)().asPath,f=(0,o.useRef)(null);return(0,o.useEffect)((function(){var e;m.split("#").length<=1&&((null===(e=f.current)||void 0===e?void 0:e.scrollTo)&&f.current.scrollTo(0,0))}),[t,m]),(0,s.jsxs)("main",{className:"flex overflow-y-hidden",children:[(0,s.jsx)(c.Z,{tree:h}),(0,s.jsx)("div",{className:"w-full overflow-y-auto",id:"scrolltarget",ref:f,children:(0,s.jsxs)("div",{className:"flex flex-col-reverse xl:flex-row xl:justify-between mx-auto pt-8 px-8 mb-12 max-w-[1175px]",children:[(0,s.jsxs)("div",{className:"w-full xl:w-9/12",children:[(0,s.jsx)(k,{breadcrumbs:r}),l.map((function(e,r){return(0,o.createElement)(_,(0,i.Z)((0,n.Z)({},e),{key:r}))})),(0,s.jsx)("article",{dangerouslySetInnerHTML:{__html:t}}),(0,s.jsx)(v.Z,{})]}),(0,s.jsxs)("aside",{className:"w-full xl:w-64 text-sm xl:sticky xl:top-8 xl:pb-16 block xl:pl-8 max-h-[calc(100vh-107px)] overflow-y-auto mb-4 md:mb-0 print:hidden",children:[(0,s.jsx)(C,{}),(0,s.jsx)(p,{headings:a}),(0,s.jsx)(I,{topics:u}),(0,s.jsx)(Z,{info:d})]})]})})]})}function L(e){var r=e.active,t=e.anchor,n=e.finished,a=e.title,l=e.setCurrentStepHref;return r?(0,s.jsx)("span",{className:"font-semibold text-link cursor-pointer",children:a}):(0,s.jsx)("a",{className:h()({"opacity-70":n}),href:"#"+t,onClick:function(){l(t)},children:a})}function T(e){var r=e.steps,t=e.currentStep,n=e.title,a=e.setCurrentStepHref,l=r.indexOf(t);return(0,s.jsxs)("aside",{className:"shrink-0 hidden xl:block w-80 border-r border-gray-200 p-6 text-sm scroll-bar overflow-y-auto","data-testid":"toc-wrapper",children:[(0,s.jsx)("h3",{className:"text-h4 font-semibold mb-5",children:n.split("|")[0]}),(0,s.jsx)("div",{className:"space-y-3",children:r.map((function(e,r){return(0,s.jsxs)("div",{className:"flex space-x-4 items-center",role:"navigation",children:[(0,s.jsx)("div",{className:h()("border border-2 w-6 h-6 rounded-full shrink-0 text-white text-center",{active:r===l,"bg-product-blue border-product-blue opacity-50":r<l}),children:r<l&&(0,s.jsx)(m.G,{icon:f.LEp})}),(0,s.jsx)(L,{active:r===l,finished:r<l,anchor:e.href,title:e.title,setCurrentStepHref:a})]},e.href)}))})]})}function H(e){var r=e.title,t=e.href,n=e.setCurrentStepHref,a=(0,j.Z)(),l=(0,x.$G)("common").t;return(0,s.jsxs)("a",{className:"block border rounded-lg px-5 py-4 text-sm text-left hover:shadow-lg dark:hover:shadow-xl cursor-pointer bg-level-2",href:"#"+t,onClick:function(){a.addEvent(w.I.CLICK,window.location.pathname,{target:t,action:"tutorial click next"}),n(t)},children:[(0,s.jsxs)("div",{className:"text-xs mb-2",children:[(0,s.jsx)(m.G,{icon:f.acZ}),(0,s.jsx)("span",{className:"ml-2",children:l("Previous")})]}),(0,s.jsx)("span",{className:"font-semibold text-link",children:r})]})}function P(e){var r=e.title,t=e.href,n=e.setCurrentStepHref,a=(0,j.Z)(),l=(0,x.$G)("common").t;return(0,s.jsxs)("a",{className:"block border rounded-lg px-5 py-4 text-sm text-right hover:shadow-lg dark:hover:shadow-xl cursor-pointer bg-level-2",href:"#"+t,onClick:function(){a.addEvent(w.I.CLICK,window.location.pathname,{target:t,action:"tutorial click next"}),n(t)},children:[(0,s.jsxs)("div",{className:"text-xs mb-2",children:[(0,s.jsx)("span",{className:"mr-2",children:l("Next")}),(0,s.jsx)(m.G,{icon:f.eFW})]}),(0,s.jsx)("span",{className:"font-semibold text-link",children:r})]})}function F(e){var r=function(){return f?b.find((function(e){return e.href===f.split("/")[0]})):b[0]},t=e.breadcrumbs,a=e.content,l=e.title,c=(0,o.useRef)(null),d=(0,o.useState)(),u=d[0],h=d[1],m=(0,o.useState)(),f=m[0],x=m[1],p=(0,o.useState)([]),b=p[0],g=p[1],N=(0,j.Z)(),y=(0,o.useRef)(!0);return(0,o.useEffect)((function(){var e=function(e){var r=[];return e.forEach((function(e,t){var n=function(e){var r;return e&&(null===(r=e.textContent)||void 0===r?void 0:r.replace("\xb6",""))||""}(e.querySelector("h2")),s=e.getAttribute("id")||"",a={el:e,title:n,href:s};if(t>0){var l=r[t-1];l.next={title:n,href:s},a.prev={title:l.title,href:l.href}}r.push(a)})),r}(Array.from(document.querySelectorAll(".tutorial article > section > section")));g(e);var r=window.location.hash;r&&(e.some((function(e){return e.href===r.slice(1)}))&&x(r.slice(1)))}),[]),(0,o.useEffect)((function(){var e;if(u){if(N.addEvent(w.I.LOG,window.location.pathname,{action:"tutorial step load",totalSteps:b.length,currentStepIdx:(u?b.findIndex((function(e){return e.href===u.href})):0)+1}),y.current)y.current=!1;else{var r=new URL(window.location.href);N.addEvent(w.I.VISIT,window.location.pathname,{hash:r.hash,href:r.href,origin:r.origin,pathname:r.pathname,breadcrumbs:t})}var n;if(b.forEach((function(e){e.el.classList.add("hidden")})),u.el.classList.remove("hidden"),"function"===typeof(null===(e=c.current)||void 0===e?void 0:e.scrollTo))null===(n=c.current)||void 0===n||n.scrollTo({left:0,top:0})}}),[u]),(0,o.useEffect)((function(){h(r)}),[f,b]),(0,s.jsxs)("main",{className:"flex overflow-y-hidden",children:[(0,s.jsx)(T,{steps:b,currentStep:u,title:l,setCurrentStepHref:x}),(0,s.jsx)("div",{className:"w-full overflow-y-auto",id:"scrolltarget",ref:c,children:(0,s.jsx)("div",{className:"tutorial flex flex-col-reverse xl:flex-col mx-auto pt-8 px-8 mb-12 max-w-[1175px]",children:(0,s.jsxs)("div",{className:"w-full xl:w-9/12",children:[(0,s.jsx)(k,{breadcrumbs:t}),(0,s.jsx)("article",{dangerouslySetInnerHTML:{__html:a}}),(0,s.jsxs)("div",{className:"flex space-x-4 mt-24","data-testid":"prevnext",children:[(0,s.jsx)("div",{className:"w-1/2",children:(null===u||void 0===u?void 0:u.prev)&&(0,s.jsx)(H,(0,i.Z)((0,n.Z)({},u.prev),{setCurrentStepHref:x}))}),(0,s.jsx)("div",{className:"w-1/2",children:(null===u||void 0===u?void 0:u.next)&&(0,s.jsx)(P,(0,i.Z)((0,n.Z)({},u.next),{setCurrentStepHref:x}))})]}),(0,s.jsx)(v.Z,{})]})})})]})}var O=function(){var e="";return E.Cf===S.s2.core?e=E.In:E.Cf===S.s2.supp?e=E._q:E.Cf===S.s2.misc&&(e=E.kD),e}(),R=t(3862);function A(e){return e.path.split("/").includes("tutorials")?(0,s.jsx)(F,(0,n.Z)({},e)):(0,s.jsx)(G,(0,n.Z)({},e))}var $=!0;function q(e){var r=e.title,t=(e.mastheads,(0,b.useRouter)());(0,R.U)({breadcrumbs:e.breadcrumbs||[],title:e.title,saveHistory:!0});var a=O+"/"+e.lang+t.asPath;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l(),{children:[(0,s.jsx)("title",{children:r}),(0,s.jsx)("link",{rel:"canonical",href:a})]}),(0,s.jsx)(A,(0,n.Z)({path:t.asPath},e))]})}},9815:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(943);var s=t(3375);var a=t(1566);function l(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||(0,s.Z)(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[314,141,144,774,888,179],(function(){return r=1968,e(e.s=r);var r}));var r=e.O();_N_E=r}]);