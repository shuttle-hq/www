import { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { SITE_URL } from 'lib/constants'
import { GetStaticPropsResult } from 'next'
import { getAllTags, getSortedPosts } from 'lib/blog/posts'
import { FeaturedBlogPost } from 'components/sections'

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
	const allPostsData = getSortedPosts()
	const tags = getAllTags()

	return {
		props: {
			blogs: allPostsData,
			tags,
		},
	}
}

interface Props {
	readonly blogs: ReturnType<typeof getSortedPosts>
	readonly tags: readonly string[]
}

export default function Blog(props: Props): JSX.Element {
	const tags = ['all', ...props.tags]
	const [activeTag, setActiveTag] = useState('all')
	const router = useRouter()

	const [headPost, tailPosts] = useMemo(() => {
		const [head, ...tail] = props.blogs

		return [head, tail]
	}, [props.blogs])

	const blogs = useMemo(() => {
		if (activeTag === 'all') return tailPosts

		return tailPosts.filter((post) => (post.tags || []).includes(activeTag))
	}, [tailPosts, activeTag])

	const meta_title = 'Shuttle Blog'
	const meta_description = 'Get all your shuttle News on the shuttle blog.'

	return (
		<>
			<NextSeo
				title={meta_title}
				description={meta_description}
				openGraph={{
					title: meta_title,
					description: meta_description,
					url: SITE_URL + router.pathname,
					images: [
						{
							url: `${SITE_URL}images/og/og-image.jpg`,
						},
					],
				}}
				additionalLinkTags={[
					{
						rel: 'alternate',
						type: 'application/rss+xml',
						href: `${SITE_URL}rss.xml`,
					},
				]}
			/>

			<FeaturedBlogPost {...headPost} />
		</>
	)
}
