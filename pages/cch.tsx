import { Page } from 'components/templates'
import { CONTACT_US_URI, DISCORD_URL } from 'lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function CCHPage() {
	return (
		<section className='mx-auto w-full max-w-7xl px-4 pt-[100px] font-mono font-normal text-[#DEDEDE]'>
			<div className='mx-auto mb-8 flex max-w-[686px] flex-col items-end'>
				<h1 className='text-center text-[60px]'>
					<span className='relative'>
						<Image
							src='/images/cch/santa-hat.png'
							alt=''
							width={80}
							height={60}
							className='z-1 absolute left-[-28px] top-0 ml-auto mr-auto max-w-5xl'
						/>
						C
					</span>
					hristmas Code Hunt
				</h1>

				<p className='flex items-center gap-2 self-end text-base text-[#AFAFAF]'>
					powered by
					<Link href='/'>
						<Image src='/images/cch/logo.svg' alt='' width={115} height={37} />
					</Link>
				</p>
			</div>

			<div className='flex flex-col text-base'>
				<p>
					<span className='text-[#F09050]'>&gt;</span> what
				</p>
				<p className='mb-8'>
					Shuttle&apos;s Christmas Code Hunt, inspired by Advent of Code, invites Rust enthusiasts to
					solve daily challenges using Rust and Shuttle in a relaxed environment. Join the fun, solve
					puzzles, embrace the holiday spirit and get rewarded! 🎄🚀
				</p>

				<p>
					<span className='text-[#F09050]'>&gt;</span> when
				</p>
				<p className='mb-8'>
					The first challenge will be available to participants on the 1st of December.
				</p>

				<p>
					<span className='text-[#F09050]'>&gt;</span> where
				</p>
				<p className='mb-8'>
					The Shuttle Discord will serve as a point for getting the neededresources, discussing
					challenges, and so on. You can apply for the code hunt either{' '}
					<Link href={DISCORD_URL} target='_blank' className='text-[#F09050]'>
						via Discord
					</Link>{' '}
					or{' '}
					<Link href={CONTACT_US_URI} target='_blank' className='text-[#F09050]'>
						via mail
					</Link>{' '}
					. The Shuttle Discord will serve as a point for getting the neededresources, discussing
					challenges, and so on.
				</p>

				<p>
					<span className='text-[#F09050]'>&gt;</span> prizes
				</p>
				<p>Prizes are:</p>

				<ul className='list-inside'>
					<li className='list-disc'>One</li>
					<li className='list-disc'>Two</li>
					<li className='list-disc'>Three</li>
				</ul>
			</div>
		</section>
	)
}

CCHPage.getLayout = (children: ReactNode) => (
	<Page disableFooter disableHeader>
		{children}
	</Page>
)
