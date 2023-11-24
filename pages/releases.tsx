import axios from 'axios'
import ReleaseCard from 'components/sections/ReleaseCard'
import { Page } from 'components/templates'
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'

export interface Release {
	id: number
	name: string
	tag_name: string
	body: string
	html_url: string
	published_at: string
}

export default function ReleasesPage() {
	const [releases, setReleases] = useState<Release[]>([])
	const [hasMore, setHasMore] = useState(true)
	const [page, setPage] = useState(1)

	const observer = useRef<IntersectionObserver | null>(null)

	const lastItemRef = useCallback(
		(node: HTMLDivElement) => {
			if (observer.current) observer.current.disconnect()

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPage((prevPage) => prevPage + 1)
				}
			})
			if (node) observer.current.observe(node)
		},
		[hasMore]
	)

	const loadItems = useCallback(async () => {
		if (!hasMore) return

		const newReleases: Release[] = await fetchMarkdownPosts(page)

		setReleases((releases) => [...releases, ...newReleases])
		setHasMore(newReleases.length > 0)
	}, [hasMore, page])

	const fetchMarkdownPosts = async (page: number): Promise<Release[]> => {
		try {
			const response = await axios(
				`https://api.github.com/repos/shuttle-hq/shuttle/releases?page=${page}&per_page=5`
			)
			return response.data
		} catch (error) {
			return []
		}
	}

	useEffect(() => {
		loadItems()
	}, [loadItems])

	return (
		<section className='relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-10 lg:py-28'>
			<h1 className='font-atkinson mb-9 text-5xl font-bold text-[#EDEDED]'>Releases</h1>

			<div className='font-atkinson font-normal'>
				{releases.map((release, idx) => (
					<ReleaseCard
						key={release.id}
						idx={idx}
						release={release}
						releaseCount={releases.length}
						lastItemRef={lastItemRef}
					/>
				))}
				{hasMore && <div>Loading...</div>}
			</div>
		</section>
	)
}

