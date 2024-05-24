import { Information } from 'components/svgs'
import Image from 'next/image'
import Link from 'next/link'
import { Tooltip } from 'react-tooltip'

const PriceCards = () => (
	<div className='mx-auto mt-24 w-full max-w-4xl px-5 sm:px-10 lg:mt-28'>
		<div className='grid gap-8 lg:grid-cols-2'>
			<div className='group relative order-2 h-[188px] rounded-[20px] sm:order-1'>
				<Image
					src='/images/pages/pricing/tileBgs/1.svg'
					fill
					alt='bg img'
					className='absolute left-0 top-0 z-[1] hidden overflow-hidden rounded-[20px] sm:block'
				/>
				<Image
					src='/images/pages/pricing/tileBgs/4.svg'
					fill
					alt='bg img'
					className='absolute left-0 top-0 z-[1] overflow-hidden rounded-[20px] sm:hidden'
				/>
				<Image
					src={`/images/pages/pricing/sections/cards/stars-1.png`}
					alt='stars'
					fill
					className='absolute left-0 top-0 z-[1] h-full w-full transform duration-1000 group-hover:translate-x-12 group-hover:translate-y-3'
				/>
				<Image
					src={`/images/pages/pricing/sections/cards/stars-2.png`}
					alt='stars'
					fill
					className='absolute left-0 top-0 z-[1] h-full w-full transform duration-1000 group-hover:-translate-x-5 group-hover:translate-y-3 '
				/>
				<div className='absolute left-0 top-0 z-[10] flex h-full w-full flex-col items-center gap-4 rounded-[20px] p-6'>
					<h3 className='text-xl text-head'>Network egress</h3>
					<h1
						className='bg-clip-text font-gradual text-5xl font-bold text-transparent'
						style={{
							backgroundImage:
								'linear-gradient(70deg, #FC540C 34.41%, rgba(255, 215, 111, 0.72) 93.53%, #38D4E9 118.82%)',
						}}
					>
						$0.15
					</h1>
					<h4>per GB</h4>
				</div>
			</div>

			<div className='group relative order-3 h-[188px] rounded-[20px]'>
				<Image
					src='/images/pages/pricing/tileBgs/3.svg'
					fill
					alt='bg img'
					className='absolute left-0 top-0 z-[1] hidden overflow-hidden rounded-[20px] sm:block'
				/>
				<Image
					src='/images/pages/pricing/tileBgs/6.svg'
					fill
					alt='bg img'
					className='absolute left-0 top-0 z-[1] overflow-hidden rounded-[20px] sm:hidden'
				/>
				<Image
					src={`/images/pages/pricing/sections/cards/stars-1.png`}
					alt='stars'
					fill
					className='absolute left-0 top-0 z-[1] h-full w-full transform duration-1000 group-hover:translate-x-12 group-hover:translate-y-3'
				/>
				<Image
					src={`/images/pages/pricing/sections/cards/stars-2.png`}
					alt='stars'
					fill
					className='absolute left-0 top-0 z-[1] h-full w-full transform duration-1000 group-hover:-translate-x-5 group-hover:translate-y-3 '
				/>
				<div className='absolute left-0 top-0 z-[10] flex h-full w-full flex-col items-center gap-4 rounded-[20px] p-6'>
					<h3 className='text-xl text-head'>Compute</h3>
					<h1
						className='bg-clip-text font-gradual text-5xl font-bold text-transparent'
						style={{
							backgroundImage:
								'linear-gradient(72deg, #FC540C -10.27%, rgba(255, 215, 111, 0.72) 2.75%, #38D4E9 120.58%)',
						}}
					>
						$0.10
					</h1>
					<div className='flex'>
						<h4>per vCPU hour</h4>
						<div
							data-tooltip-id='i-text'
							data-tooltip-content='See Compute Cost Estimator below.'
							data-tooltip-place='top'
							data-tooltip-float
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
							<Information className='ml-1 mt-1' />
						</div>
					</div>
				</div>
			</div>

			<div className='group relative order-5 h-[188px] rounded-[20px]'>
				<Image
					src='/images/pages/pricing/tileBgs/5.svg'
					fill
					alt='bg img'
					className='absolute left-0 top-0 z-[1] overflow-hidden rounded-[20px] '
				/>
				<Image
					src={`/images/pages/pricing/sections/cards/stars-1.png`}
					alt='stars'
					fill
					className='absolute left-0 top-0 z-[1] h-full w-full transform duration-1000 group-hover:translate-x-12 group-hover:translate-y-3'
				/>
				<Image
					src={`/images/pages/pricing/sections/cards/stars-2.png`}
					alt='stars'
					fill
					className='absolute left-0 top-0 z-[1] h-full w-full transform duration-1000 group-hover:-translate-x-5 group-hover:translate-y-3 '
				/>
				<div className='absolute left-0 top-0 z-[10] flex h-full w-full flex-col items-center gap-4 rounded-[20px] p-6'>
					<h3 className='text-xl text-head'>Object storage</h3>
					<h1
						className='bg-clip-text font-gradual text-5xl font-bold text-transparent'
						style={{
							backgroundImage:
								'linear-gradient(72deg, #FC540C -20%, rgba(255, 215, 111, 0.72) 45%, #38D4E9 150%)',
						}}
					>
						$0.15
					</h1>
					<h4>per GB/month</h4>
				</div>
			</div>
			<div className='group relative order-6 h-[188px] rounded-[20px]'>
				<Image
					src='/images/pages/pricing/tileBgs/6.svg'
					fill
					alt='bg img'
					className='absolute left-0 top-0 z-[1] overflow-hidden rounded-[20px]'
				/>
				<Image
					src={`/images/pages/pricing/sections/cards/stars-1.png`}
					alt='stars'
					fill
					className='absolute left-0 top-0 z-[1] h-full w-full transform duration-1000 group-hover:translate-x-12 group-hover:translate-y-3'
				/>
				<Image
					src={`/images/pages/pricing/sections/cards/stars-2.png`}
					alt='stars'
					fill
					className='absolute left-0 top-0 z-[1] h-full w-full transform duration-1000 group-hover:-translate-x-5 group-hover:translate-y-3 '
				/>
				<div className='absolute left-0 top-0 z-[10] flex h-full w-full flex-col items-center gap-4 rounded-[20px] p-6'>
					<h3 className='text-xl text-head'>Premium Support</h3>
					<h1
						className='bg-clip-text font-gradual text-5xl font-bold text-transparent'
						style={{
							backgroundImage:
								'linear-gradient(72deg, #FC540C -10.27%, rgba(255, 215, 111, 0.72) 2.75%, #38D4E9 120.58%)',
						}}
					>
						Custom
					</h1>
					<h4>per team/month</h4>
				</div>
			</div>
		</div>
	</div>
)

export default PriceCards
