---
id: config
title: Configuration
sidebar_position: 10
---

# Configuration

## Utilities

Utilities settings are available for all modules.

| Key                      | Type | Default Value                                                                       | Possible Values                 | For |
|--------------------------|------|-------------------------------------------------------------------------------------|---------------------------------|-----|
| LOGGER_LEVEL             | str  | ERROR                                                                               | DEBUG, INFO, WARN, ERROR, FATAL |     |
| LOGGER_TO_FILE           | bool | False                                                                               | True/False                      |     |
| LOGGER_FILE              | str  | temp/rotating.log                                                                   |                                 |     |
| LOGGER_FILE_SIZE         | int  | 10242880                                                                            |                                 |     |
| LOGGER_FILE_BACKUP_COUNT | int  | 5                                                                                   |                                 |     |
| LOGGER_FILE_ENCODING     | str  | utf-8                                                                               |                                 |     |
| LOGGER_JSON_FORMAT       | bool | False                                                                               | True/False                      |     |
| LOGGER_FORMAT            | str  | %(asctime)s - %(process)d - %(threadName)s - %(name)s - %(levelname)s - %(message)s |                                 |     |

## Storage

Storage settings are available for all modules.

| Key                     | Type | Default Value | Possible Values | For |
|-------------------------|------|---------------|-----------------|-----|
| DECIMAL_INTEGRAL_DIGITS | int  | 24            |                 |     |
| DECIMAL_FRACTION_DIGITS | int  | 8             |                 |     |

:::tip  
Settings of decimal digits are used in MySQL only for cast string value to decimal value.
:::

## Meta

| Key                                               | Type | Default Value | Possible Values               | For                                                  |
|---------------------------------------------------|------|---------------|-------------------------------|------------------------------------------------------|
| SUPER_ADMIN_TENANT_ID                             | str  | 1             |                               |                                                      |
| SUPER_ADMIN_USER_ID                               | str  | 1             |                               |                                                      |
| SUPER_ADMIN_USER_NAME                             | str  | imma-super    |                               |                                                      |
| SUPER_ADMIN_USER_NICKNAME                         | str  | IMMA Super    |                               |                                                      |
| META_STORAGE_TYPE                                 | str  | mysql         | mysql, oracle, mongodb, mssql |                                                      |
| META_STORAGE_USER_NAME                            | str  | watchmen      |                               |                                                      |
| META_STORAGE_PASSWORD                             | str  | watchmen      |                               |                                                      |
| META_STORAGE_HOST                                 | str  | localhost     |                               |                                                      |
| META_STORAGE_PORT                                 | int  | 3306          |                               |                                                      |
| META_STORAGE_NAME                                 | str  | watchmen      |                               |                                                      |
| META_STORAGE_ECHO                                 | bool | False         | True/False                    | Enable meta storage sql logging                      |
| SNOWFLAKE_DATA_CENTER_ID                          | int  | 0             | 0 ~ 3                         | Data center id                                       |
| SNOWFLAKE_WORKER_ID                               | int  | 0             | 0 ~ 1023                      | Worker id                                            |
| SNOWFLAKE_COMPETITIVE_WORKERS                     | bool | True          | True/False                    | Enable competitive snowflake worker                  |
| SNOWFLAKE_COMPETITIVE_WORKER_HEART_BEAT_INTERVAL  | int  | 60            |                               | Competitive worker heart beat interval, in seconds   |
| SNOWFLAKE_COMPETITIVE_WORKER_CREATION_RETRY_TIMES | int  | 3             |                               | Competitive worker creation max retry times          |
| SNOWFLAKE_COMPETITIVE_WORKER_RESTART_ON_SHOWDOWN  | bool | False         | True/False                    | Competitive worker restart automatically on shutdown |
| ENGINE_INDEX                                      | bool | True          | True/False                    | Enable meta data auto index                          |

## Data Kernel

