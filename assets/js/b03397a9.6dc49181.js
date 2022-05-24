"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[9281],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=l,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61323:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var a=n(83117),l=n(80102),o=(n(67294),n(3905)),r=["components"],i={id:"deploy-index",title:"Deployment Index",sidebar_position:1},c="Deployment",s={unversionedId:"deployment/deploy-index",id:"version-15.2.14/deployment/deploy-index",title:"Deployment Index",description:"Dev env",source:"@site/versioned_docs/version-15.2.14/deployment/deploy-index.md",sourceDirName:"deployment",slug:"/deployment/deploy-index",permalink:"/docs/15.2.14/deployment/deploy-index",editUrl:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/versioned_docs/version-15.2.14/deployment/deploy-index.md",tags:[],version:"15.2.14",lastUpdatedBy:"botlikes",lastUpdatedAt:1653377112,formattedLastUpdatedAt:"5/24/2022",sidebarPosition:1,frontMatter:{id:"deploy-index",title:"Deployment Index",sidebar_position:1},sidebar:"sidebar",previous:{title:"Extend External Writer",permalink:"/docs/15.2.14/doll/extend/extend-external-writer"},next:{title:"Integration",permalink:"/docs/15.2.14/deployment/integration-index"}},p={},m=[{value:"Dev env",id:"dev-env",level:2},{value:"Production env",id:"production-env",level:2},{value:"Installation prerequisites\uff1a",id:"installation-prerequisites",level:3},{value:"Watchmen components",id:"watchmen-components",level:3},{value:"Watchmen web client",id:"watchmen-web-client",level:4},{value:"Watchmen doll",id:"watchmen-doll",level:4},{value:"Watchmen dqc",id:"watchmen-dqc",level:4},{value:"Presto(Trino)",id:"prestotrino",level:4},{value:"Initial environment",id:"initial-environment",level:3},{value:"Install watchmen doll and watchmen web client",id:"install-watchmen-doll-and-watchmen-web-client",level:4},{value:"Deploy watchmen database",id:"deploy-watchmen-database",level:4},{value:"Deploy watchmen asset",id:"deploy-watchmen-asset",level:4},{value:"Install trino cluster",id:"install-trino-cluster",level:4},{value:"Install watchmen-dqc",id:"install-watchmen-dqc",level:4}],d={toc:m};function u(e){var t=e.components,n=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deployment"},"Deployment"),(0,o.kt)("h2",{id:"dev-env"},"Dev env"),(0,o.kt)("p",null,"Run docker-compose file for MySQL or MongoDB "),(0,o.kt)("p",null,"Ref to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-quick-start"},(0,o.kt)("strong",{parentName:"a"},"quick start repository"))),(0,o.kt)("h2",{id:"production-env"},"Production env"),(0,o.kt)("h3",{id:"installation-prerequisites"},"Installation prerequisites\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Operating System: Linux"),(0,o.kt)("li",{parentName:"ol"},"Container: Docker and Docker Compose"),(0,o.kt)("li",{parentName:"ol"},"Database: MySQL 8")),(0,o.kt)("p",null,"Supported database type:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MySQL"),(0,o.kt)("li",{parentName:"ul"},"Oracle"),(0,o.kt)("li",{parentName:"ul"},"MongoDB")),(0,o.kt)("h3",{id:"watchmen-components"},"Watchmen components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"watchmen-web-client"),(0,o.kt)("li",{parentName:"ul"},"watchmen-matryoshka-doll"),(0,o.kt)("li",{parentName:"ul"},"watchmen-dqc"),(0,o.kt)("li",{parentName:"ul"},"presto")),(0,o.kt)("h4",{id:"watchmen-web-client"},"Watchmen web client"),(0,o.kt)("p",null,"Watchmen's front desk"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/indexical-metrics-measure-advisory/watchmen-web-client:{version}\n")),(0,o.kt)("h4",{id:"watchmen-doll"},"Watchmen doll"),(0,o.kt)("p",null,"Watchmen's backend server \uff08python\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-doll:{version}\n")),(0,o.kt)("h4",{id:"watchmen-dqc"},"Watchmen dqc"),(0,o.kt)("p",null,"Watchmen's data quality center (python)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-dqc:{version}\n")),(0,o.kt)("h4",{id:"prestotrino"},"Presto(Trino)"),(0,o.kt)("p",null,"Fast distributed SQL query engine for big data analytics"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/trinodb/trino"},(0,o.kt)("strong",{parentName:"a"},"docker trino"))),(0,o.kt)("h3",{id:"initial-environment"},"Initial environment"),(0,o.kt)("p",null,"A new environment needs to be initialized. The steps are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deploy the database script for watchmen definition database."),(0,o.kt)("li",{parentName:"ol"},"Install watchmen component\uff08web client, doll, dqc, trino\uff09."),(0,o.kt)("li",{parentName:"ol"},"The environment started successfully.  "),(0,o.kt)("li",{parentName:"ol"},"Create zone, user, instance datasource online with superuser."),(0,o.kt)("li",{parentName:"ol"},"Deploy the database script of topics for watchmen instance database."),(0,o.kt)("li",{parentName:"ol"},"Deploy data asset to the environment."),(0,o.kt)("li",{parentName:"ol"},"Check all topics, binding the datasource to the topic online with tenant user."),(0,o.kt)("li",{parentName:"ol"},"Change configuration of trino, add the new datasource to trino server.")),(0,o.kt)("h4",{id:"install-watchmen-doll-and-watchmen-web-client"},"Install watchmen doll and watchmen web client"),(0,o.kt)("p",null,"Build docker compose. For example:  "),(0,o.kt)("p",null,"Two dolls and one web client installed on a node. Generally, N dolls and 1 web client will be deployed on a node"),(0,o.kt)("p",null,"Build docker-compose.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\nservices:\n  watchmen-matryoshka-doll_01:\n    container_name: watchmen-matryoshka-doll_01\n    hostname: component\n    image:  ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-doll:{version}\n    restart: always\n    ports:\n      - \"{host_port}:80\"\n    env_file:\n      - {config_file}\n    volumes:\n      - {mount_path}:/app/temp/\n    network_mode: 'bridge'\n  watchmen-matryoshka-doll_02:\n    container_name: watchmen-matryoshka-doll_02\n    hostname: component\n    image: ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-doll:{version}\n    restart: always\n    ports:\n      - \"{host_port}:80\"\n    env_file:\n      - {config_file}\n    volumes:\n      - {mount_path}:/app/temp/\n    network_mode: 'bridge'\n\n  watchmen-web-client:\n    container_name: watchmen-web-client\n    hostname: component\n    image: ghcr.io/indexical-metrics-measure-advisory/watchmen-web-client:{version}\n    restart: always\n    ports:\n      - \"{host_port}:80\"\n    volumes:\n      - {mount_file}:/etc/nginx/nginx.conf\n    links:\n      - watchmen-matryoshka-doll\n    network_mode: 'bridge'\n")),(0,o.kt)("p",null,"Watchmen-matryoshka-doll's configuration"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"config_file")," of doll, please refer to ",(0,o.kt)("a",{parentName:"p",href:"../doll/doll-configuration"},"doll configuration"),"."),(0,o.kt)("p",null,"Configure watchmen-web-client as a reverse proxy for HTTP."),(0,o.kt)("p",null,"Configuration fragment of watchmen web client (nginx):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},"upstream watchmen_doll {\n    server IP1:PORT1;\n    \u2026\u2026\u2026\u2026\n    server IP1:PORT2;\n    server IP2:PORT1;\n    \u2026\u2026\u2026\u2026\n    server IP2:PORT2;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},"location /watchmen/ {\n  proxy_pass http://watchmen_doll/;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},"location /watchmen/dqc/ {\n  proxy_pass http://ip:port/dqc/;\n}\n")),(0,o.kt)("h4",{id:"deploy-watchmen-database"},"Deploy watchmen database"),(0,o.kt)("p",null,"Watchmen only provides the database script project."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-dbscript"},(0,o.kt)("strong",{parentName:"a"},"watchmen dbscript"))),(0,o.kt)("p",null,"Watchmen don't provide the release package of database."),(0,o.kt)("p",null,"It is recommended to build the release package of database by combining liquibase with database script, package into a container to execute."),(0,o.kt)("p",null,"Project sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"watchmen-dbscript-deployment\n|-dbscript\n   |-initial\n     |-doll\n        |-init_watchmen.xml\n        |-initial_mysql.sql\n        |-initial_user_mysql.sql\n     |-dqc\n        |-initial.mysql.sql \n   |- upgrade-db.xml\n|-lib\n   |-mysql-connector-java-8.0.27\n|-Dockerfile\n")),(0,o.kt)("p",null,"Dockerfile sample\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM liquibase/liquibase:4.3.5\n\nWORKDIR /app\n\nCOPY dbscript/ /liquibase/changelog\nCOPY lib/ /liquibase/classpath\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-commandline"},'docker run --rm liquibase/liquibase:4.3.5 --changeLogFile=upgrade-db.xml --url="jdbc:mysql://172.15.14.26:3306/watchmen" --username=test_watchmen --password=test_watchmenpwd --classpath=/liquibase/changelog:/liquibase/classpath/mysql-connector-java-8.0.27.jar --logLevel=debug update\n')),(0,o.kt)("h4",{id:"deploy-watchmen-asset"},"Deploy watchmen asset"),(0,o.kt)("p",null,"The watchmen asset is in the form of Markdown file and can be exported on the page.  "),(0,o.kt)("p",null,"Use the watchmen-cli component to publish the asset to corresponding environment."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-cli"},(0,o.kt)("strong",{parentName:"a"},"watchmen cli"))),(0,o.kt)("p",null,"It is recommended package the asset release package with watchmen-cli into a container to execute."),(0,o.kt)("p",null,"Project sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"watchmen-asset-deployment\n|-config\n   |-log-asset.md\n|-Dockerfile\n")),(0,o.kt)("p",null,"Dockerfile sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM indexical-metrics-measure-advisory/watchmen-cli:1.0.3\n\nWORKDIR /app\n\nCOPY config/ /app/config \n")),(0,o.kt)("p",null,"Start deploy asset container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-commandline"},"docker run --rm -e command=deploy_asset -e host=http://watchmen-matryoshka-doll -e username=imma-admin -e password=abc1234 indexical-metrics-measure-advisory/watchmen-cli:1.0.3\n")),(0,o.kt)("h4",{id:"install-trino-cluster"},"Install trino cluster"),(0,o.kt)("p",null,"ref to ",(0,o.kt)("a",{parentName:"p",href:"https://trino.io/docs/current/installation/deployment.html?highlight=cluster#"},(0,o.kt)("strong",{parentName:"a"},"trino cluster"))),(0,o.kt)("p",null,"Storage(data source):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Datasource extension online is not supported by presto (trino), manually add new catalog into presto (trino) is a must."),(0,o.kt)("li",{parentName:"ul"},"Datasource code must be consistent with prefix in presto (trino) catalog configuration file, which means datasource code in watchmen also has to follow this principle as well")),(0,o.kt)("h4",{id:"install-watchmen-dqc"},"Install watchmen-dqc"),(0,o.kt)("p",null,"At present, DQC only supports stand-alone deployment. You can use the host mode for container network."),(0,o.kt)("p",null,"Deploy dqc database script:"),(0,o.kt)("p",null,'Please refer to "Deploy watchmen database".'),(0,o.kt)("p",null,"Start dqc container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-commandline"},"docker run --net=host --name watchmen-dqc -v {mount_path}:/app/temp --env-file {config_file} -p {host_port}:80 -d  indexical-metrics-measure-advisory/watchmen-dqc:{version}\n")),(0,o.kt)("p",null,"Configuration of dqc:"),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"../doll/doll-configuration"},"dqc configuration"),"."))}u.isMDXComponent=!0}}]);