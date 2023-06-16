import { DISCORD_URL } from "../../lib/constants";

import Link from 'next/link'

const CommunitySupportedNumbers = () => {
	return (
		<div className='mt-24 border-y border-black/10 py-12 dark:border-[#191919] lg:py-0'>
			<div className='mx-auto grid w-full max-w-[1280px] grid-cols-3 gap-y-12 gap-x-8 px-5 sm:gap-14 sm:px-10 lg:grid-cols-[1fr_51px_1fr_1fr_1fr] lg:items-center'>
				<div className='col-span-3 lg:col-span-1 lg:py-12'>
					<h2 className='font-gradual text-2xl font-bold text-black dark:text-[#C2C2C2]'>
						Powered by our Community
					</h2>
					<Link
						href={DISCORD_URL}
						className='group mt-3 inline-flex items-center text-[#525151] dark:text-[#C2C2C2]'
					>
						Join us now
						{/* Right Arrow */}
						<svg
							className='relative left-2 text-black transition-all duration-300 ease-in-out group-hover:left-4 dark:text-[#D8D8D8]'
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
				</div>
				{/* Chevron */}
				<svg
					className='hidden h-full w-auto text-black/10 dark:text-[#191919] lg:block'
					width={51}
					height={192}
					viewBox='0 0 51 192'
					fill='currentColor'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M0 0H1L51 96L1 192H0L50 96L0 0Z' />
				</svg>
				<div className='text-center lg:py-12'>
					<p className='bg-gradient-to-r from-[#FB540C] to-[#DD7D31] bg-clip-text font-gradual text-[2.5rem] font-bold leading-none text-transparent sm:text-[3.5rem]'>
						3k+
					</p>
					<h3 className='mt-1 text-sm text-[#525151] dark:text-[#C2C2C2] sm:text-base'>Github Stars</h3>
				</div>
				<div className='text-center lg:py-12'>
					<p className='bg-gradient-to-r from-[#B59C53] to-[#A5A76B] bg-clip-text font-gradual text-[2.5rem] font-bold leading-none text-transparent sm:text-[3.5rem]'>
						2k+
					</p>
					<h3 className='mt-1 text-sm text-[#525151] dark:text-[#C2C2C2] sm:text-base'>Discord Users</h3>
				</div>
				<div className='text-center lg:py-12'>
					<p className='bg-gradient-to-r from-[#93B083] to-[#7BBB9F] bg-clip-text font-gradual text-[2.5rem] font-bold leading-none text-transparent sm:text-[3.5rem]'>
						65+
					</p>
					<h3 className='mt-1 text-sm text-[#525151] dark:text-[#C2C2C2] sm:text-base'>Contributors</h3>
				</div>
			</div>
		</div>
	)
}

export default CommunitySupportedNumbers
