---
id: data-development
title: Data Development Process
sidebar_position: 2
---


## Goals
Introduce the data development process in Watchmen.

## Overview
Role-oriented high-level flow for data developers, aligned with Watchmen key features.

## Development Workflow
1. **Environment & Access**  
   Install services, log in to Admin Workbench, set up data zones and users.

2. **Register Data Sources**  
   `Admin → Data Source`. Configure connections and bind topics to storage.

3. **Configure Ingestion**  
   `Ingestion → Modules/Models/Tables/Configuration/Monitor`. Set keys and triggers, run extraction, visualize execution flow.

4. **Model Topics & Enumerations**  
   `Admin → Topic` and `Enumeration`. Define kind/type, factors, indexes, encryption; link enums; export scripts if needed.

5. **Orchestrate Pipelines & External Writers**  
   `Admin → Pipeline` and `External Writer`. Define triggers, stages, units and actions; integrate writers; test with `Simulator`.

6. **Validate & Profile**  
   `Admin → Monitor Logs` and `Topic Profile`. Inspect runtime status, distributions and errors.

7. **Assure Data Quality**  
   `DQC → Monitor Rules/Run Statistics/Consanguinity/Catalog`. Configure checks, monitor metrics and lineage.

8. **Operate & Automate**  
   `Admin → Toolbox`. Schedule snapshots, trigger pipelines; version and alert on data freshness and quality.

9. **Optional Analytics Handoff**  
   `Console → Subject/Report/Dashboard`. Publish datasets and visualizations for analysts.


## Data-Modeling Best Practices
- Start with a clear business glossary to ensure consistent naming.  
- Prefer star or snowflake schemas or wide tables for analytics workloads
- Use surrogate keys to decouple source-system changes from analytical models.  
- Store slowly changing dimensions (SCD) history explicitly (Type 2 or Type 4) when business needs change tracking.  
- Normalize only where it reduces redundancy without hurting query performance; benchmark before and after.  
- Document every entity, column, and relationship in the shared data-catalog; treat docs as code.  
- Enforce data contracts at the model boundary (nullability, value ranges, referential integrity).  
- Version your models; every breaking change should pass a deprecation window and downstream impact review.
