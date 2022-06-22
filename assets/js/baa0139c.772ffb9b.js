"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[5706],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),d=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,k=u["".concat(m,".").concat(c)]||u[c]||s[c]||r;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76782:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),l=["components"],o={id:"date-time",title:"Datetime",sidebar_position:1},m="Datetime",d={unversionedId:"doll/utilities/date-time",id:"version-16.0/doll/utilities/date-time",title:"Datetime",description:"_Watchmen_ use [0-9] part of string to parse date time. Thus, supporting for timezone part is limited.",source:"@site/versioned_docs/version-16.0/040-doll/700-utilities/date-time.md",sourceDirName:"040-doll/700-utilities",slug:"/doll/utilities/date-time",permalink:"/docs/16.0/doll/utilities/date-time",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.0/040-doll/700-utilities/date-time.md",tags:[],version:"16.0",lastUpdatedBy:"botlikes",lastUpdatedAt:1655877324,formattedLastUpdatedAt:"6/22/2022",sidebarPosition:1,frontMatter:{id:"date-time",title:"Datetime",sidebar_position:1},sidebar:"sidebar",previous:{title:"Doll REST",permalink:"/docs/16.0/doll/rest-doll"},next:{title:"Decimal",permalink:"/docs/16.0/doll/utilities/decimal"}},p={},s=[{value:"Default Formats",id:"default-formats",level:2},{value:"Time",id:"time",level:3},{value:"Date",id:"date",level:3},{value:"Datetime",id:"datetime-1",level:3},{value:"Full Datetime",id:"full-datetime",level:3},{value:"Timezone Support",id:"timezone-support",level:3},{value:"Parse Logic",id:"parse-logic",level:2}],u={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datetime"},"Datetime"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Watchmen"))," use ",(0,r.kt)("strong",{parentName:"p"},"[0-9]")," part of string to parse date time. Thus, supporting for timezone part is limited."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Supported formats are defined in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"watchmen-data-kernel"))," module, visit ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../../installation/config#data-kernel"},"here"))," for more\ndetails."))),(0,r.kt)("h2",{id:"default-formats"},"Default Formats"),(0,r.kt)("h3",{id:"time"},"Time"),(0,r.kt)("p",null,"There are 2 default formats for time:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%H%M%S"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%H%M"),".")),(0,r.kt)("h3",{id:"date"},"Date"),(0,r.kt)("p",null,"There are 3 default formats for date:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%Y%m%d"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%d%m%Y"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%m%d%Y"),".")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"%d%m")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"%m%d")," may lead confusion, reorder formats or simply remove formats which does not need."))),(0,r.kt)("h3",{id:"datetime-1"},"Datetime"),(0,r.kt)("p",null,"There are 6 default formats for datetime:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%Y%m%d%H%M%S"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%d%m%Y%H%M%S"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%m%d%Y%H%M%S"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%Y%m%d%H%M"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%d%m%Y%H%M"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%m%d%Y%H%M"),".")),(0,r.kt)("h3",{id:"full-datetime"},"Full Datetime"),(0,r.kt)("p",null,"There are 3 default formats for full datetime:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%Y%m%d%H%M%S%f"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%d%m%Y%H%M%S%f"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%m%d%Y%H%M%S%f"),".")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"%f")," is micro-second with 6 digits in python."))),(0,r.kt)("h3",{id:"timezone-support"},"Timezone Support"),(0,r.kt)("p",null,"The only support for timezone is ",(0,r.kt)("inlineCode",{parentName:"p"},"%z"),", such as ",(0,r.kt)("inlineCode",{parentName:"p"},"+0000"),"."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note in most scenarios, timezone is not used and will not be saved. Basically speaking, compatibility of timezone is for receiving data\nonly."))),(0,r.kt)("h2",{id:"parse-logic"},"Parse Logic"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remove ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("sup",{parentName:"strong",id:"fnref-0-9+"},(0,r.kt)("a",{parentName:"sup",href:"#fn-0-9+",className:"footnote-ref"},"0-9+")))," characters from given string,"),(0,r.kt)("li",{parentName:"ul"},"Find suitable format according to left string length,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Plus 2 when format contains ",(0,r.kt)("inlineCode",{parentName:"li"},"%Y"),","),(0,r.kt)("li",{parentName:"ul"},"Plus 3 when format contains ",(0,r.kt)("inlineCode",{parentName:"li"},"%z"),","),(0,r.kt)("li",{parentName:"ul"},"Format must contain ",(0,r.kt)("inlineCode",{parentName:"li"},"%f")," and must not contain ",(0,r.kt)("inlineCode",{parentName:"li"},"%z")," when string length is more than 14,"),(0,r.kt)("li",{parentName:"ul"},"Format must contain ",(0,r.kt)("inlineCode",{parentName:"li"},"%f")," and string length must be more than 18 when format contains ",(0,r.kt)("inlineCode",{parentName:"li"},"%z"),".")))),(0,r.kt)("p",null,"Example 1:",(0,r.kt)("br",{parentName:"p"}),"\n","Given string is ",(0,r.kt)("inlineCode",{parentName:"p"},"2022/01/01 23:59:59"),", the suitable formats are ",(0,r.kt)("inlineCode",{parentName:"p"},"%Y%m%d%H%M%S"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"%d%m%Y%H%M%S")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"%m%d%Y%H%M%S"),"."),(0,r.kt)("p",null,"Example 2:",(0,r.kt)("br",{parentName:"p"}),"\n","Given string is ",(0,r.kt)("inlineCode",{parentName:"p"},"2022/01/01 23:59:59.123456+0500"),", the suitable format is ",(0,r.kt)("inlineCode",{parentName:"p"},"%Y%m%d%H%M%S%f%z"),", which is not default built-in."))}c.isMDXComponent=!0}}]);