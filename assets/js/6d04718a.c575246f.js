"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[1065],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(3117),a=n(7294),o=n(2389),u=n(8472),i=n(6010),l="tabItem_LplD";function s(e){var t,n,o,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.lx)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,u.UB)(),E=g.tabGroupChoices,w=g.setTabGroupChoices,k=(0,a.useState)(h),O=k[0],T=k[1],x=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var N=E[m];null!=N&&N!==O&&b.some((function(e){return e.value===N}))&&T(N)}var j=function(e){var t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==O&&(I(t),T(r),null!=m&&w(m,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:j,onClick:j},o,{className:(0,i.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,o.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},5807:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),u=n(8215),i=n(9877),l=["components"],s={id:"enumeration",title:"Enumeration",sidebar_position:8},c="Enumeration",p={unversionedId:"tuples/enumeration",id:"version-15.2.14/tuples/enumeration",title:"Enumeration",description:"Model",source:"@site/versioned_docs/version-15.2.14/tuples/enumeration.mdx",sourceDirName:"tuples",slug:"/tuples/enumeration",permalink:"/docs/15.2.14/tuples/enumeration",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-15.2.14/tuples/enumeration.mdx",tags:[],version:"15.2.14",lastUpdatedBy:"botlikes",lastUpdatedAt:1648909008,formattedLastUpdatedAt:"4/2/2022",sidebarPosition:8,frontMatter:{id:"enumeration",title:"Enumeration",sidebar_position:8},sidebar:"sidebar",previous:{title:"Space",permalink:"/docs/15.2.14/tuples/space"},next:{title:"Topic",permalink:"/docs/15.2.14/tuples/topic"}},d={},m=[{value:"Model",id:"model",level:2}],f={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"enumeration"},"Enumeration"),(0,o.kt)("h2",{id:"model"},"Model"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"ts",label:"Typescript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/enum-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/enum-types.ts"'},"export interface EnumItem {\n    code: string;\n    label: string;\n    replaceCode?: string;\n    parentCode?: string;\n}\n\nexport type EnumId = string;\n\nexport interface Enum extends Tuple {\n    enumId: EnumId;\n    name: string;\n    description?: string;\n    parentEnumId?: EnumId;\n    items: Array<EnumItem>;\n    tenantId?: TenantId;\n}\n"))),(0,o.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("inlineCode",{parentName:"em"},"(under construction)")))))))}v.isMDXComponent=!0}}]);