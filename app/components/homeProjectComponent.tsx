'use client';

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import placeholder from '../../public/placeholder.png'
import { useThemeContext } from '../context/themeContext';

interface HomeProjectComponentProps {
    border: string
    title: string
    description: string
    link: string
    image: StaticImageData
}

const HomeProjectComponent = ({
    border,
    title,
    description,
    link,
    image
 }: HomeProjectComponentProps) => {
    const { colors } = useThemeContext();

    const widthRef = React.useRef<HTMLDivElement>(null);

    const [width, setWidth] = useState(widthRef.current?.offsetWidth);

    useEffect(() => {
        setWidth(widthRef.current?.offsetWidth)
    }, []);

    if (typeof window === 'undefined') {
        return null;
    }
    
    window.addEventListener('resize', () => {
        setWidth(widthRef.current?.offsetWidth)
    });

    const widthStyle = Number(width) + 2

    return (
        <div style={{ width: widthStyle }} className={`mr-5 last:mr-0 flex flex-col border min-w-[150px] xl:min-w-[270px] ${border}`}>
            <div ref={widthRef} className={`relative aspect-video h-full w-fit overflow-visible`}>
                <Image sizes='300px' src={image} fill className='aspect-video' alt="placeholder" />
            </div>
            <div className={`flex flex-row justify-between items-center px-5 py-3 border-t parent-marquee cursor-pointer ${border}`}>
                <div className="flex flex-col justify-center">
                    <h4 className={`font-extralight leading-tight child-marquee ${colors.primary} text-[20px]`}>{title}</h4>
                    <p className={`font-extralight ${colors.secondary} text-[14px] whitespace-nowrap min-w-[150px]`}>{description}</p>
                </div>
                <Link className={`font-extralight hidden xl:grid place-items-center border px-5 py-2 hover:underline ${border} ${colors.primary}`} href={link}>
                    View
                </Link>
            </div>
        </div>
    )
}

export default HomeProjectComponent