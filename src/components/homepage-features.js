import Translate, {translate} from '@docusaurus/Translate';
import clsx from 'clsx';
import React from 'react';
import styles from './homepage-features.module.css';

const features = [
	{
		title: translate({id: 'homepage.feature.ai-ready.title', message: 'AI-Native Data Infrastructure'}),
		svg: require('../../static/img/easy-to-use.svg').default,
		description: <Translate id="homepage.feature.ai-ready">
			Transform passive data into active, semantic-rich assets. Build knowledge graphs and semantic layers that empower your AI agents to understand and utilize enterprise data effectively.
		</Translate>
	},
	{
		title: translate({id: 'homepage.feature.data-governance.title', message: 'Active Data Governance'}),
		svg: require('../../static/img/focus-on-matters.svg').default,
		description: <Translate id="homepage.feature.data-governance">
			Don't just store data—manage it. Integrated data quality monitoring, lineage tracking, and cataloging ensure your data is always trusted, transparent, and actionable.
		</Translate>
	},
	{
		title: translate({id: 'homepage.feature.event-driven.title', message: 'Event-Driven Orchestration'}),
		svg: require('../../static/img/powered-by.svg').default,
		description: <Translate id="homepage.feature.event-driven">
			Move beyond batch processing. React to data changes in real-time. Trigger alerts, complex workflows, and external system integrations the instant your data flows.
		</Translate>
	}
];

const Feature = ({svg: Svg, title, description}) => {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} alt={title}/>
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

const HomepageFeatures = () => {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{features.map((props, idx) => {
						return <Feature key={idx} {...props} />
					})}
				</div>
			</div>
		</section>
	);
}

export default HomepageFeatures;
