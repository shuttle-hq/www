import { Hero } from 'components/sections/ShuttleAI'
import { Waitlist } from 'components/sections/Launchpad'

export default function ShuttleAIPage() {
	return (
		<>
			<Hero />
			<Waitlist
				cta='The fastest way to go from an idea to production.'
				description='Sign up for the waitlist!'
			/>
		</>
	)
}
