import { F5, Github, Hulu, Meta, MongoDB, Stellar, Uber, UiPath } from 'components/svgs'

const LovedBy = () => (
	<div className='mx-auto mt-24 flex max-w-7xl flex-col items-center gap-6'>
		<h4>Loved by Engineers at</h4>
		<div className='grid-cols4 grid w-full grid-rows-2 justify-items-center lg:grid-cols-8 lg:grid-rows-1'>
			<Uber className='text-white' width={56} />
			<Github className='text-white' width={70} />
			<UiPath className='text-white' width={77} />
			<Meta className='text-white' width={87} />
			<Stellar className='text-white' width={96} />
			<MongoDB className='text-white' width={106} />
			<Hulu className='text-white' width={61} />
			<F5 className='text-white' width={32} />
		</div>
	</div>
)

export default LovedBy
