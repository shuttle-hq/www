import { CallToAction, Pricing, Testimonials } from 'components/sections'
import Plans from 'components/sections/Pricing/Plans'
import LovedBy from 'components/sections/Pricing/LovedBy'
import PriceCards from 'components/sections/Pricing/PriceCards'
import Calculator from 'components/sections/Pricing/Calculator'
import 'react-tooltip/dist/react-tooltip.css'
import IncludedInAllPlans from 'components/sections/Pricing/IncludedInAllPlans'
import StartBuilding from 'components/sections/Pricing/StartBuilding'

export default function PricingPage() {
	return (
		<div>
			<div className='mx-auto mt-24 w-full max-w-7xl px-5 text-center sm:px-10'>
				<h1 className='mb-4 font-gradual text-[64px] font-bold text-head'>Pricing</h1>
				<p className='text-2xl font-thin text-[#C8C8C8]'>This is a subtitle.</p>
			</div>
			<Plans />
			<LovedBy />
			<IncludedInAllPlans />
			<Pricing />
			<PriceCards />
			<Calculator />
			<Testimonials />
			<StartBuilding />
			<CallToAction />
		</div>
	)
}
