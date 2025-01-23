import { Button } from "components/elements";
import { trackEvent } from "lib/posthog";
import Image from "next/image";

interface CallToActionProps {
  subtext?: string;
  bg: boolean;
}

const CallToActionNewsletter = ({ subtext, bg }: CallToActionProps) => {
  const subtext_ =
    subtext ||
    "Join the movement and help revolutionize the world of backend development. Together, we can create the future!";
  return (
    <div className="relative mt-11 flex w-full flex-col overflow-hidden rounded-[2rem] bg-[#13292C] p-8 dark:bg-black">
      {bg == true ? (
        <div>
          <Image
            src="/images/sections/powered-by/bg.png"
            alt=""
            fill
            className="absolute left-0 top-0 z-10"
          />
          <Image
            src="/images/sections/powered-by/stars.png"
            alt=""
            fill
            className="absolute bottom-0 left-20 z-10"
          />
        </div>
      ) : (
        <div></div>
      )}

      <div className="max-w-2xl bg-[#13292C] p-8 dark:bg-transparent">
        <h2 className="text-white  text-2xl font-bold  lg:text-3xl z-10">
          Get Shuttle blog posts in your inbox
        </h2>
        <span className="relative z-10 mt-2 block text-body/80">
          We'll send you complete blog posts via email - tutorials, guides,
          collaborations, and product updates delivered straight to your inbox.
        </span>
        <form
          action="https://buttondown.com/api/emails/embed-subscribe/shuttledev"
          method="post"
          target="popupwindow"
          onSubmit={(e) => {
            window.open("https://buttondown.com/shuttledev", "popupwindow");
            trackEvent("homepage_newsletter_subscribe");
          }}
          className="mt-6 flex flex-col gap-4 md:flex-row md:items-end"
        >
          <div className="flex flex-col gap-2">
            <input
              type="email"
              name="email"
              id="bd-email"
              placeholder="you@example.com"
              className="w-72 rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus-visible:ring-2 focus-visible:ring-white z-10"
            />
          </div>
          <Button variant="primary" type="submit">
            <span className="relative z-10">Subscribe →</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CallToActionNewsletter;
