---
id: web-client-installation  
title: Installation  
sidebar_position: 2
---

# Web Client Installation

We haven't deployed web client to public repository yet, clone our source code first.

```shell
cd /path/to/root_folder
git clone https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-web-client.git
```

Since web client is built on [CRA](https://create-react-app.dev/), you can find all useful information
from [CRA](https://create-react-app.dev/).

## Serve Locally

### Prepare Environment

Create a `.env.development.local` file in root folder, add following

```properties
REACT_APP_GITHUB=https://github.com/Indexical-Metrics-Measure-Advisory
REACT_APP_WEB_CONTEXT=/
REACT_APP_SERVICE_MOCK_FLAG=true
REACT_APP_SERVICE_URL=http://127.0.0.1:8000/
REACT_APP_CLIENT_SAVE_INTERVAL=2000
REACT_APP_CLIENT_REPORT_AUTO_REFRESH_INTERVAL=300000
REACT_APP_DQC_ENABLED=true
REACT_APP_PIPELINES_DOWNLOAD=true
REACT_APP_MULTIPLE_DATA_SOURCES=true
REACT_APP_REPORT_FILTER=true
REACT_APP_REPORT_FUNNEL=true
REACT_APP_SPACE_FILTER=true
REACT_APP_EXTERNAL_WRITER_ADAPTERS=true
REACT_APP_CHART_SCRIPT_IN_CONSOLE=true
REACT_APP_INDICATOR_WORKBENCH=true

REACT_APP_VERSION=$npm_package_version
REACT_APP_NAME=$npm_package_name

PORT=4001
```

- To enable a feature, property value must be set to `true`,
- Interval value has default value as described above, they can be ignored in env file,
- Service URL is effective on visiting on http://localhost:4001 and mock is disabled,
- Port can be changed to another one, it's up to you.

:::tip  
Change `.env.local` is also worked.
:::

### Start Server

```bash npm2yarn
npm install
npm start
```

Runs the app in development mode. Open http://127.0.0.1:4001 to view it in the browser.

## Build

Provides you own `.env` file, copy content from `.env.local` and change to what you want. You can find how to use env files
on [CRA Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables)

```shell npm2yarn
npm run build
```

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.

## Deployment

**[Here](https://create-react-app.dev/docs/deployment)**.

## Build and Deployment By Docker
**_`(under construction)`_**