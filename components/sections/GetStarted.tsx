import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { Copy } from 'components/svgs'
import { CodeBlock } from 'components/elements'
import { useCopyToClipboard, useIntersection } from 'react-use'
import { trackEvent } from 'lib/posthog'

type GetStartedStep =
	| 'homepage_getstartedinseconds_clipboard_install'
	| 'homepage_getstartedinseconds_clipboard_initalize'
	| 'homepage_getstartedinseconds_clipboard_deploy'

const GetStarted = () => {
	const [selectedSlide, setSelectedSlide] = useState(0)

	const handleClick = (id: number) => {
		setSelectedSlide(id)
	}

	return (
		<>
			<div className='mx-auto mt-24 w-full max-w-[800px] px-5 sm:mt-28 sm:px-10 lg:mt-32 xl:mt-36 desktop:mt-52'>
				<h2 className='font-gradual text-4.5 font-bold leading-none dark:text-[#C2C2C2]'>
					Get started in seconds
				</h2>
				<p className='mt-5 lg:text-xl'>
					Build an app with your favourite Rust framework and deploy it immediately. We’ll take care of
					all the infrastructure.
				</p>
			</div>
			<div className='mx-auto mt-10 w-full max-w-7xl gap-x-6 px-5 sm:px-10 lg:mt-16 lg:grid lg:grid-cols-[1fr_400px] lg:gap-5 xl:mt-20 xl:items-center xl:gap-12'>
				<div className='group relative z-10 block h-full items-end overflow-hidden rounded-2xl bg-[#13292C] px-8 pt-16 dark:bg-black sm:mt-10 sm:h-[600px] sm:items-center sm:px-12 sm:px-4 sm:py-24 lg:mt-0 lg:items-end lg:items-center lg:px-8 lg:py-12 xl:flex xl:p-[4.375rem] desktop:items-end desktop:pb-0 desktop:pt-[2.75rem]'>
					<CodeBlock
						language={selectedSlide === 1 ? 'rust' : 'none'}
						showLineNumbers={selectedSlide === 1}
						copyBtn={selectedSlide === 1}
						code={
							selectedSlide === 0
								? SHUTTLE_INSTALL
								: selectedSlide === 1
								? SHUTTLE_INIT
								: SHUTTLE_DEPLOY
						}
						className='absolute left-1/2 mx-auto h-full -translate-x-1/2 transform overflow-auto rounded-t-xl sm:block sm:rounded-xl lg:w-full lg:rounded-b-3xl lg:rounded-t-3xl xl:overflow-hidden desktop:relative desktop:-bottom-px desktop:rounded-b-none'
					/>
					<Image
						src='/images/sections/get-started/noise.png'
						alt='get started noise'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 hidden h-full w-full object-cover lg:block'
					/>
					<Image
						src='/images/sections/get-started/bottom.png'
						alt='get started background'
						width={739}
						height={422}
						className='pointer-events-none absolute bottom-0 left-0 -z-10 w-full opacity-50 transition duration-500 group-hover:opacity-70'
					/>
					<Image
						src='/images/sections/get-started/top-left.png'
						alt='get started top'
						width={366}
						height={233}
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full object-cover group-hover:-left-5 group-hover:-top-5'
					/>
					{/* Tablet */}
					<Image
						src='/images/sections/get-started/tablet-bg.png'
						alt='get started tablet background'
						fill
						className='pointer-events-none absolute left-0 top-0 -z-10 hidden h-full w-full object-cover sm:block lg:hidden'
					/>
					<Image
						src='/images/sections/get-started/stars.png'
						alt='stars'
						width={595}
						height={487}
						sizes='100vw, (min-width: 768px) 768px'
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full object-contain transition-transform duration-1000 group-hover:-translate-y-3 group-hover:translate-x-20 sm:hidden lg:block'
					/>
					<Image
						src='/images/sections/get-started/stars-2.png'
						alt='stars'
						width={595}
						height={487}
						sizes='100vw, (min-width: 768px) 768px'
						className='sn:hidden pointer-events-none absolute left-0 top-0 -z-10 h-full w-full object-contain transition-transform duration-1000 group-hover:-translate-x-20 group-hover:-translate-y-1 lg:block'
					/>
				</div>

				<div className='mt-12 flex gap-3 overflow-y-hidden overflow-x-scroll p-1 lg:mt-0 lg:flex-col lg:overflow-visible'>
					<GetStartedSlide
						number={0}
						title='Install'
						command='cargo install cargo-shuttle'
						text='Install the CLI'
						handleClick={handleClick}
						isSelected={0 === selectedSlide}
						gradient='from-[#FC540C] to-[#C39348]'
						step='homepage_getstartedinseconds_clipboard_install'
					/>
					<GetStartedSlide
						number={1}
						title='Initialize'
						command='cargo shuttle init'
						text='Bootstrap your project'
						handleClick={handleClick}
						isSelected={1 === selectedSlide}
						gradient='from-[#D1883C] to-[#ABA363]'
						step='homepage_getstartedinseconds_clipboard_initalize'
					/>
					<GetStartedSlide
						number={2}
						title='Deploy'
						command='cargo shuttle deploy'
						text='Take-off in 3, 2, 1..'
						handleClick={handleClick}
						isSelected={2 === selectedSlide}
						gradient='from-[#C19549] to-[#8AB58D]'
						step='homepage_getstartedinseconds_clipboard_deploy'
					/>
				</div>
			</div>
		</>
	)
}

