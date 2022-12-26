import { Button } from 'components/elements'
import Image from 'next/image'

const ShuttleHeroesHero = () => {
	return (
		<div className='mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-28'>
			<header className='md:grid md:grid-cols-2 md:items-center lg:grid-cols-[1.2fr_1fr] lg:gap-8'>
				<div>
					<h1 className='font-gradual text-5xl font-bold text-black dark:text-[#C2C2C2] lg:text-6.5'>
						<span className='text-gradient block bg-clip-text text-transparent'>
							Join shuttle heroes
						</span>
						program
					</h1>
					<p className='mt-4 sm:text-xl lg:text-2xl'>
						Let&apos;s build the future of backend development together
					</p>
					<div className='mt-5 flex flex-wrap items-center gap-5 sm:mt-10 lg:mt-12 xl:mt-16'>
						<Button variant='primary' invertOnDark className='bg-[#13292C] text-white'>
							Become a shuttle hero
						</Button>
					</div>
				</div>
				<div className='relative z-10 mt-8 overflow-hidden rounded-3xl bg-[#13292C] p-5 dark:bg-black sm:mt-10 sm:p-8 lg:mt-0 lg:p-10'>
					<Image
						src='/images/sections/shuttle-heroes-hero/planet.png'
						alt='hero background'
						width={582}
						height={371}
						className='pointer-events-none  -z-10'
					/>
					<Image
						src='/images/sections/shuttle-heroes-hero/bg.png'
						alt='hero background'
						width={582}
						height={371}
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full'
					/>
					<Image
						src='/images/sections/shuttle-heroes-hero/stars.png'
						alt='stars'
						width={582}
						height={371}
						sizes='100vw, (min-width: 768px) 768px'
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full'
					/>
				</div>
			</header>
		</div>
	)
}

export default ShuttleHeroesHero
