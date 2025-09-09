"use client";

import { trackEvent } from "lib/posthog";
import Button from "components/elements/Button";
import { Database } from "lucide-react";
import Image from "next/image";

interface CTAProps {
  className?: string;
}

export function DatabaseCTA({ className = "" }: CTAProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#FC540C]/20 via-[rgba(255,215,111,0.15)] to-[#38D4E9]/20 hover:from-[#FC540C]/25 hover:via-[rgba(255,215,111,0.18)] hover:to-[#38D4E9]/25 backdrop-blur-sm border border-[#FC540C]/30 hover:border-[#FC540C]/40 transition-colors duration-500 p-6 my-6 ${className}`}
    >
      <span className="pointer-events-none">
        <Image
          src="/images/sections/call-to-action/bg-m.png"
          alt="background"
          className="absolute left-0 top-0 -z-10 aspect-[2/3] h-full w-full object-cover md:aspect-auto xl:hidden"
          width={374}
          height={570}
        />
        <Image
          src="/images/sections/call-to-action/bg.png"
          alt="background"
          className="absolute left-0 top-0 -z-10 hidden aspect-[2/3] h-full w-full object-cover md:aspect-auto xl:block"
          width={1184}
          height={560}
        />
      </span>
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gradient-to-br from-[#FC540C] to-[#38D4E9] rounded-xl">
          <Database className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="text-white font-semibold text-lg">Need a Database?</h4>
          <p className="text-gray-400 mb-3">
            Get a production-ready database with one annotation
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-black text-white rounded text-xs">
              PostgreSQL
            </span>
            <span className="px-2 py-1 bg-black text-white rounded text-xs">
              MongoDB
            </span>
            <span className="px-2 py-1 bg-black text-white rounded text-xs">
              Redis
            </span>
          </div>
        </div>
        <Button
          variant="primary"
          href="https://console.shuttle.dev"
          className="px-4 py-2 text-lg"
          onClick={() => {
            trackEvent("blog_database_cta");
          }}
        >
          Add Database
        </Button>
      </div>
    </div>
  );
}
