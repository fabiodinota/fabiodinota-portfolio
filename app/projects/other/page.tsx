"use client";

import React from "react";
import { useThemeContext } from "@/context/theme-context";
import ProjectCard from "@/features/projects/project-card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { m } from "motion/react";
import { OtherProjectsList } from "@/features/projects/data";
import GoBackButton from "@/components/ui/go-back-button";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";

function OtherProjects() {
	const { colors } = useThemeContext();
	const router = useRouter();

	return (
		<div className="h-full w-full flex flex-col">
			<m.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 1,
					delay: 0.08,
					ease: EASE_SMOOTH,
				}}
				className="w-full flex flex-row justify-between p-5 pb-0"
			>
				<h1
					className={cn(
						"text-[20px] xs:text-[26px] md:text-[36px] font-semibold",
						colors.primary,
					)}
				>
					Other Projects
				</h1>
				<GoBackButton onClick={router.back} />
			</m.div>
			<m.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.16, ease: EASE_SMOOTH }}
				className={cn(
					"px-5 pt-4 max-w-[900px] flex flex-col gap-3 text-[15px] md:text-[17px] font-extralight leading-relaxed",
					colors.primary,
				)}
			>
				<p>
					This section collects additional web design and development
					work, including agency websites, medical websites, crypto
					landing pages, and smaller client-facing builds. The projects
					are varied, but they share the same priorities: clear
					information architecture, responsive layouts, dependable
					implementation, and interfaces that match the business goal.
				</p>
				<p>
					For larger technical case studies, return to the{" "}
					<Link className="underline" href="/projects">
						project overview
					</Link>
					, explore{" "}
					<Link className="underline" href="/projects/design">
						UI/UX design work
					</Link>
					, or{" "}
					<Link className="underline" href="/contact">
						get in touch
					</Link>{" "}
					about a website, product interface, or frontend engineering
					project.
				</p>
			</m.div>

			<div
				className={cn(
					"h-max w-full grid gap-5 p-5 mb-5 place-content-start place-items-center grid-cols-1 md:grid-cols-2 2xl:grid-cols-3",
					colors.primary,
				)}
			>
				{OtherProjectsList.map((project, index) => (
					<ProjectCard
						title={project.title}
						description={project.description}
						link={project.link}
						image={project.image}
						index={index + 1}
						key={project.link || project.title}
					/>
				))}
			</div>
		</div>
	);
}

export default OtherProjects;
