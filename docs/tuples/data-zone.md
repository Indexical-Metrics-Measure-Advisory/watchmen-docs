---
id: data-zone  
title: Data Zone  
sidebar_position: 2
---

# Data Zone
Data zone is also known as `Tenant` in code layer, is top level idea of data isolation.

## Model
### Frontend
```typescript title="watchmen-web-client/src/services/data/tuples/tenant-types.ts"
export type TenantId = string;

export interface Tenant extends Tuple {
	tenantId: TenantId;
	name: string;
}
```

### Backend
**_`(under construction)`_**