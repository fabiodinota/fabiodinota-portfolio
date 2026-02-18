"use client";

import React from "react";
import { m } from "motion/react";
import { useThemeContext } from "@/app/context/theme-context";
import { useRouter, useParams } from "next/navigation";
import { AllProjects } from "@/app/data/projects";
import GoBackButton from "@/app/components/go-back-button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH, fadeInUp } from "@/lib/motion";

export default function CaseStudyPage() {
	const { colors, border } = useThemeContext();
	const router = useRouter();
	const params = useParams();

	const slug = params.slug as string;
	const project = AllProjects.find((p) => p.caseStudySlug === slug);

	if (!project) {
		return (
			<div
				className={cn(
					"h-full w-full flex flex-col items-center justify-center p-10",
					colors.primary,
				)}
			>
				<h1 className="text-[36px] font-semibold">
					Project not found
				</h1>
				<GoBackButton onClick={router.back} />
			</div>
		);
	}

	return (
		<div className="h-full w-full flex flex-col overflow-y-scroll">
			{/* Header */}
			<m.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 1,
					delay: 0.08,
					ease: EASE_SMOOTH,
				}}
				className="w-full flex flex-row justify-between items-start p-5 pb-0"
			>
				<div className="flex flex-col gap-1">
					<h1
						className={cn(
							"text-[26px] xs:text-[32px] md:text-[36px] font-semibold",
							colors.primary,
						)}
					>
						{project.title}
					</h1>
					<p
						className={cn(
							"text-[14px] font-extralight",
							colors.secondary,
						)}
					>
						{project.role}
					</p>
				</div>
				<GoBackButton onClick={router.back} />
			</m.div>

			{/* Tags */}
			<m.div
				{...fadeInUp(0.16)}
				className="flex flex-wrap gap-2 px-5 pt-3"
			>
				{project.tags.map((tag) => (
					<span
						key={tag}
						className={cn(
							"text-[12px] font-light px-3 py-1 border rounded-sm transition-colors duration-200 hover:bg-white hover:text-black cursor-default",
							border,
							colors.secondary,
						)}
					>
						{tag}
					</span>
				))}
			</m.div>

			{/* Cover image */}
			<m.div {...fadeInUp(0.24)} className="px-5 pt-5">
				<div
					className={cn(
						"w-full border overflow-hidden",
						border,
					)}
				>
					<Image
						quality={100}
						src={project.image}
						priority
						className="w-full h-auto object-cover"
						alt={project.title}
					/>
				</div>
			</m.div>

			{/* Content */}
			<m.div
				{...fadeInUp(0.32)}
				className="flex flex-col gap-6 p-5"
			>
				{/* Summary */}
				<div className="flex flex-col gap-2">
					<h2
						className={cn(
							"text-[20px] font-medium",
							colors.primary,
						)}
					>
						Overview
					</h2>
					<p
						className={cn(
							"text-[15px] font-extralight leading-relaxed max-w-[700px]",
							colors.primary,
						)}
					>
						{project.summary}
					</p>
				</div>

				{/* Highlight */}
				{project.highlight && (
					<div className="flex flex-col gap-2">
						<h2
							className={cn(
								"text-[20px] font-medium",
								colors.primary,
							)}
						>
							Highlight
						</h2>
						<p
							className={cn(
								"text-[15px] font-extralight leading-relaxed max-w-[700px]",
								colors.primary,
							)}
						>
							{project.highlight}
						</p>
					</div>
				)}

				{/* Placeholder */}
				<div
					className={cn(
						"border rounded-sm px-6 py-8 mt-4 text-center max-w-[700px]",
						border,
					)}
				>
					<p
						className={cn(
							"text-[16px] font-light",
							colors.secondary,
						)}
					>
						Full case study coming soon.
					</p>
					<p
						className={cn(
							"text-[13px] font-extralight mt-2",
							colors.secondary,
						)}
					>
						A detailed breakdown of the architecture, technical
						decisions, and lessons learned will be published here.
					</p>
				</div>
			</m.div>
		</div>
	);
}
