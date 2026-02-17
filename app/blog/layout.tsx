import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Articles about software engineering, design, and technology by Fabio Di Nota.",
};

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
