"use client";

import React from "react";
import { useThemeContext } from "@/context/theme-context";
import ProjectCard from "@/features/projects/project-card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { m } from "motion/react";
import { DesignProjectsList } from "@/features/projects/data";
import GoBackButton from "@/components/ui/go-back-button";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";

function DesignProjects() {
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
					Design Projects
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
					These design projects cover portfolio interfaces, brand
					pages, mobile app concepts, and product prototypes. The work
					focuses on hierarchy, usability, interaction, visual systems,
					and the handoff details that make a design practical to
					build in React, Next.js, or another modern frontend stack.
				</p>
				<p>
					For more technical builds, view the main{" "}
					<Link className="underline" href="/projects">
						projects portfolio
					</Link>
					, read more{" "}
					<Link className="underline" href="/about">
						about my background
					</Link>
					, or{" "}
					<Link className="underline" href="/contact">
						contact me
					</Link>{" "}
					about a UI audit, redesign, prototype, or product design
					project.
				</p>
			</m.div>

			<div
				className={cn(
					"h-max w-full grid gap-5 p-5 mb-5 place-content-start place-items-center grid-cols-1 md:grid-cols-2 2xl:grid-cols-3",
					colors.primary,
				)}
			>
				{DesignProjectsList.map((project, index) => (
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

export default DesignProjects;
