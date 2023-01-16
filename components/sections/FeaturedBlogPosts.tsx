import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { Grid } from '@splidejs/splide-extension-grid'
import { Button } from 'components/elements'
import { getAuthors } from 'lib/blog/authors'
import { Post } from 'lib/blog/posts'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

interface FeaturedBlogPostsProps {
	posts: Post[]
}

const FeaturedBlogPosts: FC<FeaturedBlogPostsProps> = ({ posts = [] }) => {
	return (
		<div className='mt-24 overflow-hidden lg:mt-32 desktop:mt-40'>
			<div className='mx-auto w-full max-w-[1000px] px-5 sm:px-10'>
				<h2 className='font-gradual text-5xl font-bold text-black dark:text-[#C2C2C2] lg:text-[3.5rem]'>
					What’s new
				</h2>
				<p className='mt-5 text-xl text-[#525151] dark:text-white/40 lg:text-2xl'>
					Read about Rust, Shuttle and development in general
				</p>
			</div>
			<Splide
				options={{
					pagination: false,
					arrows: false,
					perPage: 1,
					gap: '1rem',
					padding: '1.25rem',
					mediaQuery: 'min',
					breakpoints: {
						640: {
							fixedWidth: '380px',
							padding: '2.5rem',
						},
						1024: {
							fixedWidth: 0,
							padding: 0,
							grid: {
								cols: 3,
								rows: 1,
								gap: {
									col: '1.25rem',
								},
							},
						},
					},
				}}
				extensions={{ Grid }}
				hasTrack={false}
				className='mt-10 lg:mx-auto lg:mt-14 lg:w-full lg:max-w-7xl lg:px-10 desktop:mt-16'
			>
				<SplideTrack className='!overflow-visible'>
					{posts.map((post, index) => (
						<Article
							key={post?.slug || index}
							post={post}
							className={index === 0 ? 'lg:pt-10' : index === 1 ? 'lg:pt-5' : ''}
						/>
					))}
				</SplideTrack>
			</Splide>
			<div className='mt-12 flex justify-center'>
				<Button variant='secondary' invertOnDark href='/blog/tags/all'>
					See all articles
				</Button>
			</div>
		</div>
	)
}

interface ArticleProps {
	post: Post
	className?: string
}

const Article: FC<ArticleProps> = ({ post, className }) => {
	const authors = getAuthors(post.author?.split(',') ?? [])
	const [firstAuthor, ...remainingAuthors] = authors

	const [authorImage, setAuthorImage] = useState<string>(firstAuthor?.author_image_url || '/images/logo.png')

	return (
		<SplideSlide className={className}>
			<Link
				href={`/blog/${post.url}`}
				className='group block rounded-2.5xl bg-[#13292C] transition duration-500 hover:shadow-[0px_4px_64px_0px_rgba(252,84,12,0.25)] dark:border dark:border-[#1E1B19] dark:bg-black'
			>
				<div className='relative aspect-[381/214] w-full overflow-hidden rounded-t-2.5xl'>
					<Image
						src={`/images/blog/` + post.thumb}
						fill
						alt='article image'
						className='w-full transition-all duration-500 group-hover:scale-125'
					/>
				</div>

				<div className='p-6'>
					<h1 className='font-gradual text-xl font-bold text-white'>{post.title}</h1>
					<p className='mt-3 text-white/50'>{post.description}</p>
					<div className='mt-6 flex items-center gap-2.5'>
						<Image
							src={authorImage}
							onError={() => setAuthorImage('/images/logo.png')}
							alt={`${firstAuthor?.author} avatar`}
							width={40}
							height={40}
							className={authorImage !== '/images/logo.png' ? 'rounded-full' : ''}
						/>
						<div>
							<h3 className='font-gradual font-bold text-[#C2C2C2]'>
								{firstAuthor?.author || 'Shuttle'}
								{firstAuthor?.position ? ` - ${firstAuthor.position}` : ''}
							</h3>
							<p className='mt-1 text-sm text-white/50'>
								{post.date} • {post.readingTime}
							</p>
						</div>
					</div>
				</div>
			</Link>
		</SplideSlide>
	)
}

export default FeaturedBlogPosts
