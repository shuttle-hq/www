import { Button } from 'components/elements'
import Image from 'next/image'

const Hero = () => {
	return (
		<div className='mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-28'>
			<header className='md:grid md:grid-cols-2 md:items-center lg:grid-cols-[1.2fr_1fr] lg:gap-8'>
				<div>
					<h1 className='font-gradual text-5xl font-bold text-black dark:text-[#C2C2C2] lg:text-6.5'>
						<span className='text-gradient block bg-clip-text text-transparent'>Build Backends.</span>
						Fast.
					</h1>
					<p className='mt-4 sm:text-xl lg:text-2xl'>
						Shuttle is an open-source serverless platform written 100% in Rust, which treats your apps
						as plugins, not containers.
					</p>
					<div className='mt-5 flex flex-wrap items-center gap-5 sm:mt-10 lg:mt-12 xl:mt-16'>
						<Button variant='primary'>Start deploying</Button>
						<Button variant='secondary'>Join Discord</Button>
					</div>
				</div>
				<div className='relative z-10 mt-8 overflow-hidden rounded-3xl p-5 sm:mt-10 sm:p-8 lg:mt-0 lg:p-10'>
					<Image
						src='/images/sections/code.png'
						alt='code'
						width={420}
						height={349}
						className='mx-auto rounded-3xl'
					/>
					<Image
						src='/images/sections/hero/bg.png'
						alt='hero background'
						width={702}
						height={438}
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full'
					/>
					<Image
						src='/images/sections/hero/stars.png'
						alt='stars'
						width={840}
						height={687}
						sizes='100vw, (min-width: 768px) 768px'
						className='pointer-events-none absolute left-0 top-0 -z-10'
					/>
				</div>
			</header>
		</div>
	)
}

export default Hero
