"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useThemeContext } from "@/context/theme-context";
import LinkOrDiv from "@/components/ui/link-or-div";
import { useMediaQuery } from "react-responsive";
import { cn } from "@/lib/utils";

interface HomeProjectCardProps {
	title: string;
	description: string;
	link: string;
	image: StaticImageData;
	index: number;
	caseStudySlug?: string;
	isDuplicate?: boolean;
}

function getProjectHref(caseStudySlug?: string, link?: string) {
	if (caseStudySlug) return `/projects/${caseStudySlug}`;

	const trimmedLink = link?.trim();
	return trimmedLink || null;
}

const HomeProjectCard = ({
	title,
	description,
	link,
	image,
	index,
	caseStudySlug,
	isDuplicate = false,
}: HomeProjectCardProps) => {
	const { colors, border } = useThemeContext();

	const isLG = useMediaQuery({ query: "(max-width: 1280px)" });
	const primaryHref = getProjectHref(caseStudySlug, link);
	const canLink = Boolean(primaryHref) && !isDuplicate;
	const isInternal = primaryHref?.startsWith("/") ?? false;

	return (
		<div
			className={cn(
				"flex h-full min-h-[160px] w-[min(78vw,420px)] shrink-0 flex-col overflow-hidden border select-none xl:min-h-0 xl:w-[clamp(270px,34vw,520px)]",
				border,
			)}
		>
			<div className="relative min-h-[80px] flex-1 overflow-hidden select-none">
				<Image
					src={image}
					quality={100}
					fill
					sizes="(min-width: 1280px) 34vw, 78vw"
					className="aspect-video object-cover no-select pointer-events-none"
					alt={title}
					priority={index < 2}
					draggable={false}
					onDragStart={(e) => e.preventDefault()}
				/>
			</div>
			<div
				className={cn(
					"flex flex-row justify-between items-center px-5 py-3 border-t parent-marquee",
					canLink && "cursor-pointer",
					border,
				)}
			>
				<LinkOrDiv
					href={primaryHref}
					isXS={isLG && canLink}
					className="flex min-w-0 flex-col justify-center w-full"
					ariaLabel={`Open ${title}`}
				>
					<h3
						className={cn(
							"font-extralight leading-tight child-marquee text-[20px] whitespace-nowrap w-full truncate",
							colors.primary,
						)}
					>
						{title}
					</h3>
					<p
						className={cn(
							"font-extralight text-[14px] whitespace-nowrap w-full truncate",
							colors.secondary,
						)}
					>
						{description}
					</p>
				</LinkOrDiv>
				{canLink && primaryHref && (
					<Link
						className={cn(
							"font-extralight hidden xl:grid place-items-center border px-5 py-2 hover:underline",
							border,
							colors.primary,
						)}
						href={primaryHref}
						target={isInternal ? undefined : "_blank"}
						rel={isInternal ? undefined : "noopener noreferrer"}
						aria-label={`${caseStudySlug ? "Read" : "View"} ${title}`}
					>
						{caseStudySlug ? "Read" : "View"}
					</Link>
				)}
			</div>
		</div>
	);
};

export default HomeProjectCard;
