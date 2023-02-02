import {
	EdgeAndNode,
	F5,
	Github,
	GoDaddy,
	Hulu,
	Meta,
	MongoDB,
	Nike,
	Stellar,
	Tencent,
	Uber,
	UiPath,
} from 'components/svgs'
import Image from 'next/image'

const TrustedBy = () => {
	return (
		<div className='mx-auto mt-24 w-full max-w-7xl sm:px-10 lg:mt-32'>
			<div className='group relative z-10 w-full overflow-hidden rounded-[2rem] bg-[#13292C] dark:bg-black'>
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
				<div className='grid w-full gap-5 px-5 py-10 md:px-8 lg:grid-cols-[450px_1fr] lg:items-center lg:gap-12 lg:py-16 desktop:px-20'>
					<div>
						<h2 className='font-gradual text-4.5 font-bold leading-none text-white dark:text-[#C2C2C2] lg:text-5xl'>
							Trusted by the best backend teams
						</h2>
						<p className='mt-4 text-xl text-[#7A7A7A] lg:text-2xl'>
							A short description about the best teams using this.
						</p>
					</div>
					<div className='group relative aspect-[556/313] w-full'>
						<Uber
							className='absolute top-[4.15%] left-[10%] text-white transition-all duration-500 group-hover:top-0 group-hover:left-[12.2%]'
							width={56}
						/>
						<Github className='absolute top-[10.5%] left-[49.2%] text-white text-white transition-all duration-500 group-hover:top-[6.4%] group-hover:left-[51.4%]' />
						<Nike className='absolute top-0 left-[80.2%] text-white text-white transition-all duration-500 group-hover:top-[2.2%] group-hover:left-[82.3%]' />
						<Stellar
							width={96}
							className='absolute top-[46%] left-0 text-white text-white transition-all duration-500 group-hover:top-[41.8%] group-hover:left-[2.15%]'
						/>
						<UiPath
							width={77}
							className='absolute top-[34.5%] left-[27.7%] text-white text-white transition-all duration-500 group-hover:top-[30.35%] group-hover:left-[29.8%]'
						/>
						<MongoDB
							width={106}
							className='absolute top-[59.75%] left-[36%] text-white text-white transition-all duration-500 group-hover:top-[55.6%] group-hover:left-[34.5%]'
						/>
						<F5
							width={32}
							className='absolute top-[45%] left-[62.76%] text-white text-white transition-all duration-500 group-hover:top-[40.9%] group-hover:left-[61.33%]'
						/>
						<Meta
							width={87}
							className='absolute top-[37.3%] left-[82.9%] text-white text-white transition-all duration-500 group-hover:top-[39.6%] group-hover:left-[81.47%]'
						/>
						<GoDaddy className='absolute top-[85.62%] left-[1.43%] text-white text-white transition-all duration-500 group-hover:top-[81.4%] group-hover:left-0' />
						<EdgeAndNode className='absolute top-[95.2%] left-[35.61%] text-white text-white transition-all duration-500 group-hover:top-[91.37%] group-hover:left-[35.97%]' />
						<Hulu
							width={61}
							className='absolute top-[85.94%] left-[73.3%] text-white text-white transition-all duration-500 group-hover:top-[91%] group-hover:left-[71.94%]'
						/>
						<Tencent className='absolute top-[73.16%] left-[81.83%] text-white text-white transition-all duration-500 group-hover:top-[75.4%] group-hover:left-[80.39%]' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default TrustedBy