| Key                              | Type     | Default Value                                                                                         | Possible Values | For                                                                                                                    |
|----------------------------------|----------|-------------------------------------------------------------------------------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------------|
| STORAGE_ECHO                     | bool     | False                                                                                                 | True/False      | Enable data storage sql logging                                                                                        |
| FULL_DATETIME_FORMATS            | Set[str] | %Y%m%d%H%M%S%f,<br/>%d%m%Y%H%M%S%f,<br/>%m%d%Y%H%M%S%f                                                |                 | Follow python date time formats, `%z` is also supported                                                                |
| DATETIME_FORMATS                 | Set[str] | %Y%m%d%H%M%S,<br/> %d%m%Y%H%M%S,<br/> %m%d%Y%H%M%S,<br/> %Y%m%d%H%M,<br/> %d%m%Y%H%M,<br/> %m%d%Y%H%M |                 | Follow python date time formats, `%z` is also supported                                                                |
| DATE_FORMATS                     | Set[str] | %Y%m%d,<br/>%d%m%Y,<br/>%m%d%Y                                                                        |                 | Follow python date time formats                                                                                        |
| TIME_FORMATS                     | Set[str] | %H%M%S,<br/>%H%M                                                                                      |                 | Follow python date time formats                                                                                        |
| ABANDON_DATE_TIME_ON_PARSE_FAIL  | bool     | False                                                                                                 | True/False      | Abandon value or not when it cannot be parsed to date or time by designated factor type,<br/>works only on topic data. |
| ENCRYPT_AES_KEY                  | str      | 32 chars str                                                                                          |                 | Default AES key,<br/><strong>MUST BE REPLACED</strong>                                                                 |
| ENCRYPT_AES_IV                   | str      | 16 chars str                                                                                          |                 | Default AES iv,<br/><strong>MUST BE REPLACED</strong>                                                                  |
| IGNORE_DEFAULT_ON_RAW            | bool     | True                                                                                                  | True/False      | Default value of factor will be ignored on the raw topic                                                               |
| KERNEL_CACHE                     | bool     | True                                                                                                  | True/False      | Enable kernel cache, keep it enabled in production                                                                     |
| KERNEL_CACHE_HEART_BEAT          | bool     | True                                                                                                  | True/False      | Enable kernel cache heart beat, keep it disabled in production                                                         |
| KERNEL_CACHE_HEART_BEAT_INTERVAL | int      | 60                                                                                                    |                 | Cache heart beat interval, in seconds                                                                                  |
| SYNC_TOPIC_TO_STORAGE            | bool     | False                                                                                                 | True/False      | Synchronize topic structure change to storage entity                                                                   |
| REPLACE_TOPIC_TO_STORAGE         | bool     | False                                                                                                 | True/False      | Force replace existing topic entity (drop and recreate)                                                                |

## Data Surface

| Key                 | Type | Default Value | Possible Values | For                                 |
|---------------------|------|---------------|-----------------|-------------------------------------|
| TRUNCATE_TOPIC_DATA | bool | True          | True/False      | Enable topic data truncate rest api |

## Inquiry Trino

| Key            | Type          | Default Value | Possible Values | For |
|----------------|---------------|---------------|-----------------|-----|
| TRINO_HOST     | str           | 127.0.0.1     |                 |     |
| TRINO_PORT     | int           | 5678          |                 |     |
| TRINO_USER     | str           | admin         |                 |     |
| TRINO_PASSWORD | Optional[str] | None          |                 |     |

## Inquiry Kernel

| Key                  | Type | Default Value | Possible Values | For                                                                                             |
|----------------------|------|---------------|-----------------|-------------------------------------------------------------------------------------------------|
| USE_STORAGE_DIRECTLY | bool | True          | True/False      | Enable use storage directly for inquiry, save Trino cost when all topics are from same storage. |
| TRINO                | bool | True          | True/False      | Enable Trino                                                                                    |

## Inquiry Surface

| Key                   | Type | Default Value | Possible Values | For                               |
|-----------------------|------|---------------|-----------------|-----------------------------------|
| DATASET_PAGE_MAX_ROWS | int  | 10000         |                 | Default max rows for dataset page |

## Pipeline Kernel

