---
id: tuples-index  
title: Tuple Index  
sidebar_position: 1
---

# Tuples Index

In **_Watchmen_**, definition objects are called as `Tuple`,

- [Data Zone](admin/data-zone)
- [Data Source](admin/data-source)
- [External Writer](admin/external-writer)
- [User Group](admin/user-group)
- [User](admin/user)
- [Topic](admin/topic)
- [Enumeration](admin/enumeration)
- [Pipeline](admin/pipeline)
- [Space](admin/space)
- [Connected Space](console/connected-space)
- [Subject](console/subject)
- [Report](console/report)
- [Dashboard](console/dashboard)

## Backend and Frontend
We use typescript for frontend and python for backend.

## Tuple Interface
### Frontend
```typescript title="watchmen-web-client/src/services/data/tuples/tuple-types.ts"
export interface Tuple {
	createTime: DateTime;
	lastModified: DateTime;
}
```

### Backend
```python title="watchmen-model/model/model/common/watchmen_model.py"
class WatchmenModel(BaseModel):
    lastModified: datetime = datetime.now().replace(tzinfo=None)
    createTime: str = None
```