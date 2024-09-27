import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface WaitListProps {}

export const Waitlist: FC<WaitListProps> = () => {
	return (
		<div className='mt-8 border-t border-[#FFFFFF33] sm:mt-16 sm:px-10 lg:mt-32 desktop:mt-64'>
			<div className='group relative z-[1] overflow-hidden rounded-[2rem] bg-[#13292C] dark:bg-black'>
				<div className='flex flex-col items-center px-5 py-[100px] md:px-8 desktop:px-20 desktop:pb-40'>
					<h2 className='bg-clip-text text-center font-gradual text-4.5 font-bold leading-none text-[#C2C2C2] lg:text-[3.5rem] desktop:text-[4rem]'>
						The fastest way to build and deploy <br />
						AI-powered appliactions in the cloud.
					</h2>
					<h3 className='mt-8 text-xl text-[#C8C8C8]'>
						Even faster than deploying a “hello world”. Sign up for the waitlist!
					</h3>
					<div className='mt-16 flex flex-col items-center justify-center text-center font-gradual text-lg font-bold sm:flex-row'>
						<Link
							href='https://shuttlerust.typeform.com/shuttle-ai'
							target='_blank'
							className='mt-4 flex h-[56px] cursor-pointer items-center rounded-[14px] bg-[#D8D8D8] px-11 text-lg text-black sm:mt-0'
						>
							Join the waitlist
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
