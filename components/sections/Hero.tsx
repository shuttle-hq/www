import { Button, LoginButton, SignupButton } from "components/elements";
import Image from "next/image";
import { DISCORD_URL } from "../../lib/constants";
import codeImage from "public/images/sections/hero/shuttle-axum-hello-world.png";
import { trackEvent } from "lib/posthog";

const Hero = () => {
  return (
    <div className="mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-28">
      <header className="md:grid md:grid-cols-2 md:items-center lg:grid-cols-[1.2fr_1fr] lg:gap-8">
        <div>
          <h1 className="font-gradual text-5xl font-bold text-head lg:text-6.5">
            <span className="text-gradient block bg-clip-text text-transparent">
              Build Backends.
            </span>
            Fast.
          </h1>
          <p className="mt-4 sm:text-xl lg:text-2xl">
            Build & ship a backend without writing any infrastructure files.
            Instead get your infrastructure definitions from your code function
            signatures and annotations.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-5 sm:mt-10 lg:mt-12 xl:mt-16">
            <SignupButton
              variant="primary"
              invertOnDark
              onClick={() => {
                trackEvent("homepage_buildbackendsfast_startbuilding");
              }}
            >
              Start Building
            </SignupButton>
            <Button
              variant="secondary"
              invertOnDark
              href={DISCORD_URL}
              onClick={() => {
                trackEvent("homepage_buildbackendsfast_discord");
              }}
            >
              Join Discord
            </Button>
          </div>
        </div>
        <div className="relative z-10 mt-8 overflow-hidden rounded-3xl bg-[#13292C] p-5 dark:bg-black sm:mt-10 sm:p-8 lg:mt-0 lg:p-10">
          <Image
            src={codeImage}
            alt="code"
            className="pointer-events-none mx-auto select-none rounded-3xl"
          />
          <Image
            src="/images/sections/hero/bg.png"
            alt="hero background"
            width={702}
            height={438}
            className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full select-none"
          />
        </div>
      </header>
    </div>
  );
};

export default Hero;
