"use client";

import * as React from "react";
import { PriceDisplay } from "./PriceDisplay";

interface PricingCardProps {
  iconSrc: string;
  title: string;
  price: string;
  unit: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  iconSrc,
  title,
  price,
  unit,
}) => {
  return (
    <article className="w-full md:w-1/2 px-2 my-2" role="listitem">
      <div className="flex grow shrink gap-4 items-center justify-center self-stretch px-6 py-8 my-auto bg-black border border-solid border-white border-opacity-30 rounded-[32px] max-md:px-5 whitespace-nowrap">
        <img
          src={iconSrc}
          alt={`${title} icon`}
          className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
        />
        <div className="md:flex-1 shrink self-stretch my-auto basis-0">
          <h3 className="text-base font-bold text-neutral-200">{title}</h3>
          <div className="flex gap-2 items-center">
            <p className="text-xl text-right text-white font-gradual font-medium">
              {price}
            </p>
            <p className="text-sm text-center text-neutral-400">{unit}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
