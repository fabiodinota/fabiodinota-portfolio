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
	link: string;
	image: StaticImageData;
	index: number;
}

const ProjectCard = ({
	title,
	description,
	link,
	image,
	index,
}: ProjectCardProps) => {
	const { colors, border } = useThemeContext();
	const isXS = useMediaQuery({ query: "(max-width: 475px)" });

	return (
		<m.div
			{...fadeInUp(index * 0.08)}
			className={cn("w-full h-full flex flex-col border", border)}
		>
			<Image
				quality={100}
				src={image}
				priority
				className="aspect-video w-full h-full"
				alt={title}
			/>
			<LinkOrDiv
				href={link}
				isXS={isXS}
				className={cn(
					"flex-row flex justify-between items-center px-5 py-3 border-t parent-project cursor-pointer",
					border,
				)}
			>
				<div className="flex flex-col justify-center">
					<h4
						className={cn(
							"font-extralight leading-tight child-project text-[20px]",
							colors.primary,
						)}
					>
						{title}
					</h4>
					<p
						className={cn(
							"font-extralight text-[14px] whitespace-nowrap min-w-[150px]",
							colors.secondary,
						)}
					>
						{description}
					</p>
				</div>
				<Link
					className={cn(
						"font-extralight hidden xs:grid place-items-center border px-5 py-2 hover:underline",
						border,
						colors.primary,
					)}
					href={link}
					target="_blank"
				>
					View
				</Link>
			</LinkOrDiv>
		</m.div>
	);
};

export default ProjectCard;
