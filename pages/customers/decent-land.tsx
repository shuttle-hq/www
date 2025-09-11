import Link from "next/link";
import Image from "next/image";
import { ReadyForShuttle } from "components/sections/UserStories/ReadyForShuttle";
import userStoriesStyles from "./UserStories.module.css";
import { UserQuote } from "components/sections/UserStories/UserQuote";

export default function DecentLand() {
  return (
    <main className="flex flex-col mx-auto mt-24 gap-16 w-full max-w-[1280px] px-5 sm:px-10 lg:mt-28 items-center">
      <div className="inline-flex flex-col justify-start items-center gap-10">
        <div className="w-full max-w-[782px] flex flex-col justify-start items-start gap-10">
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <Image
              src="/images/user-stories/weavevm.png"
              alt="WeaveVM logo"
              width={140}
              height={30}
            />
            <h2 className="self-stretch justify-start text-neutral-200 text-5xl font-bold font-gradual leading-[57.60px]">
              How Decent Land eliminated infrastructure complexity for Web3
              development
            </h2>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              Using Rust and Shuttle to eliminate off-chain infrastructure
              complexity and accelerate WeaveVM development
            </p>
          </div>
        </div>

        <UserQuote className="w-full max-w-[984px]">
          <div className="flex flex-col gap-10">
            <span className="text-neutral-200 text-lg md:text-2xl font-normal">
              &quot;We were spending precious dev time on infrastructure instead
              of building features that actually mattered... Then we found
              Shuttle, and it won on every single DevOps point.&quot;
            </span>
            <span className="text-neutral-200 text-lg md:text-2xl font-normal self-end">
              Rani from DecentLand
            </span>
          </div>
        </UserQuote>

        <div className="w-full max-w-[782px] flex flex-col justify-start items-start gap-10">
          <div className="self-stretch justify-start">
            <span className="text-text-secondary text-xl font-normal">
              Decent Land
            </span>
            <span className="text-text-secondary text-xl font-normal">
              &apos;s flagship product{" "}
            </span>
            <span className="text-text-secondary text-xl font-normal">
              WeaveVM
            </span>
            <span className="text-text-secondary text-xl font-normal">
              {" "}
              provides permanent data storage and high-throughput data
              availability for blockchain networks, settling 100k daily
              transactions and securing over $1.5B in total value across
              networks like Metis, Humanode, Avalanche, and Dymension. As a Web3
              infrastructure company, Decent Land needed reliable off-chain
              auxiliary services to support their on-chain protocol - and
              that&apos;s where Shuttle comes in.
            </span>
          </div>
        </div>

        <div className="w-full max-w-[984px] self-stretch flex flex-col justify-start items-start">
          <ul className="grid grid-cols-1 md:grid-cols-3 rounded-[20px] gap-6">
            <li
              className={`self-stretch p-6 md:p-10 flex flex-col justify-start items-start gap-2 rounded-[20px] ${userStoriesStyles["bg-tile-1"]}`}
            >
              <div className="justify-start text-neutral-200 text-lg md:text-2xl font-normal">
                30-minute migration
              </div>
              <div className="justify-start text-text-secondary text-base font-normal leading-normal">
                Moved from Heroku to Shuttle with minimal deployment complexity
              </div>
            </li>
            <li
              className={`self-stretch p-6 md:p-10 flex flex-col justify-start items-start gap-2 rounded-[20px] ${userStoriesStyles["bg-tile-2"]}`}
            >
              <div className="justify-start text-neutral-200 text-lg md:text-2xl font-normal">
                100k daily transactions
              </div>
              <div className="justify-start text-text-secondary text-base font-normal leading-normal">
                Moved from Heroku to Shuttle with minimal deployment complexity
              </div>
            </li>
            <li
              className={`self-stretch p-6 md:p-10 flex flex-col justify-start items-start gap-2 rounded-[20px] ${userStoriesStyles["bg-tile-3"]}`}
            >
              <div className="justify-start text-neutral-200 text-lg md:text-2xl font-normal">
                $1.5B total value secured
              </div>
              <div className="flex-1 justify-start text-text-secondary text-base font-normal leading-normal">
                Providing infrastructure across networks like Metis, Humanode,
                Avalanche, and Dymension
              </div>
            </li>
          </ul>
        </div>

        <div className="w-full max-w-[782px] flex flex-col justify-start items-start gap-10">
          <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
            The Challenge: Infrastructure Overhead Distracting from Core Mission
          </h2>
          <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
            While WeaveVM (their on-chain product) was performing well, Decent
            Land needed supporting off-chain infrastructure - indexers, APIs,
            ETL pipelines, and data availability layers. They started with
            Heroku for deploying these auxiliary services, but over time this
            grew into more of a headache than they asked for. The team was
            facing several critical problems:
          </p>
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch inline-flex flex-col justify-start items-start">
              {[
                "Unnecessarily complex deployment flows that slowed development velocity",
                "Dependency mismatches causing version conflicts and compatibility issues",
                "SSL certificate management that absorbed valuable development time",
                "Infrastructure complexity that distracted from building features that actually mattered",
              ].map((item, idx) => (
                <div
                  key={item}
                  className="self-stretch py-5 border-b border-white/30 inline-flex justify-start items-baseline gap-5"
                >
                  <div className="justify-start text-xl font-normal leading-[32px] tracking-tight bg-gradient-3 bg-clip-text text-transparent">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 justify-start">
                    <span className="text-neutral-200 text-xl font-normal leading-[32px] tracking-tight">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
            For Web3 teams like Decent Land, running off-chain auxiliary
            infrastructure reliably is an orthogonal skillset that, while
            important, distracts from their core mission of building robust
            on-chain protocols. This infrastructure complexity was becoming a
            significant barrier to their development velocity.
          </p>
        </div>
        <div className="w-full max-w-[782px] flex flex-col justify-start items-start gap-10">
          <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
            Choosing Shuttle for Rust-Native Off-Chain Infrastructure
          </h2>
          <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
            Decent Land chose Shuttle to deploy their off-chain supporting
            infrastructure with seamless Rust integration and simplified
            deployment process. The migration was remarkably quick, taking less
            than 30 minutes using Shuttle&apos;s annotation system on existing
            services.
          </p>
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <h2 className="self-stretch justify-start text-text-secondary text-xl font-normal">
              The team&apos;s approach leveraged Shuttle&apos;s core
              capabilities for their off-chain infrastructure:
            </h2>
            <div className="self-stretch inline-flex flex-col justify-start items-start">
              {[
                "Native Rust deployment eliminating container complexity",
                "Integrated database management with automatic PostgreSQL provisioning",
                "Built-in SSL certificates that worked out of the box",
                "Secrets management with secure configuration handling",
                "Streamlined deployment flows using Shuttle's annotation system",
              ].map((item, idx) => (
                <div
                  key={item}
                  className="self-stretch py-5 border-b border-white/30 inline-flex justify-start items-baseline gap-5"
                >
                  <div className="justify-start text-xl font-normal leading-[32px] tracking-tight bg-gradient-3 bg-clip-text text-transparent">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 justify-start">
                    <span className="text-neutral-200 text-xl font-normal leading-[32px] tracking-tight">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
            Decent Land&apos;s CTO Rani and the team are Rust experts, so
            translating that expertise to off-chain infrastructure deployment
            was natural and liberating. The team found that Shuttle&apos;s
            Rust-focused approach eliminated the deployment complexity they
            experienced with other platforms.
          </p>
        </div>
        <div className="w-full max-w-[782px] flex flex-col justify-start items-start gap-10">
          <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
            Achieving Streamlined Development and Deployment
          </h2>
          <div className="self-stretch flex flex-col justify-start items-start gap-8">
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              Since migrating to Shuttle, Decent Land has transformed their
              off-chain infrastructure workflow and achieved significant
              operational improvements:
            </p>

            <div className="self-stretch inline-flex flex-col justify-start items-start">
              {[
                {
                  title: "Development velocity",
                  description: `The backend team now ships off-chain Rust microservices —
                      APIs, ETL pipelines, cron jobs — without breaking a sweat.
                      Their supporting services scale seamlessly alongside their
                      on-chain WeaveVM protocol.`,
                  icon: (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3333 26.1803C14.376 26.1803 13.5533 25.8577 12.8653 25.2126C12.1773 24.5673 11.7949 23.7788 11.718 22.8473H13.7437C13.8119 23.2335 13.9931 23.5523 14.2873 23.8036C14.5813 24.0549 14.93 24.1806 15.3333 24.1806C15.7967 24.1806 16.1902 24.0186 16.514 23.6946C16.838 23.3706 17 22.9769 17 22.5136C17 22.0505 16.838 21.6569 16.514 21.3329C16.1902 21.0089 15.7967 20.8469 15.3333 20.8469H3V18.8473H15.3333C16.3504 18.8473 17.2158 19.2041 17.9293 19.9176C18.6431 20.6314 19 21.4967 19 22.5136C19 23.5307 18.6431 24.3962 17.9293 25.1099C17.2158 25.8235 16.3504 26.1803 15.3333 26.1803ZM3 13.1546V11.1549H20.6667C21.33 11.1549 21.8847 10.9318 22.3307 10.4856C22.7769 10.0394 23 9.48473 23 8.82161C23 8.15828 22.7769 7.6035 22.3307 7.15728C21.8847 6.71106 21.33 6.48795 20.6667 6.48795C20.0547 6.48795 19.5384 6.67684 19.118 7.05461C18.6973 7.43239 18.4529 7.91017 18.3847 8.48795H16.359C16.4359 7.34795 16.8838 6.39628 17.7027 5.63295C18.5213 4.86984 19.5093 4.48828 20.6667 4.48828C21.8838 4.48828 22.9102 4.90617 23.746 5.74195C24.582 6.57795 25 7.6045 25 8.82161C25 10.0385 24.582 11.0649 23.746 11.9009C22.9102 12.7367 21.8838 13.1546 20.6667 13.1546H3ZM25 23.6419V21.6163C25.5778 21.5481 26.0556 21.3036 26.4333 20.8829C26.8111 20.4625 27 19.9463 27 19.3343C27 18.6709 26.7769 18.1163 26.3307 17.6703C25.8847 17.2241 25.33 17.0009 24.6667 17.0009H3V15.0009H24.6667C25.8838 15.0009 26.9102 15.4189 27.746 16.2549C28.582 17.0907 29 18.1172 29 19.3343C29 20.4916 28.6183 21.4796 27.855 22.2983C27.0919 23.1172 26.1402 23.5651 25 23.6419Z"
                        fill="url(#paint0_linear_444_19858)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_444_19858"
                          x1="3"
                          y1="15.3343"
                          x2="45.0202"
                          y2="15.3343"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FC540C" />
                          <stop offset="1" stop-color="#FFD76F" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ),
                },
                {
                  title: "Rapid experimentation",
                  description: `The team can quickly spin up new off-chain services across
                      dev, staging, and production environments, enabling faster
                      iteration and testing of their Web3 infrastructure.`,
                  icon: (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0007 27.205L10.575 25.8127L13.0417 23.346H12.0007C9.58865 23.346 7.54121 22.5024 5.85832 20.8153C4.17543 19.1282 3.33398 17.0787 3.33398 14.6667C3.33398 12.2547 4.17543 10.2072 5.85832 8.52433C7.54121 6.84144 9.58865 6 12.0007 6H20.0007C22.4127 6 24.4601 6.84144 26.143 8.52433C27.8259 10.2072 28.6673 12.2547 28.6673 14.6667C28.6673 17.0787 27.8259 19.1282 26.143 20.8153C24.4601 22.5024 22.4127 23.346 20.0007 23.346V21.346C21.8535 21.346 23.4279 20.696 24.7237 19.396C26.0194 18.096 26.6673 16.5196 26.6673 14.6667C26.6673 12.8138 26.0194 11.2394 24.7237 9.94367C23.4279 8.64789 21.8535 8 20.0007 8H12.0007C10.1478 8 8.57343 8.64789 7.27765 9.94367C5.98187 11.2394 5.33398 12.8138 5.33398 14.6667C5.33398 16.5196 5.98187 18.1029 7.27765 19.4167C8.57343 20.7304 10.1478 21.4283 12.0007 21.5103H13.2263L10.6083 18.8793L12.0007 17.4873L16.8597 22.346L12.0007 27.205Z"
                        fill="url(#paint0_linear_444_19864)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_444_19864"
                          x1="3.33398"
                          y1="16.6025"
                          x2="44.2767"
                          y2="16.6025"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FC540C" />
                          <stop offset="1" stop-color="#FFD76F" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ),
                },
                {
                  title: "Superior Support Experience",
                  description: (
                    <>
                      <span className="text-text-secondary text-xl font-normal">
                        When they need support, they get it directly through the
                        team on{" "}
                      </span>
                      <Link
                        href="https://discord.com/invite/shuttle"
                        target="_blank"
                        className="text-text-secondary text-xl font-normal underline hover:no-underline"
                      >
                        Discord
                      </Link>
                      <span className="text-text-secondary text-xl font-normal">
                        , a nice contrast to layers of impersonal support bots.
                      </span>
                    </>
                  ),
                  icon: (
                    <svg
                      width="26"
                      height="25"
                      viewBox="0 0 26 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.33301 15.082H15.333V13.082H5.33301V15.082ZM5.33301 11.082H20.6663V9.08203H5.33301V11.082ZM5.33301 7.08203H20.6663V5.08203H5.33301V7.08203ZM0.333008 24.8V2.49236C0.333008 1.81881 0.566341 1.2487 1.03301 0.782031C1.49967 0.315365 2.06979 0.0820312 2.74334 0.0820312H23.256C23.9296 0.0820312 24.4997 0.315365 24.9663 0.782031C25.433 1.2487 25.6663 1.81881 25.6663 2.49236V17.6717C25.6663 18.3453 25.433 18.9154 24.9663 19.382C24.4997 19.8487 23.9296 20.082 23.256 20.082H5.05101L0.333008 24.8ZM4.19967 18.082H23.256C23.3587 18.082 23.4527 18.0393 23.538 17.9537C23.6236 17.8684 23.6663 17.7744 23.6663 17.6717V2.49236C23.6663 2.3897 23.6236 2.2957 23.538 2.21036C23.4527 2.12481 23.3587 2.08203 23.256 2.08203H2.74334C2.64067 2.08203 2.54667 2.12481 2.46134 2.21036C2.37579 2.2957 2.33301 2.3897 2.33301 2.49236V19.9284L4.19967 18.082Z"
                        fill="url(#paint0_linear_441_18191)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_441_18191"
                          x1="0.333008"
                          y1="12.441"
                          x2="41.2758"
                          y2="12.441"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FC540C" />
                          <stop offset="1" stop-color="#FFD76F" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="self-stretch py-5 border-b border-white/30 inline-flex justify-start items-start gap-5"
                >
                  <div className="justify-start text-xl font-normal leading-[32px] tracking-tight bg-gradient-3 bg-clip-text text-transparent">
                    {item.icon}
                  </div>
                  <div className="flex-1 justify-start">
                    <span className="text-neutral-200 text-xl font-bold leading-[32px] tracking-tight">
                      {item.title}
                    </span>
                    <span className="text-neutral-200 text-xl font-normal leading-[32px] tracking-tight">
                      : {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <UserQuote className="w-full max-w-[984px] px-6 md:px-16 py-6 md:py-16">
          <div className="flex flex-col gap-10">
            <span className="text-neutral-200 text-lg md:text-2xl font-normal">
              &quot;Shuttle&apos;s nice DevX reduces the development and
              deployment time and lets us focus on the thing that matters: the
              code,&quot; Rani said.
            </span>
          </div>
        </UserQuote>

        <div className="w-full max-w-[782px] flex flex-col justify-start items-start gap-10">
          <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
            Technical Implementation
          </h2>
          <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
            The technical implementation leverages Rust&apos;s performance
            characteristics combined with Shuttle&apos;s deployment simplicity
            for off-chain services. While WeaveVM handles the on-chain permanent
            storage and data availability, Shuttle deploys the supporting
            infrastructure such as indexers and auxiliary services that
            complement the main protocol.
            <br />
            <br />
            The architecture eliminates the dependency on complex deployment
            flows for off-chain infrastructure management, making Web3
            development more accessible to teams that want to focus on building
            robust on-chain protocols rather than managing DevOps complexity for
            their supporting services.
          </p>
        </div>
        <div className="w-full max-w-[782px] flex flex-col justify-start items-start gap-10">
          <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
            Get Started with Shuttle
          </h2>
          <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
            Decent Land&apos;s success demonstrates how Shuttle enables Web3
            teams to focus on their core on-chain mission while maintaining
            reliable, scalable off-chain infrastructure. The combination of
            Rust&apos;s performance and Shuttle&apos;s deployment simplicity
            allowed them to eliminate off-chain infrastructure complexity and
            accelerate their Web3 development.
          </p>
        </div>
        <div className="w-full max-w-[984px] mx-auto">
          <ReadyForShuttle />
        </div>
      </div>
    </main>
  );
}
