import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import { SITE } from "@/consts";

export async function GET(context) {
	const blog = await getCollection("blog");

	return rss({
		title: SITE.TITLE,
		description: SITE.DESCRIPTION,
		site: context.site,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.dataPub,
			description: post.data.description,
			link: `/blog/${post.id}/`,
		})),
		customData: `<language>pt-BR</language>`,
	});
}
