import { Button } from 'components/elements'
import { GithubLogo, Hamburger, Logo } from 'components/svgs'
import Link from 'next/link'

const Navigation = () => {
	return (
		<nav className='mx-auto flex h-[5.5rem] max-w-[1344px] items-center px-5 sm:px-10'>
			<a href='#'>
				<Logo />
			</a>
			<div className='absolute left-0 top-[4.375rem] z-10 hidden h-[calc(100vh-4.375rem)] w-full overflow-y-auto bg-black p-5 sm:px-10 lg:static lg:ml-10 lg:flex lg:h-auto lg:items-center lg:overflow-y-visible lg:p-0'>
				<div className='flex flex-col gap-4 lg:flex-row lg:gap-8'>
					<Link href='/blog'>Blog</Link>
					<Link href='/pricing'>Pricing</Link>
					<Link href='/docs'>Docs</Link>
					<Link href='/beta'>Beta</Link>
					<Link href='/shuttle-heros'>Shuttle Heroes</Link>
				</div>
			</div>
			<div className='flex items-center gap-5'>
				<div className='mt-10 flex items-center gap-5 lg:mt-0'>
					<Button variant='secondary'>Join Discord</Button>
					<Button variant='primary' className=''>
						<GithubLogo />
						Log in
					</Button>
				</div>
			</div>
			<button className='ml-auto text-[#D8D8D8] lg:hidden'>
				<Hamburger />
			</button>
		</nav>
	)
}

export default Navigation
