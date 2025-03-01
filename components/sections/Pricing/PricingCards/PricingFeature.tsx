import React from "react";

interface PricingFeatureProps {
  text: string;
  icon: React.ComponentType<any>;
}

export const PricingFeature: React.FC<PricingFeatureProps> = ({
  text,
  icon: Icon,
}) => {
  return (
    <>
      <Icon
        aria-hidden="true"
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square text-grey100"
      />
      <span className="self-stretch my-auto text-white/60">{text}</span>
    </>
  );
};
