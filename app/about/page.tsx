"use client";

import React, { useEffect, useState } from "react";
import { useThemeContext } from "../context/themeContext";
import Image from "next/image";
import Placeholder_light from "../../public/About_main.png";
import Placeholder_dark from "../../public/About_main_white.png";
import Arrow_dark from "../../public/Arrow_dark.svg";
import Arrow_light from "../../public/Arrow_light.svg";
import Azurite_logo from "../../public/Azurite_logo_experience.png";
import ExperienceComponent from "../components/ExperienceComponent";
import EDR_logo from "../../public/EDR_logo_experience.png";
import Fabi_logo from "../../public/Fabi_logo_experience.png";
import Growii_logo from "../../public/Growii_logo_experience.png";
import SkillsComponent from "../components/SkillsComponent";

function About() {
	const { colors, border, theme } = useThemeContext();

    const [isOpen, setIsOpen] = useState<number>(0);

    const [isOpenBig, setIsOpenBig] = useState<boolean>(true);

    const [disabled, setDisabled] = useState<boolean>(false);

    useEffect(() => {
        setDisabled(true);
        setTimeout(() => {
            setDisabled(false);
        }, 800);
    }, [isOpen]);
    
	return (
        <div className="flex flex-col w-full overflow-hidden items-center lg:justify-between h-full relative">
            <div className={`lg:flex justify-center items-center flex-wrap md:flex-nowrap p-5 md:p-10 py-5 xl:gap-5 flex-row h-[50%] lg:h-full hidden flex-grow-0 custom-ease duration-700 overflow-x-hidden  ${isOpenBig ? "scale-110 lg:max-xl:scale-90" : "lg:max-xl:scale-100 xl:scale-[1.15] 2xl:scale-125"}`}>
                <div
                className={`max-w-[900px] md:max-w-none w-[100%] xl:w-[50%] xl:pb-0 max-h-[450px] pr-5 flex justify-start lg:justify-center items-start flex-col ${colors.primary}`}
                >
                    <h1 className="text-[36px] md:text-[36px] 2xl:pb-2 font-semibold hidden lg:block">
                        About Me
                    </h1>
                    <p className="sm:text-justify sm:pb-0 font-extralight">
                        I&apos;m a tech-savvy software engineer and designer from Antwerp, 
                        Belgium. I&apos;m passionate about all things tech and love doodling 
                        ideas and coding in my free time. 
                        <br />
                        <br />
                        I have experience with JavaScript, Typescript, React, Next.js, and 
                        various design tools like Figma, Illustrator, and Photoshop, along 
                        with video and animation software. 
                        <br />
                        <br />
                        I enjoy taking on new challenges and would be thrilled to collaborate 
                        on exciting projects. Let&apos;s create something awesome together!
                    </p>
                </div>
                <div
                className="hidden sm:block flex-grow w-full xl:w-[350px] relative h-full min-h-[300px] max-h-[400px] xl:h-[350px] xl:flex-grow-0 z-auto"
                >
                    <Image src={theme === "dark" ? Placeholder_dark : Placeholder_light } quality={100} fill className="object-contain relative z-0" alt="map" />
                </div>
            </div>
            <div 
                onClick={() => disabled ? null : setIsOpen(0)}
                className={`${isOpen === 0 ? "h-full" : "h-[80px] flex-shrink-0"} transition-all duration-1000 custom-ease lg:hidden flex w-full flex-col justify-start items-center relative z-10 top-0`}
            >
                <div className={`w-full absolute z-10 top-0 left-0  flex items-center justify-between flex-shrink-0 flex-grow-0 h-[80px] px-[30px] border-b-[1px] ${colors.background} ${border} ${colors.primary}`}>
                    <span>About Me</span>
                    <span className={`${isOpen === 0 ? "rotate-[450deg]" : "rotate-[270deg]" } duration-500`}><Image src={theme === "dark" ? Arrow_dark : Arrow_light} alt="arrow" /></span>
                </div>
                <div className="relative w-full h-full overflow-y-scroll z-0 ">
                    <div className={`w-full absolute top-[80px] left-0 ${colors.background} p-5 `}>
                        <p className={`sm:text-justify sm:pb-0 font-extralight ${colors.primary}`}>
                                Hey there, I&apos;m a software engineer and designer based in Antwerp, Belgium. I&apos;m passionate about
                                all things tech, and you&apos;ll often find me doodling ideas in my sketchbook or tinkering with code in my free time.
                                <br />
                                <br />
                                I&apos;ve been lucky enough to work with a wide range of languages and technologies, including JavaScript, Typescript, 
                                React, Next.js and more. I&apos;m also pretty handy with design tools like Figma, Illustrator, and Photoshop, and have 
                                experience with video and animation software like After Effects and Premiere Pro.
                                <br />
                                <br />
                                While I don&apos;t like to brag too much, I&apos;m always up for a challenge and love taking on new projects. So if 
                                you&apos;re looking for a creative problem-solver who&apos;s up-to-date with the latest tech, feel free to reach out. 
                                Let&apos;s make something awesome together!
                        </p>
                        <div
                            className="hidden xs:block mt-6 flex-grow w-full lg:w-[400px] pb-10 relative h-full min-h-[400px] lg:h-[400px] z-auto"
                        >
                            <Image src={theme === "dark" ? Placeholder_dark : Placeholder_light } quality={100} fill className="object-contain relative z-0" alt="map" />
                        </div>
                    </div>
                </div>
            </div>
            <div 
                onClick={() => disabled ? null : setIsOpen(1)}
                className={`${isOpen === 1 ? "h-full overflow-y-scroll" : "h-[80px] flex-shrink-0"} transition-all duration-1000 custom-ease  lg:hidden flex w-full flex-col justify-start items-center relative z-20 top-0`}
            >
                <div className={`w-full absolute z-20 top-0 left-0 flex items-center justify-between flex-shrink-0 flex-grow-0 h-[80px] px-[30px] 
                    ${isOpen === 1 ? "border-bottom-animation" : "border-bottom-animation-out"}
                    ${isOpen === 0 ? "border-top-animation" : "border-top-animation-out"}
                    ${colors.background} ${border} ${colors.primary}`}
                >                    
                    <span>Experience</span>
                    <span className={`${isOpen === 1 ? "rotate-[450deg]" : "rotate-[270deg]" } duration-500`}><Image src={theme === "dark" ? Arrow_dark : Arrow_light} alt="arrow" /></span>
                </div> 
                <div className="relative w-full h-full overflow-y-scroll z-0 ">
                    <div className={`w-full absolute top-[80px] space-y-5 left-0 ${colors.background} p-5`}>
                        <ExperienceComponent 
                            title="Software Engineer & Designer" 
                            description="Jan 2022 - Present"
                            Logo={Azurite_logo}
                            link="https://azuritestudios.net"
                        />
                        <ExperienceComponent 
                            title="Freelance Software Engineer & Designer" 
                            description="Nov 2019 - Present"
                            Logo={Fabi_logo}
                            link="https://fabiodinota.com"
                        />
                        <ExperienceComponent 
                            title="Data Entry & Analyst" 
                            description="Jul 2023 - Sep 2023"
                            Logo={EDR_logo}
                            link="https://edr-antwerp.be"
                        />
                        <ExperienceComponent 
                            title="Data Entry & Analyst" 
                            description="Jul 2022 - Sep 2022"
                            Logo={EDR_logo}
                            link="https://edr-antwerp.be"
                        />
                        <ExperienceComponent 
                            title="Software Engineer" 
                            description="May 2022 - Aug 2022"
                            Logo={Growii_logo}
                            link="https://www.growii.es/"
                        />
                    </div>
                </div>
            </div>
            <div 
                onClick={() => disabled ? null : setIsOpen(2)}
                className={`${isOpen === 2 ? "h-full overflow-y-scroll" : "h-[80px] flex-shrink-0"} transition-all duration-1000 custom-ease lg:hidden flex w-full flex-col justify-start items-center relative z-30 top-0`}
            >
                <div className={`w-full absolute z-30 top-0 left-0 flex items-center justify-between flex-shrink-0 flex-grow-0 h-[80px] px-[30px] border-t-[1px] ${isOpen === 2 ? "border-bottom-animation" : "border-bottom-animation-out"}   ${colors.background} ${border} ${colors.primary}`}>
                    <span>Skills</span>
                    <span className={`${isOpen === 2 ? "rotate-[450deg]" : "rotate-[270deg]" } duration-500`}><Image src={theme === "dark" ? Arrow_dark : Arrow_light} alt="arrow" /></span>
                </div>
                <div className="relative w-full h-full overflow-y-scroll z-0 ">
                    <div className={`w-full absolute top-[80px]  space-y-5 left-0 ${colors.background} p-5 h-full`}>
                        <SkillsComponent
                            title="Languages"
                            description="Javascript, Typescript, Python, CSS, SQL"
                        />
                        <SkillsComponent
                            title="Technologies"
                            description="React, Next.js, Vue, Nuxt.js, Node.js, Express.js, Three.js, R3F, Cannon.js, React Native, Framer Motion, Expo, TailwindCSS, Zustand, Axios, Less (css), Liquid (Shopify), MySQL, AOS, Sass."
                        />
                        <SkillsComponent
                            title="Video & Animation"
                            description="After Effects, Première Pro, Lottie, Media Encoder, Audition"
                        />
                        <SkillsComponent
                            title="Design"
                            description="Figma, Illustrator, Photoshop, Adobe XD, Framer"
                        />
                        <SkillsComponent
                            title="3D"
                            description="Blender, Cinema 4D, Spline"
                        />
                        <SkillsComponent
                            title="Basic Skills"
                            description="Microsoft Suite, Adobe Suite, Git, VS Code, Mac OS, Windows"
                        />
                    </div>
                </div>
            </div>
            <div className={`hidden lg:flex ${isOpenBig ? "h-[300px]" : "h-[60px] border-b-0"} duration-700 custom-ease origin-bottom w-full flex-col justify-start items-center relative z-10 `}>
                <div 
                    onClick={() => {
                        setIsOpenBig(!isOpenBig)
                    }} 
                    className={`w-full h-[60px] flex justify-between flex-shrink-0 items-center px-[30px] border-t-[1px] ${isOpenBig ? "border-bottom-animation duration-0" : "border-bottom-animation-out"} ${colors.background} ${border} ${colors.primary}`}
                >
                    <span>Skills & Experience</span>
                    <span className={`${isOpenBig ? "rotate-[450deg]" : "rotate-[270deg]" } duration-500`}><Image src={theme === "dark" ? Arrow_dark : Arrow_light} alt="arrow" /></span>

                </div>
                <div className="h-full pb-[60px] flex flex-row w-full">
                    <div className="w-1/2 overflow-y-scroll h-full">
                        <div className={`w-full h-max p-5  space-y-5 border-r-[1px] ${border}`}>
                            <SkillsComponent
                                title="Languages"
                                description="Javascript, Typescript, Python, CSS, SQL"
                            />
                            <SkillsComponent
                                title="Technologies"
                                description="React, Next.js, Vue, Nuxt.js, Node.js, Express.js, Three.js, R3F, Cannon.js, React Native, Framer Motion, Expo, TailwindCSS, Zustand, Axios, Less (css), Liquid (Shopify), MySQL, AOS, Sass."
                            />
                            <SkillsComponent
                                title="Video & Animation"
                                description="After Effects, Première Pro, Lottie, Media Encoder, Audition"
                            />
                            <SkillsComponent
                                title="Design"
                                description="Figma, Illustrator, Photoshop, Adobe XD, Framer"
                            />
                            <SkillsComponent
                                title="3D"
                                description="Blender, Cinema 4D, Spline"
                            />
                            <SkillsComponent
                                title="Basic Skills"
                                description="Microsoft Suite, Adobe Suite, Git, VS Code, Mac OS, Windows"
                            />
                        </div>
                    </div>
                    <div className="w-1/2 overflow-y-scroll h-full">
                        <div className={`w-full h-max p-5 space-y-5`}>
                            <ExperienceComponent 
                                title="Software Engineer & Designer" 
                                description="Jan 2022 - Present"
                                Logo={Azurite_logo}
                                link="https://azuritestudios.net"
                            />
                            <ExperienceComponent 
                                title="Freelance Software Engineer & Designer" 
                                description="Nov 2019 - Present"
                                Logo={Fabi_logo}
                                link="https://fabiodinota.com"
                            />
                            <ExperienceComponent 
                                title="Data Entry & Analyst" 
                                description="Jul 2023 - Sep 2023"
                                Logo={EDR_logo}
                                link="https://edr-antwerp.be"
                            />
                            <ExperienceComponent 
                                title="Data Entry & Analyst" 
                                description="Jul 2022 - Sep 2022"
                                Logo={EDR_logo}
                                link="https://edr-antwerp.be"
                            />
                            <ExperienceComponent 
                                title="Software Engineer" 
                                description="May 2022 - Aug 2022"
                                Logo={Growii_logo}
                                link="https://www.growii.es/"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default About;