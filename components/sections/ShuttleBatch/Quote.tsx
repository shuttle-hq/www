import { Button } from 'components/elements'
import { DISCORD_URL } from 'lib/constants'

export const Quote = () => {
	return (
		<section className='mx-auto mt-24 w-full max-w-7xl items-center px-5 sm:px-10 lg:mt-28'>
			<div className='my-20 flex flex-col gap-5 lg:px-40 lg:py-40'>
				<p className='text-2xl text-[#C2C2C2]'>
					“As someone who didn't have any experience in the industry and only a little experience in
					open-source, I was struggling to find a project I felt qualified to contribute to.
				</p>
				<p className='text-2xl text-[#C2C2C2]'>
					The SB-1 batch was a great event for to get more comfortable in open-source, with shuttle
					engineers providing mentorship and guidance on tasks ranging from very easy to very hard.”
				</p>

				<div>
					<p className='text-xl text-[#C2C2C2]'>- Oddbjorn *Surname*</p>
					<span className='text-base text-[#7A7A7A]'>Shuttle Batch 1.0, joined the Shuttle team</span>
				</div>
			</div>

			<div className='mt-72'>
				<h1 className='text-center text-6xl text-[#C2C2C2]'>Join Shuttle Batch 2023</h1>

				<div className='my-32 flex justify-center gap-4'>
					<Button
						variant='primary'
						invertOnDark
						className='bg-[#13292C] text-white'
						href='https://btl1d1x5z23.typeform.com/to/WAu53vBi'
					>
						Apply now
					</Button>
					<Button variant='secondary' invertOnDark href={DISCORD_URL}>
						Join Discord
					</Button>
				</div>
			</div>
		</section>
	)
}
