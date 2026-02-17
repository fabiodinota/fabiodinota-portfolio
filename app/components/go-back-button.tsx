"use client";

import Image from "next/image";
import ArrowDark from "@/public/Arrow_dark.svg";
import ArrowLight from "@/public/Arrow_light.svg";
import { useThemeContext } from "@/app/context/theme-context";
import { cn } from "@/lib/utils";

interface GoBackButtonProps {
	onClick: () => void;
	className?: string;
}

const GoBackButton = ({ onClick, className }: GoBackButtonProps) => {
	const { colors, theme } = useThemeContext();

	return (
		<button
			onClick={onClick}
			className={cn(
				"flex flex-row justify-center items-center font-extralight gap-[10px]",
				colors.primary,
				className,
			)}
		>
			<span className="relative w-4 h-4">
				<Image
					src={theme === "dark" ? ArrowDark : ArrowLight}
					alt="Go Back"
					fill
					sizes="16px"
					className="object-contain"
				/>
			</span>
			Go Back
		</button>
	);
};

export default GoBackButton;
