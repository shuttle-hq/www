import RocketColor4 from './RocketColorFull'
import Step1Top from './Step1Top'
import Step2Top from './Step2Top'
import Step3Top from './Step3Top'

export default function LaunchSystemStep4() {
	return (
		<div className='relative mb-[100px] flex items-center gap-8 bg-black lg:mb-auto lg:justify-end'>
			<div className='flex w-full flex-col items-center justify-center gap-5 lg:h-[90vh] lg:w-auto'>
				<Step1Top />
				<Step2Top />
				<Step3Top />
			</div>
			<RocketColor4 />
		</div>
	)
}
