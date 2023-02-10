import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import Button from './Button'

interface StarterProps {
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

const Starter: FC<StarterProps> = ({
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
		<div className='border-gradient group relative relative h-full overflow-visible rounded-4xl bg-[#13292C] px-5 pt-8 pb-6 shadow-[0_0_0_1px_#191919] after:rounded-[2rem] hover:shadow-none dark:bg-black'>
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
				<p className='opacity-60 mt-1 text-[#C2C2C2]'>{description}</p>
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
						<Button variant='primary' href={deployLink}>
							Deploy
						</Button>
					</div>
				) : (
					<Link href='/starters' className='group mt-3 inline-flex items-center text-[#C2C2C2]'>
						View all
						{/* Right Arrow */}
						<svg
							className='relative my-4 left-2 text-[#D8D8D8] transition-all duration-300 ease-in-out group-hover:left-4'
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
	)
}

export default Starter
