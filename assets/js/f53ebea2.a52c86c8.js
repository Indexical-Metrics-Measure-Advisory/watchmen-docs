"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[654],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>u});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(i),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return i?n.createElement(f,o(o({ref:t},c),{},{components:i})):n.createElement(f,o({ref:t},c))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},65699:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=i(83117),a=(i(67294),i(3905));const r={id:"simulator",title:"Pipeline Simulator",sidebar_position:100},o="Pipeline Simulator",l={unversionedId:"web-client/admin/simulator",id:"version-16.1/web-client/admin/simulator",title:"Pipeline Simulator",description:"Pipeline simulator is designed for verifying pipeline rapidly. It is in frontend only, implemented in Javascript. Limited by Javascript in",source:"@site/versioned_docs/version-16.1/020-web-client/010-admin/100-simulator.md",sourceDirName:"020-web-client/010-admin",slug:"/web-client/admin/simulator",permalink:"/docs/16.1/web-client/admin/simulator",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.1/020-web-client/010-admin/100-simulator.md",tags:[],version:"16.1",lastUpdatedBy:"botlikes",lastUpdatedAt:1680853926,formattedLastUpdatedAt:"Apr 7, 2023",sidebarPosition:100,frontMatter:{id:"simulator",title:"Pipeline Simulator",sidebar_position:100},sidebar:"sidebar",previous:{title:"Pipeline",permalink:"/docs/16.1/web-client/admin/pipeline"},next:{title:"Topic Profile",permalink:"/docs/16.1/web-client/admin/topic-profile"}},s={},p=[],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pipeline-simulator"},"Pipeline Simulator"),(0,a.kt)("p",null,"Pipeline simulator is designed for verifying pipeline rapidly. It is in frontend only, implemented in Javascript. Limited by Javascript in\nbrowser, simulator runs on single process, which is the only different with doll. Be aware of this is very important, simulator is to test\nand verify the pipeline logic, not concurrency."),(0,a.kt)("p",null,"Now let's learn about how to test pipeline, by a very simple case in simulator. Firstly, select a pipeline where your test case starts from,"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simulator Pick Pipeline",src:i(54532).Z,width:"1364",height:"372"})),(0,a.kt)("p",null,"Also, test case can be started from a topic,"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simulator Pick Topic",src:i(54626).Z,width:"1002",height:"380"})),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Next")," button, pipelines related are list,"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simulator Prepare Data",src:i(16106).Z,width:"1868",height:"1162"})),(0,a.kt)("p",null,"Click the number button of topic, there is a dialog for topic data,"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simulator Topic Data",src:i(61945).Z,width:"2930",height:"1718"})),(0,a.kt)("p",null,"Data can be added row by row, or uploaded by file."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Uploaded rows are appended, don't worry about the existing rows.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Object/Array will not be split to factor in topic data preparing, simply describe theme by using ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"[]"),", it will be detected\nautomatically.")),(0,a.kt)("p",null,"Select pipelines to be tested,"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simulator Pipeline Selected",src:i(21726).Z,width:"1336",height:"854"})),(0,a.kt)("p",null,"In this case, we select one pipeline. You can select any pipeline you want, the only limitation is pipeline cannot be selected when previous\none is not selected."),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Next")," button, now we are ready to run the test,"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simulator Ready to Test",src:i(66590).Z,width:"1544",height:"810"})),(0,a.kt)("p",null,"Before run the test, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Memory Data")," button to view data in-memory,"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simulator Memory Data",src:i(34629).Z,width:"2944",height:"1724"})),(0,a.kt)("p",null,"Exactly same as we defined before, now click ",(0,a.kt)("inlineCode",{parentName:"p"},"Play")," button,"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simulator Run Successfully",src:i(43138).Z,width:"1844",height:"756"})),(0,a.kt)("p",null,"Everything seems OK, you can click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Memory Data")," button to view data in-memory,"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simulator Memory Data after Run",src:i(73535).Z,width:"2942",height:"1710"})),(0,a.kt)("p",null,"All date changing are list in dialog."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Case data can be exported by click ",(0,a.kt)("inlineCode",{parentName:"p"},"Export Case Data"),", and it can be run by CLI in your CI, we will discuss this part\nin ",(0,a.kt)("a",{parentName:"p",href:"../../doll/doll-index"},"Doll"),".")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We highly recommend testing every pipeline by simulator before deploy them to environment.")),(0,a.kt)("p",null,"There are more helpful features from pipeline simulator waiting for you to discover and hope enjoy as you wish."))}d.isMDXComponent=!0},73535:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/simulator-memory-data-after-run-9843ceb7294a2ccca2db527a5f6b8e18.png"},34629:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/simulator-memory-data-76ebae455786162ad459634eed570f1a.png"},54532:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/simulator-pick-pipeline-0c0f7f501b4f038595fcff4f5b9858f1.png"},54626:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/simulator-pick-topic-af5b310d40e3e8e15bfba7711386ea07.png"},21726:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/simulator-pipeline-selected-9f540789d1cf6f13055acbc580400351.png"},16106:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/simulator-prepare-data-39a945a33d312641c688438575c6e1e2.png"},66590:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/simulator-ready-to-run-5bbbe10dc43bfeeaa577e71c835fdea0.png"},43138:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/simulator-run-successfully-912361866967e50661c8c769fbb05af2.png"},61945:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/simulator-topic-data-523544f1a490027c46e142115df6504f.png"}}]);