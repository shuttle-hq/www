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
					<h2 className='font-gradual text-5xl font-bold text-[#C2C2C2] lg:text-[3.5rem]'>Starters</h2>
					<p className='mt-5 text-xl lg:text-2xl'>
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
					icon={<Authentication />}
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
					icon={<Weather />}
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
					icon={<Paperclip />}
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
					bgClassName='pointer-events-none absolute left-0 top-0 z-[-1] h-full w-full rounded-[2rem] object-cover'
					stars='/images/sections/featured-starters/4-stars.png'
					starsClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
					stars2='/images/sections/featured-starters/4-stars-2.png'
					stars2ClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
				/>
			</Splide>
			{/* <div
				id='splide2'
				className='splide mt-10 lg:mx-auto lg:mt-14 lg:w-full lg:max-w-[1280px] lg:px-10 desktop:mt-16'
			>
				<div className='splide__track lg:!overflow-visible'>
					<ul className='splide__list lg:!grid lg:grid-cols-2 lg:gap-5 desktop:grid-cols-4'>
						<li className='splide__slide overflow-hidden p-px'>
							<div className='border-gradient2-h group h-full rounded-[2rem] bg-black px-5 pt-8 pb-6 outline outline-1 outline-[#1E1B19] after:rounded-[2rem] hover:outline-transparent'>
								<img
									src='./img/sg1.png'
									className='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover'
								/>
								<img
									src='./img/sg1-stars-1.png'
									className='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
								/>
								<img
									src='./img/sg1-stars-2.png'
									className='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
								/>
								<div className='relative z-10 flex h-full flex-col'>
									<svg
										className='mb-auto text-[#D8D8D8]'
										width={32}
										height={32}
										viewBox='0 0 32 32'
										fill='currentColor'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M22.8849 23.8839C23.534 23.8839 24.0832 23.6467 24.5326 23.1723C24.982 22.6979 25.2067 22.1361 25.2067 21.4869C25.2067 20.8377 24.982 20.2884 24.5326 19.839C24.0832 19.3895 23.534 19.1648 22.8849 19.1648C22.2358 19.1648 21.6741 19.3895 21.1997 19.839C20.7254 20.2884 20.4882 20.8377 20.4882 21.4869C20.4882 22.1361 20.7254 22.6979 21.1997 23.1723C21.6741 23.6467 22.2358 23.8839 22.8849 23.8839ZM22.8474 28.5655C23.6713 28.5655 24.4202 28.3908 25.0943 28.0412C25.7684 27.6916 26.3426 27.1923 26.8169 26.5431C26.1678 26.1935 25.5187 25.9313 24.8696 25.7566C24.2205 25.5818 23.5465 25.4944 22.8474 25.4944C22.1484 25.4944 21.4681 25.5818 20.8065 25.7566C20.1449 25.9313 19.5021 26.1935 18.8779 26.5431C19.3523 27.1923 19.9202 27.6916 20.5818 28.0412C21.2434 28.3908 21.9986 28.5655 22.8474 28.5655ZM22.9598 31C21.0125 31 19.3523 30.3071 17.9792 28.9213C16.6061 27.5356 15.9196 25.8939 15.9196 23.9963C15.9196 22.0487 16.6061 20.382 17.9792 18.9963C19.3523 17.6105 21.0125 16.9176 22.9598 16.9176C24.8821 16.9176 26.5361 17.6105 27.9216 18.9963C29.3072 20.382 30 22.0487 30 23.9963C30 25.8939 29.3072 27.5356 27.9216 28.9213C26.5361 30.3071 24.8821 31 22.9598 31ZM14.9834 31C11.5381 30.201 8.67961 28.2472 6.40777 25.1386C4.13592 22.03 3 18.4657 3 14.4457V5.49438L14.9834 1L26.9667 5.49438V15.6067C26.3426 15.3071 25.6935 15.0762 25.0194 14.9139C24.3454 14.7516 23.6588 14.6704 22.9598 14.6704C20.3884 14.6704 18.1976 15.5818 16.3877 17.4045C14.5777 19.2272 13.6727 21.4245 13.6727 23.9963C13.6727 25.1948 13.9161 26.3683 14.4029 27.5169C14.8897 28.6654 15.5576 29.6642 16.4064 30.5131C16.1817 30.638 15.9445 30.7316 15.6949 30.794C15.4452 30.8564 15.208 30.9251 14.9834 31Z' />
									</svg>
									<h3 className='mt-3 font-gradual text-2xl font-bold text-[#C2C2C2]'>
										Authentication
									</h3>
									<p className='mt-1'>
										Custom functionality for Discord server using a bot written in Rust.
									</p>
									<div className='mt-5 flex items-center justify-between gap-5'>
										<p>
											<a href='#' className='hover:underline'>
												Source
											</a>
											<span className='px-[0.375rem]'>•</span>
											<a href='#' className='hover:underline'>
												Post
											</a>
										</p>
										<a
											href='#'
											className='rounded-button bg-[#D8D8D8] px-5 py-[0.625rem] font-gradual font-bold text-black hover:bg-gradient-to-r hover:from-[#fc540c] hover:to-[#f5c57a] hover:text-white'
										>
											Deploy
										</a>
									</div>
								</div>
							</div>
						</li>
						<li className='splide__slide overflow-hidden p-px'>
							<div className='border-gradient2-h group h-full rounded-[2rem] bg-black px-5 pt-8 pb-6 outline outline-1 outline-[#1E1B19] after:rounded-[2rem] hover:outline-transparent'>
								<img
									src='./img/sg2.png'
									className='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover'
								/>
								<img
									src='./img/sg2-stars-1.png'
									className='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
								/>
								<img
									src='./img/sg2-stars-2.png'
									className='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
								/>
								<div className='relative z-10 flex h-full flex-col'>
									<svg
										className='mb-auto text-[#D8D8D8]'
										width={32}
										height={32}
										viewBox='0 0 32 32'
										fill='currentColor'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M1.33334 18V16H6.66668V18H1.33334ZM8.70001 11.1L4.93334 7.33331L6.33334 5.93331L10.1 9.69998L8.70001 11.1ZM8.00001 25.1666C7.62223 25.1666 7.30557 25.0389 7.05001 24.7833C6.79445 24.5278 6.66668 24.2111 6.66668 23.8333C6.66668 23.4555 6.79445 23.1389 7.05001 22.8833C7.30557 22.6278 7.62223 22.5 8.00001 22.5C8.37779 22.5 8.69445 22.6278 8.95001 22.8833C9.20557 23.1389 9.33334 23.4555 9.33334 23.8333C9.33334 24.2111 9.20557 24.5278 8.95001 24.7833C8.69445 25.0389 8.37779 25.1666 8.00001 25.1666ZM9.66668 18V17C9.66668 15.2444 10.2833 13.75 11.5167 12.5166C12.75 11.2833 14.2445 10.6666 16 10.6666C17.7556 10.6666 19.25 11.2833 20.4833 12.5166C21.7167 13.75 22.3333 15.2444 22.3333 17V18H9.66668ZM12 30.6666C11.6222 30.6666 11.3056 30.5389 11.05 30.2833C10.7945 30.0278 10.6667 29.7111 10.6667 29.3333C10.6667 28.9555 10.7945 28.6389 11.05 28.3833C11.3056 28.1278 11.6222 28 12 28C12.3778 28 12.6945 28.1278 12.95 28.3833C13.2056 28.6389 13.3333 28.9555 13.3333 29.3333C13.3333 29.7111 13.2056 30.0278 12.95 30.2833C12.6945 30.5389 12.3778 30.6666 12 30.6666ZM16 25.1666C15.6222 25.1666 15.3056 25.0389 15.05 24.7833C14.7945 24.5278 14.6667 24.2111 14.6667 23.8333C14.6667 23.4555 14.7945 23.1389 15.05 22.8833C15.3056 22.6278 15.6222 22.5 16 22.5C16.3778 22.5 16.6945 22.6278 16.95 22.8833C17.2056 23.1389 17.3333 23.4555 17.3333 23.8333C17.3333 24.2111 17.2056 24.5278 16.95 24.7833C16.6945 25.0389 16.3778 25.1666 16 25.1666ZM15 7.66665V2.33331H17V7.66665H15ZM20 30.6666C19.6222 30.6666 19.3056 30.5389 19.05 30.2833C18.7945 30.0278 18.6667 29.7111 18.6667 29.3333C18.6667 28.9555 18.7945 28.6389 19.05 28.3833C19.3056 28.1278 19.6222 28 20 28C20.3778 28 20.6945 28.1278 20.95 28.3833C21.2056 28.6389 21.3333 28.9555 21.3333 29.3333C21.3333 29.7111 21.2056 30.0278 20.95 30.2833C20.6945 30.5389 20.3778 30.6666 20 30.6666ZM23.2667 11.1333L21.8667 9.73331L25.6667 5.93331L27.0667 7.33331L23.2667 11.1333ZM24 25.1666C23.6222 25.1666 23.3056 25.0389 23.05 24.7833C22.7945 24.5278 22.6667 24.2111 22.6667 23.8333C22.6667 23.4555 22.7945 23.1389 23.05 22.8833C23.3056 22.6278 23.6222 22.5 24 22.5C24.3778 22.5 24.6945 22.6278 24.95 22.8833C25.2056 23.1389 25.3333 23.4555 25.3333 23.8333C25.3333 24.2111 25.2056 24.5278 24.95 24.7833C24.6945 25.0389 24.3778 25.1666 24 25.1666ZM25.3333 18V16H30.6667V18H25.3333Z' />
									</svg>
									<h3 className='mt-3 font-gradual text-2xl font-bold text-[#C2C2C2]'>
										Discord Weather Forecast Bot
									</h3>
									<p className='mt-1'>
										Custom functionality for Discord server using a bot written in Rust.
									</p>
									<div className='mt-5 flex items-center justify-between gap-5'>
										<p>
											<a href='#' className='hover:underline'>
												Source
											</a>
											<span className='px-[0.375rem]'>•</span>
											<a href='#' className='hover:underline'>
												Post
											</a>
										</p>
										<a
											href='#'
											className='rounded-button bg-[#D8D8D8] px-5 py-[0.625rem] font-gradual font-bold text-black hover:bg-gradient-to-r hover:from-[#fc540c] hover:to-[#f5c57a] hover:text-white'
										>
											Deploy
										</a>
									</div>
								</div>
							</div>
						</li>
						<li className='splide__slide overflow-hidden p-px'>
							<div className='border-gradient2-h group h-full rounded-[2rem] bg-black px-5 pt-8 pb-6 outline outline-1 outline-[#1E1B19] after:rounded-[2rem] hover:outline-transparent'>
								<img
									src='./img/sg3.png'
									className='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover'
								/>
								<img
									src='./img/sg3-stars-1.png'
									className='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
								/>
								<img
									src='./img/sg3-stars-2.png'
									className='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
								/>
								<div className='relative z-10 flex h-full flex-col'>
									<svg
										className='mb-auto text-[#D8D8D8]'
										width={32}
										height={32}
										viewBox='0 0 32 32'
										fill='currentColor'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M15 22.6666H9.33333C7.48889 22.6666 5.91667 22.0166 4.61667 20.7166C3.31667 19.4166 2.66667 17.8444 2.66667 16C2.66667 14.1555 3.31667 12.5833 4.61667 11.2833C5.91667 9.98331 7.48889 9.33331 9.33333 9.33331H15V11.3333H9.33333C8.04445 11.3333 6.94445 11.7889 6.03333 12.7C5.12222 13.6111 4.66667 14.7111 4.66667 16C4.66667 17.2889 5.12222 18.3889 6.03333 19.3C6.94445 20.2111 8.04445 20.6666 9.33333 20.6666H15V22.6666ZM10.8333 17V15H21.1667V17H10.8333ZM17 22.6666V20.6666H22.6667C23.9556 20.6666 25.0556 20.2111 25.9667 19.3C26.8778 18.3889 27.3333 17.2889 27.3333 16C27.3333 14.7111 26.8778 13.6111 25.9667 12.7C25.0556 11.7889 23.9556 11.3333 22.6667 11.3333H17V9.33331H22.6667C24.5111 9.33331 26.0833 9.98331 27.3833 11.2833C28.6833 12.5833 29.3333 14.1555 29.3333 16C29.3333 17.8444 28.6833 19.4166 27.3833 20.7166C26.0833 22.0166 24.5111 22.6666 22.6667 22.6666H17Z' />
									</svg>
									<h3 className='mt-3 font-gradual text-2xl font-bold text-[#C2C2C2]'>
										URL Shortener
									</h3>
									<p className='mt-1'>
										Custom functionality for Discord server using a bot written in Rust.
									</p>
									<div className='mt-5 flex items-center justify-between gap-5'>
										<p>
											<a href='#' className='hover:underline'>
												Source
											</a>
											<span className='px-[0.375rem]'>•</span>
											<a href='#' className='hover:underline'>
												Post
											</a>
										</p>
										<a
											href='#'
											className='rounded-button bg-[#D8D8D8] px-5 py-[0.625rem] font-gradual font-bold text-black hover:bg-gradient-to-r hover:from-[#fc540c] hover:to-[#f5c57a] hover:text-white'
										>
											Deploy
										</a>
									</div>
								</div>
							</div>
						</li>
						<li className='splide__slide p-px'>
							<div className='o-h-shadow group relative z-10 flex h-full flex-col overflow-hidden rounded-[2rem] bg-black px-5 pt-8 pb-6 outline outline-1 outline-[#1E1B19]'>
								<img
									src='./img/sg4.png'
									className='pointer-events-none absolute left-0 top-0 z-[-1] h-full w-full rounded-[2rem] object-cover'
								/>
								<img
									src='./img/sg4-stars-1.png'
									className='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
								/>
								<img
									src='./img/sg4-stars-2.png'
									className='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
								/>
								<h3 className='my-auto font-gradual text-2xl font-bold text-[#C2C2C2]'>
									There’s more
								</h3>
								<a
									href='#'
									className='group mt-3 inline-flex items-center gap-2 self-start group-hover:gap-5 group-hover:underline'
								>
									View all
									<svg
										className='text-[#D8D8D8]'
										width={17}
										height={14}
										viewBox='0 0 17 14'
										fill='none'
										stroke='currentColor'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M0 7H15M15 7L9.78261 1M15 7L9.78261 13' strokeWidth={2} />
									</svg>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div> */}
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
			<div className='border-gradient2-h group h-full rounded-[2rem] bg-black px-5 pt-8 pb-6 outline outline-1 outline-[#1E1B19] after:rounded-[2rem] hover:outline-transparent'>
				<Image src={bg} alt='1 - bg' fill className={bgClassName} />
				<Image src={stars} alt='1 - stars' fill className={starsClassName} />
				<Image src={stars2} alt='1 - stars 2' fill className={stars2ClassName} />
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
					<p className='mt-1'>{description}</p>
					{deployLink ? (
						<div className='mt-auto flex items-center justify-between gap-5 pt-5'>
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
						<Link href='#' className='group mt-3 inline-flex items-center'>
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
