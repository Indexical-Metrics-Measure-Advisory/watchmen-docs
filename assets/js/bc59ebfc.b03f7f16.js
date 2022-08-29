"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[1392],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),m=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=m(e.components);return i.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(t),u=a,f=c["".concat(d,".").concat(u)]||c[u]||s[u]||r;return t?i.createElement(f,o(o({ref:n},p),{},{components:t})):i.createElement(f,o({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<r;m++)o[m]=t[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},92865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var i=t(83117),a=(t(67294),t(3905));const r={id:"admin-wb-index",title:"Admin Workbench Index",sidebar_position:1},o="Admin Workbench",l={unversionedId:"web-client/admin/admin-wb-index",id:"version-16.2/web-client/admin/admin-wb-index",title:"Admin Workbench Index",description:"Admin Types",source:"@site/versioned_docs/version-16.2/020-web-client/010-admin/001-workbench-index.md",sourceDirName:"020-web-client/010-admin",slug:"/web-client/admin/admin-wb-index",permalink:"/docs/16.2/web-client/admin/admin-wb-index",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.2/020-web-client/010-admin/001-workbench-index.md",tags:[],version:"16.2",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1661759620,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:1,frontMatter:{id:"admin-wb-index",title:"Admin Workbench Index",sidebar_position:1},sidebar:"sidebar",previous:{title:"Installation",permalink:"/docs/16.2/web-client/web-client-installation"},next:{title:"Data Zone",permalink:"/docs/16.2/web-client/admin/data-zone"}},d={},m=[{value:"Admin Types",id:"admin-types",level:2},{value:"Super Admin",id:"super-admin",level:3},{value:"Data Zone Admin",id:"data-zone-admin",level:3},{value:"Centralized Definition Persistence",id:"centralized-definition-persistence",level:2}],p={toc:m};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"admin-workbench"},"Admin Workbench"),(0,a.kt)("h2",{id:"admin-types"},"Admin Types"),(0,a.kt)("p",null,"There are 2 roles of admin:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Super Admin"),(0,a.kt)("li",{parentName:"ul"},"Data Zone Admin")),(0,a.kt)("h3",{id:"super-admin"},"Super Admin"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Watchmen"))," is designed for multiple data zones, all data including definitions are data zone oriented, a super administrator is required\nto maintain each data zone's ",(0,a.kt)("inlineCode",{parentName:"p"},"startup settings"),"."),(0,a.kt)("p",null,"The following features are only for ",(0,a.kt)("inlineCode",{parentName:"p"},"Super Admin"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Data zone maintain,"),(0,a.kt)("li",{parentName:"ul"},"Data source maintain,"),(0,a.kt)("li",{parentName:"ul"},"External writer maintain.")),(0,a.kt)("p",null,"Following features are available for ",(0,a.kt)("inlineCode",{parentName:"p"},"Super Admin"),", but also for 'Admin', "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User maintain.")),(0,a.kt)("h3",{id:"data-zone-admin"},"Data Zone Admin"),(0,a.kt)("p",null,"Data Zone Admin is designed for configuring, monitoring data zone's development, deployment, etc."),(0,a.kt)("p",null,"Following features are for data zone admin:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Admin dashboard,"),(0,a.kt)("li",{parentName:"ul"},"User maintain,"),(0,a.kt)("li",{parentName:"ul"},"User Group maintain,"),(0,a.kt)("li",{parentName:"ul"},"Space maintain,"),(0,a.kt)("li",{parentName:"ul"},"Enumeration maintain,"),(0,a.kt)("li",{parentName:"ul"},"Topic maintain,"),(0,a.kt)("li",{parentName:"ul"},"Pipeline maintain,"),(0,a.kt)("li",{parentName:"ul"},"Pipeline Simulator,"),(0,a.kt)("li",{parentName:"ul"},"Monitor Logs Query,"),(0,a.kt)("li",{parentName:"ul"},"Monitor Rule maintain,"),(0,a.kt)("li",{parentName:"ul"},"Monitor Rule Statistics,"),(0,a.kt)("li",{parentName:"ul"},"Consanguinity Query,"),(0,a.kt)("li",{parentName:"ul"},"Assets Catalog maintain.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Data Zone Admin")," is also known as ",(0,a.kt)("inlineCode",{parentName:"p"},"Admin")," for short in following chapters if no otherwise specified as ",(0,a.kt)("inlineCode",{parentName:"p"},"Super Admin"),".")),(0,a.kt)("h2",{id:"centralized-definition-persistence"},"Centralized Definition Persistence"),(0,a.kt)("p",null,"Definition data in ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Watchmen"))," is stored centralized now. A definition data source must be configured in standard deployment, your can\nfind it in ",(0,a.kt)("a",{parentName:"p",href:"../../doll/data-service#meta-service"},"Doll/Data Service")," chapter."))}s.isMDXComponent=!0}}]);