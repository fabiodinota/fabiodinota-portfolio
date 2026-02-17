import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://fabiodinota.com";

	const routes = [
		"",
		"/about",
		"/projects",
		"/projects/design",
		"/projects/school",
		"/projects/lab",
		"/projects/other",
		"/contact",
	];

	return routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: route === "" ? "weekly" : "monthly",
		priority: route === "" ? 1 : route === "/projects" ? 0.9 : 0.7,
	}));
}
