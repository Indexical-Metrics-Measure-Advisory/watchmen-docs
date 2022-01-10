"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[9554],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),m=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=m(e.components);return i.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(t),u=a,f=s["".concat(d,".").concat(u)]||s[u]||c[u]||r;return t?i.createElement(f,o(o({ref:n},p),{},{components:t})):i.createElement(f,o({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=s;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<r;m++)o[m]=t[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}s.displayName="MDXCreateElement"},3304:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return s}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),o=["components"],l={id:"admin-wb-index",title:"Admin Workbench Index",sidebar_position:1},d="Admin Workbench",m={unversionedId:"web-client/admin/admin-wb-index",id:"web-client/admin/admin-wb-index",title:"Admin Workbench Index",description:"Admin Types",source:"@site/docs/web-client/admin/workbench-index.md",sourceDirName:"web-client/admin",slug:"/web-client/admin/admin-wb-index",permalink:"/watchmen-docs/docs/next/web-client/admin/admin-wb-index",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/docs/web-client/admin/workbench-index.md",tags:[],version:"current",lastUpdatedBy:"botlikes",lastUpdatedAt:1641793728,formattedLastUpdatedAt:"1/10/2022",sidebarPosition:1,frontMatter:{id:"admin-wb-index",title:"Admin Workbench Index",sidebar_position:1},sidebar:"sidebar",previous:{title:"Installation",permalink:"/watchmen-docs/docs/next/web-client/web-client-installation"},next:{title:"Data Zone",permalink:"/watchmen-docs/docs/next/web-client/admin/data-zone"}},p=[{value:"Admin Types",id:"admin-types",children:[{value:"Super Admin",id:"super-admin",children:[],level:3},{value:"Data Zone Admin",id:"data-zone-admin",children:[],level:3}],level:2},{value:"Centralized Definition Persistence",id:"centralized-definition-persistence",children:[],level:2}],c={toc:p};function s(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"admin-workbench"},"Admin Workbench"),(0,r.kt)("h2",{id:"admin-types"},"Admin Types"),(0,r.kt)("p",null,"There are 2 roles of admin:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Super Admin"),(0,r.kt)("li",{parentName:"ul"},"Data Zone Admin")),(0,r.kt)("h3",{id:"super-admin"},"Super Admin"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Watchmen"))," is designed for multiple data zones, all data including definitions are data zone oriented, a super administrator is required\nto maintain each data zone's ",(0,r.kt)("inlineCode",{parentName:"p"},"startup settings"),"."),(0,r.kt)("p",null,"The following features are only for ",(0,r.kt)("inlineCode",{parentName:"p"},"Super Admin"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data zone maintain,"),(0,r.kt)("li",{parentName:"ul"},"Data source maintain,"),(0,r.kt)("li",{parentName:"ul"},"External writer maintain.")),(0,r.kt)("p",null,"Following features are available for ",(0,r.kt)("inlineCode",{parentName:"p"},"Super Admin"),", but also for 'Admin', "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User maintain.")),(0,r.kt)("h3",{id:"data-zone-admin"},"Data Zone Admin"),(0,r.kt)("p",null,"Data Zone Admin is designed for configuring, monitoring data zone's development, deployment, etc."),(0,r.kt)("p",null,"Following features are for data zone admin:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Admin dashboard,"),(0,r.kt)("li",{parentName:"ul"},"User maintain,"),(0,r.kt)("li",{parentName:"ul"},"User Group maintain,"),(0,r.kt)("li",{parentName:"ul"},"Space maintain,"),(0,r.kt)("li",{parentName:"ul"},"Enumeration maintain,"),(0,r.kt)("li",{parentName:"ul"},"Topic maintain,"),(0,r.kt)("li",{parentName:"ul"},"Pipeline maintain,"),(0,r.kt)("li",{parentName:"ul"},"Pipeline Simulator,"),(0,r.kt)("li",{parentName:"ul"},"Monitor Logs Query,"),(0,r.kt)("li",{parentName:"ul"},"Monitor Rule maintain,"),(0,r.kt)("li",{parentName:"ul"},"Monitor Rule Statistics,"),(0,r.kt)("li",{parentName:"ul"},"Consanguinity Query,"),(0,r.kt)("li",{parentName:"ul"},"Assets Catalog maintain.")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"Data Zone Admin")," is also known as ",(0,r.kt)("inlineCode",{parentName:"p"},"Admin")," for short in following chapters if no otherwise specified as ",(0,r.kt)("inlineCode",{parentName:"p"},"Super Admin"),"."))),(0,r.kt)("h2",{id:"centralized-definition-persistence"},"Centralized Definition Persistence"),(0,r.kt)("p",null,"Definition data in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Watchmen"))," is stored centralized now. A definition data source must be configured in standard deployment, your can\nfind it in ",(0,r.kt)("a",{parentName:"p",href:"../../deployment/deploy-index"},"Deployment")," chapter."))}s.isMDXComponent=!0}}]);