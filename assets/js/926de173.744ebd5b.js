"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[3790],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var i=2;i<o;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);function a(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(83117),a=r(67294),o=r(72389),u=r(78472),s=r(86010),l="tabItem_LplD";function i(e){var t,r,o,i=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.lx)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,u.UB)(),w=h.tabGroupChoices,k=h.setTabGroupChoices,x=(0,a.useState)(g),T=x[0],O=x[1],E=[],N=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=w[m];null!=I&&I!==T&&b.some((function(e){return e.value===I}))&&O(I)}var U=function(e){var t=e.currentTarget,r=E.indexOf(t),n=b[r].value;n!==T&&(N(t),O(n),null!=m&&k(m,n))},j=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;r=E[n]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;r=E[a]||E[E.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:U,onClick:U},o,{className:(0,s.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,o.Z)();return a.createElement(i,(0,n.Z)({key:String(t)},e))}},87166:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),u=r(58215),s=r(9877),l=["components"],i={id:"user-group",title:"User Group",sidebar_position:6},c="User Group",p={unversionedId:"tuples/user-group",id:"version-15.2.14/tuples/user-group",title:"User Group",description:"Model",source:"@site/versioned_docs/version-15.2.14/tuples/user-group.mdx",sourceDirName:"tuples",slug:"/tuples/user-group",permalink:"/docs/15.2.14/tuples/user-group",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-15.2.14/tuples/user-group.mdx",tags:[],version:"15.2.14",lastUpdatedBy:"botlikes",lastUpdatedAt:1648910808,formattedLastUpdatedAt:"4/2/2022",sidebarPosition:6,frontMatter:{id:"user-group",title:"User Group",sidebar_position:6},sidebar:"sidebar",previous:{title:"User",permalink:"/docs/15.2.14/tuples/user"},next:{title:"Space",permalink:"/docs/15.2.14/tuples/space"}},d={},m=[{value:"Model",id:"model",level:2}],f={toc:m};function v(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"user-group"},"User Group"),(0,o.kt)("h2",{id:"model"},"Model"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"ts",label:"Typescript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/user-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/user-types.ts"'},"export type UserGroupId = string;\n\nexport interface UserHolder extends TupleHolder {\n    userIds: Array<UserId>;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/space-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/space-types.ts"'},"export type SpaceId = string;\n\nexport interface SpaceHolder extends TupleHolder {\n    spaceIds: Array<SpaceId>;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/user-group-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/user-group-types.ts"'},"export type UserGroupId = string;\n\nexport interface UserGroup extends Tuple, SpaceHolder, UserHolder {\n    userGroupId: UserGroupId;\n    name: string;\n    description?: string;\n    tenantId?: TenantId;\n}\n"))),(0,o.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("inlineCode",{parentName:"em"},"(under construction)")))))))}v.isMDXComponent=!0}}]);