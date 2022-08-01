"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[85],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(83117),r=(n(67294),n(3905));const i={id:"space",title:"Space",sidebar_position:60},o="Space",s={unversionedId:"web-client/admin/space",id:"version-16.2/web-client/admin/space",title:"Space",description:"Space is a set of topics. When space is assigned to user groups, that is to say, users in groups can connect to space in console workbench.",source:"@site/versioned_docs/version-16.2/020-web-client/010-admin/060-space.md",sourceDirName:"020-web-client/010-admin",slug:"/web-client/admin/space",permalink:"/docs/16.2/web-client/admin/space",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.2/020-web-client/010-admin/060-space.md",tags:[],version:"16.2",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1659345882,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:60,frontMatter:{id:"space",title:"Space",sidebar_position:60},sidebar:"sidebar",previous:{title:"User Group",permalink:"/docs/16.2/web-client/admin/user-group"},next:{title:"Enumeration",permalink:"/docs/16.2/web-client/admin/enumeration"}},c={},l=[{value:"Standard Tuple Page",id:"standard-tuple-page",level:2},{value:"Restrictions",id:"restrictions",level:2},{value:"Form Validation",id:"form-validation",level:2}],p={toc:l};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"space"},"Space"),(0,r.kt)("p",null,"Space is a set of topics. When space is assigned to user groups, that is to say, users in groups can connect to space in console workbench."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Space is available for ",(0,r.kt)("inlineCode",{parentName:"p"},"Admin")," only.")),(0,r.kt)("h2",{id:"standard-tuple-page"},"Standard Tuple Page"),(0,r.kt)("p",null,"Space use ",(0,r.kt)("a",{parentName:"p",href:"../standard-tuple-page"},"standard tuple page"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edit Space",src:n(3144).Z,width:"3584",height:"1858"})),(0,r.kt)("h2",{id:"restrictions"},"Restrictions"),(0,r.kt)("p",null,"When topics are assigned to space, restrictions can be added, as below,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Space Restrictions",src:n(33906).Z,width:"3584",height:"1858"})),(0,r.kt)("p",null,"For restrictions on topics,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Is a filter of topic's data, equates a ",(0,r.kt)("inlineCode",{parentName:"li"},"SQL Where"),","),(0,r.kt)("li",{parentName:"ul"},"Can only be aligned on single topic, joint filter between topics is not allowed,"),(0,r.kt)("li",{parentName:"ul"},"Enabled only when toggle is on.")),(0,r.kt)("p",null,"Radically different from coarse-grained data access rights, which is on topic and by included into different spaces and assign to different\nuser groups, we also need to define fine-grained data access control even on one topic for different users."),(0,r.kt)("p",null,"For example,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"User A")," can visit orders which amount < 10,000,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"User B")," can visit orders which amount >= 10,000,")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"User A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"User B"),", they both can visit a subset of topic ",(0,r.kt)("inlineCode",{parentName:"p"},"orders")," rather than all rows. In this scenario, clearly space restriction\nprovides more ability to control data access on topic rows level on the basis of topics access control provided by space itself."),(0,r.kt)("h2",{id:"form-validation"},"Form Validation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Space Name: required,"),(0,r.kt)("li",{parentName:"ul"},"Description: optional,"),(0,r.kt)("li",{parentName:"ul"},"Topics: optional,"),(0,r.kt)("li",{parentName:"ul"},"Groups: optional,"),(0,r.kt)("li",{parentName:"ul"},"Restrictions: optional.")))}d.isMDXComponent=!0},33906:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/space-restrictions-eb98a72fb3d4a425a9b41bb93afb4c7c.png"},3144:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/space-b494c5b38dd1b3bacfca7437c388656b.png"}}]);