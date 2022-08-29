"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[2420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),_=m(n),d=i,s=_["".concat(p,".").concat(d)]||_[d]||c[d]||r;return n?a.createElement(s,l(l({ref:t},u),{},{components:n})):a.createElement(s,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=_;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},74648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(83117),i=(n(67294),n(3905));const r={id:"monitor-rules",title:"Define Monitor Rules",sidebar_position:20},l="Define Monitor Rules",o={unversionedId:"web-client/dqc/monitor-rules",id:"version-16.3/web-client/dqc/monitor-rules",title:"Define Monitor Rules",description:"There are a set of monitor rules built-in, before introducing what they monitored, let's have a look on how to attach them onto topic and",source:"@site/versioned_docs/version-16.3/020-web-client/030-dqc/020-monitor-rules.md",sourceDirName:"020-web-client/030-dqc",slug:"/web-client/dqc/monitor-rules",permalink:"/docs/16.3/web-client/dqc/monitor-rules",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.3/020-web-client/030-dqc/020-monitor-rules.md",tags:[],version:"16.3",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1661759620,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:20,frontMatter:{id:"monitor-rules",title:"Define Monitor Rules",sidebar_position:20},sidebar:"sidebar",previous:{title:"Runtime Statistics",permalink:"/docs/16.3/web-client/dqc/run-statistics"},next:{title:"Consanguinity",permalink:"/docs/16.3/web-client/dqc/consanguinity"}},p={},m=[{value:"Page",id:"page",level:2},{value:"Topic Level Rules",id:"topic-level-rules",level:2},{value:"FACTOR_MISMATCH_TYPE",id:"topic-factor-mismatch-type",level:3},{value:"FACTOR_MISMATCH_ENUM",id:"topic-factor-mismatch-enum",level:3},{value:"ROWS_NOT_EXISTS",id:"rows_not_exists",level:3},{value:"ROWS_NO_CHANGE",id:"rows_no_change",level:3},{value:"ROWS_COUNT_MISMATCH_AND_ANOTHER",id:"rows_count_mismatch_and_another",level:3},{value:"Factor Level Rules",id:"factor-level-rules",level:2},{value:"FACTOR_MISMATCH_TYPE",id:"factor_mismatch_type",level:3},{value:"FACTOR_MISMATCH_ENUM",id:"factor_mismatch_enum",level:3},{value:"FACTOR_MISMATCH_DATE_TYPE",id:"factor_mismatch_date_type",level:3},{value:"FACTOR_IS_EMPTY",id:"factor_is_empty",level:3},{value:"FACTOR_COMMON_VALUE_OVER_COVERAGE",id:"factor_common_value_over_coverage",level:3},{value:"FACTOR_EMPTY_OVER_COVERAGE",id:"factor_empty_over_coverage",level:3},{value:"FACTOR_NOT_IN_RANGE",id:"factor_not_in_range",level:3},{value:"FACTOR_MAX_NOT_IN_RANGE",id:"factor_max_not_in_range",level:3},{value:"FACTOR_MIN_NOT_IN_RANGE",id:"factor_min_not_in_range",level:3},{value:"FACTOR_AVG_NOT_IN_RANGE",id:"factor_avg_not_in_range",level:3},{value:"FACTOR_MEDIAN_NOT_IN_RANGE",id:"factor_median_not_in_range",level:3},{value:"FACTOR_QUANTILE_NOT_IN_RANGE",id:"factor_quantile_not_in_range",level:3},{value:"FACTOR_STDEV_NOT_IN_RANGE",id:"factor_stdev_not_in_range",level:3},{value:"FACTOR_COMMON_VALUE_NOT_IN_RANGE",id:"factor_common_value_not_in_range",level:3},{value:"FACTOR_IS_BLANK",id:"factor_is_blank",level:3},{value:"FACTOR_STRING_LENGTH_MISMATCH",id:"factor_string_length_mismatch",level:3},{value:"FACTOR_STRING_LENGTH_NOT_IN_RANGE",id:"factor_string_length_not_in_range",level:3},{value:"FACTOR_MATCH_REGEXP",id:"factor_match_regexp",level:3},{value:"FACTOR_MISMATCH_REGEXP",id:"factor_mismatch_regexp",level:3},{value:"FACTOR_AND_ANOTHER",id:"factor_and_another",level:3},{value:"Statistical Interval",id:"statistical-interval",level:2}],u={toc:m};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"define-monitor-rules"},"Define Monitor Rules"),(0,i.kt)("p",null,"There are a set of monitor rules built-in, before introducing what they monitored, let's have a look on how to attach them onto topic and\nfactor."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Define monitor rules is available for ",(0,i.kt)("inlineCode",{parentName:"p"},"Admin")," only.")),(0,i.kt)("h2",{id:"page"},"Page"),(0,i.kt)("p",null,"Open monitor rules page, pick a topic and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Find")," button, monitor rules defined will be shown,"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Define Monitor Rules",src:n(9170).Z,width:"3584",height:"1854"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"There might be too many factors, you can focus on rules on one factor or topic level only by filter them.")),(0,i.kt)("p",null,"There are 2 parts of rules, one is on topic level only, another is on factor; and for each factor, it has its own rules. Factor with no rule\nwill not be shown at the first place, pick it from ",(0,i.kt)("inlineCode",{parentName:"p"},"Define factor rules...")," cell, then all rules suited for picked factor will be added into\ngrid."),(0,i.kt)("p",null,"All rules are disabled by first, it needs to be enabled, and set the severity."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Severity of rule is designed for alarming, we have no default implementation for alarming yet. To integrate with your own alarming servers,\nfind more details ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"../../dqc/dqc-index"},"here")),".")),(0,i.kt)("p",null,"Some rules need parameters, click edit cell to pass the parameter values."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Monitor rule will not change the behavior of runtime. It monitors data to find where needs to be focused on, and report them.")),(0,i.kt)("p",null,"After learning how to declare rules on topic and factor, let's go through the built-in monitor rules."),(0,i.kt)("h2",{id:"topic-level-rules"},"Topic Level Rules"),(0,i.kt)("h3",{id:"topic-factor-mismatch-type"},"FACTOR_MISMATCH_TYPE"),(0,i.kt)("p",null,"Factor value cannot match the type of definition. Monitors every factor when it is declared on topic level."),(0,i.kt)("h3",{id:"topic-factor-mismatch-enum"},"FACTOR_MISMATCH_ENUM"),(0,i.kt)("p",null,"Factor value cannot match the enumeration value of definition. Monitors every ",(0,i.kt)("inlineCode",{parentName:"p"},"enum")," factor when it is declared on topic level."),(0,i.kt)("h3",{id:"rows_not_exists"},"ROWS_NOT_EXISTS"),(0,i.kt)("p",null,"No data in topic."),(0,i.kt)("h3",{id:"rows_no_change"},"ROWS_NO_CHANGE"),(0,i.kt)("p",null,"Data changes of topic detected in a particular period cannot meet the given coverage. There are 2 parameters,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Coverage rate,"),(0,i.kt)("li",{parentName:"ul"},"Statistical interval.")),(0,i.kt)("h3",{id:"rows_count_mismatch_and_another"},"ROWS_COUNT_MISMATCH_AND_ANOTHER"),(0,i.kt)("p",null,"Row count of topic cannot match the given another one's. There are 2 parameters,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Another topic,"),(0,i.kt)("li",{parentName:"ul"},"Statistical interval.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Only available on non-raw topic.")),(0,i.kt)("h2",{id:"factor-level-rules"},"Factor Level Rules"),(0,i.kt)("h3",{id:"factor_mismatch_type"},"FACTOR_MISMATCH_TYPE"),(0,i.kt)("p",null,"Same as on ",(0,i.kt)("a",{parentName:"p",href:"#topic-factor-mismatch-type"},"topic level"),", but only works on appointed factor."),(0,i.kt)("h3",{id:"factor_mismatch_enum"},"FACTOR_MISMATCH_ENUM"),(0,i.kt)("p",null,"Same as on ",(0,i.kt)("a",{parentName:"p",href:"#topic-factor-mismatch-enum"},"topic level"),", but only works on appointed factor."),(0,i.kt)("h3",{id:"factor_mismatch_date_type"},"FACTOR_MISMATCH_DATE_TYPE"),(0,i.kt)("p",null,"Same as on ",(0,i.kt)("a",{parentName:"p",href:"#topic-factor-mismatch-datetype"},"topic level"),", but only works on appointed factor."),(0,i.kt)("h3",{id:"factor_is_empty"},"FACTOR_IS_EMPTY"),(0,i.kt)("p",null,"Empty factor value detected."),(0,i.kt)("h3",{id:"factor_common_value_over_coverage"},"FACTOR_COMMON_VALUE_OVER_COVERAGE"),(0,i.kt)("p",null,"The most common values of factor overs given coverage. There are 3 parameters,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aggregation rate, to define what is ",(0,i.kt)("inlineCode",{parentName:"li"},"the most common values"),","),(0,i.kt)("li",{parentName:"ul"},"Coverage rate,"),(0,i.kt)("li",{parentName:"ul"},"Statistical interval.")),(0,i.kt)("h3",{id:"factor_empty_over_coverage"},"FACTOR_EMPTY_OVER_COVERAGE"),(0,i.kt)("p",null,"Empty value overs given coverage. There are 2 parameters,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Coverage rate,"),(0,i.kt)("li",{parentName:"ul"},"Statistical interval.")),(0,i.kt)("h3",{id:"factor_not_in_range"},"FACTOR_NOT_IN_RANGE"),(0,i.kt)("p",null,"Value is not in given range. There are 2 parameters,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Max number,"),(0,i.kt)("li",{parentName:"ul"},"Min number.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Only available on ",(0,i.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Unsigned")," factor.")),(0,i.kt)("h3",{id:"factor_max_not_in_range"},"FACTOR_MAX_NOT_IN_RANGE"),(0,i.kt)("p",null,"Maximum value is not in given range. There are 2 parameters,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Max number,"),(0,i.kt)("li",{parentName:"ul"},"Min number.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Only available on ",(0,i.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Unsigned")," factor.")),(0,i.kt)("h3",{id:"factor_min_not_in_range"},"FACTOR_MIN_NOT_IN_RANGE"),(0,i.kt)("p",null,"Min value is not in given range. There are 2 parameters,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Max number,"),(0,i.kt)("li",{parentName:"ul"},"Min number.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Only available on ",(0,i.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Unsigned")," factor.")),(0,i.kt)("h3",{id:"factor_avg_not_in_range"},"FACTOR_AVG_NOT_IN_RANGE"),(0,i.kt)("p",null,"Avg value is not in given range. There are 3 parameters,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Max number,"),(0,i.kt)("li",{parentName:"ul"},"Min number,"),(0,i.kt)("li",{parentName:"ul"},"Statistical interval.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Only available on ",(0,i.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Unsigned")," factor.")),(0,i.kt)("h3",{id:"factor_median_not_in_range"},"FACTOR_MEDIAN_NOT_IN_RANGE"),(0,i.kt)("p",null,"Median value is not in given range. There are 3 parameters,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Max number,"),(0,i.kt)("li",{parentName:"ul"},"Min number,"),(0,i.kt)("li",{parentName:"ul"},"Statistical interval.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Only available on ",(0,i.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Unsigned")," factor.")),(0,i.kt)("h3",{id:"factor_quantile_not_in_range"},"FACTOR_QUANTILE_NOT_IN_RANGE"),(0,i.kt)("p",null,"Quantile value is not in given range. There are 3 parameters,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Max number,"),(0,i.kt)("li",{parentName:"ul"},"Min number,"),(0,i.kt)("li",{parentName:"ul"},"Statistical interval.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Only available on ",(0,i.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Unsigned")," factor.")),(0,i.kt)("h3",{id:"factor_stdev_not_in_range"},"FACTOR_STDEV_NOT_IN_RANGE"),(0,i.kt)("p",null,"Standard deviation is not in given range. There are 3 parameters,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Max number,"),(0,i.kt)("li",{parentName:"ul"},"Min number,"),(0,i.kt)("li",{parentName:"ul"},"Statistical interval.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Only available on ",(0,i.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Unsigned")," factor.")),(0,i.kt)("h3",{id:"factor_common_value_not_in_range"},"FACTOR_COMMON_VALUE_NOT_IN_RANGE"),(0,i.kt)("p",null,"The most common values of factor are not in given range. There are 4 parameters,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aggregation rate, to define what is ",(0,i.kt)("inlineCode",{parentName:"li"},"the most common values"),","),(0,i.kt)("li",{parentName:"ul"},"Max number,"),(0,i.kt)("li",{parentName:"ul"},"Min number,"),(0,i.kt)("li",{parentName:"ul"},"Statistical interval.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Only available on ",(0,i.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Unsigned")," factor.")),(0,i.kt)("h3",{id:"factor_is_blank"},"FACTOR_IS_BLANK"),(0,i.kt)("p",null,"Value is blank (not empty)."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Only available on ",(0,i.kt)("inlineCode",{parentName:"p"},"Text")," factor.")),(0,i.kt)("h3",{id:"factor_string_length_mismatch"},"FACTOR_STRING_LENGTH_MISMATCH"),(0,i.kt)("p",null,"Length of value cannot match. There are 1 parameter,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Length.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Only available on ",(0,i.kt)("inlineCode",{parentName:"p"},"Text")," factor.")),(0,i.kt)("h3",{id:"factor_string_length_not_in_range"},"FACTOR_STRING_LENGTH_NOT_IN_RANGE"),(0,i.kt)("p",null,"Length of value is not in given range. There are 2 parameter,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Max length,"),(0,i.kt)("li",{parentName:"ul"},"Min length.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Only available on ",(0,i.kt)("inlineCode",{parentName:"p"},"Text")," factor.")),(0,i.kt)("h3",{id:"factor_match_regexp"},"FACTOR_MATCH_REGEXP"),(0,i.kt)("p",null,"Value cannot match given regexp. There are 1 parameter,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Regexp.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Only available on ",(0,i.kt)("inlineCode",{parentName:"p"},"Text")," factor.")),(0,i.kt)("h3",{id:"factor_mismatch_regexp"},"FACTOR_MISMATCH_REGEXP"),(0,i.kt)("p",null,"Value matches given regexp. There are 1 parameter,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Regexp.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Only available on ",(0,i.kt)("inlineCode",{parentName:"p"},"Text")," factor.")),(0,i.kt)("h3",{id:"factor_and_another"},"FACTOR_AND_ANOTHER"),(0,i.kt)("p",null,"Cannot match value to another one. There are 2 parameters,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Comparator,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Equals,"),(0,i.kt)("li",{parentName:"ul"},"Less than,"),(0,i.kt)("li",{parentName:"ul"},"Less than or equals,"),(0,i.kt)("li",{parentName:"ul"},"Greater than,"),(0,i.kt)("li",{parentName:"ul"},"Greater than or equals,"))),(0,i.kt)("li",{parentName:"ul"},"Another factor on same row.")),(0,i.kt)("h2",{id:"statistical-interval"},"Statistical Interval"),(0,i.kt)("p",null,"Statistical interval means the frequency of data scanning. There are 3 interval types,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Daily,"),(0,i.kt)("li",{parentName:"ul"},"Weekly,"),(0,i.kt)("li",{parentName:"ul"},"Monthly.")),(0,i.kt)("p",null,"They all start at the end of previous cycle."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Again, we have no default implementation for alarming yet. To integrate with your own alarming servers, find more\ndetails ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"../../dqc/dqc-index"},"here")),".")))}c.isMDXComponent=!0},9170:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/define-monitor-rules-4c90fad5c88667ad367534d3b8456209.png"}}]);