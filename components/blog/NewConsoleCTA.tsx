import { trackEvent } from "lib/posthog";
import CustomButton from "components/elements/CustomButton";

export const NewConsoleCTA = () => {
  return (
    <div className="w-full mx-auto px-16 py-14 rounded-3xl bg-gradient-to-br from-[#13292C] via-[#1a3a3e] to-[#0d1f21] border border-white/10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 justify-center items-center mt-16 mb-8">
      <div className="space-y-4">
        <h2 className="text-white text-3xl lg:text-[40px] font-bold font-gradual leading-tight">
          Experience the New Shuttle Console
        </h2>
        <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
          See the redesigned console in action. Discover features faster, manage projects at scale, and deploy with confidence.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:justify-start">
        <CustomButton
          className="w-full sm:w-[180px] lg:w-full h-[56px] justify-center"
          variant="primary"
          invertOnDark
          href="https://console.shuttle.dev/login"
          onClick={() => {
            trackEvent("blog_new_console_cta_explore");
          }}
        >
          Explore Console
        </CustomButton>
        <CustomButton
          className="w-full sm:w-[180px] lg:w-full h-[56px] justify-center"
          variant="secondary"
          invertOnDark
          href="https://console.shuttle.dev/signup"
          onClick={() => {
            trackEvent("blog_new_console_cta_get_started");
          }}
        >
          Get Started
        </CustomButton>
      </div>
    </div>
  );
};