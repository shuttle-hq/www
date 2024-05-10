import { LoginButton } from 'components/elements'
import Image from 'next/image'
import codeImage from 'public/images/sections/hero/shuttle-axum-hello-world.png'
import { trackEvent } from 'lib/posthog'

const Hero = () => {
	return (
		<div className='mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mb-[330px] lg:mt-28'>
			<header className='md:grid md:grid-cols-2 md:items-center lg:grid-cols-[1.2fr_1fr] lg:gap-8'>
				<div>
					<h1 className='font-gradual text-5xl font-bold text-head lg:text-6.5'>
						<span className='text-gradient block bg-clip-text text-transparent'>
							Launch Rust Apps.
						</span>
						Fast.
					</h1>
					<p className='mt-4 text-[#7A7A7A] sm:text-xl lg:text-2xl'>
						Build and ship applications without writing any infrastructure files - just add
						annotations.
					</p>
					<div className='mt-5 flex flex-wrap items-center gap-5 sm:mt-10 lg:mt-12 xl:mt-16'>
						<LoginButton
							variant='primary'
							invertOnDark
							onClick={() => {
								trackEvent('homepage_buildbackendsfast_startbuilding')
							}}
						>
							Start Building
						</LoginButton>
					</div>
				</div>
				<div className='relative z-10 mt-8 overflow-hidden rounded-3xl bg-[#13292C] p-5 dark:bg-black sm:mt-10 sm:p-8 lg:mt-0 lg:p-10'>
					<Image
						src={codeImage}
						alt='code'
						className='pointer-events-none mx-auto select-none rounded-3xl'
					/>
					<Image
						src='/images/sections/hero/bg.png'
						alt='hero background'
						width={702}
						height={438}
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full select-none'
					/>
				</div>
			</header>
		</div>
	)
}

export default Hero
