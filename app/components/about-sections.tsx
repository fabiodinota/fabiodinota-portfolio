"use client";

import React from "react";
import Image from "next/image";
import ArrowDark from "@/public/Arrow_dark.svg";
import ArrowLight from "@/public/Arrow_light.svg";
import { m } from "motion/react";
import { StaticImageData } from "next/image";
import type { ThemeColors } from "@/lib/types";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";

/* ---------- AboutHero ---------- */

interface AboutHeroProps {
	colors: ThemeColors;
	theme: string;
	isOpenBig: boolean;
	placeholderDark: StaticImageData;
	placeholderLight: StaticImageData;
}

export function AboutHero({
	colors,
	theme,
	isOpenBig,
	placeholderDark,
	placeholderLight,
}: AboutHeroProps) {
	return (
		<div
			className={cn(
				"lg:flex justify-center items-center flex-wrap md:flex-nowrap p-5 md:p-10 py-5 xl:gap-5 flex-row h-[50%] lg:h-full hidden flex-grow-0 custom-ease duration-700 overflow-x-hidden",
				isOpenBig
					? "scale-100 lg:max-xl:scale-90 2xl:scale-[1.2]"
					: "lg:max-xl:scale-100 xl:scale-[1.10] 2xl:scale-[1.20]",
			)}
		>
			<m.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0, ease: EASE_SMOOTH }}
				className={cn(
					"max-w-[900px] md:max-w-none w-[100%] xl:w-[50%] xl:pb-0 max-h-[450px] pr-5",
					"flex justify-start lg:justify-center items-start flex-col",
					colors.primary,
				)}
			>
				<h1 className="text-[36px] md:text-[36px] 2xl:pb-2 font-semibold hidden lg:block">
					About Me
				</h1>
				<p className="sm:text-justify sm:pb-0 font-extralight">
					I&apos;m a tech-savvy software engineer and designer from
					Antwerp, Belgium. I&apos;m passionate about all things tech
					and love doodling ideas and coding in my free time.
					<br />
					<br />
					I have experience with JavaScript, Typescript, React,
					Next.js, and various design tools like Figma, Illustrator,
					and Photoshop, along with video and animation software.
					<br />
					<br />I enjoy taking on new challenges and would be thrilled
					to collaborate on exciting projects. Let&apos;s create
					something awesome together!
				</p>
			</m.div>
			<m.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.1, ease: EASE_SMOOTH }}
				className="hidden sm:block flex-grow w-full xl:w-[350px] relative h-full min-h-[300px] max-h-[400px] xl:h-[350px] xl:flex-grow-0 z-auto"
			>
				<Image
					sizes="400px"
					src={theme === "dark" ? placeholderDark : placeholderLight}
					quality={100}
					fill
					className="object-contain relative z-0"
					alt="About Fabio Di Nota"
				/>
			</m.div>
		</div>
	);
}

/* ---------- AccordionSection ---------- */

interface AccordionSectionProps {
	colors: ThemeColors;
	theme: string;
	border: string;
	title: string;
	isOpen: boolean;
	sectionIndex: number;
	onAccordionClick: (section: number) => void;
	zIndex: string;
	borderClasses?: string;
	children: React.ReactNode;
}

export function AccordionSection({
	colors,
	theme,
	border,
	title,
	isOpen,
	sectionIndex,
	onAccordionClick,
	zIndex,
	borderClasses = "",
	children,
}: AccordionSectionProps) {
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			onAccordionClick(sectionIndex);
		}
	};

	return (
		<div
			onClick={() => onAccordionClick(sectionIndex)}
			onKeyDown={handleKeyDown}
			role="button"
			tabIndex={0}
			aria-expanded={isOpen}
			className={cn(
				"transition-all duration-1000 custom-ease lg:hidden flex w-full flex-col justify-start items-center relative top-0",
				isOpen ? "h-full overflow-y-scroll" : "h-[80px] flex-shrink-0",
				zIndex,
			)}
		>
			<div
				className={cn(
					"w-full absolute top-0 left-0 flex items-center justify-between flex-shrink-0 flex-grow-0 h-[80px] px-[30px]",
					borderClasses,
					colors.background,
					border,
					colors.primary,
					zIndex,
				)}
			>
				<span>{title}</span>
				<span
					className={cn(
						"duration-500",
						isOpen ? "rotate-[450deg]" : "rotate-[270deg]",
					)}
				>
					<Image
						src={theme === "dark" ? ArrowDark : ArrowLight}
						alt="arrow"
					/>
				</span>
			</div>
			<div className="relative w-full h-full overflow-y-scroll z-0">
				<div
					className={cn(
						"w-full absolute top-[80px] left-0 p-5",
						colors.background,
					)}
				>
					{children}
				</div>
			</div>
		</div>
	);
}

/* ---------- SkillsExperiencePanel ---------- */

interface SkillsExperiencePanelProps {
	colors: ThemeColors;
	theme: string;
	border: string;
	isOpenBig: boolean;
	setIsOpenBig: (value: boolean) => void;
	skillsContent: React.ReactNode;
	experienceContent: React.ReactNode;
}

export function SkillsExperiencePanel({
	colors,
	theme,
	border,
	isOpenBig,
	setIsOpenBig,
	skillsContent,
	experienceContent,
}: SkillsExperiencePanelProps) {
	return (
		<div
			className={cn(
				"hidden lg:flex duration-700 custom-ease origin-bottom w-full flex-col justify-start items-center relative z-10",
				isOpenBig ? "h-[300px]" : "h-[60px] border-b-0",
			)}
		>
			<div
				onClick={() => setIsOpenBig(!isOpenBig)}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						setIsOpenBig(!isOpenBig);
					}
				}}
				role="button"
				tabIndex={0}
				aria-expanded={isOpenBig}
				className={cn(
					"w-full h-[60px] flex justify-between cursor-pointer flex-shrink-0 items-center px-[30px] border-t-[1px]",
					isOpenBig
						? "border-bottom-animation duration-0"
						: "border-bottom-animation-out",
					colors.background,
					border,
					colors.primary,
				)}
			>
				<span>Skills & Experience</span>
				<span
					className={cn(
						"duration-500",
						isOpenBig ? "rotate-[450deg]" : "rotate-[270deg]",
					)}
				>
					<Image
						src={theme === "dark" ? ArrowDark : ArrowLight}
						alt="arrow"
					/>
				</span>
			</div>
			<div className="h-full pb-[60px] flex flex-row w-full">
				<div className="w-1/2 overflow-y-scroll h-full">
					<div
						className={cn(
							"w-full h-max p-5 space-y-5 border-r-[1px]",
							border,
						)}
					>
						{skillsContent}
					</div>
				</div>
				<div className="w-1/2 overflow-y-scroll h-full">
					<div className="w-full h-max p-5 space-y-5">
						{experienceContent}
					</div>
				</div>
			</div>
		</div>
	);
}
