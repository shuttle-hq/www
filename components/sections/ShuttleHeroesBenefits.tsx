import Image from 'next/image'
import { FreeBenefit, HeroBenefit, HighPriorityBenefit, PaidBenefit, SwagBenefit, ViewBenefit } from '../svgs'

const ShuttleHeroesBenefits = () => {
	return (
		<div className='mx-auto mt-28 max-w-7xl px-5 sm:mt-32 sm:px-10 lg:mt-36 desktop:mt-40'>
			<h2 className='font-gradual text-5xl font-bold text-black dark:text-head lg:text-[3.5rem]'>
				Your benefits
			</h2>
			<p className='mt-5 text-xl lg:text-2xl'>
				As part of the deal, contributing to shuttle, will get you some amazing rewards and perks.
			</p>

			<div className='mt-16 grid w-full gap-5 lg:grid-cols-2 desktop:grid-cols-3 desktop:grid-rows-2'>
				<div className='group relative z-10 flex flex-col items-start gap-3 overflow-hidden rounded-4xl bg-[#13292C] p-5 text-head dark:bg-black dark:text-white sm:p-8 sm:pb-12 desktop:justify-end'>
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
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-cover'
					/>
					<SwagBenefit />
					<h3 className='font-gradual text-2xl font-bold text-head'>shuttle swag</h3>
					<p className='text-body'>Latest and greatest shuttle swag</p>
				</div>

				<div className='group relative z-10 flex flex-col items-start gap-3 overflow-hidden rounded-4xl bg-[#13292C] p-5 text-head dark:bg-black dark:text-white sm:p-8 sm:pb-12'>
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
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-cover'
					/>
					<h3 className='font-gradual text-2xl font-bold text-head'>Free tier for life</h3>
					<p className='text-body'>A generous free tier for life</p>
					<FreeBenefit />
				</div>
				<div className='group relative z-10 flex flex-col items-start gap-3 overflow-hidden rounded-4xl bg-[#13292C] p-5 text-head dark:bg-black dark:text-white sm:p-8 sm:pb-12 desktop:justify-end'>
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
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-cover'
					/>
					<HighPriorityBenefit />
					<h3 className='font-gradual text-2xl font-bold text-head'>Priority access </h3>
					<p className='text-body'>Get the dibs on future shuttle batches, workshops & bootcamps</p>
				</div>
				<div className='group relative z-10 flex flex-col items-start gap-3 overflow-hidden rounded-4xl bg-[#13292C] p-5 text-head dark:bg-black dark:text-white sm:p-8 sm:pb-12'>
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
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-cover'
					/>
					<h3 className='font-gradual text-2xl font-bold text-head'>Behind-the-scenes </h3>
					<p className='text-body'>Get an inside look at the ongoing developments</p>
					<ViewBenefit />
				</div>
				<div className='group relative z-10 flex flex-col items-start gap-3 overflow-hidden rounded-4xl bg-[#13292C] p-5 text-head dark:bg-black dark:text-white sm:p-8 sm:pb-12'>
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
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-cover'
					/>
					<HeroBenefit />
					<h3 className='font-gradual text-2xl font-bold text-head'>Discord Hero</h3>
					<p className='text-body'>Get the Hero role on our Discord and access to special channels</p>
				</div>
				<div className='group relative z-10 flex flex-col items-start gap-3 overflow-hidden rounded-4xl bg-[#13292C] p-5 text-head dark:bg-black dark:text-white sm:p-8 sm:pb-12'>
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
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-cover'
					/>
					<h3 className='font-gradual text-2xl font-bold text-head'>Become a paid contributor</h3>
					<p className='text-body'>Get considered for our paid open source program</p>
					<PaidBenefit />
				</div>
			</div>
		</div>
	)
}

export default ShuttleHeroesBenefits
