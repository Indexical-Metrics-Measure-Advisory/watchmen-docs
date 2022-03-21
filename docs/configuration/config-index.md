---
id: index  
title: Configuration  
sidebar_position: 1
---

# Configuration

## Utilities

Utilities settings are available for all modules.

| Key          | Type | Default Value                                                                        | Possible Values                |
|--------------|------|--------------------------------------------------------------------------------------|--------------------------------|
| LOGGER_LEVEL | str  | ERROR                                                                                | DEBUG, INFO, WARN, ERROR, FATAL |
| LOGGER_TO_FILE | bool | False                                                                                | True/False                     |
| LOGGER_FILE | str  | temp/rotating.log                                                                    |                                |
| LOGGER_FILE_SIZE | int  | 10242880                                                                             |                                |
| LOGGER_FILE_BACKUP_COUNT | int  | 5                                                                                    |                                |
| LOGGER_FILE_ENCODING | str  | utf-8                                                                                |                                |
| LOGGER_JSON_FORMAT | bool | False                                                                                | True/False                     |
| LOGGER_FORMAT | str  | %(asctime)s - %(process)d - %(threadName)s - %(name)s - %(levelname)s - %(message)s  | |

