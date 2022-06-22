"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[5636],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61924:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],l={id:"tutorial-getting-started-quick-view",title:"Quick View",sidebar_position:2},c=void 0,p={unversionedId:"getting-started/tutorial-getting-started-quick-view",id:"getting-started/tutorial-getting-started-quick-view",title:"Quick View",description:"Quick Start",source:"@site/tutorial/getting-started/002-quick-view.md",sourceDirName:"getting-started",slug:"/getting-started/tutorial-getting-started-quick-view",permalink:"/tutorial/getting-started/tutorial-getting-started-quick-view",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/tutorial/getting-started/002-quick-view.md",tags:[],version:"current",lastUpdatedBy:"botlikes",lastUpdatedAt:1655877324,formattedLastUpdatedAt:"6/22/2022",sidebarPosition:2,frontMatter:{id:"tutorial-getting-started-quick-view",title:"Quick View",sidebar_position:2},sidebar:"sidebar",previous:{title:"Intro",permalink:"/tutorial/getting-started/tutorial-getting-started-intro"},next:{title:"Congratulations!",permalink:"/tutorial/getting-started/congratulations"}},s={},u=[{value:"Quick Start",id:"quick-start",level:2},{value:"Installing Watchmen Platform with docker-compose file",id:"installing-watchmen-platform-with-docker-compose-file",level:3},{value:"login with init user",id:"login-with-init-user",level:4},{value:"General process of playground",id:"general-process-of-playground",level:4},{value:"Tips",id:"tips",level:4},{value:"If You Get Stuck",id:"if-you-get-stuck",level:2}],m={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The deployment method provided in this guide is ONLY FOR quick start, NOT FOR production")),(0,i.kt)("h3",{id:"installing-watchmen-platform-with-docker-compose-file"},"Installing Watchmen Platform with docker-compose file"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Clone repository,"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone repository  https://github.com/Indexical-Metrics-Measure-Advisory/watchmen\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enter quick start,"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd path-to-watchmen-cloned-repo/watchmen-quick-start\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Before starting, execute ",(0,i.kt)("inlineCode",{parentName:"p"},"dbscript.sh")," copy script to mysql directory,"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sh dbscript.sh\n")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only MySQL scripts are included.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Start docker,"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd docker\ndocker compose -f docker-compose-mysql.yml up\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open browser on ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3030"},"http://localhost:3030"),"."))),(0,i.kt)("h4",{id:"login-with-init-user"},"login with init user"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"super user: imma-super/change-me"),(0,i.kt)("li",{parentName:"ul"},"admin user: imma-admin/1234abcd"),(0,i.kt)("li",{parentName:"ul"},"console user: imma-user/1234abcd")),(0,i.kt)("h4",{id:"general-process-of-playground"},"General process of playground"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"login with super user",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"create datasource"))),(0,i.kt)("li",{parentName:"ul"},"login with admin user",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"create topics and pipelines"),(0,i.kt)("li",{parentName:"ul"},"test pipelines with simulator"),(0,i.kt)("li",{parentName:"ul"},"Create pat and import test data"),(0,i.kt)("li",{parentName:"ul"},"Create spaces and assign to your user group"))),(0,i.kt)("li",{parentName:"ul"},"login with console user",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"connect to space"),(0,i.kt)("li",{parentName:"ul"},"create dataset and chart"),(0,i.kt)("li",{parentName:"ul"},"create dashboard")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DQC services are not included\n")),(0,i.kt)("h4",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The latest Chrome is recommended.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The current environment will automatically create table in instance database .\nf you modify the topic structure, it will be deleted and recreated.\nref to documentation ",(0,i.kt)("a",{parentName:"p",href:"https://imma-watchmen.com/docs/16.1/installation/config/"},"SYNC_TOPIC_TO_STORAGE"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If it is not a Mac, please modify docker.for.mac.localhost parameter is configured in nginx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This cannot be used in a production environment\nIf you need to deploy the production environment, please refer to the document production environment deployment\n",(0,i.kt)("a",{parentName:"p",href:"https://imma-watchmen.com/docs/16.0/installation/deploy#production-environment"},"https://imma-watchmen.com/docs/16.0/installation/deploy#production-environment")))),(0,i.kt)("h2",{id:"if-you-get-stuck"},"If You Get Stuck"),(0,i.kt)("p",null,"If you have questions on getting started, we'd love to hear from you:"),(0,i.kt)("p",null,"send email to ",(0,i.kt)("a",{parentName:"p",href:"mailto:tech-support@mail.matrdata.com"},"tech-support@mail.matrdata.com")))}d.isMDXComponent=!0}}]);