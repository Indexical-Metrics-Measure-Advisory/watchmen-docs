"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[872],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=i,k=c["".concat(d,".").concat(u)]||c[u]||m[u]||r;return t?a.createElement(k,o(o({ref:n},s),{},{components:t})):a.createElement(k,o({ref:n},s))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},626:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],l={id:"inquiry-service",title:"Inquiry Service",sidebar_position:300},d="Inquiry Service",p={unversionedId:"doll/inquiry-service",id:"doll/inquiry-service",title:"Inquiry Service",description:"Inquiry service is designed for serve subject and report inquiry. Subject inquiry is more like a dataset, report is higher order layer which",source:"@site/docs/040-doll/300-inquiry-service.md",sourceDirName:"040-doll",slug:"/doll/inquiry-service",permalink:"/docs/next/doll/inquiry-service",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/docs/040-doll/300-inquiry-service.md",tags:[],version:"current",lastUpdatedBy:"botlikes",lastUpdatedAt:1648796873,formattedLastUpdatedAt:"4/1/2022",sidebarPosition:300,frontMatter:{id:"inquiry-service",title:"Inquiry Service",sidebar_position:300},sidebar:"sidebar",previous:{title:"Pipeline Service",permalink:"/docs/next/doll/pipeline-service"},next:{title:"Doll REST",permalink:"/docs/next/doll/rest-doll"}},s=[{value:"Inquiry Data",id:"inquiry-data",children:[{value:"Fetch data via api",id:"fetch-data-via-api",children:[],level:3},{value:"Conditions",id:"conditions",children:[{value:"Joint",id:"joint",children:[],level:4},{value:"Expression",id:"expression",children:[],level:4},{value:"Factor Parameter",id:"factor-parameter",children:[],level:4},{value:"Constant Parameter",id:"constant-parameter",children:[],level:4},{value:"Compute Parameter",id:"compute-parameter",children:[],level:4},{value:"A Sample of condition",id:"a-sample-of-condition",children:[],level:4}],level:3}],level:2},{value:"Trino",id:"trino",children:[],level:2}],m={toc:s};function c(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"inquiry-service"},"Inquiry Service"),(0,r.kt)("p",null,"Inquiry service is designed for serve subject and report inquiry. Subject inquiry is more like a dataset, report is higher order layer which\nbased on subject, additional provide aggregation and funnels."),(0,r.kt)("p",null,"To simplify the syntax of subject and report, one rest api is designed to fetch subject data. In this api, predefined filters from space and\nsubject will be applied automatically. Extra conditions can be submitted, and data columns and their aggregation arithmetic can be appointed\nas well."),(0,r.kt)("h2",{id:"inquiry-data"},"Inquiry Data"),(0,r.kt)("h3",{id:"fetch-data-via-api"},"Fetch data via api"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n--location \\ \n--request POST \'http://host:port//subject/data/criteria\' \\\n--header \'Authorization: Bearer ...\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "subjectId": "1",\n    "subjectName": "",\n    "indicators": [\n        {\n            "name": "subject_column_alias",\n            "arithmetic": "none"\n        },\n    ],\n    "conditions": [],\n    "pageNumber": 1,\n    "pageSize": 9\n}\'\n')),(0,r.kt)("p",null,"Same as the first api, the response is a data page, and with same structure."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One of ",(0,r.kt)("inlineCode",{parentName:"li"},"subjectId")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"subjectName")," is required,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"subjectName")," is case sensitive,"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"indicators")," is an array of data columns,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," of each indicator must be alias name of subject column,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arithmetic")," of each indicator could be one of ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"sum"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"count"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"avg"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"max"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"min"),",",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arithmetic")," will be treated as ",(0,r.kt)("inlineCode",{parentName:"li"},"none")," when it is lacked,"),(0,r.kt)("li",{parentName:"ul"},"Aggregation arithmetic can apply to numeric value column expect ",(0,r.kt)("inlineCode",{parentName:"li"},"count"),","))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"conditions")," is an array of data criteria on ",(0,r.kt)("inlineCode",{parentName:"li"},"and"),",",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"conditions")," is designed for supporting complex scenarios, following chapter will explain this.")))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This specific rest api is designed for web client, typically page size would be 100, therefore there is no page size limitation in server\nside."))),(0,r.kt)("h3",{id:"conditions"},"Conditions"),(0,r.kt)("p",null,"There are two types of condition, which are joint and expression."),(0,r.kt)("h4",{id:"joint"},"Joint"),(0,r.kt)("p",null,"Structure of a joint should be following,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "jointType": "and",\n    "filters": []\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jointType"),": one of ",(0,r.kt)("inlineCode",{parentName:"li"},"and"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"or"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filters"),": set of conditions, each element could be a joint or an expression.")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Do not submit a joint with no filters."))),(0,r.kt)("h4",{id:"expression"},"Expression"),(0,r.kt)("p",null,"Structure of an expression should be following,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "left": {},\n    "operator": "equals",\n    "right": {}\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"left")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),": parameter of expression, which is an object might be one of three types,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"factor parameter,"),(0,r.kt)("li",{parentName:"ul"},"constant parameter,"),(0,r.kt)("li",{parentName:"ul"},"computed parameter,"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"operator"),": how to compute the expression, one of,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"empty"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"not-empty"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"equals"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"not-equals"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"less"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"less-equals"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"more"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"more-equals"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"in"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"not-in"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"right")," is not needed when ",(0,r.kt)("inlineCode",{parentName:"li"},"operator")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"empty")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"not-empty"),".")))),(0,r.kt)("h4",{id:"factor-parameter"},"Factor Parameter"),(0,r.kt)("p",null,"In subject inquiry, the source of data always be given subject, therefore, submit factor parameter by subject column alias."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "kind": "topic",\n    "factorId": "subject_column_alias"\n}\n')),(0,r.kt)("h4",{id:"constant-parameter"},"Constant Parameter"),(0,r.kt)("p",null,"Use constant value to describe a statement, it can be a static value, a list of values, a function call, etc. The basic structure should be\nfollowing,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "kind": "constant",\n    "value": "any_statement"\n}\n')),(0,r.kt)("p",null,"And here are some valid statements,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'// simple static value\n{ "value": "1" },\n// date\n{ "value": "2020/08/16" },\n// call function to get current date\n{ "value": "{&now}" },\n// call function to compute day diff from orderDate to now\n{ "value": "{&dayDiff(&now, &orderDate)}" },\n// a list values, NY and CA. for in or not-in\n{ "value": "NY,CA" }                             \n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Embedded functions of pipeline are also available in subject inquiry."))),(0,r.kt)("h4",{id:"compute-parameter"},"Compute Parameter"),(0,r.kt)("p",null,"Parameter can be computed, like this,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "kind": "computed",\n    "type": "add",\n    "parameters": []\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),": is one of,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"add"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"subtract"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"multiple"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"divide"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"modulus"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"year-of"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"half-year-of"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"quarter-of"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"month-of"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"week-of-year"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"week-of-month"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"day-of-month"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"day-of-week"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"case-then"),","))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parameters"),": a list of parameters,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"for arithmetic function, count in unlimited,"),(0,r.kt)("li",{parentName:"ul"},"for datetime function, only one parameter is allowed,"),(0,r.kt)("li",{parentName:"ul"},"for case then,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"at most one anyway route is allowed, any other routes must be declared with conditional,"),(0,r.kt)("li",{parentName:"ul"},"anyway route will be sorted to last of all routes,"),(0,r.kt)("li",{parentName:"ul"},"two more properties ",(0,r.kt)("inlineCode",{parentName:"li"},"conditional")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"on")," must be added into conditional route parameter,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"conditional")," must be ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"on")," is a joint object.")))))))),(0,r.kt)("h4",{id:"a-sample-of-condition"},"A Sample of condition"),(0,r.kt)("p",null,"Here is a sample of condition,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'[\n    // orderDate <= 2020/08/31\n    {\n        "left": { "kind": "topic", "factorId": "orderDate" },\n        "operator": "less-equals",\n        "right": { "kind": "constant", "value": "2020/08/31" }\n    },\n    {\n        "jointType": "or",\n        "filters": [\n            // orderNo is not empty\n            { "left": { "kind": "topic", "factorId": "orderNo" }, "operator": "not-empty" },\n            // orderCity in (NY, CA)\n            {\n                "left": { "kind": "topic", "factorId": "orderCity" },\n                "operator": "in",\n                "right": { "kind": "constant", "value": "NY,CA" }\n            },\n            // premium >= case when gender = \'F\' then 100,000 else 90,000 end\n            {\n                "left": { "kind": "topic", "factorId": "premium" },\n                "operator": "more-equals",\n                right: {\n                    "kind": "computed", "type": "case-then",\n                    "parameters": [\n                        // conditional route\n                        {\n                            "conditional": true,\n                            "on": {\n                                "jointType": "and",\n                                "filters": [\n                                    {\n                                        "left": { "kind": "topic", "factorId": "gender" },\n                                        "operator": "equals",\n                                        "right": { "kind": "constant", "value": "F" }\n                                    }\n                                ]\n                            },\n                            "kind": "constant",\n                            "value": "100000"\n                        },\n                        // anyway route\n                        { "kind": "constant", "value": "90000" }\n                    ]\n                }\n            }\n        ]\n    }\n]\n')),(0,r.kt)("h2",{id:"trino"},"Trino"),(0,r.kt)("p",null,"To inquiry data from multiple data sources, Trino must be enabled by configuration parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"TRINO"),". In the other hand, if topics of\nsubject are from one storage, it also can be downgraded to fetch data from storage directly by enabled configuration\nparameter ",(0,r.kt)("inlineCode",{parentName:"p"},"USE_STORAGE_DIRECTLY"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"USE_STORAGE_DIRECTLY")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TRINO")," are default enabled."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Some kinds of storage do not support fetch data directly, it will fall back to ",(0,r.kt)("inlineCode",{parentName:"p"},"Trino")," even ",(0,r.kt)("inlineCode",{parentName:"p"},"USE_STORAGE_DIRECTLY")," is enabled. For\nexample, ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB")," does not support it."))))}c.isMDXComponent=!0}}]);