import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { generateReadingTime } from 'lib/helpers'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'
import gfm from 'remark-gfm'
import slug from 'rehype-slug'

// @ts-ignore
import toc from 'markdown-toc'
import rehypePrism from '@mapbox/rehype-prism'
import { SITE_URL } from 'lib/constants'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Link from 'next/link'
import clsx from 'clsx'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { Issue, getAllIssueSlugs, getIssueData } from 'lib/launchpad/issues'
import { Pre } from 'components/blog/Pre'

export async function getStaticPaths() {
	const paths = getAllIssueSlugs()

	return {
		paths: paths,
		fallback: false,
	}
}

interface Params extends ParsedUrlQuery {
	readonly year: string
	readonly month: string
	readonly day: string
	readonly slug: string
}

export async function getStaticProps({
	params,
}: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<Props>> {
	if (!params) throw new Error('No params found')

	const filePath = params.slug
	const issueContent = await getIssueData(filePath)
	const readingTime = generateReadingTime(issueContent)
	const { data, content } = matter(issueContent)

	const mdxIssue = await serialize(content, {
		scope: data,
		mdxOptions: {
			remarkPlugins: [gfm],
			rehypePlugins: [slug, rehypePrism],
		},
	})

	const contentTOC = toc(content, {
		maxdepth: data.toc_depth ?? 3,
	})

	const mdxTOC = await serialize(contentTOC.content)

	if (!mdxIssue || !mdxIssue.scope) throw new Error('No mdxIssue found')

	const options: Intl.DateTimeFormatOptions = {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	}
	const formattedDate = new Date(data.date).toLocaleDateString('en-IN', options)

	return {
		props: {
			issue: {
				slug: params.slug,
				content: mdxIssue,
				...data,
				toc: mdxTOC,
				readingTime,
				date: formattedDate,
			} as Issue,
		},
	}
}

const mdxComponents: MDXRemoteProps['components'] = {
	a(props) {
		if (props?.href?.match(/^https?:\/\//)) {
			return (
				<a
					{...props}
					className='relative bg-gradient-to-r from-[#FC540C] to-[#FFD76F] bg-clip-text text-transparent'
				></a>
			)
		}

		return <Link {...(props as any)} className='my-0 no-underline'></Link>
	},
	pre: (props: any) => {
		return <Pre {...props} />
	},
	Tweet: (props: any) => {
		return (
			<div className='flex items-center justify-center [&>*]:w-full [&>*]:max-w-sm lg:[&>*]:max-w-xl'>
				<TwitterTweetEmbed {...props} options={{ width: '100%' }} />
			</div>
		)
	},
	TLDR: (props: any) => {
		return (
			<div className='mb-24 text-left text-xl'>
				<span className='font-bold text-[#C2C2C2]'>TLDR;</span>
				<span className='text-[#BEBEBE] prose-p:!my-2'>{props.children}</span>
			</div>
		)
	},
	CaptionedImage: (props: any) => {
		return (
			<div className='relative grid w-full grid-cols-1 justify-items-center'>
				<Image
					src={props.src}
					alt={props.alt}
					width={1}
					height={1}
					className='overflow-hidden rounded-2xl object-contain'
				></Image>
				<span className='-mt-6 text-sm text-gray-300'>{props.caption}</span>
			</div>
		)
	},
	blockquote(props) {
		return (
			<blockquote className='border-none bg-[linear-gradient(180deg,_#FC540C_25.63%,_rgba(255,_215,_111,_0.72)_60.67%,_#38D4E9_88.15%)] pl-2 text-left text-2xl font-normal not-italic text-[#525151] dark:text-[#BEBEBE]'>
				<div className='bg-[#E9E9E9] py-1 pl-8 prose-p:!my-0 dark:bg-black'>{props.children}</div>
			</blockquote>
		)
	},
}

interface Props {
	readonly issue: Issue
}

export default function IssuePage(props: Props) {
	const { basePath } = useRouter()

	return (
		<>
			<NextSeo
				title={props.issue.title}
				openGraph={{
					title: props.issue.title,
					description: props.issue.description,
					url: `${SITE_URL}launchpad/${props.issue.slug}`,
					type: 'article',
					article: {
						publishedTime: props.issue.date,
						authors: [props.issue.author_url || ''],
						tags: (props.issue.tags || []).map((cat: string) => {
							return cat
						}),
					},
				}}
			/>
			<div className='mx-auto max-w-4xl p-4 sm:p-6 lg:p-8'>
				<Link href='/launchpad/issues'>
					<span className='mb-3'>← See all issues</span>
				</Link>
				<div className='grid grid-cols-1 gap-6 gap-y-12 lg:grid-cols-4'>
					<div className='lg:col-span-3'>
						{props.issue.content && (
							<article
								className={clsx(
									'prose dark:prose-invert',
									'max-w-none overflow-x-hidden',
									'prose-headings:before:block',
									'prose-headings:before:-mt-36',
									'prose-headings:before:pt-36',
									'prose-headings:lg:before:-mt-20',
									'prose-headings:before:lg:pt-20',
									'text-xl text-[#525151] prose-h2:text-5xl prose-h4:text-3xl prose-h5:text-2xl dark:text-[#BEBEBE]'
								)}
							>
								<MDXRemote {...props.issue.content} components={mdxComponents} />
							</article>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
