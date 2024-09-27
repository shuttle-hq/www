import { Hero, Testimonials } from 'components/sections'
import CTA from 'components/sections/CTA'
import LaunchSystem from 'components/sections/Home/LaunchSystem'

import StartBuilding from 'components/sections/Home/StartBuilding'

export default function Home() {
	return (
		<main className='mx-auto max-w-7xl px-5'>
			<Hero />
			<LaunchSystem />
			
			<StartBuilding />
			<Testimonials />
			<CTA />
		</main>
	)
}
