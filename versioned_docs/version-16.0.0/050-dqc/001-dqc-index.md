---
id: dqc-index  
title: DQC Overview  
sidebar_position: 1
---

# Overview

:::info Data Quality  
One of the primary purposes of conducting workforce analytics is to engage in data-driven decision-making about the workforce. Decisions
cannot be effective if they are based on poor-quality data. Thus, it is important to ensure that any data that will be used for workforce
analytics are accurate and can be trusted.

**_from [qic-wd.org](https://www.qic-wd.org/blog/data-quality)_**
:::

DQC has several modules,

- [Utilities](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-utilities)
- [Model](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-model)
- [Auth](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-auth)
- [Storage](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-storage)
	- [MySQL](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-storage-mysql)
	- [Oracle](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-storage-oracle)
	- [MongoDB](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-storage-mongodb): **_`Under construction`_**
	- [MSSQL](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-storage-mssql): **_`Under construction`_**
- [Rest](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-rest)
- [Meta](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-meta)
- [Data Kernel](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-data-kernel)
- [Pipeline Kernel](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-pipeline-kernel)
- [DQC](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-dqc)
- [Rest DQC](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-rest-dqc)

# DQC Kernel

DQC provides two features mainly,

- Monitor rules for topic data,
- And topic data profile.

## Monitor Rules

A set of monitor rules are built-in, they are on difference level,

- Factor mismatch enumeration: on single factor value,
- Row not exists: on single topic,
- Rows not change: on single topic,
- Rows count mismatch with another topic: on single topic,
- Factor value is empty: on single factor value,
- Factor value is blank: on single factor value,
- Factor string value length mismatch: on single factor value,
- Factor string value length not in range: on single factor value,
- Factor value matches Regex: on single factor value,
- Factor value mismatches Regex: on single value,
- Factor empty value over coverage: on factor values,
- Factor value mismatches type: on single factor value,
- Factor not in range: on single factor value,
- Factor max value not in range: on factor values,
- Factor min value not in range: on factor values,
- Factor avg value not in range: on factor values,
- Factor median value not in range: on factor values,
- Factor quantile value not in range: on factor values,
- Factor stdev value not in range: on factor values,
- Factor most common value not in range: on factor values,
- Factor most common value over coverage: on factor values,
- Factor value not equals another factor's: on single factor value.

Monitor rules can be trigger by predefined jobs,

- Daily,
- Weekly,
- Monthly.

For one specific topic and factor, rules only can be triggered by one of above options.

### Trigger by API

Monitor rules also can be triggered by api,

```bash
curl \
--location \ 
--request GET 'http://host:port/dqc/monitor/rules/run?topic_name=a_topic&frequency=daily&process_date=20200816&tenant_id=1' \
--header 'Authorization: Bearer ...'
```

- `topic_name`: run monitor rules on given topic, it is case sensitive,
    - run rules on all topics when `topic_name` is not provided,
- `frequency`: one of `daily`, `weekly` and `monthly`,
- `process_date`: server will compute the date range which data changed,
    - `daily`: exactly the process date, whole day, `00:00:00.000` ~ `23:59:59.999`,
    - `weekly`: week of process date. A week is from Sunday to Saturday,
    - `monthly`: month of process date. A month is from 1st to last day of month,
- `tenant_id`: required when current user is super admin.

### Result of Monitor Rules

There is no response body via trigger api, result of monitor rules can be reviewed by web client,
visit **[here](../../web-client/dqc/monitor-rules)** for more details.

## Topic Profile

Profile data of topic is a real-time computation, it is invoked by web client in topic and pipeline pages,
visit **[here](../../web-client/dqc/topic-profile)** for more details.
