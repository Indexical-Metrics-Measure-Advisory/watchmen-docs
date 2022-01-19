---
id: console-report  
title: Report & Chart  
sidebar_position: 40
---

# Report & Chart

A report equates a chart, which is built on a dataset based on subject. It includes following parts,

- Indicators and dimensions,
- Data filter,
- Data funnels on date/numeric/enumeration factors.

Report, meanwhile, is a dataset built by above, further rendered as a chart.

![Report](images/report.png)

## Header

Report name can be changed by click name part in header. Also, in header bar you can,

- Back to connected-space by click `Catalog`,
- Back to report list by click `Reports`,
- Create a new report by click `New Report`,
- Switch to another report belongs to same subject by click `Switch Report`,
- Delete current one by click `Delete Me`.

## Report Structure

### Report Type

First thing of define a report is deciding the report type, there are several options. We will explain each of them later, now let's have an
overview, they are,

- Single Value,
- Bar,
- Line,
- Scatter,
- Pie,
- Doughnut,
- Nightingale,
- Sunburst,
- Tree,
- Treemap,
- Map,
- Customized.

Report type equates chart type, it determines count of indicators and dimensions.

### Indicators & Dimensions

After type is decided, pick indicators and dimensions which you care about. For each indicator, there are five aggregation arithmetics
available,

![Indicator Aggregation](images/report-indicator-aggregation-all.png)

Now select dimensions, they are perspectives of data insight. Also, if there are aggregations defined on indicators, they are aggregated by
dimensions.

### Data Truncate

Sometimes, we don't want to discover the whole picture, we just want to know the outstanding ones. In this case, identify count of data you
want and assign the truncate type by `Top` or `Bottom` instead of `None`.

