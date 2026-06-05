"use client";

import React from "react";
import { useThemeContext } from "@/app/context/theme-context";
import Terminal from "@/app/components/terminal";
import Link from "next/link";
import { m } from "motion/react";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";

export default function Contact() {
	const { colors, border } = useThemeContext();

	return (
		<>
			{/* Mobile header */}
			<div
				className={cn(
					"border-b absolute z-40 top-0 left-0 w-full h-[80px]",
					"flex lg:hidden justify-start items-center px-5 text-[20px]",
					border,
					colors.background,
					colors.primary,
				)}
			>
				Contact Me
			</div>

			<div
				className={cn(
					"h-full w-full overflow-hidden relative flex flex-col items-center justify-center",
					colors.primary,
				)}
			>
				<m.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: EASE_SMOOTH }}
					className="w-full h-full p-5 pt-[100px] lg:pt-5 lg:px-10 flex flex-col"
				>
					<div className="hidden lg:block mb-4">
						<h1
							className={cn(
								"text-[30px] font-normal text-left",
								colors.primary,
							)}
						>
							Contact Me
						</h1>
						<p
							className={cn(
								"font-extralight text-[18px]",
								colors.primary,
							)}
						>
							type{" "}
							<code className="font-mono text-[14px] px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10">
								help
							</code>{" "}
							to get started.
						</p>
					</div>

					<section
						className={cn(
							"mb-5 border px-5 py-4 flex flex-col gap-3",
							border,
							colors.primary,
						)}
					>
						<h2 className="text-[20px] font-normal">
							Web apps, UI audits, and technical direction
						</h2>
						<p className="font-extralight leading-relaxed">
							Use this page to start a focused conversation about a
							product, interface, or engineering problem. I work on
							full-stack web applications, React and Next.js
							frontends, product design systems, UI/UX audits, and
							technical strategy for teams that need both design
							judgment and implementation detail.
						</p>
						<p className="font-extralight leading-relaxed">
							For context before reaching out, browse my{" "}
							<Link className="underline" href="/projects">
								project portfolio
							</Link>
							, read more{" "}
							<Link className="underline" href="/about">
								about my background
							</Link>
							, or start with{" "}
							<Link className="underline" href="/projects/the-velox">
								The Velox case study
							</Link>
							. The terminal below routes your message by service
							type so the brief arrives with the right context.
						</p>
					</section>

					<div className="flex-1 min-h-0">
						<Terminal />
					</div>
				</m.div>
			</div>
		</>
	);
}
