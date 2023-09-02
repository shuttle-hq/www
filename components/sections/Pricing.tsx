import { Splide, SplideSlide } from '@splidejs/react-splide'
import clsx from 'clsx'
import { Button, LoginButton } from 'components/elements'
import Image from 'next/image'
import { FC, ReactNode, useState } from 'react'
import { ContactUsButton } from '../elements/Button'

const Pricing = () => {
	const [selectedPricing, setSelectedPricing] = useState<'monthly' | 'annual'>('monthly')
	const [selectedMobilePlan, setSelectedMobilePlan] = useState<'hobby' | 'starter' | 'pro'>('hobby')

	return (
		<div className='mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-28'>
			<div className='mt-24 lg:mt-32'>
				<div className='mt-16'>
					{/* Mobile */}
					<Splide
						onMove={(splide, index) => {
							setSelectedMobilePlan(index === 0 ? 'hobby' : 'pro')
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
								selectedMobilePlan === 'hobby'
									? 'text-gradient bg-clip-text text-4.5 text-transparent'
									: 'text-xl text-[#7A7A7A]',
								'!mt-auto font-bold leading-none transition-all'
							)}
						>
							Hobby
						</SplideSlide>
						{/* <SplideSlide
							className={clsx(
								selectedMobilePlan === 'starter'
									? 'text-gradient bg-clip-text text-4.5 text-transparent'
									: 'text-xl text-[#7A7A7A]',
								'!mt-auto font-bold leading-none transition-all'
							)}
						>
							Starter
						</SplideSlide> */}
						<SplideSlide
							className={clsx(
								selectedMobilePlan === 'pro'
									? 'text-gradient bg-clip-text text-4.5 text-transparent'
									: 'text-xl text-[#7A7A7A]',
								'!mt-auto font-bold leading-none transition-all'
							)}
						>
							Pro
						</SplideSlide>
					</Splide>
					<div className='space-y-8 lg:hidden'>
						<MobilePlanFeatures
							visible={selectedMobilePlan === 'hobby'}
							teamSize='1'
							deployment='unlimited'
							numberOfProjects='5'
							requests='150k/month'
							workers='1'
							databaseStorage='500MB'
							community='Discord'
							action={
								<LoginButton variant='primary' className='bg-[#D8D8D8]'>
									Get Started
								</LoginButton>
							}
						/>
						{/* <MobilePlanFeatures
							visible={selectedMobilePlan === 'starter'}
							teamSize='5'
							deployment='unlimited'
							numberOfProjects='5'
							requests='300k/month'
							workers='1'
							databaseStorage='2TB'
							subdomains='5'
							customDomains='2'
							community='Discord'
							requestTurnaround='24h'
							action={
								<LoginButton variant='primary' className='bg-[#D8D8D8]'>
									Get started
								</LoginButton>
							}
						/> */}
						<MobilePlanFeatures
							visible={selectedMobilePlan === 'pro'}
							teamSize='custom'
							deployment='unlimited'
							numberOfProjects='unlimited'
							requests='custom'
							workers='custom'
							databaseStorage='custom'
							customDomains='custom'
							community='Discord'
							requestTurnaround='8h'
							action={<ContactUsButton variant='secondary'>Contact Us</ContactUsButton>}
						/>
					</div>
					{/* Desktop */}
					<div className='hidden divide-y divide-black/10 text-xl dark:divide-white/10 lg:block'>
						<div className='mb-8 grid grid-cols-4 py-[0.875rem]'>
							<div className='font-gradual font-bold'></div>
							<div className='text-center text-black dark:text-[#7A7A7A]'>
								<div className='mb-4 font-gradual text-2xl font-bold'>Community</div>

								<div className='mx-auto mb-4 w-4/5 text-base text-[#7A7A7A]'>
									Everything you need to run your hobby projects. On us.
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
									Everything in Hobby, plus higher limits and team features.
								</div>
								<Button variant='tertiary' className='mx-auto scale-[0.95]'>
									Get Started
								</Button>
							</div>
							<div className='text-center text-black dark:text-[#7A7A7A]'>
								<div className='mb-4 font-gradual text-2xl font-bold'>Team</div>

								<div className='mb-4 text-base text-[#7A7A7A]'>
									Custom-built tier to supercharge your team's productivity.
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

interface MobilePlanFeaturesProps {
	visible?: boolean
	teamSize: string
	deployment: string
	numberOfProjects: string
	requests: string
	workers: string
	databaseStorage: string
	customDomains?: string
	community: string
	requestTurnaround?: string
	action: ReactNode
}

const MobilePlanFeatures: FC<MobilePlanFeaturesProps> = ({
	visible,
	teamSize,
	deployment,
	numberOfProjects,
	requests,
	workers,
	databaseStorage,
	customDomains,
	community,
	requestTurnaround,
	action,
}) => {
	return (
		<div className='divide-y divide-black/10 text-xl dark:divide-white/10' hidden={!visible}>
			<div className='px-2 py-[0.875rem] font-gradual font-bold'>Features</div>
			<div className='grid grid-cols-2 px-2 py-[0.625rem]'>
				<div className='text-[#525151] dark:text-[#C2C2C2]'>Team size</div>
				<div className='text-right'>{teamSize}</div>
			</div>
			<div className='grid grid-cols-2 px-2 py-[0.625rem]'>
				<div className='text-[#525151] dark:text-[#C2C2C2]'>Deployment</div>
				<div className='text-right'>{deployment}</div>
			</div>
			<div className='grid grid-cols-2 px-2 py-[0.625rem]'>
				<div className='text-[#525151] dark:text-[#C2C2C2]'>Number of projects</div>
				<div className='text-right'>{numberOfProjects}</div>
			</div>
			<div className='grid grid-cols-2 px-2 py-[0.625rem]'>
				<div className='text-[#525151] dark:text-[#C2C2C2]'>Requests</div>
				<div className='text-right'>{requests}</div>
			</div>
			<div className='grid grid-cols-2 px-2 py-[0.625rem]'>
				<div className='text-[#525151] dark:text-[#C2C2C2]'>Workers</div>
				<div className='text-right'>{workers}</div>
			</div>
			<div className='grid grid-cols-2 px-2 py-[0.625rem]'>
				<div className='text-[#525151] dark:text-[#C2C2C2]'>Database storage</div>
				<div className='text-right'>{databaseStorage}</div>
			</div>
			<div className='grid grid-cols-2 px-2 py-[0.625rem]'>
				<div className='text-[#525151] dark:text-[#C2C2C2]'>Custom domains</div>
				<div className='text-right'>
					{customDomains || (
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
					)}
				</div>
			</div>
			<div className='mt-16 px-2 py-[0.875rem] font-gradual font-bold lg:mt-0'>Support</div>
			<div className='grid grid-cols-2 px-2 py-[0.625rem]'>
				<div className='text-[#525151] dark:text-[#C2C2C2]'>Community</div>
				<div className='text-right'>{community}</div>
			</div>
			<div className='grid grid-cols-2 px-2 py-[0.625rem]'>
				<div className='text-[#525151] dark:text-[#C2C2C2]'>Request turnaround</div>
				<div className='text-right'>
					{requestTurnaround || (
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
					)}
				</div>
			</div>
			<div className='flex justify-center pt-5'>{action}</div>
		</div>
	)
}

export default Pricing
