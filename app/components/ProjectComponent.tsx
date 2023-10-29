import Image from "next/image";
import { StaticImageData } from "next/image";
import { useThemeContext } from "../context/themeContext";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface projectComponentProps {
	title: string;
	description: string;
	link: string;
	image: StaticImageData;
    index: number
}

const ProjectComponent = ({
	title,
	description,
	link,
	image,
    index,
}: projectComponentProps) => {
	const { colors, border } = useThemeContext();
    const isXS = useMediaQuery({ query: '(max-width: 475px)' })

	return (
		<motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.08, ease: [0.200,0.005,0.000,0.995] }}
            className={`w-full h-full flex flex-col border ${border}`}
        >
			<Image
				quality={100}
				src={image}
                priority
				className="aspect-video w-full h-full"
				alt="placeholder"
			/>
            <LinkorDiv href={link} isXS={isXS} border={border}>
				<div className="flex flex-col justify-center">
					<h4
						className={`font-extralight leading-tight child-project ${colors.primary} text-[20px]`}
					>
						{title}
					</h4>
					<p
						className={`font-extralight ${colors.secondary} text-[14px] whitespace-nowrap min-w-[150px]`}
					>
						{description}
					</p>
				</div>
				<Link
					className={`font-extralight hidden xs:grid place-items-center border px-5 py-2 hover:underline ${border} ${colors.primary}`}
					href={link}
                    target="_blank"
				>
					View
				</Link>
            </LinkorDiv>
		</motion.div>
	);
};

export default ProjectComponent;

interface LinkorDivProps {
    href: string;
    isXS: boolean;
    children: React.ReactNode;
    border: string;
}

const LinkorDiv = ({ href, isXS, children, border }: LinkorDivProps) => {
    if (isXS) {
        return (
            <Link href={href} className={`flex-row flex justify-between items-center px-5 py-3 border-t parent-project cursor-pointer ${border}`}>
                {children}
            </Link>
        )
    } else {
        return (
            <div className={`flex-row flex justify-between items-center px-5 py-3 border-t parent-project cursor-pointer ${border}`}>
                {children}
            </div>
        )
    }
}