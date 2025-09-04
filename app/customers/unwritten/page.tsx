import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { TechnicalImplementationSection } from "../../../components/sections/UserStories/TechnicalImplementationSection";
import { ReadyForShuttle } from "components/sections/UserStories/ReadyForShuttle";
import { UserQuote } from "components/sections/UserStories/UserQuote";

import userStoriesStyles from "../../../pages/customers/UserStories.module.css";

export const metadata: Metadata = {
  title: "Customers | Unwritten",
  description: "How Unwritten powers large-scale data processing with zero infrastructure overhead",
  openGraph: {
    images: [
      {
        url: "https://www.shuttle.dev/images/user-stories/unwritten-og-image.png",
        width: 2400,
        height: 1350,
        alt: "Shuttle x Unwritten: Powering large-scale data processing with zero infrastructure overhead",
      },
    ],
  },
};

export default function Unwritten() {
  return (
    <main className="flex flex-col mx-auto mt-24 gap-16 w-full max-w-[1280px] px-5 sm:px-10 lg:mt-28 items-center">
      <div className="inline-flex flex-col justify-start items-start gap-28">
        <div className="w-full flex flex-col justify-start items-start gap-10">
          <div className="w-full max-w-[782px] mx-auto border-red self-stretch flex flex-col justify-start items-start gap-6">
            <Image
              src="/images/user-stories/unwritten.png"
              alt="Unwritten logo"
              width={140}
              height={22}
            />
            <h2 className="self-stretch justify-start text-neutral-200 text-5xl font-bold font-gradual leading-[57.60px]">
              How Unwritten powers large-scale data processing with zero
              infrastructure overhead
            </h2>
            <p className="self-stretch justify-start text-text-secondary text-xl font-normal">
              Using Shuttle&apos;s Rust deployment platform to accelerate
              large-scale data processing without infrastructure complexity
            </p>
          </div>
          <div className="w-full max-w-[984px] self-stretch flex flex-col justify-start items-start my-24">
            <ul className="grid grid-cols-3 rounded-[20px] gap-6">
              <li
                className={`self-stretch p-10 flex flex-col justify-start items-start gap-2 rounded-[20px] ${userStoriesStyles["bg-tile-1"]}`}
              >
                <div className="self-stretch text-neutral-200 text-5xl font-bold font-gradual leading-[57.60px]">
                  10TB+
                </div>
                <div className="self-stretch text-zinc-300 text-base font-normal leading-normal">
                  Daily data processing volume
                </div>
              </li>
              <li
                className={`self-stretch p-10 flex flex-col justify-start items-start gap-2 rounded-[20px] ${userStoriesStyles["bg-tile-2"]}`}
              >
                <div className="self-stretch text-neutral-200 text-5xl font-bold font-gradual leading-[57.60px]">
                  90%
                </div>
                <div className="self-stretch text-zinc-300 text-base font-normal leading-normal">
                  Reduction in deployment time
                </div>
              </li>
              <li
                className={`self-stretch p-10 flex flex-col justify-start items-start gap-2 rounded-[20px] ${userStoriesStyles["bg-tile-3"]}`}
              >
                <div className="self-stretch text-neutral-200 text-5xl font-bold font-gradual leading-[57.60px]">
                  Zero
                </div>
                <div className="self-stretch text-zinc-300 text-base font-normal leading-normal">
                  Infrastructure management overhead
                </div>
              </li>
            </ul>
          </div>
        </div>

        <UserQuote>
          <div className="flex flex-col items-center gap-8">
            <p className="text-2xl text-center text-white font-normal leading-relaxed">
              &ldquo;What took days to weeks to set up with traditional infrastructure now takes minutes with Shuttle. It&apos;s like Vercel for backend&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/images/user-stories/phillip-marks.png"
                alt="Phillip Marks"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="text-white font-semibold">Phillip Marks</p>
                <p className="text-gray-300">CRO & CTO, Unwritten</p>
              </div>
            </div>
          </div>
        </UserQuote>

        <div className="w-full max-w-[984px] self-stretch flex flex-col justify-start items-start gap-12">
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <h3 className="self-stretch text-neutral-200 text-4xl font-bold font-gradual leading-[43.20px]">
              The Challenge
            </h3>
            <p className="self-stretch text-zinc-300 text-xl font-normal leading-8">
              Unwritten needed to process massive volumes of climate data daily while maintaining high performance and reliability. Traditional infrastructure required significant DevOps overhead and complex deployment pipelines that slowed down their development cycle.
            </p>
          </div>

          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <h3 className="self-stretch text-neutral-200 text-4xl font-bold font-gradual leading-[43.20px]">
              The Solution
            </h3>
            <p className="self-stretch text-zinc-300 text-xl font-normal leading-8">
              By adopting Shuttle&apos;s Rust-native deployment platform, Unwritten eliminated infrastructure complexity while maintaining the performance benefits of Rust. The team can now focus entirely on their core business logic instead of managing deployment pipelines and infrastructure.
            </p>
          </div>
        </div>

        <TechnicalImplementationSection />

        <div className="w-full max-w-[984px] self-stretch flex flex-col justify-start items-start gap-12">
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <h3 className="self-stretch text-neutral-200 text-4xl font-bold font-gradual leading-[43.20px]">
              Results
            </h3>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <p className="self-stretch text-zinc-300 text-xl font-normal leading-8">
                • <strong>90% reduction</strong> in deployment time from hours to minutes
              </p>
              <p className="self-stretch text-zinc-300 text-xl font-normal leading-8">
                • <strong>Zero infrastructure overhead</strong> allowing the team to focus on core features
              </p>
              <p className="self-stretch text-zinc-300 text-xl font-normal leading-8">
                • <strong>Seamless scaling</strong> to handle 10TB+ of daily data processing
              </p>
              <p className="self-stretch text-zinc-300 text-xl font-normal leading-8">
                • <strong>Improved developer experience</strong> with simplified deployment workflows
              </p>
            </div>
          </div>
        </div>

        <ReadyForShuttle />
      </div>
    </main>
  );
}