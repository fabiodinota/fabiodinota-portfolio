"use client";

import React, { useEffect, useRef } from "react";
import { useThemeContext } from "../../context/themeContext";
import ProjectComponent from "../../components/ProjectComponent";

import PLP from "../../../public/projects/cover_plp.png";
import PortfolioKunstkaai from "../../../public/projects/cover_portfolio_kunstkaai.png";
import Trap from "../../../public/projects/trap_fabiodinota.png";
import Picnic from "../../../public/projects/picknicktafel_fabiodinota.png";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ArrowDark from "../../../public/Arrow_dark.svg";
import ArrowLight from "../../../public/Arrow_light.svg";
import { motion } from "motion/react";
import { SchoolProjectsList } from "@/app/components/ProjectsList";

function SchoolProjects() {
	const { colors, theme } = useThemeContext();
    const childRef = useRef(null)

    const router = useRouter();

	return (
        <div className="h-full w-full flex flex-col"> 
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 * 0.08, ease: [0.200,0.005,0.000,0.995] }}
                className="w-full flex flex-row justify-between p-5 pb-0"
            >
                <h1 className={` ${colors.primary} text-[20px] xs:text-[26px] md:text-[36px] font-semibold`}>
                    School Projects
                </h1>
                <button
					onClick={router.back}
					className={`flex flex-row justify-center items-center ${
						colors.primary
					} font-extralight gap-[10px]`}
				>
					<span className="relative w-4 h-4">
						<Image
							src={theme === "dark" ? ArrowDark : ArrowLight}
							alt="Go Back"
							fill
							className="object-contain"
						/>
					</span>
					Go Back
				</button>
            </motion.div>
            <div
                ref={childRef}
                className={`${colors.primary} h-max w-full grid gap-5 p-5 mb-5 place-content-start place-items-center grid-cols-1 md:grid-cols-2 2xl:grid-cols-3`}
            >
                {SchoolProjectsList.map((project, index) => (
                    <ProjectComponent
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        image={project.image}
                        index={index + 1}
                        key={index}
                    />
                ))}
            </div>
        </div>
	);
}

export default SchoolProjects;
