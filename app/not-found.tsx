"use client";

import Link from "next/link";
import React from "react";
import { useThemeContext } from "./context/themeContext";
import Image from "next/image";
import ArrowDark from "../public/Arrow_dark.svg";
import ArrowLight from "../public/Arrow_light.svg";
import { useRouter } from "next/navigation";

function NotFound() {
	const { theme, colors } = useThemeContext();

	const router = useRouter();

	return (
		<div className="w-full h-full flex justify-center items-start flex-col pl-[30px] pr-[30px] sm:pl-[50px]">
			<span
				className={`${colors.red} font-semibold text-[80px] sm:text-[120px] leading-tight`}
			>
				404<span className={`${colors.primary} font-semibold`}>!</span>
			</span>
			<span
				className={`${colors.primary} font-regular text-[26px] sm:text-[32px]`}
			>
				Whoops! Looks like this URL does not exist.{" "}
			</span>
			<span
				className={`${colors.primary} font-extralight text-[20px] sm:text-[26px]`}
			>
				If this is a bug, please reach out to me!
			</span>
			<div className="flex-col w-full sm:flex-row flex gap-[20px] pt-4">
				<button
					onClick={router.back}
					className={`flex flex-row justify-center items-center ${
						colors.primary
					} font-extralight w-full sm:w-[150px] py-3 border gap-[10px] ${
						theme === "dark" ? "border-white" : "border-black"
					}`}
				>
					<span className="relative w-4 h-4">
						<Image
							src={theme === "dark" ? ArrowDark : ArrowLight}
							alt="Go Back"
							fill
							sizes="16px"
							className="object-contain"
						/>
					</span>
					Go Back
				</button>
				<Link
					href={"/contact"}
					className={`${
						colors.primary
					} font-extralight w-full sm:w-[150px] items-center justify-center flex py-3 border ${
						theme === "dark" ? "border-white" : "border-black"
					}`}
				>
					Contact
				</Link>
			</div>
		</div>
	);
}

export default NotFound;
