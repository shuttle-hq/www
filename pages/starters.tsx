import { Starter } from 'components/elements'
import { CallToAction } from 'components/sections'
import { Paperclip } from 'components/svgs'

export default function StartersPage() {
	return (
		<>
			<div className='mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-28'>
				<header className='max-w-2xl'>
					<h1 className='w-fit font-gradual text-5xl font-bold dark:text-[#C2C2C2] lg:text-6.5'>
						Learn with Shuttle
					</h1>
					<p className='mt-4 sm:text-xl lg:text-2xl'>
						Shuttle is an open-source serverless platform written 100% in Rust, which treats your apps
						as plugins, not containers.
					</p>
				</header>
				<div className='mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4'>
					<Starter
						icon={<Paperclip className='mb-auto' />}
						title='Build a Discord bot'
						description='Custom functionality for Discord server using a bot written in Rust.'
						bg='/images/sections/featured-starters/3-bg.png'
						bgClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover'
						stars='/images/sections/featured-starters/3-stars.png'
						starsClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
						stars2='/images/sections/featured-starters/3-stars-2.png'
						stars2ClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
						deployLink='https://www.shuttle.rs/blog/2022/09/14/serentity-discord-bot'
					/>
					<Starter
						icon={<Paperclip className='mb-auto' />}
						title='URL Shortener'
						description='Get a shuttle relational database and build a URL shortener service.'
						bg='/images/sections/featured-starters/3-bg.png'
						bgClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover'
						stars='/images/sections/featured-starters/3-stars.png'
						starsClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
						stars2='/images/sections/featured-starters/3-stars-2.png'
						stars2ClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
						deployLink='https://github.com/shuttle-hq/examples/tree/main/rocket/url-shortener'
					/>
					<Starter
						icon={<Paperclip className='mb-auto' />}
						title='Deploy a full-stack app with JS & Rust'
						description='Build a React SPA with a backend and deploy it to Shuttle.'
						bg='/images/sections/featured-starters/3-bg.png'
						bgClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover'
						stars='/images/sections/featured-starters/3-stars.png'
						starsClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
						stars2='/images/sections/featured-starters/3-stars-2.png'
						stars2ClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
						deployLink='https://joshmo.hashnode.dev/deploying-a-nextjs-front-end-with-a-rust-api-in-one-go'
					/>
					<Starter
						icon={<Paperclip className='mb-auto' />}
						title='Calendar'
						description='Build a CLI tool for scheduling events.'
						bg='/images/sections/featured-starters/3-bg.png'
						bgClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover'
						stars='/images/sections/featured-starters/3-stars.png'
						starsClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
						stars2='/images/sections/featured-starters/3-stars-2.png'
						stars2ClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
						deployLink='https://endler.dev/2022/zerocal/'
					/>
					{/* <Starter
						icon={<Paperclip className='mb-auto' />}
						title='Url shortener'
						description='Custom functionality for Discord server using a bot written in Rust.'
						bg='/images/sections/featured-starters/3-bg.png'
						bgClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover'
						stars='/images/sections/featured-starters/3-stars.png'
						starsClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
						stars2='/images/sections/featured-starters/3-stars-2.png'
						stars2ClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
						deployLink='#'
					/>
					<Starter
						icon={<Paperclip className='mb-auto' />}
						title='Url shortener'
						description='Custom functionality for Discord server using a bot written in Rust.'
						bg='/images/sections/featured-starters/3-bg.png'
						bgClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover'
						stars='/images/sections/featured-starters/3-stars.png'
						starsClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
						stars2='/images/sections/featured-starters/3-stars-2.png'
						stars2ClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
						deployLink='#'
					/>
					<Starter
						icon={<Paperclip className='mb-auto' />}
						title='Url shortener'
						description='Custom functionality for Discord server using a bot written in Rust.'
						bg='/images/sections/featured-starters/3-bg.png'
						bgClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover'
						stars='/images/sections/featured-starters/3-stars.png'
						starsClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
						stars2='/images/sections/featured-starters/3-stars-2.png'
						stars2ClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
						deployLink='#'
					/>
					<Starter
						icon={<Paperclip className='mb-auto' />}
						title='Url shortener'
						description='Custom functionality for Discord server using a bot written in Rust.'
						bg='/images/sections/featured-starters/3-bg.png'
						bgClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover'
						stars='/images/sections/featured-starters/3-stars.png'
						starsClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
						stars2='/images/sections/featured-starters/3-stars-2.png'
						stars2ClassName='pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
						deployLink='#'
					/> */}
				</div>
			</div>

			<CallToAction />
		</>
	)
}
