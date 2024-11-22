import { Page } from 'components/templates'
import { trackEvent } from 'lib/posthog'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function CCHPage() {
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
				<Link
					href='https://shuttlerust.typeform.com/cch2024'
					target='_blank'
					className='text-[#F09050] text-center text-xl font-bold border rounded p-6'
					onClick={() => {
						trackEvent('cch_sign_up')
					}}
				>
					Click here to be notified when each new challenge goes live.
				</Link>

				<p className='mt-8 font-bold'>
					<span className='text-orange'>&gt;</span> what
				</p>
				<p>
					Shuttle&apos;s Christmas Code Hunt, inspired by Advent of Code, invites you to solve challenges
					using Rust in a relaxed environment. In each challenge, you implement HTTP endpoints that
					return the solutions. It is a great way to get started with Rust and Shuttle!
				</p>

				{/* <p className='mt-8 font-bold'>
					<span className='text-orange'>&gt;</span> where
				</p>
				<p>
					You can access the challenge by logging in to the{' '}
					<Link
						href='https://console.shuttle.dev/shuttlings/cch24'
						target='_blank'
						className='text-orange'
						onClick={() => {
							trackEvent('cch_sign_up')
						}}
					>
						Shuttle Console
					</Link>!
				</p> */}

				<p className='mt-8 font-bold'>
					<span className='text-[#F09050]'>&gt;</span> why
				</p>
				<p>
					By participating, you get the chance to improve your Rust skills,
					build new friendships with like minded Rustaceans and enjoy the run up to the holidays!
				</p>

				<p className='mt-8 font-bold'>
					<span className='text-[#F09050]'>&gt;</span> when
				</p>
				<p>
					The first challenge will be released on December 2, 12:00 UTC.
					Signup and a warmup challenge will be released at the end of November.
				</p>

				<p className='mt-8 font-bold'>
					<span className='text-[#F09050]'>&gt;</span> prizes
				</p>
				<p>
					Completing all the challenges by December 31 will make you eligible for prizing.
					More details coming soon!
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
