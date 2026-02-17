import { StaticImageData } from "next/image";

export interface ThemeColors {
	primary: string;
	secondary: string;
	background: string;
	border: string;
	red: string;
}

export interface Project {
	title: string;
	description: string;
	link: string;
	image: StaticImageData;
}
