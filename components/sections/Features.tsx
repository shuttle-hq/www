import { Compile, Database, Deploy, Free, Open, Skip } from 'components/svgs'
import Image from 'next/image'
import {Button, LoginButton} from "../elements";
import {useUser} from "@auth0/nextjs-auth0/client";

const Features = () => {
	return (
		<div className='mt-28 px-5 sm:mt-32 sm:px-10 lg:mt-36 xl:mt-40' id='features'>
			<div className='mx-auto w-full max-w-[1100px] xl:grid xl:grid-cols-[700px_auto] xl:gap-5'>
				<div className='max-w-[700px] xl:py-10'>
					<h2 className='font-gradual text-5xl font-bold text-black dark:text-[#C2C2C2] lg:text-[3.5rem]'>
						Bring your code, we&apos;ll handle the rest
					</h2>
					<p className='mt-5 text-xl text-[#525151] dark:text-[#7A7A7A] lg:text-2xl'>
						Leave the deployment to us and focus on what matters, writing good code.
					</p>
				</div>
				<div className='group relative hidden bg-[#13292C] text-[#C2C2C2] dark:bg-black dark:text-white xl:block xl:overflow-hidden xl:rounded-4xl'>
					<Image
						src='/images/sections/features/header/bg.png'
						alt='header bg'
						fill
						className='absolute right-0 top-0 h-full object-cover'
					/>
					<Image
						src='/images/sections/features/header/stars.png'
						alt='header stars'
						fill
						className='pointer-events-none absolute right-0 top-0 h-full object-contain transition-transform duration-1000 group-hover:translate-x-8 group-hover:translate-y-3'
					/>
					<Image
						src='/images/sections/features/header/stars-2.png'
						alt='header stars 2'
						fill
						className='pointer-events-none absolute right-0 top-0 h-full object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
					/>
				</div>
			</div>
			<div className='mx-auto mt-16 grid w-full max-w-[1280px] gap-5 lg:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6'>
				<div className='group relative z-10 flex flex-col items-start gap-3 overflow-hidden rounded-4xl bg-[#13292C] p-5 text-[#C2C2C2] dark:bg-black dark:text-white sm:p-8 xl:row-[span_4]'>
					<Image
						src='/images/sections/features/top-left/bg.png'
						alt='top left bg'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-cover'
					/>
					<Image
						src='/images/sections/features/top-left/stars.png'
						alt='top left stars'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
					/>
					<Image
						src='/images/sections/features/top-left/stars-2.png'
						alt='top left stars 2'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-contain transition-transform duration-1000 group-hover:-translate-x-10 group-hover:-translate-y-1'
					/>
					<Skip />
					<h3 className='font-gradual text-2xl font-bold text-[#C2C2C2]'>Rust, made simple</h3>
					<p className='opacity-50'>
						Shuttle makes it easy to connect to databases, has out-of-the-box logging support, abundant
						documentation and supports all major Rust frameworks. Yes, even if you are coming from JS.
					</p>
					<LoginButton variant='primary'>
						Log in
					</LoginButton>
				</div>
				<div className='group relative z-10 flex flex-col items-start gap-3 overflow-hidden rounded-4xl bg-[#13292C] p-5 text-[#C2C2C2] dark:bg-black dark:text-white sm:p-8 xl:row-[span_2]'>
					<Image
						src='/images/sections/features/top-middle/bg.png'
						alt='top middle bg'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-cover'
					/>
					<Image
						src='/images/sections/features/top-middle/stars.png'
						alt='top middle stars'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
					/>
					<Image
						src='/images/sections/features/top-middle/stars-2.png'
						alt='top middle stars 2'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-contain transition-transform duration-1000 group-hover:-translate-x-10 group-hover:-translate-y-1'
					/>
					<h3 className='font-gradual text-2xl font-bold text-[#C2C2C2]'>Vercel for Backends</h3>
					<p className='opacity-50'>Get an entire infrastructure configured without writing any infrastructure config.</p>
					<Compile />
				</div>
				<div className='group relative z-10 flex flex-col items-start gap-3 overflow-hidden rounded-4xl bg-[#13292C] p-5 text-[#C2C2C2] dark:bg-black dark:text-white sm:p-8 xl:row-[span_3] xl:justify-end'>
					<Image
						src='/images/sections/features/top-right/bg.png'
						alt='top right bg'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-cover'
					/>
					<Image
						src='/images/sections/features/top-right/stars.png'
						alt='top right stars'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
					/>
					<Image
						src='/images/sections/features/top-right/stars-2.png'
						alt='top right stars 2'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-contain transition-transform duration-1000 group-hover:-translate-x-10 group-hover:-translate-y-1'
					/>
					<Database />
					<h3 className='font-gradual text-2xl font-bold text-[#C2C2C2]'>No Vendor lock-in</h3>
					<p className='opacity-50'>
						No need to have your app hosted on our servers, you can deploy it to your own cloud or even
						run shuttle in your garage.
					</p>
				</div>
				<div className='group relative z-10 flex flex-col items-start gap-3 overflow-hidden rounded-4xl bg-[#13292C] p-5 text-[#C2C2C2] dark:bg-black dark:text-white sm:p-8 xl:row-[5/7]'>
					<Image
						src='/images/sections/features/bottom-left/bg.png'
						alt='bottom left bg'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-cover'
					/>
					<Image
						src='/images/sections/features/bottom-left/stars.png'
						alt='bottom left stars'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
					/>
					<Image
						src='/images/sections/features/bottom-left/stars-2.png'
						alt='bottom left stars 2'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-contain transition-transform duration-1000 group-hover:-translate-x-10 group-hover:-translate-y-1'
					/>
					<h3 className='font-gradual text-2xl font-bold text-[#C2C2C2]'>
						Everything is Rust, Rust is everything
					</h3>
					<p className='opacity-50'>Get a database by just asking for one in your Rust code.</p>
					<Open />
				</div>
				<div className='group relative z-10 flex flex-col items-start gap-3 overflow-hidden rounded-4xl bg-[#13292C] p-5 text-[#C2C2C2] dark:bg-black dark:text-white sm:p-8 xl:row-[span_4]'>
					<Image
						src='/images/sections/features/bottom-middle/bg.png'
						alt='bottom middle bg'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-cover'
					/>
					<Image
						src='/images/sections/features/bottom-middle/stars.png'
						alt='bottom middle stars'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
					/>
					<Image
						src='/images/sections/features/bottom-middle/stars-2.png'
						alt='bottom middle stars 2'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-contain transition-transform duration-1000 group-hover:-translate-x-10 group-hover:-translate-y-1'
					/>
					<Deploy />
					<h3 className='font-gradual text-2xl font-bold text-[#C2C2C2]'>
						Build fast, redeploy instantly
					</h3>
					<p className='opacity-50'>
						Shuttle always uses the cache from previous builds to give you lightning-speed redeploys.
					</p>
				</div>
				<div className='group relative z-10 flex flex-col items-start gap-3 overflow-hidden rounded-4xl bg-[#13292C] p-5 text-[#C2C2C2] dark:bg-black dark:text-white sm:p-8 xl:row-[span_3]'>
					<Image
						src='/images/sections/features/bottom-right/bg.png'
						alt='bottom right bg'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-cover'
					/>
					<Image
						src='/images/sections/features/bottom-right/stars.png'
						alt='bottom right stars'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
					/>
					<Image
						src='/images/sections/features/bottom-right/stars-2.png'
						alt='bottom right stars 2'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full rounded-4xl object-contain transition-transform duration-1000 group-hover:-translate-x-10 group-hover:-translate-y-1'
					/>
					<h3 className='font-gradual text-2xl font-bold text-[#C2C2C2]'>Forever-free tier</h3>
					<p className='opacity-50'>Unlimited access to essential features, no strings attached.</p>
					<Free />
				</div>
			</div>
		</div>
	)
}

export default Features
