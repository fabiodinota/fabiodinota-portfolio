import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import rehypePrettyCode from "rehype-pretty-code";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	date: string;
	tags: string[];
	image?: string;
	content: string;
}

export interface BlogPostMeta {
	slug: string;
	title: string;
	description: string;
	date: string;
	tags: string[];
	image?: string;
}

function ensureBlogDir() {
	if (!fs.existsSync(BLOG_DIR)) {
		fs.mkdirSync(BLOG_DIR, { recursive: true });
	}
}

export function getPostSlugs(): string[] {
	ensureBlogDir();
	return fs
		.readdirSync(BLOG_DIR)
		.filter((file) => file.endsWith(".md"))
		.map((file) => file.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): BlogPostMeta {
	const filePath = path.join(BLOG_DIR, `${slug}.md`);
	const fileContents = fs.readFileSync(filePath, "utf-8");
	const { data } = matter(fileContents);

	return {
		slug,
		title: data.title ?? slug,
		description: data.description ?? "",
		date: data.date ?? new Date().toISOString().split("T")[0],
		tags: data.tags ?? [],
		image: data.image ?? undefined,
	};
}

export async function getPostContent(slug: string): Promise<string> {
	const filePath = path.join(BLOG_DIR, `${slug}.md`);
	const fileContents = fs.readFileSync(filePath, "utf-8");
	const { content } = matter(fileContents);

	const result = await unified()
		.use(remarkParse)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeRaw)
		.use(rehypePrettyCode, {
			theme: {
				dark: "github-dark",
				light: "github-light",
			},
			defaultLang: "plaintext",
		})
		.use(rehypeStringify)
		.process(content);

	return String(result);
}

export function getAllPosts(): BlogPostMeta[] {
	const slugs = getPostSlugs();
	const posts = slugs
		.map((slug) => getPostBySlug(slug))
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return posts;
}
