'use client'

import LaunchSystemStep1 from './LaunchSystemStep1'
import LaunchSystemStep2 from './LaunchSystemStep2'
import LaunchSystemStep3 from './LaunchSystemStep3'
import LaunchSystemStep4 from './LaunchSystemStep4'

export default function LaunchSystem() {
	return (
		<div className=''>
			<LaunchSystemStep1 />
			<LaunchSystemStep2 />
			<LaunchSystemStep3 />
			<LaunchSystemStep4 />
		</div>
	)
}
