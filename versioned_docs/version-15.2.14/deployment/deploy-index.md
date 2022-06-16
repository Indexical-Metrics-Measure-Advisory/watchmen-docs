---
id: deploy-index  
title: Deployment Index  
sidebar_position: 1
---

# Deployment


## Dev env 

Run docker-compose file for MySQL or MongoDB 

Ref to [**quick start repository**](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-quick-start)


## Production env 

### Installation prerequisites:

1. Operating System: Linux
2. Container: Docker and Docker Compose
3. Database: MySQL 8

Supported database type:
- MySQL
- Oracle
- MongoDB


### Watchmen components

* watchmen-web-client
* watchmen-matryoshka-doll
* watchmen-dqc
* presto

#### Watchmen web client 
Watchmen's front desk

```bash
docker pull ghcr.io/indexical-metrics-measure-advisory/watchmen-web-client:{version}
```

#### Watchmen doll 
Watchmen's backend server （python）

```bash
docker pull ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-doll:{version}
```

#### Watchmen dqc 
Watchmen's data quality center (python)

```bash
docker pull ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-dqc:{version}
```

#### Presto(Trino) 
Fast distributed SQL query engine for big data analytics

[**docker trino**](https://hub.docker.com/r/trinodb/trino)

### Initial environment

A new environment needs to be initialized. The steps are as follows:

1. Deploy the database script for watchmen definition database.
2. Install watchmen component（web client, doll, dqc, trino）.
3. The environment started successfully.  
4. Create zone, user, instance datasource online with superuser.
5. Deploy the database script of topics for watchmen instance database.
6. Deploy data asset to the environment.
7. Check all topics, binding the datasource to the topic online with tenant user.
8. Change configuration of trino, add the new datasource to trino server.


#### Install watchmen doll and watchmen web client

Build docker compose. For example:  

Two dolls and one web client installed on a node. Generally, N dolls and 1 web client will be deployed on a node

Build docker-compose.yml
```yaml
version: '3'
services:
  watchmen-matryoshka-doll_01:
    container_name: watchmen-matryoshka-doll_01
    hostname: component
    image:  ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-doll:{version}
    restart: always
    ports:
      - "{host_port}:80"
    env_file:
      - {config_file}
    volumes:
      - {mount_path}:/app/temp/
    network_mode: 'bridge'
  watchmen-matryoshka-doll_02:
    container_name: watchmen-matryoshka-doll_02
    hostname: component
    image: ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-doll:{version}
    restart: always
    ports:
      - "{host_port}:80"
    env_file:
      - {config_file}
    volumes:
      - {mount_path}:/app/temp/
    network_mode: 'bridge'

  watchmen-web-client:
    container_name: watchmen-web-client
    hostname: component
    image: ghcr.io/indexical-metrics-measure-advisory/watchmen-web-client:{version}
    restart: always
    ports:
      - "{host_port}:80"
    volumes:
      - {mount_file}:/etc/nginx/nginx.conf
    links:
      - watchmen-matryoshka-doll
    network_mode: 'bridge'
```

Watchmen-matryoshka-doll's configuration

The `config_file` of doll, please refer to [doll configuration](../doll/doll-configuration).

Configure watchmen-web-client as a reverse proxy for HTTP.

Configuration fragment of watchmen web client (nginx):

```nginx
upstream watchmen_doll {
    server IP1:PORT1;
    …………
    server IP1:PORT2;
    server IP2:PORT1;
    …………
    server IP2:PORT2;
}
```
```nginx
location /watchmen/ {
  proxy_pass http://watchmen_doll/;
}
```
```nginx
location /watchmen/dqc/ {
  proxy_pass http://ip:port/dqc/;
}
```

#### Deploy watchmen database
Watchmen only provides the database script project.

[**watchmen dbscript**](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-dbscript)

Watchmen don't provide the release package of database.

It is recommended to build the release package of database by combining liquibase with database script, package into a container to execute.

Project sample

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
Dockerfile sample:

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

Use the watchmen-cli component to publish the asset to corresponding environment.

[**watchmen cli**](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-cli)

It is recommended package the asset release package with watchmen-cli into a container to execute.

Project sample

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

Start deploy asset container:

```commandline
docker run --rm -e command=deploy_asset -e host=http://watchmen-matryoshka-doll -e username=imma-admin -e password=abc1234 indexical-metrics-measure-advisory/watchmen-cli:1.0.3
```

#### Install trino cluster

ref to [**trino cluster**](https://trino.io/docs/current/installation/deployment.html?highlight=cluster#)

Storage(data source):
- Datasource extension online is not supported by presto (trino), manually add new catalog into presto (trino) is a must.
- Datasource code must be consistent with prefix in presto (trino) catalog configuration file, which means datasource code in watchmen also has to follow this principle as well

#### Install watchmen-dqc

At present, DQC only supports stand-alone deployment. You can use the host mode for container network.

Deploy dqc database script:

Please refer to "Deploy watchmen database".

Start dqc container:
```commandline
docker run --net=host --name watchmen-dqc -v {mount_path}:/app/temp --env-file {config_file} -p {host_port}:80 -d  indexical-metrics-measure-advisory/watchmen-dqc:{version}
```
Configuration of dqc:

Please refer to [dqc configuration](../doll/doll-configuration).
