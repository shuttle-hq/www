import { Splide, SplideSlide } from '@splidejs/react-splide'
import clsx from 'clsx'
import { Button, LoginButton } from 'components/elements'
import Image from 'next/image'
import { FC, ReactNode, useState } from 'react'
import {ContactUsButton} from "../elements/Button";

const Pricing = () => {
	const [selectedPricing, setSelectedPricing] = useState<'monthly' | 'annual'>('monthly')
	const [selectedMobilePlan, setSelectedMobilePlan] = useState<'hobby' | 'starter' | 'pro'>('hobby')

	return (
		<div className='mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-28'>
			{/* <div className='flex items-center justify-center gap-5 text-xl'>
				<div
					className={clsx(
						selectedPricing === 'monthly' ? 'text-black dark:text-[#C2C2C2]' : 'text-[#7A7A7A]'
					)}
				>
					Monthly
				</div>
				<Switch
					checked={selectedPricing !== 'monthly'}
					setChecked={(checked) => setSelectedPricing(checked ? 'annual' : 'monthly')}
				/>
				<div
					className={clsx(
						selectedPricing === 'annual' ? 'text-black dark:text-[#C2C2C2]' : 'text-[#7A7A7A]'
					)}
				>
					Annual
					<sup className='ml-3 bg-gradient-to-r from-[#FC540C] to-[#FFD76F] bg-clip-text text-sm text-transparent'>
						-10%
					</sup>
				</div>
			</div> */}
			<div className='mt-14 grid gap-5 lg:grid-cols-2'>
				<div className='group relative z-10 flex flex-col items-start gap-8 overflow-hidden rounded-[2rem] bg-[#13292C] p-5 dark:bg-black sm:p-8'>
					<Image
						src='/images/sections/pricing/hobby/bg.png'
						alt='background'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-[2rem] object-cover'
					/>
					<Image
						src='/images/sections/pricing/hobby/stars.png'
						alt='stars'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
					/>
					<Image
						src='/images/sections/pricing/hobby/stars-2.png'
						alt='stars 2'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
					/>
					<div>
						<h3 className='font-gradual text-[2rem] font-bold leading-none text-[#C2C2C2]'>Hobby</h3>
						<p className='mt-2 text-[#C2C2C2]'>
							The perfect confluence of features to run your hobby-projects for free - forever.
						</p>
					</div>
					<div className='mt-auto'>
						<p className='bg-gradient-to-r from-[#FC540C] to-[#D3893C] bg-clip-text font-gradual text-5xl font-bold text-transparent'>
							$0
						</p>
						<p className='mt-1 text-sm text-[#C2C2C2]'>/ month</p>
					</div>
					<LoginButton variant='primary'>Get Started</LoginButton>
				</div>
				{/* <div className='group relative z-10 flex flex-col items-start gap-8 overflow-hidden rounded-[2rem] bg-[#13292C] p-5 shadow-[0px_0px_64px_rgba(252,84,12,0.25)] dark:bg-black sm:p-8'>
					<Image
						src='/images/sections/pricing/starter/bg.png'
						alt='background'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-[2rem] object-cover'
					/>
					<Image
						src='/images/sections/pricing/starter/stars.png'
						alt='stars'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
					/>
					<Image
						src='/images/sections/pricing/starter/stars-2.png'
						alt='stars 2'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
					/>
					<div>
						<h3 className='font-gradual text-[2rem] font-bold leading-none text-[#C2C2C2]'>Starter</h3>
						<p className='mt-2 text-[#C2C2C2]'>
							The perfect confluence of features to run your hobby-projects for free - forever.
						</p>
					</div>
					<div className='mt-auto'>
						<p className='bg-gradient-to-r from-[#E87026] to-[#9BAC78] bg-clip-text font-gradual text-5xl font-bold text-transparent'>
							$29
						</p>
						<p className='mt-1 text-sm text-[#C2C2C2]'>user / month</p>
					</div>
					<LoginButton variant='primary'>Get started for free</LoginButton>
				</div> */}
				<div className='group relative z-10 flex flex-col items-start gap-8 overflow-hidden rounded-[2rem] bg-[#13292C] p-5 dark:bg-black sm:p-8'>
					<Image
						src='/images/sections/pricing/pro/bg.png'
						alt='background'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-[2rem] object-cover'
					/>
					<Image
						src='/images/sections/pricing/pro/stars.png'
						alt='stars'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
					/>
					<Image
						src='/images/sections/pricing/pro/stars-2.png'
						alt='stars 2'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
					/>
					<div>
						<h3 className='font-gradual text-[2rem] font-bold leading-none text-[#C2C2C2]'>Pro</h3>
						<p className='mt-2 text-[#C2C2C2]'>
							We’re still test-driving Shuttle Pro, so do get in touch if you’d like to get more usage or features than is included in the Hobby tier.
						</p>
					</div>
					<div className='mt-auto'>
						<p className='bg-gradient-to-r from-[#BE964B] to-[#38D3E9] bg-clip-text font-gradual text-5xl font-bold text-transparent'>
							Let’s chat
						</p>
						<p className='mt-1 text-sm text-[#C2C2C2]'>custom pricing</p>
					</div>
					<ContactUsButton variant='secondary'>Get Started</ContactUsButton>
				</div>
			</div>
			<div className='mt-24 lg:mt-32'>
				<h2 className='font-gradual text-5xl font-bold leading-none dark:text-[#C2C2C2] lg:text-[3.5rem]'>
					Compare plans &amp; features
				</h2>
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
						<div className='grid grid-cols-3 py-[0.875rem]'>
							<div className='font-gradual font-bold'>Features</div>
							<div className='text-center font-gradual text-2xl font-bold text-black dark:text-[#C2C2C2]'>
								Hobby
							</div>
							{/* <div className='text-center font-gradual text-2xl font-bold text-black dark:text-[#C2C2C2]'>
								Starter
							</div> */}
							<div className='text-center font-gradual text-2xl font-bold text-black dark:text-[#C2C2C2] '>
								Pro
							</div>
						</div>
						<div className='grid grid-cols-3 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#C2C2C2]'>Team size</div>
							<div>1</div>
							{/* <div>5</div> */}
							<div>custom</div>
						</div>
						<div className='grid grid-cols-3 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#C2C2C2]'>
								Deployment
							</div>
							<div>unlimited</div>
							{/* <div>unlimited</div> */}
							<div>unlimited</div>
						</div>
						<div className='grid grid-cols-3 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#C2C2C2]'>
								Number of projects
							</div>
							<div>5</div>
							{/* <div>5</div> */}
							<div>unlimited</div>
						</div>
						<div className='grid grid-cols-3 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#C2C2C2]'>Requests</div>
							<div>150k/month</div>
							{/* <div>300k/month</div> */}
							<div>custom</div>
						</div>
						<div className='grid grid-cols-3 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#C2C2C2]'>Workers</div>
							<div>1</div>
							{/* <div>5</div> */}
							<div>custom</div>
						</div>
						<div className='grid grid-cols-3 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#C2C2C2]'>
								Database storage
							</div>
							<div>500MB</div>
							{/* <div>2TB</div> */}
							<div>custom</div>
						</div>
						<div className='grid grid-cols-3 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#C2C2C2]'>
								Custom domains
							</div>
							<div>
								<svg
									width={15}
									className='m-auto text-[#C2C2C2]'
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
							{/* <div>2</div> */}
							<div>custom</div>
						</div>
					</div>
					<div className='mt-16 hidden divide-y divide-black/10 text-xl dark:divide-white/10 lg:block'>
						<div className='mt-16 grid grid-cols-3 py-[0.875rem] lg:mt-0'>
							<div className='font-gradual font-bold'>Support</div>
						</div>
						<div className='grid grid-cols-3 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#C2C2C2]'>Community</div>
							<div>Discord</div>
							{/* <div>Discord</div> */}
							<div>Discord</div>
						</div>
						<div className='grid grid-cols-3 items-center py-2 text-center'>
							<div className='pl-[0.625rem] text-left text-black dark:text-[#C2C2C2]'>
								Request turnaround
							</div>
							<div>
								<svg
									width={15}
									className='m-auto text-[#C2C2C2]'
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
							{/* <div>24h</div> */}
							<div>8h</div>
						</div>
						<div className='grid grid-cols-3 items-center pt-11 text-center'>
							<div />
							<div>
								<LoginButton variant='primary' className='mx-auto bg-[#D8D8D8]'>
									Get Started
								</LoginButton>
							</div>
							{/* <div>
								<Button variant='primary' className='mx-auto bg-[#D8D8D8]'>
									Get started
								</Button>
							</div> */}
							<div>
								<ContactUsButton variant='secondary' className='mx-auto'>
									Contact Us
								</ContactUsButton>
							</div>
						</div>
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
			<div className='py-[0.875rem] px-2 font-gradual font-bold'>Features</div>
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
			<div className='mt-16 py-[0.875rem] px-2 font-gradual font-bold lg:mt-0'>Support</div>
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
