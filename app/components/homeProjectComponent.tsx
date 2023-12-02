"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useThemeContext } from "../context/themeContext";
import LinkorDiv from "./LinkorDiv";
import { useMediaQuery } from "react-responsive";

interface HomeProjectComponentProps {
	title: string;
	description: string;
	link: string;
	image: StaticImageData;
    index: number
}

const HomeProjectComponent = ({
        title,
        description,
        link,
        image,
        index
    }: HomeProjectComponentProps) => {
	const { colors, border } = useThemeContext();

	const widthRef = useRef<HTMLDivElement>(null);

	const [width, setWidth] = useState<number | undefined>(undefined);

	useEffect(() => {
		setWidth(widthRef.current?.offsetWidth);
	}, []);

	if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
            setWidth(widthRef.current?.offsetWidth);
        });
	}

	const widthCalc = Number(width) + 2;

    const widthStyle: number = Number(widthCalc);

    const isLG = useMediaQuery({ query: '(max-width: 1280px)' })

	return (
            <div
                style={{ width: widthStyle }}
                key={index}
                className={`flex flex-col border min-w-[150px] xl:min-w-[270px] ${border}`}
            >
                <div
                    ref={widthRef}
                    className={`relative aspect-video h-full w-fit overflow-visible`}
                >
                    <Image
                        sizes="300px"
                        src={image}
                        fill
                        className="aspect-video"
                        alt="placeholder"
                        priority
                    />
                </div>
                <LinkorDiv
                    href={link}
                    isXS={isLG}
                    className={`flex flex-row justify-between items-center px-5 py-3 border-t parent-marquee cursor-pointer ${border}`}
                >
                    <div className="flex flex-col justify-center w-full">
                        <h4
                            className={`font-extralight leading-tight child-marquee ${colors.primary} text-[20px] whitespace-nowrap w-full truncate`}
                        >
                            {title}
                        </h4>
                        <p
                            className={`font-extralight ${colors.secondary} text-[14px] whitespace-nowrap w-full truncate`}
                        >
                            {description}
                        </p>
                    </div>
                    <Link
                        className={`font-extralight hidden xl:grid place-items-center border px-5 py-2 hover:underline ${border} ${colors.primary}`}
                        href={link}
                        target="_blank"
                    >
                        View
                    </Link>
                </LinkorDiv>
            </div>
        );
    }

export default HomeProjectComponent;
