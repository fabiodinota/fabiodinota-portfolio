"use client";

import React, { useActionState } from "react";
import { useThemeContext } from "@/context/theme-context";
import Link from "next/link";
import { m } from "motion/react";
import {
	sendContactEmail,
	type ContactFormState,
} from "@/features/contact/actions";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";

const SERVICE_OPTIONS = [
	{ label: "Web application", value: "--web-app" },
	{ label: "UI audit", value: "--ui-audit" },
	{ label: "Technical consulting", value: "--consulting" },
];

export default function Contact() {
	const { colors, border } = useThemeContext();
	const initialState: ContactFormState = { success: false, error: "" };
	const [actionState, formAction, isPending] = useActionState(
		sendContactEmail,
		initialState,
	);

	const fieldClassName = cn(
		"w-full h-[60px] flex-shrink-0 border bg-transparent text-[18px] font-extralight px-5 focus:outline-none",
		"placeholder:font-thin placeholder:text-[18px]",
		border,
		colors.primary,
	);
	const messageClassName = cn(
		"w-full min-h-[160px] max-h-[320px] border bg-transparent text-[18px] font-extralight px-5 py-4 focus:outline-none resize-y",
		"placeholder:font-thin placeholder:text-[18px]",
		border,
		colors.primary,
	);

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
					"h-full w-full overflow-y-scroll relative flex flex-col items-center justify-start",
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
							Web applications, UI audits, and technical direction.
						</p>
					</div>

					<div className="grid w-full flex-1 grid-cols-1 gap-5 lg:grid-cols-[minmax(360px,1.1fr)_minmax(0,0.9fr)]">
						<section
							className={cn(
								"border px-5 py-4 flex flex-col gap-3 lg:order-2",
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
								.
							</p>
							<div className="flex flex-col gap-2 pt-2">
								<a
									className={cn(
										"w-fit border px-5 py-3 font-extralight hover:underline",
										border,
										colors.primary,
									)}
									href="mailto:contact@fabiodinota.com"
								>
									contact@fabiodinota.com
								</a>
								<a
									className={cn(
										"w-fit border px-5 py-3 font-extralight hover:underline",
										border,
										colors.primary,
									)}
									href="https://linkedin.com/in/fabiodinota"
									target="_blank"
									rel="noopener noreferrer"
								>
									LinkedIn
								</a>
							</div>
							<p className="pt-2 text-[14px] font-extralight">
								VAT: BE1012.811.939
							</p>
						</section>

						<form
							action={formAction}
							className="flex w-full flex-col gap-5 pb-5 lg:order-1"
							aria-label="Contact form"
						>
							<select
								name="service"
								required
								defaultValue="--web-app"
								className={fieldClassName}
							>
								{SERVICE_OPTIONS.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
							<input
								className={fieldClassName}
								placeholder="Name"
								name="name"
								type="text"
								autoComplete="name"
								required
							/>
							<input
								className={fieldClassName}
								placeholder="Email"
								name="email"
								type="email"
								autoComplete="email"
								required
							/>
							<input
								className={fieldClassName}
								placeholder="Subject"
								name="subject"
								type="text"
								required
							/>
							<textarea
								className={messageClassName}
								placeholder="Message"
								name="message"
								required
							/>
							<button
								type="submit"
								disabled={isPending}
								className={cn(
									"w-full h-[60px] hover:underline flex-shrink-0 border text-[18px] font-extralight px-5 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60",
									border,
									colors.primary,
								)}
							>
								{isPending ? "Sending..." : "Send"}
							</button>
							<p
								className={cn(
									"min-h-[24px] text-[16px] font-extralight",
									actionState.success && "text-green-500",
									actionState.error && "text-red-600",
								)}
								aria-live="polite"
							>
								{actionState.success
									? "Message sent successfully!"
									: actionState.error}
							</p>
						</form>
					</div>
				</m.div>
			</div>
		</>
	);
}
