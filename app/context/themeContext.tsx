"use client";

import {
	Dispatch,
	SetStateAction,
	createContext,
	use,
	useContext,
	useEffect,
	useState,
} from "react";

interface ThemeProviderProps {
	children: React.ReactNode;
}

interface ThemeContextProps {
	theme: string;
	setTheme: Dispatch<SetStateAction<string>>;
	colors: {
		primary: string;
		secondary: string;
		background: string;
		border: string;
		red: string;
	};
}

const ThemeContext = createContext<ThemeContextProps>({
	theme: "dark",
	setTheme: (): string => "",
	colors: {
		primary: "",
		secondary: "",
		background: "",
		border: "",
		red: "",
	},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState("dark");

	useEffect(() => {
		const mq = window.matchMedia("(prefers-color-scheme: dark)");

		if (mq.matches) {
			setTheme(true ? "dark" : "light");
		}

		// This callback will fire if the perferred color scheme changes without a reload
		mq.addEventListener("change", (evt) =>
			setTheme(evt.matches ? "dark" : "light")
		);
	}, []);

	const LightMode = {
		primary: "text-black",
		secondary: "text-black opacity-50",
		background: "background-white",
		border: "outline-black",
		red: "text-[#FE4C4C]",
	};
	const DarkMode = {
		primary: "text-white",
		secondary: "text-white opacity-50",
		background: "background-black",
		border: "oultine-white",
		red: "text-[#FE4C4C]",
	};

	const colors = theme === "dark" ? DarkMode : LightMode;

	return (
		<ThemeContext.Provider value={{ theme, setTheme, colors }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => useContext(ThemeContext);
