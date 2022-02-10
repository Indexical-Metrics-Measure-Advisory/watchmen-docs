"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[512],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7462),a=n(7294),o=n(2389),i=n(9443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3616),c=n(6010),s="tabItem_vU9c";function d(e){var t,n,o,i=e.lazy,d=e.block,p=e.defaultValue,m=e.values,f=e.groupId,v=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,u.lx)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),w=k.tabGroupChoices,x=k.setTabGroupChoices,O=(0,a.useState)(g),T=O[0],N=O[1],E=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=w[f];null!=P&&P!==T&&y.some((function(e){return e.value===P}))&&N(P)}var j=function(e){var t=e.currentTarget,n=E.indexOf(t),r=y[n].value;r!==T&&(I(t),N(r),null!=f&&x(f,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":d},v)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:j,onClick:j},o,{className:(0,c.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},2247:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(8215),l=n(6396),u=["components"],c={id:"integration-index",title:"Integration",sidebar_position:100},s=void 0,d={unversionedId:"deployment/integration-index",id:"deployment/integration-index",title:"Integration",description:"Integration",source:"@site/docs/deployment/integration-index.mdx",sourceDirName:"deployment",slug:"/deployment/integration-index",permalink:"/watchmen-docs/docs/next/deployment/integration-index",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/docs/deployment/integration-index.mdx",tags:[],version:"current",lastUpdatedBy:"luke0623",lastUpdatedAt:1644499949,formattedLastUpdatedAt:"2/10/2022",sidebarPosition:100,frontMatter:{id:"integration-index",title:"Integration",sidebar_position:100},sidebar:"sidebar",previous:{title:"Deployment Index",permalink:"/watchmen-docs/docs/next/deployment/deploy-index"},next:{title:"Tuple Index",permalink:"/watchmen-docs/docs/next/tuples/tuples-index"}},p=[{value:"Integration",id:"integration",children:[{value:"PAT token",id:"pat-token",children:[],level:3},{value:"Collection",id:"collection",children:[{value:"API for import raw data",id:"api-for-import-raw-data",children:[],level:5}],level:3}],level:2},{value:"Model",id:"model",children:[{value:"Third Party BI",id:"third-party-bi",children:[{value:"Open Source",id:"open-source",children:[],level:5}],level:3}],level:2}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"integration"},"Integration"),(0,o.kt)("h3",{id:"pat-token"},"PAT token"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"login with admin user  "),(0,o.kt)("li",{parentName:"ul"},"go to ","[",(0,o.kt)("strong",{parentName:"li"},"setting"),"]"),(0,o.kt)("li",{parentName:"ul"},"generate pat with name "),(0,o.kt)("li",{parentName:"ul"},"copy pat token ")),(0,o.kt)("h3",{id:"collection"},"Collection"),(0,o.kt)("h5",{id:"api-for-import-raw-data"},"API for import raw data"),(0,o.kt)("h1",{id:"enumeration"},"Enumeration"),(0,o.kt)("h2",{id:"model"},"Model"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    headers["authorization"] = "pat " + token\n    url = "https://localhost:8000"\n    event_data = {\n        "code":event_code,      ## raw topic name\n        "data":data   ## raw topic  data \n    }\n\n    response = requests.post(url+\'pipeline/data\', data=json.dumps(event_data), headers=headers)\n    return response.json()\n    \n'))),(0,o.kt)(i.Z,{value:"ts",label:"Typescript",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("inlineCode",{parentName:"em"},"(under construction)")))))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"/pipeline/data/async api After saving raw data, it returns directly and do data processing asynchronously")),(0,o.kt)("h3",{id:"third-party-bi"},"Third Party BI"),(0,o.kt)("h5",{id:"open-source"},"Open Source"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"metabase ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"add presto datasource"))),(0,o.kt)("li",{parentName:"ul"},"superset",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"add presto datasource")))))}f.isMDXComponent=!0}}]);