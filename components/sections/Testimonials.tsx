/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { DISCORD_URL } from "../../lib/constants";

const Testimonials = () => {
  return (
    <div className="group relative z-10 mt-24 overflow-hidden bg-[#13292C] py-24 dark:bg-black">
      <span className="pointer-events-none">
        <Image
          src="/images/sections/testimonials/bg-m.png"
          alt="bg mobile"
          width={375}
          height={1047}
          className="absolute left-0 top-0 -z-10 aspect-[2/3] h-full w-full object-cover md:aspect-auto xl:hidden"
        />
        <Image
          src="/images/sections/testimonials/bg.png"
          alt="bg"
          width={600}
          height={1000}
          className="absolute left-[-22.1%] top-0 -z-10 hidden aspect-[2/3] h-full w-full object-cover transition-all duration-1000 group-hover:left-[-15.8%] md:block md:aspect-auto xl:block"
        />
        <Image
          src="/images/sections/testimonials/stars-1.png"
          alt="stars"
          width={1920}
          height={1000}
          className="absolute left-0 top-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:translate-x-12 group-hover:translate-y-3 md:block"
        />
        <Image
          src="/images/sections/testimonials/stars-2.png"
          alt="stars 2"
          width={1920}
          height={1000}
          className="absolute left-0 top-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:-translate-x-5 md:block"
        />
        <Image
          src="/images/sections/testimonials/comet-1.png"
          alt="comet 1"
          width={1920}
          height={1000}
          className="absolute left-0 top-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:-translate-x-52 group-hover:translate-y-52 md:block"
        />
        <Image
          src="/images/sections/testimonials/comet-2.png"
          alt="comet 2"
          width={1920}
          height={1000}
          className="absolute left-0 top-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:-translate-x-96 group-hover:translate-y-96 md:block"
        />
        <Image
          src="/images/sections/testimonials/comet-3.png"
          alt="comet 3"
          width={1920}
          height={1000}
          className="absolute left-0 top-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:-translate-x-52 group-hover:translate-y-52 md:block"
        />
        <Image
          src="/images/sections/testimonials/moon.png"
          alt="moon"
          width={1920}
          height={1000}
          className="absolute left-0 top-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:-translate-x-8 group-hover:-translate-y-8 md:block"
        />
        <Image
          src="/images/sections/testimonials/earth.png"
          alt="earth"
          width={1920}
          height={1000}
          className="absolute left-0 top-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:translate-x-8 group-hover:translate-y-8 md:block"
        />
      </span>
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-10">
        <h2 className="font-gradual text-4.5 font-bold leading-none text-head lg:text-[3.5rem]">
          What the community says
        </h2>
        <p className="mt-3 text-xl text-white/40 sm:mt-5 lg:text-2xl">
          Join thousands of developers using Shuttle. Connect with them on&nbsp;
          <Link href={DISCORD_URL} className="underline">
            Discord
          </Link>
          .
        </p>
        <div className="mt-6 grid gap-5 md:mt-20 md:grid-cols-3 md:items-center">
          <div className="space-y-5">
            <div className="rounded-[1.25rem] border border-white border-opacity-10 p-6 backdrop-blur-2xl">
              <div className="flex items-start gap-4">
                <div className="h-[3.125rem] w-[3.125rem] flex-shrink-0 rounded-full bg-gradient-to-r from-[#FC540C] via-[#4E452F] to-[#38D4E9] p-px">
                  <Image
                    src="/images/sections/testimonials/dominykas.jpg"
                    alt="profile picture"
                    width={40}
                    height={40}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-gradual font-bold text-white">
                    Dominykas
                  </h3>
                  <p className="text-head">@chaosteil</p>
                  <p className="text-head"> Staff Software Engineer @ Uber</p>
                </div>
              </div>
              <p className="mt-5 text-head">
                Game changer, what a great project.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-white border-opacity-10 p-6 backdrop-blur-2xl">
              <div className="flex items-start gap-4">
                <div className="h-[3.125rem] w-[3.125rem] flex-shrink-0 rounded-full bg-gradient-to-r from-[#FC540C] via-[#4E452F] to-[#38D4E9] p-px">
                  <Image
                    src="/images/sections/testimonials/matthias.jpg"
                    alt="profile picture"
                    width={40}
                    height={40}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-gradual font-bold text-white">
                    Matthias Endler
                  </h3>
                  <p className="text-head">@mathiasendler</p>
                  <p className="text-head">Rust Consultant @ Corrode</p>
                </div>
              </div>
              <p className="mt-5 text-head">
                Deployed my second service with Shuttle and I really like it!
                It's fast and integrates well with cargo, so I can focus on the
                Rust code instead of the deployment. Well done!
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <div className="rounded-[1.25rem] border border-white border-opacity-10 p-6 backdrop-blur-2xl">
              <div className="flex items-start gap-4">
                <div className="h-[3.125rem] w-[3.125rem] flex-shrink-0 rounded-full bg-gradient-to-r from-[#FC540C] via-[#4E452F] to-[#38D4E9] p-px">
                  <Image
                    src="/images/sections/testimonials/peter.jpeg"
                    alt="profile picture"
                    width={40}
                    height={40}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-gradual font-bold text-white">
                    Peter Mertz
                  </h3>
                  <p className="text-head">@mertzalertz</p>
                  <p className="text-head">Lead Engineer @ Zed Financial</p>
                </div>
              </div>
              <p className="mt-5 text-head">
                Shuttle is hands down the best way to deploy a rust app quickly,
                safely, with the ability to scale. It has a variety of
                frameworks supported, and the community surrounding it is
                incredible. Heroku for Rust but better!
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-white border-opacity-10 p-6 backdrop-blur-2xl">
              <div className="flex items-start gap-4">
                <div className="h-[3.125rem] w-[3.125rem] flex-shrink-0 rounded-full bg-gradient-to-r from-[#FC540C] via-[#4E452F] to-[#38D4E9] p-px">
                  <Image
                    src="/images/sections/testimonials/stefan.jpeg"
                    alt="profile picture"
                    width={40}
                    height={40}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-gradual font-bold text-white">
                    Stefan Baumgartner
                  </h3>
                  <p className="text-head">@ddprrt</p>
                  <p className="text-head">
                    Owner oida.dev | Architect @ Dynatrace | Rust Linz
                  </p>
                </div>
              </div>
              <p className="mt-5 text-head">
                You soon realize Shuttle is much more than just a host for your
                app. It's your Rust framework for the cloud; Infrastructure as
                Crates! This puts Shuttle in front of everything else I've
                tried. I couldn't be more happy!
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <div className="rounded-[1.25rem] border border-white border-opacity-10 p-6 backdrop-blur-2xl">
              <div className="flex items-start gap-4">
                <div className="h-[3.125rem] w-[3.125rem] flex-shrink-0 rounded-full bg-gradient-to-r from-[#FC540C] via-[#4E452F] to-[#38D4E9] p-px">
                  <Image
                    src="/images/sections/testimonials/roberto.jpg"
                    alt="profile picture"
                    width={40}
                    height={40}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-gradual font-bold text-white">
                    Roberto Huertas
                  </h3>
                  <p className="text-head">@robertohuertasm</p>
                  <p className="text-head">Software Engineer @ Datadog</p>
                </div>
              </div>
              <p className="mt-5 text-head">
                Mind-blowing! What a huge addition to the Rust ecosystem! I'm
                sure this will be a driveway to get more people into Rust.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-white border-opacity-10 p-6 backdrop-blur-2xl">
              <div className="flex items-start gap-4">
                <div className="h-[3.125rem] w-[3.125rem] flex-shrink-0 rounded-full bg-gradient-to-r from-[#FC540C] via-[#4E452F] to-[#38D4E9] p-px">
                  <Image
                    src="/images/sections/testimonials/glen.jpg"
                    alt="profile picture"
                    width={40}
                    height={40}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-gradual font-bold text-white">
                    Glen De Cauwsemaecker
                  </h3>
                  <p className="text-head">@glendc</p>
                  <p className="text-head">Founder @ Plabayo</p>
                </div>
              </div>
              <p className="mt-5 text-head">
                Shuttle turns shipping web services into child play. The full
                power of the Rust ecosystem together with zero effort
                deployments and no infrastructure work allows us to hit market
                as quickly as we can develop the product. Magic!
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center md:hidden">
          <Link
            href="#"
            className="border-gradient shadow-gradient rounded-button bg-black px-6 py-3 font-gradual font-bold text-head"
          >
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
