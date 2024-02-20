import { trackEvent } from 'lib/posthog'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface WaitListProps {
	cta: string
	description: string
	subDescription?: string
}

export const Waitlist: FC<WaitListProps> = ({ cta, description, subDescription }) => {
	return (
		<section className='relative mx-auto mb-20 mt-24 flex w-full max-w-6xl flex-col items-center rounded-b-4xl px-5 pb-10 sm:px-10 md:mb-80 md:pb-48 lg:mt-28'>
			<Image
				src='/images/sections/batch/bg-batch.jpg'
				alt='background'
				fill
				className='absolute left-0 top-0 -z-10 hidden h-full w-full rounded-b-[32px] md:block'
			/>
			<h2 className='text-gradient mt-12 max-w-4xl bg-clip-text text-center font-gradual text-[56px] font-bold leading-[150%] text-head'>
				{cta}
			</h2>
			<p className='mt-8 max-w-2xl text-center text-xl text-body'>{description}</p>
			<div className='mt-10 flex flex-col items-center justify-center text-center font-gradual text-lg font-bold sm:flex-row'>
				<Link
					href='https://shuttlerust.typeform.com/shuttle-ai'
					target='_blank'
					className='mt-4 flex h-[56px] cursor-pointer items-center rounded-[14px] bg-[#D8D8D8] px-6 text-lg text-black sm:mt-0'
					onClick={() => {
						trackEvent('ai_waitlist')
					}}
				>
					Join the waitlist
				</Link>
			</div>

			{subDescription && <p className='mt-4 text-center text-xl text-body'>{subDescription}</p>}
		</section>
	)
}
