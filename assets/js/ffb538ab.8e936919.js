"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[2179],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||i;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},47267:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(83117),n=(a(67294),a(3905));const i={id:"data-source",title:"Data Source",sidebar_position:20},o="Data Source",l={unversionedId:"web-client/admin/data-source",id:"version-16.1/web-client/admin/data-source",title:"Data Source",description:"Data sources are defined in data zone, it's a logical concept.",source:"@site/versioned_docs/version-16.1/020-web-client/010-admin/020-data-source.md",sourceDirName:"020-web-client/010-admin",slug:"/web-client/admin/data-source",permalink:"/docs/16.1/web-client/admin/data-source",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.1/020-web-client/010-admin/020-data-source.md",tags:[],version:"16.1",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1680953158,formattedLastUpdatedAt:"Apr 8, 2023",sidebarPosition:20,frontMatter:{id:"data-source",title:"Data Source",sidebar_position:20},sidebar:"sidebar",previous:{title:"Data Zone",permalink:"/docs/16.1/web-client/admin/data-zone"},next:{title:"External Writer",permalink:"/docs/16.1/web-client/admin/external-writer"}},d={},p=[{value:"Standard Tuple Page",id:"standard-tuple-page",level:2},{value:"Form Validation",id:"form-validation",level:2},{value:"Extend Data Source Supporting",id:"extend-data-source-supporting",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-source"},"Data Source"),(0,n.kt)("p",null,"Data sources are defined in data zone, it's a logical concept.",(0,n.kt)("br",{parentName:"p"}),"\n","Topics are stored in appointed data source."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Data source is available for ",(0,n.kt)("inlineCode",{parentName:"p"},"Super Admin")," only.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Centralized definition data source should be configured in deployment, not here.")),(0,n.kt)("h2",{id:"standard-tuple-page"},"Standard Tuple Page"),(0,n.kt)("p",null,"Data source use ",(0,n.kt)("a",{parentName:"p",href:"../standard-tuple-page"},"standard tuple page"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Edit Data Source",src:a(31578).Z,width:"3584",height:"1858"})),(0,n.kt)("p",null,"Extra parameter pair is added automatically, and will not be removed when name and value are cleared, empty pairs are dropped on saving."),(0,n.kt)("h2",{id:"form-validation"},"Form Validation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Data Source Code: required,"),(0,n.kt)("li",{parentName:"ul"},"Data Source Type: required. Currently, 4 types are built-in:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Oracle"),","),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MySQL")," & ",(0,n.kt)("inlineCode",{parentName:"li"},"MariaDB"),","),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MongoDB"),","),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MSSQL")))),(0,n.kt)("li",{parentName:"ul"},"Data Zone: required,"),(0,n.kt)("li",{parentName:"ul"},"Host: optional,"),(0,n.kt)("li",{parentName:"ul"},"Port: optional,"),(0,n.kt)("li",{parentName:"ul"},"Data Source Name: optional,"),(0,n.kt)("li",{parentName:"ul"},"Username: optional,"),(0,n.kt)("li",{parentName:"ul"},"Password: optional,"),(0,n.kt)("li",{parentName:"ul"},"Extra Parameter Name: required when value existed.")),(0,n.kt)("h2",{id:"extend-data-source-supporting"},"Extend Data Source Supporting"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"../../doll/data-service#extend-data-source-types"},"Here"))," for more details on supporting other data sources."))}u.isMDXComponent=!0},31578:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/data-source-33c3177fc17439bbc34cf8244be4f4a5.png"}}]);