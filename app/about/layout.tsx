import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description:
		"Learn about Fabio Di Nota — a software engineer and designer from Antwerp, Belgium with experience in React, Next.js, TypeScript, and UI/UX design.",
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
