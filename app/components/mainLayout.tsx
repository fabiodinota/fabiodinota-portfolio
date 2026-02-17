"use client";

import { ReactNode, useEffect, useState } from "react";
import ThemeSwitch from "./themeSwitch";
import { useThemeContext } from "../context/themeContext";
import Image from "next/image";
import LogoLight from "../../public/Logo_light.svg";
import LogoDark from "../../public/Logo_dark.svg";
import GithubLight from "../../public/GitHub_light.svg";
import GithubDark from "../../public/GitHub_dark.svg";
import LinkedinLight from "../../public/Linkedin_light.svg";
import LinkedinDark from "../../public/Linkedin_dark.svg";
import TwitterLight from "../../public/Twitter_light.svg";
import TwitterDark from "../../public/Twitter_dark.svg";
import MenuComponent from "./menu";
import MenuButton from "./menuButton";
import { m } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Lottie from "lottie-react";
import LogoLottieWhite from "../../public/Logo_white.json";
import LogoLottieBlack from "../../public/Logo_black.json";

const MainLayout = ({ children }: { children: ReactNode }) => {
	const pathname = usePathname();

	const { colors, theme } = useThemeContext();

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




	return (
		<main
			className={`${colors.background} grid grid-rows-[75px_1fr_75px] grid-cols-[75px_1fr_75px] xl:grid-rows-[100px_1fr_100px] xl:grid-cols-[150px_1fr_150px] min-h-screen h-full w-full row place-content-center`}
		>
			<div
				className={`${
					theme === "dark" ? "border-white" : "border-black"
				} border-b-[1px] border-r-[1px] flex justify-center items-center`}
			>
				<Link
					href="/"
					className="relative w-[24px] h-[36px] right-[1px]"
				>
                    <Lottie
                        animationData={theme === "dark" ? LogoLottieWhite : LogoLottieBlack}
                        loop={false}
                        autoplay={true}
                        className={`absolute top-0 left-0 w-full h-full object-contain scale-[1.5] duration-200 delay-200`}
                    />
				</Link>
			</div>
			<div
				className={` hidden xl:block ${
					theme === "dark" ? "border-white" : "border-black"
				} border-b-[1px]`}
			></div>
			<div
				className={`${
					theme === "dark" ? "border-white" : "border-black"
				} border-b-[1px] xl:border-l-[1px] flex-row  flex justify-end xl:justify-center pr-[30px] xl:pr-0 items-center gap-[10px] col-span-2 xl:col-span-1`}
			>
				<MenuButton
					theme={theme}
					colors={colors}
					onClick={() => handleMenuClick()}
					menuOpen={menuOpen}
				/>
			</div>
			<div
				className={`flex justify-center items-center ${
					theme === "dark" ? "border-white" : "border-black"
				} border-r-[1px]`}
			>
				<div className="flex justify-center items-center gap-[30px] flex-col">
					<m.a
						href="https://github.com/fabiodinota"
						target="_blank"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{
							type: "spring",
							damping: 20,
							stiffness: 300,
                            duration: 0.5,
						}}
						className="relative w-[28px] h-[28px] cursor-pointer"
					>
						<Image
							src={theme === "dark" ? GithubDark : GithubLight}
							alt="GitHub"
							fill
							sizes="28px"
							className="object-contain"
						/>
					</m.a>
					<m.a
						href="https://linkedin.com/in/fabiodinota"
						target="_blank"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{
							type: "spring",
							damping: 20,
							stiffness: 300,
                            ease: [0.200,0.005,0.000,0.995] as const,
                            duration: 0.5,
						}}
						className="relative w-[28px] h-[28px] cursor-pointer"
					>
						<Image
							src={
								theme === "dark" ? LinkedinDark : LinkedinLight
							}
							alt="LinkedIn"
							fill
							sizes="28px"
							className="object-contain"
						/>
					</m.a>
					<m.a
						href="https://twitter.com/fabiodinota"
						target="_blank"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{
							type: "spring",
							damping: 20,
							stiffness: 300,
                            ease: [0.200,0.005,0.000,0.995] as const,
                            duration: 0.5,
						}}
						className="relative w-[28px] h-[28px] cursor-pointer"
					>
						<Image
							src={theme === "dark" ? TwitterDark : TwitterLight}
							alt="Twitter"
							fill
							sizes="28px"
							className="object-contain"
						/>
					</m.a>
				</div>
			</div>
			<div
				className={`relative col-span-2 xl:col-span-1 ${
					menuOpen ? "overflow-y-hidden " : "overflow-y-scroll"
				} flex justify-start items-start h-full w-full`}
			>
				<MenuComponent
					menuOpen={menuOpen}
					theme={theme}
					colors={colors}
					onClick={() => setMenuOpen(!menuOpen)}
				/>
				{children}
			</div>
			<div
				className={`hidden xl:block ${
					theme === "dark" ? "border-white" : "border-black"
				} border-l-[1px]`}
			></div>
			<div
				className={`${
					theme === "dark" ? "border-white" : "border-black"
				} xl:border-r-[1px] border-t-[1px] col-span-2 xl:col-span-1  flex pl-10 xl:pl-0 xl:justify-center items-center`}
			>
				<p className={`${colors.primary} font-extralight`}>
					© Fabio Di Nota{" "}
					<span className="inline xl:hidden">2023</span>
				</p>
			</div>
			<div
				className={`hidden xl:block  ${
					theme === "dark" ? "border-white" : "border-black"
				} border-t-[1px]`}
			></div>
			<div
				className={`${
					theme === "dark" ? "border-white" : "border-black"
				} border-l-[1px] border-t-[1px] flex justify-center items-center`}
			>
				<ThemeSwitch />
			</div>
		</main>
	);
};



export default MainLayout;
