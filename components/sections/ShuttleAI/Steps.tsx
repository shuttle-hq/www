import Image from 'next/image'
import StepsDesktop from './StepsDesktop'
import StepsMobile from './StepsMobile'
import Link from 'next/link'

const Steps = () => {
	return (
		<div className='mt-48 flex flex-col items-center px-8 lg:mt-[400px]'>
			<h2 className='w-full max-w-3xl text-center font-gradual text-6xl font-bold text-head'>
				Behind the curtain
			</h2>
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
			<p className='mb-10 w-full max-w-3xl text-xl leading-8 text-body'>
				Shuttle AI simplifies the development process by engaging in an interactive conversation to
				understand your requirements, starting with the initial prompt and making assumptions to streamline
				the process. For instance, if you asked it to create a blog service, Shuttle AI will inquire about
				desired features, such as the ability to create, read, update, and delete posts, authenticate
				users, and any specific restrictions or additional functionality.
			</p>
			<p className='mb-10 w-full max-w-3xl text-xl leading-8 text-body'>
				Once the requirements are clear and agreed on by you, Shuttle AI generates a comprehensive plan and
				translates it into a structured JSON format. This plan guides the generation of the codebase,
				including SQL models and endpoint definitions. Throughout this iterative process, you can review
				and modify the code, ensuring it meets your needs. For example, if you need to use bcrypt for
				password encryption or make adjustments to argument names, Shuttle AI will adapt accordingly.
			</p>

			<p className='w-full max-w-3xl text-xl leading-8 text-body'>
				After building the core functionalities, Shuttle AI compiles and checks the code, ensuring it
				functions correctly. Finally, Shuttle AI will deploy your app to the cloud.
			</p>
		</div>
	)
}

export default Steps
