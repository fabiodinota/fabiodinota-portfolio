import HomeProjectComponent from "./homeProjectComponent";
import { useThemeContext } from "../context/themeContext";
import Beyond from "../../public/beyond.png";
import Azurite from "../../public/azurite.png";
import Qillobyte from "../../public/qillobyte.png";
import Jouri from "../../public/jouri.png";

const Marquee = () => {
	const { colors, border } = useThemeContext();
	return (
		<div className="h-full min-h-[200px] flex flex-row w-max p-5 marquee_parent">
			<div className="w-max grid grid-cols-4 h-full marquee">
				<HomeProjectComponent
					border={border}
					title="Beyond Vision"
					description="Design & Development"
					link="/"
					image={Beyond}
				/>
				<HomeProjectComponent
					border={border}
					title="Azurite Studios"
					description="Website Development"
					link="/"
					image={Azurite}
				/>
				<HomeProjectComponent
					border={border}
					title="Qillobyte"
					description="Website Development"
					link="/"
					image={Qillobyte}
				/>
				<HomeProjectComponent
					border={border}
					title="Jouri"
					description="UI/UX Design"
					link="/"
					image={Jouri}
				/>
			</div>
			<div className="w-max grid grid-cols-4 h-full marquee1">
				<HomeProjectComponent
					border={border}
					title="Beyond Vision"
					description="Design & Development"
					link="/"
					image={Beyond}
				/>
				<HomeProjectComponent
					border={border}
					title="Azurite Studios"
					description="Website Development"
					link="/"
					image={Azurite}
				/>
				<HomeProjectComponent
					border={border}
					title="Qillobyte"
					description="Website Development"
					link="/"
					image={Qillobyte}
				/>
				<HomeProjectComponent
					border={border}
					title="Jouri"
					description="UI/UX Design"
					link="/"
					image={Jouri}
				/>
			</div>
		</div>
	);
}

export default Marquee;
