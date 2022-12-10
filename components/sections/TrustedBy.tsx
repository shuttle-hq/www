import Image from 'next/image'

const TrustedBy = () => {
	return (
		<div className='mx-auto mt-24 max-w-7xl sm:px-10 lg:mt-32'>
			<div className='group relative z-10 overflow-hidden rounded-[2rem] bg-[#13292C] dark:bg-black'>
				<span className='pointer-events-none'>
					<Image
						src='/images/sections/trusted-by/bg.png'
						alt='background'
						fill
						className='absolute top-0 left-0 -z-10 h-full w-full object-cover'
					/>
					<Image
						src='/images/sections/trusted-by/stars.png'
						alt='stars'
						fill
						className='absolute top-0 left-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:translate-x-12 group-hover:translate-y-3 md:block'
					/>
					<Image
						src='/images/sections/trusted-by/stars-2.png'
						alt='stars 2'
						fill
						className='absolute top-0 left-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:-translate-x-5 md:block'
					/>
				</span>
				<div className='grid gap-5 px-5 py-10 md:px-8 lg:grid-cols-[450px_1fr] lg:items-center lg:py-16 desktop:px-20'>
					<div>
						<h2 className='font-gradual text-4.5 font-bold leading-none text-white dark:text-[#C2C2C2] lg:text-5xl'>
							Trusted by the best backend teams
						</h2>
						<p className='mt-4 text-xl text-[#7A7A7A] lg:text-2xl'>
							A short description about the best teams using this.
						</p>
					</div>
					<Image
						src='/images/sections/trusted-by/teams.png'
						width={556}
						height={313}
						alt='Teams'
						className='m-auto lg:m-0 lg:ml-auto'
					/>
				</div>
			</div>
		</div>
	)
}

export default TrustedBy
