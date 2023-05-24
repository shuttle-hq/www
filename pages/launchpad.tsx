import { Description, Form, Waitlist } from 'components/sections/Launchpad'

export default function Launchpad() {
	return (
		<>
			<Form />
			<Description />
			<Waitlist
				cta='Start your journey now'
				description='The Shuttle Launchpad newsletter is meant to run for multiple issues with no defined end, ensuring you always have new material to keep learning, staying up to date with the ever-changing Rust ecosystem.'
				subDescription='Join hundreds of developers on their journey'
			/>
		</>
	)
}
