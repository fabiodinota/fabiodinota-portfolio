"use client";

import React from "react";
import { useThemeContext } from "@/app/context/theme-context";
import Image from "next/image";
import Link from "next/link";
import { m } from "motion/react";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";

interface BlogPostClientProps {
	title: string;
	date: string;
	tags: string[];
	image?: string;
	contentHtml: string;
}

export default function BlogPostClient({
	title,
	date,
	tags,
	image,
	contentHtml,
}: BlogPostClientProps) {
	const { colors, border, theme } = useThemeContext();

	return (
		<div className="h-full w-full overflow-y-scroll">
			<article className="w-full max-w-[760px] mx-auto p-5 lg:p-10 pb-20">
				<m.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.8,
						ease: EASE_SMOOTH,
					}}
				>
					<Link
						href="/blog"
						className={cn(
							"inline-flex items-center gap-2 font-extralight text-[14px] hover:underline mb-6",
							colors.secondary,
						)}
					>
						← Back to Blog
					</Link>

					<h1
						className={cn(
							"text-[28px] xs:text-[36px] md:text-[44px] font-semibold leading-tight mb-4",
							colors.primary,
						)}
					>
						{title}
					</h1>

					<div className="flex flex-wrap items-center gap-3 mb-6">
						<time
							className={cn(
								"font-extralight text-[14px]",
								colors.secondary,
							)}
							dateTime={date}
						>
							{new Date(date).toLocaleDateString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</time>
						{tags.length > 0 && (
							<div className="flex flex-wrap gap-2">
								{tags.map((tag) => (
									<span
										key={tag}
										className={cn(
											"text-[12px] font-extralight px-2 py-0.5 border",
											border,
											colors.secondary,
										)}
									>
										{tag}
									</span>
								))}
							</div>
						)}
					</div>

					{image && (
						<div className="relative w-full aspect-[16/9] mb-8">
							<Image
								src={image}
								alt={title}
								fill
								sizes="(max-width: 760px) 100vw, 760px"
								className="object-cover"
								priority
							/>
						</div>
					)}
				</m.div>

				<m.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className={cn(
						"prose",
						theme === "dark" ? "prose-dark" : "prose-light",
					)}
					dangerouslySetInnerHTML={{ __html: contentHtml }}
				/>
			</article>
		</div>
	);
}
