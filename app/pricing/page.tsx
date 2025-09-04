import React from "react";
import { Metadata } from "next";
import { pricingQuestions } from "../../content";
import { Button, SignupButton } from "components/elements";
import FeatureList from "components/sections/Pricing/FeatureList";
import { ImageSection } from "../../components/sections/Pricing/ImageSection";
import PricingCards from "../../components/sections/Pricing/PricingCards/PricingCards";
import { PricingComparison } from "../../components/sections/Pricing/Comparison/PricingComparison";
import PricingGrid from "../../components/sections/Pricing/UsageBasedPricing/PricingGrid";
import BlogCards from "../../components/sections/Pricing/BlogCards";
import Faq from "../../components/sections/Faq/Faq";
import { faqData } from "../../components/sections/Pricing/faqData";
import Image from "next/image";
import "react-tooltip/dist/react-tooltip.css";
import { ProTrial } from "components/sections/Pricing/ProTrial";

export const metadata: Metadata = {
  title: "Pricing | Shuttle",
  description: "Learn more about the Shuttle pricing structure and our offering.",
  openGraph: {
    images: [
      {
        url: "https://www.shuttle.dev/images/og-image.png",
        width: 3516,
        height: 1432,
        alt: "Shuttle.dev - Build Backends Fast",
      },
    ],
  },
};

export default function PricingPage() {
  const questions = pricingQuestions;

  return (
    <div className="relative flex-grow bg-center bg-no-repeat px-4 custom-bg overflow-x-clip">
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
        <ProTrial />
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