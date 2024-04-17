import ReactMarkdown from 'react-markdown'
import toml from '@iarna/toml'
import { StarterWithKey, TEMPLATES_URL, TemplatesResponse } from 'pages/templates'
import { GoBack } from 'components/sections/Templates/GoBack'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { Markdown } from 'components/elements/Markdown'
import Link from 'next/link'
import Image from 'next/image'
import { CopyButton } from 'components/elements'

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
		.filter((starter) => !!starter.template && starter.template !== 'none')

	const paths = starterArr.map((starter) => ({
		params: { framework: starter.template, templateKey: starter.path.replace(`${starter.template}/`, '') },
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
		<section className='mx-auto my-[65px] w-full max-w-screen-xl px-32'>
			<Link className='mb-14 flex items-center gap-1' href='/templates'>
				<GoBack />
				<span>All templates</span>
			</Link>

			<div className='flex flex-col gap-[30px] md:grid md:grid-cols-3'>
				<div className='col-span-1 flex w-full flex-col items-center justify-between rounded-3xl border border-[#434343] p-8'>
					<div className=' flex w-full flex-col items-center'>
						<Image
							src='/images/templates/logo.png'
							alt='Template logo'
							width={55}
							height={37}
							className='my-14'
						/>

						<div className='mb-3 flex w-full items-center justify-between rounded-xl bg-[#121212] text-xs text-head'>
							<pre className='overflow-x-scroll p-4'>{`cargo shuttle init`}</pre>
							<CopyButton code={`cargo shuttle init`} width={20} height={20} />
						</div>

						<button className='mb-5 flex w-full justify-center gap-1 rounded-lg bg-gradient px-6 py-2'>
							<Link href={`/templates/${starter.path}`}>
								<span className='text-sm text-black'>Launch</span>{' '}
							</Link>
							<Image src='/images/templates/arrow.svg' width={12} height={12} alt='arrow' />
						</button>

						<div className='mb-5 flex w-full justify-between'>
							<p className='text-[#7A7A7A]'>Use cases</p>

							<div>
								<p>
									{starter.use_cases.map((useCase) => (
										<span key={useCase}>{useCase} </span>
									))}
								</p>
							</div>
						</div>
						<hr className='mb-5 w-full border-[#434343] border-[0.5]' />

						<div className='mb-5 flex w-full justify-between'>
							<span className='text-[#7A7A7A]'>Tags</span>
							<div>
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
					</div>

					<button className='flex w-full justify-center gap-1 rounded-[14px] border border-[0.5] border-orange px-6 py-2'>
						<Link
							href={`https://github.com/shuttle-hq/shuttle-examples/blob/main/${starter.path}`}
							target='_blank'
						>
							<span className='text-sm text-white'>Github Repo</span>
						</Link>
					</button>
				</div>

				<div className='col-span-2 rounded-3xl border border-[#434343] p-8'>
					<h1 className='mb-5 text-[36px] font-bold leading-10 text-[#D8D8D8]'>{starter.title}</h1>

					<Markdown body={starter.readme} />
				</div>
			</div>
		</section>
	)
}
