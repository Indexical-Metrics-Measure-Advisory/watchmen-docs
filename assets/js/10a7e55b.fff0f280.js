"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[5636],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(r),m=i,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(g,o(o({ref:e},u),{},{components:r})):n.createElement(g,o({ref:e},u))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1924:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={id:"tutorial-getting-started-quick-view",title:"Quick View",sidebar_position:2},c=void 0,s={unversionedId:"getting-started/tutorial-getting-started-quick-view",id:"getting-started/tutorial-getting-started-quick-view",title:"Quick View",description:"Quick Start",source:"@site/tutorial/getting-started/002-quick-view.md",sourceDirName:"getting-started",slug:"/getting-started/tutorial-getting-started-quick-view",permalink:"/tutorial/getting-started/tutorial-getting-started-quick-view",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/tutorial/getting-started/002-quick-view.md",tags:[],version:"current",lastUpdatedBy:"botlikes",lastUpdatedAt:1647928616,formattedLastUpdatedAt:"3/22/2022",sidebarPosition:2,frontMatter:{id:"tutorial-getting-started-quick-view",title:"Quick View",sidebar_position:2},sidebar:"sidebar",previous:{title:"Intro",permalink:"/tutorial/getting-started/tutorial-getting-started-intro"},next:{title:"Congratulations!",permalink:"/tutorial/getting-started/congratulations"}},u=[{value:"Quick Start",id:"quick-start",children:[{value:"Installing Watchmen Platform with docker-compose file",id:"installing-watchmen-platform-with-docker-compose-file",children:[],level:3}],level:2},{value:"If You Get Stuck",id:"if-you-get-stuck",children:[],level:2}],p={toc:u};function d(t){var e=t.components,r=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The deployment method provided in this guide is ONLY FOR quick start, NOT FOR production")),(0,a.kt)("h3",{id:"installing-watchmen-platform-with-docker-compose-file"},"Installing Watchmen Platform with docker-compose file"),(0,a.kt)("p",null,"To install Watchmen Platform"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone repository  https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-quick-start\n")),(0,a.kt)("p",null,"for mysql"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose -f docker-compose-mysql.yml up\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open browser on ",(0,a.kt)("a",{parentName:"li",href:"http://localhost:3030"},"http://localhost:3030"),","),(0,a.kt)("li",{parentName:"ul"},"Signed in system by ",(0,a.kt)("inlineCode",{parentName:"li"},"imma-super/abc1234"),","),(0,a.kt)("li",{parentName:"ul"},"Navigate to the pipeline page and start your first pipeline.")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The latest Chrome is recommended."))),(0,a.kt)("h2",{id:"if-you-get-stuck"},"If You Get Stuck"),(0,a.kt)("p",null,"If you have questions on getting started, we'd love to hear from you:"),(0,a.kt)("p",null,"send email to ",(0,a.kt)("a",{parentName:"p",href:"mailto:tech-support@mail.matrdata.com"},"tech-support@mail.matrdata.com")))}d.isMDXComponent=!0}}]);