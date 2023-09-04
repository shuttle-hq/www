import { F5, Github, Hulu, Meta, MongoDB, Stellar, Uber, UiPath } from 'components/svgs'

const LovedBy = () => (
	<div className='mx-auto mt-24 flex max-w-7xl flex-col items-center gap-6'>
		<h4>Loved by Engineers at</h4>
		<div className='grid w-full grid-cols-4 grid-rows-2 justify-items-center gap-12 border-b-[1px] border-t-[1px] border-[#FFFFFF1A] px-8 py-4 sm:gap-0 sm:px-0 sm:py-0 lg:grid-cols-8 lg:grid-rows-1 lg:border-0'>
			<Uber className='scale-75 text-white sm:scale-100' width={56} />
			<Github className='scale-75 text-white sm:scale-100' width={70} />
			<UiPath className='scale-75 text-white sm:scale-100' width={77} />
			<Meta className='scale-75 text-white sm:scale-100' width={87} />
			<Stellar className='scale-75 text-white sm:scale-100' width={96} />
			<MongoDB className='scale-75 text-white sm:scale-100' width={106} />
			<Hulu className='scale-75 text-white sm:scale-100' width={61} />
			<F5 className='scale-75 text-white sm:scale-100' width={32} />
		</div>
	</div>
)

export default LovedBy
