# DataMO - Legal Review Questionnaire Responses

## A. Data Flow & Architecture

**1. Describe the data lifecycle in DataMO:**

*   **a. Ingestion:**
    *   DataMO supports data ingestion from various sources including customer Data Warehouses, Business Intelligence (BI) systems, and downstream systems (Finance, IFRS17, Regulatory, etc.).
    *   It supports both stream processing and batch processing modes.
    *   *Reference: Docs - Data Development / Ingestion*

*   **b. Transform:**
    *   DataMO provides an **ODS (Operational Data Store)** layer.
    *   Data cleaning, dynamic field flattening, and table merging are performed via configured **Pipelines**.
    *   It standardizes data into defined **Topics** and **Factors**.

*   **c. Storage:**
    *   Data is stored in the underlying database infrastructure.
    *   Supported storage engines include **MySQL, Oracle, MSSQL, and PostgreSQL**.
    *   Data is organized into Data Domains and Topics.
    *   *Reference: Docs - Data Service / Storage*

*   **d. Output:**
    *   Processed data is exposed via **DataMart** or ODS for downstream usage.
    *   It supports direct reporting and queries.

*   **e. Exit:**
    *   Data leaves the environment via API exports, database dumps, or integration with downstream systems.

*   **f. Governance/ Security/ Observability:**
    *   **Governance:** Managed via the Meta Service, defining Topics, Pipelines, and Data Sources.
    *   **Security:** Access is controlled via Role-Based Access Control (RBAC) (Super Admin, Tenant Admin, User).
    *   **Observability:** The system includes a **Monitor Logs** module that tracks pipeline execution, data changes, and system errors.
    *   *Reference: Docs - Admin / Monitor Logs*

**2. DataMO connects to many analytics and reporting tools. Are these tools under the client’s control or InsureMO’s control?**

*   These tools (e.g., Power BI, AWS QuickSight) are typically under the **client's control**. DataMO acts as the data source, and the client contracts with the third-party tool providers directly to connect to DataMO's DataMart.

---

## B. Data storage and Residency

**1. On which cloud provider (IaaS) and in which country is DataMO deployed?**

*   DataMO is infrastructure-agnostic. It is containerized (Docker/Kubernetes) and can be deployed on **any major cloud provider (AWS, Azure, GCP)** or on-premise private clouds.
*   The specific country/region depends on the client's deployment choice.

**2. Can clients choose a single country/ region to process their data?**

*   **Yes.** Since DataMO supports private or region-specific deployments, clients can choose to deploy the instance and its database solely within a specific region (e.g., Singapore only) to ensure data sovereignty.

**3. Does DataMO store data separately for each client (logical and/or physical tenant isolation)?**

*   **Yes.** DataMO supports **Multi-tenancy**.
    *   **Logical Isolation:** The data model is designed with `Tenant Based` architecture (Tenant ID separation) within the same instance.
    *   **Physical Isolation:** For strict requirements, a dedicated instance (Physical Isolation) can be deployed for a single client.
    *   *Reference: Docs - Data Service / Model / Tenant Based*

**4. Does DataMO keep any live or backup copies of client data in the same or other country?**

*   This depends on the infrastructure configuration.
*   Backup strategies (snapshots, cross-region replication) are handled by the underlying database service (e.g., AWS RDS). Clients can request configuration to keep backups within the same country to meet residency laws.

**5. If asked by a client/ regulator, can we show evidence of data residency?**

*   **Yes.** Evidence can be provided via cloud provider configuration screenshots (e.g., AWS Region settings) and database connection logs showing the hosting location.

---

## C. Security and Encryption

**1. Is all client data encrypted at rest and in transit? Briefly describe methods.**

*   **At Rest:** Yes.
    *   **Database Level:** Supports Transparent Data Encryption (TDE) provided by the underlying database (MySQL/Oracle).
    *   **Application Level:** DataMO supports AES encryption configuration (`DATASOURCE_AES_ENABLED`, `ENCRYPT_AES_KEY`) for sensitive data fields.
*   **In Transit:** Yes. All web traffic and API calls are secured via **HTTPS/TLS**.
*   *Reference: Docs - Configuration / Security*

**2. Who controls encryption keys – InsureMO or client (BYOK)?**

*   **Configurable.**
    *   The system configuration allows specifying `DATASOURCE_AES_KEY` and `DATASOURCE_AES_IV`.
    *   In a dedicated/private deployment, the **client** can control these keys (BYOK).
    *   In a SaaS shared model, InsureMO typically manages the keys.

---

## D. Access Control & Logging

**1. Which InsureMO internal roles (employees) can access client data?**

*   Access is restricted to authorized operations personnel (e.g., SREs) and is governed by internal access policies.
*   System roles include `Super Admin` (Platform level) and `Tenant Admin` (Client level).

