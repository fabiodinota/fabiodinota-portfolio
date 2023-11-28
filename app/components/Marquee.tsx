import HomeProjectComponent from "./homeProjectComponent";
import { FeaturedProjectsList } from "./ProjectsList";

const Marquee = () => {
	return (
		<div className="h-full flex flex-row w-max p-5 marquee_parent">
			<div className="w-max grid grid-cols-3 h-full marquee">
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
			<div className="w-max grid grid-cols-3 h-full marquee1">
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
		</div>
	);
}

export default Marquee;
