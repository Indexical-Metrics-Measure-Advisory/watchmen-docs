"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[8628],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72864:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],s={id:"migration",title:"Upgrade to 16",sidebar_position:50},c="Migration Scripts",l={unversionedId:"installation/migration",id:"installation/migration",title:"Upgrade to 16",description:"It's easy to upgrade _Watchmen_ from 15.x to 16. Find corresponding",source:"@site/docs/060-installation/050-migration.md",sourceDirName:"060-installation",slug:"/installation/migration",permalink:"/docs/next/installation/migration",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/docs/060-installation/050-migration.md",tags:[],version:"current",lastUpdatedBy:"botlikes",lastUpdatedAt:1656049883,formattedLastUpdatedAt:"6/24/2022",sidebarPosition:50,frontMatter:{id:"migration",title:"Upgrade to 16",sidebar_position:50},sidebar:"sidebar",previous:{title:"Integration",permalink:"/docs/next/installation/integration"},next:{title:"License",permalink:"/docs/next/appendix/license"}},p={},u=[],m={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migration-scripts"},"Migration Scripts"),(0,i.kt)("p",null,"It's easy to upgrade ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Watchmen"))," from 15.x to 16. Find corresponding\nscripts ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-migration/v15.x-to-v16/meta-scripts"},"here")),"\n, and follow the steps,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Backup your metadata database,"),(0,i.kt)("li",{parentName:"ul"},"Execute migration scripts on your metadata database,"),(0,i.kt)("li",{parentName:"ul"},"Verify everything is OK,"),(0,i.kt)("li",{parentName:"ul"},"To find scripts of system topics on corresponding storage module, execute them on topic storage,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Visit ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"scripts"},"here"))," for more details,"))),(0,i.kt)("li",{parentName:"ul"},"Assign data sources to those system topics,"),(0,i.kt)("li",{parentName:"ul"},"Verify everything is OK,"),(0,i.kt)("li",{parentName:"ul"},"Bingo!")))}d.isMDXComponent=!0}}]);