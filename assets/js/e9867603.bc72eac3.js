"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[5344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(83117),r=(n(67294),n(3905));const i={id:"web-client-index",title:"Web Client Overview",sidebar_position:1},o="Overview",l={unversionedId:"web-client/web-client-index",id:"version-16.4/web-client/web-client-index",title:"Web Client Overview",description:"_Watchmen_ Web Client is a browser based client, built on CRA.",source:"@site/versioned_docs/version-16.4/020-web-client/001-web-client-index.md",sourceDirName:"020-web-client",slug:"/web-client/web-client-index",permalink:"/docs/16.4/web-client/web-client-index",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.4/020-web-client/001-web-client-index.md",tags:[],version:"16.4",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1680953158,formattedLastUpdatedAt:"Apr 8, 2023",sidebarPosition:1,frontMatter:{id:"web-client-index",title:"Web Client Overview",sidebar_position:1},sidebar:"sidebar",previous:{title:"On Both Sides",permalink:"/docs/16.4/main-concepts/main-concepts-both-sides"},next:{title:"Installation",permalink:"/docs/16.4/web-client/web-client-installation"}},s={},c=[{value:"Roles",id:"roles",level:2},{value:"Login",id:"login",level:2},{value:"Workbenches",id:"workbenches",level:2},{value:"Workbench Layout",id:"workbench-layout",level:2},{value:"Language",id:"language",level:2},{value:"Theme",id:"theme",level:2},{value:"Personal Access Token (PAT for short)",id:"personal-access-token-pat-for-short",level:2}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Watchmen"))," Web Client is a browser based client, built on ",(0,r.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"CRA"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We highly recommend using the latest version of Google Chrome to have the best experience.")),(0,r.kt)("h2",{id:"roles"},"Roles"),(0,r.kt)("p",null,"There are 3 roles,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Super Admin"),(0,r.kt)("li",{parentName:"ul"},"Admin"),(0,r.kt)("li",{parentName:"ul"},"Business User")),(0,r.kt)("p",null,"Role-based authorization is built-in."),(0,r.kt)("h2",{id:"login"},"Login"),(0,r.kt)("p",null,"First, open web client in browser, and login,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Login",src:n(39849).Z,width:"3550",height:"1414"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Ask an account from your administrator if you don't have one yet.")),(0,r.kt)("p",null,"After login successfully, web client redirects to workbench homepage automatically according to the role of your account."),(0,r.kt)("h2",{id:"workbenches"},"Workbenches"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Watchmen"))," web client provides different workbenches for different roles,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"admin/admin-wb-index"},"Admin Workbench")," for IT developers,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"console/console-wb-index"},"Console Workbench")," for business users,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"dqc/dqc-wb-index"},"DQC Workbench")," for IT maintainers.")),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Watchmen")),", IT developers and maintainers are treated as administrators. Typically, it's recommend that maintainers also acquire\nbasic knowledge of the topics and pipelines which are developed by developers, should be helpful on monitoring, finding and locating\nproblems. Therefore, if you are an IT, let's start from ",(0,r.kt)("a",{parentName:"p",href:"admin/admin-wb-index"},"Admin Workbench"),". Or if you are a business user, let's\nstart from ",(0,r.kt)("a",{parentName:"p",href:"console/console-wb-index"},"Console Workbench"),"."),(0,r.kt)("h2",{id:"workbench-layout"},"Workbench Layout"),(0,r.kt)("p",null,"Workbench includes 2 parts, menubar and work area, work area can be switched via menubar."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Standard Workbench",src:n(67690).Z,width:"3584",height:"1850"})),(0,r.kt)("p",null,"Menubar is expandable, simply move mouse to the splitter, expand it with drag and drop, you will find more information of each menu."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Expanded Workbench",src:n(92087).Z,width:"3584",height:"1858"})),(0,r.kt)("p",null,"There are several parts in menu bar from top to bottom,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Current workbench name, aka ",(0,r.kt)("inlineCode",{parentName:"li"},"Where You Are"),","),(0,r.kt)("li",{parentName:"ul"},"Workbench feature menus,"),(0,r.kt)("li",{parentName:"ul"},"Settings, switch to settings page,"),(0,r.kt)("li",{parentName:"ul"},"Workbench switcher, will be invisible when only one workbench is available for login account,"),(0,r.kt)("li",{parentName:"ul"},"Logout,"),(0,r.kt)("li",{parentName:"ul"},"Current account name, aka ",(0,r.kt)("inlineCode",{parentName:"li"},"Who You Are"),".")),(0,r.kt)("p",null,"For more width of work area, a tooltip of menu is shown when menu bar is collapsed and mouse hover the menu icon:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Menubar Tooltip",src:n(59769).Z,width:"330",height:"302"})),(0,r.kt)("p",null,"We will introduce the features in following chapters, before we start it, let's start from some common features."),(0,r.kt)("h2",{id:"language"},"Language"),(0,r.kt)("p",null,"English/Simplified Chinese/Japanese are built-in. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," menu, find ",(0,r.kt)("inlineCode",{parentName:"p"},"Language")," part, choose another language, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6c49\u8bed"),",\nworkbench will be rendered as,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Simplified Chinese",src:n(2964).Z,width:"3584",height:"1858"})),(0,r.kt)("admonition",{title:"Welcome to Contribute!",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"PR of correction and contribution for i18n supporting are always welcome!",(0,r.kt)("br",{parentName:"p"}),"\n","Find our language source\nfiles ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-web-client/src/widgets/langs"},"here")),".")),(0,r.kt)("h2",{id:"theme"},"Theme"),(0,r.kt)("p",null,"Built-in themes are provided, light and dark. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," menu, find ",(0,r.kt)("inlineCode",{parentName:"p"},"Theme")," part, choose ",(0,r.kt)("inlineCode",{parentName:"p"},"Dark")," theme, workbench will be rendered as,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dark Theme",src:n(32897).Z,width:"3584",height:"1858"})),(0,r.kt)("h2",{id:"personal-access-token-pat-for-short"},"Personal Access Token (PAT for short)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PAT")," is designed for visiting data via API, there is no need to login for each visit. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," menu, find ",(0,r.kt)("inlineCode",{parentName:"p"},"Personal Access Token"),"\npart, generate a new ",(0,r.kt)("inlineCode",{parentName:"p"},"PAT")," or remove existing one,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PAT",src:n(79808).Z,width:"3584",height:"1858"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multiple ",(0,r.kt)("inlineCode",{parentName:"li"},"PAT"),"s are allowed,"),(0,r.kt)("li",{parentName:"ul"},"A human reading label for each ",(0,r.kt)("inlineCode",{parentName:"li"},"PAT")," is recommended.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Ask your administrator for more information if you want to visit data via API.")))}p.isMDXComponent=!0},32897:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dark-theme-3f9ff686d9810c96b7cb031e23fea064.png"},92087:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/expanded-workbench-ddba615b10c0e25b84fa2967f2ba4927.png"},39849:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/login-d793ad2dbf3daf3c11feccd944d8e049.png"},59769:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},79808:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pat-f512765b5f0e23be72ab329268708016.png"},67690:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/standard-workbench-6cf13504e30490523d4c1b6b3a1bdcf1.png"},2964:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zh-cn-177617a2154afa5b78d0ddab695d3ed3.png"}}]);