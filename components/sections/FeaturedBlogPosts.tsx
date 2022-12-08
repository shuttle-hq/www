import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Grid } from '@splidejs/splide-extension-grid'
import { Button } from 'components/elements'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const FeaturedBlogPosts = () => {
	return (
		<div className='mt-24 lg:mt-32 desktop:mt-40'>
			<div className='mx-auto w-full max-w-[1000px] px-5 sm:px-10'>
				<h2 className='font-gradual text-5xl font-bold text-[#C2C2C2] lg:text-[3.5rem]'>What’s new</h2>
				<p className='mt-5 text-xl lg:text-2xl'>Read about Rust, Shuttle and development in general</p>
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
				className='mt-10 lg:mx-auto lg:mt-14 lg:w-full lg:max-w-7xl lg:px-10 desktop:mt-16'
			>
				<Article
					image='/images/sections/featured-blog-posts/article.jpg'
					title="It's time to rethink how we use virtualization in backends"
					description='Virtual machines and containers have improved backends in a lot of ways, but over time they have also created a lot of problems.'
					profilePicture='/images/sections/user.jpg'
					author='Ben'
					className='lg:pt-10'
				/>
				<Article
					image='/images/sections/featured-blog-posts/article-2.png'
					title='Building an authentication system in Rust using session tokens'
					description='Virtual machines and containers have improved backends in a lot of ways, but over time they have also created a lot of problems.'
					profilePicture='/images/sections/user.jpg'
					author='Ben'
					className='lg:pt-5'
				/>
				<Article
					image='/images/sections/featured-blog-posts/article-3.png'
					title="More than you've ever wanted to know about errors in Rust"
					description='Virtual machines and containers have improved backends in a lot of ways, but over time they have also created a lot of problems.'
					profilePicture='/images/sections/user.jpg'
					author='Ben'
				/>
			</Splide>
			<div className='mt-12 flex justify-center'>
				<Button variant='secondary'>See all articles</Button>
			</div>
		</div>
	)
}

interface ArticleProps {
	image: string
	title: string
	description: string
	profilePicture: string
	author: string
	className?: string
}

const Article: FC<ArticleProps> = ({ image, title, description, profilePicture, author, className }) => {
	return (
		<SplideSlide className={className}>
			<Link href='#' className='o-h-shadow block rounded-[2rem] border border-[#1E1B19]'>
				<Image
					src={image}
					width={381}
					height={214}
					alt='article image'
					className='w-full rounded-t-[2rem]'
				/>
				<div className='p-6'>
					<h1 className='font-gradual text-xl font-bold text-white'>{title}</h1>
					<p className='mt-3'>{description}</p>
					<div className='mt-6 flex items-center gap-2'>
						<Image
							src={profilePicture}
							alt={`${author} image`}
							width={40}
							height={40}
							className='h-10 w-10 flex-shrink-0 rounded-full object-cover'
						/>
						<div>
							<h3 className='font-gradual font-bold text-white'>{author}</h3>
							<p className='mt-1 text-sm'>12 Sep, 2022 • 3 min read</p>
						</div>
					</div>
				</div>
			</Link>
		</SplideSlide>
	)
}

export default FeaturedBlogPosts
