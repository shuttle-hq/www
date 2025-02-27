import {
  CallToAction,
  FrequentlyAskedQuestions,
  Pricing,
  Testimonials,
  TrustedBy,
} from "components/sections";
import { QuestionAttrs } from "../components/sections/FrequentlyAskedQuestions";
import { GetStaticPropsResult } from "next";
import { pricingQuestions } from "../content";
import Hero from "components/sections/Pricing/Hero";
import { Page } from "components/templates";
import { ReactNode } from "react";
import { NextSeo } from "next-seo";
import "react-tooltip/dist/react-tooltip.css";
import Plans from "components/sections/Pricing/Plans";
import LovedBy from "components/sections/Pricing/LovedBy";
import PriceCards from "components/sections/Pricing/PriceCards";
import Contact from "components/sections/Pricing/Contact";
import BenefitCards from "components/sections/Pricing/BenefitsCards";
import Calculator from "components/sections/Pricing/Calculator";
import FeatureList from "components/sections/Pricing/FeatureList";
import { ImageSection } from "../components/sections/Pricing/ImageSection";
import PricingCards from "../components/sections/Pricing/PricingCards/PricingCards";
import { PricingComparison } from "../components/sections/Pricing/Comparison/PricingComparison";

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
    <div className="relative flex-grow overflow-hidden bg-center bg-repeat">
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
      <div className="flex flex-col items-center">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="w-fit text-center font-gradual text-5xl font-bold text-black dark:text-head lg:text-6.5">
          Cloud Development <br /> made Simple
        </h1>
        <br />
        <br />
        <p className="pt-0 w-full text-xl tracking-wide leading-8 text-center max-w-[577px] text-neutral-400 max-md:max-w-full">
          Shuttle puts your developer experience first. Build with joy, scale
          with ease while we handle the infrastructure.
        </p>
      </div>
      <br />
      <br />
      <FeatureList />
      <br />
      <br />
      <br />
      <ImageSection />
      <br />
      <br />
      <br />
      <div className="flex flex-col items-center">
        <h1 className="w-fit text-center font-gradual text-5xl font-bold text-black dark:text-head lg:text-6.5">
          Pricing tiers
        </h1>
        <br />
        <br />
        <p className="pt-0 w-full text-xl tracking-wide leading-8 text-center max-w-[577px] text-neutral-400 max-md:max-w-full">
          Simple pricing, transparent billing
        </p>
        <br />
        <br />
      </div>

      <PricingCards />
      <br />
      <br />
      <br />
      <PricingComparison />

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
    </div>
  );
}

PricingPage.getLayout = (children: ReactNode) => (
  <Page background={""}>{children}</Page>
);
