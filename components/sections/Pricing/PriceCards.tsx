import Image from 'next/image'

const PriceCards = () => (
	<div className='mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-28'>
		<div className='grid gap-8 lg:grid-cols-3'>
			<div className='relative h-[188px]'>
				<Image
					src='/images/pages/pricing/tileBgs/1.png'
					fill
					alt='bg img'
					className='absolute left-0 top-0 h-[188px]'
				/>
				<h3>Network (egrees)</h3>
			</div>
			<div className='relative h-[188px]'>
				<Image
					src='/images/pages/pricing/tileBgs/3.png'
					fill
					alt='bg img'
					className='absolute left-0 top-0 h-[188px]'
				/>
				<h3>Network (egrees)</h3>
			</div>
			<div className='relative h-[188px]'>
				<Image
					src='/images/pages/pricing/tileBgs/5.png'
					fill
					alt='bg img'
					className='absolute left-0 top-0 h-[188px]'
				/>
				<div className='z-[5]'>
					<h3>Network (egrees)</h3>
				</div>
			</div>
			<div className='relative h-[188px]'>
				<Image
					src='/images/pages/pricing/tileBgs/2.png'
					fill
					alt='bg img'
					className='absolute left-0 top-0 h-[188px]'
				/>
				<h3>Network (egrees)</h3>
			</div>
			<div className='relative h-[188px]'>
				<Image
					src='/images/pages/pricing/tileBgs/4.png'
					fill
					alt='bg img'
					className='absolute left-0 top-0 h-[188px]'
				/>
				<h3>Network (egrees)</h3>
			</div>
			<div className='relative h-[188px]'>
				<Image
					src='/images/pages/pricing/tileBgs/6.png'
					fill
					alt='bg img'
					className='absolute left-0 top-0 h-[188px]'
				/>
				<h3>Network (egrees)</h3>
			</div>
		</div>
	</div>
)

export default PriceCards
