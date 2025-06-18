import React, { ReactNode } from "react";
import { NextSeo } from "next-seo";
import { GetStaticPropsResult } from "next";
import { QuestionAttrs } from "../components/sections/FrequentlyAskedQuestions";
import { pricingQuestions } from "../content";
import { Button, SignupButton } from "components/elements";
import { Page } from "components/templates";
import FeatureList from "components/sections/Pricing/FeatureList";
import { ImageSection } from "../components/sections/Pricing/ImageSection";
import PricingCards from "../components/sections/Pricing/PricingCards/PricingCards";
import { PricingComparison } from "../components/sections/Pricing/Comparison/PricingComparison";
import PricingGrid from "../components/sections/Pricing/UsageBasedPricing/PricingGrid";
import BlogCards from "../components/sections/Pricing/BlogCards";
import Faq from "../components/sections/Faq/Faq";
import { faqData } from "../components/sections/Pricing/faqData";
import Image from "next/image";
import { trackEvent } from "lib/posthog";
import "react-tooltip/dist/react-tooltip.css";

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      questions: pricingQuestions,
    },
  };
}

interface Props {
  readonly questions: QuestionAttrs[];
}

export default function PricingPage({ questions }: Props) {
  return (
    <div className="relative flex-grow bg-center bg-no-repeat px-4 custom-bg overflow-x-clip">
      <NextSeo
        title="Pricing | Shuttle"
        description="Learn more about the Shuttle pricing structure and our offering."
        openGraph={{
          images: [
            {
              url: "https://www.shuttle.dev/images/og-image.png",
              width: 3516,
              height: 1432,
              alt: "Shuttle.dev - Build Backends Fast",
            },
          ],
        }}
      />
      {/*<Hero />*/}
      <div className="flex flex-col items-center justify-between gap-8 pt-8 md:p-16 md:pt-28">
        <div className="flex flex-col items-center gap-4 md:gap-8">
          <h1 className="w-fit text-center font-gradual text-5xl font-bold text-black dark:text-head lg:text-6.5">
            Cloud Development <br /> made Simple
          </h1>
          <p className="pt-0 w-full text-base md:text-xl tracking-wide leading-6 text-center max-w-[577px] text-neutral-400 max-md:max-w-full md:leading-8">
            Shuttle puts your developer experience first. Build with joy, scale
            with ease while we handle the infrastructure.
          </p>
          <FeatureList />
        </div>
        <ImageSection />
      </div>

      <div className="flex flex-col items-center mb-5 md:mb-10">
        <h2 className="w-fit text-center font-gradual leading-[72px] text-[40px] font-bold text-black dark:text-head md:text-[48px] lg:leading-[96px]">
          Pricing tiers
        </h2>
        <p className="pt-0 w-full text-base md:text-xl tracking-wide leading-8 text-center max-w-[577px] text-neutral-400 max-md:max-w-full">
          Simple pricing, transparent billing
        </p>
      </div>

      <div>
        <PricingCards />

        <PricingComparison />
      </div>

      <div className="relative flex flex-col justify-center custom-bg2 bg-no-repeat sm:min-h-[1050px]">
        <PricingGrid />
      </div>

      <div className="flex flex-col justify-center items-center mb-24 md:mb-48 m-auto">
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
              <span className="font-bold">14 days free Shuttle Pro</span>, no
              credit card required. Experience the ease of building on cloud
              with Shuttle.
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
                href="https://discord.gg/shuttlehq"
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
      </div>

      <div className="flex flex-col gap-6 max-w-7xl pb-16 m-auto">
        <h3 className="text-center font-gradual text-[40px] md:text-5xl font-bold text-black dark:text-head md:text-4 leading-[48px]">
          Why Developers Choose Shuttle
        </h3>
        <p className="pt-0 w-full text-base md:text-xl tracking-wide leading-6 text-center mx-auto max-w-4xl text-neutral-400 max-md:max-w-full">
          At Shuttle, we don&apos;t just provide cloud infrastructure - we
          provide a developer-first experience designed to make building and
          deploying Rust applications effortless and joyful.
        </p>
      </div>

      <BlogCards />

      <Faq faqData={faqData} />
    </div>
  );
}

PricingPage.getLayout = (children: ReactNode) => (
  <Page background={""}>{children}</Page>
);
