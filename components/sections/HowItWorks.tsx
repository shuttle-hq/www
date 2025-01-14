import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import clsx from "clsx";
import { CodeBlock } from "components/elements";
import { trackEvent } from "lib/posthog";
import { useState } from "react";

type SelectedItem = "hello-world" | "deploy1" | "postgres" | "deploy2";

const HowItWorks = () => {
  const [selectedItem, setSelectedItem] = useState<SelectedItem>("hello-world");

  return (
    <div className="mx-auto mt-24 w-full max-w-7xl overflow-hidden px-5 sm:mt-28 sm:overflow-visible sm:px-10 lg:mt-36 lg:grid lg:grid-cols-[1fr_minmax(566px,_1fr)] lg:gap-7 xl:grid-cols-2 desktop:mt-40">
      <div className="col-span-2">
        <h2 className="font-gradual text-5xl font-bold text-black dark:text-head lg:text-[3.5rem]">
          How it works
        </h2>
      </div>
      <div>
        <div className="mt-4 space-y-7 text-body sm:mt-8 lg:text-xl">
          <p
            className={clsx(
              "text-body transition duration-200",
              selectedItem === "hello-world" && "text-head",
            )}
            onMouseOver={() => setSelectedItem("hello-world")}
          >
            With Shuttle you can take any Rust service code, and have it ready
            for deployment by adding a single annotation to your main function.
          </p>
          <p
            className={clsx(
              "text-body transition duration-200",
              selectedItem === "deploy1" && "text-head",
            )}
            onMouseOver={() => setSelectedItem("deploy1")}
          >
            Your code is packaged and sent to Shuttle where it is compiled and
            deployed. After a few seconds, your app is already running in the
            cloud.
          </p>
          <p
            className={clsx(
              "text-body transition duration-200",
              selectedItem === "postgres" && "text-head",
            )}
            onMouseOver={() => setSelectedItem("postgres")}
          >
            You can then add more annotations that control cloud resources.
            Adding components like databases, secrets or storage is as easy as
            adding arguments to a function.
          </p>
          <p
            className={clsx(
              "text-body transition duration-200",
              selectedItem === "deploy2" && "text-head",
            )}
            onMouseOver={() => setSelectedItem("deploy2")}
          >
            The next time you deploy your app, Shuttle provisions and configures
            the resources you need. In minutes, you can build complex and
            scalable apps on industry-standard AWS products and never have to
            touch the AWS console.
          </p>
        </div>
      </div>
      <div className="shadow-gradient mt-14 before:opacity-50 before:blur-[60px] lg:mt-0">
        <Splide
          options={{
            pagination: false,
            arrows: false,
            autoWidth: true,
            gap: "0.75rem",
            mediaQuery: "min",
            breakpoints: {
              768: {
                gap: 0,
                drag: false,
              },
            },
          }}
          className="splide md:top-px"
          hasTrack={false}
        >
          <SplideTrack className="!overflow-visible">
            <SplideSlide>
              <button
                className={clsx(
                  "whitespace-nowrap rounded-[1.75rem] p-2 px-6 font-gradual font-bold leading-none md:rounded-b-none md:border-b-0 md:py-3",
                  selectedItem === "hello-world"
                    ? "border border-[#191919] bg-[#13292C] text-head dark:bg-black"
                    : "tab-shadow dark:text-head",
                )}
                onClick={() => {
                  trackEvent("homepage_howitworks_getstarted");
                  setSelectedItem("hello-world");
                }}
              >
                Get Started
              </button>
            </SplideSlide>
            <SplideSlide>
              <button
                className={clsx(
                  "whitespace-nowrap rounded-[1.75rem] p-2 px-6 font-gradual font-bold leading-none md:rounded-b-none md:border-b-0 md:py-3",
                  selectedItem === "deploy1"
                    ? "border border-[#191919] bg-[#13292C] text-head dark:bg-black"
                    : "tab-shadow dark:text-head",
                )}
                onClick={() => {
                  trackEvent("homepage_howitworks_deploy");
                  setSelectedItem("deploy1");
                }}
              >
                Deploy
              </button>
            </SplideSlide>
            <SplideSlide>
              <button
                className={clsx(
                  "whitespace-nowrap rounded-[1.75rem] p-2 px-6 font-gradual font-bold leading-none md:rounded-b-none md:border-b-0 md:py-3",
                  selectedItem === "postgres"
                    ? "border border-[#191919] bg-[#13292C] text-head dark:bg-black"
                    : "tab-shadow dark:text-head",
                )}
                onClick={() => {
                  trackEvent("homepage_howitworks_addadatabase");
                  setSelectedItem("postgres");
                }}
              >
                Add a Database
              </button>
            </SplideSlide>
            <SplideSlide>
              <button
                className={clsx(
                  "whitespace-nowrap rounded-[1.75rem] p-2 px-6 font-gradual font-bold leading-none md:rounded-b-none md:border-b-0 md:py-3",
                  selectedItem === "deploy2"
                    ? "border border-[#191919] bg-[#13292C] text-head dark:bg-black"
                    : "tab-shadow dark:text-head",
                )}
                onClick={() => {
                  trackEvent("homepage_howitworks_deployagain");
                  setSelectedItem("deploy2");
                }}
              >
                Deploy Again
              </button>
            </SplideSlide>
          </SplideTrack>
        </Splide>
        <div className="mt-3 rounded-[2rem] border border-[#191919] bg-[#13292C] text-right dark:bg-black md:mt-0 md:rounded-tl-none">
          <CodeBlock
            code={
              selectedItem === "hello-world"
                ? HELLO_WORLD
                : selectedItem === "deploy1"
                  ? DEPLOY1
                  : selectedItem === "postgres"
                    ? POSTGRES
                    : DEPLOY2
            }
            language={
              selectedItem === "deploy1" || selectedItem === "deploy2"
                ? "none"
                : "rust"
            }
            showLineNumbers={
              selectedItem === "hello-world" || selectedItem === "postgres"
            }
            className="py-6"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

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
`.trim();

const DEPLOY1 = `
$ shuttle deploy

 INFO Starting deployment
 INFO Building project
   Compiling proc-macro2 v1.0.68
   Compiling unicode-ident v1.0.12
   ...
   Compiling shuttle-runtime v0.28.0
   Compiling shuttle-rocket v0.28.0
   Compiling hello-world v0.1.0
    Finished release [optimized] target(s) in 1m 28s
 INFO Loading resources
 INFO Starting service

Service Name:  hello-world
Deployment ID: 2ee051bf-d9f7-43db-928e-c099dccc35de
Status:        running
Last Updated:  2023-10-07T16:51:48Z
URI:           https://hello-world.shuttleapp.rs
`.trim();

const POSTGRES = `
use rocket::{get, routes, State};
use sqlx::PgPool;

#[get("/")]
async fn hello(state: &State<MyState>) -> &'static str {
    // Do things with \`state.pool\`...

    "Hello, Postgres!"
}

struct MyState {
    pool: PgPool,
}

#[shuttle_runtime::main]
async fn rocket(
    #[shuttle_shared_db::Postgres] pool: PgPool,
) -> shuttle_rocket::ShuttleRocket {
    let state = MyState { pool };
    let rocket = rocket::build()
        .mount("/", routes![hello])
        .manage(state);

    Ok(rocket.into())
}
`.trim();

const DEPLOY2 = `
$ shuttle deploy

Service Name:  hello-world
Deployment ID: 2ee051bf-d9f7-43db-928e-c099dccc35de
Status:        running
Last Updated:  2023-10-07T16:51:48Z
URI:           https://hello-world.shuttleapp.rs
Database URI:  postgres://***:***@pg.shuttle.rs/db
`.trim();
