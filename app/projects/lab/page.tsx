"use client"
import React from 'react'
import { m } from 'motion/react'
import { useThemeContext } from '@/app/context/themeContext'
import Image from 'next/image'
import ArrowDark from '@/public/Arrow_dark.svg'
import ArrowLight from '@/public/Arrow_light.svg'
import { useRouter } from 'next/navigation'

const LabProjects = () => {
    const { colors, theme } = useThemeContext();
    const router = useRouter();
  return (
    <m.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 * 0.08, ease: [0.200,0.005,0.000,0.995] as const }}
        className="w-full flex flex-row justify-between p-5 pb-0"
    >
        <h1 className={` ${colors.primary} text-[20px] xs:text-[26px] md:text-[36px] font-semibold`}>
            Lab is coming soon.
        </h1>
        <button
            onClick={router.back}
            className={`flex flex-row justify-center items-center ${
                colors.primary
            } font-extralight gap-[10px]`}
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
    </m.div>
  )
}

export default LabProjects