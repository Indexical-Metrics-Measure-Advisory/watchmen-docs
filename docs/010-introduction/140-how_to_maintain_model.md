---
id: how-to-maintain-model
title: Model Maintenance Process
sidebar_position: 2
---

# Model Maintenance Process

This document outlines the standard workflow for maintaining data models in Watchmen, aligned with the [Data Development Process](../020-getting-started/010-data-development.md). It details the steps for handling model changes, additions, and new system integrations using standard Watchmen modules.

## 1. Changes to Existing Models

When the upstream data structure changes (e.g., adding columns, modifying data types):

1.  **Configure Ingestion**:
    *   Navigate to the `Ingestion` workbench.
    *   Update the specific table configuration to capture the new schema changes (DDL) from the source system.
2.  **Model Topics**:
    *   Go to `Admin -> Topic`.
    *   Select the target **Raw Topic**.
    *   Update the **Factors** to reflect the new columns or data types.
3.  **Orchestrate Pipelines**:
    *   Go to `Admin -> Pipeline`.
    *   Review pipelines triggered by the updated topic.
    *   Modify transformation units (e.g., `Insert Row`, `Merge Row`) to map the new factors to downstream **Business Topics**.
4.  **Validate & Profile**:
    *   Check `Admin -> Monitor Logs` to verify that the pipeline processes the new data structure without errors.
    *   Use `Topic Profile` to inspect the distribution of values in the new factors.

## 2. Adding New Models

When business requirements dictate the addition of new tables or entities:

1.  **Configure Ingestion**:
    *   In the `Ingestion` workbench, add the new table to the model configuration.
    *   Set up extraction keys (Primary Key) and incremental triggers (Update Time).
2.  **Model Topics**:
    *   Define a new **Raw Topic** to map the ingested table structure one-to-one.
    *   Define a target **Business Topic** for the finalized analytical model.
3.  **Orchestrate Pipelines**:
    *   Create a new **Pipeline** associated with the Raw Topic.
    *   Define stages to cleanse, transform, and load data into the Business Topic.
4.  **Assure Data Quality**:
    *   Go to `DQC -> Monitor Rules`.
    *   Configure validation rules (e.g., Null Check, Value Range) for the new topics to ensure data integrity from day one.

## 3. Onboarding New Systems

When integrating a completely new external system:

1.  **Register Data Sources**:
    *   Go to `Admin -> Data Source`.
    *   Create a new connection profile for the external system.
2.  **Configure Ingestion**:
    *   Create a new ingestion group and import the system's table structures.
3.  **Strategic Modeling**:
    *   **Direct Mapping**: If the source system is already standardized (e.g., an aggregated view), map it directly to Business Topics to minimize latency.
    *   **Integration Layer**: For legacy or complex systems, use Raw Topics as a staging layer and leverage **Pipelines** for "Heterogeneous Model Transformation".
4.  **Operate & Automate**:
    *   Use `Admin -> Toolbox` to trigger initial data snapshots or historical backfills.
    *   Verify the end-to-end flow using `Consanguinity` to visualize the new lineage.

## 4. Enterprise Governance & Engineering Process

For organizations with complex data landscapes or strict compliance requirements, it is highly recommended to wrap the above technical steps within a formal engineering management framework.

*   **Change Approval Workflow**:
    *   Implement a **Change Approval Board (CAB)** or a lightweight review process before modifying core Business Topics.
    *   Ensure that any schema change (e.g., modifying a Factor type) is reviewed for downstream impact on Reports and Indicators.
*   **Role-Based Access Control (RBAC)**:
    *   Strictly separate duties: **Data Developers** configure Topics and Pipelines in the Development Environment. **Data Stewards** or **Admins** review and deploy changes to Production.
    *   Use Watchmen's `User Group` and `Space` features to isolate sensitive data domains.
*   **Environment Promotion Strategy**:
    *   Adopt a standard **Dev -> Test -> Prod** lifecycle.
    *   Develop and test model changes in a lower environment first. Use Watchmen's **Toolbox** to export/import definitions between environments, ensuring consistency.
*   **Documentation as Code**:
    *   Treat data models as first-class citizens. Maintain a changelog for Topic definitions and Pipeline logic.
    *   Enforce the "Description" field for every new Topic and Factor to ensure the Data Catalog remains self-documenting for AI and human users.