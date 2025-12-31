---
id: first-subject
title: Build Your First Subject
sidebar_position: 4
---

## Goal
Create your first Subject for analysis: pick topics, define columns, filters and joins, then explore the dataset and create reports.

## Prerequisites
- Topics available in a connected space.
- Console access to create and view subjects.

## 1) Pick Topics
- Open `Subject` and start the wizard.
- Step 1: pick one or more topics from the connected space to form the subject’s data scope.
- Arrange selections so that joins make sense if multiple topics are chosen.

## 2) Define Columns
- Step 2: add columns for the subject.
- A column can be:
  - From a topic factor directly,
  - A constant value,
  - Computed via functions (math/date/case‑when, etc.).
- Give friendly names to columns for readability.

## 3) Define Filters
- Step 3: add filters applied to all reports built on this subject.
- Use filters to narrow the dataset to the relevant slice (time window, status, id ranges, etc.).

## 4) Define Joins
- Step 4: when two or more topics are included, define joins between them.
- Join types:
  - Exactly Match: intersection of both sides,
  - Left Side Prioritized: left side plus intersection,
  - Right Side Prioritized: right side plus intersection.
- Skip joins when only one topic is used.

## 5) View Definition DSL
- Review the YAML‑like DSL of the subject definition.
- Resolve any issues highlighted in the wizard.

## 6) Dataset
- Open the dataset page to preview data.
- Use pagination and the top‑right page switcher.
- Columns can be resized, sorted, drag‑and‑dropped and locked to the left.
- Validate that the dataset matches expectations before building reports.

## 7) Reports
- Switch to the reports page.
- Create new reports based on the subject: choose charts, configure fields and filters.
- Iterate until the visualizations reflect your analysis goals.

## Header Actions
- Back to connected space.
- Switch between structure, dataset and reports.
- Create new report, switch subject or delete current one.
- Rename the subject by clicking its name in the header.

## Tips
- Keep column names concise and meaningful.
- Start with one topic, verify results, then add joins for multi‑topic analysis.
- Apply global filters at the subject level to ensure consistent reporting.
- Use computed columns for derived metrics and date bucketing.

## What’s Next
- Add more subjects for different perspectives.
- Share common filters and computed columns across reports.
- Export datasets for downstream analytics or AI workflows.

