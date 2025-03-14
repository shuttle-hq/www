"use client";

import * as React from "react";
import Image from "next/image";

export default function BlogCards() {
  return (
    <section className="flex flex-wrap flex-col gap-5 leading-8 max-w-[1280px] m-auto md:flex-row mb-24 md:mb-48">
      <article
        className={`relative flex flex-col flex-1 shrink justify-top overflow-hidden p-8 border border-solid border-white border-opacity-30 rounded-[32px] md:w-1/3`}
      >
        <div className="w-full">
          <Image
            src="/images/pages/pricing/sections/chooseUs/web3.png"
            alt="background"
            fill
            className="absolute left-0 top-0 -z-10 w-full"
          />

          <Image
            src="/images/pages/pricing/sections/chooseUs/layers.png"
            alt="Blog post illustration"
            width={38}
            height={38}
            className="mt-1"
          />
          <div className="mt-5 w-full">
            <p className="text-base leading-8 text-grey100">
              Decent.Land - Web3
            </p>
            <h2 className="text-2xl text-zinc-300">
              Shuttle eliminated the need for code refactoring or complex
              infrastructure management.
            </h2>
            <a
              href="https://www.shuttle.dev/blog/2025/01/17/shuttle-web3-weavevm"
              target="_blank"
              className="mt-1 text-base tracking-normal text-neutral-400 inline-block"
            >
              <span className="underline hover:no-underline">Read story</span>
            </a>
          </div>
        </div>
      </article>
      <article
        className={`relative flex flex-col flex-1 shrink justify-top overflow-hidden p-8 border border-solid border-white border-opacity-30 rounded-[32px] md:w-1/3`}
      >
        <div className="w-full">
          <Image
            src="/images/pages/pricing/sections/chooseUs/lidar.png"
            alt="background"
            fill
            className="absolute left-0 top-0 -z-10 w-full"
          />
          <Image
            src="/images/pages/pricing/sections/chooseUs/cube.png"
            alt="Blog post illustration"
            width={38}
            height={38}
          />
          <div className="mt-4 w-full">
            <p className="text-base leading-8 text-grey100">Luminar - Lidar</p>
            <h2 className="text-2xl text-zinc-300">
              Shuttle allows us to rapidly deploy tools and services with low
              cost and excellent reliability.
            </h2>
          </div>
        </div>
      </article>
      <article
        className={`relative flex flex-col flex-1 shrink justify-top overflow-hidden p-8 border border-solid border-white border-opacity-30 rounded-[32px] md:w-1/3`}
      >
        <div className="w-full">
          <Image
            src="/images/pages/pricing/sections/chooseUs/else.png"
            alt="background"
            fill
            className="absolute left-0 top-0 -z-10 w-full"
          />
          <Image
            src="/images/pages/pricing/sections/chooseUs/web3Icon.png"
            alt="Blog post illustration"
            width={38}
            height={38}
          />
          <div className="mt-4 w-full">
            <p className="text-base leading-8 text-grey100">
              SL8.online - Blockchain
            </p>
            <h2 className="text-2xl text-zinc-300">
              Shuttle transformed our deployment process for Rust applications.
            </h2>
          </div>
        </div>
      </article>
    </section>
  );
}
