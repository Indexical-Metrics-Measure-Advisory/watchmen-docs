"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[5665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(83117),a=(n(67294),n(3905));const i={id:"user",title:"User",sidebar_position:40},o="User",l={unversionedId:"web-client/admin/user",id:"version-16.5-prerelease/web-client/admin/user",title:"User",description:"User is account to access _watchmen_.",source:"@site/versioned_docs/version-16.5-prerelease/020-web-client/010-admin/040-user.md",sourceDirName:"020-web-client/010-admin",slug:"/web-client/admin/user",permalink:"/docs/16.5-prerelease/web-client/admin/user",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.5-prerelease/020-web-client/010-admin/040-user.md",tags:[],version:"16.5-prerelease",lastUpdatedBy:"botlikes",lastUpdatedAt:1680853926,formattedLastUpdatedAt:"Apr 7, 2023",sidebarPosition:40,frontMatter:{id:"user",title:"User",sidebar_position:40},sidebar:"sidebar",previous:{title:"Plugin",permalink:"/docs/16.5-prerelease/web-client/admin/plugin"},next:{title:"User Group",permalink:"/docs/16.5-prerelease/web-client/admin/user-group"}},s={},d=[{value:"Standard Tuple Page",id:"standard-tuple-page",level:2},{value:"Form Validation",id:"form-validation",level:2}],p={toc:d};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user"},"User"),(0,a.kt)("p",null,"User is account to access ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"watchmen")),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We recommend creating the first data zone administrator user by ",(0,a.kt)("inlineCode",{parentName:"p"},"Super Admin")," only, and create other users in this data zone by this\nadministrator.")),(0,a.kt)("h2",{id:"standard-tuple-page"},"Standard Tuple Page"),(0,a.kt)("p",null,"User use ",(0,a.kt)("a",{parentName:"p",href:"../standard-tuple-page"},"standard tuple page"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Edit User",src:n(65939).Z,width:"3584",height:"1858"})),(0,a.kt)("p",null,"When logged in with ",(0,a.kt)("inlineCode",{parentName:"p"},"Admin")," role, page should be as following,"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Edit User By Admin",src:n(98067).Z,width:"3584",height:"1858"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"Groups")," field is visible, current user can be added to user groups or remove from them."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Data Zone")," field is invisible, which means creating/editing user should be in same data zone with current user.")),(0,a.kt)("h2",{id:"form-validation"},"Form Validation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Username: required,"),(0,a.kt)("li",{parentName:"ul"},"Nick Name: optional,"),(0,a.kt)("li",{parentName:"ul"},"Password: optional. Leave empty if you DO NOT want to change password of this user,"),(0,a.kt)("li",{parentName:"ul"},"User Role: required. Only 2 options are available:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Console User, aka Business User,"),(0,a.kt)("li",{parentName:"ul"},"Administrator, aka Data Zone Admin,"))),(0,a.kt)("li",{parentName:"ul"},"Data Zone: required. Only visible when logged in with ",(0,a.kt)("inlineCode",{parentName:"li"},"Super Admin")," role,"),(0,a.kt)("li",{parentName:"ul"},"Groups: optional. Only visible when logged in with ",(0,a.kt)("inlineCode",{parentName:"li"},"Admin")," role.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Super Admin")," is configured on backend, cannot do create/edit on web client.")))}c.isMDXComponent=!0},98067:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/user-admin-d629c35f2abc2e49cd70ecdb8fcc9843.png"},65939:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/user-212757198e2b9ed6e8a8f5e11e833b66.png"}}]);