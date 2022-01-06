"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[535],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},6396:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(7462),a=r(7294),l=r(2389),o=r(9443);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=r(3616),c=r(6010),s="tabItem_vU9c";function p(e){var t,r,l,o=e.lazy,p=e.block,d=e.defaultValue,m=e.values,f=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,u.lx)(y,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(t=null!=d?d:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==w&&!y.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=i(),g=x.tabGroupChoices,E=x.setTabGroupChoices,T=(0,a.useState)(w),k=T[0],O=T[1],N=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=g[f];null!=j&&j!==k&&y.some((function(e){return e.value===j}))&&O(j)}var C=function(e){var t=e.currentTarget,r=N.indexOf(t),n=y[r].value;n!==k&&(I(t),O(n),null!=f&&E(f,n))},P=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=N.indexOf(e.currentTarget)+1;r=N[n]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;r=N[a]||N[N.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":p},v)},y.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:function(e){return N.push(e)},onKeyDown:P,onFocus:C,onClick:C},l,{className:(0,c.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":k===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}function d(e){var t=(0,l.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},198:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=r(8215),i=r(6396),u=["components"],c={id:"external-writer",title:"External Writer",sidebar_position:4},s="External Writer",p={unversionedId:"tuples/external-writer",id:"tuples/external-writer",title:"External Writer",description:"Model",source:"@site/docs/tuples/external-writer.mdx",sourceDirName:"tuples",slug:"/tuples/external-writer",permalink:"/watchmen-docs/docs/next/tuples/external-writer",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/docs/tuples/external-writer.mdx",tags:[],version:"current",lastUpdatedBy:"botlikes",lastUpdatedAt:1641453697,formattedLastUpdatedAt:"1/6/2022",sidebarPosition:4,frontMatter:{id:"external-writer",title:"External Writer",sidebar_position:4},sidebar:"sidebar",previous:{title:"Data Source",permalink:"/watchmen-docs/docs/next/tuples/data-source"},next:{title:"User",permalink:"/watchmen-docs/docs/next/tuples/user"}},d=[{value:"Model",id:"model",children:[],level:2}],m={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"external-writer"},"External Writer"),(0,l.kt)("h2",{id:"model"},"Model"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",label:"Typescript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/external-writer-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/external-writer-types.ts"'},"export enum ExternalWriterType {\n    STANDARD_WRITER = 'standard-writer',\n    ELASTIC_SEARCH_WRITER = 'elastic-search-writer'\n}\n\nexport type ExternalWriterId = string;\n\nexport interface ExternalWriter extends Tuple {\n    writerId: ExternalWriterId;\n    writerCode: string;\n    type: ExternalWriterType;\n    pat?: Token;\n    url: string;\n    tenantId?: TenantId;\n}\n"))),(0,l.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},(0,l.kt)("inlineCode",{parentName:"em"},"(under construction)")))))))}f.isMDXComponent=!0}}]);