---
id: external-writer  
title: External Writer  
sidebar_position: 4
---

# External Writer
## Model
### Frontend
```typescript title="watchmen-web-client/src/services/data/tuples/external-writer-types.ts"
export enum ExternalWriterType {
	STANDARD_WRITER = 'standard-writer',
	ELASTIC_SEARCH_WRITER = 'elastic-search-writer'
}

export type ExternalWriterId = string;

export interface ExternalWriter extends Tuple {
	writerId: ExternalWriterId;
	writerCode: string;
	type: ExternalWriterType;
	pat?: Token;
	url: string;
	tenantId?: TenantId;
}
```

### Backend
**_`(under construction)`_**