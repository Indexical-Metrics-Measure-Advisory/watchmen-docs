"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[1136],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},72768:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(83117),a=(r(67294),r(3905));const l={slug:"v16.2.4-release",title:"v16.2.4 Released",authors:"The Watchmen Team",tags:["watchmen","v16.2.4"]},o=void 0,i={permalink:"/blog/v16.2.4-release",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/blog/2022-08-29-v16.2.4-deployed.md",source:"@site/blog/2022-08-29-v16.2.4-deployed.md",title:"v16.2.4 Released",description:"V16.2.4 Released!",date:"2022-08-29T00:00:00.000Z",formattedDate:"August 29, 2022",tags:[{label:"watchmen",permalink:"/blog/tags/watchmen"},{label:"v16.2.4",permalink:"/blog/tags/v-16-2-4"}],readingTime:.57,hasTruncateMarker:!1,authors:[{name:"The Watchmen Team",title:"Organization",url:"https://github.com/Indexical-Metrics-Measure-Advisory",imageURL:"https://github.com/Indexical-Metrics-Measure-Advisory.png",key:"The Watchmen Team"}],frontMatter:{slug:"v16.2.4-release",title:"v16.2.4 Released",authors:"The Watchmen Team",tags:["watchmen","v16.2.4"]},prevItem:{title:"v16.3.7 Released",permalink:"/blog/v16.3.7-release"},nextItem:{title:"v16.3.6 Released",permalink:"/blog/v16.3.6-release"}},c={authorsImageUrls:[void 0]},s=[{value:"\ud83d\udcdc Enhancement",id:"-enhancement",level:2},{value:"\ud83d\udd27 Fixed",id:"-fixed",level:2},{value:"\ud83d\udce6 Images",id:"-images",level:2}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"V16.2.4 Released!"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"-enhancement"},"\ud83d\udcdc Enhancement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support reverse aggregate in pipeline.")),(0,a.kt)("h2",{id:"-fixed"},"\ud83d\udd27 Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clear subject id and report id when connect template connected space,"),(0,a.kt)("li",{parentName:"ul"},"Incorrect topic id of mapping source,"),(0,a.kt)("li",{parentName:"ul"},"Incorrect operator on entity criteria expression building for subject,"),(0,a.kt)("li",{parentName:"ul"},"Incorrect reference of parameter in build_comparison,  "),(0,a.kt)("li",{parentName:"ul"},"Ignore parse right part of expression where operator is empty or not-empty,"),(0,a.kt)("li",{parentName:"ul"},"Connection leak on rerun topic data,"),(0,a.kt)("li",{parentName:"ul"},"Incorrect check return value on do insert function, will not do retry again,"),(0,a.kt)("li",{parentName:"ul"},"Add error log for easier to locate insert sql data issue.")),(0,a.kt)("h2",{id:"-images"},"\ud83d\udce6 Images"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/pkgs/container/watchmen-web-client/39463095?tag=16.2.4"},"Web client")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/pkgs/container/watchmen-matryoshka-doll-mysql/39463212?tag=16.2.4"},"Doll Mysql")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/pkgs/container/watchmen-matryoshka-dqc-mysql/39463271?tag=16.2.4"},"DQC Mysql"))),(0,a.kt)("p",null,"Find other storage versions ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/Indexical-Metrics-Measure-Advisory/packages?repo_name=watchmen"},"here"),"."))}m.isMDXComponent=!0}}]);