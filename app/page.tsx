"use client";

import { useThemeContext } from "./context/themeContext";
import Link from "next/link";
import Marquee from "./components/Marquee";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

export default function Home() {
	const { theme, colors, border } = useThemeContext();

    const isMobile = useMediaQuery({ query: '(max-width: 1280px)' })
    const isMobileHeight = useMediaQuery({ query: '(max-height: 800px)' })
    
    const dragConstraints = useRef<HTMLDivElement>(null);
	return (
		<div className="w-full h-full">
			<motion.div initial={{ height: "100%" }} animate={{ height: isMobile ? isMobileHeight ? "50%" : "40%" : "60%" }} transition={{ duration: 1, delay: 1.3, ease: [0.200,0.005,0.000,0.995] }} className="h-[40%] xl:h-[60%] flex justify-center items-start flex-col pl-5 md:pl-[4vw]">
				<h1
					className={`text-[15vw]  sm:text-[10vw] lg:text-[100px] font-semibold leading-[0.8] ${colors.primary}  whitespace-nowrap`}
				>
                    <span className="flex flex-col md:flex-row gap-3 overflow-hidden">
                        <motion.span className="" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.0, ease: [0.200,0.005,0.000,0.995] }}>
                            Fabio
                        </motion.span>
                        <span className="whitespace-nowrap flex flex-row gap-3 overflow-hidden">
                                <motion.span className="" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.200,0.005,0.000,0.995] }}>
                                    Di
                                </motion.span>
                                <motion.span className="block md:inline whitespace-nowrap" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.200,0.005,0.000,0.995] }}>
                                    Nota<span className={`${colors.red} inline-flex`}>.</span>
                                </motion.span>
                        </span>
                    </span>
				</h1>
				<p
					className={` ${colors.primary} text-[22px] xs:text-[34px] sm:text-[40px] xl:text-[64px] flex flex-col leading-[1.2]`}
				>
					<span className="flex flex-shrink xs:flex-row gap-3 overflow-hidden font-light">
                        <motion.span initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: [0.200,0.005,0.000,0.995] }}>
                            Software
                        </motion.span>
                        <motion.span initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: [0.200,0.005,0.000,0.995] }}>
                            Engineer
                        </motion.span>
                    </span>
                    <span className="flex flex-row gap-3 overflow-hidden font-thin relative -top-2">
                        <motion.span initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.5, ease: [0.200,0.005,0.000,0.995] }}>
                            &
                        </motion.span>
                        <motion.span initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.6, ease: [0.200,0.005,0.000,0.995] }}>
                            Designer
                        </motion.span>
                    </span>
				</p>
			</motion.div>
			{/* <h1
					className={`text-[60px] xs:text-[70px] sm:text-[80px] xl:text-[100px] font-semibold ${colors.primary} leading-none whitespace-nowrap`}
				>
					Fabio{" "}
					<span className="block md:inline whitespace-nowrap">
						Di Nota
						<span className={`${colors.red} inline-flex`}>.</span>
					</span>
				</h1>
				<p
					className={` ${colors.primary} text-[30px] xs:text-[34px] sm:text-[40px] xl:text-[64px] flex flex-col leading-none`}
				>
					<span className="font-light">Software Engineer</span>
					<span className="font-thin">& Designer</span>
				</p>
			</div> */}
			<motion.div className={`relative ${isMobileHeight ? "h-[50%]" : "h-[60%]"} xl:h-[40%] flex flex-col-reverse xl:flex-row`}>
                {isMobileHeight ? null : (
                    <div
                        className={`h-[50%] xl:h-full ${border} border-t-[1px] xl:border-r-[1px] w-full xl:w-[50%] flex justify-center items-center flex-col p-5 gap-5`}
                    >
                        <Link
                            className={`w-full h-full border ${border} ${colors.primary} text-[15px] group xl:text-[20px] font-extralight flex justify-center items-center`}
                            href="/projects"
                        >
                            <p className="group-hover:underline">Projects</p>
                        </Link>
                        <Link
                            className={`w-full h-full border ${border} ${colors.primary} text-[15px] group  xl:text-[20px] font-extralight flex justify-center items-center`}
                            href="/contact"
                        >
                            <p className="group-hover:underline">Contact Me</p>
                        </Link>
                    </div>
                )}
				<div
                    ref={dragConstraints}
					className={`${border} border-t-[1px] ${isMobileHeight ? "h-full" : "h-[100%]"} min-h-[200px] xl:h-full w-full xl:w-[50%] overflow-x-scroll`}
				>
					<Marquee dragConstraints={dragConstraints}  />
				</div>
			</motion.div>
		</div>
	);
}
