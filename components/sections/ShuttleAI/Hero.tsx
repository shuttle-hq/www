import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
	return (
		<div className='relative flex flex-col items-center justify-center px-4 pt-32 sm:pt-60'>
			<Image
				src='/images/pages/shuttle-ai/stars.svg'
				alt=''
				width={1920}
				height={1080}
				className='absolute left-1/2 top-10 -z-10 ml-auto mr-auto max-w-5xl -translate-x-1/2'
			/>
			<h1 className='w-fit text-center font-gradual text-5xl font-bold text-black dark:text-[#C2C2C2] lg:text-6.5'>
				Instant apps,
				<br />
				<span className=''>
					from a <span className='text-gradient bg-clip-text text-transparent'>single prompt</span>
				</span>
			</h1>
			<p className='mt-8 text-center text-xl text-[#7A7A7A]'>
				Yes, we did it. From prompt to deployed app in under 5 minutes
			</p>

			<div className='mt-10 flex flex-col items-center justify-center text-center font-gradual text-lg font-bold sm:flex-row'>
				<Link
					href='https://btl1d1x5z23.typeform.com/shuttle-ai'
					target='_blank'
					className='mt-4 flex h-[56px] cursor-pointer items-center rounded-[14px] bg-[#D8D8D8] px-6 text-lg text-black sm:mt-0'
				>
					Join the waitlist
				</Link>
			</div>
		</div>
	)
}

export default Hero
