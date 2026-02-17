import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Get in touch with Fabio Di Nota for commissions, collaborations, questions, or bug reports.",
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
