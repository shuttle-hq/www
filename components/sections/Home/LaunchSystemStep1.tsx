import Xarrow from 'react-xarrows'
import Step1Top from './Step1Top'
import Step1Left from './Step1Left'
import Step1Right from './Step1Right'
import Step1Bottom from './Step1Bottom'
import RocketColor1 from './RocketColor1'

export default function LaunchSystemStep1() {
	return (
		<div className='flex flex-col items-center gap-8 bg-black lg:justify-center'>
			<Xarrow
				start='top-1'
				end='left-1'
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
				start='top-1'
				end='right-1'
				startAnchor='right'
				endAnchor='top'
				color='#525150'
				strokeWidth={1}
				dashness={{ strokeLen: 2, nonStrokeLen: 5 }}
				showHead={false}
				curveness={1}
				divContainerProps={{ className: 'hidden lg:block' }}
			/>

			<Xarrow
				start='left-1'
				end='bottom-1'
				startAnchor='bottom'
				endAnchor='left'
				color='#525150'
				showHead={false}
				strokeWidth={1}
				curveness={1}
				divContainerProps={{ className: 'hidden lg:block' }}
			/>
			<Xarrow
				start='right-1'
				end='bottom-1'
				startAnchor='bottom'
				endAnchor='right'
				color='#525150'
				strokeWidth={1}
				showHead={false}
				curveness={1}
				divContainerProps={{ className: 'hidden lg:block' }}
			/>
			<Step1Top id='top-1' className='step-top static' />
			<Step1Left id='left-1' className='static' />
			<Step1Right id='right-1' className='static' />
			<Step1Bottom id='bottom-1' className='static' />
			<RocketColor1 className='absolute lg:static' />
		</div>
	)
}
