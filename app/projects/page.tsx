"use client";

import React, { useRef } from "react";
import { m } from "motion/react";
import { useThemeContext } from "../context/themeContext";
import ProjectComponent from "../components/ProjectComponent";
import ProjectFolderComponent from "../components/ProjectFolderComponents";

import PerfectTeam from "../../public/projects/cover_perfectteam.png";
import Portfolio from "../../public/projects/cover_fabiodinota.png";
import Beyond from "../../public/projects/cover_beyondvision.png";
import { FeaturedProjectsList } from "../components/ProjectsList";

function Projects() {
	const { colors } = useThemeContext();

	return (
        <div className="h-full w-full flex flex-col overflow-y-scroll"> 
             <m.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 * 0.08, ease: [0.200,0.005,0.000,0.995] as const }}
                className={`p-5 pb-0 ${colors.primary} text-[26px] xs:text-[32px] md:text-[36px] font-semibold`}>
                Featured Projects
            </m.h1>
            <div
                className={`${colors.primary} h-max w-full grid gap-5 p-5 place-content-start place-items-center grid-cols-1 md:grid-cols-2 2xl:grid-cols-3`}
            >
                {FeaturedProjectsList.map((project, index) => (
                    <ProjectComponent
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        image={project.image}
                        index={index + 1}
                        key={project.link}
                    />
                ))} 
            </div>
            <m.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 5 * 0.08, ease: [0.200,0.005,0.000,0.995] as const }}
                className={`p-5 pb-0 ${colors.primary} text-[26px] xs:text-[32px] md:text-[36px] font-semibold`}>
                Other Projects
            </m.h1>
            <div
                className={`${colors.primary} h-full w-full grid gap-5 p-5 place-content-start place-items-center grid-cols-1 md:grid-cols-2 2xl:grid-cols-3`}
            >
                <ProjectFolderComponent 
                    title="Design"
                    link="/projects/design"
                    index={6}
                />
                <ProjectFolderComponent 
                    title="School"
                    link="/projects/school"
                    index={7}
                />
                <ProjectFolderComponent 
                    title="Lab"
                    link="/projects/lab"
                    index={8}
                />
                <ProjectFolderComponent 
                    title="Other"
                    link="/projects/other"
                    index={9}
                />
            </div>
        </div>
	);
}

export default Projects;
