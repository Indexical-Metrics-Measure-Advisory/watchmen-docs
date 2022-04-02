import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {useLatestVersion, useVersions} from '@docusaurus/plugin-content-docs/client';
import Layout from '@theme/Layout';
import React from 'react';

const Version = () => {
	const versions = useVersions();
	const latestVersion = useLatestVersion();
	const currentVersion = versions.find(version => version.label === 'Current');
	const pastVersions = versions.filter((version) => version !== latestVersion && version.label !== 'Current');

	return (
		<Layout
			title="Versions"
			description="Watchmen Versions page listing all documented site versions">
			<main className="container margin-vert--lg">
				<h1>
					<Translate id="versions-page.title">
						Watchmen documentation versions
					</Translate>
				</h1>

				{latestVersion && (
					<div className="margin-bottom--lg">
						<h3 id="next">
							<Translate id="versions-page.current-version-title">
								Current version (Stable)
							</Translate>
						</h3>
						<p>
							<Translate id="versions-page.current-version-description">
								Here you can find the documentation for current released version.
							</Translate>
						</p>
						<table>
							<tbody>
							<tr>
								<th>{latestVersion.name}</th>
								<td>
									<Link to={`${latestVersion.path}/docs-index`}>
										<Translate id="versions-page.doc-link">
											Documentation
										</Translate>
									</Link>
								</td>
								{/*<td>*/}
								{/*	<a href={`${repoUrl}/releases/tag/v${latestVersion.name}`}>*/}
								{/*		Release Notes*/}
								{/*	</a>*/}
								{/*</td>*/}
							</tr>
							</tbody>
						</table>
					</div>
				)}

				{currentVersion !== latestVersion && (
					<div className="margin-bottom--lg">
						<h3 id="latest">
							<Translate id="versions-page.next-version-title">
								Next version (Unreleased)
							</Translate>
						</h3>
						<p>
							<Translate id="versions-page.next-version-description">
								Here you can find the documentation for work-in-process unreleased version.
							</Translate>
						</p>
						<table>
							<tbody>
							<tr>
								<th>{currentVersion.label}</th>
								<td>
									<Link to={`${currentVersion.path}/docs-index`}>
										<Translate id="versions-page.doc-link">
											Documentation
										</Translate>
									</Link>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				)}

				{(pastVersions.length > 0) && (
					<div className="margin-bottom--lg">
						<h3 id="archive">
							<Translate id="versions-page.past-version-title">
								Past versions (Not maintained anymore, recommend to upgrade to latest stable version)
							</Translate>
						</h3>
						<p>
							<Translate id="versions-page.past-version-description">
								Here you can find documentation for previous versions of Watchmen.
							</Translate>
						</p>
						<table>
							<tbody>
							{pastVersions.map((version) => (
								<tr key={version.name}>
									<th>{version.label}</th>
									<td>
										<Link to={`${version.path}/docs-index`}>
											<Translate id="versions-page.doc-link">
												Documentation
											</Translate>
										</Link>
									</td>
								</tr>
							))}
							</tbody>
						</table>
					</div>
				)}
			</main>
		</Layout>
	);
}

export default Version;