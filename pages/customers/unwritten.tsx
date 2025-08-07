import Link from "next/link";
import Image from "next/image";
import { Accordion } from "components/elements/Accordion";
import { NextSeo } from "next-seo";

const accordionItems = [
  {
    title: "Shuttle",
    content: "for deployment and infrastructure management",
  },
  {
    title: "Axum",
    content: "for type-safe REST API endpoints",
  },
  {
    title: "MongoDB",
    content: "for database",
  },
  {
    title: "Polars",
    content: "for high-performance data transformations",
  },
  {
    title: "Dagster",
    content: "for data orchestration and ETL workflows",
  },
  {
    title: "Databricks",
    content: "for heavy computational workloads",
  },
  {
    title: "PropelAuth",
    content: "for authentication",
  },
  {
    title: "Better Stack",
    content: "for monitoring and observability",
  },
  {
    title: "GitHub Actions",
    content: "for CI/CD automation",
  },
];

export default function Unwritten() {
  return (
    <>
      <NextSeo
        title="User Stories | Unwritten"
        description="How Unwritten powers large-scale data processing with zero infrastructure overhead"
      />
      <main className="flex flex-col mx-auto mt-24 gap-16 w-full max-w-[1280px] px-5 sm:px-10 lg:mt-28 items-center">
        <div className="inline-flex flex-col justify-start items-start gap-28">
          <div className="w-[782px] flex flex-col justify-start items-start gap-10">
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <h2 className="self-stretch justify-start text-neutral-200 text-5xl font-bold font-gradual leading-[57.60px]">
                How Unwritten powers large-scale data processing with zero
                infrastructure overhead
              </h2>
              <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
                Using Shuttle&apos;s Rust deployment platform to accelerate
                large-scale data processing without infrastructure complexity
              </p>
              <div className="self-stretch flex flex-col items-start gap-2.5">
                <p className="flex-1 justify-start text-neutral-200 text-2xl font-normal">
                  &quot;What took days to weeks to set up with traditional
                  infrastructure now takes minutes with Shuttle. It&apos;s like
                  Vercel for backend.&quot;
                </p>
                <div className="flex flex-col gap-1">
                  <p className="font-bold">Phillip Marks, CRO & CTO</p>
                  <p>Unwritten</p>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <span className="self-stretch justify-start text-zinc-400 text-base font-normal uppercase leading-normal tracking-wide">
                Key Results
              </span>
              <ul className="self-stretch rounded-[20px] flex flex-col justify-start items-start">
                <li className="self-stretch px-3 py-6 flex flex-col justify-start items-start gap-2 border-b border-white/30">
                  <div className="justify-start text-neutral-200 text-2xl font-normal">
                    Up to 3x faster data processing
                  </div>
                  <div className="justify-start text-text-secondary text-base font-normal leading-normal">
                    Polars running natively in Rust delivers up to 3× faster
                    performance than its Python counterpart
                  </div>
                </li>
                <li className="self-stretch px-3 py-6 flex flex-col justify-start items-start gap-2 border-b border-white/30">
                  <div className="justify-start text-neutral-200 text-2xl font-normal">
                    Days to minutes deployment
                  </div>
                  <div className="justify-start text-text-secondary text-base font-normal leading-normal">
                    Infrastructure setup reduced from weeks to minutes with zero
                    specialised expertise
                  </div>
                </li>
                <li className="self-stretch px-3 py-6 flex flex-col justify-start items-start gap-2 border-b border-white/30">
                  <div className="justify-start text-neutral-200 text-2xl font-normal">
                    Team focused on core expertise
                  </div>
                  <div className="flex-1 justify-start text-text-secondary text-base font-normal leading-normal">
                    Development team concentrates on data pipelines instead of
                    infrastructure management
                  </div>
                </li>
              </ul>
            </div>
            <div className="self-stretch justify-start">
              <span className="text-text-secondary text-xl font-normal">
                Unwritten helps companies and investors build real resilience by
                turning climate and nature risk into action. With hyper-granular
                insights on how transition, physical, and nature risks impact
                every company worldwide, Unwritten gives leaders a clear edge.
                Built by the team behind sustainability at Palantir and backed
                by leading climate minds, their platform operates at over 1
                billion data points, blending advanced macroeconomic modelling,
                financial engineering, and AI to project climate risk with
                unprecedented precision.
              </span>
              <span className="text-text-secondary text-xl font-normal">
                The founding team brings deep expertise in data engineering and
                software development. Their lead backend engineer joined the
                team after their move to Rust, bringing valuable backend
                development experience from Microsoft.
              </span>
            </div>
          </div>
          <div className="w-[782px] flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
              The Challenge: Infrastructure Complexity Blocking Core Development
            </h2>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              Companies and investors face more pronounced climate risks than
              ever before. Unwritten needed to create a single component capable
              of both performing CRUD operations on user-entered data and
              executing data processing workflows. The platform must serve
              enterprise clients who require strict security and often demand
              individual deployments.
            </p>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              Their previous approach of separating these workflows introduced
              unnecessary complexity and latency. For a team focused on
              large-scale data processing, infrastructure management was a
              distraction from their core expertise.
            </p>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              &quot;Our core expertise and value lie in climate risk modelling,
              so we wanted to focus on optimising data pipelines rather than
              troubleshooting flaky web servers,&quot; explains the development
              team.
            </p>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              The challenge was compounded by their technology choices. For this
              specific greenfield project, they decided to adopt Rust as
              &quot;an entirely new language&quot; to leverage Polars for fast
              data transformations and Axum as a type-safe server framework. The
              team chose Polars running natively in Rust, as it delivered up to
              3× faster performance than its Python counterpart, offering
              superior parallel computing capabilities that scale efficiently
              with growing data volumes.
            </p>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              However, setting up production-ready, scalable infrastructure for
              Rust applications traditionally required significant DevOps
              expertise.
            </p>
          </div>
          <div className="w-[782px] flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
              Choosing Shuttle to Eliminate Infrastructure Overhead
            </h2>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              Since Rust was their primary language choice for this greenfield
              component, Unwritten didn&apos;t directly compare Shuttle with
              other platforms. Instead, they used their experience with Vercel
              for front-end deployments as a benchmark when assessing
              Shuttle&apos;s features. Shuttle&apos;s position as a hosting
              platform specifically designed for Rust made it the obvious
              choice, with its approach of eliminating deployment complexity
              crucial for adopting a new language.
            </p>
            <div className="self-stretch flex flex-col justify-start items-start gap-5">
              <h2 className="self-stretch justify-start text-text-secondary text-xl font-normal">
                The integration spans their entire development lifecycle:
              </h2>
              <ol className="self-stretch flex flex-col justify-start items-start">
                <li className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch py-5 border-b border-white/30 inline-flex justify-start items-baseline gap-5">
                    <div className="w-40 shrink-0 justify-start text-neutral-200 text-2xl font-normal">
                      Development
                    </div>
                    <div className="flex-1 justify-start text-text-secondary text-xl font-normal">
                      The Shuttle CLI runs servers locally during feature
                      development with automatic database provisioning, creating
                      an environment that mirrors production.
                    </div>
                  </div>
                </li>
                <li className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch py-5 border-b border-white/30 inline-flex justify-start items-baseline gap-5">
                    <div className="w-40 shrink-0 justify-start text-neutral-200 text-2xl font-normal">
                      Deployment
                    </div>
                    <div className="justify-start text-text-secondary text-xl font-normal">
                      Shuttle&apos;s GitHub Actions handle automated deployments
                      to both staging and production environments with just 40
                      lines of YAML, providing full infrastructure provisioning,
                      build caching, zero-downtime deploys, and graceful
                      rollbacks.
                    </div>
                  </div>
                </li>
                <li className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch py-5 border-b border-white/30 inline-flex justify-start items-baseline gap-5">
                    <div className="w-40 shrink-0 justify-start text-neutral-200 text-2xl font-normal">
                      Maintenance
                    </div>
                    <div className="flex-1 justify-start text-text-secondary text-xl font-normal">
                      Shuttle&apos;s native integration with Better Stack
                      delivers robust monitoring and observability out of the
                      box.
                    </div>
                  </div>
                </li>
              </ol>
            </div>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              Given Rust&apos;s steep learning curve for the team adopting this
              entirely new language, offloading deployment complexity allowed
              them to focus on learning Rust and concentrate on development
              rather than infrastructure concerns.
            </p>
          </div>
          <div className="w-[782px] flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
              Focusing on Data Processing Over Infrastructure Management
            </h2>
            <div className="self-stretch flex flex-col justify-start items-start gap-8">
              <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
                Since adopting Shuttle, Unwritten has transformed how they
                approach infrastructure and development:
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
                        Eliminated Infrastructure Complexity{" "}
                      </div>
                      <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
                        No more Terraform configurations or build scripts. The
                        team no longer needs expertise in DevOps, cloud
                        infrastructure, or networking.
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
                        Accelerated Development Cycles
                      </h2>
                      <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
                        Clients receive dedicated Shuttle instances, with plans
                        for isolated cloud deployments to meet strict security
                        requirements.
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
                        Client-Specific Deployments
                      </div>
                      <div className="self-stretch justify-start">
                        <span className="text-text-secondary text-xl font-normal">
                          Clients receive dedicated Shuttle instances, with
                          plans for isolated cloud deployments to meet strict
                          security requirements.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch p-8 inline-flex justify-center items-center gap-2.5">
              <div className="flex-1 text-center justify-start text-neutral-200 text-2xl font-normal">
                &quot;Shuttle allows us to focus on what we do best&quot;
                summarizes the team&apos;s experience. With Shuttle, they can
                deploy production-ready systems in minutes.
              </div>
            </div>
          </div>
          <div className="w-[782px] flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
              Technical Implementation
            </h2>
            <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
              Unwritten leverages Shuttle&apos;s ecosystem for their data
              processing platform:
            </p>

            <Accordion accordionItems={accordionItems} />
            <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
              The combination provides stability and type safety paramount for
              data calculations where accuracy is critical. The team values
              Rust&apos;s compile-time guarantees and type safety as essential
              safeguards for their data pipelines, ensuring production-grade
              reliability standards.
            </p>
          </div>
          <div className="w-[782px] flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
              Impact on Team and Workflow
            </h2>
            <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
              Shuttle has unified the development process, making deployment
              experiences consistent across front-end and back-end development.
              This is particularly valuable for Unwritten&apos;s specialised
              team who excel in data engineering but were new to Rust
              development and prefer to avoid infrastructure complexity.
            </p>
            <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
              &quot;From experience on previous projects with IaaS in public
              cloud environments, it took ordinary developers days to weeks to
              set up production-ready infrastructure,&quot; the team notes.
            </p>
            <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
              With Shuttle, infrastructure concerns disappear—you can have a
              fully operational setup in <strong>minutes</strong> with zero
              specialised expertise. The team describes Shuttle as &quot;Vercel
              for backend.&quot;
            </p>
          </div>
          <div className="w-[782px] flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
              Get Started with Shuttle
            </h2>
            <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
              Unwritten&apos;s success demonstrates how Shuttle enables
              technology companies to focus on their core mission rather than
              infrastructure management. The combination of Rust&apos;s
              performance and Shuttle&apos;s deployment simplicity allowed their
              team to build production-ready data processing solutions at
              unprecedented speed.
            </p>
          </div>
          <div className="w-[782px] p-12 bg-stone-950 rounded-3xl flex flex-col justify-center items-start gap-3">
            <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
              Ready to eliminate infrastructure complexity for your Rust
              project?
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
    </>
  );
}
