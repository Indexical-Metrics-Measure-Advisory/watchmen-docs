"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[5045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=i,m=u["".concat(l,".").concat(b)]||u[b]||p[b]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(83117),i=(n(67294),n(3905));const o={id:"dqc-wb-index",title:"DQC Workbench Index",sidebar_position:1},a="DQC Workbench",c={unversionedId:"web-client/dqc/dqc-wb-index",id:"version-16.0/web-client/dqc/dqc-wb-index",title:"DQC Workbench Index",description:"DQC (Data Quality Center) workbench includes a group of features to",source:"@site/versioned_docs/version-16.0/020-web-client/030-dqc/001-workbench-index.md",sourceDirName:"020-web-client/030-dqc",slug:"/web-client/dqc/dqc-wb-index",permalink:"/docs/16.0/web-client/dqc/dqc-wb-index",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.0/020-web-client/030-dqc/001-workbench-index.md",tags:[],version:"16.0",lastUpdatedBy:"botlikes",lastUpdatedAt:1657767938,formattedLastUpdatedAt:"Jul 14, 2022",sidebarPosition:1,frontMatter:{id:"dqc-wb-index",title:"DQC Workbench Index",sidebar_position:1},sidebar:"sidebar",previous:{title:"Dashboard",permalink:"/docs/16.0/web-client/console/dashboard"},next:{title:"Runtime Statistics",permalink:"/docs/16.0/web-client/dqc/run-statistics"}},l={},d=[{value:"Disable DQC",id:"disable-dqc",level:2}],s={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dqc-workbench"},"DQC Workbench"),(0,i.kt)("p",null,"DQC (Data Quality Center) workbench includes a group of features to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inspect relationships between tuples,"),(0,i.kt)("li",{parentName:"ul"},"Define monitor rules of topics,"),(0,i.kt)("li",{parentName:"ul"},"View runtime statistics.")),(0,i.kt)("p",null,"Here, we introduce them one by one."),(0,i.kt)("h2",{id:"disable-dqc"},"Disable DQC"),(0,i.kt)("p",null,"DQC can be disabled by building, it is enabled only when ",(0,i.kt)("inlineCode",{parentName:"p"},"REACT_APP_DQC_ENABLED=true")," (by default it is not), set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"false")," to\nenable/disable DQC."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Find ",(0,i.kt)("inlineCode",{parentName:"p"},"REACT_APP_DQC_ENABLED")," in ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Topic profile also will be disabled when DQC is disabled.")))}p.isMDXComponent=!0}}]);