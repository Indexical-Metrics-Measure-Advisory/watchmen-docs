"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[6376],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(g,o(o({ref:t},l),{},{components:n})):i.createElement(g,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(67294),r=n(34334);const a="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return i.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(83117),r=n(67294),a=n(34334),o=n(72389),c=n(67392),p=n(7094),s=n(12466);const l="tabList__CuJ",d="tabItem_LNqP";function u(e){var t,n;const{lazy:o,block:u,defaultValue:m,values:g,groupId:y,className:T}=e,A=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=g?g:A.map((e=>{let{props:{value:t,label:n,attributes:i}}=e;return{value:t,label:n,attributes:i}})),b=(0,c.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(t=null!=m?m:null==(n=A.find((e=>e.props.default)))?void 0:n.props.value)?t:A[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:x,setTabGroupChoices:w}=(0,p.U)(),[h,R]=(0,r.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=y){const e=x[y];null!=e&&e!==h&&f.some((t=>t.value===e))&&R(e)}const I=e=>{const t=e.currentTarget,n=E.indexOf(t),i=f[n].value;i!==h&&(O(t),R(i),null!=y&&w(y,String(i)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var i;const t=E.indexOf(e.currentTarget)+1;n=null!=(i=E[t])?i:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",l)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":u},T)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:e=>E.push(e),onKeyDown:P,onFocus:I,onClick:I},o,{className:(0,a.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":h===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(A.filter((e=>e.props.value===h))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},A.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function m(e){const t=(0,o.Z)();return r.createElement(u,(0,i.Z)({key:String(t)},e))}},38486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var i=n(83117),r=(n(67294),n(3905)),a=n(85162),o=n(65488);const c={id:"pipeline",title:"Pipeline",sidebar_position:10},p="Space",s={unversionedId:"tuples/pipeline",id:"version-15.2.14/tuples/pipeline",title:"Pipeline",description:"Model",source:"@site/versioned_docs/version-15.2.14/tuples/pipeline.mdx",sourceDirName:"tuples",slug:"/tuples/pipeline",permalink:"/docs/15.2.14/tuples/pipeline",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-15.2.14/tuples/pipeline.mdx",tags:[],version:"15.2.14",lastUpdatedBy:"botlikes",lastUpdatedAt:1657767938,formattedLastUpdatedAt:"Jul 14, 2022",sidebarPosition:10,frontMatter:{id:"pipeline",title:"Pipeline",sidebar_position:10},sidebar:"sidebar",previous:{title:"Topic",permalink:"/docs/15.2.14/tuples/topic"},next:{title:"License",permalink:"/docs/15.2.14/appendix/license"}},l={},d=[{value:"Model",id:"model",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"space"},"Space"),(0,r.kt)("h2",{id:"model"},"Model"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"ts",label:"Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/pipeline-super-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/pipeline-super-types.ts"'},"export interface Conditional {\n    conditional: boolean;\n    on?: ParameterJoint;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/pipeline-stage-unit-action-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/pipeline-stage-unit-action-types.ts"'},"export enum SystemActionType {\n    ALARM = 'alarm',\n    COPY_TO_MEMORY = 'copy-to-memory',\n    WRITE_TO_EXTERNAL = 'write-to-external'\n}\n\nexport enum ReadTopicActionType {\n    READ_ROW = 'read-row',\n    READ_FACTOR = 'read-factor',\n    EXISTS = 'exists',\n    READ_ROWS = 'read-rows',\n    READ_FACTORS = 'read-factors'\n}\n\nexport enum WriteTopicActionType {\n    MERGE_ROW = 'merge-row',\n    INSERT_ROW = 'insert-row',\n    INSERT_OR_MERGE_ROW = 'insert-or-merge-row',\n    WRITE_FACTOR = 'write-factor',\n}\n\nexport type PipelineStageUnitActionType = WriteTopicActionType | ReadTopicActionType | SystemActionType;\n\nexport type PipelineStageUnitActionId = string;\n\nexport interface PipelineStageUnitAction {\n    actionId: PipelineStageUnitActionId;\n    type: PipelineStageUnitActionType;\n}\n\nexport interface MemoryWriter extends PipelineStageUnitAction {\n    variableName: string;\n}\n\nexport interface FromTopic extends PipelineStageUnitAction {\n    topicId: TopicId;\n}\n\nexport interface FromFactor extends FromTopic {\n    factorId: FactorId;\n}\n\nexport interface ToTopic extends PipelineStageUnitAction {\n    topicId: TopicId;\n}\n\nexport interface ToFactor extends ToTopic {\n    factorId: FactorId;\n}\n\nexport interface FindBy extends PipelineStageUnitAction {\n    by: ParameterJoint;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/aggregate-arithmetic-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/aggregate-arithmetic-types.ts"'},"export enum AggregateArithmetic {\n    NONE = 'none',\n    COUNT = 'count',\n    SUM = 'sum',\n    AVG = 'avg'\n}\n\nexport interface AggregateArithmeticHolder {\n    arithmetic: AggregateArithmetic;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/system-actions-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/system-actions-types.ts"'},"export enum AlarmActionSeverity {\n    LOW = 'low',\n    MEDIUM = 'medium',\n    HIGH = 'high',\n    CRITICAL = 'critical',\n}\n\nexport interface AlarmAction extends PipelineStageUnitAction, Conditional {\n    type: SystemActionType.ALARM;\n    severity: AlarmActionSeverity;\n    message: string;\n}\n\n    /** copy something to memory variable */\nexport interface CopyToMemoryAction extends PipelineStageUnitAction, MemoryWriter {\n    type: SystemActionType.COPY_TO_MEMORY;\n    source: Parameter;\n}\n\nexport interface WriteToExternalAction extends PipelineStageUnitAction {\n    type: SystemActionType.WRITE_TO_EXTERNAL;\n    externalWriterId: string;\n    eventCode?: string;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/read-topic-actions-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/read-topic-actions-types.ts"'},"export interface ReadTopicAction extends FromTopic, MemoryWriter, FindBy, PipelineStageUnitAction {\n    type: ReadTopicActionType;\n}\n\nexport interface ReadRowAction extends ReadTopicAction {\n    type: ReadTopicActionType.READ_ROW;\n}\n\nexport interface ReadRowsAction extends ReadTopicAction {\n    type: ReadTopicActionType.READ_ROWS;\n}\n\nexport interface ReadFactorAction extends FromFactor, ReadTopicAction, AggregateArithmeticHolder {\n    type: ReadTopicActionType.READ_FACTOR;\n}\n\nexport interface ReadFactorsAction extends FromFactor, ReadTopicAction {\n    type: ReadTopicActionType.READ_FACTORS;\n}\n\nexport interface ExistsAction extends ReadTopicAction {\n    type: ReadTopicActionType.EXISTS;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/write-topic-actions-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/write-topic-actions-types.ts"'},"export interface MappingFactor extends AggregateArithmeticHolder {\n    source: Parameter;\n    factorId: FactorId;\n}\n\nexport interface MappingRow extends PipelineStageUnitAction {\n    mapping: Array<MappingFactor>;\n}\n\nexport interface WriteTopicAction extends ToTopic, PipelineStageUnitAction {\n    type: WriteTopicActionType;\n}\n\nexport interface InsertRowAction extends WriteTopicAction, MappingRow {\n    type: WriteTopicActionType.INSERT_ROW;\n}\n\nexport interface MergeRowAction extends WriteTopicAction, MappingRow, FindBy {\n    type: WriteTopicActionType.MERGE_ROW | WriteTopicActionType.INSERT_OR_MERGE_ROW;\n}\n\nexport interface WriteFactorAction extends ToFactor, WriteTopicAction, FindBy, AggregateArithmeticHolder {\n    type: WriteTopicActionType.WRITE_FACTOR;\n    source: Parameter;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-types.ts"'},"export interface PipelineStageUnit extends Conditional {\n    unitId: PipelineStageUnitId;\n    name: string;\n    /** all actions in this unit can be looped inside */\n    loopVariableName?: string;\n    do: Array<PipelineStageUnitAction>;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/pipeline-stage-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/pipeline-stage-types.ts"'},"export interface PipelineStage extends Conditional {\n    stageId: PipelineStageId;\n    name: string;\n    units: Array<PipelineStageUnit>;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/pipeline-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/pipeline-types.ts"'},"export enum PipelineTriggerType {\n    INSERT = 'insert',\n    MERGE = 'merge',\n    // insert or merge\n    INSERT_OR_MERGE = 'insert-or-merge',\n    DELETE = 'delete',\n}\n\nexport type PipelineId = string;\n\nexport interface Pipeline extends Tuple, Conditional {\n    pipelineId: PipelineId;\n    topicId: TopicId;\n    name: string;\n    type: PipelineTriggerType;\n    stages: Array<PipelineStage>;\n    enabled: boolean;\n    validated: boolean;\n    tenantId?: TenantId;\n}\n"))),(0,r.kt)(a.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"em"},"(under construction)")))))))}m.isMDXComponent=!0}}]);