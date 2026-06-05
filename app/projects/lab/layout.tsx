import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
	title: "Lab Projects by Fabio Di Nota | Creative Web Experiments",
	description:
		"Follow Fabio Di Nota's lab projects, experiments, prototypes, and technical explorations across creative coding, frontend interaction, product ideas, and web engineering.",
	path: "/projects/lab",
	keywords: ["lab projects", "creative coding", "web experiments"],
});

export default function LabProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
