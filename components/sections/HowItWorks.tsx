import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import clsx from 'clsx'
import { Copy } from 'components/svgs'
import Image from 'next/image'
import { useState } from 'react'

const HowItWorks = () => {
	const [selectedItem, setSelectedItem] = useState('hello-cloud')

	return (
		<div className='mx-auto mt-24 w-full max-w-7xl overflow-hidden px-5 sm:mt-28 sm:px-10 lg:mt-36 lg:grid lg:grid-cols-[1fr_minmax(566px,_1fr)] lg:gap-7 xl:grid-cols-2 desktop:mt-40'>
			<div>
				<h2 className='font-gradual text-5xl font-bold dark:dark:text-[#C2C2C2] lg:text-[3.5rem]'>
					How it works
				</h2>
				<div className='mt-4 space-y-7 text-[#525151] dark:text-[#7A7A7A] sm:mt-8 lg:text-xl'>
					<p
						className={clsx(
							'text-[#525151] transition duration-200 dark:text-[#7A7A7A]',
							selectedItem === 'hello-cloud' && '!text-black dark:!text-white'
						)}
					>
						With shuttle you can take any Rust service code, and have it ready for deployment by adding
						a single annotation to your main function.
					</p>
					<p
						className={clsx(
							'text-[#525151] transition duration-200 dark:text-[#7A7A7A]',
							selectedItem === 'cargo-deploy' && '!text-black dark:!text-white'
						)}
					>
						Your code is packaged and sent to shuttle where it is compiled and deployed. After a few
						seconds, your app is already running in the cloud.
					</p>
					<p
						className={clsx(
							'text-[#525151] transition duration-200 dark:text-[#7A7A7A]',
							selectedItem === 'using-sql' && '!text-black dark:!text-white'
						)}
					>
						You can then add more annotations that control cloud resources. Adding components like
						databases, secrets or storage is as easy as adding arguments to a function.
					</p>
					<p
						className={clsx(
							'text-[#525151] transition duration-200 dark:text-[#7A7A7A]',
							selectedItem === 'using-axum' && '!text-black dark:!text-white'
						)}
					>
						The next time you deploy your app, shuttle provisions and configures the resources you
						need. In minutes, you can build complex and scalable apps on industry-standard AWS products
						and never have to touch the AWS console.
					</p>
				</div>
			</div>
			<div className='shadow-gradient mt-14 before:blur-[60px] lg:mt-0'>
				<Splide
					options={{
						pagination: false,
						arrows: false,
						autoWidth: true,
						gap: '0.75rem',
						mediaQuery: 'min',
						breakpoints: {
							768: {
								gap: 0,
								drag: false,
							},
						},
					}}
					className='splide md:top-px'
					hasTrack={false}
				>
					<SplideTrack className='!overflow-visible'>
						<SplideSlide>
							<button
								className={clsx(
									'whitespace-nowrap rounded-[1.75rem] p-2 px-6 font-gradual font-bold leading-none md:rounded-b-none md:border-b-0 md:py-3',
									selectedItem === 'hello-cloud'
										? 'border border-[#191919] bg-[#13292C] text-[#D8D8D8] dark:bg-black'
										: 'tab-shadow dark:text-[#C2C2C2]'
								)}
								onClick={() => setSelectedItem('hello-cloud')}
							>
								Get Started
							</button>
						</SplideSlide>
						<SplideSlide>
							<button
								className={clsx(
									'whitespace-nowrap rounded-[1.75rem] p-2 px-6 font-gradual font-bold leading-none md:rounded-b-none md:border-b-0 md:py-3',
									selectedItem === 'cargo-deploy'
										? 'border border-[#191919] bg-[#13292C] text-[#D8D8D8] dark:bg-black'
										: 'tab-shadow dark:text-[#C2C2C2]'
								)}
								onClick={() => setSelectedItem('cargo-deploy')}
							>
								Deploy
							</button>
						</SplideSlide>
						<SplideSlide>
							<button
								className={clsx(
									'whitespace-nowrap rounded-[1.75rem] p-2 px-6 font-gradual font-bold leading-none md:rounded-b-none md:border-b-0 md:py-3',
									selectedItem === 'using-sql'
										? 'border border-[#191919] bg-[#13292C] text-[#D8D8D8] dark:bg-black'
										: 'tab-shadow dark:text-[#C2C2C2]'
								)}
								onClick={() => setSelectedItem('using-sql')}
							>
								Add a Database
							</button>
						</SplideSlide>
						<SplideSlide>
							<button
								className={clsx(
									'whitespace-nowrap rounded-[1.75rem] p-2 px-6 font-gradual font-bold leading-none md:rounded-b-none md:border-b-0 md:py-3',
									selectedItem === 'using-axum'
										? 'border border-[#191919] bg-[#13292C] text-[#D8D8D8] dark:bg-black'
										: 'tab-shadow dark:text-[#C2C2C2]'
								)}
								onClick={() => setSelectedItem('using-axum')}
							>
								Deploy Again
							</button>
						</SplideSlide>
					</SplideTrack>
				</Splide>
				<div className='mt-3 rounded-[2rem] border border-[#191919] bg-[#13292C] p-6 text-right dark:bg-black md:mt-0 md:rounded-tl-none'>
					<button className='rounded-xl border border-[#191919] p-2 text-white hover:border-[#484848] hover:bg-[#343434] dark:text-[#C2C2C2]'>
						<Copy width={32} height={32} />
					</button>
					<Image src='/images/sections/code.png' alt='code' width={538} height={378} className='mt-6' />
				</div>
			</div>
		</div>
	)
}

export default HowItWorks
