/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"fuzzy-blue": "#DDE8F2",
			},
		},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("daisyui"),
	],
};
