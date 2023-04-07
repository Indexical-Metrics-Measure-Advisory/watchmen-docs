"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[1128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=m(n),c=i,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},57254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(83117),i=(n(67294),n(3905));const r={id:"enumeration",title:"Enumeration",sidebar_position:70},o="Enumeration",l={unversionedId:"web-client/admin/enumeration",id:"version-16.4/web-client/admin/enumeration",title:"Enumeration",description:"Enumeration is code table for topic factors, such as country, city, etc.",source:"@site/versioned_docs/version-16.4/020-web-client/010-admin/070-enumeration.md",sourceDirName:"020-web-client/010-admin",slug:"/web-client/admin/enumeration",permalink:"/docs/16.4/web-client/admin/enumeration",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.4/020-web-client/010-admin/070-enumeration.md",tags:[],version:"16.4",lastUpdatedBy:"botlikes",lastUpdatedAt:1680853926,formattedLastUpdatedAt:"Apr 7, 2023",sidebarPosition:70,frontMatter:{id:"enumeration",title:"Enumeration",sidebar_position:70},sidebar:"sidebar",previous:{title:"Space",permalink:"/docs/16.4/web-client/admin/space"},next:{title:"Topic",permalink:"/docs/16.4/web-client/admin/topic"}},p={},m=[{value:"Standard Tuple Page",id:"standard-tuple-page",level:2},{value:"Import &amp; Export",id:"import--export",level:3},{value:"Upgrade",id:"upgrade",level:3},{value:"Bulk Export &amp; Import Items",id:"bulk-export--import-items",level:2},{value:"Form Validation",id:"form-validation",level:2}],d={toc:m};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"enumeration"},"Enumeration"),(0,i.kt)("p",null,"Enumeration is code table for topic factors, such as country, city, etc."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Enumeration is available for ",(0,i.kt)("inlineCode",{parentName:"p"},"Admin")," only.")),(0,i.kt)("h2",{id:"standard-tuple-page"},"Standard Tuple Page"),(0,i.kt)("p",null,"Enumeration use ",(0,i.kt)("a",{parentName:"p",href:"../standard-tuple-page"},"standard tuple page"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Edit Enumeration",src:n(45481).Z,width:"3584",height:"1852"})),(0,i.kt)("h3",{id:"import--export"},"Import & Export"),(0,i.kt)("p",null,"There is no online editing for enumeration items, follow steps as below to modify them,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Export the existing data to a CSV file,"),(0,i.kt)("li",{parentName:"ul"},"Modify data by Excel or your favorite tool,"),(0,i.kt)("li",{parentName:"ul"},"Import the modified file.")),(0,i.kt)("p",null,"Here is a CSV sample:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"code,label,replaceCode,parentCode\n001,New York City,,\n002,Portland,,\n003,Manchester,,\n004,Burlington,,\n005,Providence,,\n006,Bridgeport,,\n007,Boston,,\n")),(0,i.kt)("admonition",{title:"DON'T",type:"danger"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"DO NOT change the header line,"),(0,i.kt)("li",{parentName:"ul"},"DO NOT import the change part only, because items will be replaced by items from file.\n:::")),(0,i.kt)("h3",{parentName:"admonition",id:"search-bar"},"Search Bar"),(0,i.kt)("p",{parentName:"admonition"},"There is no pagination of enumeration items, but sometimes there are too many items to find and locate. Use search bar to find them,"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"A text: try to match all fields of item,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"c:code"),": match code only, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"c:01"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"l:label"),": match label only, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"l:new"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n:newcode"),": match new code only, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"n:01"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"p:text"),": match parent enumeration item code and label, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"p:usa"),","),(0,i.kt)("li",{parentName:"ul"},"All matches are case-insensitive and fuzzy,"),(0,i.kt)("li",{parentName:"ul"},"Multiple words splitting by whitespace is not supported.")),(0,i.kt)("h3",{parentName:"admonition",id:"hierarchy"},"Hierarchy"),(0,i.kt)("p",{parentName:"admonition"},"Enumeration can be hierarchical, by set an enumeration to be parent enumeration of another one.",(0,i.kt)("br",{parentName:"p"}),"\n","When an enumeration has a parent, use parent enumeration item code to set the parent-child relationship."),(0,i.kt)("p",{parentName:"admonition"},"For example, city belongs to province,"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Define a province enumeration,"),(0,i.kt)("li",{parentName:"ul"},"Define a city enumeration,"),(0,i.kt)("li",{parentName:"ul"},"Set province as parent enumeration of city,"),(0,i.kt)("li",{parentName:"ul"},"Use province item code as parent enumeration item code for each enumeration item of city."))),(0,i.kt)("p",null,"Lack of parent enumeration item code is not recommended.\n:::"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Hierarchy of enumerations stays on definition phase, we haven't started to use it in runtime yet.")),(0,i.kt)("h3",{id:"upgrade"},"Upgrade"),(0,i.kt)("p",null,"Sometimes, enumeration has to be upgraded for some reason, but because of the existing data, the original code has to be kept.",(0,i.kt)("br",{parentName:"p"}),"\n","In this case, use new code to describe the upgrading."),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Upgrading of enumerations stays on definition phase, we haven't started to use it in runtime yet.")),(0,i.kt)("h2",{id:"bulk-export--import-items"},"Bulk Export & Import Items"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Download Enumeration Data",src:n(98113).Z,width:"2326",height:"1102"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Download Enum Items")," button,"),(0,i.kt)("li",{parentName:"ul"},"Pick enumerations which need to be exported,"),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Download")," button.")),(0,i.kt)("p",null,"A zip file is exported, enumeration items are in csv files in zip."),(0,i.kt)("p",null,"Bulk import enumeration items use exactly the same format as exported, enumeration must be identified by file name, format as below,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id-name.csv"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id.csv"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name.csv"),".")),(0,i.kt)("p",null,"Note name is case-sensitive."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"CSV"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TXT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," are supported.")),(0,i.kt)("h2",{id:"form-validation"},"Form Validation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enum Name: required,"),(0,i.kt)("li",{parentName:"ul"},"Parent Enum: optional. Hierarchy of enumerations,"),(0,i.kt)("li",{parentName:"ul"},"Description: optional,"),(0,i.kt)("li",{parentName:"ul"},"Codes: optional,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Code: required,"),(0,i.kt)("li",{parentName:"ul"},"Label: optional,"),(0,i.kt)("li",{parentName:"ul"},"New Code: optional,"),(0,i.kt)("li",{parentName:"ul"},"Parent Enum: optional.")))))}u.isMDXComponent=!0},98113:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/enumeration-data-07fec988c0979f3e2cd08a8a1511a1ae.png"},45481:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/enumeration-6d80368be1d41ecd414f724668d30221.png"}}]);