"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[385],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9709:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"external-writer",title:"External Writer",sidebar_position:4},c="External Writer",s={unversionedId:"tuples/external-writer",id:"tuples/external-writer",title:"External Writer",description:"Model",source:"@site/docs/tuples/external-writer.md",sourceDirName:"tuples",slug:"/tuples/external-writer",permalink:"/watchmen-docs/docs/next/tuples/external-writer",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/docs/tuples/external-writer.md",tags:[],version:"current",lastUpdatedBy:"botlikes",lastUpdatedAt:1641377535,formattedLastUpdatedAt:"1/5/2022",sidebarPosition:4,frontMatter:{id:"external-writer",title:"External Writer",sidebar_position:4},sidebar:"sidebar",previous:{title:"Data Source",permalink:"/watchmen-docs/docs/next/tuples/data-source"},next:{title:"User",permalink:"/watchmen-docs/docs/next/tuples/user"}},d=[{value:"Model",id:"model",children:[{value:"Frontend",id:"frontend",children:[],level:3},{value:"Backend",id:"backend",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"external-writer"},"External Writer"),(0,i.kt)("h2",{id:"model"},"Model"),(0,i.kt)("h3",{id:"frontend"},"Frontend"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/external-writer-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/external-writer-types.ts"'},"export enum ExternalWriterType {\n    STANDARD_WRITER = 'standard-writer',\n    ELASTIC_SEARCH_WRITER = 'elastic-search-writer'\n}\n\nexport type ExternalWriterId = string;\n\nexport interface ExternalWriter extends Tuple {\n    writerId: ExternalWriterId;\n    writerCode: string;\n    type: ExternalWriterType;\n    pat?: Token;\n    url: string;\n    tenantId?: TenantId;\n}\n")),(0,i.kt)("h3",{id:"backend"},"Backend"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="watchmen-model/model/model/external/external_writer.py"',title:'"watchmen-model/model/model/external/external_writer.py"'},"class ExternalWriter(WatchmenModel):\n    writerId: str = None\n    writerCode: str = None\n    type: str = None\n    pat: str = None\n    url: str = None\n    tenantId: str = None\n")))}u.isMDXComponent=!0}}]);