"use client";

import HomeProjectCard from "@/features/projects/home-project-card";
import { FeaturedProjectsList } from "@/features/projects/data";
import { useDraggableMarquee } from "@/features/projects/use-draggable-marquee";

const Marquee = () => {
	const { trackRef, loopRef, containerProps } = useDraggableMarquee();

	return (
		<div
			className="h-full w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
			{...containerProps}
			tabIndex={0}
			role="region"
			aria-label="Featured projects carousel. Use left and right arrow keys or drag to navigate."
			aria-roledescription="carousel"
		>
			<div
				ref={trackRef}
				className="h-full flex flex-row w-max p-5"
				style={{ willChange: "transform" }}
			>
				<div ref={loopRef} className="h-full flex shrink-0 flex-row gap-5 pr-5">
					{FeaturedProjectsList.map((project, index) => (
						<HomeProjectCard
							title={project.title}
							description={project.description}
							link={project.link}
							image={project.image}
							index={index}
							key={project.slug}
							caseStudySlug={project.caseStudySlug}
						/>
					))}
				</div>
				<div
					className="h-full flex shrink-0 flex-row gap-5 pr-5"
					aria-hidden="true"
				>
					{FeaturedProjectsList.map((project, index) => (
						<HomeProjectCard
							title={project.title}
							description={project.description}
							link={project.link}
							image={project.image}
							index={index}
							key={`dup-${project.slug}`}
							caseStudySlug={project.caseStudySlug}
							isDuplicate
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Marquee;
