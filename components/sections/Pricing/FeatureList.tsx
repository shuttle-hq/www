"use client";
import * as React from "react";
import { FeatureItem } from "./FeatureItem";

const features = [
  {
    iconUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4060918e5ff97e8bfc2661a8f6ec4837947e11979314e5925476bb010323439b?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
    text: "Production Ready",
  },
  {
    iconUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4060918e5ff97e8bfc2661a8f6ec4837947e11979314e5925476bb010323439b?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
    text: "Rust Native",
  },
];

export const FeatureList: React.FC = () => {
  return (
    <section className="flex gap-8 md:mb-10 justify-center items-center text-xl tracking-wide leading-relaxed text-neutral-400">
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
