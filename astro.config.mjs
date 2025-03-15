import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import rehypeExternalLinks from "rehype-external-links";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://www.vanilla-js.com.br/",
	integrations: [
		mdx(),
		icon(),
		sitemap(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					content: { type: "text", value: " ↗" },
				},
			],
		],
	},
});
