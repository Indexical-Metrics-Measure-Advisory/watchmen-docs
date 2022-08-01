"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[7019],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},28335:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(83117),i=(a(67294),a(3905));const r={id:"data-service",title:"Data Service",sidebar_position:100},l="Data Service",o={unversionedId:"doll/data-service",id:"version-16.0/doll/data-service",title:"Data Service",description:"Data service is designed for serve such as definition CURD, pipeline and inquiry. It is split to several modules:",source:"@site/versioned_docs/version-16.0/040-doll/100-data-service.md",sourceDirName:"040-doll",slug:"/doll/data-service",permalink:"/docs/16.0/doll/data-service",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.0/040-doll/100-data-service.md",tags:[],version:"16.0",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1659345882,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:100,frontMatter:{id:"data-service",title:"Data Service",sidebar_position:100},sidebar:"sidebar",previous:{title:"Doll Overview",permalink:"/docs/16.0/doll/doll-index"},next:{title:"Pipeline Service",permalink:"/docs/16.0/doll/pipeline-service"}},s={},d=[{value:"Model",id:"model",level:2},{value:"Tenant Based",id:"tenant-based",level:3},{value:"User Based",id:"user-based",level:3},{value:"Others",id:"others",level:3},{value:"Meta Service",id:"meta-service",level:2},{value:"Storage",id:"storage",level:2},{value:"Snowflake Sequence Generator",id:"snowflake-sequence-generator",level:3},{value:"Extend Data Source Types",id:"extend-data-source-types",level:3},{value:"Data Kernel and Surface",id:"data-kernel-and-surface",level:2},{value:"Cache service",id:"cache-service",level:3},{value:"Topic Data",id:"topic-data",level:3},{value:"Retrieve data of single topic",id:"retrieve-data-of-single-topic",level:4},{value:"Truncate a single topic",id:"truncate-a-single-topic",level:4},{value:"Patch topic data",id:"patch-topic-data",level:4}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-service"},"Data Service"),(0,i.kt)("p",null,"Data service is designed for serve such as definition CURD, pipeline and inquiry. It is split to several modules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Model,"),(0,i.kt)("li",{parentName:"ul"},"Storage,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MySQL,"),(0,i.kt)("li",{parentName:"ul"},"Oracle,"),(0,i.kt)("li",{parentName:"ul"},"MongoDB,"),(0,i.kt)("li",{parentName:"ul"},"MSSQL,"))),(0,i.kt)("li",{parentName:"ul"},"Meta,"),(0,i.kt)("li",{parentName:"ul"},"Data Kernel,"),(0,i.kt)("li",{parentName:"ul"},"Data Surface.")),(0,i.kt)("h2",{id:"model"},"Model"),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"watchmen-model"),", all tuples are defined. Basically, they can be arranged to 3 catalogs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tenant based,"),(0,i.kt)("li",{parentName:"ul"},"User based,"),(0,i.kt)("li",{parentName:"ul"},"Others.")),(0,i.kt)("h3",{id:"tenant-based"},"Tenant Based"),(0,i.kt)("p",null,"Tenant based models are designed to be shared in tenant, most tenant based models have optimistic lock:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tenant,"),(0,i.kt)("li",{parentName:"ul"},"User,"),(0,i.kt)("li",{parentName:"ul"},"Data Source,"),(0,i.kt)("li",{parentName:"ul"},"External Writer,"),(0,i.kt)("li",{parentName:"ul"},"User Group,"),(0,i.kt)("li",{parentName:"ul"},"Space,"),(0,i.kt)("li",{parentName:"ul"},"Enumeration,"),(0,i.kt)("li",{parentName:"ul"},"Topic,"),(0,i.kt)("li",{parentName:"ul"},"Pipeline,"),(0,i.kt)("li",{parentName:"ul"},"Catalog,"),(0,i.kt)("li",{parentName:"ul"},"Monitor Rule (no optimistic lock declared).")),(0,i.kt)("h3",{id:"user-based"},"User Based"),(0,i.kt)("p",null,"User based models are designed to store data which belongs to particular user only:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Favorite,"),(0,i.kt)("li",{parentName:"ul"},"Last Snapshot,"),(0,i.kt)("li",{parentName:"ul"},"Personal Access Token,"),(0,i.kt)("li",{parentName:"ul"},"Connected Space,"),(0,i.kt)("li",{parentName:"ul"},"Connected Space Graphic,"),(0,i.kt)("li",{parentName:"ul"},"Subject,"),(0,i.kt)("li",{parentName:"ul"},"Report,"),(0,i.kt)("li",{parentName:"ul"},"Dashboard,"),(0,i.kt)("li",{parentName:"ul"},"Pipeline Graphic.")),(0,i.kt)("h3",{id:"others"},"Others"),(0,i.kt)("p",null,"Typically, model which is not a tenant based or an user based, is designed for system purpose."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Factor Index"),(0,i.kt)("li",{parentName:"ul"},"Pipeline Index"),(0,i.kt)("li",{parentName:"ul"},"Key Store")),(0,i.kt)("h2",{id:"meta-service"},"Meta Service"),(0,i.kt)("p",null,"The CRUD operations of models are provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"watchmen-meta"),", and persistent layer of meta service is provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"watchmen-storage"),". All\nmetadata are stored in one storage, it can be RDS or NoSQL."),(0,i.kt)("h2",{id:"storage"},"Storage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"watchmen-storage")," is spi for different types of storages, such as MySQL, Oracle, etc. To enable the particular storage, the adaptive\nimplementation module should be included."),(0,i.kt)("p",null,"Storage provides persistent layer both for meta service and data service. For meta service, find configuration\ndetails ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"../installation/config#meta"},"here"),".")),(0,i.kt)("h3",{id:"snowflake-sequence-generator"},"Snowflake Sequence Generator"),(0,i.kt)("p",null,"In storage module, there is a built-in snowflake sequence generator. Small changes made based on the standard algorithm, which are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"At most 4 data centers are supported, default is 0,"),(0,i.kt)("li",{parentName:"ul"},"At most 1024 workers for each data center are supported, default is 0 too.")),(0,i.kt)("p",null,"It is expected that worker ids setting can be ignored when deploy watchmen to servers, it is no need to care about settings for each server\n, docker image and system variables of host server. Consider of this, a built-in mechanism called competitive worker is provided, and by\ndefault it is enabled. It acquires a worker id when server starting, and keep declaring itself alive to meta storage every 60 seconds when\ndefault settings is kept. Plus, an unused worker id would be released and reused after 1 day."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Default competitive worker is based on persistent layer, all data can be found at ",(0,i.kt)("inlineCode",{parentName:"p"},"snowflake_competitive_workers"),". Manually clean dead\nworker ids when necessary.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Declare data center id and worker id by system variables for each node separated is recommended where conditions permit. Simply disable the\ncompetitive workers by settings parameter.   ")),(0,i.kt)("h3",{id:"extend-data-source-types"},"Extend Data Source Types"),(0,i.kt)("p",null,"MySQL, Oracle, MSSQL and mongoDB are built-in now. If you want to extend a new data source type, follow the steps to\ncreate supporting a type ",(0,i.kt)("inlineCode",{parentName:"p"},"SomeDB"),"."),(0,i.kt)("p",null,"First fork our repo, for server side,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add a new package, which named ",(0,i.kt)("inlineCode",{parentName:"li"},"watchmen-storage-somedb"),","),(0,i.kt)("li",{parentName:"ul"},"Copy source from the analogue, such as from ",(0,i.kt)("inlineCode",{parentName:"li"},"watchmen-storage-mysql"),","),(0,i.kt)("li",{parentName:"ul"},"Go through source codes, change them,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If it is only for topic data, only a few apis should be implemented, find ",(0,i.kt)("inlineCode",{parentName:"li"},"watchmen-inquiry-trino")," as a sample,"),(0,i.kt)("li",{parentName:"ul"},"If it is for metadata, most apis must be implemented except the apis which are used for inquiry subject and report data,"),(0,i.kt)("li",{parentName:"ul"},"If it is for both metadata and topic data, all apis have to be implemented,"))),(0,i.kt)("li",{parentName:"ul"},"Add data source types into ",(0,i.kt)("inlineCode",{parentName:"li"},"DataSourceType"),", which in ",(0,i.kt)("inlineCode",{parentName:"li"},"watchmen-model"),","),(0,i.kt)("li",{parentName:"ul"},"Add dependency into doll and dqc instance."),(0,i.kt)("li",{parentName:"ul"},"Bingo!")),(0,i.kt)("p",null,"For defined new data source type in web client, you need to,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add data source types into ",(0,i.kt)("inlineCode",{parentName:"li"},"DataSourceType"),", which in ",(0,i.kt)("inlineCode",{parentName:"li"},"data-source-types.ts"),","),(0,i.kt)("li",{parentName:"ul"},"Add dropdown label into ",(0,i.kt)("inlineCode",{parentName:"li"},"DataSourceTypeInput"),", which in ",(0,i.kt)("inlineCode",{parentName:"li"},"data-source-type-input.tsx"),","),(0,i.kt)("li",{parentName:"ul"},"Bingo!")),(0,i.kt)("h2",{id:"data-kernel-and-surface"},"Data Kernel and Surface"),(0,i.kt)("p",null,"A set of services and rest apis are provided by data kernel and surface. Pipeline and inquiry services are built based on data kernel."),(0,i.kt)("h3",{id:"cache-service"},"Cache service"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data Sources for topic data,"),(0,i.kt)("li",{parentName:"ul"},"External writers,"),(0,i.kt)("li",{parentName:"ul"},"Topics,"),(0,i.kt)("li",{parentName:"ul"},"Pipelines,"),(0,i.kt)("li",{parentName:"ul"},"Relationship between topics and pipelines,"),(0,i.kt)("li",{parentName:"ul"},"Key store,"),(0,i.kt)("li",{parentName:"ul"},"Tenant.")),(0,i.kt)("p",null,"A high frequency question is, how to refresh cache, there are multiple servers and only one node can be cleared when call clear cache rest\napi. For this situation, a heart beat cache refresher is built-in, and visit ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"../installation/config#data-kernel"},"here"))," for more\ndetails."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Heart beat of in-memory cache is not recommend in production.")),(0,i.kt)("h3",{id:"topic-data"},"Topic Data"),(0,i.kt)("p",null,"All topic data rest apis are available for tenant admin and super admin only."),(0,i.kt)("h4",{id:"retrieve-data-of-single-topic"},"Retrieve data of single topic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl \\\n--location \\ \n--request POST 'http://host:port/topic/data?topic_name=a_topic&tenant_id=1' \\\n--header 'Authorization: Bearer ...' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"pageNumber\": 1,\n    \"pageSize\": 9\n}'\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"topic_name"),": case sensitive,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tenant_id"),": required when current user is super admin.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"There is no page size limitation for this api, be careful about memory and data size.")),(0,i.kt)("h4",{id:"truncate-a-single-topic"},"Truncate a single topic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl \\\n--location \\ \n--request DELETE 'http://host:port/topic/data/truncate?topic_name=a_topic&tenant_id=1' \\\n--header 'Authorization: Bearer ...'\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"topic_name"),": case sensitive,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tenant_id"),": required when current user is super admin.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"There is no rollback of truncate operation, it is equivalent with database truncate.")),(0,i.kt)("h4",{id:"patch-topic-data"},"Patch topic data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl \\\n--location \\ \n--request PATCH 'http://host:port/topic/data/patch?topic_name=a_topic&patch_type=merge&tenant_id=1' \\\n--header 'Authorization: Bearer ...' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    ...\n}'\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"topic_name"),": case sensitive,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"patch_type"),": one of ",(0,i.kt)("inlineCode",{parentName:"li"},"merge"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"insert")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"delete"),",",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"for ",(0,i.kt)("inlineCode",{parentName:"li"},"merge")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"delete"),": a property ",(0,i.kt)("inlineCode",{parentName:"li"},"id_")," is required in body data,"),(0,i.kt)("li",{parentName:"ul"},"for ",(0,i.kt)("inlineCode",{parentName:"li"},"merge")," and aggregation topic: a property ",(0,i.kt)("inlineCode",{parentName:"li"},"version_")," is required in body data,"),(0,i.kt)("li",{parentName:"ul"},"for ",(0,i.kt)("inlineCode",{parentName:"li"},"insert"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"id_")," will be generated, ",(0,i.kt)("inlineCode",{parentName:"li"},"version_")," is 1 when it is required,"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tenant_id"),": required when current user is super admin.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"No pipeline will be triggered on data patch.")))}c.isMDXComponent=!0}}]);