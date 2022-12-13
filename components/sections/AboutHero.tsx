import Image from 'next/image'

const AboutHero = () => {
	return (
		<header className='mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-28'>
			<h1 className='w-fit font-gradual text-5xl font-bold text-[#C2C2C2] lg:text-6.5'>
				We’re helping developers
				<span className='text-gradient block bg-clip-text text-transparent'>do what they do best.</span>
			</h1>
			<p className='mt-4 sm:text-xl lg:text-2xl'>
				We are a worldwide team that believes Rust has the potential to become the next JavaScript for
				backend web development and far overtake Go, taking over the entire web dev culture.
			</p>
			<div className='mt-24 w-full'>
				<div className='mt-14 grid gap-5 lg:grid-cols-3'>
					<div className='flex items-start gap-4'>
						<Image
							src='/images/sections/about-hero/efficiency.png'
							alt='efficiency image'
							width={48}
							height={48}
							className='flex-shrink-0'
						/>
						<div>
							<h3 className='font-gradual text-xl font-bold text-[#C2C2C2]'>Efficiency</h3>
							<p className='mt-1'>We all know time is money, so our goal is to save your time.</p>
						</div>
					</div>
					<div className='flex items-start gap-4'>
						<Image
							src='/images/sections/about-hero/function.png'
							alt='function image'
							width={48}
							height={48}
							className='flex-shrink-0'
						/>
						<div>
							<h3 className='font-gradual text-xl font-bold text-[#C2C2C2]'>Function</h3>
							<p className='mt-1'>We’re moved by things that just work, and work fast.</p>
						</div>
					</div>
					<div className='flex items-start gap-4'>
						<Image
							src='/images/sections/about-hero/community.png'
							alt='community image'
							width={48}
							height={48}
							className='flex-shrink-0'
						/>
						<div>
							<h3 className='font-gradual text-xl font-bold text-[#C2C2C2]'>Community</h3>
							<p className='mt-1'>We want to build helpful, easygoing and productive community.</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default AboutHero
