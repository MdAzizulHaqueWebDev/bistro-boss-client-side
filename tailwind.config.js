/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			cinzel: '"Cinzel", serif',
			poppins: '"Poppins", sans-serif',
		},
		fontSize: {
			"2xl":"24px",
			"3xl":"30px",
			"responsive": `clamp(1rem,0.3043rem + 3.1483vw , 3rem)`,
		},
		extend: {},
	},
	plugins: [require("daisyui")],
};
