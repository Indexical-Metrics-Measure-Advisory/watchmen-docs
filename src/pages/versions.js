import Link from '@docusaurus/Link';
import {useLatestVersion, useVersions} from '@theme/hooks/useDocs';
import Layout from '@theme/Layout';
import React from 'react';

const Version = () => {
	const versions = useVersions();
	const latestVersion = useLatestVersion();
	const currentVersion = versions.find(version => version.name === 'current');
	const pastVersions = versions.filter((version) => version !== latestVersion && version.name !== 'current');

	return (
		<Layout
			title="Versions"
			description="Watchmen Versions page listing all documented site versions">
			<main className="container margin-vert--lg">
				<h1>Watchmen documentation versions</h1>

				{latestVersion && (
					<div className="margin-bottom--lg">
						<h3 id="next">Current version (Stable)</h3>
						<p>
							Here you can find the documentation for current released version.
						</p>
						<table>
							<tbody>
							<tr>
								<th>{latestVersion.label}</th>
								<td>
									<Link to={`${latestVersion.path}/docs-index`}>Documentation</Link>
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
						<h3 id="latest">Next version (Unreleased)</h3>
						<p>
							Here you can find the documentation for work-in-process unreleased
							version.
						</p>
						<table>
							<tbody>
							<tr>
								<th>{currentVersion.label}</th>
								<td>
									<Link to={`${currentVersion.path}/docs-index`}>Documentation</Link>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				)}

				{(pastVersions.length > 0) && (
					<div className="margin-bottom--lg">
						<h3 id="archive">
							Past versions (Not maintained anymore, recommend to upgrade to latest stable version)
						</h3>
						<p>
							Here you can find documentation for previous versions of Watchmen.
						</p>
						<table>
							<tbody>
							{pastVersions.map((version) => (
								<tr key={version.name}>
									<th>{version.label}</th>
									<td>
										<Link to={`${version.path}/docs-index`}>Documentation</Link>
									</td>
									{/*<td>*/}
									{/*	<a href={`${repoUrl}/releases/tag/v${version.name}`}>*/}
									{/*		Release Notes*/}
									{/*	</a>*/}
									{/*</td>*/}
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