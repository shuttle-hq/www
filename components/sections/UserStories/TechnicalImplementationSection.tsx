import { useState } from "react";

const accordionItems = [
  {
    title: "Shuttle",
    content: "for deployment and infrastructure management",
  },
  {
    title: "Axum",
    content: "for type-safe REST API endpoints",
  },
  {
    title: "MongoDB",
    content: "for database",
  },
  {
    title: "Polars",
    content: "for high-performance data transformations",
  },
  {
    title: "Dagster",
    content: "for data orchestration and ETL workflows",
  },
  {
    title: "Databricks",
    content: "for heavy computational workloads",
  },
  {
    title: "PropelAuth",
    content: "for authentication",
  },
  {
    title: "Better Stack",
    content: "for monitoring and observability",
  },
  {
    title: "GitHub Actions",
    content: "for CI/CD automation",
  },
];

export const TechnicalImplementationSection = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-6">
      <h2 className="self-stretch justify-start text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
        Technical Implementation
      </h2>
      <div className="w-full flex flex-col justify-start items-start gap-6">
        <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
          Unwritten leverages Shuttle&apos;s ecosystem for their data processing
          platform:
        </p>
        <ul className="w-full flex flex-col gap-4">
          {accordionItems.map((item, idx) => (
            <li
              key={item.title}
              className={`w-full py-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 border-b border-white/20 ${idx === accordionItems.length - 1 ? "" : ""}`}
            >
              <span className="text-xl bg-gradient-3 bg-clip-text text-transparent mr-4">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="text-neutral-200 text-xl font-bold">
                {item.title}
              </span>
              <span className="text-neutral-200 text-xl font-normal">
                {item.content}
              </span>
            </li>
          ))}
        </ul>
        <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
          The combination provides stability and type safety paramount for data
          calculations where accuracy is critical. The team values Rust&apos;s
          compile-time guarantees and type safety as essential safeguards for
          their data pipelines, ensuring production-grade reliability standards.
        </p>
      </div>
    </div>
  );
};
