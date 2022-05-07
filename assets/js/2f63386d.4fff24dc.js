"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[2201],{3905:function(t,a,n){n.d(a,{Zo:function(){return u},kt:function(){return N}});var e=n(67294);function r(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function l(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function i(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function p(t,a){if(null==t)return{};var n,e,r=function(t,a){if(null==t)return{};var n,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)n=l[e],a.indexOf(n)>=0||(r[n]=t[n]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)n=l[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=e.createContext({}),m=function(t){var a=e.useContext(d),n=a;return t&&(n="function"==typeof t?t(a):i(i({},a),t)),n},u=function(t){var a=m(t.components);return e.createElement(d.Provider,{value:a},t.children)},o={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},k=e.forwardRef((function(t,a){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=m(n),N=r,g=k["".concat(d,".").concat(N)]||k[N]||o[N]||l;return n?e.createElement(g,i(i({ref:a},u),{},{components:n})):e.createElement(g,i({ref:a},u))}));function N(t,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return e.createElement.apply(null,i)}return e.createElement.apply(null,n)}k.displayName="MDXCreateElement"},49740:function(t,a,n){n.r(a),n.d(a,{assets:function(){return u},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return o}});var e=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],p={id:"doll-configuration",title:"Configuration",sidebar_position:5},d="Configuration",m={unversionedId:"doll/doll-configuration",id:"version-15.2.14/doll/doll-configuration",title:"Configuration",description:"Master data storage",source:"@site/versioned_docs/version-15.2.14/doll/configuration.md",sourceDirName:"doll",slug:"/doll/doll-configuration",permalink:"/docs/15.2.14/doll/doll-configuration",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-15.2.14/doll/configuration.md",tags:[],version:"15.2.14",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1651961860,formattedLastUpdatedAt:"5/7/2022",sidebarPosition:5,frontMatter:{id:"doll-configuration",title:"Configuration",sidebar_position:5},sidebar:"sidebar",previous:{title:"Doll Overview",permalink:"/docs/15.2.14/doll/doll-index"},next:{title:"Built-in External Writers",permalink:"/docs/15.2.14/doll/built-in/built-in-external-writers"}},u={},o=[{value:"Master data storage",id:"master-data-storage",level:2},{value:"Distributed SQL Engine",id:"distributed-sql-engine",level:2},{value:"Data collection protocol",id:"data-collection-protocol",level:2},{value:"Kafka parameters",id:"kafka-parameters",level:3},{value:"rabbitmq parameters",id:"rabbitmq-parameters",level:3},{value:"feature flags",id:"feature-flags",level:2},{value:"others",id:"others",level:2},{value:"data security",id:"data-security",level:3},{value:"log",id:"log",level:3}],k={toc:o};function N(t){var a=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,e.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"configuration"},"Configuration"),(0,l.kt)("h2",{id:"master-data-storage"},"Master data storage"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Configuration param"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"STORAGE_ENGINE"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql , mongo , oracle"),(0,l.kt)("td",{parentName:"tr",align:null},"mongo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"MONGO_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"mongodb url"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"MONGO_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"mongodb port"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"MONGO_DATABASE"),(0,l.kt)("td",{parentName:"tr",align:null},"mongodb schema"),(0,l.kt)("td",{parentName:"tr",align:null},"watchmen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"MONGO_USERNAME"),(0,l.kt)("td",{parentName:"tr",align:null},"mongodb username"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"MONGO_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null},"mongodb password"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"MYSQL_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql host"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"MYSQL_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql port"),(0,l.kt)("td",{parentName:"tr",align:null},"3306")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"MYSQL_USER"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql user"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"MYSQL_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql password"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"MYSQL_DATABASE"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql database"),(0,l.kt)("td",{parentName:"tr",align:null},"watchmen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"MYSQL_POOL_MAXCONNECTIONS"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql pool max connection"),(0,l.kt)("td",{parentName:"tr",align:null},"6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"MYSQL_POOL_MINCACHED"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"MYSQL_POOL_MAXCACHED"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"MYSQL_ECHO"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql log flag"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"ORACLE_LIB_DIR"),(0,l.kt)("td",{parentName:"tr",align:null},"oracle client path"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"17"),(0,l.kt)("td",{parentName:"tr",align:null},"ORACLE_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"oracle host"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"18"),(0,l.kt)("td",{parentName:"tr",align:null},"ORACLE_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"oracle post"),(0,l.kt)("td",{parentName:"tr",align:null},"1521")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"19"),(0,l.kt)("td",{parentName:"tr",align:null},"ORACLE_USER"),(0,l.kt)("td",{parentName:"tr",align:null},"oracle user"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"ORACLE_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null},"oracle password"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"21"),(0,l.kt)("td",{parentName:"tr",align:null},"ORACLE_SERVICE"),(0,l.kt)("td",{parentName:"tr",align:null},"oracle service name"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"22"),(0,l.kt)("td",{parentName:"tr",align:null},"ORACLE_SID"),(0,l.kt)("td",{parentName:"tr",align:null},"oracle sid name"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"distributed-sql-engine"},"Distributed SQL Engine"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Configuration param"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"PRESTO_ON"),(0,l.kt)("td",{parentName:"tr",align:null},"presto flag"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"PRESTO_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"presto host url"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"PRESTO_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"presto port"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"PRESTO_USER"),(0,l.kt)("td",{parentName:"tr",align:null},"presto user"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"PRESTO_LIB"),(0,l.kt)("td",{parentName:"tr",align:null},"trino or prestodb"),(0,l.kt)("td",{parentName:"tr",align:null},"trino")))),(0,l.kt)("h2",{id:"data-collection-protocol"},"Data collection protocol"),(0,l.kt)("h3",{id:"kafka-parameters"},"Kafka parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Configuration param"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTOR_RABBITMQ"),(0,l.kt)("td",{parentName:"tr",align:null},"user rabbitmq connector"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"RABBITMQ_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"rabbitmq host"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"RABBITMQ_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"rabbitmq port"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"RABBITMQ_USERNAME"),(0,l.kt)("td",{parentName:"tr",align:null},"rabbitmq username"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"RABBITMQ_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null},"rabbitmq password"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"RABBITMQ_VIRTUALHOST"),(0,l.kt)("td",{parentName:"tr",align:null},"rabbitmq virtualhost"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"RABBITMQ_QUEUE"),(0,l.kt)("td",{parentName:"tr",align:null},"rabbitmq queue name"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"RABBITMQ_DURABLE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"RABBITMQ_AUTO_DELETE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"rabbitmq-parameters"},"rabbitmq parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Configuration param"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTOR_KAFKA"),(0,l.kt)("td",{parentName:"tr",align:null},"use kafak connector"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"KAFKA_BOOTSTRAP_SERVER"),(0,l.kt)("td",{parentName:"tr",align:null},"kafka server url"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"KAFKA_TOPICS"),(0,l.kt)("td",{parentName:"tr",align:null},"kafka topic list"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"feature-flags"},"feature flags"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Configuration param"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"DASK_ON"),(0,l.kt)("td",{parentName:"tr",align:null},"open dask workers for data pipeline"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"EXTERNAL_WRITER_ON"),(0,l.kt)("td",{parentName:"tr",align:null},"add external writer feature"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"PROMETHEUS_ON"),(0,l.kt)("td",{parentName:"tr",align:null},"open prometheus monitor feature"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"INDEX_ON"),(0,l.kt)("td",{parentName:"tr",align:null},"build index topic and pipeline table on  factor level"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"DATA_SECURITY_ON"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h2",{id:"others"},"others"),(0,l.kt)("h3",{id:"data-security"},"data security"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Configuration param"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"KEY_MANAGEMENT_TYPE"),(0,l.kt)("td",{parentName:"tr",align:null},"current version only support db"),(0,l.kt)("td",{parentName:"tr",align:null},"default is db")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"42"),(0,l.kt)("td",{parentName:"tr",align:null},"ENVIRONMENT"),(0,l.kt)("td",{parentName:"tr",align:null},"dev or production"),(0,l.kt)("td",{parentName:"tr",align:null},"dev")))),(0,l.kt)("h3",{id:"log"},"log"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Configuration param"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"LOGGER_FILE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'"temp/rotating.log"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"LOGGER_JSON_FORMAT"),(0,l.kt)("td",{parentName:"tr",align:null},"Log format for generating JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"LOGGER_FILE_ON"),(0,l.kt)("td",{parentName:"tr",align:null},"Turn on the function of writing log data to file"),(0,l.kt)("td",{parentName:"tr",align:null},"Ture")))))}N.isMDXComponent=!0}}]);