const Hero = () => {
	return (
		<div className='relative flex flex-col items-center justify-center px-4 pt-60'>
			<h1 className='w-fit text-center font-gradual text-5xl font-bold text-black dark:text-[#C2C2C2] lg:text-6.5'>
				Instant apps,
				<br />
				<span className=''>
					from a <span className='text-gradient bg-clip-text text-transparent'>single prompt</span>
				</span>
			</h1>
			<p className='mt-8 text-center text-xl text-[#7A7A7A]'>
				Yes, we did it. From prompt to deployed app in under 5 minutes
			</p>

			<form
				action='https://buttondown.email/api/emails/embed-subscribe/shuttle'
				method='post'
				target='popupwindow'
				className='embeddable-buttondown-form mt-10 text-center'
			>
				<input
					type='email'
					name='email'
					placeholder='Your email'
					className='mr-[18px] h-[56px] w-full rounded-xl border border-slate-700 bg-transparent px-[12px] py-[15px] text-xl font-normal text-[#D8D8D8] placeholder:text-[#D8D8D8] sm:w-[412px]'
				/>
				<input type='hidden' value='1' name='embed' />
				<input
					type='submit'
					value='Join the waitlist'
					className='mt-4 h-[56px] w-full rounded-[14px] bg-[#D8D8D8] text-lg text-black sm:mt-0 sm:w-[154px]'
				/>
			</form>
		</div>
	)
}

export default Hero
