import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Grid } from '@splidejs/splide-extension-grid'
import { Starter } from 'components/elements'
import { Discord, Paperclip, React } from 'components/svgs'
import {GetStaticPropsResult} from "next";
import {StarterAttrs, StarterProps, StarterXProps} from "../elements/Starter";
import {FeaturedStartersContent} from "../../content/starters";

const StartersXProps: StarterXProps[] = [
	{
		bg: '/images/sections/featured-starters/1-bg.png',
		bgClassName: 'pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover',
		stars: '/images/sections/featured-starters/1-stars.png',
		starsClassName: 'pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3',
		stars2: '/images/sections/featured-starters/1-stars-2.png',
		stars2ClassName: 'pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover'
	},
	{
		bg: '/images/sections/featured-starters/2-bg.png',
		bgClassName: 'pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover',
		stars: '/images/sections/featured-starters/2-stars.png',
		starsClassName: 'pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3',
		stars2: '/images/sections/featured-starters/2-stars-2.png',
		stars2ClassName: 'pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
	},
	{
		bg: '/images/sections/featured-starters/3-bg.png',
		bgClassName: 'pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover',
		stars: '/images/sections/featured-starters/3-stars.png',
		starsClassName: 'pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3',
		stars2: '/images/sections/featured-starters/3-stars-2.png',
		stars2ClassName: 'pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
	}
]

const FeaturedStarters = ({starters}: {starters: StarterAttrs[]}) => {
	const children = StartersXProps.slice(0, 3).map((xprops, idx) => {
		return (
			<SplideSlide className='splide__slide overflow-hidden p-px' key={idx}>
				<Starter {...{...xprops, ...starters[idx]}}/>
			</SplideSlide>
		)
	})

	return (
		<div className='mt-24 sm:mt-28 lg:mt-36 desktop:mt-40'>
			<div className='mx-auto w-full max-w-5xl px-5 sm:px-10'>
				<div className='max-w-[510px]'>
					<h2 className='font-gradual text-5xl font-bold text-black dark:text-[#C2C2C2] lg:text-[3.5rem]'>
						Starters
					</h2>
					<p className='mt-5 text-xl text-[#525151] dark:text-[#7A7A7A] lg:text-2xl'>
						Set up and deploy a quick starter, in minutes, with detailed instructions on how it works.
					</p>
				</div>
			</div>
			<Splide
				options={{
					pagination: false,
					arrows: false,
					fixedWidth: '280px',
					gap: '1rem',
					mediaQuery: 'min',
					padding: '1.25rem',
					breakpoints: {
						1024: {
							padding: 0,
							fixedWidth: 0,
							grid: {
								rows: 2,
								cols: 2,
								gap: {
									col: '1.25rem',
									row: '1.25rem',
								},
							},
						},
						1280: {
							grid: {
								rows: 1,
								cols: 4,
								gap: {
									col: '1.25rem',
								},
							},
						},
					},
				}}
				extensions={{ Grid }}
				className='mt-10 lg:mx-auto lg:mt-14 lg:w-full lg:max-w-7xl lg:px-10 desktop:mt-16'
			>
				{children}
				<SplideSlide className='splide__slide overflow-hidden p-px'>
					<Starter
						title="There's more"
						bg='/images/sections/featured-starters/4-bg.png'
						bgClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem]'
						stars='/images/sections/featured-starters/4-stars.png'
						starsClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
						stars2='/images/sections/featured-starters/4-stars-2.png'
						stars2ClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
					/>
				</SplideSlide>
			</Splide>
		</div>
	)
}

export default FeaturedStarters
