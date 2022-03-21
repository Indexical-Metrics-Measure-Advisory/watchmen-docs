---
id: external-writer  
title: External Writer  
sidebar_position: 30
---

# External Writer

External writer is used in pipeline, write data to external.

:::info  
External writer is available for `Super Admin` only.
:::

:::caution  
Implementation of extended external writer must be packaged and deployed with doll instance.
:::

## Standard Tuple Page

External writer use [standard tuple page](../standard-tuple-page).

![Edit External Writer](images/external-writer.png)

## Form Validation

- External Writer Code: required,
- External Writer Type: required. Currently, 2 types are built-in:
	- Standard Embedded Writer,
	- Standard ElasticSearch Writer **_`(under construction)`_**,
- Data Zone: required,
- Url: optional,
- Personal Access Token: optional. Signed by another system.

## Built-in and extend Writers

**[Here](../../doll/pipeline-service#external-writers)** for more details on using built-in or extends your own external writers.
