import { useThemeContext } from "@/app/context/theme-context";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
	title: string;
	description: string;
	Logo: StaticImageData;
	link: string;
}

const ExperienceCard = ({
	title,
	description,
	Logo,
	link,
}: ExperienceCardProps) => {
	const { colors, border } = useThemeContext();

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
					className="object-cover object-center relative z-0"
					alt={title}
				/>
			</div>
			<Link
				href={link}
				className="w-full py-2 px-4 flex flex-col justify-center items-start group"
			>
				<h2
					className={cn(
						"text-[16px] group-hover:underline font-normal",
						colors.primary,
					)}
				>
					{title}
				</h2>
				<p className={cn("text-[12px] font-extralight", colors.secondary)}>
					{description}
				</p>
			</Link>
		</div>
	);
};

export default ExperienceCard;
