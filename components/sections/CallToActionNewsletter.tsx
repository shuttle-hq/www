import { trackEvent } from "lib/posthog";
import Image from "next/image";

interface CallToActionProps {
  subtext?: string;
  bg?: boolean;
}

const CallToActionNewsletter = ({ subtext, bg }: CallToActionProps) => {
  const subtext_ =
    subtext || "Get the latest news about Shuttle features and Rust tips";

  return (
    <div className="relative w-full overflow-hidden rounded-[2rem] bg-[#0F0F0F] p-4 md:p-6">
      {bg ? (
        <div>
          <Image
            src="/images/sections/powered-by/bg.png"
            alt=""
            fill
            className="pointer-events-none absolute left-0 top-0 z-0 select-none"
          />
          <Image
            src="/images/sections/powered-by/stars.png"
            alt=""
            fill
            className="pointer-events-none absolute bottom-0 left-20 z-0 select-none"
          />
        </div>
      ) : null}

      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-xl bg-[#503A23] shrink-0">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6.5h16v11H4v-11Zm0 0 8 6 8-6"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.95"
              />
            </svg>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold leading-6">
              Stay updated
            </h3>
            <p className="mt-1 text-sm text-secondary">{subtext_}</p>
          </div>
        </div>

        {/* Right: form */}
        <form
          action="https://buttondown.com/api/emails/embed-subscribe/shuttledev"
          method="post"
          target="popupwindow"
          onSubmit={(e) => {
            window.open("https://buttondown.com/shuttledev", "popupwindow");
            trackEvent("homepage_newsletter_subscribe");
          }}
          className="flex w-full items-center gap-3 md:w-auto"
        >
          <input
            type="email"
            name="email"
            id="bd-email"
            placeholder="Your email"
            required
            className="h-[40px] w-full flex-1 rounded-xl border border-white/15 bg-transparent px-4 text-white placeholder:text-grey100 outline-none focus:ring-2 focus:ring-white/20 md:min-w-[278px]"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-[#E3E3E3] px-4 py-2 text-sm font-medium text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallToActionNewsletter;
