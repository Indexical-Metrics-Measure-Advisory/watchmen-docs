---
id: migration  
title: Upgrade to 16  
sidebar_position: 50
---

# Migration Scripts

It's easy to upgrade **_Watchmen_** from 15.x to 16. Find corresponding
scripts **[here](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-migration/v15.x-to-v16/meta-scripts)**
, and follow the steps,

- Backup your metadata database,
- Execute migration scripts on your metadata database,
- Verify everything is OK,
- To find scripts of system topics on corresponding storage module, execute them on topic storage,
	- Visit **[here](scripts)** for more details,
- Assign data sources to those system topics,
- Verify everything is OK,
- Bingo!
