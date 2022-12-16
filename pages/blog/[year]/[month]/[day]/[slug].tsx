import matter from 'gray-matter'
import { getAuthors } from 'lib/blog/authors'
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
import toc from 'markdown-toc'
import rehypePrism from '@mapbox/rehype-prism'
import { SITE_URL } from 'lib/constants'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Link from 'next/link'
import clsx from 'clsx'
import { BlogPrevNext, BlogSidebar } from 'components/sections'

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
			{/* <Copy code={code}></Copy> */}

			<pre {...props} className={props.className ?? 'language-'}>
				{{
					...children,
					props: {
						...children.props,
						className: children.props.className ?? 'language-',
						children: [
							<span className='mr-4 inline-block w-4 select-none text-right italic text-[rgb(92,99,112)] last:hidden'>
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
												<span className='mr-4 inline-block w-4 select-none text-right italic text-[rgb(92,99,112)] last:hidden'>
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
		if (props.href.match(/^https?:\/\//)) {
			return <a {...props} className='text-brand-orange1 hover:text-brand-orange2 no-underline'></a>
		}

		return (
			<Link {...(props as any)} className='text-brand-orange1 hover:text-brand-orange2 no-underline'></Link>
		)
	},
	pre: (props: any) => {
		return <Pre {...props} />
	},
	TLDR: (props: any) => {
		return (
			<div className='border-brand-orange1 border-l-8 bg-gray-200 p-4 text-left text-xl text-gray-500  dark:bg-gray-800 dark:text-gray-200'>
				<span className='text-md bg-brand-orange1 dark:text-dark-800 rounded px-[10px] py-[2px] font-extrabold  text-slate-100'>
					TLDR
				</span>
				{props.children}
			</div>
		)
	},
	CaptionedImage: (props: any) => {
		return (
			<div className='grid grid-cols-1 justify-items-center'>
				<img src={props.src} alt={props.src}></img>
				<span className='-mt-6 text-sm text-[#828282] dark:text-gray-300'>{props.caption}</span>
			</div>
		)
	},
	// blockquote(props) {
	//   return (
	//     <blockquote className="my-4 border-l-8 border-brand-orange1 bg-gray-200 p-4 text-left text-xl text-gray-500 dark:border-brand-orange2 dark:bg-gray-800 dark:text-gray-200">
	//       {props.children}
	//     </blockquote>
	//   );
	// },
}

interface Props {
	readonly prevPost?: Post
	readonly nextPost?: Post
	readonly relatedPosts: Post[]
	readonly blog: Post
}

export default function BlogPostPage(props: Props) {
	const author = getAuthors(props.blog.author?.split(',') ?? [])

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
						authors: [props.blog.author_url],
						tags: props.blog.tags.map((cat: string) => {
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
				<div className='mb-16 max-w-5xl space-y-8'>
					<div className='space-y-4'>
						<p className='text-brand-900'>Blog post</p>
						<h1 className='text-4xl'>{props.blog.title}</h1>
						<div className='flex space-x-3 text-sm text-slate-500 dark:text-gray-400'>
							<p>{props.blog.date}</p>
							<p>•</p>
							<p>{props.blog.readingTime}</p>
						</div>
						<div className='flex gap-3'>
							{author.map((author, index) => {
								return (
									<div className='mt-6 mb-8 mr-4 w-max lg:mb-0' key={index}>
										<Link
											className={author.author_url ? 'cursor-pointer' : ''}
											href={author.author_url}
										>
											<div className='flex items-center gap-3'>
												{author.author_image_url && (
													<div className='w-10'>
														<Image
															src={author.author_image_url}
															className='rounded-full border'
															width={20}
															height={20}
															alt=''
														/>
													</div>
												)}
												<div className='flex flex-col'>
													<span className='mb-0 text-sm dark:text-gray-200'>
														{author.author}
													</span>
													<span className='mb-0 text-xs text-slate-500 dark:text-gray-400'>
														{author.position}
													</span>
												</div>
											</div>
										</Link>
									</div>
								)
							})}
						</div>
					</div>
				</div>
				<div className='grid gap-6 lg:grid-cols-4'>
					{/* Content */}
					<div className='lg:col-span-3'>
						{(props.blog.thumb ?? props.blog.cover) && (
							<div className='mb-8 grid grid-cols-1 justify-items-center'>
								{/* todo: fix this temporary hack to fix the caption */}
								<img
									className='rounded'
									src={'/images/blog/' + (props.blog.cover ?? props.blog.thumb)}
									alt='Cover image'
								/>
								{/* <Image
									src={'/images/blog/' + (props.blog.cover ?? props.blog.thumb)}
									layout='fill'
									objectFit='contain'
								/> */}
								{props.blog.caption && (
									<span className='mt-2 text-sm text-[#828282] dark:text-gray-300'>
										{props.blog.caption}
									</span>
								)}
							</div>
						)}
						<article
							className={clsx(
								'prose dark:prose-invert',
								'max-w-none overflow-x-hidden',
								'prose-headings:before:block',
								'prose-headings:before:-mt-36',
								'prose-headings:before:pt-36',
								'prose-headings:lg:before:-mt-20',
								'prose-headings:before:lg:pt-20'
							)}
						>
							<MDXRemote {...props.blog.content} components={mdxComponents} />
						</article>
						{/* <div className="mt-16">
              <div className="text-sm dark:text-gray-400">
                Share this article
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <a
                  href={`https://twitter.com/share?text=${props.blog.title}&url=${SITE_URL}blog/${props.blog.slug}`}
                  className="text-slate-600 hover:text-slate-900 dark:text-gray-400 hover:dark:text-gray-200"
                >
                  <FontAwesomeIcon icon={faTwitter} className="text-xl" />
                </a>

                <a
                  href={`https://www.linkedin.com/shareArticle?url=${SITE_URL}blog/${props.blog.slug}&title=${props.blog.title}`}
                  className="text-slate-600 hover:text-slate-900 dark:text-gray-400 hover:dark:text-gray-200"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                </a>
              </div>
            </div> */}

						<BlogPrevNext prevPost={props.prevPost} nextPost={props.nextPost} />
						{/* <Socials /> */}
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
		</>
	)
}
