---
id: objective-analysis
title: Objective Analysis  
sidebar_position: 30
---

# Objective Analysis

:::info  
Objective analysis is available for `Admin` only.
:::

Objective analysis is combination instrument of inspections and achievements.

![Objective Analysis](images/objective-analysis.png)

There are several parts of this page,

- Navigator of analysis list,
	- All analysis are loaded when open this page, browse each one by click item of navigator,
	- Click `search` button to open name filter,
	- Click `create` button to create new analysis.
- Once an analysis is opened,
	- Click the name part to rename it,
	- Click operation bar to,
		- Append inspection or achievement,
		- Delete current analysis,
	- Edit and view related inspection and achievement.

:::tip
Try view mode by yourself 🏄🏽.  
:::

## Question and Answers

Logical, an analysis is led by a question. Therefore, describe the question in the head. And answer this question by several
perspectives, each perspective has its own comment to describe why/how/what answer the question. In the meantime, an existing inspection or
achievement can be imported, or simply create a new one.

## Inspection

Inspection is based on single indicator.

Currently, indicator data are available to be inspected on given time range, and grouped by time dimensions and/or pre-defined buckets.

Simple visualization also available in this page,

![Visualization](images/inspection-visualization.png)

:::tip  
Visualization diagrams are computed according to given time groups and buckets.
:::

## Achievement

:::info  
Achievement is available for `Admin` only.
:::

Achievement is based on multiple indicators.

There are 5 parts of an achievement,

- Common time criteria,
- Pre-defined indicators,
- Computed indicators,
- Total score,
- Plugins.

### Common Time Criteria

![Common Criteria](images/achievement-common-criteria.png)

- Define time criteria, which can be referred in pre-defined indicator. By year or By year + month is supported,
- Define whether the previous period data should be applied or not. An increment ratio will be calculated automatically when previous period
  applied.

### Pre-defined Indicator

![Pre-defined Indicator](images/achievement-predefined-indicator.png)

All indicators pre-defined can be imported into achievement.

#### Naming & Criteria Apply

![Pre-defined Indicator 2](images/achievement-predefined-indicator-2.png)

Click the criteria node, to

- Define indicator name in this achievement,
- Apply criteria into indicator,
	- `{&year}` and `{&month}` can be used in criteria value, which defined in common criteria,
	- Use pre-defined bucket to filter, or manually key-in.

#### Aggregation & Formula

![Pre-defined Indicator 3](images/achievement-predefined-indicator-3.png)

- Choose aggregation arithmetic,
- Write formula which to compute score of this indicator.

:::info
Formula syntax is based on Javascript.
:::

##### Supported Variables

Variables are computed before compute score using formula,

- `c`: value of indicator in current time period,
- `p`: value of indicator in previous time period,
- `r`: value of increment ratio.

##### Supported Math Functions

All properties and methods on [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) are supported.
For example,

```javascript
let x = abs(c); // assign aboslute value of current indicator value to variable x
```

And additional functions,

```javascript
// when r is less than 0.1, returns 10
// when r is greater than 0.8, returns 50
// when r is between 0.1 and 0.8, returns 10 + (50 - 10) * (r - 0.1) / (0.8 - 0.1)
interpolation(r, 0.1, 10, 0.8, 50); 
```

:::info
`return` keyword is not required when there is only one line of formula, otherwise use `return` to return the computed score.
:::

### Compute Indicator

![Compute Indicator](images/achievement-compute-indicator.png)

Compute indicators are designed for do manually calculation base on results of other indicators.

#### Formula

![Compute Indicator 2](images/achievement-compute-indicator-2.png)

Write formula which to compute score of this indicator.

:::info
Formula syntax is based on Javascript.
:::

##### Supported Variables

Variables from other indicators are supported,

- `v1`, `v2`, ..., `vn`: `n` is index of other indicator, can be found at its result node,
- `v1.c`: current value of v1,
- `v1.p`: previous value of v1,
- `v1.r`: increment value of v1,
- `v1.s`: score value of v1,
- and `v2.c`/`v2.p`/`v2.r`/`v2.s` ... `vn.c`/`vn.p`/`vn.r`/`vn.s`

:::caution

Be very careful,

- circle dependencies may cause unpredicted result or error,
- never use itself in formula.

:::

### Append or Remove indicator

- Append compute indicator by click `Add Manual Compute Indicator`,
- Append pre-defined indicator by click leaf node of pre-defined indicators tree.

![Add or Remove Indicator](images/achievement-indicator-add-remove.png)

And, remove existing indicator by hover its first node, and click the remove button,

- Remove pre-defined indicator,
  ![Remove Indicator 1](images/achievement-remove-indicator-1.png)
- Remove compute indicator,
  ![Remove Indicator 2](images/achievement-remove-indicator-2.png)

### Total Score

Finally, all computed scores are sum and show at root node of achievement.

![Total Score](images/achievement-total-score.png)

:::tip  
Simply remove the check `Include in Final Score` of indicator score node to remove its score value from summary.
:::

### Plugins

Plugin is an asynchronized task which is submitted to server side when open it, will open a new window when server accomplishes the plugin
task with external services.  

:::tip  
Available plugins are configured by `Super Admin`.
:::