| Key                                        | Type          | Default Value | Possible Values | For                                                             |
|--------------------------------------------|---------------|---------------|-----------------|-----------------------------------------------------------------|
| DECRYPT_FACTOR_VALUE                       | bool          | False         | True/False      | Decrypt encrypted factor value on read                          |
| PIPELINE_PARALLEL_ACTIONS_IN_LOOP_UNIT     | bool          | False         | True/False      |                                                                 |
| PIPELINE_PARALLEL_ACTIONS_COUNT            | int           | 8             |                 |                                                                 |
| PIPELINE_PARALLEL_ACTIONS_DASK_TEMP_DIR    | Optional[str] | None          |                 |                                                                 |
| PIPELINE_PARALLEL_ACTIONS_DASK_USE_PROCESS | bool          | True          | True/False      |                                                                 |
| PIPELINE_STANDARD_EXTERNAL_WRITER          | bool          | True          | True/False      |                                                                 |
| PIPELINE_ELASTIC_SEARCH_EXTERNAL_WRITER    | bool          | False         | True/False      |                                                                 |
| PIPELINE_UPDATE_RETRY                      | bool          | True          | True/False      | Enable pipeline update retry if it is failed on optimistic lock |
| PIPELINE_UPDATE_RETRY_TIMES                | int           | 3             |                 | Optimistic lock retry times                                     |
| PIPELINE_UPDATE_RETRY_INTERVAL             | int           | 10            |                 | Retry interval in milliseconds                                  |
| PIPELINE_UPDATE_RETRY_FORCE                | bool          | True          | True/False      | Enable force retry after all retries failed                     |
| PIPELINE_ASYNC_HANDLE_MONITOR_LOG          | bool          | True          | True/False      | Handle monitor log (might with pipelines) asynchronized         |

## Pipeline Surface

| Key                    | Type | Default Value  | Possible Values | For                                   |
|------------------------|------|----------------|-----------------|---------------------------------------|
| RABBITMQ_CONNECTOR     | bool | False          | True/False      | Enable trigger pipeline from RabbitMQ |
| RABBITMQ_HOST          | str  | Empty string   |                 |                                       |
| RABBITMQ_PORT          | str  | 5672           |                 |                                       |
| RABBITMQ_USERNAME      | str  | Empty string   |                 |                                       |
| RABBITMQ_PASSWORD      | str  | Empty string   |                 |                                       |
| RABBITMQ_VIRTUALHOST   | str  | Empty string   |                 |                                       |
| RABBITMQ_QUEUE         | str  | Empty string   |                 |                                       |
| RABBITMQ_DURABLE       | bool | True           | True/False      |                                       |
| RABBITMQ_AUTO_DELETE   | bool | False          | True/False      |                                       |
| KAFKA_CONNECTOR        | bool | False          | True/False      | Enable trigger pipeline from Kafka    |
| KAFKA_BOOTSTRAP_SERVER | str  | localhost:9092 |                 |                                       |
| KAFKA_TOPICS           | str  | Empty string   |                 |                                       |

## Rest

| Key                         | Type     | Default Value                         | Possible Values | For                                                    |
|-----------------------------|----------|---------------------------------------|-----------------|--------------------------------------------------------|
| APP_NAME                    | str      | Watchmen REST App                     |                 | Application name                                       |
| VERSION                     | str      | 16.0.0                                |                 | Application version                                    |
| DESCRIPTION                 | str      | A lighter platform for data analytics |                 | A short description of application                     |
| API_VERSION_STR             | str      | Empty str                             |                 | For FastAPI docs                                       |
| JWT_SECRET_KEY              | str      | 43 chars string                       |                 | Default JWT key,<br/><strong>MUST BE REPLACED</strong> |
| JWT_ALGORITHM               | str      | HS256                                 |                 |                                                        |
| ACCESS_TOKEN_EXPIRE_MINUTES | int      | 11520                                 |                 |                                                        |
| CORS                        | bool     | True                                  | True/False      |                                                        |
| CORS_ALLOWED_ORIGINS        | Set[str] | \*                                    |                 |                                                        |
| CORS_ALLOW_CREDENTIALS      | bool     | True                                  |                 |                                                        |
| CORS_ALLOWED_METHODS        | Set[str] | \*                                    |                 |                                                        |
| CORS_ALLOWED_HEADERS        | Set[str] | \*                                    |                 |                                                        |
| PROMETHEUS                  | bool     | False                                 | True/False      |                                                        |
| PROMETHEUS_CONTEXT          | str      | /metrics                              |                 |                                                        |

