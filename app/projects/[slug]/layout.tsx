import type { Metadata } from "next";
import { AllProjects } from "@/features/projects/data";
import { createPageMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
	params,
}: {
	params: Params;
}): Promise<Metadata> {
	const { slug } = await params;
	const project = AllProjects.find((p) => p.caseStudySlug === slug);

	if (!project) {
		return {
			title: {
				absolute: "Project Not Found | Fabio Di Nota Portfolio",
			},
		};
	}

	return createPageMetadata({
		title: `${project.title} Case Study | ${project.description}`,
		description: `${project.summary} Read how Fabio Di Nota approached the product, interface, and technical decisions behind this portfolio project.`,
		path: `/projects/${slug}`,
		keywords: [project.title, project.description, ...project.tags],
	});
}

export default function CaseStudyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
