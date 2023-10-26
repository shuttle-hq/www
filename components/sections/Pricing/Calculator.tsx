import Image from 'next/image'
import Slider from 'rc-slider'
import { useState } from 'react'
import 'rc-slider/assets/index.css'
import Link from 'next/link'
import { CONTACT_US_URI } from 'lib/constants'

function roundToClosest(num: number, arr: number[]) {
	let closest = arr[0]
	let diff = Math.abs(num - closest)

	for (let i = 1; i < arr.length; i++) {
		let currentDiff = Math.abs(num - arr[i])
		if (currentDiff < diff) {
			diff = currentDiff
			closest = arr[i]
		}
	}

	return closest
}

const VCPU_VALUES = [0.05, 0.1, 0.25, 0.5, 0.75, 1, 2, 4]

const SLIDER_STYLES = {
	rail: { backgroundColor: '#ffffff33', height: 5 },
	track: {
		background:
			'linear-gradient(72deg, #fc540c 27.87%, rgba(255, 215, 111, 0.72) 52.56%, #38d4e9 74.58%)',
		height: 4,
	},
	handle: {
		opacity: 1,
		borderRadius: 21,
		width: 21,
		height: 21,
		top: 1,
		background:
			'linear-gradient(66deg, #FC540C -101.68%, rgba(255, 215, 111, 0.72) 2.02%, #38D4E9 84.49%)',
		border: '3px solid #ffffff',
	}
}

const Calculator = () => {
	const [hours, setHours] = useState(730)
	const [cpu, setCpu] = useState(0.05)

	const ram = roundToClosest(cpu, VCPU_VALUES) * 4
	const price = Math.max(Math.round(0.1 * hours * cpu) - 4, 0)

	return (
		<>
			<div className='relative'>
				<Image
					src='/images/pages/pricing/calculatorBg.svg'
					fill
					alt='bg img'
					className='absolute -z-10 h-auto w-[1440px] -translate-y-[20%] translate-x-[20%] opacity-0 sm:opacity-100'
				/>
				<Image
					src='/images/pages/pricing/calculatorBgSmall.svg'
					fill
					alt='bg img'
					className='absolute -z-10 h-[200vh] w-screen -translate-y-[20%] sm:hidden'
				/>
				<div className='z-10 mx-auto mt-14 flex w-full max-w-7xl flex-col gap-[210px] px-5 sm:flex-row sm:px-10 lg:mt-14'>
					<div className=' flex max-w-[400px] flex-col items-start justify-center'>
						<h1 className='mb-5 font-gradual text-4xl font-bold text-[#E0E0E0] sm:text-5xl sm:text-[#C2C2C2]'>
							Estimate Your
							<br />
							Compute Costs
						</h1>
						<p className='mb-10 text-[#7A7A7A] sm:text-xl'>
							Use our interactive pricing estimator to calculate your usage-based compute cost.
						</p>
						<p className='mb-10 text-[#7A7A7A] sm:text-xl'>
							The monthly cost is based on the product of vCPU cores and active hours.
						</p>
						<p className='text-[#7A7A7A] sm:text-xl'>Need a more precise estimate?</p>
						<Link href={CONTACT_US_URI} target='_blank'>
							<p className='cursor-pointer text-[#C2C2C2] underline sm:text-xl'>
								Set up a call with our team
							</p>
						</Link>
					</div>
					<div className='z-[10] flex w-full flex-col px-8 sm:px-0'>
						<div className='w-full sm:h-44' />
						<Slider
							max={4}
							min={0.05}
							step={0.05}
							handleRender={(node, handleProps) => {
								return (
									<div className='text-center'>
										<span
											className='absolute -top-[4.6rem] z-50 flex h-[60px] w-[125px] -translate-x-1/2 select-none items-center justify-center rounded-xl border border-solid border-[#3C4343] bg-[#0C1616] text-white opacity-100'
											style={{
												left: node.props.style?.left,
											}}
										>
											{handleProps.value} vCPU
											<br />
											{ram} GB RAM
										</span>
										{node}
									</div>
								)
							}}
							styles={SLIDER_STYLES}
							value={cpu}
							onChange={(value: number | number[]) => {
								if (typeof value === 'number') {
									setCpu(roundToClosest(value, VCPU_VALUES))
								}
							}}
							className='-mt-32 mb-20 sm:mt-0 '
						/>
						<Slider
							max={730}
							min={10}
							handleRender={(node, handleProps) => {
								return (
									<div>
										<span
											className='absolute -top-14 z-50 flex h-[40px] w-[125px] -translate-x-1/2 select-none items-center justify-center rounded-xl border border-solid border-[#3C4343] bg-[#0C1616] text-white opacity-100'
											style={{
												left: node.props.style?.left,
											}}
										>
											{handleProps.value === 730 ? '1 month' : `${handleProps.value} hours`}
										</span>
										{node}
									</div>
								)
							}}
							styles={SLIDER_STYLES}
							value={hours}
							onChange={(value: number | number[]) => {
								if (typeof value === 'number') setHours(value)
							}}
							className='mb-16'
						/>
						<div className='mb-12 flex justify-center'>



              <div className="rounded-[24px] p-[2px] relative" style={{
                background: 'linear-gradient(71.78deg, rgba(252, 84, 12, 0.3) 27.87%, rgba(255, 215, 111, 0.216) 52.56%, rgba(56, 212, 233, 0.3) 74.58%)'
              }}>

              
							<div className='flex items-center justify-center rounded-[24px] bg-[#171C1A] p-5 w-[250px] h-full opacity-100'>
								<h1 className='mr-2 font-gradual text-[32px] font-bold text-[#D8D8D8]'>
									{price}$
								</h1>
							  <p className='mt-4 text-[#D8D8D8]'> / month</p>
							</div>
              </div>
            
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Calculator
