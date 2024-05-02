import { Hero, Testimonials } from 'components/sections'
import CTA from 'components/sections/CTA'
import LaunchSystem from 'components/sections/Home/LaunchSystem'
import LaunchSystemStep1 from 'components/sections/Home/LaunchSystemStep1'
import LaunchSystemStep2 from 'components/sections/Home/LaunchSystemStep2'
import LaunchSystemStep3 from 'components/sections/Home/LaunchSystemStep3'
import LaunchSystemStep4 from 'components/sections/Home/LaunchSystemStep4'
import StartBuilding from 'components/sections/Home/StartBuilding'

export default function Home() {
	return (
		<main className='mx-auto max-w-7xl px-5'>
			<Hero />
			<LaunchSystem />
			<LaunchSystemStep1 />
			{/* <LaunchSystemStep2 />
			<LaunchSystemStep3 />
			<LaunchSystemStep4 /> */}
			<StartBuilding />
			<Testimonials />
			<CTA />
		</main>
	)
}
