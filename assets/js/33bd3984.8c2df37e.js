"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[7019],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),u=i,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},28335:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),l=["components"],o={id:"data-service",title:"Data Service",sidebar_position:100},s="Data Service",d={unversionedId:"doll/data-service",id:"version-16.0/doll/data-service",title:"Data Service",description:"Data service is designed for serve such as definition CURD, pipeline and inquiry. It is split to several modules:",source:"@site/versioned_docs/version-16.0/040-doll/100-data-service.md",sourceDirName:"040-doll",slug:"/doll/data-service",permalink:"/docs/16.0/doll/data-service",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.0/040-doll/100-data-service.md",tags:[],version:"16.0",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1651961860,formattedLastUpdatedAt:"5/7/2022",sidebarPosition:100,frontMatter:{id:"data-service",title:"Data Service",sidebar_position:100},sidebar:"sidebar",previous:{title:"Doll Overview",permalink:"/docs/16.0/doll/doll-index"},next:{title:"Pipeline Service",permalink:"/docs/16.0/doll/pipeline-service"}},p={},c=[{value:"Model",id:"model",level:2},{value:"Tenant Based",id:"tenant-based",level:3},{value:"User Based",id:"user-based",level:3},{value:"Others",id:"others",level:3},{value:"Meta Service",id:"meta-service",level:2},{value:"Storage",id:"storage",level:2},{value:"Snowflake Sequence Generator",id:"snowflake-sequence-generator",level:3},{value:"Extend Data Source Types",id:"extend-data-source-types",level:3},{value:"Data Kernel and Surface",id:"data-kernel-and-surface",level:2},{value:"Cache service",id:"cache-service",level:3},{value:"Topic Data",id:"topic-data",level:3},{value:"Retrieve data of single topic",id:"retrieve-data-of-single-topic",level:4},{value:"Truncate a single topic",id:"truncate-a-single-topic",level:4},{value:"Patch topic data",id:"patch-topic-data",level:4}],m={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-service"},"Data Service"),(0,r.kt)("p",null,"Data service is designed for serve such as definition CURD, pipeline and inquiry. It is split to several modules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Model,"),(0,r.kt)("li",{parentName:"ul"},"Storage,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MySQL,"),(0,r.kt)("li",{parentName:"ul"},"Oracle,"),(0,r.kt)("li",{parentName:"ul"},"MongoDB,"),(0,r.kt)("li",{parentName:"ul"},"MSSQL,"))),(0,r.kt)("li",{parentName:"ul"},"Meta,"),(0,r.kt)("li",{parentName:"ul"},"Data Kernel,"),(0,r.kt)("li",{parentName:"ul"},"Data Surface.")),(0,r.kt)("h2",{id:"model"},"Model"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"watchmen-model"),", all tuples are defined. Basically, they can be arranged to 3 catalogs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tenant based,"),(0,r.kt)("li",{parentName:"ul"},"User based,"),(0,r.kt)("li",{parentName:"ul"},"Others.")),(0,r.kt)("h3",{id:"tenant-based"},"Tenant Based"),(0,r.kt)("p",null,"Tenant based models are designed to be shared in tenant, most tenant based models have optimistic lock:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tenant,"),(0,r.kt)("li",{parentName:"ul"},"User,"),(0,r.kt)("li",{parentName:"ul"},"Data Source,"),(0,r.kt)("li",{parentName:"ul"},"External Writer,"),(0,r.kt)("li",{parentName:"ul"},"User Group,"),(0,r.kt)("li",{parentName:"ul"},"Space,"),(0,r.kt)("li",{parentName:"ul"},"Enumeration,"),(0,r.kt)("li",{parentName:"ul"},"Topic,"),(0,r.kt)("li",{parentName:"ul"},"Pipeline,"),(0,r.kt)("li",{parentName:"ul"},"Catalog,"),(0,r.kt)("li",{parentName:"ul"},"Monitor Rule (no optimistic lock declared).")),(0,r.kt)("h3",{id:"user-based"},"User Based"),(0,r.kt)("p",null,"User based models are designed to store data which belongs to particular user only:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Favorite,"),(0,r.kt)("li",{parentName:"ul"},"Last Snapshot,"),(0,r.kt)("li",{parentName:"ul"},"Personal Access Token,"),(0,r.kt)("li",{parentName:"ul"},"Connected Space,"),(0,r.kt)("li",{parentName:"ul"},"Connected Space Graphic,"),(0,r.kt)("li",{parentName:"ul"},"Subject,"),(0,r.kt)("li",{parentName:"ul"},"Report,"),(0,r.kt)("li",{parentName:"ul"},"Dashboard,"),(0,r.kt)("li",{parentName:"ul"},"Pipeline Graphic.")),(0,r.kt)("h3",{id:"others"},"Others"),(0,r.kt)("p",null,"Typically, model which is not a tenant based or an user based, is designed for system purpose."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Factor Index"),(0,r.kt)("li",{parentName:"ul"},"Pipeline Index"),(0,r.kt)("li",{parentName:"ul"},"Key Store")),(0,r.kt)("h2",{id:"meta-service"},"Meta Service"),(0,r.kt)("p",null,"The CRUD operations of models are provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"watchmen-meta"),", and persistent layer of meta service is provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"watchmen-storage"),". All\nmetadata are stored in one storage, it can be RDS or NoSQL."),(0,r.kt)("h2",{id:"storage"},"Storage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"watchmen-storage")," is spi for different types of storages, such as MySQL, Oracle, etc. To enable the particular storage, the adaptive\nimplementation module should be included."),(0,r.kt)("p",null,"Storage provides persistent layer both for meta service and data service. For meta service, find configuration\ndetails ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../installation/config#meta"},"here"),".")),(0,r.kt)("h3",{id:"snowflake-sequence-generator"},"Snowflake Sequence Generator"),(0,r.kt)("p",null,"In storage module, there is a built-in snowflake sequence generator. Small changes made based on the standard algorithm, which are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"At most 4 data centers are supported, default is 0,"),(0,r.kt)("li",{parentName:"ul"},"At most 1024 workers for each data center are supported, default is 0 too.")),(0,r.kt)("p",null,"It is expected that worker ids setting can be ignored when deploy watchmen to servers, it is no need to care about settings for each server\n, docker image and system variables of host server. Consider of this, a built-in mechanism called competitive worker is provided, and by\ndefault it is enabled. It acquires a worker id when server starting, and keep declaring itself alive to meta storage every 60 seconds when\ndefault settings is kept. Plus, an unused worker id would be released and reused after 1 day."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Default competitive worker is based on persistent layer, all data can be found at ",(0,r.kt)("inlineCode",{parentName:"p"},"snowflake_competitive_workers"),". Manually clean dead\nworker ids when necessary."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Declare data center id and worker id by system variables for each node separated is recommended where conditions permit. Simply disable the\ncompetitive workers by settings parameter.   "))),(0,r.kt)("h3",{id:"extend-data-source-types"},"Extend Data Source Types"),(0,r.kt)("p",null,"MySQL, Oracle, MSSQL and mongoDB are built-in now. If you want to extend a new data source type, follow the steps to\ncreate supporting a type ",(0,r.kt)("inlineCode",{parentName:"p"},"SomeDB"),"."),(0,r.kt)("p",null,"First fork our repo, for server side,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add a new package, which named ",(0,r.kt)("inlineCode",{parentName:"li"},"watchmen-storage-somedb"),","),(0,r.kt)("li",{parentName:"ul"},"Copy source from the analogue, such as from ",(0,r.kt)("inlineCode",{parentName:"li"},"watchmen-storage-mysql"),","),(0,r.kt)("li",{parentName:"ul"},"Go through source codes, change them,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If it is only for topic data, only a few apis should be implemented, find ",(0,r.kt)("inlineCode",{parentName:"li"},"watchmen-inquiry-trino")," as a sample,"),(0,r.kt)("li",{parentName:"ul"},"If it is for metadata, most apis must be implemented except the apis which are used for inquiry subject and report data,"),(0,r.kt)("li",{parentName:"ul"},"If it is for both metadata and topic data, all apis have to be implemented,"))),(0,r.kt)("li",{parentName:"ul"},"Add data source types into ",(0,r.kt)("inlineCode",{parentName:"li"},"DataSourceType"),", which in ",(0,r.kt)("inlineCode",{parentName:"li"},"watchmen-model"),","),(0,r.kt)("li",{parentName:"ul"},"Add dependency into doll and dqc instance."),(0,r.kt)("li",{parentName:"ul"},"Bingo!")),(0,r.kt)("p",null,"For defined new data source type in web client, you need to,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add data source types into ",(0,r.kt)("inlineCode",{parentName:"li"},"DataSourceType"),", which in ",(0,r.kt)("inlineCode",{parentName:"li"},"data-source-types.ts"),","),(0,r.kt)("li",{parentName:"ul"},"Add dropdown label into ",(0,r.kt)("inlineCode",{parentName:"li"},"DataSourceTypeInput"),", which in ",(0,r.kt)("inlineCode",{parentName:"li"},"data-source-type-input.tsx"),","),(0,r.kt)("li",{parentName:"ul"},"Bingo!")),(0,r.kt)("h2",{id:"data-kernel-and-surface"},"Data Kernel and Surface"),(0,r.kt)("p",null,"A set of services and rest apis are provided by data kernel and surface. Pipeline and inquiry services are built based on data kernel."),(0,r.kt)("h3",{id:"cache-service"},"Cache service"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data Sources for topic data,"),(0,r.kt)("li",{parentName:"ul"},"External writers,"),(0,r.kt)("li",{parentName:"ul"},"Topics,"),(0,r.kt)("li",{parentName:"ul"},"Pipelines,"),(0,r.kt)("li",{parentName:"ul"},"Relationship between topics and pipelines,"),(0,r.kt)("li",{parentName:"ul"},"Key store,"),(0,r.kt)("li",{parentName:"ul"},"Tenant.")),(0,r.kt)("p",null,"A high frequency question is, how to refresh cache, there are multiple servers and only one node can be cleared when call clear cache rest\napi. For this situation, a heart beat cache refresher is built-in, and visit ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../installation/config#data-kernel"},"here"))," for more\ndetails."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Heart beat of in-memory cache is not recommend in production."))),(0,r.kt)("h3",{id:"topic-data"},"Topic Data"),(0,r.kt)("p",null,"All topic data rest apis are available for tenant admin and super admin only."),(0,r.kt)("h4",{id:"retrieve-data-of-single-topic"},"Retrieve data of single topic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl \\\n--location \\ \n--request POST 'http://host:port/topic/data?topic_name=a_topic&tenant_id=1' \\\n--header 'Authorization: Bearer ...' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"pageNumber\": 1,\n    \"pageSize\": 9\n}'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"topic_name"),": case sensitive,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tenant_id"),": required when current user is super admin.")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There is no page size limitation for this api, be careful about memory and data size."))),(0,r.kt)("h4",{id:"truncate-a-single-topic"},"Truncate a single topic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl \\\n--location \\ \n--request DELETE 'http://host:port/topic/data/truncate?topic_name=a_topic&tenant_id=1' \\\n--header 'Authorization: Bearer ...'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"topic_name"),": case sensitive,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tenant_id"),": required when current user is super admin.")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There is no rollback of truncate operation, it is equivalent with database truncate."))),(0,r.kt)("h4",{id:"patch-topic-data"},"Patch topic data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl \\\n--location \\ \n--request PATCH 'http://host:port/topic/data/patch?topic_name=a_topic&patch_type=merge&tenant_id=1' \\\n--header 'Authorization: Bearer ...' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    ...\n}'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"topic_name"),": case sensitive,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"patch_type"),": one of ",(0,r.kt)("inlineCode",{parentName:"li"},"merge"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"insert")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"delete"),",",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"for ",(0,r.kt)("inlineCode",{parentName:"li"},"merge")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"delete"),": a property ",(0,r.kt)("inlineCode",{parentName:"li"},"id_")," is required in body data,"),(0,r.kt)("li",{parentName:"ul"},"for ",(0,r.kt)("inlineCode",{parentName:"li"},"merge")," and aggregation topic: a property ",(0,r.kt)("inlineCode",{parentName:"li"},"version_")," is required in body data,"),(0,r.kt)("li",{parentName:"ul"},"for ",(0,r.kt)("inlineCode",{parentName:"li"},"insert"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"id_")," will be generated, ",(0,r.kt)("inlineCode",{parentName:"li"},"version_")," is 1 when it is required,"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tenant_id"),": required when current user is super admin.")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"No pipeline will be triggered on data patch."))))}u.isMDXComponent=!0}}]);