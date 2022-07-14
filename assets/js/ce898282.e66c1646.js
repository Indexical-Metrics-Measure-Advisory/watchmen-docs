"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[175],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),i=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(r),m=n,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(b,l(l({ref:t},c),{},{components:r})):a.createElement(b,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(34334);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(83117),n=r(67294),o=r(34334),l=r(72389),s=r(67392),u=r(7094),i=r(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r;const{lazy:l,block:d,defaultValue:m,values:b,groupId:f,className:v}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:y.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),g=(0,s.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(r=y.find((e=>e.props.default)))?void 0:r.props.value)?t:y[0].props.value;if(null!==w&&!h.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:O}=(0,u.U)(),[T,x]=(0,n.useState)(w),D=[],{blockElementScrollPositionUntilNextRender:E}=(0,i.o5)();if(null!=f){const e=k[f];null!=e&&e!==T&&h.some((t=>t.value===e))&&x(e)}const S=e=>{const t=e.currentTarget,r=D.indexOf(t),a=h[r].value;a!==T&&(E(t),x(a),null!=f&&O(f,String(a)))},N=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var a;const t=D.indexOf(e.currentTarget)+1;r=null!=(a=D[t])?a:D[0];break}case"ArrowLeft":{var n;const t=D.indexOf(e.currentTarget)-1;r=null!=(n=D[t])?n:D[D.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},h.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>D.push(e),onKeyDown:N,onFocus:S,onClick:S},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),l?(0,n.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,l.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},50121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(83117),n=(r(67294),r(3905)),o=r(85162),l=r(65488);const s={id:"data-source",title:"Data Source",sidebar_position:3},u="Data Source",i={unversionedId:"tuples/data-source",id:"version-15.2.14/tuples/data-source",title:"Data Source",description:"Model",source:"@site/versioned_docs/version-15.2.14/tuples/data-source.mdx",sourceDirName:"tuples",slug:"/tuples/data-source",permalink:"/docs/15.2.14/tuples/data-source",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-15.2.14/tuples/data-source.mdx",tags:[],version:"15.2.14",lastUpdatedBy:"botlikes",lastUpdatedAt:1657767938,formattedLastUpdatedAt:"Jul 14, 2022",sidebarPosition:3,frontMatter:{id:"data-source",title:"Data Source",sidebar_position:3},sidebar:"sidebar",previous:{title:"Data Zone",permalink:"/docs/15.2.14/tuples/data-zone"},next:{title:"External Writer",permalink:"/docs/15.2.14/tuples/external-writer"}},c={},p=[{value:"Model",id:"model",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-source"},"Data Source"),(0,n.kt)("h2",{id:"model"},"Model"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ts",label:"Typescript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/data-source-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/data-source-types.ts"'},"export enum DataSourceType {\n    MYSQL = 'mysql',\n    ORACLE = 'oracle',\n    MONGODB = 'mongodb'\n}\n\nexport interface DataSourceParam {\n    name: string;\n    value: string;\n}\n\nexport type DataSourceId = string;\n\nexport interface DataSource extends Tuple {\n    dataSourceId: DataSourceId;\n    dataSourceCode: string;\n    dataSourceType: DataSourceType;\n    host: string;\n    port: string;\n    name: string;\n    username: string;\n    password: string;\n    url: string;\n    params: Array<DataSourceParam>;\n    tenantId?: TenantId;\n}\n"))),(0,n.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},(0,n.kt)("inlineCode",{parentName:"em"},"(under construction)")))))))}m.isMDXComponent=!0}}]);