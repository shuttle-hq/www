import Image from "next/image";
import { UserQuote } from "components/sections/UserStories/UserQuote";
import { NextSeo } from "next-seo";
import userStoriesStyles from "./UserStories.module.css";
import { TechnicalImplementationSection } from "../../components/sections/UserStories/TechnicalImplementationSection";
import { ReadyForShuttle } from "components/sections/UserStories/ReadyForShuttle";
export default function Triacc() {
  return (
    <>
      <NextSeo
        title="Customers | TriAcc"
        description="From concept to production in days with Shuttle"
        openGraph={{
          images: [
            {
              url: "https://www.shuttle.dev/images/user-stories/triacc-og-image.png",
              width: 2400,
              height: 1350,
              alt: "Shuttle x TriAcc: From concept to production in days with Shuttle",
            },
          ],
        }}
      />
      <main className="flex flex-col mx-auto mt-24 gap-16 w-full max-w-[1280px] px-5 sm:px-10 lg:mt-28">
        <div className="inline-flex flex-col justify-start items-start gap-10">
          <div className="w-full flex flex-col justify-start items-start gap-10">
            <div className="w-full max-w-[782px] mx-auto border-red self-stretch flex flex-col justify-start items-start gap-6">
              <Image
                src="/images/user-stories/triacc.png"
                alt="TriAcc logo"
                width={96}
                height={30}
              />
              <h1 className="self-stretch justify-start text-neutral-200 text-3xl md:text-5xl font-bold font-gradual leading-tight md:leading-[57.60px]">
                From concept to production in days with Shuttle
              </h1>
              <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
                Using Rust and Shuttle to build a contractor marketplace without
                infrastructure complexity
              </p>
            </div>
          </div>

          <UserQuote className="w-full max-w-[984px]">
            <div className="flex flex-col gap-10">
              <span className="text-neutral-200 text-lg md:text-2xl font-normal">
                &quot;With Shuttle, I had our service deployed in 15 minutes.
                What would have taken us 2 weeks of infrastructure setup was
                done in half a day.&quot;
              </span>
              <span className="text-neutral-200 text-lg md:text-2xl font-normal self-end">
                Soren Bradley, Lead Developer, TriAcc
              </span>
            </div>
          </UserQuote>

          <div className="w-full max-w-[782px] mx-auto self-stretch justify-start">
            <span className="text-text-secondary text-xl font-normal">
              <a
                href="https://triacc.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                TriAcc
              </a>{" "}
              is an oil and gas consulting company based in Alberta that helps
              smaller companies navigate regulatory compliance when they
              can&apos;t afford dedicated staff. As the industry evolved, TriAcc
              identified a gap in the contractor space - there wasn&apos;t a
              centralized platform where contractors could access deals, safety
              training, and industry information. They decided to build a B2C
              marketplace that would aggregate the best deals and resources,
              functioning like &quot;Costco for contractors&quot; while serving
              as a comprehensive information hub and trade association.
            </span>
          </div>

          <div className="w-full max-w-[984px] self-stretch flex flex-col justify-start items-start mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-3 rounded-[20px] gap-6">
              <li
                className={`self-stretch p-6 md:p-10 flex flex-col justify-start items-start gap-2 rounded-[20px] ${userStoriesStyles["bg-tile-1"]}`}
              >
                <div className="justify-start text-neutral-200 text-lg md:text-2xl font-normal">
                  Up to 20x faster deployment
                </div>
                <div className="justify-start text-text-secondary text-base font-normal leading-normal">
                  Reduced 2 weeks of infrastructure work to half a day with
                  Shuttle
                </div>
              </li>
              <li
                className={`self-stretch p-6 md:p-10 flex flex-col justify-start items-start gap-2 rounded-[20px] ${userStoriesStyles["bg-tile-2"]}`}
              >
                <div className="justify-start text-neutral-200 text-lg md:text-2xl font-normal">
                  Zero infrastructure management
                </div>
                <div className="justify-start text-text-secondary text-base font-normal leading-normal">
                  No Docker containers, database setup, cloud console
                  management, or maintenance needed
                </div>
              </li>
              <li
                className={`self-stretch p-6 md:p-10 flex flex-col justify-start items-start gap-2 rounded-[20px] ${userStoriesStyles["bg-tile-3"]}`}
              >
                <div className="justify-start text-neutral-200 text-lg md:text-2xl font-normal">
                  Single-developer productivity
                </div>
                <div className="flex-1 justify-start text-text-secondary text-base font-normal leading-normal">
                  Achieved full production deployment with just one engineer
                </div>
              </li>
            </ul>
          </div>

          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-2xl md:text-[40px] font-bold font-gradual leading-tight md:leading-[48px]">
              The Challenge: Infrastructure Complexity Blocking Innovation
            </h2>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              With a single developer leading the technical implementation,
              TriAcc faced the classic startup dilemma: how to get to market
              quickly without getting bogged down in infrastructure complexity.
            </p>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              TriAcc chose Rust after experiencing frustration with runtime
              errors and unpredictable behavior in other languages. &quot;I was
              just really annoyed when you think something&apos;s working, you
              have a test harness attached to it, and then all of a sudden you
              get a call at 3am saying the service is down,&quot; explains Soren
              Bradley, TriAcc&apos;s Lead Developer.
            </p>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              The bigger challenge was deployment. Soren had allocated two weeks
              to research cloud providers, set up environments, configure
              databases, build Docker containers, and create deployment
              documentation. This infrastructure work would consume valuable
              time that could be spent on core product features.
            </p>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              &quot;I had allotted a certain amount of time to look into
              multiple different cloud hosting providers. I was playing around
              with DigitalOcean, setting up accounts, thinking about Docker
              containers,&quot; Soren recalls.
            </p>
          </div>

          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-2xl md:text-[40px] font-bold font-gradual leading-tight md:leading-[48px]">
              Solution: Choosing Shuttle to Eliminate Infrastructure Overhead
            </h2>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              While researching Rust deployment options, TriAcc discovered
              Shuttle and decided to test it alongside other cloud providers.
              The difference was immediately apparent.
            </p>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              &quot;I found Shuttle and decided to try it. Within 15 minutes, I
              had a working deployment.&quot; Soren explains.
            </p>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              Shuttle&apos;s approach eliminated the traditional deployment
              complexity:
            </p>
            <div className="self-stretch inline-flex flex-col justify-start items-start">
              {[
                {
                  title: "No Docker containers needed",
                  description:
                    "Instead of wrestling with Dockerfiles, Shuttle automatically packages your app.",
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
                  title: "Integrated database provisioning",
                  description:
                    "Shuttle provisions and wires in a Postgres instance automatically",
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
                  title: "Zero infrastructure management",
                  description:
                    "No AWS keys, IAM policies, VPC rules or security groups to configure",
                  icon: (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.1847 18.5156L15.2543 25.1873L12.2891 22.9635"
                        stroke="url(#paint0_linear_444_19870)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22.9805 23.0373C24.2163 23.0299 25.4067 22.5695 26.326 21.7434C27.2452 20.9173 27.8298 19.7828 27.9689 18.5547C28.1078 17.3265 27.7916 16.0901 27.0802 15.0794C26.3688 14.0688 25.3114 13.3541 24.1083 13.0706C24.0252 13.0458 23.9511 12.9978 23.8943 12.9321C23.8377 12.8665 23.8009 12.786 23.7885 12.7002C23.6397 11.0704 22.9368 9.54078 21.7968 8.3665C20.6568 7.19222 19.1487 6.44425 17.524 6.24732C15.8993 6.05037 14.2562 6.41638 12.8686 7.28431C11.4811 8.15222 10.433 9.46956 9.89923 11.0167C9.86392 11.0888 9.80868 11.1494 9.74007 11.1911C9.67145 11.2329 9.59233 11.2541 9.51201 11.2524C8.73822 11.3043 7.98222 11.5082 7.28721 11.8523C6.59218 12.1964 5.97175 12.6741 5.46133 13.258C4.43048 14.4372 3.9103 15.9777 4.01523 17.5404C4.12016 19.1032 4.8416 20.5603 6.02083 21.5911C6.87901 22.3412 7.92846 22.8211 9.03863 22.9863"
                        stroke="url(#paint1_linear_444_19870)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_444_19870"
                          x1="12.2891"
                          y1="21.8515"
                          x2="26.6658"
                          y2="21.8515"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FC540C" />
                          <stop offset="1" stop-color="#FFD76F" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_444_19870"
                          x1="4.00195"
                          y1="14.6163"
                          x2="42.7881"
                          y2="14.6163"
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
                  title: "Single command deployment",
                  description: (
                    <>
                      &quot;shuttle deploy&quot; handles everything from build
                      to production URL
                    </>
                  ),
                  icon: (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4615 22.1535L4 15.692L10.4615 9.23047"
                        stroke="url(#paint0_linear_444_19877)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21.5391 22.1535L28.0006 15.692L21.5391 9.23047"
                        stroke="url(#paint1_linear_444_19877)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_444_19877"
                          x1="4"
                          y1="15.692"
                          x2="14.4429"
                          y2="15.692"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FC540C" />
                          <stop offset="1" stop-color="#FFD76F" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_444_19877"
                          x1="21.5391"
                          y1="15.692"
                          x2="31.982"
                          y2="15.692"
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

          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-2xl md:text-[40px] font-bold font-gradual leading-tight md:leading-[48px]">
              Achieving 20x Faster Time-to-Production
            </h2>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              The impact on TriAcc&quot;s development velocity was immediate and
              substantial:
            </p>
            <div className="self-stretch inline-flex flex-col justify-start items-start">
              {[
                {
                  title: "Deployment Speed",
                  description:
                    "What had been budgeted as 2 weeks of infrastructure work was completed in half a day.",
                },
                {
                  title: "Cost Savings",
                  description:
                    "The time savings translated directly to cost savings, freeing up nearly two weeks of development time for feature work.",
                },
                {
                  title: "Production Readiness",
                  description: (
                    <>
                      Most importantly, the simplified deployment enabled TriAcc
                      to reach production when they otherwise might not have.
                      &quot;I don&apos;t think that we would be in production
                      right now if we didn&apos;t go with Shuttle.&quot;
                    </>
                  ),
                },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="self-stretch py-5 border-b border-white/30 inline-flex justify-start items-baseline gap-5"
                >
                  <div className="justify-start text-xl font-normal leading-[32px] tracking-tight bg-gradient-3 bg-clip-text text-transparent">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <span className="text-neutral-200 text-xl font-bold leading-[32px] tracking-tight">
                      {item.title}:
                    </span>{" "}
                    <span className="text-neutral-200 text-xl font-normal leading-[32px] tracking-tight">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col justify-start items-start gap-28">
          <UserQuote className="w-full max-w-[984px]">
            <div className="flex flex-col gap-10">
              <span className="text-neutral-200 text-lg md:text-2xl font-normal">
                &quot;Feature turnaround time is something I do not think about
                anymore,&quot; <span className="text-body">Soren notes.</span>{" "}
                &quot;Once I know it compiles and the shuttle run command works,
                I have a lot of confidence that when I push to our development
                environment, it just works.&quot;
              </span>
            </div>
          </UserQuote>
        </div>

        <div className="inline-flex flex-col justify-start items-start gap-28">
          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-2xl md:text-[40px] font-bold font-gradual leading-tight md:leading-[48px]">
              Seamless Environment Management
            </h2>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              TriAcc uses GitHub Actions for continuous integration with
              protected branches for dev and release environments. When code is
              pushed to the dev branch, it automatically deploys to their
              Shuttle development instance.
            </p>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              &quot;The <code>shuttle run</code> command has caught anything
              that I&apos;ve noticed being a problem in deployment. It&apos;s
              like the local dockerized instance,&quot; Soren explains.
            </p>
          </div>

          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-2xl md:text-[40px] font-bold font-gradual leading-tight md:leading-[48px]">
              Single-Context Development Experience
            </h2>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              Beyond the technical benefits, Shuttle enabled TriAcc to maintain
              focus on what matters most - building product features rather than
              managing infrastructure.
            </p>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              &quot;When I&apos;m working with Shuttle and deploying something,
              my mind is still on the code. I spend most of my day figuring out
              how I&apos;m going to implement features instead of having to
              manage deployment environments. My context is towards being a
              developer, not multiple different roles.&quot;
            </p>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              This single-context approach was crucial for a solo developer
              handling the entire technical stack. &quot;I am able to just be
              the best developer I can be and then ship everything off to you
              guys. You guys handle it, it&apos;s in production, everyone is
              happy.&quot;
            </p>
          </div>
        </div>

        <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
          <div className="w-full flex flex-col justify-start items-start gap-6">
            <h2 className="self-stretch justify-start text-neutral-200 text-2xl md:text-[40px] font-bold font-gradual leading-tight md:leading-[48px]">
              Technical Implementation
            </h2>
            <div className="w-full flex flex-col justify-start items-start gap-6">
              <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
                TriAcc&apos;s technical stack leverages Shuttle&apos;s ecosystem
                for their contractor marketplace platform:
              </p>
              <TechnicalImplementationSection
                items={[
                  {
                    title: "Shuttle",
                    content: "for deployment and infrastructure management",
                  },
                  {
                    title: "Loco.rs",
                    content: "for full-stack Rust application framework",
                  },
                  {
                    title: "PostgreSQL",
                    content: "for relational database",
                  },
                  {
                    title: "TypeScript/React",
                    content: "for frontend development",
                  },
                  {
                    title: "Better Stack",
                    content: "for monitoring and observability",
                  },
                  {
                    title: "Grafana",
                    content: "for analytics and session recording",
                  },
                  {
                    title: "Stripe",
                    content: "for payment processing via async-stripe",
                  },
                  {
                    title: "SendGrid",
                    content: "for email services",
                  },
                  {
                    title: "Cloudflare",
                    content: "for domains, CDN, and caching",
                  },
                  {
                    title: "Auth0",
                    content: "for authentication",
                  },
                  {
                    title: "Polars",
                    content: "for high-performance data processing",
                  },
                  {
                    title: "Sea-ORM",
                    content: "for database operations",
                  },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col justify-start items-start gap-28">
          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-2xl md:text-[40px] font-bold font-gradual leading-tight md:leading-[48px]">
              TriAcc&apos;s Transformation
            </h2>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              TriAcc&apos;s story demonstrates how Shuttle radically reduces
              infrastructure overhead, allowing organizations to accelerate
              time-to-market by freeing developers to focus on business logic
              rather than deployment complexity. By combining Rust&apos;s
              reliability with Shuttle&apos;s simplicity, TriAcc launched their
              production marketplace in days instead of weeks.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[984px] mx-auto">
          <ReadyForShuttle />
        </div>
      </main>
    </>
  );
}
