import RocketColor4 from './RocketColorFull'
import Step1Top from './Step1Top'
import Step2Top from './Step2Top'
import Step3Top from './Step3Top'

export default function LaunchSystemStep4() {
	return (
		<div className='flex flex-col items-center gap-8 bg-black lg:justify-center'>
			<div className='overall-steps static right-[3%] top-1/2 flex flex-col gap-5 lg:-translate-y-1/2'>
				<Step1Top />
				<Step2Top />
				<Step3Top />
			</div>
			<RocketColor4 />
		</div>
	)
}
