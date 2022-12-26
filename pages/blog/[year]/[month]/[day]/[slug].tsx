import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
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
import { CopyButton } from 'components/elements'

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
	const formattedDate = new Date(data.date).toLocaleDateString('en-IN', options)

	return {
		props: {
			prevPost,
			nextPost,
			relatedPosts,
			blog: {
				slug: `${params.year}/${params.month}/${params.day}/${params.slug}`,
				content: mdxPost,
				...data,
				toc: mdxTOC,
				readingTime,
				date: formattedDate,
			} as Post,
		},
	}
}

const Pre = ({ children, ...props }: any) => {
	let line = 1

	const code = React.useMemo(() => {
		return [children.props.children]
			.flat()
			.flatMap((child) => {
				if (typeof child !== 'string') {
					return child.props.children
				} else {
					return child
				}
			})
			.join('')
	}, [children])

	return (
		<div className='relative'>
			<CopyButton code={code} className='absolute right-2 top-2 inline-flex items-center' />
			<pre
				{...props}
				className={clsx(
					'!border !border-black/10 !bg-transparent !pr-16 text-[#525151] dark:!border-white/10 dark:text-[#7A7A7A]',
					props.className ?? 'language-'
				)}
			>
				{{
					...children,
					props: {
						...children.props,
						className: children.props.className ?? 'language-',
						children: [
							<span
								className='mr-4 inline-block w-4 select-none text-right italic text-[rgb(92,99,112)] last:hidden'
								key={line}
							>
								{line}
							</span>,
							...[children.props.children].flat().flatMap((child) => {
								if (typeof child === 'string') {
									const [head, ...tail] = child.split('\n')
									return [
										head,
										...tail.flatMap((child) => {
											line++

											return [
												'\n',
												<span
													key={head}
													className='mr-4 inline-block w-4 select-none text-right italic text-[rgb(92,99,112)] last:hidden'
												>
													{line}
												</span>,
												child,
											]
										}),
									]
								} else {
									return child
								}
							}),
						],
					},
				}}
			</pre>
		</div>
	)
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
	TLDR: (props: any) => {
		return (
			<div className='mb-32 text-left text-xl'>
				<span className='font-bold text-black dark:text-[#C2C2C2]'>TLDR;</span>
				<span className='text-[#525151] prose-p:!my-2 dark:text-[#7A7A7A]'>{props.children}</span>
			</div>
		)
	},
	CaptionedImage: (props: any) => {
		return (
			<div className='grid grid-cols-1 justify-items-center'>
				<img src={props.src} alt={props.src} className='overflow-hidden rounded-2xl'></img>
				<span className='-mt-6 text-sm text-[#828282] dark:text-gray-300'>{props.caption}</span>
			</div>
		)
	},
	blockquote(props) {
		return (
			<blockquote className='border-none bg-[linear-gradient(180deg,_#FC540C_25.63%,_rgba(255,_215,_111,_0.72)_60.67%,_#38D4E9_88.15%)] pl-2 text-left text-2xl font-normal not-italic text-[#525151] dark:text-[#7A7A7A]'>
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
				title={props.blog.title}
				openGraph={{
					title: props.blog.title,
					description: props.blog.description,
					url: `${SITE_URL}blog/${props.blog.slug}`,
					type: 'article',
					article: {
						//
						// TODO: add expiration and modified dates
						// https://github.com/garmeeh/next-seo#article
						publishedTime: props.blog.date,
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
									width={1000}
									height={1000}
									objectFit='contain'
									className='w-full rounded-[2rem]'
								/>
								{props.blog.caption && (
									<span className='mt-2 text-center text-sm text-[#525151] dark:text-[#7A7A7A] dark:text-gray-300'>
										{props.blog.caption}
									</span>
								)}
							</div>
						)}
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
									'text-xl text-[#525151] prose-h2:text-5xl prose-h4:text-3xl prose-h5:text-2xl dark:text-[#7A7A7A]'
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
								className='absolute left-20 bottom-0 z-10'
							/>
							<Logo className='relative z-10 text-white' />
							<span className='relative z-10 mt-5 text-[#FFFFFF8F] dark:text-[#7A7A7A]'>
								This blog post is powered by shuttle - The Rust-native, open source, cloud
								development platform. If you have any questions, or want to provide feedback, join
								our{' '}
								<a target='_blank' rel='noreferrer' className='text-[#FF8A3F]' href={DISCORD_URL}>
									Discord server!
								</a>
							</span>
						</div>
						{/* <Socials /> */}
						<div className='mt-14 mb-20 flex items-center space-x-4'>
							<span className='text-[#525151] dark:text-[#C2C2C2]'>Share article</span>
							<a
								href={`https://twitter.com/share?text=${props.blog.title}&url=${SITE_URL}blog/${props.blog.slug}`}
								className='flex items-center rounded-xl border border border-black/10 bg-black p-3 dark:border-white/10'
							>
								<TwitterLogo />
							</a>
							<a
								href={`https://www.linkedin.com/shareArticle?url=${SITE_URL}blog/${props.blog.slug}&title=${props.blog.title}`}
								className='flex items-center rounded-xl border border border-black/10 bg-black p-3 dark:border-white/10'
							>
								<LinkedInLogo />
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
