## DataMO User Scenarios

### Data Preparation Scenarios
- Integrate customer data warehouse
- Integrate customer BI
- Integrate customer downstream systems
    - Finance
    - IFRS17
    - Third-party data integration
    - Regulatory

#### Scenario 1 ： DataLake or Datawarehouse integration
DataMO provides ODS
ODS mainly solves the following problems:
- Shields the data analysis difficulties caused by InsureMO's dynamization and microservices, provides a relatively stable data interface layer, provides complete data documentation, ER diagrams, and can support rapid changes due to DataMO's platform capabilities
- ODS completes data extraction from different databases, supports stream processing or batch processing
- ODS performs some data cleaning, flattens dynamic fields, merges some one-to-one tables, such as merging customer roles, to facilitate query analysis

For example, HSBC, DataMO provides ODS and business support to help the customer's data team integrate data into the customer's data platform

Currently supported ODS default assets: Gemini, GI (Easy PA, BCP, Claim and RI), digital core of GI (Middle East version), JPMO, Taicloud, NA Cloud, and the legacy system Life v3 by default

#### Scenario 2 : DataMart integration
Access  downstream or analysis systems through Datamart
DataMO provides ODS and DataMart
Differences between DataMart and ODS for accessing downstream systems:

ODS:
- Batch import
- Does not support stream processing
- High complexity, high cognitive cost

DataMart:
- Supports stream processing
- Built based on domains, fewer dependencies, easy to understand
- Supports quality control files, regular validation with downstream systems
- Supports direct reporting, supports queries

Datamart currently supports GIMO, Gemini
GIMO:
- [Content to be added]

Gemini:
- [Content to be added]

#### Scenario 3 : Data Orchestration
Some data needs to access external data sources
DataMO provides ODS and Datamart and accesses third-party data through data orchestration in data pipelines

For example: In data processing, access third-party databases to query some non-PII customer information

#### Scenario 4 : Ibooking Data Validation
External data access with validation + process validation
Access customer data through Ibooking service
Current customers: Japan AU and AIG New Zealand

#### Scenario 5 : Downstream data integration

General ledger integration builds accounting subject mapping in DataMO
Currently, this is completed by the Japan AU project itself based on DataMO

#### Scenario 6 : Multi-department collaboration


### Traditional Reports
- Support most reporting needs through Gemini report module (refers to migration support that depends on DataMO and URP)
- Support customer's customized reporting needs through DataMO's Datamart module, such as accessing Power BI or AWS QuickSight

### Data BI Scenarios
- Support customer's customized BI needs through DataMO's Datamart module, such as accessing Power BI or AWS QuickSight
- Customized analysis scenarios, build analysis apps through InsureMO, such as claims and sales data analysis applications built through D9

### AI Analysis
- Hypothesis analysis platform, automatically build analysis reports from scenarios to hypotheses to indicators through AI, and provide ask for report services

### Roadmap:
- Ingestion module Web  2025 Q3 
- AI analysis  2025 Q4 
- Gemini Metrics Asset Based on Datamart 2025 Q4 
- GIMI Metrics Asset Based on Datamart   2026 Q1 


