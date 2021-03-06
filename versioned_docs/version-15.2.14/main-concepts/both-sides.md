---
id: main-concepts-both-sides  
title: On Both Sides  
sidebar_position: 30
---

# On Both Sides

**_Watchmen_** offers solutions on both sides of server and browser.

- **_Doll_** to run pipelines,
- **_Data Quality Center_** (**_DQC_** for short) to monitor data quality,
- **_Web Client_** to
	- Configure tuples. Such as topics, pipelines, spaces etc,
	- Build dataset/charts,
	- Define monitor rules, find consanguinity.

## Typical Topology

![Typical Topology](images/typical-topology.png)

:::tip

- `Lambda` service is optional,
- `S3` service is optional,
- Most popular RDS & NoSQL technologies are supported, via built-in storage engines.
  :::

:::info
**_Watchmen_** use [Presto](https://prestodb.io) or [Trino](https://trino.io/) as storage aggregator.
:::

## Doll

**_Doll_** is the heart of **_Watchmen_**, provides a variety of innovative and comprehensive solutions on cleaning, transforming,
persisting, computing and aggregating data. All of these are configured on GUI and handling by **_Doll_** clusters.

## Data Quality Center (DQC)

To ensure data are accurate and can be trusted, **_DQC_** offers consanguinity tracing, data profiling and a wealth of quality detection
rules.

## Web Client

A browser based client for

- IT users to configure and maintain,
- Business users to build datasets and charts.