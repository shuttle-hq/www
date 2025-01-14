import { trackEvent } from "lib/posthog";
import Image from "next/image";
import { FC } from "react";

interface WaitListProps {
  cta: string;
  description: string;
  subDescription?: string;
}

export const Waitlist: FC<WaitListProps> = ({
  cta,
  description,
  subDescription,
}) => {
  return (
    <section className="relative mx-auto mb-20 mt-24 flex w-full max-w-6xl flex-col items-center rounded-b-4xl px-5 pb-10 sm:px-10 md:mb-80 md:pb-48 lg:mt-28">
      <Image
        src="/images/sections/batch/bg-batch.jpg"
        alt="background"
        fill
        className="absolute left-0 top-0 -z-10 hidden h-full w-full rounded-b-[32px] md:block"
      />
      <h2 className="text-gradient mt-12 max-w-4xl bg-clip-text text-center font-gradual text-[56px] font-bold leading-[150%] text-head">
        {cta}
      </h2>
      <p className="mt-8 max-w-2xl text-center text-xl text-body">
        {description}
      </p>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/shuttle"
        method="post"
        target="popupwindow"
        className="embeddable-buttondown-form mt-16 text-center"
      >
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="mr-[18px] h-[56px] w-full rounded-xl border border-slate-700 bg-transparent px-[12px] py-[15px] text-xl font-normal text-head placeholder:text-head sm:w-[423px]"
        />
        <input type="hidden" value="1" name="embed" />
        <input
          type="submit"
          value="Subscribe"
          className="mt-4 h-[56px] w-full rounded-[14px] bg-[#D8D8D8] text-lg text-black sm:mt-0 sm:w-[154px]"
          onClick={() => {
            trackEvent("launchpad_subscribe");
          }}
        />
      </form>

      {subDescription && (
        <p className="mt-4 text-center text-xl text-body">{subDescription}</p>
      )}
    </section>
  );
};
