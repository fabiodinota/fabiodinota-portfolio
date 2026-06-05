"use client";

import React from "react";
import { useThemeContext } from "@/context/theme-context";
import ProjectCard from "@/features/projects/project-card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { m } from "motion/react";
import { SchoolProjectsList } from "@/features/projects/data";
import GoBackButton from "@/components/ui/go-back-button";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";

function SchoolProjects() {
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
					School Projects
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
					The school projects show earlier applied work across web
					development, interface structure, e-commerce exercises,
					personal portfolio pages, and 3D rendering. They document the
					foundation behind later client and engineering projects:
					learning how to structure pages, present ideas, and translate
					visual concepts into working digital artifacts.
				</p>
				<p>
					Continue with the main{" "}
					<Link className="underline" href="/projects">
						projects overview
					</Link>
					, compare this work with{" "}
					<Link className="underline" href="/projects/design">
						design projects
					</Link>
					, or{" "}
					<Link className="underline" href="/contact">
						contact me
					</Link>{" "}
					if you are looking for a modern web application, interface
					redesign, or frontend consulting partner.
				</p>
			</m.div>

			<div
				className={cn(
					"h-max w-full grid gap-5 p-5 mb-5 place-content-start place-items-center grid-cols-1 md:grid-cols-2 2xl:grid-cols-3",
					colors.primary,
				)}
			>
				{SchoolProjectsList.map((project, index) => (
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

export default SchoolProjects;
