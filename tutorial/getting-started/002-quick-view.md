---
id: tutorial-getting-started-quick-view
title: Quick View
sidebar_position: 2
---

## Quick Start

**The deployment method provided in this guide is ONLY FOR quick start, NOT FOR production**

### Installing Watchmen Platform with docker-compose file

To install Watchmen Platform

```bash
git clone repository  https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-quick-start
```

for mysql

```bash
cd docker
docker compose -f docker-compose-mysql.yml up
```

-   Open browser on <http://localhost:3030>,

#### login with init user

-   super user ：imma-super/change-me
-   admin user ： imma-admin/1234abcd
-   console user ：imma-user/1234abcd

:::tip  
The latest Chrome is recommended.
:::

#### General process of playground

-   login with super user
    -   create datasource
-   login with admin user
    -   create topics and pipelines
    -   test pipelines with simulator
    -   Create pat and import test data
    -   Create spaces and assign to your user group
-   login with console user
    -   connect to space
    -   create dataset and chart
    -   create dashboard

```
DQC and indicator services are not included
```

The current environment will automatically create table in instance database .
f you modify the topic structure, it will be deleted and recreated.
ref to documentation [SYNC_TOPIC_TO_STORAGE](https://imma-watchmen.com/docs/16.1/installation/config/)

This cannot be used in a production environment
If you need to deploy the production environment, please refer to the document production environment deployment
https://imma-watchmen.com/docs/16.0/installation/deploy#production-environment

## If You Get Stuck

If you have questions on getting started, we'd love to hear from you:

send email to tech-support@mail.matrdata.com
