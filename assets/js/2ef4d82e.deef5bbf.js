"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[9657],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4602:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"simulator",title:"Pipeline Simulator",sidebar_position:100},s="Pipeline Simulator",p={unversionedId:"web-client/admin/simulator",id:"version-15.2.14/web-client/admin/simulator",title:"Pipeline Simulator",description:"Pipeline simulator is designed for verifying pipeline rapidly. It is in frontend only, implemented in Javascript. Limited by Javascript in",source:"@site/versioned_docs/version-15.2.14/web-client/admin/simulator.md",sourceDirName:"web-client/admin",slug:"/web-client/admin/simulator",permalink:"/docs/web-client/admin/simulator",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-15.2.14/web-client/admin/simulator.md",tags:[],version:"15.2.14",lastUpdatedBy:"botlikes",lastUpdatedAt:1644913630,formattedLastUpdatedAt:"2/15/2022",sidebarPosition:100,frontMatter:{id:"simulator",title:"Pipeline Simulator",sidebar_position:100},sidebar:"sidebar",previous:{title:"Pipeline",permalink:"/docs/web-client/admin/pipeline"},next:{title:"Topic Profile",permalink:"/docs/web-client/admin/topic-profile"}},c=[],m={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pipeline-simulator"},"Pipeline Simulator"),(0,r.kt)("p",null,"Pipeline simulator is designed for verifying pipeline rapidly. It is in frontend only, implemented in Javascript. Limited by Javascript in\nbrowser, simulator runs on single process, which is the only different with doll. Be aware of this is very important, simulator is to test\nand verify the pipeline logic, not concurrency."),(0,r.kt)("p",null,"Now let's learn about how to test pipeline, by a very simple case in simulator. Firstly, select a pipeline where your test case starts from,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Simulator Pick Pipeline",src:n(7260).Z})),(0,r.kt)("p",null,"Also, test case can be started from a topic,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Simulator Pick Topic",src:n(7513).Z})),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Next")," button, pipelines related are list,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Simulator Prepare Data",src:n(2062).Z})),(0,r.kt)("p",null,"Click the number button of topic, there is a dialog for topic data,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Simulator Topic Data",src:n(3215).Z})),(0,r.kt)("p",null,"Data can be added row by row, or uploaded by file."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Uploaded rows are appended, don't worry about the existing rows."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Object/Array will not be split to factor in topic data preparing, simply describe theme by using ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),", it will be detected\nautomatically."))),(0,r.kt)("p",null,"Select pipelines to be tested,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Simulator Pipeline Selected",src:n(3484).Z})),(0,r.kt)("p",null,"In this case, we select one pipeline. You can select any pipeline you want, the only limitation is pipeline cannot be selected when previous\none is not selected."),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Next")," button, now we are ready to run the test,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Simulator Ready to Test",src:n(7827).Z})),(0,r.kt)("p",null,"Before run the test, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Data")," button to view data in-memory,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Simulator Memory Data",src:n(4807).Z})),(0,r.kt)("p",null,"Exactly same as we defined before, now click ",(0,r.kt)("inlineCode",{parentName:"p"},"Play")," button,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Simulator Run Successfully",src:n(2671).Z})),(0,r.kt)("p",null,"Everything seems OK, you can click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Data")," button to view data in-memory,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Simulator Memory Data after Run",src:n(7714).Z})),(0,r.kt)("p",null,"All date changing are list in dialog."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Case data can be exported by click ",(0,r.kt)("inlineCode",{parentName:"p"},"Export Case Data"),", and it can be run by CLI in your CI, we will discuss this part\nin ",(0,r.kt)("a",{parentName:"p",href:"../../doll/doll-index"},"Doll"),"."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We highly recommend testing every pipeline by simulator before deploy them to environment."))),(0,r.kt)("p",null,"There are more helpful features from pipeline simulator waiting for you to discover and hope enjoy as you wish."))}d.isMDXComponent=!0},7714:function(e,t,n){t.Z=n.p+"assets/images/simulator-memory-data-after-run-9843ceb7294a2ccca2db527a5f6b8e18.png"},4807:function(e,t,n){t.Z=n.p+"assets/images/simulator-memory-data-76ebae455786162ad459634eed570f1a.png"},7260:function(e,t,n){t.Z=n.p+"assets/images/simulator-pick-pipeline-0c0f7f501b4f038595fcff4f5b9858f1.png"},7513:function(e,t,n){t.Z=n.p+"assets/images/simulator-pick-topic-af5b310d40e3e8e15bfba7711386ea07.png"},3484:function(e,t,n){t.Z=n.p+"assets/images/simulator-pipeline-selected-9f540789d1cf6f13055acbc580400351.png"},2062:function(e,t,n){t.Z=n.p+"assets/images/simulator-prepare-data-39a945a33d312641c688438575c6e1e2.png"},7827:function(e,t,n){t.Z=n.p+"assets/images/simulator-ready-to-run-5bbbe10dc43bfeeaa577e71c835fdea0.png"},2671:function(e,t,n){t.Z=n.p+"assets/images/simulator-run-successfully-912361866967e50661c8c769fbb05af2.png"},3215:function(e,t,n){t.Z=n.p+"assets/images/simulator-topic-data-523544f1a490027c46e142115df6504f.png"}}]);