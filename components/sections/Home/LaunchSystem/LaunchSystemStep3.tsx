import Xarrow from 'react-xarrows'
import RocketColor3 from '../RocketColor3'
import Step3Top from '../Step3Top'
import Step3Left from '../Step3Left'
import Step3Left2 from '../Step3Left2'
import Step3Right from '../Step3Right'

export default function LaunchSystemStep3() {
	return (
		<div className='relative mb-[200px] flex flex-col items-center gap-8 bg-black 2xl:justify-center'>
			<Xarrow
				start='top-3'
				end='left-3'
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
				start='top-3'
				end='right-3'
				startAnchor='right'
				endAnchor='top'
				color='#525150'
				strokeWidth={1}
				dashness={{ strokeLen: 2, nonStrokeLen: 5 }}
				showHead={false}
				path='grid'
				divContainerProps={{ className: 'hidden 2xl:block' }}
			/>
			<div className='flex h-auto w-full flex-col items-center justify-between gap-8 2xl:h-[70vh]'>
				<Step3Top id='top-3' />
				<div className='flex w-full flex-col items-center justify-between gap-8 2xl:flex-row'>
					<div className='flex flex-col gap-7'>
						<Step3Left id='left-3' />
						<Step3Left2 />
					</div>
					<Step3Right id='right-3' />
				</div>
				<div />
			</div>
			<RocketColor3 />
		</div>
	)
}
