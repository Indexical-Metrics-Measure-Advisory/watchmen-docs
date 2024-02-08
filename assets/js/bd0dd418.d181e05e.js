"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[5282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=i.createContext({}),p=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,k=u["".concat(m,".").concat(c)]||u[c]||s[c]||r;return n?i.createElement(k,l(l({ref:t},d),{},{components:n})):i.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(83117),a=(n(67294),n(3905));const r={id:"date-time",title:"Datetime",sidebar_position:1},l="Datetime",o={unversionedId:"doll/utilities/date-time",id:"version-16.3/doll/utilities/date-time",title:"Datetime",description:"_Watchmen_ use [0-9] part of string to parse date time. Thus, supporting for timezone part is limited.",source:"@site/versioned_docs/version-16.3/040-doll/700-utilities/date-time.md",sourceDirName:"040-doll/700-utilities",slug:"/doll/utilities/date-time",permalink:"/docs/16.3/doll/utilities/date-time",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.3/040-doll/700-utilities/date-time.md",tags:[],version:"16.3",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1707363130,formattedLastUpdatedAt:"Feb 8, 2024",sidebarPosition:1,frontMatter:{id:"date-time",title:"Datetime",sidebar_position:1},sidebar:"sidebar",previous:{title:"Doll REST",permalink:"/docs/16.3/doll/rest-doll"},next:{title:"Decimal",permalink:"/docs/16.3/doll/utilities/decimal"}},m={},p=[{value:"Default Formats",id:"default-formats",level:2},{value:"Time",id:"time",level:3},{value:"Date",id:"date",level:3},{value:"Datetime",id:"datetime-1",level:3},{value:"Full Datetime",id:"full-datetime",level:3},{value:"Timezone Support",id:"timezone-support",level:3},{value:"Parse Logic",id:"parse-logic",level:2}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"datetime"},"Datetime"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Watchmen"))," use ",(0,a.kt)("strong",{parentName:"p"},"[0-9]")," part of string to parse date time. Thus, supporting for timezone part is limited."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Supported formats are defined in ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"watchmen-data-kernel"))," module, visit ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../../installation/config#data-kernel"},"here"))," for more\ndetails.")),(0,a.kt)("h2",{id:"default-formats"},"Default Formats"),(0,a.kt)("h3",{id:"time"},"Time"),(0,a.kt)("p",null,"There are 2 default formats for time:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%H%M%S"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%H%M"),".")),(0,a.kt)("h3",{id:"date"},"Date"),(0,a.kt)("p",null,"There are 3 default formats for date:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%Y%m%d"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%d%m%Y"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%m%d%Y"),".")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"%d%m")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"%m%d")," may lead confusion, reorder formats or simply remove formats which does not need.")),(0,a.kt)("h3",{id:"datetime-1"},"Datetime"),(0,a.kt)("p",null,"There are 6 default formats for datetime:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%Y%m%d%H%M%S"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%d%m%Y%H%M%S"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%m%d%Y%H%M%S"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%Y%m%d%H%M"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%d%m%Y%H%M"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%m%d%Y%H%M"),".")),(0,a.kt)("h3",{id:"full-datetime"},"Full Datetime"),(0,a.kt)("p",null,"There are 3 default formats for full datetime:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%Y%m%d%H%M%S%f"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%d%m%Y%H%M%S%f"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%m%d%Y%H%M%S%f"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"%f")," is micro-second with 6 digits in python.")),(0,a.kt)("h3",{id:"timezone-support"},"Timezone Support"),(0,a.kt)("p",null,"The only support for timezone is ",(0,a.kt)("inlineCode",{parentName:"p"},"%z"),", such as ",(0,a.kt)("inlineCode",{parentName:"p"},"+0000"),"."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Note in most scenarios, timezone is not used and will not be saved. Basically speaking, compatibility of timezone is for receiving data\nonly.")),(0,a.kt)("h2",{id:"parse-logic"},"Parse Logic"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remove ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("sup",{parentName:"strong",id:"fnref-0-9+"},(0,a.kt)("a",{parentName:"sup",href:"#fn-0-9+",className:"footnote-ref"},"0-9+")))," characters from given string,"),(0,a.kt)("li",{parentName:"ul"},"Find suitable format according to left string length,",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Plus 2 when format contains ",(0,a.kt)("inlineCode",{parentName:"li"},"%Y"),","),(0,a.kt)("li",{parentName:"ul"},"Plus 3 when format contains ",(0,a.kt)("inlineCode",{parentName:"li"},"%z"),","),(0,a.kt)("li",{parentName:"ul"},"Format must contain ",(0,a.kt)("inlineCode",{parentName:"li"},"%f")," and must not contain ",(0,a.kt)("inlineCode",{parentName:"li"},"%z")," when string length is more than 14,"),(0,a.kt)("li",{parentName:"ul"},"Format must contain ",(0,a.kt)("inlineCode",{parentName:"li"},"%f")," and string length must be more than 18 when format contains ",(0,a.kt)("inlineCode",{parentName:"li"},"%z"),".")))),(0,a.kt)("p",null,"Example 1:",(0,a.kt)("br",{parentName:"p"}),"\n","Given string is ",(0,a.kt)("inlineCode",{parentName:"p"},"2022/01/01 23:59:59"),", the suitable formats are ",(0,a.kt)("inlineCode",{parentName:"p"},"%Y%m%d%H%M%S"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"%d%m%Y%H%M%S")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"%m%d%Y%H%M%S"),"."),(0,a.kt)("p",null,"Example 2:",(0,a.kt)("br",{parentName:"p"}),"\n","Given string is ",(0,a.kt)("inlineCode",{parentName:"p"},"2022/01/01 23:59:59.123456+0500"),", the suitable format is ",(0,a.kt)("inlineCode",{parentName:"p"},"%Y%m%d%H%M%S%f%z"),", which is not default built-in."))}s.isMDXComponent=!0}}]);