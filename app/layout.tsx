import "./globals.css";
import { Outfit } from "next/font/google";
import { Metadata } from "next";
import { use, useContext } from "react";
import { ThemeProvider, useThemeContext } from "./context/themeContext";
import ThemeSwitch from "./components/themeSwitch";
import MainLayout from "./components/mainLayout";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabio Di Nota",
  description: "Fabio Di Nota - Software Engineer & Designer",
  openGraph: {
    title: "Fabio Di Nota",
    type: "website",
    description: "Fabio Di Nota - Software Engineer & Designer",
    locale: "en_US",
    siteName: "Fabio Di Nota",
    url: "https://fabiodinota.com/",
    images: [
      {
        url: "placeholder",
        alt: "Fabio Di Nota",
      },
    ],
  },
  twitter: {
    title: "Fabio Di Nota",
    card: "summary_large_image",
    description: "Fabio Di Nota - Software Engineer & Designer",
    site: "@fabiodinota",
    images: [
      {
        url: "placeholder",
        alt: "Fabio Di Nota",
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
        <body className={`${outfit.className} `}>
          <MainLayout>{children}</MainLayout>
        </body>
      </html>
    </ThemeProvider>
  );
}
