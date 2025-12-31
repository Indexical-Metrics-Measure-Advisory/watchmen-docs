---
title: Build Your First Metric
sidebar_position: 150
---

# Build Your First Metric

In this guide, we will walk through the process of creating a business metric from raw data. We assume you have already ingested data into a Topic (e.g., `order`).

**Goal**: Create a **"Total Revenue"** metric to track sales performance.

## Step 1: Create a Semantic Model

Before defining a metric, we must map the raw data topic to a business entity.

1.  Navigate to **Metrics Platform** > **Semantic Model**.
2.  Click **Create Model**.
3.  **Basic Info**:
    *   **Name**: `Sales Model`
    *   **Source Topic**: Select your datamart topic (e.g., `order`).
4.  **Define Measures**:
    *   Find the field representing the amount (e.g., `order_amount`).
    *   Click **Add to Measures**.
    *   **Rename** it to `Revenue` (Business friendly name).
5.  **Define Time Dimension**:
    *   Find the transaction date (e.g., `order_date`).
    *   Mark it as the **Time Dimension**.
6.  Click **Save**.

*Why?* This decouples your metrics from cryptic database column names.

## Step 2: Define the Metric

Now we create the standardized KPI.

1.  Navigate to **Metrics Management**.
2.  Click **New Metric**.
3.  **Configuration**:
    *   **Name**: `Total Revenue`
    *   **Semantic Model**: Select `Sales Model`.
    *   **Measure**: Select `Revenue`.
    *   **Aggregation**: `Sum`.
    *   **Format**: `Currency` (e.g., `$`).
4.  Click **Save**.

You now have a governed metric that can be reused across the organization.

## Step 3: Visualize and Analyze

Finally, let's use the metric.

1.  Navigate to **Metrics Analysis**.
2.  Create a **New Dashboard**.
3.  **Add Card**:
    *   Select `Total Revenue` from the library.
    *   The system immediately shows the total number.
4.  **Break Down**:
    *   Drag a dimension (e.g., `Region` or `Product Type`) to the **Breakdown** area.
    *   The chart automatically updates (e.g., to a Bar Chart or Line Chart).
5.  **Save** your dashboard.

## Next Steps

*   [Explore advanced Metric types](../../060-metrics/030-metrics-management.md)
*   [Configure Alerts for this metric](../../060-metrics/040-alert-configuration.md)
