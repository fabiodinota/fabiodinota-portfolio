"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useThemeContext } from "@/app/context/theme-context";
import Image from "next/image";
import PlaceholderLight from "@/public/About_main.png";
import PlaceholderDark from "@/public/About_main_white.png";
import ExperienceCard from "@/app/components/experience-card";
import AzuriteLogo from "@/public/Azurite_logo_experience.png";
import EDRLogo from "@/public/EDR_logo_experience.png";
import FabiLogo from "@/public/Fabi_logo_experience.png";
import GrowiiLogo from "@/public/Growii_logo_experience.png";
import SkillCard from "@/app/components/skill-card";
import {
	AboutHero,
	AccordionSection,
	SkillsExperiencePanel,
} from "@/app/components/about-sections";
import { cn } from "@/lib/utils";

function About() {
	const { colors, border, theme } = useThemeContext();

	const [isOpen, setIsOpen] = useState<number>(0);
	const [isOpenBig, setIsOpenBig] = useState<boolean>(false);
	const [disabled, setDisabled] = useState<boolean>(false);
	const disabledTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsOpenBig(true);
		}, 800);
		return () => clearTimeout(timer);
	}, []);

	const handleAccordionClick = useCallback(
		(section: number) => {
			if (disabled) return;
			setIsOpen(section);
			setDisabled(true);
			if (disabledTimerRef.current) {
				clearTimeout(disabledTimerRef.current);
			}
			disabledTimerRef.current = setTimeout(() => {
				setDisabled(false);
			}, 800);
		},
		[disabled],
	);

	const skillsContent = (
		<>
			<SkillCard
				title="Languages"
				description="Javascript, Typescript, Python, CSS, SQL, PHP"
			/>
			<SkillCard
				title="Technologies"
				description="React, Next.js, Vue, Nuxt.js, Node.js, Express.js, Three.js, R3F, Cannon.js, React Native, Framer Motion, Expo, TailwindCSS, Zustand, Axios, Less (css), Liquid (Shopify), MySQL, AOS, Sass."
			/>
			<SkillCard
				title="Video & Animation"
				description="After Effects, Première Pro, Lottie, Media Encoder, Audition"
			/>
			<SkillCard
				title="Design"
				description="Figma, Illustrator, Photoshop, Adobe XD, Framer"
			/>
			<SkillCard title="3D" description="Blender, Cinema 4D, Spline" />
			<SkillCard
				title="Basic Skills"
				description="Microsoft Suite, Adobe Suite, Git, VS Code, Mac OS, Windows"
			/>
		</>
	);

	const experienceContent = (
		<div className="space-y-5">
			<ExperienceCard
				title="Software Engineer & Designer"
				description="Jan 2022 - Present"
				Logo={AzuriteLogo}
				link="https://azuritestudios.net"
			/>
			<ExperienceCard
				title="Freelance Software Engineer & Designer"
				description="Nov 2019 - Present"
				Logo={FabiLogo}
				link="https://fabiodinota.com"
			/>
			<ExperienceCard
				title="Data Entry & Analyst"
				description="Jul 2023 - Sep 2023"
				Logo={EDRLogo}
				link="https://edr-antwerp.be"
			/>
			<ExperienceCard
				title="Data Entry & Analyst"
				description="Jul 2022 - Sep 2022"
				Logo={EDRLogo}
				link="https://edr-antwerp.be"
			/>
			<ExperienceCard
				title="Software Engineer"
				description="May 2022 - Aug 2022"
				Logo={GrowiiLogo}
				link="https://www.growii.es/"
			/>
		</div>
	);

	return (
		<div className="flex flex-col w-full overflow-hidden items-center lg:justify-between h-full relative">
			<AboutHero
				colors={colors}
				theme={theme}
				isOpenBig={isOpenBig}
				placeholderDark={PlaceholderDark}
				placeholderLight={PlaceholderLight}
			/>

			{/* Mobile accordion: About Me */}
			<AccordionSection
				colors={colors}
				theme={theme}
				border={border}
				title="About Me"
				isOpen={isOpen === 0}
				sectionIndex={0}
				onAccordionClick={handleAccordionClick}
				zIndex="z-10"
				borderClasses="border-b-[1px]"
			>
				<p
					className={cn(
						"sm:text-justify sm:pb-0 font-extralight",
						colors.primary,
					)}
				>
					Hey there, I&apos;m a software engineer and designer based
					in Antwerp, Belgium. I&apos;m passionate about all things
					tech, and you&apos;ll often find me doodling ideas in my
					sketchbook or tinkering with code in my free time.
					<br />
					<br />
					I&apos;ve been lucky enough to work with a wide range of
					languages and technologies, including JavaScript, Typescript,
					React, Next.js and more. I&apos;m also pretty handy with
					design tools like Figma, Illustrator, and Photoshop, and
					have experience with video and animation software like After
					Effects and Premiere Pro.
					<br />
					<br />
					While I don&apos;t like to brag too much, I&apos;m always up
					for a challenge and love taking on new projects. So if
					you&apos;re looking for a creative problem-solver who&apos;s
					up-to-date with the latest tech, feel free to reach out.
					Let&apos;s make something awesome together!
				</p>
				<div className="hidden xs:block mt-6 flex-grow w-full lg:w-[400px] pb-10 relative h-full min-h-[400px] lg:h-[400px] z-auto">
					<Image
						src={
							theme === "dark"
								? PlaceholderDark
								: PlaceholderLight
						}
						sizes="400px"
						quality={100}
						fill
						className="object-contain relative z-0"
						alt="About Fabio Di Nota"
					/>
				</div>
			</AccordionSection>

			{/* Mobile accordion: Experience */}
			<AccordionSection
				colors={colors}
				theme={theme}
				border={border}
				title="Experience"
				isOpen={isOpen === 1}
				sectionIndex={1}
				onAccordionClick={handleAccordionClick}
				zIndex="z-20"
				borderClasses={cn(
					isOpen === 1
						? "border-bottom-animation"
						: "border-bottom-animation-out",
					isOpen === 0
						? "border-top-animation"
						: "border-top-animation-out",
				)}
			>
				<div className="space-y-5">
					<ExperienceCard
						title="Software Engineer & Designer"
						description="Jan 2022 - Present"
						Logo={AzuriteLogo}
						link="https://azuritestudios.net"
					/>
					<ExperienceCard
						title="Freelance Software Engineer & Designer"
						description="Nov 2019 - Present"
						Logo={FabiLogo}
						link="https://fabiodinota.com"
					/>
					<ExperienceCard
						title="Data Entry & Analyst"
						description="Jul 2023 - Sep 2023"
						Logo={EDRLogo}
						link="https://edr-antwerp.be"
					/>
					<ExperienceCard
						title="Data Entry & Analyst"
						description="Jul 2022 - Sep 2022"
						Logo={EDRLogo}
						link="https://edr-antwerp.be"
					/>
					<ExperienceCard
						title="Software Engineer"
						description="May 2022 - Aug 2022"
						Logo={GrowiiLogo}
						link="https://www.growii.es/"
					/>
				</div>
			</AccordionSection>

			{/* Mobile accordion: Skills */}
			<AccordionSection
				colors={colors}
				theme={theme}
				border={border}
				title="Skills"
				isOpen={isOpen === 2}
				sectionIndex={2}
				onAccordionClick={handleAccordionClick}
				zIndex="z-30"
				borderClasses={cn(
					"border-t-[1px]",
					isOpen === 2
						? "border-bottom-animation"
						: "border-bottom-animation-out",
				)}
			>
				<div className="space-y-5">{skillsContent}</div>
			</AccordionSection>

			{/* Desktop: Skills & Experience panel */}
			<SkillsExperiencePanel
				colors={colors}
				theme={theme}
				border={border}
				isOpenBig={isOpenBig}
				setIsOpenBig={setIsOpenBig}
				skillsContent={skillsContent}
				experienceContent={experienceContent}
			/>
		</div>
	);
}

export default About;
