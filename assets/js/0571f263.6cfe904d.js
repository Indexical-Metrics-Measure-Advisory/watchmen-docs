"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[6730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),r=n(67294),l=n(34334),o=n(72389),i=n(67392),s=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:b,groupId:v,className:f}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,i.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const E=null===m?m:null!=(t=null!=m?m:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==E&&!h.some((e=>e.value===E)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+E+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:_,setTabGroupChoices:T}=(0,s.U)(),[g,P]=(0,r.useState)(E),A=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=v){const e=_[v];null!=e&&e!==g&&h.some((t=>t.value===e))&&P(e)}const N=e=>{const t=e.currentTarget,n=A.indexOf(t),a=h[n].value;a!==g&&(w(t),P(a),null!=v&&T(v,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=A.indexOf(e.currentTarget)+1;n=null!=(a=A[t])?a:A[0];break}case"ArrowLeft":{var r;const t=A.indexOf(e.currentTarget)-1;n=null!=(r=A[t])?r:A[A.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},f)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>A.push(e),onKeyDown:C,onFocus:N,onClick:N},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":g===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(y.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},88486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={id:"web-client-installation",title:"Installation",sidebar_position:2},s="Web Client Installation",u={unversionedId:"web-client/web-client-installation",id:"version-16.3/web-client/web-client-installation",title:"Installation",description:"We haven't deployed web client to public repository yet, clone our source code first.",source:"@site/versioned_docs/version-16.3/020-web-client/002-installation.md",sourceDirName:"020-web-client",slug:"/web-client/web-client-installation",permalink:"/docs/16.3/web-client/web-client-installation",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.3/020-web-client/002-installation.md",tags:[],version:"16.3",lastUpdatedBy:"botlikes",lastUpdatedAt:1659078169,formattedLastUpdatedAt:"Jul 29, 2022",sidebarPosition:2,frontMatter:{id:"web-client-installation",title:"Installation",sidebar_position:2},sidebar:"sidebar",previous:{title:"Web Client Overview",permalink:"/docs/16.3/web-client/web-client-index"},next:{title:"Admin Workbench Index",permalink:"/docs/16.3/web-client/admin/admin-wb-index"}},c={},p=[{value:"Serve Locally",id:"serve-locally",level:2},{value:"Prepare Environment",id:"prepare-environment",level:3},{value:"Start Server",id:"start-server",level:3},{value:"Build",id:"build",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Build and Deployment By Docker",id:"build-and-deployment-by-docker",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"web-client-installation"},"Web Client Installation"),(0,r.kt)("p",null,"We haven't deployed web client to public repository yet, clone our source code first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/root_folder\ngit clone https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-web-client.git\n")),(0,r.kt)("p",null,"Since web client is built on ",(0,r.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"CRA"),", you can find all useful information\nfrom ",(0,r.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"CRA"),"."),(0,r.kt)("h2",{id:"serve-locally"},"Serve Locally"),(0,r.kt)("h3",{id:"prepare-environment"},"Prepare Environment"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},".env.development.local")," file in root folder, add following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"REACT_APP_GITHUB=https://github.com/Indexical-Metrics-Measure-Advisory\nREACT_APP_WEB_CONTEXT=/\nREACT_APP_SERVICE_MOCK_FLAG=true\nREACT_APP_SERVICE_URL=http://127.0.0.1:8000/\nREACT_APP_CLIENT_SAVE_INTERVAL=2000\nREACT_APP_CLIENT_REPORT_AUTO_REFRESH_INTERVAL=300000\nREACT_APP_DQC_ENABLED=true\nREACT_APP_PIPELINES_DOWNLOAD=true\nREACT_APP_MULTIPLE_DATA_SOURCES=true\nREACT_APP_REPORT_FILTER=true\nREACT_APP_REPORT_FUNNEL=true\nREACT_APP_SPACE_FILTER=true\nREACT_APP_EXTERNAL_WRITER_ADAPTERS=true\nREACT_APP_CHART_SCRIPT_IN_CONSOLE=true\nREACT_APP_INDICATOR_WORKBENCH=true\n\nREACT_APP_VERSION=$npm_package_version\nREACT_APP_NAME=$npm_package_name\n\nPORT=4001\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To enable a feature, property value must be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),","),(0,r.kt)("li",{parentName:"ul"},"Interval value has default value as described above, they can be ignored in env file,"),(0,r.kt)("li",{parentName:"ul"},"Service URL is effective on visiting on http://localhost:4001 and mock is disabled,"),(0,r.kt)("li",{parentName:"ul"},"Port can be changed to another one, it's up to you.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Change ",(0,r.kt)("inlineCode",{parentName:"p"},".env.local")," is also worked.")),(0,r.kt)("h3",{id:"start-server"},"Start Server"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm start\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\nyarn start\n# couldn't auto-convert command\n")))),(0,r.kt)("p",null,"Runs the app in development mode. Open ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:4001"},"http://127.0.0.1:4001")," to view it in the browser."),(0,r.kt)("h2",{id:"build"},"Build"),(0,r.kt)("p",null,"Provides you own ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file, copy content from ",(0,r.kt)("inlineCode",{parentName:"p"},".env.local")," and change to what you want. You can find how to use env files\non ",(0,r.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/adding-custom-environment-variables"},"CRA Environment Variables")),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm run build\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn run build\n")))),(0,r.kt)("p",null,"The build is minified and the filenames include the hashes."),(0,r.kt)("p",null,"Your app is ready to be deployed."),(0,r.kt)("h2",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://create-react-app.dev/docs/deployment"},"Here")),"."),(0,r.kt)("h2",{id:"build-and-deployment-by-docker"},"Build and Deployment By Docker"),(0,r.kt)("p",null,"**",(0,r.kt)("a",{parentName:"p",href:"../installation/deploy"},"Here")))}m.isMDXComponent=!0}}]);