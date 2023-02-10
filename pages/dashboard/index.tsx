import { DashboardPage } from 'components/templates'
import { FC, ReactNode } from 'react'
import { FeaturedStarters } from 'components/sections'
import Image from 'next/image'
import clsx from 'clsx'
import { Copy } from '../../components/svgs'

export default function DashboardHome() {
	return (
		<>
			<div className='mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-28'>
				<header className='max-w-2xl'>
					<h1 className='w-fit font-gradual text-5xl font-bold dark:text-[#C2C2C2] lg:text-6.5'>
						Start using shuttle
					</h1>
					<p className='mt-4 sm:text-xl lg:text-2xl'>Follow these few steps and you’re ready to go</p>
				</header>
				<div className='mt-16 grid gap-y-5 lg:grid-cols-12'>
					<Step
						number='1'
						title='Install'
						description='Run this command to install shuttle'
						backgroundImage='/images/pages/dashboard/card-1.png'
						gradientClassName='from-[#FC540C] to-[#C39348]'
						command='cargo install cargo-shuttle'
						className='row-start-1 lg:col-span-4 lg:col-start-1'
					/>
					<Step
						number='2'
						title='Log in'
						description='Run this command to start the login process'
						backgroundImage='/images/pages/dashboard/card-2.png'
						gradientClassName='from-[#FC540C] to-[#C39348]'
						command='cargo shuttle login'
						className='row-start-2 lg:col-span-4 lg:col-start-3'
					/>
					<Step
						number='3'
						title='Authenticate'
						description='Run this command to authenticate'
						backgroundImage='/images/pages/dashboard/card-3.png'
						gradientClassName='from-[#FC540C] to-[#C39348]'
						command='cargo install login {key}'
						className='row-start-3 lg:col-span-4 lg:col-start-5'
					/>
					<Step
						number='4'
						title='Initalize'
						description='Run this command to initialize your project'
						backgroundImage='/images/pages/dashboard/card-4.png'
						gradientClassName='from-[#FC540C] to-[#C39348]'
						command='cargo shuttle init'
						className='row-start-4 lg:col-span-4 lg:col-start-7'
					/>
					<Step
						number='5'
						title='Deploy'
						description='Run this command to deploy your project 🥳'
						backgroundImage='/images/pages/dashboard/card-5.png'
						gradientClassName='from-[#FC540C] to-[#C39348]'
						command='cargo shuttle deploy'
						className='row-start-5 lg:col-span-4 lg:col-start-9'
					/>
				</div>
			</div>
			<FeaturedStarters />
		</>
	)
}

interface StepProps {
	number: string
	gradientClassName: string
	backgroundImage: string
	title: string
	description: string
	command?: string
	className: string
}

const Step: FC<StepProps> = ({
	number,
	backgroundImage,
	gradientClassName,
	title,
	description,
	command,
	className,
}) => {
	return (
		<div
			className={clsx(
				'relative w-full overflow-hidden rounded-[2rem] border border-black/10 p-6 dark:border-white/10',
				className
			)}
		>
			<Image src={backgroundImage} alt='' fill className='absolute' />
			<h3 className='font-gradual text-2xl font-bold dark:text-[#C2C2C2]'>
				<span className={clsx('bg-gradient-to-r bg-clip-text text-transparent', gradientClassName)}>
					{number.padStart(2, '0')}
				</span>
				&nbsp;{title}
			</h3>
			<p className='mt-2'>{description}</p>

			<div className='relative mt-3 flex w-full cursor-text items-center rounded-2xl border border-[#191919] bg-transparent py-2 pl-3 pr-14 outline-none'>
				$ {command}
				<button className='absolute right-3 rounded-lg border border-transparent p-1 hover:border-[#484848] hover:bg-[#343434] dark:text-[#C2C2C2]'>
					<Copy />
				</button>
			</div>

			{/* If it the whole slide isn't outlined, add a line under the slide */}
			{number !== '1' && (
				<hr className='absolute -bottom-px left-6 w-[calc(100%-3rem)] border-black/10 group-hover:hidden dark:border-[#191919]' />
			)}
		</div>
	)
}

DashboardHome.getLayout = (children: ReactNode) => <DashboardPage>{children}</DashboardPage>
