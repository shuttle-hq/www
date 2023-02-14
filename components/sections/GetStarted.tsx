import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { Copy } from 'components/svgs'
import { CodeBlock } from 'components/elements'
import { useIntersection } from 'react-use'

const GetStarted = () => {
	const [selectedSlide, setSelectedSlide] = useState(0)
	const [locked, setLocked] = useState(false)

	const intersectionRef = useRef(null)
	const intersection = useIntersection(intersectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 1,
	})

	const handleClick = (id: number, lock?: boolean) => {
		// If the user is already locked on a slide, don't allow them to change slides by hovering (when lock is undefined)
		if (locked && !lock) return

		setSelectedSlide(id)

		if (lock) setLocked(true)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (!locked && (intersection?.intersectionRatio || 0) === 1)
				setSelectedSlide((selectedSlide) => (selectedSlide === 2 ? 0 : selectedSlide + 1))
		}, 5000)

		return () => clearInterval(interval)
	}, [locked, intersection])

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
			<div
				className='mx-auto mt-10 w-full max-w-7xl gap-x-6 px-5 sm:px-10 lg:mt-16 lg:grid lg:grid-cols-[1fr_400px] lg:gap-5 xl:mt-20 xl:items-center xl:gap-12'
				onMouseLeave={() => setLocked(false)}
				ref={intersectionRef}
			>
				<div className='group relative z-10 block h-full items-end overflow-hidden rounded-2xl bg-[#13292C] px-8 pt-16 dark:bg-black sm:mt-10 sm:items-center sm:px-4 sm:px-12 sm:py-24 lg:mt-0 lg:items-end lg:items-center lg:px-8 lg:py-12 xl:flex xl:p-[4.375rem] desktop:items-end desktop:pt-[2.75rem] desktop:pb-0'>
					<CodeBlock
						language={selectedSlide === 2 ? 'none' : 'rust' }
						code={selectedSlide === 0 ? HELLO_CLOUD : selectedSlide === 1 ? USING_SQLX : CARGO_DEPLOYS }
						showLineNumbers
						className={clsx(
							'absolute left-1/2 mx-auto h-full -translate-x-1/2 transform overflow-auto rounded-t-xl sm:rounded-xl lg:w-full lg:rounded-t-3xl lg:rounded-b-3xl xl:overflow-hidden desktop:relative desktop:-bottom-px desktop:rounded-b-none'
						)}
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
						className='pointer-events-none absolute left-0 bottom-0 -z-10 w-full opacity-50 transition duration-500 group-hover:opacity-70'
					/>
					<Image
						src='/images/sections/get-started/top-left.png'
						alt='get started top'
						width={366}
						height={233}
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full object-cover group-hover:-top-5 group-hover:-left-5'
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
						className='pointer-events-none absolute left-0 top-0 -z-10 h-full w-full object-contain transition-transform duration-1000 group-hover:translate-x-20 group-hover:-translate-y-3 sm:hidden lg:block'
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

				<div className='mt-12 flex h-full gap-3 overflow-y-hidden overflow-x-scroll p-1 lg:mt-0 lg:flex-col lg:overflow-visible'>
					<GetStartedSlide
						number={0}
						title='Install'
						text='Install the CLI'
						handleClick={handleClick}
						isSelected={0 === selectedSlide}
						gradient='from-[#FC540C] to-[#C39348]'
					>
						<div className='relative mt-3 flex w-full cursor-text items-center rounded-2xl border border-[#191919] bg-transparent py-2 pl-3 pr-14 outline-none'>
							$ cargo install cargo-shuttle
							<button className='absolute right-3 rounded-lg border border-transparent p-1 hover:border-[#484848] hover:bg-[#343434] dark:text-[#C2C2C2]'>
								<Copy />
							</button>
						</div>
					</GetStartedSlide>
					<GetStartedSlide
						number={1}
						title='Initialize'
						text='Bootstrap your project'
						handleClick={handleClick}
						isSelected={1 === selectedSlide}
						gradient='from-[#D1883C] to-[#ABA363]'
					>
						<div className='relative mt-3 flex w-full cursor-text items-center rounded-2xl border border-[#191919] bg-transparent py-2 pl-3 pr-14 outline-none'>
							$ cargo shuttle init
							<button className='absolute right-3 rounded-lg border border-transparent p-1 hover:border-[#484848] hover:bg-[#343434] dark:text-[#C2C2C2]'>
								<Copy />
							</button>
						</div>
					</GetStartedSlide>
					<GetStartedSlide
						number={2}
						title='Deploy'
						text='Take-off in 3, 2, 1..'
						handleClick={handleClick}
						isSelected={2 === selectedSlide}
						gradient='from-[#C19549] to-[#8AB58D]'
					>
						<div className='relative mt-3 flex w-full cursor-text items-center rounded-2xl border border-[#191919] bg-transparent py-2 pl-3 pr-14 outline-none'>
							$ cargo shuttle deploy
							<button className='absolute right-3 rounded-lg border border-transparent p-1 hover:border-[#484848] hover:bg-[#343434] dark:text-[#C2C2C2]'>
								<Copy />
							</button>
						</div>
					</GetStartedSlide>
				</div>
			</div>
		</>
	)
}

