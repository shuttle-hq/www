import ReactMarkdown from 'react-markdown'
import toml from '@iarna/toml'
import { StarterWithKey, TEMPLATES_URL, TemplatesResponse } from 'pages/templates'
import { GoBack } from 'components/sections/Templates/GoBack'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CopyButton } from 'components/elements'
import BgGlow from 'components/sections/Templates/BgGlow'
import LaunchBG from 'components/sections/Templates/LaunchBG'
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
	const { framework, templateKey } = context.params as { framework: string; templateKey: string }

	const response = await fetch(TEMPLATES_URL)
	const tomlString = await response.text()

	const { starters: starterMap } = toml.parse(tomlString) as unknown as TemplatesResponse

	const starter = starterMap[`${framework}-${templateKey}`] as StarterWithKey

	if (!starter) {
		return {
			redirect: {
				destination: '/templates',
			},
			props: {
				starter: {
					key: '',
					name: '',
					path: '',
					description: '',
					template: '',
					tags: [],
					title: '',
					use_cases: [],
					readme: '',
				},
			},
		}
	}

	let readmeText = ''

	const readmeResponse = await fetch(
		`https://raw.githubusercontent.com/shuttle-hq/shuttle-examples/main/${framework}/${templateKey}/README.md`
	)

	if (readmeResponse.status === 404) {
		readmeText = 'cargo shuttle init'
	} else {
		readmeText = await readmeResponse.text()
	}

	return {
		props: {
			starter: {
				...starter,
				readme: readmeText,
			},
		},
	}
}) satisfies GetStaticProps<{
	starter: StarterWithKey & { readme: string }
}>

export default function TemplateDetails({ starter }: InferGetStaticPropsType<typeof getStaticProps>) {
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

						<TemplateInit path={starter.path} />

						<TemplateLaunch path={starter.path} />

						<TemplateMetadata tags={starter.tags} use_cases={starter.use_cases} />
					</div>

					<TemplateButton
						href={`https://github.com/shuttle-hq/shuttle-examples/blob/main/${starter.path}`}
						title='Article'
					/>

					<TemplateButton
						href={`https://github.com/shuttle-hq/shuttle-examples/blob/main/${starter.path}`}
						title='Github Repo'
					/>
				</div>

				<TemplateReadme title={starter.title} readme={starter.readme} />
			</div>
		</section>
	)
}
