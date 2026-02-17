import { useThemeContext } from "@/app/context/theme-context";
import Link from "next/link";
import { m } from "motion/react";
import { useMediaQuery } from "react-responsive";
import LinkOrDiv from "./link-or-div";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/motion";

interface ProjectFolderCardProps {
	title: string;
	link: string;
	index: number;
}

const ProjectFolderCard = ({ title, link, index }: ProjectFolderCardProps) => {
	const { colors, border } = useThemeContext();
	const isXS = useMediaQuery({ query: "(max-width: 475px)" });

	return (
		<m.div className="w-full" {...fadeInUp(index * 0.08)}>
			<LinkOrDiv
				href={link}
				isXS={isXS}
				className={cn(
					"flex flex-row w-full h-[70px] justify-between items-center px-5 border parent-project cursor-pointer",
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
				</div>
				<Link
					className={cn(
						"font-extralight hidden xs:grid place-items-center border px-5 py-2 hover:underline",
						border,
						colors.primary,
					)}
					href={link}
				>
					View
				</Link>
			</LinkOrDiv>
		</m.div>
	);
};

export default ProjectFolderCard;