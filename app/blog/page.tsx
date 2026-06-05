import { getAllPosts } from "@/lib/blog";
import BlogListClient from "@/features/blog/blog-list-client";

export default function BlogPage() {
	const posts = getAllPosts();
	return <BlogListClient posts={posts} />;
}
