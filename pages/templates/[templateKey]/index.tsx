'use client'

import toml from '@iarna/toml'
import {
	Example,
	ExampleWithKey,
	Starter,
	StarterWithKey,
	TEMPLATES_URL,
	Template,
	TemplateType,
	TemplateWithKey,
	TemplateWithKeyAndType,
	TemplatesResponse,
} from 'pages/templates'
import { GoBack } from 'components/sections/Templates/GoBack'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import TemplateReadme from 'components/sections/Templates/TemplateReadme'
import TemplateButton from 'components/sections/Templates/TemplateButton'
import TemplateMetadata from 'components/sections/Templates/TemplateMetadata'
import TemplateLaunch from 'components/sections/Templates/TemplateLaunch'
import TemplateLogo from 'components/sections/Templates/TemplateLogo'
import TemplateInit from 'components/sections/Templates/TemplateInit'
import { useState } from 'react'

export const getStaticPaths = (async () => {
	const response = await fetch(TEMPLATES_URL)
	const tomlString = await response.text()

	const { starters, examples, templates } = toml.parse(tomlString) as unknown as TemplatesResponse

	const starterArr = Object.keys(starters).map<StarterWithKey>((key) => {
		return {
			...starters[key],
			key,
			type: TemplateType.Starter,
		}
	})

	const templateArr = Object.keys(templates).map<TemplateWithKey>((key) => {
		return {
			...templates[key],
			key,
			type: TemplateType.Template,
		}
	})

	const exampleArr = Object.keys(examples).map<ExampleWithKey>((key) => {
		return {
			...examples[key],
			key,
			type: TemplateType.Example,
		}
	})

	const paths = [...starterArr, ...templateArr, ...exampleArr].map((template) => ({
		params: {
			templateKey: template.key,
		},
	}))

	return {
		paths: paths,
		fallback: true, // false or "blocking"
	}
}) satisfies GetStaticPaths<{
	templateKey: string
}>

export const getStaticProps = (async (context) => {
	const { templateKey } = context.params as { templateKey: string }

	const response = await fetch(TEMPLATES_URL)
	const tomlString = await response.text()

	const { starters, examples, templates } = toml.parse(tomlString) as unknown as TemplatesResponse

	const template = (starters[templateKey] || examples[templateKey] || templates[templateKey]) as
		| Template
		| Starter
		| Example

	const type = starters[templateKey]
		? TemplateType.Starter
		: examples[templateKey]
		? TemplateType.Example
		: TemplateType.Template

	if (!template) {
		return {
			redirect: {
				destination: '/templates',
			},
			props: {
				template: {
					key: '',
					name: '',
					path: '',
					description: '',
					template: '',
					tags: [],
					title: '',
					use_cases: [],
					readme: '',
					type: TemplateType.Template,
				},
			},
		}
	}

	let readmeText = ''

	const readmeResponse = await fetch(
		`https://raw.githubusercontent.com/joshua-mo-143/shuttle-examples/update-readmes/${template.path}/README.md`
	)

	if (readmeResponse.status === 404) {
		readmeText = 'cargo shuttle init'
	} else {
		readmeText = await readmeResponse.text()
	}

	const templateMetadata = {
		...template,
		readme: readmeText,
		type,
		key: templateKey,
	} as TemplateWithKeyAndType & { readme: string }

	return {
		props: {
			template: templateMetadata,
		},
	}
}) satisfies GetStaticProps<{
	template: TemplateWithKeyAndType & { readme: string }
}>

export default function TemplateDetails({ template }: InferGetStaticPropsType<typeof getStaticProps>) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<section className='mx-auto my-[65px] w-full max-w-screen-xl px-10'>
			<Link className='mb-14 flex items-center gap-1' href='/templates'>
				<GoBack />
				<span>All templates</span>
			</Link>

			<div className='flex flex-col gap-[30px] md:grid md:grid-cols-3'>
				<div className='col-span-1 flex w-full flex-col items-center justify-between rounded-3xl border border-[#434343] p-8'>
					<div className=' flex w-full flex-col items-center'>
						<TemplateLogo />

						<TemplateInit path={template?.path} template={template?.template} />

						{isModalOpen && (
							<div className='my-5 flex w-full flex-col justify-start'>
								<h3 className='font-gradual text-2xl font-bold text-head'>Instructions</h3>
								<ol className='mt-1 text-head opacity-60'>
									<li>Step 1. Start Rust</li>
									<li>Step 2. Copy shuttle init command with info above</li>

									<li>Step 3. Login into dashboard</li>
								</ol>
							</div>
						)}

						<TemplateLaunch
							path={template?.path}
							modalOpen={isModalOpen}
							setModalOpen={setIsModalOpen}
						/>

						{!isModalOpen && (
							<TemplateMetadata
								tags={template?.tags ?? []}
								use_cases={template?.use_cases ?? []}
								type={template?.type}
							/>
						)}
					</div>

					<div className='w-full'>
						<TemplateButton
							href={`https://github.com/joshua-mo-143/shuttle-examples/update-readmes/main/${template?.path}`}
							title='Github Repo'
						/>
					</div>
				</div>

				<TemplateReadme title={template?.title} readme={template?.readme} />
			</div>
		</section>
	)
}
