---
id: ai-ready-overview
title: AI-Ready Overview
sidebar_position: 2
---

## Overview
Watchmen is an open‑source, domain‑centric data platform for AI‑ready data products. It models domain semantics, orders events, and maintains temporal truth (SCD2) with streaming ingestion and idempotent upserts.

## Why Customers Can Trust the Data
- End‑to‑end lineage: every record traces back to source events via the event backbone (IDs, timestamps, pipeline provenance).
- Temporal truth: SCD2 intervals and event‑time semantics guarantee accurate as‑of queries and reproducible snapshots.
- Contracts & versioning: machine‑readable data contracts and dictionary/tags enforce consistency; evolution is governed and versioned.
- Idempotent pipelines & replay: deterministic upserts and conflict strategies enable safe replays/backfills without duplication.
- Quality signals: completeness, accuracy, timeliness and consistency metrics are computed per domain and exposed for monitoring.
- Governance & security: domain‑level ACL, row‑level security, PII redaction and audit logs provide controlled and auditable access.

## Ways to Use the Data
- Data science & apps: Python SDK for time‑slice datasets and metrics; samples include event‑time range, contract version and provenance.
- BI analytics: domain data‑marts with SCD2 as‑of reporting; idempotent upserts keep dashboards consistent.
- AI/GenAI: MCP tools for datasets/metrics with provenance; responses include event‑time windows and contract versions.
- Warehouses & lakehouses: near real‑time sync to cloud warehouses; barrier commits and watermarks ensure consistency.
- Tools & projects: export models/tests for engineering workflows; keep contracts, SCD2 intervals and dictionary/tags.

## Metadata & Contracts (Proof of AI‑Readiness)
All data products include machine‑readable metadata and semantics. AI agents can discover and retrieve both metadata and values via APIs or MCP tools.

- Dictionary & tags: domain taxonomy, sensitivity/PII and governance tags for discovery and policy enforcement.
- Schema contracts: types, constraints, invariants, compatibility rules and versions; change logs tied to domain releases.
- Lineage: pipeline IDs, transformation steps and watermarks for queryable provenance.
- Access & audit: who/when/query ID and policy decisions logged; responses include contract version and event‑time range.
- API/MCP access: `dataset.search`, `dataset.schema`, `dataset.query`, `dataset.slice`, `metric.list`, `metric.get`, `metric.series` with provenance.

## Community
- Open source under MIT License. Contributions welcome.
