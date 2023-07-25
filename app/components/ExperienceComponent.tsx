import React from 'react'
import { useThemeContext } from '../context/themeContext';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ExperienceComponentProps {
    title: string
    description: string
    Logo: StaticImageData
    link: string
}

const ExperienceComponent = ({ title, description, Logo, link }: ExperienceComponentProps) => {
    const { colors, border } = useThemeContext();
  return (
    <div className={`w-full flex flex-row  border-[1px] ${border} ${colors.primary}`}>
        <div className={`relative aspect-square w-20 flex-shrink-0 border-r-[1px] ${border}`}>
            <Image src={Logo} quality={100} fill className="object-cover object-center relative z-0" alt="map" />
        </div>
        <Link href={link} className="w-full py-2 px-4 flex flex-col justify-center items-start group">
            <h2 className={`text-[16px] group-hover:underline font-normal ${colors.primary}`}>{title}</h2>
            <p className={`text-[12px] font-extralight ${colors.secondary}`}>{description}</p>
        </Link>
    </div>
  )
}

export default ExperienceComponent