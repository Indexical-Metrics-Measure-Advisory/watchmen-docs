"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[7920],{98374:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(1017),r=n(84035),c=n(67294),u=n(52263),l=n(18882),s=n(35742),o=n(39960),m=n(76775),i=n(10412);var h=function(){var e=(0,m.k6)(),t=(0,m.TH)(),n=(0,u.Z)().siteConfig.baseUrl;return{searchValue:i.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},f=n(90022),p=n(98202),d=n(82539),_=n(10726),E=n(91073),g=n(80311),v=n(61029);function w(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}var y="searchQueryInput_CFBF",I="searchResultItem_U687",S="searchResultItemPath_uIbk",k="searchResultItemSummary_oZHr";function b(e){var t=e.searchResult,n=t.document,a=t.type,r=t.page,u=t.tokens,l=t.metadata,s=0===a,m=2===a,i=(s?n.b:r.b).slice(),h=m?n.s:n.t;return s||i.push(r.t),c.createElement("article",{className:I},c.createElement("h2",null,c.createElement(o.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:m?(0,d.C)(h,u):(0,_.o)(h,(0,E.m)(l,"t"),u,100)}})),i.length>0&&c.createElement("p",{className:S},i.join(" \u203a ")),m&&c.createElement("p",{className:k,dangerouslySetInnerHTML:{__html:(0,_.o)(n.t,(0,E.m)(l,"t"),u,100)}}))}var Z=function(){var e=(0,u.Z)().siteConfig.baseUrl,t=h(),n=t.searchValue,o=t.updateSearchPath,m=(0,c.useState)(n),i=m[0],d=m[1],_=(0,c.useState)(),E=_[0],I=_[1],S=(0,c.useState)(),k=S[0],Z=S[1],C=(0,c.useMemo)((function(){return i?w(v.Iz.search_results_for,{keyword:i}):v.Iz.search_the_documentation}),[i]);(0,c.useEffect)((function(){o(i),E&&(i?E(i,(function(e){Z(e)})):Z(void 0))}),[i,E]);var R=(0,c.useCallback)((function(e){d(e.target.value)}),[]);return(0,c.useEffect)((function(){n&&n!==i&&d(n)}),[n]),(0,c.useEffect)((function(){function t(){return(t=(0,r.Z)((0,a.Z)().mark((function t(){var n,r,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.w)(e);case 2:n=t.sent,r=n.wrappedIndexes,c=n.zhDictionary,I((function(){return(0,p.v)(r,c,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),c.createElement(l.Z,{title:C},c.createElement(s.Z,null,c.createElement("meta",{property:"robots",content:"noindex, follow"})),c.createElement("div",{className:"container margin-vert--lg"},c.createElement("h1",null,C),c.createElement("input",{type:"search",name:"q",className:y,"aria-label":"Search",onChange:R,value:i,autoComplete:"off",autoFocus:!0}),!E&&i&&c.createElement("div",null,c.createElement(g.Z,null)),k&&(k.length>0?c.createElement("p",null,w(1===k.length?v.Iz.count_documents_found:v.Iz.count_documents_found_plural,{count:k.length})):c.createElement("p",null,v.Iz.no_documents_were_found)),c.createElement("section",null,k&&k.map((function(e){return c.createElement(b,{key:e.document.i,searchResult:e})})))))}}}]);