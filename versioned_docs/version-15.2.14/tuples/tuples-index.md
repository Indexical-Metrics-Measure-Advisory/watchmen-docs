---
id: tuples-index  
title: Tuple Index  
sidebar_position: 1
---

# Tuples Index

In **_Watchmen_**, definition objects are called as `Tuple`,

- [Data Zone](data-zone)
- [Data Source](data-source)
- [External Writer](external-writer)
- [User](user)
- [User Group](user-group)
- [Space](space)
- [Enumeration](enumeration)
- [Topic](topic)
- [Pipeline](pipeline)
- [Connected-Space](connected-space)
- [Subject](subject)
- [Report](report)
- [Dashboard](dashboard)

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
**_`(under construction)`_**