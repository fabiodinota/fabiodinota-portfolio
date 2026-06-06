import Link from "next/link";

interface LinkOrDivProps {
	href?: string | null;
	isXS?: boolean;
	children: React.ReactNode;
	className?: string;
	ariaLabel?: string;
}

const LinkOrDiv = ({
	href,
	isXS = false,
	children,
	className,
	ariaLabel,
}: LinkOrDivProps) => {
	if (isXS && href) {
		const isInternal = href.startsWith("/");
		return (
			<Link
				target={isInternal ? undefined : "_blank"}
				rel={isInternal ? undefined : "noopener noreferrer"}
				href={href}
				className={className}
				aria-label={ariaLabel}
			>
				{children}
			</Link>
		);
	}

	return <div className={className}>{children}</div>;
};

export default LinkOrDiv;
