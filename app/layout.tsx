import "./globals.css";
import { Outfit } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "./context/theme-context";
import MainLayout from "./components/main-layout";
import MotionProvider from "./components/motion-provider";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({ subsets: ["latin"] });

const siteDescription =
	"Software engineer and designer from Antwerp, Belgium. Specialising in React, Next.js, TypeScript, and UI/UX design.";

export const metadata: Metadata = {
	metadataBase: new URL("https://fabiodinota.com"),
	title: {
		default: "Fabio Di Nota | Software Engineer & Designer",
		template: "%s | Fabio Di Nota",
	},
	description: siteDescription,
	keywords: [
		"Fabio Di Nota",
		"software engineer",
		"designer",
		"web developer",
		"React",
		"Next.js",
		"TypeScript",
		"Antwerp",
		"Belgium",
		"portfolio",
		"UI/UX",
		"frontend",
	],
	authors: [{ name: "Fabio Di Nota", url: "https://fabiodinota.com" }],
	creator: "Fabio Di Nota",
	alternates: {
		canonical: "https://fabiodinota.com",
	},
	openGraph: {
		title: "Fabio Di Nota | Software Engineer & Designer",
		type: "website",
		description: siteDescription,
		locale: "en_US",
		siteName: "Fabio Di Nota",
		url: "https://fabiodinota.com/",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Fabio Di Nota — Software Engineer & Designer",
			},
		],
	},
	twitter: {
		title: "Fabio Di Nota | Software Engineer & Designer",
		card: "summary_large_image",
		description: siteDescription,
		site: "@fabiodinota",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Fabio Di Nota — Software Engineer & Designer",
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider>
			<html lang="en">
				<body className={outfit.className}>
					<MotionProvider>
						<MainLayout>{children}</MainLayout>
					</MotionProvider>
					<Analytics />
				</body>
			</html>
		</ThemeProvider>
	);
}
