import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import HomepageFeatures from '../components/homepage-features';
import styles from './index.module.css';

const HomepageHeader = () => {
	const {siteConfig} = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<h1 className={clsx("hero__title", styles.heroTitle)}>{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/docs/020-getting-started/150-first-metric">
						<Translate id="homepage.tutorial-button">
							Watchmen Tutorial - 15min ⏱
						</Translate>️
					</Link>
				</div>
			</div>
		</header>
	);
}

const Home = () => {
	return (
		<Layout>
			<HomepageHeader/>
			<main>
				<HomepageFeatures/>
			</main>
		</Layout>
	);
}

export default Home;