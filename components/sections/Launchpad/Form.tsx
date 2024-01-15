import { trackEvent } from 'lib/posthog'

export const Form = () => {
	return (
		<section className='mx-auto mt-24 w-full max-w-5xl items-center px-5 sm:px-10 lg:mt-28'>
			<h2 className='text-gradient mt-12 bg-clip-text text-center font-gradual text-[56px] font-bold leading-[150%] text-head'>
				Embark on your Rust learning journey with{' '}
				<span className='text-transparent'>Shuttle Launchpad</span>
			</h2>
			<p className='mt-8 text-center text-xl text-body'>
				Master Rust easily with our engaging, tutorial-style lessons and real-world examples in our
				Launchpad newsletter.
			</p>

			<form
				action='https://buttondown.email/api/emails/embed-subscribe/shuttle'
				method='post'
				target='popupwindow'
				className='embeddable-buttondown-form mt-28 text-center'
			>
				<input
					type='email'
					name='email'
					placeholder='Your email'
					className='mr-[18px] h-[56px] w-full rounded-xl border border-slate-700 bg-transparent px-[12px] py-[15px] text-xl font-normal text-head placeholder:text-head sm:w-[412px]'
				/>
				<input type='hidden' value='1' name='embed' />
				<input
					type='submit'
					value='Subscribe'
					className='mt-4 h-[56px] w-full rounded-[14px] bg-[#D8D8D8] text-lg text-black sm:mt-0 sm:w-[154px]'
					onClick={() => {
						trackEvent('launchpad_subscribe')
					}}
				/>
			</form>

			<p className='mt-4 text-center text-xl text-body'>Join hundreds of developers on their journey</p>
		</section>
	)
}
