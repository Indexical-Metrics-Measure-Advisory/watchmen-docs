"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[2386],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82661:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={id:"integration",title:"Integration",sidebar_position:40},p="Integration",s={unversionedId:"installation/integration",id:"installation/integration",title:"Integration",description:"PAT Token",source:"@site/docs/060-installation/040-integration.md",sourceDirName:"060-installation",slug:"/installation/integration",permalink:"/docs/next/installation/integration",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/docs/060-installation/040-integration.md",tags:[],version:"current",lastUpdatedBy:"botlikes",lastUpdatedAt:1655877324,formattedLastUpdatedAt:"6/22/2022",sidebarPosition:40,frontMatter:{id:"integration",title:"Integration",sidebar_position:40},sidebar:"sidebar",previous:{title:"Deployment",permalink:"/docs/next/installation/deploy"},next:{title:"Upgrade to 16",permalink:"/docs/next/installation/migration"}},d={},c=[{value:"PAT Token",id:"pat-token",level:2},{value:"Collection",id:"collection",level:2},{value:"API for import raw data, trigger pipeline",id:"api-for-import-raw-data-trigger-pipeline",level:3},{value:"Via Other Middleware",id:"via-other-middleware",level:3},{value:"Kafka",id:"kafka",level:4},{value:"Rabbit Mq",id:"rabbit-mq",level:4},{value:"Third Party BI",id:"third-party-bi",level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integration"},"Integration"),(0,i.kt)("h2",{id:"pat-token"},"PAT Token"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login with admin user,"),(0,i.kt)("li",{parentName:"ul"},"Go to ","[",(0,i.kt)("strong",{parentName:"li"},"Setting"),"]",","),(0,i.kt)("li",{parentName:"ul"},"Generate ",(0,i.kt)("inlineCode",{parentName:"li"},"PAT")," with name,"),(0,i.kt)("li",{parentName:"ul"},"Copy ",(0,i.kt)("inlineCode",{parentName:"li"},"PAT")," token.")),(0,i.kt)("h2",{id:"collection"},"Collection"),(0,i.kt)("h3",{id:"api-for-import-raw-data-trigger-pipeline"},"API for import raw data, trigger pipeline"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"headers[\"authorization\"] = \"pat \" + token\nevent_data = {\n    'code': 'event_code',       # raw topic name\n    'data': {                   # raw topic data\n        # ...data\n    },\n    'triggerType': 'insert'     # always be insert for raw data\n}\n\nresponse = requests.post(\n    'http://localhost:8000/pipeline/data', data=json.dumps(event_data), headers=headers)\nreturn response.json()\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Or use ",(0,i.kt)("inlineCode",{parentName:"h5"},"/pipeline/data/async"),", it returns once data saved and trigger pipelines processing asynchronously.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})),(0,i.kt)("h3",{id:"via-other-middleware"},"Via Other Middleware"),(0,i.kt)("h4",{id:"kafka"},"Kafka"),(0,i.kt)("p",null,"Send raw data to topic (KAFKA_TOPICS)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "code": "a_topic",\n    "data": {\n        // ...\n    },\n    "triggerType": "insert-or-merge",\n    "tenantId": "1",\n    "traceId": "1",\n    "pat": "..."\n}\n')),(0,i.kt)("p",null,"Visit ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"../doll/pipeline-service#pipeline-trigger"},"here"))," for description of properties. And for Kafka, one more property ",(0,i.kt)("inlineCode",{parentName:"p"},"pat")," is\nrequired."),(0,i.kt)("h4",{id:"rabbit-mq"},"Rabbit Mq"),(0,i.kt)("p",null,"Send raw data to queue with exchange."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "code": "a_topic",\n    "data": {\n        // ...\n    },\n    "triggerType": "insert-or-merge",\n    "tenantId": "1",\n    "traceId": "1",\n    "pat": "..."\n}\n')),(0,i.kt)("p",null,"Visit ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"../doll/pipeline-service#pipeline-trigger"},"here"))," for description of properties. And for RabbitMQ, one more property ",(0,i.kt)("inlineCode",{parentName:"p"},"pat")," is\nrequired."),(0,i.kt)("h2",{id:"third-party-bi"},"Third Party BI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.holistics.io/blog/the-most-powerful-bi-reporting-tools-for-presto/"},"Holistics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.looker.com/setup-and-management/database-config/prestodb"},"Looker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.sisense.com/data-connectors/presto/"},"Sisense")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.tableau.com/current/pro/desktop/en-us/examples_presto.htm"},"Tableau")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.metabase.com/data_sources/presto"},"Metabase")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://superset.apache.org/docs/databases/presto"},"Superset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redash.io/data-sources/presto"},"Redash"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Connect BI to Trino (If it is enabled) or storage directly."))),(0,i.kt)("p",null,"And use Starburst ODBC driver,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.qlik.com/en-US/connectors/Subsystems/ODBC_connector_help/Content/Connectors_ODBC/Presto/Create-Presto-connection.htm"},"Qlik")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.starburst.io/data-consumer/clients/powerbi.html"},"PowerBI"))))}u.isMDXComponent=!0}}]);