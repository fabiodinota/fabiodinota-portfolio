import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
	title: "Design Projects by Fabio Di Nota | UI/UX Portfolio",
	description:
		"Explore Fabio Di Nota's UI/UX and product design work, including developer portfolios, brand pages, mobile app concepts, and interface prototypes made in Figma and Adobe tools.",
	path: "/projects/design",
	keywords: ["design projects", "UI/UX portfolio", "Figma prototypes"],
});

export default function DesignProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
