// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Zyle.css',
	tagline: 'Take off with a lightweight, responsive CSS framework',
	url: 'https://css.zylelabs.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.png',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'ZyleLabs', // Usually your GitHub org/user name.
	projectName: 'css', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	plugins: ['docusaurus-plugin-sass'],

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: '/docs',
					sidebarPath: require.resolve('./sidebars.js'),
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.scss'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			metadata: [
				{
					name: 'description',
					content: 'Take off with a lightweight, responsive CSS framework',
				},
				{ name: 'keywords', content: 'Zyle, css, Zyle Css, zyle.css, framework' },
				{ name: 'author', content: 'ZyleLabs' },
			],
			navbar: {
				title: 'ZYLE.CSS',
				logo: {
					alt: 'Zyle.css Logo',
					src: 'img/logo.png',
					href: '/docs/get-started/introduction',
				},
				items: [
					{
						type: 'doc',
						docId: 'get-started/introduction',
						position: 'left',
						label: 'Docs',
					},
					{
						href: 'https://github.com/ZyleLabs/css',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Get Started',
								to: '/docs/get-started/introduction',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Twitter',
								href: 'https://twitter.com/ZyleLabs',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'GitHub',
								href: 'https://github.com/facebook/docusaurus',
							},
						],
					},
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
