"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: { children: ReactNode }) => {
	const pathname = usePathname();

	const PageTransitionVariant = {
		initial: {
			opacity: 0,
			scale: 0.95,
			blur: 50,
		},
		animate: {
			scale: 1,
			blur: 0,
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: [0, 0.5, 0.42, 0.99],
				type: "just",
			},
		},
	};

	return (
		<motion.div
			variants={PageTransitionVariant}
			initial="initial"
			animate="animate"
			className="h-full w-full"
			key={pathname}
		>
			{children}
		</motion.div>
	);
};

export default PageTransition;
