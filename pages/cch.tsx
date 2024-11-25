import { Page } from 'components/templates'
import { trackEvent } from 'lib/posthog'
import { initTwitter, sendTwitterConversion, shuttleCchSignupClick } from 'lib/useTwitter'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function CCHPage() {
	initTwitter()

	return (
		<section className='mx-auto mb-10 w-full max-w-5xl px-4 py-12 font-mono font-normal text-head'>
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

				<p className='flex items-center gap-2 self-end text-base text-body'>
					powered by
					<Link href='/'>
						<Image src='/images/cch/logo.svg' alt='' width={115} height={37} />
					</Link>
				</p>
			</div>

			<div className='mb-8 flex flex-col text-base'>
				<p className='mt-8 font-bold'>
					<span className='text-orange'>&gt;</span> what
				</p>
				<p>
					Shuttle&apos;s Christmas Code Hunt, inspired by Advent of Code, invites you to solve challenges
					using Rust in a relaxed environment. In each challenge, you implement HTTP endpoints that
					return the solutions. It is a great way to get started with Rust and Shuttle!
				</p>

				<p className='mt-8 font-bold'>
					<span className='text-orange'>&gt;</span> where
				</p>
				<p>
					You can access the challenge by logging in to the{' '}
					<Link
						href='https://console.shuttle.rs/cch'
						target='_blank'
						className='text-orange'
						onClick={() => {
							trackEvent('cch_sign_up')
							sendTwitterConversion(shuttleCchSignupClick)
						}}
					>
						Shuttle Console
					</Link>{' '}
					with a GitHub account!
				</p>
			</div>
		</section>
	)
}

CCHPage.getLayout = (children: ReactNode) => (
	<Page disableFooter disableHeader>
		{children}
	</Page>
)
