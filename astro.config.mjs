import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://Tomasherink.github.io',
	base: '/astro-test',
	integrations: [mdx(), sitemap()],
	},		

});
