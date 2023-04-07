"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[2508],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},23699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const i={id:"migration",title:"Upgrade to 16",sidebar_position:50},o="Migration Scripts",s={unversionedId:"installation/migration",id:"version-16.4/installation/migration",title:"Upgrade to 16",description:"It's easy to upgrade _Watchmen_ from 15.x to 16. Find corresponding",source:"@site/versioned_docs/version-16.4/060-installation/050-migration.md",sourceDirName:"060-installation",slug:"/installation/migration",permalink:"/docs/16.4/installation/migration",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.4/060-installation/050-migration.md",tags:[],version:"16.4",lastUpdatedBy:"botlikes",lastUpdatedAt:1680853926,formattedLastUpdatedAt:"Apr 7, 2023",sidebarPosition:50,frontMatter:{id:"migration",title:"Upgrade to 16",sidebar_position:50},sidebar:"sidebar",previous:{title:"Integration",permalink:"/docs/16.4/installation/integration"},next:{title:"CLI Overview",permalink:"/docs/16.4/cli/cli-index"}},l={},c=[],p={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migration-scripts"},"Migration Scripts"),(0,a.kt)("p",null,"It's easy to upgrade ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Watchmen"))," from 15.x to 16. Find corresponding\nscripts ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-migration/v15.x-to-v16/meta-scripts"},"here")),"\n, and follow the steps,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Backup your metadata database,"),(0,a.kt)("li",{parentName:"ul"},"Execute migration scripts on your metadata database,"),(0,a.kt)("li",{parentName:"ul"},"Verify everything is OK,"),(0,a.kt)("li",{parentName:"ul"},"To find scripts of system topics on corresponding storage module, execute them on topic storage,",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Visit ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"scripts"},"here"))," for more details,"))),(0,a.kt)("li",{parentName:"ul"},"Assign data sources to those system topics,"),(0,a.kt)("li",{parentName:"ul"},"Verify everything is OK,"),(0,a.kt)("li",{parentName:"ul"},"Bingo!")))}m.isMDXComponent=!0}}]);