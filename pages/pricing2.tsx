import React, { ReactNode } from "react";
import { NextSeo } from "next-seo";
import { GetStaticPropsResult } from "next";
import { QuestionAttrs } from "../components/sections/FrequentlyAskedQuestions";
import { pricingQuestions } from "../content";
import { Page } from "components/templates";
import FeatureList from "components/sections/Pricing/FeatureList";
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
      <div
        // style={{
        //   height: "calc(100vh - 88px)",
        // }}
        className="flex flex-col items-center justify-between gap-8 p-16 pt-28 2xl:p-28 2xl:pt-40"
      >
        <div className="flex flex-col items-center gap-8">
          <h1 className="w-fit text-center font-gradual text-5xl font-bold text-black dark:text-head lg:text-6.5">
            Cloud Development <br /> made Simple
          </h1>
          <p className="pt-0 w-full text-xl tracking-wide leading-8 text-center max-w-[577px] text-neutral-400 max-md:max-w-full">
            Shuttle puts your developer experience first. Build with joy, scale
            with ease while we handle the infrastructure.
          </p>
          <FeatureList />
        </div>
        <ImageSection />
      </div>

      <div className="flex flex-col items-center mb-[100px]">
        <h1 className="w-fit text-center font-gradual leading-[72px] text-5xl font-bold text-black dark:text-head lg:text-6.5 lg:leading-[96px]">
          Pricing tiers
        </h1>
        <p className="pt-0 w-full text-xl tracking-wide leading-8 text-center max-w-[577px] text-neutral-400 max-md:max-w-full">
          Simple pricing, transparent billing
        </p>
      </div>

      <PricingCards />

      <PricingComparison />

      <div
        style={{ maxHeight: "80vh" }}
        className="relative min-h-[568px] h-full flex flex-col justify-center"
      >
        <PricingGrid />
        <div
          className="hidden w-[70%] h-1/2 absolute -z-10 top-1/2 left-0 rounded-3xl xl:block"
          style={{
            filter: "blur(200px)",
            transform: "translateX(-20%) translateY(-50%) rotate(20deg)",
            background:
              "linear-gradient(62.43deg, rgba(252, 84, 12, 0.425) 54.71%, rgba(56, 212, 233, 0.325) 79.8%)",
          }}
        />
      </div>

      <div className="flex flex-col gap-6 max-w-7xl py-16 m-auto">
        <h1 className="text-center font-gradual text-5xl font-bold text-black dark:text-head lg:text-4">
          Why Developers Choose Shuttle
        </h1>
        <p className="pt-0 w-full text-xl tracking-wide leading-8 text-center mx-auto max-w-4xl text-neutral-400 max-md:max-w-full">
          At Shuttle, we don't just provide cloud infrastructure - we provide a
          developer-first experience designed to make building and deploying
          Rust applications effortless and joyful.
        </p>
      </div>

      <BlogCards />

      <div className=" flex justify-center my-10 text-base tracking-normal leading-8 bg-white bg-opacity-0 text-neutral-400 text-center">
        <a
          href="#"
          className="flex gap-2 items-center hover:opacity-90 transition-opacity underline hover:no-underline"
          aria-label="Check out what our customers say"
        >
          <p className="self-stretch my-auto">
            <span className=" text-[#a2a2a2]">
              Check out what our customers say
            </span>
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/c8cd7228d5b149c59753a0e9d2f2b879/28c70d115ec211b71e4219329117fd12fc372b05d1a3953066649d170cd35687?placeholderIfAbsent=true"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.25] w-[15px]"
            aria-hidden="true"
          />
        </a>
      </div>

      <Faq faqData={faqData} />

      {/*
      <Plans />
      <LovedBy />
      <PriceCards />
      <Calculator />
      <BenefitCards />
      <Pricing />
      <Contact />
      <Testimonials />
      <FrequentlyAskedQuestions questions={questions} page="pricing" />
      <CallToAction />
      */}
    </div>
  );
}

PricingPage.getLayout = (children: ReactNode) => (
  <Page background={""}>{children}</Page>
);
