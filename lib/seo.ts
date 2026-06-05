import type { Metadata } from "next";

export const SITE_URL = "https://fabiodinota.com";
export const SITE_NAME = "Fabio Di Nota";
export const SITE_TITLE = "Fabio Di Nota | Software Engineer & UI/UX Designer";
export const DEFAULT_DESCRIPTION =
	"Portfolio of Fabio Di Nota, a software engineer and UI/UX designer in Antwerp, building React, Next.js, TypeScript, and product design work for ambitious teams.";

const defaultKeywords = [
	"Fabio Di Nota",
	"software engineer",
	"UI/UX designer",
	"web developer",
	"React developer",
	"Next.js developer",
	"TypeScript",
	"Antwerp",
	"Belgium",
	"portfolio",
	"frontend engineer",
	"product designer",
];

export function absoluteUrl(path = "/") {
	return new URL(path, SITE_URL).toString();
}

export function createPageMetadata({
	title,
	description,
	path,
	keywords = [],
	image,
	type = "website",
}: {
	title: string;
	description: string;
	path: string;
	keywords?: string[];
	image?: string;
	type?: "website" | "article";
}): Metadata {
	const url = absoluteUrl(path);
	const dynamicImage =
		image ||
		absoluteUrl(
			`/og?${new URLSearchParams({
				title,
				description,
				label: SITE_NAME,
			}).toString()}`,
		);

	return {
		metadataBase: new URL(SITE_URL),
		title: {
			absolute: title,
		},
		description,
		keywords: [...defaultKeywords, ...keywords],
		authors: [{ name: SITE_NAME, url: SITE_URL }],
		creator: SITE_NAME,
		alternates: {
			canonical: url,
		},
		icons: {
			icon: [{ url: "/favicon.ico", sizes: "any" }],
			shortcut: "/favicon.ico",
			apple: "/favicon.ico",
		},
		openGraph: {
			title,
			type,
			description,
			locale: "en_US",
			siteName: SITE_NAME,
			url,
			images: [
				{
					url: dynamicImage,
					width: 1200,
					height: 630,
					alt: `${SITE_NAME} portfolio preview`,
				},
			],
		},
		twitter: {
			title,
			card: "summary_large_image",
			description,
			site: "@fabiodinota",
			images: [
				{
					url: dynamicImage,
					width: 1200,
					height: 630,
					alt: `${SITE_NAME} portfolio preview`,
				},
			],
		},
	};
}

export const structuredData = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Person",
			"@id": `${SITE_URL}/#person`,
			name: SITE_NAME,
			url: SITE_URL,
			jobTitle: "Software Engineer and UI/UX Designer",
			image: absoluteUrl(
				`/og?${new URLSearchParams({
					title: SITE_TITLE,
					description: DEFAULT_DESCRIPTION,
					label: SITE_NAME,
				}).toString()}`,
			),
			address: {
				"@type": "PostalAddress",
				addressLocality: "Antwerp",
				addressCountry: "BE",
			},
			sameAs: [
				"https://github.com/fabiodinota",
				"https://linkedin.com/in/fabiodinota",
				"https://twitter.com/fabiodinota",
			],
			knowsAbout: [
				"React",
				"Next.js",
				"TypeScript",
				"UI/UX Design",
				"Frontend Engineering",
				"Product Design",
			],
		},
		{
			"@type": "Organization",
			"@id": `${SITE_URL}/#organization`,
			name: SITE_NAME,
			url: SITE_URL,
			logo: absoluteUrl("/favicon.ico"),
			founder: {
				"@id": `${SITE_URL}/#person`,
			},
		},
		{
			"@type": "WebSite",
			"@id": `${SITE_URL}/#website`,
			name: SITE_NAME,
			url: SITE_URL,
			description: DEFAULT_DESCRIPTION,
			inLanguage: "en",
			publisher: {
				"@id": `${SITE_URL}/#person`,
			},
		},
	],
};
