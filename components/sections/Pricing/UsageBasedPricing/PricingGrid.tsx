"use client";

import * as React from "react";
import { PricingCard } from "./PricingCard";

const pricingData = [
  {
    iconSrc: "/images/pages/pricing/sections/pricingGrid/databaseStorage.svg",
    title: "Database storage",
    price: "$0.12",
    unit: "/ GB / month",
  },
  {
    iconSrc: "/images/pages/pricing/sections/pricingGrid/buildMinutes.svg",
    title: "Build minutes",
    price: "$0.025",
    unit: "/ min",
  },
  {
    iconSrc: "/images/pages/pricing/sections/pricingGrid/networkEgress.svg",
    title: "Network egress",
    price: "$0.10",
    unit: "/ GB",
  },
  {
    iconSrc: "/images/pages/pricing/sections/pricingGrid/compute.svg",
    title: "Compute",
    price: "$0.06",
    unit: "/ vCPU hour",
  },
];

export default function Cards() {
  return (
    <div className="mx-auto max-w-7xl w-full">
      <div className="flex flex-row flex-wrap justify-center items-center gap-8 xl:gap-0 xl:flex-nowrap md:mx-[-0.5rem]">
        {/*<BackgroundShape left className="top-[60%] block md:hidden" />*/}
        <div className="flex flex-col gap-5 sm:px-10 min-w-0 text-center xl:text-left xl:w-1/2">
          <h3 className="text-[40px] md:text-5xl font-bold text-gray-300 font-gradual leading-[48px]">
            Usage-based pricing
          </h3>
          <div className="text-base md:text-xl text-white/60 max-w-xl">
            Scale beyond included resources in Pro and Growth —only pay for what
            you use, when you need it.
          </div>
        </div>
        <section
          className="lg:w-3/5 xl:px-12 w-full"
          aria-label="Pricing Cards"
        >
          <div
            className="flex flex-col md:flex-row flex-wrap items-center w-full max-md:max-w-full"
            role="list"
          >
            <PricingCard {...pricingData[0]} />
            <PricingCard {...pricingData[1]} />
          </div>
          <div
            className="flex flex-col md:flex-row flex-wrap items-center w-full max-md:max-w-full"
            role="list"
          >
            <PricingCard {...pricingData[2]} />
            <PricingCard {...pricingData[3]} />
          </div>
        </section>
      </div>
    </div>
  );
}
