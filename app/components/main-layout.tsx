"use client";

import { ReactNode, useEffect, useState } from "react";
import ThemeSwitch from "./theme-switch";
import { useThemeContext } from "@/app/context/theme-context";
import Image from "next/image";
import GithubLight from "@/public/GitHub_light.svg";
import GithubDark from "@/public/GitHub_dark.svg";
import LinkedinLight from "@/public/Linkedin_light.svg";
import LinkedinDark from "@/public/Linkedin_dark.svg";
import TwitterLight from "@/public/Twitter_light.svg";
import TwitterDark from "@/public/Twitter_dark.svg";
import MenuComponent from "./menu";
import MenuButton from "./menu-button";
import { m } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Lottie from "lottie-react";
import LogoLottieWhite from "@/public/Logo_white.json";
import LogoLottieBlack from "@/public/Logo_black.json";
import { cn } from "@/lib/utils";
import { springTransition, hoverTapScale } from "@/lib/motion";

/* ---------- Social link config ---------- */

const SOCIAL_LINKS = [
	{
		href: "https://github.com/fabiodinota",
		darkIcon: GithubDark,
		lightIcon: GithubLight,
		alt: "GitHub",
	},
	{
		href: "https://linkedin.com/in/fabiodinota",
		darkIcon: LinkedinDark,
		lightIcon: LinkedinLight,
		alt: "LinkedIn",
	},
	{
		href: "https://twitter.com/fabiodinota",
		darkIcon: TwitterDark,
		lightIcon: TwitterLight,
		alt: "Twitter",
	},
];

const socialTransition = { ...springTransition, duration: 0.5 };

/* ---------- MainLayout ---------- */

const MainLayout = ({ children }: { children: ReactNode }) => {
	const pathname = usePathname();
	const { colors, theme, border } = useThemeContext();
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuClick = () => {
		setMenuOpen(!menuOpen);
	};

	const [logoSwitch, setLogoSwitch] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLogoSwitch(true);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	const borderClass = theme === "dark" ? "border-white" : "border-black";

	return (
		<main
			className={cn(
				colors.background,
				"grid grid-rows-[75px_1fr_75px] grid-cols-[75px_1fr_75px]",
				"xl:grid-rows-[100px_1fr_100px] xl:grid-cols-[150px_1fr_150px]",
				"min-h-screen h-full w-full row place-content-center",
			)}
		>
			{/* Top-left: Logo */}
			<div
				className={cn(
					borderClass,
					"border-b-[1px] border-r-[1px] flex justify-center items-center",
				)}
			>
				<Link href="/" className="relative w-[24px] h-[36px] right-[1px]">
					<Lottie
						animationData={
							theme === "dark"
								? LogoLottieWhite
								: LogoLottieBlack
						}
						loop={false}
						autoplay={true}
						className="absolute top-0 left-0 w-full h-full object-contain scale-[1.5] duration-200 delay-200"
					/>
				</Link>
			</div>

			{/* Top-center: spacer (desktop only) */}
			<div
				className={cn(
					"hidden xl:block",
					borderClass,
					"border-b-[1px]",
				)}
			/>

			{/* Top-right: Menu button */}
			<div
				className={cn(
					borderClass,
					"border-b-[1px] xl:border-l-[1px] flex-row flex justify-end xl:justify-center",
					"pr-[30px] xl:pr-0 items-center gap-[10px] col-span-2 xl:col-span-1",
				)}
			>
				<MenuButton
					theme={theme}
					colors={colors}
					onClick={handleMenuClick}
					menuOpen={menuOpen}
				/>
			</div>

			{/* Left sidebar: Social links */}
			<div
				className={cn(
					"flex justify-center items-center",
					borderClass,
					"border-r-[1px]",
				)}
			>
				<div className="flex justify-center items-center gap-[30px] flex-col">
					{SOCIAL_LINKS.map((social) => (
						<m.a
							key={social.alt}
							href={social.href}
							target="_blank"
							{...hoverTapScale}
							transition={socialTransition}
							className="relative w-[28px] h-[28px] cursor-pointer"
						>
							<Image
								src={
									theme === "dark"
										? social.darkIcon
										: social.lightIcon
								}
								alt={social.alt}
								fill
								sizes="28px"
								className="object-contain"
							/>
						</m.a>
					))}
				</div>
			</div>

			{/* Main content area */}
			<div
				className={cn(
					"relative col-span-2 xl:col-span-1 flex justify-start items-start h-full w-full",
					menuOpen ? "overflow-y-hidden" : "overflow-y-scroll",
				)}
			>
				<MenuComponent
					menuOpen={menuOpen}
					theme={theme}
					colors={colors}
					onClick={() => setMenuOpen(!menuOpen)}
				/>
				{children}
			</div>

			{/* Right sidebar spacer (desktop only) */}
			<div
				className={cn(
					"hidden xl:block",
					borderClass,
					"border-l-[1px]",
				)}
			/>

			{/* Bottom-left: Copyright */}
			<div
				className={cn(
					borderClass,
					"xl:border-r-[1px] border-t-[1px] col-span-2 xl:col-span-1",
					"flex pl-10 xl:pl-0 xl:justify-center items-center",
				)}
			>
				<p className={cn(colors.primary, "font-extralight")}>
					© Fabio Di Nota{" "}
					<span className="inline xl:hidden">2023</span>
				</p>
			</div>

			{/* Bottom-center spacer (desktop only) */}
			<div
				className={cn(
					"hidden xl:block",
					borderClass,
					"border-t-[1px]",
				)}
			/>

			{/* Bottom-right: Theme switch */}
			<div
				className={cn(
					borderClass,
					"border-l-[1px] border-t-[1px] flex justify-center items-center",
				)}
			>
				<ThemeSwitch />
			</div>
		</main>
	);
};

export default MainLayout;
