"use client";

import Image from "next/image";
import { useThemeContext } from "./context/themeContext";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import placeholder from "../public/Placeholder.png";

export default function Home() {
	const { theme, colors } = useThemeContext();

	return (
		<div className="w-full h-full">
			<div className="h-[45%] xl:h-[60%] flex justify-center items-start flex-col pl-5 md:pl-[4vw]">
				<h1
					className={`text-[70px] sm:text-[80px] xl:text-[120px] font-semibold ${colors.primary} leading-tight`}
				>
					Fabio{" "}
					<span className="block md:inline">
						Di Nota
						<span className={`${colors.red} inline-flex`}>.</span>
					</span>
				</h1>
				<p
					className={` ${colors.primary} text-[34px] sm:text-[40px] xl:text-[64px] flex flex-col leading-none`}
				>
					<span className="font-light">Software Engineer</span>
					<span className="font-thin">& Designer</span>
				</p>
			</div>
			<div className="h-[55%] xl:h-[40%] flex flex-col-reverse xl:flex-row">
				<div
					className={`h-full ${colors.border} border-t-[1px] xl:border-r-[1px] w-full xl:w-[50%] flex justify-center items-center xl:flex-col p-5 gap-5`}
				>
					<Link
						className={`w-full h-full border-[1px] ${colors.border} ${colors.primary} text-[16px] md:text-[20px] font-extralight flex justify-center items-center`}
						href="/projects"
					>
						Projects
					</Link>
					<Link
						className={`w-full h-full border-[1px] ${colors.border} ${colors.primary} text-[16px] md:text-[20px] font-extralight flex justify-center items-center`}
						href="/contact"
					>
						Contact Me
					</Link>
				</div>
				{/* TODO: Work on Marquee sizes */}
				<div
					className={`h-full ${colors.border} border-t-[1px] w-full xl:w-[50%] overflow-x-clip`}
				>
					{/* <Marquee play={false} autoFill style={{ rowGap: 20, gap: 20}} className="p-5 flex h-full flex-row gap-5 w-full">
            <div className={`h-full w-full border-[1px] ${colors.border}`}>
              <Image src={placeholder} alt="placeholder" />
              <div className={`w-full flex justify-between items-center flex-row px-5 py-4 border-t-[1px] ${colors.border}`}>
                <div className="flex justify-center items-start flex-col">
                  <h4 className={`font-extralight ${colors.primary} text-[20px]`}>Beyond Vision LTD</h4>
                  <p className={`font-extralight ${colors.primary} text-[14px]`}>Design & Development</p>
                </div>
                 <Link className={`px-8 border-[1px] py-3 grid place-content-center h-max ${colors.border} ${colors.primary}`} href={"/"}>
                  View
                </Link>
              </div>
            </div>
          </Marquee> */}
				</div>
			</div>
		</div>
	);
}
