"use client";

import Link from "next/link";
import React from "react";
import { useThemeContext } from "@/app/context/theme-context";
import { useRouter } from "next/navigation";
import GoBackButton from "./components/go-back-button";
import { cn } from "@/lib/utils";

function NotFound() {
	const { theme, colors, border } = useThemeContext();
	const router = useRouter();

	return (
		<div className="w-full h-full flex justify-center items-start flex-col pl-[30px] pr-[30px] sm:pl-[50px]">
			<span
				className={cn(
					"font-semibold text-[80px] sm:text-[120px] leading-tight",
					colors.red,
				)}
			>
				404
				<span className={cn("font-semibold", colors.primary)}>!</span>
			</span>
			<span
				className={cn(
					"font-regular text-[26px] sm:text-[32px]",
					colors.primary,
				)}
			>
				Whoops! Looks like this URL does not exist.{" "}
			</span>
			<span
				className={cn(
					"font-extralight text-[20px] sm:text-[26px]",
					colors.primary,
				)}
			>
				If this is a bug, please reach out to me!
			</span>
			<div className="flex-col w-full sm:flex-row flex gap-[20px] pt-4">
				<GoBackButton
					onClick={router.back}
					className={cn(
						"w-full sm:w-[150px] py-3 border",
						border,
					)}
				/>
				<Link
					href={"/contact"}
					className={cn(
						"font-extralight w-full sm:w-[150px] items-center justify-center flex py-3 border",
						colors.primary,
						border,
					)}
				>
					Contact
				</Link>
			</div>
		</div>
	);
}

export default NotFound;
