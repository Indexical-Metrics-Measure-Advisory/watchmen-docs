---
id: first-ingestion
title: Build Your First Ingestion Pipeline
sidebar_position: 2
---

## Goal
Set up your first ingestion pipeline using the Watchmen Ingestion UI: create a module, define a model, configure tables, and run/monitor the pipeline.

## Prerequisites
- Access to the Watchmen Ingestion UI.
- Connection and credentials to your source system (database, files, or queues).

## 1) Create a Module
### What is Module?
- A module is a logical group of models and tables.
- Typically used to refer to a system or a data source.
- Modules run in parallel, and models within a module run sequentially.

### Steps to Create a Module
- Navigate to `Modules`.
- Click `Create Module`.
- Fill in `Module Name` and `Priority`.
- Save. A card appears with ID, Priority badge, Version badge and `Last modified`.
- Use the quick edit button to adjust name/priority at any time.

## 2) Define a Model

### What is Model?
- A model is a logical representation of a data entity or a business object.
- It defines the structure and attributes of the data to be ingested.
- Models are associated with a module and run sequentially within that module.

### Steps to Define a Model
- Go to `Models` and click `Create Model`.
- Choose the target module.
- Name the model and set basic attributes (entity/mapping/business keys).
- Optionally mark as `Parallelled` if the model can run in parallel.
- Save. Cards list your models with `Priority`, associated `Topic`, and `Last modified`.

## 3) Configure Tables
### What is Table?
- A table is a physical representation of a data entity or a business object in a database or data warehouse.
- It stores the actual data and is the target for data ingestion.
- Tables are associated with a model and run sequentially within that model.

### Steps to Configure a Table
- Open `Tables`.
- Use search and filters (by model and status: All/Active/Inactive/Pending) to locate a table.
- Click `Configure` on a table card.
- In the editor, fill out:
  - Basic Information: `Name`, `Table Name`, `Model Name`, `Parent Name` (optional), `Label`.
  - Key Configuration: `Primary Key`, `Object Key`, `Sequence Key`, `Audit Column`.
  - Complex Configuration (optional): join keys and other advanced settings.
- Save changes. The card shows trigger mode (e.g., `Triggered` or `Manual`).

## 4) Run the Pipeline
- Option A: Execution Flow
  - Go to `Modules` and click `Execution Flow` to visualize the DAG.
  - Start the run via manual trigger or schedule.
- Option B: Configuration Wizard
  - Open `Configuration` and launch the wizard.
  - Step 1: select a module (cards show version and priority).
  - Step 2: select a model.
- Step 3: select a table, choose time range or trigger type, and confirm to create a test event and execute extraction.

## 5) Monitor & Validate
- Open `Monitor` to view recent events per table; status badges indicate progress (e.g., Finished, Running, Failed).
- Click `View Details` to inspect the selected event.
- Check the details: `Module`, `Model`, `Table`, `Start`, `Duration`, `Data Count`, `JSON Count`, `JSON Finished`, `Status`, `Percent`, `Errors`.
- Acceptance checklist:
  - `Percent` reaches 100% and `Status` shows a finished state.
  - `Data Count` aligns with `JSON Finished` for the tested time range.
  - `Errors` is 0 or contains only expected skips.
- If issues occur:
  - Verify keys: `Primary Key`/`Sequence Key` and `Audit Column` settings.
  - Confirm trigger mode and selected time range.
  - Check credentials/network/connectivity for the source.
  - Review logs for error context and sample payloads.
- Re‑run:
  - Re‑trigger via `Execution Flow` or the `Configuration Wizard`.
  - Adjust the time range or sequence to replay the test.
