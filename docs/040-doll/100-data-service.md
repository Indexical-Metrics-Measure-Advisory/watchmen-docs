---
id: data-service  
title: Data Service  
sidebar_position: 100
---

# Data Service

Data service is designed for serve such as definition CURD, pipeline and inquiry. It is split to several modules:

- Model,
- Storage,
	- MySQL,
	- Oracle,
	- MongoDB,
	- MSSQL,
- Meta,
- Data Kernel,
- Data Surface.

## Model

In `watchmen-model`, all tuples are defined. Basically, they can be arranged to 3 catalogs:

- Tenant based,
- User based,
- Others.

### Tenant Based

Tenant based models are designed to be shared in tenant, most tenant based models have optimistic lock:

- Tenant,
- User,
- Data Source,
- External Writer,
- User Group,
- Space,
- Enumeration,
- Topic,
- Pipeline,
- Catalog,
- Monitor Rule (no optimistic lock declared).

### User Based

User based models are designed to store data which belongs to particular user only:

- Favorite,
- Last Snapshot,
- Personal Access Token,
- Connected Space,
- Connected Space Graphic,
- Subject,
- Report,
- Dashboard,
- Pipeline Graphic.

### Others

Typically, model which is not a tenant based or an user based, is designed for system purpose.

- Factor Index
- Pipeline Index
- Key Store

## Meta Service

The CRUD operations of models are provided by `watchmen-meta`, and persistent layer of meta service is provided by `watchmen-storage`. All
metadata are stored in one storage, it can be RDS or NoSQL.

## Storage

`watchmen-storage` is spi for different types of storages, such as MySQL, Oracle, etc. To enable the particular storage, the adaptive
implementation module should be included.

Storage provides persistent layer both for meta service and data service. For meta service, find configuration
details **[here](../installation/config#meta).**

### Snowflake Sequence Generator

In storage module, there is a built-in snowflake sequence generator. Small changes made based on the standard algorithm, which are:

- At most 4 data centers are supported, default is 0,
- At most 1024 workers for each data center are supported, default is 0 too.

It is expected that worker ids setting can be ignored when deploy watchmen to servers, if it is true, we have no need to care about settings
in every server or docker image, since other settings are same in most case. Consider of this, a built-in mechanism called competitive
worker is provided, and default is enabled. It acquires a worker id when server starting, and keep declaring itself alive to meta storage
every 60 seconds when default settings is kept. Plus, an unused worker id would be released and reused after 1 day.

:::tip  
Default competitive worker is based on persistent layer, all data can be found at `snowflake_competitive_workers`. Manually clean dead
worker ids when necessary.
:::

### Extend Data Source Types

MySQL and Oracle is built-in now, MSSQL and mongoDB are in plan now. 
If you want to extend a new data source type, follow the steps to create supporting a type `SomeDB`.

First fork our repo, for server side, 
- Add a new package, which named `watchmen-storage-somedb`,
- Copy source from the analogue, such as from `watchmen-storage-mysql`,
- Go through source codes, change them,
  - If it is only for topic data, only a few apis should be implemented, find `watchmen-inquiry-trino` as a sample,
  - If it is for metadata, most apis must be implemented except the apis which are used for inquiry subject and report data,
  - If it is for both metadata and topic data, all apis have to be implemented,
- Add data source types into `DataSourceType`, which in `watchmen-model`, 
- Add dependency into doll and dqc instance.
- Bingo!

For defined new data source type in web client, you need to,
- Add data source types into `DataSourceType`, which in `data-source-types.ts`,
- Add dropdown label into `DataSourceTypeInput`, which in `data-source-type-input.tsx`,
- Bingo!

## Data Kernel and Surface

A set of services and rest apis are provided by data kernel and surface. Pipeline and inquiry services are built based on data kernel.

### Cache service

- Data Sources for topic data,
- External writers,
- Topics,
- Pipelines,
- Relationship between topics and pipelines,
- Key store,
- Tenant.

A high frequency question is, how to refresh cache, there are multiple servers and only one node can be cleared when call clear cache rest
api. For this situation, a heart beat cache refresher is built-in, and visit **[here](../installation/config#data-kernel)** for more
details.

### Topic Data

All topic data rest apis are available for tenant admin and super admin only.

#### Retrieve data of single topic

```bash
curl \
--location \ 
--request POST 'http://host:port/topic/data?topic_name=a_topic&tenant_id=1' \
--header 'Authorization: Bearer ...' \
--header 'Content-Type: application/json' \
--data-raw '{
    "pageNumber": 1,
    "pageSize": 9
}'
```

- `topic_name`: case sensitive,
- `tenant_id`: required when current user is super admin.

:::caution  
There is no page size limitation for this api, be careful about memory and data size.
:::

#### Truncate a single topic

```bash
curl \
--location \ 
--request DELETE 'http://host:port/topic/data/truncate?topic_name=a_topic&tenant_id=1' \
--header 'Authorization: Bearer ...'
```

- `topic_name`: case sensitive,
- `tenant_id`: required when current user is super admin.

:::warning  
There is no rollback of truncate operation, it is equivalent with database truncate.
:::

#### Patch topic data

```bash
curl \
--location \ 
--request PATCH 'http://host:port/topic/data/patch?topic_name=a_topic&patch_type=merge&tenant_id=1' \
--header 'Authorization: Bearer ...' \
--header 'Content-Type: application/json' \
--data-raw '{
    ...
}'
```

- `topic_name`: case sensitive,
- `patch_type`: one of `merge`, `insert` and `delete`,
	- for `merge` and `delete`: a property `id_` is required in body data,
	- for `merge` and aggregation topic: a property `version_` is required in body data,
	- for `insert`: `id_` will be generated, `version_` is 1 when it is required,
- `tenant_id`: required when current user is super admin.

:::caution  
No pipeline will be triggered on data patch.
:::
