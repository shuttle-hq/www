import { Splide, SplideSlide } from '@splidejs/react-splide'
import { F5, Github, Hulu, Meta, MongoDB, Stellar, Uber, UiPath } from 'components/svgs'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
const LovedBy = () => (
	<div className='mx-auto mt-24 flex max-w-7xl flex-col items-center gap-6 overflow-hidden'>
		<h4>Loved by Engineers at</h4>
		<div className='grid w-full grid-cols-4  grid-rows-2 justify-items-center gap-12 border-b-[1px] border-t-[1px] border-[#FFFFFF1A] px-8 py-4 sm:hidden sm:gap-0 sm:px-0 sm:py-0 lg:grid-cols-8 lg:grid-rows-1 lg:border-0'>
			<Uber className='scale-75 text-white sm:scale-100' width={56} />
			<Github className='scale-75 text-white sm:scale-100' width={70} />
			<UiPath className='scale-75 text-white sm:scale-100' width={77} />
			<Meta className='scale-75 text-white sm:scale-100' width={87} />
			<Stellar className='scale-75 text-white sm:scale-100' width={96} />
			<MongoDB className='scale-75 text-white sm:scale-100' width={106} />
			<Hulu className='scale-75 text-white sm:scale-100' width={61} />
			<F5 className='scale-75 text-white sm:scale-100' width={32} />
		</div>
		<Splide
			className='hidden sm:block'
			options={{
				type: 'loop',
				width: '100%',
				arrows: false,
				gap: '90px',
				autoWidth: true,
				fixedWidth: '110px',
				preloadPages: 4,
				autoScroll: {
					speed: 1,
					pauseOnHover: false,
				},
				pagination: false,
			}}
			extensions={{ AutoScroll }}
		>
			<SplideSlide>
				<Uber className='text-white' width={56} />
			</SplideSlide>
			<SplideSlide>
				<Github className='text-white' width={70} />
			</SplideSlide>
			<SplideSlide>
				<UiPath className='text-white' width={77} />
			</SplideSlide>
			<SplideSlide>
				<Meta className='text-white' width={87} />
			</SplideSlide>
			<SplideSlide>
				<Stellar className='text-white' width={96} />
			</SplideSlide>
			<SplideSlide>
				<MongoDB className='text-white' width={106} />
			</SplideSlide>
			<SplideSlide>
				<Hulu className='text-white' width={61} />
			</SplideSlide>
			<SplideSlide>
				<F5 className='text-white' width={32} />
			</SplideSlide>
		</Splide>
	</div>
)

export default LovedBy
