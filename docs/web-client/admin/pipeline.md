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
DO NOT modify the hyperlink parts in exported markdown file, it contains the data part. Any other is just for read, you can modify them to
anything you prefer.
:::

### Pipeline

## Validation

[//]: # (- Group Name: required,)

## Model

Find pipeline model **[here](../../tuples/pipeline)**.

