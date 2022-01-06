---
id: user-group  
title: User Group  
sidebar_position: 6
---

# User Group
## Model
### Frontend
```typescript title="watchmen-web-client/src/services/data/tuples/user-types.ts"
export type UserGroupId = string;

export interface UserHolder extends TupleHolder {
	userIds: Array<UserId>;
}
```

```typescript title="watchmen-web-client/src/services/data/tuples/space-types.ts"
export type SpaceId = string;

export interface SpaceHolder extends TupleHolder {
	spaceIds: Array<SpaceId>;
}
```

```typescript title="watchmen-web-client/src/services/data/tuples/user-group-types.ts"
export type UserGroupId = string;

export interface UserGroup extends Tuple, SpaceHolder, UserHolder {
	userGroupId: UserGroupId;
	name: string;
	description?: string;
	tenantId?: TenantId;
}
```

### Backend
**_`(under construction)`_**