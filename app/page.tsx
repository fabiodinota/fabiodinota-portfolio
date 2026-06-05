"use client";

import { useThemeContext } from "@/context/theme-context";
import Link from "next/link";
import Marquee from "@/features/projects/marquee";
import { m } from "motion/react";
import { useMediaQuery } from "react-responsive";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH, slideDown } from "@/lib/motion";

export default function Home() {
	const { colors, border } = useThemeContext();

	const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });
	const isMobileHeight = useMediaQuery({ query: "(max-height: 800px)" });



	return (
		<div className="w-full min-h-full">
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
			<section
				className={cn(
					"border-t p-5 md:p-10 flex flex-col gap-5",
					border,
					colors.primary,
				)}
			>
				<div className="max-w-[900px] flex flex-col gap-4">
					<h2 className="text-[26px] md:text-[36px] font-semibold">
						Software engineering, UI design, and product delivery
					</h2>
					<p className="text-[16px] md:text-[18px] font-extralight leading-relaxed">
						I build practical digital products from first sketch to
						production. My work sits between full-stack engineering
						and interface design: React and Next.js applications,
						TypeScript systems, responsive UI, interaction design,
						prototypes, and the product thinking needed to make
						those pieces useful.
					</p>
					<p className="text-[16px] md:text-[18px] font-extralight leading-relaxed">
						The portfolio includes case studies such as{" "}
						<Link className="underline" href="/projects/the-velox">
							The Velox
						</Link>
						, a full-stack transit platform, alongside client sites,
						design explorations, mobile concepts, and creative lab
						work. For a broader view of the process, browse the{" "}
						<Link className="underline" href="/projects">
							projects
						</Link>{" "}
						or read the{" "}
						<Link className="underline" href="/blog">
							blog
						</Link>
						.
					</p>
					<p className="text-[16px] md:text-[18px] font-extralight leading-relaxed">
						If you need a web application, a UI audit, or technical
						advice on a frontend stack,{" "}
						<Link className="underline" href="/contact">
							contact me
						</Link>{" "}
						with a short brief. I am based in Antwerp, Belgium and
						work with teams that value polished interfaces, clear
						systems, and code that can keep moving after launch.
					</p>
				</div>
			</section>
		</div>
	);
}
