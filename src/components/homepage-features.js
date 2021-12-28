import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import React from 'react';
import styles from './homepage-features.module.css';

const features = [
	{
		title: 'Easy to Use',
		svg: require('../../static/img/easy-to-use.svg').default,
		description: <Translate id="homepage.feature.easy-to-use">
			Watchmen was designed from the ground up to be easily installed and used to get your data up and analysing quickly.
		</Translate>
	},
	{
		title: 'Focus on What Matters',
		svg: require('../../static/img/focus-on-matters.svg').default,
		description: <Translate id="homepage.feature.focus-on-matters">
			Watchmen lets you focus on your data, and we'll do the chores. Go ahead and move your data into the watchmen site.
		</Translate>
	},
	{
		title: 'Powered by Cloud Native',
		svg: require('../../static/img/powered-by.svg').default,
		description: <Translate id="homepage.feature.powered-by">
			Compose and deploy watchmen by Cloud Native technologies, to minimize expense and maximize results from data analysis.
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
