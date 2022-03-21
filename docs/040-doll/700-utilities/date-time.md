---
id: date-time  
title: Datetime  
sidebar_position: 1
---

# Datetime

**_Watchmen_** use **[0-9]** part of string to parse date time. Thus, supporting for timezone part is limited.

:::info  
Supported formats are defined in **_watchmen-data-kernel_** module, visit **[here](../../installation/config#data-kernel)** for more
details.
:::

## Default Formats

### Time

There are 2 default formats for time:

- `%H%M%S`,
- `%H%M`.

### Date

There are 3 default formats for date:

- `%Y%m%d`,
- `%d%m%Y`,
- `%m%d%Y`.

:::caution  
`%d%m` and `%m%d` may lead confusion, reorder formats or simply remove formats which does not need.
:::

### Datetime

There are 6 default formats for datetime:

- `%Y%m%d%H%M%S`,
- `%d%m%Y%H%M%S`,
- `%m%d%Y%H%M%S`,
- `%Y%m%d%H%M`,
- `%d%m%Y%H%M`,
- `%m%d%Y%H%M`.

### Full Datetime

There are 3 default formats for full datetime:

- `%Y%m%d%H%M%S%f`,
- `%d%m%Y%H%M%S%f`,
- `%m%d%Y%H%M%S%f`.

:::tip  
`%f` is micro-second with 6 digits in python.
:::

### Timezone Support

The only support for timezone is `%z`, such as `+0000`.

:::warning  
Note in most scenarios, timezone is not used and will not be saved. Basically speaking, compatibility of timezone is for receiving data
only.
:::

## Parse Logic

- Remove **[^0-9+]** characters from given string,
- Find suitable format according to left string length,
	- Plus 2 when format contains `%Y`,
	- Plus 3 when format contains `%z`,
	- Format must contain `%f` and must not contain `%z` when string length is more than 14,
	- Format must contain `%f` and string length must be more than 18 when format contains `%z`.

Example 1:  
Given string is `2022/01/01 23:59:59`, the suitable formats are `%Y%m%d%H%M%S`, `%d%m%Y%H%M%S` and `%m%d%Y%H%M%S`.

Example 2:  
Given string is `2022/01/01 23:59:59.123456+0500`, the suitable format is `%Y%m%d%H%M%S%f%z`, which is not default built-in.
