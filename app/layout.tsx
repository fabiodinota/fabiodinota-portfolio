import "./globals.css";
import { Outfit } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "@/context/theme-context";
import MainLayout from "@/components/layout/main-layout";
import MotionProvider from "@/components/layout/motion-provider";
import { Analytics } from "@vercel/analytics/react";
import {
	createPageMetadata,
	DEFAULT_DESCRIPTION,
	SITE_TITLE,
	structuredData,
} from "@/lib/seo";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = createPageMetadata({
	title: SITE_TITLE,
	description: DEFAULT_DESCRIPTION,
	path: "/",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider>
			<html lang="en">
				<body className={outfit.className}>
					<script
						id="site-structured-data"
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(structuredData),
						}}
					/>
					<MotionProvider>
						<MainLayout>{children}</MainLayout>
					</MotionProvider>
					<Analytics />
				</body>
			</html>
		</ThemeProvider>
	);
}
