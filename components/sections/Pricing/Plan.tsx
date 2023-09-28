import clsx from 'clsx'
import { Information } from 'components/svgs'
import { FC, useState } from 'react'
import Image from 'next/image'
import { Tooltip } from 'react-tooltip'
import Link from 'next/link'

export interface FeatureProps {
	feature: string
	iText?: string
}

export interface PlanProps {
	name: string
	description: string
	price: string
	term: string
	billsResources: boolean
	features: FeatureProps[]
	url: string
	textGradient?: string
	cta: string
}

const Plan: FC<PlanProps> = ({
	name,
	description,
	price,
	term,
	billsResources,
	features,
	url,
	textGradient,
	cta,
}) => {
	const [buttonHovered, setButtonHovered] = useState(false)

	return (
		<div
			className={clsx(
				'group flex flex-col justify-between rounded-[32px] bg-black p-8 ',
				name === 'Pro'
					? 'button-shadow border-[1px] border-solid border-[#ffffff33] bg-[#00000080]  lg:-mt-[17%] lg:h-[110%]'
					: 'border-gradient-card relative'
			)}
		>
			<Image
				src={`/images/pages/pricing/sections/plans/stars-1.png`}
				alt='stars'
				fill
				className={clsx(
					'absolute left-0 top-0 h-full w-full transform duration-1000 group-hover:translate-x-12'
				)}
			/>
			<Image
				src={`/images/pages/pricing/sections/plans/stars-2.png`}
				alt='stars'
				fill
				className={clsx(
					'absolute left-0 top-0 h-full w-full transform duration-1000 group-hover:-translate-x-5'
				)}
			/>
			{name === 'Pro' && (
				<div className='absolute left-0 top-0 z-[0] h-full w-full rounded-[32px] bg-gradient-to-t from-[#FC540C] to-[#38D4E9] opacity-30' />
			)}
			<div className='z-[5]'>
				<h1 className='mb-2 font-gradual text-[32px] font-bold text-[#C2C2C2]'>{name}</h1>
				<p className='mb-4 text-[#7A7A7A]'>{description}</p>

				<div className='flex items-end'>
					<h1
						className='bg-clip-text font-gradual text-5xl font-bold text-transparent'
						style={{
							backgroundImage: textGradient,
						}}
					>
						{price}
					</h1>
					<p className='ml-2 font-gradual text-[#7A7A7A]'>{term}</p>
				</div>
				{billsResources && <p className='font-gradual text-[#7A7A7A]'>+ RESOURCE USAGE</p>}
				<hr className={clsx('mb-5 border-[#7A7A7A]', billsResources ? ' mt-6 ' : ' mt-12')} />
				{features.map((feature, i) => (
					<div key={i} className='relative flex flex-row items-center gap-2'>
						<p
							className=' bg-clip-text text-2xl font-bold text-transparent '
							style={{ backgroundImage: textGradient }}
						>
							+
						</p>
						<p className='text-base text-[#C2C2C2]'>{feature.feature}</p>

						{feature.iText && (
							<div
								data-tooltip-id='i-text'
								data-tooltip-content={feature.iText}
								data-tooltip-place='top'
								data-tooltip-float={true}
								data-tooltip-offset={30}
							>
								<Tooltip
									id='i-text'
									style={{
										color: '#fff',
										border: '1px solid #3F4848',
										borderWidth: 1,
										borderColor: '#3F4848',
										borderRadius: 8,
									}}
								/>
								<Information className='peer' />
							</div>
						)}
					</div>
				))}
			</div>

			<button
				onMouseEnter={() => setButtonHovered(true)}
				onMouseLeave={() => setButtonHovered(false)}
				className={clsx(
					name === 'Pro'
						? ' text-black hover:text-white'
						: ' border-[1px] border-solid border-[#ffffff40] text-white hover:text-black',
					'z-[5] mt-8 w-full rounded-[14px] py-3 font-gradual transition-all duration-1000 hover:border-black'
				)}
				style={{
					background:
						(name === 'Pro' && !buttonHovered) || (name !== 'Pro' && buttonHovered)
							? 'linear-gradient(73deg, #FC540C -7.95%, rgba(255, 215, 111, 0.72) 45.94%, #38D4E9 116.73%)'
							: name === 'Pro' && buttonHovered
							? 'linear-gradient(70deg, #FC540C 34.41%, rgba(255, 215, 111, 0.72) 93.53%, #38D4E9 118.82%)'
							: '',
				}}
			>
				<Link href={url} target='_blank' className='inline-block h-full w-full'>
					{cta}
				</Link>
			</button>
		</div>
	)
}

export default Plan
