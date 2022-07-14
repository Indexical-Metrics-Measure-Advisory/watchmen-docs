"use strict";(self.webpackChunkwatchmen_docs=self.webpackChunkwatchmen_docs||[]).push([[1477],{30010:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"v16.1-plan-eof","metadata":{"permalink":"/blog/v16.1-plan-eof","editUrl":"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/blog/2022-07-14-v16.1-plan-eof.md","source":"@site/blog/2022-07-14-v16.1-plan-eof.md","title":"v16.1 End of Life Planning","description":"Watchmen V16.1 series, is planning to stop to maintain in few weeks after V16.3 deployed.","date":"2022-07-14T00:00:00.000Z","formattedDate":"July 14, 2022","tags":[{"label":"watchmen","permalink":"/blog/tags/watchmen"},{"label":"v16.1","permalink":"/blog/tags/v-16-1"}],"readingTime":0.79,"hasTruncateMarker":false,"authors":[{"name":"botlikes456","title":"Agent B","url":"https://github.com/botlikes456","imageURL":"https://github.com/botlikes456.png","key":"botlikes"}],"frontMatter":{"slug":"v16.1-plan-eof","title":"v16.1 End of Life Planning","authors":"botlikes","tags":["watchmen","v16.1"]},"nextItem":{"title":"v16.0 End of Life","permalink":"/blog/v16.0-eof"}},"content":"Watchmen V16.1 series, is planning to stop to maintain in few weeks after V16.3 deployed.\\n\\nWe have done refactoring in V16.2, which leads the package structure break changes. In detail, we extract the common part from 4 supported\\nrds storage (MySQL/MSSQL/Oracle/PostgreSQL) to a new package `watchment-storage-rds`. This change reduce our maintain cost on rds part, but\\non the other hand, because of lacking of manpower resource, it\'s really hard to maintain V16.1 since it still in original structure. Anyway,\\nV16.1 is still on maintain now, but it\'s better to do upgrading to V16.2 now.\\n\\nOne more thing about V16.3, after we deploy the indicator workbench in V16.2, there is one more exciting feature will be deployed in V16.3,\\nwhich is `Synonym Topic`. It introduces direct link to rds, to reuse the existing tables and views, to maximize the existing data usages. We\\nare still on the final round verification work now, will be released in few weeks \u2764\ufe0f\u200d\ud83d\udd25."},{"id":"v16.0-eof","metadata":{"permalink":"/blog/v16.0-eof","editUrl":"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/blog/2022-06-27-v16.0-eof.md","source":"@site/blog/2022-06-27-v16.0-eof.md","title":"v16.0 End of Life","description":"Watchmen V16.0 series, is stop to maintain, and will not fix bug in this version again.","date":"2022-06-27T00:00:00.000Z","formattedDate":"June 27, 2022","tags":[{"label":"watchmen","permalink":"/blog/tags/watchmen"},{"label":"v16.0","permalink":"/blog/tags/v-16-0"}],"readingTime":0.18,"hasTruncateMarker":false,"authors":[{"name":"botlikes456","title":"Agent B","url":"https://github.com/botlikes456","imageURL":"https://github.com/botlikes456.png","key":"botlikes"}],"frontMatter":{"slug":"v16.0-eof","title":"v16.0 End of Life","authors":"botlikes","tags":["watchmen","v16.0"]},"prevItem":{"title":"v16.1 End of Life Planning","permalink":"/blog/v16.1-plan-eof"},"nextItem":{"title":"v16.2 Released","permalink":"/blog/v16.2-release"}},"content":"Watchmen V16.0 series, is stop to maintain, and will not fix bug in this version again.\\n\\nThe latest version of 16.0 series is `16.0.46`, which can be found at,\\n\\n- [Web client](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/pkgs/container/watchmen-web-client/26529937?tag=16.0.46)\\n- [Doll](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/pkgs/container/watchmen-matryoshka-doll-mysql/26530041?tag=16.0.46)\\n- [DQC](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/pkgs/container/watchmen-matryoshka-dqc-mysql/26530069?tag=16.0.46)"},{"id":"v16.2-release","metadata":{"permalink":"/blog/v16.2-release","editUrl":"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/blog/2022-06-27-v16.2-deployed.md","source":"@site/blog/2022-06-27-v16.2-deployed.md","title":"v16.2 Released","description":"V16.2 Released!","date":"2022-06-27T00:00:00.000Z","formattedDate":"June 27, 2022","tags":[{"label":"watchmen","permalink":"/blog/tags/watchmen"},{"label":"v16.2","permalink":"/blog/tags/v-16-2"}],"readingTime":0.265,"hasTruncateMarker":false,"authors":[{"name":"botlikes456","title":"Agent B","url":"https://github.com/botlikes456","imageURL":"https://github.com/botlikes456.png","key":"botlikes"}],"frontMatter":{"slug":"v16.2-release","title":"v16.2 Released","authors":"botlikes","tags":["watchmen","v16.2"]},"prevItem":{"title":"v16.0 End of Life","permalink":"/blog/v16.0-eof"},"nextItem":{"title":"v16.2 coming soon...","permalink":"/blog/v16.2-coming-soon"}},"content":"V16.2 Released!\\n\\n---\\n\\n## \ud83d\udd27 Fixed\\n- Incorrect count on free finding,\\n- Precision loss on very large numeric value.\\n\\n## \ud83d\udcdc Enhancement\\n- PostgreSQL supporting,\\n- AWS S3 / Ali OSS supporting,\\n- Indicator workbench.\\n\\n## \ud83d\udce6 Images\\n- [Web client](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/pkgs/container/watchmen-web-client/26745683?tag=16.2.0)\\n- [Doll Mysql](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/pkgs/container/watchmen-matryoshka-doll-mysql/26745961?tag=16.2.0)\\n- [DQC Mysql](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/pkgs/container/watchmen-matryoshka-dqc-mysql/26746057?tag=16.2.0)\\n\\nFind other storage versions [here](https://github.com/orgs/Indexical-Metrics-Measure-Advisory/packages?repo_name=watchmen)."},{"id":"v16.2-coming-soon","metadata":{"permalink":"/blog/v16.2-coming-soon","editUrl":"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/blog/2022-06-24-v16.2-comming-soon.md","source":"@site/blog/2022-06-24-v16.2-comming-soon.md","title":"v16.2 coming soon...","description":"V16.2 coming soon!","date":"2022-06-24T00:00:00.000Z","formattedDate":"June 24, 2022","tags":[{"label":"watchmen","permalink":"/blog/tags/watchmen"},{"label":"v16.2","permalink":"/blog/tags/v-16-2"}],"readingTime":0.18,"hasTruncateMarker":false,"authors":[{"name":"botlikes456","title":"Agent B","url":"https://github.com/botlikes456","imageURL":"https://github.com/botlikes456.png","key":"botlikes"}],"frontMatter":{"slug":"v16.2-coming-soon","title":"v16.2 coming soon...","authors":"botlikes","tags":["watchmen","v16.2"]},"prevItem":{"title":"v16.2 Released","permalink":"/blog/v16.2-release"},"nextItem":{"title":"PostgreSQL coming soon!","permalink":"/blog/postgresql"}},"content":"V16.2 coming soon!\\n\\n---\\n\\nV16.2 is coming in next few days, including amazing features,\\n\\n- AWS S3 and Ali OSS supporting for raw topic storage,\\n- PostgreSQL supporting,\\n- Indicator workbench, offers buckets, indicators, inspections, etc."},{"id":"postgresql","metadata":{"permalink":"/blog/postgresql","editUrl":"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/blog/2022-05-24-postgresql.md","source":"@site/blog/2022-05-24-postgresql.md","title":"PostgreSQL coming soon!","description":"We plan to supported PostgreSQL officially, will be delivered soon.","date":"2022-05-24T00:00:00.000Z","formattedDate":"May 24, 2022","tags":[{"label":"watchmen","permalink":"/blog/tags/watchmen"},{"label":"postgresql","permalink":"/blog/tags/postgresql"}],"readingTime":0.055,"hasTruncateMarker":false,"authors":[{"name":"botlikes456","title":"Agent B","url":"https://github.com/botlikes456","imageURL":"https://github.com/botlikes456.png","key":"botlikes"}],"frontMatter":{"slug":"postgresql","title":"PostgreSQL coming soon!","authors":"botlikes","tags":["watchmen","postgresql"]},"prevItem":{"title":"v16.2 coming soon...","permalink":"/blog/v16.2-coming-soon"},"nextItem":{"title":"v15 End of Life","permalink":"/blog/v15-eof"}},"content":"We plan to supported PostgreSQL officially, will be delivered soon. \\n\\n---"},{"id":"v15-eof","metadata":{"permalink":"/blog/v15-eof","editUrl":"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/blog/2022-05-24-v15-eof.md","source":"@site/blog/2022-05-24-v15-eof.md","title":"v15 End of Life","description":"Watchmen V15 series, which deployed about 2 months ago, and was the very first version we published, working with us over 1 year, we decide","date":"2022-05-24T00:00:00.000Z","formattedDate":"May 24, 2022","tags":[{"label":"watchmen","permalink":"/blog/tags/watchmen"},{"label":"v15","permalink":"/blog/tags/v-15"}],"readingTime":0.505,"hasTruncateMarker":false,"authors":[{"name":"botlikes456","title":"Agent B","url":"https://github.com/botlikes456","imageURL":"https://github.com/botlikes456.png","key":"botlikes"}],"frontMatter":{"slug":"v15-eof","title":"v15 End of Life","authors":"botlikes","tags":["watchmen","v15"]},"prevItem":{"title":"PostgreSQL coming soon!","permalink":"/blog/postgresql"},"nextItem":{"title":"v16.1.2 Released","permalink":"/blog/v16.1.2-release"}},"content":"Watchmen V15 series, which deployed about 2 months ago, and was the very first version we published, working with us over 1 year, we decide\\nstop to maintain, and will not fix bug in this version again.\\n\\nWe already notify all our friends to upgrade their images to V16.1.x, and get good feedback from them. So if you still on V15 series, we\\nhighly recommend to upgrade to V16.1 immediately.\\n\\nWe offer upgrade scripts, you can find it\\nat [watchmen-migration](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/tree/main/packages/watchmen-migration/v15.x-to-v16/meta-scripts)\\n, just enjoy it.\\n\\nStill, images of V15 series can be found at,\\n\\n- [Web client](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen/pkgs/container/watchmen-web-client/18108477?tag=15.2.16)\\n- [Doll](https://github.com/orgs/Indexical-Metrics-Measure-Advisory/packages/container/watchmen-matryoshka-doll/20816906?tag=15.2.18)\\n- [DQC](https://github.com/orgs/Indexical-Metrics-Measure-Advisory/packages/container/watchmen-matryoshka-dqc/18108592?tag=15.2.16)\\n\\n---"},{"id":"v16.1.2-release","metadata":{"permalink":"/blog/v16.1.2-release","editUrl":"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/blog/2022-05-24-v16.1.2-deployed.md","source":"@site/blog/2022-05-24-v16.1.2-deployed.md","title":"v16.1.2 Released","description":"V16.1.2 Released!","date":"2022-05-24T00:00:00.000Z","formattedDate":"May 24, 2022","tags":[{"label":"watchmen","permalink":"/blog/tags/watchmen"},{"label":"v16.1.2","permalink":"/blog/tags/v-16-1-2"}],"readingTime":0.295,"hasTruncateMarker":false,"authors":[{"name":"botlikes456","title":"Agent B","url":"https://github.com/botlikes456","imageURL":"https://github.com/botlikes456.png","key":"botlikes"}],"frontMatter":{"slug":"v16.1.2-release","title":"v16.1.2 Released","authors":"botlikes","tags":["watchmen","v16.1.2"]},"prevItem":{"title":"v15 End of Life","permalink":"/blog/v15-eof"},"nextItem":{"title":"v16.1.1 Released","permalink":"/blog/v16.1.1-release"}},"content":"V16.1.2 Released!\\n\\n---\\n\\n## \ud83d\udd27 Fixed\\n- Reports and paragraphs in dashboard cannot be loaded.\\n\\n## \ud83d\udcdc Enhancement\\n- Add server side log for detail messages of http 500 exception.\\n\\n## \ud83d\udce6 Images\\n- [Web client](https://github.com/orgs/Indexical-Metrics-Measure-Advisory/packages/container/watchmen-web-client/22938411?tag=16.1.2)\\n- [Doll Mysql](https://github.com/orgs/Indexical-Metrics-Measure-Advisory/packages/container/watchmen-matryoshka-doll-mysql/22938964?tag=16.1.2)\\n- [DQC Mysql](https://github.com/orgs/Indexical-Metrics-Measure-Advisory/packages/container/watchmen-matryoshka-dqc-mysql/22939227?tag=16.1.2)\\n\\nFind other storage versions [here](https://github.com/orgs/Indexical-Metrics-Measure-Advisory/packages?repo_name=watchmen).\\n\\n> All these bugs fixing and enhancement can be found at v16.0.40."},{"id":"v16.1.1-release","metadata":{"permalink":"/blog/v16.1.1-release","editUrl":"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/blog/2022-05-18-v16.1.1-deployed.md","source":"@site/blog/2022-05-18-v16.1.1-deployed.md","title":"v16.1.1 Released","description":"V16.1.1 Released!","date":"2022-05-18T00:00:00.000Z","formattedDate":"May 18, 2022","tags":[{"label":"watchmen","permalink":"/blog/tags/watchmen"},{"label":"v16.1","permalink":"/blog/tags/v-16-1"}],"readingTime":0.235,"hasTruncateMarker":false,"authors":[{"name":"The Watchmen Team","title":"Organization","url":"https://github.com/Indexical-Metrics-Measure-Advisory","imageURL":"https://github.com/Indexical-Metrics-Measure-Advisory.png","key":"The Watchmen Team"}],"frontMatter":{"slug":"v16.1.1-release","title":"v16.1.1 Released","authors":"The Watchmen Team","tags":["watchmen","v16.1"]},"prevItem":{"title":"v16.1.2 Released","permalink":"/blog/v16.1.2-release"},"nextItem":{"title":"v16.0.39 Released","permalink":"/blog/v16.0.39-release"}},"content":"V16.1.1 Released!\\n\\nIt is patch release, which contains bugfixes. \\n\\n---\\n\\n## Bugfixes\\n- Remove exception raise from ask encryptor from registration\\n- Flatten column is not working\\n- DataSourceParam is unserializable\\n- Bad argument passed of post_delete_pipeline\\n- Missing the precision cell of factor in uploaded template"},{"id":"v16.0.39-release","metadata":{"permalink":"/blog/v16.0.39-release","editUrl":"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/blog/2022-05-08-v16.0.39-deployed.md","source":"@site/blog/2022-05-08-v16.0.39-deployed.md","title":"v16.0.39 Released","description":"V16.0.39 Released!","date":"2022-05-08T00:00:00.000Z","formattedDate":"May 8, 2022","tags":[{"label":"watchmen","permalink":"/blog/tags/watchmen"},{"label":"v16.0","permalink":"/blog/tags/v-16-0"}],"readingTime":0.09,"hasTruncateMarker":false,"authors":[{"name":"The Watchmen Team","title":"Organization","url":"https://github.com/Indexical-Metrics-Measure-Advisory","imageURL":"https://github.com/Indexical-Metrics-Measure-Advisory.png","key":"The Watchmen Team"}],"frontMatter":{"slug":"v16.0.39-release","title":"v16.0.39 Released","authors":"The Watchmen Team","tags":["watchmen","v16.0"]},"prevItem":{"title":"v16.1.1 Released","permalink":"/blog/v16.1.1-release"},"nextItem":{"title":"v16.1 Released","permalink":"/blog/v16.1-release"}},"content":"V16.0.39 Released!\\n\\nIt is patch release, which contains bugfixes. \\n\\n---\\n\\n## Bugfixes\\n- pat expired date compare error"},{"id":"v16.1-release","metadata":{"permalink":"/blog/v16.1-release","editUrl":"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/blog/2022-05-08-v16.1-deployed.md","source":"@site/blog/2022-05-08-v16.1-deployed.md","title":"v16.1 Released","description":"\ud83d\udd25 V16.1.0 Released!","date":"2022-05-08T00:00:00.000Z","formattedDate":"May 8, 2022","tags":[{"label":"watchmen","permalink":"/blog/tags/watchmen"},{"label":"v16.1","permalink":"/blog/tags/v-16-1"}],"readingTime":0.38,"hasTruncateMarker":false,"authors":[{"name":"The Watchmen Team","title":"Organization","url":"https://github.com/Indexical-Metrics-Measure-Advisory","imageURL":"https://github.com/Indexical-Metrics-Measure-Advisory.png","key":"The Watchmen Team"}],"frontMatter":{"slug":"v16.1-release","title":"v16.1 Released","authors":"The Watchmen Team","tags":["watchmen","v16.1"]},"prevItem":{"title":"v16.0.39 Released","permalink":"/blog/v16.0.39-release"},"nextItem":{"title":"v16 Released","permalink":"/blog/v16-release"}},"content":"\ud83d\udd25 V16.1.0 Released!\\n\\nToday we are releasing Watchmen 16.1.0. It contains exciting new features. \\n\\n16.1 series will be a stable version with long-term maintenance.\\n\\nWe strongly recommend users and partners upgrading to 16.1, which is an important minor version upgrade\\n\\n---\\n\\n## Features Introduction\\n- Auto-mapping factors in pipeline action development  \\nIn pipeline development, factors mapping automatic generation is provided to improve pipeline development efficiency and user-friendliness  \\n- Support SAML2  \\nSupport new authentication protocols of SSO"},{"id":"v16-release","metadata":{"permalink":"/blog/v16-release","editUrl":"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/blog/2022-04-02-v16-deployed.md","source":"@site/blog/2022-04-02-v16-deployed.md","title":"v16 Released","description":"\ud83d\udd25 V16.0.0 Released!","date":"2022-04-02T00:00:00.000Z","formattedDate":"April 2, 2022","tags":[{"label":"watchmen","permalink":"/blog/tags/watchmen"},{"label":"v16","permalink":"/blog/tags/v-16"}],"readingTime":0.18,"hasTruncateMarker":false,"authors":[{"name":"The Watchmen Team","title":"Organization","url":"https://github.com/Indexical-Metrics-Measure-Advisory","imageURL":"https://github.com/Indexical-Metrics-Measure-Advisory.png","key":"The Watchmen Team"}],"frontMatter":{"slug":"v16-release","title":"v16 Released","authors":"The Watchmen Team","tags":["watchmen","v16"]},"prevItem":{"title":"v16.1 Released","permalink":"/blog/v16.1-release"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"\ud83d\udd25 V16.0.0 Released!\\n\\nWe refactored all modules and put them to a single **[Github repository](https://github.com/Indexical-Metrics-Measure-Advisory/watchmen)**.\\n\\nFor my friends who are using v15, we also offer the migration scripts, visit **[here](/docs/16.0.0/installation/migration)** for more details.\\n\\nJust enjoy it!"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/blog/2021-12-28-welcome.md","source":"@site/blog/2021-12-28-welcome.md","title":"Welcome","description":"Welcome to Matryoshka Data!","date":"2021-12-28T00:00:00.000Z","formattedDate":"December 28, 2021","tags":[{"label":"matryoshka","permalink":"/blog/tags/matryoshka"},{"label":"hello","permalink":"/blog/tags/hello"},{"label":"watchmen","permalink":"/blog/tags/watchmen"}],"readingTime":0.02,"hasTruncateMarker":false,"authors":[{"name":"The Watchmen Team","title":"Organization","url":"https://github.com/Indexical-Metrics-Measure-Advisory","imageURL":"https://github.com/Indexical-Metrics-Measure-Advisory.png","key":"The Watchmen Team"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":"The Watchmen Team","tags":["matryoshka","hello","watchmen"]},"prevItem":{"title":"v16 Released","permalink":"/blog/v16-release"}},"content":"Welcome to Matryoshka Data!"}]}')}}]);