---
id: topic  
title: Topic  
sidebar_position: 80
---

# Topic

Topic is the core concept of **_Watchmen_**,

- Is categorized by kind and type,
- Has a set of factors,
- Attached into a data source.

And
- All data are stored in topics,
- Pipelines run on topics,
- Subjects, datasets, reports are built based on topics.

:::tip  
Topic is available for `Admin` only.
:::

## Standard Tuple Page

Topic use [standard tuple page](../standard-tuple-page).

![Edit Topic](images/topic.png)

## Kind

There are 2 kinds of topic,

- System
- Business

Typically, topics for business data are `Business`, topics for analysis of monitor logs are `System`.

## Type

There are several types of topic,

- Raw
- Meta
- Distinct
- Aggregate
- Time
- Ratio

## Factor

## Scripts

| Script Purpose | Oracle SQL Script  |  Oracle Liquibase  |  MySQL SQL Script  | MySQL Liquibase |
|:---------------|:------------------:|:------------------:|:------------------:|:------------------:|
| Creation       | ✅ | ✅ | ✅ | ✅ |
| Alteration     | ✅ | ✅ | ✅ | ✅ |

## Form Validation

- Topic Name: required,
	- Must follow the standard of data source type. For example, in oracle, topic equates a `Table`,
	- Snake case or camel case is allowed,
- Topic Kind: required,
- Topic Type: required,
- Data Source: required,
- Description: optional,
- Factors: at least one factor is required,
	- Name: required,
	- Label: optional. Highly recommend filling it with a human reading text,
	- Type: required,
	- Default Value: optional,
	- Index Group: optional,
	- Encryption: optional,
	- Enumeration: required when a factor is an enumeration,
	- Flatten Column: required when topic is raw and factor name contains at least one dot(`.`).

## Model

Find topic model **[here](../../tuples/topic)**.

