import { satteri, satteriHeadingIdsPlugin } from "@astrojs/markdown-satteri";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import { proseImageSizesPlugin } from "./src/plugins/prose-image-sizes";
import { expressiveCodeOptions, siteConfig } from "./src/site.config";

// https://astro.build/config
export default defineConfig({
	site: siteConfig.url,
	integrations: [
		expressiveCode(expressiveCodeOptions),
		icon(),
		sitemap(),
		mdx(),
	],
	image: {
		// Generate a srcset for every optimized image (including markdown ones) so
		// browsers download a variant sized for their viewport instead of the original.
		layout: "constrained",
		objectFit: "contain",
		responsiveStyles: true,
	},
	markdown: {
		processor: satteri({
			hastPlugins: [
				satteriHeadingIdsPlugin(),
				proseImageSizesPlugin(),
			],
		}),
	},
	vite: {
		plugins: [tailwind()],
	},
});
