import {
	CallToAction,
	ShuttleHeroesBenefits,
	ShuttleHeroesHero,
	ShuttleHeroesResponsibilities,
} from 'components/sections'

export default function ShuttleHeroes() {
	return (
		<>
			<ShuttleHeroesHero />
			<ShuttleHeroesResponsibilities />
			<ShuttleHeroesBenefits />
			<CallToAction subtext='Become a part of shuttle heroes program!'/>
		</>
	)
}
