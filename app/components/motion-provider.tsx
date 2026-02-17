"use client";

import { LazyMotion, domAnimation } from "motion/react";

const MotionProvider = ({ children }: { children: React.ReactNode }) => {
	return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export default MotionProvider;
