import {
	CommunitySupportedNumbers,
	FeaturedStarters,
	Features,
	GetStarted,
	Hero,
	LogosReferences,
} from 'components/sections'

export default function Home() {
	return (
		<>
			<Hero />
			<GetStarted />
			<LogosReferences />
			<Features />
			<CommunitySupportedNumbers />
			<FeaturedStarters />
		</>
	)
}
