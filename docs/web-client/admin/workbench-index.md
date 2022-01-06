---
id: admin-wb-index  
title: Admin Workbench Index  
sidebar_position: 1
---

# Admin Workbench

## Admin Types

There are 2 roles of admin:

- Super Admin
- Data Zone Admin

### Super Admin

**_Watchmen_** is designed for multiple data zones, all data including definitions are data zone oriented, a super administrator is required
to maintain each data zone's `startup settings`.

The following features are only for `Super Admin`:

- Data zone maintain,
- Data source maintain,
- External writer maintain.

Following features are available for `Super Admin`, but also for 'Admin', 
- User maintain.

### Data Zone Admin

Data Zone Admin is designed for configuring, monitoring data zone's development, deployment, etc.

Following features are for data zone admin:

- Admin dashboard,
- Topic maintain,
- Enumeration maintain,
- Space maintain,
- Pipeline maintain,
- User Group maintain,
- User maintain,
- Pipeline Simulator,
- Monitor Logs Query,
- Monitor Rule maintain,
- Monitor Rule Statistics,
- Consanguinity Query,
- Assets Catalog maintain.

:::info  
`Data Zone Admin` is also called as `Admin` for short in following chapters if no otherwise specified as `Super Admin`.
:::

## Centralized Definition Persistence

Definition data in **_Watchmen_** is stored centralized now. A definition data source must be configured in standard deployment, your can
find it in [Deployment](../../deployment/deploy-index) chapter.