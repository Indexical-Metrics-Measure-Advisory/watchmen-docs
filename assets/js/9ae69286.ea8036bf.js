"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[426],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var r=o(67294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,l=function(e,t){if(null==e)return{};var o,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var i=r.createContext({}),s=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(o),f=l,m=u["".concat(i,".").concat(f)]||u[f]||p[f]||n;return o?r.createElement(m,a(a({ref:t},d),{},{components:o})):r.createElement(m,a({ref:t},d))}));function f(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=o.length,a=new Array(n);a[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,a[1]=c;for(var s=2;s<n;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},82056:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var r=o(83117),l=(o(67294),o(3905));const n={id:"collector",title:"Doll S3 Collector",sidebar_position:500},a="Collector",c={unversionedId:"doll/collector",id:"version-16.5-prerelease/doll/collector",title:"Doll S3 Collector",description:"S3 Collector is a way of data integration base on S3, Doll pulling data from s3 bucket, and use database to create task for concurrent control.",source:"@site/versioned_docs/version-16.5-prerelease/040-doll/500-collector.md",sourceDirName:"040-doll",slug:"/doll/collector",permalink:"/docs/16.5-prerelease/doll/collector",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.5-prerelease/040-doll/500-collector.md",tags:[],version:"16.5-prerelease",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1707363130,formattedLastUpdatedAt:"Feb 8, 2024",sidebarPosition:500,frontMatter:{id:"collector",title:"Doll S3 Collector",sidebar_position:500},sidebar:"sidebar",previous:{title:"Doll REST",permalink:"/docs/16.5-prerelease/doll/rest-doll"},next:{title:"Datetime",permalink:"/docs/16.5-prerelease/doll/utilities/date-time"}},i={},s=[{value:"Collector Logic",id:"collector-logic",level:2},{value:"S3 Collector Configuration",id:"s3-collector-configuration",level:2},{value:"housekeeping",id:"housekeeping",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"collector"},"Collector"),(0,l.kt)("p",null,"S3 Collector is a way of data integration base on S3, Doll pulling data from s3 bucket, and use database to create task for concurrent control.\nthe unique task guarantee the data on S3 will be consumed and only consume once.\nOnce the consumption completed, the data will be deleted from S3.\nOr if there is any exception, the data will be moved from the folder of consume queue to the folder of dead queue to prevent blocking of consumption."),(0,l.kt)("h2",{id:"collector-logic"},"Collector Logic"),(0,l.kt)("p",null,"S3 Collector flow chart"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"S3 Collector",src:o(60960).Z,width:"1127",height:"1601"})),(0,l.kt)("h2",{id:"s3-collector-configuration"},"S3 Collector Configuration"),(0,l.kt)("p",null,"Please refer to installation config page for more detail information of configuration."),(0,l.kt)("h2",{id:"housekeeping"},"housekeeping"),(0,l.kt)("p",null,"The program will periodically clean up the task."))}p.isMDXComponent=!0},60960:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/S3-Collector-f9fe6b60eb70f8cb7abde4eba5a509f8.png"}}]);