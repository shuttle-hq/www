import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Grid } from '@splidejs/splide-extension-grid'
import clsx from 'clsx'
import { Button } from 'components/elements'
import { Authentication, Paperclip, Weather } from 'components/svgs'
import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

const FeaturedStarters = () => {
	return (
		<div className='mt-24 sm:mt-28 lg:mt-36 desktop:mt-40'>
			<div className='mx-auto w-full max-w-5xl px-5 sm:px-10'>
				<div className='max-w-[510px]'>
					<h2 className='font-gradual text-5xl font-bold text-black dark:text-[#C2C2C2] lg:text-[3.5rem]'>
						Starters
					</h2>
					<p className='mt-5 text-xl text-[#525151] dark:text-[#7A7A7A] lg:text-2xl'>
						Shuttle is built for Rust. Take a stab at some of the examples and see how magical it is.
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
				<FeaturedStarterItem
					icon={<Authentication className='mb-auto' />}
					title='Authentication'
					description='Custom functionality for Discord server using a bot written in Rust.'
					bg='/images/sections/featured-starters/1-bg.png'
					bgClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover'
					stars='/images/sections/featured-starters/1-stars.png'
					starsClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
					stars2='/images/sections/featured-starters/1-stars-2.png'
					stars2ClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover'
					deployLink='#'
				/>
				<FeaturedStarterItem
					icon={<Weather className='mb-auto' />}
					title='Discord Weather Forecast Bot'
					description='Custom functionality for Discord server using a bot written in Rust.'
					bg='/images/sections/featured-starters/2-bg.png'
					bgClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover'
					stars='/images/sections/featured-starters/2-stars.png'
					starsClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
					stars2='/images/sections/featured-starters/2-stars-2.png'
					stars2ClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
					deployLink='#'
				/>
				<FeaturedStarterItem
					icon={<Paperclip className='mb-auto' />}
					title='Url shortener'
					description='Custom functionality for Discord server using a bot written in Rust.'
					bg='/images/sections/featured-starters/3-bg.png'
					bgClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover'
					stars='/images/sections/featured-starters/3-stars.png'
					starsClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
					stars2='/images/sections/featured-starters/3-stars-2.png'
					stars2ClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
					deployLink='#'
				/>
				<FeaturedStarterItem
					title="There's more"
					bg='/images/sections/featured-starters/4-bg.png'
					bgClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem]'
					stars='/images/sections/featured-starters/4-stars.png'
					starsClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
					stars2='/images/sections/featured-starters/4-stars-2.png'
					stars2ClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
				/>
			</Splide>
		</div>
	)
}

interface FeaturedStarterItemProps {
	icon?: ReactNode
	title: string
	description?: string
	bg: string
	bgClassName?: string
	stars: string
	starsClassName?: string
	stars2: string
	stars2ClassName?: string
	deployLink?: string
}

const FeaturedStarterItem: FC<FeaturedStarterItemProps> = ({
	icon,
	title,
	description,
	bg,
	bgClassName,
	stars,
	starsClassName,
	stars2,
	stars2ClassName,
	deployLink,
}) => {
	return (
		<SplideSlide className='splide__slide overflow-hidden p-px'>
			<div className='border-gradient group h-full overflow-hidden rounded-[2rem] bg-[#13292C] px-5 pt-8 pb-6 outline outline-1 outline-[#1E1B19] after:rounded-[2rem] hover:outline-transparent dark:bg-black'>
				<Image src={bg} alt='bg' fill className={bgClassName} />
				<Image src={stars} alt='stars' fill className={starsClassName} />
				<Image src={stars2} alt='stars 2' fill className={stars2ClassName} />
				<div className='relative z-10 flex h-full flex-col'>
					{icon}
					<h3
						className={clsx(
							'font-gradual text-2xl font-bold text-[#C2C2C2]',
							deployLink ? 'mt-3' : 'my-auto'
						)}
					>
						{title}
					</h3>
					<p className='mt-1 text-[#C2C2C2]'>{description}</p>
					{deployLink ? (
						<div className='mt-auto flex items-center justify-between gap-5 pt-5 text-[#C2C2C2]'>
							<span>
								<Link href='#' className='hover:underline'>
									Source
								</Link>
								<span className='px-[0.375rem]'>•</span>
								<Link href='#' className='hover:underline'>
									Post
								</Link>
							</span>
							<Button variant='primary'>Deploy</Button>
						</div>
					) : (
						<Link href='#' className='group mt-3 inline-flex items-center text-[#C2C2C2]'>
							View all
							{/* Right Arrow */}
							<svg
								className='relative left-2 text-[#D8D8D8] transition-all duration-300 ease-in-out group-hover:left-4'
								width={17}
								height={14}
								viewBox='0 0 17 14'
								fill='none'
								stroke='currentColor'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M0 7H15M15 7L9.78261 1M15 7L9.78261 13' strokeWidth={2} />
							</svg>
						</Link>
					)}
				</div>
			</div>
		</SplideSlide>
	)
}

export default FeaturedStarters
