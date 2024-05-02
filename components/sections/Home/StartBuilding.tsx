import Link from 'next/link'
import TemplateCard from './TemplateCard'

export default function StartBuilding() {
	return (
		<div className='mx-auto mt-8 max-w-7xl sm:mx-auto sm:mt-16 sm:px-10 lg:mt-32 desktop:mt-64'>
			<h1 className='text-[56px] text-[#F0F0F0]'>Start Building</h1>
			<p>Use one of our starter templates to get your project off the ground in minutes.</p>

			<Link href='/starters'>
				<p className='my-5 flex items-center gap-1 text-[#F0F0F0]'>
					See all
					<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M3.82918 9.13587L12.8496 9.13587L8.77168 5.05797L9.99857 3.83105L16.168 10.0005L9.99857 16.1698L8.77168 14.9429L12.8496 10.865L3.82918 10.865L3.82918 9.13587Z'
							fill='white'
						/>
					</svg>{' '}
				</p>{' '}
			</Link>

			<div className='col-span-3 grid grid-cols-1 gap-6 px-[28px] md:grid-cols-2 md:px-0 lg:grid-cols-3'>
				<TemplateCard
					logo='https://avatars.githubusercontent.com/u/54710151?v=4'
					template={{
						key: 'actix-web/hello-world',
						title: 'Actix Web',
						description: 'Powerful and fast web framework',
						path: 'actix-web/hello-world',
						use_cases: ['Web app'],
						tags: ['actix-web'],
						template: 'actix-web',
					}}
				/>
				<TemplateCard
					logo='https://avatars.githubusercontent.com/u/54710151?v=4'
					template={{
						key: 'actix-web/hello-world',
						title: 'Actix Web',
						description: 'Powerful and fast web framework',
						path: 'actix-web/hello-world',
						use_cases: ['Web app'],
						tags: ['actix-web'],
						template: 'actix-web',
					}}
				/>
				<TemplateCard
					logo='https://avatars.githubusercontent.com/u/54710151?v=4'
					template={{
						key: 'actix-web/hello-world',
						title: 'Actix Web',
						description: 'Powerful and fast web framework',
						path: 'actix-web/hello-world',
						use_cases: ['Web app'],
						tags: ['actix-web'],
						template: 'actix-web',
					}}
				/>
			</div>
		</div>
	)
}
