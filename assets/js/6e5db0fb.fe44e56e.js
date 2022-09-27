"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[407],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(i),u=a,v=s["".concat(c,".").concat(u)]||s[u]||m[u]||r;return i?n.createElement(v,o(o({ref:t},p),{},{components:i})):n.createElement(v,o({ref:t},p))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}s.displayName="MDXCreateElement"},58287:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=i(83117),a=(i(67294),i(3905));const r={id:"achievement",title:"Achievement",sidebar_position:40},o="Achievement",l={unversionedId:"web-client/indicator/achievement",id:"version-16.3/web-client/indicator/achievement",title:"Achievement",description:"Achievement is based on multiple indicators.",source:"@site/versioned_docs/version-16.3/020-web-client/040-indicator/040-achievement.md",sourceDirName:"020-web-client/040-indicator",slug:"/web-client/indicator/achievement",permalink:"/docs/16.3/web-client/indicator/achievement",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.3/020-web-client/040-indicator/040-achievement.md",tags:[],version:"16.3",lastUpdatedBy:"botlikes",lastUpdatedAt:1664269639,formattedLastUpdatedAt:"Sep 27, 2022",sidebarPosition:40,frontMatter:{id:"achievement",title:"Achievement",sidebar_position:40},sidebar:"sidebar",previous:{title:"Inspection",permalink:"/docs/16.3/web-client/indicator/inspection"},next:{title:"Objective Analysis",permalink:"/docs/16.3/web-client/indicator/objective-analysis"}},c={},d=[{value:"Common Time Criteria",id:"common-time-criteria",level:2},{value:"Pre-defined Indicator",id:"pre-defined-indicator",level:2},{value:"Naming &amp; Criteria Apply",id:"naming--criteria-apply",level:3},{value:"Aggregation &amp; Formula",id:"aggregation--formula",level:3},{value:"Supported Variables",id:"supported-variables",level:4},{value:"Supported Math Functions",id:"supported-math-functions",level:4},{value:"Compute Indicator",id:"compute-indicator",level:2},{value:"Formula",id:"formula",level:3},{value:"Supported Variables",id:"supported-variables-1",level:4},{value:"Append or Remove indicator",id:"append-or-remove-indicator",level:2},{value:"Total Score",id:"total-score",level:2}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"achievement"},"Achievement"),(0,a.kt)("p",null,"Achievement is based on multiple indicators."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Achievement",src:i(51955).Z,width:"3582",height:"1852"})),(0,a.kt)("p",null,"There are 4 parts of an achievement,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Common time criteria,"),(0,a.kt)("li",{parentName:"ul"},"Pre-defined indicators,"),(0,a.kt)("li",{parentName:"ul"},"Computed indicators,"),(0,a.kt)("li",{parentName:"ul"},"Total score.")),(0,a.kt)("h2",{id:"common-time-criteria"},"Common Time Criteria"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Common Criteria",src:i(20602).Z,width:"3006",height:"766"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define time criteria, which can be referred in pre-defined indicator. By year or By year + month is supported,"),(0,a.kt)("li",{parentName:"ul"},"Define whether the previous period data should be applied or not. An increment ratio will be calculated automatically when previous period\napplied.")),(0,a.kt)("h2",{id:"pre-defined-indicator"},"Pre-defined Indicator"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pre-defined Indicator",src:i(26716).Z,width:"3006",height:"766"})),(0,a.kt)("p",null,"All indicators pre-defined can be imported into achievement."),(0,a.kt)("h3",{id:"naming--criteria-apply"},"Naming & Criteria Apply"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pre-defined Indicator 2",src:i(4822).Z,width:"2416",height:"728"})),(0,a.kt)("p",null,"Click the criteria node, to"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define indicator name in this achievement,"),(0,a.kt)("li",{parentName:"ul"},"Apply criteria into indicator,",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"year")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"month")," can be used in criteria value, which defined in common criteria,"),(0,a.kt)("li",{parentName:"ul"},"Use pre-defined bucket to filter, or manually key-in.")))),(0,a.kt)("h3",{id:"aggregation--formula"},"Aggregation & Formula"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pre-defined Indicator 3",src:i(80953).Z,width:"2404",height:"846"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Choose aggregation arithmetic,"),(0,a.kt)("li",{parentName:"ul"},"Write formula which to compute score of this indicator.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Formula syntax is based on Javascript.")),(0,a.kt)("h4",{id:"supported-variables"},"Supported Variables"),(0,a.kt)("p",null,"Variables are computed before compute score using formula,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"c"),": value of indicator in current time period,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"p"),": value of indicator in previous time period,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"r"),": value of increment ratio.")),(0,a.kt)("h4",{id:"supported-math-functions"},"Supported Math Functions"),(0,a.kt)("p",null,"All properties and methods on ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math"},"Math")," are supported.\nFor example,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let x = abs(c); // assign aboslute value of current indicator value to variable x\n")),(0,a.kt)("p",null,"And additional functions,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// when r is less than 0.1, returns 10\n// when r is greater than 0.8, returns 50\n// when r is between 0.1 and 0.8, returns 10 + (50 - 10) * (r - 0.1) / (0.8 - 0.1)\ninterpolation(r, 0.1, 10, 0.8, 50); \n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"return")," keyword is not required when there is only one line of formula, otherwise use ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," to return the computed score.")),(0,a.kt)("h2",{id:"compute-indicator"},"Compute Indicator"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Compute Indicator",src:i(84979).Z,width:"3006",height:"766"})),(0,a.kt)("p",null,"Compute indicators are designed for do manually calculation base on results of other indicators."),(0,a.kt)("h3",{id:"formula"},"Formula"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Compute Indicator 2",src:i(16753).Z,width:"2328",height:"1030"})),(0,a.kt)("p",null,"Write formula which to compute score of this indicator."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Formula syntax is based on Javascript.")),(0,a.kt)("h4",{id:"supported-variables-1"},"Supported Variables"),(0,a.kt)("p",null,"Variables from other indicators are supported,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"v1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"v2"),", ..., ",(0,a.kt)("inlineCode",{parentName:"li"},"vn"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"n")," is index of other indicator, can be found at its result node,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"v1.c"),": current value of v1,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"v1.p"),": previous value of v1,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"v1.r"),": increment value of v1,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"v1.s"),": score value of v1,"),(0,a.kt)("li",{parentName:"ul"},"and ",(0,a.kt)("inlineCode",{parentName:"li"},"v2.c"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"v2.p"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"v2.r"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"v2.s")," ... ",(0,a.kt)("inlineCode",{parentName:"li"},"vn.c"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"vn.p"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"vn.r"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"vn.s"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Be very careful,"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"circle dependencies may cause unpredicted result or error,"),(0,a.kt)("li",{parentName:"ul"},"never use itself in formula."))),(0,a.kt)("h2",{id:"append-or-remove-indicator"},"Append or Remove indicator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Append compute indicator by click ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Manual Compute Indicator"),","),(0,a.kt)("li",{parentName:"ul"},"Append pre-defined indicator by click leaf node of pre-defined indicators tree.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add or Remove Indicator",src:i(13562).Z,width:"2886",height:"1114"})),(0,a.kt)("p",null,"And, remove existing indicator by hover its first node, and click the remove button,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remove pre-defined indicator,\n",(0,a.kt)("img",{alt:"Remove Indicator 1",src:i(24040).Z,width:"2574",height:"484"})),(0,a.kt)("li",{parentName:"ul"},"Remove compute indicator,\n",(0,a.kt)("img",{alt:"Remove Indicator 2",src:i(48436).Z,width:"2424",height:"596"}))),(0,a.kt)("h2",{id:"total-score"},"Total Score"),(0,a.kt)("p",null,"Finally, all computed scores are sum and show at root node of achievement."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Total Score",src:i(35374).Z,width:"3006",height:"766"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Simply remove the check ",(0,a.kt)("inlineCode",{parentName:"p"},"Include in Final Score")," of indicator score node to remove its score value from summary. ")))}m.isMDXComponent=!0},20602:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/achievement-common-criteria-f30302f37516380f0b90e5b73950ce3a.png"},16753:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/achievement-compute-indicator-2-ccc89864d460b66fe94a9dca3d08f078.png"},84979:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/achievement-compute-indicator-e2a4d46a84332715d3178e4b260fbb59.png"},13562:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/achievement-indicator-add-remove-d8c36b351dfb2cbd7a89c7c181250b20.png"},4822:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/achievement-predefined-indicator-2-40104e73974f69ccc1b247525d5bfd78.png"},80953:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/achievement-predefined-indicator-3-e6b2858578046658312eb168c72f42bf.png"},26716:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/achievement-predefined-indicator-ca64be393dc0c0c979745ed15b339a57.png"},24040:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/achievement-remove-indicator-1-04e34d11f796865361ea4f7d8d3b9a68.png"},48436:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/achievement-remove-indicator-2-1c3d961e2bce545ca66866b20356c97a.png"},35374:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/achievement-total-score-c6292e1db774e26569e4808ba75d2a3f.png"},51955:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/achievement-36823e073d704b3f6a98be357fb1b805.png"}}]);