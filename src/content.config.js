import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		isDraft: z.boolean(),
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		image: z.object({
			src: z.string(),
			alt: z.string(),
		}),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

export const collections = { blog };
