import Image from "next/image";
import { StaticImageData } from "next/image";
import { useThemeContext } from "@/app/context/theme-context";
import Link from "next/link";
import { m } from "motion/react";
import { useMediaQuery } from "react-responsive";
import LinkOrDiv from "./link-or-div";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/motion";

interface ProjectCardProps {
	title: string;
	description: string;
	role?: string;
	tags?: string[];
	link: string;
	image: StaticImageData;
	index: number;
	caseStudySlug?: string;
}

const ProjectCard = ({
	title,
	description,
	role,
	tags,
	link,
	image,
	index,
	caseStudySlug,
}: ProjectCardProps) => {
	const { colors, border } = useThemeContext();
	const isXS = useMediaQuery({ query: "(max-width: 475px)" });

	return (
		<m.div
			{...fadeInUp(index * 0.08)}
			className={cn("w-full h-full flex flex-col border", border)}
		>
			{caseStudySlug ? (
				<Link href={`/projects/${caseStudySlug}`}>
					<Image
						quality={100}
						src={image}
						priority
						className="aspect-video w-full h-full object-cover"
						alt={title}
					/>
				</Link>
			) : (
				<Image
					quality={100}
					src={image}
					priority
					className="aspect-video w-full h-full object-cover"
					alt={title}
				/>
			)}
			<div
				className={cn(
					"flex flex-col gap-3 px-5 py-4 border-t",
					border,
				)}
			>
				{/* Title row with tags on the right */}
				<div className="flex flex-row justify-between items-start gap-4">
					<div className="flex flex-col gap-0.5 shrink-0">
						<h4
							className={cn(
								"font-medium leading-tight text-[20px]",
								colors.primary,
							)}
						>
							{title}
						</h4>
						<p
							className={cn(
								"font-extralight text-[16px]",
								colors.secondary,
							)}
						>
							{role || description}
						</p>
					</div>
					{tags && tags.length > 0 && (
						<div className="flex flex-wrap gap-1.5 justify-end">
							{tags.map((tag) => (
								<span
									key={tag}
									className={cn(
										"text-[14px] font-light px-2 py-0.5 rounded-sm transition-colors duration-200 cursor-default border-[#ffffff50] text-white/50 hover:border-white border-[1px] cursor-pointer hover:text-white",

									)}
								>
									{tag}
								</span>
							))}
						</div>
					)}
				</div>

				{/* Action buttons */}
				<div className="flex flex-row gap-2 mt-1">
					{caseStudySlug && (
						<Link
							className={cn(
								"font-extralight text-[16px] grid place-items-center border px-5 py-2 hover:underline",
								border,
								colors.primary,
							)}
							href={`/projects/${caseStudySlug}`}
						>
							Case Study 
						</Link>
					)}
					{link && (
						<Link
							className={cn(
								"font-extralight text-[16px] grid place-items-center border px-5 py-2 hover:underline",
								border,
								colors.primary,
							)}
							href={link}
							target="_blank"
						>
							View
						</Link>
					)}
				</div>
			</div>
		</m.div>
	);
};

export default ProjectCard;
