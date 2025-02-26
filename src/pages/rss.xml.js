import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const blog = await getCollection("blog");

	return rss({
		title: "VanillaJS",
		description:
			"Aventure-se no mundo do VanillaJS e descubra a verdadeira essência da linguagem que move a web.",
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
