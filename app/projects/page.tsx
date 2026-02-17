"use client";

import React from "react";
import { m } from "motion/react";
import { useThemeContext } from "@/app/context/theme-context";
import ProjectCard from "@/app/components/project-card";
import ProjectFolderCard from "@/app/components/project-folder-card";
import { FeaturedProjectsList } from "@/app/data/projects";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/motion";

function Projects() {
	const { colors } = useThemeContext();

	return (
		<div className="h-full w-full flex flex-col overflow-y-scroll">
			<m.h1
				{...fadeInUp(0.08)}
				className={cn(
					"p-5 pb-0 text-[26px] xs:text-[32px] md:text-[36px] font-semibold",
					colors.primary,
				)}
			>
				Featured Projects
			</m.h1>

			<div
				className={cn(
					"h-max w-full grid gap-5 p-5 place-content-start place-items-center",
					"grid-cols-1 md:grid-cols-2 2xl:grid-cols-3",
					colors.primary,
				)}
			>
				{FeaturedProjectsList.map((project, index) => (
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

			<m.h1
				{...fadeInUp(5 * 0.08)}
				className={cn(
					"p-5 pb-0 text-[26px] xs:text-[32px] md:text-[36px] font-semibold",
					colors.primary,
				)}
			>
				Other Projects
			</m.h1>

			<div
				className={cn(
					"h-full w-full grid gap-5 p-5 place-content-start place-items-center",
					"grid-cols-1 md:grid-cols-2 2xl:grid-cols-3",
					colors.primary,
				)}
			>
				<ProjectFolderCard
					title="Design"
					link="/projects/design"
					index={6}
				/>
				<ProjectFolderCard
					title="School"
					link="/projects/school"
					index={7}
				/>
				<ProjectFolderCard
					title="Lab"
					link="/projects/lab"
					index={8}
				/>
				<ProjectFolderCard
					title="Other"
					link="/projects/other"
					index={9}
				/>
			</div>
		</div>
	);
}

export default Projects;
