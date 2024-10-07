'use client'

import LaunchSystemStep1 from './LaunchSystemStep1'
import LaunchSystemStep2 from './LaunchSystemStep2'
import LaunchSystemStep3 from './LaunchSystemStep3'
import LaunchSystemStep4 from './LaunchSystemStep4'

export default function LaunchSystem() {
	return (
		<div className=''>
			<section className='relative z-50 mx-auto mb-[50px] mt-16 w-full max-w-7xl px-5 sm:px-10 2xl:mt-0'>
				<div className='flex flex-col items-center justify-center'>
					<h1 className='mb-5 text-5xl text-[#F0F0F0]'>Launch System</h1>

					<p className=''>Blast off in t-minus 3, 2, 1...</p>
				</div>

				<div></div>
			</section>
			<LaunchSystemStep1 />
			<LaunchSystemStep2 />
			<LaunchSystemStep3 />
			<LaunchSystemStep4 />
		</div>
	)
}
