import Link from "next/link";
import Image from "next/image";

export default function DecentLand() {
  return (
    <main className="flex flex-col mx-auto mt-24 gap-16 w-full max-w-[1280px] px-5 sm:px-10 lg:mt-28 items-center">
      <div className="inline-flex flex-col justify-start items-start gap-28">
        <div className="w-[782px] flex flex-col justify-start items-start gap-10">
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <h2 className="self-stretch justify-start text-neutral-200 text-5xl font-bold font-gradual leading-[57.60px]">
              How Decent Land eliminated infrastructure complexity for Web3
              development
            </h2>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              Using Rust and Shuttle to eliminate off-chain infrastructure
              complexity and accelerate WeaveVM development
            </p>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <span className="self-stretch justify-start text-zinc-400 text-base font-normal uppercase leading-normal tracking-wide">
              Key Results
            </span>
            <ul className="self-stretch rounded-[20px] flex flex-col justify-start items-start">
              <li className="self-stretch px-3 py-6 inline-flex justify-start items-center gap-2 border-b border-white/30">
                <div className="w-48 justify-start text-neutral-200 text-2xl font-normal">
                  30-minute migration
                </div>
                <div className="justify-start text-text-secondary text-base font-normal leading-normal">
                  Moved from Heroku to Shuttle with minimal deployment
                  complexity
                </div>
              </li>
              <li className="self-stretch px-3 py-6 inline-flex justify-start items-center gap-2 border-b border-white/30">
                <div className="w-48 justify-start text-neutral-200 text-2xl font-normal">
                  100k daily transactions
                </div>
                <div className="justify-start text-text-secondary text-base font-normal leading-normal">
                  Moved from Heroku to Shuttle with minimal deployment
                  complexity
                </div>
              </li>
              <li className="self-stretch px-3 py-6 inline-flex justify-start items-center gap-2 border-b border-white/30">
                <div className="w-48 justify-start text-neutral-200 text-2xl font-normal">
                  $1.5B total value secured
                </div>
                <div className="flex-1 justify-start text-text-secondary text-base font-normal leading-normal">
                  Providing infrastructure across networks like Metis, Humanode,
                  Avalanche, and Dymension
                </div>
              </li>
            </ul>
          </div>
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
        <div className="w-[782px] flex flex-col justify-start items-start gap-10">
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
            <ol className="self-stretch flex flex-col justify-start items-start">
              <li className="self-stretch py-5 border-b border-white/30 inline-flex justify-start items-baseline gap-5">
                <div className="justify-start text-neutral-400 text-xl font-normal">
                  01
                </div>
                <div className="flex-1 justify-start text-text-secondary text-xl font-normal">
                  Unnecessarily complex deployment flows that slowed development
                  velocity
                </div>
              </li>
              <li className="self-stretch py-5 border-b border-white/30 inline-flex justify-start items-baseline gap-5">
                <div className="justify-start text-neutral-400 text-xl font-normal">
                  02
                </div>
                <div className="justify-start text-text-secondary text-xl font-normal">
                  Dependency mismatches causing version conflicts and
                  compatibility issues
                </div>
              </li>
              <li className="self-stretch py-5 border-b border-white/30 inline-flex justify-start items-baseline gap-5">
                <div className="justify-start text-neutral-400 text-xl font-normal">
                  03
                </div>
                <div className="flex-1 justify-start text-text-secondary text-xl font-normal">
                  SSL certificate management that absorbed valuable development
                  time
                </div>
              </li>
              <li className="self-stretch py-5 border-b border-white/30 inline-flex justify-start items-baseline gap-5">
                <div className="justify-start text-neutral-400 text-xl font-normal">
                  04
                </div>
                <div className="flex-1 justify-start text-text-secondary text-xl font-normal">
                  Infrastructure complexity that distracted from building
                  features that actually mattered
                </div>
              </li>
            </ol>
          </div>
          <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
            For Web3 teams like Decent Land, running off-chain auxiliary
            infrastructure reliably is an orthogonal skillset that, while
            important, distracts from their core mission of building robust
            on-chain protocols. This infrastructure complexity was becoming a
            significant barrier to their development velocity.
          </p>
          <div className="self-stretch p-8 inline-flex justify-center items-center gap-2.5">
            <div className="flex-1 text-center justify-start text-neutral-200 text-2xl font-normal">
              &quot;We were spending precious dev time on infrastructure instead
              of building features that actually mattered,&quot; the team
              shared. &quot;Then we found Shuttle, and it won on every single
              DevOps point.&quot;
            </div>
          </div>
        </div>
        <div className="w-[782px] flex flex-col justify-start items-start gap-10">
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
            <ol className="self-stretch flex flex-col justify-start items-start">
              <li className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch py-5 border-b border-white/30 inline-flex justify-start items-baseline gap-5">
                  <div className="justify-start text-neutral-400 text-xl font-normal">
                    01
                  </div>
                  <div className="flex-1 justify-start text-text-secondary text-xl font-normal">
                    Native Rust deployment eliminating container complexity
                  </div>
                </div>
              </li>
              <li className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch py-5 border-b border-white/30 inline-flex justify-start items-baseline gap-5">
                  <div className="justify-start text-neutral-400 text-xl font-normal">
                    02
                  </div>
                  <div className="justify-start text-text-secondary text-xl font-normal">
                    Integrated database management with automatic PostgreSQL
                    provisioning
                  </div>
                </div>
              </li>
              <li className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch py-5 border-b border-white/30 inline-flex justify-start items-baseline gap-5">
                  <div className="justify-start text-neutral-400 text-xl font-normal">
                    03
                  </div>
                  <div className="flex-1 justify-start text-text-secondary text-xl font-normal">
                    Built-in SSL certificates that worked out of the box
                  </div>
                </div>
              </li>
              <li className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch py-5 border-b border-white/30 inline-flex justify-start items-baseline gap-5">
                  <div className="justify-start text-neutral-400 text-xl font-normal">
                    04
                  </div>
                  <div className="flex-1 justify-start text-text-secondary text-xl font-normal">
                    Secrets management with secure configuration handling
                  </div>
                </div>
              </li>
              <li className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch py-5 border-b border-white/30 inline-flex justify-start items-baseline gap-5">
                  <div className="justify-start text-neutral-400 text-xl font-normal">
                    05
                  </div>
                  <div className="flex-1 justify-start text-text-secondary text-xl font-normal">
                    Streamlined deployment flows using Shuttle&apos;s annotation
                    system
                  </div>
                </div>
              </li>
            </ol>
          </div>
          <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
            Decent Land&apos;s CTO Rani and the team are Rust experts, so
            translating that expertise to off-chain infrastructure deployment
            was natural and liberating. The team found that Shuttle&apos;s
            Rust-focused approach eliminated the deployment complexity they
            experienced with other platforms.
          </p>
        </div>
        <div className="w-[782px] flex flex-col justify-start items-start gap-10">
          <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
            Achieving Streamlined Development and Deployment
          </h2>
          <div className="self-stretch flex flex-col justify-start items-start gap-8">
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              Since migrating to Shuttle, Decent Land has transformed their
              off-chain infrastructure workflow and achieved significant
              operational improvements:
            </p>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch p-6 border-t border-b border-white/30 inline-flex justify-start items-start gap-6">
                  <div className="w-8 h-8 relative overflow-hidden">
                    <Image
                      src="/images/user-stories/wind.png"
                      width={32}
                      height={32}
                      alt="Wind icon"
                    />
                  </div>
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                    <div className="justify-start text-neutral-200 text-xl font-normal">
                      Development Velocity{" "}
                    </div>
                    <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
                      The backend team now ships off-chain Rust microservices —
                      APIs, ETL pipelines, cron jobs — without breaking a sweat.
                      Their supporting services scale seamlessly alongside their
                      on-chain WeaveVM protocol.
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch p-6 border-b border-white/30 inline-flex justify-start items-start gap-6">
                  <div className="w-8 h-8 relative overflow-hidden">
                    <Image
                      src="/images/user-stories/loop.png"
                      width={32}
                      height={32}
                      alt="Loop icon"
                    />
                  </div>
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                    <h2 className="justify-start text-neutral-200 text-xl font-normal">
                      Rapid Experimentation
                    </h2>
                    <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
                      The team can quickly spin up new off-chain services across
                      dev, staging, and production environments, enabling faster
                      iteration and testing of their Web3 infrastructure.
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch p-6 border-b border-white/30 inline-flex justify-start items-start gap-6">
                  <div className="w-8 h-8 relative overflow-hidden">
                    <Image
                      src="/images/user-stories/comment.png"
                      width={32}
                      height={32}
                      alt="Comment icon"
                    />
                  </div>
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                    <div className="justify-start text-neutral-200 text-xl font-normal">
                      Superior Support Experience
                    </div>
                    <div className="self-stretch justify-start">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch p-8 inline-flex justify-center items-center gap-2.5">
            <div className="flex-1 text-center justify-start text-neutral-200 text-2xl font-normal">
              &quot;Shuttle&apos;s nice DevX reduces the development and
              deployment time and lets us focus on the thing that matters: the
              code,&quot; Rani said.
            </div>
          </div>
        </div>
        <div className="w-[782px] flex flex-col justify-start items-start gap-10">
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
        <div className="w-[782px] flex flex-col justify-start items-start gap-10">
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
        <div className="w-[782px] p-12 bg-stone-950 rounded-3xl flex flex-col justify-center items-start gap-3">
          <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
            Ready to eliminate infrastructure complexity for your Rust project?
          </h2>
          <div className="self-stretch justify-start">
            <Link
              className="text-zinc-400 text-xl font-normal underline hover:no-underline"
              href="https://code.shuttle.dev/signup"
            >
              Get started with Shuttle
            </Link>
            <span className="text-zinc-400 text-xl font-normal">
              {" "}
              and deploy your Rust applications with seamless scaling
              capabilities.
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
