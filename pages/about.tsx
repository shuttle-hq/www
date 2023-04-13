import { AboutHero, BackedBy, JobOpenings, Mission, WorkingWithUs } from 'components/sections'
import Image from 'next/image'

export default function About() {
	return (
		<main>
			<Image
				src='/images/sections/mission/mission.jpg'
				alt='bg'
				fill
				style={{ objectFit: 'cover', zIndex: -1, top: '50%' }}
				quality={100}
			/>
			<AboutHero />
			<Mission />
			<BackedBy />
			<WorkingWithUs />
			<JobOpenings />
		</main>
	)
}
