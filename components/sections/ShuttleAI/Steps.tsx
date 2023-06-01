import Image from 'next/image'
import StepsDesktop from './StepsDesktop'
import StepsMobile from './StepsMobile'

const Steps = () => {
	return (
		<div className='mt-48 flex flex-col items-center px-8'>
			<h2 className='w-full max-w-3xl font-gradual text-6xl font-bold text-[#C2C2C2]'>Behind the curtain</h2>
			<div className='relative flex w-full max-w-6xl items-center justify-center'>
				<Image
					src='/images/pages/shuttle-ai/steps.png'
					alt=''
					width={1509}
					height={526}
					className='absolute hidden w-full sm:block'
				/>
				<StepsDesktop />
				<StepsMobile />
			</div>
			<p className='mb-10 w-full max-w-3xl text-xl leading-8 text-[#7A7A7A]'>
				ShuttleAI is comprised of multiple LLM agents, working together to handle your request. Starting
				from the beginning itself - they expand upon the user&apos;s prompt, reason about the project and
				define a plan of action. While giving a detailed prompt works the best, even simpler prompts like
				“Build me a todo app” will be enough for the agents to make assumptions and define the basic shape
				of the app.
			</p>
			<p className='mb-10 w-full max-w-3xl text-xl leading-8 text-[#7A7A7A]'>
				Once we have our plan decided, we pass it on to the code-generation agents that focus on generating
				you a working codebase. Meanwhile, our Shuttlify agents take care of your infrastructure and
				provisioning, while our compilation agents sit in the background and fix any potential errors or
				mistakes that might appear. What you get in the end, is a real, live Rust-based backend deployed on
				Shuttle’s cloud.
			</p>
			<p className='w-full max-w-3xl text-xl leading-8 text-[#7A7A7A]'>
				If you want to learn more, check out our blog post:&nbsp;
				<a
					href='https://blog.com/sth'
					target='_blank'
					rel='noreferrer'
					className='inline-block text-[#D8D8D8] underline'
				>
					blog.com/sth
				</a>
			</p>
		</div>
	)
}

export default Steps
