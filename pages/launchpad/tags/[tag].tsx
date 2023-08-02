import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { SITE_URL } from 'lib/constants'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { getAllTags, getSortedPosts } from 'lib/blog/posts'
import { ParsedUrlQuery } from 'querystring'
import LaunchpadIssues from 'components/sections/Launchpad/LaunchpadIssues'

export async function getStaticPaths() {
	const tags = getAllTags()

	const paths = tags.map((tag) => ({
		params: { tag },
	}))

	return {
		paths,
		fallback: false,
	}
}

interface Params extends ParsedUrlQuery {
	readonly tag: string
}

export async function getStaticProps({
	params,
}: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<Props>> {
	const tag = params?.tag !== undefined && params.tag !== 'all' ? params.tag : ''
	const posts = getSortedPosts(0, tag ? [tag] : undefined)

	const tags = getAllTags()

	return {
		props: {
			posts,
			tags,
		},
	}
}

interface Props {
	readonly posts: ReturnType<typeof getSortedPosts>
	readonly tags: string[]
}

export default function Issue(props: Props): JSX.Element {
	const router = useRouter()

	const meta_title = 'Shuttle Launchpad'
	const meta_description = 'Shuttle Launchpad'

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

			<LaunchpadIssues issues={props.posts} />
		</>
	)
}
