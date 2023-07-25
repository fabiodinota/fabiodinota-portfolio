/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
            height: {
                screen: ['100vh /* fallback for Opera, IE and etc. */', '100lvh'],
              },
		},
        screens: {
            'xs': '475px',
            ...require('tailwindcss/defaultConfig').theme.screens,
            '2xl': '1440px',
        },
	},
	plugins: [],
};
