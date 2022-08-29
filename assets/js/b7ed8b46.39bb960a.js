"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[7744],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(83117),r=(a(67294),a(3905));const i={id:"quick-start",title:"Quick Start",sidebar_position:2},o=void 0,l={unversionedId:"quick-start",id:"version-16.3/quick-start",title:"Quick Start",description:"Welcome",source:"@site/versioned_docs/version-16.3/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/16.3/quick-start",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.3/quick-start.md",tags:[],version:"16.3",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1661759620,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:2,frontMatter:{id:"quick-start",title:"Quick Start",sidebar_position:2},sidebar:"sidebar",previous:{title:"Hello World",permalink:"/docs/16.3/docs-index"},next:{title:"What Expected",permalink:"/docs/16.3/main-concepts/main-concepts-what-expected"}},p={},s=[{value:"Welcome",id:"welcome",level:2},{value:"Intro",id:"intro",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Installing with docker-compose",id:"installing-with-docker-compose",level:3},{value:"Login with pre-built users",id:"login-with-pre-built-users",level:3},{value:"General process of playground",id:"general-process-of-playground",level:3},{value:"If You Get Stuck",id:"if-you-get-stuck",level:2},{value:"Congratulations!",id:"congratulations",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"welcome"},"Welcome"),(0,r.kt)("p",null,"Let's discover ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Watchmen"))," in less than 15 minutes."),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Watchmen"))," is a lightweight analytic platform, including a backend and a web client."),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The deployment method provided in this guide is ONLY FOR quick start, NOT FOR production.")),(0,r.kt)("h3",{id:"installing-with-docker-compose"},"Installing with docker-compose"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Clone repository,"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone repository  https://github.com/Indexical-Metrics-Measure-Advisory/watchmen\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter quick start,"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd path-to-watchmen-cloned-repo/watchmen-quick-start\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Before starting, execute ",(0,r.kt)("inlineCode",{parentName:"p"},"dbscript.sh")," copy script to mysql directory,"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh dbscript.sh\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Only MySQL scripts are included."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start docker,"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd docker\ndocker compose -f docker-compose-mysql.yml up\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open browser on ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3030"},"http://localhost:3030"),"."))),(0,r.kt)("h3",{id:"login-with-pre-built-users"},"Login with pre-built users"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Super admin user: ",(0,r.kt)("inlineCode",{parentName:"li"},"imma-super"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"change-me")),(0,r.kt)("li",{parentName:"ul"},"Admin user: ",(0,r.kt)("inlineCode",{parentName:"li"},"imma-admin"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"1234abcd")),(0,r.kt)("li",{parentName:"ul"},"Console user: ",(0,r.kt)("inlineCode",{parentName:"li"},"imma-user"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"1234abcd"))),(0,r.kt)("h3",{id:"general-process-of-playground"},"General process of playground"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Login with super admin user,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"create datasource,"))),(0,r.kt)("li",{parentName:"ul"},"Login with admin user,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"create topics and pipelines,"),(0,r.kt)("li",{parentName:"ul"},"test pipelines with simulator,"),(0,r.kt)("li",{parentName:"ul"},"Create pat and import test data,"),(0,r.kt)("li",{parentName:"ul"},"Create spaces and assign to your user group,"))),(0,r.kt)("li",{parentName:"ul"},"Login with console user,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"connect to space,"),(0,r.kt)("li",{parentName:"ul"},"create dataset and chart,"),(0,r.kt)("li",{parentName:"ul"},"create dashboard.")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"DQC"))," services are not included")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The latest Chrome is recommended,"),(0,r.kt)("li",{parentName:"ul"},"The current environment will automatically create table in instance database. If you modify the topic structure, it will be deleted and\nrecreated, refer to documentation ",(0,r.kt)("a",{parentName:"li",href:"./installation/config"},"SYNC_TOPIC_TO_STORAGE"),","),(0,r.kt)("li",{parentName:"ul"},"If it is not a Mac, please modify ",(0,r.kt)("inlineCode",{parentName:"li"},"docker.for.mac.localhost")," parameter is configured in nginx,"),(0,r.kt)("li",{parentName:"ul"},"This cannot be used in a production environment. If you need to deploy the production environment, please refer to the\ndocument ",(0,r.kt)("a",{parentName:"li",href:"./installation/deploy#production-environment"},"Production Environment Deployment"),"."))),(0,r.kt)("h2",{id:"if-you-get-stuck"},"If You Get Stuck"),(0,r.kt)("p",null,"Any questions on getting started, we'd love to hear from you. Feel free to send email to\nour ",(0,r.kt)("a",{parentName:"p",href:"tech-support@mail.matrdata.com"},"tech support team")),(0,r.kt)("h2",{id:"congratulations"},"Congratulations!"),(0,r.kt)("p",null,"You have just learned the ",(0,r.kt)("strong",{parentName:"p"},"Quick Start Watchmen")," and there are ",(0,r.kt)("strong",{parentName:"p"},"much more to offer"),"!"))}u.isMDXComponent=!0}}]);