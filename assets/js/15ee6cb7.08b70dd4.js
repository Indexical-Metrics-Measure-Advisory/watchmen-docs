"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[3754],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return v}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),v=i,N=c["".concat(m,".").concat(v)]||c[v]||p[v]||o;return a?n.createElement(N,r(r({ref:t},d),{},{components:a})):n.createElement(N,r({ref:t},d))}));function v(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},32691:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=a(83117),i=a(80102),o=(a(67294),a(3905)),r=["components"],l={id:"monitor-rules",title:"Define Monitor Rules",sidebar_position:20},m="Define Monitor Rules",s={unversionedId:"web-client/dqc/monitor-rules",id:"version-15.2.14/web-client/dqc/monitor-rules",title:"Define Monitor Rules",description:"There are a set of monitor rules built-in, before introducing what they monitored, let's have a look on how to attach them onto topic and",source:"@site/versioned_docs/version-15.2.14/web-client/dqc/monitor-rules.md",sourceDirName:"web-client/dqc",slug:"/web-client/dqc/monitor-rules",permalink:"/docs/15.2.14/web-client/dqc/monitor-rules",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-15.2.14/web-client/dqc/monitor-rules.md",tags:[],version:"15.2.14",lastUpdatedBy:"botlikes",lastUpdatedAt:1655877324,formattedLastUpdatedAt:"6/22/2022",sidebarPosition:20,frontMatter:{id:"monitor-rules",title:"Define Monitor Rules",sidebar_position:20},sidebar:"sidebar",previous:{title:"Runtime Statistics",permalink:"/docs/15.2.14/web-client/dqc/run-statistics"},next:{title:"Consanguinity",permalink:"/docs/15.2.14/web-client/dqc/consanguinity"}},d={},p=[{value:"Page",id:"page",level:2},{value:"Topic Level Rules",id:"topic-level-rules",level:2},{value:"RAW_MISMATCH_STRUCTURE",id:"raw_mismatch_structure",level:3},{value:"FACTOR_MISMATCH_TYPE",id:"topic-factor-mismatch-type",level:3},{value:"FACTOR_MISMATCH_ENUM",id:"topic-factor-mismatch-enum",level:3},{value:"FACTOR_MISMATCH_DATE_TYPE",id:"topic-factor-mismatch-datetype",level:3},{value:"ROWS_NOT_EXISTS",id:"rows_not_exists",level:3},{value:"ROWS_NO_CHANGE",id:"rows_no_change",level:3},{value:"ROWS_COUNT_MISMATCH_AND_ANOTHER",id:"rows_count_mismatch_and_another",level:3},{value:"Factor Level Rules",id:"factor-level-rules",level:2},{value:"FACTOR_MISMATCH_TYPE",id:"factor_mismatch_type",level:3},{value:"FACTOR_MISMATCH_ENUM",id:"factor_mismatch_enum",level:3},{value:"FACTOR_MISMATCH_DATE_TYPE",id:"factor_mismatch_date_type",level:3},{value:"FACTOR_IS_EMPTY",id:"factor_is_empty",level:3},{value:"FACTOR_USE_CAST",id:"factor_use_cast",level:3},{value:"FACTOR_COMMON_VALUE_OVER_COVERAGE",id:"factor_common_value_over_coverage",level:3},{value:"FACTOR_EMPTY_OVER_COVERAGE",id:"factor_empty_over_coverage",level:3},{value:"FACTOR_BREAKS_MONOTONE_INCREASING",id:"factor_breaks_monotone_increasing",level:3},{value:"FACTOR_BREAKS_MONOTONE_DECREASING",id:"factor_breaks_monotone_decreasing",level:3},{value:"FACTOR_NOT_IN_RANGE",id:"factor_not_in_range",level:3},{value:"FACTOR_MAX_NOT_IN_RANGE",id:"factor_max_not_in_range",level:3},{value:"FACTOR_MIN_NOT_IN_RANGE",id:"factor_min_not_in_range",level:3},{value:"FACTOR_AVG_NOT_IN_RANGE",id:"factor_avg_not_in_range",level:3},{value:"FACTOR_MEDIAN_NOT_IN_RANGE",id:"factor_median_not_in_range",level:3},{value:"FACTOR_QUANTILE_NOT_IN_RANGE",id:"factor_quantile_not_in_range",level:3},{value:"FACTOR_STDEV_NOT_IN_RANGE",id:"factor_stdev_not_in_range",level:3},{value:"FACTOR_COMMON_VALUE_NOT_IN_RANGE",id:"factor_common_value_not_in_range",level:3},{value:"FACTOR_IS_BLANK",id:"factor_is_blank",level:3},{value:"FACTOR_STRING_LENGTH_MISMATCH",id:"factor_string_length_mismatch",level:3},{value:"FACTOR_STRING_LENGTH_NOT_IN_RANGE",id:"factor_string_length_not_in_range",level:3},{value:"FACTOR_MATCH_REGEXP",id:"factor_match_regexp",level:3},{value:"FACTOR_MISMATCH_REGEXP",id:"factor_mismatch_regexp",level:3},{value:"FACTOR_AND_ANOTHER",id:"factor_and_another",level:3},{value:"Statistical Interval",id:"statistical-interval",level:2}],c={toc:p};function v(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"define-monitor-rules"},"Define Monitor Rules"),(0,o.kt)("p",null,"There are a set of monitor rules built-in, before introducing what they monitored, let's have a look on how to attach them onto topic and\nfactor."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Define monitor rules is available for ",(0,o.kt)("inlineCode",{parentName:"p"},"Admin")," only."))),(0,o.kt)("h2",{id:"page"},"Page"),(0,o.kt)("p",null,"Open monitor rules page, pick a topic and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Find")," button, monitor rules defined will be shown,"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Define Monitor Rules",src:a(95238).Z,width:"3584",height:"1854"})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There might be too many factors, you can focus on rules on one factor or topic level only by filter them."))),(0,o.kt)("p",null,"There are 2 parts of rules, one is on topic level only, another is on factor; and for each factor, it has its own rules. Factor with no rule\nwill not be shown at the first place, pick it from ",(0,o.kt)("inlineCode",{parentName:"p"},"Define factor rules...")," cell, then all rules suited for picked factor will be added into\ngrid."),(0,o.kt)("p",null,"All rules are disabled by first, it needs to be enabled, and set the severity."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Severity of rule is designed for alarming, we have no default implementation for alarming yet. To integrate with your own alarming servers,\nfind more details ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../../dqc/dqc-index"},"here")),"."))),(0,o.kt)("p",null,"Some rules need parameters, click edit cell to pass the parameter values."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Monitor rule will not change the behavior of runtime. It monitors data to find where needs to be focused on, and report them."))),(0,o.kt)("p",null,"After learning how to declare rules on topic and factor, let's go through the built-in monitor rules."),(0,o.kt)("h2",{id:"topic-level-rules"},"Topic Level Rules"),(0,o.kt)("h3",{id:"raw_mismatch_structure"},"RAW_MISMATCH_STRUCTURE"),(0,o.kt)("p",null,"Instance data cannot match the structure of definition."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only available on raw topic."))),(0,o.kt)("h3",{id:"topic-factor-mismatch-type"},"FACTOR_MISMATCH_TYPE"),(0,o.kt)("p",null,"Factor value cannot match the type of definition. Monitors every factor when it is declared on topic level."),(0,o.kt)("h3",{id:"topic-factor-mismatch-enum"},"FACTOR_MISMATCH_ENUM"),(0,o.kt)("p",null,"Factor value cannot match the enumeration value of definition. Monitors every ",(0,o.kt)("inlineCode",{parentName:"p"},"enum")," factor when it is declared on topic level."),(0,o.kt)("h3",{id:"topic-factor-mismatch-datetype"},"FACTOR_MISMATCH_DATE_TYPE"),(0,o.kt)("p",null,"Factor value cannot match the date type of definition. Monitors every date factor when it is declared on topic level."),(0,o.kt)("p",null,"Factor types monitored by this rule as below,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Date,"),(0,o.kt)("li",{parentName:"ul"},"Datetime,"),(0,o.kt)("li",{parentName:"ul"},"Full datetime,"),(0,o.kt)("li",{parentName:"ul"},"Time,"),(0,o.kt)("li",{parentName:"ul"},"Date of birth.")),(0,o.kt)("h3",{id:"rows_not_exists"},"ROWS_NOT_EXISTS"),(0,o.kt)("p",null,"No data in topic."),(0,o.kt)("h3",{id:"rows_no_change"},"ROWS_NO_CHANGE"),(0,o.kt)("p",null,"Data changes of topic detected in a particular period cannot meet the given coverage. There are 2 parameters,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Coverage rate,"),(0,o.kt)("li",{parentName:"ul"},"Statistical interval.")),(0,o.kt)("h3",{id:"rows_count_mismatch_and_another"},"ROWS_COUNT_MISMATCH_AND_ANOTHER"),(0,o.kt)("p",null,"Row count of topic cannot match the given another one's. There are 2 parameters,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Another topic,"),(0,o.kt)("li",{parentName:"ul"},"Statistical interval.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only available on non-raw topic."))),(0,o.kt)("h2",{id:"factor-level-rules"},"Factor Level Rules"),(0,o.kt)("h3",{id:"factor_mismatch_type"},"FACTOR_MISMATCH_TYPE"),(0,o.kt)("p",null,"Same as on ",(0,o.kt)("a",{parentName:"p",href:"#topic-factor-mismatch-type"},"topic level"),", but only works on appointed factor."),(0,o.kt)("h3",{id:"factor_mismatch_enum"},"FACTOR_MISMATCH_ENUM"),(0,o.kt)("p",null,"Same as on ",(0,o.kt)("a",{parentName:"p",href:"#topic-factor-mismatch-enum"},"topic level"),", but only works on appointed factor."),(0,o.kt)("h3",{id:"factor_mismatch_date_type"},"FACTOR_MISMATCH_DATE_TYPE"),(0,o.kt)("p",null,"Same as on ",(0,o.kt)("a",{parentName:"p",href:"#topic-factor-mismatch-datetype"},"topic level"),", but only works on appointed factor."),(0,o.kt)("h3",{id:"factor_is_empty"},"FACTOR_IS_EMPTY"),(0,o.kt)("p",null,"Empty factor value detected."),(0,o.kt)("h3",{id:"factor_use_cast"},"FACTOR_USE_CAST"),(0,o.kt)("p",null,"Casting used on factor value, for receiving by topic."),(0,o.kt)("h3",{id:"factor_common_value_over_coverage"},"FACTOR_COMMON_VALUE_OVER_COVERAGE"),(0,o.kt)("p",null,"The most common values of factor overs given coverage. There are 3 parameters,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Aggregation rate, to define what is ",(0,o.kt)("inlineCode",{parentName:"li"},"the most common values"),","),(0,o.kt)("li",{parentName:"ul"},"Coverage rate,"),(0,o.kt)("li",{parentName:"ul"},"Statistical interval.")),(0,o.kt)("h3",{id:"factor_empty_over_coverage"},"FACTOR_EMPTY_OVER_COVERAGE"),(0,o.kt)("p",null,"Empty value overs given coverage. There are 2 parameters,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Coverage rate,"),(0,o.kt)("li",{parentName:"ul"},"Statistical interval.")),(0,o.kt)("h3",{id:"factor_breaks_monotone_increasing"},"FACTOR_BREAKS_MONOTONE_INCREASING"),(0,o.kt)("p",null,"Value breaks the monotone increasing."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only available on ",(0,o.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Unsigned")," factor."))),(0,o.kt)("h3",{id:"factor_breaks_monotone_decreasing"},"FACTOR_BREAKS_MONOTONE_DECREASING"),(0,o.kt)("p",null,"Value breaks the monotone decreasing."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only available on ",(0,o.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Unsigned")," factor."))),(0,o.kt)("h3",{id:"factor_not_in_range"},"FACTOR_NOT_IN_RANGE"),(0,o.kt)("p",null,"Value is not in given range. There are 2 parameters,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Max number,"),(0,o.kt)("li",{parentName:"ul"},"Min number.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only available on ",(0,o.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Unsigned")," factor."))),(0,o.kt)("h3",{id:"factor_max_not_in_range"},"FACTOR_MAX_NOT_IN_RANGE"),(0,o.kt)("p",null,"Maximum value is not in given range. There are 2 parameters,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Max number,"),(0,o.kt)("li",{parentName:"ul"},"Min number.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only available on ",(0,o.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Unsigned")," factor."))),(0,o.kt)("h3",{id:"factor_min_not_in_range"},"FACTOR_MIN_NOT_IN_RANGE"),(0,o.kt)("p",null,"Min value is not in given range. There are 2 parameters,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Max number,"),(0,o.kt)("li",{parentName:"ul"},"Min number.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only available on ",(0,o.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Unsigned")," factor."))),(0,o.kt)("h3",{id:"factor_avg_not_in_range"},"FACTOR_AVG_NOT_IN_RANGE"),(0,o.kt)("p",null,"Avg value is not in given range. There are 3 parameters,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Max number,"),(0,o.kt)("li",{parentName:"ul"},"Min number,"),(0,o.kt)("li",{parentName:"ul"},"Statistical interval.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only available on ",(0,o.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Unsigned")," factor."))),(0,o.kt)("h3",{id:"factor_median_not_in_range"},"FACTOR_MEDIAN_NOT_IN_RANGE"),(0,o.kt)("p",null,"Median value is not in given range. There are 3 parameters,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Max number,"),(0,o.kt)("li",{parentName:"ul"},"Min number,"),(0,o.kt)("li",{parentName:"ul"},"Statistical interval.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only available on ",(0,o.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Unsigned")," factor."))),(0,o.kt)("h3",{id:"factor_quantile_not_in_range"},"FACTOR_QUANTILE_NOT_IN_RANGE"),(0,o.kt)("p",null,"Quantile value is not in given range. There are 3 parameters,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Max number,"),(0,o.kt)("li",{parentName:"ul"},"Min number,"),(0,o.kt)("li",{parentName:"ul"},"Statistical interval.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only available on ",(0,o.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Unsigned")," factor."))),(0,o.kt)("h3",{id:"factor_stdev_not_in_range"},"FACTOR_STDEV_NOT_IN_RANGE"),(0,o.kt)("p",null,"Standard deviation is not in given range. There are 3 parameters,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Max number,"),(0,o.kt)("li",{parentName:"ul"},"Min number,"),(0,o.kt)("li",{parentName:"ul"},"Statistical interval.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only available on ",(0,o.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Unsigned")," factor."))),(0,o.kt)("h3",{id:"factor_common_value_not_in_range"},"FACTOR_COMMON_VALUE_NOT_IN_RANGE"),(0,o.kt)("p",null,"The most common values of factor are not in given range. There are 4 parameters,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Aggregation rate, to define what is ",(0,o.kt)("inlineCode",{parentName:"li"},"the most common values"),","),(0,o.kt)("li",{parentName:"ul"},"Max number,"),(0,o.kt)("li",{parentName:"ul"},"Min number,"),(0,o.kt)("li",{parentName:"ul"},"Statistical interval.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only available on ",(0,o.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Unsigned")," factor."))),(0,o.kt)("h3",{id:"factor_is_blank"},"FACTOR_IS_BLANK"),(0,o.kt)("p",null,"Value is blank (not empty)."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only available on ",(0,o.kt)("inlineCode",{parentName:"p"},"Text")," factor."))),(0,o.kt)("h3",{id:"factor_string_length_mismatch"},"FACTOR_STRING_LENGTH_MISMATCH"),(0,o.kt)("p",null,"Length of value cannot match. There are 1 parameter,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Length.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only available on ",(0,o.kt)("inlineCode",{parentName:"p"},"Text")," factor."))),(0,o.kt)("h3",{id:"factor_string_length_not_in_range"},"FACTOR_STRING_LENGTH_NOT_IN_RANGE"),(0,o.kt)("p",null,"Length of value is not in given range. There are 2 parameter,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Max length,"),(0,o.kt)("li",{parentName:"ul"},"Min length.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only available on ",(0,o.kt)("inlineCode",{parentName:"p"},"Text")," factor."))),(0,o.kt)("h3",{id:"factor_match_regexp"},"FACTOR_MATCH_REGEXP"),(0,o.kt)("p",null,"Value cannot match given regexp. There are 1 parameter,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Regexp.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only available on ",(0,o.kt)("inlineCode",{parentName:"p"},"Text")," factor."))),(0,o.kt)("h3",{id:"factor_mismatch_regexp"},"FACTOR_MISMATCH_REGEXP"),(0,o.kt)("p",null,"Value matches given regexp. There are 1 parameter,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Regexp.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only available on ",(0,o.kt)("inlineCode",{parentName:"p"},"Text")," factor."))),(0,o.kt)("h3",{id:"factor_and_another"},"FACTOR_AND_ANOTHER"),(0,o.kt)("p",null,"Cannot match value to another one. There are 2 parameters,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Comparator,",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Equals,"),(0,o.kt)("li",{parentName:"ul"},"Less than,"),(0,o.kt)("li",{parentName:"ul"},"Less than or equals,"),(0,o.kt)("li",{parentName:"ul"},"Greater than,"),(0,o.kt)("li",{parentName:"ul"},"Greater than or equals,"))),(0,o.kt)("li",{parentName:"ul"},"Another factor on same row.")),(0,o.kt)("h2",{id:"statistical-interval"},"Statistical Interval"),(0,o.kt)("p",null,"Statistical interval means the frequency of data scanning. There are 3 interval types,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Daily,"),(0,o.kt)("li",{parentName:"ul"},"Weekly,"),(0,o.kt)("li",{parentName:"ul"},"Monthly.")),(0,o.kt)("p",null,"They all start at the end of previous cycle."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Again, we have no default implementation for alarming yet. To integrate with your own alarming servers, find more\ndetails ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../../dqc/dqc-index"},"here")),"."))))}v.isMDXComponent=!0},95238:function(e,t,a){t.Z=a.p+"assets/images/define-monitor-rules-4c90fad5c88667ad367534d3b8456209.png"}}]);