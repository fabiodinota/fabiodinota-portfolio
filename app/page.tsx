"use client";

import { useThemeContext } from "./context/themeContext";
import Link from "next/link";
import Marquee from "./components/Marquee";

export default function Home() {
	const { theme, colors, border } = useThemeContext();

	return (
		<div className="w-full h-full">
			<div className="h-[40%] xl:h-[60%] flex justify-center items-start flex-col pl-5 md:pl-[4vw]">
				<h1
					className={`text-[15vw] sm:text-[10vw] lg:text-[100px] font-semibold ${colors.primary} leading-none whitespace-nowrap`}
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
			{/* <h1
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
			</div> */}
			<div className="h-[60%] xl:h-[40%] flex flex-col-reverse xl:flex-row">
				<div
					className={`h-[40%] xl:h-full ${border} border-t-[1px] xl:border-r-[1px] w-full xl:w-[50%] flex justify-center items-center flex-col p-5 gap-5`}
				>
					<Link
						className={`w-full h-full border ${border} ${colors.primary} text-[15px] group xl:text-[20px] font-extralight flex justify-center items-center`}
						href="/projects"
					>
						<p className="group-hover:underline">Projects</p>
					</Link>
					<Link
						className={`w-full h-full border ${border} ${colors.primary} text-[15px] group  xl:text-[20px] font-extralight flex justify-center items-center`}
						href="/contact"
					>
						<p className="group-hover:underline">Contact Me</p>
					</Link>
				</div>
				<div
					className={`${border} border-t-[1px] h-[60%] xl:h-full w-full xl:w-[50%] overflow-x-clip`}
				>
					<Marquee />
				</div>
			</div>
		</div>
	);
}
