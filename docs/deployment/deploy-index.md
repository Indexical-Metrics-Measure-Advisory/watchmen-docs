---
id: deploy-index  
title: Deployment Index  
sidebar_position: 1
---

# Deployment


### Dev env 

run docker-compose file for MySQL or MongoDB 

ref to [**quick start repository**](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-quick-start)


### Production env 

#### installation prerequisites：

1. Operating System: Linux
2. Container: Docker and Docker Compose
3. Database: MySQL 8

supported database type
- MySQL
- Oracle
- MongoDB


#### watchmen components

* watchmen-web-client
* watchmen-matryoshka-doll
* watchmen-dqc
* presto

#### watchmen web client 
Watchmen's front desk

```bash
docker pull ghcr.io/indexical-metrics-measure-advisory/watchmen-web-client:15.2.4
```

#### watchmen doll 
Watchmen's backend server （python）

```bash
docker pull ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-doll:15.2.4
```

#### watchmen DQC 
Watchmen's data quality center (python)

```bash
docker pull ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-dqc:15.2.4
```

#### presto(trino) 
Fast distributed SQL query engine for big data analytics

[**docker trino**](https://hub.docker.com/r/trinodb/trino)

#### Initial environment

A new environment needs to be initialized. The steps are as follows:

1. deploy the database script for watchmen definition database
2. install watchmen component（web client, doll, dqc, presto）
3. The environment started successfully   
4. Create zone, user, instance datasource online with super user
5. deploy the database script of topics for watchmen instance database
6. deploy data asset to the environment.
7. Check all topics, binding the datasource to the topic online with tenant user
8. change configuration of trino, add the new datasource to trino server.


#### Install watchmen doll and watchmen web client

Build docker compose. For example:  
2 dolls and 1 web client installed on a node. Generally, N dolls and 1 web client will be deployed on a node

Please note, It's just an example. Please modify it according to the actual deployment

docker-compose.yml
```yaml
version: '3'
services:
  watchmen-matryoshka-doll_01:
    container_name: watchmen-matryoshka-doll_01
    hostname: component
    image:  ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-doll:15.2.4
    restart: always
    ports:
      - "8091:80"
    env_file:
      - doll.env
    volumes:
      - ./log/watchmen-matryoshka-doll_01:/app/temp/
    network_mode: 'bridge'
  watchmen-matryoshka-doll_02:
    container_name: watchmen-matryoshka-doll_02
    hostname: component
    image: ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-doll:15.2.4
    restart: always
    ports:
      - "8092:80"
    env_file:
      - doll.env
    volumes:
      - ./log/watchmen-matryoshka-doll_02:/app/temp/
    network_mode: 'bridge'

  watchmen-web-client:
    container_name: watchmen-web-client
    hostname: component
    image: ghcr.io/indexical-metrics-measure-advisory/watchmen-web-client:15.2.4
    restart: always
    ports:
      - "8888:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    links:
      - watchmen-matryoshka-doll
    network_mode: 'bridge'
```

watchmen-matryoshka-doll's configuration

```dotenv
ENVIRONMENT=production
PROJECT_NAME=Sample
STORAGE_ENGINE=mysql

MYSQL_HOST=172.25.14.26
MYSQL_PORT=3306
MYSQL_USER="test_watchmen"
MYSQL_PASSWORD="test_watchmenpwd"
MYSQL_DATABASE="watchmen"

SUPER_USER=imma-super

PRESTO_ON = True
PRESTO_HOST=172.25.16.154
PRESTO_PORT=18081
```
configuration fragment of watchmen web client (nginx):

configure NGINX as a reverse proxy for HTTP

```text
upstream watchmen_doll{
    server IP1:PORT1;
    …………
    server IP1:PORT2;
    server IP2:PORT1;
    …………
    server IP2:PORT2;
}
```
```text
location /watchmen/ {
  proxy_pass http://watchmen_doll/;
}
```
```text
location /watchmen/dqc/ {
  proxy_pass http://127.0.0.1:8002/dqc/;
}
```
#### Deploy watchmen database
watchmen only provides the database script project 

[**watchmen dbscript**](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-dbscript)

watchmen don't provide the release package of database.  
It is recommended to build the release package of database by combining liquibase with database script, package into a container to execute

project sample

```text
watchmen-dbscript-deployment
|-dbscript
   |-initial
     |-doll
        |-init_watchmen.xml
        |-initial_mysql.sql
        |-initial_user_mysql.sql
     |-dqc
        |-initial.mysql.sql 
   |- upgrade-db.xml
|-lib
   |-mysql-connector-java-8.0.27
|-Dockerfile
```
Dockerfile sample：

```dockerfile
FROM liquibase/liquibase:4.3.5

WORKDIR /app

COPY dbscript/ /liquibase/changelog
COPY lib/ /liquibase/classpath
```

```commandline
docker run --rm liquibase/liquibase:4.3.5 --changeLogFile=upgrade-db.xml --url="jdbc:mysql://172.15.14.26:3306/watchmen" --username=test_watchmen --password=test_watchmenpwd --classpath=/liquibase/changelog:/liquibase/classpath/mysql-connector-java-8.0.27.jar --logLevel=debug update
```

#### Deploy watchmen asset
The watchmen asset is in the form of Markdown file and can be exported on the page.  

Use the watchmen-cli component to publish the asset to corresponding environment

[**watchmen cli**](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-cli)

It is recommended package the asset release package with watchmen-cli into a container to execute

project sample

```text
watchmen-asset-deployment
|-config
   |-log-asset.md
|-Dockerfile
```

Dockerfile sample

```dockerfile
FROM indexical-metrics-measure-advisory/watchmen-cli:1.0.3

WORKDIR /app

COPY config/ /app/config 
```

start deploy asset container:

```text
docker run --rm -e command=deploy_asset -e host=http://watchmen-matryoshka-doll -e username=imma-admin -e password=abc1234 indexical-metrics-measure-advisory/watchmen-cli:1.0.3
```

#### Install trino cluster

ref to [**trino cluster**](https://trino.io/docs/current/installation/deployment.html?highlight=cluster#)

storage(data source)

- Datasource extension online is not supported by presto (trino), manually add new catalog into presto (trino) is a must.
- Datasource code must be consistent with prefix in presto (trino) catalog configuration file, which means datasource code in watchmen also has to follow this principle as well

#### Install watchmen-dqc

At present, DQC only supports stand-alone deployment. You can use the host mode for container network

deploy dqc database script:

please refer to "Deploy watchmen database"

start dqc container:

```commandline
docker run --net=host --name watchmen-dqc -v /usr/watchmen/watchmen-dqc/temp:/app/temp --env-file /usr/watchmen/watchmen-dqc/env.list -p 8001:80 -d  indexical-metrics-measure-advisory/watchmen-dqc:15.2.4
```
configuration of dqc:

```dotenv
PROJECT_NAME=Sample
STORAGE_ENGINE=mysql

MYSQL_HOST=172.25.14.26
MYSQL_PORT=3306
MYSQL_USER="test_watchmen"
MYSQL_PASSWORD="test_watchmenpwd"
MYSQL_DATABASE="watchmen"

SUPER_USER=imma-super

PRESTO_ON=True
PRESTO_HOST=172.25.16.154
PRESTO_PORT=18081
```
