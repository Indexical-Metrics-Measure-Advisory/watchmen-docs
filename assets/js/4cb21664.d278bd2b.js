"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(83117),a=(n(67294),n(3905));const i={id:"integration",title:"Integration",sidebar_position:40},o="Integration",l={unversionedId:"installation/integration",id:"version-16.3/installation/integration",title:"Integration",description:"PAT Token",source:"@site/versioned_docs/version-16.3/060-installation/040-integration.md",sourceDirName:"060-installation",slug:"/installation/integration",permalink:"/docs/16.3/installation/integration",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.3/060-installation/040-integration.md",tags:[],version:"16.3",lastUpdatedBy:"botlikes",lastUpdatedAt:1659078169,formattedLastUpdatedAt:"Jul 29, 2022",sidebarPosition:40,frontMatter:{id:"integration",title:"Integration",sidebar_position:40},sidebar:"sidebar",previous:{title:"Deployment",permalink:"/docs/16.3/installation/deploy"},next:{title:"Upgrade to 16",permalink:"/docs/16.3/installation/migration"}},p={},s=[{value:"PAT Token",id:"pat-token",level:2},{value:"Collection",id:"collection",level:2},{value:"API for import raw data, trigger pipeline",id:"api-for-import-raw-data-trigger-pipeline",level:3},{value:"Via Other Middleware",id:"via-other-middleware",level:3},{value:"Kafka",id:"kafka",level:4},{value:"Rabbit Mq",id:"rabbit-mq",level:4},{value:"Third Party BI",id:"third-party-bi",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integration"},"Integration"),(0,a.kt)("h2",{id:"pat-token"},"PAT Token"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Login with admin user,"),(0,a.kt)("li",{parentName:"ul"},"Go to ","[",(0,a.kt)("strong",{parentName:"li"},"Setting"),"]",","),(0,a.kt)("li",{parentName:"ul"},"Generate ",(0,a.kt)("inlineCode",{parentName:"li"},"PAT")," with name,"),(0,a.kt)("li",{parentName:"ul"},"Copy ",(0,a.kt)("inlineCode",{parentName:"li"},"PAT")," token.")),(0,a.kt)("h2",{id:"collection"},"Collection"),(0,a.kt)("h3",{id:"api-for-import-raw-data-trigger-pipeline"},"API for import raw data, trigger pipeline"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"headers[\"authorization\"] = \"pat \" + token\nevent_data = {\n    'code': 'event_code',       # raw topic name\n    'data': {                   # raw topic data\n        # ...data\n    },\n    'triggerType': 'insert'     # always be insert for raw data\n}\n\nresponse = requests.post(\n    'http://localhost:8000/pipeline/data', data=json.dumps(event_data), headers=headers)\nreturn response.json()\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Or use ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"/pipeline/data/async"),", it returns once data saved and trigger pipelines processing asynchronously.")),(0,a.kt)("h3",{id:"via-other-middleware"},"Via Other Middleware"),(0,a.kt)("h4",{id:"kafka"},"Kafka"),(0,a.kt)("p",null,"Send raw data to topic (KAFKA_TOPICS)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "code": "a_topic",\n    "data": {\n        // ...\n    },\n    "triggerType": "insert-or-merge",\n    "tenantId": "1",\n    "traceId": "1",\n    "pat": "..."\n}\n')),(0,a.kt)("p",null,"Visit ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../doll/pipeline-service#pipeline-trigger"},"here"))," for description of properties. And for Kafka, one more property ",(0,a.kt)("inlineCode",{parentName:"p"},"pat")," is\nrequired."),(0,a.kt)("h4",{id:"rabbit-mq"},"Rabbit Mq"),(0,a.kt)("p",null,"Send raw data to queue with exchange."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "code": "a_topic",\n    "data": {\n        // ...\n    },\n    "triggerType": "insert-or-merge",\n    "tenantId": "1",\n    "traceId": "1",\n    "pat": "..."\n}\n')),(0,a.kt)("p",null,"Visit ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../doll/pipeline-service#pipeline-trigger"},"here"))," for description of properties. And for RabbitMQ, one more property ",(0,a.kt)("inlineCode",{parentName:"p"},"pat")," is\nrequired."),(0,a.kt)("h2",{id:"third-party-bi"},"Third Party BI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.holistics.io/blog/the-most-powerful-bi-reporting-tools-for-presto/"},"Holistics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.looker.com/setup-and-management/database-config/prestodb"},"Looker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.sisense.com/data-connectors/presto/"},"Sisense")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://help.tableau.com/current/pro/desktop/en-us/examples_presto.htm"},"Tableau")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.metabase.com/data_sources/presto"},"Metabase")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://superset.apache.org/docs/databases/presto"},"Superset")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redash.io/data-sources/presto"},"Redash"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Connect BI to Trino (If it is enabled) or storage directly.")),(0,a.kt)("p",null,"And use Starburst ODBC driver,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://help.qlik.com/en-US/connectors/Subsystems/ODBC_connector_help/Content/Connectors_ODBC/Presto/Create-Presto-connection.htm"},"Qlik")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.starburst.io/data-consumer/clients/powerbi.html"},"PowerBI"))))}c.isMDXComponent=!0}}]);