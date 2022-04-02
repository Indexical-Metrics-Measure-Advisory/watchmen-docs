---
id: integration  
title: Integration    
sidebar_position: 40  
---

# Integration

## PAT Token

- Login with admin user,
- Go to [**Setting**],
- Generate `PAT` with name,
- Copy `PAT` token.

## Collection

### API for import raw data, trigger pipeline

```python
headers["authorization"] = "pat " + token
event_data = {
	'code': 'event_code',       # raw topic name
	'data': {                   # raw topic data
		# ...data
	},
	'triggerType': 'insert'     # always be insert for raw data
}

response = requests.post(
	'http://localhost:8000/pipeline/data', data=json.dumps(event_data), headers=headers)
return response.json()
```

:::tip Or use `/pipeline/data/async`, it returns once data saved and trigger pipelines processing asynchronously.
:::

### Via Other Middleware

#### Kafka

Send raw data to topic (KAFKA_TOPICS)

```json5
{
	"code": "a_topic",
	"data": {
		// ...
	},
	"triggerType": "insert-or-merge",
	"tenantId": "1",
	"traceId": "1",
	"pat": "..."
}
```

Visit **[here](../doll/pipeline-service#pipeline-trigger)** for description of properties. And for Kafka, one more property `pat` is
required.

#### Rabbit Mq

Send raw data to queue with exchange.

```json5
{
	"code": "a_topic",
	"data": {
		// ...
	},
	"triggerType": "insert-or-merge",
	"tenantId": "1",
	"traceId": "1",
	"pat": "..."
}
```

Visit **[here](../doll/pipeline-service#pipeline-trigger)** for description of properties. And for RabbitMQ, one more property `pat` is
required.

## Third Party BI

- [Holistics](https://www.holistics.io/blog/the-most-powerful-bi-reporting-tools-for-presto/)
- [Looker](https://docs.looker.com/setup-and-management/database-config/prestodb)
- [Sisense](https://www.sisense.com/data-connectors/presto/)
- [Tableau](https://help.tableau.com/current/pro/desktop/en-us/examples_presto.htm)
- [Metabase](https://www.metabase.com/data_sources/presto)
- [Superset](https://superset.apache.org/docs/databases/presto)
- [Redash](https://redash.io/data-sources/presto)

:::info  
Connect BI to Trino (If it is enabled) or storage directly.
:::

And use Starburst ODBC driver,

- [Qlik](https://help.qlik.com/en-US/connectors/Subsystems/ODBC_connector_help/Content/Connectors_ODBC/Presto/Create-Presto-connection.htm)
- [PowerBI](https://docs.starburst.io/data-consumer/clients/powerbi.html)
