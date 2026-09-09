import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const project = defineCollection({
	loader: glob({ base: "./content/projects", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		z.object({
			title: z.string().max(100),
			type: z.enum(["project", "paper", "poster", "thesis", "preprint"]),
			description: z.string(),
			year: z.number().int(),
			link: z.string().optional(),
			venue: z.string().optional(),
			sortIndex: z.number().int().nonnegative().default(0),
			image: image().optional(),
			links: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
		}),
});

export const collections = { project };
