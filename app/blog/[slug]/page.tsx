import { getPostBySlug, getPostContent, getPostSlugs } from "@/lib/blog";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import BlogPostClient from "@/features/blog/blog-post-client";

interface BlogPostPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const slugs = getPostSlugs();
	return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
	params,
}: BlogPostPageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = getPostBySlug(slug);
	const pageMetadata = createPageMetadata({
		title: `${post.title} | Fabio Di Nota Blog`,
		description: post.description,
		path: `/blog/${slug}`,
		image: post.image,
		type: "article",
		keywords: post.tags,
	});

	return {
		...pageMetadata,
		openGraph: {
			...pageMetadata.openGraph,
			title: post.title,
			description: post.description,
			type: "article",
			publishedTime: post.date,
		},
	};
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params;
	const post = getPostBySlug(slug);
	const contentHtml = await getPostContent(slug);

	return (
		<BlogPostClient
			title={post.title}
			date={post.date}
			tags={post.tags}
			image={post.image}
			contentHtml={contentHtml}
		/>
	);
}
