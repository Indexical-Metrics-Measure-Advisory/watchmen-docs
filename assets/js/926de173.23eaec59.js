"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[3790],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var i=2;i<o;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(67294),a=r(86010),o="tabItem_Ymn6";function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:r},t)}},65488:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(83117),a=r(67294),o=r(86010),u=r(72389),s=r(67392),l=r(7094),i=r(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r,u=e.lazy,d=e.block,m=e.defaultValue,f=e.values,v=e.groupId,b=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,s.l)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(r=y.find((function(e){return e.props.default})))?void 0:r.props.value)?t:y[0].props.value;if(null!==w&&!g.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.U)(),T=k.tabGroupChoices,x=k.setTabGroupChoices,O=(0,a.useState)(w),E=O[0],N=O[1],I=[],U=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var j=T[v];null!=j&&j!==E&&g.some((function(e){return e.value===j}))&&N(j)}var P=function(e){var t=e.currentTarget,r=I.indexOf(t),n=g[r].value;n!==E&&(U(t),N(n),null!=v&&x(v,String(n)))},Z=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=I.indexOf(e.currentTarget)+1;r=null!=(n=I[a])?n:I[0];break;case"ArrowLeft":var o,u=I.indexOf(e.currentTarget)-1;r=null!=(o=I[u])?o:I[I.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},g.map((function(e){var t=e.value,r=e.label,u=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return I.push(e)},onKeyDown:Z,onFocus:P,onClick:P},u,{className:(0,o.Z)("tabs__item",p,null==u?void 0:u.className,{"tabs__item--active":E===t})}),null!=r?r:t)}))),u?(0,a.cloneElement)(y.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,u.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},87166:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),u=r(85162),s=r(65488),l=["components"],i={id:"user-group",title:"User Group",sidebar_position:6},c="User Group",p={unversionedId:"tuples/user-group",id:"version-15.2.14/tuples/user-group",title:"User Group",description:"Model",source:"@site/versioned_docs/version-15.2.14/tuples/user-group.mdx",sourceDirName:"tuples",slug:"/tuples/user-group",permalink:"/docs/15.2.14/tuples/user-group",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-15.2.14/tuples/user-group.mdx",tags:[],version:"15.2.14",lastUpdatedBy:"botlikes",lastUpdatedAt:1655877324,formattedLastUpdatedAt:"6/22/2022",sidebarPosition:6,frontMatter:{id:"user-group",title:"User Group",sidebar_position:6},sidebar:"sidebar",previous:{title:"User",permalink:"/docs/15.2.14/tuples/user"},next:{title:"Space",permalink:"/docs/15.2.14/tuples/space"}},d={},m=[{value:"Model",id:"model",level:2}],f={toc:m};function v(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"user-group"},"User Group"),(0,o.kt)("h2",{id:"model"},"Model"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"ts",label:"Typescript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/user-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/user-types.ts"'},"export type UserGroupId = string;\n\nexport interface UserHolder extends TupleHolder {\n    userIds: Array<UserId>;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/space-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/space-types.ts"'},"export type SpaceId = string;\n\nexport interface SpaceHolder extends TupleHolder {\n    spaceIds: Array<SpaceId>;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/user-group-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/user-group-types.ts"'},"export type UserGroupId = string;\n\nexport interface UserGroup extends Tuple, SpaceHolder, UserHolder {\n    userGroupId: UserGroupId;\n    name: string;\n    description?: string;\n    tenantId?: TenantId;\n}\n"))),(0,o.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("inlineCode",{parentName:"em"},"(under construction)")))))))}v.isMDXComponent=!0}}]);