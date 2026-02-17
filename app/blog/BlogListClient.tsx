"use client";

import React from "react";
import { useThemeContext } from "@/app/context/theme-context";
import Image from "next/image";
import Link from "next/link";
import { m } from "motion/react";
import type { BlogPostMeta } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH, fadeInUp } from "@/lib/motion";

interface BlogListClientProps {
	posts: BlogPostMeta[];
}

export default function BlogListClient({ posts }: BlogListClientProps) {
	const { colors, border } = useThemeContext();

	return (
		<div className="h-full w-full overflow-y-scroll">
			<div className="w-full max-w-[900px] mx-auto p-5 lg:p-10">
				<m.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 1,
						delay: 0,
						ease: EASE_SMOOTH,
					}}
				>
					<h1
						className={cn(
							"text-[28px] xs:text-[36px] md:text-[48px] font-semibold mb-2",
							colors.primary,
						)}
					>
						Blog
					</h1>
					<p
						className={cn(
							"font-extralight text-[16px] md:text-[20px] mb-8",
							colors.secondary,
						)}
					>
						Thoughts on software engineering, design, and
						technology.
					</p>
				</m.div>

				{posts.length === 0 ? (
					<m.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className={cn(
							"font-extralight text-[18px]",
							colors.secondary,
						)}
					>
						No posts yet. Check back soon!
					</m.p>
				) : (
					<div className="flex flex-col gap-6">
						{posts.map((post, i) => (
							<m.div
								key={post.slug}
								{...fadeInUp((i + 1) * 0.08, 30)}
								// Override duration to match original if needed, but standardizing is better
								transition={{
									duration: 0.6,
									delay: (i + 1) * 0.08,
									ease: EASE_SMOOTH,
								}}
							>
								<Link
									href={`/blog/${post.slug}`}
									className={cn(
										"group flex flex-col sm:flex-row gap-5 border p-5 transition-all duration-300 hover:scale-[1.01]",
										border,
									)}
								>
									{post.image && (
										<div className="relative w-full sm:w-[240px] h-[180px] sm:h-[160px] flex-shrink-0">
											<Image
												src={post.image}
												alt={post.title}
												fill
												sizes="(max-width: 640px) 100vw, 240px"
												className="object-cover"
											/>
										</div>
									)}
									<div className="flex flex-col justify-between flex-grow min-w-0">
										<div>
											<h2
												className={cn(
													"text-[20px] md:text-[24px] font-medium group-hover:underline leading-tight mb-2",
													colors.primary,
												)}
											>
												{post.title}
											</h2>
											<p
												className={cn(
													"font-extralight text-[14px] md:text-[16px] line-clamp-2",
													colors.secondary,
												)}
											>
												{post.description}
											</p>
										</div>
										<div className="flex flex-wrap items-center gap-3 mt-3">
											<time
												className={cn(
													"font-extralight text-[13px]",
													colors.secondary,
												)}
												dateTime={post.date}
											>
												{new Date(
													post.date,
												).toLocaleDateString(
													"en-US",
													{
														year: "numeric",
														month: "long",
														day: "numeric",
													},
												)}
											</time>
											{post.tags.length > 0 && (
												<div className="flex flex-wrap gap-2">
													{post.tags.map((tag) => (
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
									</div>
								</Link>
							</m.div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
