import { Information } from 'components/svgs'
import Image from 'next/image'

const PriceCards = () => (
	<div className='mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-28'>
		<div className='grid gap-8 lg:grid-cols-3'>
			<div className='relative h-[188px] rounded-[20px]'>
				<Image
					src='/images/pages/pricing/tileBgs/1.svg'
					fill
					alt='bg img'
					className='opacity-75] absolute left-0 top-0 z-[1] h-[188px] overflow-hidden rounded-[20px] '
				/>
				<div className='absolute left-0 top-0 z-[10] flex h-full w-full flex-col items-center gap-4 rounded-[20px] p-6'>
					<div
						className='absolute left-1/2 top-1/2 h-[85.5%] w-full -translate-x-1/2 -translate-y-1/2 rounded-[20px] sm:h-full sm:w-[98%]'
						style={{
							boxShadow: '0px 5px 35px 0px #FC540C59',
						}}
					/>
					<h3 className='text-xl text-[#C2C2C2]'>Network (egress)</h3>
					<h1
						className='bg-clip-text font-gradual text-5xl font-bold text-transparent'
						style={{
							backgroundImage:
								'linear-gradient(70deg, #FC540C 34.41%, rgba(255, 215, 111, 0.72) 93.53%, #38D4E9 118.82%)',
						}}
					>
						$0.15
					</h1>
					<h4>per GB/month</h4>
				</div>
			</div>
			<div className='relative h-[188px] rounded-[20px]'>
				<Image
					src='/images/pages/pricing/tileBgs/3.svg'
					fill
					alt='bg img'
					className='opacity-75] absolute left-0 top-0 z-[1] h-[188px] overflow-hidden rounded-[20px] '
				/>
				<div className='absolute left-0 top-0 z-[10] flex h-full w-full flex-col items-center justify-center rounded-[20px] p-6'>
					<div
						className='absolute left-1/2 top-1/2 h-[85.5%] w-full -translate-x-1/2 -translate-y-1/2 rounded-[20px] sm:h-full sm:w-[98%]'
						style={{
							boxShadow: '0px 4px 35px 0px #FFD76F26',
						}}
					/>
					<h1
						className='bg-clip-text font-gradual text-2xl font-bold text-transparent'
						style={{
							backgroundImage:
								'linear-gradient(72deg, #FC540C -20%, rgba(255, 215, 111, 0.72) 45%, #38D4E9 150%)',
						}}
					>
						Pro Add-ons
					</h1>
				</div>
			</div>
			<div className='relative h-[188px] rounded-[20px]'>
				<Image
					src='/images/pages/pricing/tileBgs/5.svg'
					fill
					alt='bg img'
					className='opacity-75] absolute left-0 top-0 z-[1] h-[188px] overflow-hidden rounded-[20px] '
				/>
				<div className='absolute left-0 top-0 z-[10] flex h-full w-full flex-col items-center gap-4 rounded-[20px] p-6'>
					<div
						className='absolute left-1/2 top-1/2 h-[85.5%] w-full -translate-x-1/2 -translate-y-1/2 rounded-[20px] sm:h-full sm:w-[98%]'
						style={{
							boxShadow: '0px 4px 45px 0px #38D4E926',
						}}
					/>
					<h3 className='text-xl text-[#C2C2C2]'>Compute</h3>
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
						<Information className='ml-1 mt-1' />
					</div>
				</div>
			</div>
			<div className='relative h-[188px] rounded-[20px]'>
				<Image
					src='/images/pages/pricing/tileBgs/2.svg'
					fill
					alt='bg img'
					className='opacity-75] absolute left-0 top-0 z-[1] h-[188px] overflow-hidden rounded-[20px] '
				/>
				<div className='absolute left-0 top-0 z-[10] flex h-full w-full flex-col items-center gap-4 rounded-[20px] p-6'>
					<div
						className='absolute left-1/2 top-1/2 h-[85.5%] w-full -translate-x-1/2 -translate-y-1/2 rounded-[20px] sm:h-full sm:w-[98%]'
						style={{
							boxShadow: '0px 5px 35px 0px #FC540C59',
						}}
					/>
					<h3 className='text-xl text-[#C2C2C2]'>RDS</h3>
					<h1
						className='bg-clip-text font-gradual text-5xl font-bold text-transparent'
						style={{
							backgroundImage:
								'linear-gradient(72deg, #FC540C -20%, rgba(255, 215, 111, 0.72) 45%, #38D4E9 150%)',
						}}
					>
						Custom
					</h1>
					<h4>per instance</h4>
				</div>
			</div>
			<div className='relative h-[188px] rounded-[20px]'>
				<Image
					src='/images/pages/pricing/tileBgs/4.svg'
					fill
					alt='bg img'
					className='opacity-75] absolute left-0 top-0 z-[1] h-[188px] overflow-hidden rounded-[20px] '
				/>
				<div className='absolute left-0 top-0 z-[10] flex h-full w-full flex-col items-center gap-4 rounded-[20px] p-6'>
					<div
						className='absolute left-1/2 top-1/2 h-[85.5%] w-full -translate-x-1/2 -translate-y-1/2 rounded-[20px] sm:h-full sm:w-[98%]'
						style={{
							boxShadow: '0px 4px 35px 0px #FFD76F26',
						}}
					/>
					<h3 className='text-xl text-[#C2C2C2]'>Object storage</h3>
					<h1
						className='bg-clip-text font-gradual text-5xl font-bold text-transparent'
						style={{
							backgroundImage:
								'linear-gradient(72deg, #FC540C -20%, rgba(255, 215, 111, 0.72) 45%, #38D4E9 150%)',
						}}
					>
						$0.15
					</h1>
					<h4>per GB/day</h4>
				</div>
			</div>
			<div className='relative h-[188px] rounded-[20px]'>
				<Image
					src='/images/pages/pricing/tileBgs/6.svg'
					fill
					alt='bg img'
					className='opacity-75] absolute left-0 top-0 z-[1] h-[188px] overflow-hidden rounded-[20px] '
				/>
				<div className='absolute left-0 top-0 z-[10] flex h-full w-full flex-col items-center gap-4 rounded-[20px] p-6'>
					<div
						className='absolute left-1/2 top-1/2 h-[85.5%] w-full -translate-x-1/2 -translate-y-1/2 rounded-[20px] sm:h-full sm:w-[98%]'
						style={{
							boxShadow: '0px 4px 45px 0px #38D4E926',
						}}
					/>
					<h3 className='text-xl text-[#C2C2C2]'>Premium Support</h3>
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
