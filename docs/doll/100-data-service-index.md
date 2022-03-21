---
id: index  
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
The CRUD operations of models are provided by `watchmen-meta`, and persistent layer of meta service is provided by `watchmen-storage`.