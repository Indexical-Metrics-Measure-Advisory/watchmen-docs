"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[9713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));const o={id:"main-concepts-both-sides",title:"On Both Sides",sidebar_position:30},i="On Both Sides",s={unversionedId:"main-concepts/main-concepts-both-sides",id:"version-16.3/main-concepts/main-concepts-both-sides",title:"On Both Sides",description:"_Watchmen_ offers solutions on both sides of server and browser.",source:"@site/versioned_docs/version-16.3/010-main-concepts/030-both-sides.md",sourceDirName:"010-main-concepts",slug:"/main-concepts/main-concepts-both-sides",permalink:"/docs/16.3/main-concepts/main-concepts-both-sides",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.3/010-main-concepts/030-both-sides.md",tags:[],version:"16.3",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1659345882,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:30,frontMatter:{id:"main-concepts-both-sides",title:"On Both Sides",sidebar_position:30},sidebar:"sidebar",previous:{title:"For All Roles",permalink:"/docs/16.3/main-concepts/main-concepts-all-roles"},next:{title:"Web Client Overview",permalink:"/docs/16.3/web-client/web-client-index"}},l={},p=[{value:"Typical Topology",id:"typical-topology",level:2},{value:"Doll",id:"doll",level:2},{value:"Data Quality Center (DQC)",id:"data-quality-center-dqc",level:2},{value:"Web Client",id:"web-client",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"on-both-sides"},"On Both Sides"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Watchmen"))," offers solutions on both sides of server and browser."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Doll"))," to run pipelines,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Data Quality Center"))," (",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"DQC"))," for short) to monitor data quality,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Web Client"))," to",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Configure tuples. Such as topics, pipelines, spaces etc,"),(0,r.kt)("li",{parentName:"ul"},"Build dataset/charts,"),(0,r.kt)("li",{parentName:"ul"},"Define monitor rules, find consanguinity.")))),(0,r.kt)("h2",{id:"typical-topology"},"Typical Topology"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Typical Topology",src:n(58610).Z,width:"1644",height:"704"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Lambda")," service is optional,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"S3")," service is optional,"),(0,r.kt)("li",{parentName:"ul"},"Most popular RDS & NoSQL technologies are supported, via built-in storage engines."))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Watchmen"))," use ",(0,r.kt)("a",{parentName:"p",href:"https://trino.io/"},"Trino")," as storage aggregator.  ")),(0,r.kt)("h2",{id:"doll"},"Doll"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Doll"))," is the heart of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Watchmen")),", provides a variety of innovative and comprehensive solutions on cleaning, transforming,\npersisting, computing and aggregating data. All of these are configured on GUI and handling by ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Doll"))," clusters."),(0,r.kt)("h2",{id:"data-quality-center-dqc"},"Data Quality Center (DQC)"),(0,r.kt)("p",null,"To ensure data are accurate and can be trusted, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"DQC"))," offers consanguinity tracing, data profiling and a wealth of quality detection\nrules."),(0,r.kt)("h2",{id:"web-client"},"Web Client"),(0,r.kt)("p",null,"A browser based client for"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IT users to configure and maintain,"),(0,r.kt)("li",{parentName:"ul"},"Business users to build datasets and charts.")))}d.isMDXComponent=!0},58610:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/typical-topology-b2c0473bf220b1a95cf68629a34fcd41.png"}}]);