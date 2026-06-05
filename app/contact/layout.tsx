import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
	title: "Contact Fabio Di Nota | Web App & UI/UX Projects",
	description:
		"Contact Fabio Di Nota for full-stack web applications, UI/UX audits, interface redesigns, product strategy, and React or Next.js consulting from Antwerp, Belgium.",
	path: "/contact",
	keywords: ["contact Fabio Di Nota", "web app projects", "UI/UX audit"],
});

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
