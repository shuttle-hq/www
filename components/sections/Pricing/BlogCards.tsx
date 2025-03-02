"use client";

import * as React from "react";

export default function BlogCards() {
  return (
    <section className="flex flex-wrap gap-5 leading-8 max-w-[1280px] m-auto">
      <article
        className={`flex flex-col flex-1 shrink justify-center p-8 bg-black border border-solid basis-0 border-slate-600 border-opacity-30 min-w-60 rounded-[32px] max-md:px-5 min-h-[266px]`}
      >
        <div className="w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f990bf86a2395c9bbffb676fbf2525e2e9cd3db1ea14e307406e3e2ef339f0d?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879"
            alt="Blog post illustration"
            className="object-contain bg-blend-lighten aspect-square w-[38px]"
          />
          <div className="mt-4 w-full">
            <h2 className="text-2xl text-zinc-300">
              Our team required a streamlined solution for deploying a
              Rust-based.
            </h2>
            <a
              href="#"
              className="mt-1 text-base tracking-normal text-neutral-400 inline-block"
            >
              <span className="underline hover:no-underline">Read story</span>
            </a>
          </div>
        </div>
      </article>
      <article
        className={`flex flex-col flex-1 shrink justify-center p-8 bg-black border border-solid basis-0 border-slate-600 border-opacity-30 min-w-60 rounded-[32px] max-md:px-5 min-h-[266px]`}
      >
        <div className="w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/821165cd454542b38019898477b349e6c2718bf618b7b8131e53b91b50e82d6b?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879"
            alt="Blog post illustration"
            className="object-contain bg-blend-lighten aspect-square w-[38px]"
          />
          <div className="mt-4 w-full">
            <h2 className="text-2xl text-zinc-300">
              Luminar provides LiDar tech, while Shuttle helps them deploy
              rapidly.
            </h2>
            <a
              href="#"
              className="mt-1 text-base tracking-normal text-neutral-400 inline-block"
            >
              <span className="underline hover:no-underline">Read story</span>
            </a>
          </div>
        </div>
      </article>
      <article
        className={`flex flex-col flex-1 shrink justify-center p-8 bg-black border border-solid basis-0 border-slate-600 border-opacity-30 min-w-60 rounded-[32px] max-md:px-5 min-h-[266px]`}
      >
        <div className="w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/821165cd454542b38019898477b349e6c2718bf618b7b8131e53b91b50e82d6b?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879"
            alt="Blog post illustration"
            className="object-contain bg-blend-lighten aspect-square w-[38px]"
          />
          <div className="mt-4 w-full">
            <h2 className="text-2xl text-zinc-300">
              Luminar provides LiDar tech, while Shuttle helps them deploy
              rapidly.
            </h2>
            <a
              href="#"
              className="mt-1 text-base tracking-normal text-neutral-400 inline-block"
            >
              <span className="underline hover:no-underline">Read story</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
