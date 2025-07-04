import React from "react";
import { Button, SignupButton } from "components/elements";
import Image from "next/image";
import { trackEvent } from "lib/posthog";

export const ProTrial: React.FC = () => (
  <div className="relative bg-[#13292C] dark:bg-black rounded-2xl z-[1] overflow-hidden">
    <span className="pointer-events-none w-full h-full ">
      <Image
        src="/images/sections/call-to-action/bg-m.png"
        alt="rocket"
        className="absolute left-0 top-0 -z-10 aspect-[2/3] h-full w-full object-cover md:aspect-auto xl:hidden"
        width={374}
        height={570}
      />
      <Image
        src="/images/sections/call-to-action/bg.png"
        alt="bg"
        className="absolute left-0 top-0 -z-10 hidden aspect-[2/3] h-full w-full object-cover md:aspect-auto xl:block"
        width={1184}
        height={560}
      />
    </span>
    <div className="flex flex-col p-16 gap-8">
      <h3 className="text-center font-gradual text-[40px] md:text-5xl lg:text-[64px] font-bold text-black dark:text-head lg:leading-[72px]">
        Try{" "}
        <span className="text-gradient bg-clip-text text-transparent">
          Shuttle Pro Tier - 14 days free
        </span>
        <br />
        no credit card required
      </h3>
      <span className="text-base md:text-[24px] tracking-wide leading-6 text-center text-neutral-400 md:leading-8 md:max-w-[1024px]">
        Sign up now to automatically access{" "}
        <span className="font-bold">14 days free Shuttle Pro</span>, no credit
        card required. Experience the ease of building on cloud with Shuttle.
      </span>
      <div className="flex flex-wrap items-center gap-2 self-center">
        <SignupButton
          variant="primary"
          invertOnDark
          className="w-full sm:w-auto text-lg md:px-8 md:py-4 font-normal"
          onClick={() => {
            trackEvent("pricing_protrial_signup_click");
          }}
        >
          Try Pro Free
        </SignupButton>
        <Button
          variant="secondary"
          invertOnDark
          href="https://docs.shuttle.dev/pricing/pro-trial"
          className="w-full sm:w-auto text-lg md:px-8 md:py-4 font-normal"
          onClick={() => {
            trackEvent("pricing_protrial_learn_more_click");
          }}
        >
          Learn more
        </Button>
      </div>
    </div>
  </div>
);
