"use client";

import React from "react";
import { useThemeContext } from "@/app/context/theme-context";
import ProjectCard from "@/app/components/project-card";
import { useRouter } from "next/navigation";
import { m } from "motion/react";
import { OtherProjectsList } from "@/app/data/projects";
import GoBackButton from "@/app/components/go-back-button";
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
						key={project.link}
					/>
				))}
			</div>
		</div>
	);
}

export default OtherProjects;
