"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[3436],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,k=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74325:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={id:"deploy",title:"Deployment",sidebar_position:30},s="Deployment",m={unversionedId:"installation/deploy",id:"version-16.2/installation/deploy",title:"Deployment",description:"Dev Environment",source:"@site/versioned_docs/version-16.2/060-installation/030-deploy.md",sourceDirName:"060-installation",slug:"/installation/deploy",permalink:"/docs/16.2/installation/deploy",draft:!1,editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-16.2/060-installation/030-deploy.md",tags:[],version:"16.2",lastUpdatedBy:"botlikes",lastUpdatedAt:1656325287,formattedLastUpdatedAt:"6/27/2022",sidebarPosition:30,frontMatter:{id:"deploy",title:"Deployment",sidebar_position:30},sidebar:"sidebar",previous:{title:"Storage Scripts",permalink:"/docs/16.2/installation/scripts"},next:{title:"Integration",permalink:"/docs/16.2/installation/integration"}},c={},p=[{value:"Dev Environment",id:"dev-environment",level:2},{value:"Production Environment",id:"production-environment",level:2},{value:"Installation Prerequisites:",id:"installation-prerequisites",level:3},{value:"Components",id:"components",level:3},{value:"Initial Environment",id:"initial-environment",level:3},{value:"Deploy Database",id:"deploy-database",level:4},{value:"Install Doll and Web Client",id:"install-doll-and-web-client",level:4},{value:"Build a docker compose",id:"build-a-docker-compose",level:5},{value:"Put a reverse proxy in front of dolls",id:"put-a-reverse-proxy-in-front-of-dolls",level:5},{value:"Install DQC REST",id:"install-dqc-rest",level:4},{value:"Deploy Assets",id:"deploy-assets",level:4},{value:"Install Trino Cluster",id:"install-trino-cluster",level:4}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deployment"},"Deployment"),(0,o.kt)("h2",{id:"dev-environment"},"Dev Environment"),(0,o.kt)("p",null,"Run docker-compose file for MySQL or MongoDB"),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"/tutorial/tutorial-index"},(0,o.kt)("strong",{parentName:"a"},"Quick Start"))," for more details."),(0,o.kt)("h2",{id:"production-environment"},"Production Environment"),(0,o.kt)("h3",{id:"installation-prerequisites"},"Installation Prerequisites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Operating System: Linux"),(0,o.kt)("li",{parentName:"ul"},"Container: Docker or Docker Compose"),(0,o.kt)("li",{parentName:"ul"},"Database: MySQL 8 or other available storage types:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Oracle"),(0,o.kt)("li",{parentName:"ul"},"MongoDB"),(0,o.kt)("li",{parentName:"ul"},"MSSQL")))),(0,o.kt)("h3",{id:"components"},"Components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"watchmen-web-client"),": frontend of ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Watchmen")),",",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/indexical-metrics-measure-advisory/watchmen-web-client:{version}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"watchmen-rest-doll"),": backend server of ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Watchmen")),",",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-doll:{version}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"watchmen-rest-dqc"),": Data Quality Center server of ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Watchmen")),",",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-dqc:{version}\n"))),(0,o.kt)("li",{parentName:"ul"},"Trino: fast distributed SQL query engine for big data analytics.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://hub.docker.com/r/Trinodb/Trino"},"Docker Trino")))))),(0,o.kt)("h3",{id:"initial-environment"},"Initial Environment"),(0,o.kt)("p",null,"A new environment needs to be initialized. The steps are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy the database script for watchmen definition database,"),(0,o.kt)("li",{parentName:"ul"},"Install watchmen components: web client, doll, dqc and/or Trino,"),(0,o.kt)("li",{parentName:"ul"},"The environment started successfully,"),(0,o.kt)("li",{parentName:"ul"},"Create zone, user, instance datasource online with superuser,"),(0,o.kt)("li",{parentName:"ul"},"Deploy the database script of topics for watchmen instance database,"),(0,o.kt)("li",{parentName:"ul"},"Deploy data asset to the environment,"),(0,o.kt)("li",{parentName:"ul"},"Check all topics, binding the datasource to the topic online with tenant user,"),(0,o.kt)("li",{parentName:"ul"},"Change configuration of Trino, add the new datasource to Trino server.")),(0,o.kt)("h4",{id:"deploy-database"},"Deploy Database"),(0,o.kt)("p",null,"Find database scripts from ",(0,o.kt)("inlineCode",{parentName:"p"},"watchmen-storage-xxx")," module based on your meta storage type, and run that by yourself."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Watchmen"))," don't provide the release package of database."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All initial scripts are included by storage module, both for doll and DQC."))),(0,o.kt)("h4",{id:"install-doll-and-web-client"},"Install Doll and Web Client"),(0,o.kt)("h5",{id:"build-a-docker-compose"},"Build a docker compose"),(0,o.kt)("p",null,"For example, two dolls and one web client installed on a node. Typically, N dolls and 1 web client will be deployed on a node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},"version: '3'\nservices:\n  watchmen-matryoshka-doll_01:\n    container_name: watchmen-matryoshka-doll_01\n    hostname: component\n    image: ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-doll:{version}\n    restart: always\n    ports:\n      - \"{ host_port }:80\"\n    env_file:\n      - { config_file }\n    volumes:\n      - { mount_path }:/app/temp/\n    network_mode: 'bridge'\n  watchmen-matryoshka-doll_02:\n    container_name: watchmen-matryoshka-doll_02\n    hostname: component\n    image: ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-doll:{version}\n    restart: always\n    ports:\n      - \"{ host_port }:80\"\n    env_file:\n      - { config_file }\n    volumes:\n      - { mount_path }:/app/temp/\n    network_mode: 'bridge'\n\n  watchmen-web-client:\n    container_name: watchmen-web-client\n    hostname: component\n    image: ghcr.io/indexical-metrics-measure-advisory/watchmen-web-client:{version}\n    restart: always\n    ports:\n      - \"{ host_port }:80\"\n    volumes:\n      - { mount_file }:/etc/nginx/nginx.conf\n    links:\n      - watchmen-matryoshka-doll\n    network_mode: 'bridge'\n")),(0,o.kt)("p",null,"Visit ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"config"},"here"))," for more details of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Watchmen"))," configuration."),(0,o.kt)("h5",{id:"put-a-reverse-proxy-in-front-of-dolls"},"Put a reverse proxy in front of dolls"),(0,o.kt)("p",null,"It also serves the static resource files of web client. Here are some configuration fragments of nginx:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},"upstream watchmen_doll {\n    server IP1:PORT1;\n    ...\n    server IP1:PORT2;\n    server IP2:PORT1;\n    ...\n    server IP2:PORT2;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},"location /watchmen/ {\n    proxy_pass http://watchmen_doll/;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},"location /watchmen/dqc/ {\n    proxy_pass http://ip:port/dqc/;\n}\n")),(0,o.kt)("h4",{id:"install-dqc-rest"},"Install DQC REST"),(0,o.kt)("p",null,"DQC can be deployed standalone, use the host mode for container network. Start DQC by following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --net=host --name watchmen-dqc \\\n    -v {mount_path}:/app/temp \\\n    --env-file {config_file} \\\n    -p { host_port }:80 \\\n    -d  indexical-metrics-measure-advisory/watchmen-dqc:{version}\n")),(0,o.kt)("h4",{id:"deploy-assets"},"Deploy Assets"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Watchmen"))," asset files are in the form of Markdown and exported on the web client. Publish asset files to corresponding environment\nby ",(0,o.kt)("inlineCode",{parentName:"p"},"watchmen-cli"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Project sample, cli detects markdown files under config folder.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"watchmen-asset-deployment\n \u2523 config\n \u2503  \u2517 log-asset.md\n \u2517 Dockerfile\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Dockerfile sample")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"FROM indexical-metrics-measure-advisory/watchmen-cli:{version}\nWORKDIR /app\nCOPY config/ /app/config\n")),(0,o.kt)("p",null,"Deploy by docker:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -e command=deploy_asset \\\n    -e host=http://host-of-doll:port \\\n    -e username=imma-admin \\\n    -e password=abc1234 indexical-metrics-measure-advisory/watchmen-cli:{version}\n")),(0,o.kt)("h4",{id:"install-trino-cluster"},"Install Trino Cluster"),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://Trino.io/docs/current/installation/deployment.html?highlight=cluster#"},(0,o.kt)("strong",{parentName:"a"},"Trino Cluster"))," for more details."),(0,o.kt)("p",null,"For storage datasource:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Datasource extension in runtime is not supported by Trino, manually add new catalog into Trino is a must."),(0,o.kt)("li",{parentName:"ul"},"Datasource code must be consistent with prefix in Trino catalog, which means datasource code in watchmen also has to follow this principle\nas well.")),(0,o.kt)("p",null,"Visit ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../installation/config"},"here"))," for more details about DQC configuration."))}u.isMDXComponent=!0}}]);