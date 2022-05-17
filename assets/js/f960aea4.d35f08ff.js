"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[5969],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96287:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],o={id:"rest-doll",title:"Doll REST",sidebar_position:400},s="Doll REST",p={unversionedId:"doll/rest-doll",id:"version-16.1/doll/rest-doll",title:"Doll REST",description:"Doll REST is designed for serve,",source:"@site/versioned_docs/version-16.1/040-doll/400-rest-doll.md",sourceDirName:"040-doll",slug:"/doll/rest-doll",permalink:"/docs/16.1/doll/rest-doll",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.1/040-doll/400-rest-doll.md",tags:[],version:"16.1",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1652814898,formattedLastUpdatedAt:"5/17/2022",sidebarPosition:400,frontMatter:{id:"rest-doll",title:"Doll REST",sidebar_position:400},sidebar:"sidebar",previous:{title:"Inquiry Service",permalink:"/docs/16.1/doll/inquiry-service"},next:{title:"Datetime",permalink:"/docs/16.1/doll/utilities/date-time"}},c={},d=[{value:"Import Assets",id:"import-assets",level:2},{value:"Choose Extra Dependencies",id:"choose-extra-dependencies",level:2},{value:"Default Accounts",id:"default-accounts",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"doll-rest"},"Doll REST"),(0,i.kt)("p",null,"Doll REST is designed for serve,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Meta CRUD,"),(0,i.kt)("li",{parentName:"ul"},"Pipeline engine,"),(0,i.kt)("li",{parentName:"ul"},"Inquiry engine,"),(0,i.kt)("li",{parentName:"ul"},"Data patch,"),(0,i.kt)("li",{parentName:"ul"},"etc,")),(0,i.kt)("p",null,"As a standalone application server. Doll depends on ",(0,i.kt)("a",{parentName:"p",href:"data-service"},"data-service"),", ",(0,i.kt)("a",{parentName:"p",href:"pipeline-service"},"pipeline-service"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"inquiry-service"},"inquiry-service"),". Based on such services, doll provide the meta CRUD REST apis as well."),(0,i.kt)("h2",{id:"import-assets"},"Import Assets"),(0,i.kt)("p",null,"A rest api for import meta assets is provided by doll,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl \\\n--location \\ \n--request POST 'http://host:port/import' \\\n--header 'Authorization: Bearer ...' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    ...\n}'\n")),(0,i.kt)("p",null,"Body structure can be found on ",(0,i.kt)("inlineCode",{parentName:"p"},"MixImportDataRequest")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"watchmen-rest-doll")," module."),(0,i.kt)("h2",{id:"choose-extra-dependencies"},"Choose Extra Dependencies"),(0,i.kt)("p",null,"There are many options on build a doll package, find extra dependencies list in ",(0,i.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"watchmen-rest-doll")," module, free to\npick them according to the need."),(0,i.kt)("h2",{id:"default-accounts"},"Default Accounts"),(0,i.kt)("p",null,"There are three default accounts by installation scripts,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"imma-super"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"change-me"),", as ",(0,i.kt)("inlineCode",{parentName:"li"},"Super Admin"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"imma-admin"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"1234abcd"),", as ",(0,i.kt)("inlineCode",{parentName:"li"},"Admin"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"imma-user"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"1234abcd"),",  as ",(0,i.kt)("inlineCode",{parentName:"li"},"Console User"),".")))}m.isMDXComponent=!0}}]);