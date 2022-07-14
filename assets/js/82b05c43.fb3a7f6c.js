"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[5051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},28716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(83117),o=(n(67294),n(3905));const a={slug:"v16.1-plan-eof",title:"v16.1 End of Life Planning",authors:"botlikes",tags:["watchmen","v16.1"]},i=void 0,l={permalink:"/blog/v16.1-plan-eof",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/blog/2022-07-14-v16.1-plan-eof.md",source:"@site/blog/2022-07-14-v16.1-plan-eof.md",title:"v16.1 End of Life Planning",description:"Watchmen V16.1 series, is planning to stop to maintain in few weeks after V16.3 deployed.",date:"2022-07-14T00:00:00.000Z",formattedDate:"July 14, 2022",tags:[{label:"watchmen",permalink:"/blog/tags/watchmen"},{label:"v16.1",permalink:"/blog/tags/v-16-1"}],readingTime:.79,hasTruncateMarker:!1,authors:[{name:"botlikes456",title:"Agent B",url:"https://github.com/botlikes456",imageURL:"https://github.com/botlikes456.png",key:"botlikes"}],frontMatter:{slug:"v16.1-plan-eof",title:"v16.1 End of Life Planning",authors:"botlikes",tags:["watchmen","v16.1"]},nextItem:{title:"v16.0 End of Life",permalink:"/blog/v16.0-eof"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Watchmen V16.1 series, is planning to stop to maintain in few weeks after V16.3 deployed."),(0,o.kt)("p",null,"We have done refactoring in V16.2, which leads the package structure break changes. In detail, we extract the common part from 4 supported\nrds storage (MySQL/MSSQL/Oracle/PostgreSQL) to a new package ",(0,o.kt)("inlineCode",{parentName:"p"},"watchment-storage-rds"),". This change reduce our maintain cost on rds part, but\non the other hand, because of lacking of manpower resource, it's really hard to maintain V16.1 since it still in original structure. Anyway,\nV16.1 is still on maintain now, but it's better to do upgrading to V16.2 now."),(0,o.kt)("p",null,"One more thing about V16.3, after we deploy the indicator workbench in V16.2, there is one more exciting feature will be deployed in V16.3,\nwhich is ",(0,o.kt)("inlineCode",{parentName:"p"},"Synonym Topic"),". It introduces direct link to rds, to reuse the existing tables and views, to maximize the existing data usages. We\nare still on the final round verification work now, will be released in few weeks \u2764\ufe0f\u200d\ud83d\udd25."))}u.isMDXComponent=!0}}]);