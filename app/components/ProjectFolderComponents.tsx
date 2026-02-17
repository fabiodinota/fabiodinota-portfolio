import { useThemeContext } from "../context/themeContext";
import Link from "next/link";
import { m } from "motion/react";
import { useMediaQuery } from "react-responsive";

interface projectFolderComponentProps {
	title: string;
	link: string;
    index: number
}

const ProjectFolderComponent = ({
	title,
	link,
    index,
}: projectFolderComponentProps) => {
	const { colors, border } = useThemeContext();

    const isXS = useMediaQuery({ query: '(max-width: 475px)' })

	return (
        <m.div 
            className="w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.08, ease: [0.200,0.005,0.000,0.995] as const }}
        >
            <LinkorDiv href={link} border={border} isXS={isXS}>
                <div className="flex flex-col justify-center">
                    <h4
                        className={`font-extralight leading-tight child-project ${colors.primary} text-[20px]`}
                        >
                        {title}
                    </h4>
                </div>
                <Link
                    className={`font-extralight hidden xs:grid place-items-center border px-5 py-2 hover:underline ${border} ${colors.primary}`}
                    href={link}
                    >
                    View
                </Link>
            </LinkorDiv>
        </m.div>
	);
};

export default ProjectFolderComponent;


interface LinkorDivProps {
    href: string;
    isXS: boolean;
    children: React.ReactNode;
    border: string;
}

const LinkorDiv = ({ href, isXS, children, border }: LinkorDivProps) => {
    if (isXS) {
        return (
            <Link href={href} className={`flex flex-row w-full h-[70px] justify-between items-center px-5 border parent-project cursor-pointer ${border}`}>
                {children}
            </Link>
        )
    } else {
        return (
            <div className={`flex flex-row w-full h-[70px] justify-between items-center px-5 border parent-project cursor-pointer ${border}`}>
                {children}
            </div>
        )
    }
}