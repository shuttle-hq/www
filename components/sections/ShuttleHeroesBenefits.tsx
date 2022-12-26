import Image from 'next/image'
import { FreeBenefit, HeroBenefit, HighPriorityBenefit, PaidBenefit, SwagBenefit, ViewBenefit } from '../svgs'

const ShuttleHeroesBenefits = () => {
	return (
		<div className='mx-auto mt-28 max-w-7xl px-5 sm:mt-32 sm:px-10 lg:mt-36 desktop:mt-40'>
			<h2 className='font-gradual text-5xl font-bold text-black dark:text-[#C2C2C2] lg:text-[3.5rem]'>
				Your benefits
			</h2>
			<p className='mt-5 text-xl text-[#525151] lg:text-2xl'>
				This is not a paid position, but in exchange for contributing to shuttle, you will get access to
				some great and exclusive rewards and perks.
			</p>

			<div className='mt-16 grid w-full gap-5 lg:grid-cols-2 desktop:grid-cols-3 desktop:grid-rows-2'>
				<div className='group relative z-10 flex flex-col items-start gap-3 overflow-hidden rounded-4xl bg-[#13292C] p-5 text-[#C2C2C2] dark:bg-black dark:text-white sm:p-8 sm:pb-12'>
					<Image
						src='/images/sections/shuttle-heroes-benefits/bg-1.png'
						alt='top left bg'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-cover'
					/>
					<Image
						src='/images/sections/shuttle-heroes-benefits/stars-1.png'
						alt='top left stars'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-contain'
					/>
					<SwagBenefit />
					<h3 className='font-gradual text-2xl font-bold text-[#C2C2C2]'>shuttle swag</h3>
					<p className='text-[#FFFFFF8F]'>Latest and greatest shuttle swag</p>
				</div>
				<div className='group relative z-10 flex flex-col items-start gap-3 overflow-hidden rounded-4xl bg-[#13292C] p-5 text-[#C2C2C2] dark:bg-black dark:text-white sm:p-8 sm:pb-12'>
					<Image
						src='/images/sections/shuttle-heroes-benefits/bg-2.png'
						alt='top left bg'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-cover'
					/>
					<Image
						src='/images/sections/shuttle-heroes-benefits/stars-2.png'
						alt='top left stars'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-contain'
					/>
					<h3 className='font-gradual text-2xl font-bold text-[#C2C2C2]'>Free tier for life</h3>
					<p className='text-[#FFFFFF8F]'>A generous free tier for life</p>
					<FreeBenefit />
				</div>
				<div className='group relative z-10 flex flex-col items-start gap-3 overflow-hidden rounded-4xl bg-[#13292C] p-5 text-[#C2C2C2] dark:bg-black dark:text-white sm:p-8 sm:pb-12 desktop:justify-end'>
					<Image
						src='/images/sections/shuttle-heroes-benefits/bg-3.png'
						alt='top left bg'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-cover'
					/>
					<Image
						src='/images/sections/shuttle-heroes-benefits/stars-3.png'
						alt='top left stars'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-contain'
					/>
					<HighPriorityBenefit />
					<h3 className='font-gradual text-2xl font-bold text-[#C2C2C2]'>Priority access </h3>
					<p className='text-[#FFFFFF8F]'>to future shuttle batches, workshops & bootcamps</p>
				</div>
				<div className='group relative z-10 flex flex-col items-start gap-3 overflow-hidden rounded-4xl bg-[#13292C] p-5 text-[#C2C2C2] dark:bg-black dark:text-white sm:p-8 sm:pb-12'>
					<Image
						src='/images/sections/shuttle-heroes-benefits/bg-4.png'
						alt='top left bg'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-cover'
					/>
					<Image
						src='/images/sections/shuttle-heroes-benefits/stars-4.png'
						alt='top left stars'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-contain'
					/>
					<h3 className='font-gradual text-2xl font-bold text-[#C2C2C2]'>Behind-the-scenes </h3>
					<p className='text-[#FFFFFF8F]'>look at the ongoing development</p>
					<ViewBenefit />
				</div>
				<div className='group relative z-10 flex flex-col items-start gap-3 overflow-hidden rounded-4xl bg-[#13292C] p-5 text-[#C2C2C2] dark:bg-black dark:text-white sm:p-8 sm:pb-12'>
					<Image
						src='/images/sections/shuttle-heroes-benefits/bg-5.png'
						alt='top left bg'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-cover'
					/>
					<Image
						src='/images/sections/shuttle-heroes-benefits/stars-5.png'
						alt='top left stars'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-contain'
					/>
					<HeroBenefit />
					<h3 className='font-gradual text-2xl font-bold text-[#C2C2C2]'>Heroes role</h3>
					<p className='text-[#FFFFFF8F]'>on discord (& access to special channels)</p>
				</div>
				<div className='group relative z-10 flex flex-col items-start gap-3 overflow-hidden rounded-4xl bg-[#13292C] p-5 text-[#C2C2C2] dark:bg-black dark:text-white sm:p-8 sm:pb-12'>
					<Image
						src='/images/sections/shuttle-heroes-benefits/bg-6.png'
						alt='top left bg'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-cover'
					/>
					<Image
						src='/images/sections/shuttle-heroes-benefits/stars-6.png'
						alt='top left stars'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-contain'
					/>
					<h3 className='font-gradual text-2xl font-bold text-[#C2C2C2]'>Paid program possibility</h3>
					<p className='text-[#FFFFFF8F]'>Consideration for our paid open source program</p>
					<PaidBenefit />
				</div>
			</div>
		</div>
	)
}

export default ShuttleHeroesBenefits
