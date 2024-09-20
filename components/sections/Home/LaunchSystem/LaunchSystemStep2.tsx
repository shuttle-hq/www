import Xarrow from 'react-xarrows'
import RocketColor2 from '../RocketColor2'
import Step2Top from '../Step2Top'
import Step2Left from '../Step2Left'
import Step2Right from '../Step2Right'
import Step2Bottom from './Step2Bottom'

export default function LaunchSystemStep2() {
	return (
		<div className='relative mb-[200px] flex flex-col items-center gap-8 bg-black 2xl:justify-center'>
			<Xarrow
				start='top-2'
				end='left-2'
				startAnchor='left'
				endAnchor='top'
				color='#525150'
				strokeWidth={1}
				dashness={{ strokeLen: 2, nonStrokeLen: 5 }}
				showHead={false}
				path='grid'
				divContainerProps={{ className: 'hidden 2xl:block' }}
			/>
			<Xarrow
				start='top-2'
				end='right-2'
				startAnchor='right'
				endAnchor='top'
				color='#525150'
				strokeWidth={1}
				dashness={{ strokeLen: 2, nonStrokeLen: 5 }}
				showHead={false}
				path='grid'
				divContainerProps={{ className: 'hidden 2xl:block' }}
			/>

			<Xarrow
				start='left-2'
				end='bottom-2'
				startAnchor='bottom'
				endAnchor='left'
				color='#525150'
				showHead={false}
				strokeWidth={1}
				path='grid'
				divContainerProps={{ className: 'hidden 2xl:block' }}
			/>
			<Xarrow
				start='right-2'
				end='bottom-2'
				startAnchor='bottom'
				endAnchor='right'
				color='#525150'
				strokeWidth={1}
				showHead={false}
				path='grid'
				divContainerProps={{ className: 'hidden 2xl:block' }}
			/>
			<div className='flex h-auto w-full flex-col items-center justify-between gap-8 2xl:h-[90vh]'>
				<Step2Top id='top-2' />
				<div className='flex w-full flex-col items-center justify-between gap-8 2xl:flex-row'>
					<Step2Left id='left-2' />
					<Step2Right id='right-2' />
				</div>
				<Step2Bottom id='bottom-2' />
			</div>
			<RocketColor2 />
		</div>
	)
}
