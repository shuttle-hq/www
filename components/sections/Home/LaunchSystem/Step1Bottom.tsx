import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import clsx from 'clsx'
import { CodeBlock } from 'components/elements'
import { trackEvent } from 'lib/posthog'
import { FC, useState } from 'react'

type SelectedItem = 'hello-world' | 'using-db' | 'using-secrets'

interface Step2BottomProps {
	id?: string
	className?: string
	style?: React.CSSProperties
}

const Step2Bottom: FC<Step2BottomProps> = ({ id, className, style }) => {
	const [selectedItem, setSelectedItem] = useState<SelectedItem>('hello-world')

	return (
		<div
			className={clsx('z-40 mx-auto flex w-full items-center justify-center px-5 sm:px-10 ', className)}
			id={id}
			style={style}
		>
			<div className='shadow-gradient mt-14 before:opacity-50 before:blur-[60px] lg:mt-0'>
				<Splide
					options={{
						pagination: false,
						arrows: false,
						autoWidth: true,
						gap: '0.75rem',
						mediaQuery: 'min',
						breakpoints: {
							768: {
								gap: 0,
								drag: false,
							},
						},
					}}
					className='splide md:top-px'
					hasTrack={false}
				>
					<SplideTrack className='!overflow-visible'>
						<SplideSlide>
							<button
								className={clsx(
									'whitespace-nowrap rounded-[1.75rem] p-2 px-6 font-gradual font-bold leading-none md:rounded-b-none md:border-b-0 md:py-3',
									selectedItem === 'hello-world'
										? 'border border-[#191919] bg-[#13292C] text-head dark:bg-black'
										: 'tab-shadow dark:text-head'
								)}
								onClick={() => {
									trackEvent('homepage_howitworks_getstarted')
									setSelectedItem('hello-world')
								}}
							>
								Using Rocket
							</button>
						</SplideSlide>
						<SplideSlide>
							<button
								className={clsx(
									'whitespace-nowrap rounded-[1.75rem] p-2 px-6 font-gradual font-bold leading-none md:rounded-b-none md:border-b-0 md:py-3',
									selectedItem === 'using-db'
										? 'border border-[#191919] bg-[#13292C] text-head dark:bg-black'
										: 'tab-shadow dark:text-head'
								)}
								onClick={() => {
									trackEvent('homepage_howitworks_deploy')
									setSelectedItem('using-db')
								}}
							>
								Using Axum
							</button>
						</SplideSlide>
						<SplideSlide>
							<button
								className={clsx(
									'whitespace-nowrap rounded-[1.75rem] p-2 px-6 font-gradual font-bold leading-none md:rounded-b-none md:border-b-0 md:py-3',
									selectedItem === 'using-secrets'
										? 'border border-[#191919] bg-[#13292C] text-head dark:bg-black'
										: 'tab-shadow dark:text-head'
								)}
								onClick={() => {
									trackEvent('homepage_howitworks_addadatabase')
									setSelectedItem('using-secrets')
								}}
							>
								Using Actix Web
							</button>
						</SplideSlide>
					</SplideTrack>
				</Splide>
				<div className='mt-3 max-w-lg overflow-auto rounded-[2rem] border border-[#191919] bg-[#13292C] text-right dark:bg-black md:mt-0 md:rounded-tl-none lg:max-w-2xl'>
					<CodeBlock
						code={
							selectedItem === 'hello-world'
								? HELLO_WORLD
								: selectedItem === 'using-db'
								? USING_DB
								: selectedItem === 'using-secrets'
								? USING_SECRETS
								: HELLO_WORLD
						}
						language={'rust'}
						showLineNumbers={false}
						className='py-6'
					/>
				</div>
			</div>
		</div>
	)
}

export default Step2Bottom

const HELLO_WORLD = `
use rocket::{get, routes};

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[shuttle_runtime::main]
async fn main() -> shuttle_rocket::ShuttleRocket {
    let rocket = rocket::build().mount("/", routes![index]);

    Ok(rocket.into())
}
`.trim()

const USING_DB = `
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

const USING_SECRETS = `
use actix_web::{get, web::ServiceConfig};
use shuttle_actix_web::ShuttleActixWeb;

#[get("/")]
async fn hello_world() -> &'static str {
    "Hello World!"
}

#[shuttle_runtime::main]
async fn main() -> ShuttleActixWeb<impl FnOnce(&mut ServiceConfig) + Send + Clone + 'static> {
    let config = move |cfg: &mut ServiceConfig| {
        cfg.service(hello_world);
    };

    Ok(config.into())
}
`.trim()
