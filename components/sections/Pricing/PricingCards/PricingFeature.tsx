import React from "react";

interface PricingFeatureProps {
  text: string;
  iconUrl: string;
}

export const PricingFeature: React.FC<PricingFeatureProps> = ({
  text,
  iconUrl,
}) => {
  return (
    <>
      <img
        src={iconUrl}
        alt=""
        aria-hidden="true"
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      />
      <span className="self-stretch my-auto">{text}</span>
    </>
  );
};
