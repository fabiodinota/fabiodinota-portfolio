import React from 'react'
import { useThemeContext } from '../context/themeContext';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface SkillsComponentProps {
    title: string
    description: string
}

const SkillsComponent = ({ title, description }: SkillsComponentProps) => {
    const { colors, border } = useThemeContext();
  return (
    <div className={`w-full flex flex-row  border ${border} ${colors.primary}`}>
        <div className="w-full py-2 px-4 flex flex-col justify-center items-start">
            <h2 className={`text-[16px] font-normal ${colors.primary}`}>{title}</h2>
            <p className={`text-[14px] font-extralight ${colors.secondary}`}>{description}</p>
        </div>
    </div>
  )
}

export default SkillsComponent