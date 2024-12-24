import { Countdown, Description, Testimonials } from 'components/sections/ShuttleBatch'
import { NextSeo } from 'next-seo'

export default function ShuttleHeroes() {
	return (
		<>
			<NextSeo
				title='Privacy Policy | Shuttle'
				description="Learn more about Shuttle's privacy policy."
				openGraph={{
					images: [
						{
							url: 'https://www.shuttle.dev/images/og-image.png',
							width: 3516,
							height: 1432,
							alt: 'Shuttle.dev - Build Backends Fast',
						},
					],
				}}
			/>
			<Countdown />
			<Description />
			<Testimonials />
		</>
	)
}
