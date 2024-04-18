import toml from '@iarna/toml'
import {
	StarterWithKey,
	TEMPLATES_URL,
	TemplateType,
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

export const getStaticPaths = (async () => {
	const response = await fetch(TEMPLATES_URL)
	const tomlString = await response.text()

	const { starters: starterMap } = toml.parse(tomlString) as unknown as TemplatesResponse

	const starterArr = Object.keys(starterMap)
		.map<StarterWithKey>((key) => {
			return {
				...starterMap[key],
				key,
			}
		})
		.filter((starter) => !!starter?.template && starter?.template !== 'none')

	const paths = starterArr.map((starter) => ({
		params: {
			framework: starter?.template,
			templateKey: starter?.path?.replace(`${starter?.template}/`, '') ?? '',
		},
	}))

	return {
		paths: paths,
		fallback: true, // false or "blocking"
	}
}) satisfies GetStaticPaths<{
	framework: string
	templateKey: string
}>

export const getStaticProps = (async (context) => {
	const { templateKey } = context.params as { templateKey: string }

	const response = await fetch(TEMPLATES_URL)
	const tomlString = await response.text()

	const { starters, examples, templates } = toml.parse(tomlString) as unknown as TemplatesResponse

	const template = (starters[templateKey] ||
		examples[templateKey] ||
		templates[templateKey]) as TemplateWithKeyAndType

	console.log('examples[`${framework}-${templateKey}`]:', examples[templateKey])
	console.log('templates[templateKey]:', templates[templateKey])
	console.log('starters[templateKey]:', starters[templateKey])

	console.log('template', template)

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
					type: TemplateType.Starter,
				},
			},
		}
	}

	let readmeText = ''

	const readmeResponse = await fetch(
		`https://raw.githubusercontent.com/shuttle-hq/shuttle-examples/main/${template.path}/README.md`
	)

	if (readmeResponse.status === 404) {
		readmeText = 'cargo shuttle init'
	} else {
		readmeText = await readmeResponse.text()
	}

	return {
		props: {
			template: {
				...template,
				readme: readmeText,
			},
		},
	}
}) satisfies GetStaticProps<{
	template: TemplateWithKeyAndType & { readme: string }
}>

export default function TemplateDetails({ template }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<section className='mx-auto my-[65px] w-full max-w-screen-xl px-10 sm:px-32'>
			<Link className='mb-14 flex items-center gap-1' href='/templates'>
				<GoBack />
				<span>All templates</span>
			</Link>

			<div className='flex flex-col gap-[30px] md:grid md:grid-cols-3'>
				<div className='col-span-1 flex w-full flex-col items-center justify-between rounded-3xl border border-[#434343] p-8'>
					<div className=' flex w-full flex-col items-center'>
						<TemplateLogo />

						<TemplateInit path={template?.path} />

						<TemplateLaunch path={template?.path} />

						<TemplateMetadata tags={template?.tags ?? []} use_cases={template?.use_cases ?? []} />
					</div>

					<div className='w-full'>
						<TemplateButton
							href={`https://github.com/shuttle-hq/shuttle-examples/blob/main/${template?.path}`}
							title='Article'
						/>

						<TemplateButton
							href={`https://github.com/shuttle-hq/shuttle-examples/blob/main/${template?.path}`}
							title='Github Repo'
						/>
					</div>
				</div>

				<TemplateReadme title={template?.title} readme={template?.readme} />
			</div>
		</section>
	)
}
