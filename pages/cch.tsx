import { Page } from "components/templates";
import { trackEvent } from "lib/posthog";
import {
  initTwitter,
  sendTwitterConversion,
  shuttleCchPageview,
} from "lib/useTwitter";
import Image from "next/image";
import Link from "components/elements/Link";
import { ReactNode } from "react";
import React from "react";
import { NextSeo } from "next-seo";

export default function CCHPage() {
  React.useEffect(() => {
    initTwitter();
    sendTwitterConversion(shuttleCchPageview);
  }, []);

  return (
    <>
      <NextSeo
        title="Christmas Code Hunt | Shuttle"
        description="Learn about Shuttle's Christmas Code Hunt."
        openGraph={{
          images: [
            {
              url: "https://www.shuttle.dev/images/og-image.png",
              width: 3516,
              height: 1432,
              alt: "Learn about Shuttle's Christmas Code Hunt.",
            },
          ],
        }}
      />
      <section className="mx-auto mb-10 w-full max-w-5xl px-4 py-12 font-mono font-normal text-head">
        <div className="mx-auto mb-8 flex max-w-[786px] flex-col items-end">
          <h1 className="text-center text-[50px]">
            <span className="relative">
              <Image
                src="/images/cch/santa-hat.png"
                alt=""
                width={80}
                height={60}
                className="z-1 absolute left-[-28px] top-0 ml-auto mr-auto max-w-5xl"
              />
              C
            </span>
            hristmas Code Hunt 2024
          </h1>

          <p className="flex items-center gap-2 self-end text-base text-body">
            powered by
            <Link href="/">
              <Image
                src="/images/cch/logo.svg"
                alt=""
                width={115}
                height={37}
              />
            </Link>
          </p>
        </div>

        <div className="mb-8 flex flex-col text-base">
          <p className="mt-8 font-bold">
            <span className="text-orange">&gt;</span> what
          </p>
          <p>
            Shuttle&apos;s Christmas Code Hunt, (inspired by Advent of Code),
            invites you to solve challenges using Rust in a fun and relaxed
            environment. In each challenge, you&apos;ll implement HTTP endpoints
            that respond with the challenge&apos;s solution. It is a great way
            to get started with Rust and Shuttle!
          </p>

          <p className="mt-8 font-bold">
            <span className="text-[#F09050]">&gt;</span> why
          </p>
          <p>
            Participating gives you get the chance to improve your Rust skills,
            build new friendships with like minded Rustaceans and enjoy the run
            up to the holidays!
          </p>

          <p className="mt-8 font-bold">
            <span className="text-[#F09050]">&gt;</span> when
          </p>
          <p>
            The first challenge will be released on December 2nd, 2024 at 12:00
            UTC. A total of 7 challenges will be released throughout the month
            of December.
          </p>

          <p className="mt-8 font-bold">
            <span className="text-[#F09050]">&gt;</span> prizes
          </p>
          <p>
            Completion of all 7 challenges by December 31st, 2024 at 23:59 UTC
            will make you eligible for the prize pool, so no need to rush. More
            details coming soon!
          </p>

          <p className="mt-8 font-bold">
            <span className="text-orange">&gt;</span> where
          </p>
          <p>
            You can access the challenge by logging in to the{" "}
            <Link
              href="https://console.shuttle.dev/shuttlings/cch24"
              target="_blank"
              className="text-orange"
              eventName="cch_go_to_console"
            >
              Shuttle Console
            </Link>
            !
          </p>

          {/* <Link
					href='https://shuttlerust.typeform.com/cch2024'
					target='_blank'
					className='mt-16 rounded border p-6 text-center text-xl font-bold text-[#F09050]'
					onClick={() => {
						trackEvent('cch_sign_up');
					}}
				>
					Click here to sign up
				</Link> */}
        </div>
      </section>
    </>
  );
}

CCHPage.getLayout = (children: ReactNode) => (
  <Page disableFooter disableHeader>
    {children}
  </Page>
);
