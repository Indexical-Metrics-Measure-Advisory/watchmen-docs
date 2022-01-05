---
id: data-zone  
title: Data Zone  
sidebar_position: 2
---

# Data Zone
```typescript title="watchmen-web-client/src/services/data/tuples/tenant-types.ts"
export type TenantId = string;

export interface Tenant extends Tuple {
	tenantId: TenantId;
	name: string;
}
```