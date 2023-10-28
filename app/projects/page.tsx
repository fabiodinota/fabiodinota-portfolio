"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useThemeContext } from "../context/themeContext";
import ProjectComponent from "../components/ProjectComponent";
import ProjectFolderComponent from "../components/ProjectFolderComponents";

import PerfectTeam from "../../public/projects/cover_perfectteam.png";
import Portfolio from "../../public/projects/cover_fabiodinota.png";
import Beyond from "../../public/projects/cover_beyondvision.png";
import { FeaturedProjectsList } from "../components/ProjectsList";

function Projects() {
	const { colors } = useThemeContext();
    const childRef = useRef(null)

	return (
        <div className="h-full w-full flex flex-col overflow-y-scroll"> 
             <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 * 0.08, ease: [0.200,0.005,0.000,0.995] }}
                className={`p-5 pb-0 ${colors.primary} text-[26px] xs:text-[32px] md:text-[36px] font-semibold`}>
                Featured Projects
            </motion.h1>
            <div
                ref={childRef}
                className={`${colors.primary} h-max w-full grid gap-5 p-5 place-content-start place-items-center grid-cols-1 md:grid-cols-2 2xl:grid-cols-3`}
            >
                {FeaturedProjectsList.map((project, index) => (
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
            <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 5 * 0.08, ease: [0.200,0.005,0.000,0.995] }}
                className={`p-5 pb-0 ${colors.primary} text-[26px] xs:text-[32px] md:text-[36px] font-semibold`}>
                Other Projects
            </motion.h1>
            <div
                ref={childRef}
                className={`${colors.primary} h-full w-full grid gap-5 p-5 place-content-start place-items-center grid-cols-1 md:grid-cols-2 2xl:grid-cols-3`}
            >
                <ProjectFolderComponent 
                    title="Design Projects"
                    link="/projects/design"
                    index={6}
                />
                <ProjectFolderComponent 
                    title="School Projects"
                    link="/projects/school"
                    index={7}
                />
                <ProjectFolderComponent 
                    title="Lab"
                    link="/projects/lab"
                    index={8}
                />
                <ProjectFolderComponent 
                    title="Other Projects"
                    link="/projects/other"
                    index={9}
                />
            </div>
        </div>
	);
}

export default Projects;
