"use client";

import { m } from "motion/react";
import type { ThemeColors } from "@/lib/types";
import { cn } from "@/lib/utils";

interface MenuButtonProps {
	colors: ThemeColors;
	menuOpen: boolean;
	theme: string;
	onClick: () => void;
}

const MENU_TEXT = "Menu";
const CLOSE_TEXT = "Close";

const textVariant = {
	initial: { y: -23, display: "block" as const },
	animate: { y: 0 },
	exit: { y: 20, display: "block" as const },
};

const menuIconVariant = {
	open: { scale: 0.9 },
	closed: { scale: 1.1, transition: { duration: 0 } },
};

const textTransition = (index: number) => ({
	ease: [0, 0.5, 0.42, 0.99] as const,
	duration: 0.3,
	delay: index * 0.05,
});

const MenuButton = ({ menuOpen, theme, colors, onClick }: MenuButtonProps) => {
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			onClick();
		}
	};

	const strokeColor = theme === "dark" ? "white" : "black";

	return (
		<div
			className="flex flex-row items-center gap-[10px] cursor-pointer"
			onClick={onClick}
			onKeyDown={handleKeyDown}
			role="button"
			tabIndex={0}
			aria-label={menuOpen ? "Close menu" : "Open menu"}
		>
			<svg
				width="28"
				height="26"
				viewBox="0 0 28 26"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				{menuOpen && (
					<m.g
						key="Close"
						variants={menuIconVariant}
						animate={menuOpen ? "open" : "closed"}
					>
						<path
							d="M22.5 3.5L3.5 22.5"
							stroke={strokeColor}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M3.5 3.5L22.5 22.5"
							stroke={strokeColor}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</m.g>
				)}
				{!menuOpen && (
					<m.g
						key="Menu"
						variants={menuIconVariant}
						animate={menuOpen ? "open" : "closed"}
					>
						<path d="M1 5.41675H27" stroke={strokeColor} strokeLinecap="round" />
						<path d="M1 13H19.4167" stroke={strokeColor} strokeLinecap="round" />
						<path d="M1 20.5835H11.8333" stroke={strokeColor} strokeLinecap="round" />
					</m.g>
				)}
			</svg>

			<div
				className={cn(
					"text-[18px] select-none font-extralight relative w-[50px] h-[28px]",
					colors.primary,
				)}
			>
				{/* "Menu" text */}
				<div className="absolute top-0 left-0 overflow-hidden h-[26px] flex flex-row">
					{MENU_TEXT.split("").map((char, index) => (
						<m.div
							variants={textVariant}
							initial="animate"
							animate={menuOpen ? "initial" : "animate"}
							exit="exit"
							transition={textTransition(index)}
							className="w-max"
							key={`menu-${char}-${index}`}
						>
							{char}
						</m.div>
					))}
				</div>

				{/* "Close" text */}
				<div className="absolute top-0 left-0 overflow-hidden flex flex-row">
					{CLOSE_TEXT.split("").map((char, index) => (
						<m.div
							variants={textVariant}
							initial="exit"
							animate={menuOpen ? "animate" : "exit"}
							exit="exit"
							transition={textTransition(index)}
							className="w-max"
							key={`close-${char}-${index}`}
						>
							{char}
						</m.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MenuButton;
