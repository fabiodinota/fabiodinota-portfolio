import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
	title: "Projects by Fabio Di Nota | Engineering & UI/UX Work",
	description:
		"Browse Fabio Di Nota's portfolio of full-stack engineering, UI/UX design, creative coding, school, lab, and client-facing web projects built with modern tools.",
	path: "/projects",
	keywords: ["Fabio Di Nota projects", "engineering portfolio", "UI/UX portfolio"],
});

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
