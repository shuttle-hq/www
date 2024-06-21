import { Quote } from 'components/svgs/batch'
import Image from 'next/image'

const VALUES: { title: string; description: string }[] = [
	{
		title: '🚀 Y Combinator Vibes',
		description:
			"Shuttle Batch sprouted from our own mind-blowing YC adventure, and now we're bringing that magic to you!",
	},
	{
		title: '🦸‍♂️ Super Mentoring',
		description:
			"Power up your Rust skills with our core Shuttle team's help! Expect mentorship, Q&A, feedback sessions, and some jaw-dropping guest speakers!",
	},
	{
		title: '🌍 Global Friendships',
		description:
			'Connect with Rust developers of all backgrounds, team up to tackle projects, and become part of our super-amazing contributor community!',
	},
	{
		title: '🎮 Contribute & Level Up',
		description:
			"Make a real impact on Shuttle's future and gain priceless experience with a cutting-edge backend platform in the exciting world of open-source!",
	},
	{
		title: '🌐 Remote & Rad:',
		description:
			"Join the Batch from anywhere on Earth – our last 10 participants represented 8 different countries, so we're truly a global Rust family! 🎉",
	},
	{
		title: '🎁 Swagtastic',
		description:
			'Get ready to rock some exclusive Shuttle swag, because all participants in Batch 2.0 will score awesome company goodies as a thank-you for joining the adventure and making a difference in our community! 🤩🛍️',
	},
]

export const Description = () => {
	return (
		<>
			<section className='mx-auto mt-24 w-full max-w-7xl items-center px-5 sm:px-10 lg:mt-28'>
				<div className='relative my-10 flex flex-col gap-5 lg:py-40 lg:pl-[278px] lg:pr-52'>
					<Image
						src='/images/sections/batch/bg-testimonial.jpg'
						alt='background'
						fill
						className='absolute left-0 top-0 -z-10 hidden h-full w-full rounded-4xl md:block'
					/>
					<Quote className='absolute left-32 top-32 hidden md:block' />
					<p className='text-2xl text-head'>
						“I came into the first Batch with very little Rust expereience, having read most of the
						Rust book I was looking to get involved in Open Source to better my knowledge.
					</p>
					<p className='text-2xl text-head'>
						The relaxed but supportive vibe in Batch was the perfect way for me to get to know the
						language better, to mix with people at a similar skill level, and to get quality guidence
						from the more experienced guys at Shuttle.”
					</p>

					<div>
						<p className='text-xl text-head'>- John Williams</p>
						<span className='text-base text-body'>Shuttle Batch 1.0</span>
					</div>
				</div>
			</section>
			<section className='relative pb-28'>
				<Image
					src='/images/sections/batch/bg-batch.jpg'
					alt='background'
					fill
					className='absolute left-0 top-0 -z-10 hidden h-full w-full md:block'
				/>
				<div className='relative mx-auto mt-32 w-full max-w-7xl items-center px-5 sm:px-10 lg:mt-52'>
					<h1 className='text-6xl text-head'>What’s Shuttle Batch</h1>
					<p className='mt-4 text-2xl text-body'>
						Batch is an immersive online program where Rust developers unite to learn, collaborate, and
						contribute to an exciting open-source project, while receiving mentorship and forming
						lasting connections within the community.
					</p>

					<div className='mt-36 flex flex-col gap-16 lg:ml-72'>
						{VALUES.map((value, idx) => (
							<div key={value.title} className='flex gap-16'>
								<span className='text-3xl text-body'>0{idx + 1}</span>
								<div>
									<h3 className='text-3xl text-head'>{value.title}</h3>
									<p className='mt-[10px] text-xl'>{value.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
