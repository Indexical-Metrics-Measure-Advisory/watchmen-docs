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

A one more important thing is after report built, it can be referred by dashboards, we will discuss it in next chapter.

![Report](images/report.png)

## Header

Report name can be changed by click name part in header. Also, in header bar you can,

- Back to connected-space by click `Catalog`,
- Back to report list by click `Reports`,
- Create a new report by click `New Report`,
- Switch to another report belongs to same subject by click `Switch Report`,
- Delete current one by click `Delete Me`.

## Bottom Tabs

Switching visible of bottom bar by clicking the palette or grid button.

![Bottom Tabs](images/report-bottom-tabs.png)

In bottom tabs, you can,

- View dataset,
- Define filter,
- Define funnel,
- Set basic style of chart,
- Set title and subtitle of chart,
- Set specific styles of chart,
- Define script, variables of customized chart.

:::info  
Customizing script and variables of chart by business user is available when `REACT_APP_CHART_SCRIPT_IN_CONSOLE=true` (by default it is not)
.  
Find `REACT_APP_CHART_SCRIPT_IN_CONSOLE` in `.env` file.
:::

## Report Structure

### Report Type {#report-type}

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

## Filter and Funnel

Report is built based on subject, in previous chapter, we introduced how to define a subject. Actually, it is just like a SQL query from one
or multiple topics. In report, data can be filtered one more time via filter and funnel.

### Difference between Filter and Funnel

In anutshell, filter is static and funnel is dynamic. In runtime, filter is exactly same as it was defined. But for value of funnel, it can
be passed different for each time. It is very vital in case of changing it on dashboard.

### Filter

![Filter](images/report-filter.png)

- Define criteria on subject columns here instead of factor in subject because of no topic can be seen here,
- From type of both sides on criteria is fixed, change from type is not available anymore.

:::info  
Report filter is more like a simplified version of subject.
:::

### Funnel

Columns of date, numeric and enumeration will be detected automatically, list in funnel definition part.

![Funnel](images/report-funnel.png)

Enabled funnels are shown on bottom tabs to set default funnel values, values will be used to filter data in this page.

And in dashboard, we just have a quick look, funnels are available for accepting dynamic values, as below,

![Funnel in Dashboard](images/report-funnel-in-dashboard.png)

## Dataset

After everything declared, now we can preview dataset to check whether it is as expected or not,

![Dataset](images/report-dataset.png)

Sometimes, we want to verify the chart by simulated data instead of fetch them from server side. Simply switch on the `Simulate` toggle,
download data template (according to indicators definition), prepare mock data and upload them.

## Basic Style, Title & Subtitle

For each chart, basic style, title and subtitle are available, you can find settings on appropriate tab. There are dozens of settings, we
will not introduce them one by one, just try them in page.

Here are some screenshots,

![Basic Style](images/report-basic-style.png)

![Title](images/report-title.png)

![Subtitle](images/report-subtitle.png)

## Charts

### Prebuilt

As we introduced in [report type](#report-type), there are several types of charts built-in. For each type, there is different restriction
for indicators and dimensions and specific style settings are available.

#### Single Value

In previous section, we have seen the common style settings, and for single value chart, there is a peculiarity tab,

![Count Report](images/report-count-chart.png)

#### Bar

![Bar Report](images/report-bar-chart.png)

#### Line

![Line Report](images/report-line-chart.png)

#### Scatter

![Scatter Report](images/report-scatter-chart.png)

#### Pie

![Pie Report](images/report-pie-chart.png)

#### Doughnut

![Doughnut Report](images/report-doughnut-chart.png)

#### Nightingale

![Nightingale](images/report-nightingale-chart.png)

#### Sunburst

![Sunburst](images/report-sunburst-chart.png)

#### Tree

![Tree](images/report-tree-chart.png)

#### Treemap

![Treemap](images/report-treemap-chart.png)

#### Map

![Map](images/report-map-chart.png)

:::info  
Level-1 map (in state/province level) of USA and Japan are built-in.
:::

### Customized

For those charts haven't built-in, could be rendered by customized type, this is tech-orientation and by default not open to business user,
we recommend implementing the complex charts by your technical department and expose them to business users. Follow below steps,

- First, you need to be an administrator, define a space as we introduced [here](../admin/space), make sure it is assigned to yourself and
  business users who will use this customized chart.
- Switch to console workbench, connect this space,
- Create a subject and create a report, simply following the standard process,
- Select report type as `Customized`,
- Select indicators/dimensions/filters/funnels, and set truncate if needed, just as normal,
- Set basic style/title/subtitle, also as normal.

Now we have dataset for this report, open bottom bar, find script tab,

![Customized](images/report-customized-chart.png)

_**Watchmen**_ use [echarts](https://echarts.apache.org/) as chart engine, so in this script, a valid echarts options must be returned.
Since script will be run in browser, which means please strictly follow the javascript syntax supported by your browser version, it can be
found at [CanIUse](https://caniuse.com/).

```javascript
(() => {
	return {              // this is what the echarts needed
		/** ... */
	};
})();
```

:::tip  
For how to use echarts, find their examples [here](https://echarts.apache.org/examples/en/index.html), and configuration
docs [here](https://echarts.apache.org/en/option.html).
:::
