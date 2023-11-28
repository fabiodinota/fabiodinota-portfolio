import Link from "next/link";

interface LinkorDivProps {
    href: string;
    isXS: boolean;
    children: React.ReactNode;
    className: string;
}

const LinkorDiv = ({ href, isXS, children, className }: LinkorDivProps) => {
    if (isXS) {
        return (
            <Link target="_blank" href={href} className={className}>
                {children}
            </Link>
        )
    } else {
        return (
            <div className={className}>
                {children}
            </div>
        )
    }
}

export default LinkorDiv;