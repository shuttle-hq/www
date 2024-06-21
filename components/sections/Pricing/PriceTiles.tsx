import { Information } from 'components/svgs'
import { FC } from 'react'

interface PriceTilesProps {
	header: string
	price: string
	subscript: string
	hasI: boolean
	textGradient: string
}

const PriceTile: FC<PriceTilesProps> = ({ header, price, subscript, hasI, textGradient }) => (
	<div className='flex flex-col items-center justify-around rounded-[20px]'>
		<h3 className='text-center text-3xl font-bold'>{header}</h3>
		<h1 className='text-center text-5xl font-bold'>{price}</h1>
		<div className='text-center text-2xl font-bold'>
			<h3>{subscript}</h3>
			{/* {hasI && <Information>} */}
		</div>
	</div>
)

const PriceTiles = () => (
	<div className='mx-auto mt-24 hidden w-full max-w-7xl grid-cols-3 grid-rows-2 sm:grid'></div>
)

export default PriceTiles
