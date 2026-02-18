import type { MetadataRoute } from "next";
import { getPostSlugs } from "@/lib/blog";
import { AllProjects } from "@/app/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://fabiodinota.com";

	const staticRoutes = [
		"",
		"/about",
		"/projects",
		"/projects/design",
		"/projects/school",
		"/projects/lab",
		"/projects/other",
		"/contact",
		"/blog",
	];

	const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: route === "" ? "weekly" : "monthly",
		priority: route === "" ? 1 : route === "/blog" ? 0.9 : route === "/projects" ? 0.9 : 0.7,
	}));

	// Case study pages
	const caseStudyEntries: MetadataRoute.Sitemap = AllProjects
		.filter((p) => p.caseStudySlug)
		.map((p) => ({
			url: `${baseUrl}/projects/${p.caseStudySlug}`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.8,
		}));

	const blogSlugs = getPostSlugs();
	const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
		url: `${baseUrl}/blog/${slug}`,
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority: 0.8,
	}));

	return [...staticEntries, ...caseStudyEntries, ...blogEntries];
}
