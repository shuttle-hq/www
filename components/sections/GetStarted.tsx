import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { FC, ReactNode } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { Copy } from 'components/svgs'

const GetStarted = () => {
	return (
		<>
			<div className='mx-auto mt-24 w-full max-w-[800px] px-5 sm:mt-28 sm:px-10 lg:mt-32 xl:mt-36 desktop:mt-52'>
				<h2 className='font-gradual text-4.5 font-bold leading-none dark:text-[#C2C2C2]'>
					Get started in seconds
				</h2>
				<p className='mt-5 lg:text-xl'>
				Build an app with your favourite Rust framework and deploy it immediately. We’ll take care of all the infrastructure.
				</p>
			</div>
			<div className='mx-auto mt-10 w-full max-w-7xl gap-x-6 px-5 sm:px-10 lg:mt-16 lg:grid lg:grid-cols-[1fr_400px] lg:gap-5 xl:mt-20 xl:items-center xl:gap-12'>
				<div className='group relative z-10 flex items-end overflow-hidden rounded-2xl bg-[#13292C] px-8 pt-16 dark:bg-black sm:mt-10 sm:items-center sm:px-4 sm:px-12 sm:py-24 lg:mt-0 lg:items-end lg:items-center lg:px-8 lg:py-12 xl:p-[4.375rem] desktop:items-end desktop:pt-[8.75rem] desktop:pb-0'>
					<Image
						src='/images/sections/code.png'
						alt='code'
						width={420}
						height={349}
						className='mx-auto rounded-t-xl sm:rounded-xl lg:w-full lg:rounded-t-3xl lg:rounded-b-3xl desktop:relative desktop:-bottom-px desktop:rounded-b-none'
					/>
					{/* Desktop */}
					<Image
						src='/images/sections/get-started/noise.png'
						alt='get started noise'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 hidden h-full w-full object-cover lg:block'
					/>
					<Image
						src='/images/sections/get-started/bottom.png'
						alt='get started background'
						width={739}
						height={422}
						className='pointer-events-none absolute left-0 bottom-0 -z-10 w-full opacity-50 transition duration-500 group-hover:opacity-70'
					/>
					<Image
						src='/images/sections/get-started/top-left.png'
						alt='get started top'
						width={366}
						height={233}
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full object-cover group-hover:-top-5 group-hover:-left-5'
					/>
					{/* Tablet */}
					<Image
						src='/images/sections/get-started/tablet-bg.png'
						alt='get started tablet background'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 hidden h-full w-full object-cover sm:block lg:hidden'
					/>
					<Image
						src='/images/sections/get-started/stars.png'
						alt='stars'
						width={595}
						height={487}
						sizes='100vw, (min-width: 768px) 768px'
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full object-contain transition-transform duration-1000 group-hover:translate-x-20 group-hover:-translate-y-3 sm:hidden lg:block'
					/>
					<Image
						src='/images/sections/get-started/stars-2.png'
						alt='stars'
						width={595}
						height={487}
						sizes='100vw, (min-width: 768px) 768px'
						className='sn:hidden pointer-events-none absolute left-0 top-0 -z-10 h-full w-full object-contain transition-transform duration-1000 group-hover:-translate-x-20 group-hover:-translate-y-1 lg:block'
					/>
				</div>
				<Splide
					options={{
						pagination: false,
						autoWidth: true,
						autoHeight: true,
						arrows: false,
						gap: '1rem',
						mediaQuery: 'min',
						breakpoints: {
							1024: {
								destroy: true,
							},
						},
					}}
					className='mt-12 lg:mt-0'
				>
					<GetStartedSlide
						number='1'
						title='Install'
						text='Install the CLI'
						gradient='from-[#FC540C] to-[#C39348]'
					>
						<div className='relative mt-3 flex w-full cursor-text items-center rounded-2xl border border-[#191919] bg-transparent py-2 pl-3 pr-14 outline-none'>
							$ cargo install cargo-shuttle
							<button className='absolute right-3 rounded-lg border border-transparent p-1 hover:border-[#484848] hover:bg-[#343434] dark:text-[#C2C2C2]'>
								<Copy />
							</button>
						</div>
					</GetStartedSlide>
					<GetStartedSlide
						number='2'
						title='Initialize'
						text='Bootstrap your project'
						gradient='from-[#D1883C] to-[#ABA363]'
					>
						<div className='relative mt-3 flex w-full cursor-text items-center rounded-2xl border border-[#191919] bg-transparent py-2 pl-3 pr-14 outline-none'>
							$ cargo shuttle init
							<button className='absolute right-3 rounded-lg border border-transparent p-1 hover:border-[#484848] hover:bg-[#343434] dark:text-[#C2C2C2]'>
								<Copy />
							</button>
						</div>
					</GetStartedSlide>
					<GetStartedSlide
						number='3'
						title='Deploy'
						text='Take-off in 3, 2, 1..'
						gradient='from-[#C19549] to-[#8AB58D]'
					>
						<div className='relative mt-3 flex w-full cursor-text items-center rounded-2xl border border-[#191919] bg-transparent py-2 pl-3 pr-14 outline-none'>
							$ cargo shuttle deploy
							<button className='absolute right-3 rounded-lg border border-transparent p-1 hover:border-[#484848] hover:bg-[#343434] dark:text-[#C2C2C2]'>
								<Copy />
							</button>
						</div>
					</GetStartedSlide>
				</Splide>
			</div>
		</>
	)
}

interface GetStartedSlideProps {
	number: string
	title: string
	text: string
	gradient?: string
	children?: ReactNode
}

const GetStartedSlide: FC<GetStartedSlideProps> = ({ number, title, text, gradient, children }) => {
	return (
		<SplideSlide className='max-w-[85%] p-[1px] lg:max-w-full lg:pb-4 lg:last:pb-1'>
			<div
				className={clsx(
					'border-gradient group relative h-full cursor-pointer cursor-pointer rounded-2xl bg-[#E9E9E9] p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.1)] transition after:rounded-2xl hover:shadow-none dark:bg-black dark:hover:shadow-none hover:lg:shadow-none',
					number === '1' && // If it isn't the first slide, hide the outline on desktop
						'dark:shadow-[0_0_0_1px_#191919]'
				)}
			>
				<h3 className='font-gradual text-2xl font-bold dark:text-[#C2C2C2]'>
					<span className={clsx('bg-gradient-to-r bg-clip-text text-transparent', gradient)}>
						{number.padStart(2, '0')}
					</span>
					&nbsp;{title}
				</h3>
				<p className='mt-2'>{text}</p>

				{children}

				{/* If it the whole slide isn't outlined, add a line under the slide */}
				{number !== '1' && (
					<hr className='absolute -bottom-px left-6 w-[calc(100%-3rem)] border-black/10 group-hover:hidden dark:border-[#191919]' />
				)}
			</div>
		</SplideSlide>
	)
}

export default GetStarted
