Title  
How to Reduce Recognition Complexity in Data Ingestion

Subtitle  
Design patterns for turning messy source systems into simple, trustworthy ingestion flows.

Suggested Tags  
Data Engineering, ETL, CDC, Data Modeling, SaaS

Body  

If you work on data platforms long enough, you eventually realize that **ingestion is not just about moving data**. It is about **recognizing what the data actually means**.

That recognition step is where most of the hidden complexity lives:

- Which tables belong to which business domain?
- Which flags and status codes are actually used, and which are historical noise?
- Which fields can we trust as keys, and which are “best effort”?
- How do we stitch CDC streams, files, and APIs into one coherent picture?

If you don’t solve this “recognition complexity” well, your ingestion layer becomes a museum of ad‑hoc scripts, one‑off mappings, and fragile pipelines. Every new source feels like starting from zero.

In this article, I’ll share how we approach this problem in Watchmen’s Collector, and a set of patterns you can apply even if you’re not using Watchmen.

---

## The Real Problem: Recognition, Not Just Extraction

Most ingestion stacks focus on **how** to read data:

- Connectors for different databases and SaaS tools,
- CDC vs batch,
- File formats: CSV, Parquet, JSON, etc.

Those are necessary, but they don’t address the hardest part:

> “Given all these tables/files/topics, which ones matter, how do they relate, and what business facts do they represent?”

We call this the **recognition problem**.

Symptoms that recognition complexity is out of control:

- Your ingestion DAG is a tangled graph of table‑level jobs with cryptic names.
- Adding a new domain requires reading tribal knowledge from three different engineers.
- The same source field is interpreted differently in three different pipelines.
- Every time an upstream schema changes, downstream teams spend weeks “fixing mappings”.

The question is: how do we design ingestion so that **recognition is simple, repeatable, and explicit**?

---

## Pattern 1: Separate “Source View” from “Domain View”

The first step is conceptual: stop treating source tables as your primary model.

Instead, we separate the world into two layers:

- **Source View**  
  How data physically exists in each system: tables, columns, formats, APIs.

- **Domain View**  
  How the business thinks about reality: Orders, Customers, Policies, Claims, Events.

In Watchmen’s Collector, this is reflected as:

- **Tables**: configuration of how to extract from a specific source (DB table, file path, topic).
- **Models**: domain‑level entities and mappings that describe what those sources mean.

Extraction is about the Source View. Recognition happens in the mapping from Source View to Domain View.

Practical implications:

- Naming conventions and contracts live at the **Model** level, not at the table level.
- When a source system changes, you adjust the Source View configuration and remap to the same Model, rather than rewriting everything downstream.

---

## Pattern 2: Introduce Ingestion Modules per Domain

Another common source of complexity is mixing multiple business domains in the same ingestion DAG.

Payments, Orders, Users, and Logs end up as one giant graph of jobs. It’s hard to answer simple questions like:

- “Is the Orders domain ingestion healthy right now?”
- “Which tables/files belong to the Policy domain?”

To reduce this, we group everything by **Module**:

- A **Module** is a coherent ingestion domain (e.g., “GL”, “Policy”, “Customer 360”).
- Each module contains its own models, tables, and configuration.

This yields a few benefits:

- You can reason about ingestion **per domain** instead of staring at a global DAG.
- Ownership becomes clearer: you can assign module‑level ownership to teams.
- Experiments and configuration changes are isolated: tweaking batch size for GL ingestion does not affect Customer ingestion.

In Watchmen, the Collector UI literally surfaces Modules as first‑class cards: you click into one module and see only the models, tables, and tasks relevant to that domain.

---

## Pattern 3: Make Mapping Explicit and Validated

Mapping is where recognition happens:

- Which source fields map to which domain attributes?
- How do we convert types, normalize codes, and handle nulls?

In many stacks, this mapping is buried in custom scripts or scattered SQL. That makes it hard to:

- Understand what a pipeline is really doing,
- Detect breaking changes early,
- Reuse mappings across pipelines.

Instead, treat mapping as a **first‑class artifact**:

- Define mappings at the Model level:  
  “This domain attribute comes from this source field, with this transformation.”
- Validate mappings before you connect them to actual tables.
- Version mappings as your domain evolves.

This reduces recognition complexity because:

- New engineers can read the Model and immediately see how data is interpreted.
- When a source schema changes, you see exactly which models and attributes are affected.
- You can test mapping correctness independently from the extraction implementation.

---

## Pattern 4: Design Ingestion as Tasks, Not Scripts

Recognition complexity grows when ingestion logic is hidden inside long‑running scripts with too much responsibility.

We prefer to think in terms of **tasks**:

- “Extract full customer snapshot from System A”
- “Capture incremental changes for Orders from binlog”
- “Normalize GL entries and write domain events”

Each task has:

- A clear trigger (manual, cron, or event‑based),
- A well‑defined scope (module, model, table),
- A lifecycle (pending, running, succeeded, failed),
- Metrics and logs.

Organizing ingestion as tasks brings several advantages:

- You can trace exactly what ran, when, and with which configuration.
- Retries and backoff policies are handled centrally rather than re‑implemented in every script.
- It becomes much easier to answer “what is the ingestion status for this domain?”.

In Watchmen Collector, the Surface layer exposes routes for configuring, triggering, and monitoring tasks, and the Kernel executes them with a unified runtime.

---

## Pattern 5: Normalize Early, Deliver Flexibly

A lot of recognition complexity comes from trying to support many different targets and consumers directly from raw sources.

Instead, we aim for:

1. **Normalize as early as possible**  
   - Turn raw source records into a unified event or domain record,  
   - Apply mappings, type corrections, and basic validation.

2. **Deliver to multiple targets from the normalized form**  
   - Warehouse (for analytics),
   - Queue or topic (for real‑time consumers),
   - Downstream APIs or services.

By separating normalization from delivery:

- Recognition complexity is dealt with once, in a controlled place.
- Adding a new target (a new warehouse, a new queue) doesn’t require touching source‑level logic.
- Your ingestion pipeline becomes more robust to change: as long as you maintain the normalized form, consumers can evolve independently.

---

## Putting It All Together in a SaaS Data Platform

In a SaaS setting, you typically have:

- Many tenants,
- Many different source systems,
- A small platform team trying to provide consistent ingestion patterns.

Recognition complexity scales with:

- The number of domains,
- The diversity of source schemas,
- The number of teams interpreting the same data.

The patterns above help you keep that under control:

- **Modules** give each domain a clear boundary.
- **Models** and explicit mappings document what the data actually means.
- **Tasks** provide a unified runtime and monitoring model.
- **Early normalization** turns messy sources into a stable contract.

This is the philosophy behind Watchmen’s Collector: it is not just a connector layer; it is a **recognition layer** for your data platform.

---

## Final Thoughts

If ingestion feels hard, it is probably not because your connectors are bad. It is because recognition—the act of understanding and encoding what data means—has been left implicit.

By:

- Separating source view from domain view,
- Grouping ingestion into domain modules,
- Making mappings explicit and validated,
- Treating ingestion as tasks instead of scripts,
- Normalizing early and delivering flexibly,

you can dramatically reduce recognition complexity in your ingestion layer.

The result is a platform where:

- New sources feel like extension, not reinvention,
- New team members can understand ingestion flows by reading models and tasks,
- And your downstream analytics and decision systems finally sit on top of data that everyone agrees on.

