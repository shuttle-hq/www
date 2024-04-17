import { ReactNode, useState } from 'react'
import { Page } from 'components/templates'
import toml from '@iarna/toml'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import TemplateCard from 'components/sections/Templates/TemplateCard'
import TemplateFilterGroup from 'components/sections/Templates/TemplateFilterGroup'

export const TEMPLATES_URL = 'https://raw.githubusercontent.com/shuttle-hq/shuttle-examples/main/templates.toml'

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
	const [search, setSearch] = useState('')
	const [selectedTags, setSelectedTags] = useState<string[]>([])
	const [selectedUseCases, setSelectedUseCases] = useState<string[]>([])

	const filteredStarters = starters.filter((starter) => {
		const searchMatch = starter.title.toLowerCase().includes(search.toLowerCase())
		const tagMatch = selectedTags.every((tag) => starter.tags.includes(tag))
		const useCaseMatch = selectedUseCases.every((useCase) => starter.use_cases.includes(useCase))

		return searchMatch && tagMatch && useCaseMatch
	})

	return (
		<section className='mx-auto my-[140px] w-full max-w-screen-2xl'>
			<div className='mx-auto my-0 w-full text-center'>
				<h1>
					<span className='text-gradient bg-clip-text text-[64px] text-transparent'>Templates</span>
				</h1>
				<p className='text-2xl'>Optional description of something.</p>
			</div>

			<section className='mt-32 grid grid-cols-1 justify-between gap-[30px] px-[128px] md:grid-cols-4'>
				<div className='col-span-1'>
					<div className='mb-7 flex w-full justify-between'>
						<span className='text-md'>Filter</span>

						<button
							className='rounded-[23px] bg-[#FFFFFF1A] px-3 py-[2px] text-[#7A7A7A]'
							onClick={() => {
								setSelectedTags([])
								setSelectedUseCases([])
								setSearch('')
							}}
						>
							Clear
						</button>
					</div>

					<input
						type='text'
						placeholder='Search'
						className='mb-5 w-full rounded-[14px] border border-[#FFFFFF1A] bg-[#FFFFFF0D] px-5 py-3 text-[#C2C2C266]'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>

					<div className='mb-6 rounded-[14px] bg-[linear-gradient(84.16deg,_#F4292933_-7.25%,_#FFD76F0B_35.45%,_#38D4E933_97%)] p-[1px]'>
						<button className='w-full rounded-[14px] border border-[#FFFFFF1A] bg-black px-6 py-3 text-center'>
							Contribute
						</button>
					</div>

					<hr className='mb-6 border-[#FFFFFF1A]' />

					<TemplateFilterGroup
						items={useCases}
						selectedItems={selectedUseCases}
						setSelectedItems={setSelectedUseCases}
						title='Use Case'
					/>

					<TemplateFilterGroup
						items={tags}
						selectedItems={selectedTags}
						setSelectedItems={setSelectedTags}
						title='Tags'
					/>
				</div>

				<div className='col-span-3 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{filteredStarters.slice(0, 9).map((starter) => (
						<TemplateCard key={starter.key} starter={starter} />
					))}
				</div>
			</section>
		</section>
	)
}

Templates.getLayout = (children: ReactNode) => <Page>{children}</Page>
