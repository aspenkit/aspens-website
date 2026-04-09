// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'aspens',
			logo: {
				src: './src/assets/aspens-logo.png',
				replacesTitle: false,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/aspenkit/aspens' },
			],
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: '/og-image.png' },
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
