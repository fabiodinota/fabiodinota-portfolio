"use client";

import { useThemeContext } from "@/app/context/theme-context";
import Link from "next/link";
import Marquee from "@/app/components/marquee";
import { m } from "motion/react";
import { useMediaQuery } from "react-responsive";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH, slideDown } from "@/lib/motion";

export default function Home() {
	const { theme, colors, border } = useThemeContext();

	const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });
	const isMobileHeight = useMediaQuery({ query: "(max-height: 800px)" });



	return (
		<div className="w-full h-full">
			{/* Hero section */}
			<m.div
				initial={{ height: "100%" }}
				animate={{
					height: isMobile
						? isMobileHeight
							? "50%"
							: "40%"
						: "60%",
				}}
				transition={{ duration: 1, delay: 1.3, ease: EASE_SMOOTH }}
				className="h-[40%] xl:h-[60%] flex justify-center items-start flex-col pl-5 md:pl-[4vw]"
			>
				<h1
					className={cn(
						"text-[15vw] sm:text-[10vw] lg:text-[100px] font-semibold leading-[0.8] whitespace-nowrap",
						colors.primary,
					)}
				>
					<span className="flex flex-col md:flex-row gap-3 overflow-hidden">
						<m.span {...slideDown(0.0)}>Fabio</m.span>
						<span className="whitespace-nowrap flex flex-row gap-3 overflow-hidden">
							<m.span {...slideDown(0.1)}>Di</m.span>
							<m.span
								className="block md:inline whitespace-nowrap"
								{...slideDown(0.2)}
							>
								Nota
								<span
									className={cn(
										colors.red,
										"inline-flex",
									)}
								>
									.
								</span>
							</m.span>
						</span>
					</span>
				</h1>
				<p
					className={cn(
						colors.primary,
						"text-[22px] xs:text-[34px] sm:text-[40px] xl:text-[64px] flex flex-col leading-[1.2]",
					)}
				>
					<span className="flex flex-shrink xs:flex-row gap-3 overflow-hidden font-light">
						<m.span {...slideDown(0.3, -80)}>Software</m.span>
						<m.span {...slideDown(0.4, -80)}>Engineer</m.span>
					</span>
					<span className="flex flex-row gap-3 overflow-hidden font-thin relative -top-2">
						<m.span {...slideDown(0.5, -80)}>&</m.span>
						<m.span {...slideDown(0.6, -80)}>Designer</m.span>
					</span>
				</p>
			</m.div>

			{/* Bottom section: CTA + Marquee */}
			<m.div
				className={cn(
					"relative flex flex-col-reverse xl:flex-row",
					isMobileHeight ? "h-[50%]" : "h-[60%]",
					"xl:h-[40%]",
				)}
			>
				{!isMobileHeight && (
					<div
						className={cn(
							"h-[50%] xl:h-full border-t-[1px] xl:border-r-[1px] w-full xl:w-[50%]",
							"flex justify-center items-center flex-col p-5 gap-5",
							border,
						)}
					>
						<Link
							className={cn(
								"w-full h-full border text-[15px] group xl:text-[20px] font-extralight flex justify-center items-center",
								border,
								colors.primary,
							)}
							href="/projects"
						>
							<p className="group-hover:underline">Projects</p>
						</Link>
						<Link
							className={cn(
								"w-full h-full border text-[15px] group xl:text-[20px] font-extralight flex justify-center items-center",
								border,
								colors.primary,
							)}
							href="/contact"
						>
							<p className="group-hover:underline">
								Contact Me
							</p>
						</Link>
					</div>
				)}
				<div
					className={cn(
						"border-t-[1px] min-h-[200px] xl:h-full w-full xl:w-[50%] flex-grow overflow-x-hidden",
						isMobileHeight ? "h-full" : "h-[100%]",
						border,
					)}
				>
					<Marquee />
				</div>
			</m.div>
		</div>
	);
}
