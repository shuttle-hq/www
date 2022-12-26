import { Button } from 'components/elements'
import Image from 'next/image'

const ShuttleHeroesResponsibilities = () => {
	return (
		<div className='mx-auto mt-24 w-full max-w-7xl border-y border-black/10 px-5 pt-32 pb-52 dark:border-white/10 sm:px-10 lg:mt-28'>
			<h2 className='text-center text-5xl font-bold text-black dark:text-[#C2C2C2]'>
				As shuttle hero, you’d need to
			</h2>
			<div className='mt-24 grid gap-5 lg:grid-cols-4'>
				<div className='flex items-start gap-4'>
					<Image
						src='/images/sections/shuttle-heroes-responsibilities/help.png'
						alt='function image'
						width={48}
						height={48}
						className='flex-shrink-0'
					/>
					<div>
						<h3 className='font-gradual text-xl font-bold dark:text-[#C2C2C2]'>Help</h3>
						<p className='mt-1'>helping the community in #deleted-channel and github</p>
					</div>
				</div>
				<div className='flex items-start gap-4'>
					<Image
						src='/images/sections/shuttle-heroes-responsibilities/spread.png'
						alt='function image'
						width={48}
						height={48}
						className='flex-shrink-0'
					/>
					<div>
						<h3 className='font-gradual text-xl font-bold dark:text-[#C2C2C2]'>Spread</h3>
						<p className='mt-1'>spreading the shuttle word around</p>
					</div>
				</div>
				<div className='flex items-start gap-4'>
					<Image
						src='/images/sections/shuttle-heroes-responsibilities/educate.png'
						alt='function image'
						width={48}
						height={48}
						className='flex-shrink-0'
					/>
					<div>
						<h3 className='font-gradual text-xl font-bold dark:text-[#C2C2C2]'>Educate</h3>
						<p className='mt-1'>creating tutorials and educating</p>
					</div>
				</div>
				<div className='flex items-start gap-4'>
					<Image
						src='/images/sections/shuttle-heroes-responsibilities/contribute.png'
						alt='function image'
						width={48}
						height={48}
						className='flex-shrink-0'
					/>
					<div>
						<h3 className='font-gradual text-xl font-bold dark:text-[#C2C2C2]'>Contribute</h3>
						<p className='mt-1'>consistent contributions to shuttle (codebase and/or docs)</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ShuttleHeroesResponsibilities
