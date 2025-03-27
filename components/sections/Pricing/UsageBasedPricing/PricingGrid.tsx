"use client";

import * as React from "react";
import { PricingCard } from "./PricingCard";
import { BackgroundShape } from "../../../BackgroundShape";

const pricingData = [
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/c8cd7228d5b149c59753a0e9d2f2b879/784fda3e6f130bc2e22891ea1b21e0202aa08bb8d94cd7f8940ad980315ff5b0?placeholderIfAbsent=true",
    title: "Database storage",
    price: "$0.12",
    unit: "/ GB / month",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/c8cd7228d5b149c59753a0e9d2f2b879/aa53cb4fd7cef1f025cbea539951ed51fbf5316fcb6dd258dfbdf99295830c5d?placeholderIfAbsent=true",
    title: "Build minutes",
    price: "$0.025",
    unit: "/ min",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/c8cd7228d5b149c59753a0e9d2f2b879/742cdd175f363a3b1cf139e692262a767cea7c001af51cb17ab7b00d09447049?placeholderIfAbsent=true",
    title: "Network egress",
    price: "$0.10",
    unit: "/ GB",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/c8cd7228d5b149c59753a0e9d2f2b879/2ffdafe375215a3f6eea0bd894e46102b6265aee60dca28127e31ed04200ad97?placeholderIfAbsent=true",
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
