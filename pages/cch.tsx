import { Page } from 'components/templates'
import { trackEvent } from 'lib/posthog'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useState } from 'react'

export default function CCHPage() {
	const [scoreboard, setScoreboard] = useState(null) // todo

	return (
		<section className='mx-auto w-full max-w-5xl px-4 py-12 font-mono font-normal text-[#DEDEDE]'>
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
				<p>
					Shuttle&apos;s Christmas Code Hunt, inspired by Advent of Code, invites you to solve daily
					challenges using Rust in a relaxed environment. Each weekday, you will be implementing an HTTP
					endpoint that returns the solution to the daily challenge, and deploy it on{' '}
					<Link href='/' className='text-[#F09050]'>
						Shuttle
					</Link>
					. Join the fun, solve puzzles, embrace the holiday spirit, and get rewarded! 🎄🚀
				</p>

				<p className='mt-8'>
					<span className='text-[#F09050]'>&gt;</span> when
				</p>
				<p>
					The first challenge will be released on December 1, 12:00 UTC (
					<Link href='https://everytimezone.com/s/297d565e' target='_blank' className='text-[#F09050]'>
						check your timezone
					</Link>
					). A total of 16 challenges will be released each weekday between December 1 and December 22.
				</p>

				<p className='mt-8'>
					<span className='text-[#F09050]'>&gt;</span> where
				</p>
				<p>
					The Shuttle Discord will serve as the main point for getting announcements, discussing
					challenges, and more. You can also sign up for announcements via email. Participating requires
					logging in to the Shuttle Console with a GitHub account. Register now to stay updated and have
					a chance to win exciting prizes!{' '}
					<Link
						href='https://shuttlerust.typeform.com/to/hkPkbXab'
						target='_blank'
						className='text-[#F09050]'
						onClick={() => {
							trackEvent('cch_sign_up')
						}}
					>
						Sign up here
					</Link>
					.
				</p>

				<p className='mt-8'>
					<span className='text-[#F09050]'>&gt;</span> prizes
				</p>
				<p>
					1st place: $200 Amazon voucher + Shuttle swag box
					<br />
					2nd place: &nbsp;$50 Amazon voucher + Shuttle swag box
					<br />
					3rd place: &nbsp;$25 Amazon voucher + Shuttle swag box
					<br />
					Completing all the challenges: &nbsp;TBA
				</p>

				<p className='mt-8'>
					<span className='text-[#F09050]'>&gt;</span> rules
				</p>
				<p>Coming soon</p>

				<p className='mt-8'>
					<span className='text-[#F09050]'>&gt;</span> scoreboard
				</p>
				<p>Coming soon</p>
			</div>
		</section>
	)
}

CCHPage.getLayout = (children: ReactNode) => (
	<Page disableFooter disableHeader>
		{children}
	</Page>
)
