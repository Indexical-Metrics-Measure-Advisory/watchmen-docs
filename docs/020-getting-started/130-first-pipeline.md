---
id: first-pipeline
title: Build Your First Pipeline
sidebar_position: 3
---

## Goal
Build your first pipeline: connect topics with staged logic that runs on insert/update/delete events.

## Prerequisites
- Topics and basic data available.
- Admin access to the Pipeline catalog and editor.

## Concepts
- Pipeline structure: Trigger → Stages → Units → Actions.
- Trigger: event from a topic (Insert, Insert or Merge, Merge, Delete).
- Stage: sequential group of units with an optional prerequisite.
- Unit: sequential group of actions, can loop over a list via `Loop Variable Name`.
- Action: atomic operation (system/read/write).

## 1) Open the Catalog
- Go to `Pipeline` catalog.
- Create a new group if needed and pick the topics to render.
- Drag blocks to organize the layout; the catalog view is per‑user.

## 2) Create a Pipeline
- From a topic navigator, click `Create Outgoing Pipeline`.
- The editor opens with a generated name; rename as needed.
- Keep the pipeline disabled until testing is complete.

## 3) Define the Trigger
- Choose the trigger type:
  - Insert: typically for raw/append‑only data.
  - Insert or Merge: same logic for first insert and later updates.
  - Merge: only handle updates.
  - Delete: supported but generally not recommended.
- Optional: add a prerequisite that must be true on the trigger row before running.

## 4) Add Stages and Units
- Add a stage, name it, and set a prerequisite if required.
- Within the stage, add one or more units.
- For list processing, set `Loop Variable Name` to iterate over elements in a variable.

## 5) Add Actions
- System actions:
  - Alarm: emit an in‑memory alert with severity and message.
  - Copy to Variable: prepare computed values in memory.
  - Write to External: synchronously call an external writer.
- Read actions:
  - Exists: check for existence by criteria.
  - Read Factor / Read Factors: read one factor or a list.
  - Read Row / Read Rows: read one row or a list into variables.
- Write actions:
  - Write Factor: update a single factor with a computed value.
  - Insert Row: create a new row on target topic.
  - Merge Row: update an existing row by criteria.
  - Insert or Merge Row: upsert by criteria.

## 6) Parameters & Variables
- Parameters can be From Topic, Constant, or Computed.
- Constant supports variables via `{var}` and built‑in functions like `{&nextSeq}`, `{&old.x}`.
- Computed offers math/date functions and case‑when style branching.
- Variables are immutable; re‑declare to update. Use `{var.sub}` to access nested values.

## 7) Review in DSL
- Switch to DSL view to inspect the definition in a YAML‑like format.
- Red highlights indicate issues to resolve.

## 8) Save, Test, Enable
- Save the pipeline; button style indicates unsaved changes.
- Test in simulator or with a controlled event; verify results.
- Enable the pipeline when ready.

## Good Practices
- Concurrency: multiple pipelines may run on the same trigger; use prerequisites and follow‑up pipelines to avoid race conditions.
- Read accuracy: ensure "one and only one" when using `Read Factor`/`Read Row` without aggregation.
- Idempotency: design criteria and keys to make writes deterministic under retry.
- Looping: for array/list variables, set `Loop Variable Name` and reference elements via `{items.x}`.

## What’s Next
- Add pipelines for related topics and split complex logic by stages.
- Introduce aggregation and time‑dimension factors for downstream analytics.
- Combine external writers for side‑effects with topic writes for data products.

