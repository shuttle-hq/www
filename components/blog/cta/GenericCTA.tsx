"use client";

import Button from "components/elements/Button";

interface TryItYourselfProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  href?: string;
  eventName?: string;
  className?: string;
}

export function GenericCTA({
  title = "Try it yourself",
  subtitle = "Get started with Shuttle in under 2 minutes",
  buttonText = "Quick Start",
  href = "https://console.shuttle.dev",
  eventName = "blog_try_it_yourself_cta",
  className = "",
}: TryItYourselfProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#FC540C]/20 via-[rgba(255,215,111,0.15)] to-[#38D4E9]/20 hover:from-[#FC540C]/25 hover:via-[rgba(255,215,111,0.18)] hover:to-[#38D4E9]/25 backdrop-blur-sm border border-[#FC540C]/30 hover:border-[#FC540C]/40 transition-colors duration-500 p-6 my-6 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-br from-[#FC540C] to-[#38D4E9] rounded-xl">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" />
            </svg>
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg">{title}</h4>
            <p className="text-gray-400 text-sm">{subtitle}</p>
          </div>
        </div>

        <Button
          variant="primary"
          href={href}
          className="px-4 py-2 text-lg"
          eventName={eventName}
        >
          {buttonText}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="ml-2"
          >
            <path
              d="M5 12h14m-7-7l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
