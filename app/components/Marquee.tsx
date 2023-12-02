"use client"

import { motion } from "framer-motion";
import HomeProjectComponent from "./homeProjectComponent";
import { FeaturedProjectsList } from "./ProjectsList";
import { RefObject, useRef } from "react";

const Marquee = ({ dragConstraints }: { dragConstraints: RefObject<HTMLDivElement> }) => {
	return (
		<motion.div drag="x" dragConstraints={dragConstraints} className="h-full flex flex-row w-max p-5 gap-5 parent_marquee">
			<div className="w-max grid grid-cols-3 gap-5 h-full lg:marquee">
                {FeaturedProjectsList.map((project, index) => (
                    <HomeProjectComponent
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        image={project.image}
                        index={index}
                        key={index}
                    />
                ))} 

			</div>
			<div className="w-max grid grid-cols-3 gap-5 h-full lg:marquee">
                {FeaturedProjectsList.map((project, index) => (
                    <HomeProjectComponent
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        image={project.image}
                        index={index}
                        key={index}
                    />
                ))} 
			</div>
		</motion.div>
	);
}

export default Marquee;
