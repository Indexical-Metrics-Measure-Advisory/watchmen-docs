"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[1217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const l={id:"rest-doll",title:"Doll REST",sidebar_position:400},i="Doll REST",o={unversionedId:"doll/rest-doll",id:"version-16.2/doll/rest-doll",title:"Doll REST",description:"Doll REST is designed for serve,",source:"@site/versioned_docs/version-16.2/040-doll/400-rest-doll.md",sourceDirName:"040-doll",slug:"/doll/rest-doll",permalink:"/docs/16.2/doll/rest-doll",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.2/040-doll/400-rest-doll.md",tags:[],version:"16.2",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1659345882,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:400,frontMatter:{id:"rest-doll",title:"Doll REST",sidebar_position:400},sidebar:"sidebar",previous:{title:"Inquiry Service",permalink:"/docs/16.2/doll/inquiry-service"},next:{title:"Datetime",permalink:"/docs/16.2/doll/utilities/date-time"}},s={},p=[{value:"Import Assets",id:"import-assets",level:2},{value:"Choose Extra Dependencies",id:"choose-extra-dependencies",level:2},{value:"Default Accounts",id:"default-accounts",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"doll-rest"},"Doll REST"),(0,a.kt)("p",null,"Doll REST is designed for serve,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Meta CRUD,"),(0,a.kt)("li",{parentName:"ul"},"Pipeline engine,"),(0,a.kt)("li",{parentName:"ul"},"Inquiry engine,"),(0,a.kt)("li",{parentName:"ul"},"Data patch,"),(0,a.kt)("li",{parentName:"ul"},"etc,")),(0,a.kt)("p",null,"As a standalone application server. Doll depends on ",(0,a.kt)("a",{parentName:"p",href:"data-service"},"data-service"),", ",(0,a.kt)("a",{parentName:"p",href:"pipeline-service"},"pipeline-service"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"inquiry-service"},"inquiry-service"),". Based on such services, doll provide the meta CRUD REST apis as well."),(0,a.kt)("h2",{id:"import-assets"},"Import Assets"),(0,a.kt)("p",null,"A rest api for import meta assets is provided by doll,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl \\\n--location \\ \n--request POST 'http://host:port/import' \\\n--header 'Authorization: Bearer ...' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    ...\n}'\n")),(0,a.kt)("p",null,"Body structure can be found on ",(0,a.kt)("inlineCode",{parentName:"p"},"MixImportDataRequest")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"watchmen-rest-doll")," module."),(0,a.kt)("h2",{id:"choose-extra-dependencies"},"Choose Extra Dependencies"),(0,a.kt)("p",null,"There are many options on build a doll package, find extra dependencies list in ",(0,a.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"watchmen-rest-doll")," module, free to\npick them according to the need."),(0,a.kt)("h2",{id:"default-accounts"},"Default Accounts"),(0,a.kt)("p",null,"There are three default accounts by installation scripts,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"imma-super"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"change-me"),", as ",(0,a.kt)("inlineCode",{parentName:"li"},"Super Admin"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"imma-admin"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"1234abcd"),", as ",(0,a.kt)("inlineCode",{parentName:"li"},"Admin"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"imma-user"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"1234abcd"),",  as ",(0,a.kt)("inlineCode",{parentName:"li"},"Console User"),".")))}c.isMDXComponent=!0}}]);