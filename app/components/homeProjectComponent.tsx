'use client';

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
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
    const { colors } = useThemeContext()
  return (
    <div className={`w-max h-max mr-5 border-[1px] ${border}`}>
        <div className="relative w-full h-full min-h-[130px] xl:min-h-[210px] aspect-video">
            <Image src={image} quality={100} className='object-contain object-center' fill alt="placeholder" />
        </div>
        <div className={`flex flex-row justify-between items-center h-min px-5 py-2 border-t-[1px] xl:group xl:cursor-pointer ${border}`}>
            <div className=" flex flex-col h-full justify-center">
            <h4 className={`font-extralight group-hover:underline ${colors.primary} text-[20px]`}>{title}</h4>
            <p className={`font-extralight ${colors.primary} text-[14px]`}>{description}</p>
            </div>
            <Link className={`font-extralight hidden xl:grid place-items-center border-[1px] px-5 py-2 hover:underline ${border} ${colors.primary}`} href={link}>
                View
            </Link>
        </div>
    </div>
  )
}

export default HomeProjectComponent