import clsx from 'clsx'
import { YCombinator } from 'components/svgs'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface FooterProps {
	disableMargin?: boolean
}

const Footer: FC<FooterProps> = ({ disableMargin }) => {
	return (
		<footer className={clsx(!disableMargin && 'mt-28', 'border-t border-black/10 dark:border-white/10')}>
			<div className='relative mx-auto max-w-[1328px]'>
				<div className='absolute left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-2xl border border-black/10 dark:border-white/10'>
					<Image src='/images/sections/footer/rocket.gif' alt='rocket' fill />
				</div>
				<div className='divide-y divide-black/10 dark:divide-white/10 lg:grid lg:grid-cols-2 lg:divide-y-0 lg:divide-x'>
					<div className='grid grid-cols-2 divide-x divide-black/10 text-xl dark:divide-white/10'>
						<div className='flex flex-col gap-3 px-8 pt-16 pb-8 lg:p-16'>
							<h3 className='font-gradual font-bold text-black dark:text-[#C2C2C2]'>Shuttle</h3>
							<Link
								href='/#features'
								className='text-[#525151] transition duration-300 hover:text-black dark:text-[#FFFFFF8F] dark:hover:text-[#D8D8D8]'
							>
								Features
							</Link>
							<Link
								href='/starters'
								className='text-[#525151] transition duration-300 hover:text-black dark:text-[#FFFFFF8F] dark:hover:text-[#D8D8D8]'
							>
								Starters
							</Link>
							<Link
								href='https://github.com/orgs/shuttle-hq/projects/4'
								className='text-[#525151] transition duration-300 hover:text-black dark:text-[#FFFFFF8F] dark:hover:text-[#D8D8D8]'
							>
								Roadmap
							</Link>
						</div>
						<div className='flex flex-col gap-3 px-8 pt-16 pb-8 lg:p-16'>
							<h3 className='font-gradual font-bold text-black dark:text-[#C2C2C2]'>Company</h3>
							<Link
								href='/about'
								className='text-[#525151] transition duration-300 hover:text-black dark:text-[#FFFFFF8F] dark:hover:text-[#D8D8D8]'
							>
								About
							</Link>
							<Link
								href='/about#careers'
								scroll={false}
								className='text-[#525151] transition duration-300 hover:text-black dark:text-[#FFFFFF8F] dark:hover:text-[#D8D8D8]'
							>
								Careers
							</Link>
						</div>
					</div>
					<div className='grid grid-cols-2 divide-x divide-black/10 text-xl dark:divide-white/10'>
						<div className='flex flex-col gap-3 px-8 pt-16 pb-8 lg:p-16'>
							<h3 className='font-gradual font-bold text-black dark:text-[#C2C2C2]'>Developers</h3>
							<Link
								href='/'
								className='text-[#525151] transition duration-300 hover:text-black dark:text-[#FFFFFF8F] dark:hover:text-[#D8D8D8]'
							>
								Docs
							</Link>
							<Link
								href='https://docs.shuttle.rs/examples/axum'
								className='text-[#525151] transition duration-300 hover:text-black dark:text-[#FFFFFF8F] dark:hover:text-[#D8D8D8]'
							>
								Guides
							</Link>
							<Link
								href='/shuttle-heroes'
								className='text-[#525151] transition duration-300 hover:text-black dark:text-[#FFFFFF8F] dark:hover:text-[#D8D8D8]'
							>
								Shuttle Heroes
							</Link>
							<Link
								href='/shuttle-batch'
								className='text-[#525151] transition duration-300 hover:text-black dark:text-[#FFFFFF8F] dark:hover:text-[#D8D8D8]'
							>
								Shuttle Batch
							</Link>
						</div>
						<div className='flex flex-col gap-3 px-8 pt-16 pb-8 lg:p-16'>
							<h3 className='font-gradual font-bold text-black dark:text-[#C2C2C2]'>Community</h3>
							<a
								href='https://github.com/shuttle-hq/shuttle'
								target='_blank'
								rel='noreferrer'
								className='text-[#525151] transition duration-300 hover:text-black dark:text-[#FFFFFF8F] dark:hover:text-[#D8D8D8]'
							>
								GitHub
							</a>
							<a
								href='https://discord.com/invite/shuttle'
								target='_blank'
								rel='noreferrer'
								className='text-[#525151] transition duration-300 hover:text-black dark:text-[#FFFFFF8F] dark:hover:text-[#D8D8D8]'
							>
								Discord
							</a>
							<a
								href='https://twitter.com/shuttle_dev'
								target='_blank'
								rel='noreferrer'
								className='text-[#525151] transition duration-300 hover:text-black dark:text-[#FFFFFF8F] dark:hover:text-[#D8D8D8]'
							>
								Twitter
							</a>
							<a
								href='https://www.linkedin.com/company/shuttle-yc'
								target='_blank'
								rel='noreferrer'
								className='text-[#525151] transition duration-300 hover:text-black dark:text-[#FFFFFF8F] dark:hover:text-[#D8D8D8]'
							>
								LinkedIn
							</a>
						</div>
					</div>
				</div>
				<div className='grid grid-cols-2 divide-x divide-black/10 dark:divide-white/10 lg:col-span-2'>
					<div className='lg:grid lg:grid-cols-2 lg:divide-x lg:divide-black/10 dark:lg:divide-white/10'>
						<p className='px-8 pb-5 lg:px-16 lg:pb-9'>© 2023 shuttle</p>
						<div className='hidden lg:block' />
					</div>
					<div className='lg:grid lg:grid-cols-2 lg:divide-x lg:divide-black/10 dark:lg:divide-white/10'>
						<div className='hidden lg:block' />
						<p className='flex flex-wrap items-center gap-4 px-8 pb-5 lg:px-16 lg:pb-9'>
							Backed by
							<YCombinator />
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
