"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[3824],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},77005:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),l=["components"],o={id:"console-report",title:"Report & Chart",sidebar_position:40},s="Report & Chart",p={unversionedId:"web-client/console/console-report",id:"version-16.0/web-client/console/console-report",title:"Report & Chart",description:"A report equates a chart, which is built on a dataset based on subject. It includes following parts,",source:"@site/versioned_docs/version-16.0/020-web-client/020-console/040-report.md",sourceDirName:"020-web-client/020-console",slug:"/web-client/console/console-report",permalink:"/docs/16.0/web-client/console/console-report",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.0/020-web-client/020-console/040-report.md",tags:[],version:"16.0",lastUpdatedBy:"skywalkerX69",lastUpdatedAt:1651961860,formattedLastUpdatedAt:"5/7/2022",sidebarPosition:40,frontMatter:{id:"console-report",title:"Report & Chart",sidebar_position:40},sidebar:"sidebar",previous:{title:"Subject",permalink:"/docs/16.0/web-client/console/console-subject"},next:{title:"Dashboard",permalink:"/docs/16.0/web-client/console/dashboard"}},d={},u=[{value:"Header",id:"header",level:2},{value:"Bottom Tabs",id:"bottom-tabs",level:2},{value:"Report Structure",id:"report-structure",level:2},{value:"Report Type",id:"report-type",level:3},{value:"Indicators &amp; Dimensions",id:"indicators--dimensions",level:3},{value:"Data Truncate",id:"data-truncate",level:3},{value:"Filter and Funnel",id:"filter-and-funnel",level:2},{value:"Difference between Filter and Funnel",id:"difference-between-filter-and-funnel",level:3},{value:"Filter",id:"filter",level:3},{value:"Funnel",id:"funnel",level:3},{value:"Dataset",id:"dataset",level:2},{value:"Basic Style, Title &amp; Subtitle",id:"basic-style-title--subtitle",level:2},{value:"Charts",id:"charts",level:2},{value:"Prebuilt",id:"prebuilt",level:3},{value:"Single Value",id:"single-value",level:4},{value:"Bar",id:"bar",level:4},{value:"Line",id:"line",level:4},{value:"Scatter",id:"scatter",level:4},{value:"Pie",id:"pie",level:4},{value:"Doughnut",id:"doughnut",level:4},{value:"Nightingale",id:"nightingale",level:4},{value:"Sunburst",id:"sunburst",level:4},{value:"Tree",id:"tree",level:4},{value:"Treemap",id:"treemap",level:4},{value:"Map",id:"map",level:4},{value:"Customized",id:"customized",level:3},{value:"Data Structure",id:"data-structure",level:4},{value:"Chart Script",id:"chart-script",level:4},{value:"Define Variables",id:"define-variables",level:4},{value:"Variables",id:"variables",level:4},{value:"Summary",id:"summary",level:4}],c={toc:u};function m(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"report--chart"},"Report & Chart"),(0,r.kt)("p",null,"A report equates a chart, which is built on a dataset based on subject. It includes following parts,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Indicators and dimensions,"),(0,r.kt)("li",{parentName:"ul"},"Data filter,"),(0,r.kt)("li",{parentName:"ul"},"Data funnels on date/numeric/enumeration factors.")),(0,r.kt)("p",null,"Report, meanwhile, is a dataset built by above, further rendered as a chart."),(0,r.kt)("p",null,"A one more important thing is after report built, it can be referred by dashboards, we will discuss it in next chapter."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Report",src:a(45593).Z,width:"3584",height:"1854"})),(0,r.kt)("h2",{id:"header"},"Header"),(0,r.kt)("p",null,"Report name can be changed by click name part in header. Also, in header bar you can,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Back to connected-space by click ",(0,r.kt)("inlineCode",{parentName:"li"},"Catalog"),","),(0,r.kt)("li",{parentName:"ul"},"Back to report list by click ",(0,r.kt)("inlineCode",{parentName:"li"},"Reports"),","),(0,r.kt)("li",{parentName:"ul"},"Create a new report by click ",(0,r.kt)("inlineCode",{parentName:"li"},"New Report"),","),(0,r.kt)("li",{parentName:"ul"},"Switch to another report belongs to same subject by click ",(0,r.kt)("inlineCode",{parentName:"li"},"Switch Report"),","),(0,r.kt)("li",{parentName:"ul"},"Delete current one by click ",(0,r.kt)("inlineCode",{parentName:"li"},"Delete Me"),".")),(0,r.kt)("h2",{id:"bottom-tabs"},"Bottom Tabs"),(0,r.kt)("p",null,"Switching visible of bottom bar by clicking the palette or grid button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bottom Tabs",src:a(32922).Z,width:"3584",height:"1854"})),(0,r.kt)("p",null,"In bottom tabs, you can,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View dataset,"),(0,r.kt)("li",{parentName:"ul"},"Define filter,"),(0,r.kt)("li",{parentName:"ul"},"Define funnel,"),(0,r.kt)("li",{parentName:"ul"},"Set basic style of chart,"),(0,r.kt)("li",{parentName:"ul"},"Set title and subtitle of chart,"),(0,r.kt)("li",{parentName:"ul"},"Set specific styles of chart,"),(0,r.kt)("li",{parentName:"ul"},"Define script, variables of customized chart.")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Customizing script and variables of chart by business user is available when ",(0,r.kt)("inlineCode",{parentName:"p"},"REACT_APP_CHART_SCRIPT_IN_CONSOLE=true")," (by default it is not)\n.",(0,r.kt)("br",{parentName:"p"}),"\n","Find ",(0,r.kt)("inlineCode",{parentName:"p"},"REACT_APP_CHART_SCRIPT_IN_CONSOLE")," in ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."))),(0,r.kt)("h2",{id:"report-structure"},"Report Structure"),(0,r.kt)("h3",{id:"report-type"},"Report Type"),(0,r.kt)("p",null,"First thing of define a report is deciding the report type, there are several options. We will explain each of them later, now let's have an\noverview, they are,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Single Value,"),(0,r.kt)("li",{parentName:"ul"},"Bar,"),(0,r.kt)("li",{parentName:"ul"},"Line,"),(0,r.kt)("li",{parentName:"ul"},"Scatter,"),(0,r.kt)("li",{parentName:"ul"},"Pie,"),(0,r.kt)("li",{parentName:"ul"},"Doughnut,"),(0,r.kt)("li",{parentName:"ul"},"Nightingale,"),(0,r.kt)("li",{parentName:"ul"},"Sunburst,"),(0,r.kt)("li",{parentName:"ul"},"Tree,"),(0,r.kt)("li",{parentName:"ul"},"Treemap,"),(0,r.kt)("li",{parentName:"ul"},"Map,"),(0,r.kt)("li",{parentName:"ul"},"Customized.")),(0,r.kt)("p",null,"Report type equates chart type, it determines count of indicators and dimensions."),(0,r.kt)("h3",{id:"indicators--dimensions"},"Indicators & Dimensions"),(0,r.kt)("p",null,"After type is decided, pick indicators and dimensions which you care about. For each indicator, there are five aggregation arithmetics\navailable,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Indicator Aggregation",src:a(73282).Z,width:"1136",height:"992"})),(0,r.kt)("p",null,"Now select dimensions, they are perspectives of data insight. Also, if there are aggregations defined on indicators, they are aggregated by\ndimensions."),(0,r.kt)("h3",{id:"data-truncate"},"Data Truncate"),(0,r.kt)("p",null,"Sometimes, we don't want to discover the whole picture, we just want to know the outstanding ones. In this case, identify count of data you\nwant and assign the truncate type by ",(0,r.kt)("inlineCode",{parentName:"p"},"Top")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Bottom")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,r.kt)("h2",{id:"filter-and-funnel"},"Filter and Funnel"),(0,r.kt)("p",null,"Report is built based on subject, in previous chapter, we introduced how to define a subject. Actually, it is just like a SQL query from one\nor multiple topics. In report, data can be filtered one more time via filter and funnel."),(0,r.kt)("h3",{id:"difference-between-filter-and-funnel"},"Difference between Filter and Funnel"),(0,r.kt)("p",null,"In anutshell, filter is static and funnel is dynamic. In runtime, filter is exactly same as it was defined. But for value of funnel, it can\nbe passed different for each time. It is very vital in case of changing it on dashboard."),(0,r.kt)("h3",{id:"filter"},"Filter"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Filter",src:a(97422).Z,width:"3584",height:"1854"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Define criteria on subject columns here instead of factor in subject because of no topic can be seen here,"),(0,r.kt)("li",{parentName:"ul"},"From type of both sides on criteria is fixed, change from type is not available anymore.")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Report filter is more like a simplified version of subject."))),(0,r.kt)("h3",{id:"funnel"},"Funnel"),(0,r.kt)("p",null,"Columns of date, numeric and enumeration will be detected automatically, list in funnel definition part."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Funnel",src:a(69963).Z,width:"3584",height:"1854"})),(0,r.kt)("p",null,"Enabled funnels are shown on bottom tabs to set default funnel values, values will be used to filter data in this page."),(0,r.kt)("p",null,"And in dashboard, we just have a quick look, funnels are available for accepting dynamic values, as below,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Funnel in Dashboard",src:a(98560).Z,width:"1712",height:"1322"})),(0,r.kt)("h2",{id:"dataset"},"Dataset"),(0,r.kt)("p",null,"After everything declared, now we can preview dataset to check whether it is as expected or not,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dataset",src:a(16978).Z,width:"3584",height:"1854"})),(0,r.kt)("p",null,"Sometimes, we want to verify the chart by simulated data instead of fetch them from server side. Simply switch on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Simulate")," toggle,\ndownload data template (according to indicators definition), prepare mock data and upload them."),(0,r.kt)("h2",{id:"basic-style-title--subtitle"},"Basic Style, Title & Subtitle"),(0,r.kt)("p",null,"For each chart, basic style, title and subtitle are available, you can find settings on appropriate tab. There are dozens of settings, we\nwill not introduce them one by one, just try them in page."),(0,r.kt)("p",null,"Here are some screenshots,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Basic Style",src:a(25618).Z,width:"3584",height:"1854"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Title",src:a(17157).Z,width:"3584",height:"1854"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Subtitle",src:a(73135).Z,width:"3584",height:"1854"})),(0,r.kt)("h2",{id:"charts"},"Charts"),(0,r.kt)("h3",{id:"prebuilt"},"Prebuilt"),(0,r.kt)("p",null,"As we introduced in ",(0,r.kt)("a",{parentName:"p",href:"#report-type"},"report type"),", there are several types of charts built-in. For each type, there is different restriction\nfor indicators and dimensions and specific style settings are available."),(0,r.kt)("h4",{id:"single-value"},"Single Value"),(0,r.kt)("p",null,"In previous section, we have seen the common style settings, and for single value chart, there is a peculiarity tab,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Count Report",src:a(67713).Z,width:"3584",height:"1854"})),(0,r.kt)("h4",{id:"bar"},"Bar"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bar Report",src:a(88902).Z,width:"3584",height:"1854"})),(0,r.kt)("h4",{id:"line"},"Line"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Line Report",src:a(59209).Z,width:"3584",height:"1854"})),(0,r.kt)("h4",{id:"scatter"},"Scatter"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Scatter Report",src:a(80201).Z,width:"3584",height:"1854"})),(0,r.kt)("h4",{id:"pie"},"Pie"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pie Report",src:a(18479).Z,width:"3584",height:"1854"})),(0,r.kt)("h4",{id:"doughnut"},"Doughnut"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Doughnut Report",src:a(95682).Z,width:"3584",height:"1854"})),(0,r.kt)("h4",{id:"nightingale"},"Nightingale"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Nightingale",src:a(56894).Z,width:"3584",height:"1854"})),(0,r.kt)("h4",{id:"sunburst"},"Sunburst"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sunburst",src:a(22516).Z,width:"3584",height:"1854"})),(0,r.kt)("h4",{id:"tree"},"Tree"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tree",src:a(79787).Z,width:"3584",height:"1854"})),(0,r.kt)("h4",{id:"treemap"},"Treemap"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Treemap",src:a(95481).Z,width:"3584",height:"1854"})),(0,r.kt)("h4",{id:"map"},"Map"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Map",src:a(70086).Z,width:"3584",height:"1854"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Level-1 map (in state/province level): China, Japan, Singapore and USA are built-in."))),(0,r.kt)("h3",{id:"customized"},"Customized"),(0,r.kt)("p",null,"For those charts haven't built-in, could be rendered by customized type, this is tech-orientation and by default not open to business user,\nwe recommend implementing the complex charts by your technical department and expose them to business users."),(0,r.kt)("h4",{id:"data-structure"},"Data Structure"),(0,r.kt)("p",null,"Follow below steps,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, you need to be an administrator, define a space as we introduced ",(0,r.kt)("a",{parentName:"li",href:"../admin/space"},"here"),", make sure it is assigned to yourself and\nbusiness users who will use this customized chart."),(0,r.kt)("li",{parentName:"ul"},"Switch to console workbench, connect this space,"),(0,r.kt)("li",{parentName:"ul"},"Create a subject and create a report, simply following the standard process,"),(0,r.kt)("li",{parentName:"ul"},"Select report type as ",(0,r.kt)("inlineCode",{parentName:"li"},"Customized"),","),(0,r.kt)("li",{parentName:"ul"},"Select indicators/dimensions/filters/funnels, and set truncate if needed, just as normal,"),(0,r.kt)("li",{parentName:"ul"},"Set basic style/title/subtitle, also as normal.")),(0,r.kt)("h4",{id:"chart-script"},"Chart Script"),(0,r.kt)("p",null,"Now we have dataset for this report, open bottom bar, find script tab,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Customized",src:a(64079).Z,width:"3584",height:"1854"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Watchmen"))," use ",(0,r.kt)("a",{parentName:"p",href:"https://echarts.apache.org/"},"echarts")," as chart engine, so in this script, a valid echarts options must be returned.\nSince script will be run in browser, which means please strictly follow the javascript syntax supported by your browser version, it can be\nfound at ",(0,r.kt)("a",{parentName:"p",href:"https://caniuse.com/"},"CanIUse"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"(() => {\n    return {              // this is what the echarts needed\n        /** ... */\n    };\n})();\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For how to use echarts, find their examples ",(0,r.kt)("a",{parentName:"p",href:"https://echarts.apache.org/examples/en/index.html"},"here"),", and configuration\ndocs ",(0,r.kt)("a",{parentName:"p",href:"https://echarts.apache.org/en/option.html"},"here"),"."))),(0,r.kt)("p",null,"To build echarts options in script, there is one more parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," is passed into this function. Typically, structure as below,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},"{\n    color: [],\n    // colors \n    data: [],\n    // dataset, 2 dimensions array\n    title: {},\n    // title defined in title/subtitle tabs\n    vars: {}\n    // variables\n}\n")),(0,r.kt)("p",null,"Use these data to build new options and return to engine to render chart."),(0,r.kt)("h4",{id:"define-variables"},"Define Variables"),(0,r.kt)("p",null,"When defining a customized charts, sometimes there are some dynamic variables want to expose to business users, so they can change the\nrendering behavior through giving values of these variables by their own. There is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Variables Defs")," tab to do this,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Variables Defs",src:a(37710).Z,width:"3584",height:"1854"})),(0,r.kt)("p",null,"Let's see a complete sample,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"(() => {\n    // your code starts\n    return [\n        // unit/placeholder/defaultValue is optional, defaultValue must be a number\n        {key: 'var1', type: 'number', placeholder: 'Number Variable...', label: 'V1', unit: 'px', defaultValue: 1},\n        // placeholder/defaultValue is optional, defaultValue must be a number\n        {key: 'var2', type: 'percentage', placeholder: 'Percentage Variable...', label: 'V2', defaultValue: 10},\n        // defaultValue is optional, defaultValue must be a boolean\n        {key: 'var3', type: 'boolean', label: 'V3', defaultValue: true},\n        {type: 'section', label: 'Section 2'},\n        // placeholder/defaultValue is optional\n        {key: 'var4', type: 'text', placeholder: 'Text Variable...', label: 'V4', defaultValue: 'abc'},\n        // defaultValue is optional, defaultValue must be css color\n        {key: 'var5', type: 'color', label: 'V5', defaultValue: '#ff0000'},\n        // placeholder/defaultValue is optional, defaultValue must match one of options\n        {\n            key: 'var6',\n            type: 'dropdown',\n            placeholder: 'Dropdown Variable...',\n            label: 'V6',\n            defaultValue: '1',\n            options: [{value: '1', label: 'Option 1'}, {value: '2', label: 'Option 2'}]\n        }\n    ];\n    // your code ends\n})();\n")),(0,r.kt)("p",null,"Also, it will be compiled and run on browser side, make sure it is strictly following the javascript syntax supported by your browser\nversion. There are several types supported, variable declaration contains,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": make sure it is unique,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),",",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number"),": numeric value, rendered as an input,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unit"),": only for ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),","))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"percentage"),": a numeric value, rendered as an input,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"percentage")," is a ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," with unit is ",(0,r.kt)("inlineCode",{parentName:"li"},"%"),","))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": a boolean value, rendered as a checkbox,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"text"),": a string value, rendered as an input,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"color"),": a color value, rendered as a color picker,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dropdown"),": value type according to options, number/string/boolean are supported. It is rendered as a dropdown.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),": options for dropdown,"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"placeholder"),": a string to describe meaning of this variable,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"label"),": variable label,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultValue"),": default value of variable.")),(0,r.kt)("h4",{id:"variables"},"Variables"),(0,r.kt)("p",null,"Defined variables will be rendered in ",(0,r.kt)("inlineCode",{parentName:"p"},"Variables")," tab as below,"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Variables",src:a(45442).Z,width:"3584",height:"1854"})),(0,r.kt)("p",null,"And they will be passed as ",(0,r.kt)("inlineCode",{parentName:"p"},"options.vars")," to chart script, like,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{2-4}","{2-4}":!0},'(() => {\n    console.log(options.vars);      \n    // in browser console, will see \n    // {var: 1, var2: 10, var3: true, var4: "abc", var5: "rgba(255,0,0,1)", var6: "1"}\n    \n    return {                        // this is what the echarts needed\n        /** ... */\n    };\n})();\n')),(0,r.kt)("h4",{id:"summary"},"Summary"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Script")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Variables Defs")," tabs are available for admin only by default, they can be open to business users when build and deploy\nby ",(0,r.kt)("inlineCode",{parentName:"p"},"REACT_APP_CHART_SCRIPT_IN_CONSOLE=true"),". It is tech-orientation, and make sure that your business users understanding how to use this\nbefore you decide to open it, they must learn the part of Javascript and echarts, it's easy to a programmer, but not that easy to others.\nAnother thing is, if script is not open to business users, then they cannot change the structure of report, which means chart type,\nindicators and dimensions is immutable, and filter and funnel still can be changed as normal."))}m.isMDXComponent=!0},88902:function(e,t,a){t.Z=a.p+"assets/images/report-bar-chart-6931d9f1666fdd914a580653ee6afed0.png"},25618:function(e,t,a){t.Z=a.p+"assets/images/report-basic-style-5fc7ca8c9cb5af064163fedcd7c756bf.png"},32922:function(e,t,a){t.Z=a.p+"assets/images/report-bottom-tabs-54a7c154491119f87362953e15b431a9.png"},67713:function(e,t,a){t.Z=a.p+"assets/images/report-count-chart-c656b4b75abbc6435fc176eb30b332b4.png"},64079:function(e,t,a){t.Z=a.p+"assets/images/report-customized-chart-5d7bfb1eae5c33d2f675b9c31068ce67.png"},16978:function(e,t,a){t.Z=a.p+"assets/images/report-dataset-50db8e9335bdcf214bda6cf77fd20ee3.png"},95682:function(e,t,a){t.Z=a.p+"assets/images/report-doughnut-chart-a7a7723d76ee1c5072686525b37f3726.png"},97422:function(e,t,a){t.Z=a.p+"assets/images/report-filter-191ed61ee457659354b1b225c1d6f6e5.png"},98560:function(e,t,a){t.Z=a.p+"assets/images/report-funnel-in-dashboard-a2a9920f2630db48086bccb5553db921.png"},69963:function(e,t,a){t.Z=a.p+"assets/images/report-funnel-46248533ff2c52b0bc18f2db29b0cb7e.png"},73282:function(e,t,a){t.Z=a.p+"assets/images/report-indicator-aggregation-all-4383bbac4767fa8b702ec48867106c92.png"},59209:function(e,t,a){t.Z=a.p+"assets/images/report-line-chart-05f551bd086ee64f6a3c0a7847d9fe06.png"},70086:function(e,t,a){t.Z=a.p+"assets/images/report-map-chart-b6cc9fd1b59c4824cc0c95f95eec3953.png"},56894:function(e,t,a){t.Z=a.p+"assets/images/report-nightingale-chart-2119d2e3773cd04a905f608bfd7e96c8.png"},18479:function(e,t,a){t.Z=a.p+"assets/images/report-pie-chart-ad863366d173644db930f0f1421cd68e.png"},80201:function(e,t,a){t.Z=a.p+"assets/images/report-scatter-chart-cf172146ac28d6c81976b502904ea2f3.png"},73135:function(e,t,a){t.Z=a.p+"assets/images/report-subtitle-2835893043bf6674aca5a21153cd5f04.png"},22516:function(e,t,a){t.Z=a.p+"assets/images/report-sunburst-chart-6b19e6ea408377b1e3f4904bb5507d34.png"},17157:function(e,t,a){t.Z=a.p+"assets/images/report-title-28eefff8ffc1a85c597ae2d4ba6f9743.png"},79787:function(e,t,a){t.Z=a.p+"assets/images/report-tree-chart-0f034760f2397fe3042cacd0c432c48c.png"},95481:function(e,t,a){t.Z=a.p+"assets/images/report-treemap-chart-1d51f0f28d7f9ea6b841b725df59cd2d.png"},37710:function(e,t,a){t.Z=a.p+"assets/images/report-variables-defs-014f0dc829a51d17bda99df80d89a462.png"},45442:function(e,t,a){t.Z=a.p+"assets/images/report-variables-e2e41fba1a9343110ee8845565e1e95f.png"},45593:function(e,t,a){t.Z=a.p+"assets/images/report-d1cf52375b0b2257ee2e389c2b0e7a21.png"}}]);