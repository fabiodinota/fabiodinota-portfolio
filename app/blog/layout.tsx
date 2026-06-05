import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
	title: "Blog by Fabio Di Nota | Engineering & Design Notes",
	description:
		"Read Fabio Di Nota's notes on software engineering, UI/UX design, frontend systems, product decisions, and the practical details behind modern web projects.",
	path: "/blog",
	keywords: ["engineering blog", "design blog", "frontend notes"],
});

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
