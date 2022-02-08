"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[2463],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(g,o(o({ref:t},l),{},{components:n})):i.createElement(g,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var i=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(7462),r=n(7294),a=n(2389),o=n(9443);var c=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=n(3616),s=n(6010),l="tabItem_vU9c";function u(e){var t,n,a,o=e.lazy,u=e.block,d=e.defaultValue,m=e.values,g=e.groupId,y=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),T=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,p.lx)(T,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var A=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==A&&!T.some((function(e){return e.value===A})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+A+'" but none of its children has the corresponding value. Available values are: '+T.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=c(),x=b.tabGroupChoices,w=b.setTabGroupChoices,h=(0,r.useState)(A),R=h[0],E=h[1],O=[],I=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var P=x[g];null!=P&&P!==R&&T.some((function(e){return e.value===P}))&&E(P)}var S=function(e){var t=e.currentTarget,n=O.indexOf(t),i=T[n].value;i!==R&&(I(t),E(i),null!=g&&w(g,i))},k=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=O.indexOf(e.currentTarget)+1;n=O[i]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},y)},T.map((function(e){var t=e.value,n=e.label,a=e.attributes;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return O.push(e)},onKeyDown:k,onFocus:S,onClick:S},a,{className:(0,s.Z)("tabs__item",l,null==a?void 0:a.className,{"tabs__item--active":R===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===R}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function d(e){var t=(0,a.Z)();return r.createElement(u,(0,i.Z)({key:String(t)},e))}},4037:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return g}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=n(8215),c=n(6396),p=["components"],s={id:"pipeline",title:"Pipeline",sidebar_position:10},l="Space",u={unversionedId:"tuples/pipeline",id:"tuples/pipeline",title:"Pipeline",description:"Model",source:"@site/docs/tuples/pipeline.mdx",sourceDirName:"tuples",slug:"/tuples/pipeline",permalink:"/watchmen-docs/docs/next/tuples/pipeline",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/docs/tuples/pipeline.mdx",tags:[],version:"current",lastUpdatedBy:"luke0623",lastUpdatedAt:1644310221,formattedLastUpdatedAt:"2/8/2022",sidebarPosition:10,frontMatter:{id:"pipeline",title:"Pipeline",sidebar_position:10},sidebar:"sidebar",previous:{title:"Topic",permalink:"/watchmen-docs/docs/next/tuples/topic"},next:{title:"Index",permalink:"/watchmen-docs/docs/next/api/api-index"}},d=[{value:"Model",id:"model",children:[],level:2}],m={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,p);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"space"},"Space"),(0,a.kt)("h2",{id:"model"},"Model"),(0,a.kt)(c.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",label:"Typescript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/pipeline-super-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/pipeline-super-types.ts"'},"export interface Conditional {\n    conditional: boolean;\n    on?: ParameterJoint;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/pipeline-stage-unit-action-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/pipeline-stage-unit-action-types.ts"'},"export enum SystemActionType {\n    ALARM = 'alarm',\n    COPY_TO_MEMORY = 'copy-to-memory',\n    WRITE_TO_EXTERNAL = 'write-to-external'\n}\n\nexport enum ReadTopicActionType {\n    READ_ROW = 'read-row',\n    READ_FACTOR = 'read-factor',\n    EXISTS = 'exists',\n    READ_ROWS = 'read-rows',\n    READ_FACTORS = 'read-factors'\n}\n\nexport enum WriteTopicActionType {\n    MERGE_ROW = 'merge-row',\n    INSERT_ROW = 'insert-row',\n    INSERT_OR_MERGE_ROW = 'insert-or-merge-row',\n    WRITE_FACTOR = 'write-factor',\n}\n\nexport type PipelineStageUnitActionType = WriteTopicActionType | ReadTopicActionType | SystemActionType;\n\nexport type PipelineStageUnitActionId = string;\n\nexport interface PipelineStageUnitAction {\n    actionId: PipelineStageUnitActionId;\n    type: PipelineStageUnitActionType;\n}\n\nexport interface MemoryWriter extends PipelineStageUnitAction {\n    variableName: string;\n}\n\nexport interface FromTopic extends PipelineStageUnitAction {\n    topicId: TopicId;\n}\n\nexport interface FromFactor extends FromTopic {\n    factorId: FactorId;\n}\n\nexport interface ToTopic extends PipelineStageUnitAction {\n    topicId: TopicId;\n}\n\nexport interface ToFactor extends ToTopic {\n    factorId: FactorId;\n}\n\nexport interface FindBy extends PipelineStageUnitAction {\n    by: ParameterJoint;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/aggregate-arithmetic-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/aggregate-arithmetic-types.ts"'},"export enum AggregateArithmetic {\n    NONE = 'none',\n    COUNT = 'count',\n    SUM = 'sum',\n    AVG = 'avg'\n}\n\nexport interface AggregateArithmeticHolder {\n    arithmetic: AggregateArithmetic;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/system-actions-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/system-actions-types.ts"'},"export enum AlarmActionSeverity {\n    LOW = 'low',\n    MEDIUM = 'medium',\n    HIGH = 'high',\n    CRITICAL = 'critical',\n}\n\nexport interface AlarmAction extends PipelineStageUnitAction, Conditional {\n    type: SystemActionType.ALARM;\n    severity: AlarmActionSeverity;\n    message: string;\n}\n\n    /** copy something to memory variable */\nexport interface CopyToMemoryAction extends PipelineStageUnitAction, MemoryWriter {\n    type: SystemActionType.COPY_TO_MEMORY;\n    source: Parameter;\n}\n\nexport interface WriteToExternalAction extends PipelineStageUnitAction {\n    type: SystemActionType.WRITE_TO_EXTERNAL;\n    externalWriterId: string;\n    eventCode?: string;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/read-topic-actions-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/read-topic-actions-types.ts"'},"export interface ReadTopicAction extends FromTopic, MemoryWriter, FindBy, PipelineStageUnitAction {\n    type: ReadTopicActionType;\n}\n\nexport interface ReadRowAction extends ReadTopicAction {\n    type: ReadTopicActionType.READ_ROW;\n}\n\nexport interface ReadRowsAction extends ReadTopicAction {\n    type: ReadTopicActionType.READ_ROWS;\n}\n\nexport interface ReadFactorAction extends FromFactor, ReadTopicAction, AggregateArithmeticHolder {\n    type: ReadTopicActionType.READ_FACTOR;\n}\n\nexport interface ReadFactorsAction extends FromFactor, ReadTopicAction {\n    type: ReadTopicActionType.READ_FACTORS;\n}\n\nexport interface ExistsAction extends ReadTopicAction {\n    type: ReadTopicActionType.EXISTS;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/write-topic-actions-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-action/write-topic-actions-types.ts"'},"export interface MappingFactor extends AggregateArithmeticHolder {\n    source: Parameter;\n    factorId: FactorId;\n}\n\nexport interface MappingRow extends PipelineStageUnitAction {\n    mapping: Array<MappingFactor>;\n}\n\nexport interface WriteTopicAction extends ToTopic, PipelineStageUnitAction {\n    type: WriteTopicActionType;\n}\n\nexport interface InsertRowAction extends WriteTopicAction, MappingRow {\n    type: WriteTopicActionType.INSERT_ROW;\n}\n\nexport interface MergeRowAction extends WriteTopicAction, MappingRow, FindBy {\n    type: WriteTopicActionType.MERGE_ROW | WriteTopicActionType.INSERT_OR_MERGE_ROW;\n}\n\nexport interface WriteFactorAction extends ToFactor, WriteTopicAction, FindBy, AggregateArithmeticHolder {\n    type: WriteTopicActionType.WRITE_FACTOR;\n    source: Parameter;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/pipeline-stage-unit-types.ts"'},"export interface PipelineStageUnit extends Conditional {\n    unitId: PipelineStageUnitId;\n    name: string;\n    /** all actions in this unit can be looped inside */\n    loopVariableName?: string;\n    do: Array<PipelineStageUnitAction>;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/pipeline-stage-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/pipeline-stage-types.ts"'},"export interface PipelineStage extends Conditional {\n    stageId: PipelineStageId;\n    name: string;\n    units: Array<PipelineStageUnit>;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="watchmen-web-client/src/services/data/tuples/pipeline-types.ts"',title:'"watchmen-web-client/src/services/data/tuples/pipeline-types.ts"'},"export enum PipelineTriggerType {\n    INSERT = 'insert',\n    MERGE = 'merge',\n    // insert or merge\n    INSERT_OR_MERGE = 'insert-or-merge',\n    DELETE = 'delete',\n}\n\nexport type PipelineId = string;\n\nexport interface Pipeline extends Tuple, Conditional {\n    pipelineId: PipelineId;\n    topicId: TopicId;\n    name: string;\n    type: PipelineTriggerType;\n    stages: Array<PipelineStage>;\n    enabled: boolean;\n    validated: boolean;\n    tenantId?: TenantId;\n}\n"))),(0,a.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("inlineCode",{parentName:"em"},"(under construction)")))))))}g.isMDXComponent=!0}}]);