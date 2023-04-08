"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[9930],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},37941:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const i={id:"external-writer",title:"External Writer",sidebar_position:30},l="External Writer",o={unversionedId:"web-client/admin/external-writer",id:"version-15.2.14/web-client/admin/external-writer",title:"External Writer",description:"External writer is used in pipeline, write data to external.",source:"@site/versioned_docs/version-15.2.14/web-client/admin/external-writer.md",sourceDirName:"web-client/admin",slug:"/web-client/admin/external-writer",permalink:"/docs/15.2.14/web-client/admin/external-writer",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-15.2.14/web-client/admin/external-writer.md",tags:[],version:"15.2.14",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1680953158,formattedLastUpdatedAt:"Apr 8, 2023",sidebarPosition:30,frontMatter:{id:"external-writer",title:"External Writer",sidebar_position:30},sidebar:"sidebar",previous:{title:"Data Source",permalink:"/docs/15.2.14/web-client/admin/data-source"},next:{title:"User",permalink:"/docs/15.2.14/web-client/admin/user"}},d={},p=[{value:"Standard Tuple Page",id:"standard-tuple-page",level:2},{value:"Form Validation",id:"form-validation",level:2},{value:"Model",id:"model",level:2},{value:"Built-in Writers",id:"built-in-writers",level:2},{value:"Extend External Writer Supporting",id:"extend-external-writer-supporting",level:2}],s={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"external-writer"},"External Writer"),(0,a.kt)("p",null,"External writer is used in pipeline, write data to external."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"External writer is available for ",(0,a.kt)("inlineCode",{parentName:"p"},"Super Admin")," only.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Implementation external writer must be packaged and deployed with doll instance.")),(0,a.kt)("h2",{id:"standard-tuple-page"},"Standard Tuple Page"),(0,a.kt)("p",null,"External writer use ",(0,a.kt)("a",{parentName:"p",href:"../standard-tuple-page"},"standard tuple page"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Edit External Writer",src:r(80947).Z,width:"3584",height:"1858"})),(0,a.kt)("h2",{id:"form-validation"},"Form Validation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"External Writer Code: required,"),(0,a.kt)("li",{parentName:"ul"},"External Writer Type: required. Currently, 2 types are built-in:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Standard Embedded Writer,"),(0,a.kt)("li",{parentName:"ul"},"Standard ElasticSearch Writer ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("inlineCode",{parentName:"em"},"(under construction)"))),","))),(0,a.kt)("li",{parentName:"ul"},"Data Zone: required,"),(0,a.kt)("li",{parentName:"ul"},"Url: optional,"),(0,a.kt)("li",{parentName:"ul"},"Personal Access Token: optional. Signed by another system.")),(0,a.kt)("h2",{id:"model"},"Model"),(0,a.kt)("p",null,"Find external writer model ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../../tuples/external-writer"},"here")),"."),(0,a.kt)("h2",{id:"built-in-writers"},"Built-in Writers"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../../doll/built-in/built-in-external-writers"},"Here"))," for more details on using built-in external writers."),(0,a.kt)("h2",{id:"extend-external-writer-supporting"},"Extend External Writer Supporting"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../../doll/extend/extend-external-writer"},"Here"))," for more details to extend your own external writers."))}u.isMDXComponent=!0},80947:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/external-writer-4fbe4645dba3111a85b16d1b4ebda17e.png"}}]);