import { describe, expect, it } from "vitest";
import { getPostBySlug, getPostContent, getPostSlugs } from "@/lib/blog";

describe("blog content helpers", () => {
	it("lists markdown slugs without file extensions", () => {
		expect(getPostSlugs()).toContain("hello-world");
	});

	it("reads frontmatter metadata with sensible fields", () => {
		expect(getPostBySlug("hello-world")).toEqual({
			slug: "hello-world",
			title: "Hello World — My First Blog Post",
			description:
				"Welcome to my blog! I'll be sharing my thoughts on software engineering, design, and technology.",
			date: "2026-02-17",
			tags: ["announcement", "personal"],
			image: undefined,
		});
	});

	it("renders markdown content to html", async () => {
		const html = await getPostContent("hello-world");

		expect(html).toContain("<h1>Welcome to My Blog</h1>");
		expect(html).toContain("contact page");
	});
});
