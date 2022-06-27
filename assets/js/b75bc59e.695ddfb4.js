"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[294],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20248:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),l=["components"],o={id:"pipeline-service",title:"Pipeline Service",sidebar_position:200},p="Pipeline Service",c={unversionedId:"doll/pipeline-service",id:"version-16.2/doll/pipeline-service",title:"Pipeline Service",description:"Pipeline service is the core of _watchmen_, topic data is processed, transformed and aggregated through pipelines which are predefined.",source:"@site/versioned_docs/version-16.2/040-doll/200-pipeline-service.md",sourceDirName:"040-doll",slug:"/doll/pipeline-service",permalink:"/docs/16.2/doll/pipeline-service",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.2/040-doll/200-pipeline-service.md",tags:[],version:"16.2",lastUpdatedBy:"botlikes",lastUpdatedAt:1656325287,formattedLastUpdatedAt:"6/27/2022",sidebarPosition:200,frontMatter:{id:"pipeline-service",title:"Pipeline Service",sidebar_position:200},sidebar:"sidebar",previous:{title:"Data Service",permalink:"/docs/16.2/doll/data-service"},next:{title:"Inquiry Service",permalink:"/docs/16.2/doll/inquiry-service"}},s={},d=[{value:"Pipeline",id:"pipeline",level:2},{value:"Pipeline Kernel and Surface",id:"pipeline-kernel-and-surface",level:2},{value:"Pipeline Trigger",id:"pipeline-trigger",level:3},{value:"Compiled Pipeline and Cache",id:"compiled-pipeline-and-cache",level:3},{value:"Parse Constant Parameter",id:"parse-constant-parameter",level:4},{value:"Decryption for Factor Value",id:"decryption-for-factor-value",level:3},{value:"Alarm Action",id:"alarm-action",level:3},{value:"Retry on Insert or Merge Row",id:"retry-on-insert-or-merge-row",level:3},{value:"Retry on Aggregation Topic",id:"retry-on-aggregation-topic",level:3},{value:"External Writers",id:"external-writers",level:2},{value:"Rest Writer",id:"rest-writer",level:3},{value:"Elasticsearch Writer",id:"elasticsearch-writer",level:3},{value:"Extend External Writer",id:"extend-external-writer",level:3}],u={toc:d};function m(e){var t=e.components,o=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pipeline-service"},"Pipeline Service"),(0,a.kt)("p",null,"Pipeline service is the core of ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"watchmen")),", topic data is processed, transformed and aggregated through pipelines which are predefined.\nBefore go through the services and rest apis, let's learn about pipeline itself first."),(0,a.kt)("h2",{id:"pipeline"},"Pipeline"),(0,a.kt)("p",null,"A pipeline is made up of the following materials:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A prerequisite to decide current pipeline should be triggered or not,"),(0,a.kt)("li",{parentName:"ul"},"A set of stages to process trigger topic data. For each stage, including,",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A prerequisite to decide current stage should be run or not,"),(0,a.kt)("li",{parentName:"ul"},"A set of units to process data. For each unit, including,",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A prerequisite to decide current unit should be run or not,"),(0,a.kt)("li",{parentName:"ul"},"A loop variable (from memory variables) to decide current unit is process a list or a single data,"),(0,a.kt)("li",{parentName:"ul"},"A set of actions to process data. There are different types of actions are built-in:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Alarm action,"),(0,a.kt)("li",{parentName:"ul"},"Copy to variable action,"),(0,a.kt)("li",{parentName:"ul"},"Read row action,"),(0,a.kt)("li",{parentName:"ul"},"Read rows action,"),(0,a.kt)("li",{parentName:"ul"},"Read factor action,"),(0,a.kt)("li",{parentName:"ul"},"Read factors action,"),(0,a.kt)("li",{parentName:"ul"},"Exists action,"),(0,a.kt)("li",{parentName:"ul"},"Write row action,"),(0,a.kt)("li",{parentName:"ul"},"Insert row action,"),(0,a.kt)("li",{parentName:"ul"},"Insert or merge row action,"),(0,a.kt)("li",{parentName:"ul"},"Write factor action,"),(0,a.kt)("li",{parentName:"ul"},"Delete row action,"),(0,a.kt)("li",{parentName:"ul"},"Delete rows action.")))))))),(0,a.kt)("p",null,"To learn how to define a pipeline, visit ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../web-client/admin/pipeline"},"here"))," for more details."),(0,a.kt)("h2",{id:"pipeline-kernel-and-surface"},"Pipeline Kernel and Surface"),(0,a.kt)("p",null,"A set of services and rest apis are provided by pipeline kernel and surface."),(0,a.kt)("h3",{id:"pipeline-trigger"},"Pipeline Trigger"),(0,a.kt)("p",null,"Trigger a pipeline can be triggered synchronized,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="synchronized"',title:'"synchronized"'},'curl \\\n--location \\ \n--request POST \'http://host:port/pipeline/data?topic_name=a_topic&tenant_id=1\' \\\n--header \'Authorization: Bearer ...\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "code": "a_topic",\n    "data": {\n      ...\n    },\n    "triggerType": "insert-or-merge",\n    "tenantId": "1",\n    "traceId": "1"\n}\'\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"code"),": topic name, case sensitive,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data"),": a JSON object, topic data,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"triggerType"),": type of trigger, ",(0,a.kt)("inlineCode",{parentName:"li"},"insert"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"merge"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"insert-or-merge")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"delete")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tenantId"),": required when current user is super admin,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"traceId"),": provide only when client wants to control the trace id, otherwise engine will generate one if it is null or undefined.")),(0,a.kt)("p",null,"Or can be triggered asynchronized,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="asynchronized"',title:'"asynchronized"'},'curl \\\n--location \\ \n--request POST \'http://host:port/pipeline/data/async?topic_name=a_topic&tenant_id=1\' \\\n--header \'Authorization: Bearer ...\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "code": "a_topic",\n    "data": {\n      ...\n    },\n    "triggerType": "insert-or-merge",\n    "tenantId": "1",\n    "traceId": "1"\n}\'\n')),(0,a.kt)("h3",{id:"compiled-pipeline-and-cache"},"Compiled Pipeline and Cache"),(0,a.kt)("p",null,"For performance consideration, pipeline is compiled on first invoking. Pipeline kernel caches compiled pipeline with same lifecycle of\npipeline itself."),(0,a.kt)("h4",{id:"parse-constant-parameter"},"Parse Constant Parameter"),(0,a.kt)("p",null,"It is very complex to parse and give the semantic to a constant parameter value string, following graph explains how to parse a constant\nparameter in different situations step by step."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Constant Value Parse",src:n(67146).Z,width:"2211",height:"2072"})),(0,a.kt)("h3",{id:"decryption-for-factor-value"},"Decryption for Factor Value"),(0,a.kt)("p",null,"Factor can be defined with an encryption, and in pipeline, data is read from storage into memory. Sometimes, the encrypted data must be\ndecrypted, in this case, to enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"DECRYPT_FACTOR_VALUE"),", kernel will do decryption on read factor/factors/row/rows action."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Decryption feature can be enabled only on pipeline processing, which means it will not be decrypted on retrieve topic data directly."))),(0,a.kt)("h3",{id:"alarm-action"},"Alarm Action"),(0,a.kt)("p",null,"In the default implementation, there is only logging for alarm action, on error level with following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-logging"},"[PIPELINE] [ALARM] [SEVERITY] MESSAGE\n")),(0,a.kt)("p",null,"Scan the log file to detect alarm by external services, such as filebeat."),(0,a.kt)("h3",{id:"retry-on-insert-or-merge-row"},"Retry on Insert or Merge Row"),(0,a.kt)("p",null,"If insertion is failed when do ",(0,a.kt)("inlineCode",{parentName:"p"},"insert-or-merge-row")," action, typically it is caused by an unique index conflict exception. Kernel will try\nto do modification, and the logic is exactly same as ",(0,a.kt)("inlineCode",{parentName:"p"},"merge-row"),"."),(0,a.kt)("h3",{id:"retry-on-aggregation-topic"},"Retry on Aggregation Topic"),(0,a.kt)("p",null,"To avoid aggregation topic resource contention, there is an additional version property for each aggregation topic. In high concurrency\nscenarios, version optimistic lock conflict might be occurred. In this case, write action will do modification retrying, and if all retrying\nis failed, the last retry will use pessimistic lock to ensure success. Visit ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../installation/config#pipeline-kernel"},"here"))," for more\ndetails about the retry settings."),(0,a.kt)("h2",{id:"external-writers"},"External Writers"),(0,a.kt)("p",null,"There are two built-in external writers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Standard restful writer,"),(0,a.kt)("li",{parentName:"ul"},"Standard Elasticsearch writer.")),(0,a.kt)("h3",{id:"rest-writer"},"Rest Writer"),(0,a.kt)("p",null,"Like the following curl command,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n--location \\ \n--request POST \'some_url\' \\\n--header \'Authorization: PAT ...\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "code": "eventCode",\n    "currentData": {\n      ...\n    },\n    "previousData: {\n      ...\n    },\n    "triggerType": "insert-or-merge"\n}\'\n')),(0,a.kt)("h3",{id:"elasticsearch-writer"},"Elasticsearch Writer"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("inlineCode",{parentName:"em"},"(under construction)")))),(0,a.kt)("h3",{id:"extend-external-writer"},"Extend External Writer"),(0,a.kt)("p",null,"To extend an external writer,"),(0,a.kt)("p",null,"Fork our repo, for server side,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Find ",(0,a.kt)("inlineCode",{parentName:"li"},"init_prebuilt_external_writers")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"watchmen-pipeline-kernel"),", build your own just follow standard restful writer,"),(0,a.kt)("li",{parentName:"ul"},"Register it,"),(0,a.kt)("li",{parentName:"ul"},"Bingo!")),(0,a.kt)("p",null,"For defined new external writer type in web client, you need to,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add data source types into ",(0,a.kt)("inlineCode",{parentName:"li"},"ExternalWriterType"),", which in ",(0,a.kt)("inlineCode",{parentName:"li"},"external-writer-types.ts"),","),(0,a.kt)("li",{parentName:"ul"},"Add dropdown label into ",(0,a.kt)("inlineCode",{parentName:"li"},"ExternalWriterTypeInput"),", which in ",(0,a.kt)("inlineCode",{parentName:"li"},"external-writer-type-input.tsx"),","),(0,a.kt)("li",{parentName:"ul"},"Bingo!")))}m.isMDXComponent=!0},67146:function(e,t,n){t.Z=n.p+"assets/images/constant_value_parse-122b8ecd96247f5bdccd40b28314303e.png"}}]);