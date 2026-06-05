import Link from "next/link";

interface LinkOrDivProps {
	href: string;
	isXS: boolean;
	children: React.ReactNode;
	className?: string;
}

const LinkOrDiv = ({ href, isXS, children, className }: LinkOrDivProps) => {
	if (isXS && href) {
		const isInternal = href.startsWith("/");
		return (
			<Link
				target={isInternal ? undefined : "_blank"}
				href={href}
				className={className}
			>
				{children}
			</Link>
		);
	}

	return <div className={className}>{children}</div>;
};

export default LinkOrDiv;