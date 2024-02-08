"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[9860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(83117),o=(n(67294),n(3905));const a={id:"cli-index",title:"CLI Overview",sidebar_position:1},i="Overview",c={unversionedId:"cli/cli-index",id:"version-16.5-prerelease/cli/cli-index",title:"CLI Overview",description:"Watchmen Command-Line Interface",source:"@site/versioned_docs/version-16.5-prerelease/070-cli/001-cli-index.md",sourceDirName:"070-cli",slug:"/cli/cli-index",permalink:"/docs/16.5-prerelease/cli/cli-index",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.5-prerelease/070-cli/001-cli-index.md",tags:[],version:"16.5-prerelease",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1707363130,formattedLastUpdatedAt:"Feb 8, 2024",sidebarPosition:1,frontMatter:{id:"cli-index",title:"CLI Overview",sidebar_position:1},sidebar:"sidebar",previous:{title:"Upgrade to 16",permalink:"/docs/16.5-prerelease/installation/migration"},next:{title:"Deployment",permalink:"/docs/16.5-prerelease/cli/deploy"}},l={},s=[{value:"Watchmen Command-Line Interface",id:"watchmen-command-line-interface",level:2},{value:"Core Function",id:"core-function",level:2},{value:"Source code",id:"source-code",level:2},{value:"Docker",id:"docker",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"watchmen-command-line-interface"},"Watchmen Command-Line Interface"),(0,o.kt)("p",null,"We provide the command line tools to help customer to maintain their environment.\nThe command-Line Interface base on the function provided by the watchmen applications."),(0,o.kt)("h2",{id:"core-function"},"Core Function"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"deployment")),(0,o.kt)("p",null,"Import topics, pipelines, spaces and connected spaces into the environment.\nYou can use the function to deploy the config file which export from other environment in the new one."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"rerun")),(0,o.kt)("p",null,"Re-trigger the pipeline of a topic, usually for some purpose of maintenance, like fix bugs or data patch."),(0,o.kt)("h1",{id:"how-to-use"},"How to use"),(0,o.kt)("h2",{id:"source-code"},"Source code"),(0,o.kt)("p",null,"Use the source code , clone from repository: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-commandline"},"gh repo clone Indexical-Metrics-Measure-Advisory/watchmen\n")),(0,o.kt)("p",null,"In the watchmen-cli directory, run cli.py. for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-commandline"},"python ./src/cli.py deploy --path='/app/config' --host='http://localhost:8000' --username='watchmen-user' --password='change-me'\n")),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"Use the watchmen-cli image,  pull image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-commandline"},"docker pull ghcr.io/indexical-metrics-measure-advisory/watchmen-cli:16.3.0\n")),(0,o.kt)("p",null,"execute with docker command, parameters are passed through environment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"docker run --rm -e command=deploy -e path=/app/config -e host=http://localhost:8000 -e username=watchmen-user -e password=change-me ghcr.io/indexical-metrics-measure-advisory/watchmen-cli:16.3.0\n")))}d.isMDXComponent=!0}}]);