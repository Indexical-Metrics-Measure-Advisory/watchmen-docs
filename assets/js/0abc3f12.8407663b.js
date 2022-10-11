"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[1864],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(o),f=n,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||l;return o?r.createElement(m,a(a({ref:t},d),{},{components:o})):r.createElement(m,a({ref:t},d))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<l;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},67043:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=o(83117),n=(o(67294),o(3905));const l={id:"collector",title:"Doll S3 Collector",sidebar_position:500},a="Collector",c={unversionedId:"doll/collector",id:"version-16.4/doll/collector",title:"Doll S3 Collector",description:"S3 Collector is a way of data integration base on S3, Doll pulling data from s3 bucket, and use database to create task for concurrent control.",source:"@site/versioned_docs/version-16.4/040-doll/500-collector.md",sourceDirName:"040-doll",slug:"/doll/collector",permalink:"/docs/16.4/doll/collector",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.4/040-doll/500-collector.md",tags:[],version:"16.4",lastUpdatedBy:"botlikes",lastUpdatedAt:1665468074,formattedLastUpdatedAt:"Oct 11, 2022",sidebarPosition:500,frontMatter:{id:"collector",title:"Doll S3 Collector",sidebar_position:500},sidebar:"sidebar",previous:{title:"Doll REST",permalink:"/docs/16.4/doll/rest-doll"},next:{title:"Datetime",permalink:"/docs/16.4/doll/utilities/date-time"}},i={},s=[{value:"Collector Logic",id:"collector-logic",level:2},{value:"S3 Collector Configuration",id:"s3-collector-configuration",level:2},{value:"housekeeping",id:"housekeeping",level:2}],d={toc:s};function u(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"collector"},"Collector"),(0,n.kt)("p",null,"S3 Collector is a way of data integration base on S3, Doll pulling data from s3 bucket, and use database to create task for concurrent control.\nthe unique task guarantee the data on S3 will be consumed and only consume once.\nOnce the consumption completed, the data will be deleted from S3.\nOr if there is any exception, the data will be moved from the folder of consume queue to the folder of dead queue to prevent blocking of consumption."),(0,n.kt)("h2",{id:"collector-logic"},"Collector Logic"),(0,n.kt)("p",null,"S3 Collector flow chart"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"S3 Collector",src:o(86988).Z,width:"1127",height:"1601"})),(0,n.kt)("h2",{id:"s3-collector-configuration"},"S3 Collector Configuration"),(0,n.kt)("p",null,"Please refer to installation config page for more detail information of configuration."),(0,n.kt)("h2",{id:"housekeeping"},"housekeeping"),(0,n.kt)("p",null,"The program will periodically clean up the task."))}u.isMDXComponent=!0},86988:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/S3-Collector-f9fe6b60eb70f8cb7abde4eba5a509f8.png"}}]);