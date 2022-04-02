"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[7865],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);function a(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(83117),a=r(67294),l=r(72389),o=r(78472),i=r(86010),u="tabItem_LplD";function s(e){var t,r,l,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,f=e.groupId,m=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.UB)(),x=w.tabGroupChoices,g=w.setTabGroupChoices,E=(0,a.useState)(h),T=E[0],k=E[1],O=[],N=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=x[f];null!=I&&I!==T&&b.some((function(e){return e.value===I}))&&k(I)}var j=function(e){var t=e.currentTarget,r=O.indexOf(t),n=b[r].value;n!==T&&(N(t),k(n),null!=f&&g(f,n))},D=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;r=O[n]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;r=O[a]||O[O.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},m)},b.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:j,onClick:j},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),s?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,l.Z)();return a.createElement(s,(0,n.Z)({key:String(t)},e))}},85564:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var n=r(83117),a=r(80102),l=(r(67294),r(3905)),o=r(58215),i=r(9877),u=["components"],s={id:"external-writer",title:"External Writer",sidebar_position:4},c="External Writer",p={unversionedId:"tuples/external-writer",id:"version-15.2.14/tuples/external-writer",title:"External Writer",description:"Model",source:"@site/versioned_docs/version-15.2.14/tuples/external-writer.mdx",sourceDirName:"tuples",slug:"/tuples/external-writer",permalink:"/docs/15.2.14/tuples/external-writer",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-15.2.14/tuples/external-writer.mdx",tags:[],version:"15.2.14",lastUpdatedBy:"botlikes",lastUpdatedAt:1648910808,formattedLastUpdatedAt:"4/2/2022",sidebarPosition:4,frontMatter:{id:"external-writer",title:"External Writer",sidebar_position:4},sidebar:"sidebar",previous:{title:"Data Source",permalink:"/docs/15.2.14/tuples/data-source"},next:{title:"User",permalink:"/docs/15.2.14/tuples/user"}},d={},f=[{value:"Model",id:"model",level:2}],m={toc:f};function v(e){var t=e.components,r=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"external-writer"},"External Writer"),(0,l.kt)("h2",{id:"model"},"Model"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",label:"Typescript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/external-writer-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/external-writer-types.ts"'},"export enum ExternalWriterType {\n    STANDARD_WRITER = 'standard-writer',\n    ELASTIC_SEARCH_WRITER = 'elastic-search-writer'\n}\n\nexport type ExternalWriterId = string;\n\nexport interface ExternalWriter extends Tuple {\n    writerId: ExternalWriterId;\n    writerCode: string;\n    type: ExternalWriterType;\n    pat?: Token;\n    url: string;\n    tenantId?: TenantId;\n}\n"))),(0,l.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},(0,l.kt)("inlineCode",{parentName:"em"},"(under construction)")))))))}v.isMDXComponent=!0}}]);