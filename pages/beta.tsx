import { Button } from 'components/elements'
import { Page } from 'components/templates'
import Image from 'next/image'
import { ReactNode, useState } from 'react'

export default function Beta() {
	const [formSubmitted, setFormSubmitted] = useState(false)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		setFormSubmitted(true)
	}

	return (
		<div className='group relative flex-grow overflow-hidden'>
			<span className='pointer-events-none'>
				<Image
					src='/images/pages/beta/bg.png'
					alt='bg'
					fill
					className='absolute top-0 left-0 -z-10 h-full w-full bg-[#13292C] object-cover dark:bg-black'
				/>
				<Image
					src='/images/pages/stars.png'
					alt='stars '
					fill
					className='absolute top-0 left-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:translate-x-12 group-hover:translate-y-3 md:block'
				/>
				<Image
					src='/images/pages/stars-2.png'
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
					<p className='mt-4 max-w-xl text-white dark:text-[#7A7A7A] sm:text-xl lg:text-2xl'>
						Sign up to our closed beta and get updated on the next iteration of shuttle, a serverless
						backend framework with the fastest build, test and deploy times ever.
					</p>
				</header>
				{!formSubmitted ? (
					<form
						className='mt-12 w-full max-w-xl flex-col rounded-2xl bg-black/20 p-5 backdrop-blur-lg sm:p-8'
						onSubmit={handleSubmit}
					>
						<h3 className='text-xl text-white dark:text-[#7A7A7A]'>Your email</h3>
						<div className='input-border-gradient relative mt-2 rounded-xl bg-[#13292C] focus-within:bg-[#13292C] hover:bg-[#13292C] dark:bg-black dark:focus-within:bg-black dark:hover:bg-black'>
							<input
								className='w-full rounded-xl bg-transparent py-3 px-4 text-xl text-white outline outline-1 outline-[#7A7A7A] placeholder:text-[#C2C2C2]/50 hover:outline-transparent focus:outline-transparent dark:placeholder:text-[#C2C2C2]/20'
								placeholder='picard@enterprise.com'
								type='email'
								required
							/>
						</div>
						<Button
							type='submit'
							variant='primary'
							className='mt-5 px-6 py-3 text-lg dark:bg-[#D8D8D8]'
						>
							Sign up for beta
						</Button>
					</form>
				) : (
					<div className='mt-12 w-full max-w-xl flex-col rounded-2xl bg-black/20 p-5 backdrop-blur-[15px] sm:p-8'>
						<h3 className='font-gradual text-[2rem] font-bold leading-none text-white'>
							Thank you for signing up!
						</h3>
						<p className='mt-3 text-[#C2C2C2] dark:text-[#7A7A7A]'>
							If you are looking for a way to support shuttle in the meantime, you can do so by:
						</p>
						<div className='mt-8 flex flex-col items-center text-center text-[#C2C2C2] dark:text-[#7A7A7A]'>
							<a
								href='https://github.com/shuttle-hq/shuttle'
								target='_blank'
								rel='noreferrer'
								className='text-lg transition hover:text-white hover:underline'
							>
								💻 contributing to shuttle
							</a>
							<a
								href='https://github.com/shuttle-hq/shuttle'
								target='_blank'
								rel='noreferrer'
								className='text-lg transition hover:text-white hover:underline'
							>
								⭐️ starring the repository
							</a>
							<a
								href='https://discord.gg/shuttle'
								target='_blank'
								rel='noreferrer'
								className='text-lg transition hover:text-white hover:underline'
							>
								👾 joining our discord community
							</a>
							<a
								href='https://twitter.com/shuttle_dev'
								target='_blank'
								rel='noreferrer'
								className='text-lg transition hover:text-white hover:underline'
							>
								🐦 following us on twitter
							</a>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

Beta.getLayout = (children: ReactNode) => <Page disableFooterMargin>{children}</Page>
