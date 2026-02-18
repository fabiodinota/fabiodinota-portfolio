import type { Metadata } from "next";
import { AllProjects } from "@/app/data/projects";

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
			title: "Project Not Found",
		};
	}

	return {
		title: `${project.title} — Case Study`,
		description: project.summary,
	};
}

export default function CaseStudyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
