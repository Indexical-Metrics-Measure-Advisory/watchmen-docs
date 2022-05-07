"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[2474],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78366:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],s={id:"migration",title:"Upgrade to 16",sidebar_position:50},c="Migration Scripts",l={unversionedId:"installation/migration",id:"version-16.1/installation/migration",title:"Upgrade to 16",description:"It's easy to upgrade _Watchmen_ from 15.x to 16. Find corresponding",source:"@site/versioned_docs/version-16.1/060-installation/050-migration.md",sourceDirName:"060-installation",slug:"/installation/migration",permalink:"/docs/16.1/installation/migration",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.1/060-installation/050-migration.md",tags:[],version:"16.1",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1651961860,formattedLastUpdatedAt:"5/7/2022",sidebarPosition:50,frontMatter:{id:"migration",title:"Upgrade to 16",sidebar_position:50},sidebar:"sidebar",previous:{title:"Integration",permalink:"/docs/16.1/installation/integration"},next:{title:"License",permalink:"/docs/16.1/appendix/license"}},p={},u=[],m={toc:u};function d(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migration-scripts"},"Migration Scripts"),(0,a.kt)("p",null,"It's easy to upgrade ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Watchmen"))," from 15.x to 16. Find corresponding\nscripts ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-migration/v15.x-to-v16/meta-scripts"},"here")),"\n, and follow the steps,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Backup your metadata database,"),(0,a.kt)("li",{parentName:"ul"},"Execute migration scripts on your metadata database,"),(0,a.kt)("li",{parentName:"ul"},"Verify everything is OK,"),(0,a.kt)("li",{parentName:"ul"},"To find scripts of system topics on corresponding storage module, execute them on topic storage,",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Visit ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"scripts"},"here"))," for more details,"))),(0,a.kt)("li",{parentName:"ul"},"Assign data sources to those system topics,"),(0,a.kt)("li",{parentName:"ul"},"Verify everything is OK,"),(0,a.kt)("li",{parentName:"ul"},"Bingo!")))}d.isMDXComponent=!0}}]);