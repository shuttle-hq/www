import ReactMarkdown from 'react-markdown'
import toml from '@iarna/toml'
import { StarterWithKey, TEMPLATES_URL, TemplatesResponse } from 'pages/templates'
import { GoBack } from 'components/sections/Templates/GoBack'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { Markdown } from 'components/elements/Markdown'
import Link from 'next/link'
import Image from 'next/image'
import { CopyButton } from 'components/elements'
import BgGlow from 'components/sections/Templates/BgGlow'
import LaunchBG from 'components/sections/Templates/LaunchBG'

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
						<Image
							src='/images/templates/logo.png'
							alt='Template logo'
							width={55}
							height={37}
							className='my-14'
						/>

						<div className='mb-3 flex w-full items-center justify-between rounded-xl bg-[#121212] text-xs text-head'>
							<pre className='overflow-x-scroll p-4'>{`cargo shuttle init --from ${starter?.path}`}</pre>
							<CopyButton
								code={`cargo shuttle init --from ${starter?.path}`}
								width={20}
								height={20}
							/>
						</div>

						<div className='relative mb-5 w-full rounded-xl bg-[linear-gradient(85.52deg,_#FC540C_-7.27%,_rgba(255,215,111,0.72)_108.87%)] p-[1px]'>
							<button className='flex w-full items-baseline justify-center gap-1 rounded-xl bg-[#0F0F0F] px-6 py-2'>
								<Link href={`/templates/${starter?.path}`}>
									<span className='text-sm text-white'>Launch</span>{' '}
								</Link>
								<Image src='/images/templates/arrow.svg' width={10} height={10} alt='arrow' />
							</button>
							<LaunchBG className='absolute -top-7 left-0 -z-10 w-full' />
						</div>

						<div className='mb-5 flex w-full justify-between'>
							<p className='text-[#7A7A7A]'>Type</p>

							<div className='flex gap-2'>
								<p>Starter</p>
							</div>
						</div>
						<hr className='mb-5 w-full border-[#434343] border-[0.5]' />

						<div className='mb-5 flex w-full justify-between'>
							<p className='text-[#7A7A7A]'>Use case</p>

							<div>
								<p>
									{starter?.use_cases.map((useCase) => (
										<span key={useCase}>{useCase} </span>
									))}
								</p>
							</div>
						</div>
						<hr className='mb-5 w-full border-[#434343] border-[0.5]' />

						<div className='mb-5 flex w-full justify-between'>
							<p className='text-[#7A7A7A]'>Author</p>

							<div className='flex gap-2'>
								<Image src='/images/logo.png' width={24} height={24} alt='Shuttle logo' />
								<p>Shuttle</p>
							</div>
						</div>
						<hr className='mb-5 w-full border-[#434343] border-[0.5]' />

						<div className='mb-5 flex w-full justify-between'>
							<span className='text-[#7A7A7A]'>Tags</span>
							<div>
								{starter?.tags.map((tag) => (
									<span
										key={tag}
										className='rounded-xl border border-[#434343] px-3 py-1 text-sm text-white'
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					</div>

					<div className='relative mb-3 w-full rounded-xl bg-[linear-gradient(46.52deg,_rgba(244,41,41,0.2)_-19.65%,_rgba(255,138,63,0.2)_27.61%,_rgba(229,233,56,0.2)_101.96%)] p-[1px]'>
						<button className='flex w-full items-baseline justify-center gap-1 rounded-xl bg-[#0F0F0F] px-6 py-2'>
							<Link
								href={`https://github.com/shuttle-hq/shuttle-examples/blob/main/${starter?.path}`}
								target='_blank'
							>
								<span className='text-sm text-white'>Article</span>
							</Link>
						</button>
						<BgGlow className='absolute -top-8 left-1 -z-10 w-full' />
					</div>

					<div className='relative mb-5 w-full rounded-xl bg-[linear-gradient(46.52deg,_rgba(244,41,41,0.2)_-19.65%,_rgba(255,138,63,0.2)_27.61%,_rgba(229,233,56,0.2)_101.96%)] p-[1px]'>
						<button className='flex w-full items-baseline justify-center gap-1 rounded-xl bg-[#0F0F0F] px-6 py-2'>
							<Link
								href={`https://github.com/shuttle-hq/shuttle-examples/blob/main/${starter?.path}`}
								target='_blank'
							>
								<span className='text-sm text-white'>Github Repo</span>
							</Link>
						</button>
						<BgGlow className='absolute -top-8 left-1 -z-10 w-full' />
					</div>
				</div>

				<div className='col-span-2 rounded-3xl border border-[#434343] p-8'>
					<h1 className='mb-5 text-[36px] font-bold leading-10 text-[#D8D8D8]'>{starter?.title}</h1>

					<p className='mb-8'>{'//README'}</p>
					<Markdown body={starter?.readme} />
					<p>{'//README'}</p>
				</div>
			</div>
		</section>
	)
}
