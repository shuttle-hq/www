import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { TechnicalImplementationSection } from "../../components/sections/UserStories/TechnicalImplementationSection";
import { ReadyForShuttle } from "components/sections/UserStories/ReadyForShuttle";
import { UserQuote } from "components/sections/UserStories/UserQuote";

import userStoriesStyles from "../../pages/customers/UserStories.module.css";

export default function MasterAI() {
  return (
    <>
      <NextSeo
        title="Customers | MasterAI"
        description="How MasterAI Launched an AI-powered Game from Concept to 10K Daily Interactions"
        openGraph={{
          images: [
            {
              url: "https://www.shuttle.dev/images/user-stories/master-ai-og-image.png",
              width: 2400,
              height: 1350,
              alt: "Shuttle x MasterAI: How MasterAI Launched an AI-powered Game from Concept to 10K Daily Interactions",
            },
          ],
        }}
      />
      <main className="flex flex-col mx-auto mt-24 gap-16 w-full max-w-[1280px] px-5 sm:px-10 lg:mt-28 items-center">
        <div className="inline-flex flex-col justify-start items-start gap-28">
          <div className="w-full flex flex-col justify-start items-start gap-10">
            <div className="w-full max-w-[782px] mx-auto border-red self-stretch flex flex-col justify-start items-start gap-6">
              <Image
                src="/images/user-stories/master-ai.png"
                alt="MasterAI logo"
                width={140}
                height={40}
              />
              <h2 className="self-stretch justify-start text-neutral-200 text-3xl md:text-5xl font-bold font-gradual leading-tight md:leading-[57.60px]">
                How MasterAI Launched an AI-powered Game from Concept to 10K
                Daily Interactions
              </h2>
              <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
                Using Shuttle to eliminate backend and database infrastructure
                complexity for an indie game studio
              </p>
            </div>
            <div className="w-full max-w-[984px] self-stretch flex flex-col justify-start items-start my-24">
              <ul className="grid grid-cols-1 md:grid-cols-3 rounded-[20px] gap-6">
                <li
                  className={`self-stretch p-6 md:p-10 flex flex-col justify-start items-start gap-2 rounded-[20px] ${userStoriesStyles["bg-tile-1"]}`}
                >
                  <div className="justify-start text-neutral-200 text-lg md:text-2xl font-normal">
                    Zero to 10,000 daily interactions
                  </div>
                  <div className="justify-start text-text-secondary text-base font-normal leading-normal">
                    Scaled from concept to 10,000+ daily interactions without
                    infrastructure overhead
                  </div>
                </li>
                <li
                  className={`self-stretch p-6 md:p-10 flex flex-col justify-start items-start gap-2 rounded-[20px] ${userStoriesStyles["bg-tile-2"]}`}
                >
                  <div className="justify-start text-neutral-200 text-lg md:text-2xl font-normal">
                    100% developer focus on application code
                  </div>
                  <div className="justify-start text-text-secondary text-base font-normal leading-normal">
                    Development team writes Rust code without touching DevOps or
                    database operations
                  </div>
                </li>
                <li
                  className={`self-stretch p-6 md:p-10 flex flex-col justify-start items-start gap-2 rounded-[20px] ${userStoriesStyles["bg-tile-3"]}`}
                >
                  <div className="justify-start text-neutral-200 text-lg md:text-2xl font-normal">
                    Sustainable indie economics
                  </div>
                  <div className="flex-1 justify-start text-text-secondary text-base font-normal leading-normal">
                    Free initial tier plus accessible pricing enabled launch and
                    growth for a small team
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full max-w-[782px] mx-auto self-stretch justify-start">
              <p className="text-text-secondary text-xl font-normal">
                MasterAI is a mobile app that uses artificial intelligence to
                deliver interactive, personalized role-playing game experiences.
                A &quot;virtual game master&quot; guides each user, generating
                storylines, settings, and game mechanics in real time, including
                dice rolls and one-of-a-kind illustrations created for every
                player.
              </p>
              <p className="text-text-secondary text-xl font-normal mt-5">
                Drawing on decades of running D&D campaigns—where a human
                &quot;game master&quot; creates and guides adventures for a
                group of players over weeks or months—the team understood what
                makes tabletop RPGs compelling. That experience became the
                foundation for training an AI that could replicate the dynamic
                storytelling and adaptive gameplay of a human GM.
              </p>
              <p className="text-text-secondary text-xl font-normal mt-5">
                The result is an AI that makes it possible to play RPGs without
                needing to coordinate schedules with a group or find an
                experienced human game master. The AI tailors every adventure to
                each player&apos;s style, creating immersive, unique experiences
                where the only limitation is imagination.
              </p>
              <p className="text-text-secondary text-xl font-normal mt-5">
                The platform currently handles thousands of sessions with over
                10,000 daily interactions between users and the AI.
              </p>
            </div>
          </div>

          <UserQuote className="w-full max-w-[984px]">
            <span className="text-neutral-200 text-lg md:text-2xl font-normal">
              &quot;We were just starting out: the ability to begin for free
              with a few users and then scale at very accessible costs was
              decisive.&quot;
            </span>
          </UserQuote>

          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-2xl md:text-[40px] font-bold font-gradual leading-tight md:leading-[48px]">
              The Challenge: Building Ambitious Games with Indie Resources
            </h2>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              For an indie team just starting out, the challenge was that they
              needed robust backend and database infrastructure to store
              character data, adventures, and player-AI conversations, but they
              had neither the budget for traditional hosting to handle such a
              workload nor the DevOps expertise to manage it.
            </p>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              The team&apos;s priorities were gameplay and narrative
              development, not infrastructure management. They needed a solution
              that would let them focus on what they do best.
            </p>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              As an indie studio with limited funds, they needed to start free
              and scale affordably as their user base grew. Traditional database
              hosting options either required significant upfront investment or
              came with complexity that would slow development.
            </p>
          </div>

          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-2xl md:text-[40px] font-bold font-gradual leading-tight md:leading-[48px]">
              Choosing Shuttle as Their Foundation
            </h2>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              The decision came down to three factors that aligned perfectly
              with their needs as an indie team:
            </p>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              <strong>Zero infrastructure complexity</strong>: Shuttle manages
              backend and database operations automatically, including
              provisioning, backups, and secure connections. No DevOps expertise
              required.
            </p>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              <strong>Economic accessibility</strong>: The free initial tier
              allowed them to launch without upfront database costs, then scale
              at accessible prices as they grew.
            </p>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              <strong>Developer experience</strong>: Shuttle simplified
              configuration, deployment, and maintenance, letting the team focus
              entirely on Rust application code.
            </p>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              Shuttle became their go-to platform for backend infrastructure and
              data persistence, managing the project&apos;s backend services and
              primary database while handling all the infrastructure complexity
              that would have otherwise required dedicated DevOps resources.
            </p>
          </div>

          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-2xl md:text-[40px] font-bold font-gradual leading-tight md:leading-[48px]">
              From Concept to 10,000 Daily Interactions
            </h2>
            <div className="self-stretch flex flex-col justify-start items-start gap-8">
              <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
                Since adopting Shuttle, MasterAI has scaled from concept to
                thousands of active sessions without infrastructure becoming a
                bottleneck.
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
                        Development speed
                      </div>
                      <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
                        Instant database setup meant more time on gameplay and
                        narrative, less on infrastructure. The team moved from
                        idea to playable prototype with zero upfront cost.
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
                        Economic sustainability
                      </h2>
                      <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
                        The combination of a free initial tier and accessible
                        pricing made the economics work for an indie team,
                        creating a sustainable path from launch to growth.
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
                        Team focus
                      </div>
                      <div className="self-stretch justify-start">
                        <span className="text-text-secondary text-xl font-normal">
                          Developers concentrate on code while Shuttle manages
                          the infrastructure. No dedicated DevOps needed, no
                          database operations to worry about.
                        </span>
                      </div>
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
                          fill="url(#paint0_linear_377_13658_2)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_377_13658_2"
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
                        Workflow efficiency
                      </div>
                      <div className="self-stretch justify-start">
                        <span className="text-text-secondary text-xl font-normal">
                          Creating and managing test and production environments
                          became trivially easy. The team removed infrastructure
                          setup and deployment from their CI/CD workflows,
                          making everything lighter and more stable.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <UserQuote className="w-full max-w-[984px]">
            <span className="text-neutral-200 text-lg md:text-2xl font-normal">
              &quot;Shuttle now manages the infrastructure automatically,
              letting developers focus solely on Rust application code,&quot; -
              the team notes.
            </span>
          </UserQuote>

          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
            <div className="w-full flex flex-col justify-start items-start gap-6">
              <h2 className="self-stretch justify-start text-neutral-200 text-2xl md:text-[40px] font-bold font-gradual leading-tight md:leading-[48px]">
                Technical Implementation
              </h2>
              <div className="w-full flex flex-col justify-start items-start gap-6">
                <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
                  MasterAI leverages a modern stack built around Shuttle&apos;s
                  database infrastructure:
                </p>
                <TechnicalImplementationSection
                  items={[
                    {
                      title: "Shuttle",
                      content:
                        "for backend infrastructure and database management",
                    },
                    {
                      title: "Rust",
                      content:
                        "the primary programming language for backend services",
                    },
                    {
                      title: "Flutter",
                      content: "for cross-platform mobile apps (Android/iOS)",
                    },
                  ]}
                />
                <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
                  Shuttle securely stores all character data, adventures, and
                  the ongoing conversations between players and the AI game
                  master. The database scales transparently as the platform
                  grows, handling thousands of concurrent sessions without
                  manual intervention.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-2xl md:text-[40px] font-bold font-gradual leading-tight md:leading-[48px]">
              Building for the Long Term
            </h2>
            <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
              MasterAI plans to collaborate with Shuttle for the long term as
              they continue scaling. Looking ahead, the team would welcome
              integrated performance and logging dashboards as they grow, though
              they note that when issues have arisen, support quickly helped
              identify structural problems that needed fixing.
            </p>
            <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
              Their advice for other indie developers and Rust startups is:
              &quot;Shuttle is a great way to get moving fast without
              infrastructure blockers, even with a small team and limited
              funds.&quot;
            </p>
            <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
              The platform eliminated the infrastructure friction that typically
              slows indie teams, letting them focus on what matters.
            </p>
          </div>

          <div className="w-full max-w-[782px] mx-auto flex flex-col justify-start items-start gap-10">
            <h2 className="self-stretch justify-start text-neutral-200 text-2xl md:text-[40px] font-bold font-gradual leading-tight md:leading-[48px]">
              Get Started with Shuttle
            </h2>
            <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
              MasterAI&apos;s success demonstrates how Shuttle enables indie
              teams to build and scale ambitious applications without
              infrastructure expertise or significant upfront costs. The
              combination of Rust&apos;s performance and Shuttle&apos;s
              zero-complexity database management let a small team go from
              concept to 10,000 daily interactions and beyond.
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
