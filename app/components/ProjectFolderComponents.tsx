import Image from "next/image";
import { useThemeContext } from "../context/themeContext";
import Link from "next/link";
import { motion } from "framer-motion";

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
	return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.08, ease: [0.200,0.005,0.000,0.995] }}
            className={`flex flex-row w-full h-[70px] justify-between items-center px-5 border parent-project cursor-pointer ${border}`}
        >
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
        </motion.div>
	);
};

export default ProjectFolderComponent;