interface GetStartedSlideProps {
	number: number
	title: string
	text: string
	gradient?: string
	children?: ReactNode
	handleClick: (id: number, lock?: boolean) => void
	isSelected: boolean
}

const GetStartedSlide: FC<GetStartedSlideProps> = ({
	number,
	title,
	text,
	children,
	gradient,
	handleClick,
	isSelected,
}) => {
	// React splide is 0-indexed
	const adjustedNumber = number + 1

	return (
		<div onClick={() => handleClick(number, true)}
			 onMouseEnter={() => handleClick(number)}
			 className={clsx(
				 'group relative h-max min-w-max cursor-pointer p-[1px] cursor-pointer rounded-2xl transition after:rounded-2xl',
				 isSelected ? clsx('bg-gradient-to-r to-transparent', gradient) : 'transparent'
			 )}
		>
			<div className={clsx('bg-[#E9E9E9] dark:bg-black p-6 rounded-2xl after:rounded-2xl')}>
				<h3 className='font-gradual text-2xl font-bold dark:text-[#C2C2C2]'>
				<span className={clsx('bg-gradient-to-r bg-clip-text text-transparent', gradient)}>
					0{adjustedNumber}
				</span>
					&nbsp;{title}
				</h3>
				<p className='mt-2'>{text}</p>

				{children}

				{/* If it the whole slide isn't outlined, add a line under the slide */}
				{adjustedNumber !== 1 && (
					<hr className='absolute -bottom-px left-6 w-[calc(100%-3rem)] border-black/10 group-hover:hidden dark:border-[#191919]' />
				)}
			</div>
		</div>

	)
}

export default GetStarted

const HELLO_CLOUD = `
use rocket::{get, routes};
#[get("/hello")]
fn hello() -> &'static str {
    "Hello, world!"
}
#[shuttle_service::main]
async fn init() -> shuttle_service::ShuttleRocket {
    Ok(
        rocket::build()
            .mount("/", routes![hello])
    )
}
`.trim()

const CARGO_DEPLOYS = `
$ cargo shuttle deploy
   Packaging url-shortener v0.1.0 (/shuttle/url-shortener)
   Archiving Cargo.toml
   Archiving Cargo.toml.orig
   Archiving README.md
   Archiving Shuttle.toml
   Archiving migrations/20220324143837_urls.sql
   Archiving src/lib.rs
   Compiling tracing-attributes v0.1.20
   Compiling tokio-util v0.6.9
   Compiling multer v2.0.2
   Compiling hyper v0.14.18
   Compiling rocket_http v0.5.0-rc.1
   Compiling rocket_codegen v0.5.0-rc.1
   Compiling rocket v0.5.0-rc.1
   Compiling shuttle-service v0.2.5
   Compiling url-shortener v0.1.0 (/opt/unveil/crates/s-2)
    Finished dev [unoptimized + debuginfo] target(s) in 1m 01s
        Project:            url-shortener
        Deployment Id:      3d08ac34-ad63-41c1-836b-99af...
        Deployment Status:  DEPLOYED
        Host:               url-shortener.shuttleapp.rs
        Created At:         2022-04-01 08:32:34.412602556 UTC
        Database URI:       postgres://***:***@pg.shuttle.rs/db
❯
`.trim()

const USING_SQLX = `
use rocket::{get, routes, State};
use sqlx::PgPool;
struct MyState(PgPool);
#[get("/hello")]
fn hello(state: &State<MyState>) -> &'static str {
    // Do things with \`state.0\`...
    "Hello, Postgres!"
}
#[shuttle_service::main]
async fn rocket(
    #[shared::Postgres] pool: PgPool
) -> shuttle_service::ShuttleRocket {
    let state = MyState(pool);
    Ok(
        rocket::build()
            .manage(state)
            .mount("/", routes![hello])
    )
}
`.trim()
