"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[6165],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=l,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},98312:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(83117),l=(r(67294),r(3905));const a={id:"rest-doll",title:"Doll REST",sidebar_position:400},o="Doll REST",i={unversionedId:"doll/rest-doll",id:"version-16.5-prerelease/doll/rest-doll",title:"Doll REST",description:"Doll REST is designed for serve,",source:"@site/versioned_docs/version-16.5-prerelease/040-doll/400-rest-doll.md",sourceDirName:"040-doll",slug:"/doll/rest-doll",permalink:"/docs/16.5-prerelease/doll/rest-doll",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.5-prerelease/040-doll/400-rest-doll.md",tags:[],version:"16.5-prerelease",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1680953158,formattedLastUpdatedAt:"Apr 8, 2023",sidebarPosition:400,frontMatter:{id:"rest-doll",title:"Doll REST",sidebar_position:400},sidebar:"sidebar",previous:{title:"Inquiry Service",permalink:"/docs/16.5-prerelease/doll/inquiry-service"},next:{title:"Doll S3 Collector",permalink:"/docs/16.5-prerelease/doll/collector"}},s={},p=[{value:"Import Assets",id:"import-assets",level:2},{value:"Choose Extra Dependencies",id:"choose-extra-dependencies",level:2},{value:"Default Accounts",id:"default-accounts",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"doll-rest"},"Doll REST"),(0,l.kt)("p",null,"Doll REST is designed for serve,"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Meta CRUD,"),(0,l.kt)("li",{parentName:"ul"},"Pipeline engine,"),(0,l.kt)("li",{parentName:"ul"},"Inquiry engine,"),(0,l.kt)("li",{parentName:"ul"},"Data patch,"),(0,l.kt)("li",{parentName:"ul"},"etc,")),(0,l.kt)("p",null,"As a standalone application server. Doll depends on ",(0,l.kt)("a",{parentName:"p",href:"data-service"},"data-service"),", ",(0,l.kt)("a",{parentName:"p",href:"pipeline-service"},"pipeline-service"),"\nand ",(0,l.kt)("a",{parentName:"p",href:"inquiry-service"},"inquiry-service"),". Based on such services, doll provide the meta CRUD REST apis as well."),(0,l.kt)("h2",{id:"import-assets"},"Import Assets"),(0,l.kt)("p",null,"A rest api for import meta assets is provided by doll,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl \\\n--location \\ \n--request POST 'http://host:port/import' \\\n--header 'Authorization: Bearer ...' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    ...\n}'\n")),(0,l.kt)("p",null,"Body structure can be found on ",(0,l.kt)("inlineCode",{parentName:"p"},"MixImportDataRequest")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"watchmen-rest-doll")," module."),(0,l.kt)("h2",{id:"choose-extra-dependencies"},"Choose Extra Dependencies"),(0,l.kt)("p",null,"There are many options on build a doll package, find extra dependencies list in ",(0,l.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"watchmen-rest-doll")," module, free to\npick them according to the need."),(0,l.kt)("h2",{id:"default-accounts"},"Default Accounts"),(0,l.kt)("p",null,"There are three default accounts by installation scripts,"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"imma-super"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"change-me"),", as ",(0,l.kt)("inlineCode",{parentName:"li"},"Super Admin"),","),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"imma-admin"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"1234abcd"),", as ",(0,l.kt)("inlineCode",{parentName:"li"},"Admin"),","),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"imma-user"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"1234abcd"),",  as ",(0,l.kt)("inlineCode",{parentName:"li"},"Console User"),".")))}c.isMDXComponent=!0}}]);