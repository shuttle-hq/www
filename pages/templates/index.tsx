import { ReactNode } from 'react'
import { Page } from 'components/templates'
import toml from '@iarna/toml'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'

const TEMPLATES_URL = 'https://raw.githubusercontent.com/shuttle-hq/shuttle-examples/main/templates.toml'

export interface Starter {
	title: string
	description: string
	path: string
	use_cases: string[]
	tags: string[]
	template: string
}

export type StarterWithKey = Starter & { key: string }

export interface Template {
	title: string
	description: string
	path: string
	use_cases: string[]
	tags: string[]
}

export interface Example {
	title: string
	description: string
	path: string
	use_cases: string[]
	tags: string[]
}

export interface Tutorial {}

export interface CommunityTemplate {
	title: string
	description: string
	use_cases: string[]
	tags: string[]
	author: string
	repo: string
}

export interface TemplatesResponse {
	version: number
	starters: Record<string, Starter>
	templates: Record<string, Template>
	examples: Record<string, Example>
	tutorials: Record<string, Tutorial>
	community_templates: Record<string, CommunityTemplate>
}

export const getStaticProps = (async () => {
	const response = await fetch(TEMPLATES_URL)
	const tomlString = await response.text()

	const { starters: starterMap } = toml.parse(tomlString) as unknown as TemplatesResponse

	const starterArr = Object.keys(starterMap).map<StarterWithKey>((key) => {
		return {
			...starterMap[key],
			key,
		}
	})

	const tags = Array.from(new Set(starterArr.map((starter) => starter.tags).flat()))
	const useCases = Array.from(new Set(starterArr.map((starter) => starter.use_cases).flat()))

	return {
		props: {
			starters: starterArr,
			tags,
			useCases,
		},
	}
}) satisfies GetStaticProps<{
	starters: StarterWithKey[]
	tags: string[]
	useCases: string[]
}>

export default function Templates({ tags, useCases, starters }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<section className='my-[140px] w-full'>
			<div className='mx-auto my-0 w-full text-center'>
				<h1>
					<span className='text-gradient bg-clip-text text-[64px] text-transparent'>Templates</span>
				</h1>
				<p className='text-2xl'>Optional description of something.</p>
			</div>

			<section className='mt-32 flex justify-between px-[128px]'>
				<div className='w-[200px]'>
					<div className='mb-7 flex w-full justify-between'>
						<span className='text-md'>Filter</span>

						<button className='rounded-[23px] bg-[#FFFFFF1A] px-3 py-[2px] text-[#7A7A7A]'>
							Clear
						</button>
					</div>

					<input
						type='text'
						placeholder='Search'
						className='mb-5 w-full rounded-[14px] border border-[#FFFFFF1A] bg-[#FFFFFF0D] px-5 py-3 text-[#C2C2C266]'
					/>

					<button className='mb-6 w-full rounded-[14px] border border-[#FFFFFF1A] bg-black px-6 py-3 text-center'>
						Contribute
					</button>

					<hr className='mb-6 border-[#FFFFFF1A]' />

					<div className='flex flex-col'>
						<span className='uppercase'>Type</span>
						<fieldset>
							<input className='mr-[10px]' type='checkbox' name='starter' id='' />
							<label className='text-[#7A7A7A]' htmlFor='starter'>
								Starter
							</label>
						</fieldset>
						<fieldset>
							<input className='mr-[10px]' type='checkbox' name='template' id='' />
							<label className='text-[#7A7A7A]' htmlFor='starter'>
								Template
							</label>
						</fieldset>
						<fieldset>
							<input className='mr-[10px]' type='checkbox' name='tutorial' id='' />
							<label className='text-[#7A7A7A]' htmlFor='starter'>
								Tutorial
							</label>
						</fieldset>
					</div>

					<div>
						<span>Use Case</span>
						<fieldset>
							{useCases.map((useCase) => (
								<div key={useCase}>
									<input type='checkbox' name={useCase} id='' />
									<label htmlFor={useCase}>{useCase}</label>
								</div>
							))}
						</fieldset>
					</div>

					<div>
						<span>Tags</span>
						<fieldset>
							{tags.map((tag) => (
								<div key={tag}>
									<input type='checkbox' name={tag} id='' />
									<label htmlFor={tag}>{tag}</label>
								</div>
							))}
						</fieldset>
					</div>
				</div>

				<div className='grid grid-cols-3 gap-6'>
					{starters.map((starter) => (
						<div
							key={starter.key}
							className='flex h-[320px] w-[300px] flex-col items-start justify-between rounded-3xl border border-orange bg-card p-6'
						>
							<div>
								<Image
									src='/images/templates/logo.png'
									alt='Template logo'
									width={55}
									height={37}
								/>
								<h2 className='mb-1 mt-2 text-xl font-bold text-white'>{starter.title}</h2>
								<p className='mb-4'>{starter.description}</p>
								<div className='flex gap-2'>
									{starter.tags.map((tag) => (
										<span
											key={tag}
											className='rounded-xl border border-orange px-3 py-1 text-sm text-white'
										>
											{tag}
										</span>
									))}
								</div>
							</div>
							<button className='flex gap-1 rounded-lg bg-gradient px-6 py-2 '>
								<span className='text-sm text-black'>Launch</span>{' '}
								<Image src='/images/templates/arrow.svg' width={12} height={12} alt='arrow' />
							</button>
						</div>
					))}
				</div>
			</section>
		</section>
	)
}

Templates.getLayout = (children: ReactNode) => <Page>{children}</Page>
