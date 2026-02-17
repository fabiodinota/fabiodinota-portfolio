import { useThemeContext } from "@/app/context/theme-context";
import { cn } from "@/lib/utils";

interface SkillCardProps {
	title: string;
	description: string;
}

const SkillCard = ({ title, description }: SkillCardProps) => {
	const { colors, border } = useThemeContext();

	return (
		<div className={cn("w-full flex flex-row border", border, colors.primary)}>
			<div className="w-full py-2 px-4 flex flex-col justify-center items-start">
				<h2 className={cn("text-[16px] font-normal", colors.primary)}>
					{title}
				</h2>
				<p className={cn("text-[14px] font-extralight", colors.secondary)}>
					{description}
				</p>
			</div>
		</div>
	);
};

export default SkillCard;
