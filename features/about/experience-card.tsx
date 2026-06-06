import { useThemeContext } from "@/context/theme-context";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
	title: string;
	company: string;
	period: string;
	Logo: StaticImageData;
	employmentType?: string;
	location?: string;
	skills?: string;
	link?: string;
}

const ExperienceCard = ({
	title,
	company,
	period,
	Logo,
	employmentType,
	location,
	skills,
	link,
}: ExperienceCardProps) => {
	const { colors, border } = useThemeContext();
	const content = (
		<div className="w-full py-2 px-4 flex flex-col justify-center items-start group">
			<h2
				className={cn(
					"text-[16px] group-hover:underline font-normal leading-tight",
					colors.primary,
				)}
			>
				{title}
			</h2>
			<p className={cn("text-[12px] font-extralight", colors.secondary)}>
				{company}
				{employmentType ? ` · ${employmentType}` : ""}
			</p>
			<p className={cn("text-[12px] font-extralight", colors.secondary)}>
				{period}
			</p>
			{location && (
				<p className={cn("text-[12px] font-extralight", colors.secondary)}>
					{location}
				</p>
			)}
			{skills && (
				<p className={cn("text-[12px] font-extralight", colors.secondary)}>
					{skills}
				</p>
			)}
		</div>
	);

	return (
		<div className={cn("w-full flex flex-row border", border, colors.primary)}>
			<div
				className={cn(
					"relative aspect-square w-20 flex-shrink-0 border-r-[1px]",
					border,
				)}
			>
				<Image
					sizes="200px"
					src={Logo}
					quality={100}
					fill
					className="object-contain object-center relative z-0 p-2"
					alt={title}
				/>
			</div>
			{link ? (
				<Link href={link} className="w-full">
					{content}
				</Link>
			) : (
				content
			)}
		</div>
	);
};

export default ExperienceCard;
