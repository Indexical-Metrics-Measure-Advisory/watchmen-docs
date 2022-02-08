---
id: Configuration 
title: Watchmen Doll Configuration 
sidebar_position: 5
---



# Configuration  

## Master data storage 

| \#  | Configuration param  | Description  | default
| --- | ----------- |   ----------- | ----------- |
| 1   | STORAGE_ENGINE | mysql , mongo , oracle | mongo
| 2   | MONGO_HOST    |  mongodb url  |
| 3   | MONGO_PORT   |  mongodb port | 
| 4   | MONGO_DATABASE   |  mongodb schema |watchmen
| 5   | MONGO_USERNAME   |  mongodb username |
| 6 |  MONGO_PASSWORD     |  mongodb password |
|7| MYSQL_HOST | mysql host |
|8| MYSQL_PORT | mysql port |3306
|9| MYSQL_USER | mysql user |
|10| MYSQL_PASSWORD   | mysql password |
|11|MYSQL_DATABASE  | mysql database |watchmen
|12| MYSQL_POOL_MAXCONNECTIONS | mysql pool max connection | 6
|13| MYSQL_POOL_MINCACHED |  |2
|14| MYSQL_POOL_MAXCACHED |  |5
|15|MYSQL_ECHO | mysql log flag  | False  
|16| ORACLE_LIB_DIR | oracle client path |
|17| ORACLE_HOST |  oracle host |
|18|ORACLE_PORT | oracle post |1521
|19|ORACLE_USER | oracle user |
|20|ORACLE_PASSWORD | oracle password |
|21|ORACLE_SERVICE | oracle service name |
|22|ORACLE_SID | oracle sid name |
## Distributed SQL Engine 

| \#  | Configuration param  | Description  | default
| --- | ----------- |   ----------- | ----------- |
|1|  PRESTO_ON    | presto flag   | true
|2 | PRESTO_HOST  |   presto host url |
|3 | PRESTO_PORT   |  presto port  |
|4| PRESTO_USER  | presto user  |
|7| PRESTO_LIB  | trino or prestodb  | trino  


## Data collection protocol

### Kafka parameters
| \#  | Configuration param  | Description  | default
| --- | ----------- |   ----------- | ----------- |
|1|CONNECTOR_RABBITMQ | user rabbitmq connector
|2|RABBITMQ_HOST | rabbitmq host 
|3|RABBITMQ_PORT | rabbitmq port 
|4|RABBITMQ_USERNAME | rabbitmq username 
|5|RABBITMQ_PASSWORD | rabbitmq password 
|6|RABBITMQ_VIRTUALHOST | rabbitmq virtualhost 
|7|RABBITMQ_QUEUE | rabbitmq queue name 
|8|RABBITMQ_DURABLE |
|9|RABBITMQ_AUTO_DELETE |


### rabbitmq parameters
| \#  | Configuration param  | Description  | default
| --- | ----------- |   ----------- | ----------- |
|1|CONNECTOR_KAFKA | use kafak connector  
|2|KAFKA_BOOTSTRAP_SERVER    | kafka server url 
|3|KAFKA_TOPICS | kafka topic list   


## feature flags 
| \#  | Configuration param  | Description  | default
| --- | ----------- |   ----------- | ----------- |
|1|DASK_ON    |  open dask workers for data pipeline    
|2|EXTERNAL_WRITER_ON | add external writer feature 
|3|PROMETHEUS_ON | open prometheus monitor feature 
|4|INDEX_ON | build index topic and pipeline table on  factor level |false |
|5|DATA_SECURITY_ON | | False

## others
### data security 
| \#  | Configuration param  | Description  | default
| --- | ----------- |   ----------- | ----------- |
|1|KEY_MANAGEMENT_TYPE | current version only support db | default is db
|42|ENVIRONMENT   | dev or production  |dev



### log 
| \#  | Configuration param  | Description  | default
| --- | ----------- |   ----------- | ----------- |
|1| LOGGER_FILE||  "temp/rotating.log"
|2|LOGGER_JSON_FORMAT| Log format for generating JSON | False
|3 |LOGGER_FILE_ON | Turn on the function of writing log data to file | Ture

