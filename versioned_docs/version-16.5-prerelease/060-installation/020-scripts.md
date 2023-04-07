---
id: scripts  
title: Storage Scripts  
sidebar_position: 20
---

# Storage Scripts

There are two types of storage scripts,

- For metadata,
- For topics.

## Scripts for Metadata

All storage scripts for metadata can be found corresponding storage module. For example, scripts for MySQL is under `watchmen-storage-mysql`
, scripts for Oracle is under `watchmen-storage-oracle`.

There are three folders for different types of scripts,

- `/meta-scripts`: for create tables, and one initial tenant, three initial users are created as well. It is for meta storage,
- `/data-scripts`: functions pre-built, MUST be executed in each storage which contains topic,
- `/tenant-scripts`: system topics for DQC, logs. Create them in particular topic storage, and assign data source in web client.

