import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
	title: "About Fabio Di Nota | Software Engineer in Antwerp",
	description:
		"Learn about Fabio Di Nota, a software engineer and UI/UX designer from Antwerp working with React, Next.js, TypeScript, product design, animation, and practical frontend systems.",
	path: "/about",
	keywords: ["about Fabio Di Nota", "software engineer Antwerp"],
});

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
