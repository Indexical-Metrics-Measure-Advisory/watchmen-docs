---
id: pipeline  
title: Pipeline  
sidebar_position: 90
---

# Pipeline

Pipeline describes the data flow between topics, triggered by topic data inserted or updated.

:::tip  
Pipeline is available for `Admin` only.
:::

## Page

### Catalog

![Pipeline Catalog](images/pipeline-catalog.png)

In the very first pipeline catalog page, all existing topics will be displayed and layout automatically.

:::tip

- Topic blocks can be dragged and dropped anywhere,
- If there are many topics cannot be rendered in one page, use thumbnail to move.

:::

Catalog belongs to the user, it is not shared between users. Topics can be organized individually for every administrator, don't worry about
to influence or affected by others.

:::tip  
In pipeline catalog, `catalog`/`graphics`/`group` are the same concept: a set of topics, rendering to a graphics.
:::

#### Topic Navigator

Click navigator panels to view more details of topic,

- Incoming pipelines: pipelines write data to current topic,
- Outgoing pipelines: pipelines triggerred by current topic,
- External writers: triggerred by current topic only, which means external writers in incoming pipelines will not be displayed,
- Factors.

Click `Open Pipeline` button to edit pipeline,

![Edit Pipeline](images/edit-pipeline.png)

#### Header Buttons

There might many topics, it is too many to show in one graphics, topics can be separated to multiple graphics. Click `New Pipeline Group` in
header buttons to create a new catalog page.

![New Pipeline Catalog](images/new-pipeline-catalog.png)

In a new catalog page,

- Pipeline catalog name is auto generated, click name part to change it,

  ![A New Pipeline Catalog](images/a-new-pipeline-catalog.png)

- No topic selected in the first, click `Pick Topics` to pick topics which you want to render in this catalog,

  ![Pick Topic for Pipeline Catalog](images/pick-topics-for-pipeline-catalog.png)

  ![Pick Topic Dialog for Pipeline Catalog](images/pick-topics-dialog-for-pipeline-catalog.png)

  :::caution  
  If topic are not picked on current catalog, pipelines which triggerred by it or write data to it also will be rendered in this catalog.
  :::

- Click `Delete Me` to delete current catalog,

  ![Delete Pipeline Catalog](images/delete-pipeline-catalog.png)

  :::tip

	- Topics will not be deleted when delete pipeline catalog,
	- The last catalog cannot be deleted.

  :::

  :::caution  
  Catalog cannot be recovered after deletion.
  :::

- Click `Switch Graphics` to switch to another catalog,

  ![Switch Pipeline Catalog](images/switch-pipeline-catalog-dialog.png)

  :::tip  
  Switching is enabled only when there are more than 1 catalog.
  :::

#### Export & Import

Topics, pipelines and other tuples related can be exported as a zip file, by click the `Export` button in header buttons, a dialog shows,

![Export Pipeline Catalog](images/export-dialog-of-pipeline-catalog.png)

- All topics and spaces are available in export dialog,
- Topics assigned to space will be selected automatically when space is selected,
- Space will be deselected automatically when topic within it is deselected,
- Pipelines will be packed into zip only when,
	- Triggerred topic is selected,
	- Topics receive data from this pipeline are selected,
- Any tuples included by space will be packed into zip according to selected spaces.

There is only one file in this zip,

```
zip root/
└── Pipelines Group.md
```

:::info  
Markdown file cannot be triggered as a file downloading in browser, so we pack it to a zip.
:::

Markdown file is exactly a document for these tuples, it is useful to show the structures. It can be opened by any markdown tool, we
recommend using [VSCode](https://code.visualstudio.com/), with markdown plugins installed. Also, it can be generated to a pdf file, for more
easy to read and spread.

The exported markdown file can be imported again, simply by clicking the `Import`,

![Import Pipeline Catalog](images/import-pipeline-catalog.png)

![Import Pipeline Catalog Dialog](images/import-dialog-of-pipeline-catalog.png)

:::danger  
DO NOT modify the hyperlink parts in exported markdown file, it contains the data part. Actually we only read these parts in importing.    
Any others are for read only, you can modify them to anything you prefer. But it is not recommended that any modification on not-description
parts, such as factors tables, pipeline DSLs.
:::

:::info  
In markdown, graphics and images are stored by standard HTML tags, they cannot be rendered correctly in GitHub, Gitlab and some other SaaS
services (or private installations). Simply leave them as they are, it is just for security reason. Open it via locally markdown tool, it
can be rendered correctly.
:::

There are 3 ways to import data,

- Non-Redundant: existing data will be ignored, and do creation when not existed,
- Replace: existing data will be replaced, and do creation when not existed,
- Force New: treat all imported data as new ones. Ids of tuples will be reset.

Choose the right import way for your scenario and be careful with the imported tuples. Duplication check is based on the ids of tuples, such
as `topicId` or `pipelineId`, which means even they have the same name, still will be treated as different ones by importation handler. It
depends on the existing and import tuples, we cannot know what exactly the scenario is, all we can say is it occurs in all 3 ways.

:::danger  
Most of tuples will not create physical entities, but not for topic. Topic name equates table/document name in data source, therefore when
topic names are duplicated but have different topic ids, unpredictable exceptions should be raised when do data source objects creation or
modification. **Be very careful with it after importing**.
:::

### Pipeline

## Validation

[//]: # (- Group Name: required,)

## Model

Find pipeline model **[here](../../tuples/pipeline)**.

