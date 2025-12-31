---
id: first-topic
title: Build Your First Topic
sidebar_position: 2
---

## Goal
Define your first Topic in the Admin UI: choose kind/type, attach a data source, add factors (columns), set indexes, and save.

## Prerequisites
- Admin access to Topic management.
- At least one data source configured (RDS or NoSQL).

## 1) Open Topic
- Navigate to `Admin → Topic`.
- Click `Create Topic` to open the standard tuple page.

## 2) Basic Information
- `Name`: snake/camel case; becomes table/document name in the data source.
- `Kind`: `System` / `Business` / `Synonym`.
  - Use `Business` for application data; `System` for logs/infra data.
  - `Synonym` maps an existing external table; structure is fixed, read‑only, RDS only.
- `Type`: `Raw` / `Meta` / `Distinct` / `Aggregation` (Aggregate/Time/Ratio).
  - Start with `Distinct` for instance data (e.g., orders, customers).
  - Choose `Raw` when receiving JSON via API and storing immutable events.
  - Choose `Meta` for definitions/reference data used by pipelines.
- `Data Source`: pick where the topic will be stored physically.
- `Description`: optional.

## 3) Add Factors
- Add one row per attribute with:
  - `Name` and `Label`.
  - `Type`: pick from built‑in types (Number/Text/Boolean/Date/Time and many domain types).
  - `Default Value`: optional.
  - `Encryption`: optional. Use AES/MD5/SHA256 or masking for sensitive fields.
- For `Raw` topics:
  - Use `Object`/`Array` for hierarchical JSON.
  - Use dot notation for nested fields (e.g., `customer.name`).
  - Tick `Flatten Column` on selected nested fields to create searchable columns; index flattened fields.

## 4) Indexing
- Assign `Index Group` for factors you query by; use `Unique Index Group` when values must be unique.
- In RDS, indexes avoid full table scans and improve pipeline reads on criteria.

## 5) Enumeration
- When a factor is `Enum`, link it to an `Enumeration` so UI and DQC know allowed values.

## 6) Save
- Validation checklist:
  - Topic: `Name`, `Kind`, `Type`, `Data Source` are required.
  - Factors: at least one with `Name` and `Type`.
  - For `Raw`, `Flatten Column` is required on any dot‑name factor you mark as flattened.
- Click `Save`.

## 7) Optional: Generate Scripts
- Click `Download Scripts` to export creation/alteration scripts for Oracle/MySQL/MSSQL or Liquibase.
- Review and version the scripts before executing in your environment.

## 8) Optional: Build Flatten Topics (from Raw)
- Click `Build Flatten Topics`, choose target distinct topics.
- The system generates topics and pipelines to copy data from the Raw topic into Distinct topics.

## 9) Optional: Import Metadata (Meta)
- For `Meta` topics, download CSV/JSON templates and import data.
- Synonym meta cannot import data.

## Good Practices
- Index flattened factors and any criteria used in pipelines.
- Keep names unique within the data source.
- Use `Business` kind for application data; `Synonym` for external tables (read‑only).
- Encrypt or mask sensitive fields (contact info, IDs, etc.).
- Design topic layers: Raw → Distinct → Aggregation/Meta, and move data via pipelines.

## What’s Next
- Create pipelines for the new topic.
- Build subjects/datasets and reports on top of the topic.
