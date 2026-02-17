"use client";

import { m } from "motion/react";
import React from "react";
import { useThemeContext } from "@/app/context/theme-context";
import { useRouter } from "next/navigation";
import GoBackButton from "@/app/components/go-back-button";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";

const LabProjects = () => {
	const { colors } = useThemeContext();
	const router = useRouter();

	return (
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
				Lab is coming soon.
			</h1>
			<GoBackButton onClick={router.back} />
		</m.div>
	);
};

export default LabProjects;