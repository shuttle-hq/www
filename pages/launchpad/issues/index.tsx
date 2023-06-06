import LaunchpadIssues from 'components/sections/Launchpad/LaunchpadIssues'
import { SITE_URL } from 'lib/constants'
import { getAllTags, getSortedIssues } from 'lib/launchpad/issues'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'

interface Params extends ParsedUrlQuery {
	readonly tag: string
}

export async function getStaticProps({
	params,
}: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<Props>> {
	const tag = params?.tag !== undefined && params.tag !== 'all' ? params.tag : ''
	const issues = getSortedIssues(0, tag ? [tag] : undefined)

	const tags = getAllTags()

	return {
		props: {
			issues,
			tags,
		},
	}
}

interface Props {
	readonly issues: ReturnType<typeof getSortedIssues>
	readonly tags: string[]
}

function Issues(props: Props) {
	const { issues, tags } = props

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

			<LaunchpadIssues tags={tags} issues={issues} />
		</>
	)
}

export default Issues
