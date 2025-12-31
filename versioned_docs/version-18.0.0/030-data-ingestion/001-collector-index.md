---
id: collector-index  
title: Watchmen Ingestion    
sidebar_position: 1
---

# Collector

## UI Overview
- Left navigation: `Dashboard`, `Modules`, `Models`, `Tables`, `Configuration`, `Monitor`.
- Modules page uses card view: each card shows `ID`, `Priority` badge, `Version` badge, `Last modified`, and a quick edit button.
- Page actions: `Execution Flow` visualizes the ingestion DAG; `Create Module` adds a new module.

## Modules
- Manage system modules as independent ingestion domains.
- Card view supports quick inspection and inline edit of module metadata.
- Priority and version badges help sort and track release readiness.

## Models
- Define ingestion models per module (entities, mappings, business keys).
- Organize source‑to‑domain mappings used by CDC and file/queue ingestion.
- Create, edit and validate models before wiring them to tables.

## Tables
- Configure table‑level extraction and CDC (primary keys, audit columns, triggers).
- Map tables to models, set batch size and concurrency, and enable/disable per table.
- Quick edit supports fast adjustments during rollout.

## Configuration
- Global runtime settings for connectors, credentials, checkpoints and retention.
- Control concurrency, backoff/retry, and resource limits per module.
- Toggle feature flags for preview/production modes.

## Monitor
- Observe execution flow and runtime status: running jobs, errors and throughput.
- View logs, backlog, and last modified timestamps to track freshness.
- Drill into modules and tables to diagnose issues rapidly.

## Dashboard
- High‑level counters and recent activity across modules.
- Shortcuts to create modules and open the execution flow.

## Capabilities
- Change Data Capture from source databases.
- File/S3 ingestion for cloud object storage.
- Queue‑based ingestion for event streams.


# Watchmen Collector Technical Overview
## Summary
- watchmen-collector-kernel: core engine connecting external sources, executing extraction/CDC, normalizing events, delivery and task orchestration.
- watchmen-collector-surface: outer service and routing interface providing configuration, triggers, status query and monitoring; platform integration entry.
## Architecture
- Layered design: Surface (service/routing/scheduling) invokes Kernel (connectors/CDC/transform/delivery) for low coupling and extensibility.
- Event‑driven: extractions and changes become unified events, transformed and delivered to targets (storage, queues, downstream APIs).
- Task‑centric: all collection actions are organized as tasks with triggering, scheduling, retries and state management.
## Roles & Responsibilities
- Surface
  - Exposes REST/HTTP routes: configuration, tasks, triggers, monitoring.
  - Unified scheduler: translates triggers into executable tasks and hands them to Kernel.
  - Runtime settings: control concurrency, retry and feature toggles.
- Kernel
  - Abstract source protocols: pluggable connectors (DB, object storage, messaging, etc.).
  - CDC pipeline: incremental change capture producing standardized events.
  - Transform chain: mapping/validation/cleaning to align with target schema.
  - Delivery & persistence: write to targets and persist task/event states.
  - Reliability controls: locks, idempotency, retries and timeout cleanup.
## Core Flow
- Register configuration: sources, collection units (tables/paths/topics) and scheduling policies.
- Generate task: manual/cron/event trigger → Surface scheduler → Kernel execution.
- Connect & extract: connector establishes link; full/incremental extraction; CDC captures changes.
- Normalize: convert raw records to unified event with mappings and validations.
- Deliver & record: write to target (DB/object storage/queue/API) and record processing states.
- Monitor & feedback: report metrics, errors and alerts for ops and platform coordination.
## Module Design (Kernel)
- Connector
  - Encapsulate protocols, auth and extraction strategy.
  - Unified pull interface hides differences.
- CDC
  - Support log/subscription/polling strategies.
  - Convert changes into unified messages.
- Transform
  - Field mapping, type correction, filtering and aggregation.
  - Ensure output aligns with target schema.
- Delivery
  - Write to storage/queues/downstream APIs.
  - Provide idempotent keys and retry policy.
- State & Storage
  - Persist task/event metadata, progress and results.
  - Pluggable backends (relational/key‑value/object storage).
- Reliability
  - Concurrency locks to avoid duplicate parallel runs.
  - Idempotency to process duplicates safely.
  - Exponential backoff retries.
  - Timeout cleanup for stuck tasks.
## Module Design (Surface)
- Config Router: register/change sources and collection units; validate and distribute parameters.
- Task Router: create/query/cancel/retry tasks; expose status and history.
- Trigger Router: immediate/cron/event triggers; multi‑tenant/project isolation.
- Scheduler: map triggers to executable tasks; control priority and concurrency.
- Settings: environment/auth/concurrency/retry/rate limit.
- Main/Surface: register routes, load config and start service.
## Data Flow & Interaction
- Input: source connection info, collection units, scheduling policies and trigger commands.
- Process: extract → normalize → transform → deliver, with state/metrics recorded along the way.
- Output: targets (storage/queue/API), task/event records and monitoring data.
- Feedback: query status/metrics; callbacks and alerts.
## Reliability & Consistency
- Idempotency: unique event keys and idempotent delivery avoid duplicates.
- Delivery semantics: at‑least‑once by default; with idempotency approximates exactly‑once.
- Retry & compensation: failure retries; optional local rollback/compensation tasks.
- Timeout & reclamation: detect stuck tasks and reclaim resources.
## Extensibility
- New sources: implement new connectors under a unified interface; register via Surface.
- New CDC strategies: extend change capture (logs/subscriptions/triggers).
- Transform strategies: add mappers/validators/aggregators to match target schema.
- Delivery targets: extend backends (DB/object storage/queue/HTTP) as pluggable options.
- Scheduling policies: priority queues, rate limit, cross‑task dependency and multi‑tenant isolation.
## Configuration & Deployment
- Central settings managed at Surface; support env injection and multi‑env isolation.
- Deployment modes:
  - Monolith: lightweight integration.
  - Worker/Sidecar: horizontal scaling and elasticity.
  - Platform‑integrated: collaborate with Meta/Pipeline for end‑to‑end chains.
  - Serverless/Lambda: run tasks/functions on AWS Lambda/Azure Functions/GCP Cloud Functions; event/cron triggers; scale‑to‑zero; ephemeral execution with delivery to targets.
## Security & Isolation
- AuthZ: token/OAuth at routes; tenant/project permissions.
- Least privilege: connectors follow minimal permissions; secrets via env/keys.
- Audit & trace: task/event operation logs for audit and troubleshooting.


