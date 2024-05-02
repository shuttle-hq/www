import Xarrow from 'react-xarrows'
import RocketColor3 from './RocketColor3'
import Step3Top from './Step3Top'
import Step3Left from './Step3Left'
import Step3Left2 from './Step3Left2'
import Step3Right from './Step3Right'

export default function LaunchSystemStep3() {
	return (
		<div className='flex flex-col items-center gap-8 bg-black lg:justify-center'>
			<Xarrow
				start='top-3'
				end='left-3'
				startAnchor='left'
				endAnchor='top'
				color='#525150'
				strokeWidth={1}
				dashness={{ strokeLen: 2, nonStrokeLen: 5 }}
				showHead={false}
				curveness={1}
				divContainerProps={{ className: 'hidden lg:block' }}
			/>
			<Xarrow
				start='top-3'
				end='right-3'
				startAnchor='right'
				endAnchor='top'
				color='#525150'
				strokeWidth={1}
				dashness={{ strokeLen: 2, nonStrokeLen: 5 }}
				showHead={false}
				curveness={1}
				divContainerProps={{ className: 'hidden lg:block' }}
			/>
			<RocketColor3 className='absolute lg:static' />
			<Step3Top id='top-3' className='step-top static' />
			<Step3Left className='static' id='left-3' />
			<Step3Left2 className='static' />
			<Step3Right className='static' id='right-3' />
		</div>
	)
}
