import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import { useThemeContext } from '../context/themeContext'
import Link from 'next/link'

interface projectComponentProps {
    title: string
    description: string
    link: string
    image: StaticImageData
}

const ProjectComponent = ({
    title,
    description,
    link,
    image
}: projectComponentProps) => {

    const { colors, border } = useThemeContext()
  return (
    <div className={`w-full h-full flex flex-col border ${border}`}>
        <Image quality={100} src={image} className='aspect-video w-full h-full' alt="placeholder" />
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

export default ProjectComponent