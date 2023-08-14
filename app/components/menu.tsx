import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface MenuProps {
	colors: {
		primary: string;
		secondary: string;
		background: string;
		border: string;
		red: string;
	};
	theme: string;
	onClick: () => void;
	menuOpen: boolean;
}

const MenuComponent = ({ colors, theme, menuOpen, onClick }: MenuProps) => {
	const MenuItems = [
		{
			text: "Home",
			link: "/",
			number: "01",
		},
		{
			text: "About Me",
			link: "/about",
			number: "02",
		},
		{
			text: "Projects",
			link: "/projects",
			number: "03",
		},
		{
			text: "Contact",
			link: "/contact",
			number: "04",
		},
	];

	const MenuItemVariants = {
		hidden: (index: number) => ({
			opacity: 0,
			y: -60,
			transition: {
				delay: index * 0.1,
				duration: 0.2,
			},
		}),
		animate: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: index * 0.1,
				duration: 0.5,
				ease: [0, 0.5, 0.42, 0.99],
			},
		}),
		exit: (index: number) => ({
			opacity: 0,
			y: 60,
			transition: {
				delay: index * -0.1,
				duration: 0.5,
				ease: [0.635, 0.005, 1.0, 0.44],
			},
		}),
	};

	const MenuVariant = {
		hidden: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.2,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.2,
				delay: 0.4,
			},
		},
	};

	const pathname = usePathname();

	return (
		<AnimatePresence mode="wait">
			{menuOpen && (
				<motion.div
					initial="hidden"
					animate="animate"
					exit="exit"
					variants={MenuVariant}
					className={`absolute z-50 ${colors.background} top-0 left-0 w-full h-full flex flex-col justify-start items-stretch`}
				>
                    {MenuItems.map((item, index) => (
                        <motion.div
                            custom={index}
                            variants={MenuItemVariants}
                            key={index}
                            className={`pl-[30px] xl:pl-[50px] flex justify-start items-center w-full h-full ${
                                theme === "dark"
                                    ? "border-white"
                                    : "border-black"
                            } ${
                                index === 0 ? "border-none" : "border-t-[1px]"
                            }`}
                        >
                            <Link
                                href={item.link}
                                onError={() => console.log("error")}
                                onClick={onClick}
                                className={`text-[10vw] xs:text-[42px] sm:text-[50px] xl:text-[60px] `}
                            >
                                <span
                                    className={`font-semibold ${
                                        pathname === item.link
                                            ? colors.red
                                            : colors.primary
                                    }`}
                                >
                                    {item.number}
                                </span>
                                <span className={`${colors.red}`}>.</span>
                                <span
                                    className={`font-extralight pl-[10px] ${colors.primary}`}
                                >
                                    {item.text}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default MenuComponent;
