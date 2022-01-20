---
id: dqc-wb-index  
title: DQC Workbench Index  
sidebar_position: 1
---

# DQC Workbench

DQC (Data Quality Center) workbench includes a group of features to

- Inspect relationships between tuples,
- Define monitor rules of topics,
- View runtime statistics.

Here, we introduce them one by one.

## Disable DQC

DQC can be disabled by building, it is enabled only when `REACT_APP_DQC_ENABLED=true` (by default it is not), set it to `true`/`false` to
enable/disable DQC.

:::info  
Find `REACT_APP_DQC_ENABLED` in `.env` file.
:::

:::caution  
Topic profile also will be disabled when DQC is disabled.
:::