---
id: rest-doll  
title: Doll REST  
sidebar_position: 400
---

# Doll REST

Doll REST is designed for serve,

- Meta CRUD,
- Pipeline engine,
- Inquiry engine,
- Data patch,
- etc,

As a standalone application server. Doll depends on [data-service](data-service), [pipeline-service](pipeline-service)
and [inquiry-service](inquiry-service). Based on such services, doll provide the meta CRUD REST apis as well.

## Import Assets

A rest api for import meta assets is provided by doll,

```bash
curl \
--location \ 
--request POST 'http://host:port/import' \
--header 'Authorization: Bearer ...' \
--header 'Content-Type: application/json' \
--data-raw '{
    ...
}'
```

Body structure can be found on `MixImportDataRequest` in `watchmen-rest-doll` module.

## Choose Extra Dependencies

There are many options on build a doll package, find extra dependencies list in `pyproject.toml` in `watchmen-rest-doll` module, free to
pick them according to the need.