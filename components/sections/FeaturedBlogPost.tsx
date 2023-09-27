import { getAuthors } from 'lib/blog/authors'
import { Post } from 'lib/blog/posts'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

const FeaturedBlogPost: FC<Post> = (post) => {
	const authors = getAuthors(post.author?.split(',') ?? [])
	const [firstAuthor, ...remainingAuthors] = authors

	const [authorImage, setAuthorImage] = useState<string>(firstAuthor?.author_image_url || '/images/logo.png')

	return (
		<div className='mx-auto mt-8 w-full max-w-[1280px] px-5 sm:mt-24 sm:px-10'>
			<div className='group grid gap-4 rounded-[2rem] border border-black/10 p-5 transition-all duration-300 hover:shadow-[0px_4px_88px_0px_rgba(252,84,12,0.25)] dark:border-white/10 md:grid-cols-2 md:items-center md:gap-5 md:p-8'>
				<div className='grid gap-4 lg:gap-6'>
					<div className='flex flex-wrap items-center gap-x-4 gap-y-1'>
						<div className='mr-1 flex items-center gap-2 font-gradual font-bold text-black dark:text-[#C2C2C2]'>
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
						<h2 className='font-gradual text-2xl font-bold text-black dark:text-[#C2C2C2] lg:text-[2.5rem] lg:leading-9'>
							{post.title}
						</h2>
						<p className='mt-3 text-[#525151] dark:text-[#7A7A7A] lg:text-xl'>{post.description}</p>
					</Link>
					<div className='flex flex-wrap items-center gap-[0.625rem] text-sm text-black dark:text-[#C2C2C2]'>
						{post.tags?.map((tag) => (
							<Link
								key={tag}
								href={`/blog/tags/${tag}`}
								className='border-gradient-h relative rounded-full px-2 py-1 outline outline-1 outline-black/10 hover:outline-transparent hover:after:rounded-full hover:after:bg-gradient-to-r hover:after:from-[#FC540C] hover:after:to-[#FFD76F] dark:bg-black dark:outline-[#1E1B19]'
							>
								{tag}
							</Link>
						))}
						<div className='text-[#7A7A7A]'>{post.readingTime}</div>
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
		</div>
	)
}

export default FeaturedBlogPost
