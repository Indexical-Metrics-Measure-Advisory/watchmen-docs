"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=i,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(83117),i=(n(67294),n(3905));const r={id:"inquiry-service",title:"Inquiry Service",sidebar_position:300},o="Inquiry Service",l={unversionedId:"doll/inquiry-service",id:"version-16.3/doll/inquiry-service",title:"Inquiry Service",description:"Inquiry service is designed for serve subject and report inquiry. Subject inquiry is more like a dataset, report is higher order layer which",source:"@site/versioned_docs/version-16.3/040-doll/300-inquiry-service.md",sourceDirName:"040-doll",slug:"/doll/inquiry-service",permalink:"/docs/16.3/doll/inquiry-service",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.3/040-doll/300-inquiry-service.md",tags:[],version:"16.3",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1680953158,formattedLastUpdatedAt:"Apr 8, 2023",sidebarPosition:300,frontMatter:{id:"inquiry-service",title:"Inquiry Service",sidebar_position:300},sidebar:"sidebar",previous:{title:"Pipeline Service",permalink:"/docs/16.3/doll/pipeline-service"},next:{title:"Doll REST",permalink:"/docs/16.3/doll/rest-doll"}},p={},d=[{value:"Inquiry Data",id:"inquiry-data",level:2},{value:"Fetch data via api",id:"fetch-data-via-api",level:3},{value:"Conditions",id:"conditions",level:3},{value:"Joint",id:"joint",level:4},{value:"Expression",id:"expression",level:4},{value:"Factor Parameter",id:"factor-parameter",level:4},{value:"Constant Parameter",id:"constant-parameter",level:4},{value:"Compute Parameter",id:"compute-parameter",level:4},{value:"A Sample of condition",id:"a-sample-of-condition",level:4},{value:"Trino",id:"trino",level:2}],s={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"inquiry-service"},"Inquiry Service"),(0,i.kt)("p",null,"Inquiry service is designed for serve subject and report inquiry. Subject inquiry is more like a dataset, report is higher order layer which\nbased on subject, additional provide aggregation and funnels."),(0,i.kt)("p",null,"To simplify the syntax of subject and report, one rest api is designed to fetch subject data. In this api, predefined filters from space and\nsubject will be applied automatically. Extra conditions can be submitted, and data columns and their aggregation arithmetic can be appointed\nas well."),(0,i.kt)("h2",{id:"inquiry-data"},"Inquiry Data"),(0,i.kt)("h3",{id:"fetch-data-via-api"},"Fetch data via api"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n--location \\ \n--request POST \'http://host:port//subject/data/criteria\' \\\n--header \'Authorization: Bearer ...\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "subjectId": "1",\n    "subjectName": "",\n    "indicators": [\n        {\n            "name": "subject_column_alias",\n            "arithmetic": "none"\n        },\n    ],\n    "conditions": [],\n    "pageNumber": 1,\n    "pageSize": 9\n}\'\n')),(0,i.kt)("p",null,"Same as the first api, the response is a data page, and with same structure."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One of ",(0,i.kt)("inlineCode",{parentName:"li"},"subjectId")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"subjectName")," is required,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"subjectName")," is case sensitive,"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"indicators")," is an array of data columns,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," of each indicator must be alias name of subject column,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"arithmetic")," of each indicator could be one of ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"sum"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"count"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"avg"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"max"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"min"),",",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"arithmetic")," will be treated as ",(0,i.kt)("inlineCode",{parentName:"li"},"none")," when it is lacked,"),(0,i.kt)("li",{parentName:"ul"},"Aggregation arithmetic can apply to numeric value column expect ",(0,i.kt)("inlineCode",{parentName:"li"},"count"),","))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"conditions")," is an array of data criteria on ",(0,i.kt)("inlineCode",{parentName:"li"},"and"),",",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"conditions")," is designed for supporting complex scenarios, following chapter will explain this.")))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This specific rest api is designed for web client, typically page size would be 100, therefore there is no page size limitation in server\nside.")),(0,i.kt)("h3",{id:"conditions"},"Conditions"),(0,i.kt)("p",null,"There are two types of condition, which are joint and expression."),(0,i.kt)("h4",{id:"joint"},"Joint"),(0,i.kt)("p",null,"Structure of a joint should be following,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "jointType": "and",\n    "filters": []\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jointType"),": one of ",(0,i.kt)("inlineCode",{parentName:"li"},"and"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"or"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filters"),": set of conditions, each element could be a joint or an expression.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Do not submit a joint with no filters.")),(0,i.kt)("h4",{id:"expression"},"Expression"),(0,i.kt)("p",null,"Structure of an expression should be following,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "left": {},\n    "operator": "equals",\n    "right": {}\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"left")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"right"),": parameter of expression, which is an object might be one of three types,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"factor parameter,"),(0,i.kt)("li",{parentName:"ul"},"constant parameter,"),(0,i.kt)("li",{parentName:"ul"},"computed parameter,"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"operator"),": how to compute the expression, one of,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"empty"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"not-empty"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"equals"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"not-equals"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"less"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"less-equals"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"more"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"more-equals"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"in"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"not-in"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"right")," is not needed when ",(0,i.kt)("inlineCode",{parentName:"li"},"operator")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"empty")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"not-empty"),".")))),(0,i.kt)("h4",{id:"factor-parameter"},"Factor Parameter"),(0,i.kt)("p",null,"In subject inquiry, the source of data always be given subject, therefore, submit factor parameter by subject column alias."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "kind": "topic",\n    "factorId": "subject_column_alias"\n}\n')),(0,i.kt)("h4",{id:"constant-parameter"},"Constant Parameter"),(0,i.kt)("p",null,"Use constant value to describe a statement, it can be a static value, a list of values, a function call, etc. The basic structure should be\nfollowing,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "kind": "constant",\n    "value": "any_statement"\n}\n')),(0,i.kt)("p",null,"And here are some valid statements,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'// simple static value\n{ "value": "1" },\n// date\n{ "value": "2020/08/16" },\n// call function to get current date\n{ "value": "{&now}" },\n// call function to compute day diff from orderDate to now\n{ "value": "{&dayDiff(&now, &orderDate)}" },\n// a list values, NY and CA. for in or not-in\n{ "value": "NY,CA" }                             \n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Embedded functions of pipeline are also available in subject inquiry.")),(0,i.kt)("h4",{id:"compute-parameter"},"Compute Parameter"),(0,i.kt)("p",null,"Parameter can be computed, like this,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "kind": "computed",\n    "type": "add",\n    "parameters": []\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),": is one of,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"subtract"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"multiple"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"divide"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"modulus"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"year-of"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"half-year-of"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"quarter-of"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"month-of"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"week-of-year"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"week-of-month"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"day-of-month"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"day-of-week"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"case-then"),","))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parameters"),": a list of parameters,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"for arithmetic function, count in unlimited,"),(0,i.kt)("li",{parentName:"ul"},"for datetime function, only one parameter is allowed,"),(0,i.kt)("li",{parentName:"ul"},"for case then,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"at most one anyway route is allowed, any other routes must be declared with conditional,"),(0,i.kt)("li",{parentName:"ul"},"anyway route will be sorted to last of all routes,"),(0,i.kt)("li",{parentName:"ul"},"two more properties ",(0,i.kt)("inlineCode",{parentName:"li"},"conditional")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"on")," must be added into conditional route parameter,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"conditional")," must be ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"on")," is a joint object.")))))))),(0,i.kt)("h4",{id:"a-sample-of-condition"},"A Sample of condition"),(0,i.kt)("p",null,"Here is a sample of condition,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'[\n    // orderDate <= 2020/08/31\n    {\n        "left": { "kind": "topic", "factorId": "orderDate" },\n        "operator": "less-equals",\n        "right": { "kind": "constant", "value": "2020/08/31" }\n    },\n    {\n        "jointType": "or",\n        "filters": [\n            // orderNo is not empty\n            { "left": { "kind": "topic", "factorId": "orderNo" }, "operator": "not-empty" },\n            // orderCity in (NY, CA)\n            {\n                "left": { "kind": "topic", "factorId": "orderCity" },\n                "operator": "in",\n                "right": { "kind": "constant", "value": "NY,CA" }\n            },\n            // premium >= case when gender = \'F\' then 100,000 else 90,000 end\n            {\n                "left": { "kind": "topic", "factorId": "premium" },\n                "operator": "more-equals",\n                right: {\n                    "kind": "computed", "type": "case-then",\n                    "parameters": [\n                        // conditional route\n                        {\n                            "conditional": true,\n                            "on": {\n                                "jointType": "and",\n                                "filters": [\n                                    {\n                                        "left": { "kind": "topic", "factorId": "gender" },\n                                        "operator": "equals",\n                                        "right": { "kind": "constant", "value": "F" }\n                                    }\n                                ]\n                            },\n                            "kind": "constant",\n                            "value": "100000"\n                        },\n                        // anyway route\n                        { "kind": "constant", "value": "90000" }\n                    ]\n                }\n            }\n        ]\n    }\n]\n')),(0,i.kt)("h2",{id:"trino"},"Trino"),(0,i.kt)("p",null,"To inquiry data from multiple data sources, Trino must be enabled by configuration parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"TRINO"),". In the other hand, if topics of\nsubject are from one storage, it also can be downgraded to fetch data from storage directly by enabled configuration\nparameter ",(0,i.kt)("inlineCode",{parentName:"p"},"USE_STORAGE_DIRECTLY"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"USE_STORAGE_DIRECTLY")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TRINO")," are default enabled.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Some kinds of storage do not support fetch data directly, it will fall back to ",(0,i.kt)("inlineCode",{parentName:"p"},"Trino")," even ",(0,i.kt)("inlineCode",{parentName:"p"},"USE_STORAGE_DIRECTLY")," is enabled. For\nexample, ",(0,i.kt)("inlineCode",{parentName:"p"},"MongoDB")," does not support it.")))}u.isMDXComponent=!0}}]);