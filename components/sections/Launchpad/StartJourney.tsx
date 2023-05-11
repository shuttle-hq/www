import Image from 'next/image'

export const Testimonials = () => {
	return (
		<section className='relative mx-auto mb-80 mt-24 flex w-full max-w-6xl flex-col items-center rounded-b-4xl px-5 pb-48 sm:px-10 lg:mt-28'>
			<Image
				src='/images/sections/batch/bg-batch.jpg'
				alt='background'
				fill
				className='absolute left-0 top-0 -z-10 hidden h-full w-full rounded-b-[32px] md:block'
			/>
			<h2 className='text-gradient mt-12 bg-clip-text text-center font-gradual text-[56px] font-bold leading-[150%] text-[#C2C2C2]'>
				Start your journey now
			</h2>
			<p className='mt-8 max-w-2xl text-center text-xl text-[#7A7A7A]'>
				The Shuttle Launchpad is meant to run for multiple issues with no defined end, ensuring you always
				have new material to keep learning, staying up to date with the ever-changing Rust ecosystem.
			</p>

			<form
				action='https://buttondown.email/api/emails/embed-subscribe/guga'
				method='post'
				target='popupwindow'
				className='embeddable-buttondown-form mt-16 text-center'
			>
				<input
					type='email'
					name='email'
					placeholder='Your email'
					className='mr-[18px] h-[56px] w-[423px] rounded-xl border border-slate-700 bg-transparent px-[12px] py-[15px] text-xl font-normal text-[#D8D8D8] placeholder:text-[#D8D8D8]'
				/>
				<input type='hidden' value='1' name='embed' />
				<input
					type='submit'
					value='Subscribe'
					className='h-[56px] w-[154px] rounded-[14px] bg-[#D8D8D8] text-lg text-black'
				/>
			</form>

			<p className='mt-4 text-center text-xl text-[#7A7A7A]'>Join x developers on their journey</p>
		</section>
	)
}
