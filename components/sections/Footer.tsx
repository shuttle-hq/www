import YCombinator from 'components/svgs/logos/YCombinator'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='mt-28 border-t border-white border-opacity-10'>
			<div className='relative mx-auto max-w-[1328px]'>
				<div className='absolute left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-2xl border border-white/10'>
					<Image src='/images/sections/footer/rocket.gif' alt='rocket' fill />
				</div>
				<div className='divide-y divide-white divide-opacity-10 lg:grid lg:grid-cols-2 lg:divide-y-0 lg:divide-x'>
					<div className='grid grid-cols-2 divide-x divide-white divide-opacity-10 text-xl'>
						<div className='flex flex-col gap-3 px-8 pt-16 pb-8 lg:p-16'>
							<h3 className='font-gradual font-bold text-[#C2C2C2]'>Shuttle</h3>
							<Link href='/' className='transition duration-300 hover:text-[#D8D8D8]'>
								Features
							</Link>
							<Link href='/' className='transition duration-300 hover:text-[#D8D8D8]'>
								Examples
							</Link>
							<Link href='/' className='transition duration-300 hover:text-[#D8D8D8]'>
								Code Snippets
							</Link>
							<Link href='/' className='transition duration-300 hover:text-[#D8D8D8]'>
								Roadmap
							</Link>
						</div>
						<div className='flex flex-col gap-3 px-8 pt-16 pb-8 lg:p-16'>
							<h3 className='font-gradual font-bold text-[#C2C2C2]'>Company</h3>
							<Link href='/' className='transition duration-300 hover:text-[#D8D8D8]'>
								About
							</Link>
							<Link href='/' className='transition duration-300 hover:text-[#D8D8D8]'>
								Careers
							</Link>
						</div>
					</div>
					<div className='grid grid-cols-2 divide-x divide-white divide-opacity-10 text-xl'>
						<div className='flex flex-col gap-3 px-8 pt-16 pb-8 lg:p-16'>
							<h3 className='font-gradual font-bold text-[#C2C2C2]'>Developers</h3>
							<Link href='/' className='transition duration-300 hover:text-[#D8D8D8]'>
								Docs
							</Link>
							<Link href='/' className='transition duration-300 hover:text-[#D8D8D8]'>
								Guides
							</Link>
							<Link href='/' className='transition duration-300 hover:text-[#D8D8D8]'>
								Shuttle Heroes
							</Link>
						</div>
						<div className='flex flex-col gap-3 px-8 pt-16 pb-8 lg:p-16'>
							<h3 className='font-gradual font-bold text-[#C2C2C2]'>Community</h3>
							<Link href='/' className='transition duration-300 hover:text-[#D8D8D8]'>
								GitHub
							</Link>
							<Link href='/' className='transition duration-300 hover:text-[#D8D8D8]'>
								Discord
							</Link>
							<Link href='/' className='transition duration-300 hover:text-[#D8D8D8]'>
								Twitter
							</Link>
							<Link href='/' className='transition duration-300 hover:text-[#D8D8D8]'>
								Linkedin
							</Link>
						</div>
					</div>
				</div>
				<div className='grid grid-cols-2 divide-x divide-white divide-opacity-10 lg:col-span-2'>
					<div className='lg:grid lg:grid-cols-2 lg:divide-x lg:divide-white lg:divide-opacity-10'>
						<p className='px-8 pb-5 lg:px-16 lg:pb-9'>© 2022 shuttle</p>
						<div className='hidden lg:block' />
					</div>
					<div className='lg:grid lg:grid-cols-2 lg:divide-x lg:divide-white lg:divide-opacity-10'>
						<div className='hidden lg:block' />
						<p className='flex flex-wrap items-center gap-4 px-8 pb-5 lg:px-16 lg:pb-9'>
							Backed by
							<YCombinator />
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