interface GetStartedSlideProps {
	number: number
	title: string
	text: string
	command: string
	gradient?: string
	handleClick: (id: number, lock?: boolean) => void
	isSelected: boolean
	step: GetStartedStep
}

const GetStartedSlide: FC<GetStartedSlideProps> = ({
	number,
	title,
	text,
	command,
	gradient,
	handleClick,
	isSelected,
	step,
}) => {
	const [_, copyToClipboard] = useCopyToClipboard()
	// React splide is 0-indexed
	const adjustedNumber = number + 1

	return (
		<div
			onMouseEnter={() => handleClick(number)}
			className={clsx(
				'group relative h-max min-w-max cursor-pointer cursor-pointer rounded-2xl p-[1px] transition after:rounded-2xl',
				isSelected ? clsx('bg-gradient-to-r to-transparent', gradient) : 'transparent'
			)}
		>
			<div className={clsx('rounded-2xl bg-[#E9E9E9] p-6 after:rounded-2xl dark:bg-black')}>
				<h3 className='font-gradual text-2xl font-bold dark:text-[#C2C2C2]'>
					<span className={clsx('bg-gradient-to-r bg-clip-text text-transparent', gradient)}>
						0{adjustedNumber}
					</span>
					&nbsp;{title}
				</h3>
				<p className='mt-2'>{text}</p>

				<div className='relative mt-3 flex w-full cursor-text items-center rounded-2xl border border-[#191919] bg-transparent py-2 pl-3 pr-14 outline-none'>
					$ {command}
					<button
						className='absolute right-3 rounded-lg border border-transparent p-1 hover:border-[#484848] hover:bg-[#343434] dark:text-[#C2C2C2]'
						onClick={() => {
							trackEvent(step)
							copyToClipboard(command)
						}}
					>
						<Copy />
					</button>
				</div>

				<hr className='absolute -bottom-px left-6 w-[calc(100%-3rem)] border-black/10 dark:border-[#191919]' />
			</div>
		</div>
	)
}

export default GetStarted

const SHUTTLE_INSTALL = `
$ cargo shuttle help

Usage: cargo-shuttle [OPTIONS] <COMMAND>

Commands:
  init        Create a new Shuttle project
  run         Run a Shuttle service locally
  deploy      Deploy a Shuttle service
  deployment  Manage deployments of a Shuttle service
  status      View the status of a Shuttle service
  stop        Stop this Shuttle service
  logs        View the logs of a deployment
  project     List or manage projects on Shuttle
  resource    Manage resources of a Shuttle project
  secrets     Manage secrets for this Shuttle service
  clean       Remove cargo build artifacts
  login       Login to the Shuttle platform
  logout      Log out of the Shuttle platform
  generate    Generate shell completions
  feedback    Open an issue on GitHub and provide feedback
  help        Print this message
`.trim()

const SHUTTLE_INIT = `
use axum::{routing::get, Router};

async fn hello_world() -> &'static str {
    "Hello, world!"
}

#[shuttle_runtime::main]
async fn main() -> shuttle_axum::ShuttleAxum {
    let router = Router::new().route("/", get(hello_world));

    Ok(router.into())
}
`.trim()

const SHUTTLE_DEPLOY = `
$ cargo shuttle deploy

 INFO Starting deployment
 INFO Building project
   Compiling proc-macro2 v1.0.68
   Compiling unicode-ident v1.0.12
   ...
   Compiling shuttle-runtime v0.28.0
   Compiling shuttle-axum v0.28.0
   Compiling hello-world v0.1.0
    Finished release [optimized] target(s) in 1m 28s
 INFO Loading resources
 INFO Starting service

Service Name:  hello-world
Deployment ID: 2ee051bf-d9f7-43db-928e-c099dccc35de
Status:        running
Last Updated:  2023-10-07T16:51:48Z
URI:           https://hello-world.shuttleapp.rs
Database URI:  postgres://***:***@pg.shuttle.rs/db
`.trim()
