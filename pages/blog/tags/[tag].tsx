import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { SITE_URL } from 'lib/constants'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { getAllTags, getSortedPosts } from 'lib/blog/posts'
import { Blog, FeaturedBlogPost } from 'components/sections'
import { ParsedUrlQuery } from 'querystring'

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

export default function BlogPage(props: Props): JSX.Element {
	const tags = props.tags
	const router = useRouter()

	const [headPost, ...tailPosts] = props.posts

	const meta_title = 'Shuttle Blog'
	const meta_description =
		'Dive into the Shuttle blog for insights on Rust programming, tutorials, web development tips, and exclusive thought leadership articles.'

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
			<Blog tags={tags} posts={tailPosts} />
		</>
	)
}
