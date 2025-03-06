import React from "react";
import { PricingFeature } from "./PricingFeature";
import { PricingButton } from "./PricingButton";

export interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  priceSuffix: string;
  features: string[];
  buttonText: string;
  buttonVariant?: "default" | "highlight";
  href: string;
  icon: React.ComponentType<any>;
  collapsed?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  priceSuffix,
  features,
  buttonText,
  buttonVariant = "default",
  href = "",
  icon,
  collapsed,
}) => {
  const featuresListClassName = collapsed ? "xl:max-h-0" : "xl:max-h-[300px]";

  return (
    <article className="w-full sm:w-1/2 xl:w-1/4 px-4 py-2 sm:px-2">
      <div className="overflow-hidden transition transition-500 p-8 bg-black border border-solid border-white/30 min-w-60 rounded-[32px] max-md:px-5">
        <div className="w-full flex flex-col">
          <div className="flex flex-col gap-2">
            <header>
              <h2 className="text-3xl font-bold text-zinc-300">{title}</h2>
              <p className="mt-1 text-base leading-6 text-white/60">
                {description}
              </p>
            </header>

            <div className="flex gap-1 items-end w-full py-3.5">
              <span className="text-2xl font-bold leading-6 text-zinc-300">
                {price}
              </span>
              <span className="text-sm leading-none text-neutral-400">
                {priceSuffix}
              </span>
            </div>
          </div>
          <ul
            className={`w-full text-sm transition-all duration-500 leading-tight text-white ${featuresListClassName} overflow-hidden`}
          >
            <div className="h-8" />
            {features.map((feature, index) => (
              <li
                key={index}
                className="mt-4 first:mt-0 flex gap-2 items-center w-full"
              >
                <PricingFeature text={feature} icon={icon} />
              </li>
            ))}
          </ul>
        </div>
        <PricingButton
          collapsed={collapsed}
          text={buttonText}
          variant={buttonVariant}
          href={href}
        />
      </div>
    </article>
  );
};
