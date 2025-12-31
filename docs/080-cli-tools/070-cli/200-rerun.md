---
id: rerun  
title: Rerun    
sidebar_position: 20
---

# Rerun Command
The command is "rerun", re-trigger the pipeline of the topic with raw data.

```python
    def rerun(host: Optional[str],
          path: Optional[str],
          username: Optional[str] = None,
          password: Optional[str] = None,
          pat: Optional[str] = None)
```

| Parameter | Type | Description |  
| --------- | ---- | ----------- |
| host | str | The host fo the watchmen application. |
| path | str | The path of rerun config file. |
| username | str | the username of the watchmen application. if pat exist, no need. |
| password | str | the password of the watchmen application. if pat exist, no need. |
| pat | str | the person access token of the watchmen application. if username and password exist, no need. |

# Rerun Config File
The config file of rerun command is a json file, like:
```json
{
  "data":[
    {"topicId":"980793847406064640", "pipelineId":"980793868289504256", "dataId":"980806528930525184"},
    {"topicId":"980793847406064641", "pipelineId":"980793868289504257", "dataId":"980806528930525185"}
  ]
}
```

```commandline
python ./src/cli.py rerun --path='/app/config' --host='http://localhost:8000' --username='watchmen-user' --password='change-me'
```