---
id: user  
title: User  
sidebar_position: 5
---

# User
## Model
### Frontend
```typescript title="watchmen-web-client/src/services/data/tuples/user-group-types.ts"
export type UserGroupId = string;

export interface UserGroupHolder extends TupleHolder {
	userGroupIds: Array<UserGroupId>;
}
```

```typescript title="watchmen-web-client/src/services/data/tuples/user-types.ts"
export enum UserRole {
	CONSOLE = 'console',
	ADMIN = 'admin',
	SUPER_ADMIN = 'superadmin'
}

export type UserId = string;

export interface User extends Tuple, UserGroupHolder {
	userId: UserId;
	name: string;
	role: UserRole;
	nickName: string;
	password: string;
	// only works on super admin login. otherwise it is undefined
	tenantId?: TenantId;
}

export interface UserHolder extends TupleHolder {
	userIds: Array<UserId>;
}
```

### Backend
```python title="watchmen-model/model/model/common/user.py"
class User(WatchmenModel):
    userId: str = None
    name: str = None
    nickName: str = None
    password: str = None
    # pwd:str = None
    is_active: bool = True
    groupIds: list = None
    role: str = None
    tenantId: str = None
```