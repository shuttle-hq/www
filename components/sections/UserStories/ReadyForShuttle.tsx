import userStoriesStyles from "../../../pages/customers/UserStories.module.css";
import { trackEvent } from "lib/posthog";
import CustomButton from "components/elements/CustomButton";

export const ReadyForShuttle = () => {
  return (
    <div
      className={`w-full mx-auto px-6 md:px-16 py-8 md:py-14 rounded-3xl grid grid-cols-1 md:grid-cols-[2.25fr_1.25fr] gap-6 md:gap-8 justify-center ${userStoriesStyles["bg-wide"]}`}
    >
      <h2 className="text-neutral-200 text-2xl md:text-[40px] font-bold font-gradual leading-tight md:leading-[48px]">
        Ready to eliminate infrastructure complexity for your Rust project?
      </h2>
      <div className="self-center justify-center flex flex-col md:flex-row gap-3 md:gap-2">
        <CustomButton
          className="w-full md:w-[160px] h-[56px] justify-center"
          variant="primary"
          invertOnDark
          href="https://console.shuttle.dev/signup"
          onClick={() => {
            trackEvent("case_study_ready_hero_signup");
          }}
        >
          Start Building
        </CustomButton>
        <CustomButton
          className="w-full md:w-[160px] h-[56px] justify-center"
          variant="secondary"
          invertOnDark
          href="/docs"
          onClick={() => {
            trackEvent("case_study_ready_hero_learn_more");
          }}
        >
          Learn more
        </CustomButton>
      </div>
    </div>
  );
};
