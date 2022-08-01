"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[2959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const o={id:"main-concepts-both-sides",title:"On Both Sides",sidebar_position:30},i="On Both Sides",s={unversionedId:"main-concepts/main-concepts-both-sides",id:"version-15.2.14/main-concepts/main-concepts-both-sides",title:"On Both Sides",description:"_Watchmen_ offers solutions on both sides of server and browser.",source:"@site/versioned_docs/version-15.2.14/main-concepts/both-sides.md",sourceDirName:"main-concepts",slug:"/main-concepts/main-concepts-both-sides",permalink:"/docs/15.2.14/main-concepts/main-concepts-both-sides",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-15.2.14/main-concepts/both-sides.md",tags:[],version:"15.2.14",lastUpdatedBy:"botlikes",lastUpdatedAt:1659325711,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:30,frontMatter:{id:"main-concepts-both-sides",title:"On Both Sides",sidebar_position:30},sidebar:"sidebar",previous:{title:"For All Roles",permalink:"/docs/15.2.14/main-concepts/main-concepts-all-roles"},next:{title:"Web Client Overview",permalink:"/docs/15.2.14/web-client/web-client-index"}},l={},p=[{value:"Typical Topology",id:"typical-topology",level:2},{value:"Doll",id:"doll",level:2},{value:"Data Quality Center (DQC)",id:"data-quality-center-dqc",level:2},{value:"Web Client",id:"web-client",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"on-both-sides"},"On Both Sides"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Watchmen"))," offers solutions on both sides of server and browser."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Doll"))," to run pipelines,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Data Quality Center"))," (",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"DQC"))," for short) to monitor data quality,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Web Client"))," to",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Configure tuples. Such as topics, pipelines, spaces etc,"),(0,a.kt)("li",{parentName:"ul"},"Build dataset/charts,"),(0,a.kt)("li",{parentName:"ul"},"Define monitor rules, find consanguinity.")))),(0,a.kt)("h2",{id:"typical-topology"},"Typical Topology"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Typical Topology",src:n(24987).Z,width:"1644",height:"704"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Lambda")," service is optional,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"S3")," service is optional,"),(0,a.kt)("li",{parentName:"ul"},"Most popular RDS & NoSQL technologies are supported, via built-in storage engines.\n:::"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Watchmen"))," use ",(0,a.kt)("a",{parentName:"p",href:"https://prestodb.io"},"Presto")," or ",(0,a.kt)("a",{parentName:"p",href:"https://trino.io/"},"Trino")," as storage aggregator.\n:::"),(0,a.kt)("h2",{id:"doll"},"Doll"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Doll"))," is the heart of ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Watchmen")),", provides a variety of innovative and comprehensive solutions on cleaning, transforming,\npersisting, computing and aggregating data. All of these are configured on GUI and handling by ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Doll"))," clusters."),(0,a.kt)("h2",{id:"data-quality-center-dqc"},"Data Quality Center (DQC)"),(0,a.kt)("p",null,"To ensure data are accurate and can be trusted, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"DQC"))," offers consanguinity tracing, data profiling and a wealth of quality detection\nrules."),(0,a.kt)("h2",{id:"web-client"},"Web Client"),(0,a.kt)("p",null,"A browser based client for"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IT users to configure and maintain,"),(0,a.kt)("li",{parentName:"ul"},"Business users to build datasets and charts.")))}d.isMDXComponent=!0},24987:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/typical-topology-46f8dd727be7b808158f175f973d6b61.png"}}]);