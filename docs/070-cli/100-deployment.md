---
id: deploy  
title: Deployment    
sidebar_position: 10
---

# Deployment Command

watchmen-cli provide two kind of command of deploy:

## deploy_asset
```python
        def deploy_asset():
```
The command "deploy_asset" have no arguments. 
You can use the dotenv file to set the configuration of command. 

.env file
```dotenv
META_CLI_HOST = http://localhost:8000
META_CLI_USERNAME = watchmen-user
META_CLI_PASSWORD = change-me
META_CLI_PAT = None # no need when the username and passowrd are setted
META_CLI_DEPLOY_FOLDER = /app/config
META_CLI_DEPLOY_PATTERN = REPLACE
```
run command
```commandline
docker run --rm --env-file /usr/watchmen/watchmen-cli/env.list ghcr.io/indexical-metrics-measure-advisory/watchmen-cli:16.3.0
```

## deploy
```python
	def deploy(
			host: Optional[str],
			path: Optional[str],
			pattern: Optional[MixedImportType] = 'replace',
			username: Optional[str] = None,
			password: Optional[str] = None,
			pat: Optional[str] = None
	):
```
| Parameter | Type | Description |  
| --------- | ---- | ----------- |
| host | str | The host fo the watchmen application. |
| path | str | The path of deploy config file. |
| pattern | MixedImportType | Import type, usually use "replace" |
| username | str | The username of the watchmen application. if pat exist, no need. |
| password | str | The password of the watchmen application. if pat exist, no need. |
| pat | str | The person access token of the watchmen application. if username and password exist, no need. |

run command
```commandline
python ./src/cli.py deploy --path='/app/config' --host='http://localhost:8000' --username='watchmen-user' --password='change-me'
```

# Deploy Config File
The config file of deploy command is a markdown file, which exported from the watchmen application.