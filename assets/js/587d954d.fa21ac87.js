"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[3654],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(v,i(i({ref:t},s),{},{components:n})):a.createElement(v,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(83117),r=n(67294),l=n(72389),i=n(78472),o=n(86010),u="tabItem_LplD";function c(e){var t,n,l,c=e.lazy,s=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),E=k.tabGroupChoices,T=k.setTabGroupChoices,_=(0,r.useState)(y),N=_[0],g=_[1],w=[],A=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=E[m];null!=P&&P!==N&&b.some((function(e){return e.value===P}))&&g(P)}var C=function(e){var t=e.currentTarget,n=w.indexOf(t),a=b[n].value;a!==N&&(A(t),g(a),null!=m&&T(m,a))},R=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},v)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return w.push(e)},onKeyDown:R,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function s(e){var t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},14336:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=n(9877),o=n(58215),u=["components"],c={id:"web-client-installation",title:"Installation",sidebar_position:2},s="Web Client Installation",p={unversionedId:"web-client/web-client-installation",id:"version-16.0/web-client/web-client-installation",title:"Installation",description:"We haven't deployed web client to public repository yet, clone our source code first.",source:"@site/versioned_docs/version-16.0/020-web-client/002-installation.md",sourceDirName:"020-web-client",slug:"/web-client/web-client-installation",permalink:"/docs/16.0/web-client/web-client-installation",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.0/020-web-client/002-installation.md",tags:[],version:"16.0",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1651961860,formattedLastUpdatedAt:"5/7/2022",sidebarPosition:2,frontMatter:{id:"web-client-installation",title:"Installation",sidebar_position:2},sidebar:"sidebar",previous:{title:"Web Client Overview",permalink:"/docs/16.0/web-client/web-client-index"},next:{title:"Admin Workbench Index",permalink:"/docs/16.0/web-client/admin/admin-wb-index"}},d={},m=[{value:"Serve Locally",id:"serve-locally",level:2},{value:"Prepare Environment",id:"prepare-environment",level:3},{value:"Start Server",id:"start-server",level:3},{value:"Build",id:"build",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Build and Deployment By Docker",id:"build-and-deployment-by-docker",level:2}],v={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"web-client-installation"},"Web Client Installation"),(0,l.kt)("p",null,"We haven't deployed web client to public repository yet, clone our source code first."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/root_folder\ngit clone https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-web-client.git\n")),(0,l.kt)("p",null,"Since web client is built on ",(0,l.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"CRA"),", you can find all useful information\nfrom ",(0,l.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"CRA"),"."),(0,l.kt)("h2",{id:"serve-locally"},"Serve Locally"),(0,l.kt)("h3",{id:"prepare-environment"},"Prepare Environment"),(0,l.kt)("p",null,"Create a ",(0,l.kt)("inlineCode",{parentName:"p"},".env.development.local")," file in root folder, add following"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"REACT_APP_GITHUB=https://github.com/Indexical-Metrics-Measure-Advisory\nREACT_APP_WEB_CONTEXT=/\nREACT_APP_SERVICE_MOCK_FLAG=true\nREACT_APP_SERVICE_URL=http://127.0.0.1:8000/\nREACT_APP_CLIENT_SAVE_INTERVAL=2000\nREACT_APP_CLIENT_REPORT_AUTO_REFRESH_INTERVAL=300000\nREACT_APP_DQC_ENABLED=true\nREACT_APP_PIPELINES_DOWNLOAD=true\nREACT_APP_MULTIPLE_DATA_SOURCES=true\nREACT_APP_REPORT_FILTER=true\nREACT_APP_REPORT_FUNNEL=true\nREACT_APP_SPACE_FILTER=true\nREACT_APP_EXTERNAL_WRITER_ADAPTERS=true\nREACT_APP_CHART_SCRIPT_IN_CONSOLE=true\nREACT_APP_INDICATOR_WORKBENCH=true\n\nREACT_APP_VERSION=$npm_package_version\nREACT_APP_NAME=$npm_package_name\n\nPORT=4001\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To enable a feature, property value must be set to ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),","),(0,l.kt)("li",{parentName:"ul"},"Interval value has default value as described above, they can be ignored in env file,"),(0,l.kt)("li",{parentName:"ul"},"Service URL is effective on visiting on http://localhost:4001 and mock is disabled,"),(0,l.kt)("li",{parentName:"ul"},"Port can be changed to another one, it's up to you.")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Change ",(0,l.kt)("inlineCode",{parentName:"p"},".env.local")," is also worked."))),(0,l.kt)("h3",{id:"start-server"},"Start Server"),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm start\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\nyarn start\n# couldn't auto-convert command\n")))),(0,l.kt)("p",null,"Runs the app in development mode. Open ",(0,l.kt)("a",{parentName:"p",href:"http://127.0.0.1:4001"},"http://127.0.0.1:4001")," to view it in the browser."),(0,l.kt)("h2",{id:"build"},"Build"),(0,l.kt)("p",null,"Provides you own ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," file, copy content from ",(0,l.kt)("inlineCode",{parentName:"p"},".env.local")," and change to what you want. You can find how to use env files\non ",(0,l.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/adding-custom-environment-variables"},"CRA Environment Variables")),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm run build\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn run build\n")))),(0,l.kt)("p",null,"The build is minified and the filenames include the hashes."),(0,l.kt)("p",null,"Your app is ready to be deployed."),(0,l.kt)("h2",{id:"deployment"},"Deployment"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://create-react-app.dev/docs/deployment"},"Here")),"."),(0,l.kt)("h2",{id:"build-and-deployment-by-docker"},"Build and Deployment By Docker"),(0,l.kt)("p",null,"**",(0,l.kt)("a",{parentName:"p",href:"../installation/deploy"},"Here")))}f.isMDXComponent=!0}}]);