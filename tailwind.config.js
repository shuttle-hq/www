/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	important: true,
	theme: {
		extend: {
			fontFamily: {
				gradual: 'BwGradual, sans-serif',
			},
			borderRadius: {
				'2.5xl': '1.5rem',
				'4xl': '2rem',
				button: '0.875rem',
			},
			fontSize: {
				4.5: '2.5rem',
				6.5: '4rem',
			},
			screens: {
				desktop: '1440px',
			},
			typography: ({ theme }) => {
				const tocCSS = {
					ul: {
						'list-style-type': 'none',
						'padding-left': 0,
						margin: 0,
						li: {
							'padding-left': 0,
							marginTop: '0.375rem',
							marginBottom: '0.375rem',
						},
						a: {
							display: 'block',
							'text-decoration': 'none',
							fontSize: '0.875rem',
							fontWeight: '400',
							color: '#525151',
							transition: 'all 0.5s ease-in-out',
							position: 'relative',
							left: 0,
							'&:hover': {
								color: '#000000',
								left: '1rem',
							},
							'font-weight': '400',
						},
						ul: {
							'list-style-type': 'none',
							li: {
								marginTop: '0.375rem',
								marginBottom: '0.375rem',
								'padding-left': '0 !important',
								'margin-left': '0.75rem',
							},
							a: {
								fontWeight: '200',
								color: '#525151',
								'&:hover': {
									color: '#000000',
								},
							},
						},
					},
				}

				return {
					toc: {
						css: tocCSS,
					},
					'dark-toc': {
						css: {
							...tocCSS,
							ul: {
								...tocCSS.ul,
								a: {
									...tocCSS.ul.a,
									color: '#C2C2C280',
									'&:hover': {
										...tocCSS.ul.a['&:hover'],
										color: '#C2C2C2',
									},
								},
								ul: {
									...tocCSS.ul.ul,
									a: {
										...tocCSS.ul.ul.a,
										color: '#C2C2C280',
										'&:hover': {
											...tocCSS.ul.ul.a['&:hover'],
											color: '#C2C2C2',
										},
									},
								},
							},
						},
					},
				}
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
