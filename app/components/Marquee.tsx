"use client"

import { m } from "motion/react";
import HomeProjectComponent from "./homeProjectComponent";
import { FeaturedProjectsList } from "./ProjectsList";
import { RefObject } from "react";

const Marquee = ({ dragConstraints }: { dragConstraints: RefObject<HTMLDivElement | null> }) => {
	return (
		<m.div className="h-full flex flex-row w-max p-5 gap-5 parent_marquee">
			<div className="w-max grid grid-cols-3 gap-5 h-full lg:marquee">
                {FeaturedProjectsList.map((project, index) => (
                    <HomeProjectComponent
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        image={project.image}
                        index={index}
                        key={project.link}
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
                        key={project.link}
                    />
                ))} 
			</div>
		</m.div>
	);
}

export default Marquee;
