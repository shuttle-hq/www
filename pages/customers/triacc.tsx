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
        description="How TriAcc accelerated from concept to production in days, not weeks"
        openGraph={{
          images: [
            {
              url: "https://www.shuttle.dev/images/user-stories/unwritten-og-image.png",
              width: 2400,
              height: 1350,
              alt: "Shuttle x TriAcc: Accelerating from concept to production in days, not weeks",
            },
          ],
        }}
      />
      <main className="flex flex-col mx-auto mt-24 gap-16 w-full max-w-[1280px] px-5 sm:px-10 lg:mt-28">
        <div className="inline-flex flex-col justify-start items-start gap-28">
          <div className="w-full flex flex-col justify-start items-start gap-10">
            <div className="w-full max-w-[782px] mx-auto border-red self-stretch flex flex-col justify-start items-start gap-6">
              <Image
                src="/images/user-stories/triacc.png"
                alt="TriAcc logo"
                width={140}
                height={22}
              />
              <h2 className="self-stretch justify-start text-neutral-200 text-5xl font-bold font-gradual leading-[57.60px]">
                How TriAcc accelerated from concept to production in days, not
                weeks
              </h2>
              <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
                Using Rust and Shuttle to build a contractor marketplace without
                infrastructure complexity
              </p>
            </div>
          </div>

          <UserQuote className="w-full max-w-[984px]">
            <div className="flex flex-col gap-10">
              <span className="text-neutral-200 text-2xl font-normal">
                &quot;With Shuttle, I had our service deployed in 15 minutes.
                What would have taken us 2 weeks of infrastructure setup was
                done in half a day.&quot;
              </span>
              <span className="text-neutral-200 text-2xl font-normal">
                Soren Bradley, Lead Developer, TriAcc
              </span>
            </div>
          </UserQuote>

          <div className="w-full max-w-[984px] self-stretch flex flex-col justify-start items-start my-24 mx-auto">
            <ul className="grid grid-cols-3 rounded-[20px] gap-6">
              <li
                className={`self-stretch p-10 flex flex-col justify-start items-start gap-2 rounded-[20px] ${userStoriesStyles["bg-tile-1"]}`}
              >
                <div className="justify-start text-neutral-200 text-2xl font-normal">
                  Up to 20x faster deployment
                </div>
                <div className="justify-start text-text-secondary text-base font-normal leading-normal">
                  Reduced 2 weeks of infrastructure work to half a day with
                  Shuttle
                </div>
              </li>
              <li
                className={`self-stretch p-10 flex flex-col justify-start items-start gap-2 rounded-[20px] ${userStoriesStyles["bg-tile-2"]}`}
              >
                <div className="justify-start text-neutral-200 text-2xl font-normal">
                  Zero infrastructure management
                </div>
                <div className="justify-start text-text-secondary text-base font-normal leading-normal">
                  No Docker containers, database setup, cloud console
                  management, or maintenance needed
                </div>
              </li>
              <li
                className={`self-stretch p-10 flex flex-col justify-start items-start gap-2 rounded-[20px] ${userStoriesStyles["bg-tile-3"]}`}
              >
                <div className="justify-start text-neutral-200 text-2xl font-normal">
                  Single-developer productivity
                </div>
                <div className="flex-1 justify-start text-text-secondary text-base font-normal leading-normal">
                  Achieved full production deployment with just one engineer
                </div>
              </li>
            </ul>
          </div>

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

          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
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
            <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
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
              Shuttle&quot;s approach eliminated the traditional deployment
              complexity:
            </p>
            <div className="self-stretch inline-flex flex-col justify-start items-start">
              {[
                {
                  title: "No Docker containers needed",
                  description:
                    "Instead of wrestling with Dockerfiles, Shuttle automatically packages your app.",
                },
                {
                  title: "Integrated database provisioning",
                  description:
                    "Shuttle provisions and wires in a Postgres instance automatically",
                },
                {
                  title: "Zero infrastructure management",
                  description:
                    "No AWS keys, IAM policies, VPC rules or security groups to configure",
                },
                {
                  title: "Single command deployment",
                  description: (
                    <>
                      <code>shuttle deploy</code> handles everything from build
                      to production URL
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
            <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
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
                  <div className="flex flex-col gap-2 justify-start">
                    <span className="text-neutral-200 text-xl font-bold leading-[32px] tracking-tight">
                      {item.title}
                    </span>
                    <span className="text-secondary text-xl font-normal leading-[32px] tracking-tight">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              &quot;Feature turnaround time is something I do not think about
              anymore,&quot; Soren notes. &quot;Once I know it compiles and the
              shuttle run command works, I have a lot of confidence that when I
              push to our development environment, it just works.&quot;
            </p>
          </div>

          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
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
            <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
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
            <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
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
            <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
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
