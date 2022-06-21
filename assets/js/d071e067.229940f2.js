"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[3154],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},852:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],s={id:"console-subject",title:"Subject",sidebar_position:30},c="Subject",l={unversionedId:"web-client/console/console-subject",id:"web-client/console/console-subject",title:"Subject",description:"Subject is the base of data analysis on certain perspective, let's follow this chapter to build a subject.",source:"@site/docs/020-web-client/020-console/030-subject.md",sourceDirName:"020-web-client/020-console",slug:"/web-client/console/console-subject",permalink:"/docs/next/web-client/console/console-subject",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/docs/020-web-client/020-console/030-subject.md",tags:[],version:"current",lastUpdatedBy:"botlikes",lastUpdatedAt:1655797159,formattedLastUpdatedAt:"6/21/2022",sidebarPosition:30,frontMatter:{id:"console-subject",title:"Subject",sidebar_position:30},sidebar:"sidebar",previous:{title:"Connected-Space",permalink:"/docs/next/web-client/console/console-connected-space"},next:{title:"Report & Chart",permalink:"/docs/next/web-client/console/console-report"}},p={},d=[{value:"Structure",id:"structure",level:2},{value:"Dataset",id:"dataset",level:2},{value:"Reports",id:"reports",level:2},{value:"Header",id:"header",level:2}],m={toc:d};function u(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"subject"},"Subject"),(0,r.kt)("p",null,"Subject is the base of data analysis on certain perspective, let's follow this chapter to build a subject."),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,"Firstly, define structure of subject. Topics included in connected-space are available here, simply follow the wizard,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step 1, pick topics,"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Pick Topics",src:n(87035).Z,width:"3584",height:"1854"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step 2, define columns,"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Define Columns",src:n(97416).Z,width:"3584",height:"1852"})),(0,r.kt)("p",{parentName:"li"},"Column can be from,"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"a topic directly,"),(0,r.kt)("li",{parentName:"ul"},"or a constant value,"),(0,r.kt)("li",{parentName:"ul"},"or computed by functions.")),(0,r.kt)("p",{parentName:"li"},"There are several functions are supported for computation,"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Compute Functions",src:n(78642).Z,width:"1318",height:"732"})),(0,r.kt)("p",{parentName:"li"},"Column also can be aggregated by one of ",(0,r.kt)("inlineCode",{parentName:"p"},"count"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sum"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"avg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"min"),". If any column is configured as aggregation, dataset\nshould be grouped by other non-aggregation columns."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Give a friendly name to each column."))),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Compute functions supported by pipeline also are supported by subject.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step 3, define filters,"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Define Filters",src:n(97954).Z,width:"3576",height:"740"})),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Filters are applied for each report in this subject.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step 4, define joins when two or more topics included,"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Define Joins",src:n(88461).Z,width:"3578",height:"672"})),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Joins are not needed when only one topic is used in subject."))),(0,r.kt)("p",{parentName:"li"},"Depending on type of join, data searched out contains"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Intersection of both sides when it is ",(0,r.kt)("inlineCode",{parentName:"li"},"Exactly Match"),","),(0,r.kt)("li",{parentName:"ul"},"Left side and right side in intersection when ",(0,r.kt)("inlineCode",{parentName:"li"},"Left Side Prioritized"),","),(0,r.kt)("li",{parentName:"ul"},"Right side and left side in intersection when ",(0,r.kt)("inlineCode",{parentName:"li"},"Right Side Prioritized"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Finally, view definition dsl,"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Definition DSL",src:n(1089).Z,width:"2756",height:"1014"})),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Red question mark means something incorrect."))))),(0,r.kt)("h2",{id:"dataset"},"Dataset"),(0,r.kt)("p",null,"After structure defined, move to dataset page,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dataset",src:n(92451).Z,width:"3584",height:"1854"})),(0,r.kt)("p",null,"It is a pagination grid, page switcher is on top-right corner. Check data, make sure they are what you imaged."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There is a count limitation for download all data, check ",(0,r.kt)("a",{parentName:"p",href:"../../doll/inquiry-service"},"Doll")," for more details."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Columns can be resized, sorted, drag-and-dropped and locked to left."))),(0,r.kt)("h2",{id:"reports"},"Reports"),(0,r.kt)("p",null,"Everything is OK now, let's goto reports page,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Reports",src:n(52218).Z,width:"2010",height:"666"})),(0,r.kt)("h2",{id:"header"},"Header"),(0,r.kt)("p",null,"By click header buttons,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Back to connected-space,"),(0,r.kt)("li",{parentName:"ul"},"Switch between structure/dataset/reports of current subject,"),(0,r.kt)("li",{parentName:"ul"},"Create new report,"),(0,r.kt)("li",{parentName:"ul"},"Switch to another subject,"),(0,r.kt)("li",{parentName:"ul"},"Delete current one.")),(0,r.kt)("p",null,"And change subject name by click name part in header."))}u.isMDXComponent=!0},78642:function(e,t,n){t.Z=n.p+"assets/images/subject-column-computed-6a4c7104a953e7abcbc1e1f0ceda2f0e.png"},92451:function(e,t,n){t.Z=n.p+"assets/images/subject-dataset-8056870998aa370713a799f7fecb423f.png"},97416:function(e,t,n){t.Z=n.p+"assets/images/subject-define-columns-ef68afe641ead49e03bea997c97f3de9.png"},1089:function(e,t,n){t.Z=n.p+"assets/images/subject-define-dsl-5a7315d8ebc2b7ef738477887f7917d4.png"},97954:function(e,t,n){t.Z=n.p+"assets/images/subject-define-filters-e9e450c73ee360c7452e08cb02c79015.png"},88461:function(e,t,n){t.Z=n.p+"assets/images/subject-define-joins-9ecd64c668cba5ad4bb1882a68c11e8c.png"},87035:function(e,t,n){t.Z=n.p+"assets/images/subject-pick-topics-2b56dfe6829c25354bd92e9aee7d493b.png"},52218:function(e,t,n){t.Z=n.p+"assets/images/subject-reports-15748ad6ac3b74f3e781cb8348c7599e.png"}}]);