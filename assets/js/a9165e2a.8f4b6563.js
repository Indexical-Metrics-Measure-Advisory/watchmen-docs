"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[583],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},48807:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(83117),i=(a(67294),a(3905));const o={id:"toolbox",title:"Toolbox",sidebar_position:130},r="Toolbox",l={unversionedId:"web-client/admin/toolbox",id:"version-16.2/web-client/admin/toolbox",title:"Toolbox",description:"Tools for admin purpose.",source:"@site/versioned_docs/version-16.2/020-web-client/010-admin/130-toolbox.md",sourceDirName:"020-web-client/010-admin",slug:"/web-client/admin/toolbox",permalink:"/docs/16.2/web-client/admin/toolbox",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.2/020-web-client/010-admin/130-toolbox.md",tags:[],version:"16.2",lastUpdatedBy:"botlikes",lastUpdatedAt:1680853926,formattedLastUpdatedAt:"Apr 7, 2023",sidebarPosition:130,frontMatter:{id:"toolbox",title:"Toolbox",sidebar_position:130},sidebar:"sidebar",previous:{title:"Monitor Logs",permalink:"/docs/16.2/web-client/admin/monitor-logs"},next:{title:"Console Workbench Index",permalink:"/docs/16.2/web-client/console/console-wb-index"}},s={},d=[{value:"Topic Snapshot",id:"topic-snapshot",level:2},{value:"Inside Story",id:"inside-story",level:3},{value:"Filter",id:"filter",level:4},{value:"Logic",id:"logic",level:4},{value:"Task Data Topic",id:"task-data-topic",level:4},{value:"Target Data Topic",id:"target-data-topic",level:4},{value:"Pipeline Trigger",id:"pipeline-trigger",level:2}],p={toc:d};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"toolbox"},"Toolbox"),(0,i.kt)("p",null,"Tools for admin purpose."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Toolbox Index",src:a(62346).Z,width:"3584",height:"1854"})),(0,i.kt)("h2",{id:"topic-snapshot"},"Topic Snapshot"),(0,i.kt)("p",null,"For catching topic data snapshot frequently, embedded schedulers could be defined here."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Topic Snapshot",src:a(25022).Z,width:"3584",height:"1854"})),(0,i.kt)("p",null,"Here is an empty scheduler, define target topic name and filter."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Topic Snapshot Scheduler",src:a(60341).Z,width:"2200",height:"1524"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Multiple schedulers for one source topic are allowed, they might have different frequencies, different filters.")),(0,i.kt)("h3",{id:"inside-story"},"Inside Story"),(0,i.kt)("p",null,"When a snapshot scheduler is defined, the following topics will be created,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A task data topic, which is prefixed by ",(0,i.kt)("inlineCode",{parentName:"li"},"ss_")),(0,i.kt)("li",{parentName:"ul"},"A target data topic, which named manually.")),(0,i.kt)("h4",{id:"filter"},"Filter"),(0,i.kt)("p",null,"A set of variables are available for filter data,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"processStartDate"),": process start date,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"processStartYear"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"processStartMonth"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"processStartDay"),": process start year/month/day, numeric value,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"processEndDate"),": process end date,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"processEndYear"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"processEndMonth"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"processEndDay"),": process end year/month/day, numeric value.")),(0,i.kt)("p",null,"For different frequency, the start and end date are different,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Daily:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Start date: yesterday of job run date,"),(0,i.kt)("li",{parentName:"ul"},"End date: yesterday of job run date,"))),(0,i.kt)("li",{parentName:"ul"},"Weekly:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Start date: last Sunday,"),(0,i.kt)("li",{parentName:"ul"},"End date: last Saturday,"))),(0,i.kt)("li",{parentName:"ul"},"Monthly:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Start date: first day of last month,"),(0,i.kt)("li",{parentName:"ul"},"End date: last day of last month.")))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Process start date is logged into ",(0,i.kt)("inlineCode",{parentName:"p"},"snapshot_job_locks")," as process date, which means the ",(0,i.kt)("inlineCode",{parentName:"p"},"process_date")," is not the physical date of job\nrunning. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"created_at")," instead to aware the exact job run date.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Time of start date is 0 and time of end date is last millisecond of day.")),(0,i.kt)("h4",{id:"logic"},"Logic"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once scheduler triggered, data from source topic are loaded by scheduler (filter applied), and write into task topic. Copy is executed at\nthe node which grabbed the job. Plus, to void instantaneous memory cost, copy to task is row by row."),(0,i.kt)("li",{parentName:"ul"},"Each row of task topic will be treated as an insert row action, and trigger a pipeline to copy data to target topic. Pipeline is\ntriggerred on all doll nodes. Once task is grabbed, status of task will be changed to processed.")),(0,i.kt)("h4",{id:"task-data-topic"},"Task Data Topic"),(0,i.kt)("p",null,"Task data topic is a raw topic, which contains factors as below,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"factors from source topic,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"originaldataid"),": to identify the original ",(0,i.kt)("inlineCode",{parentName:"li"},"id_")," value of source data row,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status"),": status of data row,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ready")," when task created,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"processed")," when task processed,"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"snapshottag"),": a tag for filter data,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"for daily, format is ",(0,i.kt)("inlineCode",{parentName:"li"},"d%Y%m%d"),","),(0,i.kt)("li",{parentName:"ul"},"for weekly, format is ",(0,i.kt)("inlineCode",{parentName:"li"},"w%Y%U"),","),(0,i.kt)("li",{parentName:"ul"},"for monthly, format is ",(0,i.kt)("inlineCode",{parentName:"li"},"m%Y%m")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"targettopicname"),": target topic name. Multiple schedulers are allowed for snapshot catching."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jobid")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"schedulerid"),": to identify the scheduler definition and job instance. ",(0,i.kt)("inlineCode",{parentName:"li"},"jobid")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"lock_id")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"snapshot_job_locks"),".")),(0,i.kt)("h4",{id:"target-data-topic"},"Target Data Topic"),(0,i.kt)("p",null,"Target data topic is a distinct topic, which contains factors as below,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"factors from source topic,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"snapshottag"),": a tag for filter data.")),(0,i.kt)("h2",{id:"pipeline-trigger"},"Pipeline Trigger"),(0,i.kt)("p",null,"Use the existing data to re-trigger pipeline."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pipeline Trigger",src:a(89756).Z,width:"1780",height:"928"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Choose topic,"),(0,i.kt)("li",{parentName:"ul"},"Pick pipelines want to trigger,"),(0,i.kt)("li",{parentName:"ul"},"Fill filter of topic.")),(0,i.kt)("p",null,"Fetch and trigger pipelines. Note if there are more than 1 thousand rows, then it can not be triggered in browser. In this scenario,\ndownload data to file and run them via CLI. Otherwise, it can be triggered in browser."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"DO NOT close browser if it is running.")))}c.isMDXComponent=!0},89756:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pipeline-trigger-8d1765c121d6c6fef5efeb6b5cd0d565.png"},62346:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/toolbox-c13240b4332eedaaac668dd9d09dbb2f.png"},60341:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/topic-snapshot-scheduler-291697008ca31003caa6f2b7f4598dd8.png"},25022:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/topic-snapshot-f7174cdd816cae84f9ed147492bab4d1.png"}}]);