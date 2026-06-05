import { describe, expect, it } from "vitest";
import {
	DEFAULT_DESCRIPTION,
	SITE_NAME,
	SITE_TITLE,
	absoluteUrl,
	createPageMetadata,
} from "@/lib/seo";

describe("seo helpers", () => {
	it("builds absolute URLs from root-relative paths", () => {
		expect(absoluteUrl("/projects")).toBe("https://fabiodinota.com/projects");
	});

	it("builds canonical metadata and dynamic OG image URLs", () => {
		const metadata = createPageMetadata({
			title: SITE_TITLE,
			description: DEFAULT_DESCRIPTION,
			path: "/contact",
			keywords: ["contact"],
		});

		const openGraphImages = metadata.openGraph?.images;
		const openGraphImage = Array.isArray(openGraphImages)
			? openGraphImages[0]
			: openGraphImages;
		const openGraphImageObject =
			typeof openGraphImage === "string"
				? { url: openGraphImage }
				: openGraphImage;
		const openGraphImageDescriptor =
			openGraphImageObject instanceof URL ? undefined : openGraphImageObject;

		expect(metadata.alternates?.canonical).toBe(
			"https://fabiodinota.com/contact",
		);
		expect(metadata.openGraph?.siteName).toBe(SITE_NAME);
		expect(openGraphImageDescriptor).toMatchObject({
			width: 1200,
			height: 630,
			alt: `${SITE_NAME} portfolio preview`,
		});
		expect(String(openGraphImageDescriptor?.url)).toContain(
			"https://fabiodinota.com/og?",
		);
		expect(String(openGraphImageDescriptor?.url)).toContain(
			"label=Fabio+Di+Nota",
		);
	});
});
