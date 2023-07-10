import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import clsx from 'clsx'
import { CodeBlock } from 'components/elements'
import { useState } from 'react'

const HowItWorks = () => {
	const [selectedItem, setSelectedItem] = useState('hello-cloud')

	return (
		<div className='mx-auto mt-24 w-full max-w-7xl overflow-hidden px-5 sm:mt-28 sm:overflow-visible sm:px-10 lg:mt-36 lg:grid lg:grid-cols-[1fr_minmax(566px,_1fr)] lg:gap-7 xl:grid-cols-2 desktop:mt-40'>
			<div className='col-span-2'>
				<h2 className='font-gradual text-5xl font-bold text-black dark:text-[#C2C2C2] lg:text-[3.5rem]'>
					How it works
				</h2>
			</div>
			<div>
				<div className='mt-4 space-y-7 text-[#525151] dark:text-[#7A7A7A] sm:mt-8 lg:text-xl'>
					<p
						className={clsx(
							'text-[#525151] transition duration-200 dark:text-[#7A7A7A]',
							selectedItem === 'hello-cloud' && '!text-black dark:text-[#C2C2C2]'
						)}
						onMouseOver={() => setSelectedItem("hello-cloud")}
					>
						With Shuttle you can take any Rust service code, and have it ready for deployment by adding
						a single annotation to your main function.
					</p>
					<p
						className={clsx(
							'text-[#525151] transition duration-200 dark:text-[#7A7A7A]',
							selectedItem === 'cargo-deploy' && '!text-black dark:text-[#C2C2C2]'
						)}
						onMouseOver={() => setSelectedItem("cargo-deploy")}
					>
						Your code is packaged and sent to Shuttle where it is compiled and deployed. After a few
						seconds, your app is already running in the cloud.
					</p>
					<p
						className={clsx(
							'text-[#525151] transition duration-200 dark:text-[#7A7A7A]',
							selectedItem === 'using-sql' && '!text-black dark:text-[#C2C2C2]'
						)}
						onMouseOver={() => setSelectedItem("using-sql")}
					>
						You can then add more annotations that control cloud resources. Adding components like
						databases, secrets or storage is as easy as adding arguments to a function.
					</p>
					<p
						className={clsx(
							'text-[#525151] transition duration-200 dark:text-[#7A7A7A]',
							selectedItem === 'using-axum' && '!text-black dark:text-[#C2C2C2]'
						)}
						onMouseOver={() => setSelectedItem("using-axum")}
					>
						The next time you deploy your app, Shuttle provisions and configures the resources you
						need. In minutes, you can build complex and scalable apps on industry-standard AWS products
						and never have to touch the AWS console.
					</p>
				</div>
			</div>
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
									selectedItem === 'hello-cloud'
										? 'border border-[#191919] bg-[#13292C] text-[#D8D8D8] dark:bg-black'
										: 'tab-shadow dark:text-[#C2C2C2]'
								)}
								onClick={() => setSelectedItem('hello-cloud')}
							>
								Get Started
							</button>
						</SplideSlide>
						<SplideSlide>
							<button
								className={clsx(
									'whitespace-nowrap rounded-[1.75rem] p-2 px-6 font-gradual font-bold leading-none md:rounded-b-none md:border-b-0 md:py-3',
									selectedItem === 'cargo-deploy'
										? 'border border-[#191919] bg-[#13292C] text-[#D8D8D8] dark:bg-black'
										: 'tab-shadow dark:text-[#C2C2C2]'
								)}
								onClick={() => setSelectedItem('cargo-deploy')}
							>
								Deploy
							</button>
						</SplideSlide>
						<SplideSlide>
							<button
								className={clsx(
									'whitespace-nowrap rounded-[1.75rem] p-2 px-6 font-gradual font-bold leading-none md:rounded-b-none md:border-b-0 md:py-3',
									selectedItem === 'using-sql'
										? 'border border-[#191919] bg-[#13292C] text-[#D8D8D8] dark:bg-black'
										: 'tab-shadow dark:text-[#C2C2C2]'
								)}
								onClick={() => setSelectedItem('using-sql')}
							>
								Add a Database
							</button>
						</SplideSlide>
						<SplideSlide>
							<button
								className={clsx(
									'whitespace-nowrap rounded-[1.75rem] p-2 px-6 font-gradual font-bold leading-none md:rounded-b-none md:border-b-0 md:py-3',
									selectedItem === 'using-axum'
										? 'border border-[#191919] bg-[#13292C] text-[#D8D8D8] dark:bg-black'
										: 'tab-shadow dark:text-[#C2C2C2]'
								)}
								onClick={() => setSelectedItem('using-axum')}
							>
								Deploy Again
							</button>
						</SplideSlide>
					</SplideTrack>
				</Splide>
				<div className='mt-3 rounded-[2rem] border border-[#191919] bg-[#13292C] p-6 text-right dark:bg-black md:mt-0 md:rounded-tl-none'>
					<CodeBlock
						code={
							selectedItem === 'hello-cloud'
								? HELLO_CLOUD
								: selectedItem === 'cargo-deploy'
								? CARGO_DEPLOYS
								: selectedItem === 'using-sql'
								? USING_SQLX
								: USING_AXUM
						}
						language={selectedItem === 'cargo-deploy' ? 'terminal' : 'rust'}
						showLineNumbers={selectedItem !== 'hello-cloud'}
						className='mt-6'
					/>
				</div>
			</div>
		</div>
	)
}

export default HowItWorks

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

const USING_AXUM = `
$ cargo shuttle deploy
    Finished dev [unoptimized + debuginfo] target(s) in 20s
        Project:            url-shortener
        Deployment Id:      3d08ac34-ad63-41c1-836b-99af...
        Deployment Status:  DEPLOYED
        Host:               url-shortener.shuttleapp.rs
        Created At:         2022-04-01 08:32:34.412602556 UTC
        Database URI:       postgres://***:***@pg.shuttle.rs/db
❯
`.trim()
