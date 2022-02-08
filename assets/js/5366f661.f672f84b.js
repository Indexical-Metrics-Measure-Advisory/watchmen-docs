"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[8407],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,b=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7656:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={id:"dqc-wb-index",title:"DQC Workbench Index",sidebar_position:1},d="DQC Workbench",l={unversionedId:"web-client/dqc/dqc-wb-index",id:"web-client/dqc/dqc-wb-index",title:"DQC Workbench Index",description:"DQC (Data Quality Center) workbench includes a group of features to",source:"@site/docs/web-client/dqc/workbench-index.md",sourceDirName:"web-client/dqc",slug:"/web-client/dqc/dqc-wb-index",permalink:"/watchmen-docs/docs/next/web-client/dqc/dqc-wb-index",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/docs/web-client/dqc/workbench-index.md",tags:[],version:"current",lastUpdatedBy:"luke0623",lastUpdatedAt:1644310221,formattedLastUpdatedAt:"2/8/2022",sidebarPosition:1,frontMatter:{id:"dqc-wb-index",title:"DQC Workbench Index",sidebar_position:1},sidebar:"sidebar",previous:{title:"Dashboard",permalink:"/watchmen-docs/docs/next/web-client/console/dashboard"},next:{title:"Runtime Statistics",permalink:"/watchmen-docs/docs/next/web-client/dqc/run-statistics"}},s=[{value:"Disable DQC",id:"disable-dqc",children:[],level:2}],p={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dqc-workbench"},"DQC Workbench"),(0,a.kt)("p",null,"DQC (Data Quality Center) workbench includes a group of features to"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Inspect relationships between tuples,"),(0,a.kt)("li",{parentName:"ul"},"Define monitor rules of topics,"),(0,a.kt)("li",{parentName:"ul"},"View runtime statistics.")),(0,a.kt)("p",null,"Here, we introduce them one by one."),(0,a.kt)("h2",{id:"disable-dqc"},"Disable DQC"),(0,a.kt)("p",null,"DQC can be disabled by building, it is enabled only when ",(0,a.kt)("inlineCode",{parentName:"p"},"REACT_APP_DQC_ENABLED=true")," (by default it is not), set it to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to\nenable/disable DQC."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Find ",(0,a.kt)("inlineCode",{parentName:"p"},"REACT_APP_DQC_ENABLED")," in ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file."))),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Topic profile also will be disabled when DQC is disabled."))))}u.isMDXComponent=!0}}]);