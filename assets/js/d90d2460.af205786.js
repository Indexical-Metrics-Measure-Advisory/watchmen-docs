"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[1534],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(83117),r=(n(67294),n(3905));const i={id:"bucket",title:"Bucket",sidebar_position:10},l="Bucket",o={unversionedId:"web-client/indicator/bucket",id:"version-16.5-prerelease/web-client/indicator/bucket",title:"Bucket",description:"Bucket is available for Admin only.",source:"@site/versioned_docs/version-16.5-prerelease/020-web-client/040-indicator/010-bucket.md",sourceDirName:"020-web-client/040-indicator",slug:"/web-client/indicator/bucket",permalink:"/docs/16.5-prerelease/web-client/indicator/bucket",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.5-prerelease/020-web-client/040-indicator/010-bucket.md",tags:[],version:"16.5-prerelease",lastUpdatedBy:"botlikes",lastUpdatedAt:1680853926,formattedLastUpdatedAt:"Apr 7, 2023",sidebarPosition:10,frontMatter:{id:"bucket",title:"Bucket",sidebar_position:10},sidebar:"sidebar",previous:{title:"Indicator Workbench Index",permalink:"/docs/16.5-prerelease/web-client/indicator/indicator-wb-index"},next:{title:"Indicator",permalink:"/docs/16.5-prerelease/web-client/indicator/indicator"}},c={},u=[{value:"Value Bucket",id:"value-bucket",level:2},{value:"Value Measure Bucket",id:"value-measure-bucket",level:2},{value:"Category Measure Bucket",id:"category-measure-bucket",level:2},{value:"Enumeration Measure Bucket",id:"enumeration-measure-bucket",level:2}],s={toc:u};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bucket"},"Bucket"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Bucket is available for ",(0,r.kt)("inlineCode",{parentName:"p"},"Admin")," only.")),(0,r.kt)("p",null,"Putting data into buckets helps group indicators on ranges. There are several types of buckets, which adapts to different factor types,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Value"),": for number factors,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Value Measure"),": for pre-built number factors, such as",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Floor"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Residence Area"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Age"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Business Scale"),","))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Category Measure"),": for pre-built category factors, such as",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Geo related: ",(0,r.kt)("inlineCode",{parentName:"li"},"Continent"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Region"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Country"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Province"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"City")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"District"),","),(0,r.kt)("li",{parentName:"ul"},"Individual related: ",(0,r.kt)("inlineCode",{parentName:"li"},"Gender"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Occupation"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Religion")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Nationality"),","),(0,r.kt)("li",{parentName:"ul"},"and ",(0,r.kt)("inlineCode",{parentName:"li"},"Residence Type"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Business Trade"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Boolean"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Enumeration Measure"),".")))),(0,r.kt)("h2",{id:"value-bucket"},"Value Bucket"),(0,r.kt)("p",null,"Numeric values can be defined into buckets,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Value Bucket",src:n(23918).Z,width:"3582",height:"1852"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Value bucket can be applied to any factor which is declared as ",(0,r.kt)("inlineCode",{parentName:"p"},"NUMBER")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"UNSIGNED"),".")),(0,r.kt)("h2",{id:"value-measure-bucket"},"Value Measure Bucket"),(0,r.kt)("p",null,"For pre-defined number type factor, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Floor"),", can be defined into value measures,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Value Measure Bucket",src:n(31704).Z,width:"3582",height:"1852"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Value measure buckets can be adapted to any factor declared with particular type.")),(0,r.kt)("h2",{id:"category-measure-bucket"},"Category Measure Bucket"),(0,r.kt)("p",null,"For pre-defined categorized factor, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Country"),", can be defined into category measures,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Category Bucket",src:n(2967).Z,width:"3582",height:"1852"})),(0,r.kt)("h2",{id:"enumeration-measure-bucket"},"Enumeration Measure Bucket"),(0,r.kt)("p",null,"For factors which declared as enumeration,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Enumeration Bucket",src:n(37439).Z,width:"3582",height:"1852"})))}d.isMDXComponent=!0},2967:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/category-bucket-07e9487aa65fd7239dc2b30092774bda.png"},37439:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/enum-bucket-c0bfe44192d1123cc430ffc2523b449c.png"},23918:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/value-bucket-71b68bd151696b181f8d59b0ba5d6a86.png"},31704:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/value-measure-bucket-ca54f634e4521c948eb2b4ababe19ed6.png"}}]);