"use client";

import Image from "next/image";
import { useThemeContext } from "./context/themeContext";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import HomeProjectComponent from "./components/homeProjectComponent";
import Beyond from "../public/beyond.png";
import Azurite from "../public/azurite.png";
import Qillobyte from "../public/qillobyte.png";
import Jouri from "../public/jouri.png";

export default function Home() {
	const { theme, colors, border } = useThemeContext();

	return (
		<div className="w-full h-full">
			<div className="h-[40%] xl:h-[60%] flex justify-center items-start flex-col pl-5 md:pl-[4vw]">
				<h1
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
			</div>
			<div className="h-[60%] xl:h-[40%] flex flex-col-reverse xl:flex-row">
				<div
					className={`h-[70%] xl:h-full ${border} border-t-[1px] xl:border-r-[1px] w-full xl:w-[50%] flex justify-center items-center flex-col p-5 gap-5`}
				>
					<Link
						className={`w-full h-full border-[1px] ${border} ${colors.primary} text-[16px] group md:text-[20px] font-extralight flex justify-center items-center`}
						href="/projects"
					>
						<p className="group-hover:underline duration-200">Projects</p>
					</Link>
					<Link
						className={`w-full h-full border-[1px] ${border} ${colors.primary} text-[16px] group md:text-[20px] font-extralight flex justify-center items-center`}
						href="/contact"
					>
						<p className="group-hover:underline duration-200">Contact Me</p>
					</Link>
				</div>
				{/* TODO: Work on Marquee sizes */}
				<div
					className={` ${border} border-t-[1px] w-full flex justify-center items-center xl:w-[50%]`}
				>
				    <Marquee play={true} className="h-min p-5">
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
                            title="Jouri De Ligt"
                            description="UI/UX Design"
                            link="/"
                            image={Jouri}
                        />
                        
                    </Marquee>
				</div>
			</div>
		</div>
	);
}
