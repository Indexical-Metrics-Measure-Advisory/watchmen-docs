// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Matryoshka Watchmen',
	tagline: 'Watchmen Platform is a low code data platform for data pipeline, meta management, analysis, and quality management.',
	url: 'https://imma-watchmen.com',
	baseUrl: '/watchmen-docs/',
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
					]
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

	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'tutorial',
				path: 'tutorial',
				routeBasePath: 'tutorial',
				sidebarPath: require.resolve('./sidebars-tutorial.js'),
				editUrl: 'https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-docs/tree/main/',
				showLastUpdateAuthor: true,
				showLastUpdateTime: true
			}
		]
	],

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
					{
						type: 'doc',
						docsPluginId: 'tutorial',
						docId: 'tutorial-index',
						position: 'left',
						label: 'Tutorial'
					},
					{type: 'doc', docId: 'docs-index', position: 'left', label: 'Docs'},
					{to: '/blog', label: 'Blog', position: 'left'},
					// {type: 'localeDropdown', position: 'right'},
					{
						type: 'docsVersionDropdown',
						position: 'right',
						dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
						dropdownActiveClassDisabled: true
					},
					{
						href: 'https://github.com/Indexical-Metrics-Measure-Advisory',
						label: 'GitHub',
						position: 'right'
					}
				]
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{label: 'Tutorial', to: '/tutorial/tutorial-index'},
							{label: 'Docs', to: '/docs/docs-index'},
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
								label: 'Doll',
								href: 'https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-matryoshka-doll'
							}, {
								label: 'Data Quality Center',
								href: 'https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-dqc'
							}, {
								label: 'Web Client',
								href: 'https://github.com/Indexical-Metrics-Measure-Advisory/watchmen-web-client'
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} Matryoshka Watchmen. Built with Docusaurus.`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: ['csv']
			}
		})
};

module.exports = config;
