import React from "react";
import { PricingFeature } from "./PricingFeature";
import { PricingButton } from "./PricingButton";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  priceSuffix: string;
  features: string[];
  buttonText: string;
  buttonVariant?: "default" | "highlight";
  iconUrl: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  priceSuffix,
  features,
  buttonText,
  buttonVariant = "default",
  iconUrl,
}) => {
  return (
    <article className="overflow-hidden p-8 bg-black border border-solid border-slate-600 border-opacity-30 min-w-60 rounded-[32px] w-[304px] max-md:px-5">
      <div className="w-full">
        <header>
          <h2 className="text-3xl font-bold text-zinc-300">{title}</h2>
          <p className="mt-1 text-base leading-6 text-white">{description}</p>
        </header>

        <div className="flex gap-1 items-start mt-2 w-full">
          <span className="text-2xl font-bold leading-[52px] text-zinc-300">
            {price}
          </span>
          <span className="text-sm leading-none text-neutral-400">
            {priceSuffix}
          </span>
        </div>

        <ul className="mt-8 w-full text-sm leading-tight text-white">
          {features.map((feature, index) => (
            <li
              key={index}
              className="mt-4 first:mt-0 flex gap-2 items-center w-full"
            >
              <PricingFeature text={feature} iconUrl={iconUrl} />
            </li>
          ))}
        </ul>
      </div>

      <PricingButton text={buttonText} variant={buttonVariant} />
    </article>
  );
};