## Rest Doll

| Key                                             | Type | Default Value | Possible Values       | For                                                                   |
|-------------------------------------------------|------|---------------|-----------------------|-----------------------------------------------------------------------|
| APP_NAME                                        | str  | Watchmen Doll |                       | Overwrite Rest's                                                      |
| TUPLE_DELETABLE                                 | bool | False         | True/False            | Enable tuple deletable rest apis                                      |
| CREATE_PIPELINE_MONITOR_TOPICS_ON_TENANT_CREATE | bool | True          | True/False            | Enable create pipeline monitor log topics on create tenant            |
| CREATE_DQC_TOPICS_ON_TENANT_CREATE              | bool | True          | True/False            | Enable create DQC topics on create tenant                             |
| SSO_ON                                          | bool | False         | True/False            | Enable SSO integration                                                |
| SSO_PROVIDER                                    | str  | saml2         | saml2                 | single sign-on (SSO) login protocol                                   |
| SAML_STRICT                                     | bool | True          | True/False            | If strict is True, then the Python Toolkit will reject unsigned       |
| SAML_DEBUG                                      | bool | True          | True/False            | Enable debug mode (outputs errors).                                   |
| SAML_IDP_ENTITY_ID                              | str  |               |                       | Identifier of the IdP entity                                          |
| SAML_IDP_SSO_URL                                | str  |               | URL                   | URL Target of the IdP where the Authentication Request Message        |
| SAML_IDP_SSO_BINDING                            | str  | HTTP-Redirect | SAML binding standard | SAML protocol binding to be used when returning                       |
| SAML_IDP_X509CERT                               | str  |               |                       | Public X.509 certificate of the IdP                                   |
| SAML_SP_ENTITY_ID                               | str  |               |                       | Identifier of the SP entity                                           |
| SAML_SP_ASSERT_URL                              | str  |               | URL                   | URL Location where the &lt;Response&gt; from the IdP will be returned |
| SAML_SP_ASSERT_BINDING                          | str  | HTTP-Redirect | SAML binding standard | SAML protocol binding to be used when returning                       |
| SAML_SP_X509CERT                                | str  |               |                       | X.509 certificate of the SP                                           |

## DQC

| Key                            | Type | Default Value | Possible Values | For                                                                        |
|--------------------------------|------|---------------|-----------------|----------------------------------------------------------------------------|
| MONITOR_JOBS                   | bool | False         | True/False      | Enable DQC jobs                                                            |
| MONITOR_JOB_TRIGGER            | str  | cron          |                 | Job trigger scheduler                                                      |
| MONITOR_JOB_DAILY_DAY_OF_WEEK  | str  | mon-sun       |                 | Cron daily                                                                 |
| MONITOR_JOB_DAILY_HOURS        | int  | 0             |                 | Trigger hour of daily job                                                  |
| MONITOR_JOB_DAILY_MINUTES      | int  | 1             |                 | Trigger minute of daily job                                                |
| MONITOR_JOB_WEEKLY_DAY_OF_WEEK | str  | sun           |                 | Cron weekly, assume week starts from sunday                                |
| MONITOR_JOB_WEEKLY_HOURS       | int  | 0             |                 | Trigger hour of daily job                                                  |
| MONITOR_JOB_WEEKLY_MINUTES     | int  | 1             |                 | Trigger hour of daily job                                                  |
| MONITOR_JOB_MONTHLY_DAY        | int  | 1             |                 | Cron mongly                                                                |
| MONITOR_JOB_MONTHLY_HOURS      | int  | 0             |                 | Trigger hour of daily job                                                  |
| MONITOR_JOB_MONTHLY_MINUTES    | int  | 1             |                 | Trigger hour of daily job                                                  |
| MONITOR_RESULT_PIPELINE_ASYNC  | bool | False         | True/False      | Enable asynchronized pipeline trigger for data which produced by DQC rules |

## Rest DQC

| Key      | Type | Default Value | Possible Values | For              |
|----------|------|---------------|-----------------|------------------|
| APP_NAME | str  | Watchmen DQC  |                 | Overwrite Rest's |
