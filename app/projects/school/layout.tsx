import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
	title: "School Projects by Fabio Di Nota | Coding & 3D Work",
	description:
		"View Fabio Di Nota's school projects, from e-commerce exercises and portfolio websites to 3D renders, interface experiments, and early applied web development work.",
	path: "/projects/school",
	keywords: ["school projects", "student portfolio", "3D render projects"],
});

export default function SchoolProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
