import Image from 'next/image'
import Slider from 'rc-slider'
import { useState } from 'react'
import { Tooltip } from 'react-tooltip'
import 'rc-slider/assets/index.css'

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
				<div className='z-10 mx-auto mt-14 flex w-full max-w-7xl flex-col gap-[200px] px-5 sm:flex-row sm:px-10 lg:mt-14'>
					<div className=' flex max-w-[400px] flex-col items-start justify-center'>
						<h1 className='mb-5 font-gradual text-4xl font-bold text-[#E0E0E0] sm:text-5xl sm:text-[#C2C2C2]'>
							Estimate Your
							<br />
							Compute Costs
						</h1>
						<p className='mb-10 text-[#7A7A7A] sm:text-xl'>
							Use our interactive pricing estimator to find out your compute resources requirements
							and get an accurate projection of additional usage-based cost
						</p>
						<p className='text-[#7A7A7A] sm:text-xl'>Need a more precise estimate?</p>
						<p className='cursor-pointer text-[#C2C2C2] underline sm:text-xl'>
							Set up a call with our team
						</p>
					</div>
					<div className='z-[10] flex w-full flex-col'>
						<div className='w-full sm:h-32 ' />
						<Slider
							max={730}
							min={10}
							handleRender={(node, handleProps) => {
								return (
									<div>
										<span
											className='absolute -top-14 z-50 flex h-[40px] w-[155px] -translate-x-1/2 select-none items-center justify-center rounded-xl border border-solid border-[#3C4343] bg-[#0C1616] text-white opacity-100'
											style={{
												left: node.props.style?.left,
											}}
										>
											{handleProps.value} hours
										</span>
										{node}
									</div>
								)
							}}
							railStyle={{ backgroundColor: '#ffffff33', height: 5 }}
							trackStyle={{
								background:
									'linear-gradient(72deg, #fc540c 27.87%, rgba(255, 215, 111, 0.72) 52.56%, #38d4e9 74.58%)',
								height: 4,
							}}
							handleStyle={{
								opacity: 1,
								borderRadius: 21,
								width: 21,
								height: 21,
								top: 1,
								background:
									'linear-gradient(66deg, #FC540C -101.68%, rgba(255, 215, 111, 0.72) 2.02%, #38D4E9 84.49%)',
								border: '3px solid #ffffff',
							}}
							value={hours}
							onChange={(value: number | number[]) => {
								if (typeof value === 'number') setHours(value)
							}}
							className='-mt-32 mb-20 sm:mt-0 '
						/>
						<Slider
							max={4}
							min={0.05}
							step={0.01}
							handleRender={(node, handleProps) => {
								return (
									<div>
										<span
											className='absolute -top-14 z-50 flex h-[40px] w-[155px] -translate-x-1/2 select-none items-center justify-center rounded-xl border border-solid border-[#3C4343] bg-[#0C1616] text-white opacity-100'
											style={{
												left: node.props.style?.left,
											}}
										>
											{handleProps.value} vCPU
										</span>
										{node}
									</div>
								)
							}}
							railStyle={{ backgroundColor: '#ffffff33', height: 5 }}
							trackStyle={{
								background:
									'linear-gradient(72deg, #fc540c 27.87%, rgba(255, 215, 111, 0.72) 52.56%, #38d4e9 74.58%)',
								height: 4,
							}}
							handleStyle={{
								opacity: 1,
								borderRadius: 21,
								background:
									'linear-gradient(66deg, #FC540C -101.68%, rgba(255, 215, 111, 0.72) 2.02%, #38D4E9 84.49%)',
								border: '3px solid #ffffff',
								width: 21,
								height: 21,
								top: 1,
							}}
							value={cpu}
							onChange={(value: number | number[]) => {
								if (typeof value === 'number') {
									setCpu(roundToClosest(value, VCPU_VALUES))
								}
							}}
							className='mb-16'
						/>
						<div className='mb-12 grid grid-cols-2 gap-8'>
							<div className='flex flex-col items-center rounded-[24px] bg-[#00000033] p-5'>
								<h1 className='font-gradual text-[32px] font-bold text-white'>{ram} GB</h1>
								<p className='text-[20px]'>RAM</p>
							</div>

							<div className='flex items-center justify-center rounded-[24px] bg-[#00000033] p-5'>
								<h1 className='mr-2 font-gradual text-[32px] font-bold text-[#D8D8D8]'>
									{price}$
								</h1>
								<p className='mt-4 text-[#D8D8D8]'> / month</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Calculator
