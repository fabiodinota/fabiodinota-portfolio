import Link from "next/link";
import { AnimatePresence, m } from "motion/react";
import { usePathname } from "next/navigation";
import type { ThemeColors } from "@/lib/types";
import { cn } from "@/lib/utils";

interface MenuProps {
	colors: ThemeColors;
	theme: string;
	onClick: () => void;
	menuOpen: boolean;
}

const MENU_ITEMS = [
	{ text: "Home", link: "/", number: "01" },
	{ text: "About Me", link: "/about", number: "02" },
	{ text: "Projects", link: "/projects", number: "03" },
	{ text: "Contact", link: "/contact", number: "04" },
];

const menuItemVariants = {
	hidden: (index: number) => ({
		opacity: 0,
		y: -60,
		transition: { delay: index * 0.1, duration: 0.2 },
	}),
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: index * 0.1,
			duration: 0.5,
			ease: [0, 0.5, 0.42, 0.99] as const,
		},
	}),
	exit: (index: number) => ({
		opacity: 0,
		y: 60,
		transition: {
			delay: index * -0.1,
			duration: 0.5,
			ease: [0.635, 0.005, 1.0, 0.44] as const,
		},
	}),
};

const menuVariant = {
	hidden: { opacity: 0 },
	animate: { opacity: 1, transition: { duration: 0.2 } },
	exit: { opacity: 0, transition: { duration: 0.2, delay: 0.4 } },
};

const MenuComponent = ({ colors, theme, menuOpen, onClick }: MenuProps) => {
	const pathname = usePathname();

	return (
		<AnimatePresence mode="wait">
			{menuOpen && (
				<m.div
					initial="hidden"
					animate="animate"
					exit="exit"
					variants={menuVariant}
					className={cn(
						"absolute z-50 top-0 left-0 w-full h-full flex flex-col justify-start items-stretch",
						colors.background,
					)}
				>
					{MENU_ITEMS.map((item, index) => (
						<m.div
							custom={index}
							variants={menuItemVariants}
							key={item.link}
							className={cn(
								"pl-[30px] xl:pl-[50px] flex justify-start items-center w-full h-full",
								theme === "dark" ? "border-white" : "border-black",
								index !== 0 && "border-t-[1px]",
							)}
						>
							<Link
								href={item.link}
								onClick={onClick}
								className="text-[10vw] xs:text-[42px] sm:text-[50px] xl:text-[60px]"
							>
								<span
									className={cn(
										"font-semibold",
										(
											item.link === "/"
												? pathname === item.link
												: pathname.startsWith(item.link)
										)
											? colors.red
											: colors.primary,
									)}
								>
									{item.number}
								</span>
								<span className={colors.red}>.</span>
								<span
									className={cn(
										"font-extralight pl-[10px]",
										colors.primary,
									)}
								>
									{item.text}
								</span>
							</Link>
						</m.div>
					))}
				</m.div>
			)}
		</AnimatePresence>
	);
};

export default MenuComponent;
