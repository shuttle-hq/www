import Xarrow from 'react-xarrows'
import Step1Top from '../Step1Top'
import Step1Left from '../Step1Left'
import Step1Right from '../Step1Right'
import Step1Bottom from './Step1Bottom'
import RocketColor1 from '../RocketColor1'

export default function LaunchSystemStep1() {
	return (
		<div className='relative mb-[200px] flex flex-col items-center gap-8 bg-black '>
			<Xarrow
				start='top-1'
				end='left-1'
				startAnchor='left'
				endAnchor='top'
				color='#525150'
				path='grid'
				strokeWidth={1}
				dashness={{ strokeLen: 2, nonStrokeLen: 5 }}
				showHead={false}
				divContainerProps={{ className: 'hidden 2xl:block' }}
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
				path='grid'
				divContainerProps={{ className: 'hidden 2xl:block' }}
			/>

			<Xarrow
				start='left-1'
				end='bottom-1'
				startAnchor='bottom'
				endAnchor='left'
				color='#525150'
				showHead={false}
				strokeWidth={1}
				path='grid'
				divContainerProps={{ className: 'hidden 2xl:block' }}
			/>
			<Xarrow
				start='right-1'
				end='bottom-1'
				startAnchor='bottom'
				endAnchor='right'
				color='#525150'
				strokeWidth={1}
				showHead={false}
				path='grid'
				divContainerProps={{ className: 'hidden 2xl:block' }}
			/>
			<div className='flex h-auto w-full flex-col items-center justify-between gap-8 '>
				<Step1Top id='top-1' />
				<div className='flex w-full flex-col items-center justify-between gap-8 '>
					<Step1Left id='left-1' />
					<Step1Right id='right-1' />
				</div>
				<Step1Bottom id='bottom-1' className='overflow-hidden' />
			</div>
			<RocketColor1 />
		</div>
	)
}
