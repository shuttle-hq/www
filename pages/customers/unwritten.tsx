import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { TechnicalImplementationSection } from "../../components/sections/UserStories/TechnicalImplementationSection";
import { ReadyForShuttle } from "components/sections/UserStories/ReadyForShuttle";
import { UserQuote } from "components/sections/UserStories/UserQuote";

import userStoriesStyles from "../../pages/customers/UserStories.module.css";

export default function Unwritten() {
  return (
    <>
      <NextSeo
        title="Customers | Unwritten"
        description="How Unwritten powers large-scale data processing with zero infrastructure overhead"
        openGraph={{
          images: [
            {
              url: "https://www.shuttle.dev/images/user-stories/unwritten-og-image.png",
              width: 2400,
              height: 1350,
              alt: "Shuttle x Unwritten: Powering large-scale data processing with zero infrastructure overhead",
            },
          ],
        }}
      />
      <main className="flex flex-col mx-auto mt-24 gap-16 w-full max-w-[1280px] px-5 sm:px-10 lg:mt-28 items-center">
        <div className="inline-flex flex-col justify-start items-start gap-28">
          <div className="w-full flex flex-col justify-start items-start gap-10">
            <div className="w-full max-w-[782px] mx-auto border-red self-stretch flex flex-col justify-start items-start gap-6">
              <Image
                src="/images/user-stories/unwritten.png"
                alt="Unwritten logo"
                width={140}
                height={22}
              />
              <h2 className="self-stretch justify-start text-neutral-200 text-5xl font-bold font-gradual leading-[57.60px]">
                How Unwritten powers large-scale data processing with zero
                infrastructure overhead
              </h2>
              <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
                Using Shuttle&apos;s Rust deployment platform to accelerate
                large-scale data processing without infrastructure complexity
              </p>
            </div>
            <div className="w-full max-w-[984px] self-stretch flex flex-col justify-start items-start my-24">
              <ul className="grid grid-cols-3 rounded-[20px] gap-6">
                <li
                  className={`self-stretch p-10 flex flex-col justify-start items-start gap-2 rounded-[20px] ${userStoriesStyles["bg-tile-1"]}`}
                >
                  <div className="justify-start text-neutral-200 text-2xl font-normal">
                    Up to 3x faster data processing
                  </div>
                  <div className="justify-start text-text-secondary text-base font-normal leading-normal">
                    Polars running natively in Rust delivers up to 3× faster
                    performance than its Python counterpart
                  </div>
                </li>
                <li
                  className={`self-stretch p-10 flex flex-col justify-start items-start gap-2 rounded-[20px] ${userStoriesStyles["bg-tile-2"]}`}
                >
                  <div className="justify-start text-neutral-200 text-2xl font-normal">
                    Days to minutes deployment
                  </div>
                  <div className="justify-start text-text-secondary text-base font-normal leading-normal">
                    Infrastructure setup reduced from weeks to minutes with zero
                    specialised expertise
                  </div>
                </li>
                <li
                  className={`self-stretch p-10 flex flex-col justify-start items-start gap-2 rounded-[20px] ${userStoriesStyles["bg-tile-3"]}`}
                >
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
            <div className="w-full max-w-[782px] mx-auto self-stretch justify-start">
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

          <UserQuote className="w-full max-w-[984px]">
            <div className="flex flex-col gap-10">
              <span className="text-neutral-200 text-2xl font-normal">
                &quot;What took days to weeks to set up with traditional
                infrastructure now takes <em>minutes</em> with <em>Shuttle</em>.
                It&apos;s like Vercel for backends.&quot;
              </span>
              <span className="text-neutral-200 text-2xl font-normal">
                Phillip Marks, CRO & CTO Unwritten
              </span>
            </div>
          </UserQuote>

          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
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
          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
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
              <div className="self-stretch inline-flex flex-col justify-start items-start">
                {[
                  {
                    title: "Development",
                    description:
                      "The Shuttle CLI runs servers locally during feature development with automatic database provisioning, creating an environment that mirrors production.",
                  },
                  {
                    title: "Deployment",
                    description:
                      "Shuttle's GitHub Actions handle automated deployments to both staging and production environments with just 40 lines of YAML, providing full infrastructure provisioning, build caching, zero-downtime deploys, and graceful rollbacks.",
                  },
                  {
                    title: "Maintenance",
                    description:
                      "Shuttle's native integration with Better Stack delivers robust monitoring and observability out of the box.",
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
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              Given Rust&apos;s steep learning curve for the team adopting this
              entirely new language, offloading deployment complexity allowed
              them to focus on learning Rust and concentrate on development
              rather than infrastructure concerns.
            </p>
          </div>

          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
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
                      <svg
                        width="26"
                        height="22"
                        viewBox="0 0 26 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.3333 21.9322C11.376 21.9322 10.5533 21.6097 9.86533 20.9646C9.17733 20.3192 8.79489 19.5308 8.718 18.5992H10.7437C10.8119 18.9855 10.9931 19.3042 11.2873 19.5556C11.5813 19.8069 11.93 19.9326 12.3333 19.9326C12.7967 19.9326 13.1902 19.7706 13.514 19.4466C13.838 19.1226 14 18.7289 14 18.2656C14 17.8025 13.838 17.4089 13.514 17.0849C13.1902 16.7609 12.7967 16.5989 12.3333 16.5989H0V14.5992H12.3333C13.3504 14.5992 14.2158 14.956 14.9293 15.6696C15.6431 16.3833 16 17.2487 16 18.2656C16 19.2827 15.6431 20.1481 14.9293 20.8619C14.2158 21.5755 13.3504 21.9322 12.3333 21.9322ZM0 8.90657V6.9069H17.6667C18.33 6.9069 18.8847 6.68379 19.3307 6.23757C19.7769 5.79135 20 5.23668 20 4.57357C20 3.91023 19.7769 3.35546 19.3307 2.90923C18.8847 2.46301 18.33 2.2399 17.6667 2.2399C17.0547 2.2399 16.5384 2.42879 16.118 2.80657C15.6973 3.18435 15.4529 3.66212 15.3847 4.2399H13.359C13.4359 3.0999 13.8838 2.14824 14.7027 1.3849C15.5213 0.621791 16.5093 0.240234 17.6667 0.240234C18.8838 0.240234 19.9102 0.658123 20.746 1.4939C21.582 2.3299 22 3.35646 22 4.57357C22 5.79046 21.582 6.8169 20.746 7.6529C19.9102 8.48868 18.8838 8.90657 17.6667 8.90657H0ZM22 19.3939V17.3682C22.5778 17.3 23.0556 17.0556 23.4333 16.6349C23.8111 16.2145 24 15.6982 24 15.0862C24 14.4229 23.7769 13.8682 23.3307 13.4222C22.8847 12.976 22.33 12.7529 21.6667 12.7529H0V10.7529H21.6667C22.8838 10.7529 23.9102 11.1709 24.746 12.0069C25.582 12.8427 26 13.8691 26 15.0862C26 16.2436 25.6183 17.2316 24.855 18.0502C24.0919 18.8691 23.1402 19.317 22 19.3939Z"
                          fill="url(#paint0_linear_377_13646)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_377_13646"
                            x1="0"
                            y1="11.0862"
                            x2="42.0202"
                            y2="11.0862"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#FC540C" />
                            <stop offset="1" stop-color="#FFD76F" />
                          </linearGradient>
                        </defs>
                      </svg>
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
                      <svg
                        width="26"
                        height="22"
                        viewBox="0 0 26 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.00065 21.957L7.57499 20.5646L10.0417 18.098H9.00065C6.58865 18.098 4.54121 17.2544 2.85832 15.5673C1.17543 13.8802 0.333984 11.8306 0.333984 9.41862C0.333984 7.00662 1.17543 4.95917 2.85832 3.27629C4.54121 1.5934 6.58865 0.751953 9.00065 0.751953H17.0007C19.4127 0.751953 21.4601 1.5934 23.143 3.27629C24.8259 4.95917 25.6673 7.00662 25.6673 9.41862C25.6673 11.8306 24.8259 13.8802 23.143 15.5673C21.4601 17.2544 19.4127 18.098 17.0007 18.098V16.098C18.8535 16.098 20.4279 15.448 21.7237 14.148C23.0194 12.848 23.6673 11.2715 23.6673 9.41862C23.6673 7.56573 23.0194 5.9914 21.7237 4.69562C20.4279 3.39984 18.8535 2.75195 17.0007 2.75195H9.00065C7.14776 2.75195 5.57343 3.39984 4.27765 4.69562C2.98187 5.9914 2.33398 7.56573 2.33398 9.41862C2.33398 11.2715 2.98187 12.8548 4.27765 14.1686C5.57343 15.4824 7.14776 16.1803 9.00065 16.2623H10.2263L7.60832 13.6313L9.00065 12.2393L13.8597 17.098L9.00065 21.957Z"
                          fill="url(#paint0_linear_377_13652)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_377_13652"
                            x1="0.333984"
                            y1="11.3545"
                            x2="41.2767"
                            y2="11.3545"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#FC540C" />
                            <stop offset="1" stop-color="#FFD76F" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                      <h2 className="justify-start text-neutral-200 text-xl font-normal">
                        Accelerated Development Cycles
                      </h2>
                      <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
                        Fast-paced development with frequent pipeline
                        improvements driven by weekly customer feedback, with
                        reliable rollbacks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch p-6 border-b border-white/30 inline-flex justify-start items-start gap-6">
                    <div className="w-8 h-8 relative overflow-hidden">
                      <svg
                        width="26"
                        height="25"
                        viewBox="0 0 26 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.33398 15.0859H15.334V13.0859H5.33398V15.0859ZM5.33398 11.0859H20.6673V9.08594H5.33398V11.0859ZM5.33398 7.08594H20.6673V5.08594H5.33398V7.08594ZM0.333984 24.8039V2.49627C0.333984 1.82272 0.567318 1.2526 1.03398 0.785938C1.50065 0.319271 2.07076 0.0859375 2.74432 0.0859375H23.257C23.9305 0.0859375 24.5007 0.319271 24.9673 0.785938C25.434 1.2526 25.6673 1.82272 25.6673 2.49627V17.6756C25.6673 18.3492 25.434 18.9193 24.9673 19.3859C24.5007 19.8526 23.9305 20.0859 23.257 20.0859H5.05198L0.333984 24.8039ZM4.20065 18.0859H23.257C23.3597 18.0859 23.4537 18.0432 23.539 17.9576C23.6245 17.8723 23.6673 17.7783 23.6673 17.6756V2.49627C23.6673 2.3936 23.6245 2.2996 23.539 2.21427C23.4537 2.12871 23.3597 2.08594 23.257 2.08594H2.74432C2.64165 2.08594 2.54765 2.12871 2.46232 2.21427C2.37676 2.2996 2.33398 2.3936 2.33398 2.49627V19.9323L4.20065 18.0859Z"
                          fill="url(#paint0_linear_377_13658)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_377_13658"
                            x1="0.333984"
                            y1="12.4449"
                            x2="41.2767"
                            y2="12.4449"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#FC540C" />
                            <stop offset="1" stop-color="#FFD76F" />
                          </linearGradient>
                        </defs>
                      </svg>
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
            <div className="self-stretch">
              <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
                &quot;Shuttle allows us to focus on what we do best&quot;
                summarizes the team&apos;s experience. With Shuttle, they can
                deploy production-ready systems in minutes.
              </p>
            </div>
          </div>

          <UserQuote className="w-full max-w-[984px]">
            <span className="text-neutral-200 text-2xl font-normal">
              &quot;Shuttle allows us to focus on what we do best&quot; -
              Unwritten team
            </span>
          </UserQuote>

          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
            <TechnicalImplementationSection />
          </div>
          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
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
          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
              Unwritten&apos;s Transformation
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
          <div className="w-full max-w-[984px] mx-auto">
            <ReadyForShuttle />
          </div>
        </div>
      </main>
    </>
  );
}
