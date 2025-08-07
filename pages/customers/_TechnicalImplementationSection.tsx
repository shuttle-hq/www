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

export function TechnicalImplementationSection() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="w-full flex flex-col justify-start items-start gap-6">
      <button
        className="self-stretch flex items-center gap-3 rounded-xl transition text-left"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
      >
        <span className="text-neutral-200 text-[40px] font-bold font-gradual leading-[48px] flex-1">
          Technical Implementation
        </span>
        <span
          className={`transition-transform duration-200 text-zinc-400 text-xl font-normal flex items-center ${expanded ? "rotate-90" : "rotate-0"}`}
          style={{ display: "inline-flex" }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 13L16 19L22 13"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {expanded && (
        <div className="w-full flex flex-col justify-start items-start gap-6">
          <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
            Unwritten leverages Shuttle&apos;s ecosystem for their data
            processing platform:
          </p>
          <ul className="w-full flex flex-col gap-4">
            {accordionItems.map((item, idx) => (
              <li
                key={item.title}
                className={`w-full px-2 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-white/20 ${idx === accordionItems.length - 1 ? "" : ""}`}
              >
                <span className="text-neutral-200 text-2xl font-bold min-w-[120px]">
                  {item.title}
                </span>
                <span className="text-zinc-400 text-xl font-normal">
                  {item.content}
                </span>
              </li>
            ))}
          </ul>
          <p className="self-stretch justify-start text-zinc-400 text-xl font-normal">
            The combination provides stability and type safety paramount for
            data calculations where accuracy is critical. The team values
            Rust&apos;s compile-time guarantees and type safety as essential
            safeguards for their data pipelines, ensuring production-grade
            reliability standards.
          </p>
        </div>
      )}
    </div>
  );
}
