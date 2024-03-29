// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const VersionsArchived = require('./versions-archived.json');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Matryoshka Watchmen',
	tagline: 'Watchmen Platform is a low code data platform for data pipeline, meta management, analysis, and quality management.',
	url: 'https://imma-watchmen.com',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'Matryoshka',
	projectName: 'Watchmen',

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
					includeCurrentVersion: false,
					lastVersion: '16.5-prerelease',
					versions: {
						...(() => {
							return Object.keys(VersionsArchived).reduce((map, version) => {
								map[version] = {
									label: version + ' 🔚',
									path: version
								}
								return map;
							}, {})
						})(),
						'16.5-prerelease': {
							label: 'Current 16.5-prerelease 🎯',
							path: '16.5-prerelease'
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
				maxHeadingLevel: 4
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
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: ['csv', 'json5']
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
		// ... Your other themes.
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			{
				// ... Your options.
				// `hashed` is recommended as long-term-cache of index file is possible.
				hashed: true
				// For Docs using Chinese, The `language` is recommended to set to:
				// ```
				// language: ["en", "zh"],
				// ```
			}
		]
	]
};

module.exports = config;
