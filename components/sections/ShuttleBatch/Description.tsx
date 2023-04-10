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
			'Get ready to rock some exclusive Shuttle swag, because all participants in Batch 2.0 will score awesome company goodies as a thank-you for joining the adventure and making a difference in the our community! 🤩🛍️',
	},
]

export const Description = () => {
	return (
		<section className='mx-auto mt-52 w-full max-w-7xl items-center px-5 sm:px-10'>
			<h1 className='text-6xl text-[#C2C2C2]'>What’s Shuttle Batch</h1>
			<p className='mt-4 text-2xl text-[#7A7A7A]'>
				Batch is an immersive online program where Rust developers unite to learn, collaborate, and
				contribute to an exciting open-source project, while receiving mentorship and forming lasting
				connections within the community.
			</p>

			<div className='mt-36 flex flex-col gap-16 lg:ml-72'>
				{VALUES.map((value, idx) => (
					<div key={value.title} className='flex gap-16'>
						<span className='text-3xl text-[#414141]'>0{idx + 1}</span>
						<div>
							<h3 className='text-3xl text-[#D8D8D8]'>{value.title}</h3>
							<p className='mt-[10px] text-xl'>{value.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
