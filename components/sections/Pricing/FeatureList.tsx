"use client";
import * as React from "react";
import { FeatureItem } from "./FeatureItem";

const features = [
  {
    iconUrl: "/images/checkmark.svg",
    text: "Production Ready",
  },
  {
    iconUrl: "/images/checkmark.svg",
    text: "Rust Native",
  },
];

export const FeatureList: React.FC = () => {
  return (
    <section className="flex gap-8 justify-center items-center text-xl tracking-wide leading-relaxed text-neutral-400 pt-2 md:mb-10">
      {features.map((feature, index) => (
        <FeatureItem
          key={`feature-${index}`}
          iconUrl={feature.iconUrl}
          text={feature.text}
        />
      ))}
    </section>
  );
};

export default FeatureList;
