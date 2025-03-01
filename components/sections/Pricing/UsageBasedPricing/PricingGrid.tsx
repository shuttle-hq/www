"use client";

import * as React from "react";
import { PricingCard } from "./PricingCard";

export const PricingGrid: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center xl:flex-nowrap gap-14 mx-auto max-w-7xl">
      <div className="flex flex-col gap-5 min-w-0 text-center xl:text-left">
        <h1 className="text-5xl font-bold text-gray-300">
          Usage-based pricing
        </h1>
        <div className="text-xl text-white/60">
          Scale beyond included resources in Pro and Growth —only pay for what
          you use, when you need it.
        </div>
      </div>
      <section className="max-w-[644px] w-full rounded-[32px]">
        <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
          <PricingCard
            title="Database storage:"
            price="$0.12"
            unit="/ GB / month"
          />
          <PricingCard title="Build minutes:" price="$0.025" unit="/ min" />
        </div>
        <div className="flex flex-wrap gap-4 items-center mt-4 w-full max-md:max-w-full">
          <PricingCard title="Network egress:" price="$0.10" unit="/ GB" />
          <PricingCard title="Compute:" price="$0.06" unit="/ vCPU hour" />
        </div>
      </section>
    </div>
  );
};

export default PricingGrid;
