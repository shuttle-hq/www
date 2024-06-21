import Image from 'next/image'

export const Description = () => {
	return (
		<section className='relative px-5 pb-28 sm:px-10'>
			<Image
				src='/images/sections/batch/bg-batch.jpg'
				alt='background'
				fill
				className='absolute left-0 top-0 -z-10 hidden h-full w-full md:block'
			/>
			<div className='relative mx-auto mt-32 w-full max-w-[600px] items-center lg:mt-52'>
				<h1 className='text-3xl text-head'>Let’s face it - learning Rust can be a daunting task 😵‍💫</h1>
				<p className='mt-4 text-xl text-body'>
					And while there are plenty of resources out there, they can often be overwhelming, difficult to
					follow, or simply not engaging enough to hold your attention.
				</p>
				<p className='mt-4 text-xl text-body'>
					The Rust Book and various YouTube videos, for example, are comprehensive but can leave you
					feeling lost in the details, while other tutorials may not provide enough context or real-world
					examples to make the concepts stick, especially with the rapid developments of the Rust
					ecosystem.
				</p>
			</div>

			<div className='relative mx-auto mt-32 w-full max-w-[600px]  items-center lg:mt-52'>
				<h1 className='text-3xl text-head'>That’s where Shuttle Launchpad comes in 🚀</h1>
				<p className='mt-4 text-xl text-body'>
					Our unique approach to teaching Rust tutorial-style with real-world applications, in the form
					of a newsletter, sets us apart from other learning resources.
				</p>
				<p className='mt-4 text-xl text-body'>
					We make it easy for busy developers to learn Rust by breaking each concept down into manageable
					<span className='text-white'> one-hour chunks</span> that can be completed at your own pace,
					providing a focused and engaging way to learn that ensures you retain the material.
				</p>
				<p className='mt-4 text-xl text-body'>
					Advanced learners will also benefit from our additional resources, including tasks, links, and
					videos that allow you to dive deeper into the subject matter.
				</p>
			</div>

			<div className='relative mx-auto mt-32 w-full max-w-[600px]  items-center lg:mt-52'>
				<h1 className='text-3xl text-head'>Teaming up with Stefan Baumgartner 🦀</h1>
				<p className='mt-4 text-xl text-body'>
					We have teamed up with none other than <a href='https://fettblog.eu'>Stefan Baumgartner</a>, an
					architect, developer and author from Linz, Austria who, with his extensive experience of
					educating developers, brings a wealth of knowledge and practical insights to the Launchpad.
				</p>
				<p className='mt-4 text-xl text-body'>
					Stefan is, among other things, the organizer of the biggest Rust meet up in Europe ━{' '}
					<span className='text-white'>
						<a href='https://rust-linz.at/'>Rust Linz</a>
					</span>{' '}
					and he was the lecturer at our{' '}
					<span className='text-white'>
						<a href='https://www.youtube.com/watch?v=-N8AKKCE9L8'>Rust for Javascript Developers</a>
					</span>{' '}
					workshop!
				</p>
			</div>

			<div className='relative mx-auto mt-32 w-full max-w-[600px] items-center lg:mt-52'>
				<h1 className='text-3xl text-head'>So, to sum it up</h1>
				<p className='mt-4 text-xl text-body'>
					<span className='mr-4 text-white'>&rarr;</span> Learning Rust tutorial-style with real-world
					applications
				</p>
				<p className='mt-4 text-xl text-body'>
					<span className='mr-4 text-white'>&rarr;</span> Suitable for beginners and experienced
					developers
				</p>
				<p className='mt-4 text-xl text-body'>
					<span className='mr-4 text-white'>&rarr;</span> Contents of each newsletter issue take only 1
					hour to implement
				</p>
				<p className='mt-4 text-xl text-body'>
					<span className='mr-4 text-white'>&rarr;</span> Flexible pacing for busy developers
				</p>
				<p className='mt-4 text-xl text-body'>
					<span className='mr-4 text-white'>&rarr;</span> Additional resources for advanced learners
				</p>
				<p className='mt-4 text-xl text-body'>
					<span className='mr-4 text-white'>&rarr;</span> Learning one Rust concept per issue
				</p>
			</div>
		</section>
	)
}
