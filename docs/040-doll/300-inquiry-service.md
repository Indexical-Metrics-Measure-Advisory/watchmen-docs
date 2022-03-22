---
id: inquiry-service  
title: Inquiry Service  
sidebar_position: 300
---

# Inquiry Service

Inquiry service is designed for serve subject and report inquiry. Subject inquiry is more like a dataset, report is higher order layer which
based on subject, additional provide aggregation and funnels.

To simplify the syntax of subject and report, one rest api is designed to fetch subject data. In this api, predefined filters from space and
subject will be applied automatically. Extra conditions can be submitted, and data columns and their aggregation arithmetic can be appointed
as well.

## Inquiry Data

### Fetch data via api

```bash
curl \
--location \ 
--request POST 'http://host:port//subject/data/criteria' \
--header 'Authorization: Bearer ...' \
--header 'Content-Type: application/json' \
--data-raw '{
	"subjectId": "1",
	"subjectName": "",
	"indicators": [
		{
			"name": "subject_column_alias",
			"arithmetic": "none"
		},
	],
	"conditions": [],
    "pageNumber": 1,
    "pageSize": 9
}'
```

Same as the first api, the response is a data page, and with same structure.

- One of `subjectId` and `subjectName` is required,
	- `subjectName` is case sensitive,
- `indicators` is an array of data columns,
- `name` of each indicator must be alias name of subject column,
- `arithmetic` of each indicator could be one of `none`/`sum`/`count`/`avg`/`max`/`min`,
	- `arithmetic` will be treated as `none` when it is lacked,
	- Aggregation arithmetic can apply to numeric value column expect `count`,
- `conditions` is an array of data criteria on `and`,
	- `conditions` is designed for supporting complex scenarios, following chapter will explain this.

:::caution  
This specific rest api is designed for web client, typically page size would be 100, therefore there is no page size limitation in server
side.
:::

### Conditions

There are two types of condition, which are joint and expression.

#### Joint

Structure of a joint should be following,

```json5
{
	"jointType": "and",
	"filters": []
}
```

- `jointType`: one of `and`, `or`,
- `filters`: set of conditions, each element could be a joint or an expression.

:::caution  
Do not submit a joint with no filters.
:::

#### Expression

Structure of an expression should be following,

```json5
{
	"left": {},
	"operator": "equals",
	"right": {}
}
```

- `left` and `right`: parameter of expression, which is an object might be one of three types,
	- factor parameter,
	- constant parameter,
	- computed parameter,
- `operator`: how to compute the expression, one of,
	- `empty`, `not-empty`,
	- `equals`, `not-equals`,
	- `less`, `less-equals`, `more`, `more-equals`,
	- `in`, `not-in`,
	- `right` is not needed when `operator` is `empty` or `not-empty`.

#### Factor Parameter

In subject inquiry, the source of data always be given subject, therefore, submit factor parameter by subject column alias.

```json5
{
	"kind": "topic",
	"factorId": "subject_column_alias"
}
```

#### Constant Parameter

Use constant value to describe a statement, it can be a static value, a list of values, a function call, etc. The basic structure should be
following,

```json5
{
	"kind": "constant",
	"value": "any_statement"
}
```

And here are some valid statements,

[//]: # (@formatter:off)
```json5
// simple static value
{ "value": "1" },
// date
{ "value": "2020/08/16" },
// call function to get current date
{ "value": "{&now}" },
// call function to compute day diff from orderDate to now
{ "value": "{&dayDiff(&now, &orderDate)}" },
// a list values, NY and CA. for in or not-in
{ "value": "NY,CA" }                             
```
[//]: # (@formatter:on)

:::tip  
Embedded functions of pipeline are also available in subject inquiry.
:::

#### Compute Parameter

Parameter can be computed, like this,

```json5
{
	"kind": "computed",
	"type": "add",
	"parameters": []
}
```

- `type`: is one of,
	- `add`, `subtract`, `multiple`, `divide`, `modulus`,
	- `year-of`, `half-year-of`, `quarter-of`, `month-of`,
	- `week-of-year`, `week-of-month`, `day-of-month`, `day-of-week`,
	- `case-then`,
- `parameters`: a list of parameters,
	- for arithmetic function, count in unlimited,
	- for datetime function, only one parameter is allowed,
	- for case then,
		- at most one anyway route is allowed, any other routes must be declared with conditional,
		- anyway route will be sorted to last of all routes,
		- two more properties `conditional` and `on` must be added into conditional route parameter,
			- `conditional` must be `true`,
			- `on` is a joint object.

#### A Sample of condition

Here is a sample of condition,

[//]: # (@formatter:off)
```json5
[
	// orderDate <= 2020/08/31
	{
		"left": { "kind": "topic", "factorId": "orderDate" },
		"operator": "less-equals",
		"right": { "kind": "constant", "value": "2020/08/31" }
	},
	{
		"jointType": "or",
		"filters": [
			// orderNo is not empty
			{ "left": { "kind": "topic", "factorId": "orderNo" }, "operator": "not-empty" },
			// orderCity in (NY, CA)
			{
				"left": { "kind": "topic", "factorId": "orderCity" },
				"operator": "in",
				"right": { "kind": "constant", "value": "NY,CA" }
			},
			// premium >= case when gender = 'F' then 100,000 else 90,000 end
			{
				"left": { "kind": "topic", "factorId": "premium" },
				"operator": "more-equals",
				right: {
					"kind": "computed", "type": "case-then",
					"parameters": [
						// conditional route
						{
							"conditional": true,
							"on": {
								"jointType": "and",
								"filters": [
									{
										"left": { "kind": "topic", "factorId": "gender" },
										"operator": "equals",
										"right": { "kind": "constant", "value": "F" }
									}
								]
							},
							"kind": "constant",
							"value": "100000"
						},
						// anyway route
						{ "kind": "constant", "value": "90000" }
					]
				}
			}
		]
	}
]
```
[//]: # (@formatter:on)

## Trino

To inquiry data from multiple data sources, Trino must be enabled by configuration parameter `TRINO`. In the other hand, if topics of
subject are from one storage, it also can be downgraded to fetch data from storage directly by enabled configuration
parameter `USE_STORAGE_DIRECTLY`.

:::tip
`USE_STORAGE_DIRECTLY` and `TRINO` are default enabled.
:::