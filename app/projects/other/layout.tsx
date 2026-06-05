import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
	title: "Other Projects by Fabio Di Nota | Web Design Portfolio",
	description:
		"Browse additional Fabio Di Nota projects covering agency websites, crypto landing pages, medical websites, client work, and smaller web design or development builds.",
	path: "/projects/other",
	keywords: ["other projects", "web design portfolio", "client websites"],
});

export default function OtherProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
