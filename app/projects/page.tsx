"use client";

import React, { useEffect, useRef } from "react";
import { useThemeContext } from "../context/themeContext";
import ProjectComponent from "../components/ProjectComponent";
import Beyond from "../../public/beyond.png";
import Azurite from "../../public/azurite.png";
import Qillobyte from "../../public/qillobyte.png";
import Jouri from "../../public/jouri.png";
import { Children } from "react";

function Projects() {
	const { colors } = useThemeContext();
    const childRef = useRef(null)

	return (
		<div
            ref={childRef}
			className={`${colors.primary} h-full w-full grid gap-5 p-5 place-content-start place-items-center grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 overflow-y-scroll`}
		>
			<ProjectComponent
				title="Beyond Vision"
				description="Design & Development"
				link="/"
				image={Beyond}
                index={1}
			/>
			<ProjectComponent
				title="Azurite Studios"
				description="Website Development"
				link="/"
				image={Azurite}
                index={2}
			/>
			<ProjectComponent
				title="Qillobyte"
				description="Website Development"
				link="/"
				image={Qillobyte}
                index={3}
			/>
			<ProjectComponent
				title="Jouri"
				description="UI/UX Design"
				link="/"
				image={Jouri}
                index={4}
			/>
		</div>
	);
}

export default Projects;
