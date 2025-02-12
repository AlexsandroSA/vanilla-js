import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.string().transform((str) => new Date(str)),
		updatedDate: z.coerce.date().optional(),
	}),
});

export const collections = { blog };
