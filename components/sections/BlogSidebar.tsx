import { Post } from 'lib/blog/posts'
import { MDXRemote, MDXRemoteProps, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Link from 'next/link'
import { FC } from 'react'

interface BlogSidebarProps {
	tags: string[]
	relatedPosts: Post[]
	toc?: MDXRemoteSerializeResult<Record<string, unknown>>
	mdxComponents: MDXRemoteProps['components']
}

const BlogSidebar: FC<BlogSidebarProps> = ({ tags, relatedPosts, toc, mdxComponents }) => {
	return (
		<div className='relative w-full'>
			<div className='w-full space-y-6 lg:sticky lg:top-0'>
				<div className='rounded-3xl border border-black/10 px-6 py-4 dark:border-white/10'>
					<div className='mb-2 dark:text-[#C2C2C2]'>Categories</div>

					<div className='flex flex-wrap gap-2'>
						{(tags || []).map((tag: string) => {
							return (
								<Link
									key={tag}
									className='border-gradient pill relative rounded-full bg-[#E9E9E9] px-2 py-1 text-sm outline outline-1 outline-black/10 transition-all duration-500 duration-500 hover:outline-none hover:after:rounded-full hover:after:bg-gradient-to-r hover:after:from-[#FC540C] hover:after:to-[#FFD76F] dark:bg-black dark:outline-[#1E1B19] dark:hover:text-white'
									href={`/blog/tags/${tag}`}
								>
									{tag}
								</Link>
							)
						})}
					</div>
				</div>
				<div className='rounded-3xl border border-black/10 px-6 py-4 dark:border-white/10'>
					<div className='mb-4 dark:text-gray-200'>On this page</div>
					{toc && (
						<div className='prose prose-toc !mt-0 pl-4 dark:prose-dark-toc'>
							<MDXRemote {...toc} components={mdxComponents} />
						</div>
					)}
				</div>
				{relatedPosts.length > 0 ? (
					<div className='rounded-3xl border border-black/10 px-6 py-4 dark:border-white/10'>
						<div className='mb-4 dark:text-[#C2C2C2]'>Related articles</div>

						<div className='relative flex flex-col gap-2 space-y-3'>
							{relatedPosts.map((post, index) => (
								<Link
									href={`/blog/${post.url}`}
									key={index}
									className='relative left-0 flex gap-2 text-sm text-slate-500 transition-all duration-500 hover:left-1 hover:text-slate-900 dark:text-[#BEBEBE] hover:dark:text-white'
								>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className='flex-shrink-0'
									>
										<path
											d='M7 17H14V15H7V17ZM7 13H17V11H7V13ZM7 9H17V7H7V9ZM5 21C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H19C19.55 3 20.021 3.19567 20.413 3.587C20.8043 3.979 21 4.45 21 5V19C21 19.55 20.8043 20.021 20.413 20.413C20.021 20.8043 19.55 21 19 21H5Z'
											fill='#C2C2C2'
										/>
									</svg>

									<span>{post.title}</span>
								</Link>
							))}
							<div className='mt-2'>
								<Link
									href='/blog/tags/all'
									className='group flex cursor-pointer items-center space-x-2 text-sm text-[#525151] hover:text-black hover:underline dark:text-[#BEBEBE] hover:dark:text-white'
								>
									<span>View all</span>
									<svg
										width='17'
										height='14'
										viewBox='0 0 17 14'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className='relative left-0 text-black transition-all duration-500 group-hover:left-2 dark:text-white'
									>
										<path
											d='M0 7H15M15 7L9.78261 1M15 7L9.78261 13'
											stroke='currentColor'
											strokeWidth='2'
										/>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				) : null}
			</div>
		</div>
	)
}

export default BlogSidebar
