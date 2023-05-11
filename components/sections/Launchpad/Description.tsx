import Image from 'next/image'

export const Description = () => {
	return (
		<section className='relative pb-28'>
			<Image
				src='/images/sections/batch/bg-batch.jpg'
				alt='background'
				fill
				className='absolute left-0 top-0 -z-10 hidden h-full w-full md:block'
			/>
			<div className='relative mx-auto mt-32 w-full max-w-[600px] items-center lg:mt-52'>
				<h1 className='text-3xl text-[#C2C2C2]'>
					Let’s face it - learning Rust can be a daunting task 😵‍💫
				</h1>
				<p className='mt-4 text-xl text-[#7A7A7A]'>
					And while there are plenty of resources out there, they can often be overwhelming, difficult to
					follow, or simply not engaging enough to hold your attention.
				</p>
				<p className='mt-4 text-xl text-[#7A7A7A]'>
					The Rust Book and various YouTube videos, for example, are comprehensive but can leave you
					feeling lost in the details, while other tutorials may not provide enough context or real-world
					examples to make the concepts stick, especially with the rapid developments of the Rust
					ecosystem.
				</p>
			</div>

			<div className='relative mx-auto mt-32 w-full max-w-[600px]  items-center lg:mt-52'>
				<h1 className='text-3xl text-[#C2C2C2]'>That’s where Shuttle Launchpad comes in 🚀</h1>
				<p className='mt-4 text-xl text-[#7A7A7A]'>
					Our unique approach to teaching Rust tutorial-style with real-world applications sets us apart
					from other learning resources.
				</p>
				<p className='mt-4 text-xl text-[#7A7A7A]'>
					We make it easy for busy developers to learn Rust by breaking each concept down into manageable
					<span className='text-white'> one-hour chunks</span> that can be completed at your own pace,
					providing a focused and engaging way to learn that ensures you retain the material.
				</p>
				<p className='mt-4 text-xl text-[#7A7A7A]'>
					Advanced learners will also benefit from our additional resources, including tasks, links, and
					videos that allow you to dive deeper into the subject matter.
				</p>
			</div>

			<div className='relative mx-auto mt-32 w-full max-w-[600px] items-center lg:mt-52'>
				<h1 className='text-3xl text-[#C2C2C2]'>So, to sum it up</h1>
				<p className='mt-4 text-xl text-[#7A7A7A]'>
					<span className='text-white'>&rarr;</span> Learning Rust tutorial-style with real-world
					applications
				</p>
				<p className='mt-4 text-xl text-[#7A7A7A]'>
					<span className='text-white'>&rarr;</span> Suitable for beginners and experienced developers
				</p>
				<p className='mt-4 text-xl text-[#7A7A7A]'>
					<span className='text-white'>&rarr;</span> Each issue takes only 1 hour to implement
				</p>
				<p className='mt-4 text-xl text-[#7A7A7A]'>
					<span className='text-white'>&rarr;</span> Flexible pacing for busy developers
				</p>
				<p className='mt-4 text-xl text-[#7A7A7A]'>
					<span className='text-white'>&rarr;</span> Additional resources for advanced learners
				</p>
				<p className='mt-4 text-xl text-[#7A7A7A]'>
					<span className='text-white'>&rarr;</span> Learning one Rust concept per issue
				</p>
			</div>
		</section>
	)
}
