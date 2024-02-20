import { Button } from 'components/elements'
import { DISCORD_URL } from 'lib/constants'
import Image from 'next/image'
import { Quote } from 'components/svgs/batch'

export const Testimonials = () => {
	return (
		<section className='mx-auto mt-24 w-full max-w-7xl items-center px-5 sm:px-10 lg:mt-28'>
			<div className='relative my-20 flex flex-col gap-5 lg:py-40 lg:pl-[278px] lg:pr-52'>
				<Image
					src='/images/sections/batch/bg-testimonial.jpg'
					alt='background'
					fill
					className='absolute left-0 top-0 -z-10 hidden h-full w-full rounded-4xl md:block'
				/>
				<Quote className='absolute left-32 top-32 hidden md:block' />
				<p className='text-2xl text-head'>
					“As someone who didn&apos;t have any experience in the industry and only a little experience in
					open-source, I was struggling to find a project I felt qualified to contribute to.
				</p>
				<p className='text-2xl text-head'>
					The SB-1 batch was a great event for to get more comfortable in open-source, with shuttle
					engineers providing mentorship and guidance on tasks ranging from very easy to very hard.”
				</p>

				<div>
					<p className='text-xl text-head'>- Oddbjørn Grødem</p>
					<span className='text-base text-body'>Shuttle Batch 1.0, joined the Shuttle team</span>
				</div>
			</div>

			<div className='mt-72'>
				<h1 className='text-center text-6xl text-head'>Join Shuttle Batch 2023</h1>

				<div className='mb-32 mt-16 flex justify-center gap-4'>
					<Button
						variant='primary'
						invertOnDark
						className='bg-[#13292C] text-white'
						href='https://shuttlerust.typeform.com/shuttle-batch-2'
					>
						Apply now
					</Button>
					<Button variant='secondary' invertOnDark href={DISCORD_URL}>
						Join Discord
					</Button>
				</div>
			</div>
		</section>
	)
}
