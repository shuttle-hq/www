import { Splide, SplideSlide } from '@splidejs/react-splide'
import clsx from 'clsx'
import { Button, LoginButton } from 'components/elements'
import Image from 'next/image'
import { FC, ReactNode, useState } from 'react'
import { ContactUsButton } from '../elements/Button'

const Pricing = () => {
	const [selectedPricing, setSelectedPricing] = useState<'monthly' | 'annual'>('monthly')
	const [selectedMobilePlan, setSelectedMobilePlan] = useState<'community' | 'pro' | 'team'>('community')

	return (
		<div className='mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-28'>
			<div className='mt-24 lg:mt-32'>
				<div className='mt-16'>
					{/* Mobile */}
					<Splide
						onMove={(splide, index) => {
							setSelectedMobilePlan(index === 0 ? 'community' : index === 1 ? 'pro' : 'team')
						}}
						options={{
							perPage: 3,
							pagination: false,
							autoWidth: true,
							autoHeight: true,
							arrows: false,
							gap: '2rem',
							mediaQuery: 'min',
							isNavigation: true,
							clones: 0,
							perMove: 1,
						}}
						className='border-b border-black/10 py-2 dark:border-white/10 lg:hidden'
					>
						<SplideSlide
							className={clsx(
								selectedMobilePlan === 'community'
									? 'text-2xl text-[#D9D9D9] '
									: 'text-xl text-[#7A7A7A]',
								'!mt-auto font-bold leading-none transition-all'
							)}
						>
							Community
						</SplideSlide>
						<SplideSlide
							className={clsx(
								selectedMobilePlan === 'pro'
									? 'text-2xl text-[#D9D9D9] '
									: 'text-xl text-[#7A7A7A]',
								'relative !mt-auto font-bold leading-none transition-all'
							)}
						>
							Pro
						</SplideSlide>

						<SplideSlide
							className={clsx(
								selectedMobilePlan === 'team'
									? 'text-2xl text-[#D9D9D9] '
									: 'text-xl text-[#7A7A7A]',
								'!mt-auto font-bold leading-none transition-all'
							)}
						>
							Team
						</SplideSlide>
					</Splide>
					<div className='absolute left-6 flex flex-row sm:hidden'>
						<div className='relative'>
							<div
								className={clsx(
									'absolute -top-1 z-[100] h-1 w-full translate-y-[20%] transition-all',
									selectedMobilePlan === 'community' ? 'block' : 'hidden'
								)}
								style={{
									background:
										'linear-gradient(71.78deg, #FC540C 1.89%, rgba(255, 215, 111, 0.72) 52.56%, #38D4E9 87.48%)',
								}}
							/>
							<div
								className={clsx(
									'select-none text-transparent',
									selectedMobilePlan == 'community' ? 'text-2xl' : 'text-xl'
								)}
							>
								Community
							</div>
						</div>
						<div className='relative'>
							<div
								className={clsx(
									'absolute -top-1 z-[100] h-1 w-full translate-x-[120%] translate-y-[20%] transition-all',
									selectedMobilePlan === 'pro' ? 'block' : 'hidden'
								)}
								style={{
									background:
										'linear-gradient(71.78deg, #FC540C 1.89%, rgba(255, 215, 111, 0.72) 52.56%, #38D4E9 87.48%)',
								}}
							/>
							<div
								className={clsx(
									'select-none text-transparent',
									selectedMobilePlan == 'pro' ? 'text-2xl' : 'text-xl'
								)}
							>
								Pro
							</div>
						</div>
						<div className='relative'>
							<div
								className={clsx(
									'absolute -top-1 z-[100] h-1 w-full translate-x-[150%] translate-y-[20%] transition-all',
									selectedMobilePlan === 'team' ? 'block' : 'hidden'
								)}
								style={{
									background:
										'linear-gradient(71.78deg, #FC540C 1.89%, rgba(255, 215, 111, 0.72) 52.56%, #38D4E9 87.48%)',
								}}
							/>
							<div
								className={clsx(
									'select-none text-transparent',
									selectedMobilePlan == 'team' ? 'text-2xl' : 'text-xl'
								)}
							>
								Team
							</div>
						</div>
					</div>
					<div className=' mt-8 sm:hidden'>
						<p className='mx-auto mb-4 w-3/4 text-center text-[#7A7A7A]'>
							Everything you need to run your hobby projects. On us
						</p>
						<Button variant='secondary' className='mx-auto'>
							Start Deploying
						</Button>
					</div>
					<div className='space-y-8 lg:hidden'>
						<div
							className='divide-y divide-white/10 text-xl'
							hidden={selectedMobilePlan !== 'community'}
						>
							<div className='px-2 py-[0.875rem] font-gradual text-base font-bold text-[#C2C2C2]'>
								Features
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-5 text-[#7A7A7A]'>Max Team Size</div>
								<div className='text-right text-[#FFFFFFA3]'>1</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-5 text-[#7A7A7A]'>Number of Projects</div>
								<div className='text-right text-[#FFFFFFA3]'>3</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-5 text-[#7A7A7A]'>Custom Domains (with SSL)</div>
								<div className='text-right text-[#FFFFFFA3]'>
									<svg
										width={15}
										className='ml-auto h-full text-[#FFFFFFA3]'
										height={15}
										viewBox='0 0 15 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M1 14L7.5 7.5M14 1L7.5 7.5M7.5 7.5L14 14M7.5 7.5L1 1'
											stroke='currentColor'
											strokeWidth={2}
										/>
									</svg>
								</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-5 text-[#7A7A7A]'>Shared DB Size</div>
								<div className='text-right text-[#FFFFFFA3]'>1 GB</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-5 text-[#7A7A7A]'>Dedicated Database (RDS)</div>
								<div className='text-right text-[#FFFFFFA3]'>
									<svg
										width={15}
										className='ml-auto h-full text-[#C2C2C2]'
										height={15}
										viewBox='0 0 15 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M1 14L7.5 7.5M14 1L7.5 7.5M7.5 7.5L14 14M7.5 7.5L1 1'
											stroke='currentColor'
											strokeWidth={2}
										/>
									</svg>
								</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-3 text-[#7A7A7A]'>Log Retention</div>
								<div className=' col-span-3 text-right text-[#FFFFFFA3]'>1 day</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-3 text-[#7A7A7A]'>Support</div>
								<div className='col-span-3 text-right text-[#FFFFFFA3]'>Community</div>
							</div>
							<div className='mb-8 px-2 py-[0.875rem] font-gradual font-bold lg:mt-0'></div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-5 text-[#7A7A7A]'>Network (egress)</div>
								<div className='text-right text-[#FFFFFFA3]'>1 GB</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-5 text-[#7A7A7A]'>Deployments per day</div>
								<div className='text-right text-[#FFFFFFA3]'>20</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-5 text-[#7A7A7A]'>Build Time per Deployment</div>
								<div className='text-right text-[#FFFFFFA3]'>15min</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-5 text-[#7A7A7A]'>Object Storage (coming soon)</div>
								<div className='text-right text-[#FFFFFFA3]'>1 GB</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-5 text-[#7A7A7A]'>Persistent Volume</div>
								<div className='text-right text-[#FFFFFFA3]'>
									<svg
										width={15}
										className='ml-auto h-full text-[#C2C2C2]'
										height={15}
										viewBox='0 0 15 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M1 14L7.5 7.5M14 1L7.5 7.5M7.5 7.5L14 14M7.5 7.5L1 1'
											stroke='currentColor'
											strokeWidth={2}
										/>
									</svg>
								</div>
							</div>
						</div>
						<div className='divide-y divide-white/10 text-xl' hidden={selectedMobilePlan !== 'pro'}>
							<div className='px-2 py-[0.875rem] font-gradual text-base font-bold text-[#C2C2C2]'>
								Features
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-5 text-[#7A7A7A]'>Max Team Size</div>
								<div className='text-right text-[#FFFFFFA3]'>5</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-5 text-[#7A7A7A]'>Number of Projects</div>
								<div className='text-right text-[#FFFFFFA3]'>15</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-3 text-[#7A7A7A]'>Custom Domains (with SSL)</div>
								<div className='col-span-3 text-right text-[#FFFFFFA3]'>1 per project</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-4 text-[#7A7A7A]'>Shared DB Size</div>
								<div className='col-span-2 text-right text-[#FFFFFFA3]'>10 GB</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-5 text-[#7A7A7A]'>Dedicated Database (RDS)</div>
								<div className='text-right text-[#FFFFFFA3]'>
									<svg
										width={18}
										className='ml-auto h-full text-[#FFFFFFA3]'
										height={15}
										viewBox='0 0 18 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M1 6.5L6.33333 12L17 1' stroke='white' stroke-width='2' />
									</svg>
								</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-3 text-[#7A7A7A]'>Log Retention</div>
								<div className=' col-span-3 text-right text-[#FFFFFFA3]'>7 days</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-3 text-[#7A7A7A]'>Support</div>
								<div className='col-span-3 text-right text-[#FFFFFFA3]'>Enhanced</div>
							</div>
							<div className='mb-8 px-2 py-[0.875rem] font-gradual font-bold lg:mt-0'></div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-4 text-[#7A7A7A]'>Network (egress)</div>
								<div className='col-span-2 text-right text-[#FFFFFFA3]'>10 GB</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-4 text-[#7A7A7A]'>Deployments per day</div>
								<div className='col-span-2 text-right text-[#FFFFFFA3]'>Custom</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-4 text-[#7A7A7A]'>Build Time per Deployment</div>
								<div className='col-span-2 text-right text-[#FFFFFFA3]'>30min</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-4 text-[#7A7A7A]'>Object Storage (coming soon)</div>
								<div className='col-span-2 text-right text-[#FFFFFFA3]'>10 GB</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-5 text-[#7A7A7A]'>Persistent Volume</div>
								<div className='text-right text-[#FFFFFFA3]'>
									<svg
										width={18}
										className='ml-auto h-full text-[#FFFFFFA3]'
										height={15}
										viewBox='0 0 18 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M1 6.5L6.33333 12L17 1' stroke='white' stroke-width='2' />
									</svg>
								</div>
							</div>
						</div>
						<div className='divide-y divide-white/10 text-xl' hidden={selectedMobilePlan !== 'team'}>
							<div className='px-2 py-[0.875rem] font-gradual text-base font-bold text-[#C2C2C2]'>
								Features
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-5 text-[#7A7A7A]'>Max Team Size</div>
								<div className='text-right text-[#FFFFFFA3]'>∞</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-5 text-[#7A7A7A]'>Number of Projects</div>
								<div className='text-right text-[#FFFFFFA3]'>∞</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-3 text-[#7A7A7A]'>Custom Domains (with SSL)</div>
								<div className='col-span-3 text-right text-[#FFFFFFA3]'>∞</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-4 text-[#7A7A7A]'>Shared DB Size</div>
								<div className='col-span-2 text-right text-[#FFFFFFA3]'>Custom</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-5 text-[#7A7A7A]'>Dedicated Database (RDS)</div>
								<div className='text-right text-[#FFFFFFA3]'>
									<svg
										width={18}
										className='ml-auto h-full text-[#FFFFFFA3]'
										height={15}
										viewBox='0 0 18 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M1 6.5L6.33333 12L17 1' stroke='white' stroke-width='2' />
									</svg>
								</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-3 text-[#7A7A7A]'>Log Retention</div>
								<div className=' col-span-3 text-right text-[#FFFFFFA3]'>28 days</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-3 text-[#7A7A7A]'>Support</div>
								<div className='col-span-3 text-right text-[#FFFFFFA3]'>Dedicated</div>
							</div>
							<div className='mb-8 px-2 py-[0.875rem] font-gradual font-bold lg:mt-0'></div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-4 text-[#7A7A7A]'>Network (egress)</div>
								<div className='col-span-2 text-right text-[#FFFFFFA3]'>Custom</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-4 text-[#7A7A7A]'>Deployments per day</div>
								<div className='col-span-2 text-right text-[#FFFFFFA3]'>Custom</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-4 text-[#7A7A7A]'>Build Time per Deployment</div>
								<div className='col-span-2 text-right text-[#FFFFFFA3]'>Custom</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-4 text-[#7A7A7A]'>Object Storage (coming soon)</div>
								<div className='col-span-2 text-right text-[#FFFFFFA3]'>Custom</div>
							</div>
							<div className='grid grid-cols-6 px-2 py-[0.625rem]'>
								<div className=' col-span-5 text-[#7A7A7A]'>Persistent Volume</div>
								<div className='text-right text-[#FFFFFFA3]'>
									<svg
										width={18}
										className='ml-auto h-full text-[#FFFFFFA3]'
										height={15}
										viewBox='0 0 18 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M1 6.5L6.33333 12L17 1' stroke='white' stroke-width='2' />
									</svg>
								</div>
							</div>
						</div>
					</div>
					{/* Desktop */}
					<div className='hidden divide-y divide-black/10 text-xl dark:divide-white/10 lg:block'>
						<div className='mb-8 grid grid-cols-4 py-[0.875rem]'>
							<div className='font-gradual font-bold'></div>
							<div className='text-center text-black dark:text-[#7A7A7A]'>
								<div className='mb-4 font-gradual text-2xl font-bold'>Community</div>

								<div className='mx-auto mb-4 w-4/5 text-base text-[#7A7A7A]'>
									Everything you need to run your community projects. On us.
								</div>
								<button
									className={clsx(
										'border-[1px] border-solid border-[#ffffff40] text-base text-white',
										'z-[5] rounded-[14px] px-6 py-3 font-gradual transition-all hover:scale-[1.01]'
									)}
								>
									Start deploying
								</button>
							</div>
							<div className='text-center text-black dark:text-[#7A7A7A]'>
								<div className='mb-4 font-gradual text-2xl font-bold'>Pro</div>

								<div className='mx-auto mb-4 w-4/5 text-base text-[#7A7A7A]'>
									Everything in Community, plus higher limits and team features.
								</div>
								<Button variant='tertiary' className='mx-auto scale-[0.95]'>
									Get Started
								</Button>
							</div>
							<div className='text-center text-black dark:text-[#7A7A7A]'>
								<div className='mb-4 font-gradual text-2xl font-bold'>Team</div>

								<div className='mb-4 text-base text-[#7A7A7A]'>
									Custom-built tier to supercharge your team&apos;s productivity.
								</div>
								<button
									className={clsx(
										'border-[1px] border-solid border-[#ffffff40] text-base text-white',
										'z-[5] rounded-[14px] px-6 py-3 font-gradual transition-all hover:scale-[1.01]'
									)}
								>
									Contact us
								</button>
							</div>
						</div>
						<div className='grid grid-cols-4 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#7A7A7A]'>
								Max Team Size
							</div>
							<div className='text-[20px] text-[#ffffffa3]'>1</div>
							<div className='text-[20px] text-[#ffffffa3]'>1</div>
							<div className='text-[20px] text-[#ffffffa3]'>∞</div>
						</div>
						<div className='grid grid-cols-4 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#7A7A7A]'>
								Number of Projects
							</div>
							<div className='text-[20px] text-[#ffffffa3]'>3</div>
							<div className='text-[20px] text-[#ffffffa3]'>15</div>
							<div className='text-[20px] text-[#ffffffa3]'>∞</div>
						</div>
						<div className='grid grid-cols-4 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#7A7A7A]'>
								Custom Domains (with SSL)
							</div>
							<div className='text-[20px] text-[#ffffffa3]'>
								<svg
									width={15}
									className='m-auto text-[#fff]'
									height={15}
									viewBox='0 0 15 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M1 14L7.5 7.5M14 1L7.5 7.5M7.5 7.5L14 14M7.5 7.5L1 1'
										stroke='currentColor'
										strokeWidth={2}
									/>
								</svg>
							</div>
							<div className='text-[20px] text-[#ffffffa3]'>1 per project</div>
							<div className='text-[20px] text-[#ffffffa3]'>∞</div>
						</div>
						<div className='grid grid-cols-4 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#7A7A7A]'>
								Shared DB Size
							</div>
							<div className='text-[20px] text-[#ffffffa3]'>1 GB</div>
							<div className='text-[20px] text-[#ffffffa3]'>10 GB</div>
							<div className='text-[20px] text-[#ffffffa3]'>Custom</div>
						</div>
						<div className='grid grid-cols-4 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#7A7A7A]'>
								Dedicated Database (RDS)
							</div>
							<div className='text-[20px] text-[#ffffffa3]'>
								<svg
									width={15}
									className='m-auto text-[#fff]'
									height={15}
									viewBox='0 0 15 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M1 14L7.5 7.5M14 1L7.5 7.5M7.5 7.5L14 14M7.5 7.5L1 1'
										stroke='currentColor'
										strokeWidth={2}
									/>
								</svg>
							</div>
							<div className='text-[20px] text-[#ffffffa3]'>
								<svg
									width={15}
									className='m-auto text-[#fff]'
									height={15}
									viewBox='0 0 15 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										id='Vector 820'
										d='M1 6.5L6.33333 12L17 1'
										stroke='white'
										stroke-width='2'
									/>
								</svg>
							</div>
							<div className='text-[20px] text-[#ffffffa3]'>
								<svg
									width={15}
									className='m-auto text-[#fff]'
									height={15}
									viewBox='0 0 15 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										id='Vector 820'
										d='M1 6.5L6.33333 12L17 1'
										stroke='white'
										stroke-width='2'
									/>
								</svg>
							</div>
						</div>
						<div className='grid grid-cols-4 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#7A7A7A]'>
								Log Retention
							</div>
							<div className='text-[20px] text-[#ffffffa3]'>1 day</div>
							<div className='text-[20px] text-[#ffffffa3]'>7 days</div>
							<div className='text-[20px] text-[#ffffffa3]'>28 days</div>
						</div>
						<div className='grid grid-cols-4 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#7A7A7A]'>Support</div>
							<div className='text-[20px] text-[#ffffffa3]'>Community</div>
							<div className='text-[20px] text-[#ffffffa3]'>Enhanced</div>
							<div className='text-[20px] text-[#ffffffa3]'>Dedicated</div>
						</div>
						<div className='grid grid-cols-4 items-center py-2 text-center'></div>
					</div>

					<div className='mt-16 hidden divide-y divide-black/10 text-xl dark:divide-white/10 lg:block'>
						<div className='grid grid-cols-4 items-center py-2 text-center'></div>
						<div className='grid grid-cols-4 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#7A7A7A]'>
								Network (egress)
							</div>
							<div className='text-[20px] text-[#ffffffa3]'>1 GB</div>
							<div className='text-[20px] text-[#ffffffa3]'>10 GB</div>
							<div className='text-[20px] text-[#ffffffa3]'>Custom</div>
						</div>
						<div className='grid grid-cols-4 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#7A7A7A]'>
								Max Delpoyments per day
							</div>
							<div className='text-[20px] text-[#ffffffa3]'>20</div>
							<div className='text-[20px] text-[#ffffffa3]'>Custom</div>
							<div className='text-[20px] text-[#ffffffa3]'>Custom</div>
						</div>
						<div className='grid grid-cols-4 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#7A7A7A]'>
								Max Build Time per Deployment
							</div>
							<div className='text-[20px] text-[#ffffffa3]'>20</div>
							<div className='text-[20px] text-[#ffffffa3]'>Custom</div>
							<div className='text-[20px] text-[#ffffffa3]'>Custom</div>
						</div>
						<div className='grid grid-cols-4 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#7A7A7A]'>
								Object Storage (coming soon)
							</div>
							<div className='text-[20px] text-[#ffffffa3]'>1 GB</div>
							<div className='text-[20px] text-[#ffffffa3]'>10 GB</div>
							<div className='text-[20px] text-[#ffffffa3]'>Custom</div>
						</div>
						<div className='grid grid-cols-4 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#7A7A7A]'>
								Persistent Volume (coming soon)
							</div>
							<div className='text-[20px] text-[#ffffffa3]'>
								<svg
									width={15}
									className='m-auto text-[#fff]'
									height={15}
									viewBox='0 0 15 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M1 14L7.5 7.5M14 1L7.5 7.5M7.5 7.5L14 14M7.5 7.5L1 1'
										stroke='currentColor'
										strokeWidth={2}
									/>
								</svg>
							</div>
							<div className='text-[20px] text-[#ffffffa3]'>
								<svg
									width={15}
									className='m-auto text-[#fff]'
									height={15}
									viewBox='0 0 15 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										id='Vector 820'
										d='M1 6.5L6.33333 12L17 1'
										stroke='white'
										stroke-width='2'
									/>
								</svg>
							</div>
							<div className='text-[20px] text-[#ffffffa3]'>
								<svg
									width={15}
									className='m-auto text-[#fff]'
									height={15}
									viewBox='0 0 15 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										id='Vector 820'
										d='M1 6.5L6.33333 12L17 1'
										stroke='white'
										stroke-width='2'
									/>
								</svg>
							</div>
						</div>
						<div className='grid grid-cols-4 items-center py-2 text-center'></div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Pricing
