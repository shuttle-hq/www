"use client";

import { trackEvent } from "lib/posthog";
import { CTAButton } from "./CTAButton";

interface ShellConCTAProps {
  className?: string;
}

export function ShellConCTA({ className = "" }: ShellConCTAProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] border border-[#30363d] my-8 ${className}`}
    >
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FC540C]/20 via-[#FFD76F]/20 to-[#38D4E9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6 sm:p-8">
        {/* Header with icon */}
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-gradient-to-br from-[#FC540C] to-[#FFD76F] rounded-xl flex-shrink-0">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="text-black"
            >
              <path
                d="M4 17L10 11L4 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div>
            <span className="inline-block px-2 py-0.5 text-xs font-medium bg-[#FC540C]/20 text-[#FC540C] rounded-full mb-2">
              Challenge
            </span>
            <h4 className="text-white font-bold text-xl sm:text-2xl leading-tight m-0">
              Ready to test your Rust skills?
            </h4>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg mb-5 leading-relaxed">
          We&apos;ve built <strong className="text-white">ShellCon</strong>, a
          real-world Rust microservices challenge where you debug and deploy 3
          broken services to make the frontend work.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="text-[#FC540C]">🐛</span>
            <span>Axum + SQLx + async</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="text-[#FFD76F]">🔗</span>
            <span>3 connected services</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="text-[#38D4E9]">🚀</span>
            <span>Deploy with Shuttle</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <CTAButton
            href="https://github.com/shuttle-hq/shuttle-shellcon"
            onClick={() => trackEvent("blog_cta_shellcon")}
            className="!bg-gradient-to-r !from-[#FC540C] !to-[#FFD76F] !text-black font-semibold !px-6 !py-3"
          >
            Start the Challenge →
          </CTAButton>
          <span className="text-sm text-gray-500">
            Perfect for Rust devs who learn by doing
          </span>
        </div>
      </div>
    </div>
  );
}
