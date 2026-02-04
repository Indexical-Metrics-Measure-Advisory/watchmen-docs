---
id: cli-index  
title: CLI Overview  
sidebar_position: 1
---

# Overview

## Watchmen Command-Line Interface

We provide the command line tools to help customer to maintain their environment. 
The command-Line Interface base on the function provided by the watchmen applications.

## Core Function

1. deployment

Import topics, pipelines, spaces and connected spaces into the environment. 
You can use the function to deploy the config file which export from other environment in the new one.

2. rerun

Re-trigger the pipeline of a topic, usually for some purpose of maintenance, like fix bugs or data patch.

# How to use

## Source code
Use the source code , clone from repository: 
```commandline
gh repo clone Indexical-Metrics-Measure-Advisory/watchmen
```
In the watchmen-cli directory, run cli.py. for example:
```commandline
python ./src/cli.py deploy --path='/app/config' --host='http://localhost:8000' --username='watchmen-user' --password='change-me'
```

## Docker
Use the watchmen-cli image,  pull image from the command line:
```commandline
docker pull ghcr.io/indexical-metrics-measure-advisory/watchmen-cli:16.3.0
```

execute with docker command, parameters are passed through environment variables:
```text
docker run --rm -e command=deploy -e path=/app/config -e host=http://localhost:8000 -e username=watchmen-user -e password=change-me ghcr.io/indexical-metrics-measure-advisory/watchmen-cli:16.3.0
```

