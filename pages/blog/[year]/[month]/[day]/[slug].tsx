import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { generateReadingTime } from 'lib/helpers'
import { getAllPostSlugs, getPostData, getSortedPosts, Post } from 'lib/blog/posts'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'
import gfm from 'remark-gfm'
import slug from 'rehype-slug'

// @ts-ignore
import toc from 'markdown-toc'
import rehypePrism from '@mapbox/rehype-prism'
import { DISCORD_URL, SITE_URL } from 'lib/constants'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Link from 'next/link'
import clsx from 'clsx'
import { BlogHeader, BlogPrevNext, BlogSidebar, CallToAction } from 'components/sections'
import { LinkedInLogo, Logo, TwitterLogo } from 'components/svgs'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { Pre } from 'components/blog/Pre'
import MastodonLogo from 'components/svgs/MastodonLogo'
import HNLogo from 'components/svgs/HNLogo'
import { trackEvent } from 'lib/posthog'
import { TableOfContents } from '../../../../../components/blog/TableOfContents'

export async function getStaticPaths() {
	const paths = getAllPostSlugs()

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

	const filePath = `${params.year}-${params.month}-${params.day}-${params.slug}`
	const postContent = await getPostData(filePath)
	const readingTime = generateReadingTime(postContent)
	const { data, content } = matter(postContent)

	const mdxPost = await serialize(content, {
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

	if (!mdxPost || !mdxPost.scope) throw new Error('No mdxPost found')

	const relatedPosts = getSortedPosts(6, mdxPost.scope.tags as readonly string[])
		.filter((p) => p.slug != filePath)
		.slice(0, 5)

	const allPosts = getSortedPosts()

	const currentIndex = allPosts
		.map(function (e) {
			return e.slug
		})
		.indexOf(filePath)

	const nextPost = allPosts[currentIndex + 1] ?? null
	const prevPost = allPosts[currentIndex - 1] ?? null

	const options: Intl.DateTimeFormatOptions = {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	}
	const formattedPublishDate = new Date(data.date).toLocaleDateString('en-IN', options)
	const formattedModifiedDate = new Date(data.modified ?? data.date).toLocaleDateString('en-IN', options)

	return {
		props: {
			prevPost,
			nextPost,
			relatedPosts,
			blog: {
				slug: `${params.year}/${params.month}/${params.day}/${params.slug}`,
				content: mdxPost,
				contentTOC,
				...data,
				toc: mdxTOC,
				readingTime,
				date: data.date,
				dateReadable: formattedPublishDate,
				modified: data.modified ?? data.date,
				modifiedReadable: formattedModifiedDate,
			} as Post,
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

		return <Link {...(props as any)} className='my-0 text-body no-underline'></Link>
	},
	pre: (props) => {
		return <Pre {...props} />
	},
	Tweet: (props) => {
		return (
			<div className='flex items-center justify-center [&>*]:w-full [&>*]:max-w-sm lg:[&>*]:max-w-xl'>
				<TwitterTweetEmbed {...props} options={{ width: '100%' }} />
			</div>
		)
	},
	TLDR: (props) => {
		return (
			<div className='mb-24 text-left text-xl'>
				<span className='font-bold text-black dark:text-head'>TLDR;</span>
				<span className='prose-p:!my-2 dark:text-body'>{props.children}</span>
			</div>
		)
	},
	CaptionedImage: (props) => {
		return (
			<div className='relative grid w-full grid-cols-1 justify-items-center'>
				<Image
					src={props.src}
					alt={props.alt}
					width={1000}
					height={1}
					className='overflow-hidden rounded-2xl object-contain'
				/>
				<span className='-mt-6 text-sm text-body'>{props.caption}</span>
			</div>
		)
	},
	blockquote(props) {
		return (
			<blockquote className='border-none bg-[linear-gradient(180deg,_#FC540C_25.63%,_rgba(255,_215,_111,_0.72)_60.67%,_#38D4E9_88.15%)] pl-2 text-left text-2xl font-normal not-italic text-body'>
				<div className='bg-[#E9E9E9] py-1 pl-8 prose-p:!my-0 dark:bg-black'>{props.children}</div>
			</blockquote>
		)
	},
}

interface Props {
	readonly prevPost?: Post
	readonly nextPost?: Post
	readonly relatedPosts: Post[]
	readonly blog: Post
}

export default function BlogPostPage(props: Props) {
	const { basePath } = useRouter()

	return (
		<>
			<NextSeo
				title={`${props.blog.title} | Shuttle`}
				description={props.blog.description}
				openGraph={{
					title: `${props.blog.title} | Shuttle`,
					description: props.blog.description,
					url: `${SITE_URL}blog/${props.blog.slug}`,
					type: 'article',
					article: {
						//
						// TODO: add expiration and modified dates
						// https://github.com/garmeeh/next-seo#article
						publishedTime: props.blog.date,
						modifiedTime: props.blog.modified,
						//
						// TODO: author urls should be internal in future
						// currently we have external links to github profiles
						authors: [props.blog.author_url || ''],
						tags: (props.blog.tags || []).map((cat: string) => {
							return cat
						}),
					},
					images: [
						{
							url: `${SITE_URL}${basePath}/images/blog/${props.blog.thumb}`,
						},
					],
				}}
			/>
			<div className='mx-auto max-w-6xl p-4 sm:p-6 lg:p-8'>
				<div className='grid grid-cols-1 gap-6 gap-y-12 lg:grid-cols-4'>
					{/* Content */}
					<div className='lg:col-span-3'>
						<BlogHeader post={props.blog} />
					</div>
					<div className='hidden lg:block' />
					<div className='lg:col-span-3'>
						{(props.blog.thumb ?? props.blog.cover) && (
							<div className='mb-8 grid grid-cols-1 justify-items-center'>
								<Image
									src={'/images/blog/' + (props.blog.cover ?? props.blog.thumb)}
									alt='Cover image'
									width={810}
									height={424}
									className='w-full rounded-[2rem] object-contain'
								/>
								{props.blog.caption && (
									<span className='mt-2 text-center text-sm text-body'>
										{props.blog.caption}
									</span>
								)}
							</div>
						)}
						<TableOfContents toc={props.blog.contentTOC.json} />

						{props.blog.content && (
							<article
								className={clsx(
									'prose dark:prose-invert',
									'max-w-none overflow-x-hidden',
									'prose-headings:before:block',
									'prose-headings:before:-mt-36',
									'prose-headings:before:pt-36',
									'prose-headings:lg:before:-mt-20',
									'prose-headings:before:lg:pt-20',
									'text-xl text-body prose-h2:text-5xl prose-h3:text-4xl prose-h4:text-3xl prose-h5:text-2xl'
								)}
							>
								<MDXRemote {...props.blog.content} components={mdxComponents} />
							</article>
						)}
						{/* Powered By */}
						<div className='relative mt-11 flex w-full flex-col overflow-hidden rounded-[2rem] bg-[#13292C] p-8 dark:bg-black'>
							<Image
								src='/images/sections/powered-by/bg.png'
								alt=''
								fill
								className='absolute left-0 top-0 z-10'
							/>
							<Image
								src='/images/sections/powered-by/stars.png'
								alt=''
								fill
								className='absolute bottom-0 left-20 z-10'
							/>
							<Logo className='relative z-10 text-white' />
							<span className='relative z-10 mt-5 text-body'>
								This blog post is powered by shuttle - The Rust-native, open source, cloud
								development platform. If you have any questions, or want to provide feedback, join
								our{' '}
								<a
									target='_blank'
									rel='noreferrer'
									className='text-orange'
									href={DISCORD_URL}
									onClick={() => {
										trackEvent(`blog_article_${props.blog.title}_Discord`)
									}}
								>
									Discord server!
								</a>
							</span>
						</div>
						{/* <Socials /> */}
						<div className='mb-20 mt-14 flex items-center space-x-4'>
							<span className='text-head'>Share article</span>
							<a
								href={`https://news.ycombinator.com/submitlink?u=${encodeURIComponent(
									`${SITE_URL}blog/${props.blog.slug}`
								)}&t=${encodeURIComponent(props.blog.title)}`}
								className='flex items-center rounded-xl border border-black/10 bg-black p-3 dark:border-white/10'
								target='_blank'
								rel='noreferrer'
								onClick={() => {
									trackEvent(`blog_article_${props.blog.title}_hackernews`)
								}}
							>
								<HNLogo />
							</a>
							<a
								href={`https://twitter.com/share?text=${encodeURIComponent(
									props.blog.title
								)}&url=${SITE_URL}blog/${props.blog.slug}`}
								className='flex items-center rounded-xl border border border-black/10 bg-black p-3 dark:border-white/10'
								target='_blank'
								rel='noreferrer'
								onClick={() => {
									trackEvent(`blog_article_${props.blog.title}_twitter`)
								}}
							>
								<TwitterLogo />
							</a>
							<a
								href={`https://www.linkedin.com/shareArticle?url=${SITE_URL}blog/${props.blog.slug}&title=${props.blog.title}`}
								className='flex items-center rounded-xl border border border-black/10 bg-black p-3 dark:border-white/10'
								target='_blank'
								rel='noreferrer'
								onClick={() => {
									trackEvent(`blog_article_${props.blog.title}_linkedin`)
								}}
							>
								<LinkedInLogo />
							</a>
							<a
								href='#'
								onClick={(e) => {
									e.preventDefault()

									trackEvent(`blog_article_${props.blog.title}_mastodon`)

									const instance = window.prompt(
										'Enter your Mastodon instance (ex. mastodon.social):'
									)
									if (instance) {
										window.location.href = `https://${instance}/share?text=${encodeURIComponent(
											`${props.blog.title} ${SITE_URL}blog/${props.blog.slug}`
										)}`
									}
								}}
								className='flex items-center rounded-xl border border-black/10 bg-black p-3 dark:border-white/10'
								target='_blank'
								rel='noreferrer'
							>
								<MastodonLogo />
							</a>
						</div>
						<BlogPrevNext prevPost={props.prevPost} nextPost={props.nextPost} />
					</div>
					{/* Sidebar */}
					<BlogSidebar
						tags={props.blog.tags || []}
						relatedPosts={props.relatedPosts || []}
						toc={props.blog.toc}
						mdxComponents={mdxComponents}
					/>
				</div>
			</div>
			<CallToAction />
		</>
	)
}
