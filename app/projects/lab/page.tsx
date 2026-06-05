"use client";

import { m } from "motion/react";
import React from "react";
import { useThemeContext } from "@/app/context/theme-context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GoBackButton from "@/app/components/go-back-button";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";

const LabProjects = () => {
	const { colors } = useThemeContext();
	const router = useRouter();

	return (
		<div className="h-full w-full flex flex-col">
			<m.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 1,
					delay: 0.08,
					ease: EASE_SMOOTH,
				}}
				className="w-full flex flex-row justify-between p-5 pb-0"
			>
				<h1
					className={cn(
						"text-[20px] xs:text-[26px] md:text-[36px] font-semibold",
						colors.primary,
					)}
				>
					Lab Projects
				</h1>
				<GoBackButton onClick={router.back} />
			</m.div>
			<m.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.16, ease: EASE_SMOOTH }}
				className={cn(
					"p-5 max-w-[900px] flex flex-col gap-3 text-[15px] md:text-[17px] font-extralight leading-relaxed",
					colors.primary,
				)}
			>
				<p>
					The lab is reserved for experiments, prototypes, and
					technical explorations that do not yet belong in a polished
					case study. This can include interaction tests, creative
					coding, animation studies, product ideas, and frontend
					engineering trials that help validate an approach before it
					becomes production work.
				</p>
				<p>
					While new lab writeups are being prepared, you can browse the{" "}
					<Link className="underline" href="/projects">
						main project portfolio
					</Link>
					, view{" "}
					<Link className="underline" href="/projects/design">
						design projects
					</Link>
					, read the{" "}
					<Link className="underline" href="/blog">
						blog
					</Link>
					, or{" "}
					<Link className="underline" href="/contact">
						contact me
					</Link>{" "}
					about a prototype, web application, UI audit, or technical
					consulting brief.
				</p>
			</m.div>
		</div>
	);
};

export default LabProjects;
