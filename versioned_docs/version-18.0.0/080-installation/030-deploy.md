---
id: deploy  
title: Deployment  
sidebar_position: 30
---

# Deployment

## Dev Environment

Run docker-compose file for MySQL or MongoDB

Visit [**Quick Start**](/tutorial/tutorial-index) for more details.

## Production Environment

### Installation Prerequisites:

- Operating System: Linux
- Container: Docker or Docker Compose
- Database: MySQL 8 or other available storage types:
	- Oracle
	- MongoDB
	- MSSQL

### Components

- `watchmen-web-client`: frontend of **_Watchmen_**,
  ```bash
  docker pull ghcr.io/indexical-metrics-measure-advisory/watchmen-web-client:{version}
  ```
- `watchmen-rest-doll`: backend server of **_Watchmen_**,
  ```bash
  docker pull ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-doll:{version}
  ```
- `watchmen-rest-dqc`: Data Quality Center server of **_Watchmen_**,
  ```bash
  docker pull ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-dqc:{version}
  ```
- Trino: fast distributed SQL query engine for big data analytics.
	- **[Docker Trino](https://hub.docker.com/r/Trinodb/Trino)**

### Initial Environment

A new environment needs to be initialized. The steps are as follows:

- Deploy the database script for watchmen definition database,
- Install watchmen components: web client, doll, dqc and/or Trino,
- The environment started successfully,
- Create zone, user, instance datasource online with superuser,
- Deploy the database script of topics for watchmen instance database,
- Deploy data asset to the environment,
- Check all topics, binding the datasource to the topic online with tenant user,
- Change configuration of Trino, add the new datasource to Trino server.

#### Deploy Database

Find database scripts from `watchmen-storage-xxx` module based on your meta storage type, and run that by yourself.

:::info  
**_Watchmen_** don't provide the release package of database.
:::

:::info  
All initial scripts are included by storage module, both for doll and DQC.
:::

#### Install Doll and Web Client

##### Build a docker compose

For example, two dolls and one web client installed on a node. Typically, N dolls and 1 web client will be deployed on a node

```yaml title="docker-compose.yml"
version: '3'
services:
  watchmen-matryoshka-doll_01:
    container_name: watchmen-matryoshka-doll_01
    hostname: component
    image: ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-doll:{version}
    restart: always
    ports:
      - "{ host_port }:80"
    env_file:
      - { config_file }
    volumes:
      - { mount_path }:/app/temp/
    network_mode: 'bridge'
  watchmen-matryoshka-doll_02:
    container_name: watchmen-matryoshka-doll_02
    hostname: component
    image: ghcr.io/indexical-metrics-measure-advisory/watchmen-matryoshka-doll:{version}
    restart: always
    ports:
      - "{ host_port }:80"
    env_file:
      - { config_file }
    volumes:
      - { mount_path }:/app/temp/
    network_mode: 'bridge'

  watchmen-web-client:
    container_name: watchmen-web-client
    hostname: component
    image: ghcr.io/indexical-metrics-measure-advisory/watchmen-web-client:{version}
    restart: always
    ports:
      - "{ host_port }:80"
    volumes:
      - { mount_file }:/etc/nginx/nginx.conf
    links:
      - watchmen-matryoshka-doll
    network_mode: 'bridge'
```

Visit **[here](config)** for more details of **_Watchmen_** configuration.

##### Put a reverse proxy in front of dolls

It also serves the static resource files of web client. Here are some configuration fragments of nginx:

```nginx
upstream watchmen_doll {
    server IP1:PORT1;
    ...
    server IP1:PORT2;
    server IP2:PORT1;
    ...
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

#### Install DQC REST

DQC can be deployed standalone, use the host mode for container network. Start DQC by following command:

```bash
docker run --net=host --name watchmen-dqc \
	-v {mount_path}:/app/temp \
	--env-file {config_file} \
	-p { host_port }:80 \
	-d  indexical-metrics-measure-advisory/watchmen-dqc:{version}
```

#### Deploy Assets

**_Watchmen_** asset files are in the form of Markdown and exported on the web client. Publish asset files to corresponding environment
by `watchmen-cli`.

- A Project sample, cli detects markdown files under config folder.

```text
watchmen-asset-deployment
 ┣ config
 ┃  ┗ log-asset.md
 ┗ Dockerfile
```

- A Dockerfile sample

```bash
FROM indexical-metrics-measure-advisory/watchmen-cli:{version}
WORKDIR /app
COPY config/ /app/config
```

Deploy by docker:

```bash
docker run --rm -e command=deploy_asset \
	-e host=http://host-of-doll:port \
	-e username=imma-admin \
	-e password=abc1234 indexical-metrics-measure-advisory/watchmen-cli:{version}
```

#### Install Trino Cluster

Visit [**Trino Cluster**](https://Trino.io/docs/current/installation/deployment.html?highlight=cluster#) for more details.

For storage datasource:

- Datasource extension in runtime is not supported by Trino, manually add new catalog into Trino is a must.
- Datasource code must be consistent with prefix in Trino catalog, which means datasource code in watchmen also has to follow this principle
  as well.

Visit **[here](../installation/config)** for more details about DQC configuration.

