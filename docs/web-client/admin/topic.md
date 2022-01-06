---
id: topic  
title: Topic  
sidebar_position: 80
---

# Topic

Topic is the core concept of **_Watchmen_**, all data are stored in topics.

Topic 
- Is categorized by kind and type,
- Has a set of factors,
- Attached into a data source.

:::tip  
Topic is available for `Admin` only.
:::

## Standard Tuple Page

Topic use [standard tuple page](../standard-tuple-page).

![Edit Topic](images/topic.png)

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

