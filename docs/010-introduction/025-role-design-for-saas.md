---
id: role-design-for-saas
title: SaaS Data Platform Role Design
sidebar_position: 25
---

# SaaS Data Platform Role Design

Building a SaaS data platform requires a more granular permission model than a single-tenant system. You need to balance **Tenant Isolation** with **Platform Efficiency**, while distinguishing between "Building" data assets and "Operating" them.

Based on Watchmen's architecture, we recommend the following 4-Layer Role Model.

## 1. Role Hierarchy Overview

We propose dividing roles into **Platform Level** (Cross-Tenant) and **Tenant Level** (Data Zone).

| Level | Role Name | Focus | Key Responsibilities |
| :--- | :--- | :--- | :--- |
| **Platform** | **Platform Owner** (Super Admin) | Infrastructure & Billing | Manage tenants, datasources, system plugins, resource allocation. |
| **Platform** | **Global Asset Manager** (New) | **Standardization** | Define cross-tenant standard models, global dictionaries, and industry templates. |
| **Tenant** | **Tenant Admin** | User Management | Manage tenant users, groups, and permissions. |
| **Tenant** | **Data Architect** | Data Modeling | Design Topics, Pipelines, and business logic. |
| **Tenant** | **Data Ops** (New) | **Stability & Quality** | Monitor logs, handle DQC alarms, retry failed pipelines, fix dirty data. |
| **Tenant** | **Business Analyst** | Consumption | Create indicators, reports, and dashboards. |

---

## 2. Deep Dive: New Strategic Roles

### 2.1 Global Asset Manager (Cross-Tenant)
*Target Audience: The SaaS Provider's Data Team.*

In a SaaS model, you don't want every tenant to reinvent the wheel. You want to push "Best Practices" or "Industry Standards".

*   **Capabilities**:
    *   **Manage Template Library**: Create "Standard Topics" (e.g., standard `SalesOrder` schema) and "Standard Pipelines" in a "Master Tenant".
    *   **Distribute Assets**: Push updates to tenant spaces (e.g., "Upgrade the 'Retail Industry Pack' for Tenant A").
    *   **Global DQC Rules**: Define baseline data quality rules that apply to all tenants.
*   **Implementation Strategy**:
    *   In Watchmen, this role operates primarily in a dedicated **"Template Tenant"**.
    *   Use the **Import/Export** features or **Admin API** to propagate these assets to customer tenants.

### 2.2 Data Ops (Tenant Maintenance)
*Target Audience: The Tenant's IT Support or The SaaS Provider's Managed Service Team.*

This role separates "Building" from "Running". They keep the lights on without risking breaking the business logic.

*   **Capabilities**:
    *   **Monitor**: Access `Admin > Monitor Logs` and `DQC > Runtime Statistics`.
    *   **Fix**: Permission to use **Pipeline Simulator** or **Correction Pipelines** (as defined in the Closed-Loop Decision doc) to repair data.
    *   **Retry**: Access to the "Dead Letter Queue" (failed pipeline stages) to trigger retries.
    *   **Restriction**: **Read-Only** access to Pipeline/Topic definitions (cannot change logic).

---

## 3. Permission Matrix (Suggested)

| Feature / Resource | Global Asset Manager | Tenant Admin | Data Architect | Data Ops | Business Analyst |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **User & Group Mgmt** | - | ✅ Full | - | - | - |
| **Datasource Config** | - | ✅ Full | ⚠️ Read | - | - |
| **Topic/Factor Def** | ✅ (Templates) | ✅ | ✅ Full | 👁️ Read | 👁️ Read |
| **Pipeline Logic** | ✅ (Templates) | ✅ | ✅ Full | 👁️ Read | - |
| **Monitor Logs** | - | ✅ | ✅ | ✅ Full | - |
| **DQC Dashboard** | ✅ (Global) | ✅ | ✅ | ✅ Full | - |
| **Data Correction** | - | - | ✅ | ✅ (Via Tools) | - |
| **Report/Dashboard** | - | ✅ | ✅ | - | ✅ Full |

---

## 4. Implementation in Watchmen

Since Watchmen's core currently defines `Super Admin`, `Admin` (Tenant), and `User`, here is how to map these concepts:

### 4.1 Implementing "Data Ops"
1.  **Create a User Group**: Named `Data Operations`.
2.  **Assign Spaces**:
    *   Give access to the **Operation Space** (contains Logs, DQC stats).
    *   **Do NOT** give access to the **Design Space** (where Topics/Pipelines are edited), or give Read-Only access if supported.
3.  **Dashboard Access**: Build a dedicated "Ops Dashboard" for this group, showing:
    *   Pipeline Failure Rates.
    *   Data Quality Health Score.
    *   Slow Query Lists.

### 4.2 Implementing "Global Asset Manager"
1.  **System Design**: Treat this as a workflow, not just a permission.
2.  **The "Master Space"**: Create a specific Data Zone (Tenant) called `Global_Templates`.
3.  **The Role**: A specific Admin user in `Global_Templates`.
4.  **The Propagation**:
    *   Develop a script (using Watchmen CLI or API) that exports Topics/Pipelines from `Global_Templates`.
    *   Iterates through target Tenants.
    *   Imports/Merges them into the target Tenant's Design Space.

## 5. Summary

For your SaaS platform:
1.  **Elevate "Asset Management"**: Don't let tenants start from empty. Use the **Global Asset Manager** role to manage your "SaaS Value" (Templates).
2.  **Protect "Production"**: Use the **Data Ops** role to ensure that the people fixing data issues don't accidentally change the code (Pipelines).