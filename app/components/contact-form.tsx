import React, { FormEvent, useState } from "react";
import { useThemeContext } from "@/app/context/theme-context";
import Image from "next/image";
import ArrowDark from "@/public/Arrow_dark.svg";
import ArrowLight from "@/public/Arrow_light.svg";
import { cn } from "@/lib/utils";

/* ---------- InputField ---------- */

interface InputFieldProps {
	placeholder: string;
	name: string;
	onChange: (_: FormEvent<HTMLInputElement>) => void;
	type?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
	placeholder,
	name,
	onChange,
	type,
}) => {
	const { colors, border, theme } = useThemeContext();

	return (
		<input
			type={type || "text"}
			required
			placeholder={placeholder}
			name={name}
			autoComplete="off"
			onChange={(e) => onChange(e)}
			alt={placeholder}
			className={cn(
				"w-full h-[70px] flex-shrink-0 border text-[20px] font-extralight px-5",
				"focus:outline-none placeholder:font-thin placeholder:text-[20px] align-middle",
				border,
				colors.background,
				theme === "dark"
					? "placeholder:text-white"
					: "placeholder:text-black",
			)}
		/>
	);
};

/* ---------- TextArea ---------- */

interface TextAreaProps {
	placeholder: string;
	name: string;
	onChange: (_: FormEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({
	placeholder,
	name,
	onChange,
}) => {
	const { colors, border, theme } = useThemeContext();

	return (
		<textarea
			placeholder={placeholder}
			name={name}
			onChange={(e) => onChange(e)}
			className={cn(
				"w-full min-h-[160px] max-h-[300px] border pt-5 text-[20px] font-extralight px-5",
				"focus:outline-none placeholder:font-thin placeholder:text-[20px] align-middle",
				border,
				colors.background,
				theme === "dark"
					? "placeholder:text-white"
					: "placeholder:text-black",
			)}
		/>
	);
};

/* ---------- Select ---------- */

interface SelectProps {
	name: string;
	value: string;
	onChange: (_: FormEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<SelectProps> = ({ name, value, onChange }) => {
	const { colors, border, theme } = useThemeContext();
	const [open, setOpen] = useState<boolean>(false);

	const handleSelectClick = () => {
		setOpen(!open);
	};

	const handleSelectKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			handleSelectClick();
		}
	};

	return (
		<div
			onClick={handleSelectClick}
			onKeyDown={handleSelectKeyDown}
			role="button"
			tabIndex={0}
			aria-label="Select inquiry type"
			className="relative w-full"
		>
			<select
				name={name}
				value={value}
				required
				onChange={(e) => onChange(e)}
				className={cn(
					"appearance-none w-full h-[70px] flex-shrink-0 border text-[20px] font-extralight px-5",
					"focus:outline-none placeholder:font-thin placeholder:text-[20px] align-middle",
					border,
					colors.background,
				)}
			>
				<option>Commission</option>
				<option>Question</option>
				<option>Collaboration</option>
				<option>Bug Report</option>
				<option>Other...</option>
			</select>
			<Image
				className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 -rotate-90"
				src={theme === "dark" ? ArrowDark : ArrowLight}
				alt="arrow"
			/>
		</div>
	);
};

/* ---------- SubmitButton ---------- */

interface SubmitButtonProps {
	onClick: (_: FormEvent) => void;
	text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, text }) => {
	const { colors, border } = useThemeContext();

	return (
		<button
			type="submit"
			className={cn(
				"w-full h-[70px] hover:underline flex-shrink-0 border text-[20px] font-extralight px-5",
				"focus:outline-none align-middle",
				border,
				colors.background,
			)}
			onClick={(e) => onClick(e)}
		>
			{text}
		</button>
	);
};

export default SubmitButton;