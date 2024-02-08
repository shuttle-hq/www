import LaunchpadIssues from 'components/sections/Launchpad/LaunchpadIssues'
import { SITE_URL } from 'lib/constants'
import { getSortedIssues } from 'lib/launchpad/issues'
import { GetStaticPropsResult } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React from 'react'

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
	const issues = getSortedIssues()

	return {
		props: {
			issues,
		},
	}
}

interface Props {
	readonly issues: ReturnType<typeof getSortedIssues>
}

function Issues(props: Props) {
	const { issues } = props

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

			<LaunchpadIssues issues={issues} />
		</>
	)
}

export default Issues
