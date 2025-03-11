import React, { ReactNode } from "react";
import { NextSeo } from "next-seo";
import { GetStaticPropsResult } from "next";
import { QuestionAttrs } from "../components/sections/FrequentlyAskedQuestions";
import { pricingQuestions } from "../content";
import { Page } from "components/templates";
import FeatureList from "components/sections/Pricing/FeatureList";
import { BackgroundShape } from "../components/BackgroundShape";
import { ImageSection } from "../components/sections/Pricing/ImageSection";
import PricingCards from "../components/sections/Pricing/PricingCards/PricingCards";
import { PricingComparison } from "../components/sections/Pricing/Comparison/PricingComparison";
import PricingGrid from "../components/sections/Pricing/UsageBasedPricing/PricingGrid";
import BlogCards from "../components/sections/Pricing/BlogCards";
import Faq from "../components/sections/Faq/Faq";
import { faqData } from "../components/sections/Pricing/faqData";
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
    <div className="relative flex-grow bg-center bg-repeat px-4">
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
      <div className="flex flex-col items-center justify-between gap-8 p-16 pt-28">
        <div className="flex flex-col items-center gap-4 md:gap-8">
          <h1 className="w-fit text-center font-gradual text-5xl font-bold text-black dark:text-head lg:text-6.5">
            Cloud Development <br /> made Simple
          </h1>
          <p className="pt-0 w-full text-base md:text-xl tracking-wide leading-8 text-center max-w-[577px] text-neutral-400 max-md:max-w-full">
            Shuttle puts your developer experience first. Build with joy, scale
            with ease while we handle the infrastructure.
          </p>
          <FeatureList />
        </div>
        <ImageSection />
      </div>

      <div className="flex flex-col items-center mb-[40px] md:mb-[100px]">
        <h2 className="w-fit text-center font-gradual leading-[72px] text-[48px] font-bold text-black dark:text-head lg:leading-[96px]">
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

      <div className="relative min-h-[568px] flex flex-col justify-center">
        <PricingGrid />
        <BackgroundShape
          style={{ transform: "none" }}
          className="w-full h-[200px] top-auto left-0 hidden lg:block"
          background="linear-gradient(67.02deg, rgba(252, 84, 12, 0.7) 36.9%, rgba(255, 215, 111, 0.7) 63.12%, rgba(56, 212, 233, 0.7) 81.59%)"
        />
      </div>

      <div className="flex flex-col gap-6 max-w-7xl py-16 m-auto">
        <h3 className="text-center font-gradual text-[48px] font-bold text-black dark:text-head md:text-4">
          Why Developers Choose Shuttle
        </h3>
        <p className="pt-0 w-full text-base md:text-xl tracking-wide leading-8 text-center mx-auto max-w-4xl text-neutral-400 max-md:max-w-full">
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
