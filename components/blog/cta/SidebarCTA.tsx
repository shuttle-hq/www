"use client";

import { trackEvent } from "lib/posthog";
import Link from "next/link";

export function SidebarCTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#FC540C]/30 bg-gradient-to-br from-[#FC540C]/10 via-[rgba(255,215,111,0.08)] to-[#38D4E9]/10 p-6">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#FC540C]/20 blur-3xl" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#38D4E9]/20 blur-3xl" />

      <div className="relative space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#FC540C]/20 px-3 py-1 text-xs font-medium text-[#FC540C]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FC540C]" />
          Ship Faster
        </div>

        <h3 className="text-xl font-bold leading-tight text-white">
          Deploy Rust in seconds, not hours
        </h3>

        <p className="text-sm leading-relaxed text-gray-400">
          Zero config. No Dockerfiles. Just write Rust and ship.
        </p>

        <Link
          href="https://console.shuttle.dev/templates?utm_source=blog&utm_medium=sidebar&utm_campaign=blog_cta_sidebar"
          onClick={() => trackEvent("blog_cta_sidebar")}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FC540C] to-[#FFD76F] px-4 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#FC540C]/25"
        >
          Start Building
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
