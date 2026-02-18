import { StaticImageData } from "next/image";

export interface ThemeColors {
	primary: string;
	secondary: string;
	background: string;
	border: string;
	red: string;
}

export interface Project {
	title: string;
	slug: string;
	role: string;
	tags: string[];
	summary: string;
	highlight?: string;
	description: string;
	image: StaticImageData;
	link: string;
	category: "engineering" | "professional";
	caseStudySlug?: string;
}