**2. Is there a ticket or approval process before an InsureMO employee can access live client data?**

*   *(Operational Procedure)*: Typically, yes. Direct access to production databases requires a privileged access management (PAM) request or internal ticket approval.

**3. What is logged by default? How long are logs kept?**

*   **Logged:** System errors, pipeline execution status, data change capture (if configured), and user login activities.
*   **Retention:** Configurable via `LOGGER_FILE_BACKUP_COUNT` and database retention policies for audit logs.
*   *Reference: Docs - Utilities / Logging*

---

## E. Data Handling & Processing

**1. Is metadata/ telemetry stored separately from client data?**

*   **Yes.** The architecture explicitly separates **Meta Service** (definitions, logic) from **Data Service** (business data). They can be stored in different databases.
*   *Reference: Docs - Data Service / Meta Service*

**2. Does InsureMO use metadata or telemetry for service improvement?**

*   InsureMO may use aggregated, non-personally identifiable metadata (e.g., system performance metrics, error rates) for platform stability and improvement.

**3. Is production client data ever copied into test/ dev environments?**

*   **No automatic copying.** DataMO includes a **Simulator** module to generate mock data or test pipelines without using live production data. Any copying of production data would require explicit manual action and client consent.

**4. Does DataMO create derived or aggregated datasets?**

*   **Yes.** Through the ODS and DataMart processes, derived datasets (aggregated metrics, indicators) are created.
*   **Ownership:** Typically belongs to the client.
*   **Deletion:** Deleted upon contract exit along with the raw data.

---

## F. AI & Analytics

**1. Does DataMO use client data for service improvement or to train any AI/ ML model?**

*   **No.** Client data is used solely to provide the service to the client. There is no usage of client data to train shared/global AI models without explicit consent.

**2. Is client data anonymized or aggregated before use?**

*   If specific AI features are enabled (e.g., for reporting analysis), data is processed within the context of that request.

**3. Are there any AI features within DataMO?**

*   **Yes.** The roadmap includes an "AI Hypothesis Platform" and "Ask for Report" features (Generative AI for analytics).
*   These are **optional** modules.

**4. If LLM or NLP models are used, are they hosted within InsureMO’s controlled environment?**

*   This is configurable.
    *   **Option A:** Integration with public APIs (e.g., OpenAI) - Data leaves the VPC (requires client consent).
    *   **Option B:** Private/Local LLM hosting - Data remains within the InsureMO VPC.

**5. Can clients disable or limit specific AI functions?**

*   **Yes.** AI features can be toggled off at the tenant or system configuration level.

**6. Are AI-generated outputs stored in DataMO?**

*   **Yes.** If an AI analysis generates a report or a derived dataset, it is stored within the DataMO DataMart, subject to the same security and retention policies as other data.

---

## G. Sub-Processors & Vendors

**1. Are there any third-party vendors DataMO relies on?**

*   **Infrastructure:** Cloud Providers (AWS, Azure, GCP).
*   **Database:** (If managed service used) Oracle, MongoDB, etc.
*   **AI:** (If enabled) OpenAI or similar providers.

**2. Do we keep a sub-processor list?**

*   *(Legal/Compliance)*: Yes, a standard sub-processor list is maintained by the legal department.

**3. Do we change or add vendors regularly?**

*   Vendors are generally stable. Any changes typically trigger a notification process as per the Master Services Agreement (MSA).

---

## H. Retention & Exit

**1. After termination, how long do we keep client data?**

*   Data is deleted in accordance with the contract (e.g., 30 days after termination).

**2. How long are backups kept, and can they be fully deleted upon request?**

*   Backups follow the retention policy (e.g., 7-30 days). They can be securely destroyed upon contract termination.

**3. Can clients easily export all their data and derived datasets?**

*   **Yes.** Data can be exported via:
    *   Database dump / Export tools.
    *   DataMart APIs.
    *   Standard file formats (CSV/JSON).

**4. Upon termination, does InsureMO also delete derived or aggregated data?**

*   **Yes.** All data linked to the client tenant, including derived datasets in the ODS/DataMart, is deleted.

---

## I. Incident Response

**1. What is our internal SLA for identifying and escalating security or data breach?**

*   *(Operational Policy)*: Typically immediate detection via monitoring tools, with escalation within hours.

**2. What is our target timeline to notify clients of a confirmed or suspected breach?**

*   *(Operational Policy)*: Standard practice is within **24 to 72 hours** (aligned with GDPR requirements).

**3. Can DataMO generate audit logs?**

*   **Yes.** The system maintains logs of user access, pipeline execution, and data modifications, which can be extracted for audit purposes.

---

## J. Certifications

**1. Does DataMO have independent third-party compliance certifications?**

*   InsureMO (the parent platform) typically holds certifications like **ISO 27001** and **SOC 2 Type II**. DataMO inherits these infrastructure security standards.
