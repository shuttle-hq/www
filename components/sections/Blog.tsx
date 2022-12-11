import { Splide, SplideSlide } from '@splidejs/react-splide'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface BlogProps {
	tags: string[]
}

const Blog: FC<BlogProps> = ({ tags }) => {
	const router = useRouter()

	const activeTag = router.query.tag

	console.log(tags, activeTag)

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
							href={`/blog/${tag}`}
							className={clsx('p-2 lg:hover:pl-4', tag === activeTag && 'pl-4 text-transparent')}
						>
							{tag}
						</Link>
					</SplideSlide>
				))}
				{/* <Link href='#' className='p-2 text-transparent lg:pl-4'>
						all
					</Link> */}

				<SplideSlide className='blog-tab-shadow block lg:transition-all lg:hover:text-white'>
					<Link href='#' className='p-2 lg:hover:pl-4'>
						rust
					</Link>
				</SplideSlide>
				{/* <Link
						href='#'
						className='b-tab-shadow block p-2 lg:transition-all lg:hover:pl-4 lg:hover:text-white'
					>
						rust
					</Link> */}
			</Splide>
			<div className='mt-5 space-y-5 px-5 sm:px-10 lg:-order-1 lg:mt-0 lg:space-y-8 lg:px-0'>
				<BlogPost />
				<BlogPost />
			</div>
		</div>
	)
}

const BlogPost = () => {
	return (
		<div className='group grid gap-4 rounded-[2rem] border border-white border-opacity-10 p-5 transition-all duration-300 hover:shadow-[0px_4px_64px_0px_rgba(252,84,12,0.25)] md:grid-cols-2 md:items-center md:gap-5 md:p-8'>
			<div className='grid gap-4 lg:gap-5'>
				<div className='flex flex-wrap items-center gap-x-4 gap-y-1'>
					<div className='flex items-center gap-2 font-gradual font-bold text-[#C2C2C2]'>
						<img src='./img/user.jpg' className='h-6 w-6 rounded-full' />
						Damien B, CTO
					</div>
					<li className='list-disc'>12 Sep, 2022</li>
				</div>
				<a href='#'>
					<h2 className='font-gradual text-2xl font-bold text-[#C2C2C2] lg:text-[1.75rem] lg:leading-none'>
						Building a Discord bot in Rust
					</h2>
					<a href='#' className='mt-3'>
						Virtual machines and containers have improved backends in a lot of ways, but over time they
						have also created a lot of problems.
					</a>
				</a>
				<div className='flex flex-wrap items-center gap-[0.625rem] text-sm text-[#C2C2C2]'>
					<Link
						href='#'
						className='border-gradient-h relative rounded-full bg-black px-2 py-1 outline outline-1 outline-[#1E1B19] hover:outline-transparent hover:after:rounded-full hover:after:bg-gradient-to-r hover:after:from-[#FC540C] hover:after:to-[#FFD76F]'
					>
						rust
					</Link>
					<Link
						href='#'
						className='border-gradient-h relative rounded-full bg-black px-2 py-1 outline outline-1 outline-[#1E1B19] hover:outline-transparent hover:after:rounded-full hover:after:bg-gradient-to-r hover:after:from-[#FC540C] hover:after:to-[#FFD76F]'
					>
						axum
					</Link>
					<Link
						href='#'
						className='border-gradient-h relative rounded-full bg-black px-2 py-1 outline outline-1 outline-[#1E1B19] hover:outline-transparent hover:after:rounded-full hover:after:bg-gradient-to-r hover:after:from-[#FC540C] hover:after:to-[#FFD76F]'
					>
						sql
					</Link>
					<Link
						href='#'
						className='border-gradient-h relative rounded-full bg-black px-2 py-1 outline outline-1 outline-[#1E1B19] hover:outline-transparent hover:after:rounded-full hover:after:bg-gradient-to-r hover:after:from-[#FC540C] hover:after:to-[#FFD76F]'
					>
						tutorial
					</Link>
					<div className='text-[#7A7A7A]'>3 min read</div>
				</div>
			</div>
			<Link href='#' className='overflow-hidden rounded-[2rem]'>
				<img
					src='./img/blog.jpg'
					className='w-full rounded-[2rem] transition-all duration-300 group-hover:scale-125'
				/>
			</Link>
		</div>
	)
}

export default Blog
