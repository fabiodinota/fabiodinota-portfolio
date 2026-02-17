"use client";

import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useMemo,
	useState,
	useSyncExternalStore,
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
	border: string;
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
	border: "",
});

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
	border: "outline-white",
	red: "text-[#FE4C4C]",
};

function subscribeToColorScheme(callback: () => void) {
	const mq = window.matchMedia("(prefers-color-scheme: dark)");
	mq.addEventListener("change", callback);
	return () => mq.removeEventListener("change", callback);
}

function getColorSchemeSnapshot() {
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

function getServerSnapshot() {
	return "dark";
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const systemTheme = useSyncExternalStore(
		subscribeToColorScheme,
		getColorSchemeSnapshot,
		getServerSnapshot
	);

	const [theme, setTheme] = useState(systemTheme);

	// Derived state — no useEffect needed
	const colors = theme === "dark" ? DarkMode : LightMode;
	const border = theme === "dark" ? "border-white" : "border-black";

	const value = useMemo(
		() => ({ theme, setTheme, colors, border }),
		[theme, colors, border]
	);

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => useContext(ThemeContext);
