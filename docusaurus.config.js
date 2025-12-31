// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes: prismThemes} = require('prism-react-renderer');

const VersionsArchived = require('./versions-archived.json');

/** @type {import('@docusaurus/types').Config} */
const config = {
		title: 'Matryoshka Watchmen',
	tagline: 'Watchmen Platform is a low code data platform for data pipeline, meta management, analysis, and quality management.',
	url: 'https://imma-watchmen.com',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	customFields: {
		quickStartUrl: process.env.QUICK_START_URL || '/docs/18.0.0/getting-started/installation-quick-start',
	},
	markdown: {
		mermaid: true,
		hooks: {
			onBrokenMarkdownLinks: 'warn'
		}
	},
	favicon: 'img/favicon.ico',
	organizationName: 'Matryoshka',
	projectName: 'Watchmen',
	stylesheets: [
		{
			href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&display=swap'
		}
	],

	// i18n: {
	// 	defaultLocale: 'en',
	// 	locales: ['en', 'zh-cn']
	// },

	presets: [
		['classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
					docs: {
						sidebarPath: require.resolve('./sidebars.js'),
						editUrl: 'https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/',
						showLastUpdateAuthor: true,
						showLastUpdateTime: true,
						remarkPlugins: [
							[require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}]
						],
						includeCurrentVersion: true,
						lastVersion: '18.0.0',
						versions: {
							...(() => {
								return Object.fromEntries(
									Object.keys(VersionsArchived).map(version => [
										version,
										{
											label: version + ' 🔚',
											path: version,
											banner: 'unmaintained',
											badge: true
										}
									])
								);
							})(),
							'18.0.0': {
								label: 'Current 18.0.0 🎯',
								path: '18.0.0',
								badge: true,
								banner: 'none'
							},
							'16.5-prerelease': {
								label: '16.5-prerelease',
								path: '16.5-prerelease',
								badge: true,
								banner: 'none'
							}
						}
					},
				blog: {
					showReadingTime: true, // Please change this to your repo.
					editUrl: 'https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/',
					remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')]
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			})
		]
	],

	plugins: [require.resolve("docusaurus-plugin-image-zoom")],

	themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			metadata: [{
				name: 'keywords',
				content: 'matryoshka, watchmen, data lake, lakehouse, pipeline, analysis, warehouse'
			}],
			navbar: {
				title: 'Matryoshka Watchmen',
				logo: {
					alt: 'Matryoshka', src: 'img/logo.svg'
				},
				hideOnScroll: true,
				items: [
					{type: 'doc', docId: 'docs-index', position: 'left', label: 'Docs'},
					{to: '/blog', label: 'Blog', position: 'left'},
					// {type: 'localeDropdown', position: 'right'},
					{
						type: 'docsVersionDropdown',
						position: 'right',
						dropdownItemsAfter: [
							{type: 'html', value: '<hr class="dropdown-separator">'},
							{to: '/versions', label: 'All versions'}
						],
						dropdownActiveClassDisabled: true
					},
					{
						href: 'https://github.com/Indexical-Metrics-Measure-Advisory',
						label: 'GitHub',
						position: 'right'
					}
				]
			},
			docs: {sidebar: {hideable: true}},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 5
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{label: 'Blog', to: '/blog'}
						]
					},
					// {
					// 	title: 'Community',
					// 	items: [
					// 		{
					// 			label: 'Stack Overflow',
					// 			href: 'https://stackoverflow.com/questions/tagged/docusaurus'
					// 		},
					// 		{
					// 			label: 'Discord',
					// 			href: 'https://discordapp.com/invite/docusaurus'
					// 		},
					// 		{
					// 			label: 'Twitter',
					// 			href: 'https://twitter.com/docusaurus'
					// 		}
					// 	]
					// },
					{
						title: 'GitHub',
						items: [
							{
								label: 'Doll & DQC',
								href: 'https://github.com/Indexical-Metrics-Measure-Advisory/watchmen'
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} Matryoshka Watchmen. Built with Docusaurus.`
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
				additionalLanguages: ['bash', 'csv', 'diff', 'ini', 'java', 'json', 'json5', 'python', 'sql', 'toml', 'typescript', 'yaml'],
				magicComments: [
					{
						className: 'code-block-highlight-line',
						line: 'highlight-next-line'
					},
					{
						className: 'code-block-highlight-line',
						block: {start: 'highlight-start', end: 'highlight-end'}
					},
					{
						className: 'code-block-error-line',
						line: 'error'
					},
					{
						className: 'code-block-warning-line',
						line: 'warn'
					},
					{
						className: 'code-block-success-line',
						line: 'success'
					}
				]
			},
			mermaid: {
				theme: {light: 'neutral', dark: 'forest'}
			},
			zoom: {
				selector: '.markdown :not(em) > img',
				config: {
					// options you can specify via https://github.com/francoischalifour/medium-zoom#usage
					background: {
						light: 'rgb(255, 255, 255)',
						dark: 'rgb(50, 50, 50)'
					}
				}
			}
		}),
		themes: [
			[
				require.resolve("@easyops-cn/docusaurus-search-local"),
				{
					hashed: true
				}
			],
			'@docusaurus/theme-mermaid'
		]
};

module.exports = config;
