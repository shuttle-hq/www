"use client";

import * as React from "react";
import Image from "next/image";

export default function BlogCards() {
  return (
    <section className="flex flex-wrap flex-col gap-5 leading-8 max-w-[1280px] m-auto md:flex-row mb-48">
      <article
        className={`relative flex flex-col flex-1 shrink justify-center overflow-hidden p-8 border border-solid border-white border-opacity-30 rounded-[32px] md:w-1/3`}
      >
        <div className="w-full">
          <Image
            src="/images/pages/pricing/sections/chooseUs/web3.png"
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
            <p className="text-base leading-8 text-grey100">WeaveVM - Web3</p>
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
        className={`relative flex flex-col flex-1 shrink justify-center overflow-hidden p-8 border border-solid border-white border-opacity-30 rounded-[32px] md:w-1/3`}
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
        className={`relative flex flex-col flex-1 shrink justify-center overflow-hidden p-8 border border-solid border-white border-opacity-30 rounded-[32px] md:w-1/3`}
      >
        <div className="w-full">
          <Image
            src="/images/pages/pricing/sections/chooseUs/else.png"
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
            <p className="text-base leading-8 text-grey100">Something - Else</p>
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
