/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				gradual: 'sans-serif',
			},
			borderRadius: {
				button: '0.875rem',
			},
			fontSize: {
				4.5: '2.5rem',
				6.5: '4rem',
			},
			screens: {
				desktop: '1440px',
			},
		},
	},
	plugins: [],
}
