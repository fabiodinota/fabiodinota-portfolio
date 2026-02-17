import { getPostBySlug, getPostContent, getPostSlugs } from "@/lib/blog";
import type { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";

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
	return {
		title: post.title,
		description: post.description,
		openGraph: {
			title: post.title,
			description: post.description,
			type: "article",
			publishedTime: post.date,
			images: post.image ? [{ url: post.image }] : undefined,
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
