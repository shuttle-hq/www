"use client";

import * as React from "react";
import { PriceDisplay } from "./PriceDisplay";

interface PricingCardProps {
  title: string;
  price: string;
  unit: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  unit,
}) => {
  return (
    <article className="flex flex-col flex-1 shrink justify-center self-stretch p-8 my-auto bg-black border border-solid basis-0 border-slate-600 border-opacity-30 min-w-60 rounded-[32px] max-md:px-5">
      <h2 className="text-base font-bold text-center text-neutral-200">
        {title}
      </h2>
      <div className="self-center mt-2">
        <PriceDisplay price={price} unit={unit} />
      </div>
    </article>
  );
};
