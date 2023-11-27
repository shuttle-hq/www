import axios from 'axios'
import ReleaseCard from 'components/sections/ReleaseCard'

export interface Release {
	id: number
	name: string
	tag_name: string
	body: string
	html_url: string
	published_at: string
}

export const getStaticProps = async () => {
	const response = await axios(`https://api.github.com/repos/shuttle-hq/shuttle/releases`)

	return {
		props: {
			releases: response.data,
		},
	}
}

export default function ReleasesPage({ releases }: { releases: Release[] }) {
	return (
		<section className='relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-10 lg:py-28'>
			<h1 className='mb-9 font-atkinson text-5xl font-bold text-[#EDEDED]'>Releases</h1>

			<div className='font-atkinson font-normal'>
				{releases.map((release) => (
					<ReleaseCard key={release.id} release={release} />
				))}
			</div>
		</section>
	)
}
