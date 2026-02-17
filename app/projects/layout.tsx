import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects",
	description:
		"Browse Fabio Di Nota's portfolio of software engineering and design projects, including web applications, UI/UX designs, and creative experiments.",
};

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
