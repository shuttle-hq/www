import { Splide, SplideSlide } from '@splidejs/react-splide'
import clsx from 'clsx'
import { Copy } from 'components/svgs'
import Image from 'next/image'
import { useState } from 'react'

const HowItWorks = () => {
	const [selectedItem, setSelectedItem] = useState('hello-cloud')

	return (
		<div className='mx-auto mt-24 w-full max-w-[1280px] px-5 sm:mt-28 sm:px-10 lg:mt-36 lg:grid lg:grid-cols-[1fr_minmax(566px,_1fr)] lg:gap-7 xl:grid-cols-2 desktop:mt-40'>
			<div>
				<h2 className='font-gradual text-5xl font-bold text-[#C2C2C2] lg:text-[3.5rem]'>How it works</h2>
				<div className='mt-4 space-y-7 sm:mt-8 lg:text-xl'>
					<p>Shuttle is built for Rust.</p>
					<p>
						A simple cargo command packages up your application, ships it to the shuttle build cluster
						where it's incrementally compiled and automatically served on a unique subdomain.
					</p>
					<p>
						Shuttle uses simple but powerful annotations to understand your dependencies.
						Infrastructure dependencies like databases or key-value stores are spun up for you and
						everything is automatically wired together from the get-go.
					</p>
					<p>It feels a little magical.</p>
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
				>
					<SplideSlide>
						<button
							className={clsx(
								'whitespace-nowrap rounded-[1.75rem] p-2 px-6 font-gradual font-bold leading-none md:rounded-b-none md:border-b-0 md:py-3',
								selectedItem === 'hello-cloud'
									? 'border border-[#191919] bg-black text-[#D8D8D8]'
									: 'tab-shadow text-[#C2C2C2]'
							)}
							onClick={() => setSelectedItem('hello-cloud')}
						>
							Hello cloud
						</button>
					</SplideSlide>
					<SplideSlide>
						<button
							className={clsx(
								'whitespace-nowrap rounded-[1.75rem] p-2 px-6 font-gradual font-bold leading-none md:rounded-b-none md:border-b-0 md:py-3',
								selectedItem === 'cargo-deploy'
									? 'border border-[#191919] bg-black text-[#D8D8D8]'
									: 'tab-shadow text-[#C2C2C2]'
							)}
							onClick={() => setSelectedItem('cargo-deploy')}
						>
							Cargo deploy
						</button>
					</SplideSlide>
					<SplideSlide>
						<button
							className={clsx(
								'whitespace-nowrap rounded-[1.75rem] p-2 px-6 font-gradual font-bold leading-none md:rounded-b-none md:border-b-0 md:py-3',
								selectedItem === 'using-sql'
									? 'border border-[#191919] bg-black text-[#D8D8D8]'
									: 'tab-shadow text-[#C2C2C2]'
							)}
							onClick={() => setSelectedItem('using-sql')}
						>
							Using SQL
						</button>
					</SplideSlide>
					<SplideSlide>
						<button
							className={clsx(
								'whitespace-nowrap rounded-[1.75rem] p-2 px-6 font-gradual font-bold leading-none md:rounded-b-none md:border-b-0 md:py-3',
								selectedItem === 'using-axum'
									? 'border border-[#191919] bg-black text-[#D8D8D8]'
									: 'tab-shadow text-[#C2C2C2]'
							)}
							onClick={() => setSelectedItem('using-axum')}
						>
							Using Axum
						</button>
					</SplideSlide>
				</Splide>
				<div className='mt-3 rounded-[2rem] border border-[#191919] bg-black p-6 text-right md:mt-0 md:rounded-tl-none'>
					<button className='rounded-xl border border-[#191919] p-2 text-[#C2C2C2] hover:border-[#484848] hover:bg-[#343434]'>
						<Copy width={32} height={32} />
					</button>
					<Image src='/images/sections/code.png' alt='code' width={538} height={378} className='mt-6' />
				</div>
			</div>
		</div>
	)
}

export default HowItWorks
