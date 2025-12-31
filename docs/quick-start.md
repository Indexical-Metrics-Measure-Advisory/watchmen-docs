---
id: quick-start
title: Quick Start
sidebar_position: 2
---

## Welcome

Let's discover **_Watchmen_** in less than 15 minutes.

## Intro

**_Watchmen_** is a lightweight analytic platform, including a backend and a web client.

## Quick Start

**The deployment method provided in this guide is ONLY FOR quick start, NOT FOR production.**

### Installing with docker-compose

- Clone repository,

    ```bash
    git clone repository  https://github.com/Indexical-Metrics-Measure-Advisory/watchmen
    ```

- Enter quick start,

    ```bash
    cd path-to-watchmen-cloned-repo/watchmen-quick-start
    ```

- Before starting, execute `dbscript.sh` copy script to mysql directory,

  ```bash
  sh dbscript.sh
  ```

  :::tip
  Only MySQL scripts are included.
  :::

- Start docker,

    ```bash
    cd docker
    docker compose -f docker-compose-mysql.yml up
    ```

- Open browser on [http://localhost:3030](http://localhost:3030).

### Login with pre-built users

- Super admin user: `imma-super`/`change-me`
- Admin user: `imma-admin`/`1234abcd`
- Console user: `imma-user`/`1234abcd`

### General process of playground

- Login with super admin user,
	- create datasource,
- Login with admin user,
  - go to ingestion ui and create ingestion configuration,
	- create topics and pipelines,
	- test pipelines with simulator,
	- Create pat and import test data,
	- Create spaces and assign to your user group,
- Login with console user,
	- connect to space,
	- create dataset and chart,
	- create dashboard.

:::info  
**_DQC_** services are not included
:::

:::tip

- The latest Chrome is recommended,
- The current environment will automatically create table in instance database. If you modify the topic structure, it will be deleted and
  recreated, refer to documentation [SYNC_TOPIC_TO_STORAGE](./installation/config),
- If it is not a Mac, please modify `docker.for.mac.localhost` parameter is configured in nginx,
- This cannot be used in a production environment. If you need to deploy the production environment, please refer to the
  document [Production Environment Deployment](./installation/deploy#production-environment).

:::

## If You Get Stuck

Any questions on getting started, we'd love to hear from you. Feel free to send email to
our [tech support team](tech-support@mail.matrdata.com)

## Congratulations!

You have just learned the **Quick Start Watchmen** and there are **much more to offer**!
