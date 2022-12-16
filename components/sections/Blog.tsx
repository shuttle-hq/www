import { Splide, SplideSlide } from '@splidejs/react-splide'
import clsx from 'clsx'
import { getAuthors } from 'lib/blog/authors'
import { Post } from 'lib/blog/posts'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'

interface BlogProps {
	tags: string[]
	posts: Post[]
}

const Blog: FC<BlogProps> = ({ tags, posts }) => {
	const router = useRouter()

	const activeTag = router.query.tag

	return (
		<div className='mt-16 w-full lg:mx-auto lg:mt-20 lg:grid lg:max-w-7xl lg:grid-cols-[1fr_200px] lg:gap-7 lg:px-10'>
			<Splide
				options={{
					pagination: false,
					autoWidth: true,
					arrows: false,
					gap: '0.5rem',
					padding: '1.25rem',
					mediaQuery: 'min',
					breakpoints: {
						1024: {
							destroy: true,
						},
					},
				}}
				className='splide border-y border-white border-opacity-10 py-2 lg:border-0'
			>
				{tags.map((tag) => (
					<SplideSlide
						className={clsx(
							tag === activeTag
								? 'block bg-gradient-to-r from-[#FC540C] to-[#FFD76F] bg-clip-text lg:w-max'
								: 'blog-tab-shadow block lg:transition-all lg:hover:text-white'
						)}
						key={tag}
					>
						<Link
							href={`/blog/tags/${tag}`}
							className={clsx('p-2 lg:hover:pl-4', tag === activeTag && 'pl-4 text-transparent')}
						>
							{tag}
						</Link>
					</SplideSlide>
				))}
			</Splide>
			<div className='mt-5 space-y-5 px-5 sm:px-10 lg:-order-1 lg:mt-0 lg:space-y-8 lg:px-0'>
				{posts.map((post) => (
					<BlogPost key={post.slug} {...post} />
				))}
			</div>
		</div>
	)
}

const BlogPost: FC<Post> = (post) => {
	const authors = getAuthors(post.author?.split(',') ?? [])
	const [firstAuthor, ...remainingAuthors] = authors

	const [authorImage, setAuthorImage] = useState<string>(firstAuthor?.author_image_url || '/images/logo.png')

	return (
		<div className='group grid gap-4 rounded-[2rem] border border-black/10 p-5 transition-all duration-300 hover:shadow-[0px_4px_64px_0px_rgba(252,84,12,0.25)] dark:border-white/10 md:grid-cols-2 md:items-center md:gap-5 md:p-8'>
			<div className='grid gap-4 lg:gap-5'>
				<div className='flex flex-wrap items-center gap-x-4 gap-y-1'>
					<div className='flex items-center gap-2 font-gradual font-bold dark:text-[#C2C2C2]'>
						<Image
							src={authorImage}
							onError={() => setAuthorImage('/images/logo.png')}
							alt={`${firstAuthor?.author} avatar`}
							width={24}
							height={24}
							className={authorImage !== '/images/logo.png' ? 'rounded-full' : ''}
						/>
						{firstAuthor?.author || 'Shuttle'}
						{firstAuthor?.position ? ` - ${firstAuthor.position}` : ''}
					</div>
					<li className='list-disc text-[#7A7A7A]'>{post.date}</li>
				</div>
				<Link href={`/blog/${post.url}`}>
					<h2 className='font-gradual text-2xl font-bold text-black dark:text-[#C2C2C2] lg:text-[1.75rem] lg:leading-9'>
						{post.title}
					</h2>
					<p className='mt-3 text-[#525151] dark:text-[#7A7A7A]'>{post.description}</p>
				</Link>
				<div className='flex flex-wrap items-center gap-[0.625rem] text-sm text-black dark:text-[#C2C2C2]'>
					{(post?.tags || []).map((tag) => (
						<Link
							key={tag}
							href={`/blog/tags/${tag}`}
							className='border-gradient-h relative rounded-full px-2 py-1 outline outline-1 outline-black/10 hover:outline-transparent hover:after:rounded-full hover:after:bg-gradient-to-r hover:after:from-[#FC540C] hover:after:to-[#FFD76F] dark:bg-black dark:outline-[#1E1B19]'
						>
							{tag}
						</Link>
					))}

					<div className='text-[#7A7A7A]'>3 min read</div>
				</div>
			</div>
			<Link href={`/blog/${post.url}`} className='relative h-full overflow-hidden rounded-[2rem]'>
				<Image
					src={`/images/blog/` + post.thumb}
					alt={post.title}
					fill
					className='rounded-[2rem] object-contain transition-all duration-300 group-hover:scale-125'
				/>
			</Link>
		</div>
	)
}

export default Blog
