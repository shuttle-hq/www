import { ReactNode } from 'react'
import { Button } from 'components/elements'
import { Logo } from 'components/svgs'
import Image from 'next/image'

export default function LoginPage() {
	return (
		<div className='group relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden'>
			<div className='absolute -z-10 h-full w-full bg-black' />
			<Image
				src='/images/pages/login/bg.png'
				alt=''
				width={1440}
				height={629}
				className='absolute bottom-0 w-full object-contain'
			/>
			<Image
				src='/images/pages/stars.png'
				alt='stars'
				fill
				className='absolute top-0 left-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:translate-x-12 group-hover:translate-y-3 md:block'
			/>
			<Image
				src='/images/pages/stars-2.png'
				alt='stars 2'
				fill
				className='absolute top-0 left-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:-translate-x-5 md:block'
			/>
			<Logo className='text-white' />
			<Button variant='secondary' className='mt-16 mb-9'>
				Log in with Github
			</Button>
			<div className='absolute bottom-[-75vh] left-[-9.5%] -z-10 h-[67.37vh] w-[90vw] rotate-[20deg] transform bg-[linear-gradient(62.43deg,_rgba(252,_84,_12,_0.595)_33.67%,_rgba(56,_212,_233,_0.455)_79.8%)] blur-[250px]' />
			<p>By logging in,_you agree to our Terms of service</p>
		</div>
	)
}

LoginPage.getLayout = (children: ReactNode) => <>{children} </>
