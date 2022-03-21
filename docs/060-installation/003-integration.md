---
id: integration  
title: Integration    
sidebar_position: 3  
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

- [Metabase](https://www.metabase.com/)
- [Superset](https://superset.apache.org/)

:::info Connect BI to Trino (If it is enabled) or storage directly.
:::