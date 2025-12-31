---
id: data-ingestion
title: Data Ingestion Strategy
sidebar_position: 3
---

# Domain-Oriented Ingestion

Watchmen advocates a fundamental shift in data ingestion: **transforming raw transactions into domain events rather than simply replicating table changes**. This approach prioritizes business semantics over database schema replication.

## Table Events vs. Domain Events

### Limitations of Table-Level CDC
Traditional Change Data Capture (CDC) streams database operations directly:
```
Table A INSERT
Table B UPDATE
Table C INSERT
```
This approach presents several challenges:
- **Lack of Semantics**: Tables are storage units, not necessarily business facts.
- **Fragmentation**: A single business action (e.g., "Order Placed") often splits across multiple tables (Orders, Inventory, Payments).
- **Unstable Ordering**: Reassembling the sequence of cross-table writes is complex and error-prone.
- **Downstream Burden**: Data engineers must reconstruct business logic and guess join conditions in every downstream pipeline.

### The Domain Event Approach
Instead of replicating storage details, Watchmen encourages extracting complete business events based on the domain model at the moment of ingestion.

**Example: OrderPlaced Event**
```
OrderPlaced
- Order Details
- Customer Profile snapshot
- Line Items
- Payment Status
- Shipping Address
```

This structure achieves three objectives:
1.  **Encapsulates Semantics**: The event carries the full context of the business action.
2.  **Pre-defined Relationships**: Cross-table relationships are resolved at definition time, not query time.
3.  **Consumer-Ready**: Downstream systems receive complete facts without needing complex joins.

## Engineering Benefits

### Model-Defined Joins
In table-level CDC, joins are often implemented repeatedly and inconsistently across different pipelines. In the domain-model approach, joins are defined once during event construction. This creates a single source of truth for data relationships, making the system testable and versionable.

### Consistency and State Management
Table-level streams often expose intermediate, inconsistent states (e.g., an order created but not yet paid). Domain events are emitted only when the business transaction is complete, ensuring that downstream systems process only valid, consistent facts. This is critical for real-time KPIs and risk control.

### Alignment with Decision Granularity
Business decisions depend on actions (e.g., "User Churned"), not database updates (e.g., "Status column changed to 0"). Domain events naturally align data engineering with business decision-making processes.

## Operational Impact

### For Business Analysts
The shift simplifies data consumption. Analysts work with recognizable business concepts ("Order Placed") rather than deciphering complex schemas and join logic ("Order Table + Inventory Table + Log Table").

### For Data Engineers
While this approach requires more upfront effort in domain modeling and governance, it significantly reduces long-term maintenance costs. It accelerates downstream development, reduces bug density, and ensures metric definitions converge.

## Key Requirements

To successfully implement this strategy, the architecture must support:

1.  **Versioning**: Domain models evolve. The system must handle schema evolution (e.g., v1/v2 events) to prevent breaking downstream consumers.
2.  **Raw Data Retention**: Domain events are derived. The system must retain the raw CDC stream to allow for lineage tracing, error correction, and replaying history.
3.  **Declarative Events**: Events should represent facts (`OrderPlaced`, `PaymentReceived`), not computed derivatives (`MonthlySalesCalculated`).

## Strategic Value

In complex scenarios like Retail or Insurance, structural data integrity is paramount. A unified `OrderPlaced` event can simultaneously power:
- Sales Performance Analysis
- Inventory Optimization
- Marketing Automation
- AI Model Training

This eliminates the need for each subsystem to independently reconstruct the data state, ensuring consistency across the enterprise.




