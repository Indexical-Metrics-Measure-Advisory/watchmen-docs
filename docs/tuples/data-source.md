---
id: data-source  
title: Data Source  
sidebar_position: 3
---

# Data Source
## Model
### Frontend
```typescript title="watchmen-web-client/src/services/data/tuples/data-source-types.ts"
export enum DataSourceType {
	MYSQL = 'mysql',
	ORACLE = 'oracle',
	MONGODB = 'mongodb'
}

export interface DataSourceParam {
	name: string;
	value: string;
}

export type DataSourceId = string;

export interface DataSource extends Tuple {
	dataSourceId: DataSourceId;
	dataSourceCode: string;
	dataSourceType: DataSourceType;
	host: string;
	port: string;
	name: string;
	username: string;
	password: string;
	url: string;
	params: Array<DataSourceParam>;
	tenantId?: TenantId;
}
```

### Backend
**_`(under construction)`_**