// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://aspenkit.dev',
	integrations: [
		starlight({
			title: 'aspens',
			components: {
				Search: './src/components/TopNav.astro',
				ThemeSelect: './src/components/ThemeKill.astro',
				Footer: './src/components/Footer.astro',
			},
			logo: {
				src: './src/assets/aspens-logo.png',
				replacesTitle: false,
			},
			favicon: '/favicon-32.png',
			social: [],
			customCss: ['./src/styles/custom.css'],
			lastUpdated: true,
			credits: true,
			head: [
				{
					tag: 'link',
					attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
				},
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'guides/introduction' },
						{ label: 'Quick Start', slug: 'guides/quick-start' },
						{ label: 'How It Works', slug: 'guides/how-it-works' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Skills', slug: 'guides/skills' },
						{ label: 'Bundled Agents', slug: 'guides/agents' },
						{ label: 'Target Support', slug: 'guides/target-support' },
						{ label: 'Save Tokens', slug: 'guides/save-tokens' },
						{ label: 'FAQ', slug: 'guides/faq' },
					],
				},
				{
					label: 'Commands',
					autogenerate: { directory: 'commands' },
				},
				{
					label: 'Deep Dives',
					items: [
						{ label: 'Token Savings', slug: 'guides/token-savings' },
						{ label: 'Architecture', slug: 'guides/architecture' },
						{ label: 'Product Decisions', slug: 'guides/product-decisions' },
						{ label: 'Origin Story', slug: 'guides/origin-story' },
						{ label: 'Roadmap', slug: 'guides/roadmap' },
					],
				},
			{
					label: 'Changelog',
					items: [
						{ label: 'Changelog', slug: 'changelog/changelog' },
					],
				},
				{
					label: 'Community',
					items: [
						{ label: 'Contributing', slug: 'guides/contributing' },
					],
				},
			],
		}),
	],
});
