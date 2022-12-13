import { Button } from 'components/elements'
import { Page } from 'components/templates'
import Image from 'next/image'
import { ReactNode } from 'react'

export default function Beta() {
	return (
		<div className='group relative flex-grow overflow-hidden'>
			<span className='pointer-events-none'>
				<Image
					src='/images/pages/beta/bg.png'
					alt='bg'
					fill
					className='absolute top-0 left-0 -z-10 h-full w-full object-cover'
				/>
				<Image
					src='/images/pages/beta/stars.png'
					alt='stars '
					fill
					className='absolute top-0 left-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:translate-x-12 group-hover:translate-y-3 md:block'
				/>
				<Image
					src='/images/pages/beta/stars-2.png'
					alt='stars 2'
					fill
					className='absolute top-0 left-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:-translate-x-5 md:block'
				/>
				<Image
					src='/images/pages/beta/earth.png'
					alt='earth'
					fill
					className='absolute top-0 left-0 -z-10 hidden h-full w-full object-contain md:block'
				/>
			</span>
			<div className='mx-auto w-full max-w-7xl py-24 px-5 sm:px-10 lg:py-28'>
				<header>
					<h1 className='w-fit font-gradual text-5xl font-bold text-[#C2C2C2] lg:text-6.5'>
						<span className='text-gradient block bg-clip-text text-transparent'>Build Backends.</span>
						Fast.
					</h1>
					<p className='mt-4 max-w-xl sm:text-xl lg:text-2xl'>
						Sign up to our closed beta and get updated on the next iteration of shuttle, a serverless
						backend framework with the fastest build, test and deploy times ever.
					</p>
				</header>
				<form className='mt-12 w-full max-w-xl flex-col rounded-2xl bg-black/20 p-5 backdrop-blur-[15px] sm:p-8'>
					<h3 className='text-xl'>Your email</h3>
					<div className='input-border-gradient relative mt-2 rounded-xl bg-black focus-within:bg-black hover:bg-black'>
						<input
							className='w-full rounded-xl bg-transparent py-3 px-4 text-xl text-white outline outline-1 outline-[#7A7A7A] placeholder:text-[#C2C2C2]/20 hover:outline-transparent focus:outline-transparent'
							placeholder='picard@enterprise.com'
							type='email'
							required
						/>
					</div>
					<Button variant='primary' className='mt-5 bg-[#D8D8D8] px-6 py-3 text-lg'>
						Sign up for beta
					</Button>
				</form>
			</div>
		</div>
	)
}

Beta.getLayout = (children: ReactNode) => <Page disableFooterMargin>{children}</Page>
